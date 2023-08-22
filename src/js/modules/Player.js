import Gameboard from "./Gameboard";

const Player = (type) => {
  const mType = type;
  const mGameboard = Gameboard();

  const getType = () => {};

  const getBoard = () => {};

  return {
    getType,
    getBoard,
  };
};

export const AIPlayer = () => {
  const player = Player("AI");

  player.makeMove = (enemyBoard) => {};

  player.placeShips = (gameboard) => {};

  return player;
};

export const HumanPlayer = () => {
  const player = Player("Human");

  player.makeMove = (enemyBoard, coordination) => {};

  player.placeShips = (
    fourTileLocations,
    fourTileOrientations,
    threeTileLocations,
    threeTileOrientations,
    twoTilesLocations,
    twoTilesOrientations,
    oneTileLocations,
  ) => {};

  return player;
};
