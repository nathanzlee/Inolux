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

/***/ "./pages/travel.js":
/*!*************************!*\
  !*** ./pages/travel.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_travel_travelAuths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/travel/travelAuths */ \"./components/travel/travelAuths.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/pages/travel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Travel = function Travel() {\n  _s();\n\n  var user;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      travelAuths = _useState[0],\n      setTravelAuths = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    function getTravelAuths() {\n      return _getTravelAuths.apply(this, arguments);\n    }\n\n    function _getTravelAuths() {\n      _getTravelAuths = (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var res;\n        return _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setLoading(true);\n                _context.next = 3;\n                return fetch('/api/travel');\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.json();\n\n              case 6:\n                user = _context.sent;\n                console.log(user);\n                setTravelAuths(user.travelAuths);\n                setLoading(false);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _getTravelAuths.apply(this, arguments);\n    }\n\n    getTravelAuths();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    \"class\": \"wrapper\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      \"class\": \"flex flex-col items-center w-full h-full bg-gray-100\",\n      children: [ true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/travelauth/new');\n        },\n        \"class\": \"bg-white text-[var(--primary-color)] border-2 border-[var(--primary-color)] border-solid px-1 py-1 rounded-md hover:bg-[var(--primary-color)] hover:text-white my-10\",\n        children: \"New Travel Authorization\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_travel_travelAuths__WEBPACK_IMPORTED_MODULE_4__.default, {\n        data: travelAuths\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Travel, \"ZPBFrkbcXmxz8BgUtwW1LPtaM7I=\");\n\n_c = Travel;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Travel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Travel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmF2ZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNqQixNQUFJQyxJQUFKOztBQUNGLGtCQUFzQ1AsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT1EsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBOEJULCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9VLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUFWLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NXLGNBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFNBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lELGdCQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBREo7QUFBQSx1QkFFc0JFLEtBQUssQ0FBQyxhQUFELENBRjNCOztBQUFBO0FBRVVDLGdCQUFBQSxHQUZWO0FBQUE7QUFBQSx1QkFHaUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUhqQjs7QUFBQTtBQUdJUixnQkFBQUEsSUFISjtBQUlJUyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlWLElBQVo7QUFDQUUsZ0JBQUFBLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDQyxXQUFOLENBQWQ7QUFDQUcsZ0JBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7O0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7O0FBU2RDLElBQUFBLGNBQWM7QUFDZixHQVZRLEVBVVAsRUFWTyxDQUFUO0FBWUEsc0JBQ0U7QUFBSyxhQUFNLFNBQVg7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQU0sc0RBQVg7QUFBQSxpQkFDSSxLQUFJLGlCQUNGO0FBQVEsZUFBTyxFQUFFLG1CQUFNO0FBQUNSLFVBQUFBLHVEQUFBLENBQVksaUJBQVo7QUFBK0IsU0FBdkQ7QUFBeUQsaUJBQU0sc0tBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRk4sZUFLRSw4REFBQyxtRUFBRDtBQUFhLFlBQUksRUFBRUk7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0E5QkQ7O0dBQU1GOztLQUFBQTs7QUFpRE4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhdmVsLmpzPzVlNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcbmltcG9ydCBUcmF2ZWxBdXRocyBmcm9tICcuLi9jb21wb25lbnRzL3RyYXZlbC90cmF2ZWxBdXRocydcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFRyYXZlbCA9ICgpID0+IHtcbiAgICBsZXQgdXNlclxuICBjb25zdCBbdHJhdmVsQXV0aHMsIHNldFRyYXZlbEF1dGhzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFRyYXZlbEF1dGhzKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3RyYXZlbCcpXG4gICAgICAgIHVzZXIgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgIHNldFRyYXZlbEF1dGhzKHVzZXIudHJhdmVsQXV0aHMpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIGdldFRyYXZlbEF1dGhzKClcbiAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICA8TmF2IC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtZnVsbCBiZy1ncmF5LTEwMFwiPlxuICAgICAgICB7IHRydWUgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7Um91dGVyLnB1c2goJy90cmF2ZWxhdXRoL25ldycpfX0gY2xhc3M9XCJiZy13aGl0ZSB0ZXh0LVt2YXIoLS1wcmltYXJ5LWNvbG9yKV0gYm9yZGVyLTIgYm9yZGVyLVt2YXIoLS1wcmltYXJ5LWNvbG9yKV0gYm9yZGVyLXNvbGlkIHB4LTEgcHktMSByb3VuZGVkLW1kIGhvdmVyOmJnLVt2YXIoLS1wcmltYXJ5LWNvbG9yKV0gaG92ZXI6dGV4dC13aGl0ZSBteS0xMFwiPk5ldyBUcmF2ZWwgQXV0aG9yaXphdGlvbjwvYnV0dG9uPlxuICAgICAgICApIH1cbiAgICAgICAgey8qIHsgbG9hZGluZyAmJiA8aDI+TG9hZGluZyAuLi4uPC9oMj4gfSAqL31cbiAgICAgICAgPFRyYXZlbEF1dGhzIGRhdGE9e3RyYXZlbEF1dGhzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICBcbiAgaWYgKCFzZXNzaW9uKXtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHNlc3Npb24gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXYiLCJUcmF2ZWxBdXRocyIsIlJvdXRlciIsInVzZVJvdXRlciIsIlRyYXZlbCIsInVzZXIiLCJ0cmF2ZWxBdXRocyIsInNldFRyYXZlbEF1dGhzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRUcmF2ZWxBdXRocyIsImZldGNoIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/travel.js\n");

/***/ })

});