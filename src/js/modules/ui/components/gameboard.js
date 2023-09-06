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

      boardCell.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      boardCell.addEventListener("dragenter", (e) => {
        e.target.classList.toggle("BB");
      });

      boardCell.addEventListener("dragleave", (e) => {
        e.target.classList.toggle("BB");
      });

      boardCell.addEventListener("drag", (e) => {
        e.target.parentNode.classList.remove("BB");
      });

      boardCell.addEventListener("drop", (e) => {
        e.preventDefault();

        e.target.parentNode.classList.remove("BB");

        const id = e.dataTransfer.getData("text/plain");

        const element = document.getElementById(id);
        if (element === null || !element.classList.contains("ship-container"))
          return;
        e.target.appendChild(element);
      });

      board.appendChild(boardCell);
    }
  }

  return board;
};

export default UIGameboard;