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

/***/ "./components/travelAuth/form/duration.js":
/*!************************************************!*\
  !*** ./components/travelAuth/form/duration.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/form/duration.js\",\n    _this = undefined;\n\n\n\nvar Duration = function Duration(_ref) {\n  var start = _ref.start,\n      end = _ref.end,\n      edit = _ref.edit,\n      onStartChange = _ref.onStartChange,\n      onEndChange = _ref.onEndChange;\n\n  function dateInputValue(date) {\n    if (!date) return null;\n    var local = new Date(date);\n    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());\n    return local.toJSON().slice(0, 10);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"my-4 space-y-4\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex items-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-w-lg rounded-md shadow-sm\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 text-gray-500 sm:text-sm\",\n          children: \"Start Date\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"date\",\n          className: \"border-gray-300 ml-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)\",\n          value: start ? dateInputValue(new Date(start)) : null,\n          onChange: onStartChange,\n          disabled: !edit\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-w-lg rounded-md shadow-sm\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm\",\n          children: \"End Date\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"date\",\n          className: \"border-gray-300 ml-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)\",\n          value: end ? dateInputValue(new Date(end)) : null,\n          onChange: onEndChange,\n          disabled: !edit\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Duration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Duration);\n\nvar _c;\n\n$RefreshReg$(_c, \"Duration\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvZm9ybS9kdXJhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFzRDtBQUFBLE1BQW5EQyxLQUFtRCxRQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q0MsR0FBNEMsUUFBNUNBLEdBQTRDO0FBQUEsTUFBdkNDLElBQXVDLFFBQXZDQSxJQUF1QztBQUFBLE1BQWpDQyxhQUFpQyxRQUFqQ0EsYUFBaUM7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUVuRSxXQUFTQyxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUMxQixRQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPLElBQVA7QUFDWCxRQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTRixJQUFULENBQWQ7QUFDQUMsSUFBQUEsS0FBSyxDQUFDRSxVQUFOLENBQWlCSCxJQUFJLENBQUNJLFVBQUwsS0FBb0JKLElBQUksQ0FBQ0ssaUJBQUwsRUFBckM7QUFDQSxXQUFPSixLQUFLLENBQUNLLE1BQU4sR0FBZUMsS0FBZixDQUFxQixDQUFyQixFQUF3QixFQUF4QixDQUFQO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxvQ0FBZjtBQUFBLGdDQUNJO0FBQU0sbUJBQVMsRUFBQyxrR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUNJLGNBQUksRUFBQyxNQURUO0FBRUksbUJBQVMsRUFBQyx1RkFGZDtBQUdJLGVBQUssRUFBR2IsS0FBRCxHQUFVSyxjQUFjLENBQUMsSUFBSUcsSUFBSixDQUFTUixLQUFULENBQUQsQ0FBeEIsR0FBNEMsSUFIdkQ7QUFJSSxrQkFBUSxFQUFFRyxhQUpkO0FBS0ksa0JBQVEsRUFBRSxDQUFDRDtBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFhSTtBQUFLLGlCQUFTLEVBQUMsb0NBQWY7QUFBQSxnQ0FDSTtBQUFNLG1CQUFTLEVBQUMsdUdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFDSSxjQUFJLEVBQUMsTUFEVDtBQUVJLG1CQUFTLEVBQUMsdUZBRmQ7QUFHSSxlQUFLLEVBQUdELEdBQUQsR0FBUUksY0FBYyxDQUFDLElBQUlHLElBQUosQ0FBU1AsR0FBVCxDQUFELENBQXRCLEdBQXdDLElBSG5EO0FBSUksa0JBQVEsRUFBRUcsV0FKZDtBQUtJLGtCQUFRLEVBQUUsQ0FBQ0Y7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdESCxDQWpFRDs7S0FBTUg7QUFtRU4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWxBdXRoL2Zvcm0vZHVyYXRpb24uanM/MTI2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEdXJhdGlvbiA9ICh7IHN0YXJ0LCBlbmQsIGVkaXQsIG9uU3RhcnRDaGFuZ2UsIG9uRW5kQ2hhbmdlIH0pID0+IHtcblxuICAgIGZ1bmN0aW9uIGRhdGVJbnB1dFZhbHVlKGRhdGUpIHtcbiAgICAgICAgaWYgKCFkYXRlKSByZXR1cm4gbnVsbCBcbiAgICAgICAgY29uc3QgbG9jYWwgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICBsb2NhbC5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpIC0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKVxuICAgICAgICByZXR1cm4gbG9jYWwudG9KU09OKCkuc2xpY2UoMCwgMTApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYXgtdy1sZyByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sLW1kIGJvcmRlciBib3JkZXItci0wIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwIHNtOnRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IERhdGVcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTMwMCBtbC0yIHRleHQtW3ZhcigtLXByaW1hcnktY29sb3IpIGZvY3VzOnJpbmctdGV4dC1bdmFyKC0tcHJpbWFyeS1jb2xvcilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyhzdGFydCkgPyBkYXRlSW5wdXRWYWx1ZShuZXcgRGF0ZShzdGFydCkpIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblN0YXJ0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlZGl0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYXgtdy1sZyByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sLW1kIGJvcmRlciBib3JkZXItci0wIGJvcmRlci1ncmF5LTMwMCBweC0zIHRleHQtZ3JheS01MDAgc206dGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW5kIERhdGVcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTMwMCBtbC0yIHRleHQtW3ZhcigtLXByaW1hcnktY29sb3IpIGZvY3VzOnJpbmctdGV4dC1bdmFyKC0tcHJpbWFyeS1jb2xvcilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyhlbmQpID8gZGF0ZUlucHV0VmFsdWUobmV3IERhdGUoZW5kKSkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRW5kQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlZGl0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInB1c2gtZXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU3RhcnQgRGF0ZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMzAwIG1sLTIgdGV4dC1bdmFyKC0tcHJpbWFyeS1jb2xvcikgZm9jdXM6cmluZy10ZXh0LVt2YXIoLS1wcmltYXJ5LWNvbG9yKVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsoc3RhcnQpID8gZGF0ZUlucHV0VmFsdWUobmV3IERhdGUoc3RhcnQpKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblN0YXJ0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVkaXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInB1c2gtZXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBFbmQgRGF0ZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMzAwIG1sLTIgdGV4dC1bdmFyKC0tcHJpbWFyeS1jb2xvcikgZm9jdXM6cmluZy10ZXh0LVt2YXIoLS1wcmltYXJ5LWNvbG9yKVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsoZW5kKSA/IGRhdGVJbnB1dFZhbHVlKG5ldyBEYXRlKGVuZCkpIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRW5kQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVkaXR9XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEdXJhdGlvbiJdLCJuYW1lcyI6WyJEdXJhdGlvbiIsInN0YXJ0IiwiZW5kIiwiZWRpdCIsIm9uU3RhcnRDaGFuZ2UiLCJvbkVuZENoYW5nZSIsImRhdGVJbnB1dFZhbHVlIiwiZGF0ZSIsImxvY2FsIiwiRGF0ZSIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ0b0pTT04iLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travelAuth/form/duration.js\n");

/***/ })

});