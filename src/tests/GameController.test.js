jest.mock("../js/modules/HumanPlayer", () =>
  jest.fn(() => ({
    placeShips: jest.fn(),
    makeMove: jest.fn(),
    getBoard: jest.fn(() => ({
      recieveAttack: jest.fn(),
      allShipsSunk: jest.fn(),
    })),
  })),
);

jest.mock("../js/modules/AIPlayer", () =>
  jest.fn(() => ({
    placeShips: jest.fn(),
    makeMove: jest.fn(),
    getBoard: jest.fn(() => ({
      allShipsSunk: jest.fn(),
    })),
  })),
);

import GameController from "../js/modules/GameController";
import Gameboard from "../js/modules/Gameboard";
import HumanPlayer from "../js/modules/HumanPlayer";
import AIPlayer from "../js/modules/AIPlayer";

describe("GameController() object creation", () => {
  test("TEST: can create GameController object", () => {
    expect(GameController()).not.toBe(undefined);
    expect(GameController()).not.toBe(null);
  });
});

let gameController;

describe("startNewGame() ", () => {
  beforeEach(() => {
    gameController = GameController();
  });

  test("should return true without values", () => {
    expect(gameController.startNewGame()).toBe(true);
  });

  test("should invoke HumanPlayer.placeShips() with default positioning", () => {
    gameController.startNewGame();
    const humanPlayer = HumanPlayer();
    expect(humanPlayer.placeShips.mock.calls[0]).toBe(undefined);
  });

  test("should invoke HumanPlayer.placeShips() with the correct coordinates", () => {
    /*     0 1 2 3 4 5 6 7 8 9
     *  0 [ , , , , ,1, , , , ]
     *  1 [ ,1, , , , , ,3,3,3]
     *  2 [ , , , ,2,2, , , , ]
     *  3 [ , , , , , , , ,3, ]
     *  4 [1, , , , , , , ,3, ]
     *  5 [ , ,2,2, , ,4, ,3, ]
     *  6 [ , , , , , ,4, , , ]
     *  7 [ , , , , , ,4, , , ]
     *  8 [ , ,2, , , ,4, ,1, ]
     *  9 [ , ,2, , , , , , , ]
     */
    gameController.startNewGame(
      [[[5, 6], "vertical"]],
      [
        [[1, 7], "horizontal"],
        [[3, 8], "vertical"],
      ],
      [
        [[2, 4], "horizontal"],
        [[5, 2], "horizontal"],
        [[8, 2], "vertical"],
      ],
      [[[0, 5]], [[1, 1]], [[4, 0]], [[8, 8]]],
      false,
    );

    const humanPlayer = HumanPlayer();
    expect(humanPlayer.placeShips.mock.calls[0][1]).toEqual([
      [5, 6],
      4,
      "vertical",
    ]);
    expect(humanPlayer.placeShips.mock.calls[0][2]).toEqual(
      [[1, 7], 3, "horizontal"],
      [[3, 8], 3, "vertical"],
    );
    expect(humanPlayer.placeShips.mock.calls[0][3]).toEqual(
      [[2, 4], 2, "horizontal"],
      [[5, 2], 2, "horizontal"],
      [[8, 2], 2, "vertical"],
    );
    expect(humanPlayer.placeShips.mock.calls[0][4]).toEqual([
      [[0, 5], 1],
      [[1, 1], 1],
      [[4, 0], 1],
      [[8, 8], 1],
    ]);
  });

  test("should invoke AIPlayer.palceShips() ", () => {
    const aIPlayer = AIPlayer();
    gameController.startNewGame();

    expect(aIPlayer.placeShips.mock.calls).toHaveLength(1);
  });
});

describe("makeMove() ", () => {
  const humanPlayer = HumanPlayer();
  const aIPlayer = AIPlayer();

  beforeEach(() => {
    gameController = GameController();
  });

  test("should trigger HumanPlayer.makeMove() ", () => {
    expect(gameController.getCurrentPlayer()).toBe("Human");
    gameController.makeMove([0, 0]);
    expect(humanPlayer.makeMove.mock.calls).toHaveLength(1);
    expect(humanPlayer.makeMove.mock.calls[0][1]).toEqual([0, 0]);
  });
  test("should trigger AIPlayer.makeMove() ", () => {
    gameController.makeMove([0, 0]);
    expect(gameController.getCurrentPlayer()).toEqual("AI");
    gameController.makeMove();
    expect(aIPlayer.makeMove.mock.calls).toHaveLength(1);
  });
  test("shuould return hitsBoard", () => {
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
    const gameboard = Gameboard();
    // for human palyer
    humanPlayer.makeMove.mockReturnValueOnce(gameboard.getHitsBoard());
    expect(gameController.makeMove()).toEqual(gameboard.getHitsBoard());
    // for AI player
    aIPlayer.makeMove.mockReturnValueOnce(gameboard.getHitsBoard());
    expect(gameController.makeMove()).toEqual(gameboard.getHitsBoard());
  });
});

describe("getCurrentPlayer() ", () => {
  const humanPlayer = HumanPlayer();
  const aIPlayer = AIPlayer();

  beforeEach(() => {
    gameController = GameController();
  });

  test("first move should be human player ", () => {
    expect(gameController.getCurrentPlayer()).toEqual("human");
  });
  test("should switch to player after player misses", () => {
    humanPlayer.getBoard.recieveAttack.mockReturnValueOnce("miss");
    gameController.makeMove([0, 0]);
    expect(gameController.getCurrentPlayer()).toEqual("AI");
  });
});

describe("getGameStatus() ", () => {
  let aIPlayer;
  let humanPlayer;
  beforeEach(() => {
    gameController = GameController();
    gameController.startNewGame();
    aIPlayer = AIPlayer();
    humanPlayer = HumanPlayer();
  });
  test("new game should return `undecided`", () => {
    expect(gameController.getGameStatus()).toEqual("undecided");
  });
  test("if it's Human turn and AI board ships were all sunk, Human wan", () => {
    aIPlayer.getBoard.allShipsSunk.mockReturnValueOnce(true);
    aIPlayer.getBoard.recieveAttack.mockReturnValueOnce("hit");
    gameController.makeMove([0, 0]);
    expect(gameController.getGameStatus()).toEqual("Human");
  });
  test("if it's AI turn and Human board ships were all sunk after AI hit, AI wan", () => {
    aIPlayer.getBoard.recieveAttack.mockReturnValueOnce("miss");
    gameController.makeMove([0, 0]);
    humanPlayer.getBoard.recieveAttack.mockReturnValueOnce("hit");
    humanPlayer.getBoard.allShipsSunk.mockReturnValueOnce(true);
    gameController.makeMove([0, 0]);
    expect(gameController.getGameStatus()).toEqual("Human");
  });
});
