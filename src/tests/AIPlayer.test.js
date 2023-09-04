jest.mock("../js/modules/logic/Gameboard", () => 
  jest.fn().mockReturnValue({
    placeShip: jest.fn(),
    recieveAttack: jest.fn(),
    getBoardSize: jest.fn(),
    getHitsBoard: jest.fn(),
  })
);

import AIPlayer from "../js/modules/logic/AIPlayer";
import Gameboard from "../js/modules/logic/Gameboard";

describe("AIPlayer() ", () => {
  test("TEST: can create defined AI Player object: ", () => {
    expect(AIPlayer()).not.toBe(undefined);
    expect(AIPlayer()).not.toBe(null);
  });
  test("TEST: AI Player is a player", () => {
    expect(AIPlayer().getType()).toEqual("AI");
  });
});

describe("test makeMove: ", () => {
  let aiPlayer;
  let gameboard;
  beforeEach(() => {
    aiPlayer = AIPlayer();
    gameboard = Gameboard();
  });
  test("TEST: make random move on empty board", () => {
    gameboard.getHitsBoard.mockReturnValueOnce(
      Array(10)
        .fill(null)
        .map(() => Array(10).fill("")),
    );
    gameboard.getBoardSize.mockReturnValueOnce(10);
    gameboard.recieveAttack.mockReturnValueOnce("hit");
    aiPlayer.makeMove(gameboard);
    expect(gameboard.recieveAttack.mock.calls[0][0][0]).toBeGreaterThanOrEqual(0);
    expect(gameboard.recieveAttack.mock.calls[0][0][1]).toBeGreaterThanOrEqual(0);
    expect(gameboard.recieveAttack.mock.calls[0][0][0]).toBeLessThanOrEqual(9);
    expect(gameboard.recieveAttack.mock.calls[0][0][1]).toBeLessThanOrEqual(9);
  });
  test("TEST: make random move with only [0,0] available", () => {
    const mockArray = Array(2)
      .fill(null)
      .map(() => Array(2).fill("x"));
    mockArray[0][0] = "";
    gameboard.getBoardSize.mockReturnValueOnce(2);
    gameboard.getHitsBoard.mockReturnValueOnce(mockArray);
    gameboard.recieveAttack.mockReturnValueOnce("hit");
    aiPlayer.makeMove(gameboard);
    expect(gameboard.recieveAttack.mock.calls[1][0]).toEqual([0, 0]);
  });
  test("TEST: make random move with only [1,2] available", () => {
    const mockArray = Array(3)
      .fill(null)
      .map(() => Array(3).fill("x"));
    mockArray[1][2] = "";
    gameboard.getBoardSize.mockReturnValueOnce(3);
    gameboard.getHitsBoard.mockReturnValueOnce(mockArray);
    gameboard.recieveAttack.mockReturnValueOnce("miss");
    aiPlayer.makeMove(gameboard);
    expect(gameboard.recieveAttack.mock.calls[2][0]).toEqual([1, 2]);
  });
});

describe("test placeShips: ", () => {
  let aiPlayer;
  let gameboard;
  beforeEach(() => {
    jest.clearAllMocks();
    aiPlayer = AIPlayer();
    gameboard = Gameboard();
  });
  test("TEST: place ships default", () => {
    gameboard.placeShip.mockReturnValue(true);
    aiPlayer.placeShips();
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
    expect(gameboard.placeShip.mock.calls).toHaveLength(10);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[3, 6], 4, "horizontal"]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[0, 0], 3, "vertical"]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[2, 2], 3, "horizontal"]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[0, 2], 2, "horizontal"]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[0, 7], 2, "vertical"]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[5, 2], 2, "horizontal"]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[0, 5], 1]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[4, 0], 1]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[6, 0], 1]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[8, 8], 1]);
  });
});
