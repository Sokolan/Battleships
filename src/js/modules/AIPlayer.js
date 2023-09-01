import Player from "./Player";

const AIPlayer = () => {
  const mPlayer = Player("AI");

  // Enemy board should have receiveAttack and getHitsBoard
  mPlayer.makeMove = (enemyBoard) => {
    const board = enemyBoard.getHitsBoard();
    let legalMoveFound = false;
    let result;
    const boardSize = enemyBoard.getBoardSize();
    while (!legalMoveFound) {
      const x = Math.floor(Math.random() * boardSize);
      const y = Math.floor(Math.random() * boardSize);
      if (board[x][y] === "") {
        legalMoveFound = true;
        result = enemyBoard.recieveAttack([x, y]);
      }
    }
    return result;
  };

  // Enemy board should have placeShip
  /* default board:
   *     0 1 2 3 4 5 6 7 8 9
   *  0 [3, ,2,2, ,1, ,2, , ]
   *  1 [3, , , , , , ,2, , ]
   *  2 [3, ,3,3,3, , , , , ]
   *  3 [ , , , , , ,4,4,4,4]
   *  4 [1, , , , , , , , , ]
   *  5 [ , ,2,2, , , , , , ]
   *  6 [1, , , , , , , , , ]
   *  7 [ , , , , , , , , , ]
   *  8 [ , , , , , , , ,1, ]
   *  9 [ , , , , , , , , , ]
   */

  mPlayer.placeShips = (defaultArrangement = true) => {
    if (defaultArrangement) {
      mPlayer.getBoard().placeShip([0, 0], 3, "vertical");
      mPlayer.getBoard().placeShip([0, 2], 2, "horizontal");
      mPlayer.getBoard().placeShip([0, 5], 1);
      mPlayer.getBoard().placeShip([0, 7], 2, "vertical");
      mPlayer.getBoard().placeShip([2, 2], 3, "horizontal");
      mPlayer.getBoard().placeShip([3, 6], 4, "horizontal");
      mPlayer.getBoard().placeShip([4, 0], 1);
      mPlayer.getBoard().placeShip([5, 2], 2, "horizontal");
      mPlayer.getBoard().placeShip([6, 0], 1);
      mPlayer.getBoard().placeShip([8, 8], 1);
    }
  };

  return mPlayer;
};

export default AIPlayer;
