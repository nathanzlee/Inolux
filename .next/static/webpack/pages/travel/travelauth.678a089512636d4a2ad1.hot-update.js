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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/select */ \"./components/select.js\");\n/* harmony import */ var _components_travel_travelAuths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/travel/travelAuths */ \"./components/travel/travelAuths.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/20/solid */ \"./node_modules/@heroicons/react/20/solid/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/pages/travel/travelauth/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Travel = function Travel() {\n  _s();\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession)(),\n      _useSession2 = (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 2),\n      session = _useSession2[0],\n      status = _useSession2[1];\n\n  if (!session) return null;\n  var user;\n\n  if (status) {\n    console.log(\"loading\");\n  } else {\n    user = session.user;\n    console.log(user);\n  }\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      travelAuths = _useState[0],\n      setTravelAuths = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var selectOptions = [{\n    id: 1,\n    option: \"Any status\"\n  }, {\n    id: 2,\n    option: \"Approved\"\n  }, {\n    id: 3,\n    option: \"Pending\"\n  }, {\n    id: 4,\n    option: \"Denied\"\n  }];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(selectOptions[0]),\n      filter = _useState3[0],\n      setFilter = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var res;\n    return _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            setLoading(true);\n            _context.next = 3;\n            return fetch('/api/travel');\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            user = _context.sent;\n            if (!user.err) setTravelAuths(user.data);\n            setLoading(false);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(router.query.success),\n      successAlert = _useState4[0],\n      setSuccessAlert = _useState4[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    \"class\": \"h-[100vh] w-[100vw]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      \"class\": \"w-full h-full bg-gray-100 p-10\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        className: \"sm:px-6 lg:px-8\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h1\", {\n          className: \"text-base font-semibold leading-6 text-gray-900\",\n          children: \"Travel Authorizations\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          className: \"flex flex-row justify-between items-center mt-10 sm:flex sm:items-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_select__WEBPACK_IMPORTED_MODULE_6__.default, {\n            options: selectOptions,\n            initial: filter,\n            onChange: function onChange(e) {\n              console.log(e);\n              setFilter(e);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 25\n          }, _this), user && user.level !== 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: function onClick() {\n              next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/travel/travelauth/new');\n            },\n            className: \"block rounded-md bg-[var(--primary-color)] py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]\",\n            children: \"New\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_travel_travelAuths__WEBPACK_IMPORTED_MODULE_7__.default, {\n          data: travelAuths.filter(function (travelAuth) {\n            if (filter.option == \"Any status\") {\n              return true;\n            } else if (filter.option == \"Approved\") {\n              return travelAuth.status == \"approved\";\n            } else if (filter.option == \"Pending\") {\n              return travelAuth.status == \"pending\";\n            } else {\n              return travelAuth.status == \"denied\";\n            }\n          }),\n          loading: loading\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this), successAlert && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        className: \"rounded-md bg-green-50 p-4 absolute bottom-10\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          className: \"flex\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            className: \"flex-shrink-0\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__.CheckCircleIcon, {\n              className: \"h-5 w-5 text-green-400\",\n              \"aria-hidden\": \"true\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 33\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            className: \"ml-3\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"p\", {\n              className: \"text-sm font-medium text-green-800\",\n              children: \"Successfully uploaded\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 33\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            className: \"ml-auto pl-3\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n              className: \"-mx-1.5 -my-1.5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50\",\n                onClick: function onClick() {\n                  setSuccessAlert(false);\n                },\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"span\", {\n                  className: \"sr-only\",\n                  children: \"Dismiss\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 94,\n                  columnNumber: 45\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__.XMarkIcon, {\n                  className: \"h-5 w-5\",\n                  \"aria-hidden\": \"true\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 95,\n                  columnNumber: 45\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 41\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 33\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 29\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 25\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Travel, \"mhT9CWv1cmwkHXJtPFBbtP/RGWw=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession, next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];\n});\n\n_c = Travel;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Travel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Travel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy90cmF2ZWwvdHJhdmVsYXV0aC9pbmRleC5qcz9iNjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3NlbGVjdCdcbmltcG9ydCBUcmF2ZWxBdXRocyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RyYXZlbC90cmF2ZWxBdXRocydcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBDaGVja0NpcmNsZUljb24sIFhNYXJrSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjAvc29saWQnXG5cbmNvbnN0IFRyYXZlbCA9ICgpID0+IHtcbiAgICBjb25zdCBbc2Vzc2lvbiwgc3RhdHVzXSA9IHVzZVNlc3Npb24oKVxuXG4gICAgaWYgKCFzZXNzaW9uKSByZXR1cm4gbnVsbCBcblxuICAgIGxldCB1c2VyIFxuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXNlciA9IHNlc3Npb24udXNlclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgIH1cbiAgICBjb25zdCBbdHJhdmVsQXV0aHMsIHNldFRyYXZlbEF1dGhzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IFtcbiAgICAgICAge2lkOiAxLCBvcHRpb246IFwiQW55IHN0YXR1c1wifSxcbiAgICAgICAge2lkOiAyLCBvcHRpb246IFwiQXBwcm92ZWRcIn0sXG4gICAgICAgIHtpZDogMywgb3B0aW9uOiBcIlBlbmRpbmdcIn0sXG4gICAgICAgIHtpZDogNCwgb3B0aW9uOiBcIkRlbmllZFwifVxuICAgIF1cblxuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShzZWxlY3RPcHRpb25zWzBdKVxuXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS90cmF2ZWwnKVxuICAgICAgICB1c2VyID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICBpZiAoIXVzZXIuZXJyKSBzZXRUcmF2ZWxBdXRocyh1c2VyLmRhdGEpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFtzdWNjZXNzQWxlcnQsIHNldFN1Y2Nlc3NBbGVydF0gPSB1c2VTdGF0ZShyb3V0ZXIucXVlcnkuc3VjY2VzcylcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1bMTAwdmhdIHctWzEwMHZ3XVwiPlxuICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgYmctZ3JheS0xMDAgcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlRyYXZlbCBBdXRob3JpemF0aW9uczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTEwIHNtOmZsZXggc206aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e3NlbGVjdE9wdGlvbnN9IGluaXRpYWw9e2ZpbHRlcn0gb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXIoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIubGV2ZWwgIT09IDMgJiYgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtSb3V0ZXIucHVzaCgnL3RyYXZlbC90cmF2ZWxhdXRoL25ldycpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayByb3VuZGVkLW1kIGJnLVt2YXIoLS1wcmltYXJ5LWNvbG9yKV0gcHktMiBweC0zIHRleHQtY2VudGVyIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1ibHVlLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1bdmFyKC0tcHJpbWFyeS1jb2xvcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VHJhdmVsQXV0aHMgZGF0YT17dHJhdmVsQXV0aHMuZmlsdGVyKHRyYXZlbEF1dGggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci5vcHRpb24gPT0gXCJBbnkgc3RhdHVzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIub3B0aW9uID09IFwiQXBwcm92ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmF2ZWxBdXRoLnN0YXR1cyA9PSBcImFwcHJvdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLm9wdGlvbiA9PSBcIlBlbmRpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmF2ZWxBdXRoLnN0YXR1cyA9PSBcInBlbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhdmVsQXV0aC5zdGF0dXMgPT0gXCJkZW5pZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KX0gbG9hZGluZz17bG9hZGluZ30vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7c3VjY2Vzc0FsZXJ0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ncmVlbi01MCBwLTQgYWJzb2x1dGUgYm90dG9tLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JlZW4tNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyZWVuLTgwMFwiPlN1Y2Nlc3NmdWxseSB1cGxvYWRlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBwbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teC0xLjUgLW15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHJvdW5kZWQtbWQgYmctZ3JlZW4tNTAgcC0xLjUgdGV4dC1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi02MDAgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmVlbi01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTdWNjZXNzQWxlcnQoZmFsc2UpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5EaXNtaXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WE1hcmtJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICBcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICAgIFxuICAgIGlmKCFzZXNzaW9uKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgc2Vzc2lvbiB9XG4gICAgfVxuICB9XG4gIFxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRnJhZ21lbnQiLCJ1c2VTZXNzaW9uIiwiTmF2IiwiU2VsZWN0IiwiVHJhdmVsQXV0aHMiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJDaGVja0NpcmNsZUljb24iLCJYTWFya0ljb24iLCJUcmF2ZWwiLCJzZXNzaW9uIiwic3RhdHVzIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0cmF2ZWxBdXRocyIsInNldFRyYXZlbEF1dGhzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWxlY3RPcHRpb25zIiwiaWQiLCJvcHRpb24iLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJmZXRjaCIsInJlcyIsImpzb24iLCJlcnIiLCJkYXRhIiwicm91dGVyIiwicXVlcnkiLCJzdWNjZXNzIiwic3VjY2Vzc0FsZXJ0Iiwic2V0U3VjY2Vzc0FsZXJ0IiwiZSIsImxldmVsIiwicHVzaCIsInRyYXZlbEF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/travel/travelauth/index.js\n");

/***/ })

});