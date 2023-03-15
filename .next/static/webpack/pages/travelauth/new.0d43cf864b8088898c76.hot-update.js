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

/***/ "./components/travelAuth/tripInfo.js":
/*!*******************************************!*\
  !*** ./components/travelAuth/tripInfo.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _travelAuth_formQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../travelAuth/formQuestion */ \"./components/travelAuth/formQuestion.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/tripInfo.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TripInfo = function TripInfo(_ref) {\n  _s();\n\n  var data = _ref.data;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data),\n      formData = _useState[0],\n      setFormData = _useState[1];\n\n  var questions = [{\n    question: \"International Travel\",\n    options: [{\n      label: \"Yes\",\n      value: \"yes\"\n    }, {\n      label: \"No\",\n      value: \"no\"\n    }]\n  }, {\n    question: \"Purpose of Trip\",\n    options: [{\n      label: \"Customer Visit\",\n      value: \"Customer Visit\"\n    }, {\n      label: \"Supplier Visit\",\n      value: \"Supplier Visit\"\n    }, {\n      label: \"Show\",\n      value: \"Show\"\n    }]\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n        className: \"text-base font-semibold leading-6 text-gray-900\",\n        children: \"Trip Information\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"space-y-6 divide-y divide-gray-200 sm:space-y-5\",\n      children: questions.map(function (question, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_travelAuth_formQuestion__WEBPACK_IMPORTED_MODULE_1__.default, {\n          question: question\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TripInfo, \"5Xe+7XVdvjRG1GlUIKpskI5oi0Y=\");\n\n_c = TripInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TripInfo);\n\nvar _c;\n\n$RefreshReg$(_c, \"TripInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvdHJpcEluZm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUMzQixrQkFBZ0NILCtDQUFRLENBQUNHLElBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxDQUNkO0FBQ0lDLElBQUFBLFFBQVEsRUFBRSxzQkFEZDtBQUVJQyxJQUFBQSxPQUFPLEVBQUUsQ0FDTDtBQUFDQyxNQUFBQSxLQUFLLEVBQUUsS0FBUjtBQUFlQyxNQUFBQSxLQUFLLEVBQUU7QUFBdEIsS0FESyxFQUVMO0FBQUNELE1BQUFBLEtBQUssRUFBRSxJQUFSO0FBQWNDLE1BQUFBLEtBQUssRUFBRTtBQUFyQixLQUZLO0FBRmIsR0FEYyxFQVFkO0FBQ0lILElBQUFBLFFBQVEsRUFBRSxpQkFEZDtBQUVJQyxJQUFBQSxPQUFPLEVBQUUsQ0FDTDtBQUFDQyxNQUFBQSxLQUFLLEVBQUUsZ0JBQVI7QUFBMEJDLE1BQUFBLEtBQUssRUFBRTtBQUFqQyxLQURLLEVBRUw7QUFBQ0QsTUFBQUEsS0FBSyxFQUFFLGdCQUFSO0FBQTBCQyxNQUFBQSxLQUFLLEVBQUU7QUFBakMsS0FGSyxFQUdMO0FBQUNELE1BQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCQyxNQUFBQSxLQUFLLEVBQUU7QUFBdkIsS0FISztBQUZiLEdBUmMsQ0FBbEI7QUFpQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsK0RBQWY7QUFBQSw0QkFDSTtBQUFBLDZCQUNJO0FBQUksaUJBQVMsRUFBQyxpREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUssZUFBUyxFQUFDLGlEQUFmO0FBQUEsZ0JBQ0tKLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUNKLFFBQUQsRUFBV0ssS0FBWCxFQUFxQjtBQUNoQyw0QkFDSSw4REFBQyw2REFBRDtBQUFjLGtCQUFRLEVBQUVMO0FBQXhCLFdBQXVDSyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBR0gsT0FKQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWNILENBakNEOztHQUFNVjs7S0FBQUE7QUFtQ04sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWxBdXRoL3RyaXBJbmZvLmpzP2EyYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBGb3JtUXVlc3Rpb24gZnJvbSAnLi4vdHJhdmVsQXV0aC9mb3JtUXVlc3Rpb24nXG5cbmNvbnN0IFRyaXBJbmZvID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShkYXRhKVxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb246IFwiSW50ZXJuYXRpb25hbCBUcmF2ZWxcIixcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7bGFiZWw6IFwiWWVzXCIsIHZhbHVlOiBcInllc1wifSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6IFwiTm9cIiwgdmFsdWU6IFwibm9cIn1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb246IFwiUHVycG9zZSBvZiBUcmlwXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAge2xhYmVsOiBcIkN1c3RvbWVyIFZpc2l0XCIsIHZhbHVlOiBcIkN1c3RvbWVyIFZpc2l0XCJ9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogXCJTdXBwbGllciBWaXNpdFwiLCB2YWx1ZTogXCJTdXBwbGllciBWaXNpdFwifSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6IFwiU2hvd1wiLCB2YWx1ZTogXCJTaG93XCJ9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIHB0LTggc206c3BhY2UteS01IHNtOnB0LTEwXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlRyaXAgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgc206c3BhY2UteS01XCI+XG4gICAgICAgICAgICAgICAge3F1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1RdWVzdGlvbiBxdWVzdGlvbj17cXVlc3Rpb259IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBJbmZvIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybVF1ZXN0aW9uIiwiVHJpcEluZm8iLCJkYXRhIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travelAuth/tripInfo.js\n");

/***/ })

});