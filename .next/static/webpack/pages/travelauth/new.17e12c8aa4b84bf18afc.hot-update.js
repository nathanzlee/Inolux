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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sections_personalInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/personalInfo */ \"./components/travelAuth/sections/personalInfo.js\");\n/* harmony import */ var _sections_internationalTravel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/internationalTravel */ \"./components/travelAuth/sections/internationalTravel.js\");\n/* harmony import */ var _sections_tripPurpose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/tripPurpose */ \"./components/travelAuth/sections/tripPurpose.js\");\n/* harmony import */ var _sections_tripDuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/tripDuration */ \"./components/travelAuth/sections/tripDuration.js\");\n/* harmony import */ var _sections_itinerary_itinerary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/itinerary/itinerary */ \"./components/travelAuth/sections/itinerary/itinerary.js\");\n/* harmony import */ var _sections_travelAdvance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/travelAdvance */ \"./components/travelAuth/sections/travelAdvance.js\");\n/* harmony import */ var _sections_personalTravel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/personalTravel */ \"./components/travelAuth/sections/personalTravel.js\");\n/* harmony import */ var _sections_signature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/signature */ \"./components/travelAuth/sections/signature.js\");\n/* harmony import */ var _sections_notes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/notes */ \"./components/travelAuth/sections/notes.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travelAuth/travelAuth.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar TravelAuth = function TravelAuth(_ref) {\n  _s();\n\n  var type = _ref.type,\n      requester = _ref.requester,\n      viewer = _ref.viewer,\n      data = _ref.data;\n  // Requester is person who requested travel auth, viewer is person who is currently looking at it, data is travel auth data\n  // All possible situations\n  // 1. Creating new travel auth -> type == \"new\"\n  // mode = \"edit\", only show employee signature field, set all states to initial\n  // 2. Not approved yet, requester is viewing their own travel auth\n  // mode = \"edit\", show all signature fields (depending on international or not), set all states based on data \n  //3. Approved, requester, manager, or president is viewing travel auth \n  // mode = \"view\", show all signature fields (depending on international or not), set all states based on data\n  // 4. Not approved yet, direct manager is viewing employee's travel auth \n  // mode = \"authorize\", show all signature fields (depending on international or not), set all states based on data\n  // 5. Not approved yet, president (not direct manager) is viewing employee's travel auth \n  // mode = \"authorize\", show all signature fields , set all states based on data\n  var submitText, edit, signatures;\n\n  if (type == 'new') {\n    submitText = 'submit';\n    edit = true;\n    signatures = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_signature__WEBPACK_IMPORTED_MODULE_9__.default, {\n      label: 'Employee Signature',\n      user: requester,\n      onChange: handleEmployeeSignature\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, _this);\n  }\n\n  var personalInfo = data.personalInfo,\n      tripInfo = data.tripInfo,\n      approval = data.approval,\n      status = data.status;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      internationalTravel = _useState[0],\n      setInternationalTravel = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      tripPurpose = _useState2[0],\n      setTripPurpose = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    startDate: null,\n    endDate: null\n  }),\n      tripDuration = _useState3[0],\n      setTripDuration = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      itinerary = _useState4[0],\n      setItinerary = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      travelAdvance = _useState5[0],\n      setTravelAdvance = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      personalTravel = _useState6[0],\n      setPersonalTravel = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    user: null,\n    signature: '',\n    date: null\n  }),\n      employeeSignature = _useState7[0],\n      setEmployeeSignature = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    user: null,\n    signature: '',\n    date: null\n  }),\n      managerSignature = _useState8[0],\n      setManagerSignature = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    user: null,\n    signature: '',\n    date: null\n  }),\n      presidentSignature = _useState9[0],\n      setPresidentSignature = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      notes = _useState10[0],\n      setNotes = _useState10[1]; // const travelAuthData = {\n  //     personalInfo: personalInfo,\n  //     tripInfo: {\n  //         purpose: tripPurpose,\n  //         startDate: tripDuration.startDate,\n  //         endDate: tripDuration.endDate,\n  //         itinerary: itinerary,\n  //         travelAdv: travelAdvance,\n  //         personalTravel: personalTravel,\n  //         international: internationalTravel,\n  //     },\n  //     approval: {\n  //         approveBy: {\n  //             type: [mongoose.Schema.ObjectId],\n  //             ref: 'user'\n  //         },\n  //         employeeSig: {\n  //             user: {type: mongoose.Schema.ObjectId, ref: 'user'},\n  //             signature: {type: String, default: \"\"}, \n  //             date: {type: Date}\n  //         },\n  //         managerSig: {\n  //             user: {type: mongoose.Schema.ObjectId, ref: 'user'},\n  //             signature: {type: String, default: \"\"}, \n  //             date: {type: Date}\n  //         },\n  //         presidentSig: {\n  //             user: {type: mongoose.Schema.ObjectId, ref: 'user'},\n  //             signature: {type: String, default: \"\"}, \n  //             date: {type: Date}\n  //         },\n  //     },\n  //     notes: notes,\n  //     status: \"pending\"\n  // }\n\n\n  function handleInternationalTravelChange(e) {\n    setInternationalTravel(e.target.value);\n  }\n\n  function handleTripPurposeChange(e) {\n    setTripPurpose(e.target.value);\n  }\n\n  function handleTripDurationChange(data) {\n    setTripDuration(data);\n    console.log(data);\n  }\n\n  function handleItineraryChange(data) {\n    setItinerary(data);\n  }\n\n  function handleTravelAdvanceChange(data) {\n    setTravelAdvance(data);\n    console.log(data);\n  }\n\n  function handlePersonalTravelChange(data) {\n    setPersonalTravel(data);\n    console.log(data);\n  }\n\n  function handleEmployeeSignature(data) {\n    setEmployeeSignature(data);\n  }\n\n  function handleManagerSignature(data) {\n    setManagerSignature(data);\n  }\n\n  function handlePresidentSignature(data) {\n    setPresidentSignature(data);\n  }\n\n  function handleNotes(data) {\n    setNotes(data);\n  }\n\n  function handleCancel() {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/travel');\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"form\", {\n    className: \"space-y-8 divide-y divide-gray-200\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n      className: \"space-y-8 divide-y divide-gray-200 sm:space-y-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"h3\", {\n            className: \"text-base font-semibold leading-6 text-gray-900\",\n            children: \"Personal Information\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 145,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_personalInfo__WEBPACK_IMPORTED_MODULE_2__.default, {\n          user: requester ? requester : null\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"h3\", {\n            className: \"text-base font-semibold leading-6 text-gray-900\",\n            children: \"Trip Information\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 151,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_internationalTravel__WEBPACK_IMPORTED_MODULE_3__.default, {\n          onChange: function onChange(e) {\n            handleInternationalTravelChange(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_tripPurpose__WEBPACK_IMPORTED_MODULE_4__.default, {\n          onChange: function onChange(e) {\n            handleTripPurposeChange(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_tripDuration__WEBPACK_IMPORTED_MODULE_5__.default, {\n          onChange: handleTripDurationChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_itinerary_itinerary__WEBPACK_IMPORTED_MODULE_6__.default, {\n          data: itinerary,\n          onChange: handleItineraryChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_travelAdvance__WEBPACK_IMPORTED_MODULE_7__.default, {\n          onChange: handleTravelAdvanceChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_personalTravel__WEBPACK_IMPORTED_MODULE_8__.default, {\n          onChange: handlePersonalTravelChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"h3\", {\n            className: \"text-base font-semibold leading-6 text-gray-900\",\n            children: \"Approval\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 162,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 161,\n          columnNumber: 21\n        }, _this), signatures, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_sections_notes__WEBPACK_IMPORTED_MODULE_10__.default, {\n          onChange: handleNotes\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 168,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n      className: \"pt-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"flex justify-end gap-x-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: handleCancel,\n          className: \"rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50\",\n          children: \"Cancel\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 174,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          onClick: function onClick(e) {\n            handleSubmit(e);\n          },\n          className: \"inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n          children: \"Save\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 181,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 141,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TravelAuth, \"y7YgxSmEUU5FZSWxs76P2JFrDAs=\");\n\n_c = TravelAuth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TravelAuth);\n\nvar _c;\n\n$RefreshReg$(_c, \"TravelAuth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbEF1dGgvdHJhdmVsQXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNWSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxJQUFvQyxRQUFwQ0EsSUFBb0M7QUFBQSxNQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSxNQUFJQyxVQUFKLEVBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEI7O0FBQ0EsTUFBSU4sSUFBSSxJQUFJLEtBQVosRUFBbUI7QUFDZkksSUFBQUEsVUFBVSxHQUFHLFFBQWI7QUFDQUMsSUFBQUEsSUFBSSxHQUFHLElBQVA7QUFDQUMsSUFBQUEsVUFBVSxnQkFDTiwrREFBQyx3REFBRDtBQUFXLFdBQUssRUFBRSxvQkFBbEI7QUFBd0MsVUFBSSxFQUFFTCxTQUE5QztBQUF5RCxjQUFRLEVBQUVNO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUdIOztBQUdELE1BQVFDLFlBQVIsR0FBcURMLElBQXJELENBQVFLLFlBQVI7QUFBQSxNQUFzQkMsUUFBdEIsR0FBcUROLElBQXJELENBQXNCTSxRQUF0QjtBQUFBLE1BQWdDQyxRQUFoQyxHQUFxRFAsSUFBckQsQ0FBZ0NPLFFBQWhDO0FBQUEsTUFBMENDLE1BQTFDLEdBQXFEUixJQUFyRCxDQUEwQ1EsTUFBMUM7O0FBQ0Esa0JBQXNEeEIsK0NBQVEsQ0FBQyxJQUFELENBQTlEO0FBQUEsTUFBT3lCLG1CQUFQO0FBQUEsTUFBNEJDLHNCQUE1Qjs7QUFDQSxtQkFBc0Mx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QUFFSSxpQkFBTyxFQUFFQyxZQUZiO0FBR0ksbUJBQVMsRUFBQyw4SEFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVFJO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxpQkFBTyxFQUFFLGlCQUFDYixDQUFELEVBQU87QUFBQ2UsWUFBQUEsWUFBWSxDQUFDZixDQUFELENBQVo7QUFBZ0IsV0FGckM7QUFHSSxtQkFBUyxFQUFDLDRPQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvREgsQ0FuTEQ7O0dBQU12Qzs7S0FBQUE7QUFzTE4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWxBdXRoL3RyYXZlbEF1dGguanM/OTNkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFBlcnNvbmFsSW5mbyBmcm9tICcuL3NlY3Rpb25zL3BlcnNvbmFsSW5mbydcbmltcG9ydCBJbnRlcm5hdGlvbmFsVHJhdmVsIGZyb20gJy4vc2VjdGlvbnMvaW50ZXJuYXRpb25hbFRyYXZlbCdcbmltcG9ydCBUcmlwUHVycG9zZSBmcm9tICcuL3NlY3Rpb25zL3RyaXBQdXJwb3NlJ1xuaW1wb3J0IFRyaXBEdXJhdGlvbiBmcm9tICcuL3NlY3Rpb25zL3RyaXBEdXJhdGlvbidcbmltcG9ydCBJdGluZXJhcnkgZnJvbSAnLi9zZWN0aW9ucy9pdGluZXJhcnkvaXRpbmVyYXJ5J1xuaW1wb3J0IFRyYXZlbEFkdmFuY2UgZnJvbSAnLi9zZWN0aW9ucy90cmF2ZWxBZHZhbmNlJ1xuaW1wb3J0IFBlcnNvbmFsVHJhdmVsIGZyb20gJy4vc2VjdGlvbnMvcGVyc29uYWxUcmF2ZWwnXG5pbXBvcnQgU2lnbmF0dXJlIGZyb20gJy4vc2VjdGlvbnMvc2lnbmF0dXJlJ1xuaW1wb3J0IE5vdGVzIGZyb20gJy4vc2VjdGlvbnMvbm90ZXMnXG5cbmNvbnN0IFRyYXZlbEF1dGggPSAoeyB0eXBlLCByZXF1ZXN0ZXIsIHZpZXdlciwgZGF0YSB9KSA9PiB7XG4gICAgLy8gUmVxdWVzdGVyIGlzIHBlcnNvbiB3aG8gcmVxdWVzdGVkIHRyYXZlbCBhdXRoLCB2aWV3ZXIgaXMgcGVyc29uIHdobyBpcyBjdXJyZW50bHkgbG9va2luZyBhdCBpdCwgZGF0YSBpcyB0cmF2ZWwgYXV0aCBkYXRhXG4gICAgLy8gQWxsIHBvc3NpYmxlIHNpdHVhdGlvbnNcbiAgICAvLyAxLiBDcmVhdGluZyBuZXcgdHJhdmVsIGF1dGggLT4gdHlwZSA9PSBcIm5ld1wiXG4gICAgLy8gbW9kZSA9IFwiZWRpdFwiLCBvbmx5IHNob3cgZW1wbG95ZWUgc2lnbmF0dXJlIGZpZWxkLCBzZXQgYWxsIHN0YXRlcyB0byBpbml0aWFsXG5cbiAgICAvLyAyLiBOb3QgYXBwcm92ZWQgeWV0LCByZXF1ZXN0ZXIgaXMgdmlld2luZyB0aGVpciBvd24gdHJhdmVsIGF1dGhcbiAgICAvLyBtb2RlID0gXCJlZGl0XCIsIHNob3cgYWxsIHNpZ25hdHVyZSBmaWVsZHMgKGRlcGVuZGluZyBvbiBpbnRlcm5hdGlvbmFsIG9yIG5vdCksIHNldCBhbGwgc3RhdGVzIGJhc2VkIG9uIGRhdGEgXG5cbiAgICAvLzMuIEFwcHJvdmVkLCByZXF1ZXN0ZXIsIG1hbmFnZXIsIG9yIHByZXNpZGVudCBpcyB2aWV3aW5nIHRyYXZlbCBhdXRoIFxuICAgIC8vIG1vZGUgPSBcInZpZXdcIiwgc2hvdyBhbGwgc2lnbmF0dXJlIGZpZWxkcyAoZGVwZW5kaW5nIG9uIGludGVybmF0aW9uYWwgb3Igbm90KSwgc2V0IGFsbCBzdGF0ZXMgYmFzZWQgb24gZGF0YVxuXG4gICAgLy8gNC4gTm90IGFwcHJvdmVkIHlldCwgZGlyZWN0IG1hbmFnZXIgaXMgdmlld2luZyBlbXBsb3llZSdzIHRyYXZlbCBhdXRoIFxuICAgIC8vIG1vZGUgPSBcImF1dGhvcml6ZVwiLCBzaG93IGFsbCBzaWduYXR1cmUgZmllbGRzIChkZXBlbmRpbmcgb24gaW50ZXJuYXRpb25hbCBvciBub3QpLCBzZXQgYWxsIHN0YXRlcyBiYXNlZCBvbiBkYXRhXG5cbiAgICAvLyA1LiBOb3QgYXBwcm92ZWQgeWV0LCBwcmVzaWRlbnQgKG5vdCBkaXJlY3QgbWFuYWdlcikgaXMgdmlld2luZyBlbXBsb3llZSdzIHRyYXZlbCBhdXRoIFxuICAgIC8vIG1vZGUgPSBcImF1dGhvcml6ZVwiLCBzaG93IGFsbCBzaWduYXR1cmUgZmllbGRzICwgc2V0IGFsbCBzdGF0ZXMgYmFzZWQgb24gZGF0YVxuICAgIGxldCBzdWJtaXRUZXh0LCBlZGl0LCBzaWduYXR1cmVzXG4gICAgaWYgKHR5cGUgPT0gJ25ldycpIHtcbiAgICAgICAgc3VibWl0VGV4dCA9ICdzdWJtaXQnXG4gICAgICAgIGVkaXQgPSB0cnVlXG4gICAgICAgIHNpZ25hdHVyZXMgPSAoXG4gICAgICAgICAgICA8U2lnbmF0dXJlIGxhYmVsPXsnRW1wbG95ZWUgU2lnbmF0dXJlJ30gdXNlcj17cmVxdWVzdGVyfSBvbkNoYW5nZT17aGFuZGxlRW1wbG95ZWVTaWduYXR1cmV9IC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgIFxuICAgIGNvbnN0IHsgcGVyc29uYWxJbmZvLCB0cmlwSW5mbywgYXBwcm92YWwsIHN0YXR1cyB9ID0gZGF0YSBcbiAgICBjb25zdCBbaW50ZXJuYXRpb25hbFRyYXZlbCwgc2V0SW50ZXJuYXRpb25hbFRyYXZlbF0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFt0cmlwUHVycG9zZSwgc2V0VHJpcFB1cnBvc2VdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3RyaXBEdXJhdGlvbiwgc2V0VHJpcER1cmF0aW9uXSA9IHVzZVN0YXRlKHtzdGFydERhdGU6IG51bGwsIGVuZERhdGU6IG51bGx9KVxuICAgIGNvbnN0IFtpdGluZXJhcnksIHNldEl0aW5lcmFyeV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3RyYXZlbEFkdmFuY2UsIHNldFRyYXZlbEFkdmFuY2VdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtwZXJzb25hbFRyYXZlbCwgc2V0UGVyc29uYWxUcmF2ZWxdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtlbXBsb3llZVNpZ25hdHVyZSwgc2V0RW1wbG95ZWVTaWduYXR1cmVdID0gdXNlU3RhdGUoe3VzZXI6IG51bGwsIHNpZ25hdHVyZTogJycsIGRhdGU6IG51bGx9KVxuICAgIGNvbnN0IFttYW5hZ2VyU2lnbmF0dXJlLCBzZXRNYW5hZ2VyU2lnbmF0dXJlXSA9IHVzZVN0YXRlKHt1c2VyOiBudWxsLCBzaWduYXR1cmU6ICcnLCBkYXRlOiBudWxsfSlcbiAgICBjb25zdCBbcHJlc2lkZW50U2lnbmF0dXJlLCBzZXRQcmVzaWRlbnRTaWduYXR1cmVdID0gdXNlU3RhdGUoe3VzZXI6IG51bGwsIHNpZ25hdHVyZTogJycsIGRhdGU6IG51bGx9KVxuICAgIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoJycpXG4gICAgLy8gY29uc3QgdHJhdmVsQXV0aERhdGEgPSB7XG4gICAgLy8gICAgIHBlcnNvbmFsSW5mbzogcGVyc29uYWxJbmZvLFxuICAgIC8vICAgICB0cmlwSW5mbzoge1xuICAgIC8vICAgICAgICAgcHVycG9zZTogdHJpcFB1cnBvc2UsXG4gICAgLy8gICAgICAgICBzdGFydERhdGU6IHRyaXBEdXJhdGlvbi5zdGFydERhdGUsXG4gICAgLy8gICAgICAgICBlbmREYXRlOiB0cmlwRHVyYXRpb24uZW5kRGF0ZSxcbiAgICAvLyAgICAgICAgIGl0aW5lcmFyeTogaXRpbmVyYXJ5LFxuICAgIC8vICAgICAgICAgdHJhdmVsQWR2OiB0cmF2ZWxBZHZhbmNlLFxuICAgIC8vICAgICAgICAgcGVyc29uYWxUcmF2ZWw6IHBlcnNvbmFsVHJhdmVsLFxuICAgIC8vICAgICAgICAgaW50ZXJuYXRpb25hbDogaW50ZXJuYXRpb25hbFRyYXZlbCxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgYXBwcm92YWw6IHtcbiAgICAvLyAgICAgICAgIGFwcHJvdmVCeToge1xuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFttb25nb29zZS5TY2hlbWEuT2JqZWN0SWRdLFxuICAgIC8vICAgICAgICAgICAgIHJlZjogJ3VzZXInXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgZW1wbG95ZWVTaWc6IHtcbiAgICAvLyAgICAgICAgICAgICB1c2VyOiB7dHlwZTogbW9uZ29vc2UuU2NoZW1hLk9iamVjdElkLCByZWY6ICd1c2VyJ30sXG4gICAgLy8gICAgICAgICAgICAgc2lnbmF0dXJlOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwifSwgXG4gICAgLy8gICAgICAgICAgICAgZGF0ZToge3R5cGU6IERhdGV9XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgbWFuYWdlclNpZzoge1xuICAgIC8vICAgICAgICAgICAgIHVzZXI6IHt0eXBlOiBtb25nb29zZS5TY2hlbWEuT2JqZWN0SWQsIHJlZjogJ3VzZXInfSxcbiAgICAvLyAgICAgICAgICAgICBzaWduYXR1cmU6IHt0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCJ9LCBcbiAgICAvLyAgICAgICAgICAgICBkYXRlOiB7dHlwZTogRGF0ZX1cbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBwcmVzaWRlbnRTaWc6IHtcbiAgICAvLyAgICAgICAgICAgICB1c2VyOiB7dHlwZTogbW9uZ29vc2UuU2NoZW1hLk9iamVjdElkLCByZWY6ICd1c2VyJ30sXG4gICAgLy8gICAgICAgICAgICAgc2lnbmF0dXJlOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwifSwgXG4gICAgLy8gICAgICAgICAgICAgZGF0ZToge3R5cGU6IERhdGV9XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBub3Rlczogbm90ZXMsXG4gICAgLy8gICAgIHN0YXR1czogXCJwZW5kaW5nXCJcbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVJbnRlcm5hdGlvbmFsVHJhdmVsQ2hhbmdlKGUpIHtcbiAgICAgICAgc2V0SW50ZXJuYXRpb25hbFRyYXZlbChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUcmlwUHVycG9zZUNoYW5nZShlKSB7XG4gICAgICAgIHNldFRyaXBQdXJwb3NlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRyaXBEdXJhdGlvbkNoYW5nZShkYXRhKSB7XG4gICAgICAgIHNldFRyaXBEdXJhdGlvbihkYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUl0aW5lcmFyeUNoYW5nZShkYXRhKSB7XG4gICAgICAgIHNldEl0aW5lcmFyeShkYXRhKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRyYXZlbEFkdmFuY2VDaGFuZ2UoZGF0YSkge1xuICAgICAgICBzZXRUcmF2ZWxBZHZhbmNlKGRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUGVyc29uYWxUcmF2ZWxDaGFuZ2UoZGF0YSkge1xuICAgICAgICBzZXRQZXJzb25hbFRyYXZlbChkYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVtcGxveWVlU2lnbmF0dXJlKGRhdGEpIHtcbiAgICAgICAgc2V0RW1wbG95ZWVTaWduYXR1cmUoZGF0YSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNYW5hZ2VyU2lnbmF0dXJlKGRhdGEpIHtcbiAgICAgICAgc2V0TWFuYWdlclNpZ25hdHVyZShkYXRhKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVByZXNpZGVudFNpZ25hdHVyZShkYXRhKSB7XG4gICAgICAgIHNldFByZXNpZGVudFNpZ25hdHVyZShkYXRhKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU5vdGVzKGRhdGEpIHtcbiAgICAgICAgc2V0Tm90ZXMoZGF0YSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDYW5jZWwoKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvdHJhdmVsJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktOCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS04IGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBzbTpzcGFjZS15LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgcHQtOCBzbTpzcGFjZS15LTUgc206cHQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlBlcnNvbmFsIEluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICA8UGVyc29uYWxJbmZvIHVzZXI9eyhyZXF1ZXN0ZXIpID8gcmVxdWVzdGVyIDogbnVsbH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBwdC04IHNtOnNwYWNlLXktNSBzbTpwdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCI+VHJpcCBJbmZvcm1hdGlvbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SW50ZXJuYXRpb25hbFRyYXZlbCBvbkNoYW5nZT17KGUpID0+IHtoYW5kbGVJbnRlcm5hdGlvbmFsVHJhdmVsQ2hhbmdlKGUpfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRyaXBQdXJwb3NlIG9uQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZVRyaXBQdXJwb3NlQ2hhbmdlKGUpfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRyaXBEdXJhdGlvbiBvbkNoYW5nZT17aGFuZGxlVHJpcER1cmF0aW9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8SXRpbmVyYXJ5IGRhdGE9e2l0aW5lcmFyeX0gb25DaGFuZ2U9e2hhbmRsZUl0aW5lcmFyeUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8VHJhdmVsQWR2YW5jZSBvbkNoYW5nZT17aGFuZGxlVHJhdmVsQWR2YW5jZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFBlcnNvbmFsVHJhdmVsIG9uQ2hhbmdlPXtoYW5kbGVQZXJzb25hbFRyYXZlbENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgcHQtOCBzbTpzcGFjZS15LTUgc206cHQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPkFwcHJvdmFsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8U2lnbmF0dXJlIGxhYmVsPXsnRW1wbG95ZWUgU2lnbmF0dXJlJ30gdXNlcj17cmVxdWVzdGVyfSBvbkNoYW5nZT17aGFuZGxlRW1wbG95ZWVTaWduYXR1cmV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTaWduYXR1cmUgbGFiZWw9eydNYW5hZ2VyIFNpZ25hdHVyZSd9IHVzZXI9e3JlcXVlc3Rlcn0gb25DaGFuZ2U9e2hhbmRsZU1hbmFnZXJTaWduYXR1cmV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTaWduYXR1cmUgbGFiZWw9eydQcmVzaWRlbnQgU2lnbmF0dXJlJ30gdXNlcj17cmVxdWVzdGVyfSBvbkNoYW5nZT17aGFuZGxlUHJlc2lkZW50U2lnbmF0dXJlfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAge3NpZ25hdHVyZXN9XG4gICAgICAgICAgICAgICAgICAgIDxOb3RlcyBvbkNoYW5nZT17aGFuZGxlTm90ZXN9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLXgtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgcHktMiBweC0zIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNTBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtoYW5kbGVTdWJtaXQoZSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHB5LTIgcHgtMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbEF1dGgiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJSb3V0ZXIiLCJQZXJzb25hbEluZm8iLCJJbnRlcm5hdGlvbmFsVHJhdmVsIiwiVHJpcFB1cnBvc2UiLCJUcmlwRHVyYXRpb24iLCJJdGluZXJhcnkiLCJUcmF2ZWxBZHZhbmNlIiwiUGVyc29uYWxUcmF2ZWwiLCJTaWduYXR1cmUiLCJOb3RlcyIsIlRyYXZlbEF1dGgiLCJ0eXBlIiwicmVxdWVzdGVyIiwidmlld2VyIiwiZGF0YSIsInN1Ym1pdFRleHQiLCJlZGl0Iiwic2lnbmF0dXJlcyIsImhhbmRsZUVtcGxveWVlU2lnbmF0dXJlIiwicGVyc29uYWxJbmZvIiwidHJpcEluZm8iLCJhcHByb3ZhbCIsInN0YXR1cyIsImludGVybmF0aW9uYWxUcmF2ZWwiLCJzZXRJbnRlcm5hdGlvbmFsVHJhdmVsIiwidHJpcFB1cnBvc2UiLCJzZXRUcmlwUHVycG9zZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ0cmlwRHVyYXRpb24iLCJzZXRUcmlwRHVyYXRpb24iLCJpdGluZXJhcnkiLCJzZXRJdGluZXJhcnkiLCJ0cmF2ZWxBZHZhbmNlIiwic2V0VHJhdmVsQWR2YW5jZSIsInBlcnNvbmFsVHJhdmVsIiwic2V0UGVyc29uYWxUcmF2ZWwiLCJ1c2VyIiwic2lnbmF0dXJlIiwiZGF0ZSIsImVtcGxveWVlU2lnbmF0dXJlIiwic2V0RW1wbG95ZWVTaWduYXR1cmUiLCJtYW5hZ2VyU2lnbmF0dXJlIiwic2V0TWFuYWdlclNpZ25hdHVyZSIsInByZXNpZGVudFNpZ25hdHVyZSIsInNldFByZXNpZGVudFNpZ25hdHVyZSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJoYW5kbGVJbnRlcm5hdGlvbmFsVHJhdmVsQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVHJpcFB1cnBvc2VDaGFuZ2UiLCJoYW5kbGVUcmlwRHVyYXRpb25DaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSXRpbmVyYXJ5Q2hhbmdlIiwiaGFuZGxlVHJhdmVsQWR2YW5jZUNoYW5nZSIsImhhbmRsZVBlcnNvbmFsVHJhdmVsQ2hhbmdlIiwiaGFuZGxlTWFuYWdlclNpZ25hdHVyZSIsImhhbmRsZVByZXNpZGVudFNpZ25hdHVyZSIsImhhbmRsZU5vdGVzIiwiaGFuZGxlQ2FuY2VsIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/travelAuth/travelAuth.js\n");

/***/ })

});