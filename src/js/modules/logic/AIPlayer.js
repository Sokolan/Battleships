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

  mPlayer.placeShips = () => {
    mPlayer.getBoard().placeShipsInRandomPositions();
  };

  return mPlayer;
};

export default AIPlayer;
