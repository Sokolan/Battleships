import createElement from "../util/utils";
import UIGameboard from "./gameboard";

const EnemyBoard = (gameController) => {
  const enemyBoard = createElement("div", ["enemy-baord"]);
  enemyBoard.appendChild(UIGameboard());
  [...enemyBoard.firstElementChild.children].forEach(boardCell => {
    boardCell.addEventListener("click", () => {
      console.log(gameController.isGameStarted());
    });
  });

  return enemyBoard;
};

export default EnemyBoard;
