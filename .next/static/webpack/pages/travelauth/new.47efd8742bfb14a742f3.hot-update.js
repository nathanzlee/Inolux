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

/***/ "./components/travelAuth/form/duration.js":
/*!************************************************!*\
  !*** ./components/travelAuth/form/duration.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/form/duration.js\",\n    _this = undefined;\n\n\n\nvar Duration = function Duration(_ref) {\n  var start = _ref.start,\n      end = _ref.end,\n      onStartChange = _ref.onStartChange,\n      onEndChange = _ref.onEndChange;\n\n  function dateInputValue(date) {\n    if (!date) return null;\n    var local = new Date(date);\n    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());\n    return local.toJSON().slice(0, 10);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"my-4 space-y-4\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex items-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"push-everything\",\n        className: \"block text-sm font-medium leading-6 text-gray-900\",\n        children: \"Start Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        className: \"border-gray-300 ml-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)\",\n        value: start ? dateInputValue(new Date(start)) : null,\n        onChange: onStartChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"push-everything\",\n        className: \"ml-2 block text-sm font-medium leading-6 text-gray-900\",\n        children: \"End Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        className: \"border-gray-300 ml-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)\",\n        value: end ? dateInputValue(new Date(end)) : null,\n        onChange: onEndChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Duration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Duration);\n\nvar _c;\n\n$RefreshReg$(_c, \"Duration\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvZm9ybS9kdXJhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFnRDtBQUFBLE1BQTdDQyxLQUE2QyxRQUE3Q0EsS0FBNkM7QUFBQSxNQUF0Q0MsR0FBc0MsUUFBdENBLEdBQXNDO0FBQUEsTUFBakNDLGFBQWlDLFFBQWpDQSxhQUFpQztBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBRTdELFdBQVNDLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCO0FBQzFCLFFBQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sSUFBUDtBQUNYLFFBQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLENBQVNGLElBQVQsQ0FBZDtBQUNBQyxJQUFBQSxLQUFLLENBQUNFLFVBQU4sQ0FBaUJILElBQUksQ0FBQ0ksVUFBTCxLQUFvQkosSUFBSSxDQUFDSyxpQkFBTCxFQUFyQztBQUNBLFdBQU9KLEtBQUssQ0FBQ0ssTUFBTixHQUFlQyxLQUFmLENBQXFCLENBQXJCLEVBQXdCLEVBQXhCLENBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0k7QUFDSSxlQUFPLEVBQUMsaUJBRFo7QUFFSSxpQkFBUyxFQUFDLG1EQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPSTtBQUNJLFlBQUksRUFBQyxNQURUO0FBRUksaUJBQVMsRUFBQyx1RkFGZDtBQUdJLGFBQUssRUFBR1osS0FBRCxHQUFVSSxjQUFjLENBQUMsSUFBSUcsSUFBSixDQUFTUCxLQUFULENBQUQsQ0FBeEIsR0FBNEMsSUFIdkQ7QUFJSSxnQkFBUSxFQUFFRTtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixlQWFJO0FBQ0ksZUFBTyxFQUFDLGlCQURaO0FBRUksaUJBQVMsRUFBQyx3REFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKLGVBbUJJO0FBQ0ksWUFBSSxFQUFDLE1BRFQ7QUFFSSxpQkFBUyxFQUFDLHVGQUZkO0FBR0ksYUFBSyxFQUFHRCxHQUFELEdBQVFHLGNBQWMsQ0FBQyxJQUFJRyxJQUFKLENBQVNOLEdBQVQsQ0FBRCxDQUF0QixHQUF3QyxJQUhuRDtBQUlJLGdCQUFRLEVBQUVFO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4QkgsQ0F2Q0Q7O0tBQU1KO0FBeUNOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdHJhdmVsQXV0aC9mb3JtL2R1cmF0aW9uLmpzPzEyNjAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRHVyYXRpb24gPSAoeyBzdGFydCwgZW5kLCBvblN0YXJ0Q2hhbmdlLCBvbkVuZENoYW5nZSB9KSA9PiB7XG5cbiAgICBmdW5jdGlvbiBkYXRlSW5wdXRWYWx1ZShkYXRlKSB7XG4gICAgICAgIGlmICghZGF0ZSkgcmV0dXJuIG51bGwgXG4gICAgICAgIGNvbnN0IGxvY2FsID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgbG9jYWwuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSAtIGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSlcbiAgICAgICAgcmV0dXJuIGxvY2FsLnRvSlNPTigpLnNsaWNlKDAsIDEwKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInB1c2gtZXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU3RhcnQgRGF0ZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMzAwIG1sLTIgdGV4dC1bdmFyKC0tcHJpbWFyeS1jb2xvcikgZm9jdXM6cmluZy10ZXh0LVt2YXIoLS1wcmltYXJ5LWNvbG9yKVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsoc3RhcnQpID8gZGF0ZUlucHV0VmFsdWUobmV3IERhdGUoc3RhcnQpKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblN0YXJ0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwdXNoLWV2ZXJ5dGhpbmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRW5kIERhdGVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTMwMCBtbC0yIHRleHQtW3ZhcigtLXByaW1hcnktY29sb3IpIGZvY3VzOnJpbmctdGV4dC1bdmFyKC0tcHJpbWFyeS1jb2xvcilcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17KGVuZCkgPyBkYXRlSW5wdXRWYWx1ZShuZXcgRGF0ZShlbmQpKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkVuZENoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHVyYXRpb24iXSwibmFtZXMiOlsiRHVyYXRpb24iLCJzdGFydCIsImVuZCIsIm9uU3RhcnRDaGFuZ2UiLCJvbkVuZENoYW5nZSIsImRhdGVJbnB1dFZhbHVlIiwiZGF0ZSIsImxvY2FsIiwiRGF0ZSIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ0b0pTT04iLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travelAuth/form/duration.js\n");

/***/ })

});