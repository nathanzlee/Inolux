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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _travel_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../travel/row */ \"./components/travel/row.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travel/travelAuths.js\",\n    _this = undefined;\n\n // const TravelAuths = ({ data }) => {\n//     return (!data || data.length == 0) ? \n//     (\n//         <div class=\"h-[400px] w-[100%] flex flex-col justify-center text-center\">\n//             <h2 class=\"text-3xl text-gray-300\">No Travel Authorizations</h2>\n//         </div>\n//     )\n//     :\n//     (\n//         <div class=\"flex flex-col items-center w-full\">\n//             <div class=\"w-[70%] grid grid-cols-5 border-solid border-b-2 border-[blue] mt-10\">\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Requester</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Manager</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Requested</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Approved</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Status</div>\n//             </div>\n//             <div class=\"w-[70%] h-[500px] overflow-y-auto\">\n//                 {data.map(({ name, reqDate, managerSig, presidentSig, status}) => {\n//                     const approvedDate = (presidentSig.date == null) ? new Date(managerSig.date).toLocaleDateString() : new Date(Math.max(new Date(managerSig.date), new Date(presidentSig.date))).toLocaleDateString()\n//                     return (\n//                         <Row requester={name} manager={managerSig.user.firstName + ' ' + managerSig.user.lastName} reqDate={new Date(reqDate).toLocaleDateString()} approvedDate={approvedDate} status={status}/>\n//                     )\n//                 })}\n//             </div>\n//         </div>\n//     )\n// }\n\n\n\nvar TravelAuths = function TravelAuths(_ref) {\n  var data = _ref.data;\n  return  true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"h-[600px] bg-white border-dashed border-[1px] border-gray-300 rounded-md mt-8 flow-root p-4\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, _this) : /*#__PURE__*/0;\n};\n\n_c = TravelAuths;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TravelAuths);\n\nvar _c;\n\n$RefreshReg$(_c, \"TravelAuths\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbC90cmF2ZWxBdXRocy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5QixTQUFRLEtBQUQsZ0JBRUg7QUFBSyxhQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkcsZ0JBUUgsQ0FSSjtBQTZDSCxDQTlDRDs7S0FBTUQ7QUFnRE4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWwvdHJhdmVsQXV0aHMuanM/OTkzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm93IGZyb20gJy4uL3RyYXZlbC9yb3cnXG5cbi8vIGNvbnN0IFRyYXZlbEF1dGhzID0gKHsgZGF0YSB9KSA9PiB7XG4vLyAgICAgcmV0dXJuICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PSAwKSA/IFxuLy8gICAgIChcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImgtWzQwMHB4XSB3LVsxMDAlXSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyXCI+XG4vLyAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTN4bCB0ZXh0LWdyYXktMzAwXCI+Tm8gVHJhdmVsIEF1dGhvcml6YXRpb25zPC9oMj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICAgIDpcbi8vICAgICAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LVs3MCVdIGdyaWQgZ3JpZC1jb2xzLTUgYm9yZGVyLXNvbGlkIGJvcmRlci1iLTIgYm9yZGVyLVtibHVlXSBtdC0xMFwiPlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTJcIj5SZXF1ZXN0ZXI8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXCI+TWFuYWdlcjwvZGl2PlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTJcIj5SZXF1ZXN0ZWQ8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXCI+QXBwcm92ZWQ8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXCI+U3RhdHVzPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LVs3MCVdIGgtWzUwMHB4XSBvdmVyZmxvdy15LWF1dG9cIj5cbi8vICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHsgbmFtZSwgcmVxRGF0ZSwgbWFuYWdlclNpZywgcHJlc2lkZW50U2lnLCBzdGF0dXN9KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcHJvdmVkRGF0ZSA9IChwcmVzaWRlbnRTaWcuZGF0ZSA9PSBudWxsKSA/IG5ldyBEYXRlKG1hbmFnZXJTaWcuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOiBuZXcgRGF0ZShNYXRoLm1heChuZXcgRGF0ZShtYW5hZ2VyU2lnLmRhdGUpLCBuZXcgRGF0ZShwcmVzaWRlbnRTaWcuZGF0ZSkpKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyByZXF1ZXN0ZXI9e25hbWV9IG1hbmFnZXI9e21hbmFnZXJTaWcudXNlci5maXJzdE5hbWUgKyAnICcgKyBtYW5hZ2VyU2lnLnVzZXIubGFzdE5hbWV9IHJlcURhdGU9e25ldyBEYXRlKHJlcURhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfSBhcHByb3ZlZERhdGU9e2FwcHJvdmVkRGF0ZX0gc3RhdHVzPXtzdGF0dXN9Lz5cbi8vICAgICAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgICAgIH0pfVxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbi8vICAgICApXG4vLyB9XG5jb25zdCBUcmF2ZWxBdXRocyA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIHJldHVybiAodHJ1ZSkgP1xuICAgIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs2MDBweF0gYmctd2hpdGUgYm9yZGVyLWRhc2hlZCBib3JkZXItWzFweF0gYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgbXQtOCBmbG93LXJvb3QgcC00XCI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIDpcbiAgICAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNjAwcHhdIGJnLXdoaXRlIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgbXQtOCBmbG93LXJvb3QgcC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teS0yIC1teC00IG92ZXJmbG93LXgtYXV0byBzbTotbXgtNiBsZzotbXgtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1pbi13LWZ1bGwgcHktMiBhbGlnbi1taWRkbGUgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1bdmFyKC0tcHJpbWFyeS1jb2xvcildXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC0zIHB5LTMuNSBwbC00IHByLTMgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHNtOnBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwcm92ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgYmctd2hpdGUgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKCh7IF9pZCwgbmFtZSwgcmVxRGF0ZSwgbWFuYWdlclNpZywgcHJlc2lkZW50U2lnLCBzdGF0dXMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHByb3ZlZERhdGUgPSAocHJlc2lkZW50U2lnLmRhdGUgPT0gbnVsbCkgPyBuZXcgRGF0ZShtYW5hZ2VyU2lnLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogbmV3IERhdGUoTWF0aC5tYXgobmV3IERhdGUobWFuYWdlclNpZy5kYXRlKSwgbmV3IERhdGUocHJlc2lkZW50U2lnLmRhdGUpKSkudG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cga2V5PXtfaWR9IHJlcXVlc3Rlcj17bmFtZX0gbWFuYWdlcj17bWFuYWdlclNpZy51c2VyLmZpcnN0TmFtZSArICcgJyArIG1hbmFnZXJTaWcudXNlci5sYXN0TmFtZX0gcmVxRGF0ZT17bmV3IERhdGUocmVxRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IGFwcHJvdmVkRGF0ZT17YXBwcm92ZWREYXRlfSBzdGF0dXM9e3N0YXR1c30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBrZXk9XCIxMjEzM1wiIHJlcXVlc3Rlcj17XCJOYXRoYW4gTGVlXCJ9IG1hbmFnZXI9e1wiTmF0aGFuIExlZVwifSByZXFEYXRlPXtcIjEvMi8yMlwifSBhcHByb3ZlZERhdGU9e1wiMS8zLzIzXCJ9IHN0YXR1cz1cImRlbmllZFwiPjwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbEF1dGhzIl0sIm5hbWVzIjpbIlJvdyIsIlRyYXZlbEF1dGhzIiwiZGF0YSIsIm1hcCIsIl9pZCIsIm5hbWUiLCJyZXFEYXRlIiwibWFuYWdlclNpZyIsInByZXNpZGVudFNpZyIsInN0YXR1cyIsImFwcHJvdmVkRGF0ZSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiTWF0aCIsIm1heCIsInVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/travel/travelAuths.js\n");

/***/ })

});