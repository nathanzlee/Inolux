"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/travelauth/new",{

/***/ "./components/breadcrumb.js":
/*!**********************************!*\
  !*** ./components/breadcrumb.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Example; }\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/20/solid */ \"./node_modules/@heroicons/react/20/solid/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/breadcrumb.js\";\n\n\nfunction Example(_ref) {\n  var _this = this;\n\n  var pages = _ref.pages;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n    className: \"flex m-5\",\n    \"aria-label\": \"Breadcrumb\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n      role: \"list\",\n      className: \"flex items-center space-x-4\",\n      children: pages.map(function (page) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon, {\n              className: \"h-5 w-5 flex-shrink-0 text-gray-400\",\n              \"aria-hidden\": \"true\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 10,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              href: page.href,\n              className: \"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700\",\n              \"aria-current\": page.current ? 'page' : undefined,\n              children: page.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 11,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 9,\n            columnNumber: 13\n          }, _this)\n        }, page.name, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n_c = Example;\n\nvar _c;\n\n$RefreshReg$(_c, \"Example\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JyZWFkY3J1bWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0UsT0FBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN6QyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLGtCQUFXLFlBQXJDO0FBQUEsMkJBQ0U7QUFBSSxVQUFJLEVBQUMsTUFBVDtBQUFnQixlQUFTLEVBQUMsNkJBQTFCO0FBQUEsZ0JBQ0dBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG9DQUNFLDhEQUFDLHVFQUFEO0FBQWtCLHVCQUFTLEVBQUMscUNBQTVCO0FBQWtFLDZCQUFZO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGtCQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFEYjtBQUVFLHVCQUFTLEVBQUMsNERBRlo7QUFHRSw4QkFBY0QsSUFBSSxDQUFDRSxPQUFMLEdBQWUsTUFBZixHQUF3QkMsU0FIeEM7QUFBQSx3QkFLR0gsSUFBSSxDQUFDSTtBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBU0osSUFBSSxDQUFDSSxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDtLQXJCdUJQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi5qcz82ZDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZXZyb25SaWdodEljb24sIEhvbWVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yMC9zb2xpZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSh7IHBhZ2VzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggbS01XCIgYXJpYS1sYWJlbD1cIkJyZWFkY3J1bWJcIj5cbiAgICAgIDxvbCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cGFnZS5uYW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gY2xhc3NOYW1lPVwiaC01IHctNSBmbGV4LXNocmluay0wIHRleHQtZ3JheS00MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3BhZ2UuaHJlZn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e3BhZ2UuY3VycmVudCA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlLm5hbWV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICA8L25hdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNoZXZyb25SaWdodEljb24iLCJIb21lSWNvbiIsIkV4YW1wbGUiLCJwYWdlcyIsIm1hcCIsInBhZ2UiLCJocmVmIiwiY3VycmVudCIsInVuZGVmaW5lZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/breadcrumb.js\n");

/***/ })

});