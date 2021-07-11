self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/reducers.js":
/*!***************************!*\
  !*** ./store/reducers.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "employeesReducer": function() { return /* binding */ employeesReducer; },
/* harmony export */   "employeeReducer": function() { return /* binding */ employeeReducer; }
/* harmony export */ });
/* harmony import */ var lib_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/logger */ "./lib/logger.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var employeesReducer = function employeesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_EMPLOYEES':
      (0,lib_logger__WEBPACK_IMPORTED_MODULE_0__.default)(action, 'Çalışan arkadaşlar getirildi');
      return state = action.payload;

    case 'LIKE_EMPLOYEE':
      (0,lib_logger__WEBPACK_IMPORTED_MODULE_0__.default)(action, 'Kullanıcı beğenildi');
      return state.map(function (e) {
        if (e.id === action.payload.id) {
          e.like++;
        }

        return e;
      });

    default:
      return state;
  }
};

var employeeReducer = function employeeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_EMPLOYEE':
      (0,lib_logger__WEBPACK_IMPORTED_MODULE_0__.default)(action, 'Kullanıcı profiline girildi');
      return state = action.payload;

    default:
      return state;
  }
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMuanMiXSwibmFtZXMiOlsiZW1wbG95ZWVzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImxvZ2dlciIsInBheWxvYWQiLCJtYXAiLCJlIiwiaWQiLCJsaWtlIiwiZW1wbG95ZWVSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUF3QjtBQUFBLE1BQXZCQyxLQUF1Qix1RUFBZixFQUFlO0FBQUEsTUFBWEMsTUFBVzs7QUFDL0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxlQUFMO0FBQ0VDLHlEQUFNLENBQUNGLE1BQUQsRUFBUyw4QkFBVCxDQUFOO0FBQ0EsYUFBUUQsS0FBSyxHQUFHQyxNQUFNLENBQUNHLE9BQXZCOztBQUNGLFNBQUssZUFBTDtBQUNFRCx5REFBTSxDQUFDRixNQUFELEVBQVMscUJBQVQsQ0FBTjtBQUNBLGFBQU9ELEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBTztBQUN0QixZQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU04sTUFBTSxDQUFDRyxPQUFQLENBQWVHLEVBQTVCLEVBQWdDO0FBQzlCRCxXQUFDLENBQUNFLElBQUY7QUFDRDs7QUFDRCxlQUFPRixDQUFQO0FBQ0QsT0FMTSxDQUFQOztBQU1GO0FBQ0UsYUFBT04sS0FBUDtBQWJKO0FBZUQsQ0FoQkQ7O0FBa0JBLElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBd0I7QUFBQSxNQUF2QlQsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLE1BQVhDLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssY0FBTDtBQUNFQyx5REFBTSxDQUFDRixNQUFELEVBQVMsNkJBQVQsQ0FBTjtBQUNBLGFBQVFELEtBQUssR0FBR0MsTUFBTSxDQUFDRyxPQUF2Qjs7QUFDRjtBQUNFLGFBQU9KLEtBQVA7QUFMSjtBQU9ELENBUkQ7O0FBVUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNzU2NzllNWViMmMzODk1MmI4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZ2dlciBmcm9tICdsaWIvbG9nZ2VyJztcclxuY29uc3QgZW1wbG95ZWVzUmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdTRVRfRU1QTE9ZRUVTJzpcclxuICAgICAgbG9nZ2VyKGFjdGlvbiwgJ8OHYWzEscWfYW4gYXJrYWRhxZ9sYXIgZ2V0aXJpbGRpJyk7XHJcbiAgICAgIHJldHVybiAoc3RhdGUgPSBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICBjYXNlICdMSUtFX0VNUExPWUVFJzpcclxuICAgICAgbG9nZ2VyKGFjdGlvbiwgJ0t1bGxhbsSxY8SxIGJlxJ9lbmlsZGknKTtcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG4gICAgICAgICAgZS5saWtlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgICB9KTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBlbXBsb3llZVJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX0VNUExPWUVFJzpcclxuICAgICAgbG9nZ2VyKGFjdGlvbiwgJ0t1bGxhbsSxY8SxIHByb2ZpbGluZSBnaXJpbGRpJyk7XHJcbiAgICAgIHJldHVybiAoc3RhdGUgPSBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZW1wbG95ZWVzUmVkdWNlciwgZW1wbG95ZWVSZWR1Y2VyIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=