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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/duration */ \"./components/travelAuth/form/duration.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/sections/tripDuration.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TripDuration = function TripDuration() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      startDate = _useState[0],\n      setStartDate = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      endDate = _useState2[0],\n      setEndDate = _useState2[1];\n\n  function handleStartChange(e) {\n    setStartDate(e.target.value);\n    console.log(e.target.value);\n  }\n\n  function handleEndChange(e) {\n    setEndDate(e.target.value);\n    console.log(e.target.value);\n  }\n\n  function dateInputValue(date) {\n    if (!date) return null;\n    var local = new Date(date);\n    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());\n    return local.toJSON().slice(0, 10);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"space-y-6 divide-y divide-gray-200 sm:space-y-5\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"pt-6 sm:pt-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        role: \"group\",\n        \"aria-labelledby\": \"label-notifications\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"text-sm font-semibold leading-6 text-gray-900\",\n              id: \"label-notifications\",\n              children: \"Duration of Trip\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"sm:col-span-2\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"max-w-lg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_form_duration__WEBPACK_IMPORTED_MODULE_1__.default, {\n                start: dateInputValue(new Date(startDate)),\n                end: dateInputValue(new Date(endDate)),\n                onStartChange: function onStartChange(e) {\n                  handleStartChange(e);\n                },\n                onEndChange: function onEndChange(e) {\n                  handleEndChange(e);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TripDuration, \"L5d15HCt6K5rlt26r2UFfuEEVmA=\");\n\n_c = TripDuration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TripDuration);\n\nvar _c;\n\n$RefreshReg$(_c, \"TripDuration\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvc2VjdGlvbnMvdHJpcER1cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN2QixrQkFBa0NGLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9HLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQThCSiwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFBQSxNQUFPSyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBLFdBQVNDLGlCQUFULENBQTJCQyxDQUEzQixFQUE4QjtBQUMxQkosSUFBQUEsWUFBWSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckI7QUFDSDs7QUFFRCxXQUFTRyxlQUFULENBQXlCTCxDQUF6QixFQUE0QjtBQUN4QkYsSUFBQUEsVUFBVSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckI7QUFDSDs7QUFFRCxXQUFTSSxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUMxQixRQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPLElBQVA7QUFDWCxRQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTRixJQUFULENBQWQ7QUFDQUMsSUFBQUEsS0FBSyxDQUFDRSxVQUFOLENBQWlCSCxJQUFJLENBQUNJLFVBQUwsS0FBb0JKLElBQUksQ0FBQ0ssaUJBQUwsRUFBckM7QUFDQSxXQUFPSixLQUFLLENBQUNLLE1BQU4sR0FBZUMsS0FBZixDQUFxQixDQUFyQixFQUF3QixFQUF4QixDQUFQO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBQ0k7QUFBSyxZQUFJLEVBQUMsT0FBVjtBQUFrQiwyQkFBZ0IscUJBQWxDO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLG1EQUFmO0FBQUEsa0NBQ0k7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsK0NBQWY7QUFBK0QsZ0JBQUUsRUFBQyxxQkFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBTUk7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsVUFBZjtBQUFBLHFDQUNJLDhEQUFDLG1EQUFEO0FBQVUscUJBQUssRUFBRVIsY0FBYyxDQUFDLElBQUlHLElBQUosQ0FBU2QsU0FBVCxDQUFELENBQS9CO0FBQXNELG1CQUFHLEVBQUVXLGNBQWMsQ0FBQyxJQUFJRyxJQUFKLENBQVNaLE9BQVQsQ0FBRCxDQUF6RTtBQUE4Riw2QkFBYSxFQUFFLHVCQUFDRyxDQUFELEVBQU87QUFBQ0Qsa0JBQUFBLGlCQUFpQixDQUFDQyxDQUFELENBQWpCO0FBQXFCLGlCQUExSTtBQUE0SSwyQkFBVyxFQUFFLHFCQUFDQSxDQUFELEVBQU87QUFBQ0ssa0JBQUFBLGVBQWUsQ0FBQ0wsQ0FBRCxDQUFmO0FBQW1CO0FBQXBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQXpDRDs7R0FBTU47O0tBQUFBO0FBMkNOLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdHJhdmVsQXV0aC9zZWN0aW9ucy90cmlwRHVyYXRpb24uanM/MjIzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IER1cmF0aW9uIGZyb20gJy4uL2Zvcm0vZHVyYXRpb24nXG5cbmNvbnN0IFRyaXBEdXJhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnRDaGFuZ2UoZSkge1xuICAgICAgICBzZXRTdGFydERhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuZENoYW5nZShlKSB7XG4gICAgICAgIHNldEVuZERhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRhdGVJbnB1dFZhbHVlKGRhdGUpIHtcbiAgICAgICAgaWYgKCFkYXRlKSByZXR1cm4gbnVsbCBcbiAgICAgICAgY29uc3QgbG9jYWwgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICBsb2NhbC5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpIC0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKVxuICAgICAgICByZXR1cm4gbG9jYWwudG9KU09OKCkuc2xpY2UoMCwgMTApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIHNtOnNwYWNlLXktNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHNtOnB0LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWxsZWRieT1cImxhYmVsLW5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOml0ZW1zLWJhc2VsaW5lIHNtOmdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCIgaWQ9XCJsYWJlbC1ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRHVyYXRpb24gb2YgVHJpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEdXJhdGlvbiBzdGFydD17ZGF0ZUlucHV0VmFsdWUobmV3IERhdGUoc3RhcnREYXRlKSl9IGVuZD17ZGF0ZUlucHV0VmFsdWUobmV3IERhdGUoZW5kRGF0ZSkpfSBvblN0YXJ0Q2hhbmdlPXsoZSkgPT4ge2hhbmRsZVN0YXJ0Q2hhbmdlKGUpfX0gb25FbmRDaGFuZ2U9eyhlKSA9PiB7aGFuZGxlRW5kQ2hhbmdlKGUpfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcER1cmF0aW9uIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRHVyYXRpb24iLCJUcmlwRHVyYXRpb24iLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsImhhbmRsZVN0YXJ0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUVuZENoYW5nZSIsImRhdGVJbnB1dFZhbHVlIiwiZGF0ZSIsImxvY2FsIiwiRGF0ZSIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ0b0pTT04iLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travelAuth/sections/tripDuration.js\n");

/***/ })

});