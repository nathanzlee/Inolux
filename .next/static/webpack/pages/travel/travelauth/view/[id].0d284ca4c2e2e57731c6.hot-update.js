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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_travelAuth_travelAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/travelAuth/travelAuth */ \"./components/travelAuth/travelAuth.js\");\n/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/breadcrumb */ \"./components/breadcrumb.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/pages/travel/travelauth/view/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar View = function View() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    name: '',\n    number: '',\n    department: '',\n    phone: '',\n    reqDate: Date.now(),\n    purpose: '',\n    startDate: null,\n    endDate: null,\n    itinerary: [{\n      date: null,\n      location: '',\n      people: '',\n      reason: ''\n    }],\n    travelAdv: {\n      advance: true,\n      amount: 0\n    },\n    personalTravel: {\n      personal: false,\n      startDate: null,\n      endDate: null\n    },\n    international: true,\n    approveBy: [],\n    employeeSig: null,\n    managerSig: null,\n    presidentSig: null,\n    notes: '',\n    status: \"pending\"\n  }),\n      travelAuth = _useState2[0],\n      setTravelAuth = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var res, auth;\n    return _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            setLoading(true);\n            _context.next = 3;\n            return fetch('/api/travel/travelauth/' + router.query.id);\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            auth = _context.sent;\n            if (!auth.err) setTravelAuth(_objectSpread({\n              id: router.query.id\n            }, auth));\n            setLoading(false);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  var pages = [{\n    name: 'Travel',\n    href: '/travel'\n  }, {\n    name: 'Travel Authorizations',\n    href: '/travel/travelauth'\n  }, {\n    name: 'View',\n    href: router.asPath\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    className: \"h-[100vh] w-[100vw]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_6__.default, {\n      pages: pages\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"w-full h-full bg-gray-100 overflow-y-auto px-10 pb-[100px]\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_travelAuth_travelAuth__WEBPACK_IMPORTED_MODULE_5__.default, {\n        type: \"view\",\n        viewer: router.query.user,\n        data: travelAuth\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(View, \"n/ovHfFpzxSBtN9EvmZLOShshAM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = View;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\nvar _c;\n\n$RefreshReg$(_c, \"View\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmF2ZWwvdHJhdmVsYXV0aC92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCOztBQUNBLGtCQUE4QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT08sT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBb0NSLCtDQUFRLENBQUM7QUFDekNTLElBQUFBLElBQUksRUFBRSxFQURtQztBQUV6Q0MsSUFBQUEsTUFBTSxFQUFFLEVBRmlDO0FBR3pDQyxJQUFBQSxVQUFVLEVBQUUsRUFINkI7QUFJekNDLElBQUFBLEtBQUssRUFBRSxFQUprQztBQUt6Q0MsSUFBQUEsT0FBTyxFQUFFQyxJQUFJLENBQUNDLEdBQUwsRUFMZ0M7QUFNekNDLElBQUFBLE9BQU8sRUFBRSxFQU5nQztBQU96Q0MsSUFBQUEsU0FBUyxFQUFFLElBUDhCO0FBUXpDQyxJQUFBQSxPQUFPLEVBQUUsSUFSZ0M7QUFTekNDLElBQUFBLFNBQVMsRUFBRSxDQUFDO0FBQUNDLE1BQUFBLElBQUksRUFBRSxJQUFQO0FBQWFDLE1BQUFBLFFBQVEsRUFBRSxFQUF2QjtBQUEyQkMsTUFBQUEsTUFBTSxFQUFFLEVBQW5DO0FBQXVDQyxNQUFBQSxNQUFNLEVBQUU7QUFBL0MsS0FBRCxDQVQ4QjtBQVV6Q0MsSUFBQUEsU0FBUyxFQUFFO0FBQUNDLE1BQUFBLE9BQU8sRUFBRSxJQUFWO0FBQWdCQyxNQUFBQSxNQUFNLEVBQUU7QUFBeEIsS0FWOEI7QUFXekNDLElBQUFBLGNBQWMsRUFBRTtBQUFDQyxNQUFBQSxRQUFRLEVBQUUsS0FBWDtBQUFrQlgsTUFBQUEsU0FBUyxFQUFFLElBQTdCO0FBQW1DQyxNQUFBQSxPQUFPLEVBQUU7QUFBNUMsS0FYeUI7QUFZekNXLElBQUFBLGFBQWEsRUFBRSxJQVowQjtBQWF6Q0MsSUFBQUEsU0FBUyxFQUFFLEVBYjhCO0FBY3pDQyxJQUFBQSxXQUFXLEVBQUUsSUFkNEI7QUFlekNDLElBQUFBLFVBQVUsRUFBRSxJQWY2QjtBQWdCekNDLElBQUFBLFlBQVksRUFBRSxJQWhCMkI7QUFpQnpDQyxJQUFBQSxLQUFLLEVBQUUsRUFqQmtDO0FBa0J6Q0MsSUFBQUEsTUFBTSxFQUFFO0FBbEJpQyxHQUFELENBQTVDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFxQkFwQyxFQUFBQSxnREFBUyxtU0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUk8sWUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQURRO0FBQUEsbUJBRVU4QixLQUFLLENBQUMsNEJBQTRCaEMsTUFBTSxDQUFDaUMsS0FBUCxDQUFhQyxFQUExQyxDQUZmOztBQUFBO0FBRUZDLFlBQUFBLEdBRkU7QUFBQTtBQUFBLG1CQUdXQSxHQUFHLENBQUNDLElBQUosRUFIWDs7QUFBQTtBQUdGQyxZQUFBQSxJQUhFO0FBSVIsZ0JBQUksQ0FBQ0EsSUFBSSxDQUFDQyxHQUFWLEVBQWVQLGFBQWE7QUFDMUJHLGNBQUFBLEVBQUUsRUFBRWxDLE1BQU0sQ0FBQ2lDLEtBQVAsQ0FBYUM7QUFEUyxlQUV2QkcsSUFGdUIsRUFBYjtBQUlmbkMsWUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFSUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBU04sRUFUTSxDQUFUO0FBV0EsTUFBTXFDLEtBQUssR0FBRyxDQUNWO0FBQUVwQyxJQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQnFDLElBQUFBLElBQUksRUFBRTtBQUF4QixHQURVLEVBRVY7QUFBRXJDLElBQUFBLElBQUksRUFBRSx1QkFBUjtBQUFpQ3FDLElBQUFBLElBQUksRUFBRTtBQUF2QyxHQUZVLEVBR1Y7QUFBRXJDLElBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCcUMsSUFBQUEsSUFBSSxFQUFFeEMsTUFBTSxDQUFDeUM7QUFBN0IsR0FIVSxDQUFkO0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQSw0QkFDSSw4REFBQywyREFBRDtBQUFZLFdBQUssRUFBRUY7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsNERBQWY7QUFBQSw2QkFDSSw4REFBQyxzRUFBRDtBQUFZLFlBQUksRUFBQyxNQUFqQjtBQUF3QixjQUFNLEVBQUV2QyxNQUFNLENBQUNpQyxLQUFQLENBQWFTLElBQTdDO0FBQW1ELFlBQUksRUFBRVo7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBaEREOztHQUFNL0I7VUFDYUg7OztLQURiRzs7QUFtRU4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhdmVsL3RyYXZlbGF1dGgvdmlldy9baWRdLmpzP2NkNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBUcmF2ZWxBdXRoIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdHJhdmVsQXV0aC90cmF2ZWxBdXRoJ1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9icmVhZGNydW1iJ1xuXG5jb25zdCBWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3RyYXZlbEF1dGgsIHNldFRyYXZlbEF1dGhdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgbnVtYmVyOiAnJyxcbiAgICAgICAgZGVwYXJ0bWVudDogJycsXG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgcmVxRGF0ZTogRGF0ZS5ub3coKSxcbiAgICAgICAgcHVycG9zZTogJycsXG4gICAgICAgIHN0YXJ0RGF0ZTogbnVsbCxcbiAgICAgICAgZW5kRGF0ZTogbnVsbCxcbiAgICAgICAgaXRpbmVyYXJ5OiBbe2RhdGU6IG51bGwsIGxvY2F0aW9uOiAnJywgcGVvcGxlOiAnJywgcmVhc29uOiAnJ31dLFxuICAgICAgICB0cmF2ZWxBZHY6IHthZHZhbmNlOiB0cnVlLCBhbW91bnQ6IDB9LFxuICAgICAgICBwZXJzb25hbFRyYXZlbDoge3BlcnNvbmFsOiBmYWxzZSwgc3RhcnREYXRlOiBudWxsLCBlbmREYXRlOiBudWxsfSxcbiAgICAgICAgaW50ZXJuYXRpb25hbDogdHJ1ZSxcbiAgICAgICAgYXBwcm92ZUJ5OiBbXSxcbiAgICAgICAgZW1wbG95ZWVTaWc6IG51bGwsXG4gICAgICAgIG1hbmFnZXJTaWc6IG51bGwsXG4gICAgICAgIHByZXNpZGVudFNpZzogbnVsbCxcbiAgICAgICAgbm90ZXM6ICcnLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiXG4gICAgfSlcblxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS90cmF2ZWwvdHJhdmVsYXV0aC8nICsgcm91dGVyLnF1ZXJ5LmlkKVxuICAgICAgY29uc3QgYXV0aCA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIGlmICghYXV0aC5lcnIpIHNldFRyYXZlbEF1dGgoe1xuICAgICAgICBpZDogcm91dGVyLnF1ZXJ5LmlkLFxuICAgICAgICAuLi5hdXRoXG4gICAgICB9KVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHBhZ2VzID0gW1xuICAgICAgICB7IG5hbWU6ICdUcmF2ZWwnLCBocmVmOiAnL3RyYXZlbCcgfSxcbiAgICAgICAgeyBuYW1lOiAnVHJhdmVsIEF1dGhvcml6YXRpb25zJywgaHJlZjogJy90cmF2ZWwvdHJhdmVsYXV0aCcgfSxcbiAgICAgICAgeyBuYW1lOiAnVmlldycsIGhyZWY6IHJvdXRlci5hc1BhdGggfVxuICAgIF1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzEwMHZoXSB3LVsxMDB2d11cIj5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iIHBhZ2VzPXtwYWdlc30vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJnLWdyYXktMTAwIG92ZXJmbG93LXktYXV0byBweC0xMCBwYi1bMTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgPFRyYXZlbEF1dGggdHlwZT1cInZpZXdcIiB2aWV3ZXI9e3JvdXRlci5xdWVyeS51c2VyfSBkYXRhPXt0cmF2ZWxBdXRofSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcbiAgICBjb25zb2xlLmxvZyhzZXNzaW9uKVxuICAgIGlmICghc2Vzc2lvbil7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL2xvZ2luJyxcbiAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IHNlc3Npb24gfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlldyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlRyYXZlbEF1dGgiLCJCcmVhZGNydW1iIiwiVmlldyIsInJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibmFtZSIsIm51bWJlciIsImRlcGFydG1lbnQiLCJwaG9uZSIsInJlcURhdGUiLCJEYXRlIiwibm93IiwicHVycG9zZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJpdGluZXJhcnkiLCJkYXRlIiwibG9jYXRpb24iLCJwZW9wbGUiLCJyZWFzb24iLCJ0cmF2ZWxBZHYiLCJhZHZhbmNlIiwiYW1vdW50IiwicGVyc29uYWxUcmF2ZWwiLCJwZXJzb25hbCIsImludGVybmF0aW9uYWwiLCJhcHByb3ZlQnkiLCJlbXBsb3llZVNpZyIsIm1hbmFnZXJTaWciLCJwcmVzaWRlbnRTaWciLCJub3RlcyIsInN0YXR1cyIsInRyYXZlbEF1dGgiLCJzZXRUcmF2ZWxBdXRoIiwiZmV0Y2giLCJxdWVyeSIsImlkIiwicmVzIiwianNvbiIsImF1dGgiLCJlcnIiLCJwYWdlcyIsImhyZWYiLCJhc1BhdGgiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/travel/travelauth/view/[id].js\n");

/***/ })

});