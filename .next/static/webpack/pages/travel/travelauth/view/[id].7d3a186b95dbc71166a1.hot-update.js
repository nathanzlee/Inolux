"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/travel/travelauth/view/[id]",{

/***/ "./pages/travel/travelauth/view/[id].js":
/*!**********************************************!*\
  !*** ./pages/travel/travelauth/view/[id].js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/breadcrumb */ \"./components/breadcrumb.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/pages/travel/travelauth/view/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar View = function View() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      travelAuth = _useState[0],\n      setTravelAuth = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var res;\n    return _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('/api/travel/travelauth/' + router.query.id);\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            user = _context.sent;\n            if (!user.err) setTravelAuth(user);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  var pages = [{\n    name: 'Travel',\n    href: '/travel'\n  }, {\n    name: 'Travel Authorizations',\n    href: '/travel/travelauth'\n  }, {\n    name: 'View',\n    href: router.asPath\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"h-[100vh] w-[100vw]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_4__.default, {\n      pages: pages\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"w-full h-full bg-gray-100 overflow-y-auto px-10 pb-[100px]\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(View, \"6UEiI89wKOejff1K6/00pQ2neJg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = View;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\nvar _c;\n\n$RefreshReg$(_c, \"View\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmF2ZWwvdHJhdmVsYXV0aC92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQW9DRiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUM7QUFBQSxNQUFPTSxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUVBTixFQUFBQSxnREFBUyxtU0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNZTyxLQUFLLENBQUMsNEJBQTRCSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsRUFBMUMsQ0FEakI7O0FBQUE7QUFDQUMsWUFBQUEsR0FEQTtBQUFBO0FBQUEsbUJBRU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUZQOztBQUFBO0FBRU5DLFlBQUFBLElBRk07QUFHTixnQkFBSSxDQUFDQSxJQUFJLENBQUNDLEdBQVYsRUFBZVAsYUFBYSxDQUFDTSxJQUFELENBQWI7O0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUlOLEVBSk0sQ0FBVDtBQU1BLE1BQU1FLEtBQUssR0FBRyxDQUNWO0FBQUVDLElBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxJQUFBQSxJQUFJLEVBQUU7QUFBeEIsR0FEVSxFQUVWO0FBQUVELElBQUFBLElBQUksRUFBRSx1QkFBUjtBQUFpQ0MsSUFBQUEsSUFBSSxFQUFFO0FBQXZDLEdBRlUsRUFHVjtBQUFFRCxJQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsSUFBQUEsSUFBSSxFQUFFWixNQUFNLENBQUNhO0FBQTdCLEdBSFUsQ0FBZDtBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsNEJBQ0ksOERBQUMsMkRBQUQ7QUFBWSxXQUFLLEVBQUVIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0F2QkQ7O0dBQU1YO1VBQ2FGOzs7S0FEYkU7O0FBMENOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RyYXZlbC90cmF2ZWxhdXRoL3ZpZXcvW2lkXS5qcz9jZDUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2JyZWFkY3J1bWInXG5cbmNvbnN0IFZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbdHJhdmVsQXV0aCwgc2V0VHJhdmVsQXV0aF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvdHJhdmVsL3RyYXZlbGF1dGgvJyArIHJvdXRlci5xdWVyeS5pZClcbiAgICAgICAgdXNlciA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgaWYgKCF1c2VyLmVycikgc2V0VHJhdmVsQXV0aCh1c2VyKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgcGFnZXMgPSBbXG4gICAgICAgIHsgbmFtZTogJ1RyYXZlbCcsIGhyZWY6ICcvdHJhdmVsJyB9LFxuICAgICAgICB7IG5hbWU6ICdUcmF2ZWwgQXV0aG9yaXphdGlvbnMnLCBocmVmOiAnL3RyYXZlbC90cmF2ZWxhdXRoJyB9LFxuICAgICAgICB7IG5hbWU6ICdWaWV3JywgaHJlZjogcm91dGVyLmFzUGF0aCB9XG4gICAgXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTAwdmhdIHctWzEwMHZ3XVwiPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIgcGFnZXM9e3BhZ2VzfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctZ3JheS0xMDAgb3ZlcmZsb3cteS1hdXRvIHB4LTEwIHBiLVsxMDBweF1cIj5cbiAgICAgICAgICAgICAgICB7LyogPFRyYXZlbEF1dGggdHlwZT1cInZpZXdcIiByZXF1ZXN0ZXI9eyh1c2VyKSA/IHVzZXIgOiBudWxsfSBkYXRhPXt0cmF2ZWxBdXRoRGF0YX0gLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24pXG4gICAgaWYgKCFzZXNzaW9uKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgc2Vzc2lvbiB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQnJlYWRjcnVtYiIsIlZpZXciLCJyb3V0ZXIiLCJ0cmF2ZWxBdXRoIiwic2V0VHJhdmVsQXV0aCIsImZldGNoIiwicXVlcnkiLCJpZCIsInJlcyIsImpzb24iLCJ1c2VyIiwiZXJyIiwicGFnZXMiLCJuYW1lIiwiaHJlZiIsImFzUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/travel/travelauth/view/[id].js\n");

/***/ })

});