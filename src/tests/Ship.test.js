import Ship from "../js/modules/Ship";

describe("Ship()", () => {
  test("TEST: newly created 1 tile long ship isn't sunk", () => {
    const ship = Ship(1);
    expect(ship.isSunk()).toBe(false);
  })
  
  test("TEST: newly created 4 tile long ship isn't sunk", () => {
    const ship = Ship(4);
    expect(ship.isSunk()).toBe(false);
  })
})

describe("isSunk()", () => {
  test("TEST: 1 tile long ship return true after 1 hit", () => {
    const ship = Ship(1);
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  })
  describe("4 tile long ship should return true only after 4 hits", () => {
    const ship = Ship(4);
    test("1st hit should return false", () => {
      ship.hit();
      expect(ship.isSunk()).toBe(false);
    })
    test("2nd hit should return false", () => {
      ship.hit();
      expect(ship.isSunk()).toBe(false);
    })
    test("3rd hit should return false", () => {
      ship.hit();
      expect(ship.isSunk()).toBe(false);
    })
    test("4th hit should return true", () => {
      ship.hit();
      expect(ship.isSunk()).toBe(true);
    })
  });
})