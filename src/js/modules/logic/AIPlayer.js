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

  const generateRandomPositions = (container, length) => {
    const orientations = ["vertical", "horizontal"];
    // 1 - 4 tiles, 2 - 3 tiles, 3 - 2 tiles, 4 - 1 tiles
    const numOfShips = 4 - length + 1;
    for (let i = 0; i < numOfShips; i += 1) {
      container[i][0] = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      if (length > 1) {
        container[i][1] = orientations[Math.floor(Math.random() * 2)];
      }
    }
  };

  mPlayer.placeShips = () => {
    mPlayer.getBoard().placeShipsInRandomPositions();
  };

  return mPlayer;
};

export default AIPlayer;
