import "../../../../styles/body.css";
import createElement from "../util/utils";
import PlayerBoard from "./playerBoard";
import EnemyBoard from "./enemyBoard";

const createBoardsSection = () => {
  const boardsContainer = createElement("div", ["boards-container"]);
  boardsContainer.appendChild(PlayerBoard());
  boardsContainer.appendChild(EnemyBoard());

  return boardsContainer;
};


const Body = () => {
  const body = createElement("div", [], [["id", "body"]]);

  body.appendChild(createBoardsSection());

  return body;
};

export default Body;
