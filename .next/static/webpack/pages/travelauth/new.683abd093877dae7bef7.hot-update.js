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

/***/ "./pages/travelauth/new.js":
/*!*********************************!*\
  !*** ./pages/travelauth/new.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/breadcrumb */ \"./components/breadcrumb.js\");\n/* harmony import */ var _components_travelAuth_travelAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/travelAuth/travelAuth */ \"./components/travelAuth/travelAuth.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nathanlee/Desktop/Projects/Inolux/pages/travelauth/new.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar NewTravelAuth = function NewTravelAuth() {\n  _s();\n\n  var pages = [{\n    name: 'Travel',\n    href: '/travel'\n  }, {\n    name: 'New',\n    href: '/travelauth/new'\n  }];\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)(),\n      _useSession2 = (0,_Users_nathanlee_Desktop_Projects_Inolux_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 2),\n      session = _useSession2[0],\n      status = _useSession2[1];\n\n  if (!session) return null;\n  var user;\n\n  if (status) {\n    console.log(\"loading\");\n  } else {\n    user = session.user;\n    console.log(user);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"h-[100vh] w-[100vw]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.default, {\n      pages: pages\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"w-full h-full bg-gray-100 overflow-y-auto px-10 pb-[100px]\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_travelAuth_travelAuth__WEBPACK_IMPORTED_MODULE_4__.default, {\n        type: \"new\",\n        requester: user ? user : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(NewTravelAuth, \"pENTN023aHYvhEaKj2/ZC2D+LRQ=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession];\n});\n\n_c = NewTravelAuth;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewTravelAuth);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewTravelAuth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmF2ZWxhdXRoL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxLQUFLLEdBQUcsQ0FDVjtBQUFFQyxJQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsSUFBQUEsSUFBSSxFQUFFO0FBQXhCLEdBRFUsRUFFVjtBQUFFRCxJQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlQyxJQUFBQSxJQUFJLEVBQUU7QUFBckIsR0FGVSxDQUFkOztBQUtBLG9CQUEwQlAsNERBQVUsRUFBcEM7QUFBQTtBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsTUFBaEI7O0FBRUEsTUFBSSxDQUFDRCxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBRWQsTUFBSUUsSUFBSjs7QUFDQSxNQUFJRCxNQUFKLEVBQVk7QUFDUkUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNILEdBRkQsTUFFTztBQUNIRixJQUFBQSxJQUFJLEdBQUdGLE9BQU8sQ0FBQ0UsSUFBZjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNIOztBQUdELHNCQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsNEJBQ0ksOERBQUMsMkRBQUQ7QUFBWSxXQUFLLEVBQUVMO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLDREQUFmO0FBQUEsNkJBQ0ksOERBQUMsc0VBQUQ7QUFBWSxZQUFJLEVBQUMsS0FBakI7QUFBdUIsaUJBQVMsRUFBR0ssSUFBRCxHQUFTQSxJQUFULEdBQWdCO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQTNCRDs7R0FBTU47VUFNd0JKOzs7S0FOeEJJOztBQThDTiwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90cmF2ZWxhdXRoL25ldy5qcz9jODM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYidcbmltcG9ydCBUcmF2ZWxBdXRoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdHJhdmVsQXV0aC90cmF2ZWxBdXRoJ1xuXG5jb25zdCBOZXdUcmF2ZWxBdXRoID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VzID0gW1xuICAgICAgICB7IG5hbWU6ICdUcmF2ZWwnLCBocmVmOiAnL3RyYXZlbCcgfSxcbiAgICAgICAgeyBuYW1lOiAnTmV3JywgaHJlZjogJy90cmF2ZWxhdXRoL25ldycgfVxuICAgIF1cblxuICAgIGNvbnN0IFtzZXNzaW9uLCBzdGF0dXNdID0gdXNlU2Vzc2lvbigpXG5cbiAgICBpZiAoIXNlc3Npb24pIHJldHVybiBudWxsIFxuXG4gICAgbGV0IHVzZXIgXG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmdcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICB1c2VyID0gc2Vzc2lvbi51c2VyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzEwMHZoXSB3LVsxMDB2d11cIj5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iIHBhZ2VzPXtwYWdlc30vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJnLWdyYXktMTAwIG92ZXJmbG93LXktYXV0byBweC0xMCBwYi1bMTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgPFRyYXZlbEF1dGggdHlwZT1cIm5ld1wiIHJlcXVlc3Rlcj17KHVzZXIpID8gdXNlciA6IG51bGx9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24pXG4gICAgaWYgKCFzZXNzaW9uKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgc2Vzc2lvbiB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdUcmF2ZWxBdXRoIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJSb3V0ZXIiLCJCcmVhZGNydW1iIiwiVHJhdmVsQXV0aCIsIk5ld1RyYXZlbEF1dGgiLCJwYWdlcyIsIm5hbWUiLCJocmVmIiwic2Vzc2lvbiIsInN0YXR1cyIsInVzZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/travelauth/new.js\n");

/***/ })

});