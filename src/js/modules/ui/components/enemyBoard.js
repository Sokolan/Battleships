import createElement from "../util/utils";
import UIGameboard from "./gameboard";

const EnemyBoard = () => {
  const enemyBoard = createElement("div", ["enemy-baord"]);
  enemyBoard.appendChild(UIGameboard());

  return enemyBoard;
};

export default EnemyBoard;