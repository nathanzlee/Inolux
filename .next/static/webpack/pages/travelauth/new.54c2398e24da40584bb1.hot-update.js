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

/***/ "./components/travelAuth/sections/travelAdvance.js":
/*!*********************************************************!*\
  !*** ./components/travelAuth/sections/travelAdvance.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _form_radioOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/radioOptions */ \"./components/travelAuth/form/radioOptions.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/sections/travelAdvance.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TravelAdvance = function TravelAdvance(_ref) {\n  _s();\n\n  (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      selectedOption = _useState[0],\n      setSelectedOption = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      amount = _useState2[0],\n      setAmount = _useState2[1];\n\n  function handleOnChange(e) {\n    setSelectedOption(e.target.value);\n  }\n\n  var options = [{\n    label: \"Yes\",\n    value: \"yes\"\n  }, {\n    label: \"No\",\n    value: \"no\"\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"space-y-6 divide-y divide-gray-200 sm:space-y-5\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"pt-6 sm:pt-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        role: \"group\",\n        \"aria-labelledby\": \"label-notifications\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"text-sm font-semibold leading-6 text-gray-900\",\n              id: \"label-notifications\",\n              children: \"Travel Advance\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"sm:col-span-2\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"max-w-lg\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_form_radioOptions__WEBPACK_IMPORTED_MODULE_2__.default, {\n                options: options,\n                selected: selectedOption,\n                onChange: function (_onChange) {\n                  function onChange(_x) {\n                    return _onChange.apply(this, arguments);\n                  }\n\n                  onChange.toString = function () {\n                    return _onChange.toString();\n                  };\n\n                  return onChange;\n                }(function (e) {\n                  handleOnChange(e);\n                  onChange(e);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                className: \"my-4 space-y-4\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                  className: \"flex items-center\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n                    htmlFor: \"push-everything\",\n                    className: \"block text-sm font-medium leading-6 text-gray-900\",\n                    children: \"Amount\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 33,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    className: \"border-gray-300 ml-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 39,\n                    columnNumber: 41\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 32,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TravelAdvance, \"2eHaMaZ5x5l4sjsUxxEaDFwkbO0=\");\n\n_c = TravelAdvance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TravelAdvance);\n\nvar _c;\n\n$RefreshReg$(_c, \"TravelAdvance\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvc2VjdGlvbnMvdHJhdmVsQWR2YW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBUTtBQUFBOztBQUFBOztBQUMxQixrQkFBNENGLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBLE1BQU9HLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUE0QkosK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT0ssTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsV0FBU0MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdkJKLElBQUFBLGlCQUFpQixDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFqQjtBQUNIOztBQUNELE1BQU1DLE9BQU8sR0FBRyxDQUNaO0FBQUNDLElBQUFBLEtBQUssRUFBRSxLQUFSO0FBQWVGLElBQUFBLEtBQUssRUFBRTtBQUF0QixHQURZLEVBRVo7QUFBQ0UsSUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY0YsSUFBQUEsS0FBSyxFQUFFO0FBQXJCLEdBRlksQ0FBaEI7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDSTtBQUFLLFlBQUksRUFBQyxPQUFWO0FBQWtCLDJCQUFnQixxQkFBbEM7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsbURBQWY7QUFBQSxrQ0FDSTtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQywrQ0FBZjtBQUErRCxnQkFBRSxFQUFDLHFCQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEsc0NBQ0ksOERBQUMsdURBQUQ7QUFBYyx1QkFBTyxFQUFFQyxPQUF2QjtBQUFnQyx3QkFBUSxFQUFFUixjQUExQztBQUEwRCx3QkFBUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrQkFBRSxVQUFDSyxDQUFELEVBQU87QUFDdkVELGtCQUFBQSxjQUFjLENBQUNDLENBQUQsQ0FBZDtBQUNBSyxrQkFBQUEsUUFBUSxDQUFDTCxDQUFELENBQVI7QUFDSCxpQkFIaUU7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUtJO0FBQUsseUJBQVMsRUFBQyxnQkFBZjtBQUFBLHVDQUNJO0FBQUssMkJBQVMsRUFBQyxtQkFBZjtBQUFBLDBDQUNJO0FBQ0ksMkJBQU8sRUFBQyxpQkFEWjtBQUVJLDZCQUFTLEVBQUMsbURBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFPSTtBQUNJLHdCQUFJLEVBQUMsUUFEVDtBQUVJLDZCQUFTLEVBQUM7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFDSCxDQWhERDs7R0FBTU47O0tBQUFBO0FBa0ROLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdHJhdmVsQXV0aC9zZWN0aW9ucy90cmF2ZWxBZHZhbmNlLmpzPzNkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpb09wdGlvbnMgZnJvbSAnLi4vZm9ybS9yYWRpb09wdGlvbnMnXG5cbmNvbnN0IFRyYXZlbEFkdmFuY2UgPSAoe30pID0+IHtcbiAgICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNldFNlbGVjdGVkT3B0aW9uXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DaGFuZ2UoZSkge1xuICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihlLnRhcmdldC52YWx1ZSlcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAge2xhYmVsOiBcIlllc1wiLCB2YWx1ZTogXCJ5ZXNcIn0sXG4gICAgICAgIHtsYWJlbDogXCJOb1wiLCB2YWx1ZTogXCJub1wifVxuICAgIF1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgc206c3BhY2UteS01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgc206cHQtNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbGxlZGJ5PVwibGFiZWwtbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmdyaWQgc206Z3JpZC1jb2xzLTMgc206aXRlbXMtYmFzZWxpbmUgc206Z2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS05MDBcIiBpZD1cImxhYmVsLW5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmF2ZWwgQWR2YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb09wdGlvbnMgb3B0aW9ucz17b3B0aW9uc30gc2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9ufSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInB1c2gtZXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItZ3JheS0zMDAgbWwtMiB0ZXh0LVt2YXIoLS1wcmltYXJ5LWNvbG9yKSBmb2N1czpyaW5nLXRleHQtW3ZhcigtLXByaW1hcnktY29sb3IpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsQWR2YW5jZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJhZGlvT3B0aW9ucyIsIlRyYXZlbEFkdmFuY2UiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb25zIiwibGFiZWwiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travelAuth/sections/travelAdvance.js\n");

/***/ })

});