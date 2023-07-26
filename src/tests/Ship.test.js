import Ship from "../js/modules/Ship";

describe("tests to make sure created and they're not sunk", () => {
  test("test: 1 tile long ship", () => {
    const ship = Ship(1);
    expect(ship.isSunk()).toBe(false);
  })
  
  test("test: 4 tiles long ship", () => {
    const ship = Ship(4);
    expect(ship.isSunk()).toBe(false);
  })
})

describe("test sinking ships", () => {
  test("test: sink 1 tile long ship", () => {
    const ship = Ship(1);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  })
  describe("test that it takes 4 hits to sink a 4 tiles ship", () => {
    const ship = Ship(4);
    test("test: 1st hit", () => {
      ship.hit();
      expect(ship.isSunk()).toBe(false);
    })
    test("test: 2nd hit", () => {
      ship.hit();
      expect(ship.isSunk()).toBe(false);
    })
    test("test: 3rd hit", () => {
      ship.hit();
      expect(ship.isSunk()).toBe(false);
    })
    test("test: 4th hit, sunk", () => {
      ship.hit();
      expect(ship.isSunk()).toBe(true);
    })
  });
})