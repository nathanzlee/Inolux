"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/travel",{

/***/ "./components/travel/row.js":
/*!**********************************!*\
  !*** ./components/travel/row.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travel/row.js\",\n    _this = undefined;\n\n\n\nvar Row = function Row(_ref) {\n  var requester = _ref.requester,\n      manager = _ref.manager,\n      reqDate = _ref.reqDate,\n      approvedDate = _ref.approvedDate,\n      status = _ref.status;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    \"class\": \"grid grid-cols-5 h-[50px] border-solid border-gray-300 border-2 rounded\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"class\": \"flex flex-col justify-center items-center h-[50px] p-5\",\n      children: requester\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"class\": \"flex flex-col justify-center items-center h-[50px] p-5\",\n      children: manager\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"class\": \"flex flex-col justify-center items-center h-[50px] p-5\",\n      children: reqDate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"class\": \"flex flex-col justify-center items-center h-[50px] p-5\",\n      children: approvedDate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"class\": \"flex flex-col justify-center items-center h-[50px] p-5\",\n      children: status\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Row;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);\n\nvar _c;\n\n$RefreshReg$(_c, \"Row\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbC9yb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBMkQ7QUFBQSxNQUF4REMsU0FBd0QsUUFBeERBLFNBQXdEO0FBQUEsTUFBN0NDLE9BQTZDLFFBQTdDQSxPQUE2QztBQUFBLE1BQXBDQyxPQUFvQyxRQUFwQ0EsT0FBb0M7QUFBQSxNQUEzQkMsWUFBMkIsUUFBM0JBLFlBQTJCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ25FLHNCQUNJO0FBQUssYUFBTSx5RUFBWDtBQUFBLDRCQUNJO0FBQUssZUFBTSx3REFBWDtBQUFBLGdCQUFxRUo7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFNLHdEQUFYO0FBQUEsZ0JBQXFFQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSTtBQUFLLGVBQU0sd0RBQVg7QUFBQSxnQkFBcUVDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUssZUFBTSx3REFBWDtBQUFBLGdCQUFxRUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBS0k7QUFBSyxlQUFNLHdEQUFYO0FBQUEsZ0JBQXFFQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQVZEOztLQUFNTDtBQVlOLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdHJhdmVsL3Jvdy5qcz8zOWE1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdyA9ICh7IHJlcXVlc3RlciwgbWFuYWdlciwgcmVxRGF0ZSwgYXBwcm92ZWREYXRlLCBzdGF0dXMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy01IGgtWzUwcHhdIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS0zMDAgYm9yZGVyLTIgcm91bmRlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtWzUwcHhdIHAtNVwiPntyZXF1ZXN0ZXJ9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bNTBweF0gcC01XCI+e21hbmFnZXJ9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bNTBweF0gcC01XCI+e3JlcURhdGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bNTBweF0gcC01XCI+e2FwcHJvdmVkRGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLVs1MHB4XSBwLTVcIj57c3RhdHVzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdyJdLCJuYW1lcyI6WyJSb3ciLCJyZXF1ZXN0ZXIiLCJtYW5hZ2VyIiwicmVxRGF0ZSIsImFwcHJvdmVkRGF0ZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travel/row.js\n");

/***/ })

});