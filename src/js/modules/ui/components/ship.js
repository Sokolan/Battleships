import createElement from "../util/utils";

const UIShip = (length, orientation, id) => {
  const shipContainer = createElement(
    "div",
    ["ship-container"],
    [
      ["draggable", "true"],
      ["id", id],
      ["data-orientation", orientation],
      ["data-length", length]
    ],
  );

  // const cell = document.querySelector('body');
  shipContainer.style.width = `40px`;

  shipContainer.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  shipContainer.addEventListener("click", (e) => {
    console.log(document.querySelectorAll('.board-cell'));
    const direction = shipContainer.dataset.orientation;
    if (direction === "horizontal") {
      shipContainer.dataset.orientation = "vertical";
      shipContainer.style.width = `40px`
      shipContainer.style.height = `${40 * shipContainer.dataset.length}px`;
    }
    else {
      shipContainer.dataset.orientation = "horizontal";
      shipContainer.style.height = `40px`
      shipContainer.style.width = `${40 * shipContainer.dataset.length}px`;
    }
  });

  return shipContainer;
};

export default UIShip;
