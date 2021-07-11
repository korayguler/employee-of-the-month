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
      var data, response;
      return C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = [];
              _context.prev = 1;

              if (true) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return fetch('http://localhost:9002/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query
                })
              });

            case 5:
              response = _context.sent;

            case 6:
              // const response = await fetch(`http://localhost:3000/data.json`);
              // const data = await response.json();
              console.log(data);
              dispatch({
                type: 'SET_EMPLOYEES',
                payload: (0,C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(data.employees.map(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, {
                    like: 0
                  });
                }))
              });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: 'SET_EMPLOYEES',
                payload: []
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJmZXRjaEVtcGxveWVlcyIsImRpc3BhdGNoIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImVtcGxveWVlcyIsIm1hcCIsImUiLCJsaWtlIiwibGlrZUVtcGxveWVlIiwiaWQiLCJzZXRFbXBsb3llZSIsImVtcGxveWVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUE7QUFBQSx5U0FBTSxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJDLGtCQUR1QixHQUNoQixFQURnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBSUFDLEtBQUssQ0FBQywrQkFBRCxFQUFrQztBQUM1REMsc0JBQU0sRUFBRSxNQURvRDtBQUU1REMsdUJBQU8sRUFBRTtBQUFFLGtDQUFnQjtBQUFsQixpQkFGbUQ7QUFHNURDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVDLHVCQUFLLEVBQUxBO0FBQUYsaUJBQWY7QUFIc0QsZUFBbEMsQ0FKTDs7QUFBQTtBQUlqQkMsc0JBSmlCOztBQUFBO0FBV3pCO0FBQ0E7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVixJQUFaO0FBQ0FELHNCQUFRLENBQUM7QUFDUFksb0JBQUksRUFBRSxlQURDO0FBRVBDLHVCQUFPLEVBQUUsOElBQUlaLElBQUksQ0FBQ2EsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUNDLENBQUQ7QUFBQSx5REFBYUEsQ0FBYjtBQUFnQkMsd0JBQUksRUFBRTtBQUF0QjtBQUFBLGlCQUFuQixDQUFOO0FBRkEsZUFBRCxDQUFSO0FBZHlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJ6QmpCLHNCQUFRLENBQUM7QUFDUFksb0JBQUksRUFBRSxlQURDO0FBRVBDLHVCQUFPLEVBQUU7QUFGRixlQUFELENBQVI7O0FBbkJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7O0FBMEJBLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQsRUFBUTtBQUMzQixTQUFPO0FBQ0xQLFFBQUksRUFBRSxlQUREO0FBRUxDLFdBQU8sRUFBRTtBQUFFTSxRQUFFLEVBQUVBO0FBQU47QUFGSixHQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWM7QUFDaEMsU0FBTztBQUNMVCxRQUFJLEVBQUUsY0FERDtBQUVMQyxXQUFPLEVBQUVRO0FBRkosR0FBUDtBQUlELENBTEQ7O0FBT0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjZhZjMzMTA1NWJmOGFmM2E1NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoRW1wbG95ZWVzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSBbXTtcclxuICB0cnkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MDAyL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSB9KSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2RhdGEuanNvbmApO1xyXG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnU0VUX0VNUExPWUVFUycsXHJcbiAgICAgIHBheWxvYWQ6IFsuLi5kYXRhLmVtcGxveWVlcy5tYXAoKGUpID0+ICh7IC4uLmUsIGxpa2U6IDAgfSkpXSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1NFVF9FTVBMT1lFRVMnLFxyXG4gICAgICBwYXlsb2FkOiBbXSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGxpa2VFbXBsb3llZSA9IChpZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnTElLRV9FTVBMT1lFRScsXHJcbiAgICBwYXlsb2FkOiB7IGlkOiBpZCB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzZXRFbXBsb3llZSA9IChlbXBsb3llZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnU0VUX0VNUExPWUVFJyxcclxuICAgIHBheWxvYWQ6IGVtcGxveWVlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBmZXRjaEVtcGxveWVlcywgc2V0RW1wbG95ZWUsIGxpa2VFbXBsb3llZSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9