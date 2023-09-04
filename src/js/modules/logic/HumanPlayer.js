import Player from "./Player";

const HumanPlayer = () => {
  const mPlayer = Player("Human");

  // Enemy board should have receiveAttack and getHitsBoard
  // returns the status of the hit (hit/miss/ERROR)
  mPlayer.makeMove = (enemyBoard, coordination) =>
    enemyBoard.recieveAttack(coordination);

  // TODO: add errors handling
  const mPlaceArrayOfShips = (shipsLocations, shipSize) => {
    let isArrangementLegal = true;
    shipsLocations.forEach((shipLocation) => {
      if (shipSize > 1) {
        isArrangementLegal = mPlayer
          .getBoard()
          .placeShip(shipLocation[0], shipSize, shipLocation[1]);
      } else {
        isArrangementLegal = mPlayer
          .getBoard()
          .placeShip(shipLocation[0], shipSize);
      }
    });
    return isArrangementLegal;
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
    fourTileLocations,
    threeTileLocations,
    twoTilesLocations,
    oneTileLocations,
    defaultArrangement = true,
  ) => {
    let isArrangementLegal = true;
    if (defaultArrangement) {
      isArrangementLegal = mPlayer
        .getBoard()
        .placeShip([3, 6], 4, "horizontal");
      isArrangementLegal = mPlayer.getBoard().placeShip([0, 0], 3, "vertical");
      isArrangementLegal = mPlayer
        .getBoard()
        .placeShip([2, 2], 3, "horizontal");
      isArrangementLegal = mPlayer
        .getBoard()
        .placeShip([0, 2], 2, "horizontal");
      isArrangementLegal = mPlayer.getBoard().placeShip([0, 7], 2, "vertical");
      isArrangementLegal = mPlayer
        .getBoard()
        .placeShip([5, 2], 2, "horizontal");
      isArrangementLegal = mPlayer.getBoard().placeShip([0, 5], 1);
      isArrangementLegal = mPlayer.getBoard().placeShip([4, 0], 1);
      isArrangementLegal = mPlayer.getBoard().placeShip([6, 0], 1);
      isArrangementLegal = mPlayer.getBoard().placeShip([8, 8], 1);
    } else {
      isArrangementLegal = mPlaceArrayOfShips(fourTileLocations, 4);
      isArrangementLegal = mPlaceArrayOfShips(threeTileLocations, 3);
      isArrangementLegal = mPlaceArrayOfShips(twoTilesLocations, 2);
      isArrangementLegal = mPlaceArrayOfShips(oneTileLocations, 1);
    }
    if (!isArrangementLegal) {
      mPlayer.getBoard().resetBoard();
      return false;
    }
    return true;
  };

  return mPlayer;
};

export default HumanPlayer;
