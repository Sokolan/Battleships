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

.player-board .board-cell {
  transition-delay: 0.6s;
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
`, "",{"version":3,"sources":["webpack://./src/styles/body.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,4CAAmD;AACrD;;AAEA;EACE,oEAAoE;EACpE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;;EAET,8BAA8B;EAC9B,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,6BAA6B;EAC7B,aAAa;EACb,QAAQ;EACR,mBAAmB;EACnB,iEAAiE;EACjE,8DAA8D;EAC9D,kDAAkD;EAClD,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;EACE,8BAA8B;EAC9B,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;;EAEhB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;EACxC,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iCAAiC;EACjC,yBAAyB;EACzB,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,mCAAmC;EACnC,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,gCAAgC;EAChC,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,2BAA2B;EAC3B,YAAY;EACZ,yBAAyB;EACzB,4CAA4C;EAC5C,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: StardosStencil-Bold;\n  src: url(\"../assets/fonts/StardosStencil-Bold.ttf\");\n}\n\n#body {\n  background: linear-gradient(0deg, #01161a 15%, #0d8fa9 60%, #bbecf6);\n  display: grid;\n  padding: 10px;\n}\n\n.boards-container {\n  display: grid;\n  gap: 15px;\n\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.board-container {\n  padding: 4px;\n  height: 30%;\n  --grid-size: 10;\n  --cell-size: 40px;\n  --ship-color: rgb(12, 20, 74);\n  display: grid;\n  gap: 3px;\n  height: fit-content;\n  grid-template-columns: repeat(var(--grid-size), var(--cell-size));\n  grid-template-rows: repeat(var(--grid-size), var(--cell-size));\n  box-shadow: 0 0 16px 0px rgba(26, 176, 230, 0.579);\n  border-radius: 8px;\n  background: rgba(34, 160, 227, 0.335);\n}\n\n.board-cell {\n  background: rgb(208, 233, 255);\n  border: 1px solid rgb(21, 0, 255);\n  border-radius: 8px;\n  overflow: hidden;\n  transition: 0.5s;\n\n  /* overflow:visible; */\n}\n\n.player-board .board-cell {\n  transition-delay: 0.6s;\n}\n\n.enemy-baord .board-cell:hover {\n  box-shadow: 0 0 8px 0px rgb(0, 153, 255);\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.ships-container {\n  gap: 1px;\n  cursor: move;\n}\n\n.ship-container {\n  height: 40px;\n  width: 40px;\n  cursor: move;\n  transition: 0.5s;\n}\n\n.ship-tile {\n  background: var(--ship-color);\n}\n\n.ship-hover {\n  background-color: rgb(0, 198, 0);\n}\n\n.ship-hover.ilegal-position {\n  background-color: red;\n}\n\n.temp-ship-tile {\n  background-color: yellow;\n}\n\n.board-cell.hit {\n  background-color: rgb(225, 14, 3);\n  border: 2px solid #ff6600;\n  --transofrm-scale: 0.8;\n  transform: scale(var(--transofrm-scale));\n}\n\n.miss {\n  background-color: rgb(25, 207, 227);\n  transform: scale(0.8);\n  cursor: pointer;\n}\n\n.enemy-baord .board-cell.miss:hover {\n  transform: scale(0.8);\n  cursor: auto;\n}\n\n.enemy-baord .board-cell.hit:hover {\n  transform: scale(var(--transofrm-scale));\n  cursor: auto;\n}\n\n.new-game-container {\n  height: fit-content;\n  width: fit-content;\n  align-self: center;\n  justify-self: center;\n}\n\n.new-game-container > button {\n  transition: 0.8s;\n  font-family: StardosStencil-Bold;\n  padding: 8px 16px;\n  border-radius: 8px;\n  /* font-weight: 400; */\n  font-size: 32px;\n  background-color: #151a2832;\n  border: none;\n  color: rgb(230, 230, 230);\n  text-shadow: 4px 2px rgba(255, 94, 0, 0.447);\n  text-decoration: underline;\n}\n\n.new-game-container > button:hover {\n  transform: scale(1.2);\n}\n\nbutton {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpREFBSTtBQUNyQixvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RCxrQkFBa0I7QUFDOUUsNkRBQTZELG9CQUFvQjtBQUNqRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQixzQkFBc0IsV0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7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O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQlA7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E0RDtBQUNIOztBQUV6RCx1QkFBdUIseUVBQWM7QUFDckM7QUFDQSxzRUFBYyxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy9ib2R5LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy93aW5uZXJNb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy9ib2R5LmNzcz81OTk0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy9mb290ZXIuY3NzPzdlOTIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzL2hlYWRlci5jc3M/ZTY4YiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzL3dpbm5lck1vZGFsLmNzcz9hOGVhIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvbW9kdWxlcy9sb2dpYy9BSVBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9tb2R1bGVzL2xvZ2ljL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvbG9naWMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvbG9naWMvSHVtYW5QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvbW9kdWxlcy9sb2dpYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvbW9kdWxlcy9sb2dpYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvdWkvRGlzcGxheUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvbW9kdWxlcy91aS9jb21wb25lbnRzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvbW9kdWxlcy91aS9jb21wb25lbnRzL2VuZW15Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvbW9kdWxlcy91aS9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9tb2R1bGVzL3VpL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvdWkvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvbW9kdWxlcy91aS9jb21wb25lbnRzL3BsYXllckJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvdWkvY29tcG9uZW50cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL21vZHVsZXMvdWkvdXRpbC91dGlscy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvU3RhcmRvc1N0ZW5jaWwtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogU3RhcmRvc1N0ZW5jaWwtQm9sZDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiNib2R5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMTE2MWEgMTUlLCAjMGQ4ZmE5IDYwJSwgI2JiZWNmNik7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNXB4O1xuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNHB4O1xuICBoZWlnaHQ6IDMwJTtcbiAgLS1ncmlkLXNpemU6IDEwO1xuICAtLWNlbGwtc2l6ZTogNDBweDtcbiAgLS1zaGlwLWNvbG9yOiByZ2IoMTIsIDIwLCA3NCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogM3B4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ncmlkLXNpemUpLCB2YXIoLS1jZWxsLXNpemUpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tZ3JpZC1zaXplKSwgdmFyKC0tY2VsbC1zaXplKSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxNnB4IDBweCByZ2JhKDI2LCAxNzYsIDIzMCwgMC41NzkpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzQsIDE2MCwgMjI3LCAwLjMzNSk7XG59XG5cbi5ib2FyZC1jZWxsIHtcbiAgYmFja2dyb3VuZDogcmdiKDIwOCwgMjMzLCAyNTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEsIDAsIDI1NSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcblxuICAvKiBvdmVyZmxvdzp2aXNpYmxlOyAqL1xufVxuXG4ucGxheWVyLWJvYXJkIC5ib2FyZC1jZWxsIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbn1cblxuLmVuZW15LWJhb3JkIC5ib2FyZC1jZWxsOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwcHggcmdiKDAsIDE1MywgMjU1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGlwcy1jb250YWluZXIge1xuICBnYXA6IDFweDtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uc2hpcC1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjdXJzb3I6IG1vdmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5zaGlwLXRpbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGlwLWNvbG9yKTtcbn1cblxuLnNoaXAtaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTk4LCAwKTtcbn1cblxuLnNoaXAtaG92ZXIuaWxlZ2FsLXBvc2l0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4udGVtcC1zaGlwLXRpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5ib2FyZC1jZWxsLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDE0LCAzKTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmNjYwMDtcbiAgLS10cmFuc29mcm0tc2NhbGU6IDAuODtcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS10cmFuc29mcm0tc2NhbGUpKTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDIwNywgMjI3KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lbmVteS1iYW9yZCAuYm9hcmQtY2VsbC5taXNzOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi5lbmVteS1iYW9yZCAuYm9hcmQtY2VsbC5oaXQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXRyYW5zb2ZybS1zY2FsZSkpO1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi5uZXctZ2FtZS1jb250YWluZXIge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5uZXctZ2FtZS1jb250YWluZXIgPiBidXR0b24ge1xuICB0cmFuc2l0aW9uOiAwLjhzO1xuICBmb250LWZhbWlseTogU3RhcmRvc1N0ZW5jaWwtQm9sZDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogZm9udC13ZWlnaHQ6IDQwMDsgKi9cbiAgZm9udC1zaXplOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxYTI4MzI7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcbiAgdGV4dC1zaGFkb3c6IDRweCAycHggcmdiYSgyNTUsIDk0LCAwLCAwLjQ0Nyk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubmV3LWdhbWUtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYm9keS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNENBQW1EO0FBQ3JEOztBQUVBO0VBQ0Usb0VBQW9FO0VBQ3BFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUzs7RUFFVCw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsaUVBQWlFO0VBQ2pFLDhEQUE4RDtFQUM5RCxrREFBa0Q7RUFDbEQsa0JBQWtCO0VBQ2xCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0VBRWhCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRDQUE0QztFQUM1QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFN0YXJkb3NTdGVuY2lsLUJvbGQ7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL1N0YXJkb3NTdGVuY2lsLUJvbGQudHRmXFxcIik7XFxufVxcblxcbiNib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDExNjFhIDE1JSwgIzBkOGZhOSA2MCUsICNiYmVjZjYpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE1cHg7XFxuXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGhlaWdodDogMzAlO1xcbiAgLS1ncmlkLXNpemU6IDEwO1xcbiAgLS1jZWxsLXNpemU6IDQwcHg7XFxuICAtLXNoaXAtY29sb3I6IHJnYigxMiwgMjAsIDc0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDNweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ncmlkLXNpemUpLCB2YXIoLS1jZWxsLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWdyaWQtc2l6ZSksIHZhcigtLWNlbGwtc2l6ZSkpO1xcbiAgYm94LXNoYWRvdzogMCAwIDE2cHggMHB4IHJnYmEoMjYsIDE3NiwgMjMwLCAwLjU3OSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAxNjAsIDIyNywgMC4zMzUpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjA4LCAyMzMsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEsIDAsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG5cXG4gIC8qIG92ZXJmbG93OnZpc2libGU7ICovXFxufVxcblxcbi5wbGF5ZXItYm9hcmQgLmJvYXJkLWNlbGwge1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcXG59XFxuXFxuLmVuZW15LWJhb3JkIC5ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMHB4IHJnYigwLCAxNTMsIDI1NSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgZ2FwOiAxcHg7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zaGlwLXRpbGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5zaGlwLWhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxOTgsIDApO1xcbn1cXG5cXG4uc2hpcC1ob3Zlci5pbGVnYWwtcG9zaXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGVtcC1zaGlwLXRpbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uYm9hcmQtY2VsbC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMTQsIDMpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmNjYwMDtcXG4gIC0tdHJhbnNvZnJtLXNjYWxlOiAwLjg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXRyYW5zb2ZybS1zY2FsZSkpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDIwNywgMjI3KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVuZW15LWJhb3JkIC5ib2FyZC1jZWxsLm1pc3M6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4uZW5lbXktYmFvcmQgLmJvYXJkLWNlbGwuaGl0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tdHJhbnNvZnJtLXNjYWxlKSk7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi5uZXctZ2FtZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmV3LWdhbWUtY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIHRyYW5zaXRpb246IDAuOHM7XFxuICBmb250LWZhbWlseTogU3RhcmRvc1N0ZW5jaWwtQm9sZDtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLyogZm9udC13ZWlnaHQ6IDQwMDsgKi9cXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTFhMjgzMjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDJweCByZ2JhKDI1NSwgOTQsIDAsIDAuNDQ3KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubmV3LWdhbWUtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBmb290ZXIge1xuICAtLWdhcC1pdGVtczogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tZ2FwLWl0ZW1zKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMTE2MWEgNSUsICMwMDAgMTAwJSk7XG4gIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoNzIsIDkxLCAxMDcpOyAqL1xufVxuXG5mb290ZXIgPiBwIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmYWU7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tZ2FwLWl0ZW1zKTtcbiAgcGFkZGluZzogNXB4IDBweCA1cHggdmFyKC0tZ2FwLWl0ZW1zKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmYmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cblxuLmdpdC1pbWcge1xuICBwYWRkaW5nOiA1cHggMHB4IDRweCAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZmlsdGVyOiBpbnZlcnQoMC44KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0RBQWtEO0VBQ2xELDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmb290ZXIge1xcbiAgLS1nYXAtaXRlbXM6IDI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1nYXAtaXRlbXMpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMTE2MWEgNSUsICMwMDAgMTAwJSk7XFxuICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDcyLCA5MSwgMTA3KTsgKi9cXG59XFxuXFxuZm9vdGVyID4gcCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmZhZTtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tZ2FwLWl0ZW1zKTtcXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IHZhcigtLWdhcC1pdGVtcyk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2ZmZmZmZmJlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuXFxuLmdpdC1pbWcge1xcbiAgcGFkZGluZzogNXB4IDBweCA0cHggMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoMC44KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvQWxwaGFiZXRDYXBzTGluZWQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEFscGhhYmV0Q2Fwc0xpbmVkO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIyRTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmhlYWRlci10aXRsZSA+IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBbHBoYWJldENhcHNMaW5lZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgdGV4dC1zaGFkb3c6IDEwcHggMHB4IHJnYmEoMjU1LCA5NCwgMCwgMC40MTEpO1xuICBjb2xvcjogd2hpdGVcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLDRDQUFpRDtBQUNuRDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkNBQTZDO0VBQzdDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogQWxwaGFiZXRDYXBzTGluZWQ7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0FscGhhYmV0Q2Fwc0xpbmVkLm90ZlxcXCIpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIyRTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcblxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlID4gcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogQWxwaGFiZXRDYXBzTGluZWQ7XFxuICBsZXR0ZXItc3BhY2luZzogMTZweDtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIHRleHQtc2hhZG93OiAxMHB4IDBweCByZ2JhKDI1NSwgOTQsIDAsIDAuNDExKTtcXG4gIGNvbG9yOiB3aGl0ZVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGhlaWdodDogMTAwdmg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDlmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1N0YXJkb3NTdGVuY2lsLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFN5bmU7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLndpbm5lci1tb2RhbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgNDUsIDExMywgMC41NTQpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2lubmVyLW1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgLS13aW5uZXItY29sb3I6IGdyZWVuO1xuICAtLWxvb3Nlci1jb2xvcjogcmVkO1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzNywgMTI1LCAyNDIpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogNDBweDtcbn1cblxuLndpbm5lci1tb2RhbC1jb250ZW50ID4gcCB7XG4gIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFN5bmU7XG4gIHdvcmQtc3BhY2luZzogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuYnV0dG9uLndpbm5lci1tb2RhbC1leGl0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA1cHggN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzYsIDEzNiwgMTM2KTtcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3gtc2hhZG93OiA1cHggNXB4IHJnYigwLCAwLCAwKTtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuYnV0dG9uLndpbm5lci1tb2RhbC1leGl0OmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KVxufVxuXG4uYWktd2lubmVyIHtcbiAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLXJhZGl1cykgc29saWQgdmFyKC0tbG9vc2VyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDE2cHggdmFyKC0tbG9vc2VyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCB2YXIoLS1sb29zZXItY29sb3IpO1xufVxuXG4uaHVtYW4td2lubmVyIHtcbiAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLXJhZGl1cykgc29saWQgdmFyKC0td2lubmVyLWNvbG9yKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0td2lubmVyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDE2cHggdmFyKC0td2lubmVyLWNvbG9yKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93aW5uZXJNb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsNENBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsMERBQTBEO0VBQzFELGlEQUFpRDtFQUNqRCxvQ0FBb0M7RUFDcEMsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsMERBQTBEO0VBQzFELHdDQUF3QztFQUN4QyxpREFBaUQ7QUFDbkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogU3luZTtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvU3RhcmRvc1N0ZW5jaWwtQm9sZC50dGZcXFwiKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud2lubmVyLW1vZGFsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLCA0NSwgMTEzLCAwLjU1NCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2lubmVyLW1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZzogMjRweCAzMnB4O1xcbiAgLS13aW5uZXItY29sb3I6IGdyZWVuO1xcbiAgLS1sb29zZXItY29sb3I6IHJlZDtcXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzcsIDEyNSwgMjQyKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi53aW5uZXItbW9kYWwtY29udGVudCA+IHAge1xcbiAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtZmFtaWx5OiBTeW5lO1xcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbmJ1dHRvbi53aW5uZXItbW9kYWwtZXhpdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogNXB4IDdweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTM2LCAxMzYsIDEzNik7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IHJnYigwLCAwLCAwKTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG5idXR0b24ud2lubmVyLW1vZGFsLWV4aXQ6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KVxcbn1cXG5cXG4uYWktd2lubmVyIHtcXG4gIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1yYWRpdXMpIHNvbGlkIHZhcigtLWxvb3Nlci1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggMTZweCB2YXIoLS1sb29zZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tbG9vc2VyLWNvbG9yKTtcXG59XFxuXFxuLmh1bWFuLXdpbm5lciB7XFxuICBib3JkZXItdG9wOiB2YXIoLS1ib3JkZXItcmFkaXVzKSBzb2xpZCB2YXIoLS13aW5uZXItY29sb3IpO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0td2lubmVyLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCAxNnB4IHZhcigtLXdpbm5lci1jb2xvcik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2R5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbm5lck1vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2lubmVyTW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5jb25zdCBBSVBsYXllciA9ICgpID0+IHtcbiAgY29uc3QgbVBsYXllciA9IFBsYXllcihcIkFJXCIpO1xuXG4gIC8vIEVuZW15IGJvYXJkIHNob3VsZCBoYXZlIHJlY2VpdmVBdHRhY2sgYW5kIGdldEhpdHNCb2FyZFxuICBtUGxheWVyLm1ha2VNb3ZlID0gKGVuZW15Qm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGVuZW15Qm9hcmQuZ2V0SGl0c0JvYXJkKCk7XG4gICAgbGV0IGxlZ2FsTW92ZUZvdW5kID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBjb25zdCBib2FyZFNpemUgPSBlbmVteUJvYXJkLmdldEJvYXJkU2l6ZSgpO1xuICAgIHdoaWxlICghbGVnYWxNb3ZlRm91bmQpIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgICBpZiAoYm9hcmRbeF1beV0gPT09IFwiXCIpIHtcbiAgICAgICAgbGVnYWxNb3ZlRm91bmQgPSB0cnVlO1xuICAgICAgICByZXN1bHQgPSBlbmVteUJvYXJkLnJlY2lldmVBdHRhY2soW3gsIHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBtUGxheWVyLnBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gICAgbVBsYXllci5nZXRCb2FyZCgpLnBsYWNlU2hpcHNJblJhbmRvbVBvc2l0aW9ucygpO1xuICB9O1xuXG4gIHJldHVybiBtUGxheWVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQUlQbGF5ZXI7XG4iLCJpbXBvcnQgSHVtYW5QbGF5ZXIgZnJvbSBcIi4vSHVtYW5QbGF5ZXJcIjtcbmltcG9ydCBBSVBsYXllciBmcm9tIFwiLi9BSVBsYXllclwiO1xuXG5jb25zdCBHYW1lQ29udHJvbGxlciA9ICgpID0+IHtcbiAgbGV0IG1IdW1hblBsYXllcjtcbiAgbGV0IG1BSVBsYXllcjtcbiAgbGV0IG1HYW1lU3RhdHVzO1xuICBsZXQgbUN1cnJlbnRQbGF5ZXI7XG4gIGxldCBtSXNHYW1lU3RhcnRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBtSXNHYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgIG1HYW1lU3RhdHVzID0gXCJ1bmRlY2lkZWRcIjtcbiAgfTtcblxuICBjb25zdCBpc0dhbWVTdGFydGVkID0gKCkgPT4gbUlzR2FtZVN0YXJ0ZWQ7XG5cbiAgY29uc3QgZ2V0Q3VycmVudFBsYXllciA9ICgpID0+IG1DdXJyZW50UGxheWVyLmdldFR5cGUoKTtcblxuICAvKlxuICAgKiB1bmRlY2lkZWQgLSBubyBwbGF5ZXIgd2FuXG4gICAqIEFJIC0gQUkgd2FuXG4gICAqIEh1bWFuIC0gSHVtYW4gd2FuXG4gICAqL1xuICBjb25zdCBnZXRHYW1lU3RhdHVzID0gKCkgPT4gbUdhbWVTdGF0dXM7XG5cbiAgLyogc3RhcnRHYW1lIGV4cGVjdHM6XG4gICAqIDEgZm91ciB0aWxlcyBzaGlwXG4gICAqIDIgdGhyZWUgdGlsZXMgc2hpcHNcbiAgICogMyB0d28gdGlsZXMgc2hpcHNcbiAgICogNCBvbmUgdGlsZSBzaGlwc1xuICAgKiBsb2NhdGlvbnMgPSBbW1t4MSx5MV0sIFwidmVydGljYWxcIi9cImhvcml6b250YWxcIixbW3gyLHkyXS4uLl1cbiAgICogcmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoZSBzdWNjZXNzL2ZhaWx1cmUgb2ZcbiAgICogc3RhcnRpbmcgYSBuZXcgZ2FtZVxuICAgKi9cbiAgY29uc3Qgc3RhcnROZXdHYW1lID0gKFxuICAgIGZvdXJUaWxlTG9jYXRpb25zLFxuICAgIHRocmVlVGlsZUxvY2F0aW9ucyxcbiAgICB0d29UaWxlc0xvY2F0aW9ucyxcbiAgICBvbmVUaWxlTG9jYXRpb25zLFxuICAgIGRlZmF1bHRQb3NpdGlvbnMgPSB0cnVlLFxuICApID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHBsYXllcnMgYW5kIGdhbWUgc3RhdHVzLCBodW1hbiBwbGF5ZXIgaXMgdGhlIG9uZSB0byBzdGFydC5cbiAgICBtSHVtYW5QbGF5ZXIgPSBIdW1hblBsYXllcigpO1xuICAgIG1BSVBsYXllciA9IEFJUGxheWVyKCk7XG4gICAgbUdhbWVTdGF0dXMgPSBcInVuZGVjaWRlZFwiO1xuICAgIG1DdXJyZW50UGxheWVyID0gbUh1bWFuUGxheWVyO1xuICAgIG1Jc0dhbWVTdGFydGVkID0gdHJ1ZTtcblxuICAgIG1IdW1hblBsYXllci5wbGFjZVNoaXBzKFxuICAgICAgZm91clRpbGVMb2NhdGlvbnMsXG4gICAgICB0aHJlZVRpbGVMb2NhdGlvbnMsXG4gICAgICB0d29UaWxlc0xvY2F0aW9ucyxcbiAgICAgIG9uZVRpbGVMb2NhdGlvbnMsXG4gICAgICBkZWZhdWx0UG9zaXRpb25zLFxuICAgICk7XG5cbiAgICBtQUlQbGF5ZXIucGxhY2VTaGlwcygpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLypcbiAgICogcmV0dXJucyB0aGUgaGl0cyBib2FyZCBvZiB0aGUgcGxheWVyIHRoYXQgaGFzIGJlZW4gaGl0XG4gICAqL1xuICBjb25zdCBtYWtlTW92ZSA9IChjb29yZGluYXRpb24gPSBbXSkgPT4ge1xuICAgIGlmIChtR2FtZVN0YXR1cyAhPT0gXCJ1bmRlY2lkZWRcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGVtZW55Qm9hcmQgPVxuICAgICAgZ2V0Q3VycmVudFBsYXllcigpID09PSBcIkh1bWFuXCJcbiAgICAgICAgPyBtQUlQbGF5ZXIuZ2V0Qm9hcmQoKVxuICAgICAgICA6IG1IdW1hblBsYXllci5nZXRCb2FyZCgpO1xuXG4gICAgY29uc3QgbW92ZVN0YXR1cyA9IG1DdXJyZW50UGxheWVyLm1ha2VNb3ZlKGVtZW55Qm9hcmQsIGNvb3JkaW5hdGlvbik7XG5cbiAgICBpZiAobW92ZVN0YXR1cyA9PT0gXCJFUlJPUlwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobW92ZVN0YXR1cyA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIGlmIChnZXRDdXJyZW50UGxheWVyKCkgPT09IFwiSHVtYW5cIikge1xuICAgICAgICBtQ3VycmVudFBsYXllciA9IG1BSVBsYXllcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1DdXJyZW50UGxheWVyID0gbUh1bWFuUGxheWVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbUN1cnJlbnRQbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRIaXRzQm9hcmQoKTtcbiAgICB9XG5cbiAgICAvLyBlbHNlIHdlIGhhdmUgYSBoaXRcbiAgICBpZiAobW92ZVN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgICAgaWYgKFxuICAgICAgICBnZXRDdXJyZW50UGxheWVyKCkgPT09IFwiSHVtYW5cIiAmJlxuICAgICAgICBtQUlQbGF5ZXIuZ2V0Qm9hcmQoKS5hbGxTaGlwc1N1bmsoKVxuICAgICAgKSB7XG4gICAgICAgIG1HYW1lU3RhdHVzID0gXCJIdW1hblwiO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZ2V0Q3VycmVudFBsYXllcigpID09PSBcIkFJXCIgJiZcbiAgICAgICAgbUh1bWFuUGxheWVyLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKClcbiAgICAgICkge1xuICAgICAgICBtR2FtZVN0YXR1cyA9IFwiQUlcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVtZW55Qm9hcmQuZ2V0SGl0c0JvYXJkKCk7XG4gIH07XG5cbiAgY29uc3QgaXNQb3NpdGlvbmluZ0xlZ2FsID0gKFxuICAgIGZvdXJUaWxlTG9jYXRpb25zLFxuICAgIHRocmVlVGlsZUxvY2F0aW9ucyxcbiAgICB0d29UaWxlc0xvY2F0aW9ucyxcbiAgICBvbmVUaWxlTG9jYXRpb25zLFxuICApID0+XG4gICAgSHVtYW5QbGF5ZXIoKVxuICAgICAgLmdldEJvYXJkKClcbiAgICAgIC5pc1Bvc2l0aW9uaW5nTGVnYWwoXG4gICAgICAgIGZvdXJUaWxlTG9jYXRpb25zLFxuICAgICAgICB0aHJlZVRpbGVMb2NhdGlvbnMsXG4gICAgICAgIHR3b1RpbGVzTG9jYXRpb25zLFxuICAgICAgICBvbmVUaWxlTG9jYXRpb25zLFxuICAgICAgKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXJ0TmV3R2FtZSxcbiAgICBtYWtlTW92ZSxcbiAgICBnZXRDdXJyZW50UGxheWVyLFxuICAgIGdldEdhbWVTdGF0dXMsXG4gICAgaXNQb3NpdGlvbmluZ0xlZ2FsLFxuICAgIGlzR2FtZVN0YXJ0ZWQsXG4gICAgcmVzZXRHYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgbUJvYXJkU2l6ZSA9IDEwO1xuICBjb25zdCBtU2hpcHNCb2FyZCA9IEFycmF5KG1Cb2FyZFNpemUpXG4gICAgLmZpbGwobnVsbClcbiAgICAubWFwKCgpID0+IEFycmF5KG1Cb2FyZFNpemUpLmZpbGwobnVsbCkpO1xuICBjb25zdCBtSGl0c0JvYXJkID0gQXJyYXkobUJvYXJkU2l6ZSlcbiAgICAuZmlsbChudWxsKVxuICAgIC5tYXAoKCkgPT4gQXJyYXkobUJvYXJkU2l6ZSkuZmlsbChcIlwiKSk7XG5cbiAgY29uc3QgZ2V0Qm9hcmRTaXplID0gKCkgPT4gbUJvYXJkU2l6ZTtcbiAgY29uc3QgbUNvb3JkaW5hdGVWYWxpZCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgY29vcmRpbmF0ZVswXSA8IDAgfHxcbiAgICAgIGNvb3JkaW5hdGVbMV0gPCAwIHx8XG4gICAgICBjb29yZGluYXRlWzBdID49IG1Cb2FyZFNpemUgfHxcbiAgICAgIGNvb3JkaW5hdGVbMV0gPj0gbUJvYXJkU2l6ZVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBtQ2hlY2tGb3JOb1NoaXBzID0gKGNvb3JkaW5hdGlvbiwgbGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IGZyb21YID0gY29vcmRpbmF0aW9uWzBdIC0gMTtcbiAgICBjb25zdCBmcm9tWSA9IGNvb3JkaW5hdGlvblsxXSAtIDE7XG4gICAgY29uc3QgdG9YID0gb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGZyb21YICsgbGVuZ3RoICsgMSA6IGZyb21YICsgMjtcbiAgICBjb25zdCB0b1kgPSBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBmcm9tWSArIGxlbmd0aCArIDEgOiBmcm9tWSArIDI7XG5cbiAgICBmb3IgKGxldCB4ID0gZnJvbVg7IHggPD0gdG9YOyB4ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IHkgPSBmcm9tWTsgeSA8PSB0b1k7IHkgKz0gMSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeCA+PSAwICYmXG4gICAgICAgICAgeSA+PSAwICYmXG4gICAgICAgICAgeCA8IG1Cb2FyZFNpemUgJiZcbiAgICAgICAgICB5IDwgbUJvYXJkU2l6ZSAmJlxuICAgICAgICAgIG1TaGlwc0JvYXJkW3hdW3ldICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBtTWFya1N1cnJvdW5kaW5nT2ZTdW5rU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgLy8gV2Ugd2lsbCBmaW5kIHRoZSBzdGFydCBvZiB0aGUgc2hpcCBhbmQgZGV0ZXJtaW5hdGUgaWYgaXQncyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xuICAgIGxldCB5ID0gY29vcmRpbmF0ZVsxXTtcbiAgICBsZXQgb3JpZW50YXRpb247XG4gICAgLy8gQ2hlY2sgaWYgaG9yaXpvbnRhbFxuICAgIGlmIChcbiAgICAgIChtQ29vcmRpbmF0ZVZhbGlkKFt4LCB5ICsgMV0pICYmIG1IaXRzQm9hcmRbeF1beSArIDFdID09PSBcIm9cIikgfHxcbiAgICAgIChtQ29vcmRpbmF0ZVZhbGlkKFt4LCB5IC0gMV0pICYmIG1IaXRzQm9hcmRbeF1beSAtIDFdID09PSBcIm9cIilcbiAgICApIHtcbiAgICAgIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIH1cblxuICAgIHdoaWxlIChtQ29vcmRpbmF0ZVZhbGlkKFt4LCB5XSkgJiYgbUhpdHNCb2FyZFt4XVt5XSA9PT0gXCJvXCIpIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgeSAtPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCAtPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICB3aGlsZSAoXG4gICAgICAgIChtQ29vcmRpbmF0ZVZhbGlkKFt4LCB5XSkgJiYgbUhpdHNCb2FyZFt4XVt5XSA9PT0gXCJvXCIpIHx8XG4gICAgICAgIChtQ29vcmRpbmF0ZVZhbGlkKFt4LCB5IC0gMV0pICYmIG1IaXRzQm9hcmRbeF1beSAtIDFdID09PSBcIm9cIikgfHxcbiAgICAgICAgKG1Db29yZGluYXRlVmFsaWQoW3gsIHkgKyAxXSkgJiYgbUhpdHNCb2FyZFt4XVt5ICsgMV0gPT09IFwib1wiKVxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSAxOyBpICs9IDEpIHtcbiAgICAgICAgICAvLyBNYXJrIGFib3ZlIGFuZCBiZWxvdywgYW5kIGlmIGl0J3Mgbm90IHNoaXAgdGlsZSB0aGVuIHRoZSBvdXRlciB3YWxsIHRvb1xuICAgICAgICAgIGlmIChtQ29vcmRpbmF0ZVZhbGlkKFt4ICsgaSwgeV0pICYmIG1IaXRzQm9hcmRbeCArIGldW3ldICE9PSBcIm9cIikge1xuICAgICAgICAgICAgbUhpdHNCb2FyZFt4ICsgaV1beV0gPSBcInhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeSArPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoXG4gICAgICAgIChtQ29vcmRpbmF0ZVZhbGlkKFt4LCB5XSkgJiYgbUhpdHNCb2FyZFt4XVt5XSA9PT0gXCJvXCIpIHx8XG4gICAgICAgIChtQ29vcmRpbmF0ZVZhbGlkKFt4IC0gMSwgeV0pICYmIG1IaXRzQm9hcmRbeCAtIDFdW3ldID09PSBcIm9cIikgfHxcbiAgICAgICAgKG1Db29yZGluYXRlVmFsaWQoW3ggKyAxLCB5XSkgJiYgbUhpdHNCb2FyZFt4ICsgMV1beV0gPT09IFwib1wiKVxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSAxOyBpICs9IDEpIHtcbiAgICAgICAgICAvLyBNYXJrIGFib3ZlIGFuZCBiZWxvdywgYW5kIGlmIGl0J3Mgbm90IHNoaXAgdGlsZSB0aGVuIHRoZSBvdXRlciB3YWxsIHRvb1xuICAgICAgICAgIGlmIChtQ29vcmRpbmF0ZVZhbGlkKFt4LCB5ICsgaV0pICYmIG1IaXRzQm9hcmRbeF1beSArIGldICE9PSBcIm9cIikge1xuICAgICAgICAgICAgbUhpdHNCb2FyZFt4XVt5ICsgaV0gPSBcInhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKiByZXR1cm5zIGEgYm9hcmQgd2l0aDpcbiAgICogXCJvXCIgLSBmb3IgdGlsZSB0aGF0IGhhZCBzaGlwIHdoaWNoIHdhcyBoaXRcbiAgICogXCJ4XCIgLSBmb3IgdGlsZSB0aGF0IHdhcyBoaXQgYW5kIGl0IGhhcyBubyBzaGlwXG4gICAqIFwiXCIgIC0gZm9yIHRpbGUgdGhhdCB3YXNuJ3QgaGl0XG4gICAqL1xuICBjb25zdCBnZXRIaXRzQm9hcmQgPSAoKSA9PiBbLi4ubUhpdHNCb2FyZF07XG5cbiAgLy8gcmV0dXJucyBib29sZWFuIHZhbHVlIGRlcGVuZHMgb24gdGhlIHN1Y2Nlc3Mgb2YgdGhlIHBsYWNpbmcgdGhlIHNoaXBcbiAgY29uc3QgcGxhY2VTaGlwID0gKHN0YXJ0Q29vcmRpbmF0aW9uLCBsZW5ndGgsIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIpID0+IHtcbiAgICAvLyBDYW4ndCBoYXZlIG5lZ2F0aXZlIHNpemUgc2hpcFxuICAgIGlmIChsZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBjb29yZGluYXRpb24gaXMgaW4gYm91bmRhcmllcyBvZiB0aGUgYm9hcmRcbiAgICBpZiAoIW1Db29yZGluYXRlVmFsaWQoc3RhcnRDb29yZGluYXRpb24pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIG9yaWVudGF0aW9ucyBpcyBjb3JyZWN0XG4gICAgaWYgKG9yaWVudGF0aW9uICE9PSBcImhvcml6b250YWxcIiAmJiBvcmllbnRhdGlvbiAhPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgb3V0IG9mIGJvdW5kYXJpZXNcbiAgICBpZiAoXG4gICAgICAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgICFtQ29vcmRpbmF0ZVZhbGlkKFtcbiAgICAgICAgICBzdGFydENvb3JkaW5hdGlvblswXSxcbiAgICAgICAgICBzdGFydENvb3JkaW5hdGlvblsxXSArIGxlbmd0aCAtIDEsXG4gICAgICAgIF0pKSB8fFxuICAgICAgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgJiZcbiAgICAgICAgIW1Db29yZGluYXRlVmFsaWQoW1xuICAgICAgICAgIHN0YXJ0Q29vcmRpbmF0aW9uWzBdICsgbGVuZ3RoIC0gMSxcbiAgICAgICAgICBzdGFydENvb3JkaW5hdGlvblsxXSxcbiAgICAgICAgXSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIG5laWdoYm91cmluZyBzaGlwc1xuICAgIGlmICghbUNoZWNrRm9yTm9TaGlwcyhzdGFydENvb3JkaW5hdGlvbiwgbGVuZ3RoLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeCA9IHN0YXJ0Q29vcmRpbmF0aW9uWzBdO1xuICAgIGNvbnN0IHkgPSBzdGFydENvb3JkaW5hdGlvblsxXTtcblxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBtU2hpcHNCb2FyZFt4XVt5ICsgaV0gPSBzaGlwO1xuICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIG1TaGlwc0JvYXJkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qXG4gICAqIHJldHVybnM6XG4gICAqICAgXCJoaXRcIiAgLSBpZiB0aGVyZSB3YXMgYSBoaXRcbiAgICogICBcIm1pc3NcIiAtIGlmIHRoZXJlIHdhc24ndCBhIGhpdFxuICAgKiAgIFwiRVJST1JcIiAtIGlmIHRoZSBjb29yZGluYXRpb24gaXMgaWxlZ2FsIChvdXQgb2Ygc2NvcGUsIGNvb3JkaW5hdGlvbiBhbHJlYWR5IGJlZW4gaGl0KVxuICAgKi9cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb29yZGluYXRpb24pID0+IHtcbiAgICBpZiAoIW1Db29yZGluYXRlVmFsaWQoY29vcmRpbmF0aW9uKSkge1xuICAgICAgcmV0dXJuIFwiRVJST1JcIjtcbiAgICB9XG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGlvblswXTtcbiAgICBjb25zdCB5ID0gY29vcmRpbmF0aW9uWzFdO1xuXG4gICAgaWYgKG1IaXRzQm9hcmRbeF1beV0gPT09IFwib1wiIHx8IG1IaXRzQm9hcmRbeF1beV0gPT09IFwieFwiKSB7XG4gICAgICByZXR1cm4gXCJFUlJPUlwiO1xuICAgIH1cblxuICAgIGlmIChtU2hpcHNCb2FyZFt4XVt5XSA9PT0gbnVsbCkge1xuICAgICAgbUhpdHNCb2FyZFt4XVt5XSA9IFwieFwiO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cblxuICAgIC8vIGVsc2Ugd2UgaGF2ZSBhIHNoaXAgYXQgW3hdW3ldIGFuZCB0aGF0IHNwb3Qgd2Fzbid0IGhpdCB5ZXRcbiAgICBtSGl0c0JvYXJkW3hdW3ldID0gXCJvXCI7XG4gICAgbVNoaXBzQm9hcmRbeF1beV0uaGl0KCk7XG5cbiAgICAvLyBpZiBzaGlwIHdhcyBzYW5rIG5lZWQgdG8gbWFyayBhbGwgc3Vycm91bmRpbmcgYXMgaGl0XG4gICAgaWYgKG1TaGlwc0JvYXJkW3hdW3ldLmlzU3VuaygpKSB7XG4gICAgICBtTWFya1N1cnJvdW5kaW5nT2ZTdW5rU2hpcChjb29yZGluYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gXCJoaXRcIjtcbiAgfTtcblxuICAvLyByZXR1cm5zIGJvb2xlYW4gd2l0aCBhbnN3ZXJcbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT5cbiAgICAvLyBFaXRoZXIgaXQncyBub24gb2NjdXBpZWQgc3F1YXJlIGVpZ2h0ZXIgdGhlIHNoaXAgaXMgc2Fua1xuICAgIG1TaGlwc0JvYXJkLmV2ZXJ5KChyb3cpID0+XG4gICAgICByb3cuZXZlcnkoKGNlbGwpID0+IGNlbGwgPT09IG51bGwgfHwgY2VsbC5pc1N1bmsoKSksXG4gICAgKTtcblxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgIG1IaXRzQm9hcmQuZm9yRWFjaCgocm93KSA9PiByb3cuZm9yRWFjaCgoXywgaW5kZXgpID0+IHsgcm93W2luZGV4XSA9IFwiXCI7IH0pKTtcbiAgICBtU2hpcHNCb2FyZC5mb3JFYWNoKChyb3cpID0+IHJvdy5mb3JFYWNoKChfLCBpbmRleCkgPT4geyByb3dbaW5kZXhdID0gbnVsbDsgfSkpO1xuICB9O1xuXG4gIGNvbnN0IG1QbGFjZUFycmF5T2ZTaGlwcyA9IChzaGlwc0xvY2F0aW9ucywgc2hpcFNpemUpID0+IHtcbiAgICBjb25zdCBpc0FycmFuZ2VtZW50TGVnYWwgPSBzaGlwc0xvY2F0aW9ucy5ldmVyeSgoc2hpcExvY2F0aW9uKSA9PiB7XG4gICAgICBsZXQgY2FuUGxhY2VTaGlwO1xuICAgICAgaWYgKHNoaXBTaXplID4gMSkge1xuICAgICAgICBjYW5QbGFjZVNoaXAgPSBwbGFjZVNoaXAoc2hpcExvY2F0aW9uWzBdLCBzaGlwU2l6ZSwgc2hpcExvY2F0aW9uWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhblBsYWNlU2hpcCA9IHBsYWNlU2hpcChzaGlwTG9jYXRpb25bMF0sIHNoaXBTaXplKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYW5QbGFjZVNoaXA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzQXJyYW5nZW1lbnRMZWdhbDtcbiAgfTtcblxuICBjb25zdCBpc1Bvc2l0aW9uaW5nTGVnYWwgPSAoXG4gICAgZm91clRpbGVMb2NhdGlvbnMsXG4gICAgdGhyZWVUaWxlTG9jYXRpb25zLFxuICAgIHR3b1RpbGVzTG9jYXRpb25zLFxuICAgIG9uZVRpbGVMb2NhdGlvbnMsXG4gICkgPT4ge1xuICAgIGlmICghbVBsYWNlQXJyYXlPZlNoaXBzKGZvdXJUaWxlTG9jYXRpb25zLCA0KSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghbVBsYWNlQXJyYXlPZlNoaXBzKHRocmVlVGlsZUxvY2F0aW9ucywgMykpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIW1QbGFjZUFycmF5T2ZTaGlwcyh0d29UaWxlc0xvY2F0aW9ucywgMikpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIW1QbGFjZUFycmF5T2ZTaGlwcyhvbmVUaWxlTG9jYXRpb25zLCAxKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJlc2V0Qm9hcmQoKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG5cbiAgY29uc3QgbVRyeVJhbmRvbVBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFtcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQgLSBpOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFwbGFjZVNoaXAoXG4gICAgICAgICAgICBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldLFxuICAgICAgICAgICAgaSArIDEsXG4gICAgICAgICAgICBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildLFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHNJblJhbmRvbVBvc2l0aW9ucyA9ICgpID0+IHtcbiAgICBsZXQgcG9zaXRpb25pbmdGb3VuZCA9IGZhbHNlO1xuICAgIHdoaWxlICghcG9zaXRpb25pbmdGb3VuZCkge1xuICAgICAgcG9zaXRpb25pbmdGb3VuZCA9IG1UcnlSYW5kb21Qb3NpdGlvbigpO1xuICAgICAgaWYgKCFwb3NpdGlvbmluZ0ZvdW5kKSB7XG4gICAgICAgIHJlc2V0Qm9hcmQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRIaXRzQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGdldEJvYXJkU2l6ZSxcbiAgICByZXNldEJvYXJkLFxuICAgIGlzUG9zaXRpb25pbmdMZWdhbCxcbiAgICBwbGFjZVNoaXBzSW5SYW5kb21Qb3NpdGlvbnMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5jb25zdCBIdW1hblBsYXllciA9ICgpID0+IHtcbiAgY29uc3QgbVBsYXllciA9IFBsYXllcihcIkh1bWFuXCIpO1xuXG4gIC8vIEVuZW15IGJvYXJkIHNob3VsZCBoYXZlIHJlY2VpdmVBdHRhY2sgYW5kIGdldEhpdHNCb2FyZFxuICAvLyByZXR1cm5zIHRoZSBzdGF0dXMgb2YgdGhlIGhpdCAoaGl0L21pc3MvRVJST1IpXG4gIG1QbGF5ZXIubWFrZU1vdmUgPSAoZW5lbXlCb2FyZCwgY29vcmRpbmF0aW9uKSA9PlxuICAgIGVuZW15Qm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZGluYXRpb24pO1xuXG4gIC8vIEVuZW15IGJvYXJkIHNob3VsZCBoYXZlIHBsYWNlU2hpcFxuICAvKiBkZWZhdWx0IGJvYXJkOlxuICAgKiAgICAgMCAxIDIgMyA0IDUgNiA3IDggOVxuICAgKiAgMCBbMywgLDIsMiwgLDEsICwyLCAsIF1cbiAgICogIDEgWzMsICwgLCAsICwgLCAsMiwgLCBdXG4gICAqICAyIFszLCAsMywzLDMsICwgLCAsICwgXVxuICAgKiAgMyBbICwgLCAsICwgLCAsNCw0LDQsNF1cbiAgICogIDQgWzEsICwgLCAsICwgLCAsICwgLCBdXG4gICAqICA1IFsgLCAsMiwyLCAsICwgLCAsICwgXVxuICAgKiAgNiBbMSwgLCAsICwgLCAsICwgLCAsIF1cbiAgICogIDcgWyAsICwgLCAsICwgLCAsICwgLCBdXG4gICAqICA4IFsgLCAsICwgLCAsICwgLCAsMSwgXVxuICAgKiAgOSBbICwgLCAsICwgLCAsICwgLCAsIF1cbiAgICovXG4gIC8vIFRPRE86IGFkZCBlcnJvcnMgaGFuZGxpbmdcbiAgbVBsYXllci5wbGFjZVNoaXBzID0gKFxuICAgIGZvdXJUaWxlTG9jYXRpb25zID0gW10sXG4gICAgdGhyZWVUaWxlTG9jYXRpb25zID0gW10sXG4gICAgdHdvVGlsZXNMb2NhdGlvbnMgPSBbXSxcbiAgICBvbmVUaWxlTG9jYXRpb25zID0gW10sXG4gICAgZGVmYXVsdEFycmFuZ2VtZW50ID0gdHJ1ZSxcbiAgKSA9PiB7XG4gICAgaWYgKGRlZmF1bHRBcnJhbmdlbWVudCkge1xuICAgICAgZm91clRpbGVMb2NhdGlvbnMucHVzaChbWzMsIDZdLCBcImhvcml6b250YWxcIl0pO1xuICAgICAgdGhyZWVUaWxlTG9jYXRpb25zLnB1c2goW1swLCAwXSwgXCJ2ZXJ0aWNhbFwiXSk7XG4gICAgICB0aHJlZVRpbGVMb2NhdGlvbnMucHVzaChbWzIsIDJdLCBcImhvcml6b250YWxcIl0pO1xuICAgICAgdHdvVGlsZXNMb2NhdGlvbnMucHVzaChbWzAsIDJdLCBcImhvcml6b250YWxcIl0pO1xuICAgICAgdHdvVGlsZXNMb2NhdGlvbnMucHVzaChbWzAsIDddLCBcInZlcnRpY2FsXCJdKTtcbiAgICAgIHR3b1RpbGVzTG9jYXRpb25zLnB1c2goW1s1LCAyXSwgXCJob3Jpem9udGFsXCJdKTtcbiAgICAgIG9uZVRpbGVMb2NhdGlvbnMucHVzaChbWzAsIDVdXSk7XG4gICAgICBvbmVUaWxlTG9jYXRpb25zLnB1c2goW1s0LCAwXV0pO1xuICAgICAgb25lVGlsZUxvY2F0aW9ucy5wdXNoKFtbNiwgMF1dKTtcbiAgICAgIG9uZVRpbGVMb2NhdGlvbnMucHVzaChbWzgsIDhdXSk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgICFtUGxheWVyXG4gICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgIC5pc1Bvc2l0aW9uaW5nTGVnYWwoXG4gICAgICAgICAgZm91clRpbGVMb2NhdGlvbnMsXG4gICAgICAgICAgdGhyZWVUaWxlTG9jYXRpb25zLFxuICAgICAgICAgIHR3b1RpbGVzTG9jYXRpb25zLFxuICAgICAgICAgIG9uZVRpbGVMb2NhdGlvbnMsXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbVBsYXllci5wbGFjZUFycmF5T2ZTaGlwcyhmb3VyVGlsZUxvY2F0aW9ucywgNCk7XG4gICAgbVBsYXllci5wbGFjZUFycmF5T2ZTaGlwcyh0aHJlZVRpbGVMb2NhdGlvbnMsIDMpO1xuICAgIG1QbGF5ZXIucGxhY2VBcnJheU9mU2hpcHModHdvVGlsZXNMb2NhdGlvbnMsIDIpO1xuICAgIG1QbGF5ZXIucGxhY2VBcnJheU9mU2hpcHMob25lVGlsZUxvY2F0aW9ucywgMSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gbVBsYXllcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEh1bWFuUGxheWVyO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKHR5cGUpID0+IHtcbiAgY29uc3QgbVR5cGUgPSB0eXBlO1xuICBjb25zdCBtR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IG1UeXBlO1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gbUdhbWVib2FyZDtcblxuICBjb25zdCBwbGFjZUFycmF5T2ZTaGlwcyA9IChzaGlwc0xvY2F0aW9ucywgc2hpcFNpemUpID0+IHtcbiAgICBzaGlwc0xvY2F0aW9ucy5mb3JFYWNoKChzaGlwTG9jYXRpb24pID0+IHtcbiAgICAgIGlmIChzaGlwU2l6ZSA+IDEpIHtcbiAgICAgICAgZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoc2hpcExvY2F0aW9uWzBdLCBzaGlwU2l6ZSwgc2hpcExvY2F0aW9uWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldEJvYXJkKCkucGxhY2VTaGlwKHNoaXBMb2NhdGlvblswXSwgc2hpcFNpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VHlwZSxcbiAgICBnZXRCb2FyZCxcbiAgICBwbGFjZUFycmF5T2ZTaGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IG1MZW5ndGggPSBsZW5ndGg7XG4gIGxldCBtTnVtYmVyT2ZIaXRzID0gMDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgbU51bWJlck9mSGl0cyArPSBtTnVtYmVyT2ZIaXRzIDwgbUxlbmd0aCA/IDEgOiAwO1xuICB9XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gbU51bWJlck9mSGl0cyA9PT0gbUxlbmd0aDtcblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBCb2R5IGZyb20gXCIuL2NvbXBvbmVudHMvYm9keVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuXG5jb25zdCBEaXNwbGF5SGFuZGxlciA9IChnYW1lQ29udHJvbGxlcikgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKEJvZHkoZ2FtZUNvbnRyb2xsZXIpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChGb290ZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5SGFuZGxlcjtcbiIsImltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9ib2R5LmNzc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3dpbm5lck1vZGFsLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3V0aWwvdXRpbHNcIjtcbmltcG9ydCB7IFBsYXllckJvYXJkLCBhcnJheU9mTlRpbGVzTG9uZ1NoaXAgfSBmcm9tIFwiLi9wbGF5ZXJCb2FyZFwiO1xuaW1wb3J0IEVuZW15Qm9hcmQgZnJvbSBcIi4vZW5lbXlCb2FyZFwiO1xuXG5jb25zdCBjcmVhdGVCb2FyZHNTZWN0aW9uID0gKGdhbWVDb250cm9sbGVyKSA9PiB7XG4gIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmRzLWNvbnRhaW5lclwiXSk7XG4gIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChQbGF5ZXJCb2FyZChnYW1lQ29udHJvbGxlcikpO1xuICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoRW5lbXlCb2FyZChnYW1lQ29udHJvbGxlcikpO1xuXG4gIHJldHVybiBib2FyZHNDb250YWluZXI7XG59O1xuXG5jb25zdCBjbGVhbkhpdHNGcm9tQm9hcmRzID0gKCkgPT4ge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLWNvbnRhaW5lclwiKTtcbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PlxuICAgIFsuLi5ib2FyZC5jaGlsZHJlbl0uZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiLCBcImhpdFwiKTtcbiAgICB9KSxcbiAgKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN0YXJ0TmV3R2FtZUJ1dHRvbiA9IChnYW1lQ29udHJvbGxlcikgPT4ge1xuICBjb25zdCBzdGFydE5ld0dhbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIm5ldy1nYW1lLWNvbnRhaW5lclwiXSk7XG4gIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcIm5ldy1nYW1lXCJdKTtcbiAgbmV3R2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4py0IFN0YXJ0IE5ldyBHYW1lIOKctFwiO1xuICBcbiAgY29uc3QgcmVzZXRHYW1lQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJyZXNldC1nYW1lXCJdKTtcbiAgcmVzZXRHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJSZXNldCDinLQgR2FtZVwiO1xuXG5cbiAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0R2FtZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBuZXdHYW1lQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGdhbWVDb250cm9sbGVyLnN0YXJ0TmV3R2FtZShcbiAgICAgIGFycmF5T2ZOVGlsZXNMb25nU2hpcCg0KSxcbiAgICAgIGFycmF5T2ZOVGlsZXNMb25nU2hpcCgzKSxcbiAgICAgIGFycmF5T2ZOVGlsZXNMb25nU2hpcCgyKSxcbiAgICAgIGFycmF5T2ZOVGlsZXNMb25nU2hpcCgxKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIH0pO1xuXG4gIHJlc2V0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0R2FtZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBuZXdHYW1lQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGdhbWVDb250cm9sbGVyLnJlc2V0R2FtZSgpO1xuICAgIGNsZWFuSGl0c0Zyb21Cb2FyZHMoKTtcbiAgfSk7XG4gIHJlc2V0R2FtZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcblxuICBzdGFydE5ld0dhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3R2FtZUJ1dHRvbik7XG4gIHN0YXJ0TmV3R2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldEdhbWVCdXR0b24pO1xuXG4gIHJldHVybiBzdGFydE5ld0dhbWVDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVXaW5uZXJNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItbW9kYWwtY29udGFpbmVyJyk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXCJ3aW5uZXItbW9kYWwtY29udGFpbmVyXCJdKTtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgW1wid2lubmVyLW1vZGFsLWNvbnRlbnRcIl0pO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIGNvbnN0IG1vZGFsVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBbXCJ3aW5uZXItbW9kYWxcIl0pO1xuICBcbiAgY29uc3QgbW9kYWxFeGl0QnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgW1wid2lubmVyLW1vZGFsLWV4aXRcIl0pO1xuICBcbiAgbW9kYWxFeGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIG1vZGFsRXhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsQ29udGFpbmVyKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcblxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsRXhpdEJ1dHRvbik7XG5cblxuICByZXR1cm4gbW9kYWxDb250YWluZXI7XG59XG5cbmNvbnN0IEJvZHkgPSAoZ2FtZUNvbnRyb2xsZXIpID0+IHtcbiAgY29uc3QgYm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW10sIFtbXCJpZFwiLCBcImJvZHlcIl1dKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkc1NlY3Rpb24oZ2FtZUNvbnRyb2xsZXIpKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVTdGFydE5ld0dhbWVCdXR0b24oZ2FtZUNvbnRyb2xsZXIpKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXaW5uZXJNb2RhbCgpKTtcbiAgcmV0dXJuIGJvZHk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3V0aWwvdXRpbHNcIjtcbmltcG9ydCBVSUdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGdldEhpdHNPblBsYXllckJvYXJkIH0gZnJvbSBcIi4vcGxheWVyQm9hcmRcIjtcblxuY29uc3QgcmVuZGVyRW5lbXlIaXRzID0gKGVuZW15SGl0c0JvYXJkKSA9PiB7XG4gIGVuZW15SGl0c0JvYXJkLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+XG4gICAgcm93LmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgIGlmIChjb2x1bW4gPT09IFwiXCIpIHJldHVybjtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmVuZW15LWJhb3JkIC5ib2FyZC1jZWxsW2RhdGEtcm93PVwiJHtyb3dJbmRleH1cIl1bZGF0YS1jb2x1bW49XCIke2NvbHVtbkluZGV4fVwiXWAsXG4gICAgICApO1xuICAgICAgaWYgKGNvbHVtbiA9PT0gXCJvXCIpIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIGlmIChjb2x1bW4gPT09IFwieFwiKSBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIH0pLFxuICApO1xufTtcblxuY29uc3QgRW5lbXlCb2FyZCA9IChnYW1lQ29udHJvbGxlcikgPT4ge1xuICBjb25zdCBlbmVteUJvYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJlbmVteS1iYW9yZFwiXSk7XG4gIGVuZW15Qm9hcmQuYXBwZW5kQ2hpbGQoVUlHYW1lYm9hcmQoKSk7XG4gIFsuLi5lbmVteUJvYXJkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuXS5mb3JFYWNoKChib2FyZENlbGwpID0+IHtcbiAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAvLyBmaXJzdCBjaGVjayBpZiB3ZSBjYW4gbWFrZSBhIG1vdmVcbiAgICAgIGlmIChcbiAgICAgICAgIWdhbWVDb250cm9sbGVyLmlzR2FtZVN0YXJ0ZWQoKSB8fFxuICAgICAgICBnYW1lQ29udHJvbGxlci5nZXRHYW1lU3RhdHVzKCkgIT09IFwidW5kZWNpZGVkXCIgfHxcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0Q3VycmVudFBsYXllcigpICE9PSBcIkh1bWFuXCIgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpIHx8XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIilcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcm93LCBjb2x1bW4gfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAvLyBtYWtlIHRoZSBtb3ZlXG4gICAgICBjb25zdCBlbmVteUhpdHNCb2FyZCA9IGdhbWVDb250cm9sbGVyLm1ha2VNb3ZlKFtcbiAgICAgICAgTnVtYmVyLnBhcnNlSW50KHJvdywgMTApLFxuICAgICAgICBOdW1iZXIucGFyc2VJbnQoY29sdW1uLCAxMCksXG4gICAgICBdKTtcbiAgICAgIC8vIHJlbmRlciB0aGUgbW92ZVxuICAgICAgcmVuZGVyRW5lbXlIaXRzKGVuZW15SGl0c0JvYXJkKTtcblxuICAgICAgLy8gY2hlY2sgaWYgcGxheWVyIHdhblxuICAgICAgaWYgKGdhbWVDb250cm9sbGVyLmdldEdhbWVTdGF0dXMoKSA9PT0gXCJIdW1hblwiKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItbW9kYWwtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBtb2RhbFBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIud2lubmVyLW1vZGFsLWNvbnRlbnQ+cFwiLFxuICAgICAgICApO1xuICAgICAgICBtb2RhbFBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiQ29uZ3JhdHVsYXRpb25zISBZb3UndmUgd29uIVwiO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIG1vZGFsLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJhaS13aW5uZXJcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGdhbWVDb250cm9sbGVyLmdldEN1cnJlbnRQbGF5ZXIoKSA9PT0gXCJBSVwiKSB7XG4gICAgICAgIGdldEhpdHNPblBsYXllckJvYXJkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBlbmVteUJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5lbXlCb2FyZDtcbiIsImltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9mb290ZXIuY3NzXCI7XG5pbXBvcnQgZ2l0SW1nIGZyb20gXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9naXRodWIucG5nXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vdXRpbC91dGlsc1wiO1xuXG4vLyBDcmVhdGUgZ2l0IGxpbmsgd2l0aCBnaXQgaWNvblxuY29uc3QgY3JlYXRlR2l0TGlua0ltZyA9ICgpID0+IHtcbiAgY29uc3QgZ2l0TGluayA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJhXCIsXG4gICAgW10sXG4gICAgW1xuICAgICAgW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Tb2tvbGFuL0JhdHRsZXNoaXBzXCJdLFxuICAgICAgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdLFxuICAgIF0sXG4gICk7XG4gIGNvbnN0IGdpdEljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBbXCJnaXQtaW1nXCJdLCBbW1wic3JjXCIsIGdpdEltZ11dKTtcbiAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJY29uKTtcbiAgcmV0dXJuIGdpdExpbms7XG59O1xuXG5jb25zdCBjcmVhdGVDcmVhdG9yTmFtZSA9IChjcmVhdG9yTmFtZSkgPT4ge1xuICBjb25zdCBjcmVhdG9yID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1wiY3JlYXRvclwiXSk7XG4gIGNyZWF0b3IudGV4dENvbnRlbnQgPSBjcmVhdG9yTmFtZTtcbiAgcmV0dXJuIGNyZWF0b3I7XG59O1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlR2l0TGlua0ltZygpKTtcbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNyZWF0b3JOYW1lKFwiU29rb2xhblwiKSk7XG4gIHJldHVybiBmb290ZXJDb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vdXRpbC91dGlsc1wiO1xuXG5jb25zdCBVSUdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJvYXJkLWNvbnRhaW5lclwiXSk7XG4gIGNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkU2l6ZTsgcm93ICs9IDEpIHtcbiAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBib2FyZFNpemU7IGNvbHVtbiArPSAxKSB7XG4gICAgICBjb25zdCBib2FyZENlbGwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJib2FyZC1jZWxsXCJdLFxuICAgICAgICBbXG4gICAgICAgICAgW1wiZGF0YS1yb3dcIiwgYCR7cm93fWBdLFxuICAgICAgICAgIFtcImRhdGEtY29sdW1uXCIsIGAke2NvbHVtbn1gXSxcbiAgICAgICAgXSxcbiAgICAgICk7XG5cbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3V0aWwvdXRpbHNcIjtcblxuY29uc3QgY3JlYXRlVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiaGVhZGVyLXRpdGxlXCJdKTtcbiAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwi4oCiQuKAomHigKJ04oCidOKAomzigKJl4oCiU+KAomjigKJp4oCicOKAonPigKJcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCkpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vdXRpbC91dGlsc1wiO1xuaW1wb3J0IFVJR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFVJU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmxldCBwbGF5ZXJCb2FyZDtcbmNvbnN0IHJvd1NpemUgPSAxMDtcbmxldCBnYW1lQ29udHJvbGxlciA9IG51bGw7XG5cbi8vIHN0b3JlIHRoZSB0aWxlcyBmb3IgdGhlIGluaXRpYWwgbG9jYXRpb25zXG4vLyAxIDQgdGlsZXMsIDIgMyB0aWxlcywgMyAyIHRpbGVzLCA0IDEgdGlsZXNcbmNvbnN0IHNoaXBzQW5kTG9jYXRpb25zID0gW107XG5cbmxldCBjdXJyZW50U2hpcERyYWdnZWQgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgYXJyYXlPZk5UaWxlc0xvbmdTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGZyb207XG4gIGxldCB0bztcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDQ6XG4gICAgICBmcm9tID0gMDtcbiAgICAgIHRvID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGZyb20gPSAxO1xuICAgICAgdG8gPSAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgZnJvbSA9IDM7XG4gICAgICB0byA9IDU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBmcm9tID0gNjtcbiAgICAgIHRvID0gOTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhcIkxFTkdUSCBJTExFR0FMXCIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IGZyb207IGkgPD0gdG87IGkgKz0gMSkge1xuICAgIGFyci5wdXNoKFtcbiAgICAgIFtcbiAgICAgICAgTnVtYmVyLnBhcnNlSW50KHNoaXBzQW5kTG9jYXRpb25zW2ldLmxvY2F0aW9uLmRhdGFzZXQucm93LCAxMCksXG4gICAgICAgIE51bWJlci5wYXJzZUludChzaGlwc0FuZExvY2F0aW9uc1tpXS5sb2NhdGlvbi5kYXRhc2V0LmNvbHVtbiwgMTApLFxuICAgICAgXSxcbiAgICAgIHNoaXBzQW5kTG9jYXRpb25zW2ldLnNoaXAuZGF0YXNldC5vcmllbnRhdGlvbixcbiAgICBdKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgY2hlY2tTaGlwc1Bvc2l0aW9uID0gKCkgPT5cbiAgZ2FtZUNvbnRyb2xsZXIuaXNQb3NpdGlvbmluZ0xlZ2FsKFxuICAgIGFycmF5T2ZOVGlsZXNMb25nU2hpcCg0KSxcbiAgICBhcnJheU9mTlRpbGVzTG9uZ1NoaXAoMyksXG4gICAgYXJyYXlPZk5UaWxlc0xvbmdTaGlwKDIpLFxuICAgIGFycmF5T2ZOVGlsZXNMb25nU2hpcCgxKSxcbiAgKTtcbmNvbnN0IGluaXRpYWxpemVTaGlwc0FuZExvY2F0aW9ucyA9ICgpID0+IHtcbiAgLyogZGVmYXVsdCBib2FyZDpcbiAgICogICAgIDAgMSAyIDMgNCA1IDYgNyA4IDlcbiAgICogIDAgWzMsICwyLDIsICwxLCAsMiwgLCBdXG4gICAqICAxIFszLCAsICwgLCAsICwgLDIsICwgXVxuICAgKiAgMiBbMywgLDMsMywzLCAsICwgLCAsIF1cbiAgICogIDMgWyAsICwgLCAsICwgLDQsNCw0LDRdXG4gICAqICA0IFsxLCAsICwgLCAsICwgLCAsICwgXVxuICAgKiAgNSBbICwgLDIsMiwgLCAsICwgLCAsIF1cbiAgICogIDYgWzEsICwgLCAsICwgLCAsICwgLCBdXG4gICAqICA3IFsgLCAsICwgLCAsICwgLCAsICwgXVxuICAgKiAgOCBbICwgLCAsICwgLCAsICwgLDEsIF1cbiAgICogIDkgWyAsICwgLCAsICwgLCAsICwgLCBdXG4gICAqL1xuICBjb25zdCBwbGF5ZXJCb2FyZEFycmF5ID0gWy4uLnBsYXllckJvYXJkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuXTtcbiAgLy8gNCB0aWxlcyBzaGlwc1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoNCwgXCJob3Jpem9udGFsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzMgKiByb3dTaXplICsgNl0sXG4gIH0pO1xuICAvLyAzIHRpbGVzIHNoaXBzXG4gIHNoaXBzQW5kTG9jYXRpb25zLnB1c2goe1xuICAgIHNoaXA6IFVJU2hpcCgzLCBcInZlcnRpY2FsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzAgKiByb3dTaXplICsgMF0sXG4gIH0pO1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoMywgXCJob3Jpem9udGFsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzIgKiByb3dTaXplICsgMl0sXG4gIH0pO1xuICAvLyAyIHRpbGVzIHNoaXBzXG4gIHNoaXBzQW5kTG9jYXRpb25zLnB1c2goe1xuICAgIHNoaXA6IFVJU2hpcCgyLCBcImhvcml6b250YWxcIiksXG4gICAgbG9jYXRpb246IHBsYXllckJvYXJkQXJyYXlbMCAqIHJvd1NpemUgKyAyXSxcbiAgfSk7XG4gIHNoaXBzQW5kTG9jYXRpb25zLnB1c2goe1xuICAgIHNoaXA6IFVJU2hpcCgyLCBcInZlcnRpY2FsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzAgKiByb3dTaXplICsgN10sXG4gIH0pO1xuICBzaGlwc0FuZExvY2F0aW9ucy5wdXNoKHtcbiAgICBzaGlwOiBVSVNoaXAoMiwgXCJob3Jpem9udGFsXCIpLFxuICAgIGxvY2F0aW9uOiBwbGF5ZXJCb2FyZEFycmF5WzUgKiByb3dTaXplICsgMl0sXG4gIH0pO1xuICAvLyAxIHRpbGVzIHNoaXBzXG4gIHNoaXBzQW5kTG9jYXRpb25zLnB1c2goe1xuICAgIHNoaXA6IFVJU2hpcCgxLCBcImhvcml6b250YWxcIiksXG4gICAgbG9jYXRpb246IHBsYXllckJvYXJkQXJyYXlbNCAqIHJvd1NpemUgKyAwXSxcbiAgfSk7XG4gIHNoaXBzQW5kTG9jYXRpb25zLnB1c2goe1xuICAgIHNoaXA6IFVJU2hpcCgxLCBcImhvcml6b250YWxcIiksXG4gICAgbG9jYXRpb246IHBsYXllckJvYXJkQXJyYXlbNiAqIHJvd1NpemUgKyAwXSxcbiAgfSk7XG4gIHNoaXBzQW5kTG9jYXRpb25zLnB1c2goe1xuICAgIHNoaXA6IFVJU2hpcCgxLCBcImhvcml6b250YWxcIiksXG4gICAgbG9jYXRpb246IHBsYXllckJvYXJkQXJyYXlbOCAqIHJvd1NpemUgKyA4XSxcbiAgfSk7XG4gIHNoaXBzQW5kTG9jYXRpb25zLnB1c2goe1xuICAgIHNoaXA6IFVJU2hpcCgxLCBcImhvcml6b250YWxcIiksXG4gICAgbG9jYXRpb246IHBsYXllckJvYXJkQXJyYXlbMCAqIHJvd1NpemUgKyA1XSxcbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJIaXRzID0gKGh1bWFuSGl0c0JvYXJkKSA9PiB7XG4gIGh1bWFuSGl0c0JvYXJkLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+XG4gICAgcm93LmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgIGlmIChjb2x1bW4gPT09IFwiXCIpIHJldHVybjtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnBsYXllci1ib2FyZCAuYm9hcmQtY2VsbFtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW5JbmRleH1cIl1gLFxuICAgICAgKTtcbiAgICAgIGlmIChjb2x1bW4gPT09IFwib1wiKSBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBpZiAoY29sdW1uID09PSBcInhcIikgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9KSxcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIaXRzT25QbGF5ZXJCb2FyZCA9ICgpID0+IHtcbiAgLy8gZmlyc3QgY2hlY2sgaWYgd2UgY2FuIG1ha2UgYSBtb3ZlXG4gIHdoaWxlIChcbiAgICBnYW1lQ29udHJvbGxlci5nZXRHYW1lU3RhdHVzKCkgIT09IFwidW5kZWNpZGVkXCIgfHxcbiAgICBnYW1lQ29udHJvbGxlci5nZXRDdXJyZW50UGxheWVyKCkgPT09IFwiQUlcIlxuICApIHtcbiAgICBjb25zdCBodW1hbkhpdHNCb2FyZCA9IGdhbWVDb250cm9sbGVyLm1ha2VNb3ZlKCk7XG4gICAgcmVuZGVySGl0cyhodW1hbkhpdHNCb2FyZCk7XG4gIH1cbiAgaWYgKGdhbWVDb250cm9sbGVyLmdldEdhbWVTdGF0dXMoKSA9PT0gXCJBSVwiKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1tb2RhbC1jb250YWluZXJcIik7XG4gICAgY29uc3QgbW9kYWxQYXJhZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1tb2RhbC1jb250ZW50PnBcIik7XG4gICAgbW9kYWxQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIlVuZm9ydHVuYXRlbHkgeW91J3ZlIGxvc3RcIjtcbiAgICBtb2RhbC5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclNoaXAgPSAoc2hpcE51bSkgPT4ge1xuICBjb25zdCB7IHNoaXAsIGxvY2F0aW9uIH0gPSBzaGlwc0FuZExvY2F0aW9uc1tzaGlwTnVtXTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoc2hpcCk7XG4gIGNvbnN0IHBsYXllckJvYXJkQXJyYXkgPSBbLi4ucGxheWVyQm9hcmQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5dO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZGF0YXNldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IE51bWJlci5wYXJzZUludChsb2NhdGlvbi5kYXRhc2V0LnJvdywgMTApO1xuICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlci5wYXJzZUludChsb2NhdGlvbi5kYXRhc2V0LmNvbHVtbiwgMTApO1xuXG4gICAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHBsYXllckJvYXJkQXJyYXlbcm93ICogcm93U2l6ZSArIGNvbHVtbiArIGldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXRpbGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllckJvYXJkQXJyYXlbKHJvdyArIGkpICogcm93U2l6ZSArIGNvbHVtbl0uY2xhc3NMaXN0LmFkZChcInNoaXAtdGlsZVwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRlUmVuZGVyU2hpcCA9IChzaGlwTnVtKSA9PiB7XG4gIGNvbnN0IHsgc2hpcCwgbG9jYXRpb24gfSA9IHNoaXBzQW5kTG9jYXRpb25zW3NoaXBOdW1dO1xuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChzaGlwKTtcbiAgY29uc3QgcGxheWVyQm9hcmRBcnJheSA9IFsuLi5wbGF5ZXJCb2FyZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbl07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5kYXRhc2V0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gTnVtYmVyLnBhcnNlSW50KGxvY2F0aW9uLmRhdGFzZXQucm93LCAxMCk7XG4gICAgY29uc3QgY29sdW1uID0gTnVtYmVyLnBhcnNlSW50KGxvY2F0aW9uLmRhdGFzZXQuY29sdW1uLCAxMCk7XG5cbiAgICBpZiAoc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgcGxheWVyQm9hcmRBcnJheVtyb3cgKiByb3dTaXplICsgY29sdW1uICsgaV0uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgXCJzaGlwLXRpbGVcIixcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllckJvYXJkQXJyYXlbKHJvdyArIGkpICogcm93U2l6ZSArIGNvbHVtbl0uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgXCJzaGlwLXRpbGVcIixcbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzZXRTaGlwc0V2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBzaGlwc0FuZExvY2F0aW9ucy5mb3JFYWNoKChzaGlwQW5kTG9jYXRpb24pID0+IHtcbiAgICBjb25zdCB7IHNoaXAgfSA9IHNoaXBBbmRMb2NhdGlvbjtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICAgIGlmIChnYW1lQ29udHJvbGxlci5pc0dhbWVTdGFydGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY3VycmVudFNoaXBEcmFnZ2VkID0gZS50YXJnZXQ7XG4gICAgICBkZVJlbmRlclNoaXAoY3VycmVudFNoaXBEcmFnZ2VkLmRhdGFzZXQuc2hpcG51bSk7XG4gICAgfSk7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3Qgc3dpdGNoRGlyZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBzaGlwQW5kTG9jYXRpb24uc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHN3aXRjaERpcmVjdGlvbigpO1xuICAgICAgaWYgKCFjaGVja1NoaXBzUG9zaXRpb24oKSkge1xuICAgICAgICBzd2l0Y2hEaXJlY3Rpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpdGNoRGlyZWN0aW9uKCk7XG4gICAgICBkZVJlbmRlclNoaXAoc2hpcC5kYXRhc2V0LnNoaXBudW0pO1xuICAgICAgc3dpdGNoRGlyZWN0aW9uKCk7XG4gICAgICByZW5kZXJTaGlwKHNoaXAuZGF0YXNldC5zaGlwbnVtKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQm9hcmQgPSAoZ2FtZUNvbnRyb2xsZXJJbnB1dCkgPT4ge1xuICBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGxheWVyLWJvYXJkXCJdKTtcbiAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoVUlHYW1lYm9hcmQoKSk7XG4gIGdhbWVDb250cm9sbGVyID0gZ2FtZUNvbnRyb2xsZXJJbnB1dDtcbiAgWy4uLnBsYXllckJvYXJkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuXS5mb3JFYWNoKChib2FyZENlbGwpID0+IHtcbiAgICBib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWN1cnJlbnRTaGlwRHJhZ2dlZCB8fFxuICAgICAgICAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hcmQtY2VsbFwiKSB8fFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLXRpbGVcIilcbiAgICAgICkge1xuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGN1cnJlbnRTaGlwRHJhZ2dlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2TG9jYXRpb24gPVxuICAgICAgICBzaGlwc0FuZExvY2F0aW9uc1tjdXJyZW50U2hpcERyYWdnZWQuZGF0YXNldC5zaGlwbnVtXS5sb2NhdGlvbjtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gY3VycmVudFNoaXBEcmFnZ2VkKSB7XG4gICAgICAgIHNoaXBzQW5kTG9jYXRpb25zW2N1cnJlbnRTaGlwRHJhZ2dlZC5kYXRhc2V0LnNoaXBudW1dLmxvY2F0aW9uID1cbiAgICAgICAgICBlLnRhcmdldDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoZWNrU2hpcHNQb3NpdGlvbigpKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWhvdmVyXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNoaXAtaG92ZXJcIiwgXCJpbGVnYWwtcG9zaXRpb25cIik7XG4gICAgICB9XG5cbiAgICAgIHNoaXBzQW5kTG9jYXRpb25zW2N1cnJlbnRTaGlwRHJhZ2dlZC5kYXRhc2V0LnNoaXBudW1dLmxvY2F0aW9uID1cbiAgICAgICAgcHJldkxvY2F0aW9uO1xuICAgIH0pO1xuXG4gICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGUpID0+IHtcbiAgICAgIGlmICghY3VycmVudFNoaXBEcmFnZ2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwLWhvdmVyXCIsIFwiaWxlZ2FsLXBvc2l0aW9uXCIpO1xuICAgIH0pO1xuXG4gICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZ2FtZUNvbnRyb2xsZXIuaXNHYW1lU3RhcnRlZCgpKSByZXR1cm47XG4gICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwLWhvdmVyXCIpO1xuICAgIH0pO1xuXG4gICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIGlmIHRoZSBkcmFnZ2FibGUgb2JqZWN0IGlzbid0IHNoaXAtY29udGFpbmVyLCBub3RoaW5nIG1vcmUgdG8gZG9cbiAgICAgIGlmICghY3VycmVudFNoaXBEcmFnZ2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGN1cnJlbnRTaGlwTnVtID0gY3VycmVudFNoaXBEcmFnZ2VkLmRhdGFzZXQuc2hpcG51bTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwLWhvdmVyXCIpO1xuXG4gICAgICAvLyBpZiB0aGUgcG9zaXRpb24gaWxlZ2FsLCBub3RoaW5nIG1vcmUgdG8gZG9cbiAgICAgIGNvbnN0IHByZXZMb2NhdGlvbiA9IHNoaXBzQW5kTG9jYXRpb25zW2N1cnJlbnRTaGlwTnVtXS5sb2NhdGlvbjtcblxuICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLWNvbnRhaW5lclwiKSkge1xuICAgICAgICBzaGlwc0FuZExvY2F0aW9uc1tjdXJyZW50U2hpcE51bV0ubG9jYXRpb24gPSBlLnRhcmdldDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGVja1NoaXBzUG9zaXRpb24oKSkge1xuICAgICAgICBzaGlwc0FuZExvY2F0aW9uc1tjdXJyZW50U2hpcE51bV0ubG9jYXRpb24gPSBwcmV2TG9jYXRpb247XG4gICAgICAgIHJlbmRlclNoaXAoY3VycmVudFNoaXBOdW0pO1xuICAgICAgICBjdXJyZW50U2hpcERyYWdnZWQgPSBudWxsO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBJZiB0aGUgcG9zaXRpb24gaXMgbGVnYWwgYW5kIHdlJ3JlIGluIGJvYXJkLWNlbGwgZWxlbWVudCBhbmQgd2UncmUgZHJhZ2dpbmcgYSBzaGlwXG4gICAgICAvLyBXZSBjYW4gYWRkIG91ciBzaGlwIHNhZmVseVxuICAgICAgZGVSZW5kZXJTaGlwKGN1cnJlbnRTaGlwTnVtKTtcbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1jb250YWluZXJcIikpIHtcbiAgICAgICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFNoaXBEcmFnZ2VkKTtcbiAgICAgICAgc2hpcHNBbmRMb2NhdGlvbnNbY3VycmVudFNoaXBOdW1dLmxvY2F0aW9uID0gZS50YXJnZXQ7XG4gICAgICB9XG4gICAgICByZW5kZXJTaGlwKGN1cnJlbnRTaGlwTnVtKTtcblxuICAgICAgLy8gbmVlZCB0byBjbGVhciBvbGQgc2hpcCBsb2NhdGlvblxuICAgICAgY3VycmVudFNoaXBEcmFnZ2VkID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50U2hpcERyYWdnZWQgJiZcbiAgICAgICAgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJvYXJkLWNlbGxcIikgJiZcbiAgICAgICAgIWUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGF5ZXItYm9hcmRcIilcbiAgICAgICkge1xuICAgICAgICByZW5kZXJTaGlwKGN1cnJlbnRTaGlwRHJhZ2dlZC5kYXRhc2V0LnNoaXBudW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBpbml0aWFsaXplU2hpcHNBbmRMb2NhdGlvbnMocGxheWVyQm9hcmQpO1xuICBzZXRTaGlwc0V2ZW50TGlzdGVuZXJzKCk7XG4gIHNoaXBzQW5kTG9jYXRpb25zLmZvckVhY2goKHNoaXBBbmRMb2NhdGlvbiwgaW5kZXgpID0+IHtcbiAgICByZW5kZXJTaGlwKGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBsYXllckJvYXJkO1xufTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi91dGlsL3V0aWxzXCI7XG5cbmxldCBzaGlwTnVtID0gMDtcblxuY29uc3QgVUlTaGlwID0gKGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbXCJzaGlwLWNvbnRhaW5lclwiXSxcbiAgICBbXG4gICAgICBbXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCJdLFxuICAgICAgW1wiZGF0YS1zaGlwTnVtXCIsIHNoaXBOdW1dLFxuICAgICAgW1wiZGF0YS1vcmllbnRhdGlvblwiLCBvcmllbnRhdGlvbl0sXG4gICAgICBbXCJkYXRhLWxlbmd0aFwiLCBsZW5ndGhdLFxuICAgIF0sXG4gICk7XG4gIHNoaXBOdW0gKz0gMTtcblxuICByZXR1cm4gc2hpcENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJU2hpcDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NlcyA9IFtdLCBhdHRyaWJ1dGVzID0gW10pIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGNsYXNzZXMuZm9yRWFjaChlbGVtZW50Q2xhc3MgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50Q2xhc3MpO1xuICB9KTtcbiAgYXR0cmlidXRlcy5mb3JFYWNoKGVsZW1lbnRBdHRyaWJ1dGUgPT4ge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGVsZW1lbnRBdHRyaWJ1dGVbMF0sIGVsZW1lbnRBdHRyaWJ1dGVbMV0pO1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvbG9naWMvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBEaXNwbGF5SGFuZGxlciBmcm9tIFwiLi9tb2R1bGVzL3VpL0Rpc3BsYXlIYW5kbGVyXCI7XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gR2FtZUNvbnRyb2xsZXIoKTtcbi8vIEdhbWVDb250cm9sbGVyXG5EaXNwbGF5SGFuZGxlcihnYW1lQ29udHJvbGxlcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9