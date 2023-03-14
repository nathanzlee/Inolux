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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/select */ \"./components/select.js\");\n/* harmony import */ var _components_travel_travelAuths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/travel/travelAuths */ \"./components/travel/travelAuths.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/pages/travel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Travel = function Travel() {\n  _s();\n\n  var user;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      travelAuths = _useState[0],\n      setTravelAuths = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var selectOptions = [{\n    id: 1,\n    option: \"All\"\n  }, {\n    id: 2,\n    option: \"Approved\"\n  }, {\n    id: 3,\n    option: \"Pending\"\n  }, {\n    id: 4,\n    option: \"Denied\"\n  }];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(selectOptions[0]),\n      filter = _useState3[0],\n      setFilter = _useState3[1];\n\n  function getTravelAuths() {\n    return _getTravelAuths.apply(this, arguments);\n  }\n\n  function _getTravelAuths() {\n    _getTravelAuths = (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var res;\n      return _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              _context.next = 3;\n              return fetch('/api/travel');\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.json();\n\n            case 6:\n              user = _context.sent;\n              if (!user.err) setTravelAuths(user.travelAuths);\n              setLoading(false);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _getTravelAuths.apply(this, arguments);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    getTravelAuths();\n  }, []);\n  console.log(travelAuths);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    \"class\": \"h-[100vh] w-[100vw]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      \"class\": \"w-full h-full bg-gray-100 p-10\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"sm:px-6 lg:px-8\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n          className: \"text-base font-semibold leading-6 text-gray-900\",\n          children: \"Travel Authorizations\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"flex flex-row justify-between items-center mt-2 sm:flex sm:items-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_select__WEBPACK_IMPORTED_MODULE_4__.default, {\n            options: selectOptions,\n            initial: filter,\n            onChange: function onChange(e) {\n              console.log(e);\n              setFilter(e);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: function onClick() {\n              next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/travelauth/new');\n            },\n            className: \"block rounded-md bg-[var(--primary-color)] py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]\",\n            children: \"New\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_travel_travelAuths__WEBPACK_IMPORTED_MODULE_5__.default, {\n          data: travelAuths.filter(function (travelAuth) {\n            if (filter.option == \"All\") {\n              return true;\n            } else if (filter.option == \"Approved\") {\n              return travelAuth.status == \"approved\";\n            } else if (filter.option == \"Pending\") {\n              return travelAuth.status == \"pending\";\n            } else {\n              return travelAuth.status == \"denied\";\n            }\n          }),\n          loading: loading\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Travel, \"0elFWT85ziv785FHwgsMnYrJedE=\");\n\n_c = Travel;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Travel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Travel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQSxpQkFGSixlQWVJLDhEQUFDLG1FQUFEO0FBQWEsY0FBSSxFQUFFUSxXQUFXLENBQUNPLE1BQVosQ0FBbUIsVUFBQVcsVUFBVSxFQUFJO0FBQ2hELGdCQUFJWCxNQUFNLENBQUNELE1BQVAsSUFBaUIsS0FBckIsRUFBNEI7QUFDeEIscUJBQU8sSUFBUDtBQUNILGFBRkQsTUFFTyxJQUFJQyxNQUFNLENBQUNELE1BQVAsSUFBaUIsVUFBckIsRUFBaUM7QUFDcEMscUJBQU9ZLFVBQVUsQ0FBQ0MsTUFBWCxJQUFxQixVQUE1QjtBQUNILGFBRk0sTUFFQSxJQUFJWixNQUFNLENBQUNELE1BQVAsSUFBaUIsU0FBckIsRUFBZ0M7QUFDbkMscUJBQU9ZLFVBQVUsQ0FBQ0MsTUFBWCxJQUFxQixTQUE1QjtBQUNILGFBRk0sTUFFQTtBQUNILHFCQUFPRCxVQUFVLENBQUNDLE1BQVgsSUFBcUIsUUFBNUI7QUFDSDtBQUNKLFdBVmtCLENBQW5CO0FBVUksaUJBQU8sRUFBRWpCO0FBVmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtQ0gsQ0E5REQ7O0dBQU1KOztLQUFBQTs7QUFrRk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhdmVsLmpzPzVlNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2VsZWN0J1xuaW1wb3J0IFRyYXZlbEF1dGhzIGZyb20gJy4uL2NvbXBvbmVudHMvdHJhdmVsL3RyYXZlbEF1dGhzJ1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IExpc3Rib3gsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7IENoZWNrSWNvbiwgQ2hldnJvblVwRG93bkljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzIwL3NvbGlkJ1xuXG5jb25zdCBUcmF2ZWwgPSAoKSA9PiB7XG4gICAgbGV0IHVzZXJcbiAgICBjb25zdCBbdHJhdmVsQXV0aHMsIHNldFRyYXZlbEF1dGhzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IFtcbiAgICAgICAge2lkOiAxLCBvcHRpb246IFwiQWxsXCJ9LFxuICAgICAgICB7aWQ6IDIsIG9wdGlvbjogXCJBcHByb3ZlZFwifSxcbiAgICAgICAge2lkOiAzLCBvcHRpb246IFwiUGVuZGluZ1wifSxcbiAgICAgICAge2lkOiA0LCBvcHRpb246IFwiRGVuaWVkXCJ9XG4gICAgXVxuXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHNlbGVjdE9wdGlvbnNbMF0pXG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRUcmF2ZWxBdXRocygpIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS90cmF2ZWwnKVxuICAgICAgICB1c2VyID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICBpZiAoIXVzZXIuZXJyKSBzZXRUcmF2ZWxBdXRocyh1c2VyLnRyYXZlbEF1dGhzKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFRyYXZlbEF1dGhzKClcbiAgICB9LCBbXSlcbiAgICBjb25zb2xlLmxvZyh0cmF2ZWxBdXRocylcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1bMTAwdmhdIHctWzEwMHZ3XVwiPlxuICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgYmctZ3JheS0xMDAgcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlRyYXZlbCBBdXRob3JpemF0aW9uczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTIgc206ZmxleCBzbTppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17c2VsZWN0T3B0aW9uc30gaW5pdGlhbD17ZmlsdGVyfSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbHRlcihlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtSb3V0ZXIucHVzaCgnL3RyYXZlbGF1dGgvbmV3Jyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHJvdW5kZWQtbWQgYmctW3ZhcigtLXByaW1hcnktY29sb3IpXSBweS0yIHB4LTMgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWJsdWUtNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLVt2YXIoLS1wcmltYXJ5LWNvbG9yKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VHJhdmVsQXV0aHMgZGF0YT17dHJhdmVsQXV0aHMuZmlsdGVyKHRyYXZlbEF1dGggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci5vcHRpb24gPT0gXCJBbGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlci5vcHRpb24gPT0gXCJBcHByb3ZlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYXZlbEF1dGguc3RhdHVzID09IFwiYXBwcm92ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIub3B0aW9uID09IFwiUGVuZGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYXZlbEF1dGguc3RhdHVzID09IFwicGVuZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmF2ZWxBdXRoLnN0YXR1cyA9PSBcImRlbmllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pfSBsb2FkaW5nPXtsb2FkaW5nfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcbiAgICBcbiAgICBpZighc2Vzc2lvbil7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL2xvZ2luJyxcbiAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IHNlc3Npb24gfVxuICAgIH1cbiAgfVxuICBcblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZyYWdtZW50IiwiTmF2IiwiU2VsZWN0IiwiVHJhdmVsQXV0aHMiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJMaXN0Ym94IiwiVHJhbnNpdGlvbiIsIkNoZWNrSWNvbiIsIkNoZXZyb25VcERvd25JY29uIiwiVHJhdmVsIiwidXNlciIsInRyYXZlbEF1dGhzIiwic2V0VHJhdmVsQXV0aHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdE9wdGlvbnMiLCJpZCIsIm9wdGlvbiIsImZpbHRlciIsInNldEZpbHRlciIsImdldFRyYXZlbEF1dGhzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImUiLCJwdXNoIiwidHJhdmVsQXV0aCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/travel.js\n");

/***/ })

});