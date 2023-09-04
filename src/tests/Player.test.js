import Player from "../js/modules/logic/Player";
import Gameboard from "../js/modules/logic/Gameboard";

test("TEST: create Player and test basic functionality", () => {
  const player = Player("AI");
  expect(player.getType()).toEqual("AI");
  expect(Object.keys(player.getBoard())).toEqual(Object.keys(Gameboard()));
})