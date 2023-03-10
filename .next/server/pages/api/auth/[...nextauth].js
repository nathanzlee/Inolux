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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_connectDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/connectDB */ \"./config/connectDB.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user */ \"./models/user.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,_config_connectDB__WEBPACK_IMPORTED_MODULE_2__.default)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  session: {\n    jwt: true\n  },\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n    name: 'Credentials',\n\n    async authorize(credentials) {\n      const email = credentials.email;\n      const password = credentials.password;\n      const user = await _models_user__WEBPACK_IMPORTED_MODULE_3__.default.findOne({\n        email\n      });\n      console.log(user);\n      if (user) return loginUser({\n        password,\n        user\n      });\n      throw new Error(\"No such email.\");\n    }\n\n  })],\n  pages: {\n    signIn: '/login',\n    error: '/login'\n  },\n  // SQL or MongoDB database (or leave empty)\n  database: process.env.DATABASE_URL,\n  callbacks: {\n    session: async (session, user) => {\n      // const resUser = await Users.findById(user.sub)\n      // session.emailVerified = resUser.emailVerified\n      session.userId = user.sub;\n      return Promise.resolve(session);\n    }\n  }\n}));\n\nconst loginUser = async ({\n  password,\n  user\n}) => {\n  const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(password, user.password);\n\n  if (!isMatch) {\n    console.log(\"hellodfiafadifd;fjadfjadsfjadfjads;fjdsifjidfjdsfij\"); // throw new Error(\"Password Incorrect.\");\n\n    const hashPass = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().hash(password, 12);\n    _models_user__WEBPACK_IMPORTED_MODULE_3__.default.findOneAndUpdate({\n      email: user.email\n    }, {\n      $set: {\n        password: hashPass\n      }\n    }, err => {\n      if (err) throw new Error(\"Something wrong\");\n    });\n  }\n\n  return user;\n};\n\nconst registerUser = async ({\n  email,\n  password\n}) => {\n  const hashPass = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().hash(password, 12);\n  const newUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__.default({\n    email,\n    password: hashPass\n  });\n  await newUser.save();\n  throw new Error(\"Success! Check your email.\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TjtBQUNBLFFBQU0sSUFBSXRCLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0QsQ0FMRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmF0LW5leHQtYXV0aC1kZW1vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz85OTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIlxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi9jb25maWcvY29ubmVjdERCJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2VyJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5cbmNvbm5lY3REQigpXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2Vzc2lvbjoge1xuICAgIGp3dDogdHJ1ZVxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBjb25zdCBlbWFpbCA9IGNyZWRlbnRpYWxzLmVtYWlsO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzLnBhc3N3b3JkO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7ZW1haWx9KVxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgICBpZiAodXNlcikgcmV0dXJuIGxvZ2luVXNlcih7cGFzc3dvcmQsIHVzZXJ9KVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggZW1haWwuXCIpO1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2xvZ2luJyxcbiAgICBlcnJvcjogJy9sb2dpbicsXG4gIH0sXG4gIC8vIFNRTCBvciBNb25nb0RCIGRhdGFiYXNlIChvciBsZWF2ZSBlbXB0eSlcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogYXN5bmMgKHNlc3Npb24sIHVzZXIpID0+IHtcbiAgICAgIC8vIGNvbnN0IHJlc1VzZXIgPSBhd2FpdCBVc2Vycy5maW5kQnlJZCh1c2VyLnN1YilcbiAgICAgIC8vIHNlc3Npb24uZW1haWxWZXJpZmllZCA9IHJlc1VzZXIuZW1haWxWZXJpZmllZFxuICAgICAgc2Vzc2lvbi51c2VySWQgPSB1c2VyLnN1YlxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKVxuICAgIH1cbiAgfVxufSlcblxuXG5jb25zdCBsb2dpblVzZXIgPSBhc3luYyAoe3Bhc3N3b3JkLCB1c2VyfSkgPT4ge1xuICBjb25zdCBpc01hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG4gIGlmKCFpc01hdGNoKXtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvZGZpYWZhZGlmZDtmamFkZmphZHNmamFkZmphZHM7Zmpkc2lmamlkZmpkc2ZpalwiKVxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIlBhc3N3b3JkIEluY29ycmVjdC5cIik7XG4gICAgY29uc3QgaGFzaFBhc3MgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTIpXG4gICAgVXNlcnMuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgIHtlbWFpbDogdXNlci5lbWFpbH0sXG4gICAgICB7JHNldDoge3Bhc3N3b3JkOiBoYXNoUGFzc319LFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd3JvbmdcIilcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4gdXNlcjtcbn1cblxuY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHtlbWFpbCwgcGFzc3dvcmR9KSA9PiB7XG4gIGNvbnN0IGhhc2hQYXNzID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEyKVxuICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXJzKHsgZW1haWwsIHBhc3N3b3JkOiBoYXNoUGFzcyB9KVxuICBhd2FpdCBuZXdVc2VyLnNhdmUoKVxuICB0aHJvdyBuZXcgRXJyb3IoXCJTdWNjZXNzISBDaGVjayB5b3VyIGVtYWlsLlwiKTtcbn0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJjb25uZWN0REIiLCJVc2VycyIsImJjcnlwdCIsInNlc3Npb24iLCJqd3QiLCJwcm92aWRlcnMiLCJDcmVkZW50aWFscyIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwiZmluZE9uZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dpblVzZXIiLCJFcnJvciIsInBhZ2VzIiwic2lnbkluIiwiZXJyb3IiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJjYWxsYmFja3MiLCJ1c2VySWQiLCJzdWIiLCJQcm9taXNlIiwicmVzb2x2ZSIsImlzTWF0Y2giLCJjb21wYXJlIiwiaGFzaFBhc3MiLCJoYXNoIiwiZmluZE9uZUFuZFVwZGF0ZSIsIiRzZXQiLCJlcnIiLCJyZWdpc3RlclVzZXIiLCJuZXdVc2VyIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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