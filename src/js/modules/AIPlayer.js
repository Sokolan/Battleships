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
    };
    return result;
  };

  // Enemy board should have placeShip
  /* default board:
  *  [3, ,2,2, ,1, ,2, , ]
  *  [3, , , , , , ,2, , ]
  *  [3, ,3,3,3, , , , , ]
  *  [ , , , , , ,4,4,4,4]
  *  [1, , , , , , , , , ]
  *  [ , ,2,2, , , , , , ]
  *  [1, , , , , , , , , ]
  *  [ , , , , , , , , , ]
  *  [ , , , , , , , ,1, ]
  *  [ , , , , , , , , , ]
  */

  player.placeShips = (gameboard, defaultArrangement = true) => {};

  return player;
};

export default AIPlayer;