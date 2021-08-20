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
exports.id = "pages/resetPass";
exports.ids = ["pages/resetPass"];
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

/***/ "./pages/resetPass.js":
/*!****************************!*\
  !*** ./pages/resetPass.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/xinyuanyang/FullstackProjects/intentoryApp/client/pages/resetPass.js\";\n\n\n\n\n\n\nconst passwordReset = () => {\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: loading,\n    1: setLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    state: {\n      user\n    }\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.Context);\n  let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (user !== null) {\n      router.push('/');\n    }\n  }, [user]);\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n    setLoading(true);\n    const config = {\n      url: \"http://localhost:3000/login\",\n      handleCodeInApp: true\n    };\n    await _firebase__WEBPACK_IMPORTED_MODULE_2__.default.auth().sendPasswordResetEmail(email, config).then(() => {\n      setEmail('');\n      setLoading(false);\n      (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)('Check your email for password reset link');\n    }).catch(err => {\n      setLoading(false);\n      (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)(err.message);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"ui container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: \"ui header center aligned\",\n      children: \"If you have already registered, you can enter your email address to receive a password reset link\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: \"ui form\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"field\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"email\",\n          className: \"ui input\",\n          value: email,\n          onChange: e => setEmail(e.target.value),\n          placeholder: \"Type your email\",\n          autoFocus: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"ui primary button\",\n          disabled: !email || loading,\n          onClick: handleSubmit,\n          children: loading ? 'Processing...' : 'Submit'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 3\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (passwordReset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXNldFBhc3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTU8sYUFBYSxHQUFHLE1BQU07QUFDM0IsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1UsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JYLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFDTFksSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFERixNQUVGWCxpREFBVSxDQUFDRyw2Q0FBRCxDQUZkO0FBSUEsTUFBSVMsTUFBTSxHQUFHVixzREFBUyxFQUF0QjtBQUVBSCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZixRQUFJWSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNsQkMsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNBO0FBQ0QsR0FKUSxFQUlOLENBQUNGLElBQUQsQ0FKTSxDQUFUOztBQU1BLFFBQU1HLFlBQVksR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFDakNBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBUCxJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBRUEsVUFBTVEsTUFBTSxHQUFHO0FBQ2RDLE1BQUFBLEdBQUcsRUFBRUMsNkJBRFM7QUFFZEcsTUFBQUEsZUFBZSxFQUFFO0FBRkgsS0FBZjtBQUtBLFVBQU1yQixtREFBQSxHQUVKdUIsc0JBRkksQ0FFbUJsQixLQUZuQixFQUUwQlcsTUFGMUIsRUFHSlEsSUFISSxDQUdDLE1BQU07QUFDWGxCLE1BQUFBLFFBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUUsTUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBTCxNQUFBQSxxREFBSyxDQUFDLDBDQUFELENBQUw7QUFDQSxLQVBJLEVBUUpzQixLQVJJLENBUUdDLEdBQUQsSUFBUztBQUNmbEIsTUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBTCxNQUFBQSxxREFBSyxDQUFDdUIsR0FBRyxDQUFDQyxPQUFMLENBQUw7QUFDQSxLQVhJLENBQU47QUFZQSxHQXJCRDs7QUFzQkEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFDLDBCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBS0M7QUFBTSxlQUFTLEVBQUMsU0FBaEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLCtCQUNDO0FBQ0MsY0FBSSxFQUFDLE9BRE47QUFFQyxtQkFBUyxFQUFDLFVBRlg7QUFHQyxlQUFLLEVBQUV0QixLQUhSO0FBSUMsa0JBQVEsRUFBR1MsQ0FBRCxJQUFPUixRQUFRLENBQUNRLENBQUMsQ0FBQ2MsTUFBRixDQUFTQyxLQUFWLENBSjFCO0FBS0MscUJBQVcsRUFBQyxpQkFMYjtBQU1DLG1CQUFTO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFXQztBQUFBLCtCQUNDO0FBQ0MsbUJBQVMsRUFBQyxtQkFEWDtBQUVDLGtCQUFRLEVBQUUsQ0FBQ3hCLEtBQUQsSUFBVUUsT0FGckI7QUFHQyxpQkFBTyxFQUFFTSxZQUhWO0FBQUEsb0JBS0VOLE9BQU8sR0FBRyxlQUFILEdBQXFCO0FBTDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQTZCQSxDQWxFRDs7QUFvRUEsaUVBQWVILGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlbnRvcnlhcHAvLi9wYWdlcy9yZXNldFBhc3MuanM/ZDEzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuY29uc3QgcGFzc3dvcmRSZXNldCA9ICgpID0+IHtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qge1xuXHRcdHN0YXRlOiB7IHVzZXIgfSxcblx0fSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cblx0bGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHVzZXIgIT09IG51bGwpIHtcblx0XHRcdHJvdXRlci5wdXNoKCcvJyk7XG5cdFx0fVxuXHR9LCBbdXNlcl0pO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cblx0XHRjb25zdCBjb25maWcgPSB7XG5cdFx0XHR1cmw6IHByb2Nlc3MuZW52LnBhc3N3b3JkUmVzZXRSZWRpcmVjdCxcblx0XHRcdGhhbmRsZUNvZGVJbkFwcDogdHJ1ZSxcblx0XHR9O1xuXG5cdFx0YXdhaXQgZmlyZWJhc2Vcblx0XHRcdC5hdXRoKClcblx0XHRcdC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsLCBjb25maWcpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHNldEVtYWlsKCcnKTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdHRvYXN0KCdDaGVjayB5b3VyIGVtYWlsIGZvciBwYXNzd29yZCByZXNldCBsaW5rJyk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdHRvYXN0KGVyci5tZXNzYWdlKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSd1aSBjb250YWluZXInPlxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndWkgaGVhZGVyIGNlbnRlciBhbGlnbmVkJz5cblx0XHRcdFx0SWYgeW91IGhhdmUgYWxyZWFkeSByZWdpc3RlcmVkLCB5b3UgY2FuIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcyB0byByZWNlaXZlXG5cdFx0XHRcdGEgcGFzc3dvcmQgcmVzZXQgbGlua1xuXHRcdFx0PC9oMj5cblx0XHRcdDxmb3JtIGNsYXNzTmFtZT0ndWkgZm9ybSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPSdlbWFpbCdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndWkgaW5wdXQnXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgZW1haWwnXG5cdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3VpIHByaW1hcnkgYnV0dG9uJ1xuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFlbWFpbCB8fCBsb2FkaW5nfVxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlU3VibWl0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtsb2FkaW5nID8gJ1Byb2Nlc3NpbmcuLi4nIDogJ1N1Ym1pdCd9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFzc3dvcmRSZXNldDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzZVJvdXRlciIsIkNvbnRleHQiLCJ0b2FzdCIsInBhc3N3b3JkUmVzZXQiLCJlbWFpbCIsInNldEVtYWlsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdGF0ZSIsInVzZXIiLCJyb3V0ZXIiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uZmlnIiwidXJsIiwicHJvY2VzcyIsImVudiIsInBhc3N3b3JkUmVzZXRSZWRpcmVjdCIsImhhbmRsZUNvZGVJbkFwcCIsImF1dGgiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwidGhlbiIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/resetPass.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-toastify");

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
var __webpack_exports__ = (__webpack_exec__("./pages/resetPass.js"));
module.exports = __webpack_exports__;

})();