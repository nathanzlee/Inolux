"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/travel",{

/***/ "./components/travel/travelAuths.js":
/*!******************************************!*\
  !*** ./components/travel/travelAuths.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _travel_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../travel/row */ \"./components/travel/row.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travel/travelAuths.js\",\n    _this = undefined;\n\n\n\n\nvar TravelAuths = function TravelAuths(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    \"class\": \"flex flex-col items-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      \"class\": \"w-[70%] h-[80%] grid grid-cols-5 border-solid border-b-2 border-[blue]\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        \"class\": \"flex flex-col justify-center items-center p-5\",\n        children: \"Requester\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        \"class\": \"flex flex-col justify-center items-center p-5\",\n        children: \"Manager\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        \"class\": \"flex flex-col justify-center items-center p-5\",\n        children: \"Requested\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        \"class\": \"flex flex-col justify-center items-center p-5\",\n        children: \"Approved\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        \"class\": \"flex flex-col justify-center items-center p-5\",\n        children: \"Status\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, _this), data.map(function (_ref2) {\n      var name = _ref2.name,\n          reqDate = _ref2.reqDate,\n          managerSig = _ref2.managerSig,\n          presidentSig = _ref2.presidentSig,\n          status = _ref2.status;\n      var approvedDate = presidentSig.date == null ? new Date(managerSig.date).toLocaleDateString() : new Date(Math.max(new Date(managerSig.date), new Date(presidentSig.date))).toLocaleDateString();\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_travel_row__WEBPACK_IMPORTED_MODULE_0__.default, {\n        requester: name,\n        manager: managerSig.user.firstName + ' ' + managerSig.user.lastName,\n        reqDate: new Date(reqDate).toLocaleDateString(),\n        approvedDate: approvedDate,\n        status: status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 21\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = TravelAuths;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TravelAuths);\n\nvar _c;\n\n$RefreshReg$(_c, \"TravelAuths\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbC90cmF2ZWxBdXRocy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzlCLHNCQUNJO0FBQUssYUFBTSw0QkFBWDtBQUFBLDRCQUNJO0FBQUssZUFBTSx3RUFBWDtBQUFBLDhCQUNJO0FBQUssaUJBQU0sK0NBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssaUJBQU0sK0NBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUssaUJBQU0sK0NBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUlJO0FBQUssaUJBQU0sK0NBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJO0FBQUssaUJBQU0sK0NBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQVFLQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxpQkFBd0Q7QUFBQSxVQUFyREMsSUFBcUQsU0FBckRBLElBQXFEO0FBQUEsVUFBL0NDLE9BQStDLFNBQS9DQSxPQUErQztBQUFBLFVBQXRDQyxVQUFzQyxTQUF0Q0EsVUFBc0M7QUFBQSxVQUExQkMsWUFBMEIsU0FBMUJBLFlBQTBCO0FBQUEsVUFBWkMsTUFBWSxTQUFaQSxNQUFZO0FBQzlELFVBQU1DLFlBQVksR0FBSUYsWUFBWSxDQUFDRyxJQUFiLElBQXFCLElBQXRCLEdBQThCLElBQUlDLElBQUosQ0FBU0wsVUFBVSxDQUFDSSxJQUFwQixFQUEwQkUsa0JBQTFCLEVBQTlCLEdBQStFLElBQUlELElBQUosQ0FBU0UsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBSUgsSUFBSixDQUFTTCxVQUFVLENBQUNJLElBQXBCLENBQVQsRUFBb0MsSUFBSUMsSUFBSixDQUFTSixZQUFZLENBQUNHLElBQXRCLENBQXBDLENBQVQsRUFBMkVFLGtCQUEzRSxFQUFwRztBQUNBLDBCQUNJLDhEQUFDLGdEQUFEO0FBQUssaUJBQVMsRUFBRVIsSUFBaEI7QUFBc0IsZUFBTyxFQUFFRSxVQUFVLENBQUNTLElBQVgsQ0FBZ0JDLFNBQWhCLEdBQTRCLEdBQTVCLEdBQWtDVixVQUFVLENBQUNTLElBQVgsQ0FBZ0JFLFFBQWpGO0FBQTJGLGVBQU8sRUFBRSxJQUFJTixJQUFKLENBQVNOLE9BQVQsRUFBa0JPLGtCQUFsQixFQUFwRztBQUE0SSxvQkFBWSxFQUFFSCxZQUExSjtBQUF3SyxjQUFNLEVBQUVEO0FBQWhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUdILEtBTEEsQ0FSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtCSCxDQW5CRDs7S0FBTVA7QUFxQk4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWwvdHJhdmVsQXV0aHMuanM/OTkzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm93IGZyb20gJy4uL3RyYXZlbC9yb3cnXG5cbmNvbnN0IFRyYXZlbEF1dGhzID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1bNzAlXSBoLVs4MCVdIGdyaWQgZ3JpZC1jb2xzLTUgYm9yZGVyLXNvbGlkIGJvcmRlci1iLTIgYm9yZGVyLVtibHVlXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTVcIj5SZXF1ZXN0ZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC01XCI+TWFuYWdlcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTVcIj5SZXF1ZXN0ZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC01XCI+QXBwcm92ZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC01XCI+U3RhdHVzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoeyBuYW1lLCByZXFEYXRlLCBtYW5hZ2VyU2lnLCBwcmVzaWRlbnRTaWcsIHN0YXR1c30pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHByb3ZlZERhdGUgPSAocHJlc2lkZW50U2lnLmRhdGUgPT0gbnVsbCkgPyBuZXcgRGF0ZShtYW5hZ2VyU2lnLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogbmV3IERhdGUoTWF0aC5tYXgobmV3IERhdGUobWFuYWdlclNpZy5kYXRlKSwgbmV3IERhdGUocHJlc2lkZW50U2lnLmRhdGUpKSkudG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Um93IHJlcXVlc3Rlcj17bmFtZX0gbWFuYWdlcj17bWFuYWdlclNpZy51c2VyLmZpcnN0TmFtZSArICcgJyArIG1hbmFnZXJTaWcudXNlci5sYXN0TmFtZX0gcmVxRGF0ZT17bmV3IERhdGUocmVxRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IGFwcHJvdmVkRGF0ZT17YXBwcm92ZWREYXRlfSBzdGF0dXM9e3N0YXR1c30vPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxBdXRocyJdLCJuYW1lcyI6WyJSb3ciLCJUcmF2ZWxBdXRocyIsImRhdGEiLCJtYXAiLCJuYW1lIiwicmVxRGF0ZSIsIm1hbmFnZXJTaWciLCJwcmVzaWRlbnRTaWciLCJzdGF0dXMiLCJhcHByb3ZlZERhdGUiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIk1hdGgiLCJtYXgiLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/travel/travelAuths.js\n");

/***/ })

});