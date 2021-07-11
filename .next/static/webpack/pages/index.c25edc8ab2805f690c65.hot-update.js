self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/shared/ProfileCard/index.jsx":
/*!*************************************************!*\
  !*** ./components/shared/ProfileCard/index.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/actions */ "./store/actions.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_shared_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/Button */ "./components/shared/Button/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./components/shared/ProfileCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Koray\\Desktop\\employee-of-the-month\\components\\shared\\ProfileCard\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var ProfileCard = function ProfileCard(props) {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var _props$info = props.info,
      id = _props$info.id,
      fullName = _props$info.fullName,
      jobTitle = _props$info.jobTitle,
      avatar = _props$info.avatar,
      like = _props$info.like;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["profile-card"]),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/profile?id=".concat(id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().avatar),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: avatar || '/images/avatar-placeholder.png',
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["avatar-image"])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/profile?id=".concat(id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().username),
          children: fullName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["job-title"]),
      children: jobTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["button-group"]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_shared_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
        handleClick: function handleClick() {
          return dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.likeEmployee)(id));
        },
        success: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon bx bx-like"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "point",
          children: like
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_s(ProfileCard, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
});

_c = ProfileCard;
/* harmony default export */ __webpack_exports__["default"] = (ProfileCard);

var _c;

$RefreshReg$(_c, "ProfileCard");

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


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/actions */ "./store/actions.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/pages/Home.module.scss */ "./assets/pages/Home.module.scss");
/* harmony import */ var assets_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_shared_ProfileCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/ProfileCard */ "./components/shared/ProfileCard/index.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Koray\\Desktop\\employee-of-the-month\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var HomePage = function HomePage() {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state;
  }),
      employees = _useSelector.employees;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!employees.length > 0) dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.fetchEmployees)());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (assets_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["home-page"]),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (assets_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["page-title"]),
      children: "Employee of the month"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (assets_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["profile-container"]),
      children: employees.length > 0 && employees.sort(function (a, b) {
        return b.like - a.like;
      }).map(function (employee, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_shared_ProfileCard__WEBPACK_IMPORTED_MODULE_4__.default, {
          info: employee,
          index: index
        }, employee.id, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(HomePage, "x8LOirjgBqzRmh0u4ZoqNa8zKSA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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


/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvUHJvZmlsZUNhcmQvaW5kZXguanN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiUHJvZmlsZUNhcmQiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbmZvIiwiaWQiLCJmdWxsTmFtZSIsImpvYlRpdGxlIiwiYXZhdGFyIiwibGlrZSIsInN0eWxlcyIsImxpa2VFbXBsb3llZSIsIkhvbWVQYWdlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImVtcGxveWVlcyIsInVzZUVmZmVjdCIsImxlbmd0aCIsImZldGNoRW1wbG95ZWVzIiwic29ydCIsImEiLCJiIiwibWFwIiwiZW1wbG95ZWUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QjtBQUQ2QixvQkFHb0JGLEtBQUssQ0FBQ0csSUFIMUI7QUFBQSxNQUdyQkMsRUFIcUIsZUFHckJBLEVBSHFCO0FBQUEsTUFHakJDLFFBSGlCLGVBR2pCQSxRQUhpQjtBQUFBLE1BR1BDLFFBSE8sZUFHUEEsUUFITztBQUFBLE1BR0dDLE1BSEgsZUFHR0EsTUFISDtBQUFBLE1BR1dDLElBSFgsZUFHV0EsSUFIWDtBQUs3QixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLHdCQUFpQkwsRUFBakIsQ0FBVjtBQUFBLDZCQUNFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFSyxtRUFBaEI7QUFBQSxpQ0FDRTtBQUNFLGVBQUcsRUFBRUYsTUFBTSxJQUFJLGdDQURqQjtBQUVFLHFCQUFTLEVBQUVFLDRFQUFN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YWdlcy9pbmRleC5jMjVlZGM4YWIyODA1ZjY5MGM2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxpa2VFbXBsb3llZSB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdjb21wb25lbnRzL3NoYXJlZC9CdXR0b24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFByb2ZpbGVDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCB7IGlkLCBmdWxsTmFtZSwgam9iVGl0bGUsIGF2YXRhciwgbGlrZSB9ID0gcHJvcHMuaW5mbztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Byb2ZpbGUtY2FyZCddfT5cclxuICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlP2lkPSR7aWR9YH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhdmF0YXInXX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2F2YXRhciB8fCAnL2ltYWdlcy9hdmF0YXItcGxhY2Vob2xkZXIucG5nJ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snYXZhdGFyLWltYWdlJ119XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlP2lkPSR7aWR9YH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXNbJ3VzZXJuYW1lJ119PntmdWxsTmFtZX08L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzWydqb2ItdGl0bGUnXX0+e2pvYlRpdGxlfTwvaDQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydidXR0b24tZ3JvdXAnXX0+XHJcbiAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17KCkgPT4gZGlzcGF0Y2gobGlrZUVtcGxveWVlKGlkKSl9IHN1Y2Nlc3M+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb24gYnggYngtbGlrZSc+PC9pPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwb2ludCc+e2xpa2V9PC9zcGFuPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlQ2FyZDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBmZXRjaEVtcGxveWVlcyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ2Fzc2V0cy9wYWdlcy9Ib21lLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFByb2ZpbGVDYXJkIGZyb20gJ2NvbXBvbmVudHMvc2hhcmVkL1Byb2ZpbGVDYXJkJztcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGVtcGxveWVlcyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWVtcGxveWVlcy5sZW5ndGggPiAwKSBkaXNwYXRjaChmZXRjaEVtcGxveWVlcygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydob21lLXBhZ2UnXX0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1sncGFnZS10aXRsZSddfT5FbXBsb3llZSBvZiB0aGUgbW9udGg8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncHJvZmlsZS1jb250YWluZXInXX0+XHJcbiAgICAgICAge2VtcGxveWVlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBlbXBsb3llZXNcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGlrZSAtIGEubGlrZSlcclxuICAgICAgICAgICAgLm1hcCgoZW1wbG95ZWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFByb2ZpbGVDYXJkIGluZm89e2VtcGxveWVlfSBrZXk9e2VtcGxveWVlLmlkfSBpbmRleD17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==