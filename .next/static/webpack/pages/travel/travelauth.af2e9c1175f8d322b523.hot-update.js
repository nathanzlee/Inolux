"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/travel/travelauth",{

/***/ "./pages/travel/travelauth/index.js":
/*!******************************************!*\
  !*** ./pages/travel/travelauth/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/select */ \"./components/select.js\");\n/* harmony import */ var _components_travel_travelAuths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/travel/travelAuths */ \"./components/travel/travelAuths.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/20/solid */ \"./node_modules/@heroicons/react/20/solid/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/pages/travel/travelauth/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Travel = function Travel() {\n  _s();\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession)(),\n      _useSession2 = (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 2),\n      session = _useSession2[0],\n      status = _useSession2[1];\n\n  if (!session) return null;\n  var user;\n\n  if (status) {\n    console.log(\"loading\");\n  } else {\n    user = session.user;\n    console.log(user);\n  }\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      travelAuths = _useState[0],\n      setTravelAuths = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var selectOptions = [{\n    id: 1,\n    option: \"Any status\"\n  }, {\n    id: 2,\n    option: \"Approved\"\n  }, {\n    id: 3,\n    option: \"Pending\"\n  }, {\n    id: 4,\n    option: \"Denied\"\n  }];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(selectOptions[0]),\n      filter = _useState3[0],\n      setFilter = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var res;\n    return _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            setLoading(true);\n            _context.next = 3;\n            return fetch('/api/travel');\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            user = _context.sent;\n            if (!user.err) setTravelAuths(user.data);\n            setLoading(false);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(router.query.success),\n      successAlert = _useState4[0],\n      setSuccessAlert = _useState4[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    \"class\": \"h-[100vh] w-[100vw]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      \"class\": \"w-full h-full bg-gray-100 p-10\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        className: \"sm:px-6 lg:px-8\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h1\", {\n          className: \"text-base font-semibold leading-6 text-gray-900\",\n          children: \"Travel Authorizations\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          className: \"flex flex-row justify-between items-center mt-10 sm:flex sm:items-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_select__WEBPACK_IMPORTED_MODULE_6__.default, {\n            options: selectOptions,\n            initial: filter,\n            onChange: function onChange(e) {\n              console.log(e);\n              setFilter(e);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 25\n          }, _this), user && user.level !== 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: function onClick() {\n              next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/travel/travelauth/new');\n            },\n            className: \"block rounded-md bg-[var(--primary-color)] py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]\",\n            children: \"New\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_travel_travelAuths__WEBPACK_IMPORTED_MODULE_7__.default, {\n          data: travelAuths.filter(function (travelAuth) {\n            if (filter.option == \"Any status\") {\n              return true;\n            } else if (filter.option == \"Approved\") {\n              return travelAuth.status == \"approved\";\n            } else if (filter.option == \"Pending\") {\n              return travelAuth.status == \"pending\";\n            } else {\n              return travelAuth.status == \"denied\";\n            }\n          }),\n          loading: loading\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this), successAlert && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        className: \"rounded-md bg-green-50 p-4 absolute bottom-10\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          className: \"flex\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            className: \"flex-shrink-0\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__.CheckCircleIcon, {\n              className: \"h-5 w-5 text-green-400\",\n              \"aria-hidden\": \"true\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 33\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            className: \"ml-3\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"p\", {\n              className: \"text-sm font-medium text-green-800\",\n              children: [\"Successfully \", router.query.action == 'new' ? 'created' : 'approved', \" travel authorization!\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 33\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            className: \"ml-auto pl-3\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n              className: \"-mx-1.5 -my-1.5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50\",\n                onClick: function onClick() {\n                  setSuccessAlert(false);\n                },\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"span\", {\n                  className: \"sr-only\",\n                  children: \"Dismiss\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 94,\n                  columnNumber: 41\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__.XMarkIcon, {\n                  className: \"h-5 w-5\",\n                  \"aria-hidden\": \"true\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 95,\n                  columnNumber: 41\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 33\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 29\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Travel, \"mhT9CWv1cmwkHXJtPFBbtP/RGWw=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession, next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];\n});\n\n_c = Travel;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Travel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Travel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBEQStCWEs7OztLQWhDYkc7O0FBc0hOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RyYXZlbC90cmF2ZWxhdXRoL2luZGV4LmpzP2I2MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0J1xuaW1wb3J0IFRyYXZlbEF1dGhzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdHJhdmVsL3RyYXZlbEF1dGhzJ1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENoZWNrQ2lyY2xlSWNvbiwgWE1hcmtJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yMC9zb2xpZCdcblxuY29uc3QgVHJhdmVsID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzZXNzaW9uLCBzdGF0dXNdID0gdXNlU2Vzc2lvbigpXG5cbiAgICBpZiAoIXNlc3Npb24pIHJldHVybiBudWxsIFxuXG4gICAgbGV0IHVzZXIgXG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmdcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICB1c2VyID0gc2Vzc2lvbi51c2VyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgfVxuICAgIGNvbnN0IFt0cmF2ZWxBdXRocywgc2V0VHJhdmVsQXV0aHNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gW1xuICAgICAgICB7aWQ6IDEsIG9wdGlvbjogXCJBbnkgc3RhdHVzXCJ9LFxuICAgICAgICB7aWQ6IDIsIG9wdGlvbjogXCJBcHByb3ZlZFwifSxcbiAgICAgICAge2lkOiAzLCBvcHRpb246IFwiUGVuZGluZ1wifSxcbiAgICAgICAge2lkOiA0LCBvcHRpb246IFwiRGVuaWVkXCJ9XG4gICAgXVxuXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHNlbGVjdE9wdGlvbnNbMF0pXG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3RyYXZlbCcpXG4gICAgICAgIHVzZXIgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIGlmICghdXNlci5lcnIpIHNldFRyYXZlbEF1dGhzKHVzZXIuZGF0YSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW3N1Y2Nlc3NBbGVydCwgc2V0U3VjY2Vzc0FsZXJ0XSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS5zdWNjZXNzKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLVsxMDB2aF0gdy1bMTAwdnddXCI+XG4gICAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtZnVsbCBiZy1ncmF5LTEwMCBwLTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCI+VHJhdmVsIEF1dGhvcml6YXRpb25zPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtMTAgc206ZmxleCBzbTppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17c2VsZWN0T3B0aW9uc30gaW5pdGlhbD17ZmlsdGVyfSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbHRlcihlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5sZXZlbCAhPT0gMyAmJiAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1JvdXRlci5wdXNoKCcvdHJhdmVsL3RyYXZlbGF1dGgvbmV3Jyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHJvdW5kZWQtbWQgYmctW3ZhcigtLXByaW1hcnktY29sb3IpXSBweS0yIHB4LTMgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWJsdWUtNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLVt2YXIoLS1wcmltYXJ5LWNvbG9yKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUcmF2ZWxBdXRocyBkYXRhPXt0cmF2ZWxBdXRocy5maWx0ZXIodHJhdmVsQXV0aCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLm9wdGlvbiA9PSBcIkFueSBzdGF0dXNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlci5vcHRpb24gPT0gXCJBcHByb3ZlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYXZlbEF1dGguc3RhdHVzID09IFwiYXBwcm92ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIub3B0aW9uID09IFwiUGVuZGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYXZlbEF1dGguc3RhdHVzID09IFwicGVuZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmF2ZWxBdXRoLnN0YXR1cyA9PSBcImRlbmllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pfSBsb2FkaW5nPXtsb2FkaW5nfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3N1Y2Nlc3NBbGVydCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ncmVlbi01MCBwLTQgYWJzb2x1dGUgYm90dG9tLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JlZW4tNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyZWVuLTgwMFwiPlN1Y2Nlc3NmdWxseSB7KHJvdXRlci5xdWVyeS5hY3Rpb24gPT0gJ25ldycpID8gJ2NyZWF0ZWQnIDogJ2FwcHJvdmVkJ30gdHJhdmVsIGF1dGhvcml6YXRpb24hPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBwbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW14LTEuNSAtbXktMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggcm91bmRlZC1tZCBiZy1ncmVlbi01MCBwLTEuNSB0ZXh0LWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTYwMCBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyZWVuLTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U3VjY2Vzc0FsZXJ0KGZhbHNlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkRpc21pc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFhNYXJrSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcbiAgICBcbiAgICBpZighc2Vzc2lvbil7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL2xvZ2luJyxcbiAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IHNlc3Npb24gfVxuICAgIH1cbiAgfVxuICBcblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZyYWdtZW50IiwidXNlU2Vzc2lvbiIsIk5hdiIsIlNlbGVjdCIsIlRyYXZlbEF1dGhzIiwiUm91dGVyIiwidXNlUm91dGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwiWE1hcmtJY29uIiwiVHJhdmVsIiwic2Vzc2lvbiIsInN0YXR1cyIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidHJhdmVsQXV0aHMiLCJzZXRUcmF2ZWxBdXRocyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0T3B0aW9ucyIsImlkIiwib3B0aW9uIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZXJyIiwiZGF0YSIsInJvdXRlciIsInF1ZXJ5Iiwic3VjY2VzcyIsInN1Y2Nlc3NBbGVydCIsInNldFN1Y2Nlc3NBbGVydCIsImUiLCJsZXZlbCIsInB1c2giLCJ0cmF2ZWxBdXRoIiwiYWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/travel/travelauth/index.js\n");

/***/ })

});