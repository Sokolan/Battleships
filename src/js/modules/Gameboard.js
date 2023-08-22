const Gameboard = () => {
  const mShipsBoard = Array(10).fill(Array(10).fill(null));
  const mHitsBoard = Array(10).fill(Array(10).fill(""));

  /* returns a board with:
   * "o" - for tile that had ship which was hit
   * "x" - for tile that was hit and it has no ship
   * ""  - for tile that wasn't hit
   */
  const getHitsBoard = () => {};

  // returns boolean value depends on the success of the placing the ship
  const placeShip = (startCoordination, length, orientation) => {};

  /*
   * returns:
   *   "hit"  - if there was a hit
   *   "miss" - if there wasn't a hit
   *   "EROR" - if the coordination is ilegal (out of scope, coordination already been hit)
   */
  const recieveAttack = (coordination) => {};

  // returns boolean with answer
  const allShipsSunk = () => {};

  return {
    getHitsBoard,
    placeShip,
    recieveAttack,
    allShipsSunk,
  };
};

export default Gameboard;
