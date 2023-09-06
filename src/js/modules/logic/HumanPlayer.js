import Player from "./Player";

const HumanPlayer = () => {
  const mPlayer = Player("Human");

  // Enemy board should have receiveAttack and getHitsBoard
  // returns the status of the hit (hit/miss/ERROR)
  mPlayer.makeMove = (enemyBoard, coordination) =>
    enemyBoard.recieveAttack(coordination);

  const mPlaceArrayOfShips = (shipsLocations, shipSize) => {
    shipsLocations.forEach((shipLocation) => {
      if (shipSize > 1) {
        mPlayer
          .getBoard()
          .placeShip(shipLocation[0], shipSize, shipLocation[1]);
      } else {
        mPlayer.getBoard().placeShip(shipLocation[0], shipSize);
      }
    });
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
  // TODO: add errors handling
  mPlayer.placeShips = (
    fourTileLocations = [],
    threeTileLocations = [],
    twoTilesLocations = [],
    oneTileLocations = [],
    defaultArrangement = true,
  ) => {
    if (defaultArrangement) {
      fourTileLocations.push([[3, 6], "horizontal"]);
      threeTileLocations.push([[0, 0], "vertical"]);
      threeTileLocations.push([[2, 2], "horizontal"]);
      twoTilesLocations.push([[0, 2], "horizontal"]);
      twoTilesLocations.push([[0, 7], "vertical"]);
      twoTilesLocations.push([[5, 2], "horizontal"]);
      oneTileLocations.push([[0, 5]]);
      oneTileLocations.push([[4, 0]]);
      oneTileLocations.push([[6, 0]]);
      oneTileLocations.push([[8, 8]]);
    }
    if (!mPlayer
      .getBoard()
      .isPositioningLegal(
        fourTileLocations,
        threeTileLocations,
        twoTilesLocations,
        oneTileLocations,
      )) {
        return false;
      }
    mPlaceArrayOfShips(fourTileLocations, 4);
    mPlaceArrayOfShips(threeTileLocations, 3);
    mPlaceArrayOfShips(twoTilesLocations, 2);
    mPlaceArrayOfShips(oneTileLocations, 1);

    return true;
  };

  return mPlayer;
};

export default HumanPlayer;
