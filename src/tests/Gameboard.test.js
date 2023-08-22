import Gameboard from "../js/modules/Gameboard";

describe("Test placing ships", () => {
  let gameboard;

  describe("placing 1 tile long ship", () => {
    beforeAll(() => {
      gameboard = Gameboard();
    });
    test("TEST: place at [0,0]", () => {
      expect(gameboard.placeShip([0, 0], 1, "horizontal")).toBe(true);
    });
    test("TEST: place at [9,9]", () => {
      expect(gameboard.placeShip([9, 9], 1, "horizontal")).toBe(true);
    });
    test("TEST: place at [0,9]", () => {
      expect(gameboard.placeShip([0, 9], 1, "horizontal")).toBe(true);
    });
  });
  describe("placing different sizes and orientations ships", () => {
    beforeEach(() => {
      gameboard = Gameboard();
    });
    test("TEST: placing 4 tile long ship horizontally", () => {
      expect(gameboard.placeShip([2, 2], 4, "horizontal")).toBe(true);
    });
    test("TEST: placing 4 tile long ship vertically", () => {
      expect(gameboard.placeShip([2, 2], 4, "vertical")).toBe(true);
    });
    test("TEST: placing several horizontal ships", () => {
      expect(gameboard.placeShip([1, 1], 4, "horizontal")).toBe(true);
      expect(gameboard.placeShip([3, 1], 4, "horizontal")).toBe(true);
      expect(gameboard.placeShip([1, 6], 4, "horizontal")).toBe(true);
      expect(gameboard.placeShip([9, 1], 4, "horizontal")).toBe(true);
    });
    test("TEST: placing several vertical ships", () => {
      expect(gameboard.placeShip([1, 1], 4, "vertical")).toBe(true);
      expect(gameboard.placeShip([6, 1], 4, "vertical")).toBe(true);
      expect(gameboard.placeShip([6, 4], 4, "vertical")).toBe(true);
      expect(gameboard.placeShip([3, 7], 4, "vertical")).toBe(true);
    });
    test("TEST: placing ships in different orientations", () => {
      expect(gameboard.placeShip([1, 1], 4, "horizontal")).toBe(true);
      expect(gameboard.placeShip([3, 1], 4, "vertical")).toBe(true);
      expect(gameboard.placeShip([1, 6], 4, "vertical")).toBe(true);
    });
    test("TEST: placing all ships of the game", () => {
      /*
       * [3, ,2,2, ,1, ,2, , ]
       * [3, , , , , , ,2, , ]
       * [3, ,3,3,3, , , , , ]
       * [ , , , , , ,4,4,4,4]
       * [1, , , , , , , , , ]
       * [ , ,2,2, , , , , , ]
       * [1, , , , , , , , , ]
       * [ , , , , , , , ,1, ]
       * [ , , , , , , , , , ]
       */
      expect(gameboard.placeShip([0, 0], 3, "vertical")).toBe(true);
      expect(gameboard.placeShip([0, 2], 2, "horizontal")).toBe(true);
      expect(gameboard.placeShip([0, 5], 1, "horizontal")).toBe(true);
      expect(gameboard.placeShip([0, 7], 2, "vertical")).toBe(true);
      expect(gameboard.placeShip([2, 2], 3, "horizontal")).toBe(true);
      expect(gameboard.placeShip([3, 6], 4, "horizontal")).toBe(true);
      expect(gameboard.placeShip([4, 0], 1, "horizontal")).toBe(true);
      expect(gameboard.placeShip([5, 2], 2, "horizontal")).toBe(true);
      expect(gameboard.placeShip([6, 0], 1, "horizontal")).toBe(true);
      expect(gameboard.placeShip([8, 8], 1, "horizontal")).toBe(true);
    });
  });
  describe("test ilegal placing", () => {
    // put 1 tile long ship for the tests
    beforeAll(() => {
      gameboard.placeShip([5, 5], 1, "horizontal");
    });

    beforeEach(() => {
      gameboard = Gameboard();
    });

    test("TEST: placing ships outside of board", () => {
      expect(gameboard.placeShip([10,8], 1, "vertical")).toBe(false);
    });

    test("TEST: wrong orientation", () => {
      expect(gameboard.placeShip([0,0], 1, "wrong")).toBe(false);
    })

    test("TEST: can't put ship on another ship", () => {
      expect(gameboard.placeShip([5, 5], 1, "horizontal")).toBe(false);
    });

    test("TEST: can't put ship that crosses another ship", () => {
      gameboard.placeShip([2, 0], 4, "horizontal");
      expect(gameboard.placeShip([0, 2], 4, "vertical")).toBe(false);
    });

    describe("test placing ships next to existing ship", () => {
      test("TEST: can't place ship left to existing ship", () => {
        expect(gameboard.placeShip([5, 4], 1, "horizontal")).toBe(false);
      });
      test("TEST: can't place ship right to existing ship", () => {
        expect(gameboard.placeShip([5, 6], 1, "horizontal")).toBe(false);
      });
      test("TEST: can't place ship above to existing ship", () => {
        expect(gameboard.placeShip([4, 5], 1, "horizontal")).toBe(false);
      });
      test("TEST: can't place ship below to existing ship", () => {
        expect(gameboard.placeShip([5, 6], 1, "horizontal")).toBe(false);
      });
      test("TEST: can't place ship left up to existing ship", () => {
        expect(gameboard.placeShip([4, 4], 1, "horizontal")).toBe(false);
      });
      test("TEST: can't place ship right up to existing ship", () => {
        expect(gameboard.placeShip([4, 6], 1, "horizontal")).toBe(false);
      });
      test("TEST: can't place ship left down to existing ship", () => {
        expect(gameboard.placeShip([6, 4], 1, "horizontal")).toBe(false);
      });
      test("TEST: can't place ship right down to existing ship", () => {
        expect(gameboard.placeShip([6, 6], 1, "horizontal")).toBe(false);
      });
    });
  });
});

describe("Test receiveAttack:", () => {
  let gameboard;
  let testBoard;

  describe("test basic functionality", () => {
    beforeAll(() => {
      gameboard = Gameboard();
      gameboard.placeShip([0,0], 1, "horizontal");
      testBoard = Array(10).fill(Array(10).fill(""));
    });
    test("TEST: hitting ship at [1,1]", () => {
      expect(gameboard.getHitsBoard()).not.toContain("o");
      expect(gameboard.getHitsBoard()).not.toContain("x");

      expect(gameboard.recieveAttack([1,0])).toEqual("miss");
      testBoard[1][0] = "x";
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([1,1])).toEqual("hit");
      // ships was sank so it should mark the tiles around it too
      testBoard[1][1] = "o";
      testBoard[0][0] = "x";
      testBoard[0][1] = "x";
      testBoard[0][2] = "x";
      testBoard[1][0] = "x";
      testBoard[1][2] = "x";
      testBoard[2][0] = "x";
      testBoard[2][1] = "x";
      testBoard[2][2] = "x";
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

    });
  })
  describe("test for errors", () => {
    beforeEach(() => {
      gameboard = Gameboard();
      testBoard = Array(10).fill(Array(10).fill(""));
    });
    test("TEST: hitting outside of the board", () => {
      expect(gameboard.recieveAttack([10,4])).toBe(false);
      expect(gameboard.recieveAttack([0,10])).toBe(false);
      expect(gameboard.recieveAttack([10,10])).toBe(false);
    });
    test("TEST: hitting same target twice", () => {
      gameboard.placeShip([0,0], 1, "horizontal");
      expect(gameboard.recieveAttack([0,0])).toBe(true);
      expect(gameboard.recieveAttack([0,0])).toBe(false);
    });

  })
});

describe("Test allShipsSunk:", () => {});
