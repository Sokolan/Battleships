import Player from "./Player";

const AIPlayer = () => {
  const player = Player("AI");

  // Enemy board should have receiveAttack and getHitsBoard
  player.makeMove = (enemyBoard) => {
    const board = enemyBoard.getHitsBoard();
    let legalMoveFound = false;
    let result;
    while (!legalMoveFound) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10); 
      if (board[x][y] === "") {
        legalMoveFound = true;
        result = enemyBoard.recieveAttack([x, y]);
      }
    };
    return result;
  };

  // Enemy board should have placeShip
  player.placeShips = (gameboard) => {};

  return player;
};

export default AIPlayer;