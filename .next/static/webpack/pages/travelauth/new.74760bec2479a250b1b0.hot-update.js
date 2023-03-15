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

/***/ "./components/travelAuth/travelAuth.js":
/*!*********************************************!*\
  !*** ./components/travelAuth/travelAuth.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sections_personalInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/personalInfo */ \"./components/travelAuth/sections/personalInfo.js\");\n/* harmony import */ var _sections_internationalTravel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/internationalTravel */ \"./components/travelAuth/sections/internationalTravel.js\");\n/* harmony import */ var _sections_tripPurpose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/tripPurpose */ \"./components/travelAuth/sections/tripPurpose.js\");\n/* harmony import */ var _sections_tripDuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/tripDuration */ \"./components/travelAuth/sections/tripDuration.js\");\n/* harmony import */ var _sections_itinerary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/itinerary */ \"./components/travelAuth/sections/itinerary.js\");\n/* harmony import */ var _sections_travelAdvance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/travelAdvance */ \"./components/travelAuth/sections/travelAdvance.js\");\n/* harmony import */ var _sections_personalTravel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/personalTravel */ \"./components/travelAuth/sections/personalTravel.js\");\n/* harmony import */ var _sections_employeeSignature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/employeeSignature */ \"./components/travelAuth/sections/employeeSignature.js\");\n/* harmony import */ var _sections_managerSignature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/managerSignature */ \"./components/travelAuth/sections/managerSignature.js\");\n/* harmony import */ var _sections_presidentSignature__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/presidentSignature */ \"./components/travelAuth/sections/presidentSignature.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/travelAuth.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar TravelAuth = function TravelAuth(_ref) {\n  _s();\n\n  var type = _ref.type,\n      user = _ref.user,\n      data = _ref.data;\n  var personalInfo = {\n    name: user ? user.firstName + ' ' + user.lastName : '',\n    number: user ? user.number : '',\n    department: user ? user.department : '',\n    phone: user ? user.phone : '',\n    reqDate: Date.now()\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      internationalTravel = _useState[0],\n      setInternationalTravel = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      tripPurpose = _useState2[0],\n      setTripPurpose = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      tripDuration = _useState3[0],\n      setTripDuration = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      itinerary = _useState4[0],\n      setItinerary = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      travelAdvance = _useState5[0],\n      setTravelAdvance = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      personalTravel = _useState6[0],\n      setPersonalTravel = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      employeeSignature = _useState7[0],\n      setEmployeeSignature = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      managerSignature = _useState8[0],\n      setManagerSignature = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      presidentSignature = _useState9[0],\n      setPresidentSignature = _useState9[1];\n\n  function handleInternationalTravelChange(e) {\n    setInternationalTravel(e.target.value);\n  }\n\n  function handleTripPurposeChange(e) {\n    setTripPurpose(e.target.value);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"form\", {\n    className: \"space-y-8 divide-y divide-gray-200\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n      className: \"space-y-8 divide-y divide-gray-200 sm:space-y-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"h3\", {\n            className: \"text-base font-semibold leading-6 text-gray-900\",\n            children: \"Personal Information\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_personalInfo__WEBPACK_IMPORTED_MODULE_1__.default, {\n          user: user ? user : null\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"h3\", {\n            className: \"text-base font-semibold leading-6 text-gray-900\",\n            children: \"Trip Information\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_internationalTravel__WEBPACK_IMPORTED_MODULE_2__.default, {\n          onChange: function onChange(e) {\n            handleInternationalTravelChange(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_tripPurpose__WEBPACK_IMPORTED_MODULE_3__.default, {\n          onChange: function onChange(e) {\n            handleTripPurposeChange(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_tripDuration__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_itinerary__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_travelAdvance__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_personalTravel__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"h3\", {\n            className: \"text-base font-semibold leading-6 text-gray-900\",\n            children: \"Approval\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_employeeSignature__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_managerSignature__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_presidentSignature__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n      className: \"pt-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"flex justify-end gap-x-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"button\", {\n          type: \"button\",\n          className: \"rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50\",\n          children: \"Cancel\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          className: \"inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n          children: \"Save\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TravelAuth, \"uhB/uGyOZ/Ouk0jCFd6QMXsbDCc=\");\n\n_c = TravelAuth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TravelAuth);\n\nvar _c;\n\n$RefreshReg$(_c, \"TravelAuth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBNkJJO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQSxnQ0FDSTtBQUNJLGNBQUksRUFBQyxRQURUO0FBRUksbUJBQVMsRUFBQyw4SEFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU9JO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxtQkFBUyxFQUFDLDRPQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnREgsQ0ExRUQ7O0dBQU1qQzs7S0FBQUE7QUE2RU4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWxBdXRoL3RyYXZlbEF1dGguanM/OTNkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBlcnNvbmFsSW5mbyBmcm9tICcuL3NlY3Rpb25zL3BlcnNvbmFsSW5mbydcbmltcG9ydCBJbnRlcm5hdGlvbmFsVHJhdmVsIGZyb20gJy4vc2VjdGlvbnMvaW50ZXJuYXRpb25hbFRyYXZlbCdcbmltcG9ydCBUcmlwUHVycG9zZSBmcm9tICcuL3NlY3Rpb25zL3RyaXBQdXJwb3NlJ1xuaW1wb3J0IFRyaXBEdXJhdGlvbiBmcm9tICcuL3NlY3Rpb25zL3RyaXBEdXJhdGlvbidcbmltcG9ydCBJdGluZXJhcnkgZnJvbSAnLi9zZWN0aW9ucy9pdGluZXJhcnknXG5pbXBvcnQgVHJhdmVsQWR2YW5jZSBmcm9tICcuL3NlY3Rpb25zL3RyYXZlbEFkdmFuY2UnXG5pbXBvcnQgUGVyc29uYWxUcmF2ZWwgZnJvbSAnLi9zZWN0aW9ucy9wZXJzb25hbFRyYXZlbCdcbmltcG9ydCBFbXBsb3llZVNpZ25hdHVyZSBmcm9tICcuL3NlY3Rpb25zL2VtcGxveWVlU2lnbmF0dXJlJ1xuaW1wb3J0IE1hbmFnZXJTaWduYXR1cmUgZnJvbSAnLi9zZWN0aW9ucy9tYW5hZ2VyU2lnbmF0dXJlJ1xuaW1wb3J0IFByZXNpZGVudFNpZ25hdHVyZSBmcm9tICcuL3NlY3Rpb25zL3ByZXNpZGVudFNpZ25hdHVyZSdcblxuY29uc3QgVHJhdmVsQXV0aCA9ICh7IHR5cGUsIHVzZXIsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IHBlcnNvbmFsSW5mbyA9IHtcbiAgICAgICAgbmFtZTogKHVzZXIpID8gdXNlci5maXJzdE5hbWUgICsgJyAnICsgdXNlci5sYXN0TmFtZSA6ICcnLFxuICAgICAgICBudW1iZXI6ICh1c2VyKSA/IHVzZXIubnVtYmVyIDogJycsXG4gICAgICAgIGRlcGFydG1lbnQ6ICh1c2VyKSA/IHVzZXIuZGVwYXJ0bWVudCA6ICcnLFxuICAgICAgICBwaG9uZTogKHVzZXIpID8gdXNlci5waG9uZSA6ICcnLFxuICAgICAgICByZXFEYXRlOiBEYXRlLm5vdygpXG4gICAgfVxuICAgIGNvbnN0IFtpbnRlcm5hdGlvbmFsVHJhdmVsLCBzZXRJbnRlcm5hdGlvbmFsVHJhdmVsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFt0cmlwUHVycG9zZSwgc2V0VHJpcFB1cnBvc2VdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3RyaXBEdXJhdGlvbiwgc2V0VHJpcER1cmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2l0aW5lcmFyeSwgc2V0SXRpbmVyYXJ5XSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW3RyYXZlbEFkdmFuY2UsIHNldFRyYXZlbEFkdmFuY2VdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbcGVyc29uYWxUcmF2ZWwsIHNldFBlcnNvbmFsVHJhdmVsXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2VtcGxveWVlU2lnbmF0dXJlLCBzZXRFbXBsb3llZVNpZ25hdHVyZV0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFttYW5hZ2VyU2lnbmF0dXJlLCBzZXRNYW5hZ2VyU2lnbmF0dXJlXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW3ByZXNpZGVudFNpZ25hdHVyZSwgc2V0UHJlc2lkZW50U2lnbmF0dXJlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVJbnRlcm5hdGlvbmFsVHJhdmVsQ2hhbmdlKGUpIHtcbiAgICAgICAgc2V0SW50ZXJuYXRpb25hbFRyYXZlbChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUcmlwUHVycG9zZUNoYW5nZShlKSB7XG4gICAgICAgIHNldFRyaXBQdXJwb3NlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktOCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS04IGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBzbTpzcGFjZS15LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgcHQtOCBzbTpzcGFjZS15LTUgc206cHQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlBlcnNvbmFsIEluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQZXJzb25hbEluZm8gdXNlcj17KHVzZXIpID8gdXNlciA6IG51bGx9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgcHQtOCBzbTpzcGFjZS15LTUgc206cHQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlRyaXAgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEludGVybmF0aW9uYWxUcmF2ZWwgb25DaGFuZ2U9eyhlKSA9PiB7aGFuZGxlSW50ZXJuYXRpb25hbFRyYXZlbENoYW5nZShlKX19Lz5cbiAgICAgICAgICAgICAgICAgICAgPFRyaXBQdXJwb3NlIG9uQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZVRyaXBQdXJwb3NlQ2hhbmdlKGUpfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRyaXBEdXJhdGlvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8SXRpbmVyYXJ5IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUcmF2ZWxBZHZhbmNlIC8+XG4gICAgICAgICAgICAgICAgICAgIDxQZXJzb25hbFRyYXZlbCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBwdC04IHNtOnNwYWNlLXktNSBzbTpwdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCI+QXBwcm92YWw8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcGxveWVlU2lnbmF0dXJlIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNYW5hZ2VyU2lnbmF0dXJlIC8+XG4gICAgICAgICAgICAgICAgICAgIDxQcmVzaWRlbnRTaWduYXR1cmUgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLXgtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgcHktMiBweC0zIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNTBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHB5LTIgcHgtMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbEF1dGgiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQZXJzb25hbEluZm8iLCJJbnRlcm5hdGlvbmFsVHJhdmVsIiwiVHJpcFB1cnBvc2UiLCJUcmlwRHVyYXRpb24iLCJJdGluZXJhcnkiLCJUcmF2ZWxBZHZhbmNlIiwiUGVyc29uYWxUcmF2ZWwiLCJFbXBsb3llZVNpZ25hdHVyZSIsIk1hbmFnZXJTaWduYXR1cmUiLCJQcmVzaWRlbnRTaWduYXR1cmUiLCJUcmF2ZWxBdXRoIiwidHlwZSIsInVzZXIiLCJkYXRhIiwicGVyc29uYWxJbmZvIiwibmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibnVtYmVyIiwiZGVwYXJ0bWVudCIsInBob25lIiwicmVxRGF0ZSIsIkRhdGUiLCJub3ciLCJpbnRlcm5hdGlvbmFsVHJhdmVsIiwic2V0SW50ZXJuYXRpb25hbFRyYXZlbCIsInRyaXBQdXJwb3NlIiwic2V0VHJpcFB1cnBvc2UiLCJ0cmlwRHVyYXRpb24iLCJzZXRUcmlwRHVyYXRpb24iLCJpdGluZXJhcnkiLCJzZXRJdGluZXJhcnkiLCJ0cmF2ZWxBZHZhbmNlIiwic2V0VHJhdmVsQWR2YW5jZSIsInBlcnNvbmFsVHJhdmVsIiwic2V0UGVyc29uYWxUcmF2ZWwiLCJlbXBsb3llZVNpZ25hdHVyZSIsInNldEVtcGxveWVlU2lnbmF0dXJlIiwibWFuYWdlclNpZ25hdHVyZSIsInNldE1hbmFnZXJTaWduYXR1cmUiLCJwcmVzaWRlbnRTaWduYXR1cmUiLCJzZXRQcmVzaWRlbnRTaWduYXR1cmUiLCJoYW5kbGVJbnRlcm5hdGlvbmFsVHJhdmVsQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVHJpcFB1cnBvc2VDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/travelAuth/travelAuth.js\n");

/***/ })

});