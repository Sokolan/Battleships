import Ship from "./Ship";

const Gameboard = () => {
  const mBoardSize = 10;
  const mShipsBoard = Array(mBoardSize)
    .fill(null)
    .map(() => Array(mBoardSize).fill(null));
  const mHitsBoard = Array(mBoardSize)
    .fill(null)
    .map(() => Array(mBoardSize).fill(""));

  /* returns a board with:
   * "o" - for tile that had ship which was hit
   * "x" - for tile that was hit and it has no ship
   * ""  - for tile that wasn't hit
   */
  const getHitsBoard = () => [...mHitsBoard];

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

  // returns boolean value depends on the success of the placing the ship
  const placeShip = (startCoordination, length, orientation) => {
    // Can't have negative size ship
    if (length <= 0) {
      return false;
    }
    // Check if coordination is in boundaries of the board
    if (
      startCoordination[0] < 0 ||
      startCoordination[0] >= mBoardSize ||
      startCoordination[1] < 0 ||
      startCoordination[1] >= mBoardSize
    ) {
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

    const ship = Ship();
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
   *   "EROR" - if the coordination is ilegal (out of scope, coordination already been hit)
   */
  const recieveAttack = (coordination) => {};

  // returns boolean with answer
  const allShipsSunk = () => {};

  return {
    getHitsBoard,
    placeShip,
    recieveAttack,
    allShipsSunk,
  };
};

export default Gameboard;
