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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _travel_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../travel/row */ \"./components/travel/row.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/components/travel/travelAuths.js\",\n    _this = undefined;\n\n // const TravelAuths = ({ data }) => {\n//     return (!data || data.length == 0) ? \n//     (\n//         <div class=\"h-[400px] w-[100%] flex flex-col justify-center text-center\">\n//             <h2 class=\"text-3xl text-gray-300\">No Travel Authorizations</h2>\n//         </div>\n//     )\n//     :\n//     (\n//         <div class=\"flex flex-col items-center w-full\">\n//             <div class=\"w-[70%] grid grid-cols-5 border-solid border-b-2 border-[blue] mt-10\">\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Requester</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Manager</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Requested</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Approved</div>\n//                 <div class=\"flex flex-col justify-center items-center p-2\">Status</div>\n//             </div>\n//             <div class=\"w-[70%] h-[500px] overflow-y-auto\">\n//                 {data.map(({ name, reqDate, managerSig, presidentSig, status}) => {\n//                     const approvedDate = (presidentSig.date == null) ? new Date(managerSig.date).toLocaleDateString() : new Date(Math.max(new Date(managerSig.date), new Date(presidentSig.date))).toLocaleDateString()\n//                     return (\n//                         <Row requester={name} manager={managerSig.user.firstName + ' ' + managerSig.user.lastName} reqDate={new Date(reqDate).toLocaleDateString()} approvedDate={approvedDate} status={status}/>\n//                     )\n//                 })}\n//             </div>\n//         </div>\n//     )\n// }\n\n\n\nvar TravelAuths = function TravelAuths(_ref) {\n  var data = _ref.data;\n  return  true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"h-[600px] flex flex-col justify-center items-center border-dashed border-2 border-gray-300 rounded-md mt-8 p-4\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      \"class\": \"text-3xl text-gray-300\",\n      children: \"No Travel Authorizations\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, _this) : /*#__PURE__*/0;\n};\n\n_c = TravelAuths;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TravelAuths);\n\nvar _c;\n\n$RefreshReg$(_c, \"TravelAuths\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYXZlbC90cmF2ZWxBdXRocy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5QixTQUFRLEtBQUQsZ0JBRUg7QUFBSyxhQUFTLEVBQUMsZ0hBQWY7QUFBQSwyQkFDSTtBQUFJLGVBQU0sd0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkcsZ0JBUUgsQ0FSSjtBQTZDSCxDQTlDRDs7S0FBTUQ7QUFnRE4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmF2ZWwvdHJhdmVsQXV0aHMuanM/OTkzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm93IGZyb20gJy4uL3RyYXZlbC9yb3cnXG5cbi8vIGNvbnN0IFRyYXZlbEF1dGhzID0gKHsgZGF0YSB9KSA9PiB7XG4vLyAgICAgcmV0dXJuICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PSAwKSA/IFxuLy8gICAgIChcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImgtWzQwMHB4XSB3LVsxMDAlXSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyXCI+XG4vLyAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTN4bCB0ZXh0LWdyYXktMzAwXCI+Tm8gVHJhdmVsIEF1dGhvcml6YXRpb25zPC9oMj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICAgIDpcbi8vICAgICAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LVs3MCVdIGdyaWQgZ3JpZC1jb2xzLTUgYm9yZGVyLXNvbGlkIGJvcmRlci1iLTIgYm9yZGVyLVtibHVlXSBtdC0xMFwiPlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTJcIj5SZXF1ZXN0ZXI8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXCI+TWFuYWdlcjwvZGl2PlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTJcIj5SZXF1ZXN0ZWQ8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXCI+QXBwcm92ZWQ8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXCI+U3RhdHVzPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LVs3MCVdIGgtWzUwMHB4XSBvdmVyZmxvdy15LWF1dG9cIj5cbi8vICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHsgbmFtZSwgcmVxRGF0ZSwgbWFuYWdlclNpZywgcHJlc2lkZW50U2lnLCBzdGF0dXN9KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcHJvdmVkRGF0ZSA9IChwcmVzaWRlbnRTaWcuZGF0ZSA9PSBudWxsKSA/IG5ldyBEYXRlKG1hbmFnZXJTaWcuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOiBuZXcgRGF0ZShNYXRoLm1heChuZXcgRGF0ZShtYW5hZ2VyU2lnLmRhdGUpLCBuZXcgRGF0ZShwcmVzaWRlbnRTaWcuZGF0ZSkpKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyByZXF1ZXN0ZXI9e25hbWV9IG1hbmFnZXI9e21hbmFnZXJTaWcudXNlci5maXJzdE5hbWUgKyAnICcgKyBtYW5hZ2VyU2lnLnVzZXIubGFzdE5hbWV9IHJlcURhdGU9e25ldyBEYXRlKHJlcURhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfSBhcHByb3ZlZERhdGU9e2FwcHJvdmVkRGF0ZX0gc3RhdHVzPXtzdGF0dXN9Lz5cbi8vICAgICAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgICAgIH0pfVxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbi8vICAgICApXG4vLyB9XG5jb25zdCBUcmF2ZWxBdXRocyA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIHJldHVybiAodHJ1ZSkgP1xuICAgIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs2MDBweF0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBtdC04IHAtNFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC0zeGwgdGV4dC1ncmF5LTMwMFwiPk5vIFRyYXZlbCBBdXRob3JpemF0aW9uczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICA6XG4gICAgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzYwMHB4XSBiZy13aGl0ZSBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG10LTggZmxvdy1yb290IHAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXktMiAtbXgtNCBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgbGc6LW14LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtaW4tdy1mdWxsIHB5LTIgYWxpZ24tbWlkZGxlIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtW3ZhcigtLXByaW1hcnktY29sb3IpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgcGwtNCBwci0zIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBzbTpwbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC0zIHB5LTMuNSB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC0zIHB5LTMuNSB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcHJvdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGJnLXdoaXRlIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoeyBfaWQsIG5hbWUsIHJlcURhdGUsIG1hbmFnZXJTaWcsIHByZXNpZGVudFNpZywgc3RhdHVzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwcm92ZWREYXRlID0gKHByZXNpZGVudFNpZy5kYXRlID09IG51bGwpID8gbmV3IERhdGUobWFuYWdlclNpZy5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKSA6IG5ldyBEYXRlKE1hdGgubWF4KG5ldyBEYXRlKG1hbmFnZXJTaWcuZGF0ZSksIG5ldyBEYXRlKHByZXNpZGVudFNpZy5kYXRlKSkpLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGtleT17X2lkfSByZXF1ZXN0ZXI9e25hbWV9IG1hbmFnZXI9e21hbmFnZXJTaWcudXNlci5maXJzdE5hbWUgKyAnICcgKyBtYW5hZ2VyU2lnLnVzZXIubGFzdE5hbWV9IHJlcURhdGU9e25ldyBEYXRlKHJlcURhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfSBhcHByb3ZlZERhdGU9e2FwcHJvdmVkRGF0ZX0gc3RhdHVzPXtzdGF0dXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cga2V5PVwiMTIxMzNcIiByZXF1ZXN0ZXI9e1wiTmF0aGFuIExlZVwifSBtYW5hZ2VyPXtcIk5hdGhhbiBMZWVcIn0gcmVxRGF0ZT17XCIxLzIvMjJcIn0gYXBwcm92ZWREYXRlPXtcIjEvMy8yM1wifSBzdGF0dXM9XCJkZW5pZWRcIj48L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxBdXRocyJdLCJuYW1lcyI6WyJSb3ciLCJUcmF2ZWxBdXRocyIsImRhdGEiLCJtYXAiLCJfaWQiLCJuYW1lIiwicmVxRGF0ZSIsIm1hbmFnZXJTaWciLCJwcmVzaWRlbnRTaWciLCJzdGF0dXMiLCJhcHByb3ZlZERhdGUiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIk1hdGgiLCJtYXgiLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/travel/travelAuths.js\n");

/***/ })

});