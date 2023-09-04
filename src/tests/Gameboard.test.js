import Gameboard from "../js/modules/logic/Gameboard";

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
    beforeEach(() => {
      gameboard = Gameboard();
      gameboard.placeShip([5, 5], 1, "horizontal");
    });

    test("TEST: placing ships outside of board", () => {
      expect(gameboard.placeShip([10, 8], 1, "vertical")).toBe(false);
    });

    test("TEST: wrong orientation", () => {
      expect(gameboard.placeShip([0, 0], 1, "wrong")).toBe(false);
    });

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
      gameboard.placeShip([1, 1], 1, "horizontal");
      testBoard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(""));
    });
    test("TEST: hitting ship at [1,1]", () => {
      expect(gameboard.getHitsBoard()).not.toContain("o");
      expect(gameboard.getHitsBoard()).not.toContain("x");

      expect(gameboard.recieveAttack([1, 0])).toEqual("miss");
      testBoard[1][0] = "x";
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([1, 1])).toEqual("hit");
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
  });
  describe("test for errors", () => {
    beforeEach(() => {
      gameboard = Gameboard();
      testBoard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(""));
    });
    test("TEST: hitting outside of the board", () => {
      expect(gameboard.recieveAttack([10, 4])).toEqual("ERROR");
      expect(gameboard.recieveAttack([0, 10])).toEqual("ERROR");
      expect(gameboard.recieveAttack([10, 10])).toEqual("ERROR");
    });
    test("TEST: hitting same target twice", () => {
      gameboard.placeShip([0, 0], 1, "horizontal");
      expect(gameboard.recieveAttack([0, 0])).toEqual("hit");
      expect(gameboard.recieveAttack([0, 0])).toEqual("ERROR");
    });
    test("TEST: hitting same tile twice", () => {
      expect(gameboard.recieveAttack([0, 0])).toEqual("miss");
      expect(gameboard.recieveAttack([0, 0])).toEqual("ERROR");
    });
  });
  describe("general test with more than one ship", () => {
    beforeAll(() => {
      gameboard = Gameboard();
      testBoard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(""));
      gameboard.placeShip([2, 2], 3, "vertical");
      gameboard.placeShip([0, 8], 2, "horizontal");
    });
    test("TEST: hitting 3 tiles long ship", () => {
      expect(gameboard.getHitsBoard()).toEqual(testBoard);
      /*
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       */
      expect(gameboard.recieveAttack([9, 9])).toEqual("miss");
      testBoard[9][9] = "x";
      /*
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , ,x]
       */
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([3, 2])).toEqual("hit");
      testBoard[3][2] = "o";
      /*
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , ,o, , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , ,x]
       */
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([5, 5])).toEqual("miss");
      testBoard[5][5] = "x";
      /*
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , ,o, , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , ,x, , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , ,x]
       */
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([4, 2])).toEqual("hit");
      testBoard[4][2] = "o";
      /*
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , ,o, , , , , , , ]
       * [ , ,o, , , , , , , ]
       * [ , , , , ,x, , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , ,x]
       */
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([1, 2])).toEqual("miss");
      testBoard[1][2] = "x";
      /*
       * [ , , , , , , , , , ]
       * [ , ,x, , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , ,o, , , , , , , ]
       * [ , ,o, , , , , , , ]
       * [ , , , , ,x, , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , ,x]
       */
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([2, 2])).toEqual("hit");
      testBoard[2][2] = "o";
      testBoard[1][1] = "x";
      testBoard[1][3] = "x";
      testBoard[2][1] = "x";
      testBoard[2][3] = "x";
      testBoard[3][1] = "x";
      testBoard[3][3] = "x";
      testBoard[4][1] = "x";
      testBoard[4][3] = "x";
      testBoard[5][1] = "x";
      testBoard[5][2] = "x";
      testBoard[5][3] = "x";
      /*
       * [ , , , , , , , , , ]
       * [ ,x,x,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,x,X, ,x, , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , ,x]
       */
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([8, 2])).toEqual("miss");
      testBoard[8][2] = "x";
      /*
       * [ , , , , , , , , , ]
       * [ ,x,x,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,x,X, ,x, , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , ,x, , , , , , , ]
       * [ , , , , , , , , ,x]
       */
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([0, 8])).toEqual("hit");
      /*
       * [ , , , , , , , ,o, ]
       * [ ,x,x,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,x,X, ,x, , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , ,x, , , , , , , ]
       * [ , , , , , , , , ,x]
       */
      testBoard[0][8] = "o";
      expect(gameboard.getHitsBoard()).toEqual(testBoard);

      expect(gameboard.recieveAttack([0, 9])).toEqual("hit");
      /*
       * [ , , , , , , ,x,o,0]
       * [ ,x,x,x, , , ,x,x,x]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,o,x, , , , , , ]
       * [ ,x,x,X, ,x, , , , ]
       * [ , , , , , , , , , ]
       * [ , , , , , , , , , ]
       * [ , ,x, , , , , , , ]
       * [ , , , , , , , , ,x]
       */
      testBoard[0][9] = "o";
      testBoard[0][7] = "x";
      testBoard[1][9] = "x";
      testBoard[1][8] = "x";
      testBoard[1][7] = "x";
      expect(gameboard.getHitsBoard()).toEqual(testBoard);
    });
  });
});

describe("Test allShipsSunk:", () => {
  let gameboard;
  
  beforeEach(() => {
    gameboard = Gameboard();
  });

  test("TEST: all ships sank without ships", () => {
    expect(gameboard.allShipsSunk()).toBe(true);
  })

  test("TEST: sink one ship 1 tile long", () => {
    gameboard.placeShip([0,0], 1, "horizontal");
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.recieveAttack([0,0]);
    expect(gameboard.allShipsSunk()).toBe(true);
  })
  test("TEST: test with 2 ships 1 tile long", () => {
    expect(gameboard.allShipsSunk()).toBe(true);
    gameboard.placeShip([0,0], 1, "vertical");
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.placeShip([4,4], 1, "vertical");
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.recieveAttack([0,0]);
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.recieveAttack([4,4]);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
  test("TEST: test with 1 ship 4 tiles long", () => {
    gameboard.placeShip([1,1], 4, "horizontal");
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.recieveAttack([1,1]);
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.recieveAttack([1,2]);
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.recieveAttack([1,3]);
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.recieveAttack([1,0]);
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.recieveAttack([1,4]);
    expect(gameboard.allShipsSunk()).toBe(true);
  })
});
