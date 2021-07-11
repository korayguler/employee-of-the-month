(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/index.jsx":
/*!*************************************!*\
  !*** ./components/Layout/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Layout/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Koray\\Desktop\\employee-of-the-month\\components\\Layout\\index.jsx";


function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().layout),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./lib/logger.js":
/*!***********************!*\
  !*** ./lib/logger.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const logger = (event, message) => {
  console.info({
    event: event,
    message
  });
};

/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store */ "./store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Layout */ "./components/Layout/index.jsx");
/* harmony import */ var assets_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/global.scss */ "./assets/global.scss");
/* harmony import */ var assets_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_global_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Koray\\Desktop\\employee-of-the-month\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: store__WEBPACK_IMPORTED_MODULE_1__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

const makeStore = () => store__WEBPACK_IMPORTED_MODULE_1__.default;

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(App));

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./store/reducers.js");


 //actions
// reducers

let reducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  employee: _reducers__WEBPACK_IMPORTED_MODULE_2__.employeeReducer,
  employees: _reducers__WEBPACK_IMPORTED_MODULE_2__.employeesReducer
});
let store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducers, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/reducers.js":
/*!***************************!*\
  !*** ./store/reducers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "employeesReducer": function() { return /* binding */ employeesReducer; },
/* harmony export */   "employeeReducer": function() { return /* binding */ employeeReducer; }
/* harmony export */ });
/* harmony import */ var lib_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/logger */ "./lib/logger.js");


const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      (0,lib_logger__WEBPACK_IMPORTED_MODULE_0__.default)(action, 'Çalışan arkadaşlar getirildi');
      return state = action.payload;

    case 'LIKE_EMPLOYEE':
      (0,lib_logger__WEBPACK_IMPORTED_MODULE_0__.default)(action, 'Kullanıcı beğenildi');
      return state.map(e => {
        if (e.id === action.payload.id) {
          e.like++;
        }

        return e;
      });

    default:
      return state;
  }
};

const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEE':
      (0,lib_logger__WEBPACK_IMPORTED_MODULE_0__.default)(action, 'Kullanıcı profiline girildi');
      return state = action.payload;

    default:
      return state;
  }
};



/***/ }),

/***/ "./components/Layout/styles.module.scss":
/*!**********************************************!*\
  !*** ./components/Layout/styles.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"layout": "styles_layout__3k7X9"
};


/***/ }),

/***/ "./assets/global.scss":
/*!****************************!*\
  !*** ./assets/global.scss ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXBsb3llZS1vZi10aGUtbW9udGgvLi9jb21wb25lbnRzL0xheW91dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZW1wbG95ZWUtb2YtdGhlLW1vbnRoLy4vbGliL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9lbXBsb3llZS1vZi10aGUtbW9udGgvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9lbXBsb3llZS1vZi10aGUtbW9udGgvLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9lbXBsb3llZS1vZi10aGUtbW9udGgvLi9zdG9yZS9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lbXBsb3llZS1vZi10aGUtbW9udGgvLi9jb21wb25lbnRzL0xheW91dC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZW1wbG95ZWUtb2YtdGhlLW1vbnRoL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vZW1wbG95ZWUtb2YtdGhlLW1vbnRoL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9lbXBsb3llZS1vZi10aGUtbW9udGgvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9lbXBsb3llZS1vZi10aGUtbW9udGgvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL2VtcGxveWVlLW9mLXRoZS1tb250aC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJsb2dnZXIiLCJldmVudCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiaW5mbyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwibWFrZVN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsImVtcGxveWVlIiwiZW1wbG95ZWVSZWR1Y2VyIiwiZW1wbG95ZWVzIiwiZW1wbG95ZWVzUmVkdWNlciIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibWFwIiwiZSIsImlkIiwibGlrZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCO0FBQUVDO0FBQUYsQ0FBaEIsRUFBOEI7QUFDNUIsc0JBQU87QUFBSyxhQUFTLEVBQUVDLG1FQUFoQjtBQUFBLGNBQWdDRDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCwrREFBZUQsTUFBZixFOzs7Ozs7Ozs7Ozs7QUNOQSxNQUFNRyxNQUFNLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEtBQW9CO0FBQ2pDQyxTQUFPLENBQUNDLElBQVIsQ0FBYTtBQUFFSCxTQUFLLEVBQUVBLEtBQVQ7QUFBZ0JDO0FBQWhCLEdBQWI7QUFDRCxDQUZEOztBQUdBLCtEQUFlRixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNLLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNyQyxzQkFDRSw4REFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUMsMENBQWpCO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRUQsTUFBTUUsU0FBUyxHQUFHLE1BQU1ELDBDQUF4Qjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdDLGlFQUFhLENBQUNGLFNBQUQsQ0FBN0I7QUFFQSwrREFBZUMsT0FBTyxDQUFDRSxTQUFSLENBQWtCUCxHQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7Q0FHQTtBQUVBOztBQUVBLElBQUlRLFFBQVEsR0FBR0Msc0RBQWUsQ0FBQztBQUM3QkMsVUFBUSxFQUFFQyxzREFEbUI7QUFFN0JDLFdBQVMsRUFBRUMsdURBQWdCQTtBQUZFLENBQUQsQ0FBOUI7QUFLQSxJQUFJVixLQUFLLEdBQUdXLGtEQUFXLENBQUNOLFFBQUQsRUFBV08sc0RBQWUsQ0FBQ0Msb0RBQUQsQ0FBMUIsQ0FBdkI7QUFDQSwrREFBZWIsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUNBLE1BQU1VLGdCQUFnQixHQUFHLENBQUNJLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7QUFDL0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxlQUFMO0FBQ0V4Qix5REFBTSxDQUFDdUIsTUFBRCxFQUFTLDhCQUFULENBQU47QUFDQSxhQUFRRCxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0UsT0FBdkI7O0FBQ0YsU0FBSyxlQUFMO0FBQ0V6Qix5REFBTSxDQUFDdUIsTUFBRCxFQUFTLHFCQUFULENBQU47QUFDQSxhQUFPRCxLQUFLLENBQUNJLEdBQU4sQ0FBV0MsQ0FBRCxJQUFPO0FBQ3RCLFlBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTTCxNQUFNLENBQUNFLE9BQVAsQ0FBZUcsRUFBNUIsRUFBZ0M7QUFDOUJELFdBQUMsQ0FBQ0UsSUFBRjtBQUNEOztBQUNELGVBQU9GLENBQVA7QUFDRCxPQUxNLENBQVA7O0FBTUY7QUFDRSxhQUFPTCxLQUFQO0FBYko7QUFlRCxDQWhCRDs7QUFrQkEsTUFBTU4sZUFBZSxHQUFHLENBQUNNLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxjQUFMO0FBQ0V4Qix5REFBTSxDQUFDdUIsTUFBRCxFQUFTLDZCQUFULENBQU47QUFDQSxhQUFRRCxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0UsT0FBdkI7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBTEo7QUFPRCxDQVJEOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT57Y2hpbGRyZW59PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImNvbnN0IGxvZ2dlciA9IChldmVudCwgbWVzc2FnZSkgPT4ge1xyXG4gIGNvbnNvbGUuaW5mbyh7IGV2ZW50OiBldmVudCwgbWVzc2FnZSB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xyXG4iLCJpbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgJ2Fzc2V0cy9nbG9iYWwuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHN0b3JlO1xyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBlbXBsb3llZVJlZHVjZXIsIGVtcGxveWVlc1JlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbi8vYWN0aW9uc1xyXG5cclxuLy8gcmVkdWNlcnNcclxuXHJcbmxldCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgZW1wbG95ZWU6IGVtcGxveWVlUmVkdWNlcixcclxuICBlbXBsb3llZXM6IGVtcGxveWVlc1JlZHVjZXIsXHJcbn0pO1xyXG5cclxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiaW1wb3J0IGxvZ2dlciBmcm9tICdsaWIvbG9nZ2VyJztcclxuY29uc3QgZW1wbG95ZWVzUmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdTRVRfRU1QTE9ZRUVTJzpcclxuICAgICAgbG9nZ2VyKGFjdGlvbiwgJ8OHYWzEscWfYW4gYXJrYWRhxZ9sYXIgZ2V0aXJpbGRpJyk7XHJcbiAgICAgIHJldHVybiAoc3RhdGUgPSBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICBjYXNlICdMSUtFX0VNUExPWUVFJzpcclxuICAgICAgbG9nZ2VyKGFjdGlvbiwgJ0t1bGxhbsSxY8SxIGJlxJ9lbmlsZGknKTtcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG4gICAgICAgICAgZS5saWtlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgICB9KTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBlbXBsb3llZVJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX0VNUExPWUVFJzpcclxuICAgICAgbG9nZ2VyKGFjdGlvbiwgJ0t1bGxhbsSxY8SxIHByb2ZpbGluZSBnaXJpbGRpJyk7XHJcbiAgICAgIHJldHVybiAoc3RhdGUgPSBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZW1wbG95ZWVzUmVkdWNlciwgZW1wbG95ZWVSZWR1Y2VyIH07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dFwiOiBcInN0eWxlc19sYXlvdXRfXzNrN1g5XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==