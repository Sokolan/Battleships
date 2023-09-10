import createElement from "../util/utils";
import UIGameboard from "./gameboard";
import { getHitsOnPlayerBoard } from "./playerBoard";

const renderEnemyHits = (enemyHitsBoard) => {
  enemyHitsBoard.forEach((row, rowIndex) =>
    row.forEach((column, columnIndex) => {
      if (column === "") return;
      const cell = document.querySelector(
        `.enemy-baord .board-cell[data-row="${rowIndex}"][data-column="${columnIndex}"]`,
      );
      if (column === "o") cell.classList.add("hit");
      if (column === "x") cell.classList.add("miss");
    }),
  );
};

const EnemyBoard = (gameController) => {
  const enemyBoard = createElement("div", ["enemy-baord"]);
  enemyBoard.appendChild(UIGameboard());
  [...enemyBoard.firstElementChild.children].forEach((boardCell) => {
    boardCell.addEventListener("click", (e) => {
      // first check if we can make a move
      if (
        !gameController.isGameStarted() ||
        gameController.getGameStatus() !== "undecided" ||
        gameController.getCurrentPlayer() !== "Human" ||
        e.target.classList.contains("hit") ||
        e.target.classList.contains("miss")
      ) {
        return;
      }

      const { row, column } = e.target.dataset;
      // make the move
      const enemyHitsBoard = gameController.makeMove([
        Number.parseInt(row, 10),
        Number.parseInt(column, 10),
      ]);
      // render the move
      renderEnemyHits(enemyHitsBoard);

      if (gameController.getCurrentPlayer() === "AI") {
        getHitsOnPlayerBoard();
      }
    });
  });

  return enemyBoard;
};

export default EnemyBoard;
