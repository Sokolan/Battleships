import Gameboard from "./Gameboard";

const Player = (type) => {
  const mType = type;
  const mGameboard = Gameboard();

  const getType = () => mType;

  const getBoard = () => mGameboard;

  return {
    getType,
    getBoard,
  };
};

export default Player;