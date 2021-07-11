self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./store/reducers.js");
/* module decorator */ module = __webpack_require__.hmd(module);


 //actions
// reducers

var reducers = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  employee: _reducers__WEBPACK_IMPORTED_MODULE_1__.employeeReducer,
  employees: _reducers__WEBPACK_IMPORTED_MODULE_1__.employeesReducer
});
var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(reducers, (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_0__.default));
store.subscribe(function () {
  return console.log({
    event: store.getState(),
    message: 'redux yeni bir değişiklik algıladı'
  });
});
/* harmony default export */ __webpack_exports__["default"] = (store);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsicmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJlbXBsb3llZSIsImVtcGxveWVlUmVkdWNlciIsImVtcGxveWVlcyIsImVtcGxveWVlc1JlZHVjZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJnZXRTdGF0ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBRUE7O0FBRUEsSUFBSUEsUUFBUSxHQUFHQyxzREFBZSxDQUFDO0FBQzdCQyxVQUFRLEVBQUVDLHNEQURtQjtBQUU3QkMsV0FBUyxFQUFFQyx1REFBZ0JBO0FBRkUsQ0FBRCxDQUE5QjtBQUtBLElBQUlDLEtBQUssR0FBR0Msa0RBQVcsQ0FBQ1AsUUFBRCxFQUFXUSxzREFBZSxDQUFDQyxnREFBRCxDQUExQixDQUF2QjtBQUVBSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0I7QUFBQSxTQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUNWQyxTQUFLLEVBQUVQLEtBQUssQ0FBQ1EsUUFBTixFQURHO0FBRVZDLFdBQU8sRUFBRTtBQUZDLEdBQVosQ0FEYztBQUFBLENBQWhCO0FBT0EsK0RBQWVULEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kYzc0NzcyYzM3YjRlNzk2MzI0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBlbXBsb3llZVJlZHVjZXIsIGVtcGxveWVlc1JlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbi8vYWN0aW9uc1xyXG5cclxuLy8gcmVkdWNlcnNcclxuXHJcbmxldCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgZW1wbG95ZWU6IGVtcGxveWVlUmVkdWNlcixcclxuICBlbXBsb3llZXM6IGVtcGxveWVlc1JlZHVjZXIsXHJcbn0pO1xyXG5cclxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5cclxuc3RvcmUuc3Vic2NyaWJlKCgpID0+XHJcbiAgY29uc29sZS5sb2coe1xyXG4gICAgZXZlbnQ6IHN0b3JlLmdldFN0YXRlKCksXHJcbiAgICBtZXNzYWdlOiAncmVkdXggeWVuaSBiaXIgZGXEn2nFn2lrbGlrIGFsZ8SxbGFkxLEnLFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=