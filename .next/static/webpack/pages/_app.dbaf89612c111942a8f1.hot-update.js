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
store.subscribe();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsicmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJlbXBsb3llZSIsImVtcGxveWVlUmVkdWNlciIsImVtcGxveWVlcyIsImVtcGxveWVlc1JlZHVjZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJzdWJzY3JpYmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBRUE7O0FBRUEsSUFBSUEsUUFBUSxHQUFHQyxzREFBZSxDQUFDO0FBQzdCQyxVQUFRLEVBQUVDLHNEQURtQjtBQUU3QkMsV0FBUyxFQUFFQyx1REFBZ0JBO0FBRkUsQ0FBRCxDQUE5QjtBQUtBLElBQUlDLEtBQUssR0FBR0Msa0RBQVcsQ0FBQ1AsUUFBRCxFQUFXUSxzREFBZSxDQUFDQyxnREFBRCxDQUExQixDQUF2QjtBQUVBSCxLQUFLLENBQUNJLFNBQU47QUFFQSwrREFBZUosS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRiYWY4OTYxMmMxMTE5NDJhOGYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IGVtcGxveWVlUmVkdWNlciwgZW1wbG95ZWVzUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuLy9hY3Rpb25zXHJcblxyXG4vLyByZWR1Y2Vyc1xyXG5cclxubGV0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBlbXBsb3llZTogZW1wbG95ZWVSZWR1Y2VyLFxyXG4gIGVtcGxveWVlczogZW1wbG95ZWVzUmVkdWNlcixcclxufSk7XHJcblxyXG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG5zdG9yZS5zdWJzY3JpYmUoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9