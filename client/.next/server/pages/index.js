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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\nvar _jsxFileName = \"/Users/xinyuanyang/FullstackProjects/intentoryApp/client/context/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'LOGIN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n\n    case 'LOGOUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: null\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst initialState = {\n  user: null\n}; //create context\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({}); //context provider\n\nconst Provider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n  const value = {\n    state,\n    dispatch\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n    value: value,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 12\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1HLE9BQU8sR0FBRyxDQUFDQyxLQUFELEVBQU9DLE1BQVAsS0FBaUI7QUFDN0IsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxPQUFMO0FBQ0ksNkNBQVdGLEtBQVg7QUFBaUJHLFFBQUFBLElBQUksRUFBRUYsTUFBTSxDQUFDRztBQUE5Qjs7QUFDSixTQUFLLFFBQUw7QUFDSSw2Q0FBV0osS0FBWDtBQUFrQkcsUUFBQUEsSUFBSSxFQUFFO0FBQXhCOztBQUNKO0FBQ0ksYUFBT0gsS0FBUDtBQU5SO0FBUUgsQ0FURDs7QUFZQSxNQUFNSyxZQUFZLEdBQUc7QUFDakJGLEVBQUFBLElBQUksRUFBRTtBQURXLENBQXJCLEVBSUE7O0FBQ0EsTUFBTUcsT0FBTyxnQkFBR1Ysb0RBQWEsQ0FBQyxFQUFELENBQTdCLEVBRUE7O0FBQ0EsTUFBTVcsUUFBUSxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWdCO0FBQzdCLFFBQU07QUFBQSxPQUFDUixLQUFEO0FBQUEsT0FBT1M7QUFBUCxNQUFtQlosaURBQVUsQ0FBQ0UsT0FBRCxFQUFTTSxZQUFULENBQW5DO0FBQ0EsUUFBTUssS0FBSyxHQUFHO0FBQUNWLElBQUFBLEtBQUQ7QUFBT1MsSUFBQUE7QUFBUCxHQUFkO0FBQ0Esc0JBQU8sOERBQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFJQyxLQUEzQjtBQUFBLGNBQW1DRjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxDQUpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZW50b3J5YXBwLy4vY29udGV4dC9pbmRleC5qcz8wMjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi9maXJlYmFzZSdcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pID0+e1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgJ0xPR0lOJzpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsdXNlcjogYWN0aW9uLnBheWxvYWR9XG4gICAgICAgIGNhc2UgJ0xPR09VVCc6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VyOiBudWxsfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHVzZXI6IG51bGxcbn1cblxuLy9jcmVhdGUgY29udGV4dFxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXG5cbi8vY29udGV4dCBwcm92aWRlclxuY29uc3QgUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSxkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCB2YWx1ZSA9IHtzdGF0ZSxkaXNwYXRjaH1cbiAgICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+XG59XG5cbmV4cG9ydCB7Q29udGV4dCxQcm92aWRlcn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJmaXJlYmFzZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ1c2VyIiwicGF5bG9hZCIsImluaXRpYWxTdGF0ZSIsIkNvbnRleHQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst firebaseConfig = {\n  apiKey: 'AIzaSyBJIBRHXbGg33t_mb-4K7Bf_xK4hUYcsbY',\n  authDomain: 'inventoryapp-ed96f.firebaseapp.com',\n  projectId: 'inventoryapp-ed96f',\n  storageBucket: 'inventoryapp-ed96f.appspot.com',\n  messagingSenderId: '828604455710',\n  appId: '1:828604455710:web:3e051df005f2530e50470f',\n  measurementId: 'G-YFQNNYPL4G'\n}; // Initialize Firebase if have not initialized yet\n\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n  firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_app__WEBPACK_IMPORTED_MODULE_0___default()));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxNQUFNQyxjQUFjLEdBQUc7QUFDdEJDLEVBQUFBLE1BQU0sRUFBRSx5Q0FEYztBQUV0QkMsRUFBQUEsVUFBVSxFQUFFLG9DQUZVO0FBR3RCQyxFQUFBQSxTQUFTLEVBQUUsb0JBSFc7QUFJdEJDLEVBQUFBLGFBQWEsRUFBRSxnQ0FKTztBQUt0QkMsRUFBQUEsaUJBQWlCLEVBQUUsY0FMRztBQU10QkMsRUFBQUEsS0FBSyxFQUFFLDJDQU5lO0FBT3RCQyxFQUFBQSxhQUFhLEVBQUU7QUFQTyxDQUF2QixFQVNBOztBQUNBLElBQUksQ0FBQ1IsaUVBQUwsRUFBMkI7QUFDMUJBLEVBQUFBLGlFQUFBLENBQXVCQyxjQUF2QjtBQUNBOztBQUVELGlFQUFlRCxxREFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVudG9yeWFwcC8uL2ZpcmViYXNlLmpzPzJhZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG5cdGFwaUtleTogJ0FJemFTeUJKSUJSSFhiR2czM3RfbWItNEs3QmZfeEs0aFVZY3NiWScsXG5cdGF1dGhEb21haW46ICdpbnZlbnRvcnlhcHAtZWQ5NmYuZmlyZWJhc2VhcHAuY29tJyxcblx0cHJvamVjdElkOiAnaW52ZW50b3J5YXBwLWVkOTZmJyxcblx0c3RvcmFnZUJ1Y2tldDogJ2ludmVudG9yeWFwcC1lZDk2Zi5hcHBzcG90LmNvbScsXG5cdG1lc3NhZ2luZ1NlbmRlcklkOiAnODI4NjA0NDU1NzEwJyxcblx0YXBwSWQ6ICcxOjgyODYwNDQ1NTcxMDp3ZWI6M2UwNTFkZjAwNWYyNTMwZTUwNDcwZicsXG5cdG1lYXN1cmVtZW50SWQ6ICdHLVlGUU5OWVBMNEcnLFxufTtcbi8vIEluaXRpYWxpemUgRmlyZWJhc2UgaWYgaGF2ZSBub3QgaW5pdGlhbGl6ZWQgeWV0XG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG5cdGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/xinyuanyang/FullstackProjects/intentoryApp/client/pages/index.js\";\n\n\n\nconst Home = () => {\n  const {\n    state\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: \"ui center aligned header\",\n      children: \"Welcome Home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n      children: \"Hello \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVlGLGlEQUFVLENBQUNELDZDQUFELENBQTVCO0FBQ0Esc0JBQ0M7QUFBQSw0QkFFQztBQUFJLGVBQVMsRUFBQywwQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBT0EsQ0FURDs7QUFXQSxpRUFBZUUsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVudG9yeWFwcC8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cdGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHsvKiBKU09OLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgNCkgKi99XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPSd1aSBjZW50ZXIgYWxpZ25lZCBoZWFkZXInPldlbGNvbWUgSG9tZTwvaDI+XG5cdFx0XHQ8cHJlPkhlbGxvIDwvcHJlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwidXNlQ29udGV4dCIsIkhvbWUiLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();