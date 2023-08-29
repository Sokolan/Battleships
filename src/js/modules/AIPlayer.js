import Player from "./Player";

const AIPlayer = () => {
  const player = Player("AI");

  // Enemy board should have receiveAttack and getHitsBoard
  player.makeMove = (enemyBoard) => {
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

  player.placeShips = (gameboard, defaultArrangement = true) => {
    if (defaultArrangement) {
      gameboard.placeShip([0, 0], 3, "vertical");
      gameboard.placeShip([0, 2], 2, "horizontal");
      gameboard.placeShip([0, 5], 1);
      gameboard.placeShip([0, 7], 2, "vertical");
      gameboard.placeShip([2, 2], 3, "horizontal");
      gameboard.placeShip([3, 6], 4, "horizontal");
      gameboard.placeShip([4, 0], 1);
      gameboard.placeShip([5, 2], 2, "horizontal");
      gameboard.placeShip([6, 0], 1);
      gameboard.placeShip([8, 8], 1);
    }
  };

  return player;
};

export default AIPlayer;
