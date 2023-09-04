import "../../../../styles/footer.css";
import gitImg from "../../../../assets/imgs/github.png";
import createElement from "../util/utils";

// Create git link with git icon
const createGitLinkImg = () => {
  const gitLink = createElement(
    "a",
    [],
    [
      ["href", "https://github.com/Sokolan/Battleships"],
      ["target", "_blank"],
    ],
  );
  const gitIcon = createElement('img', ["git-img"], [["src", gitImg]]);
  gitLink.appendChild(gitIcon);
  return gitLink;
};

const createCreatorName = (creatorName) => {
  const creator = createElement("p", ["creator"]);
  creator.textContent = creatorName;
  return creator;
};

const Footer = () => {

  const footerContainer = createElement("footer");

  footerContainer.appendChild(createGitLinkImg());
  footerContainer.appendChild(createCreatorName("Sokolan"));
  return footerContainer;
};

export default Footer;
