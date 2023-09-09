import HumanPlayer from "./HumanPlayer";
import AIPlayer from "./AIPlayer";

const GameController = () => {
  let mHumanPlayer;
  let mAIPlayer;
  let mGameStatus;
  let mCurrentPlayer;
  let mIsGameStarted = false;

  const isGameStarted = () => mIsGameStarted;

  const getCurrentPlayer = () => mCurrentPlayer.getType();

  /*
   * undecided - no player wan
   * AI - AI wan
   * Human - Human wan
   */
  const getGameStatus = () => mGameStatus;

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
    mIsGameStarted = true;

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
  const makeMove = (coordination = []) => {
    if (mGameStatus !== "undecided") {
      return null;
    }

    const moveStatus = mCurrentPlayer.makeMove(coordination);
    if (moveStatus === "ERROR") {
      return null;
    }

    if (moveStatus === "miss") {
      if (getCurrentPlayer() === "Human") {
        mCurrentPlayer = mAIPlayer;
      } else {
        mCurrentPlayer = mHumanPlayer;
      }

      return mCurrentPlayer.getBoard().getHitsBoard();
    }

    // else we have a hit
    if (moveStatus === "hit") {
      if (
        getCurrentPlayer() === "Human" &&
        mAIPlayer.getBoard().allShipsSunk()
      ) {
        mGameStatus = "Human";
      } else if (
        getCurrentPlayer() === "AI" &&
        mHumanPlayer.getBoard().allShipsSunk()
      ) {
        mGameStatus = "AI";
      }
    }

    return mAIPlayer.getBoard().getHitsBoard();
  };

  const isPositioningLegal = (
    fourTileLocations,
    threeTileLocations,
    twoTilesLocations,
    oneTileLocations,
  ) =>
    HumanPlayer()
      .getBoard()
      .isPositioningLegal(
        fourTileLocations,
        threeTileLocations,
        twoTilesLocations,
        oneTileLocations,
      );

  return {
    startNewGame,
    makeMove,
    getCurrentPlayer,
    getGameStatus,
    isPositioningLegal,
    isGameStarted,
  };
};

export default GameController;
