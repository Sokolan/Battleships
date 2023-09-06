import createElement from "../util/utils";
import UIGameboard from "./gameboard";
import UIShip from "./ship";

let playerBoard;
const rowSize = 10;

// store the tiles for the initial locations
// 1 4 tiles, 2 3 tiles, 3 2 tiles, 4 1 tiles
const shipsAndLocations = [];

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
    ship: UIShip(4, "horizontal", "ship0"),
    location: playerBoardArray[3 * rowSize + 6],
  });
  // 3 tiles ships
  shipsAndLocations.push({
    ship: UIShip(3, "vertical", "ship1"),
    location: playerBoardArray[0 * rowSize + 0],
  });
  shipsAndLocations.push({
    ship: UIShip(3, "horizontal", "ship2"),
    location: playerBoardArray[2 * rowSize + 2],
  });
  // 2 tiles ships
  shipsAndLocations.push({
    ship: UIShip(2, "horizontal", "ship3"),
    location: playerBoardArray[0 * rowSize + 2],
  });
  shipsAndLocations.push({
    ship: UIShip(2, "vertical", "ship4"),
    location: playerBoardArray[0 * rowSize + 7],
  });
  shipsAndLocations.push(
    {
      ship: UIShip(2, "horizontal", "ship5"),
      location: playerBoardArray[5 * rowSize + 2],
    },
  );
  // 1 tiles ships
  shipsAndLocations.push(
    {
      ship: UIShip(1, "horizontal", "ship6"),
      location: playerBoardArray[4 * rowSize + 0],
    },
  );
  shipsAndLocations.push(
    {
      ship: UIShip(1, "horizontal", "ship6"),
      location: playerBoardArray[6 * rowSize + 0],
    },
  );
  shipsAndLocations.push(
    {
      ship: UIShip(1, "horizontal", "ship6"),
      location: playerBoardArray[8 * rowSize + 8],
    }
  );
  shipsAndLocations.push({
    ship: UIShip(1, "horizontal", "ship5"),
    location: playerBoardArray[0 * rowSize + 5],
  });
};

const renderShip = (shipNum) => {
  const {ship, location} = shipsAndLocations[shipNum];
  location.appendChild(ship);
  const playerBoardArray = [...playerBoard.firstElementChild.children];
  for (let i = 0; i < ship.dataset.length; i += 1) {
    const row = Number.parseInt(location.dataset.row, 10);
    const column = Number.parseInt(location.dataset.column, 10);
    
    if (ship.dataset.orientation === "horizontal") {
      playerBoardArray[row * rowSize + column + i].classList.add("ship-tile");
    }

    else {
      playerBoardArray[(row + i) * rowSize + column].classList.add("ship-tile");
    }
  }
}

const PlayerBoard = () => {
  playerBoard = createElement("div", ["player-board"]);
  playerBoard.appendChild(UIGameboard());

  initializeShipsAndLocations(playerBoard);
  shipsAndLocations.forEach((shipAndLocation, index) => {
    renderShip(index);
  });
  console.log(shipsAndLocations);

  return playerBoard;
};

export default PlayerBoard;
