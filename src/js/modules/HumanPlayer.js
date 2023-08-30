import Player from "./Player";

const HumanPlayer = () => {
  const player = Player("Human");

  // Enemy board should have receiveAttack and getHitsBoard
  // returns the status of the hit (hit/miss/ERROR)
  player.makeMove = (enemyBoard, coordination) =>
    enemyBoard.recieveAttack(coordination);

  // TODO: add errors handling
  const mPlaceArrayOfShips = (gameboard, shipsLocations, shipSize) => {
    shipsLocations.forEach((shipLocation) => {
      if(shipSize > 1){
        gameboard.placeShip(shipLocation[0], shipSize, shipLocation[1]);
      }
      else {
        gameboard.placeShip(shipLocation[0], shipSize);
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
  player.placeShips = (
    gameboard,
    fourTileLocations,
    threeTileLocations,
    twoTilesLocations,
    oneTileLocations,
    defaultArrangement = true,
  ) => {
    if (defaultArrangement) {
      gameboard.placeShip([3, 6], 4, "horizontal");
      gameboard.placeShip([0, 0], 3, "vertical");
      gameboard.placeShip([2, 2], 3, "horizontal");
      gameboard.placeShip([0, 2], 2, "horizontal");
      gameboard.placeShip([0, 7], 2, "vertical");
      gameboard.placeShip([5, 2], 2, "horizontal");
      gameboard.placeShip([0, 5], 1);
      gameboard.placeShip([4, 0], 1);
      gameboard.placeShip([6, 0], 1);
      gameboard.placeShip([8, 8], 1);
      return;
    }
    mPlaceArrayOfShips(gameboard, fourTileLocations, 4);
    mPlaceArrayOfShips(gameboard, threeTileLocations, 3);
    mPlaceArrayOfShips(gameboard, twoTilesLocations, 2);
    mPlaceArrayOfShips(gameboard, oneTileLocations, 1);
  };

  return player;
};

export default HumanPlayer;
