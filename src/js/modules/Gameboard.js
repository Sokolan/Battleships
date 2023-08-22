const Gameboard = () => {
  const mShipsBoard = Array(10).fill(Array(10).fill(null));
  const mHitsBoard = Array(10).fill(Array(10).fill(""));
  
  const getHitsBoard = () => {};

  const placeShip = (startCoordination, length, orientation) => {};

  const recieveAttack = (coordination) => {};

  const allShipsSunk = () => {};

  return {
    getHitsBoard,
    placeShip,
    recieveAttack,
    allShipsSunk,
  }
}

export default Gameboard;