import Gameboard from "../js/modules/Gameboard"


describe("Test placing ships", () => {
  let gameboard;
  let testBoard;

  beforeEach(() => {
    gameboard = Gameboard();
    testBoard = Array(10).fill(Array(10).fill(""));
  })
  
  test("test: placing 1X1 ship in the corner", () => {
    expect(gameboard.placeShip(1,[0,0])).toEqual(true);
    testBoard[0][0] = 's';
    expect(gameboard.getBoard()).toEqual(testBoard);
  });
  test("test: placing ship outside of the board", () => {
    expect(gameboard.placeShip(1,[10,10])).toEqual(false);
    expect(gameboard.getBoard()).toEqual(testBoard);
  });
  test("test: placing ship in same place twice", () => {
    expect(gameboard.placeShip(1,[0,0])).toEqual(true);
    expect(gameboard.placeShip(1,[0,0])).toEqual(false);
    testBoard[0][0] = 's';
    expect(gameboard.getBoard()).toEqual(testBoard);
  })
  test("test: make sure ships can't touch each-other", () => {
    expect(gameboard.placeShip(1,[1,0])).toEqual(true);
    expect(gameboard.placeShip(1,[0,0])).toEqual(false);
    testBoard[1][0] = 's';
    expect(gameboard.getBoard()).toEqual(testBoard);
  });
  test("test: placing 4 tile long ship", () => {
    expect(gameboard.placeShip(4,[9,0], "right")).toEqual(true);
    testBoard[9][0] = 's';
    testBoard[9][1] = 's';
    testBoard[9][2] = 's';
    testBoard[9][3] = 's';
    expect(gameboard.getBoard()).toEqual(testBoard);
  })
  test("test: make sure ships can't touch each-other", () => {
    expect(gameboard.placeShip(4,[9,0], "right")).toEqual(true);
    testBoard[9][0] = 's';
    testBoard[9][1] = 's';
    testBoard[9][2] = 's';
    testBoard[9][3] = 's';
    expect(gameboard.getBoard()).toEqual(testBoard);
    expect(gameboard.placeShip(2,[7,0])).toEqual(false);
    expect(gameboard.getBoard()).toEqual(testBoard);
  });
  test("test: placing a ship in the middle of other ship", () => {
    expect(gameboard.placeShip(4,[9,0], "right")).toEqual(true);
    testBoard[9][0] = 's';
    testBoard[9][1] = 's';
    testBoard[9][2] = 's';
    testBoard[9][3] = 's';
    expect(gameboard.getBoard()).toEqual(testBoard);
    expect(gameboard.placeShip(1,[9,1])).toEqual(false);
    expect(gameboard.getBoard()).toEqual(testBoard);
  })
  test("test: placing ship that exceed gameboard boundaries", () => {
    expect(gameboard.placeShip(4,[8,8])).toEqual(false);
    expect(gameboard.getBoard()).toEqual(testBoard);
  })
})

describe("Testing receiveAttack:", () => {
  let gameboard;
  let testBoard;

  beforeEach(() => {
    gameboard  = Gameboard();
    testBoard = Array(10).fill(Array(10).fill(""));
  });

  test("test: receiveAttack on empty coordination", () => {
    expect(gameboard.getBoard()).toEqual(testBoard);
    testBoard[0][0] = "x";
    expect(gameboard.receiveAttack(0,0)).toEqual(false);
    expect(gameboard.getBoard()).toEqual(testBoard);
  })
  test("test: receiveAttack on out of scope coordination", () => {
    expect(gameboard.receiveAttack(10,10)).toEqual(false);
    expect(gameboard.getBoard()).toEqual(testBoard);
  })
  test("test: receiveAttack on occupied coordination", () => {
    gameboard.placeShip(1, [0,0]);
    /*
    ['s','','','',...]
    ['', '','','',...]
    ['', '','','',...]
    */
    expect(gameboard.receiveAttack(0,0)).toEqual(true);
    /*
    ['o','x','','',...]
    ['x','x','','',...]
    ['', '' ,'','',...]
    */
    testBoard[0][0] = "o";
    testBoard[0][1] = "x";
    testBoard[1][0] = "x";
    testBoard[1][1] = "x";
    expect(gameboard.getBoard()).toEqual(testBoard);
  })
  test("test: receiveAttack on coordination that have been hit", () => {
    gameboard.placeShip(1, [0,0]);
    /*
    ['s','','','',...]
    ['', '','','',...]
    ['', '','','',...]
    */
    testBoard[0][0] = 's';
    expect(gameboard.receiveAttack(0,0)).toEqual(true);
    testBoard[0][0] = "o";
    testBoard[0][1] = "x";
    testBoard[1][0] = "x";
    testBoard[1][1] = "x";
    expect(gameboard.getBoard()).toEqual(testBoard);
    expect(gameboard.receiveAttack(0,0)).toEqual(false);
    expect(gameboard.getBoard()).toEqual(testBoard);
  })
  describe("test: hit a 2 tiles long ship", () => {
    beforeAll(() => {
      gameboard.placeShip(2, [1,0]);
      testBoard[1][0] = 's';
      testBoard[1][1] = 's';
      /*
      ['' , '','','',...]
      ['s','s','','',...]
      ['' , '','','',...]
      */
    })
    test("test: 1st hit", () => {
      expect(gameboard.receiveAttack([1,0])).toEqual(true);
      /*
      ['' , '','','',...]
      ['o','s','','',...]
      ['' , '','','',...]
      */
      testBoard[1][0] = 'o';
      expect(gameboard.getBoard()).toEqual(testBoard);
    });
    test("test: 2nd hit", () => {
      expect(gameboard.receiveAttack([2,0])).toEqual(true);
      /*
      ['x','x','x','',...]
      ['o','o','x','',...]
      ['x','x','x','',...]
      */
      testBoard[2][0] = 'o';
      testBoard[0][0] = 'x';
      testBoard[0][1] = 'x';
      testBoard[0][2] = 'x';
      testBoard[1][2] = 'x';
      testBoard[2][0] = 'x';
      testBoard[2][1] = 'x';
      testBoard[2][2] = 'x';
      expect(gameboard.getBoard()).toEqual(testBoard);
    });
    test("test: 3rd hit", () => {
      expect(gameboard.receiveAttack([3,0])).toEqual(false);
      expect(gameboard.getBoard()).toEqual(testBoard);
    });
  })
})


describe("Test allShipsSunk:", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = Gameboard();
  })
  test("test: without ships", () => {
    expect(gameboard.allShipsSunk()).toEqual(true);
  })
  test("test: one tile long ship", () => {
    gameboard.placeShip(1,[0,0]);
    expect(gameboard.allShipsSunk()).toEqual(false);
    gameboard.receiveAttack(0,0);
    expect(gameboard.allShipsSunk()).toEqual(true);

  })
  test("test: 2 tiles long ship", () => {
    gameboard.placeShip(2,[0,0]);
    expect(gameboard.allShipsSunk()).toEqual(false);
    gameboard.receiveAttack(0,0);
    expect(gameboard.allShipsSunk()).toEqual(false);
    gameboard.receiveAttack(1,0);
    expect(gameboard.allShipsSunk()).toEqual(true);
  })
  test("test: more than one ship", () => {
    gameboard.placeShip(2,[0,0]);
    gameboard.placeShip(2,[4,4]);
    expect(gameboard.allShipsSunk()).toEqual(false);
    gameboard.receiveAttack(0,0);
    expect(gameboard.allShipsSunk()).toEqual(false);
    gameboard.receiveAttack(4,4);
    expect(gameboard.allShipsSunk()).toEqual(false);
    gameboard.receiveAttack(1,0);
    expect(gameboard.allShipsSunk()).toEqual(false);
    gameboard.receiveAttack(5,4);
    expect(gameboard.allShipsSunk()).toEqual(true);
  })
})