import Player from "./Player";

const AIPlayer = () => {
  const player = Player("AI");

  player.makeMove = (enemyBoard) => {};

  player.placeShips = (gameboard) => {};

  return player;
};

export default AIPlayer;