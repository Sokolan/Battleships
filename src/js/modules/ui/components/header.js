import "../../../../styles/header.css";
import createElement from "../util/utils";

const createTitle = () => {
  const container = createElement("div", ["header-title"]);
  const paragraph = createElement("p");
  paragraph.textContent = "•B•a•t•t•l•e•S•h•i•p•s•";

  container.appendChild(paragraph);
  return container;
};

const Header = () => {
  const header = createElement("header");
  header.appendChild(createTitle());

  return header;
};

export default Header;
