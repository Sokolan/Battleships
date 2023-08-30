import HumanPlayer from "../js/modules/HumanPlayer";
import Gameboard from "../js/modules/Gameboard";
import mockGameboard from "./GameboardMock";

describe("test creation of HumanPlayer: ", () => {
  test("TEST: HumanPlayer is a player", () => {
    expect(HumanPlayer().getType()).toEqual("Human");
    expect(Object.keys(HumanPlayer().getBoard())).toEqual(
      Object.keys(Gameboard()),
    );
  });
});

describe("makeMove() : ", () => {
  let gameboard;
  let humanPlayer;

  beforeEach(() => {
    gameboard = mockGameboard();
    humanPlayer = HumanPlayer();
  });

  test("TEST: makeMove([0,0]) should call recieveAttack([0,0]): ", () => {
    humanPlayer.makeMove(gameboard, [0, 0]);
    expect(gameboard.recieveAttack.mock.calls[0][0]).toEqual([0, 0]);
  });
  test("TEST: makeMove([1, 4]) should call recieveAttack([1, 4])", () => {
    humanPlayer.makeMove(gameboard, [1, 4]);
    expect(gameboard.recieveAttack.mock.calls[0][0]).toEqual([1, 4]);
  });
  test("TEST: makeMove returns hit", () => {
    gameboard.recieveAttack.mockReturnValue("hit");
    expect(humanPlayer.makeMove(gameboard, [0, 0])).toEqual("hit");
  });
  test("TEST: makeMove returns miss", () => {
    gameboard.recieveAttack.mockReturnValue("miss");
    expect(humanPlayer.makeMove(gameboard, [0, 0])).toEqual("miss");
  });
  test("TEST: makeMove returns ERROR", () => {
    gameboard.recieveAttack.mockReturnValue("ERROR");
    expect(humanPlayer.makeMove(gameboard, [0, 0])).toEqual("ERROR");
  });
});

describe("test placeShips: ", () => {
  let gameboard;
  let humanPlayer;
  beforeEach(() => {
    gameboard = mockGameboard();
    humanPlayer = HumanPlayer();
  });

  test("TEST: placing default placing", () => {
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
    humanPlayer.placeShips(gameboard);
    expect(gameboard.placeShip.mock.calls).toHaveLength(10);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [3, 6],
      4,
      "horizontal",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [0, 0],
      3,
      "vertical",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [2, 2],
      3,
      "horizontal",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [0, 2],
      2,
      "horizontal",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [0, 7],
      2,
      "vertical",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [5, 2],
      2,
      "horizontal",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[0, 5], 1]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[4, 0], 1]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[6, 0], 1]);
  });

  test("TEST: place ships in different arrangement ", () => {
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
    humanPlayer.placeShips(
      gameboard,
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
    expect(gameboard.placeShip.mock.calls).toHaveLength(10);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [5, 6],
      4,
      "vertical",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [1, 7],
      3,
      "horizontal",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [3, 8],
      3,
      "vertical",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [2, 4],
      2,
      "horizontal",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [5, 2],
      2,
      "horizontal",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([
      [8, 2],
      2,
      "vertical",
    ]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[0, 5], 1]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[1, 1], 1]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[4, 0], 1]);
    expect(gameboard.placeShip.mock.calls).toContainEqual([[8, 8], 1]);
  });
});
