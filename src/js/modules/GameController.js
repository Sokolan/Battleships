import { HumanPlayer, AIPlayer } from "./Player";

const GameController = () => {
  const mPlayers = [];
  let mGameStatus = "undecided";
  let mCurrentPlayer;

  const getCurrentPlayer = () => {};

  const getGameStatus = () => {};

  /* startGame expects:
   * 1 four tiles ship
   * 2 three tiles ships
   * 3 two tiles ships
   * 4 one tile ships
   * locations = [[x1,y1],[x2,y2]...]
   * orientations = ["vertical", "horizontal", ..]
   * returns a boolean value that represents the success/failure of
   * starting a new game
   */
  const startGame =
    (fourTileLocations,
    fourTileOrientations,
    threeTileLocations,
    threeTileOrientations,
    twoTilesLocations,
    twoTilesOrientations,
    oneTileLocations);

  /*
  * returns the arrays of the hits on each board
  * the player hits board and the AI hits board
  */
  const makeMove = (coordination = []) => {};
  

  return {
    startGame,
    makeMove,
    getCurrentPlayer,
    getGameStatus,
  };
};
