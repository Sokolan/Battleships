import "../../../../styles/body.css";
import createElement from "../util/utils";

const createBoard = () => {
  const board = createElement("div", ["board-container"]);
  const boardSize = 10;

  for (let row = 0; row < boardSize; row += 1) {
    for (let column = 0; column < boardSize; column += 1) {
      board.appendChild(
        createElement(
          "div",
          ["board-cell"],
          [
            ["row", `${row}`],
            ["column", `${column}`],
          ],
        ),
      );
    }
  }

  return board;
};

const createPlayerBoard = () => {
  const playerBoard = createElement("div", ["player-board"]);
  playerBoard.appendChild(createBoard());

  return playerBoard;
};

const createEnemyBoard = () => {
  const enemyBoard = createElement("div", ["enemy-baord"]);
  enemyBoard.appendChild(createBoard());

  return enemyBoard;
};

const createBoardsSection = () => {
  const boardsContainer = createElement("div", ["boards-container"]);
  boardsContainer.appendChild(createPlayerBoard());
  boardsContainer.appendChild(createEnemyBoard());

  return boardsContainer;
};

const createShipsSection = () => {
  const shipsContainer = createElement(
    "div",
    ["ships-container"],
    [["draggable", "true"]],
  );
  shipsContainer.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  return shipsContainer;
};

const Body = () => {
  const body = createElement("div", [], [["id", "body"]]);

  body.appendChild(createBoardsSection());
  body.appendChild(createShipsSection());

  return body;
};

export default Body;
