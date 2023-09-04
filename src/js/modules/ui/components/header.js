import '../../../../styles/header.css';
import createElement from "../util/utils";

const createTitle = () => {
  const container = createElement('div', ['header-title']);
  const paragraph = createElement('p');
  paragraph.textContent = "BattleShips";

  container.appendChild(paragraph);
  return container;
}

const Header = () => {
  const header = createElement('header');
  header.appendChild(createTitle());

  return header;
}

export default Header;