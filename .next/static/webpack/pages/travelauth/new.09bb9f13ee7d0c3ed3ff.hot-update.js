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

/***/ "./components/travelAuth/sections/tripPurpose.js":
/*!*******************************************************!*\
  !*** ./components/travelAuth/sections/tripPurpose.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/sections/tripPurpose.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar TripPurpose = function TripPurpose(_ref) {\n  _s();\n\n  var data = _ref.data;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data),\n      formData = _useState[0],\n      setFormData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      selectedOption = _useState2[0],\n      setSelectedOption = _useState2[1];\n\n  function handleOnChange(e) {\n    setSelectedOption(e.target.value);\n  }\n\n  var options = [{\n    label: \"Customer Visit\",\n    value: \"Customer Visit\"\n  }, {\n    label: \"Supplier Visit\",\n    value: \"Supplier Visit\"\n  }, {\n    label: \"Show\",\n    value: \"Show\"\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n        className: \"text-base font-semibold leading-6 text-gray-900\",\n        children: \"Purpose of Trip\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"space-y-6 divide-y divide-gray-200 sm:space-y-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"pt-6 sm:pt-5\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          role: \"group\",\n          \"aria-labelledby\": \"label-notifications\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"text-sm font-semibold leading-6 text-gray-900\",\n                id: \"label-notifications\",\n                children: \"Purpose of Trip\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"sm:col-span-2\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"max-w-lg\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FormOption, {\n                  options: options,\n                  selected: selectedOption,\n                  onChange: function onChange(e) {\n                    handleOnChange(e);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 31,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TripPurpose, \"8am/TWyHCy0YTx7xQ6UXtXywVhs=\");\n\n_c = TripPurpose;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TripPurpose);\n\nvar _c;\n\n$RefreshReg$(_c, \"TripPurpose\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvc2VjdGlvbnMvdHJpcFB1cnBvc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUM5QixrQkFBZ0NGLCtDQUFRLENBQUNFLElBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0Q0osK0NBQVEsQ0FBQyxJQUFELENBQXBEO0FBQUEsTUFBT0ssY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBRUEsV0FBU0MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdkJGLElBQUFBLGlCQUFpQixDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFqQjtBQUNIOztBQUNELE1BQU1DLE9BQU8sR0FBRyxDQUNaO0FBQUNDLElBQUFBLEtBQUssRUFBRSxnQkFBUjtBQUEwQkYsSUFBQUEsS0FBSyxFQUFFO0FBQWpDLEdBRFksRUFFWjtBQUFDRSxJQUFBQSxLQUFLLEVBQUUsZ0JBQVI7QUFBMEJGLElBQUFBLEtBQUssRUFBRTtBQUFqQyxHQUZZLEVBR1o7QUFBQ0UsSUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JGLElBQUFBLEtBQUssRUFBRTtBQUF2QixHQUhZLENBQWhCO0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsK0RBQWY7QUFBQSw0QkFDSTtBQUFBLDZCQUNJO0FBQUksaUJBQVMsRUFBQyxpREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUssZUFBUyxFQUFDLGlEQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFDSTtBQUFLLGNBQUksRUFBQyxPQUFWO0FBQWtCLDZCQUFnQixxQkFBbEM7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsbURBQWY7QUFBQSxvQ0FDSTtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQywrQ0FBZjtBQUErRCxrQkFBRSxFQUFDLHFCQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFNSTtBQUFLLHVCQUFTLEVBQUMsZUFBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxVQUFmO0FBQUEsdUNBQ0ksOERBQUMsVUFBRDtBQUFZLHlCQUFPLEVBQUVDLE9BQXJCO0FBQThCLDBCQUFRLEVBQUVOLGNBQXhDO0FBQXdELDBCQUFRLEVBQUUsa0JBQUNHLENBQUQsRUFBTztBQUFDRCxvQkFBQUEsY0FBYyxDQUFDQyxDQUFELENBQWQ7QUFBa0I7QUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBckNEOztHQUFNUDs7S0FBQUE7QUF1Q04sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWxBdXRoL3NlY3Rpb25zL3RyaXBQdXJwb3NlLmpzPzA0MWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVHJpcFB1cnBvc2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGRhdGEpXG4gICAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DaGFuZ2UoZSkge1xuICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihlLnRhcmdldC52YWx1ZSlcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAge2xhYmVsOiBcIkN1c3RvbWVyIFZpc2l0XCIsIHZhbHVlOiBcIkN1c3RvbWVyIFZpc2l0XCJ9LFxuICAgICAgICB7bGFiZWw6IFwiU3VwcGxpZXIgVmlzaXRcIiwgdmFsdWU6IFwiU3VwcGxpZXIgVmlzaXRcIn0sXG4gICAgICAgIHtsYWJlbDogXCJTaG93XCIsIHZhbHVlOiBcIlNob3dcIn1cbiAgICBdXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIHB0LTggc206c3BhY2UteS01IHNtOnB0LTEwXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlB1cnBvc2Ugb2YgVHJpcDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBzbTpzcGFjZS15LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgc206cHQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWxsZWRieT1cImxhYmVsLW5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Z3JpZCBzbTpncmlkLWNvbHMtMyBzbTppdGVtcy1iYXNlbGluZSBzbTpnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCIgaWQ9XCJsYWJlbC1ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1cnBvc2Ugb2YgVHJpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1PcHRpb24gb3B0aW9ucz17b3B0aW9uc30gc2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9ufSBvbkNoYW5nZT17KGUpID0+IHtoYW5kbGVPbkNoYW5nZShlKX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlwUHVycG9zZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRyaXBQdXJwb3NlIiwiZGF0YSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb25zIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/travelAuth/sections/tripPurpose.js\n");

/***/ })

});