"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/table",{

/***/ "./pages/table.js":
/*!************************!*\
  !*** ./pages/table.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Example; }\n/* harmony export */ });\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/pages/table.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar people = [{\n  date: null,\n  location: '',\n  people: '',\n  reason: ''\n} // More people...\n];\n\n\nfunction Example() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(people),\n      data = _useState[0],\n      setData = _useState[1];\n\n  function onChangeRow(_ref) {\n    var type = _ref.type,\n        index = _ref.index,\n        value = _ref.value;\n    var newData = data.map(function (item, i) {\n      if (i == index) {\n        return _objectSpread(_objectSpread({}, item), {}, (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, type, value));\n      }\n\n      return item;\n    });\n    setData(newData);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg m-10\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"table\", {\n      className: \"min-w-full divide-y divide-gray-300\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"thead\", {\n        className: \"bg-gray-50\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"tr\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6\",\n            children: \"Date\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"px-3 py-3.5 text-center text-sm font-semibold text-gray-900\",\n            children: \"City/State/Country\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"px-3 py-3.5 text-center text-sm font-semibold text-gray-900\",\n            children: \"Name(s) of Customer(s), Supplier(s) to Visit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"px-3 py-3.5 text-center text-sm font-semibold text-gray-900\",\n            children: \"Reason for Visit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"tbody\", {\n        className: \"divide-y divide-gray-200 bg-white\",\n        children: data.map(function (person, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"tr\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n              className: \"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n                className: \"w-full p-[3px]\",\n                type: \"date\",\n                value: person.date,\n                onChange: function onChange(e) {\n                  onChangeRow({\n                    type: \"date\",\n                    index: index,\n                    value: e.target.value\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n              className: \"whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n                className: \"w-full p-[3px]\",\n                type: \"text\",\n                value: person.location,\n                onChange: function onChange(e) {\n                  onChangeRow({\n                    type: \"location\",\n                    index: index,\n                    value: e.target.value\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 23\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n              className: \"whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n                className: \"w-full p-[3px]\",\n                type: \"text\",\n                value: person.people,\n                onChange: function onChange(e) {\n                  onChangeRow({\n                    type: \"people\",\n                    index: index,\n                    value: e.target.value\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n              className: \"items-center whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n                className: \"w-full p-[3px]\",\n                type: \"text\",\n                value: person.reason,\n                onChange: function onChange(e) {\n                  onChangeRow({\n                    type: \"reason\",\n                    index: index,\n                    value: e.target.value\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 19\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Example, \"KfReJbxPPW6x7tMO4SD8FU1Hm24=\");\n\n_c = Example;\n\nvar _c;\n\n$RefreshReg$(_c, \"Example\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLENBQ1g7QUFBRUMsRUFBQUEsSUFBSSxFQUFFLElBQVI7QUFBY0MsRUFBQUEsUUFBUSxFQUFFLEVBQXhCO0FBQTRCRixFQUFBQSxNQUFNLEVBQUUsRUFBcEM7QUFBd0NHLEVBQUFBLE1BQU0sRUFBRTtBQUFoRCxDQURXLENBRVg7QUFGVyxDQUFmO0FBSUE7O0FBRWlCLFNBQVNFLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsa0JBQXdCRCwrQ0FBUSxDQUFDSixNQUFELENBQWhDO0FBQUEsTUFBT00sSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsV0FBU0MsV0FBVCxPQUE2QztBQUFBLFFBQXRCQyxJQUFzQixRQUF0QkEsSUFBc0I7QUFBQSxRQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsUUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3pDLFFBQU1DLE9BQU8sR0FBR04sSUFBSSxDQUFDTyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDbEMsVUFBSUEsQ0FBQyxJQUFJTCxLQUFULEVBQWdCO0FBQ1osK0NBQ09JLElBRFAsbUpBRUtMLElBRkwsRUFFWUUsS0FGWjtBQUlIOztBQUNELGFBQU9HLElBQVA7QUFDSCxLQVJlLENBQWhCO0FBU0FQLElBQUFBLE9BQU8sQ0FBQ0ssT0FBRCxDQUFQO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsNEVBQWY7QUFBQSwyQkFDRTtBQUFPLGVBQVMsRUFBQyxxQ0FBakI7QUFBQSw4QkFDRTtBQUFPLGlCQUFTLEVBQUMsWUFBakI7QUFBQSwrQkFDRTtBQUFBLGtDQUNBO0FBQUksaUJBQUssRUFBQyxLQUFWO0FBQWdCLHFCQUFTLEVBQUMsMEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBSUU7QUFBSSxpQkFBSyxFQUFDLEtBQVY7QUFBZ0IscUJBQVMsRUFBQyw2REFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFPRTtBQUFJLGlCQUFLLEVBQUMsS0FBVjtBQUFnQixxQkFBUyxFQUFDLDZEQUExQjtBQUFBLHNCQUNHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQVVFO0FBQUksaUJBQUssRUFBQyxLQUFWO0FBQWdCLHFCQUFTLEVBQUMsNkRBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWlCRTtBQUFPLGlCQUFTLEVBQUMsbUNBQWpCO0FBQUEsa0JBQ0dOLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUNHLE1BQUQsRUFBU04sS0FBVDtBQUFBLDhCQUNSO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLDRFQUFkO0FBQUEscUNBQ0U7QUFDSSx5QkFBUyxFQUFDLGdCQURkO0FBRUksb0JBQUksRUFBQyxNQUZUO0FBR0kscUJBQUssRUFBRU0sTUFBTSxDQUFDZixJQUhsQjtBQUlJLHdCQUFRLEVBQUUsa0JBQUNnQixDQUFELEVBQU87QUFDYlQsa0JBQUFBLFdBQVcsQ0FBQztBQUNSQyxvQkFBQUEsSUFBSSxFQUFFLE1BREU7QUFFUkMsb0JBQUFBLEtBQUssRUFBTEEsS0FGUTtBQUdSQyxvQkFBQUEsS0FBSyxFQUFFTSxDQUFDLENBQUNDLE1BQUYsQ0FBU1A7QUFIUixtQkFBRCxDQUFYO0FBS0g7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQWVFO0FBQUksdUJBQVMsRUFBQyxtREFBZDtBQUFBLHFDQUNJO0FBQ0UseUJBQVMsRUFBQyxnQkFEWjtBQUVFLG9CQUFJLEVBQUMsTUFGUDtBQUdFLHFCQUFLLEVBQUVLLE1BQU0sQ0FBQ2QsUUFIaEI7QUFJRSx3QkFBUSxFQUFFLGtCQUFDZSxDQUFELEVBQU87QUFDYlQsa0JBQUFBLFdBQVcsQ0FBQztBQUNSQyxvQkFBQUEsSUFBSSxFQUFFLFVBREU7QUFFUkMsb0JBQUFBLEtBQUssRUFBTEEsS0FGUTtBQUdSQyxvQkFBQUEsS0FBSyxFQUFFTSxDQUFDLENBQUNDLE1BQUYsQ0FBU1A7QUFIUixtQkFBRCxDQUFYO0FBS0g7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRixlQTZCRTtBQUFJLHVCQUFTLEVBQUMsbURBQWQ7QUFBQSxxQ0FDQTtBQUNNLHlCQUFTLEVBQUMsZ0JBRGhCO0FBRU0sb0JBQUksRUFBQyxNQUZYO0FBR00scUJBQUssRUFBRUssTUFBTSxDQUFDaEIsTUFIcEI7QUFJTSx3QkFBUSxFQUFFLGtCQUFDaUIsQ0FBRCxFQUFPO0FBQ2JULGtCQUFBQSxXQUFXLENBQUM7QUFDUkMsb0JBQUFBLElBQUksRUFBRSxRQURFO0FBRVJDLG9CQUFBQSxLQUFLLEVBQUxBLEtBRlE7QUFHUkMsb0JBQUFBLEtBQUssRUFBRU0sQ0FBQyxDQUFDQyxNQUFGLENBQVNQO0FBSFIsbUJBQUQsQ0FBWDtBQUtIO0FBVlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0JGLGVBMkNFO0FBQUksdUJBQVMsRUFBQyxnRUFBZDtBQUFBLHFDQUNBO0FBQ00seUJBQVMsRUFBQyxnQkFEaEI7QUFFTSxvQkFBSSxFQUFDLE1BRlg7QUFHTSxxQkFBSyxFQUFFSyxNQUFNLENBQUNiLE1BSHBCO0FBSU0sd0JBQVEsRUFBRSxrQkFBQ2MsQ0FBRCxFQUFPO0FBQ2JULGtCQUFBQSxXQUFXLENBQUM7QUFDUkMsb0JBQUFBLElBQUksRUFBRSxRQURFO0FBRVJDLG9CQUFBQSxLQUFLLEVBQUxBLEtBRlE7QUFHUkMsb0JBQUFBLEtBQUssRUFBRU0sQ0FBQyxDQUFDQyxNQUFGLENBQVNQO0FBSFIsbUJBQUQsQ0FBWDtBQUtIO0FBVlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBM0NGO0FBQUEsYUFBU0QsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0ZEOztHQXBHdUJMOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90YWJsZS5qcz82ZWExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBlb3BsZSA9IFtcbiAgICB7IGRhdGU6IG51bGwsIGxvY2F0aW9uOiAnJywgcGVvcGxlOiAnJywgcmVhc29uOiAnJyB9LFxuICAgIC8vIE1vcmUgcGVvcGxlLi4uXG4gIF1cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShwZW9wbGUpXG5cbiAgICBmdW5jdGlvbiBvbkNoYW5nZVJvdyh7IHR5cGUsIGluZGV4LCB2YWx1ZSB9KSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICBbdHlwZV06IHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gXG4gICAgICAgIH0pXG4gICAgICAgIHNldERhdGEobmV3RGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBzaGFkb3cgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgc206cm91bmRlZC1sZyBtLTEwXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMzAwXCI+XG4gICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB5LTMuNSBwbC00IHByLTMgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgc206cGwtNlwiPlxuICAgICAgICAgICAgICAgICAgRGF0ZVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgIENpdHkvU3RhdGUvQ291bnRyeVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgIHtcIk5hbWUocykgb2YgQ3VzdG9tZXIocyksIFN1cHBsaWVyKHMpIHRvIFZpc2l0XCJ9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC0zIHB5LTMuNSB0ZXh0LWNlbnRlciB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgUmVhc29uIGZvciBWaXNpdFxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHBlcnNvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHktNCBwbC00IHByLTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHNtOnBsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtWzNweF1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVyc29uLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVJvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIHB4LTMgcHktNCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC1bM3B4XVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcnNvbi5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUm93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJsb2NhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtMyBweS00IHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtWzNweF1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJzb24ucGVvcGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VSb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBlb3BsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIHdoaXRlc3BhY2Utbm93cmFwIHB4LTMgcHktNCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLVszcHhdXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVyc29uLnJlYXNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUm93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZWFzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgIl0sIm5hbWVzIjpbInBlb3BsZSIsImRhdGUiLCJsb2NhdGlvbiIsInJlYXNvbiIsInVzZVN0YXRlIiwiRXhhbXBsZSIsImRhdGEiLCJzZXREYXRhIiwib25DaGFuZ2VSb3ciLCJ0eXBlIiwiaW5kZXgiLCJ2YWx1ZSIsIm5ld0RhdGEiLCJtYXAiLCJpdGVtIiwiaSIsInBlcnNvbiIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/table.js\n");

/***/ })

});