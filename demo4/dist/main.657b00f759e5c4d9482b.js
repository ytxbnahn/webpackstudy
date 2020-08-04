(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");



function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = 'hello webpack';

  btn.innerHTML = "点击这里，然后查看 console！";
  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
function printMe() {
    console.log('I get called from print.js!');
  }

/***/ })

},[["./src/main.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ1U7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixpREFBTzs7QUFFdkI7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEciLCJmaWxlIjoibWFpbi42NTdiMDBmNzU5ZTVjNGQ5NDgyYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50LmpzXCI7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZWxlbWVudC5pbm5lckhUTUwgPSAnaGVsbG8gd2VicGFjayc7XG5cbiAgYnRuLmlubmVySFRNTCA9IFwi54K55Ye76L+Z6YeM77yM54S25ZCO5p+l55yLIGNvbnNvbGXvvIFcIjtcbiAgYnRuLm9uY2xpY2sgPSBwcmludE1lO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICAgIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwcmludC5qcyEnKTtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=