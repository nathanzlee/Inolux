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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _travel_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../travel/row */ \"./components/travel/row.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travel/travelAuths.js\",\n    _this = undefined;\n\n // const TravelAuths = ({ data }) => {\n//     return (!data || data.length == 0) ? \n//     (\n//         <div class=\"h-[400px] w-[100%] flex flex-col justify-center text-center\">\n//             <h2 class=\"text-3xl text-gray-300\">No Travel Authorizations</h2>\n//         </div>\n//     )\n//     :\n//     (\n//         <div class=\"flex flex-col items-center w-full\">\n//             <div class=\"w-[70%] grid grid-cols-5 border-solid border-b-2 border-[blue] mt-10\">\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Requester</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Manager</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Requested</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Approved</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Status</div>\n//             </div>\n//             <div class=\"w-[70%] h-[500px] overflow-y-auto\">\n//                 {data.map(({ name, reqDate, managerSig, presidentSig, status}) => {\n//                     const approvedDate = (presidentSig.date == null) ? new Date(managerSig.date).toLocaleDateString() : new Date(Math.max(new Date(managerSig.date), new Date(presidentSig.date))).toLocaleDateString()\n//                     return (\n//                         <Row requester={name} manager={managerSig.user.firstName + ' ' + managerSig.user.lastName} reqDate={new Date(reqDate).toLocaleDateString()} approvedDate={approvedDate} status={status}/>\n//                     )\n//                 })}\n//             </div>\n//         </div>\n//     )\n// }\n\n\nvar people = [{\n  name: 'Lindsay Walton',\n  title: 'Front-end Developer',\n  department: 'Optimization',\n  email: 'lindsay.walton@example.com',\n  role: 'Member',\n  image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'\n} // More people...\n];\n\nvar TravelAuths = function TravelAuths(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"mt-8 flow-root\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n          className: \"min-w-full divide-y divide-gray-300\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                scope: \"col\",\n                className: \"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0\",\n                children: \"Name\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                scope: \"col\",\n                className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n                children: \"Manager\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                scope: \"col\",\n                className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n                children: \"Requested\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                scope: \"col\",\n                className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n                children: \"Approved\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                scope: \"col\",\n                className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n                children: \"Status\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n            className: \"divide-y divide-gray-200 bg-white\",\n            children: data.map(function (_ref2) {\n              var _id = _ref2._id,\n                  name = _ref2.name,\n                  reqDate = _ref2.reqDate,\n                  managerSig = _ref2.managerSig,\n                  presidentSig = _ref2.presidentSig,\n                  status = _ref2.status;\n              var approvedDate = presidentSig.date == null ? new Date(managerSig.date).toLocaleDateString() : new Date(Math.max(new Date(managerSig.date), new Date(presidentSig.date))).toLocaleDateString();\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_travel_row__WEBPACK_IMPORTED_MODULE_0__.default, {\n                requester: name,\n                manager: managerSig.user.firstName + ' ' + managerSig.user.lastName,\n                reqDate: new Date(reqDate).toLocaleDateString(),\n                approvedDate: approvedDate,\n                status: status\n              }, _id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 37\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = TravelAuths;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TravelAuths);\n\nvar _c;\n\n$RefreshReg$(_c, \"TravelAuths\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkUsUUFBM0Y7QUFBcUcsdUJBQU8sRUFBRSxJQUFJTixJQUFKLENBQVNOLE9BQVQsRUFBa0JPLGtCQUFsQixFQUE5RztBQUFzSiw0QkFBWSxFQUFFSCxZQUFwSztBQUFrTCxzQkFBTSxFQUFFRDtBQUExTCxpQkFBVUosR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBR0gsYUFMQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUNILENBdENEOztLQUFNSDtBQXdDTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RyYXZlbC90cmF2ZWxBdXRocy5qcz85OTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3cgZnJvbSAnLi4vdHJhdmVsL3JvdydcblxuLy8gY29uc3QgVHJhdmVsQXV0aHMgPSAoeyBkYXRhIH0pID0+IHtcbi8vICAgICByZXR1cm4gKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09IDApID8gXG4vLyAgICAgKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiaC1bNDAwcHhdIHctWzEwMCVdIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbi8vICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtM3hsIHRleHQtZ3JheS0zMDBcIj5ObyBUcmF2ZWwgQXV0aG9yaXphdGlvbnM8L2gyPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyAgICAgOlxuLy8gICAgIChcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctZnVsbFwiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctWzcwJV0gZ3JpZCBncmlkLWNvbHMtNSBib3JkZXItc29saWQgYm9yZGVyLWItMiBib3JkZXItW2JsdWVdIG10LTEwXCI+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMlwiPlJlcXVlc3RlcjwvZGl2PlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTJcIj5NYW5hZ2VyPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMlwiPlJlcXVlc3RlZDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTJcIj5BcHByb3ZlZDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTJcIj5TdGF0dXM8L2Rpdj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctWzcwJV0gaC1bNTAwcHhdIG92ZXJmbG93LXktYXV0b1wiPlxuLy8gICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoeyBuYW1lLCByZXFEYXRlLCBtYW5hZ2VyU2lnLCBwcmVzaWRlbnRTaWcsIHN0YXR1c30pID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwcm92ZWREYXRlID0gKHByZXNpZGVudFNpZy5kYXRlID09IG51bGwpID8gbmV3IERhdGUobWFuYWdlclNpZy5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKSA6IG5ldyBEYXRlKE1hdGgubWF4KG5ldyBEYXRlKG1hbmFnZXJTaWcuZGF0ZSksIG5ldyBEYXRlKHByZXNpZGVudFNpZy5kYXRlKSkpLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHJlcXVlc3Rlcj17bmFtZX0gbWFuYWdlcj17bWFuYWdlclNpZy51c2VyLmZpcnN0TmFtZSArICcgJyArIG1hbmFnZXJTaWcudXNlci5sYXN0TmFtZX0gcmVxRGF0ZT17bmV3IERhdGUocmVxRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IGFwcHJvdmVkRGF0ZT17YXBwcm92ZWREYXRlfSBzdGF0dXM9e3N0YXR1c30vPlxuLy8gICAgICAgICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICAgICAgfSl9XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuLy8gICAgIClcbi8vIH1cbmNvbnN0IHBlb3BsZSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnTGluZHNheSBXYWx0b24nLFxuICAgICAgdGl0bGU6ICdGcm9udC1lbmQgRGV2ZWxvcGVyJyxcbiAgICAgIGRlcGFydG1lbnQ6ICdPcHRpbWl6YXRpb24nLFxuICAgICAgZW1haWw6ICdsaW5kc2F5LndhbHRvbkBleGFtcGxlLmNvbScsXG4gICAgICByb2xlOiAnTWVtYmVyJyxcbiAgICAgIGltYWdlOlxuICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTc4NDE5MDUyNDAtNDcyOTg4YmFiZGY5P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJyxcbiAgICB9LFxuICAgIC8vIE1vcmUgcGVvcGxlLi4uXG4gIF1cbmNvbnN0IFRyYXZlbEF1dGhzID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGZsb3ctcm9vdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXktMiAtbXgtNCBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgbGc6LW14LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtaW4tdy1mdWxsIHB5LTIgYWxpZ24tbWlkZGxlIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB5LTMuNSBwbC00IHByLTMgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHNtOnBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwcm92ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHsgX2lkLCBuYW1lLCByZXFEYXRlLCBtYW5hZ2VyU2lnLCBwcmVzaWRlbnRTaWcsIHN0YXR1cyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcHJvdmVkRGF0ZSA9IChwcmVzaWRlbnRTaWcuZGF0ZSA9PSBudWxsKSA/IG5ldyBEYXRlKG1hbmFnZXJTaWcuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOiBuZXcgRGF0ZShNYXRoLm1heChuZXcgRGF0ZShtYW5hZ2VyU2lnLmRhdGUpLCBuZXcgRGF0ZShwcmVzaWRlbnRTaWcuZGF0ZSkpKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBrZXk9e19pZH0gcmVxdWVzdGVyPXtuYW1lfSBtYW5hZ2VyPXttYW5hZ2VyU2lnLnVzZXIuZmlyc3ROYW1lICsgJyAnICsgbWFuYWdlclNpZy51c2VyLmxhc3ROYW1lfSByZXFEYXRlPXtuZXcgRGF0ZShyZXFEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX0gYXBwcm92ZWREYXRlPXthcHByb3ZlZERhdGV9IHN0YXR1cz17c3RhdHVzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxBdXRocyJdLCJuYW1lcyI6WyJSb3ciLCJwZW9wbGUiLCJuYW1lIiwidGl0bGUiLCJkZXBhcnRtZW50IiwiZW1haWwiLCJyb2xlIiwiaW1hZ2UiLCJUcmF2ZWxBdXRocyIsImRhdGEiLCJtYXAiLCJfaWQiLCJyZXFEYXRlIiwibWFuYWdlclNpZyIsInByZXNpZGVudFNpZyIsInN0YXR1cyIsImFwcHJvdmVkRGF0ZSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiTWF0aCIsIm1heCIsInVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travel/travelAuths.js\n");

/***/ })

});