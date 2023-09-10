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

const createStartNewGameButton = (gameController) => {
  const startNewGameContainer = createElement("div", ["new-game-container"]);
  const newGameButton = createElement("button", ["new-game"]);
  newGameButton.textContent = "Start New Game";

  newGameButton.addEventListener("click", () => {
    // console.log(arrayOfNTilesLongShip(2))
    gameController.startNewGame(
      arrayOfNTilesLongShip(4),
      arrayOfNTilesLongShip(3),
      arrayOfNTilesLongShip(2),
      arrayOfNTilesLongShip(1),
      false
    );
  });

  startNewGameContainer.appendChild(newGameButton);

  return startNewGameContainer;
};

const Body = (gameController) => {
  const body = createElement("div", [], [["id", "body"]]);

  body.appendChild(createBoardsSection(gameController));
  body.appendChild(createStartNewGameButton(gameController));
  return body;
};

export default Body;
