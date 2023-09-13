import createElement from "../util/utils";

const UIGameboard = () => {
  const board = createElement("div", ["board-container"]);
  const boardSize = 10;

  for (let row = 0; row < boardSize; row += 1) {
    for (let column = 0; column < boardSize; column += 1) {
      const boardCell = createElement(
        "div",
        ["board-cell"],
        [
          ["data-row", `${row}`],
          ["data-column", `${column}`],
        ],
      );

      board.appendChild(boardCell);
    }
  }

  return board;
};

export default UIGameboard;
