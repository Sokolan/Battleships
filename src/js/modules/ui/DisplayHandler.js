import createElement from "./util/utils";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

const DisplayHandler = () => {
  const content = document.querySelector('#content')

  content.appendChild(Header());
  content.appendChild(Body());
  content.appendChild(Footer());
}

export default DisplayHandler;