import Gameboard from "./Gameboard";

const Player = (type) => {
  const mType = type;
  const mGameboard = Gameboard();

  const getType = () => mType;

  const getBoard = () => mGameboard;

  const placeArrayOfShips = (shipsLocations, shipSize) => {
    shipsLocations.forEach((shipLocation) => {
      if (shipSize > 1) {
        getBoard().placeShip(shipLocation[0], shipSize, shipLocation[1]);
      } else {
        getBoard().placeShip(shipLocation[0], shipSize);
      }
    });
  };

  return {
    getType,
    getBoard,
    placeArrayOfShips,
  };
};

export default Player;
