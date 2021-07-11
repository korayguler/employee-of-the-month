self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchEmployees": function() { return /* binding */ fetchEmployees; },
/* harmony export */   "setEmployee": function() { return /* binding */ setEmployee; },
/* harmony export */   "likeEmployee": function() { return /* binding */ likeEmployee; }
/* harmony export */ });
/* harmony import */ var C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var fetchEmployees = function fetchEmployees() {
  return /*#__PURE__*/function () {
    var _ref = (0,C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var API_URL, query, response, _yield$response$json, data;

      return C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              API_URL =  false ? 0 : 'http://localhost:9002/graphql';
              query = "\n          query{\n            employees {\n              id\n              fullName\n              address\n              phone\n              email\n              avatar\n              jobTitle\n            }\n          }\n          ";
              _context.prev = 2;
              _context.next = 5;
              return fetch('/data.json');

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context.sent;
              data = _yield$response$json.data;
              localStorage.setItem('data', JSON.stringify(data));
              dispatch({
                type: 'SET_EMPLOYEES',
                payload: (0,C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(data.employees.map(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, {
                    like: 0
                  });
                }))
              });
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: 'SET_EMPLOYEES',
                payload: []
              });

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var likeEmployee = function likeEmployee(id) {
  return {
    type: 'LIKE_EMPLOYEE',
    payload: {
      id: id
    }
  };
};

var setEmployee = function setEmployee(employee) {
  return {
    type: 'SET_EMPLOYEE',
    payload: employee
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJmZXRjaEVtcGxveWVlcyIsImRpc3BhdGNoIiwiQVBJX1VSTCIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwicGF5bG9hZCIsImVtcGxveWVlcyIsIm1hcCIsImUiLCJsaWtlIiwibGlrZUVtcGxveWVlIiwiaWQiLCJzZXRFbXBsb3llZSIsImVtcGxveWVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUE7QUFBQSx5U0FBTSxpQkFBT0MsUUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCQyxxQkFEcUIsR0FFekIsU0FDSSxDQURKLEdBRUksK0JBSnFCO0FBS3JCQyxtQkFMcUI7QUFBQTtBQUFBO0FBQUEscUJBMEJGQyxLQUFLLENBQUMsWUFBRCxDQTFCSDs7QUFBQTtBQTBCbkJDLHNCQTFCbUI7QUFBQTtBQUFBLHFCQTRCRkEsUUFBUSxDQUFDQyxJQUFULEVBNUJFOztBQUFBO0FBQUE7QUE0QmpCQyxrQkE1QmlCLHdCQTRCakJBLElBNUJpQjtBQTZCekJDLDBCQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmLENBQTdCO0FBQ0FOLHNCQUFRLENBQUM7QUFDUFcsb0JBQUksRUFBRSxlQURDO0FBRVBDLHVCQUFPLEVBQUUsOElBQUlOLElBQUksQ0FBQ08sU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUNDLENBQUQ7QUFBQSx5REFBYUEsQ0FBYjtBQUFnQkMsd0JBQUksRUFBRTtBQUF0QjtBQUFBLGlCQUFuQixDQUFOO0FBRkEsZUFBRCxDQUFSO0FBOUJ5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW1DekJoQixzQkFBUSxDQUFDO0FBQ1BXLG9CQUFJLEVBQUUsZUFEQztBQUVQQyx1QkFBTyxFQUFFO0FBRkYsZUFBRCxDQUFSOztBQW5DeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCOztBQTBDQSxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFELEVBQVE7QUFDM0IsU0FBTztBQUNMUCxRQUFJLEVBQUUsZUFERDtBQUVMQyxXQUFPLEVBQUU7QUFBRU0sUUFBRSxFQUFFQTtBQUFOO0FBRkosR0FBUDtBQUlELENBTEQ7O0FBT0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2hDLFNBQU87QUFDTFQsUUFBSSxFQUFFLGNBREQ7QUFFTEMsV0FBTyxFQUFFUTtBQUZKLEdBQVA7QUFJRCxDQUxEOztBQU9BIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRkMjhlMGQ3ZWMzMTY2Njg4Yjk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmZXRjaEVtcGxveWVlcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IEFQSV9VUkwgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICA/ICcvZGF0YS5qc29uJ1xyXG4gICAgICA6ICdodHRwOi8vbG9jYWxob3N0OjkwMDIvZ3JhcGhxbCc7XHJcbiAgY29uc3QgcXVlcnkgPSBgXHJcbiAgICAgICAgICBxdWVyeXtcclxuICAgICAgICAgICAgZW1wbG95ZWVzIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGZ1bGxOYW1lXHJcbiAgICAgICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICBhdmF0YXJcclxuICAgICAgICAgICAgICBqb2JUaXRsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MDAyL2dyYXBocWwnLCB7XHJcbiAgICAvLyAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgLy8gICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSB9KSxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9kYXRhLmpzb24nKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnU0VUX0VNUExPWUVFUycsXHJcbiAgICAgIHBheWxvYWQ6IFsuLi5kYXRhLmVtcGxveWVlcy5tYXAoKGUpID0+ICh7IC4uLmUsIGxpa2U6IDAgfSkpXSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1NFVF9FTVBMT1lFRVMnLFxyXG4gICAgICBwYXlsb2FkOiBbXSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGxpa2VFbXBsb3llZSA9IChpZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnTElLRV9FTVBMT1lFRScsXHJcbiAgICBwYXlsb2FkOiB7IGlkOiBpZCB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzZXRFbXBsb3llZSA9IChlbXBsb3llZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnU0VUX0VNUExPWUVFJyxcclxuICAgIHBheWxvYWQ6IGVtcGxveWVlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBmZXRjaEVtcGxveWVlcywgc2V0RW1wbG95ZWUsIGxpa2VFbXBsb3llZSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9