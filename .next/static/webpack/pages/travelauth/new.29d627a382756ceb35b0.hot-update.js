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

/***/ "./components/travelAuth/sections/tripDuration.js":
/*!********************************************************!*\
  !*** ./components/travelAuth/sections/tripDuration.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/duration */ \"./components/travelAuth/form/duration.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/sections/tripDuration.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TripDuration = function TripDuration() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      startDate = _useState[0],\n      setStartDate = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      endDate = _useState2[0],\n      setEndDate = _useState2[1];\n\n  function getDateFromInput(date) {\n    date.setDate(date.getDate() + 1);\n    return new Date(date);\n  }\n\n  function handleStartChange(e) {\n    console.log(e.target.value); // const startDate = getDateFromInput(e.target.value)\n    // setStartDate(startDate)\n    // console.log(startDate)\n  }\n\n  function handleEndChange(e) {\n    var endDate = getDateFromInput(e.target.value);\n    setEndDate(endDate);\n    console.log(endDate);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"space-y-6 divide-y divide-gray-200 sm:space-y-5\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"pt-6 sm:pt-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        role: \"group\",\n        \"aria-labelledby\": \"label-notifications\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"text-sm font-semibold leading-6 text-gray-900\",\n              id: \"label-notifications\",\n              children: \"Duration of Trip\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"sm:col-span-2\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"max-w-lg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_form_duration__WEBPACK_IMPORTED_MODULE_1__.default, {\n                start: startDate,\n                end: endDate,\n                onStartChange: function onStartChange(e) {\n                  handleStartChange(e);\n                },\n                onEndChange: function onEndChange(e) {\n                  handleEndChange(e);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TripDuration, \"L5d15HCt6K5rlt26r2UFfuEEVmA=\");\n\n_c = TripDuration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TripDuration);\n\nvar _c;\n\n$RefreshReg$(_c, \"TripDuration\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvc2VjdGlvbnMvdHJpcER1cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN2QixrQkFBa0NGLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9HLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQThCSiwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFBQSxNQUFPSyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBLFdBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUM1QkEsSUFBQUEsSUFBSSxDQUFDQyxPQUFMLENBQWFELElBQUksQ0FBQ0UsT0FBTCxLQUFpQixDQUE5QjtBQUNBLFdBQU8sSUFBSUMsSUFBSixDQUFTSCxJQUFULENBQVA7QUFDSDs7QUFFRCxXQUFTSSxpQkFBVCxDQUEyQkMsQ0FBM0IsRUFBOEI7QUFDMUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBckIsRUFEMEIsQ0FFMUI7QUFDQTtBQUNBO0FBQ0g7O0FBRUQsV0FBU0MsZUFBVCxDQUF5QkwsQ0FBekIsRUFBNEI7QUFDeEIsUUFBTVIsT0FBTyxHQUFHRSxnQkFBZ0IsQ0FBQ00sQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FBaEM7QUFDQVgsSUFBQUEsVUFBVSxDQUFDRCxPQUFELENBQVY7QUFDQVMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlWLE9BQVo7QUFDSDs7QUFHRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDSTtBQUFLLFlBQUksRUFBQyxPQUFWO0FBQWtCLDJCQUFnQixxQkFBbEM7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsbURBQWY7QUFBQSxrQ0FDSTtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQywrQ0FBZjtBQUErRCxnQkFBRSxFQUFDLHFCQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEscUNBQ0ksOERBQUMsbURBQUQ7QUFBVSxxQkFBSyxFQUFFRixTQUFqQjtBQUE0QixtQkFBRyxFQUFFRSxPQUFqQztBQUEwQyw2QkFBYSxFQUFFLHVCQUFDUSxDQUFELEVBQU87QUFBQ0Qsa0JBQUFBLGlCQUFpQixDQUFDQyxDQUFELENBQWpCO0FBQXFCLGlCQUF0RjtBQUF3RiwyQkFBVyxFQUFFLHFCQUFDQSxDQUFELEVBQU87QUFBQ0ssa0JBQUFBLGVBQWUsQ0FBQ0wsQ0FBRCxDQUFmO0FBQW1CO0FBQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQTNDRDs7R0FBTVg7O0tBQUFBO0FBNkNOLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdHJhdmVsQXV0aC9zZWN0aW9ucy90cmlwRHVyYXRpb24uanM/MjIzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IER1cmF0aW9uIGZyb20gJy4uL2Zvcm0vZHVyYXRpb24nXG5cbmNvbnN0IFRyaXBEdXJhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgZnVuY3Rpb24gZ2V0RGF0ZUZyb21JbnB1dChkYXRlKSB7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnRDaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgLy8gY29uc3Qgc3RhcnREYXRlID0gZ2V0RGF0ZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgLy8gc2V0U3RhcnREYXRlKHN0YXJ0RGF0ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RhcnREYXRlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuZENoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBnZXREYXRlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICBzZXRFbmREYXRlKGVuZERhdGUpXG4gICAgICAgIGNvbnNvbGUubG9nKGVuZERhdGUpXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgc206c3BhY2UteS01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgc206cHQtNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbGxlZGJ5PVwibGFiZWwtbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmdyaWQgc206Z3JpZC1jb2xzLTMgc206aXRlbXMtYmFzZWxpbmUgc206Z2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS05MDBcIiBpZD1cImxhYmVsLW5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEdXJhdGlvbiBvZiBUcmlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPER1cmF0aW9uIHN0YXJ0PXtzdGFydERhdGV9IGVuZD17ZW5kRGF0ZX0gb25TdGFydENoYW5nZT17KGUpID0+IHtoYW5kbGVTdGFydENoYW5nZShlKX19IG9uRW5kQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZUVuZENoYW5nZShlKX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBEdXJhdGlvbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkR1cmF0aW9uIiwiVHJpcER1cmF0aW9uIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJnZXREYXRlRnJvbUlucHV0IiwiZGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiRGF0ZSIsImhhbmRsZVN0YXJ0Q2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVuZENoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travelAuth/sections/tripDuration.js\n");

/***/ })

});