"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/travel/travelauth",{

/***/ "./components/travel/travelAuths.js":
/*!******************************************!*\
  !*** ./components/travel/travelAuths.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _travel_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../travel/row */ \"./components/travel/row.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travel/travelAuths.js\",\n    _this = undefined;\n\n\n\n\nvar TravelAuths = function TravelAuths(_ref) {\n  var user = _ref.user,\n      data = _ref.data,\n      loading = _ref.loading;\n  console.log(data);\n  return !data || data.length == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"h-[600px] flex flex-col justify-center items-center border-dashed border-2 border-gray-300 rounded-md mt-8 p-4\",\n    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      \"class\": \"text-3xl text-gray-300\",\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 27\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      \"class\": \"text-3xl text-gray-300\",\n      children: \"No Travel Authorizations\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 79\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg mt-5 max-h-[600px] overflow-y-auto\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n      className: \"min-w-full divide-y divide-gray-300\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n        className: \"bg-gray-50 sticky top-0 z-10\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6\",\n            children: \"Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n            children: \"Manager\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n            children: \"Requested\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n            children: \"Approved\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n            children: \"Status\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n            scope: \"col\",\n            className: \"relative py-3.5 pl-3 pr-4 sm:pr-6\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n              className: \"sr-only\",\n              children: \"View\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n        className: \"divide-y divide-gray-200 bg-white\",\n        children: data.map(function (_ref2) {\n          var _id = _ref2._id,\n              name = _ref2.name,\n              reqDate = _ref2.reqDate,\n              managerSig = _ref2.managerSig,\n              presidentSig = _ref2.presidentSig,\n              status = _ref2.status;\n          var approvedDate;\n\n          if (presidentSig == null) {\n            approvedDate = managerSig.date == null ? '--' : new Date(managerSig.date).toLocaleDateString();\n          } else {\n            approvedDate = managerSig.date == null || presidentSig.date == null ? '--' : new Date(Math.max(new Date(managerSig.date), new Date(presidentSig.date))).toLocaleDateString();\n          }\n\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_travel_row__WEBPACK_IMPORTED_MODULE_0__.default, {\n            id: _id,\n            requester: name,\n            manager: managerSig.user.firstName + ' ' + managerSig.user.lastName,\n            reqDate: new Date(reqDate).toLocaleDateString(),\n            approvedDate: approvedDate,\n            status: status,\n            type: name == user.firstName + ' ' + user.lastName ? 'View' : 'Authorize'\n          }, _id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 29\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = TravelAuths;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TravelAuths);\n\nvar _c;\n\n$RefreshReg$(_c, \"TravelAuths\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLEdBQUwsQ0FBUyxJQUFJSCxJQUFKLENBQVNMLFVBQVUsQ0FBQ0ksSUFBcEIsQ0FBVCxFQUFvQyxJQUFJQyxJQUFKLENBQVNKLFlBQVksQ0FBQ0csSUFBdEIsQ0FBcEMsQ0FBVCxFQUEyRUUsa0JBQTNFLEVBQS9FO0FBQ0g7O0FBRUQsOEJBQ0ksOERBQUMsZ0RBQUQ7QUFBZSxjQUFFLEVBQUVULEdBQW5CO0FBQXdCLHFCQUFTLEVBQUVDLElBQW5DO0FBQXlDLG1CQUFPLEVBQUVFLFVBQVUsQ0FBQ1YsSUFBWCxDQUFnQm1CLFNBQWhCLEdBQTRCLEdBQTVCLEdBQWtDVCxVQUFVLENBQUNWLElBQVgsQ0FBZ0JvQixRQUFwRztBQUE4RyxtQkFBTyxFQUFFLElBQUlMLElBQUosQ0FBU04sT0FBVCxFQUFrQk8sa0JBQWxCLEVBQXZIO0FBQStKLHdCQUFZLEVBQUVILFlBQTdLO0FBQTJMLGtCQUFNLEVBQUVELE1BQW5NO0FBQTJNLGdCQUFJLEVBQUdKLElBQUksSUFBSVIsSUFBSSxDQUFDbUIsU0FBTCxHQUFpQixHQUFqQixHQUF1Qm5CLElBQUksQ0FBQ29CLFFBQXJDLEdBQWlELE1BQWpELEdBQTBEO0FBQTNRLGFBQVViLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUdILFNBWEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSSjtBQWlESCxDQW5ERDs7S0FBTVI7QUFxRE4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWwvdHJhdmVsQXV0aHMuanM/OTkzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm93IGZyb20gJy4uL3RyYXZlbC9yb3cnXG5cbmNvbnN0IFRyYXZlbEF1dGhzID0gKHsgdXNlciwgZGF0YSwgbG9hZGluZyB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09IDApID9cbiAgICAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNjAwcHhdIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgbXQtOCBwLTRcIj5cbiAgICAgICAgICAgIHsobG9hZGluZykgPyAoPGgxIGNsYXNzPVwidGV4dC0zeGwgdGV4dC1ncmF5LTMwMFwiPkxvYWRpbmc8L2gxPikgOiAoPGgxIGNsYXNzPVwidGV4dC0zeGwgdGV4dC1ncmF5LTMwMFwiPk5vIFRyYXZlbCBBdXRob3JpemF0aW9uczwvaDE+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIDpcbiAgICAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBzbTpyb3VuZGVkLWxnIG10LTUgbWF4LWgtWzYwMHB4XSBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHN0aWNreSB0b3AtMCB6LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB5LTMuNSBwbC00IHByLTMgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHNtOnBsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcHJvdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMy41IHBsLTMgcHItNCBzbTpwci02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlZpZXc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHsgX2lkLCBuYW1lLCByZXFEYXRlLCBtYW5hZ2VyU2lnLCBwcmVzaWRlbnRTaWcsIHN0YXR1cyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXBwcm92ZWREYXRlIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXNpZGVudFNpZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwcm92ZWREYXRlID0gKG1hbmFnZXJTaWcuZGF0ZSA9PSBudWxsKSA/ICctLScgOiBuZXcgRGF0ZShtYW5hZ2VyU2lnLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmVkRGF0ZSA9IChtYW5hZ2VyU2lnLmRhdGUgPT0gbnVsbCB8fCBwcmVzaWRlbnRTaWcuZGF0ZSA9PSBudWxsKSA/ICctLScgOiBuZXcgRGF0ZShNYXRoLm1heChuZXcgRGF0ZShtYW5hZ2VyU2lnLmRhdGUpLCBuZXcgRGF0ZShwcmVzaWRlbnRTaWcuZGF0ZSkpKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cga2V5PXtfaWR9IGlkPXtfaWR9IHJlcXVlc3Rlcj17bmFtZX0gbWFuYWdlcj17bWFuYWdlclNpZy51c2VyLmZpcnN0TmFtZSArICcgJyArIG1hbmFnZXJTaWcudXNlci5sYXN0TmFtZX0gcmVxRGF0ZT17bmV3IERhdGUocmVxRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IGFwcHJvdmVkRGF0ZT17YXBwcm92ZWREYXRlfSBzdGF0dXM9e3N0YXR1c30gdHlwZT17KG5hbWUgPT0gdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lKSA/ICdWaWV3JyA6ICdBdXRob3JpemUnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxBdXRocyJdLCJuYW1lcyI6WyJSb3ciLCJUcmF2ZWxBdXRocyIsInVzZXIiLCJkYXRhIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJfaWQiLCJuYW1lIiwicmVxRGF0ZSIsIm1hbmFnZXJTaWciLCJwcmVzaWRlbnRTaWciLCJzdGF0dXMiLCJhcHByb3ZlZERhdGUiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIk1hdGgiLCJtYXgiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travel/travelAuths.js\n");

/***/ })

});