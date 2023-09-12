import "../../../../styles/body.css";
import "../../../../styles/winnerModal.css";
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
  newGameButton.textContent = "✴ Start New Game ✴";
  
  const resetGameButton = createElement("button", ["reset-game"]);
  resetGameButton.textContent = "Reset ✴ Game";


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

const createWinnerModal = () => {
  const closeModal = () => {
    const modal = document.querySelector('.winner-modal-container');
    modal.style.display = "none";
  }

  const modalContainer = createElement('div', ["winner-modal-container"]);
  const modalContent = createElement('div', ["winner-modal-content"]);
  modalContainer.appendChild(modalContent);

  const modalText = createElement('p', ["winner-modal"]);
  
  const modalExitButton = createElement('button', ["winner-modal-exit"]);
  
  modalExitButton.textContent = "X";
  modalExitButton.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      closeModal();
    }
  });

  modalContent.appendChild(modalText);
  modalContent.appendChild(modalExitButton);


  return modalContainer;
}

const Body = (gameController) => {
  const body = createElement("div", [], [["id", "body"]]);

  body.appendChild(createBoardsSection(gameController));
  body.appendChild(createStartNewGameButton(gameController));
  body.appendChild(createWinnerModal());
  return body;
};

export default Body;
