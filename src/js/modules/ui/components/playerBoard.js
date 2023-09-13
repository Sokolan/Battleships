import createElement from "../util/utils";
import UIGameboard from "./gameboard";
import UIShip from "./ship";

let playerBoard;
const rowSize = 10;
let gameController = null;

// store the tiles for the initial locations
// 1 4 tiles, 2 3 tiles, 3 2 tiles, 4 1 tiles
const shipsAndLocations = [];

let currentShipDragged = null;

export const arrayOfNTilesLongShip = (length) => {
  const arr = [];
  let from;
  let to;
  switch (length) {
    case 4:
      from = 0;
      to = 0;
      break;
    case 3:
      from = 1;
      to = 2;
      break;
    case 2:
      from = 3;
      to = 5;
      break;
    case 1:
      from = 6;
      to = 9;
      break;
    default:
      console.log("LENGTH ILLEGAL");
  }

  for (let i = from; i <= to; i += 1) {
    arr.push([
      [
        Number.parseInt(shipsAndLocations[i].location.dataset.row, 10),
        Number.parseInt(shipsAndLocations[i].location.dataset.column, 10),
      ],
      shipsAndLocations[i].ship.dataset.orientation,
    ]);
  }
  return arr;
};

const checkShipsPosition = () =>
  gameController.isPositioningLegal(
    arrayOfNTilesLongShip(4),
    arrayOfNTilesLongShip(3),
    arrayOfNTilesLongShip(2),
    arrayOfNTilesLongShip(1),
  );
const initializeShipsAndLocations = () => {
  /* default board:
   *     0 1 2 3 4 5 6 7 8 9
   *  0 [3, ,2,2, ,1, ,2, , ]
   *  1 [3, , , , , , ,2, , ]
   *  2 [3, ,3,3,3, , , , , ]
   *  3 [ , , , , , ,4,4,4,4]
   *  4 [1, , , , , , , , , ]
   *  5 [ , ,2,2, , , , , , ]
   *  6 [1, , , , , , , , , ]
   *  7 [ , , , , , , , , , ]
   *  8 [ , , , , , , , ,1, ]
   *  9 [ , , , , , , , , , ]
   */
  const playerBoardArray = [...playerBoard.firstElementChild.children];
  // 4 tiles ships
  shipsAndLocations.push({
    ship: UIShip(4, "horizontal"),
    location: playerBoardArray[3 * rowSize + 6],
  });
  // 3 tiles ships
  shipsAndLocations.push({
    ship: UIShip(3, "vertical"),
    location: playerBoardArray[0 * rowSize + 0],
  });
  shipsAndLocations.push({
    ship: UIShip(3, "horizontal"),
    location: playerBoardArray[2 * rowSize + 2],
  });
  // 2 tiles ships
  shipsAndLocations.push({
    ship: UIShip(2, "horizontal"),
    location: playerBoardArray[0 * rowSize + 2],
  });
  shipsAndLocations.push({
    ship: UIShip(2, "vertical"),
    location: playerBoardArray[0 * rowSize + 7],
  });
  shipsAndLocations.push({
    ship: UIShip(2, "horizontal"),
    location: playerBoardArray[5 * rowSize + 2],
  });
  // 1 tiles ships
  shipsAndLocations.push({
    ship: UIShip(1, "horizontal"),
    location: playerBoardArray[4 * rowSize + 0],
  });
  shipsAndLocations.push({
    ship: UIShip(1, "horizontal"),
    location: playerBoardArray[6 * rowSize + 0],
  });
  shipsAndLocations.push({
    ship: UIShip(1, "horizontal"),
    location: playerBoardArray[8 * rowSize + 8],
  });
  shipsAndLocations.push({
    ship: UIShip(1, "horizontal"),
    location: playerBoardArray[0 * rowSize + 5],
  });
};

const renderHits = (humanHitsBoard) => {
  humanHitsBoard.forEach((row, rowIndex) =>
    row.forEach((column, columnIndex) => {
      if (column === "") return;
      const cell = document.querySelector(
        `.player-board .board-cell[data-row="${rowIndex}"][data-column="${columnIndex}"]`,
      );
      if (column === "o") cell.classList.add("hit");
      if (column === "x") cell.classList.add("miss");
      if (column === "o" || column === "x") {
        // cell.
      }
    }),
  );
};

export const getHitsOnPlayerBoard = () => {
  // first check if we can make a move
  while (
    gameController.getGameStatus() !== "undecided" ||
    gameController.getCurrentPlayer() === "AI"
  ) {
    const humanHitsBoard = gameController.makeMove();
    renderHits(humanHitsBoard);
  }
  if (gameController.getGameStatus() === "AI") {
    const modal = document.querySelector(".winner-modal-container");
    const modalParagraph = document.querySelector(".winner-modal-content>p");
    modalParagraph.textContent = "Unfortunately you've lost";
    modal.firstElementChild.style.display = "flex";
  }
};

const renderShip = (shipNum) => {
  const { ship, location } = shipsAndLocations[shipNum];
  location.appendChild(ship);
  const playerBoardArray = [...playerBoard.firstElementChild.children];
  for (let i = 0; i < ship.dataset.length; i += 1) {
    const row = Number.parseInt(location.dataset.row, 10);
    const column = Number.parseInt(location.dataset.column, 10);

    if (ship.dataset.orientation === "horizontal") {
      playerBoardArray[row * rowSize + column + i].classList.add("ship-tile");
    } else {
      playerBoardArray[(row + i) * rowSize + column].classList.add("ship-tile");
    }
  }
};

const deRenderShip = (shipNum) => {
  const { ship, location } = shipsAndLocations[shipNum];
  location.appendChild(ship);
  const playerBoardArray = [...playerBoard.firstElementChild.children];
  for (let i = 0; i < ship.dataset.length; i += 1) {
    const row = Number.parseInt(location.dataset.row, 10);
    const column = Number.parseInt(location.dataset.column, 10);

    if (ship.dataset.orientation === "horizontal") {
      playerBoardArray[row * rowSize + column + i].classList.remove(
        "ship-tile",
      );
    } else {
      playerBoardArray[(row + i) * rowSize + column].classList.remove(
        "ship-tile",
      );
    }
  }
};

const setShipsEventListeners = () => {
  shipsAndLocations.forEach((shipAndLocation) => {
    const { ship } = shipAndLocation;
    ship.addEventListener("dragstart", (e) => {
      if (gameController.isGameStarted()) {
        return;
      }
      currentShipDragged = e.target;
      deRenderShip(currentShipDragged.dataset.shipnum);
    });
    ship.addEventListener("click", () => {
      const switchDirection = () => {
        const direction = shipAndLocation.ship.dataset.orientation;
        if (direction === "horizontal") {
          ship.dataset.orientation = "vertical";
        } else {
          ship.dataset.orientation = "horizontal";
        }
      };
      switchDirection();
      if (!checkShipsPosition()) {
        switchDirection();
        return;
      }
      switchDirection();
      deRenderShip(ship.dataset.shipnum);
      switchDirection();
      renderShip(ship.dataset.shipnum);
    });
  });
};

export const PlayerBoard = (gameControllerInput) => {
  playerBoard = createElement("div", ["player-board"]);
  playerBoard.appendChild(UIGameboard());
  gameController = gameControllerInput;
  [...playerBoard.firstElementChild.children].forEach((boardCell) => {
    boardCell.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    boardCell.addEventListener("dragenter", (e) => {
      if (
        !currentShipDragged ||
        !e.target.classList.contains("board-cell") ||
        e.target.classList.contains("ship-tile")
      ) {
        if (e.target !== currentShipDragged) {
          return;
        }
      }

      const prevLocation =
        shipsAndLocations[currentShipDragged.dataset.shipnum].location;
      if (e.target !== currentShipDragged) {
        shipsAndLocations[currentShipDragged.dataset.shipnum].location =
          e.target;
      }

      if (checkShipsPosition()) {
        e.target.classList.add("ship-hover");
      } else {
        e.target.classList.add("ship-hover", "ilegal-position");
      }

      shipsAndLocations[currentShipDragged.dataset.shipnum].location =
        prevLocation;
    });

    boardCell.addEventListener("dragleave", (e) => {
      if (!currentShipDragged) {
        return;
      }
      e.target.classList.remove("ship-hover", "ilegal-position");
    });

    boardCell.addEventListener("drag", (e) => {
      if (gameController.isGameStarted()) return;
      e.target.parentNode.classList.remove("ship-hover");
    });

    boardCell.addEventListener("drop", (e) => {
      e.preventDefault();

      // if the draggable object isn't ship-container, nothing more to do
      if (!currentShipDragged) {
        return;
      }
      const currentShipNum = currentShipDragged.dataset.shipnum;
      e.target.classList.remove("ship-hover");

      // if the position ilegal, nothing more to do
      const prevLocation = shipsAndLocations[currentShipNum].location;

      if (!e.target.classList.contains("ship-container")) {
        shipsAndLocations[currentShipNum].location = e.target;
      }

      if (!checkShipsPosition()) {
        shipsAndLocations[currentShipNum].location = prevLocation;
        renderShip(currentShipNum);
        currentShipDragged = null;
        return;
      }
      // If the position is legal and we're in board-cell element and we're dragging a ship
      // We can add our ship safely
      deRenderShip(currentShipNum);
      if (!e.target.classList.contains("ship-container")) {
        e.target.appendChild(currentShipDragged);
        shipsAndLocations[currentShipNum].location = e.target;
      }
      renderShip(currentShipNum);

      // need to clear old ship location
      currentShipDragged = null;
    });

    boardCell.addEventListener("dragend", (e) => {
      if (
        currentShipDragged &&
        !e.target.classList.contains("board-cell") &&
        !e.target.parentNode.parentNode.classList.contains("player-board")
      ) {
        renderShip(currentShipDragged.dataset.shipnum);
      }
    });
  });

  initializeShipsAndLocations(playerBoard);
  setShipsEventListeners();
  shipsAndLocations.forEach((shipAndLocation, index) => {
    renderShip(index);
  });

  return playerBoard;
};
