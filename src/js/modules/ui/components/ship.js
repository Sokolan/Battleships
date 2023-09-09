import createElement from "../util/utils";

let shipNum = 0;

const UIShip = (length, orientation) => {
  const shipContainer = createElement(
    "div",
    ["ship-container"],
    [
      ["draggable", "true"],
      ["data-shipNum", shipNum],
      ["data-orientation", orientation],
      ["data-length", length]
    ],
  );
  shipNum += 1;

  return shipContainer;
};

export default UIShip;
