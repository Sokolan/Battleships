import "../../../../styles/body.css";
import createElement from "../util/utils";
import { PlayerBoard, arrayOfNTilesLongShip } from "./playerBoard";
import EnemyBoard from "./enemyBoard";

const createBoardsSection = (gameController) => {
  const boardsContainer = createElement("div", ["boards-container"]);
  boardsContainer.appendChild(PlayerBoard(gameController));
  boardsContainer.appendChild(EnemyBoard(gameController));

  return boardsContainer;
};

const cleanHitsFromBoards = () => {
  const boards = document.querySelectorAll(".board-container");
  boards.forEach((board) =>
    [...board.children].forEach((cell) => {
      cell.classList.remove("miss", "hit");
    }),
  );
};

const createStartNewGameButton = (gameController) => {
  const startNewGameContainer = createElement("div", ["new-game-container"]);
  const newGameButton = createElement("button", ["new-game"]);
  newGameButton.textContent = "Start New Game";

  newGameButton.addEventListener("click", () => {
    resetGameButton.classList.toggle('hidden');
    newGameButton.classList.toggle('hidden');
    gameController.startNewGame(
      arrayOfNTilesLongShip(4),
      arrayOfNTilesLongShip(3),
      arrayOfNTilesLongShip(2),
      arrayOfNTilesLongShip(1),
      false,
    );
  });

  const resetGameButton = createElement("button", ["reset-game"]);
  resetGameButton.textContent = "Reset Game";

  resetGameButton.addEventListener("click", () => {
    resetGameButton.classList.toggle('hidden');
    newGameButton.classList.toggle('hidden');
    gameController.resetGame();
    cleanHitsFromBoards();
  });
  resetGameButton.classList.toggle('hidden');

  startNewGameContainer.appendChild(newGameButton);
  startNewGameContainer.appendChild(resetGameButton);

  return startNewGameContainer;
};

const Body = (gameController) => {
  const body = createElement("div", [], [["id", "body"]]);

  body.appendChild(createBoardsSection(gameController));
  body.appendChild(createStartNewGameButton(gameController));
  return body;
};

export default Body;
