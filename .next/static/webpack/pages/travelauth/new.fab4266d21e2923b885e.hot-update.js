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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _form_radioOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/radioOptions */ \"./components/travelAuth/form/radioOptions.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/sections/travelAdvance.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TravelAdvance = function TravelAdvance(_ref) {\n  _s();\n\n  (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      selectedOption = _useState[0],\n      setSelectedOption = _useState[1];\n\n  function handleOnChange(e) {\n    setSelectedOption(e.target.value);\n  }\n\n  var options = [{\n    label: \"Yes\",\n    value: \"yes\"\n  }, {\n    label: \"No\",\n    value: \"no\"\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"space-y-6 divide-y divide-gray-200 sm:space-y-5\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"pt-6 sm:pt-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        role: \"group\",\n        \"aria-labelledby\": \"label-notifications\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"text-sm font-semibold leading-6 text-gray-900\",\n              id: \"label-notifications\",\n              children: \"International Travel\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"sm:col-span-2\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"max-w-lg\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_form_radioOptions__WEBPACK_IMPORTED_MODULE_2__.default, {\n                options: options,\n                selected: selectedOption,\n                onChange: function (_onChange) {\n                  function onChange(_x) {\n                    return _onChange.apply(this, arguments);\n                  }\n\n                  onChange.toString = function () {\n                    return _onChange.toString();\n                  };\n\n                  return onChange;\n                }(function (e) {\n                  handleOnChange(e);\n                  onChange(e);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n                htmlFor: \"push-everything\",\n                className: \"block text-sm font-medium leading-6 text-gray-900\",\n                children: \"Amount\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n                type: \"number\",\n                className: \"border-gray-300 ml-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TravelAdvance, \"+aYHZE0a/835MlUfESRBJSmwxHw=\");\n\n_c = TravelAdvance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TravelAdvance);\n\nvar _c;\n\n$RefreshReg$(_c, \"TravelAdvance\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvc2VjdGlvbnMvdHJhdmVsQWR2YW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBUTtBQUFBOztBQUFBOztBQUMxQixrQkFBNENGLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBLE1BQU9HLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLFdBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3ZCRixJQUFBQSxpQkFBaUIsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFDSDs7QUFDRCxNQUFNQyxPQUFPLEdBQUcsQ0FDWjtBQUFDQyxJQUFBQSxLQUFLLEVBQUUsS0FBUjtBQUFlRixJQUFBQSxLQUFLLEVBQUU7QUFBdEIsR0FEWSxFQUVaO0FBQUNFLElBQUFBLEtBQUssRUFBRSxJQUFSO0FBQWNGLElBQUFBLEtBQUssRUFBRTtBQUFyQixHQUZZLENBQWhCO0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBQ0k7QUFBSyxZQUFJLEVBQUMsT0FBVjtBQUFrQiwyQkFBZ0IscUJBQWxDO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLG1EQUFmO0FBQUEsa0NBQ0k7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsK0NBQWY7QUFBK0QsZ0JBQUUsRUFBQyxxQkFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBTUk7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsVUFBZjtBQUFBLHNDQUNJLDhEQUFDLHVEQUFEO0FBQWMsdUJBQU8sRUFBRUMsT0FBdkI7QUFBZ0Msd0JBQVEsRUFBRU4sY0FBMUM7QUFBMEQsd0JBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsa0JBQUUsVUFBQ0csQ0FBRCxFQUFPO0FBQ3ZFRCxrQkFBQUEsY0FBYyxDQUFDQyxDQUFELENBQWQ7QUFDQUssa0JBQUFBLFFBQVEsQ0FBQ0wsQ0FBRCxDQUFSO0FBQ0gsaUJBSGlFO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFLSTtBQUNJLHVCQUFPLEVBQUMsaUJBRFo7QUFFSSx5QkFBUyxFQUFDLG1EQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKLGVBV0k7QUFDSSxvQkFBSSxFQUFDLFFBRFQ7QUFFSSx5QkFBUyxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUNILENBM0NEOztHQUFNSjs7S0FBQUE7QUE2Q04sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWxBdXRoL3NlY3Rpb25zL3RyYXZlbEFkdmFuY2UuanM/M2RjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGlvT3B0aW9ucyBmcm9tICcuLi9mb3JtL3JhZGlvT3B0aW9ucydcblxuY29uc3QgVHJhdmVsQWR2YW5jZSA9ICh7fSkgPT4ge1xuICAgIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoJycpXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNoYW5nZShlKSB7XG4gICAgICAgIHNldFNlbGVjdGVkT3B0aW9uKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7bGFiZWw6IFwiWWVzXCIsIHZhbHVlOiBcInllc1wifSxcbiAgICAgICAge2xhYmVsOiBcIk5vXCIsIHZhbHVlOiBcIm5vXCJ9XG4gICAgXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBzbTpzcGFjZS15LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBzbTpwdC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbC1ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Z3JpZCBzbTpncmlkLWNvbHMtMyBzbTppdGVtcy1iYXNlbGluZSBzbTpnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiIGlkPVwibGFiZWwtbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludGVybmF0aW9uYWwgVHJhdmVsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb09wdGlvbnMgb3B0aW9ucz17b3B0aW9uc30gc2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9ufSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInB1c2gtZXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMzAwIG1sLTIgdGV4dC1bdmFyKC0tcHJpbWFyeS1jb2xvcikgZm9jdXM6cmluZy10ZXh0LVt2YXIoLS1wcmltYXJ5LWNvbG9yKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxBZHZhbmNlIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmFkaW9PcHRpb25zIiwiVHJhdmVsQWR2YW5jZSIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJsYWJlbCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/travelAuth/sections/travelAdvance.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _objectDestructuringEmpty; }\n/* harmony export */ });\nfunction _objectDestructuringEmpty(obj) {\n  if (obj == null) throw new TypeError(\"Cannot destructure undefined\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcz85NmY3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBkZXN0cnVjdHVyZSB1bmRlZmluZWRcIik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\n");

/***/ })

});