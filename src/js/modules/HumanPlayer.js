import Player from "./Player";

const HumanPlayer = () => {
  const player = Player("Human");

  // Enemy board should have receiveAttack and getHitsBoard
  player.makeMove = (enemyBoard, coordination) => {};

  // Enemy board should have placeShip
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