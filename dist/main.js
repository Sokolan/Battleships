/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/body.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/body.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/StardosStencil-Bold.ttf */ "./src/assets/fonts/StardosStencil-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: StardosStencil-Bold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#body {
  background: linear-gradient(0deg, #01161a 15%, #0d8fa9 60%, #bbecf6);
  display: grid;
  padding: 10px;
}

.boards-container {
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.board-container {
  padding: 4px;
  height: 30%;
  --grid-size: 10;
  --cell-size: 40px;
  --ship-color: rgb(12, 20, 74);
  display: grid;
  gap: 3px;
  height: fit-content;
  grid-template-columns: repeat(var(--grid-size), var(--cell-size));
  grid-template-rows: repeat(var(--grid-size), var(--cell-size));
  box-shadow: 0 0 16px 0px rgba(26, 176, 230, 0.579);
  border-radius: 8px;
  background: rgba(34, 160, 227, 0.335);
}

.board-cell {
  background: rgb(208, 233, 255);
  border: 1px solid rgb(21, 0, 255);
  border-radius: 8px;
  overflow: hidden;
  transition: 0.5s;

  /* overflow:visible; */
}

.board-cell {
  /* transition-delay: 0.6s; */
}

.enemy-baord .board-cell:hover {
  box-shadow: 0 0 8px 0px rgb(0, 153, 255);
  transform: scale(1.1);
  cursor: pointer;
}

.ships-container {
  gap: 1px;
  cursor: move;
}

.ship-container {
  height: 40px;
  width: 40px;
  cursor: move;
  transition: 0.5s;
}

.ship-tile {
  background: var(--ship-color);
}

.ship-hover {
  background-color: rgb(0, 198, 0);
}

.ship-hover.ilegal-position {
  background-color: red;
}

.temp-ship-tile {
  background-color: yellow;
}

.board-cell.hit {
  background-color: rgb(225, 14, 3);
  border: 2px solid #ff6600;
  --transofrm-scale: 0.8;
  transform: scale(var(--transofrm-scale));
}

.player-board .hit {
  transition-delay: 0.4s;
}

.player-board .miss {
  transition-delay: 0.4s;
}


.miss {
  background-color: rgb(25, 207, 227);
  transform: scale(0.8);
  cursor: pointer;
}

.enemy-baord .board-cell.miss:hover {
  transform: scale(0.8);
  cursor: auto;
}

.enemy-baord .board-cell.hit:hover {
  transform: scale(var(--transofrm-scale));
  cursor: auto;
}

.new-game-container {
  height: fit-content;
  width: fit-content;
  align-self: center;
  justify-self: center;
}

.new-game-container > button {
  transition: 0.8s;
  font-family: StardosStencil-Bold;
  padding: 8px 16px;
  border-radius: 8px;
  /* font-weight: 400; */
  font-size: 32px;
  background-color: #151a2832;
  border: none;
  color: rgb(230, 230, 230);
  text-shadow: 4px 2px rgba(255, 94, 0, 0.447);
  text-decoration: underline;
}

.new-game-container > button:hover {
  transform: scale(1.2);
}

button {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles/body.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,4CAAmD;AACrD;;AAEA;EACE,oEAAoE;EACpE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;;EAET,8BAA8B;EAC9B,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,6BAA6B;EAC7B,aAAa;EACb,QAAQ;EACR,mBAAmB;EACnB,iEAAiE;EACjE,8DAA8D;EAC9D,kDAAkD;EAClD,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;EACE,8BAA8B;EAC9B,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;;EAEhB,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,wCAAwC;EACxC,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iCAAiC;EACjC,yBAAyB;EACzB,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;;AAGA;EACE,mCAAmC;EACnC,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,gCAAgC;EAChC,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,2BAA2B;EAC3B,YAAY;EACZ,yBAAyB;EACzB,4CAA4C;EAC5C,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: StardosStencil-Bold;\n  src: url(\"../assets/fonts/StardosStencil-Bold.ttf\");\n}\n\n#body {\n  background: linear-gradient(0deg, #01161a 15%, #0d8fa9 60%, #bbecf6);\n  display: grid;\n  padding: 10px;\n}\n\n.boards-container {\n  display: grid;\n  gap: 15px;\n\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.board-container {\n  padding: 4px;\n  height: 30%;\n  --grid-size: 10;\n  --cell-size: 40px;\n  --ship-color: rgb(12, 20, 74);\n  display: grid;\n  gap: 3px;\n  height: fit-content;\n  grid-template-columns: repeat(var(--grid-size), var(--cell-size));\n  grid-template-rows: repeat(var(--grid-size), var(--cell-size));\n  box-shadow: 0 0 16px 0px rgba(26, 176, 230, 0.579);\n  border-radius: 8px;\n  background: rgba(34, 160, 227, 0.335);\n}\n\n.board-cell {\n  background: rgb(208, 233, 255);\n  border: 1px solid rgb(21, 0, 255);\n  border-radius: 8px;\n  overflow: hidden;\n  transition: 0.5s;\n\n  /* overflow:visible; */\n}\n\n.board-cell {\n  /* transition-delay: 0.6s; */\n}\n\n.enemy-baord .board-cell:hover {\n  box-shadow: 0 0 8px 0px rgb(0, 153, 255);\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.ships-container {\n  gap: 1px;\n  cursor: move;\n}\n\n.ship-container {\n  height: 40px;\n  width: 40px;\n  cursor: move;\n  transition: 0.5s;\n}\n\n.ship-tile {\n  background: var(--ship-color);\n}\n\n.ship-hover {\n  background-color: rgb(0, 198, 0);\n}\n\n.ship-hover.ilegal-position {\n  background-color: red;\n}\n\n.temp-ship-tile {\n  background-color: yellow;\n}\n\n.board-cell.hit {\n  background-color: rgb(225, 14, 3);\n  border: 2px solid #ff6600;\n  --transofrm-scale: 0.8;\n  transform: scale(var(--transofrm-scale));\n}\n\n.player-board .hit {\n  transition-delay: 0.4s;\n}\n\n.player-board .miss {\n  transition-delay: 0.4s;\n}\n\n\n.miss {\n  background-color: rgb(25, 207, 227);\n  transform: scale(0.8);\n  cursor: pointer;\n}\n\n.enemy-baord .board-cell.miss:hover {\n  transform: scale(0.8);\n  cursor: auto;\n}\n\n.enemy-baord .board-cell.hit:hover {\n  transform: scale(var(--transofrm-scale));\n  cursor: auto;\n}\n\n.new-game-container {\n  height: fit-content;\n  width: fit-content;\n  align-self: center;\n  justify-self: center;\n}\n\n.new-game-container > button {\n  transition: 0.8s;\n  font-family: StardosStencil-Bold;\n  padding: 8px 16px;\n  border-radius: 8px;\n  /* font-weight: 400; */\n  font-size: 32px;\n  background-color: #151a2832;\n  border: none;\n  color: rgb(230, 230, 230);\n  text-shadow: 4px 2px rgba(255, 94, 0, 0.447);\n  text-decoration: underline;\n}\n\n.new-game-container > button:hover {\n  transform: scale(1.2);\n}\n\nbutton {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `footer {
  --gap-items: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-items);
  background: linear-gradient(#01161a 5%, #000 100%);
  /* border-top: 1px solid rgb(72, 91, 107); */
}

footer > p {
  border-left: 1px solid #ffffffae;
  padding-left: var(--gap-items);
  padding: 5px 0px 5px var(--gap-items);
  margin: 0;
  font-size: 16px;
  color: #ffffffbe;
  font-weight: 600;
}


.git-img {
  padding: 5px 0px 4px 0px;
  height: 20px;
  filter: invert(0.8);
}`, "",{"version":3,"sources":["webpack://./src/styles/footer.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,kDAAkD;EAClD,4CAA4C;AAC9C;;AAEA;EACE,gCAAgC;EAChC,8BAA8B;EAC9B,qCAAqC;EACrC,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;;AAGA;EACE,wBAAwB;EACxB,YAAY;EACZ,mBAAmB;AACrB","sourcesContent":["footer {\n  --gap-items: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-items);\n  background: linear-gradient(#01161a 5%, #000 100%);\n  /* border-top: 1px solid rgb(72, 91, 107); */\n}\n\nfooter > p {\n  border-left: 1px solid #ffffffae;\n  padding-left: var(--gap-items);\n  padding: 5px 0px 5px var(--gap-items);\n  margin: 0;\n  font-size: 16px;\n  color: #ffffffbe;\n  font-weight: 600;\n}\n\n\n.git-img {\n  padding: 5px 0px 4px 0px;\n  height: 20px;\n  filter: invert(0.8);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/AlphabetCapsLined.otf */ "./src/assets/fonts/AlphabetCapsLined.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: AlphabetCapsLined;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

header {
  background-color: #2A2B2E;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-title {

  align-self: center;
}

.header-title > p {
  margin: 0;
  font-family: AlphabetCapsLined;
  letter-spacing: 16px;
  font-size: 60px;
  text-shadow: 10px 0px rgba(255, 94, 0, 0.411);
  color: white
}
`, "",{"version":3,"sources":["webpack://./src/styles/header.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,4CAAiD;AACnD;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,8BAA8B;EAC9B,oBAAoB;EACpB,eAAe;EACf,6CAA6C;EAC7C;AACF","sourcesContent":["@font-face {\n  font-family: AlphabetCapsLined;\n  src: url(\"../assets/fonts/AlphabetCapsLined.otf\");\n}\n\nheader {\n  background-color: #2A2B2E;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.header-title {\n\n  align-self: center;\n}\n\n.header-title > p {\n  margin: 0;\n  font-family: AlphabetCapsLined;\n  letter-spacing: 16px;\n  font-size: 60px;\n  text-shadow: 10px 0px rgba(255, 94, 0, 0.411);\n  color: white\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
  margin: 0;
}

#content {
  display: grid;
  grid-template-rows: 2fr 9fr 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,0BAA0B;EAC1B,aAAa;AACf","sourcesContent":["html, body {\n  margin: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 2fr 9fr 1fr;\n  grid-template-columns: 1fr;\n  height: 100vh;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/winnerModal.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/winnerModal.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/StardosStencil-Bold.ttf */ "./src/assets/fonts/StardosStencil-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: Syne;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.hidden {
  display: none;
}

.winner-modal-container {
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(11, 45, 113, 0.554);
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}

.winner-modal-content {
  background-color: rgb(255, 255, 255);
  padding: 24px 32px;
  --winner-color: green;
  --looser-color: red;
  --border-radius: 4px;
  border-radius: 20px;
  border: 1px solid rgb(137, 125, 242);
  align-self: center;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.winner-modal-content > p {
  /* font-weight: 600; */
  font-size: 40px;
  font-family: Syne;
  word-spacing: 5px;
  letter-spacing: 1px;
  margin: 5px;
}

button.winner-modal-exit {
  align-self: flex-start;
  font-size: 16px;
  padding: 5px 7px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid rgb(136, 136, 136);
  background: rgb(255, 255, 255);
  box-shadow: 5px 5px rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  transition: 0.5s;
}

button.winner-modal-exit:hover {
  border: 1px solid black;
  box-shadow: none;
  font-weight: 800;
  transform: translate(5px, 5px)
}

.ai-winner {
  border-top: var(--border-radius) solid var(--looser-color);
  box-shadow: 0px 0px 40px 16px var(--looser-color);
  background-color: rgb(255, 255, 255);
  text-shadow: 1px 1px var(--looser-color);
}

.human-winner {
  border-top: var(--border-radius) solid var(--winner-color);
  text-shadow: 1px 1px var(--winner-color);
  box-shadow: 0px 0px 40px 16px var(--winner-color);
}
`, "",{"version":3,"sources":["webpack://./src/styles/winnerModal.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,4CAAmD;AACrD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,MAAM;EACN,OAAO;EACP,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,oCAAoC;EACpC,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,oCAAoC;EACpC,8BAA8B;EAC9B,gCAAgC;EAChC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB;AACF;;AAEA;EACE,0DAA0D;EAC1D,iDAAiD;EACjD,oCAAoC;EACpC,wCAAwC;AAC1C;;AAEA;EACE,0DAA0D;EAC1D,wCAAwC;EACxC,iDAAiD;AACnD","sourcesContent":["@font-face {\n  font-family: Syne;\n  src: url(\"../assets/fonts/StardosStencil-Bold.ttf\");\n}\n\n.hidden {\n  display: none;\n}\n\n.winner-modal-container {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgba(11, 45, 113, 0.554);\n  height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-modal-content {\n  background-color: rgb(255, 255, 255);\n  padding: 24px 32px;\n  --winner-color: green;\n  --looser-color: red;\n  --border-radius: 4px;\n  border-radius: 20px;\n  border: 1px solid rgb(137, 125, 242);\n  align-self: center;\n  justify-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n}\n\n.winner-modal-content > p {\n  /* font-weight: 600; */\n  font-size: 40px;\n  font-family: Syne;\n  word-spacing: 5px;\n  letter-spacing: 1px;\n  margin: 5px;\n}\n\nbutton.winner-modal-exit {\n  align-self: flex-start;\n  font-size: 16px;\n  padding: 5px 7px;\n  font-weight: 600;\n  border-radius: 5px;\n  border: 1px solid rgb(136, 136, 136);\n  background: rgb(255, 255, 255);\n  box-shadow: 5px 5px rgb(0, 0, 0);\n  color: rgb(0, 0, 0);\n  transition: 0.5s;\n}\n\nbutton.winner-modal-exit:hover {\n  border: 1px solid black;\n  box-shadow: none;\n  font-weight: 800;\n  transform: translate(5px, 5px)\n}\n\n.ai-winner {\n  border-top: var(--border-radius) solid var(--looser-color);\n  box-shadow: 0px 0px 40px 16px var(--looser-color);\n  background-color: rgb(255, 255, 255);\n  text-shadow: 1px 1px var(--looser-color);\n}\n\n.human-winner {\n  border-top: var(--border-radius) solid var(--winner-color);\n  text-shadow: 1px 1px var(--winner-color);\n  box-shadow: 0px 0px 40px 16px var(--winner-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/body.css":
/*!*****************************!*\
  !*** ./src/styles/body.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./body.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/body.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/footer.css":
/*!*******************************!*\
  !*** ./src/styles/footer.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/winnerModal.css":
/*!************************************!*\
  !*** ./src/styles/winnerModal.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_winnerModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./winnerModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/winnerModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_winnerModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_winnerModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_winnerModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_winnerModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/modules/logic/AIPlayer.js":
/*!******************************************!*\
  !*** ./src/js/modules/logic/AIPlayer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/js/modules/logic/Player.js");


const AIPlayer = () => {
  const mPlayer = (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])("AI");

  // Enemy board should have receiveAttack and getHitsBoard
  mPlayer.makeMove = (enemyBoard) => {
    const board = enemyBoard.getHitsBoard();
    let legalMoveFound = false;
    let result;
    const boardSize = enemyBoard.getBoardSize();
    while (!legalMoveFound) {
      const x = Math.floor(Math.random() * boardSize);
      const y = Math.floor(Math.random() * boardSize);
      if (board[x][y] === "") {
        legalMoveFound = true;
        result = enemyBoard.recieveAttack([x, y]);
      }
    }
    return result;
  };

  mPlayer.placeShips = () => {
    mPlayer.getBoard().placeShipsInRandomPositions();
  };

  return mPlayer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AIPlayer);


/***/ }),

/***/ "./src/js/modules/logic/GameController.js":
/*!************************************************!*\
  !*** ./src/js/modules/logic/GameController.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HumanPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HumanPlayer */ "./src/js/modules/logic/HumanPlayer.js");
/* harmony import */ var _AIPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AIPlayer */ "./src/js/modules/logic/AIPlayer.js");



const GameController = () => {
  let mHumanPlayer;
  let mAIPlayer;
  let mGameStatus;
  let mCurrentPlayer;
  let mIsGameStarted = false;

  const resetGame = () => {
    mIsGameStarted = false;
    mGameStatus = "undecided";
  };

  const isGameStarted = () => mIsGameStarted;

  const getCurrentPlayer = () => mCurrentPlayer.getType();

  /*
   * undecided - no player wan
   * AI - AI wan
   * Human - Human wan
   */
  const getGameStatus = () => mGameStatus;

  /* startGame expects:
   * 1 four tiles ship
   * 2 three tiles ships
   * 3 two tiles ships
   * 4 one tile ships
   * locations = [[[x1,y1], "vertical"/"horizontal",[[x2,y2]...]
   * returns a boolean value that represents the success/failure of
   * starting a new game
   */
  const startNewGame = (
    fourTileLocations,
    threeTileLocations,
    twoTilesLocations,
    oneTileLocations,
    defaultPositions = true,
  ) => {
    // initialize players and game status, human player is the one to start.
    mHumanPlayer = (0,_HumanPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])();
    mAIPlayer = (0,_AIPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])();
    mGameStatus = "undecided";
    mCurrentPlayer = mHumanPlayer;
    mIsGameStarted = true;

    mHumanPlayer.placeShips(
      fourTileLocations,
      threeTileLocations,
      twoTilesLocations,
      oneTileLocations,
      defaultPositions,
    );

    mAIPlayer.placeShips();

    return true;
  };

  /*
   * returns the hits board of the player that has been hit
   */
  const makeMove = (coordination = []) => {
    if (mGameStatus !== "undecided") {
      return null;
    }
    const emenyBoard =
      getCurrentPlayer() === "Human"
        ? mAIPlayer.getBoard()
        : mHumanPlayer.getBoard();

    const moveStatus = mCurrentPlayer.makeMove(emenyBoard, coordination);

    if (moveStatus === "ERROR") {
      return null;
    }

    if (moveStatus === "miss") {
      if (getCurrentPlayer() === "Human") {
        mCurrentPlayer = mAIPlayer;
      } else {
        mCurrentPlayer = mHumanPlayer;
      }

      return mCurrentPlayer.getBoard().getHitsBoard();
    }

    // else we have a hit
    if (moveStatus === "hit") {
      if (
        getCurrentPlayer() === "Human" &&
        mAIPlayer.getBoard().allShipsSunk()
      ) {
        mGameStatus = "Human";
      } else if (
        getCurrentPlayer() === "AI" &&
        mHumanPlayer.getBoard().allShipsSunk()
      ) {
        mGameStatus = "AI";
      }
    }
    return emenyBoard.getHitsBoard();
  };

  const isPositioningLegal = (
    fourTileLocations,
    threeTileLocations,
    twoTilesLocations,
    oneTileLocations,
  ) =>
    (0,_HumanPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])()
      .getBoard()
      .isPositioningLegal(
        fourTileLocations,
        threeTileLocations,
        twoTilesLocations,
        oneTileLocations,
      );

  return {
    startNewGame,
    makeMove,
    getCurrentPlayer,
    getGameStatus,
    isPositioningLegal,
    isGameStarted,
    resetGame,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);


/***/ }),

/***/ "./src/js/modules/logic/Gameboard.js":
/*!*******************************************!*\
  !*** ./src/js/modules/logic/Gameboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/js/modules/logic/Ship.js");


const Gameboard = () => {
  const mBoardSize = 10;
  const mShipsBoard = Array(mBoardSize)
    .fill(null)
    .map(() => Array(mBoardSize).fill(null));
  const mHitsBoard = Array(mBoardSize)
    .fill(null)
    .map(() => Array(mBoardSize).fill(""));

  const getBoardSize = () => mBoardSize;
  const mCoordinateValid = (coordinate) => {
    if (
      coordinate[0] < 0 ||
      coordinate[1] < 0 ||
      coordinate[0] >= mBoardSize ||
      coordinate[1] >= mBoardSize
    ) {
      return false;
    }
    return true;
  };

  const mCheckForNoShips = (coordination, length, orientation) => {
    const fromX = coordination[0] - 1;
    const fromY = coordination[1] - 1;
    const toX = orientation === "vertical" ? fromX + length + 1 : fromX + 2;
    const toY = orientation === "horizontal" ? fromY + length + 1 : fromY + 2;

    for (let x = fromX; x <= toX; x += 1) {
      for (let y = fromY; y <= toY; y += 1) {
        if (
          x >= 0 &&
          y >= 0 &&
          x < mBoardSize &&
          y < mBoardSize &&
          mShipsBoard[x][y] !== null
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const mMarkSurroundingOfSunkShip = (coordinate) => {
    // We will find the start of the ship and determinate if it's horizontal or vertical
    let x = coordinate[0];
    let y = coordinate[1];
    let orientation;
    // Check if horizontal
    if (
      (mCoordinateValid([x, y + 1]) && mHitsBoard[x][y + 1] === "o") ||
      (mCoordinateValid([x, y - 1]) && mHitsBoard[x][y - 1] === "o")
    ) {
      orientation = "horizontal";
    } else {
      orientation = "vertical";
    }

    while (mCoordinateValid([x, y]) && mHitsBoard[x][y] === "o") {
      if (orientation === "horizontal") {
        y -= 1;
      } else {
        x -= 1;
      }
    }
    if (orientation === "horizontal") {
      while (
        (mCoordinateValid([x, y]) && mHitsBoard[x][y] === "o") ||
        (mCoordinateValid([x, y - 1]) && mHitsBoard[x][y - 1] === "o") ||
        (mCoordinateValid([x, y + 1]) && mHitsBoard[x][y + 1] === "o")
      ) {
        for (let i = -1; i <= 1; i += 1) {
          // Mark above and below, and if it's not ship tile then the outer wall too
          if (mCoordinateValid([x + i, y]) && mHitsBoard[x + i][y] !== "o") {
            mHitsBoard[x + i][y] = "x";
          }
        }
        y += 1;
      }
    } else {
      while (
        (mCoordinateValid([x, y]) && mHitsBoard[x][y] === "o") ||
        (mCoordinateValid([x - 1, y]) && mHitsBoard[x - 1][y] === "o") ||
        (mCoordinateValid([x + 1, y]) && mHitsBoard[x + 1][y] === "o")
      ) {
        for (let i = -1; i <= 1; i += 1) {
          // Mark above and below, and if it's not ship tile then the outer wall too
          if (mCoordinateValid([x, y + i]) && mHitsBoard[x][y + i] !== "o") {
            mHitsBoard[x][y + i] = "x";
          }
        }
        x += 1;
      }
    }
  };

  /* returns a board with:
   * "o" - for tile that had ship which was hit
   * "x" - for tile that was hit and it has no ship
   * ""  - for tile that wasn't hit
   */
  const getHitsBoard = () => [...mHitsBoard];

  // returns boolean value depends on the success of the placing the ship
  const placeShip = (startCoordination, length, orientation = "horizontal") => {
    // Can't have negative size ship
    if (length <= 0) {
      return false;
    }
    // Check if coordination is in boundaries of the board
    if (!mCoordinateValid(startCoordination)) {
      return false;
    }
    // Check if orientations is correct
    if (orientation !== "horizontal" && orientation !== "vertical") {
      return false;
    }

    // Check if out of boundaries
    if (
      (orientation === "horizontal" &&
        !mCoordinateValid([
          startCoordination[0],
          startCoordination[1] + length - 1,
        ])) ||
      (orientation === "vertical" &&
        !mCoordinateValid([
          startCoordination[0] + length - 1,
          startCoordination[1],
        ]))
    ) {
      return false;
    }

    // Check for neighbouring ships
    if (!mCheckForNoShips(startCoordination, length, orientation)) {
      return false;
    }
    const x = startCoordination[0];
    const y = startCoordination[1];

    const ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
    for (let i = 0; i < length; i += 1) {
      if (orientation === "horizontal") {
        mShipsBoard[x][y + i] = ship;
      } else if (orientation === "vertical") {
        mShipsBoard[x + i][y] = ship;
      }
    }
    return true;
  };

  /*
   * returns:
   *   "hit"  - if there was a hit
   *   "miss" - if there wasn't a hit
   *   "ERROR" - if the coordination is ilegal (out of scope, coordination already been hit)
   */
  const recieveAttack = (coordination) => {
    if (!mCoordinateValid(coordination)) {
      return "ERROR";
    }
    const x = coordination[0];
    const y = coordination[1];

    if (mHitsBoard[x][y] === "o" || mHitsBoard[x][y] === "x") {
      return "ERROR";
    }

    if (mShipsBoard[x][y] === null) {
      mHitsBoard[x][y] = "x";
      return "miss";
    }

    // else we have a ship at [x][y] and that spot wasn't hit yet
    mHitsBoard[x][y] = "o";
    mShipsBoard[x][y].hit();

    // if ship was sank need to mark all surrounding as hit
    if (mShipsBoard[x][y].isSunk()) {
      mMarkSurroundingOfSunkShip(coordination);
    }
    return "hit";
  };

  // returns boolean with answer
  const allShipsSunk = () =>
    // Either it's non occupied square eighter the ship is sank
    mShipsBoard.every((row) =>
      row.every((cell) => cell === null || cell.isSunk()),
    );

  const resetBoard = () => {
    mHitsBoard.forEach((row) => row.forEach((_, index) => { row[index] = ""; }));
    mShipsBoard.forEach((row) => row.forEach((_, index) => { row[index] = null; }));
  };

  const mPlaceArrayOfShips = (shipsLocations, shipSize) => {
    const isArrangementLegal = shipsLocations.every((shipLocation) => {
      let canPlaceShip;
      if (shipSize > 1) {
        canPlaceShip = placeShip(shipLocation[0], shipSize, shipLocation[1]);
      } else {
        canPlaceShip = placeShip(shipLocation[0], shipSize);
      }
      return canPlaceShip;
    });
    return isArrangementLegal;
  };

  const isPositioningLegal = (
    fourTileLocations,
    threeTileLocations,
    twoTilesLocations,
    oneTileLocations,
  ) => {
    if (!mPlaceArrayOfShips(fourTileLocations, 4)) return false;
    if (!mPlaceArrayOfShips(threeTileLocations, 3)) return false;
    if (!mPlaceArrayOfShips(twoTilesLocations, 2)) return false;
    if (!mPlaceArrayOfShips(oneTileLocations, 1)) return false;
    resetBoard();

    return true;
  };


  const mTryRandomPosition = () => {
    const orientations = ["vertical", "horizontal"];

    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4 - i; j += 1) {
        if (
          !placeShip(
            [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
            i + 1,
            orientations[Math.floor(Math.random() * 2)],
          )
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const placeShipsInRandomPositions = () => {
    let positioningFound = false;
    while (!positioningFound) {
      positioningFound = mTryRandomPosition();
      if (!positioningFound) {
        resetBoard();
      }
    }
    return true;
  };

  return {
    getHitsBoard,
    placeShip,
    recieveAttack,
    allShipsSunk,
    getBoardSize,
    resetBoard,
    isPositioningLegal,
    placeShipsInRandomPositions,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/js/modules/logic/HumanPlayer.js":
/*!*********************************************!*\
  !*** ./src/js/modules/logic/HumanPlayer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/js/modules/logic/Player.js");


const HumanPlayer = () => {
  const mPlayer = (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])("Human");

  // Enemy board should have receiveAttack and getHitsBoard
  // returns the status of the hit (hit/miss/ERROR)
  mPlayer.makeMove = (enemyBoard, coordination) =>
    enemyBoard.recieveAttack(coordination);

  // Enemy board should have placeShip
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
  // TODO: add errors handling
  mPlayer.placeShips = (
    fourTileLocations = [],
    threeTileLocations = [],
    twoTilesLocations = [],
    oneTileLocations = [],
    defaultArrangement = true,
  ) => {
    if (defaultArrangement) {
      fourTileLocations.push([[3, 6], "horizontal"]);
      threeTileLocations.push([[0, 0], "vertical"]);
      threeTileLocations.push([[2, 2], "horizontal"]);
      twoTilesLocations.push([[0, 2], "horizontal"]);
      twoTilesLocations.push([[0, 7], "vertical"]);
      twoTilesLocations.push([[5, 2], "horizontal"]);
      oneTileLocations.push([[0, 5]]);
      oneTileLocations.push([[4, 0]]);
      oneTileLocations.push([[6, 0]]);
      oneTileLocations.push([[8, 8]]);
    }
    if (
      !mPlayer
        .getBoard()
        .isPositioningLegal(
          fourTileLocations,
          threeTileLocations,
          twoTilesLocations,
          oneTileLocations,
        )
    ) {
      return false;
    }
    mPlayer.placeArrayOfShips(fourTileLocations, 4);
    mPlayer.placeArrayOfShips(threeTileLocations, 3);
    mPlayer.placeArrayOfShips(twoTilesLocations, 2);
    mPlayer.placeArrayOfShips(oneTileLocations, 1);

    return true;
  };

  return mPlayer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HumanPlayer);


/***/ }),

/***/ "./src/js/modules/logic/Player.js":
/*!****************************************!*\
  !*** ./src/js/modules/logic/Player.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/js/modules/logic/Gameboard.js");


const Player = (type) => {
  const mType = type;
  const mGameboard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const getType = () => mType;

  const getBoard = () => mGameboard;

  const placeArrayOfShips = (shipsLocations, shipSize) => {
    shipsLocations.forEach((shipLocation) => {
      if (shipSize > 1) {
        getBoard().placeShip(shipLocation[0], shipSize, shipLocation[1]);
      } else {
        getBoard().placeShip(shipLocation[0], shipSize);
      }
    });
  };

  return {
    getType,
    getBoard,
    placeArrayOfShips,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/js/modules/logic/Ship.js":
/*!**************************************!*\
  !*** ./src/js/modules/logic/Ship.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  const mLength = length;
  let mNumberOfHits = 0;

  const hit = () => {
    mNumberOfHits += mNumberOfHits < mLength ? 1 : 0;
  }

  const isSunk = () => mNumberOfHits === mLength;

  return {
    hit,
    isSunk,
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/js/modules/ui/DisplayHandler.js":
/*!*********************************************!*\
  !*** ./src/js/modules/ui/DisplayHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/js/modules/ui/components/header.js");
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/body */ "./src/js/modules/ui/components/body.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ "./src/js/modules/ui/components/footer.js");






const DisplayHandler = (gameController) => {
  const content = document.querySelector("#content");

  content.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild((0,_components_body__WEBPACK_IMPORTED_MODULE_2__["default"])(gameController));
  content.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayHandler);


/***/ }),

/***/ "./src/js/modules/ui/components/body.js":
/*!**********************************************!*\
  !*** ./src/js/modules/ui/components/body.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../styles/body.css */ "./src/styles/body.css");
/* harmony import */ var _styles_winnerModal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../styles/winnerModal.css */ "./src/styles/winnerModal.css");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utils */ "./src/js/modules/ui/util/utils.js");
/* harmony import */ var _playerBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerBoard */ "./src/js/modules/ui/components/playerBoard.js");
/* harmony import */ var _enemyBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemyBoard */ "./src/js/modules/ui/components/enemyBoard.js");






const createBoardsSection = (gameController) => {
  const boardsContainer = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])("div", ["boards-container"]);
  boardsContainer.appendChild((0,_playerBoard__WEBPACK_IMPORTED_MODULE_3__.PlayerBoard)(gameController));
  boardsContainer.appendChild((0,_enemyBoard__WEBPACK_IMPORTED_MODULE_4__["default"])(gameController));

  return boardsContainer;
};

const cleanHitsFromBoards = () => {
  const boards = document.querySelectorAll(".board-container");
  boards.forEach((board) =>
    [...board.children].forEach((cell) => {
      cell.classList.remove("miss", "hit");
    }),
  );
};

const createStartNewGameButton = (gameController) => {
  const startNewGameContainer = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])("div", ["new-game-container"]);
  const newGameButton = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])("button", ["new-game"]);
  newGameButton.textContent = "✴ Start New Game ✴";
  
  const resetGameButton = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])("button", ["reset-game"]);
  resetGameButton.textContent = "Reset ✴ Game";


  newGameButton.addEventListener("click", () => {
    resetGameButton.classList.toggle('hidden');
    newGameButton.classList.toggle('hidden');
    gameController.startNewGame(
      (0,_playerBoard__WEBPACK_IMPORTED_MODULE_3__.arrayOfNTilesLongShip)(4),
      (0,_playerBoard__WEBPACK_IMPORTED_MODULE_3__.arrayOfNTilesLongShip)(3),
      (0,_playerBoard__WEBPACK_IMPORTED_MODULE_3__.arrayOfNTilesLongShip)(2),
      (0,_playerBoard__WEBPACK_IMPORTED_MODULE_3__.arrayOfNTilesLongShip)(1),
      false,
    );
  });

  resetGameButton.addEventListener("click", () => {
    resetGameButton.classList.toggle('hidden');
    newGameButton.classList.toggle('hidden');
    gameController.resetGame();
    cleanHitsFromBoards();
  });
  resetGameButton.classList.toggle('hidden');

  startNewGameContainer.appendChild(newGameButton);
  startNewGameContainer.appendChild(resetGameButton);

  return startNewGameContainer;
};

const createWinnerModal = () => {
  const closeModal = () => {
    const modal = document.querySelector('.winner-modal-container');
    modal.style.display = "none";
  }

  const modalContainer = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ["winner-modal-container"]);
  const modalContent = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ["winner-modal-content"]);
  modalContainer.appendChild(modalContent);

  const modalText = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('p', ["winner-modal"]);
  
  const modalExitButton = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('button', ["winner-modal-exit"]);
  
  modalExitButton.textContent = "X";
  modalExitButton.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      closeModal();
    }
  });

  modalContent.appendChild(modalText);
  modalContent.appendChild(modalExitButton);


  return modalContainer;
}

const Body = (gameController) => {
  const body = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])("div", [], [["id", "body"]]);

  body.appendChild(createBoardsSection(gameController));
  body.appendChild(createStartNewGameButton(gameController));
  body.appendChild(createWinnerModal());
  return body;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Body);


/***/ }),

/***/ "./src/js/modules/ui/components/enemyBoard.js":
/*!****************************************************!*\
  !*** ./src/js/modules/ui/components/enemyBoard.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils */ "./src/js/modules/ui/util/utils.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/js/modules/ui/components/gameboard.js");
/* harmony import */ var _playerBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerBoard */ "./src/js/modules/ui/components/playerBoard.js");




const renderEnemyHits = (enemyHitsBoard) => {
  enemyHitsBoard.forEach((row, rowIndex) =>
    row.forEach((column, columnIndex) => {
      if (column === "") return;
      const cell = document.querySelector(
        `.enemy-baord .board-cell[data-row="${rowIndex}"][data-column="${columnIndex}"]`,
      );
      if (column === "o") cell.classList.add("hit");
      if (column === "x") cell.classList.add("miss");
    }),
  );
};

const EnemyBoard = (gameController) => {
  const enemyBoard = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["enemy-baord"]);
  enemyBoard.appendChild((0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());
  [...enemyBoard.firstElementChild.children].forEach((boardCell) => {
    boardCell.addEventListener("click", (e) => {
      // first check if we can make a move
      if (
        !gameController.isGameStarted() ||
        gameController.getGameStatus() !== "undecided" ||
        gameController.getCurrentPlayer() !== "Human" ||
        e.target.classList.contains("hit") ||
        e.target.classList.contains("miss")
      ) {
        return;
      }

      const { row, column } = e.target.dataset;
      // make the move
      const enemyHitsBoard = gameController.makeMove([
        Number.parseInt(row, 10),
        Number.parseInt(column, 10),
      ]);
      // render the move
      renderEnemyHits(enemyHitsBoard);

      // check if player wan
      if (gameController.getGameStatus() === "Human") {
        const modal = document.querySelector(".winner-modal-container");
        const modalParagraph = document.querySelector(
          ".winner-modal-content>p",
        );
        modalParagraph.textContent = "Congratulations! You've won!";
        modal.style.display = "flex";
        modal.firstElementChild.classList.add("ai-winner");
        return;
      }

      if (gameController.getCurrentPlayer() === "AI") {
        (0,_playerBoard__WEBPACK_IMPORTED_MODULE_2__.getHitsOnPlayerBoard)();
      }
    });
  });

  return enemyBoard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnemyBoard);


/***/ }),

/***/ "./src/js/modules/ui/components/footer.js":
/*!************************************************!*\
  !*** ./src/js/modules/ui/components/footer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../styles/footer.css */ "./src/styles/footer.css");
/* harmony import */ var _assets_imgs_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/imgs/github.png */ "./src/assets/imgs/github.png");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utils */ "./src/js/modules/ui/util/utils.js");




// Create git link with git icon
const createGitLinkImg = () => {
  const gitLink = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "a",
    [],
    [
      ["href", "https://github.com/Sokolan/Battleships"],
      ["target", "_blank"],
    ],
  );
  const gitIcon = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('img', ["git-img"], [["src", _assets_imgs_github_png__WEBPACK_IMPORTED_MODULE_1__]]);
  gitLink.appendChild(gitIcon);
  return gitLink;
};

const createCreatorName = (creatorName) => {
  const creator = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])("p", ["creator"]);
  creator.textContent = creatorName;
  return creator;
};

const Footer = () => {

  const footerContainer = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__["default"])("footer");

  footerContainer.appendChild(createGitLinkImg());
  footerContainer.appendChild(createCreatorName("Sokolan"));
  return footerContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/js/modules/ui/components/gameboard.js":
/*!***************************************************!*\
  !*** ./src/js/modules/ui/components/gameboard.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils */ "./src/js/modules/ui/util/utils.js");


const UIGameboard = () => {
  const board = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["board-container"]);
  const boardSize = 10;

  for (let row = 0; row < boardSize; row += 1) {
    for (let column = 0; column < boardSize; column += 1) {
      const boardCell = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "div",
        ["board-cell"],
        [
          ["data-row", `${row}`],
          ["data-column", `${column}`],
        ],
      );

      board.appendChild(boardCell);
    }
  }

  return board;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIGameboard);


/***/ }),

/***/ "./src/js/modules/ui/components/header.js":
/*!************************************************!*\
  !*** ./src/js/modules/ui/components/header.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../styles/header.css */ "./src/styles/header.css");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/utils */ "./src/js/modules/ui/util/utils.js");



const createTitle = () => {
  const container = (0,_util_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("div", ["header-title"]);
  const paragraph = (0,_util_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p");
  paragraph.textContent = "•B•a•t•t•l•e•S•h•i•p•s•";

  container.appendChild(paragraph);
  return container;
};

const Header = () => {
  const header = (0,_util_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("header");
  header.appendChild(createTitle());

  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/js/modules/ui/components/playerBoard.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/ui/components/playerBoard.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerBoard: () => (/* binding */ PlayerBoard),
/* harmony export */   arrayOfNTilesLongShip: () => (/* binding */ arrayOfNTilesLongShip),
/* harmony export */   getHitsOnPlayerBoard: () => (/* binding */ getHitsOnPlayerBoard)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils */ "./src/js/modules/ui/util/utils.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/js/modules/ui/components/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/js/modules/ui/components/ship.js");




let playerBoard;
const rowSize = 10;
let gameController = null;

// store the tiles for the initial locations
// 1 4 tiles, 2 3 tiles, 3 2 tiles, 4 1 tiles
const shipsAndLocations = [];

let currentShipDragged = null;

const arrayOfNTilesLongShip = (length) => {
  const arr = [];
  let from;
  let to;
  switch (length) {
    case 4:
      from = 0;
      to = 0;
      break;
    case 3:
      from = 1;
      to = 2;
      break;
    case 2:
      from = 3;
      to = 5;
      break;
    case 1:
      from = 6;
      to = 9;
      break;
    default:
      console.log("LENGTH ILLEGAL");
  }

  for (let i = from; i <= to; i += 1) {
    arr.push([
      [
        Number.parseInt(shipsAndLocations[i].location.dataset.row, 10),
        Number.parseInt(shipsAndLocations[i].location.dataset.column, 10),
      ],
      shipsAndLocations[i].ship.dataset.orientation,
    ]);
  }
  return arr;
};

const checkShipsPosition = () =>
  gameController.isPositioningLegal(
    arrayOfNTilesLongShip(4),
    arrayOfNTilesLongShip(3),
    arrayOfNTilesLongShip(2),
    arrayOfNTilesLongShip(1),
  );
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
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(4, "horizontal"),
    location: playerBoardArray[3 * rowSize + 6],
  });
  // 3 tiles ships
  shipsAndLocations.push({
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(3, "vertical"),
    location: playerBoardArray[0 * rowSize + 0],
  });
  shipsAndLocations.push({
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(3, "horizontal"),
    location: playerBoardArray[2 * rowSize + 2],
  });
  // 2 tiles ships
  shipsAndLocations.push({
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(2, "horizontal"),
    location: playerBoardArray[0 * rowSize + 2],
  });
  shipsAndLocations.push({
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(2, "vertical"),
    location: playerBoardArray[0 * rowSize + 7],
  });
  shipsAndLocations.push({
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(2, "horizontal"),
    location: playerBoardArray[5 * rowSize + 2],
  });
  // 1 tiles ships
  shipsAndLocations.push({
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(1, "horizontal"),
    location: playerBoardArray[4 * rowSize + 0],
  });
  shipsAndLocations.push({
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(1, "horizontal"),
    location: playerBoardArray[6 * rowSize + 0],
  });
  shipsAndLocations.push({
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(1, "horizontal"),
    location: playerBoardArray[8 * rowSize + 8],
  });
  shipsAndLocations.push({
    ship: (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(1, "horizontal"),
    location: playerBoardArray[0 * rowSize + 5],
  });
};

const renderHits = (humanHitsBoard) => {
  humanHitsBoard.forEach((row, rowIndex) =>
    row.forEach((column, columnIndex) => {
      if (column === "") return;
      const cell = document.querySelector(
        `.player-board .board-cell[data-row="${rowIndex}"][data-column="${columnIndex}"]`,
      );
      if (column === "o") cell.classList.add("hit");
      if (column === "x") cell.classList.add("miss");
      if (column === "o" || column === "x") {
        // cell.
      }
    }),
  );
};

const getHitsOnPlayerBoard = () => {
  // first check if we can make a move
  while (
    gameController.getGameStatus() !== "undecided" ||
    gameController.getCurrentPlayer() === "AI"
  ) {
    const humanHitsBoard = gameController.makeMove();
    renderHits(humanHitsBoard);
  }
  if (gameController.getGameStatus() === "AI") {
    const modal = document.querySelector(".winner-modal-container");
    const modalParagraph = document.querySelector(".winner-modal-content>p");
    modalParagraph.textContent = "Unfortunately you've lost";
    modal.firstElementChild.style.display = "flex";
  }
};

const renderShip = (shipNum) => {
  const { ship, location } = shipsAndLocations[shipNum];
  location.appendChild(ship);
  const playerBoardArray = [...playerBoard.firstElementChild.children];
  for (let i = 0; i < ship.dataset.length; i += 1) {
    const row = Number.parseInt(location.dataset.row, 10);
    const column = Number.parseInt(location.dataset.column, 10);

    if (ship.dataset.orientation === "horizontal") {
      playerBoardArray[row * rowSize + column + i].classList.add("ship-tile");
    } else {
      playerBoardArray[(row + i) * rowSize + column].classList.add("ship-tile");
    }
  }
};

const deRenderShip = (shipNum) => {
  const { ship, location } = shipsAndLocations[shipNum];
  location.appendChild(ship);
  const playerBoardArray = [...playerBoard.firstElementChild.children];
  for (let i = 0; i < ship.dataset.length; i += 1) {
    const row = Number.parseInt(location.dataset.row, 10);
    const column = Number.parseInt(location.dataset.column, 10);

    if (ship.dataset.orientation === "horizontal") {
      playerBoardArray[row * rowSize + column + i].classList.remove(
        "ship-tile",
      );
    } else {
      playerBoardArray[(row + i) * rowSize + column].classList.remove(
        "ship-tile",
      );
    }
  }
};

const setShipsEventListeners = () => {
  shipsAndLocations.forEach((shipAndLocation) => {
    const { ship } = shipAndLocation;
    ship.addEventListener("dragstart", (e) => {
      if (gameController.isGameStarted()) {
        return;
      }
      currentShipDragged = e.target;
      deRenderShip(currentShipDragged.dataset.shipnum);
    });
    ship.addEventListener("click", () => {
      const switchDirection = () => {
        const direction = shipAndLocation.ship.dataset.orientation;
        if (direction === "horizontal") {
          ship.dataset.orientation = "vertical";
        } else {
          ship.dataset.orientation = "horizontal";
        }
      };
      switchDirection();
      if (!checkShipsPosition()) {
        switchDirection();
        return;
      }
      switchDirection();
      deRenderShip(ship.dataset.shipnum);
      switchDirection();
      renderShip(ship.dataset.shipnum);
    });
  });
};

const PlayerBoard = (gameControllerInput) => {
  playerBoard = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["player-board"]);
  playerBoard.appendChild((0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());
  gameController = gameControllerInput;
  [...playerBoard.firstElementChild.children].forEach((boardCell) => {
    boardCell.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    boardCell.addEventListener("dragenter", (e) => {
      if (
        !currentShipDragged ||
        !e.target.classList.contains("board-cell") ||
        e.target.classList.contains("ship-tile")
      ) {
        if (e.target !== currentShipDragged) {
          return;
        }
      }

      const prevLocation =
        shipsAndLocations[currentShipDragged.dataset.shipnum].location;
      if (e.target !== currentShipDragged) {
        shipsAndLocations[currentShipDragged.dataset.shipnum].location =
          e.target;
      }

      if (checkShipsPosition()) {
        e.target.classList.add("ship-hover");
      } else {
        e.target.classList.add("ship-hover", "ilegal-position");
      }

      shipsAndLocations[currentShipDragged.dataset.shipnum].location =
        prevLocation;
    });

    boardCell.addEventListener("dragleave", (e) => {
      if (!currentShipDragged) {
        return;
      }
      e.target.classList.remove("ship-hover", "ilegal-position");
    });

    boardCell.addEventListener("drag", (e) => {
      if (gameController.isGameStarted()) return;
      e.target.parentNode.classList.remove("ship-hover");
    });

    boardCell.addEventListener("drop", (e) => {
      e.preventDefault();

      // if the draggable object isn't ship-container, nothing more to do
      if (!currentShipDragged) {
        return;
      }
      const currentShipNum = currentShipDragged.dataset.shipnum;
      e.target.classList.remove("ship-hover");

      // if the position ilegal, nothing more to do
      const prevLocation = shipsAndLocations[currentShipNum].location;

      if (!e.target.classList.contains("ship-container")) {
        shipsAndLocations[currentShipNum].location = e.target;
      }

      if (!checkShipsPosition()) {
        shipsAndLocations[currentShipNum].location = prevLocation;
        renderShip(currentShipNum);
        currentShipDragged = null;
        return;
      }
      // If the position is legal and we're in board-cell element and we're dragging a ship
      // We can add our ship safely
      deRenderShip(currentShipNum);
      if (!e.target.classList.contains("ship-container")) {
        e.target.appendChild(currentShipDragged);
        shipsAndLocations[currentShipNum].location = e.target;
      }
      renderShip(currentShipNum);

      // need to clear old ship location
      currentShipDragged = null;
    });

    boardCell.addEventListener("dragend", (e) => {
      if (
        currentShipDragged &&
        !e.target.classList.contains("board-cell") &&
        !e.target.parentNode.parentNode.classList.contains("player-board")
      ) {
        renderShip(currentShipDragged.dataset.shipnum);
      }
    });
  });

  initializeShipsAndLocations(playerBoard);
  setShipsEventListeners();
  shipsAndLocations.forEach((shipAndLocation, index) => {
    renderShip(index);
  });

  return playerBoard;
};


/***/ }),

/***/ "./src/js/modules/ui/components/ship.js":
/*!**********************************************!*\
  !*** ./src/js/modules/ui/components/ship.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils */ "./src/js/modules/ui/util/utils.js");


let shipNum = 0;

const UIShip = (length, orientation) => {
  const shipContainer = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    ["ship-container"],
    [
      ["draggable", "true"],
      ["data-shipNum", shipNum],
      ["data-orientation", orientation],
      ["data-length", length],
    ],
  );
  shipNum += 1;

  return shipContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIShip);


/***/ }),

/***/ "./src/js/modules/ui/util/utils.js":
/*!*****************************************!*\
  !*** ./src/js/modules/ui/util/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(type, classes = [], attributes = []) {
  const element = document.createElement(type);
  classes.forEach(elementClass => {
    element.classList.add(elementClass);
  });
  attributes.forEach(elementAttribute => {
    element.setAttribute(elementAttribute[0], elementAttribute[1]);
  });

  return element;
};

/***/ }),

/***/ "./src/assets/fonts/AlphabetCapsLined.otf":
/*!************************************************!*\
  !*** ./src/assets/fonts/AlphabetCapsLined.otf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e858a52c74779f0a7113.otf";

/***/ }),

/***/ "./src/assets/fonts/StardosStencil-Bold.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/StardosStencil-Bold.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f0aada097920b373758.ttf";

/***/ }),

/***/ "./src/assets/imgs/github.png":
/*!************************************!*\
  !*** ./src/assets/imgs/github.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c95b85d86a7c25b6f3c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_logic_GameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic/GameController */ "./src/js/modules/logic/GameController.js");
/* harmony import */ var _modules_ui_DisplayHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui/DisplayHandler */ "./src/js/modules/ui/DisplayHandler.js");



const gameController = (0,_modules_logic_GameController__WEBPACK_IMPORTED_MODULE_0__["default"])();
// GameController
(0,_modules_ui_DisplayHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(gameController);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGVzaGlwcy8uL3NyYy9zdHlsZXMvYm9keS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMvd2lubmVyTW9kYWwuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMvYm9keS5jc3M/NTk5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzcz83ZTkyIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzP2U2OGIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy93aW5uZXJNb2RhbC5jc3M/YThlYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvbG9naWMvQUlQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvbW9kdWxlcy9sb2dpYy9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9tb2R1bGVzL2xvZ2ljL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9tb2R1bGVzL2xvZ2ljL0h1bWFuUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvbG9naWMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvbG9naWMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9tb2R1bGVzL3VpL0Rpc3BsYXlIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvdWkvY29tcG9uZW50cy9ib2R5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvdWkvY29tcG9uZW50cy9lbmVteUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvdWkvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvbW9kdWxlcy91aS9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9tb2R1bGVzL3VpL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvdWkvY29tcG9uZW50cy9wbGF5ZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9tb2R1bGVzL3VpL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9tb2R1bGVzL3VpL3V0aWwvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1N0YXJkb3NTdGVuY2lsLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFN0YXJkb3NTdGVuY2lsLUJvbGQ7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4jYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDExNjFhIDE1JSwgIzBkOGZhOSA2MCUsICNiYmVjZjYpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTVweDtcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDRweDtcbiAgaGVpZ2h0OiAzMCU7XG4gIC0tZ3JpZC1zaXplOiAxMDtcbiAgLS1jZWxsLXNpemU6IDQwcHg7XG4gIC0tc2hpcC1jb2xvcjogcmdiKDEyLCAyMCwgNzQpO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDNweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tZ3JpZC1zaXplKSwgdmFyKC0tY2VsbC1zaXplKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWdyaWQtc2l6ZSksIHZhcigtLWNlbGwtc2l6ZSkpO1xuICBib3gtc2hhZG93OiAwIDAgMTZweCAwcHggcmdiYSgyNiwgMTc2LCAyMzAsIDAuNTc5KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAxNjAsIDIyNywgMC4zMzUpO1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gIGJhY2tncm91bmQ6IHJnYigyMDgsIDIzMywgMjU1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxLCAwLCAyNTUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG5cbiAgLyogb3ZlcmZsb3c6dmlzaWJsZTsgKi9cbn1cblxuLmJvYXJkLWNlbGwge1xuICAvKiB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzOyAqL1xufVxuXG4uZW5lbXktYmFvcmQgLmJvYXJkLWNlbGw6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDBweCByZ2IoMCwgMTUzLCAyNTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNoaXBzLWNvbnRhaW5lciB7XG4gIGdhcDogMXB4O1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5zaGlwLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGN1cnNvcjogbW92ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnNoaXAtdGlsZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNoaXAtY29sb3IpO1xufVxuXG4uc2hpcC1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxOTgsIDApO1xufVxuXG4uc2hpcC1ob3Zlci5pbGVnYWwtcG9zaXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50ZW1wLXNoaXAtdGlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLmJvYXJkLWNlbGwuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMTQsIDMpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmY2NjAwO1xuICAtLXRyYW5zb2ZybS1zY2FsZTogMC44O1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXRyYW5zb2ZybS1zY2FsZSkpO1xufVxuXG4ucGxheWVyLWJvYXJkIC5oaXQge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4ucGxheWVyLWJvYXJkIC5taXNzIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbn1cblxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMjA3LCAyMjcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVuZW15LWJhb3JkIC5ib2FyZC1jZWxsLm1pc3M6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuLmVuZW15LWJhb3JkIC5ib2FyZC1jZWxsLmhpdDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tdHJhbnNvZnJtLXNjYWxlKSk7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuLm5ldy1nYW1lLWNvbnRhaW5lciB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLm5ldy1nYW1lLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IDAuOHM7XG4gIGZvbnQtZmFtaWx5OiBTdGFyZG9zU3RlbmNpbC1Cb2xkO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBmb250LXdlaWdodDogNDAwOyAqL1xuICBmb250LXNpemU6IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTFhMjgzMjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xuICB0ZXh0LXNoYWRvdzogNHB4IDJweCByZ2JhKDI1NSwgOTQsIDAsIDAuNDQ3KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5uZXctZ2FtZS1jb250YWluZXIgPiBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ib2R5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyw0Q0FBbUQ7QUFDckQ7O0FBRUE7RUFDRSxvRUFBb0U7RUFDcEUsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTOztFQUVULDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixpRUFBaUU7RUFDakUsOERBQThEO0VBQzlELGtEQUFrRDtFQUNsRCxrQkFBa0I7RUFDbEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7RUFFaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSxtQ0FBbUM7RUFDbkMscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRDQUE0QztFQUM1QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFN0YXJkb3NTdGVuY2lsLUJvbGQ7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL1N0YXJkb3NTdGVuY2lsLUJvbGQudHRmXFxcIik7XFxufVxcblxcbiNib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDExNjFhIDE1JSwgIzBkOGZhOSA2MCUsICNiYmVjZjYpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE1cHg7XFxuXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGhlaWdodDogMzAlO1xcbiAgLS1ncmlkLXNpemU6IDEwO1xcbiAgLS1jZWxsLXNpemU6IDQwcHg7XFxuICAtLXNoaXAtY29sb3I6IHJnYigxMiwgMjAsIDc0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDNweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ncmlkLXNpemUpLCB2YXIoLS1jZWxsLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWdyaWQtc2l6ZSksIHZhcigtLWNlbGwtc2l6ZSkpO1xcbiAgYm94LXNoYWRvdzogMCAwIDE2cHggMHB4IHJnYmEoMjYsIDE3NiwgMjMwLCAwLjU3OSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAxNjAsIDIyNywgMC4zMzUpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjA4LCAyMzMsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEsIDAsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG5cXG4gIC8qIG92ZXJmbG93OnZpc2libGU7ICovXFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIC8qIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7ICovXFxufVxcblxcbi5lbmVteS1iYW9yZCAuYm9hcmQtY2VsbDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgOHB4IDBweCByZ2IoMCwgMTUzLCAyNTUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gIGdhcDogMXB4O1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBjdXJzb3I6IG1vdmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uc2hpcC10aWxlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uc2hpcC1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTk4LCAwKTtcXG59XFxuXFxuLnNoaXAtaG92ZXIuaWxlZ2FsLXBvc2l0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRlbXAtc2hpcC10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmJvYXJkLWNlbGwuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDE0LCAzKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjY2MDA7XFxuICAtLXRyYW5zb2ZybS1zY2FsZTogMC44O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS10cmFuc29mcm0tc2NhbGUpKTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCAuaGl0IHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQgLm1pc3Mge1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcXG59XFxuXFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAyMDcsIDIyNyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbmVteS1iYW9yZCAuYm9hcmQtY2VsbC5taXNzOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmVuZW15LWJhb3JkIC5ib2FyZC1jZWxsLmhpdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXRyYW5zb2ZybS1zY2FsZSkpO1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4ubmV3LWdhbWUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1nYW1lLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiAwLjhzO1xcbiAgZm9udC1mYW1pbHk6IFN0YXJkb3NTdGVuY2lsLUJvbGQ7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC8qIGZvbnQtd2VpZ2h0OiA0MDA7ICovXFxuICBmb250LXNpemU6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxYTI4MzI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgdGV4dC1zaGFkb3c6IDRweCAycHggcmdiYSgyNTUsIDk0LCAwLCAwLjQ0Nyk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5ldy1nYW1lLWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZm9vdGVyIHtcbiAgLS1nYXAtaXRlbXM6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IHZhcigtLWdhcC1pdGVtcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDExNjFhIDUlLCAjMDAwIDEwMCUpO1xuICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDcyLCA5MSwgMTA3KTsgKi9cbn1cblxuZm9vdGVyID4gcCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZmFlO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdhcC1pdGVtcyk7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IHZhcigtLWdhcC1pdGVtcyk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZmJlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbi5naXQtaW1nIHtcbiAgcGFkZGluZzogNXB4IDBweCA0cHggMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDAuOCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtEQUFrRDtFQUNsRCw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7OztBQUdBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZm9vdGVyIHtcXG4gIC0tZ2FwLWl0ZW1zOiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tZ2FwLWl0ZW1zKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDExNjFhIDUlLCAjMDAwIDEwMCUpO1xcbiAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig3MiwgOTEsIDEwNyk7ICovXFxufVxcblxcbmZvb3RlciA+IHAge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmYWU7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdhcC1pdGVtcyk7XFxuICBwYWRkaW5nOiA1cHggMHB4IDVweCB2YXIoLS1nYXAtaXRlbXMpO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNmZmZmZmZiZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcblxcbi5naXQtaW1nIHtcXG4gIHBhZGRpbmc6IDVweCAwcHggNHB4IDBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDAuOCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0FscGhhYmV0Q2Fwc0xpbmVkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBBbHBoYWJldENhcHNMaW5lZDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQTJCMkU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcblxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItdGl0bGUgPiBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogQWxwaGFiZXRDYXBzTGluZWQ7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDYwcHg7XG4gIHRleHQtc2hhZG93OiAxMHB4IDBweCByZ2JhKDI1NSwgOTQsIDAsIDAuNDExKTtcbiAgY29sb3I6IHdoaXRlXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDhCQUE4QjtFQUM5Qiw0Q0FBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLDZDQUE2QztFQUM3QztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEFscGhhYmV0Q2Fwc0xpbmVkO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9BbHBoYWJldENhcHNMaW5lZC5vdGZcXFwiKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQTJCMkU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG5cXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci10aXRsZSA+IHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IEFscGhhYmV0Q2Fwc0xpbmVkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICB0ZXh0LXNoYWRvdzogMTBweCAwcHggcmdiYSgyNTUsIDk0LCAwLCAwLjQxMSk7XFxuICBjb2xvcjogd2hpdGVcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDlmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBoZWlnaHQ6IDEwMHZoO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA5ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9TdGFyZG9zU3RlbmNpbC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTeW5lO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi53aW5uZXItbW9kYWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsIDQ1LCAxMTMsIDAuNTU0KTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndpbm5lci1tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gIC0td2lubmVyLWNvbG9yOiBncmVlbjtcbiAgLS1sb29zZXItY29sb3I6IHJlZDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzcsIDEyNSwgMjQyKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDQwcHg7XG59XG5cbi53aW5uZXItbW9kYWwtY29udGVudCA+IHAge1xuICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBTeW5lO1xuICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmJ1dHRvbi53aW5uZXItbW9kYWwtZXhpdCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNXB4IDdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTM2LCAxMzYsIDEzNik7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCByZ2IoMCwgMCwgMCk7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbmJ1dHRvbi53aW5uZXItbW9kYWwtZXhpdDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXdlaWdodDogODAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweClcbn1cblxuLmFpLXdpbm5lciB7XG4gIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1yYWRpdXMpIHNvbGlkIHZhcigtLWxvb3Nlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCAxNnB4IHZhcigtLWxvb3Nlci1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tbG9vc2VyLWNvbG9yKTtcbn1cblxuLmh1bWFuLXdpbm5lciB7XG4gIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1yYWRpdXMpIHNvbGlkIHZhcigtLXdpbm5lci1jb2xvcik7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLXdpbm5lci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCAxNnB4IHZhcigtLXdpbm5lci1jb2xvcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2lubmVyTW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRDQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1AsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCxpREFBaUQ7RUFDakQsb0NBQW9DO0VBQ3BDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCx3Q0FBd0M7RUFDeEMsaURBQWlEO0FBQ25EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFN5bmU7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL1N0YXJkb3NTdGVuY2lsLUJvbGQudHRmXFxcIik7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLndpbm5lci1tb2RhbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgNDUsIDExMywgMC41NTQpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndpbm5lci1tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIHBhZGRpbmc6IDI0cHggMzJweDtcXG4gIC0td2lubmVyLWNvbG9yOiBncmVlbjtcXG4gIC0tbG9vc2VyLWNvbG9yOiByZWQ7XFxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTM3LCAxMjUsIDI0Mik7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ud2lubmVyLW1vZGFsLWNvbnRlbnQgPiBwIHtcXG4gIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LWZhbWlseTogU3luZTtcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5idXR0b24ud2lubmVyLW1vZGFsLWV4aXQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzNiwgMTM2LCAxMzYpO1xcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCByZ2IoMCwgMCwgMCk7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuYnV0dG9uLndpbm5lci1tb2RhbC1leGl0OmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweClcXG59XFxuXFxuLmFpLXdpbm5lciB7XFxuICBib3JkZXItdG9wOiB2YXIoLS1ib3JkZXItcmFkaXVzKSBzb2xpZCB2YXIoLS1sb29zZXItY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDE2cHggdmFyKC0tbG9vc2VyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWxvb3Nlci1jb2xvcik7XFxufVxcblxcbi5odW1hbi13aW5uZXIge1xcbiAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLXJhZGl1cykgc29saWQgdmFyKC0td2lubmVyLWNvbG9yKTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLXdpbm5lci1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggMTZweCB2YXIoLS13aW5uZXItY29sb3IpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aW5uZXJNb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbm5lck1vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuY29uc3QgQUlQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1QbGF5ZXIgPSBQbGF5ZXIoXCJBSVwiKTtcblxuICAvLyBFbmVteSBib2FyZCBzaG91bGQgaGF2ZSByZWNlaXZlQXR0YWNrIGFuZCBnZXRIaXRzQm9hcmRcbiAgbVBsYXllci5tYWtlTW92ZSA9IChlbmVteUJvYXJkKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBlbmVteUJvYXJkLmdldEhpdHNCb2FyZCgpO1xuICAgIGxldCBsZWdhbE1vdmVGb3VuZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgY29uc3QgYm9hcmRTaXplID0gZW5lbXlCb2FyZC5nZXRCb2FyZFNpemUoKTtcbiAgICB3aGlsZSAoIWxlZ2FsTW92ZUZvdW5kKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgaWYgKGJvYXJkW3hdW3ldID09PSBcIlwiKSB7XG4gICAgICAgIGxlZ2FsTW92ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgcmVzdWx0ID0gZW5lbXlCb2FyZC5yZWNpZXZlQXR0YWNrKFt4LCB5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgbVBsYXllci5wbGFjZVNoaXBzID0gKCkgPT4ge1xuICAgIG1QbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXBzSW5SYW5kb21Qb3NpdGlvbnMoKTtcbiAgfTtcblxuICByZXR1cm4gbVBsYXllcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFJUGxheWVyO1xuIiwiaW1wb3J0IEh1bWFuUGxheWVyIGZyb20gXCIuL0h1bWFuUGxheWVyXCI7XG5pbXBvcnQgQUlQbGF5ZXIgZnJvbSBcIi4vQUlQbGF5ZXJcIjtcblxuY29uc3QgR2FtZUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGxldCBtSHVtYW5QbGF5ZXI7XG4gIGxldCBtQUlQbGF5ZXI7XG4gIGxldCBtR2FtZVN0YXR1cztcbiAgbGV0IG1DdXJyZW50UGxheWVyO1xuICBsZXQgbUlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcblxuICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgbUlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBtR2FtZVN0YXR1cyA9IFwidW5kZWNpZGVkXCI7XG4gIH07XG5cbiAgY29uc3QgaXNHYW1lU3RhcnRlZCA9ICgpID0+IG1Jc0dhbWVTdGFydGVkO1xuXG4gIGNvbnN0IGdldEN1cnJlbnRQbGF5ZXIgPSAoKSA9PiBtQ3VycmVudFBsYXllci5nZXRUeXBlKCk7XG5cbiAgLypcbiAgICogdW5kZWNpZGVkIC0gbm8gcGxheWVyIHdhblxuICAgKiBBSSAtIEFJIHdhblxuICAgKiBIdW1hbiAtIEh1bWFuIHdhblxuICAgKi9cbiAgY29uc3QgZ2V0R2FtZVN0YXR1cyA9ICgpID0+IG1HYW1lU3RhdHVzO1xuXG4gIC8qIHN0YXJ0R2FtZSBleHBlY3RzOlxuICAgKiAxIGZvdXIgdGlsZXMgc2hpcFxuICAgKiAyIHRocmVlIHRpbGVzIHNoaXBzXG4gICAqIDMgdHdvIHRpbGVzIHNoaXBzXG4gICAqIDQgb25lIHRpbGUgc2hpcHNcbiAgICogbG9jYXRpb25zID0gW1tbeDEseTFdLCBcInZlcnRpY2FsXCIvXCJob3Jpem9udGFsXCIsW1t4Mix5Ml0uLi5dXG4gICAqIHJldHVybnMgYSBib29sZWFuIHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGUgc3VjY2Vzcy9mYWlsdXJlIG9mXG4gICAqIHN0YXJ0aW5nIGEgbmV3IGdhbWVcbiAgICovXG4gIGNvbnN0IHN0YXJ0TmV3R2FtZSA9IChcbiAgICBmb3VyVGlsZUxvY2F0aW9ucyxcbiAgICB0aHJlZVRpbGVMb2NhdGlvbnMsXG4gICAgdHdvVGlsZXNMb2NhdGlvbnMsXG4gICAgb25lVGlsZUxvY2F0aW9ucyxcbiAgICBkZWZhdWx0UG9zaXRpb25zID0gdHJ1ZSxcbiAgKSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSBwbGF5ZXJzIGFuZCBnYW1lIHN0YXR1cywgaHVtYW4gcGxheWVyIGlzIHRoZSBvbmUgdG8gc3RhcnQuXG4gICAgbUh1bWFuUGxheWVyID0gSHVtYW5QbGF5ZXIoKTtcbiAgICBtQUlQbGF5ZXIgPSBBSVBsYXllcigpO1xuICAgIG1HYW1lU3RhdHVzID0gXCJ1bmRlY2lkZWRcIjtcbiAgICBtQ3VycmVudFBsYXllciA9IG1IdW1hblBsYXllcjtcbiAgICBtSXNHYW1lU3RhcnRlZCA9IHRydWU7XG5cbiAgICBtSHVtYW5QbGF5ZXIucGxhY2VTaGlwcyhcbiAgICAgIGZvdXJUaWxlTG9jYXRpb25zLFxuICAgICAgdGhyZWVUaWxlTG9jYXRpb25zLFxuICAgICAgdHdvVGlsZXNMb2NhdGlvbnMsXG4gICAgICBvbmVUaWxlTG9jYXRpb25zLFxuICAgICAgZGVmYXVsdFBvc2l0aW9ucyxcbiAgICApO1xuXG4gICAgbUFJUGxheWVyLnBsYWNlU2hpcHMoKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qXG4gICAqIHJldHVybnMgdGhlIGhpdHMgYm9hcmQgb2YgdGhlIHBsYXllciB0aGF0IGhhcyBiZWVuIGhpdFxuICAgKi9cbiAgY29uc3QgbWFrZU1vdmUgPSAoY29vcmRpbmF0aW9uID0gW10pID0+IHtcbiAgICBpZiAobUdhbWVTdGF0dXMgIT09IFwidW5kZWNpZGVkXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBlbWVueUJvYXJkID1cbiAgICAgIGdldEN1cnJlbnRQbGF5ZXIoKSA9PT0gXCJIdW1hblwiXG4gICAgICAgID8gbUFJUGxheWVyLmdldEJvYXJkKClcbiAgICAgICAgOiBtSHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKTtcblxuICAgIGNvbnN0IG1vdmVTdGF0dXMgPSBtQ3VycmVudFBsYXllci5tYWtlTW92ZShlbWVueUJvYXJkLCBjb29yZGluYXRpb24pO1xuXG4gICAgaWYgKG1vdmVTdGF0dXMgPT09IFwiRVJST1JcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG1vdmVTdGF0dXMgPT09IFwibWlzc1wiKSB7XG4gICAgICBpZiAoZ2V0Q3VycmVudFBsYXllcigpID09PSBcIkh1bWFuXCIpIHtcbiAgICAgICAgbUN1cnJlbnRQbGF5ZXIgPSBtQUlQbGF5ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtQ3VycmVudFBsYXllciA9IG1IdW1hblBsYXllcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1DdXJyZW50UGxheWVyLmdldEJvYXJkKCkuZ2V0SGl0c0JvYXJkKCk7XG4gICAgfVxuXG4gICAgLy8gZWxzZSB3ZSBoYXZlIGEgaGl0XG4gICAgaWYgKG1vdmVTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZ2V0Q3VycmVudFBsYXllcigpID09PSBcIkh1bWFuXCIgJiZcbiAgICAgICAgbUFJUGxheWVyLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKClcbiAgICAgICkge1xuICAgICAgICBtR2FtZVN0YXR1cyA9IFwiSHVtYW5cIjtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGdldEN1cnJlbnRQbGF5ZXIoKSA9PT0gXCJBSVwiICYmXG4gICAgICAgIG1IdW1hblBsYXllci5nZXRCb2FyZCgpLmFsbFNoaXBzU3VuaygpXG4gICAgICApIHtcbiAgICAgICAgbUdhbWVTdGF0dXMgPSBcIkFJXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbWVueUJvYXJkLmdldEhpdHNCb2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IGlzUG9zaXRpb25pbmdMZWdhbCA9IChcbiAgICBmb3VyVGlsZUxvY2F0aW9ucyxcbiAgICB0aHJlZVRpbGVMb2NhdGlvbnMsXG4gICAgdHdvVGlsZXNMb2NhdGlvbnMsXG4gICAgb25lVGlsZUxvY2F0aW9ucyxcbiAgKSA9PlxuICAgIEh1bWFuUGxheWVyKClcbiAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAuaXNQb3NpdGlvbmluZ0xlZ2FsKFxuICAgICAgICBmb3VyVGlsZUxvY2F0aW9ucyxcbiAgICAgICAgdGhyZWVUaWxlTG9jYXRpb25zLFxuICAgICAgICB0d29UaWxlc0xvY2F0aW9ucyxcbiAgICAgICAgb25lVGlsZUxvY2F0aW9ucyxcbiAgICAgICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydE5ld0dhbWUsXG4gICAgbWFrZU1vdmUsXG4gICAgZ2V0Q3VycmVudFBsYXllcixcbiAgICBnZXRHYW1lU3RhdHVzLFxuICAgIGlzUG9zaXRpb25pbmdMZWdhbCxcbiAgICBpc0dhbWVTdGFydGVkLFxuICAgIHJlc2V0R2FtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IG1Cb2FyZFNpemUgPSAxMDtcbiAgY29uc3QgbVNoaXBzQm9hcmQgPSBBcnJheShtQm9hcmRTaXplKVxuICAgIC5maWxsKG51bGwpXG4gICAgLm1hcCgoKSA9PiBBcnJheShtQm9hcmRTaXplKS5maWxsKG51bGwpKTtcbiAgY29uc3QgbUhpdHNCb2FyZCA9IEFycmF5KG1Cb2FyZFNpemUpXG4gICAgLmZpbGwobnVsbClcbiAgICAubWFwKCgpID0+IEFycmF5KG1Cb2FyZFNpemUpLmZpbGwoXCJcIikpO1xuXG4gIGNvbnN0IGdldEJvYXJkU2l6ZSA9ICgpID0+IG1Cb2FyZFNpemU7XG4gIGNvbnN0IG1Db29yZGluYXRlVmFsaWQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGNvb3JkaW5hdGVbMF0gPCAwIHx8XG4gICAgICBjb29yZGluYXRlWzFdIDwgMCB8fFxuICAgICAgY29vcmRpbmF0ZVswXSA+PSBtQm9hcmRTaXplIHx8XG4gICAgICBjb29yZGluYXRlWzFdID49IG1Cb2FyZFNpemVcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgbUNoZWNrRm9yTm9TaGlwcyA9IChjb29yZGluYXRpb24sIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBmcm9tWCA9IGNvb3JkaW5hdGlvblswXSAtIDE7XG4gICAgY29uc3QgZnJvbVkgPSBjb29yZGluYXRpb25bMV0gLSAxO1xuICAgIGNvbnN0IHRvWCA9IG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBmcm9tWCArIGxlbmd0aCArIDEgOiBmcm9tWCArIDI7XG4gICAgY29uc3QgdG9ZID0gb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gZnJvbVkgKyBsZW5ndGggKyAxIDogZnJvbVkgKyAyO1xuXG4gICAgZm9yIChsZXQgeCA9IGZyb21YOyB4IDw9IHRvWDsgeCArPSAxKSB7XG4gICAgICBmb3IgKGxldCB5ID0gZnJvbVk7IHkgPD0gdG9ZOyB5ICs9IDEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHggPj0gMCAmJlxuICAgICAgICAgIHkgPj0gMCAmJlxuICAgICAgICAgIHggPCBtQm9hcmRTaXplICYmXG4gICAgICAgICAgeSA8IG1Cb2FyZFNpemUgJiZcbiAgICAgICAgICBtU2hpcHNCb2FyZFt4XVt5XSAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgbU1hcmtTdXJyb3VuZGluZ09mU3Vua1NoaXAgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIC8vIFdlIHdpbGwgZmluZCB0aGUgc3RhcnQgb2YgdGhlIHNoaXAgYW5kIGRldGVybWluYXRlIGlmIGl0J3MgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgIGxldCB4ID0gY29vcmRpbmF0ZVswXTtcbiAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XG4gICAgbGV0IG9yaWVudGF0aW9uO1xuICAgIC8vIENoZWNrIGlmIGhvcml6b250YWxcbiAgICBpZiAoXG4gICAgICAobUNvb3JkaW5hdGVWYWxpZChbeCwgeSArIDFdKSAmJiBtSGl0c0JvYXJkW3hdW3kgKyAxXSA9PT0gXCJvXCIpIHx8XG4gICAgICAobUNvb3JkaW5hdGVWYWxpZChbeCwgeSAtIDFdKSAmJiBtSGl0c0JvYXJkW3hdW3kgLSAxXSA9PT0gXCJvXCIpXG4gICAgKSB7XG4gICAgICBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmllbnRhdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICB9XG5cbiAgICB3aGlsZSAobUNvb3JkaW5hdGVWYWxpZChbeCwgeV0pICYmIG1IaXRzQm9hcmRbeF1beV0gPT09IFwib1wiKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIHkgLT0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggLT0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgd2hpbGUgKFxuICAgICAgICAobUNvb3JkaW5hdGVWYWxpZChbeCwgeV0pICYmIG1IaXRzQm9hcmRbeF1beV0gPT09IFwib1wiKSB8fFxuICAgICAgICAobUNvb3JkaW5hdGVWYWxpZChbeCwgeSAtIDFdKSAmJiBtSGl0c0JvYXJkW3hdW3kgLSAxXSA9PT0gXCJvXCIpIHx8XG4gICAgICAgIChtQ29vcmRpbmF0ZVZhbGlkKFt4LCB5ICsgMV0pICYmIG1IaXRzQm9hcmRbeF1beSArIDFdID09PSBcIm9cIilcbiAgICAgICkge1xuICAgICAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgLy8gTWFyayBhYm92ZSBhbmQgYmVsb3csIGFuZCBpZiBpdCdzIG5vdCBzaGlwIHRpbGUgdGhlbiB0aGUgb3V0ZXIgd2FsbCB0b29cbiAgICAgICAgICBpZiAobUNvb3JkaW5hdGVWYWxpZChbeCArIGksIHldKSAmJiBtSGl0c0JvYXJkW3ggKyBpXVt5XSAhPT0gXCJvXCIpIHtcbiAgICAgICAgICAgIG1IaXRzQm9hcmRbeCArIGldW3ldID0gXCJ4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHkgKz0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKFxuICAgICAgICAobUNvb3JkaW5hdGVWYWxpZChbeCwgeV0pICYmIG1IaXRzQm9hcmRbeF1beV0gPT09IFwib1wiKSB8fFxuICAgICAgICAobUNvb3JkaW5hdGVWYWxpZChbeCAtIDEsIHldKSAmJiBtSGl0c0JvYXJkW3ggLSAxXVt5XSA9PT0gXCJvXCIpIHx8XG4gICAgICAgIChtQ29vcmRpbmF0ZVZhbGlkKFt4ICsgMSwgeV0pICYmIG1IaXRzQm9hcmRbeCArIDFdW3ldID09PSBcIm9cIilcbiAgICAgICkge1xuICAgICAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgLy8gTWFyayBhYm92ZSBhbmQgYmVsb3csIGFuZCBpZiBpdCdzIG5vdCBzaGlwIHRpbGUgdGhlbiB0aGUgb3V0ZXIgd2FsbCB0b29cbiAgICAgICAgICBpZiAobUNvb3JkaW5hdGVWYWxpZChbeCwgeSArIGldKSAmJiBtSGl0c0JvYXJkW3hdW3kgKyBpXSAhPT0gXCJvXCIpIHtcbiAgICAgICAgICAgIG1IaXRzQm9hcmRbeF1beSArIGldID0gXCJ4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHggKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyogcmV0dXJucyBhIGJvYXJkIHdpdGg6XG4gICAqIFwib1wiIC0gZm9yIHRpbGUgdGhhdCBoYWQgc2hpcCB3aGljaCB3YXMgaGl0XG4gICAqIFwieFwiIC0gZm9yIHRpbGUgdGhhdCB3YXMgaGl0IGFuZCBpdCBoYXMgbm8gc2hpcFxuICAgKiBcIlwiICAtIGZvciB0aWxlIHRoYXQgd2Fzbid0IGhpdFxuICAgKi9cbiAgY29uc3QgZ2V0SGl0c0JvYXJkID0gKCkgPT4gWy4uLm1IaXRzQm9hcmRdO1xuXG4gIC8vIHJldHVybnMgYm9vbGVhbiB2YWx1ZSBkZXBlbmRzIG9uIHRoZSBzdWNjZXNzIG9mIHRoZSBwbGFjaW5nIHRoZSBzaGlwXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzdGFydENvb3JkaW5hdGlvbiwgbGVuZ3RoLCBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiKSA9PiB7XG4gICAgLy8gQ2FuJ3QgaGF2ZSBuZWdhdGl2ZSBzaXplIHNoaXBcbiAgICBpZiAobGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgY29vcmRpbmF0aW9uIGlzIGluIGJvdW5kYXJpZXMgb2YgdGhlIGJvYXJkXG4gICAgaWYgKCFtQ29vcmRpbmF0ZVZhbGlkKHN0YXJ0Q29vcmRpbmF0aW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBvcmllbnRhdGlvbnMgaXMgY29ycmVjdFxuICAgIGlmIChvcmllbnRhdGlvbiAhPT0gXCJob3Jpem9udGFsXCIgJiYgb3JpZW50YXRpb24gIT09IFwidmVydGljYWxcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIG91dCBvZiBib3VuZGFyaWVzXG4gICAgaWYgKFxuICAgICAgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiAmJlxuICAgICAgICAhbUNvb3JkaW5hdGVWYWxpZChbXG4gICAgICAgICAgc3RhcnRDb29yZGluYXRpb25bMF0sXG4gICAgICAgICAgc3RhcnRDb29yZGluYXRpb25bMV0gKyBsZW5ndGggLSAxLFxuICAgICAgICBdKSkgfHxcbiAgICAgIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmXG4gICAgICAgICFtQ29vcmRpbmF0ZVZhbGlkKFtcbiAgICAgICAgICBzdGFydENvb3JkaW5hdGlvblswXSArIGxlbmd0aCAtIDEsXG4gICAgICAgICAgc3RhcnRDb29yZGluYXRpb25bMV0sXG4gICAgICAgIF0pKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBuZWlnaGJvdXJpbmcgc2hpcHNcbiAgICBpZiAoIW1DaGVja0Zvck5vU2hpcHMoc3RhcnRDb29yZGluYXRpb24sIGxlbmd0aCwgb3JpZW50YXRpb24pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHggPSBzdGFydENvb3JkaW5hdGlvblswXTtcbiAgICBjb25zdCB5ID0gc3RhcnRDb29yZGluYXRpb25bMV07XG5cbiAgICBjb25zdCBzaGlwID0gU2hpcChsZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgbVNoaXBzQm9hcmRbeF1beSArIGldID0gc2hpcDtcbiAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBtU2hpcHNCb2FyZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKlxuICAgKiByZXR1cm5zOlxuICAgKiAgIFwiaGl0XCIgIC0gaWYgdGhlcmUgd2FzIGEgaGl0XG4gICAqICAgXCJtaXNzXCIgLSBpZiB0aGVyZSB3YXNuJ3QgYSBoaXRcbiAgICogICBcIkVSUk9SXCIgLSBpZiB0aGUgY29vcmRpbmF0aW9uIGlzIGlsZWdhbCAob3V0IG9mIHNjb3BlLCBjb29yZGluYXRpb24gYWxyZWFkeSBiZWVuIGhpdClcbiAgICovXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29vcmRpbmF0aW9uKSA9PiB7XG4gICAgaWYgKCFtQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGlvbikpIHtcbiAgICAgIHJldHVybiBcIkVSUk9SXCI7XG4gICAgfVxuICAgIGNvbnN0IHggPSBjb29yZGluYXRpb25bMF07XG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGlvblsxXTtcblxuICAgIGlmIChtSGl0c0JvYXJkW3hdW3ldID09PSBcIm9cIiB8fCBtSGl0c0JvYXJkW3hdW3ldID09PSBcInhcIikge1xuICAgICAgcmV0dXJuIFwiRVJST1JcIjtcbiAgICB9XG5cbiAgICBpZiAobVNoaXBzQm9hcmRbeF1beV0gPT09IG51bGwpIHtcbiAgICAgIG1IaXRzQm9hcmRbeF1beV0gPSBcInhcIjtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG5cbiAgICAvLyBlbHNlIHdlIGhhdmUgYSBzaGlwIGF0IFt4XVt5XSBhbmQgdGhhdCBzcG90IHdhc24ndCBoaXQgeWV0XG4gICAgbUhpdHNCb2FyZFt4XVt5XSA9IFwib1wiO1xuICAgIG1TaGlwc0JvYXJkW3hdW3ldLmhpdCgpO1xuXG4gICAgLy8gaWYgc2hpcCB3YXMgc2FuayBuZWVkIHRvIG1hcmsgYWxsIHN1cnJvdW5kaW5nIGFzIGhpdFxuICAgIGlmIChtU2hpcHNCb2FyZFt4XVt5XS5pc1N1bmsoKSkge1xuICAgICAgbU1hcmtTdXJyb3VuZGluZ09mU3Vua1NoaXAoY29vcmRpbmF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiaGl0XCI7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBib29sZWFuIHdpdGggYW5zd2VyXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+XG4gICAgLy8gRWl0aGVyIGl0J3Mgbm9uIG9jY3VwaWVkIHNxdWFyZSBlaWdodGVyIHRoZSBzaGlwIGlzIHNhbmtcbiAgICBtU2hpcHNCb2FyZC5ldmVyeSgocm93KSA9PlxuICAgICAgcm93LmV2ZXJ5KChjZWxsKSA9PiBjZWxsID09PSBudWxsIHx8IGNlbGwuaXNTdW5rKCkpLFxuICAgICk7XG5cbiAgY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcbiAgICBtSGl0c0JvYXJkLmZvckVhY2goKHJvdykgPT4gcm93LmZvckVhY2goKF8sIGluZGV4KSA9PiB7IHJvd1tpbmRleF0gPSBcIlwiOyB9KSk7XG4gICAgbVNoaXBzQm9hcmQuZm9yRWFjaCgocm93KSA9PiByb3cuZm9yRWFjaCgoXywgaW5kZXgpID0+IHsgcm93W2luZGV4XSA9IG51bGw7IH0pKTtcbiAgfTtcblxuICBjb25zdCBtUGxhY2VBcnJheU9mU2hpcHMgPSAoc2hpcHNMb2NhdGlvbnMsIHNoaXBTaXplKSA9PiB7XG4gICAgY29uc3QgaXNBcnJhbmdlbWVudExlZ2FsID0gc2hpcHNMb2NhdGlvbnMuZXZlcnkoKHNoaXBMb2NhdGlvbikgPT4ge1xuICAgICAgbGV0IGNhblBsYWNlU2hpcDtcbiAgICAgIGlmIChzaGlwU2l6ZSA+IDEpIHtcbiAgICAgICAgY2FuUGxhY2VTaGlwID0gcGxhY2VTaGlwKHNoaXBMb2NhdGlvblswXSwgc2hpcFNpemUsIHNoaXBMb2NhdGlvblsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5QbGFjZVNoaXAgPSBwbGFjZVNoaXAoc2hpcExvY2F0aW9uWzBdLCBzaGlwU2l6ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FuUGxhY2VTaGlwO1xuICAgIH0pO1xuICAgIHJldHVybiBpc0FycmFuZ2VtZW50TGVnYWw7XG4gIH07XG5cbiAgY29uc3QgaXNQb3NpdGlvbmluZ0xlZ2FsID0gKFxuICAgIGZvdXJUaWxlTG9jYXRpb25zLFxuICAgIHRocmVlVGlsZUxvY2F0aW9ucyxcbiAgICB0d29UaWxlc0xvY2F0aW9ucyxcbiAgICBvbmVUaWxlTG9jYXRpb25zLFxuICApID0+IHtcbiAgICBpZiAoIW1QbGFjZUFycmF5T2ZTaGlwcyhmb3VyVGlsZUxvY2F0aW9ucywgNCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIW1QbGFjZUFycmF5T2ZTaGlwcyh0aHJlZVRpbGVMb2NhdGlvbnMsIDMpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFtUGxhY2VBcnJheU9mU2hpcHModHdvVGlsZXNMb2NhdGlvbnMsIDIpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFtUGxhY2VBcnJheU9mU2hpcHMob25lVGlsZUxvY2F0aW9ucywgMSkpIHJldHVybiBmYWxzZTtcbiAgICByZXNldEJvYXJkKCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gIGNvbnN0IG1UcnlSYW5kb21Qb3NpdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0IC0gaTsgaiArPSAxKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhcGxhY2VTaGlwKFxuICAgICAgICAgICAgW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXSxcbiAgICAgICAgICAgIGkgKyAxLFxuICAgICAgICAgICAgb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSxcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBzSW5SYW5kb21Qb3NpdGlvbnMgPSAoKSA9PiB7XG4gICAgbGV0IHBvc2l0aW9uaW5nRm91bmQgPSBmYWxzZTtcbiAgICB3aGlsZSAoIXBvc2l0aW9uaW5nRm91bmQpIHtcbiAgICAgIHBvc2l0aW9uaW5nRm91bmQgPSBtVHJ5UmFuZG9tUG9zaXRpb24oKTtcbiAgICAgIGlmICghcG9zaXRpb25pbmdGb3VuZCkge1xuICAgICAgICByZXNldEJvYXJkKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SGl0c0JvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBnZXRCb2FyZFNpemUsXG4gICAgcmVzZXRCb2FyZCxcbiAgICBpc1Bvc2l0aW9uaW5nTGVnYWwsXG4gICAgcGxhY2VTaGlwc0luUmFuZG9tUG9zaXRpb25zLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuY29uc3QgSHVtYW5QbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1QbGF5ZXIgPSBQbGF5ZXIoXCJIdW1hblwiKTtcblxuICAvLyBFbmVteSBib2FyZCBzaG91bGQgaGF2ZSByZWNlaXZlQXR0YWNrIGFuZCBnZXRIaXRzQm9hcmRcbiAgLy8gcmV0dXJucyB0aGUgc3RhdHVzIG9mIHRoZSBoaXQgKGhpdC9taXNzL0VSUk9SKVxuICBtUGxheWVyLm1ha2VNb3ZlID0gKGVuZW15Qm9hcmQsIGNvb3JkaW5hdGlvbikgPT5cbiAgICBlbmVteUJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0aW9uKTtcblxuICAvLyBFbmVteSBib2FyZCBzaG91bGQgaGF2ZSBwbGFjZVNoaXBcbiAgLyogZGVmYXVsdCBib2FyZDpcbiAgICogICAgIDAgMSAyIDMgNCA1IDYgNyA4IDlcbiAgICogIDAgWzMsICwyLDIsICwxLCAsMiwgLCBdXG4gICAqICAxIFszLCAsICwgLCAsICwgLDIsICwgXVxuICAgKiAgMiBbMywgLDMsMywzLCAsICwgLCAsIF1cbiAgICogIDMgWyAsICwgLCAsICwgLDQsNCw0LDRdXG4gICAqICA0IFsxLCAsICwgLCAsICwgLCAsICwgXVxuICAgKiAgNSBbICwgLDIsMiwgLCAsICwgLCAsIF1cbiAgICogIDYgWzEsICwgLCAsICwgLCAsICwgLCBdXG4gICAqICA3IFsgLCAsICwgLCAsICwgLCAsICwgXVxuICAgKiAgOCBbICwgLCAsICwgLCAsICwgLDEsIF1cbiAgICogIDkgWyAsICwgLCAsICwgLCAsICwgLCBdXG4gICAqL1xuICAvLyBUT0RPOiBhZGQgZXJyb3JzIGhhbmRsaW5nXG4gIG1QbGF5ZXIucGxhY2VTaGlwcyA9IChcbiAgICBmb3VyVGlsZUxvY2F0aW9ucyA9IFtdLFxuICAgIHRocmVlVGlsZUxvY2F0aW9ucyA9IFtdLFxuICAgIHR3b1RpbGVzTG9jYXRpb25zID0gW10sXG4gICAgb25lVGlsZUxvY2F0aW9ucyA9IFtdLFxuICAgIGRlZmF1bHRBcnJhbmdlbWVudCA9IHRydWUsXG4gICkgPT4ge1xuICAgIGlmIChkZWZhdWx0QXJyYW5nZW1lbnQpIHtcbiAgICAgIGZvdXJUaWxlTG9jYXRpb25zLnB1c2goW1szLCA2XSwgXCJob3Jpem9udGFsXCJdKTtcbiAgICAgIHRocmVlVGlsZUxvY2F0aW9ucy5wdXNoKFtbMCwgMF0sIFwidmVydGljYWxcIl0pO1xuICAgICAgdGhyZWVUaWxlTG9jYXRpb25zLnB1c2goW1syLCAyXSwgXCJob3Jpem9udGFsXCJdKTtcbiAgICAgIHR3b1RpbGVzTG9jYXRpb25zLnB1c2goW1swLCAyXSwgXCJob3Jpem9udGFsXCJdKTtcbiAgICAgIHR3b1RpbGVzTG9jYXRpb25zLnB1c2goW1swLCA3XSwgXCJ2ZXJ0aWNhbFwiXSk7XG4gICAgICB0d29UaWxlc0xvY2F0aW9ucy5wdXNoKFtbNSwgMl0sIFwiaG9yaXpvbnRhbFwiXSk7XG4gICAgICBvbmVUaWxlTG9jYXRpb25zLnB1c2goW1swLCA1XV0pO1xuICAgICAgb25lVGlsZUxvY2F0aW9ucy5wdXNoKFtbNCwgMF1dKTtcbiAgICAgIG9uZVRpbGVMb2NhdGlvbnMucHVzaChbWzYsIDBdXSk7XG4gICAgICBvbmVUaWxlTG9jYXRpb25zLnB1c2goW1s4LCA4XV0pO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhbVBsYXllclxuICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAuaXNQb3NpdGlvbmluZ0xlZ2FsKFxuICAgICAgICAgIGZvdXJUaWxlTG9jYXRpb25zLFxuICAgICAgICAgIHRocmVlVGlsZUxvY2F0aW9ucyxcbiAgICAgICAgICB0d29UaWxlc0xvY2F0aW9ucyxcbiAgICAgICAgICBvbmVUaWxlTG9jYXRpb25zLFxuICAgICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG1QbGF5ZXIucGxhY2VBcnJheU9mU2hpcHMoZm91clRpbGVMb2NhdGlvbnMsIDQpO1xuICAgIG1QbGF5ZXIucGxhY2VBcnJheU9mU2hpcHModGhyZWVUaWxlTG9jYXRpb25zLCAzKTtcbiAgICBtUGxheWVyLnBsYWNlQXJyYXlPZlNoaXBzKHR3b1RpbGVzTG9jYXRpb25zLCAyKTtcbiAgICBtUGxheWVyLnBsYWNlQXJyYXlPZlNoaXBzKG9uZVRpbGVMb2NhdGlvbnMsIDEpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIG1QbGF5ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIdW1hblBsYXllcjtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9ICh0eXBlKSA9PiB7XG4gIGNvbnN0IG1UeXBlID0gdHlwZTtcbiAgY29uc3QgbUdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IGdldFR5cGUgPSAoKSA9PiBtVHlwZTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IG1HYW1lYm9hcmQ7XG5cbiAgY29uc3QgcGxhY2VBcnJheU9mU2hpcHMgPSAoc2hpcHNMb2NhdGlvbnMsIHNoaXBTaXplKSA9PiB7XG4gICAgc2hpcHNMb2NhdGlvbnMuZm9yRWFjaCgoc2hpcExvY2F0aW9uKSA9PiB7XG4gICAgICBpZiAoc2hpcFNpemUgPiAxKSB7XG4gICAgICAgIGdldEJvYXJkKCkucGxhY2VTaGlwKHNoaXBMb2NhdGlvblswXSwgc2hpcFNpemUsIHNoaXBMb2NhdGlvblsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRCb2FyZCgpLnBsYWNlU2hpcChzaGlwTG9jYXRpb25bMF0sIHNoaXBTaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFR5cGUsXG4gICAgZ2V0Qm9hcmQsXG4gICAgcGxhY2VBcnJheU9mU2hpcHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBtTGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgbU51bWJlck9mSGl0cyA9IDA7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIG1OdW1iZXJPZkhpdHMgKz0gbU51bWJlck9mSGl0cyA8IG1MZW5ndGggPyAxIDogMDtcbiAgfVxuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IG1OdW1iZXJPZkhpdHMgPT09IG1MZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgQm9keSBmcm9tIFwiLi9jb21wb25lbnRzL2JvZHlcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuY29uc3QgRGlzcGxheUhhbmRsZXIgPSAoZ2FtZUNvbnRyb2xsZXIpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKEhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChCb2R5KGdhbWVDb250cm9sbGVyKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUhhbmRsZXI7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvYm9keS5jc3NcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy93aW5uZXJNb2RhbC5jc3NcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi91dGlsL3V0aWxzXCI7XG5pbXBvcnQgeyBQbGF5ZXJCb2FyZCwgYXJyYXlPZk5UaWxlc0xvbmdTaGlwIH0gZnJvbSBcIi4vcGxheWVyQm9hcmRcIjtcbmltcG9ydCBFbmVteUJvYXJkIGZyb20gXCIuL2VuZW15Qm9hcmRcIjtcblxuY29uc3QgY3JlYXRlQm9hcmRzU2VjdGlvbiA9IChnYW1lQ29udHJvbGxlcikgPT4ge1xuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJvYXJkcy1jb250YWluZXJcIl0pO1xuICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoUGxheWVyQm9hcmQoZ2FtZUNvbnRyb2xsZXIpKTtcbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKEVuZW15Qm9hcmQoZ2FtZUNvbnRyb2xsZXIpKTtcblxuICByZXR1cm4gYm9hcmRzQ29udGFpbmVyO1xufTtcblxuY29uc3QgY2xlYW5IaXRzRnJvbUJvYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC1jb250YWluZXJcIik7XG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT5cbiAgICBbLi4uYm9hcmQuY2hpbGRyZW5dLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm1pc3NcIiwgXCJoaXRcIik7XG4gICAgfSksXG4gICk7XG59O1xuXG5jb25zdCBjcmVhdGVTdGFydE5ld0dhbWVCdXR0b24gPSAoZ2FtZUNvbnRyb2xsZXIpID0+IHtcbiAgY29uc3Qgc3RhcnROZXdHYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJuZXctZ2FtZS1jb250YWluZXJcIl0pO1xuICBjb25zdCBuZXdHYW1lQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJuZXctZ2FtZVwiXSk7XG4gIG5ld0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIuKctCBTdGFydCBOZXcgR2FtZSDinLRcIjtcbiAgXG4gIGNvbnN0IHJlc2V0R2FtZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wicmVzZXQtZ2FtZVwiXSk7XG4gIHJlc2V0R2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVzZXQg4py0IEdhbWVcIjtcblxuXG4gIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldEdhbWVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgbmV3R2FtZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBnYW1lQ29udHJvbGxlci5zdGFydE5ld0dhbWUoXG4gICAgICBhcnJheU9mTlRpbGVzTG9uZ1NoaXAoNCksXG4gICAgICBhcnJheU9mTlRpbGVzTG9uZ1NoaXAoMyksXG4gICAgICBhcnJheU9mTlRpbGVzTG9uZ1NoaXAoMiksXG4gICAgICBhcnJheU9mTlRpbGVzTG9uZ1NoaXAoMSksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9KTtcblxuICByZXNldEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldEdhbWVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgbmV3R2FtZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBnYW1lQ29udHJvbGxlci5yZXNldEdhbWUoKTtcbiAgICBjbGVhbkhpdHNGcm9tQm9hcmRzKCk7XG4gIH0pO1xuICByZXNldEdhbWVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgc3RhcnROZXdHYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0dhbWVCdXR0b24pO1xuICBzdGFydE5ld0dhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRHYW1lQnV0dG9uKTtcblxuICByZXR1cm4gc3RhcnROZXdHYW1lQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlV2lubmVyTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLW1vZGFsLWNvbnRhaW5lcicpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgW1wid2lubmVyLW1vZGFsLWNvbnRhaW5lclwiXSk7XG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtcIndpbm5lci1tb2RhbC1jb250ZW50XCJdKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblxuICBjb25zdCBtb2RhbFRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgW1wid2lubmVyLW1vZGFsXCJdKTtcbiAgXG4gIGNvbnN0IG1vZGFsRXhpdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFtcIndpbm5lci1tb2RhbC1leGl0XCJdKTtcbiAgXG4gIG1vZGFsRXhpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBtb2RhbEV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbENvbnRhaW5lcikge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsVGV4dCk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEV4aXRCdXR0b24pO1xuXG5cbiAgcmV0dXJuIG1vZGFsQ29udGFpbmVyO1xufVxuXG5jb25zdCBCb2R5ID0gKGdhbWVDb250cm9sbGVyKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtdLCBbW1wiaWRcIiwgXCJib2R5XCJdXSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVCb2FyZHNTZWN0aW9uKGdhbWVDb250cm9sbGVyKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlU3RhcnROZXdHYW1lQnV0dG9uKGdhbWVDb250cm9sbGVyKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlV2lubmVyTW9kYWwoKSk7XG4gIHJldHVybiBib2R5O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi91dGlsL3V0aWxzXCI7XG5pbXBvcnQgVUlHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBnZXRIaXRzT25QbGF5ZXJCb2FyZCB9IGZyb20gXCIuL3BsYXllckJvYXJkXCI7XG5cbmNvbnN0IHJlbmRlckVuZW15SGl0cyA9IChlbmVteUhpdHNCb2FyZCkgPT4ge1xuICBlbmVteUhpdHNCb2FyZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PlxuICAgIHJvdy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICBpZiAoY29sdW1uID09PSBcIlwiKSByZXR1cm47XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5lbmVteS1iYW9yZCAuYm9hcmQtY2VsbFtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW5JbmRleH1cIl1gLFxuICAgICAgKTtcbiAgICAgIGlmIChjb2x1bW4gPT09IFwib1wiKSBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBpZiAoY29sdW1uID09PSBcInhcIikgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9KSxcbiAgKTtcbn07XG5cbmNvbnN0IEVuZW15Qm9hcmQgPSAoZ2FtZUNvbnRyb2xsZXIpID0+IHtcbiAgY29uc3QgZW5lbXlCb2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZW5lbXktYmFvcmRcIl0pO1xuICBlbmVteUJvYXJkLmFwcGVuZENoaWxkKFVJR2FtZWJvYXJkKCkpO1xuICBbLi4uZW5lbXlCb2FyZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbl0uZm9yRWFjaCgoYm9hcmRDZWxsKSA9PiB7XG4gICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgLy8gZmlyc3QgY2hlY2sgaWYgd2UgY2FuIG1ha2UgYSBtb3ZlXG4gICAgICBpZiAoXG4gICAgICAgICFnYW1lQ29udHJvbGxlci5pc0dhbWVTdGFydGVkKCkgfHxcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZVN0YXR1cygpICE9PSBcInVuZGVjaWRlZFwiIHx8XG4gICAgICAgIGdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRQbGF5ZXIoKSAhPT0gXCJIdW1hblwiIHx8XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHJvdywgY29sdW1uIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgLy8gbWFrZSB0aGUgbW92ZVxuICAgICAgY29uc3QgZW5lbXlIaXRzQm9hcmQgPSBnYW1lQ29udHJvbGxlci5tYWtlTW92ZShbXG4gICAgICAgIE51bWJlci5wYXJzZUludChyb3csIDEwKSxcbiAgICAgICAgTnVtYmVyLnBhcnNlSW50KGNvbHVtbiwgMTApLFxuICAgICAgXSk7XG4gICAgICAvLyByZW5kZXIgdGhlIG1vdmVcbiAgICAgIHJlbmRlckVuZW15SGl0cyhlbmVteUhpdHNCb2FyZCk7XG5cbiAgICAgIC8vIGNoZWNrIGlmIHBsYXllciB3YW5cbiAgICAgIGlmIChnYW1lQ29udHJvbGxlci5nZXRHYW1lU3RhdHVzKCkgPT09IFwiSHVtYW5cIikge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbW9kYWxQYXJhZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLndpbm5lci1tb2RhbC1jb250ZW50PnBcIixcbiAgICAgICAgKTtcbiAgICAgICAgbW9kYWxQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIkNvbmdyYXR1bGF0aW9ucyEgWW91J3ZlIHdvbiFcIjtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBtb2RhbC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWktd2lubmVyXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChnYW1lQ29udHJvbGxlci5nZXRDdXJyZW50UGxheWVyKCkgPT09IFwiQUlcIikge1xuICAgICAgICBnZXRIaXRzT25QbGF5ZXJCb2FyZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZW5lbXlCb2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15Qm9hcmQ7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvZm9vdGVyLmNzc1wiO1xuaW1wb3J0IGdpdEltZyBmcm9tIFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3V0aWwvdXRpbHNcIjtcblxuLy8gQ3JlYXRlIGdpdCBsaW5rIHdpdGggZ2l0IGljb25cbmNvbnN0IGNyZWF0ZUdpdExpbmtJbWcgPSAoKSA9PiB7XG4gIGNvbnN0IGdpdExpbmsgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiYVwiLFxuICAgIFtdLFxuICAgIFtcbiAgICAgIFtcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vU29rb2xhbi9CYXR0bGVzaGlwc1wiXSxcbiAgICAgIFtcInRhcmdldFwiLCBcIl9ibGFua1wiXSxcbiAgICBdLFxuICApO1xuICBjb25zdCBnaXRJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywgW1wiZ2l0LWltZ1wiXSwgW1tcInNyY1wiLCBnaXRJbWddXSk7XG4gIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG4gIHJldHVybiBnaXRMaW5rO1xufTtcblxuY29uc3QgY3JlYXRlQ3JlYXRvck5hbWUgPSAoY3JlYXRvck5hbWUpID0+IHtcbiAgY29uc3QgY3JlYXRvciA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcImNyZWF0b3JcIl0pO1xuICBjcmVhdG9yLnRleHRDb250ZW50ID0gY3JlYXRvck5hbWU7XG4gIHJldHVybiBjcmVhdG9yO1xufTtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUdpdExpbmtJbWcoKSk7XG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDcmVhdG9yTmFtZShcIlNva29sYW5cIikpO1xuICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3V0aWwvdXRpbHNcIjtcblxuY29uc3QgVUlHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJib2FyZC1jb250YWluZXJcIl0pO1xuICBjb25zdCBib2FyZFNpemUgPSAxMDtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZFNpemU7IHJvdyArPSAxKSB7XG4gICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgYm9hcmRTaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgY29uc3QgYm9hcmRDZWxsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wiYm9hcmQtY2VsbFwiXSxcbiAgICAgICAgW1xuICAgICAgICAgIFtcImRhdGEtcm93XCIsIGAke3Jvd31gXSxcbiAgICAgICAgICBbXCJkYXRhLWNvbHVtblwiLCBgJHtjb2x1bW59YF0sXG4gICAgICAgIF0sXG4gICAgICApO1xuXG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJR2FtZWJvYXJkO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2hlYWRlci5jc3NcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi91dGlsL3V0aWxzXCI7XG5cbmNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImhlYWRlci10aXRsZVwiXSk7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIuKAokLigKJh4oCidOKAonTigKJs4oCiZeKAolPigKJo4oCiaeKAonDigKJz4oCiXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSgpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3V0aWwvdXRpbHNcIjtcbmltcG9ydCBVSUdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBVSVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5sZXQgcGxheWVyQm9hcmQ7XG5jb25zdCByb3dTaXplID0gMTA7XG5sZXQgZ2FtZUNvbnRyb2xsZXIgPSBudWxsO1xuXG4vLyBzdG9yZSB0aGUgdGlsZXMgZm9yIHRoZSBpbml0aWFsIGxvY2F0aW9uc1xuLy8gMSA0IHRpbGVzLCAyIDMgdGlsZXMsIDMgMiB0aWxlcywgNCAxIHRpbGVzXG5jb25zdCBzaGlwc0FuZExvY2F0aW9ucyA9IFtdO1xuXG5sZXQgY3VycmVudFNoaXBEcmFnZ2VkID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGFycmF5T2ZOVGlsZXNMb25nU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBmcm9tO1xuICBsZXQgdG87XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSA0OlxuICAgICAgZnJvbSA9IDA7XG4gICAgICB0byA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBmcm9tID0gMTtcbiAgICAgIHRvID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIGZyb20gPSAzO1xuICAgICAgdG8gPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgZnJvbSA9IDY7XG4gICAgICB0byA9IDk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coXCJMRU5HVEggSUxMRUdBTFwiKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBmcm9tOyBpIDw9IHRvOyBpICs9IDEpIHtcbiAgICBhcnIucHVzaChbXG4gICAgICBbXG4gICAgICAgIE51bWJlci5wYXJzZUludChzaGlwc0FuZExvY2F0aW9uc1tpXS5sb2NhdGlvbi5kYXRhc2V0LnJvdywgMTApLFxuICAgICAgICBOdW1iZXIucGFyc2VJbnQoc2hpcHNBbmRMb2NhdGlvbnNbaV0ubG9jYXRpb24uZGF0YXNldC5jb2x1bW4sIDEwKSxcbiAgICAgIF0sXG4gICAgICBzaGlwc0FuZExvY2F0aW9uc1tpXS5zaGlwLmRhdGFzZXQub3JpZW50YXRpb24sXG4gICAgXSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IGNoZWNrU2hpcHNQb3NpdGlvbiA9ICgpID0+XG4gIGdhbWVDb250cm9sbGVyLmlzUG9zaXRpb25pbmdMZWdhbChcbiAgICBhcnJheU9mTlRpbGVzTG9uZ1NoaXAoNCksXG4gICAgYXJyYXlPZk5UaWxlc0xvbmdTaGlwKDMpLFxuICAgIGFycmF5T2ZOVGlsZXNMb25nU2hpcCgyKSxcbiAgICBhcnJheU9mTlRpbGVzTG9uZ1NoaXAoMSksXG4gICk7XG5jb25zdCBpbml0aWFsaXplU2hpcHNBbmRMb2NhdGlvbnMgPSAoKSA9PiB7XG4gIC8qIGRlZmF1bHQgYm9hcmQ6XG4gICAqICAgICAwIDEgMiAzIDQgNSA2IDcgOCA5XG4gICAqICAwIFszLCAsMiwyLCAsMSwgLDIsICwgXVxuICAgKiAgMSBbMywgLCAsICwgLCAsICwyLCAsIF1cbiAgICogIDIgWzMsICwzLDMsMywgLCAsICwgLCBdXG4gICAqICAzIFsgLCAsICwgLCAsICw0LDQsNCw0XVxuICAgKiAgNCBbMSwgLCAsICwgLCAsICwgLCAsIF1cbiAgICogIDUgWyAsICwyLDIsICwgLCAsICwgLCBdXG4gICAqICA2IFsxLCAsICwgLCAsICwgLCAsICwgXVxuICAgKiAgNyBbICwgLCAsICwgLCAsICwgLCAsIF1cbiAgICogIDggWyAsICwgLCAsICwgLCAsICwxLCBdXG4gICAqICA5IFsgLCAsICwgLCAsICwgLCAsICwgXVxuICAgKi9cbiAgY29uc3QgcGxheWVyQm9hcmRBcnJheSA9IFsuLi5wbGF5ZXJCb2FyZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbl07XG4gIC8vIDQgdGlsZXMgc2hpcHNcbiAgc2hpcHNBbmRMb2NhdGlvbnMucHVzaCh7XG4gICAgc2hpcDogVUlTaGlwKDQsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICBsb2NhdGlvbjogcGxheWVyQm9hcmRBcnJheVszICogcm93U2l6ZSArIDZdLFxuICB9KTtcbiAgLy8gMyB0aWxlcyBzaGlwc1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoMywgXCJ2ZXJ0aWNhbFwiKSxcbiAgICBsb2NhdGlvbjogcGxheWVyQm9hcmRBcnJheVswICogcm93U2l6ZSArIDBdLFxuICB9KTtcbiAgc2hpcHNBbmRMb2NhdGlvbnMucHVzaCh7XG4gICAgc2hpcDogVUlTaGlwKDMsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICBsb2NhdGlvbjogcGxheWVyQm9hcmRBcnJheVsyICogcm93U2l6ZSArIDJdLFxuICB9KTtcbiAgLy8gMiB0aWxlcyBzaGlwc1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoMiwgXCJob3Jpem9udGFsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzAgKiByb3dTaXplICsgMl0sXG4gIH0pO1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoMiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICBsb2NhdGlvbjogcGxheWVyQm9hcmRBcnJheVswICogcm93U2l6ZSArIDddLFxuICB9KTtcbiAgc2hpcHNBbmRMb2NhdGlvbnMucHVzaCh7XG4gICAgc2hpcDogVUlTaGlwKDIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICBsb2NhdGlvbjogcGxheWVyQm9hcmRBcnJheVs1ICogcm93U2l6ZSArIDJdLFxuICB9KTtcbiAgLy8gMSB0aWxlcyBzaGlwc1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoMSwgXCJob3Jpem9udGFsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzQgKiByb3dTaXplICsgMF0sXG4gIH0pO1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoMSwgXCJob3Jpem9udGFsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzYgKiByb3dTaXplICsgMF0sXG4gIH0pO1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoMSwgXCJob3Jpem9udGFsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzggKiByb3dTaXplICsgOF0sXG4gIH0pO1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoMSwgXCJob3Jpem9udGFsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzAgKiByb3dTaXplICsgNV0sXG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVySGl0cyA9IChodW1hbkhpdHNCb2FyZCkgPT4ge1xuICBodW1hbkhpdHNCb2FyZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PlxuICAgIHJvdy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICBpZiAoY29sdW1uID09PSBcIlwiKSByZXR1cm47XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5wbGF5ZXItYm9hcmQgLmJvYXJkLWNlbGxbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1uSW5kZXh9XCJdYCxcbiAgICAgICk7XG4gICAgICBpZiAoY29sdW1uID09PSBcIm9cIikgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgaWYgKGNvbHVtbiA9PT0gXCJ4XCIpIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICBpZiAoY29sdW1uID09PSBcIm9cIiB8fCBjb2x1bW4gPT09IFwieFwiKSB7XG4gICAgICAgIC8vIGNlbGwuXG4gICAgICB9XG4gICAgfSksXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SGl0c09uUGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gIC8vIGZpcnN0IGNoZWNrIGlmIHdlIGNhbiBtYWtlIGEgbW92ZVxuICB3aGlsZSAoXG4gICAgZ2FtZUNvbnRyb2xsZXIuZ2V0R2FtZVN0YXR1cygpICE9PSBcInVuZGVjaWRlZFwiIHx8XG4gICAgZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudFBsYXllcigpID09PSBcIkFJXCJcbiAgKSB7XG4gICAgY29uc3QgaHVtYW5IaXRzQm9hcmQgPSBnYW1lQ29udHJvbGxlci5tYWtlTW92ZSgpO1xuICAgIHJlbmRlckhpdHMoaHVtYW5IaXRzQm9hcmQpO1xuICB9XG4gIGlmIChnYW1lQ29udHJvbGxlci5nZXRHYW1lU3RhdHVzKCkgPT09IFwiQUlcIikge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG1vZGFsUGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItbW9kYWwtY29udGVudD5wXCIpO1xuICAgIG1vZGFsUGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJVbmZvcnR1bmF0ZWx5IHlvdSd2ZSBsb3N0XCI7XG4gICAgbW9kYWwuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaGlwID0gKHNoaXBOdW0pID0+IHtcbiAgY29uc3QgeyBzaGlwLCBsb2NhdGlvbiB9ID0gc2hpcHNBbmRMb2NhdGlvbnNbc2hpcE51bV07XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKHNoaXApO1xuICBjb25zdCBwbGF5ZXJCb2FyZEFycmF5ID0gWy4uLnBsYXllckJvYXJkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmRhdGFzZXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBOdW1iZXIucGFyc2VJbnQobG9jYXRpb24uZGF0YXNldC5yb3csIDEwKTtcbiAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIucGFyc2VJbnQobG9jYXRpb24uZGF0YXNldC5jb2x1bW4sIDEwKTtcblxuICAgIGlmIChzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBwbGF5ZXJCb2FyZEFycmF5W3JvdyAqIHJvd1NpemUgKyBjb2x1bW4gKyBpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC10aWxlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJCb2FyZEFycmF5Wyhyb3cgKyBpKSAqIHJvd1NpemUgKyBjb2x1bW5dLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXRpbGVcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkZVJlbmRlclNoaXAgPSAoc2hpcE51bSkgPT4ge1xuICBjb25zdCB7IHNoaXAsIGxvY2F0aW9uIH0gPSBzaGlwc0FuZExvY2F0aW9uc1tzaGlwTnVtXTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoc2hpcCk7XG4gIGNvbnN0IHBsYXllckJvYXJkQXJyYXkgPSBbLi4ucGxheWVyQm9hcmQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5dO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZGF0YXNldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IE51bWJlci5wYXJzZUludChsb2NhdGlvbi5kYXRhc2V0LnJvdywgMTApO1xuICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlci5wYXJzZUludChsb2NhdGlvbi5kYXRhc2V0LmNvbHVtbiwgMTApO1xuXG4gICAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHBsYXllckJvYXJkQXJyYXlbcm93ICogcm93U2l6ZSArIGNvbHVtbiArIGldLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgIFwic2hpcC10aWxlXCIsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJCb2FyZEFycmF5Wyhyb3cgKyBpKSAqIHJvd1NpemUgKyBjb2x1bW5dLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgIFwic2hpcC10aWxlXCIsXG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc2V0U2hpcHNFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgc2hpcHNBbmRMb2NhdGlvbnMuZm9yRWFjaCgoc2hpcEFuZExvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBzaGlwIH0gPSBzaGlwQW5kTG9jYXRpb247XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgICBpZiAoZ2FtZUNvbnRyb2xsZXIuaXNHYW1lU3RhcnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRTaGlwRHJhZ2dlZCA9IGUudGFyZ2V0O1xuICAgICAgZGVSZW5kZXJTaGlwKGN1cnJlbnRTaGlwRHJhZ2dlZC5kYXRhc2V0LnNoaXBudW0pO1xuICAgIH0pO1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHN3aXRjaERpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gc2hpcEFuZExvY2F0aW9uLnNoaXAuZGF0YXNldC5vcmllbnRhdGlvbjtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBzd2l0Y2hEaXJlY3Rpb24oKTtcbiAgICAgIGlmICghY2hlY2tTaGlwc1Bvc2l0aW9uKCkpIHtcbiAgICAgICAgc3dpdGNoRGlyZWN0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN3aXRjaERpcmVjdGlvbigpO1xuICAgICAgZGVSZW5kZXJTaGlwKHNoaXAuZGF0YXNldC5zaGlwbnVtKTtcbiAgICAgIHN3aXRjaERpcmVjdGlvbigpO1xuICAgICAgcmVuZGVyU2hpcChzaGlwLmRhdGFzZXQuc2hpcG51bSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckJvYXJkID0gKGdhbWVDb250cm9sbGVySW5wdXQpID0+IHtcbiAgcGxheWVyQm9hcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInBsYXllci1ib2FyZFwiXSk7XG4gIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKFVJR2FtZWJvYXJkKCkpO1xuICBnYW1lQ29udHJvbGxlciA9IGdhbWVDb250cm9sbGVySW5wdXQ7XG4gIFsuLi5wbGF5ZXJCb2FyZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbl0uZm9yRWFjaCgoYm9hcmRDZWxsKSA9PiB7XG4gICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFjdXJyZW50U2hpcERyYWdnZWQgfHxcbiAgICAgICAgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJvYXJkLWNlbGxcIikgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC10aWxlXCIpXG4gICAgICApIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBjdXJyZW50U2hpcERyYWdnZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldkxvY2F0aW9uID1cbiAgICAgICAgc2hpcHNBbmRMb2NhdGlvbnNbY3VycmVudFNoaXBEcmFnZ2VkLmRhdGFzZXQuc2hpcG51bV0ubG9jYXRpb247XG4gICAgICBpZiAoZS50YXJnZXQgIT09IGN1cnJlbnRTaGlwRHJhZ2dlZCkge1xuICAgICAgICBzaGlwc0FuZExvY2F0aW9uc1tjdXJyZW50U2hpcERyYWdnZWQuZGF0YXNldC5zaGlwbnVtXS5sb2NhdGlvbiA9XG4gICAgICAgICAgZS50YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGVja1NoaXBzUG9zaXRpb24oKSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2hpcC1ob3ZlclwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWhvdmVyXCIsIFwiaWxlZ2FsLXBvc2l0aW9uXCIpO1xuICAgICAgfVxuXG4gICAgICBzaGlwc0FuZExvY2F0aW9uc1tjdXJyZW50U2hpcERyYWdnZWQuZGF0YXNldC5zaGlwbnVtXS5sb2NhdGlvbiA9XG4gICAgICAgIHByZXZMb2NhdGlvbjtcbiAgICB9KTtcblxuICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIChlKSA9PiB7XG4gICAgICBpZiAoIWN1cnJlbnRTaGlwRHJhZ2dlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1ob3ZlclwiLCBcImlsZWdhbC1wb3NpdGlvblwiKTtcbiAgICB9KTtcblxuICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGdhbWVDb250cm9sbGVyLmlzR2FtZVN0YXJ0ZWQoKSkgcmV0dXJuO1xuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1ob3ZlclwiKTtcbiAgICB9KTtcblxuICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBpZiB0aGUgZHJhZ2dhYmxlIG9iamVjdCBpc24ndCBzaGlwLWNvbnRhaW5lciwgbm90aGluZyBtb3JlIHRvIGRvXG4gICAgICBpZiAoIWN1cnJlbnRTaGlwRHJhZ2dlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjdXJyZW50U2hpcE51bSA9IGN1cnJlbnRTaGlwRHJhZ2dlZC5kYXRhc2V0LnNoaXBudW07XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1ob3ZlclwiKTtcblxuICAgICAgLy8gaWYgdGhlIHBvc2l0aW9uIGlsZWdhbCwgbm90aGluZyBtb3JlIHRvIGRvXG4gICAgICBjb25zdCBwcmV2TG9jYXRpb24gPSBzaGlwc0FuZExvY2F0aW9uc1tjdXJyZW50U2hpcE51bV0ubG9jYXRpb247XG5cbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1jb250YWluZXJcIikpIHtcbiAgICAgICAgc2hpcHNBbmRMb2NhdGlvbnNbY3VycmVudFNoaXBOdW1dLmxvY2F0aW9uID0gZS50YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghY2hlY2tTaGlwc1Bvc2l0aW9uKCkpIHtcbiAgICAgICAgc2hpcHNBbmRMb2NhdGlvbnNbY3VycmVudFNoaXBOdW1dLmxvY2F0aW9uID0gcHJldkxvY2F0aW9uO1xuICAgICAgICByZW5kZXJTaGlwKGN1cnJlbnRTaGlwTnVtKTtcbiAgICAgICAgY3VycmVudFNoaXBEcmFnZ2VkID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gSWYgdGhlIHBvc2l0aW9uIGlzIGxlZ2FsIGFuZCB3ZSdyZSBpbiBib2FyZC1jZWxsIGVsZW1lbnQgYW5kIHdlJ3JlIGRyYWdnaW5nIGEgc2hpcFxuICAgICAgLy8gV2UgY2FuIGFkZCBvdXIgc2hpcCBzYWZlbHlcbiAgICAgIGRlUmVuZGVyU2hpcChjdXJyZW50U2hpcE51bSk7XG4gICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtY29udGFpbmVyXCIpKSB7XG4gICAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGN1cnJlbnRTaGlwRHJhZ2dlZCk7XG4gICAgICAgIHNoaXBzQW5kTG9jYXRpb25zW2N1cnJlbnRTaGlwTnVtXS5sb2NhdGlvbiA9IGUudGFyZ2V0O1xuICAgICAgfVxuICAgICAgcmVuZGVyU2hpcChjdXJyZW50U2hpcE51bSk7XG5cbiAgICAgIC8vIG5lZWQgdG8gY2xlYXIgb2xkIHNoaXAgbG9jYXRpb25cbiAgICAgIGN1cnJlbnRTaGlwRHJhZ2dlZCA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFNoaXBEcmFnZ2VkICYmXG4gICAgICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC1jZWxsXCIpICYmXG4gICAgICAgICFlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxheWVyLWJvYXJkXCIpXG4gICAgICApIHtcbiAgICAgICAgcmVuZGVyU2hpcChjdXJyZW50U2hpcERyYWdnZWQuZGF0YXNldC5zaGlwbnVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaW5pdGlhbGl6ZVNoaXBzQW5kTG9jYXRpb25zKHBsYXllckJvYXJkKTtcbiAgc2V0U2hpcHNFdmVudExpc3RlbmVycygpO1xuICBzaGlwc0FuZExvY2F0aW9ucy5mb3JFYWNoKChzaGlwQW5kTG9jYXRpb24sIGluZGV4KSA9PiB7XG4gICAgcmVuZGVyU2hpcChpbmRleCk7XG4gIH0pO1xuXG4gIHJldHVybiBwbGF5ZXJCb2FyZDtcbn07XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vdXRpbC91dGlsc1wiO1xuXG5sZXQgc2hpcE51bSA9IDA7XG5cbmNvbnN0IFVJU2hpcCA9IChsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW1wic2hpcC1jb250YWluZXJcIl0sXG4gICAgW1xuICAgICAgW1wiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiXSxcbiAgICAgIFtcImRhdGEtc2hpcE51bVwiLCBzaGlwTnVtXSxcbiAgICAgIFtcImRhdGEtb3JpZW50YXRpb25cIiwgb3JpZW50YXRpb25dLFxuICAgICAgW1wiZGF0YS1sZW5ndGhcIiwgbGVuZ3RoXSxcbiAgICBdLFxuICApO1xuICBzaGlwTnVtICs9IDE7XG5cbiAgcmV0dXJuIHNoaXBDb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSVNoaXA7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNsYXNzZXMgPSBbXSwgYXR0cmlidXRlcyA9IFtdKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBjbGFzc2VzLmZvckVhY2goZWxlbWVudENsYXNzID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudENsYXNzKTtcbiAgfSk7XG4gIGF0dHJpYnV0ZXMuZm9yRWFjaChlbGVtZW50QXR0cmlidXRlID0+IHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShlbGVtZW50QXR0cmlidXRlWzBdLCBlbGVtZW50QXR0cmlidXRlWzFdKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL2xvZ2ljL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgRGlzcGxheUhhbmRsZXIgZnJvbSBcIi4vbW9kdWxlcy91aS9EaXNwbGF5SGFuZGxlclwiO1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9IEdhbWVDb250cm9sbGVyKCk7XG4vLyBHYW1lQ29udHJvbGxlclxuRGlzcGxheUhhbmRsZXIoZ2FtZUNvbnRyb2xsZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==