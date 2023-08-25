import Player from "./Player";

const HumanPlayer = () => {
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

export default HumanPlayer;