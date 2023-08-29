const mockGameboard = () => {
  let mHitsBoard;
  let mBoardSize;
  const setBoardSize = (size) => {mBoardSize = size;};
  const getBoardSize = () => mBoardSize;
  const recieveAttack = jest.fn((coordinates) => {});

  const getHitsBoard = jest.fn(() => mHitsBoard);
  const setHitsBoard = (board) => {
    mHitsBoard = board;
  };
  const placeShip = jest.fn((startCoordination, length, orientation) => {});

  return {
    recieveAttack,
    getHitsBoard,
    setHitsBoard,
    getBoardSize,
    setBoardSize,
    placeShip,
  };
};

export default mockGameboard;