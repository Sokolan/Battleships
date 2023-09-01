import Player from "./Player";

const HumanPlayer = () => {
  const mPlayer = Player("Human");

  // Enemy board should have receiveAttack and getHitsBoard
  // returns the status of the hit (hit/miss/ERROR)
  mPlayer.makeMove = (enemyBoard, coordination) =>
    enemyBoard.recieveAttack(coordination);

  // TODO: add errors handling
  const mPlaceArrayOfShips = (shipsLocations, shipSize) => {
    shipsLocations.forEach((shipLocation) => {
      if(shipSize > 1){
        mPlayer.getBoard().placeShip(shipLocation[0], shipSize, shipLocation[1]);
      }
      else {
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
    fourTileLocations,
    threeTileLocations,
    twoTilesLocations,
    oneTileLocations,
    defaultArrangement = true,
  ) => {
    if (defaultArrangement) {
      console.log(mPlayer.getBoard().placeShip);
      mPlayer.getBoard().placeShip([3, 6], 4, "horizontal");
      mPlayer.getBoard().placeShip([0, 0], 3, "vertical");
      mPlayer.getBoard().placeShip([2, 2], 3, "horizontal");
      mPlayer.getBoard().placeShip([0, 2], 2, "horizontal");
      mPlayer.getBoard().placeShip([0, 7], 2, "vertical");
      mPlayer.getBoard().placeShip([5, 2], 2, "horizontal");
      mPlayer.getBoard().placeShip([0, 5], 1);
      mPlayer.getBoard().placeShip([4, 0], 1);
      mPlayer.getBoard().placeShip([6, 0], 1);
      mPlayer.getBoard().placeShip([8, 8], 1);
      return;
    }
    mPlaceArrayOfShips(fourTileLocations, 4);
    mPlaceArrayOfShips(threeTileLocations, 3);
    mPlaceArrayOfShips(twoTilesLocations, 2);
    mPlaceArrayOfShips(oneTileLocations, 1);
  };

  return mPlayer;
};

export default HumanPlayer;
