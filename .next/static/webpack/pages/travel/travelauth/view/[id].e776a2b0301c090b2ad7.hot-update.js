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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_travelAuth_travelAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/travelAuth/travelAuth */ \"./components/travelAuth/travelAuth.js\");\n/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/breadcrumb */ \"./components/breadcrumb.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/pages/travel/travelauth/view/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar View = function View() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    name: user ? user.firstName + ' ' + user.lastName : '',\n    number: user ? user.number : '',\n    department: user ? user.department : '',\n    phone: user ? user.phone : '',\n    reqDate: Date.now(),\n    purpose: '',\n    startDate: null,\n    endDate: null,\n    itinerary: [{\n      date: null,\n      location: '',\n      people: '',\n      reason: ''\n    }],\n    travelAdv: {\n      advance: true,\n      amount: 0\n    },\n    personalTravel: {\n      personal: false,\n      startDate: null,\n      endDate: null\n    },\n    international: true,\n    approveBy: [],\n    employeeSig: {\n      signature: '',\n      date: new Date()\n    },\n    managerSig: {\n      user: null,\n      signature: '',\n      date: null\n    },\n    presidentSig: {\n      user: null,\n      signature: '',\n      date: null\n    },\n    notes: '',\n    status: \"pending\"\n  }),\n      travelAuth = _useState[0],\n      setTravelAuth = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var res, user;\n    return _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('/api/travel/travelauth/' + router.query.id);\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            user = _context.sent;\n            console.log(user);\n            if (!user.err) setTravelAuth(user);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  var pages = [{\n    name: 'Travel',\n    href: '/travel'\n  }, {\n    name: 'Travel Authorizations',\n    href: '/travel/travelauth'\n  }, {\n    name: 'View',\n    href: router.asPath\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"h-[100vh] w-[100vw]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_5__.default, {\n      pages: pages\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"w-full h-full bg-gray-100 overflow-y-auto px-10 pb-[100px]\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_travelAuth_travelAuth__WEBPACK_IMPORTED_MODULE_4__.default, {\n        type: \"view\",\n        data: travelAuth\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(View, \"lYtnzlc8bCt1MyFI6RRkkVe92d4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = View;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\nvar _c;\n\n$RefreshReg$(_c, \"View\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmF2ZWwvdHJhdmVsYXV0aC92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQW9DRiwrQ0FBUSxDQUFDO0FBQ3pDTyxJQUFBQSxJQUFJLEVBQUdDLElBQUQsR0FBU0EsSUFBSSxDQUFDQyxTQUFMLEdBQWtCLEdBQWxCLEdBQXdCRCxJQUFJLENBQUNFLFFBQXRDLEdBQWlELEVBRGQ7QUFFekNDLElBQUFBLE1BQU0sRUFBR0gsSUFBRCxHQUFTQSxJQUFJLENBQUNHLE1BQWQsR0FBdUIsRUFGVTtBQUd6Q0MsSUFBQUEsVUFBVSxFQUFHSixJQUFELEdBQVNBLElBQUksQ0FBQ0ksVUFBZCxHQUEyQixFQUhFO0FBSXpDQyxJQUFBQSxLQUFLLEVBQUdMLElBQUQsR0FBU0EsSUFBSSxDQUFDSyxLQUFkLEdBQXNCLEVBSlk7QUFLekNDLElBQUFBLE9BQU8sRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEVBTGdDO0FBTXpDQyxJQUFBQSxPQUFPLEVBQUUsRUFOZ0M7QUFPekNDLElBQUFBLFNBQVMsRUFBRSxJQVA4QjtBQVF6Q0MsSUFBQUEsT0FBTyxFQUFFLElBUmdDO0FBU3pDQyxJQUFBQSxTQUFTLEVBQUUsQ0FBQztBQUFDQyxNQUFBQSxJQUFJLEVBQUUsSUFBUDtBQUFhQyxNQUFBQSxRQUFRLEVBQUUsRUFBdkI7QUFBMkJDLE1BQUFBLE1BQU0sRUFBRSxFQUFuQztBQUF1Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQS9DLEtBQUQsQ0FUOEI7QUFVekNDLElBQUFBLFNBQVMsRUFBRTtBQUFDQyxNQUFBQSxPQUFPLEVBQUUsSUFBVjtBQUFnQkMsTUFBQUEsTUFBTSxFQUFFO0FBQXhCLEtBVjhCO0FBV3pDQyxJQUFBQSxjQUFjLEVBQUU7QUFBQ0MsTUFBQUEsUUFBUSxFQUFFLEtBQVg7QUFBa0JYLE1BQUFBLFNBQVMsRUFBRSxJQUE3QjtBQUFtQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQTVDLEtBWHlCO0FBWXpDVyxJQUFBQSxhQUFhLEVBQUUsSUFaMEI7QUFhekNDLElBQUFBLFNBQVMsRUFBRSxFQWI4QjtBQWN6Q0MsSUFBQUEsV0FBVyxFQUFFO0FBQ1RDLE1BQUFBLFNBQVMsRUFBRSxFQURGO0FBRVRaLE1BQUFBLElBQUksRUFBRSxJQUFJTixJQUFKO0FBRkcsS0FkNEI7QUFrQnpDbUIsSUFBQUEsVUFBVSxFQUFFO0FBQ1IxQixNQUFBQSxJQUFJLEVBQUUsSUFERTtBQUVSeUIsTUFBQUEsU0FBUyxFQUFFLEVBRkg7QUFHUlosTUFBQUEsSUFBSSxFQUFFO0FBSEUsS0FsQjZCO0FBdUJ6Q2MsSUFBQUEsWUFBWSxFQUFFO0FBQ1YzQixNQUFBQSxJQUFJLEVBQUUsSUFESTtBQUVWeUIsTUFBQUEsU0FBUyxFQUFFLEVBRkQ7QUFHVlosTUFBQUEsSUFBSSxFQUFFO0FBSEksS0F2QjJCO0FBNEJ6Q2UsSUFBQUEsS0FBSyxFQUFFLEVBNUJrQztBQTZCekNDLElBQUFBLE1BQU0sRUFBRTtBQTdCaUMsR0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBZ0NBdEMsRUFBQUEsZ0RBQVMsbVNBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWXVDLEtBQUssQ0FBQyw0QkFBNEJsQyxNQUFNLENBQUNtQyxLQUFQLENBQWFDLEVBQTFDLENBRGpCOztBQUFBO0FBQ0FDLFlBQUFBLEdBREE7QUFBQTtBQUFBLG1CQUVhQSxHQUFHLENBQUNDLElBQUosRUFGYjs7QUFBQTtBQUVBcEMsWUFBQUEsSUFGQTtBQUdOcUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl0QyxJQUFaO0FBQ0EsZ0JBQUksQ0FBQ0EsSUFBSSxDQUFDdUMsR0FBVixFQUFlUixhQUFhLENBQUMvQixJQUFELENBQWI7O0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUtOLEVBTE0sQ0FBVDtBQU9BLE1BQU13QyxLQUFLLEdBQUcsQ0FDVjtBQUFFekMsSUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0IwQyxJQUFBQSxJQUFJLEVBQUU7QUFBeEIsR0FEVSxFQUVWO0FBQUUxQyxJQUFBQSxJQUFJLEVBQUUsdUJBQVI7QUFBaUMwQyxJQUFBQSxJQUFJLEVBQUU7QUFBdkMsR0FGVSxFQUdWO0FBQUUxQyxJQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQjBDLElBQUFBLElBQUksRUFBRTNDLE1BQU0sQ0FBQzRDO0FBQTdCLEdBSFUsQ0FBZDtBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsNEJBQ0ksOERBQUMsMkRBQUQ7QUFBWSxXQUFLLEVBQUVGO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLDREQUFmO0FBQUEsNkJBQ0ksOERBQUMsc0VBQUQ7QUFBWSxZQUFJLEVBQUMsTUFBakI7QUFBd0IsWUFBSSxFQUFFVjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0F0REQ7O0dBQU1qQztVQUNhSDs7O0tBRGJHOztBQXlFTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90cmF2ZWwvdHJhdmVsYXV0aC92aWV3L1tpZF0uanM/Y2Q1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFRyYXZlbEF1dGggZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy90cmF2ZWxBdXRoL3RyYXZlbEF1dGgnXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2JyZWFkY3J1bWInXG5cbmNvbnN0IFZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbdHJhdmVsQXV0aCwgc2V0VHJhdmVsQXV0aF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6ICh1c2VyKSA/IHVzZXIuZmlyc3ROYW1lICArICcgJyArIHVzZXIubGFzdE5hbWUgOiAnJyxcbiAgICAgICAgbnVtYmVyOiAodXNlcikgPyB1c2VyLm51bWJlciA6ICcnLFxuICAgICAgICBkZXBhcnRtZW50OiAodXNlcikgPyB1c2VyLmRlcGFydG1lbnQgOiAnJyxcbiAgICAgICAgcGhvbmU6ICh1c2VyKSA/IHVzZXIucGhvbmUgOiAnJyxcbiAgICAgICAgcmVxRGF0ZTogRGF0ZS5ub3coKSxcbiAgICAgICAgcHVycG9zZTogJycsXG4gICAgICAgIHN0YXJ0RGF0ZTogbnVsbCxcbiAgICAgICAgZW5kRGF0ZTogbnVsbCxcbiAgICAgICAgaXRpbmVyYXJ5OiBbe2RhdGU6IG51bGwsIGxvY2F0aW9uOiAnJywgcGVvcGxlOiAnJywgcmVhc29uOiAnJ31dLFxuICAgICAgICB0cmF2ZWxBZHY6IHthZHZhbmNlOiB0cnVlLCBhbW91bnQ6IDB9LFxuICAgICAgICBwZXJzb25hbFRyYXZlbDoge3BlcnNvbmFsOiBmYWxzZSwgc3RhcnREYXRlOiBudWxsLCBlbmREYXRlOiBudWxsfSxcbiAgICAgICAgaW50ZXJuYXRpb25hbDogdHJ1ZSxcbiAgICAgICAgYXBwcm92ZUJ5OiBbXSxcbiAgICAgICAgZW1wbG95ZWVTaWc6IHtcbiAgICAgICAgICAgIHNpZ25hdHVyZTogJycsIFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKVxuICAgICAgICB9LFxuICAgICAgICBtYW5hZ2VyU2lnOiB7XG4gICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgc2lnbmF0dXJlOiAnJywgXG4gICAgICAgICAgICBkYXRlOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHByZXNpZGVudFNpZzoge1xuICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgIHNpZ25hdHVyZTogJycsIFxuICAgICAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBub3RlczogJycsXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCJcbiAgICB9KVxuXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvdHJhdmVsL3RyYXZlbGF1dGgvJyArIHJvdXRlci5xdWVyeS5pZClcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgaWYgKCF1c2VyLmVycikgc2V0VHJhdmVsQXV0aCh1c2VyKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgcGFnZXMgPSBbXG4gICAgICAgIHsgbmFtZTogJ1RyYXZlbCcsIGhyZWY6ICcvdHJhdmVsJyB9LFxuICAgICAgICB7IG5hbWU6ICdUcmF2ZWwgQXV0aG9yaXphdGlvbnMnLCBocmVmOiAnL3RyYXZlbC90cmF2ZWxhdXRoJyB9LFxuICAgICAgICB7IG5hbWU6ICdWaWV3JywgaHJlZjogcm91dGVyLmFzUGF0aCB9XG4gICAgXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTAwdmhdIHctWzEwMHZ3XVwiPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIgcGFnZXM9e3BhZ2VzfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctZ3JheS0xMDAgb3ZlcmZsb3cteS1hdXRvIHB4LTEwIHBiLVsxMDBweF1cIj5cbiAgICAgICAgICAgICAgICA8VHJhdmVsQXV0aCB0eXBlPVwidmlld1wiIGRhdGE9e3RyYXZlbEF1dGh9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24pXG4gICAgaWYgKCFzZXNzaW9uKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgc2Vzc2lvbiB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiVHJhdmVsQXV0aCIsIkJyZWFkY3J1bWIiLCJWaWV3Iiwicm91dGVyIiwibmFtZSIsInVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm51bWJlciIsImRlcGFydG1lbnQiLCJwaG9uZSIsInJlcURhdGUiLCJEYXRlIiwibm93IiwicHVycG9zZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJpdGluZXJhcnkiLCJkYXRlIiwibG9jYXRpb24iLCJwZW9wbGUiLCJyZWFzb24iLCJ0cmF2ZWxBZHYiLCJhZHZhbmNlIiwiYW1vdW50IiwicGVyc29uYWxUcmF2ZWwiLCJwZXJzb25hbCIsImludGVybmF0aW9uYWwiLCJhcHByb3ZlQnkiLCJlbXBsb3llZVNpZyIsInNpZ25hdHVyZSIsIm1hbmFnZXJTaWciLCJwcmVzaWRlbnRTaWciLCJub3RlcyIsInN0YXR1cyIsInRyYXZlbEF1dGgiLCJzZXRUcmF2ZWxBdXRoIiwiZmV0Y2giLCJxdWVyeSIsImlkIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJwYWdlcyIsImhyZWYiLCJhc1BhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/travel/travelauth/view/[id].js\n");

/***/ })

});