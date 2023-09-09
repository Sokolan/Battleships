import "../../../../styles/body.css";
import createElement from "../util/utils";
import PlayerBoard from "./playerBoard";
import EnemyBoard from "./enemyBoard";

const createBoardsSection = (boardValidator) => {
  const boardsContainer = createElement("div", ["boards-container"]);
  boardsContainer.appendChild(PlayerBoard(boardValidator));
  boardsContainer.appendChild(EnemyBoard());

  return boardsContainer;
};


const Body = (boardValidator) => {
  const body = createElement("div", [], [["id", "body"]]);

  body.appendChild(createBoardsSection(boardValidator));

  return body;
};

export default Body;
