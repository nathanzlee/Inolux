"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./config/connectDB.js":
/*!*****************************!*\
  !*** ./config/connectDB.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connectDB = () => {\n  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n    console.log('Already connected.');\n    return;\n  }\n\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DATABASE_URL, {}, err => {\n    if (err) throw err;\n    console.log('Connected to mongodb.');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvY29ubmVjdERCLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLE1BQUdELDJFQUFILEVBQXNDO0FBQ3BDSSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBO0FBQ0Q7O0FBRURMLEVBQUFBLHVEQUFBLENBQWlCTyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBN0IsRUFBMkMsRUFBM0MsRUFBK0NDLEdBQUcsSUFBSTtBQUNwRCxRQUFHQSxHQUFILEVBQVEsTUFBTUEsR0FBTjtBQUNSTixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNELEdBSEQ7QUFJRCxDQVZEOztBQVlBLGlFQUFlSixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2YXQtbmV4dC1hdXRoLWRlbW8vLi9jb25maWcvY29ubmVjdERCLmpzPzhmMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XG4gIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xuICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZC4nKVxuICAgIHJldHVybjtcbiAgfVxuXG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLCB7fSwgZXJyID0+IHtcbiAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJylcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/connectDB.js\n");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n  firstName: {\n    type: String\n  },\n  lastName: {\n    type: String\n  },\n  email: {\n    type: String\n  },\n  password: {\n    type: String\n  },\n  level: {\n    type: Number\n  },\n  managers: {\n    type: [(mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.ObjectId)],\n    ref: 'user',\n    default: []\n  },\n  department: {\n    type: String\n  },\n  number: {\n    type: Number\n  },\n  travelAuths: {\n    type: [(mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.ObjectId)],\n    ref: 'travelAuth',\n    default: []\n  }\n});\nconst user = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('user', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLFVBQVUsR0FBR0Qsc0RBQUEsQ0FBZ0I7QUFDL0JHLEVBQUFBLFNBQVMsRUFBRTtBQUFDQyxJQUFBQSxJQUFJLEVBQUVDO0FBQVAsR0FEb0I7QUFFL0JDLEVBQUFBLFFBQVEsRUFBRTtBQUFDRixJQUFBQSxJQUFJLEVBQUVDO0FBQVAsR0FGcUI7QUFHL0JFLEVBQUFBLEtBQUssRUFBRTtBQUFDSCxJQUFBQSxJQUFJLEVBQUVDO0FBQVAsR0FId0I7QUFJL0JHLEVBQUFBLFFBQVEsRUFBRTtBQUFDSixJQUFBQSxJQUFJLEVBQUVDO0FBQVAsR0FKcUI7QUFLL0JJLEVBQUFBLEtBQUssRUFBRTtBQUFDTCxJQUFBQSxJQUFJLEVBQUVNO0FBQVAsR0FMd0I7QUFNL0JDLEVBQUFBLFFBQVEsRUFBRTtBQUNOUCxJQUFBQSxJQUFJLEVBQUUsQ0FBQ0osaUVBQUQsQ0FEQTtBQUVOYSxJQUFBQSxHQUFHLEVBQUUsTUFGQztBQUdOQyxJQUFBQSxPQUFPLEVBQUU7QUFISCxHQU5xQjtBQVcvQkMsRUFBQUEsVUFBVSxFQUFFO0FBQUNYLElBQUFBLElBQUksRUFBRUM7QUFBUCxHQVhtQjtBQVkvQlcsRUFBQUEsTUFBTSxFQUFFO0FBQUNaLElBQUFBLElBQUksRUFBRU07QUFBUCxHQVp1QjtBQWEvQk8sRUFBQUEsV0FBVyxFQUFFO0FBQ1RiLElBQUFBLElBQUksRUFBRSxDQUFDSixpRUFBRCxDQURHO0FBRVRhLElBQUFBLEdBQUcsRUFBRSxZQUZJO0FBR1RDLElBQUFBLE9BQU8sRUFBRTtBQUhBO0FBYmtCLENBQWhCLENBQW5CO0FBb0JBLE1BQU1JLElBQUksR0FBR2xCLDZEQUFBLElBQXdCQSxxREFBQSxDQUFlLE1BQWYsRUFBdUJDLFVBQXZCLENBQXJDO0FBRUEsaUVBQWVpQixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2YXQtbmV4dC1hdXRoLWRlbW8vLi9tb2RlbHMvdXNlci5qcz8xZjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgdXNlclNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgZmlyc3ROYW1lOiB7dHlwZTogU3RyaW5nfSxcbiAgICBsYXN0TmFtZToge3R5cGU6IFN0cmluZ30sXG4gICAgZW1haWw6IHt0eXBlOiBTdHJpbmd9LFxuICAgIHBhc3N3b3JkOiB7dHlwZTogU3RyaW5nfSxcbiAgICBsZXZlbDoge3R5cGU6IE51bWJlcn0sXG4gICAgbWFuYWdlcnM6IHtcbiAgICAgICAgdHlwZTogW21vbmdvb3NlLlNjaGVtYS5PYmplY3RJZF0sXG4gICAgICAgIHJlZjogJ3VzZXInLFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgIH0sXG4gICAgZGVwYXJ0bWVudDoge3R5cGU6IFN0cmluZ30sXG4gICAgbnVtYmVyOiB7dHlwZTogTnVtYmVyfSxcbiAgICB0cmF2ZWxBdXRoczoge1xuICAgICAgICB0eXBlOiBbbW9uZ29vc2UuU2NoZW1hLk9iamVjdElkXSxcbiAgICAgICAgcmVmOiAndHJhdmVsQXV0aCcsXG4gICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgfVxufSlcblxuY29uc3QgdXNlciA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcblxuZXhwb3J0IGRlZmF1bHQgdXNlciJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibGV2ZWwiLCJOdW1iZXIiLCJtYW5hZ2VycyIsIk9iamVjdElkIiwicmVmIiwiZGVmYXVsdCIsImRlcGFydG1lbnQiLCJudW1iZXIiLCJ0cmF2ZWxBdXRocyIsInVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/user.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_connectDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/connectDB */ \"./config/connectDB.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user */ \"./models/user.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,_config_connectDB__WEBPACK_IMPORTED_MODULE_2__.default)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  session: {\n    jwt: true,\n    maxAge: 60 * 60\n  },\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n    name: 'Credentials',\n\n    async authorize(credentials) {\n      const email = credentials.email;\n      const password = credentials.password;\n      const user = await _models_user__WEBPACK_IMPORTED_MODULE_3__.default.findOne({\n        email\n      });\n      console.log(user);\n      if (user) return loginUser({\n        password,\n        user\n      });\n      throw new Error(\"No such email.\");\n    }\n\n  })],\n  pages: {\n    signIn: '/login',\n    error: '/login'\n  },\n  // SQL or MongoDB database (or leave empty)\n  database: process.env.DATABASE_URL,\n  callbacks: {\n    session: async (session, user) => {\n      const resUser = await _models_user__WEBPACK_IMPORTED_MODULE_3__.default.findById(user.sub);\n      session.user = resUser;\n      return Promise.resolve(session);\n    }\n  }\n}));\n\nconst loginUser = async ({\n  password,\n  user\n}) => {\n  const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(password, user.password);\n\n  if (!isMatch) {\n    // throw new Error(\"Password Incorrect.\");\n    const hashPass = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().hash(password, 12);\n    _models_user__WEBPACK_IMPORTED_MODULE_3__.default.findOneAndUpdate({\n      email: user.email\n    }, {\n      $set: {\n        password: hashPass\n      }\n    }, err => {\n      if (err) throw new Error(\"Something wrong\");\n    });\n  }\n\n  return user;\n};\n\nconst registerUser = async ({\n  email,\n  password\n}) => {\n  const hashPass = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().hash(password, 12);\n  const newUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__.default({\n    email,\n    password: hashPass\n  });\n  await newUser.save();\n  throw new Error(\"Success! Check your email.\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBTU0sT0FBTyxDQUFDQyxJQUFSLEVBQU47QUFDQSxRQUFNLElBQUl2QixLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNELENBTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZhdC1uZXh0LWF1dGgtZGVtby8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/OTkwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vY29uZmlnL2Nvbm5lY3REQidcbmltcG9ydCBVc2VycyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdXNlcidcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHNlc3Npb246IHtcbiAgICBqd3Q6IHRydWUsXG4gICAgbWF4QWdlOiA2MCAqIDYwXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5DcmVkZW50aWFscyh7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gY3JlZGVudGlhbHMuZW1haWw7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHMucGFzc3dvcmQ7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHtlbWFpbH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgIGlmICh1c2VyKSByZXR1cm4gbG9naW5Vc2VyKHtwYXNzd29yZCwgdXNlcn0pXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBlbWFpbC5cIik7XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nLFxuICAgIGVycm9yOiAnL2xvZ2luJyxcbiAgfSxcbiAgLy8gU1FMIG9yIE1vbmdvREIgZGF0YWJhc2UgKG9yIGxlYXZlIGVtcHR5KVxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbiwgdXNlcikgPT4ge1xuICAgICAgY29uc3QgcmVzVXNlciA9IGF3YWl0IFVzZXJzLmZpbmRCeUlkKHVzZXIuc3ViKVxuICAgICAgc2Vzc2lvbi51c2VyID0gcmVzVXNlclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKVxuICAgIH1cbiAgfVxufSlcblxuXG5jb25zdCBsb2dpblVzZXIgPSBhc3luYyAoe3Bhc3N3b3JkLCB1c2VyfSkgPT4ge1xuICBjb25zdCBpc01hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG4gIGlmKCFpc01hdGNoKXtcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJQYXNzd29yZCBJbmNvcnJlY3QuXCIpO1xuICAgIGNvbnN0IGhhc2hQYXNzID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEyKVxuICAgIFVzZXJzLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7ZW1haWw6IHVzZXIuZW1haWx9LFxuICAgICAgeyRzZXQ6IHtwYXNzd29yZDogaGFzaFBhc3N9fSxcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nXCIpXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHVzZXI7XG59XG5cbmNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jICh7ZW1haWwsIHBhc3N3b3JkfSkgPT4ge1xuICBjb25zdCBoYXNoUGFzcyA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMilcbiAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2Vycyh7IGVtYWlsLCBwYXNzd29yZDogaGFzaFBhc3MgfSlcbiAgYXdhaXQgbmV3VXNlci5zYXZlKClcbiAgdGhyb3cgbmV3IEVycm9yKFwiU3VjY2VzcyEgQ2hlY2sgeW91ciBlbWFpbC5cIik7XG59Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwiY29ubmVjdERCIiwiVXNlcnMiLCJiY3J5cHQiLCJzZXNzaW9uIiwiand0IiwibWF4QWdlIiwicHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlciIsImZpbmRPbmUiLCJjb25zb2xlIiwibG9nIiwibG9naW5Vc2VyIiwiRXJyb3IiLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwiZGF0YWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwiY2FsbGJhY2tzIiwicmVzVXNlciIsImZpbmRCeUlkIiwic3ViIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc01hdGNoIiwiY29tcGFyZSIsImhhc2hQYXNzIiwiaGFzaCIsImZpbmRPbmVBbmRVcGRhdGUiLCIkc2V0IiwiZXJyIiwicmVnaXN0ZXJVc2VyIiwibmV3VXNlciIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();