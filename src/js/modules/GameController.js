import HumanPlayer from "./HumanPlayer";
import AIPlayer from "./AIPlayer";

const GameController = () => {
  let mHumanPlayer;
  let mAIPlayer;
  let mGameStatus;
  let mCurrentPlayer;

  const getCurrentPlayer = () => {};

  /*
   * undecided - no player wan
   * AI - AI wan
   * Human - Human wan
   */
  const getGameStatus = () => {};

  /* startGame expects:
   * 1 four tiles ship
   * 2 three tiles ships
   * 3 two tiles ships
   * 4 one tile ships
   * locations = [[[x1,y1], "vertical"/"horizontal",[[x2,y2]...]
   * returns a boolean value that represents the success/failure of
   * starting a new game
   */
  const startNewGame = (
    fourTileLocations,
    threeTileLocations,
    twoTilesLocations,
    oneTileLocations,
    defaultPositions = true,
  ) => {
    // initialize players and game status, human player is the one to start.
    mHumanPlayer = HumanPlayer();
    mAIPlayer = AIPlayer();
    mGameStatus = "undecided";
    mCurrentPlayer = mHumanPlayer;

    mHumanPlayer.placeShips(
      fourTileLocations,
      threeTileLocations,
      twoTilesLocations,
      oneTileLocations,
      defaultPositions,
    );

    mAIPlayer.placeShips();

    return true;
  };

  /*
   * returns the hits board of the player that has been hit
   */
  const makeMove = (coordination = []) => {};

  return {
    startNewGame,
    makeMove,
    getCurrentPlayer,
    getGameStatus,
  };
};

export default GameController;
