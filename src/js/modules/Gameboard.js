import Ship from "./Ship";

const Gameboard = () => {
  const mBoardSize = 10;
  const mShipsBoard = Array(mBoardSize)
    .fill(null)
    .map(() => Array(mBoardSize).fill(null));
  const mHitsBoard = Array(mBoardSize)
    .fill(null)
    .map(() => Array(mBoardSize).fill(""));

  const mCoordinateValid = (coordinate) => {
    if (
      coordinate[0] < 0 ||
      coordinate[1] < 0 ||
      coordinate[0] >= mBoardSize ||
      coordinate[1] >= mBoardSize
    ) {
      return false;
    }
    return true;
  };

  const mCheckForNoShips = (coordination, length, orientation) => {
    const fromX = coordination[0] - 1;
    const fromY = coordination[1] - 1;
    const toX = orientation === "vertical" ? fromX + length + 1 : fromX + 2;
    const toY = orientation === "horizontal" ? fromY + length + 1 : fromY + 2;

    for (let x = fromX; x <= toX; x += 1) {
      for (let y = fromY; y <= toY; y += 1) {
        if (
          x >= 0 &&
          y >= 0 &&
          x < mBoardSize &&
          y < mBoardSize &&
          mShipsBoard[x][y] !== null
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const mMarkSurroundingOfSunkShip = (coordinate) => {
    // We will find the start of the ship and determinate if it's horizontal or vertical
    let x = coordinate[0];
    let y = coordinate[1];
    let orientation;
    // Check if horizontal
    if (
      (mCoordinateValid([x, y + 1]) && mHitsBoard[x][y + 1] === "o") ||
      (mCoordinateValid([x, y - 1]) && mHitsBoard[x][y - 1] === "o")
    ) {
      orientation = "horizontal";
    } else {
      orientation = "vertical";
    }

    while (mCoordinateValid([x, y]) && mHitsBoard[x][y] === "o") {
      if (orientation === "horizontal") {
        y -= 1;
      } else {
        x -= 1;
      }
    }
    if (orientation === "horizontal") {
      while (
        (mCoordinateValid([x, y]) && mHitsBoard[x][y] === "o") ||
        (mCoordinateValid([x, y - 1]) && mHitsBoard[x][y - 1] === "o") ||
        (mCoordinateValid([x, y + 1]) && mHitsBoard[x][y + 1] === "o")
      ) {
        for (let i = -1; i <= 1; i += 1) {
          // Mark above and below, and if it's not ship tile then the outer wall too
          if (mCoordinateValid([x + i, y]) && mHitsBoard[x + i][y] !== "o") {
            mHitsBoard[x + i][y] = "x";
          }
        }
        y += 1;
      }
    } else {
      while (
        (mCoordinateValid([x, y]) && mHitsBoard[x][y] === "o") ||
        (mCoordinateValid([x - 1, y]) && mHitsBoard[x - 1][y] === "o") ||
        (mCoordinateValid([x + 1, y]) && mHitsBoard[x + 1][y] === "o")
      ) {
        for (let i = -1; i <= 1; i += 1) {
          // Mark above and below, and if it's not ship tile then the outer wall too
          if (mCoordinateValid([x, y + i]) && mHitsBoard[x][y + i] !== "o") {
            mHitsBoard[x][y + i] = "x";
          }
        }
        x += 1;
      }
    }
  };

  /* returns a board with:
   * "o" - for tile that had ship which was hit
   * "x" - for tile that was hit and it has no ship
   * ""  - for tile that wasn't hit
   */
  const getHitsBoard = () => [...mHitsBoard];

  // returns boolean value depends on the success of the placing the ship
  const placeShip = (startCoordination, length, orientation) => {
    // Can't have negative size ship
    if (length <= 0) {
      return false;
    }
    // Check if coordination is in boundaries of the board
    if (!mCoordinateValid(startCoordination)) {
      return false;
    }
    // Check if orientations is correct
    if (orientation !== "horizontal" && orientation !== "vertical") {
      return false;
    }

    // Check for neighbouring ships
    if (!mCheckForNoShips(startCoordination, length, orientation)) {
      return false;
    }
    const x = startCoordination[0];
    const y = startCoordination[1];

    const ship = Ship(length);
    for (let i = 0; i < length; i += 1) {
      if (orientation === "horizontal") {
        mShipsBoard[x][y + i] = ship;
      } else if (orientation === "vertical") {
        mShipsBoard[x + i][y] = ship;
      }
    }
    return true;
  };

  /*
   * returns:
   *   "hit"  - if there was a hit
   *   "miss" - if there wasn't a hit
   *   "ERROR" - if the coordination is ilegal (out of scope, coordination already been hit)
   */
  const recieveAttack = (coordination) => {
    if (!mCoordinateValid(coordination)) {
      return "ERROR";
    }
    const x = coordination[0];
    const y = coordination[1];

    if (mHitsBoard[x][y] === "o" || mHitsBoard[x][y] === "x") {
      return "ERROR";
    }

    if (mShipsBoard[x][y] === null) {
      mHitsBoard[x][y] = "x";
      return "miss";
    }

    // else we have a ship at [x][y] and that spot wasn't hit yet
    mHitsBoard[x][y] = "o";
    mShipsBoard[x][y].hit();

    // if ship was sank need to mark all surrounding as hit
    if (mShipsBoard[x][y].isSunk()) {
      mMarkSurroundingOfSunkShip(coordination);
    }
    return "hit";
  };

  // returns boolean with answer
  const allShipsSunk = () =>
    // Either it's non occupied square eighter the ship is sank
    mShipsBoard.every((row) => row.every((cell) => cell === null || cell.isSunk()));

  return {
    getHitsBoard,
    placeShip,
    recieveAttack,
    allShipsSunk,
  };
};

export default Gameboard;
