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
      var data, _yield$response$json, response, _response;

      return C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = [];
              _context.prev = 1;

              if (false) {}

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
              _context.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context.sent;
              data = _yield$response$json.data;
              data = _yield$response$json;
              _context.next = 19;
              break;

            case 13:
              _context.next = 15;
              return fetch("http://localhost:3000/data.json");

            case 15:
              _response = _context.sent;
              _context.next = 18;
              return _response.json();

            case 18:
              data = _context.sent;

            case 19:
              console.log(data);
              dispatch({
                type: 'SET_EMPLOYEES',
                payload: (0,C_Users_Koray_Desktop_employee_of_the_month_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(data.employees.map(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, {
                    like: 0
                  });
                }))
              });
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: 'SET_EMPLOYEES',
                payload: []
              });

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 23]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJmZXRjaEVtcGxveWVlcyIsImRpc3BhdGNoIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiLCJlbXBsb3llZXMiLCJtYXAiLCJlIiwibGlrZSIsImxpa2VFbXBsb3llZSIsImlkIiwic2V0RW1wbG95ZWUiLCJlbXBsb3llZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBO0FBQUEseVNBQU0saUJBQU9DLFFBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkMsa0JBRHVCLEdBQ2hCLEVBRGdCO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxxQkFJQUMsS0FBSyxDQUFDLCtCQUFELEVBQWtDO0FBQzVEQyxzQkFBTSxFQUFFLE1BRG9EO0FBRTVEQyx1QkFBTyxFQUFFO0FBQUUsa0NBQWdCO0FBQWxCLGlCQUZtRDtBQUc1REMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUMsdUJBQUssRUFBTEE7QUFBRixpQkFBZjtBQUhzRCxlQUFsQyxDQUpMOztBQUFBO0FBSWpCQyxzQkFKaUI7QUFBQTtBQUFBLHFCQVVDQSxRQUFRLENBQUNDLElBQVQsRUFWRDs7QUFBQTtBQUFBO0FBVWRULGtCQVZjLHdCQVVkQSxJQVZjO0FBVXZCQSxrQkFWdUI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFZQUMsS0FBSyxtQ0FaTDs7QUFBQTtBQVlqQk8sdUJBWmlCO0FBQUE7QUFBQSxxQkFhVkEsU0FBUSxDQUFDQyxJQUFULEVBYlU7O0FBQUE7QUFhdkJULGtCQWJ1Qjs7QUFBQTtBQWdCekJVLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVgsSUFBWjtBQUNBRCxzQkFBUSxDQUFDO0FBQ1BhLG9CQUFJLEVBQUUsZUFEQztBQUVQQyx1QkFBTyxFQUFFLDhJQUFJYixJQUFJLENBQUNjLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxDQUFEO0FBQUEseURBQWFBLENBQWI7QUFBZ0JDLHdCQUFJLEVBQUU7QUFBdEI7QUFBQSxpQkFBbkIsQ0FBTjtBQUZBLGVBQUQsQ0FBUjtBQWpCeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFzQnpCbEIsc0JBQVEsQ0FBQztBQUNQYSxvQkFBSSxFQUFFLGVBREM7QUFFUEMsdUJBQU8sRUFBRTtBQUZGLGVBQUQsQ0FBUjs7QUF0QnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2Qjs7QUE2QkEsSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRCxFQUFRO0FBQzNCLFNBQU87QUFDTFAsUUFBSSxFQUFFLGVBREQ7QUFFTEMsV0FBTyxFQUFFO0FBQUVNLFFBQUUsRUFBRUE7QUFBTjtBQUZKLEdBQVA7QUFJRCxDQUxEOztBQU9BLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBYztBQUNoQyxTQUFPO0FBQ0xULFFBQUksRUFBRSxjQUREO0FBRUxDLFdBQU8sRUFBRVE7QUFGSixHQUFQO0FBSUQsQ0FMRDs7QUFPQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MThiNWU0MGFiOTE2YWUzNDQ1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmV0Y2hFbXBsb3llZXMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgZGF0YSA9IFtdO1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjkwMDIvZ3JhcGhxbCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGEgPSB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXRhLmpzb25gKTtcclxuICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1NFVF9FTVBMT1lFRVMnLFxyXG4gICAgICBwYXlsb2FkOiBbLi4uZGF0YS5lbXBsb3llZXMubWFwKChlKSA9PiAoeyAuLi5lLCBsaWtlOiAwIH0pKV0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdTRVRfRU1QTE9ZRUVTJyxcclxuICAgICAgcGF5bG9hZDogW10sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBsaWtlRW1wbG95ZWUgPSAoaWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ0xJS0VfRU1QTE9ZRUUnLFxyXG4gICAgcGF5bG9hZDogeyBpZDogaWQgfSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3Qgc2V0RW1wbG95ZWUgPSAoZW1wbG95ZWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTVBMT1lFRScsXHJcbiAgICBwYXlsb2FkOiBlbXBsb3llZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZmV0Y2hFbXBsb3llZXMsIHNldEVtcGxveWVlLCBsaWtlRW1wbG95ZWUgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==