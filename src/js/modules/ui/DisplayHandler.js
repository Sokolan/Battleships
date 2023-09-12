import "../../../styles/style.css";

import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

const DisplayHandler = (gameController) => {
  const content = document.querySelector("#content");

  content.appendChild(Header());
  content.appendChild(Body(gameController));
  content.appendChild(Footer());
};

export default DisplayHandler;
