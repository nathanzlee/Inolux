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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_radioOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/radioOptions */ \"./components/travelAuth/form/radioOptions.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/sections/tripPurpose.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TripPurpose = function TripPurpose(_ref) {\n  _s();\n\n  var data = _ref.data,\n      _onChange = _ref.onChange;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      selectedOption = _useState[0],\n      setSelectedOption = _useState[1];\n\n  function handleOnChange(e) {\n    setSelectedOption(e.target.value);\n    console.log(e.target.value);\n  }\n\n  var options = [{\n    label: \"Customer Visit\",\n    value: \"Customer Visit\"\n  }, {\n    label: \"Supplier Visit\",\n    value: \"Supplier Visit\"\n  }, {\n    label: \"Show\",\n    value: \"Show\"\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"space-y-6 divide-y divide-gray-200 sm:space-y-5\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"pt-6 sm:pt-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        role: \"group\",\n        \"aria-labelledby\": \"label-notifications\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"text-sm font-semibold leading-6 text-gray-900\",\n              id: \"label-notifications\",\n              children: \"Purpose of Trip\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"sm:col-span-2\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"max-w-lg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_form_radioOptions__WEBPACK_IMPORTED_MODULE_1__.default, {\n                options: options,\n                selected: selectedOption,\n                onChange: function onChange(e) {\n                  handleOnChange(e);\n\n                  _onChange();\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TripPurpose, \"+aYHZE0a/835MlUfESRBJSmwxHw=\");\n\n_c = TripPurpose;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TripPurpose);\n\nvar _c;\n\n$RefreshReg$(_c, \"TripPurpose\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvc2VjdGlvbnMvdHJpcFB1cnBvc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFFBQWU7O0FBQ3hDLGtCQUE0Q0osK0NBQVEsQ0FBQyxFQUFELENBQXBEO0FBQUEsTUFBT0ssY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBRUEsV0FBU0MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdkJGLElBQUFBLGlCQUFpQixDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFqQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0g7O0FBQ0QsTUFBTUcsT0FBTyxHQUFHLENBQ1o7QUFBQ0MsSUFBQUEsS0FBSyxFQUFFLGdCQUFSO0FBQTBCSixJQUFBQSxLQUFLLEVBQUU7QUFBakMsR0FEWSxFQUVaO0FBQUNJLElBQUFBLEtBQUssRUFBRSxnQkFBUjtBQUEwQkosSUFBQUEsS0FBSyxFQUFFO0FBQWpDLEdBRlksRUFHWjtBQUFDSSxJQUFBQSxLQUFLLEVBQUUsTUFBUjtBQUFnQkosSUFBQUEsS0FBSyxFQUFFO0FBQXZCLEdBSFksQ0FBaEI7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDSTtBQUFLLFlBQUksRUFBQyxPQUFWO0FBQWtCLDJCQUFnQixxQkFBbEM7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsbURBQWY7QUFBQSxrQ0FDSTtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQywrQ0FBZjtBQUErRCxnQkFBRSxFQUFDLHFCQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEscUNBQ0ksOERBQUMsdURBQUQ7QUFBYyx1QkFBTyxFQUFFRyxPQUF2QjtBQUFnQyx3QkFBUSxFQUFFUixjQUExQztBQUEwRCx3QkFBUSxFQUFFLGtCQUFDRyxDQUFELEVBQU87QUFDdkVELGtCQUFBQSxjQUFjLENBQUNDLENBQUQsQ0FBZDs7QUFDQUosa0JBQUFBLFNBQVE7QUFDWDtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQW5DRDs7R0FBTUY7O0tBQUFBO0FBcUNOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdHJhdmVsQXV0aC9zZWN0aW9ucy90cmlwUHVycG9zZS5qcz8wNDFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaW9PcHRpb25zIGZyb20gJy4uL2Zvcm0vcmFkaW9PcHRpb25zJ1xuXG5jb25zdCBUcmlwUHVycG9zZSA9ICh7IGRhdGEsIG9uQ2hhbmdlIH0pID0+IHtcbiAgICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNldFNlbGVjdGVkT3B0aW9uXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DaGFuZ2UoZSkge1xuICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIHtsYWJlbDogXCJDdXN0b21lciBWaXNpdFwiLCB2YWx1ZTogXCJDdXN0b21lciBWaXNpdFwifSxcbiAgICAgICAge2xhYmVsOiBcIlN1cHBsaWVyIFZpc2l0XCIsIHZhbHVlOiBcIlN1cHBsaWVyIFZpc2l0XCJ9LFxuICAgICAgICB7bGFiZWw6IFwiU2hvd1wiLCB2YWx1ZTogXCJTaG93XCJ9XG4gICAgXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBzbTpzcGFjZS15LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBzbTpwdC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbC1ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Z3JpZCBzbTpncmlkLWNvbHMtMyBzbTppdGVtcy1iYXNlbGluZSBzbTpnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiIGlkPVwibGFiZWwtbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1cnBvc2Ugb2YgVHJpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb09wdGlvbnMgb3B0aW9ucz17b3B0aW9uc30gc2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9ufSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBQdXJwb3NlIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmFkaW9PcHRpb25zIiwiVHJpcFB1cnBvc2UiLCJkYXRhIiwib25DaGFuZ2UiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/travelAuth/sections/tripPurpose.js\n");

/***/ })

});