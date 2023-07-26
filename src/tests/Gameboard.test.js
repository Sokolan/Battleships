import Gameboard from "../js/modules/Gameboard"



describe("Test placing ships", () => {
  const gameboard = Gameboard();
  
  test("test: placing 1X1 ship in the corner", () => {
    expect(gameboard.placeShip(1,[0,0])).toBe(true);
  });
  test("test: placing ship outside of the board", () => {
    expect(gameboard.placeShip(1,[10,10])).toBe(false);
  });
  test("test: placing ship in same place twice", () => {
    expect(gameboard.placeShip(1,[0,0])).toBe(false);
  })
  test("test: make sure ships can't touch each-other", () => {
    expect(gameboard.placeShip(1,[1,0])).toBe(false);
  });
  test("test: placing 4 tile long ship", () => {
    expect(gameboard.placeShip(4,[9,0], "right")).toBe(true);
  })
  test("test: make sure ships can't touch each-other", () => {
    expect(gameboard.placeShip(2,[7,0])).toBe(false);
  });
  test("test: placing a ship in the middle of other ship", () => {
    expect(gameboard.placeShip(1,[9,1])).toBe(false);
  })
  test("test: placing ship that exceed gameboard boundaries", () => {
    expect(gameboard.placeShip(4,[8,8])).toBe(false);
  })
})

describe("Testing receiveAttack:", () => {
  const gameboard = Gameboard();
  test("test: receiveAttack on empty coordination", () => {
    expect(gameboard.receiveAttack(0,0)).toBe(false);
  })
  test("test: receiveAttack on out of scope coordination", () => {
    expect(gameboard.receiveAttack(10,10)).toBe(false);
  })
  gameboard.placeShip(1, [0,0]);
  test("test: recieveAttack on occupied coordination", () => {
    expect(gameboard.receiveAttack(0,0)).toBe(true);
  })
  test("test: receiveAttack on coordination that have been hit", () => {
    expect(gameboard.receiveAttack(0,0)).toBe(false);
  })
  describe("test: hit a 2 tiles long ship", () => {
    gameboard.placeShip(2, [1,0]);
    test("test: 1st hit", () => {
      expect(gameboard.receiveAttack([1,0])).toBe(true);
    });
    test("test: 2nd hit", () => {
      expect(gameboard.receiveAttack([2,0])).toBe(true);
    });
    test("test: 3rd hit", () => {
      expect(gameboard.receiveAttack([3,0])).toBe(false);
    });
  })
})
