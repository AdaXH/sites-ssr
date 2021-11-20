(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"Page": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/create-context.ts":
/*!*********************************!*\
  !*** ./build/create-context.ts ***!
  \*********************************/
/*! exports provided: STORE_CONTEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_CONTEXT", function() { return STORE_CONTEXT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// The file is provisional，don't depend on it

var STORE_CONTEXT = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  state: {}
});


/***/ }),

/***/ "./build/ssr-temporary-routes.js":
/*!***************************************!*\
  !*** ./build/ssr-temporary-routes.js ***!
  \***************************************/
/*! exports provided: FeRoutes, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeRoutes", function() { return FeRoutes; });
/* harmony import */ var _components_layout_App_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/layout/App.tsx */ "./web/components/layout/App.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _components_layout_App_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _store_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/index.ts */ "./web/store/index.ts");
/* empty/unused harmony star reexport */// The file is provisional，don't depend on it 
var FeRoutes = [{
  "path": "/",
  "component": function dynamicComponent() {
    return Promise.resolve(/*! import() | index */).then(__webpack_require__.bind(null, /*! @/pages/index/render.tsx */ "./web/pages/index/render.tsx"));
  },
  "webpackChunkName": "index",
  "fetch": function fetch() {
    return Promise.resolve(/*! import() | index-fetch */).then(__webpack_require__.bind(null, /*! @/pages/index/fetch.ts */ "./web/pages/index/fetch.ts"));
  }
}];



/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/arrayLikeToArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/arrayLikeToArray.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/arrayWithHoles.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/arrayWithHoles.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/asyncToGenerator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createForOfIteratorHelper; });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/defineProperty.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/defineProperty.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/iterableToArray.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/iterableToArray.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/nonIterableRest.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/objectSpread2.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/objectSpread2.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/toConsumableArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/iterableToArrayLimit.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/nonIterableRest.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/nonIterableRest.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/slicedToArray.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/slicedToArray.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/icon/style/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/icon/style/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/_antd@4.16.13@antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/_antd@4.16.13@antd/lib/icon/style/index.less");

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/icon/style/index.less":
/*!*******************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/icon/style/index.less ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/layout/style/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/layout/style/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/_antd@4.16.13@antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/_antd@4.16.13@antd/lib/layout/style/index.less");

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/layout/style/index.less":
/*!*********************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/layout/style/index.less ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/menu/style/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/menu/style/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/_antd@4.16.13@antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/_antd@4.16.13@antd/lib/menu/style/index.less");

__webpack_require__(/*! ../../tooltip/style */ "./node_modules/_antd@4.16.13@antd/lib/tooltip/style/index.js");

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/menu/style/index.less":
/*!*******************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/menu/style/index.less ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/message/style/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/message/style/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/_antd@4.16.13@antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/_antd@4.16.13@antd/lib/message/style/index.less");

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/message/style/index.less":
/*!**********************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/message/style/index.less ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/style/index.less":
/*!**************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/style/index.less ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/tooltip/style/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/tooltip/style/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/_antd@4.16.13@antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/_antd@4.16.13@antd/lib/tooltip/style/index.less");

/***/ }),

/***/ "./node_modules/_antd@4.16.13@antd/lib/tooltip/style/index.less":
/*!**********************************************************************!*\
  !*** ./node_modules/_antd@4.16.13@antd/lib/tooltip/style/index.less ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/_ssr-plugin-react@6.1.6@ssr-plugin-react/cjs/entry/server-entry.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_ssr-plugin-react@6.1.6@ssr-plugin-react/cjs/entry/server-entry.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/slicedToArray.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/asyncToGenerator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverRender = void 0;

var React = __webpack_require__(/*! react */ "react");

var ssr_server_utils_1 = __webpack_require__(/*! ssr-server-utils */ "ssr-server-utils");

var serialize = __webpack_require__(/*! serialize-javascript */ "serialize-javascript"); // @ts-expect-error


var Routes = __webpack_require__(/*! _build/ssr-temporary-routes */ "./build/ssr-temporary-routes.js"); // @ts-expect-error


var create_context_1 = __webpack_require__(/*! _build/create-context */ "./build/create-context.ts"); // @ts-expect-error


var index_tsx_1 = __webpack_require__(/*! @/components/layout/index.tsx */ "./web/components/layout/index.tsx");

var FeRoutes = Routes.FeRoutes,
    layoutFetch = Routes.layoutFetch,
    PrefixRouterBase = Routes.PrefixRouterBase,
    state = Routes.state;

var serverRender = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx, config) {
    var _a, _b, cssOrder, jsOrder, dynamic, mode, chunkName, parallelFetch, disableClientRender, prefix, path, base, routeItem, viteMode, dynamicCssOrder, manifest, injectCss, injectScript, staticList, isCsr, component, fetch, Component, layoutFetchData, fetchData, currentFetch, _yield$Promise$all, _yield$Promise$all2, combineData, injectState;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cssOrder = config.cssOrder, jsOrder = config.jsOrder, dynamic = config.dynamic, mode = config.mode, chunkName = config.chunkName, parallelFetch = config.parallelFetch, disableClientRender = config.disableClientRender, prefix = config.prefix;
            global.window = (_a = global.window) !== null && _a !== void 0 ? _a : {}; // 防止覆盖上层应用自己定义的 window 对象

            path = ctx.request.path; // 这里取 pathname 不能够包含 queryString

            base = prefix !== null && prefix !== void 0 ? prefix : PrefixRouterBase; // 以开发者实际传入的为最高优先级

            if (base) {
              path = (0, ssr_server_utils_1.normalizePath)(path, base);
            }

            routeItem = (0, ssr_server_utils_1.findRoute)(FeRoutes, path);
            viteMode = process.env.BUILD_TOOL === 'vite';

            if (routeItem) {
              _context.next = 9;
              break;
            }

            throw new Error("\n    \u67E5\u627E\u7EC4\u4EF6\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u5F53\u524D path: ".concat(path, " \u5BF9\u5E94\u524D\u7AEF\u7EC4\u4EF6\u662F\u5426\u5B58\u5728\n    \u82E5\u521B\u5EFA\u4E86\u65B0\u7684\u9875\u9762\u6587\u4EF6\u5939\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C npm start \u91CD\u542F\u670D\u52A1\n    "));

          case 9:
            dynamicCssOrder = cssOrder;

            if (!(dynamic && !viteMode)) {
              _context.next = 15;
              break;
            }

            dynamicCssOrder = cssOrder.concat(["".concat(routeItem.webpackChunkName, ".css")]);
            _context.next = 14;
            return (0, ssr_server_utils_1.addAsyncChunk)(dynamicCssOrder, routeItem.webpackChunkName);

          case 14:
            dynamicCssOrder = _context.sent;

          case 15:
            if (!viteMode) {
              _context.next = 19;
              break;
            }

            _context.t0 = {};
            _context.next = 22;
            break;

          case 19:
            _context.next = 21;
            return (0, ssr_server_utils_1.getManifest)();

          case 21:
            _context.t0 = _context.sent;

          case 22:
            manifest = _context.t0;
            injectCss = [];

            if (viteMode) {
              injectCss.push(React.createElement("script", {
                src: "/@vite/client",
                type: "module",
                key: "vite-client"
              }));
              injectCss.push(React.createElement("script", {
                key: "vite-react-refresh",
                type: "module",
                dangerouslySetInnerHTML: {
                  __html: " import RefreshRuntime from \"/@react-refresh\"\n      RefreshRuntime.injectIntoGlobalHook(window)\n      window.$RefreshReg$ = () => {}\n      window.$RefreshSig$ = () => (type) => type\n      window.__vite_plugin_react_preamble_installed__ = true"
                }
              }));
              injectCss.push(React.createElement("link", {
                rel: 'stylesheet',
                href: "/server/static/css/".concat(chunkName, ".css"),
                key: "vite-head-css"
              }));
            } else {
              dynamicCssOrder.forEach(function (css) {
                if (manifest[css]) {
                  var item = manifest[css];
                  injectCss.push(React.createElement("link", {
                    rel: 'stylesheet',
                    key: item,
                    href: item
                  }));
                }
              });
            }

            if (disableClientRender) {
              injectCss.push(React.createElement("script", {
                key: "disableClientRender",
                dangerouslySetInnerHTML: {
                  __html: 'window.__disableClientRender__ = true'
                }
              }));
            }

            injectScript = viteMode ? [React.createElement("script", {
              key: "viteWindowInit",
              dangerouslySetInnerHTML: {
                __html: 'window.__USE_VITE__=true'
              }
            }), React.createElement("script", {
              type: "module",
              src: '/node_modules/ssr-plugin-react/esm/entry/client-entry.js',
              key: "vite-react-entry"
            })] : jsOrder.map(function (js) {
              return manifest[js];
            }).map(function (item) {
              return React.createElement("script", {
                key: item,
                src: item
              });
            });
            staticList = {
              injectCss: injectCss,
              injectScript: injectScript
            };
            isCsr = !!(mode === 'csr' || ((_b = ctx.request.query) === null || _b === void 0 ? void 0 : _b.csr));
            component = routeItem.component, fetch = routeItem.fetch;
            _context.next = 32;
            return component();

          case 32:
            Component = _context.sent["default"];

            if (isCsr) {
              (0, ssr_server_utils_1.logGreen)("Current path ".concat(path, " use csr render mode"));
            }

            layoutFetchData = {};
            fetchData = {};

            if (isCsr) {
              _context.next = 70;
              break;
            }

            if (!fetch) {
              _context.next = 43;
              break;
            }

            _context.next = 40;
            return fetch();

          case 40:
            _context.t1 = _context.sent["default"];
            _context.next = 44;
            break;

          case 43:
            _context.t1 = null;

          case 44:
            currentFetch = _context.t1;

            if (!parallelFetch) {
              _context.next = 54;
              break;
            }

            _context.next = 48;
            return Promise.all([layoutFetch ? layoutFetch({
              ctx: ctx
            }) : Promise.resolve({}), currentFetch ? currentFetch({
              ctx: ctx
            }) : Promise.resolve({})]);

          case 48:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            layoutFetchData = _yield$Promise$all2[0];
            fetchData = _yield$Promise$all2[1];
            _context.next = 70;
            break;

          case 54:
            if (!layoutFetch) {
              _context.next = 60;
              break;
            }

            _context.next = 57;
            return layoutFetch({
              ctx: ctx
            });

          case 57:
            _context.t2 = _context.sent;
            _context.next = 61;
            break;

          case 60:
            _context.t2 = {};

          case 61:
            layoutFetchData = _context.t2;

            if (!currentFetch) {
              _context.next = 68;
              break;
            }

            _context.next = 65;
            return currentFetch({
              ctx: ctx
            });

          case 65:
            _context.t3 = _context.sent;
            _context.next = 69;
            break;

          case 68:
            _context.t3 = {};

          case 69:
            fetchData = _context.t3;

          case 70:
            combineData = isCsr ? null : Object.assign(state !== null && state !== void 0 ? state : {}, layoutFetchData !== null && layoutFetchData !== void 0 ? layoutFetchData : {}, fetchData !== null && fetchData !== void 0 ? fetchData : {});
            injectState = isCsr ? null : React.createElement("script", {
              dangerouslySetInnerHTML: {
                __html: "window.__USE_SSR__=true; window.__INITIAL_DATA__ =".concat(serialize(combineData))
              }
            });
            return _context.abrupt("return", React.createElement(create_context_1.STORE_CONTEXT.Provider, {
              value: {
                state: combineData
              }
            }, React.createElement(index_tsx_1["default"], {
              ctx: ctx,
              config: config,
              staticList: staticList,
              injectState: injectState
            }, isCsr ? React.createElement(React.Fragment, null) : React.createElement(Component, null))));

          case 73:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function serverRender(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.serverRender = serverRender;

/***/ }),

/***/ "./web/common/lib/history.ts":
/*!***********************************!*\
  !*** ./web/common/lib/history.ts ***!
  \***********************************/
/*! exports provided: history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);

var history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createMemoryHistory"])();

/***/ }),

/***/ "./web/common/lib/index.ts":
/*!*********************************!*\
  !*** ./web/common/lib/index.ts ***!
  \*********************************/
/*! exports provided: history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./web/common/lib/history.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return _history__WEBPACK_IMPORTED_MODULE_0__["history"]; });



/***/ }),

/***/ "./web/components/Notification/index.tsx":
/*!***********************************************!*\
  !*** ./web/components/Notification/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/_antd@4.16.13@antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./web/components/Notification/styles.css");



var Notification = {};

var setInstance = function setInstance() {
  ["error", "fail", "warning", "success"].forEach(function (_type_) {
    var key = _type_;

    Notification[_type_] = function (args) {
      return Component(args, key);
    };
  });
};

setInstance();

antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.config({
  top: window.innerHeight / 3
});

var Component = function Component(props, _type_) {
  var _props$msg = props.msg,
      msg = _props$msg === void 0 ? "通知" : _props$msg;

  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a[_type_ === "fail" ? "error" : _type_](msg);
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./web/components/Notification/styles.css":
/*!************************************************!*\
  !*** ./web/components/Notification/styles.css ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/layout/App.tsx":
/*!***************************************!*\
  !*** ./web/components/layout/App.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.less */ "./web/components/layout/common.less");
// 此文件将会在服务端/客户端都将会用到

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return props.children;
});

/***/ }),

/***/ "./web/components/layout/admin/aside.tsx":
/*!***********************************************!*\
  !*** ./web/components/layout/admin/aside.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/_antd@4.16.13@antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/_antd@4.16.13@antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/_antd@4.16.13@antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant */ "./web/components/layout/admin/constant.ts");







var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\layout\\admin\\aside.tsx";



var Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Sider;
var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.SubMenu;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var history = _ref.history;
  var defaultKey = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    var pathname = history.location.pathname;
    return (pathname === null || pathname === void 0 ? void 0 : pathname.replace('super-admin/', '')) || '';
  }, [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Sider, {
    width: 200,
    style: {
      background: '#fff'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
    mode: "inline",
    defaultSelectedKeys: [defaultKey],
    defaultOpenKeys: _constant__WEBPACK_IMPORTED_MODULE_7__["MENUS"].map(function (item) {
      return item.title;
    }),
    style: {
      height: '100%',
      borderRight: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, _constant__WEBPACK_IMPORTED_MODULE_7__["MENUS"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SubMenu, {
      key: item.title,
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: item.icon,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }), item.title),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, item.menus.map(function (menu) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        onClick: function onClick() {
          return history.push("/super-admin".concat(menu.path));
        },
        key: menu.path,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      }, menu.title);
    }));
  })));
});

/***/ }),

/***/ "./web/components/layout/admin/constant.ts":
/*!*************************************************!*\
  !*** ./web/components/layout/admin/constant.ts ***!
  \*************************************************/
/*! exports provided: MENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUS", function() { return MENUS; });
var MENUS = [{
  title: '用户管理',
  icon: 'user',
  menus: [{
    title: '用户列表',
    path: '/user-list'
  }]
}, {
  title: '站点管理',
  icon: 'laptop',
  menus: [{
    title: '技术类',
    path: '/siteslist/technology'
  }, {
    title: '生活类',
    path: '/siteslist/life'
  }, {
    title: '资讯类',
    path: '/siteslist/info'
  }, {
    title: '其它站点',
    path: '/siteslist/others'
  }]
}, {
  title: '前台管理',
  icon: 'skin',
  menus: [{
    title: '新建投放',
    path: '/web/page-src/create'
  }, {
    title: '页面素材列表',
    path: '/web/page-src/list'
  }]
}];

/***/ }),

/***/ "./web/components/layout/admin/header.tsx":
/*!************************************************!*\
  !*** ./web/components/layout/admin/header.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/_antd@4.16.13@antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/layout/admin/styles.module.less");



var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\layout\\admin\\header.tsx";



var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Header;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Header, {
    className: "header",
    style: {
      position: 'fixed',
      zIndex: 10,
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconjishu iconfont",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), "Super-admin")));
});

/***/ }),

/***/ "./web/components/layout/admin/index.tsx":
/*!***********************************************!*\
  !*** ./web/components/layout/admin/index.tsx ***!
  \***********************************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/_antd@4.16.13@antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./web/components/layout/admin/header.tsx");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aside */ "./web/components/layout/admin/aside.tsx");
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/layout/admin/styles.module.less");



var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\layout\\admin\\index.tsx";





var Admin = function Admin(_ref) {
  var children = _ref.children,
      history = _ref.history;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].layout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    history: history,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].con,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_aside__WEBPACK_IMPORTED_MODULE_4__["default"], {
    history: history,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, children)));
};

/***/ }),

/***/ "./web/components/layout/admin/styles.module.less":
/*!********************************************************!*\
  !*** ./web/components/layout/admin/styles.module.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"logo":"styles-module__logo___3Qh7E","layout":"styles-module__layout___3g9S8","con":"styles-module__con___36hQY"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/layout/common.less":
/*!*******************************************!*\
  !*** ./web/components/layout/common.less ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/layout/commonLayout/index.tsx":
/*!******************************************************!*\
  !*** ./web/components/layout/commonLayout/index.tsx ***!
  \******************************************************/
/*! exports provided: CommonLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayout", function() { return CommonLayout; });
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/hooks */ "./web/utils/hooks.ts");
/* harmony import */ var _design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../design */ "./web/components/layout/design/index.tsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header */ "./web/components/layout/header/index.tsx");
/* harmony import */ var _topImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topImg */ "./web/components/layout/topImg/index.tsx");
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/layout/commonLayout/styles.module.less");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin */ "./web/components/layout/admin/index.tsx");


var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\layout\\commonLayout\\index.tsx";








var CommonLayout = function CommonLayout(props) {
  var children = props.children,
      history = props.history;
  var _history$location$pat = history.location.pathname,
      pathname = _history$location$pat === void 0 ? '' : _history$location$pat;
  if (/super-admin/.test(pathname)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_admin__WEBPACK_IMPORTED_MODULE_7__["Admin"], {
    history: history,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 44
    }
  }, children);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pathname),
      _useState2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      keyPath = _useState2[0],
      setPath = _useState2[1];

  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_2__["useDidMount"])(function () {
    history.listen(function (_ref) {
      var path = _ref.pathname;
      return setPath(path);
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    history: history,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_topImg__WEBPACK_IMPORTED_MODULE_5__["TopImg"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].animate,
    key: keyPath,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_design__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./web/components/layout/commonLayout/styles.module.less":
/*!***************************************************************!*\
  !*** ./web/components/layout/commonLayout/styles.module.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"body":"styles-module__body___A8L3L","animate":"styles-module__animate___2rXBD","fadeIn":"styles-module__fadeIn___1UjX7","scale":"styles-module__scale___2Xs6U","left2Right":"styles-module__left2Right___1GniA"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/layout/design/index.tsx":
/*!************************************************!*\
  !*** ./web/components/layout/design/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/layout/design/styles.module.less");
var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\layout\\design\\index.tsx";



/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_1__["default"].footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "Copyright (c) Sites Group All Rights Reserved.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "blank",
    "data-line": true,
    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602011734",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "NO : 33010602011734"));
}));

/***/ }),

/***/ "./web/components/layout/design/styles.module.less":
/*!*********************************************************!*\
  !*** ./web/components/layout/design/styles.module.less ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"footer":"styles-module__footer___2C49u"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/layout/header/constant.ts":
/*!**************************************************!*\
  !*** ./web/components/layout/header/constant.ts ***!
  \**************************************************/
/*! exports provided: routes, MAX_TOP_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_TOP_HEIGHT", function() { return MAX_TOP_HEIGHT; });
var routes = [{
  path: '/',
  title: '首页',
  icon: 'iconhome-line',
  desc: '解锁收藏、留言、点赞等功能',
  bgColor: '#b5f1e8',
  iconfont: 'iconhome-line'
}, // {
//   path: '/sites/*',
//   iconfont: 'iconweb',
// },
{
  path: '/sites',
  type: 'more',
  iconfont: 'iconweb',
  childRoutes: [{
    path: '/sites/technology',
    title: 'Technology'
  }, {
    path: '/sites/life',
    title: 'Life'
  }, {
    path: '/sites/info',
    title: 'Info'
  }, {
    path: '/sites/others',
    title: 'Others'
  }, {
    path: '/sites/submit-site',
    title: 'Join us'
  }]
}, // {
//   path: '/technology',
//   title: 'Technology',
//   icon: 'icon-zuzhiheguanlitubiao-',
//   desc: '技术类站点',
//   bgColor: '#f5c56c',
// },
// {
//   path: '/life',
//   title: 'Life',
//   icon: 'icon-coffee-01',
//   desc: '生活类站点',
//   bgColor: '#c9d1f9',
// },
// {
//   path: '/info',
//   title: 'News',
//   icon: 'icon-xunxix',
//   desc: '资讯类站点',
//   bgColor: '#fdaeae',
// },
// {
//   path: '/others',
//   title: 'Others',
//   icon: 'icon-qita',
//   desc: '其他站点',
//   bgColor: '#e6cd6a',
// },
// {
//   path: '/submit-site',
//   title: 'Submit',
//   icon: 'icon-jurassic_add-project',
//   desc: '需先登录，提交后等待审核',
//   bgColor: '#eadfc8',
// },
{
  path: '/search',
  title: '搜索',
  icon: 'icon-search',
  bgColor: '#eadfc8',
  iconfont: 'icon-search1'
}, // {
//   path: '/user-center',
//   title: '个人中心',
//   iconfont: 'iconuser1',
//   needLogin: true,
// },
{
  path: '/more',
  type: 'more',
  title: '更多',
  iconfont: 'iconMore',
  childRoutes: [{
    path: '/more/about',
    title: 'About'
  }]
} // {
//   path: '/share-to-qq',
//   title: 'qq登录',
//   icon: 'icon-qq',
// },
// {
//   path: '/share-to-weibo',
//   title: '分享到微博',
//   icon: 'icon-weibo',
// },
// {
//   path: '/icon-weixin',
//   title: '微信二维码',
//   icon: 'icon-weixin',
// },
];
var MAX_TOP_HEIGHT = 200;

/***/ }),

/***/ "./web/components/layout/header/index.tsx":
/*!************************************************!*\
  !*** ./web/components/layout/header/index.tsx ***!
  \************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./web/components/layout/header/constant.ts");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constant */ "./web/utils/constant.ts");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./web/components/layout/header/menu/index.tsx");
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/layout/header/styles.module.less");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/functions */ "./web/utils/functions.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);



var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\layout\\header\\index.tsx";








var TITLE = _utils_constant__WEBPACK_IMPORTED_MODULE_4__["SITE_BASIC_INFO"].TITLE;
var Header = function Header(props) {
  var history = props.history,
      _props$user = props.user,
      user = _props$user === void 0 ? {} : _props$user;
  console.log('history', history);
  var pathname = history.location.pathname,
      push = history.push;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(pathname),
      _useState2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      activePath = _useState2[0],
      setPath = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    history.listen(function () {
      var pathname = history.location.pathname;

      var _ref = _constant__WEBPACK_IMPORTED_MODULE_3__["routes"].find(function (item) {
        if (!item.childRoutes) {
          return item.path === pathname;
        }

        return item.childRoutes.find(function (iItem) {
          return iItem.path === pathname;
        });
      }) || {},
          title = _ref.title;

      setPath(pathname);
      document.title = pathname === '/' ? TITLE : "".concat(title || '', " ").concat(TITLE) || TITLE;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }, [user.isLogin]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  function renderLinks(links) {
    var _this2 = this;

    return links.map(function (item, index) {
      var hidden = item.hidden,
          permission = item.permission,
          type = item.type,
          childRoutes = item.childRoutes,
          path = item.path,
          title = item.title,
          iconfont = item.iconfont,
          needLogin = item.needLogin;
      if (hidden || permission && !user.admin) return null;
      if (needLogin && !user.isLogin) return null;
      var renderTitle = iconfont ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "iconfont ".concat(iconfont),
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 38
        }
      }) : title;
      var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        key: path,
        onClick: function onClick() {
          return push(path);
        },
        "data-url": path,
        "data-current": activePath === path,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, renderTitle);

      if (type === 'more' && (childRoutes === null || childRoutes === void 0 ? void 0 : childRoutes.length)) {
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
          push: push,
          iconfont: iconfont,
          pathname: pathname,
          routes: childRoutes,
          parent: item,
          key: path,
          visible: visible,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        style: {
          animationDelay: "".concat(index * 0.05, "s")
        },
        key: path,
        "data-current": pathname === path,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }, content);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function listenScroll(e) {
      var top = document.scrollingElement.scrollTop;
      setVisible(top >= _constant__WEBPACK_IMPORTED_MODULE_3__["MAX_TOP_HEIGHT"]);
    }

    window.addEventListener('scroll', Object(_utils_functions__WEBPACK_IMPORTED_MODULE_7__["simpleThrole"])(function (e) {
      return listenScroll(e);
    }));
    return function () {
      return window.removeEventListener('scroll', Object(_utils_functions__WEBPACK_IMPORTED_MODULE_7__["simpleThrole"])(function (e) {
        return listenScroll(e);
      }));
    };
  }, []);

  var toTop = function toTop() {
    return window.scrollTo({
      top: 0
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-hidden": visible,
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].wrap, Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].dark, visible)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    "data-hidden": visible,
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].header, Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].dark, visible)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].logo,
    onClick: function onClick() {
      return history.push('/');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, "site|ink"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].bottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "sites.link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, renderLinks(_constant__WEBPACK_IMPORTED_MODULE_3__["routes"]))), visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].toTop,
    onClick: toTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconqianjin1 iconfont",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  })));
};

/***/ }),

/***/ "./web/components/layout/header/menu/index.tsx":
/*!*****************************************************!*\
  !*** ./web/components/layout/header/menu/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/layout/header/menu/styles.module.less");


var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\layout\\header\\menu\\index.tsx";




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var routes = _ref.routes,
      parent = _ref.parent,
      iconfont = _ref.iconfont,
      pathname = _ref.pathname,
      push = _ref.push,
      visible = _ref.visible;
  if (!routes) return null;

  var _onClick = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  var renderTitle = iconfont ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconfont ".concat(iconfont),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 34
    }
  }) : parent === null || parent === void 0 ? void 0 : parent.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].moreBox,
    "data-current": pathname === null || pathname === void 0 ? void 0 : pathname.includes(parent.path),
    "data-url": parent === null || parent === void 0 ? void 0 : parent.path,
    onClick: function onClick(e) {
      return _onClick(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, renderTitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].con, Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].bg, visible)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, routes.map(function (_ref2) {
    var path = _ref2.path,
        title = _ref2.title,
        hidden = _ref2.hidden;
    if (hidden) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      // to={path}
      onClick: function onClick() {
        return push(path);
      } // url={path}
      ,
      "data-current": pathname === path,
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].moreItem,
      "data-url": path,
      key: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, title);
  })));
});

/***/ }),

/***/ "./web/components/layout/header/menu/styles.module.less":
/*!**************************************************************!*\
  !*** ./web/components/layout/header/menu/styles.module.less ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"moreBox":"styles-module__moreBox___2OeaK","con":"styles-module__con___3TODX","moreItem":"styles-module__moreItem___2gQmh","a":"styles-module__a___2fZ0k","slidDown":"styles-module__slidDown___3lKp6"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/layout/header/styles.module.less":
/*!*********************************************************!*\
  !*** ./web/components/layout/header/styles.module.less ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"header":"styles-module__header___3L16W","search":"styles-module__search___3Sc9R","logo":"styles-module__logo___NvthW","bottom":"styles-module__bottom___3c5eN","blogTitle":"styles-module__blogTitle___2Sluc","fadeIn":"styles-module__fadeIn___1wYV0","navLine":"styles-module__navLine___3lMCy","nav":"styles-module__nav___3hptp","wrap":"styles-module__wrap___2g5JK","toTop":"styles-module__toTop___3dOq3","scale":"styles-module__scale___BDNn3","left2Right":"styles-module__left2Right___3FDuD","bgWhite":"styles-module__bgWhite___1mYTH"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/layout/index.tsx":
/*!*****************************************!*\
  !*** ./web/components/layout/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./web/components/layout/App.tsx");
var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\layout\\index.tsx";


 // const history = createLocation();

var Layout = function Layout(props) {
  var injectState = props.injectState;
  var _ref = props.staticList,
      injectCss = _ref.injectCss,
      injectScript = _ref.injectScript;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Serverless Side Render"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "var w = document.documentElement.clientWidth / 3.75;document.getElementsByTagName('html')[0].style['font-size'] = w + 'px'"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), injectCss), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "app",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }))), injectState, injectScript));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./web/components/layout/topImg/index.tsx":
/*!************************************************!*\
  !*** ./web/components/layout/topImg/index.tsx ***!
  \************************************************/
/*! exports provided: TopImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopImg", function() { return TopImg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/layout/topImg/styles.module.less");
var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\layout\\topImg\\index.tsx";



var TopImg = function TopImg() {
  var _ref = {},
      image = _ref.image; // useEffect(() => {
  //   document.body.style.backgroundColor = `${bgColor}`;
  // }, [bgColor]);
  // const [loaded, setLoad] = useState<boolean>(false);
  // useEffect(() => {
  //   setLoad(false);
  //   simpleLoadImg(image).then(() => setLoad(true));
  // }, [image]);
  // if (!image || !loaded) return <div className={styles.default} />;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    key: image,
    alt: "image",
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_1__["default"].layoutBg,
    src: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  });
};

/***/ }),

/***/ "./web/components/layout/topImg/styles.module.less":
/*!*********************************************************!*\
  !*** ./web/components/layout/topImg/styles.module.less ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"layoutBg":"styles-module__layoutBg___NheSp","fadeIn":"styles-module__fadeIn___3PVmj","default":"styles-module__default___1lUHQ","scale":"styles-module__scale___11Tcv","left2Right":"styles-module__left2Right___36FD7"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/loading/index.tsx":
/*!******************************************!*\
  !*** ./web/components/loading/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/loading/styles.module.less");
var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\loading\\index.tsx";





var mountComponent = function mountComponent(component) {
  var parent = document.getElementById('__wrapComponent__');

  if (!parent) {
    var __wrapComponent__ = document.createElement('div');

    __wrapComponent__.id = '__wrapComponent__';
    document.getElementsByTagName('body')[0].appendChild(__wrapComponent__);
  }

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(component({}), document.getElementById('__wrapComponent__'));
};

var showLoading = function showLoading(destory) {
  var component = function component() {
    if (destory) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_2__["default"].loadingUI,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_2__["default"].loadingContainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_2__["default"]['k-ball7a'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_2__["default"]['k-ball7b'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_2__["default"]['k-ball7c'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_2__["default"]['k-ball7d'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    })));
  };

  mountComponent(function () {
    return component();
  });
};

var Loading = {
  show: function show() {
    return showLoading(false);
  },
  hide: function hide() {
    return showLoading(true);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./web/components/loading/styles.module.less":
/*!***************************************************!*\
  !*** ./web/components/loading/styles.module.less ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"loadingUI":"styles-module__loadingUI___eyNEi","loadingContainer":"styles-module__loadingContainer___2LBdN","k-ball7a":"styles-module__k-ball7a___14sgu","k-loadingO":"styles-module__k-loadingO___3_RS_","k-ball7b":"styles-module__k-ball7b___GeUaQ","k-ball7c":"styles-module__k-ball7c___xJb-k","k-ball7d":"styles-module__k-ball7d___1AbmW"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/loginModal/index.tsx":
/*!*********************************************!*\
  !*** ./web/components/loginModal/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loginBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginBox */ "./web/components/loginModal/loginBox/index.tsx");
var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\loginModal\\index.tsx";





var mountComponent = function mountComponent(component) {
  var parent = document.getElementById('__wrapComponent____login');

  if (!parent) {
    var __wrapComponent__ = document.createElement('div');

    __wrapComponent__.id = '__wrapComponent____login';
    document.getElementsByTagName('body')[0].appendChild(__wrapComponent__);
  }

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(component({}), document.getElementById('__wrapComponent____login'));
};

var showLogin = function showLogin(destory, props, autoClose) {
  var Component = function Component() {
    if (destory) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loginBox__WEBPACK_IMPORTED_MODULE_2__["LoginBox"], Object.assign({}, props, {
      autoClose: autoClose,
      onClose: function onClose() {
        return LoginModal.hide();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 12
      }
    }));
  };

  mountComponent(Component);
};

var LoginModal = {
  show: function show() {
    var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var bool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return showLogin(false, arg, bool);
  },
  hide: function hide() {
    return showLogin(true);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./web/components/loginModal/loginBox/component/input/index.tsx":
/*!**********************************************************************!*\
  !*** ./web/components/loginModal/loginBox/component/input/index.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/loginModal/loginBox/component/input/styles.module.less");


var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\loginModal\\loginBox\\component\\input\\index.tsx";




var Component = function Component(_ref) {
  var value = _ref.value,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      onEnter = _ref.onEnter;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!!value),
      _useState2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      _ = _useState2[0],
      setFoucus = _useState2[1]; // const nameStyle = useMemo(() => {
  //   const style: any = {};
  //   style.transform = `translate3d(${isFocus ? '0px' : '10px'}, ${isFocus ? '-18px' : '0'}, 0)`;
  //   return style;
  // }, [isFocus]);


  var onInsert = function onInsert(e) {
    onChange(e.target.value);
  };

  var _onKeyDown = function onKeyDown(e) {
    var _e$target;

    onChange(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);

    if ((e === null || e === void 0 ? void 0 : e.keyCode) === 13) {
      onEnter();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_2__["default"].inputItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    onFocus: function onFocus() {
      return setFoucus(true);
    },
    onBlur: function onBlur() {
      return setFoucus(!!value);
    },
    value: value,
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown(e);
    },
    onChange: function onChange(e) {
      return onInsert(e);
    },
    type: type,
    placeholder: name // autoComplete="off"
    // autocomplete="new-password"
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./web/components/loginModal/loginBox/component/input/styles.module.less":
/*!*******************************************************************************!*\
  !*** ./web/components/loginModal/loginBox/component/input/styles.module.less ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"inputItem":"styles-module__inputItem___9noKs"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/loginModal/loginBox/component/login/index.tsx":
/*!**********************************************************************!*\
  !*** ./web/components/loginModal/loginBox/component/login/index.tsx ***!
  \**********************************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Notification */ "./web/components/Notification/index.tsx");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/functions */ "./web/utils/functions.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../input */ "./web/components/loginModal/loginBox/component/input/index.tsx");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-base64 */ "js-base64");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-md5 */ "js-md5");
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_md5__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/loginModal/loginBox/component/login/styles.module.less");
/* harmony import */ var _components_loginModal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/loginModal/service */ "./web/components/loginModal/service.ts");






var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\loginModal\\loginBox\\component\\login\\index.tsx";









var Login = function Login(_ref) {
  var onChangePage = _ref.onChangePage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      values = _useState2[0],
      setVal = _useState2[1];

  var name = values.name,
      password = values.password;

  var setNewVal = function setNewVal(code, val) {
    setVal(Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values), {}, Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, code, val)));
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var body, _yield$login, success;

      return E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              body = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values), {}, {
                password: js_base64__WEBPACK_IMPORTED_MODULE_9__["Base64"].encode(Object(js_md5__WEBPACK_IMPORTED_MODULE_10__["hex"])(values.password || ''))
              });

              if (name) {
                _context.next = 4;
                break;
              }

              throw new Error('请输入用户名');

            case 4:
              if (!(name.length < 3 || name.length > 30)) {
                _context.next = 6;
                break;
              }

              throw new Error('用户名长度3-30位');

            case 6:
              if (password) {
                _context.next = 8;
                break;
              }

              throw new Error('请输入密码');

            case 8:
              if (!(password.length < 6 || password.length > 20)) {
                _context.next = 10;
                break;
              }

              throw new Error('密码长度6-20位');

            case 10:
              body.submitPassword = null;
              _context.next = 13;
              return Object(_components_loginModal_service__WEBPACK_IMPORTED_MODULE_12__["login"])(body);

            case 13:
              _yield$login = _context.sent;
              success = _yield$login.success;

              if (!success) {
                _context.next = 18;
                break;
              }

              window.location.reload();
              return _context.abrupt("return");

            case 18:
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](0);
              _components_Notification__WEBPACK_IMPORTED_MODULE_6__["default"].fail({
                msg: (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.errorMsg)
              });

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 20]]);
    }));

    return function onSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_11__["default"].container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "\u7528\u6237\u540D\u6216\u90AE\u7BB1",
    value: name,
    onChange: function onChange(val) {
      return setNewVal('name', val);
    },
    onEnter: onSubmit,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "\u5BC6\u7801",
    value: password,
    type: "password",
    onChange: function onChange(val) {
      return setNewVal('password', val);
    },
    onEnter: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    "data-line": true,
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_11__["default"].footer,
    onClick: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "GO", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
    className: "iconfont iconqianjin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_11__["default"].or,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "\u6CA1\u6709\u8D26\u53F7\uFF1F\u524D\u5F80", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    "data-line": true,
    onClick: function onClick() {
      return onChangePage(2);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "\u6CE8\u518C"), "\uFF0C\u6216\u4F7F\u7528", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    "data-line": true,
    onClick: _utils_functions__WEBPACK_IMPORTED_MODULE_7__["qqSign"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "QQ"), ' ', "\u5FEB\u901F\u767B\u9646"));
};

/***/ }),

/***/ "./web/components/loginModal/loginBox/component/login/styles.module.less":
/*!*******************************************************************************!*\
  !*** ./web/components/loginModal/loginBox/component/login/styles.module.less ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"or":"styles-module__or___1-Qiw","container":"styles-module__container___gDWp5","footer":"styles-module__footer___1OwRB"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/loginModal/loginBox/component/registry/email.tsx":
/*!*************************************************************************!*\
  !*** ./web/components/loginModal/loginBox/component/registry/email.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/regexp */ "./web/utils/regexp.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input */ "./web/components/loginModal/loginBox/component/input/index.tsx");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ "./web/components/loginModal/loginBox/component/registry/service.ts");
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/loginModal/loginBox/component/registry/styles.module.less");




var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\loginModal\\loginBox\\component\\registry\\email.tsx";




 // import { Button }



var Component = function Component(_ref) {
  var email = _ref.email,
      onChange = _ref.onChange,
      registerEmailCode = _ref.registerEmailCode,
      onSetEmailCode = _ref.onSetEmailCode,
      onEnter = _ref.onEnter;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      time = _useState2[0],
      setTime = _useState2[1];

  var isEmail = _utils_regexp__WEBPACK_IMPORTED_MODULE_4__["IS_EMAIL"].test(email);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      btnDisabled = _useState4[0],
      setDisabled = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (time === 0) {
      clearInterval(Component.interVal);
      setDisabled(false);
    }
  }, [time]);
  var disabledStatus = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return !isEmail || btnDisabled;
  }, [isEmail, btnDisabled]);
  var getCode = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])( /*#__PURE__*/Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, start;
    return E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!disabledStatus) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.next = 4;
            return Object(_service__WEBPACK_IMPORTED_MODULE_6__["sendCodeToEmail"])({
              email: email.trim()
            });

          case 4:
            res = _context.sent;

            if (res.success) {
              setDisabled(true);
              start = 60;
              Component.interVal = setInterval(function () {
                setTime(start);
                start -= 1;
              }, 1000);
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [disabledStatus, email]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_7__["default"].email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    name: "\u90AE\u7BB1",
    value: email,
    onChange: onChange,
    onEnter: onEnter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    onClick: getCode,
    "data-disabled": disabledStatus,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "\u70B9\u51FB\u83B7\u53D6\u9A8C\u8BC1\u7801", time !== 0 && "".concat(time, "s"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    name: "\u9A8C\u8BC1\u7801",
    onEnter: onEnter,
    value: registerEmailCode,
    onChange: onSetEmailCode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./web/components/loginModal/loginBox/component/registry/index.tsx":
/*!*************************************************************************!*\
  !*** ./web/components/loginModal/loginBox/component/registry/index.tsx ***!
  \*************************************************************************/
/*! exports provided: Registry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return Registry; });
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Notification */ "./web/components/Notification/index.tsx");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input */ "./web/components/loginModal/loginBox/component/input/index.tsx");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-base64 */ "js-base64");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email */ "./web/components/loginModal/loginBox/component/registry/email.tsx");
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-md5 */ "js-md5");
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_md5__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/loginModal/loginBox/component/registry/styles.module.less");
/* harmony import */ var _components_loginModal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/loginModal/service */ "./web/components/loginModal/service.ts");






var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\loginModal\\loginBox\\component\\registry\\index.tsx";









var Registry = function Registry(_ref) {
  var onChangePage = _ref.onChangePage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      values = _useState2[0],
      setVal = _useState2[1];

  var name = values.name,
      email = values.email,
      registerEmailCode = values.registerEmailCode,
      submitPassword = values.submitPassword,
      password = values.password;

  var setNewVal = function setNewVal(code, val) {
    setVal(Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values), {}, Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, code, val)));
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var body, _yield$registry, success;

      return E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              body = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values), {}, {
                password: js_base64__WEBPACK_IMPORTED_MODULE_8__["Base64"].encode(Object(js_md5__WEBPACK_IMPORTED_MODULE_10__["hex"])(values.password || ''))
              });

              if (name) {
                _context.next = 4;
                break;
              }

              throw new Error('请输入用户名');

            case 4:
              if (!(name.length < 3 || name.length > 30)) {
                _context.next = 6;
                break;
              }

              throw new Error('用户名长度3-30位');

            case 6:
              if (email) {
                _context.next = 8;
                break;
              }

              throw new Error('请输入邮箱');

            case 8:
              if (registerEmailCode) {
                _context.next = 10;
                break;
              }

              throw new Error('请输入验证码');

            case 10:
              if (password) {
                _context.next = 12;
                break;
              }

              throw new Error('请输入密码');

            case 12:
              if (!(password.length < 6 || password.length > 20)) {
                _context.next = 14;
                break;
              }

              throw new Error('密码长度6-20位');

            case 14:
              if (!(password !== submitPassword)) {
                _context.next = 16;
                break;
              }

              throw new Error('两次密码不一致');

            case 16:
              body.submitPassword = null;
              _context.next = 19;
              return Object(_components_loginModal_service__WEBPACK_IMPORTED_MODULE_12__["registry"])(body);

            case 19:
              _yield$registry = _context.sent;
              success = _yield$registry.success;

              if (!success) {
                _context.next = 24;
                break;
              }

              window.location.reload();
              return _context.abrupt("return");

            case 24:
              _context.next = 30;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](0);
              console.log('error', _context.t0);
              _components_Notification__WEBPACK_IMPORTED_MODULE_6__["default"].fail({
                msg: (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.errorMsg)
              });

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 26]]);
    }));

    return function onSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_11__["default"].container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "\u7528\u6237\u540D",
    value: name,
    onChange: function onChange(val) {
      return setNewVal('name', val);
    },
    onEnter: onSubmit,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_email__WEBPACK_IMPORTED_MODULE_9__["default"], {
    email: email,
    registerEmailCode: registerEmailCode,
    onSetEmailCode: function onSetEmailCode(val) {
      return setNewVal('registerEmailCode', val);
    },
    onEnter: onSubmit,
    onChange: function onChange(val) {
      return setNewVal('email', val);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "\u5BC6\u7801",
    value: password,
    type: "password",
    onChange: function onChange(val) {
      return setNewVal('password', val);
    },
    onEnter: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "\u5BC6\u7801\u786E\u8BA4",
    value: submitPassword,
    type: "password",
    onChange: function onChange(val) {
      return setNewVal('submitPassword', val);
    },
    onEnter: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    "data-line": true,
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_11__["default"].footer,
    onClick: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "GO", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
    className: "iconfont iconqianjin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_11__["default"].or,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, "\u5DF2\u6709\u8D26\u53F7\uFF1F\u524D\u5F80", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    "data-line": true,
    onClick: function onClick() {
      return onChangePage(1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "\u767B\u5F55")));
};

/***/ }),

/***/ "./web/components/loginModal/loginBox/component/registry/service.ts":
/*!**************************************************************************!*\
  !*** ./web/components/loginModal/loginBox/component/registry/service.ts ***!
  \**************************************************************************/
/*! exports provided: sendCodeToEmail, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCodeToEmail", function() { return sendCodeToEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./web/utils/request.ts");

function sendCodeToEmail(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])('api/sendCodeToEmail', 'POST', data);
}
function register(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])('api/register', 'POST', data);
}

/***/ }),

/***/ "./web/components/loginModal/loginBox/component/registry/styles.module.less":
/*!**********************************************************************************!*\
  !*** ./web/components/loginModal/loginBox/component/registry/styles.module.less ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"or":"styles-module__or___t1BzT","container":"styles-module__container___39ZDU","footer":"styles-module__footer___XELjQ","email":"styles-module__email___2xU--"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/loginModal/loginBox/constant.ts":
/*!********************************************************!*\
  !*** ./web/components/loginModal/loginBox/constant.ts ***!
  \********************************************************/
/*! exports provided: COMPONENT_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_LIST", function() { return COMPONENT_LIST; });
/* harmony import */ var _component_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/login */ "./web/components/loginModal/loginBox/component/login/index.tsx");
/* harmony import */ var _component_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/registry */ "./web/components/loginModal/loginBox/component/registry/index.tsx");
 // import { BasicInfo } from './component/baseInfo';


var COMPONENT_LIST = [// {
//   title: 'SITES.LINK',
//   Element: BasicInfo,
// },
{
  title: 'WELCOME BACK',
  Element: _component_login__WEBPACK_IMPORTED_MODULE_0__["Login"]
}, {
  title: 'JOIN US',
  Element: _component_registry__WEBPACK_IMPORTED_MODULE_1__["Registry"]
}];

/***/ }),

/***/ "./web/components/loginModal/loginBox/index.tsx":
/*!******************************************************!*\
  !*** ./web/components/loginModal/loginBox/index.tsx ***!
  \******************************************************/
/*! exports provided: LoginBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBox", function() { return LoginBox; });
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./web/components/loginModal/loginBox/constant.ts");
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.less */ "./web/components/loginModal/loginBox/styles.module.less");


var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\components\\loginModal\\loginBox\\index.tsx";




var LoginBox = function LoginBox(_ref) {
  var user = _ref.user,
      history = _ref.history,
      dispatch = _ref.dispatch,
      onClose = _ref.onClose,
      autoClose = _ref.autoClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var style = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      transform: "translate3d(0, -".concat((current - 1) * 360, "px, 0)")
    };
  }, [current]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (user === null || user === void 0 ? void 0 : user.isLogin) {
      onClose();
      history.push('/user-center');
    }
  }, [user]);
  if (user === null || user === void 0 ? void 0 : user.isLogin) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].mask,
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].loginBox,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].transform,
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, _constant__WEBPACK_IMPORTED_MODULE_2__["COMPONENT_LIST"].map(function (_ref2) {
    var title = _ref2.title,
        Element = _ref2.Element;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: title,
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_3__["default"].title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Element, {
      autoClose: autoClose,
      onClose: onClose,
      dispatch: dispatch,
      onChangePage: setCurrent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 19
      }
    })));
  }))));
};

/***/ }),

/***/ "./web/components/loginModal/loginBox/styles.module.less":
/*!***************************************************************!*\
  !*** ./web/components/loginModal/loginBox/styles.module.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"mask":"styles-module__mask___11UBS","loginBox":"styles-module__loginBox___g3wBF","scale":"styles-module__scale___2UfMX","transform":"styles-module__transform___1wsmV","item":"styles-module__item___1mY-r","title":"styles-module__title___3Cj-P","left2Right":"styles-module__left2Right___N7rgo","fadeIn":"styles-module__fadeIn___2cQWJ"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/loginModal/service.ts":
/*!**********************************************!*\
  !*** ./web/components/loginModal/service.ts ***!
  \**********************************************/
/*! exports provided: login, registry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return registry; });
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/request */ "./web/utils/request.ts");



function login(_x) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(body) {
    return E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])('api/login', 'POST', body));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _login.apply(this, arguments);
}

function registry(_x2) {
  return _registry.apply(this, arguments);
}

function _registry() {
  _registry = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(body) {
    return E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])('api/register', 'POST', body));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _registry.apply(this, arguments);
}

/***/ }),

/***/ "./web/pages/index/components/hotList/index.tsx":
/*!******************************************************!*\
  !*** ./web/pages/index/components/hotList/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/hooks */ "./web/utils/hooks.ts");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/functions */ "./web/utils/functions.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service */ "./web/pages/index/components/hotList/service.ts");
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.less */ "./web/pages/index/components/hotList/styles.module.less");





var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\pages\\index\\components\\hotList\\index.tsx";






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var history = _ref.history;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    loading: false,
    list: []
  }),
      _useState2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var query = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])( /*#__PURE__*/Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var data, _yield$queryRandom, resData;

    return E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setState(Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
              loading: true
            }));
            data = [];
            _context.prev = 2;
            _context.next = 5;
            return Object(_service__WEBPACK_IMPORTED_MODULE_7__["queryRandom"])();

          case 5:
            _yield$queryRandom = _context.sent;
            resData = _yield$queryRandom.data;
            data = resData;

          case 8:
            _context.prev = 8;
            setState({
              loading: false,
              list: data
            });
            return _context.finish(8);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2,, 8, 11]]);
  })), []);
  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_5__["useDidMount"])(query);
  var onFresh = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    query();
  }, []);
  var loading = state.loading,
      _state$list = state.list,
      list = _state$list === void 0 ? [] : _state$list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].listBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].aminWrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].loadingWrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].loadinDot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "\u968F\u673A\u63A8\u8350\uFF1A", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].updIcon,
    onClick: onFresh,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "iconfont iconshuaxin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }))), list.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].list,
    key: loading.toString(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, list.map(function (_ref3) {
    var _siteImgs$;

    var siteIcon = _ref3.siteIcon,
        siteName = _ref3.siteName,
        siteId = _ref3._id,
        siteType = _ref3.siteType,
        siteImgs = _ref3.siteImgs,
        siteDesc = _ref3.siteDesc,
        submitDate = _ref3.submitDate;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: siteId,
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].listItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].siteIconWrap,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].siteIcon,
      style: {
        backgroundImage: "url(".concat((siteImgs === null || siteImgs === void 0 ? void 0 : (_siteImgs$ = siteImgs[0]) === null || _siteImgs$ === void 0 ? void 0 : _siteImgs$.src) || siteIcon, ")")
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].right,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].top,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].siteName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 23
      }
    }, siteName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].btn,
      onClick: function onClick() {
        return history.push("/site-info?".concat(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_6__["stringify"])({
          siteType: siteType,
          siteId: siteId
        })));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 23
      }
    }, "Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].bottom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].desc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 23
      }
    }, siteDesc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: _styles_module_less__WEBPACK_IMPORTED_MODULE_8__["default"].date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 23
      }
    }, Object(_utils_functions__WEBPACK_IMPORTED_MODULE_6__["formatTime"])(submitDate)))));
  }))));
});

/***/ }),

/***/ "./web/pages/index/components/hotList/service.ts":
/*!*******************************************************!*\
  !*** ./web/pages/index/components/hotList/service.ts ***!
  \*******************************************************/
/*! exports provided: queryRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryRandom", function() { return queryRandom; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./web/utils/request.ts");

function queryRandom() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])('api/queryRandom', 'GET', {});
}

/***/ }),

/***/ "./web/pages/index/components/hotList/styles.module.less":
/*!***************************************************************!*\
  !*** ./web/pages/index/components/hotList/styles.module.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"listBox":"styles-module__listBox___er3vX","title":"styles-module__title___BjI1C","list":"styles-module__list___2Y8IZ","listItem":"styles-module__listItem___yeO3Z","siteIconWrap":"styles-module__siteIconWrap___3DaeY","siteIcon":"styles-module__siteIcon___25log","right":"styles-module__right___2kKO5","bottom":"styles-module__bottom___2IB-D","desc":"styles-module__desc___1QUoB","date":"styles-module__date___1pXuu","top":"styles-module__top___2_4kY","btn":"styles-module__btn___kN4qP"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/pages/index/fetch.ts":
/*!**********************************!*\
  !*** ./web/pages/index/fetch.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js");



var fetch = /*#__PURE__*/function () {
  var _ref2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var _apiService;

    var ctx, routerProps, data;
    return E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref.ctx, routerProps = _ref.routerProps;

            if (true) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return window.fetch('/api/index');

          case 4:
            _context.next = 6;
            return _context.sent.json();

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return (_apiService = ctx.apiService) === null || _apiService === void 0 ? void 0 : _apiService.index();

          case 11:
            _context.t0 = _context.sent;

          case 12:
            data = _context.t0;
            return _context.abrupt("return", {
              // 建议根据模块给数据加上 namespace防止数据覆盖
              indexData: data,
              user: {}
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetch(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (fetch);

/***/ }),

/***/ "./web/pages/index/render.tsx":
/*!************************************!*\
  !*** ./web/pages/index/render.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loginModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/loginModal */ "./web/components/loginModal/index.tsx");
/* harmony import */ var _common_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/lib */ "./web/common/lib/index.ts");
/* harmony import */ var _components_hotList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hotList */ "./web/pages/index/components/hotList/index.tsx");
/* harmony import */ var _build_create_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _build/create-context */ "./build/create-context.ts");
/* harmony import */ var _styles_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.less */ "./web/pages/index/styles.module.less");
/* harmony import */ var _components_layout_commonLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/layout/commonLayout */ "./web/components/layout/commonLayout/index.tsx");
var _this = undefined,
    _jsxFileName = "E:\\code\\sites-ssr\\web\\pages\\index\\render.tsx";








/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var user = props.user;
  var userInfo = user || {};

  var loginEntry = function loginEntry() {
    _components_loginModal__WEBPACK_IMPORTED_MODULE_1__["default"].show({
      history: _common_lib__WEBPACK_IMPORTED_MODULE_2__["history"],
      dispatch: dispatch,
      user: userInfo
    }, true);
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_build_create_context__WEBPACK_IMPORTED_MODULE_4__["STORE_CONTEXT"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // console.log('state', state);


  var pageConfig = userInfo.pageConfig;

  var _ref = pageConfig || {},
      mainTitle = _ref.mainTitle,
      desc = _ref.desc;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_commonLayout__WEBPACK_IMPORTED_MODULE_6__["CommonLayout"], {
    history: _common_lib__WEBPACK_IMPORTED_MODULE_2__["history"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].index,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].topWrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].siteInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].basic,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "\u201C\u56E0\u4E3A\u70ED\u7231\uFF0C \u6240\u4EE5\u76F8\u805A\u201D."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "\u7AD9\u70B9\u805A\u5408\u5E73\u53F0\uFF0C\u8BA9\u66F4\u591A\u7684\u4EBA\u8BB0\u4F4F\u60A8\u7684\u7F51\u7AD9."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "SITES.LINK")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].project,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, mainTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, desc)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].joing,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return _common_lib__WEBPACK_IMPORTED_MODULE_2__["history"].push('/sites/submit-site');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "\u63D0\u4EA4\u60A8\u7684\u7F51\u7AD9\uFF0C\u52A0\u5165\u6211\u4EEC\uFF01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "iconqianjin2 iconfont",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].userEntry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "iconuser2 iconfont",
    onClick: loginEntry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), (userInfo.admin || userInfo.superAdmin) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/super-admin/user-list",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "iconjishu iconfont",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/AdaXH/sites-front-end-pc",
    target: "_blank",
    rel: "noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icongithub1 iconfont",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].view,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hotList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    history: _common_lib__WEBPACK_IMPORTED_MODULE_2__["history"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }))));
});

/***/ }),

/***/ "./web/pages/index/styles.module.less":
/*!********************************************!*\
  !*** ./web/pages/index/styles.module.less ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"pageBox":"styles-module__pageBox___2SrbV","index":"styles-module__index___2CAsd","topWrap":"styles-module__topWrap___1VoPd","userEntry":"styles-module__userEntry___CgLJ9","siteInfo":"styles-module__siteInfo___1Qklq","joing":"styles-module__joing___3wGnC","basic":"styles-module__basic___1-OL2","project":"styles-module__project___2w-Uv","desc":"styles-module__desc___JyonR","view":"styles-module__view___3msQ2"});
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/store/index.ts":
/*!****************************!*\
  !*** ./web/store/index.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ "./web/store/src.ts");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/store/src.ts":
/*!**************************!*\
  !*** ./web/store/src.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var state = {};

function reducer() {}

/* harmony default export */ __webpack_exports__["default"] = ({
  namespace: 'pageSrc',
  state: state,
  reducer: reducer
});

/***/ }),

/***/ "./web/utils/constant.ts":
/*!*******************************!*\
  !*** ./web/utils/constant.ts ***!
  \*******************************/
/*! exports provided: NO_LOADING_API, NOERROR_API, EMOJI_CACHE_KEY, SITE_TYPE, MAP_SITE_TYPE, SITE_BASIC_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_LOADING_API", function() { return NO_LOADING_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOERROR_API", function() { return NOERROR_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMOJI_CACHE_KEY", function() { return EMOJI_CACHE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_TYPE", function() { return SITE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_SITE_TYPE", function() { return MAP_SITE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_BASIC_INFO", function() { return SITE_BASIC_INFO; });
// 不需要loading的接口
var NO_LOADING_API = ['/getUserInfo', '/getHotList', '/createSrc', '/querySrc', '/queryRandom', '/updateSrc', '/parseRss'];
var NOERROR_API = ['/getUserInfo', '/login', '/register', '/parseRss'];
var EMOJI_CACHE_KEY = '__emoji__list';
var SITE_TYPE = [{
  code: 'technology',
  name: '技术类'
}, {
  code: 'life',
  name: '生活类'
}, {
  code: 'info',
  name: '资讯类'
}, {
  code: 'others',
  name: '其它站点'
}];
var MAP_SITE_TYPE = {
  technology: '技术类',
  life: '生活类',
  info: '资讯类',
  others: '其它站点'
}; // export const FULL_SCREEN_PATH = [];

var SITE_BASIC_INFO = {
  DESC: '站点聚合平台，因为热爱，所以相聚，让更多的人知道您的网站。',
  TITLE: '站点聚合平台'
};

/***/ }),

/***/ "./web/utils/functions.ts":
/*!********************************!*\
  !*** ./web/utils/functions.ts ***!
  \********************************/
/*! exports provided: delay, getParam, setCache, getCache, hasChange, relativeTime, resetObj, qqSign, getValueByRef, stringify, formatTime, getURL2Base64, updTitleDesc, push2Baidu, sliceNumber, loadImgSize, simpleThrole, randomNum, getSrcConfig, simpleLoadImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParam", function() { return getParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCache", function() { return setCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCache", function() { return getCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasChange", function() { return hasChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relativeTime", function() { return relativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetObj", function() { return resetObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qqSign", function() { return qqSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueByRef", function() { return getValueByRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getURL2Base64", function() { return getURL2Base64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updTitleDesc", function() { return updTitleDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push2Baidu", function() { return push2Baidu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceNumber", function() { return sliceNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImgSize", function() { return loadImgSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleThrole", function() { return simpleThrole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNum", function() { return randomNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSrcConfig", function() { return getSrcConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleLoadImg", function() { return simpleLoadImg; });
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./web/utils/constant.ts");



 // import { createElement } from 'react';

moment__WEBPACK_IMPORTED_MODULE_2___default.a.locale('zh-cn');
function delay(time) {
  return new Promise(function (ok) {
    setTimeout(function () {
      ok(undefined);
    }, time * 1000);
  });
}
function getParam(search, key) {
  try {
    if (!search || !key) return null;
    var url = search.slice(1);
    var chunks = url.split('&');

    var _iterator = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(chunks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        var _item$split = item.split('='),
            _item$split2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_item$split, 2),
            k = _item$split2[0],
            value = _item$split2[1];

        if (k === key) return value || undefined;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return '';
  } catch (error) {
    return '';
  }
}
function setCache(key, data) {
  try {
    window.localStorage.setItem(key, data instanceof Object ? JSON.stringify(data) : data);
  } catch (error) {//
  }
}
function getCache(key) {
  var str = window.localStorage.getItem(key);

  if (str) {
    try {
      return JSON.parse(str);
    } catch (error) {
      return str;
    }
  }

  return null;
}
function hasChange(data1, data2) {
  return JSON.stringify(data1) !== JSON.stringify(data2);
}
function relativeTime(time) {
  if (isNaN(time)) {
    return moment__WEBPACK_IMPORTED_MODULE_2___default()(time).startOf('minute').fromNow();
  }

  return moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(Number(time))).startOf('minute').fromNow();
} // export function formatTime(time) {
//   return moment(new Date(Number(time))).format('YYYY-MM-DD HH:mm:ss');
// }

function resetObj(obj) {
  Object.keys(obj).forEach(function (key) {
    return obj[key] = '';
  });
  return obj;
}
function qqSign() {
  try {
    window.QC.Login.showPopup({
      appId: '101946967',
      redirectURI: 'https://sites.link/qq-login'
    });
  } catch (error) {}
}
function getValueByRef(ref) {
  if (ref.current) {
    return ref.current.getValue();
  }

  return null;
}
function stringify(obj) {
  if (!obj) return '';
  var result = '';
  Object.keys(obj).forEach(function (key, index) {
    var prefix = index === 0 ? '' : '&';
    result += "".concat(prefix).concat(key, "=").concat(obj[key]);
  });
  return result;
}

function setTime(str) {
  if ("".concat(str).length === 1) return "0".concat(str);
  return str;
}

function formatTime(time) {
  var date = new Date(time);
  var year = date.getFullYear();
  var month = "".concat(date.getMonth() + 1);
  var day = date.getDate() + '';
  var hour = date.getHours() + '';
  var minu = date.getMinutes() + '';
  return "".concat(year, "-").concat(setTime(month), "-").concat(setTime(day), " ").concat(setTime(hour), ":").concat(setTime(minu));
} // export function parseHtml(str) {
//   const ele = document.createElement('div');
//   ele.innerHTML = str;
//   // return ele.innerHTML;
//   return createElement('div', {}, str);
// }

function getURL2Base64(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';

    xhr.onload = function () {
      if (this.status === 200) {
        var blob = this.response;
        var fileReader = new FileReader();

        fileReader.onloadend = function (e) {
          var _e$target;

          var result = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.result;
          resolve(result);
        };

        fileReader.readAsDataURL(blob);
      }
    };

    xhr.onerror = function () {
      reject();
    };

    xhr.send();
  });
}
var TITLE = _constant__WEBPACK_IMPORTED_MODULE_3__["SITE_BASIC_INFO"].TITLE,
    DESC = _constant__WEBPACK_IMPORTED_MODULE_3__["SITE_BASIC_INFO"].DESC;
function updTitleDesc() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var desc = arguments.length > 1 ? arguments[1] : undefined;
  document.title = "".concat(title, " ").concat(TITLE);
  var _window = window,
      pathname = _window.location.pathname;
  var newDesc = pathname === '/' ? DESC : desc;
  var meta = document.querySelector('meta[name="Description"]'); // meta?.content = newDesc;

  meta === null || meta === void 0 ? void 0 : meta.setAttribute('content', newDesc); // push2Baidu();
}
function push2Baidu() {
  var _s$parentNode;

  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];

  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  } else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }

  var s = document.getElementsByTagName('script')[0];
  s === null || s === void 0 ? void 0 : (_s$parentNode = s.parentNode) === null || _s$parentNode === void 0 ? void 0 : _s$parentNode.insertBefore(bp, s);
}
function sliceNumber(num) {
  if (num.toString().length > 1) return num;
  return "0".concat(num);
}
/**
 * @description 加载图片宽高，比例
 * @param {string} src
 * @returns { width: number; height: number; ratio: number }
 */

function loadImgSize(src) {
  var img = new Image();
  img.src = src;
  return new Promise(function (resolve, reject) {
    img.onload = function (e) {
      // @ts-ignore
      var path = e.path;

      var _path = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(path, 1),
          _path$ = _path[0],
          naturalHeight = _path$.naturalHeight,
          naturalWidth = _path$.naturalWidth;

      resolve({
        width: naturalWidth,
        height: naturalWidth,
        ratio: naturalWidth / naturalHeight
      });
    };

    img.onerror = reject;
  });
}
function simpleThrole(fn) {
  var _this = this;

  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var preTime = Date.now();
  return function () {
    if (Date.now() - preTime >= delay) {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      fn.call.apply(fn, [_this].concat(arg));
      preTime = Date.now();
    }
  };
}
function randomNum(length) {
  return Math.floor(Math.random() * length);
}
/**
 * 查询页面素材
 * @param configs
 */

function getSrcConfig(configs) {
  var _location = location,
      pathname = _location.pathname;
  var config = configs.find(function (item) {
    return item.pathname === pathname;
  }) || {};
  return config;
}
function simpleLoadImg(src) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.src = src;

    img.onload = function () {
      resolve(true);
    };

    img.onerror = function () {
      reject(false);
    };
  });
}

/***/ }),

/***/ "./web/utils/hooks.ts":
/*!****************************!*\
  !*** ./web/utils/hooks.ts ***!
  \****************************/
/*! exports provided: useDidMount, useUnmount, useInterval, useLoop, useDebounce, useLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidMount", function() { return useDidMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUnmount", function() { return useUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return useInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoop", function() { return useLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return useDebounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoading", function() { return useLoading; });
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/regenerator/index.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function useDidMount(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    callback();
  }, []);
}
function useUnmount(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    return function () {
      return callback();
    };
  }, []);
}
function useInterval(callback, delay) {
  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    savedCallback.current = callback;
  }, [callback]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }

    return function () {};
  }, [delay]);
}
function useLoop(request, timeout) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState2 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState4 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  useInterval( /*#__PURE__*/Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var res;
    return E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return request();

          case 3:
            res = _context.sent;
            setResult(res);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            setError(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  })), timeout);
  return [error, result];
}
function useDebounce(value, delay) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(value),
      _useState6 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      debouncedValue = _useState6[0],
      setDebouncedValue = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
function useLoading(cb) {
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var arg = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function work() {
      return _work.apply(this, arguments);
    }

    function _work() {
      _work = Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return E_code_sites_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return cb.apply(void 0, Object(E_code_sites_ssr_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arg.current));

              case 3:
                _context2.next = 7;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);

              case 7:
                _context2.prev = 7;
                setLoading(false);
                return _context2.finish(7);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 5, 7, 10]]);
      }));
      return _work.apply(this, arguments);
    }

    if (loading) {
      work();
    }
  }, [loading]);
  return [loading, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    arg.current = args;
    setLoading(true);
  }];
}

/***/ }),

/***/ "./web/utils/regexp.ts":
/*!*****************************!*\
  !*** ./web/utils/regexp.ts ***!
  \*****************************/
/*! exports provided: IS_EMAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_EMAIL", function() { return IS_EMAIL; });
var IS_EMAIL = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

/***/ }),

/***/ "./web/utils/request.ts":
/*!******************************!*\
  !*** ./web/utils/request.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/loading */ "./web/components/loading/index.tsx");
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Notification */ "./web/components/Notification/index.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./web/utils/constant.ts");
/* harmony import */ var _components_loginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/loginModal */ "./web/components/loginModal/index.tsx");
// @ts-nocheck





/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

function parseError(error) {
  return error instanceof Object ? JSON.stringify(error) : error.toString() || '出错啦：' + error;
}

var isBuild = true;
function Api(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var data = arguments.length > 2 ? arguments[2] : undefined;
  var isSvg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var _url_ = (isBuild ? url.replace(/api/, '') : url).replace(/\/more/, '');

  var origin = window.location.origin;
  var needLoading = _constant__WEBPACK_IMPORTED_MODULE_3__["NO_LOADING_API"].includes(/api/.test(_url_) ? _url_.replace(/api/g, '') : _url_); // 不需要提示错误的接口

  var noError = _constant__WEBPACK_IMPORTED_MODULE_3__["NOERROR_API"].includes(/api/.test(_url_) ? _url_.replace(/api/g, '') : _url_);

  if (!isSvg) {
    var options = {
      method: method,
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        authorization: js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('siteToken') || 'null',
        withCredentials: true
      }
    };
    method === 'POST' && (options.body = JSON.stringify(data));
    var senceKey = origin[origin.length - 1] === '/' ? '' : '/';

    if (isBuild) {
      senceKey = '';
    }

    return new Promise(function (resolve, reject) {
      !needLoading && _components_loading__WEBPACK_IMPORTED_MODULE_1__["default"].show({});
      fetch("".concat(origin).concat(senceKey).concat(_url_), options).then(function (response) {
        if (response.status >= 200 && response.status < 300) return response.json();
        return response.status;
      }).then(function (result) {
        if (typeof result === 'boolean' && result || result.success) {
          resolve(result);
        } else {
          reject(result);
          console.log('result', result);

          if (noError) {
            return;
          }

          console.log('parseError((result && result.errorMsg) || result)', parseError(result && result.errorMsg || result));
          _components_Notification__WEBPACK_IMPORTED_MODULE_2__["default"].fail({
            msg: parseError(result && result.errorMsg || result)
          });

          if (result === null || result === void 0 ? void 0 : result.openLogin) {
            _components_loginModal__WEBPACK_IMPORTED_MODULE_4__["default"].show({}, true);
          }
        }
      })["catch"](function (err) {
        return reject(err);
      })["finally"](function () {
        _components_loading__WEBPACK_IMPORTED_MODULE_1__["default"].hide();
      });
    });
  } else {
    var _options = {
      method: method,
      headers: {
        'content-type': 'image/svg+xml',
        accept: 'image/svg+xml',
        withCredentials: true
      }
    };
    var _origin = window.location.origin;
    return new Promise(function (resolve, reject) {
      fetch("".concat(_origin).concat(_url_), _options).then(function (response) {
        if (response.status >= 200 && response.status < 300) return response.text();
        return response.status;
      }).then(function (response) {
        resolve(response);
      });
    });
  }
}

/***/ }),

/***/ 0:
/*!***********************************************************************************************!*\
  !*** multi ./node_modules/_ssr-plugin-react@6.1.6@ssr-plugin-react/cjs/entry/server-entry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\code\sites-ssr\node_modules\_ssr-plugin-react@6.1.6@ssr-plugin-react\cjs\entry\server-entry.js */"./node_modules/_ssr-plugin-react@6.1.6@ssr-plugin-react/cjs/entry/server-entry.js");


/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "js-base64":
/*!****************************!*\
  !*** external "js-base64" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-base64");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "js-md5":
/*!*************************!*\
  !*** external "js-md5" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-md5");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "ssr-server-utils":
/*!***********************************!*\
  !*** external "ssr-server-utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ssr-server-utils");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvY3JlYXRlLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvc3NyLXRlbXBvcmFyeS1yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fQGJhYmVsX3J1bnRpbWVANy4xNi4zQEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fQGJhYmVsX3J1bnRpbWVANy4xNi4zQEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuMTYuM0BAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fQGJhYmVsX3J1bnRpbWVANy4xNi4zQEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fQGJhYmVsX3J1bnRpbWVANy4xNi4zQEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuMTYuM0BAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuMTYuM0BAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuMTYuM0BAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fQGJhYmVsX3J1bnRpbWVANy4xNi4zQEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fQGJhYmVsX3J1bnRpbWVANy4xNi4zQEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fQGJhYmVsX3J1bnRpbWVANy4xNi4zQEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fQGJhYmVsX3J1bnRpbWVANy4xNi4zQEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19AYmFiZWxfcnVudGltZUA3LjE2LjNAQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19hbnRkQDQuMTYuMTNAYW50ZC9saWIvaWNvbi9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2FudGRANC4xNi4xM0BhbnRkL2xpYi9pY29uL3N0eWxlL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19hbnRkQDQuMTYuMTNAYW50ZC9saWIvbGF5b3V0L3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYW50ZEA0LjE2LjEzQGFudGQvbGliL2xheW91dC9zdHlsZS9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYW50ZEA0LjE2LjEzQGFudGQvbGliL21lbnUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19hbnRkQDQuMTYuMTNAYW50ZC9saWIvbWVudS9zdHlsZS9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYW50ZEA0LjE2LjEzQGFudGQvbGliL21lc3NhZ2Uvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19hbnRkQDQuMTYuMTNAYW50ZC9saWIvbWVzc2FnZS9zdHlsZS9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYW50ZEA0LjE2LjEzQGFudGQvbGliL3N0eWxlL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19hbnRkQDQuMTYuMTNAYW50ZC9saWIvdG9vbHRpcC9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2FudGRANC4xNi4xM0BhbnRkL2xpYi90b29sdGlwL3N0eWxlL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zc3ItcGx1Z2luLXJlYWN0QDYuMS42QHNzci1wbHVnaW4tcmVhY3QvY2pzL2VudHJ5L3NlcnZlci1lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tbW9uL2xpYi9oaXN0b3J5LnRzIiwid2VicGFjazovLy8uL3dlYi9jb21tb24vbGliL2luZGV4LnRzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2FkbWluL2FzaWRlLnRzeCIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvYWRtaW4vY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2FkbWluL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2FkbWluL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvYWRtaW4vc3R5bGVzLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9jb21tb24ubGVzcyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvY29tbW9uTGF5b3V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvY29tbW9uTGF5b3V0L3N0eWxlcy5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvZGVzaWduL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvZGVzaWduL3N0eWxlcy5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2NvbnN0YW50LnRzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvbWVudS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9tZW51L3N0eWxlcy5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL3N0eWxlcy5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC90b3BJbWcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC90b3BJbWcvc3R5bGVzLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xvYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xvYWRpbmcvc3R5bGVzLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xvZ2luTW9kYWwvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xvZ2luTW9kYWwvbG9naW5Cb3gvY29tcG9uZW50L2lucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sb2dpbk1vZGFsL2xvZ2luQm94L2NvbXBvbmVudC9pbnB1dC9zdHlsZXMubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbG9naW5Nb2RhbC9sb2dpbkJveC9jb21wb25lbnQvbG9naW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xvZ2luTW9kYWwvbG9naW5Cb3gvY29tcG9uZW50L2xvZ2luL3N0eWxlcy5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sb2dpbk1vZGFsL2xvZ2luQm94L2NvbXBvbmVudC9yZWdpc3RyeS9lbWFpbC50c3giLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbG9naW5Nb2RhbC9sb2dpbkJveC9jb21wb25lbnQvcmVnaXN0cnkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xvZ2luTW9kYWwvbG9naW5Cb3gvY29tcG9uZW50L3JlZ2lzdHJ5L3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbG9naW5Nb2RhbC9sb2dpbkJveC9jb21wb25lbnQvcmVnaXN0cnkvc3R5bGVzLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xvZ2luTW9kYWwvbG9naW5Cb3gvY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbG9naW5Nb2RhbC9sb2dpbkJveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbG9naW5Nb2RhbC9sb2dpbkJveC9zdHlsZXMubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbG9naW5Nb2RhbC9zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3dlYi9wYWdlcy9pbmRleC9jb21wb25lbnRzL2hvdExpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3dlYi9wYWdlcy9pbmRleC9jb21wb25lbnRzL2hvdExpc3Qvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ob3RMaXN0L3N0eWxlcy5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvaW5kZXgvZmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci50c3giLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3N0eWxlcy5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi93ZWIvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3N0b3JlL3NyYy50cyIsIndlYnBhY2s6Ly8vLi93ZWIvdXRpbHMvY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3V0aWxzL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi93ZWIvdXRpbHMvaG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3V0aWxzL3JlZ2V4cC50cyIsIndlYnBhY2s6Ly8vLi93ZWIvdXRpbHMvcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9pY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21lc3NhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWJhc2U2NFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLW1kNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3NyLXNlcnZlci11dGlsc1wiIl0sIm5hbWVzIjpbIlNUT1JFX0NPTlRFWFQiLCJjcmVhdGVDb250ZXh0Iiwic3RhdGUiLCJGZVJvdXRlcyIsImR5bmFtaWNDb21wb25lbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInNlcnZlclJlbmRlciIsIlJlYWN0IiwicmVxdWlyZSIsInNzcl9zZXJ2ZXJfdXRpbHNfMSIsInNlcmlhbGl6ZSIsIlJvdXRlcyIsImNyZWF0ZV9jb250ZXh0XzEiLCJpbmRleF90c3hfMSIsImxheW91dEZldGNoIiwiUHJlZml4Um91dGVyQmFzZSIsImN0eCIsImNvbmZpZyIsImNzc09yZGVyIiwianNPcmRlciIsImR5bmFtaWMiLCJtb2RlIiwiY2h1bmtOYW1lIiwicGFyYWxsZWxGZXRjaCIsImRpc2FibGVDbGllbnRSZW5kZXIiLCJwcmVmaXgiLCJnbG9iYWwiLCJ3aW5kb3ciLCJfYSIsInBhdGgiLCJyZXF1ZXN0IiwiYmFzZSIsIm5vcm1hbGl6ZVBhdGgiLCJyb3V0ZUl0ZW0iLCJmaW5kUm91dGUiLCJ2aXRlTW9kZSIsInByb2Nlc3MiLCJlbnYiLCJCVUlMRF9UT09MIiwiRXJyb3IiLCJkeW5hbWljQ3NzT3JkZXIiLCJjb25jYXQiLCJ3ZWJwYWNrQ2h1bmtOYW1lIiwiYWRkQXN5bmNDaHVuayIsImdldE1hbmlmZXN0IiwibWFuaWZlc3QiLCJpbmplY3RDc3MiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInR5cGUiLCJrZXkiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlbCIsImhyZWYiLCJmb3JFYWNoIiwiY3NzIiwiaXRlbSIsImluamVjdFNjcmlwdCIsIm1hcCIsImpzIiwic3RhdGljTGlzdCIsImlzQ3NyIiwiX2IiLCJxdWVyeSIsImNzciIsImNvbXBvbmVudCIsImZldGNoIiwiQ29tcG9uZW50IiwibG9nR3JlZW4iLCJsYXlvdXRGZXRjaERhdGEiLCJmZXRjaERhdGEiLCJjdXJyZW50RmV0Y2giLCJQcm9taXNlIiwiYWxsIiwicmVzb2x2ZSIsImNvbWJpbmVEYXRhIiwiYXNzaWduIiwiaW5qZWN0U3RhdGUiLCJQcm92aWRlciIsIkZyYWdtZW50IiwiaGlzdG9yeSIsImNyZWF0ZU1lbW9yeUhpc3RvcnkiLCJOb3RpZmljYXRpb24iLCJzZXRJbnN0YW5jZSIsIl90eXBlXyIsImFyZ3MiLCJ0b3AiLCJpbm5lckhlaWdodCIsInByb3BzIiwibXNnIiwiY2hpbGRyZW4iLCJTaWRlciIsIlN1Yk1lbnUiLCJkZWZhdWx0S2V5IiwidXNlTWVtbyIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiYmFja2dyb3VuZCIsIk1FTlVTIiwidGl0bGUiLCJoZWlnaHQiLCJib3JkZXJSaWdodCIsImljb24iLCJtZW51cyIsIm1lbnUiLCJIZWFkZXIiLCJwb3NpdGlvbiIsInpJbmRleCIsIndpZHRoIiwic3R5bGVzIiwibG9nbyIsIkFkbWluIiwibGF5b3V0IiwiY29uIiwiQ29tbW9uTGF5b3V0IiwidGVzdCIsInVzZVN0YXRlIiwia2V5UGF0aCIsInNldFBhdGgiLCJ1c2VEaWRNb3VudCIsImxpc3RlbiIsImJvZHkiLCJhbmltYXRlIiwibWVtbyIsImZvb3RlciIsInJvdXRlcyIsImRlc2MiLCJiZ0NvbG9yIiwiaWNvbmZvbnQiLCJjaGlsZFJvdXRlcyIsIk1BWF9UT1BfSEVJR0hUIiwiVElUTEUiLCJTSVRFX0JBU0lDX0lORk8iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZVBhdGgiLCJ1c2VFZmZlY3QiLCJmaW5kIiwiaUl0ZW0iLCJkb2N1bWVudCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJpc0xvZ2luIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJyZW5kZXJMaW5rcyIsImxpbmtzIiwiaW5kZXgiLCJoaWRkZW4iLCJwZXJtaXNzaW9uIiwibmVlZExvZ2luIiwiYWRtaW4iLCJyZW5kZXJUaXRsZSIsImNvbnRlbnQiLCJsZW5ndGgiLCJhbmltYXRpb25EZWxheSIsImxpc3RlblNjcm9sbCIsImUiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpbXBsZVRocm9sZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b1RvcCIsImNsYXNzTmFtZXMiLCJ3cmFwIiwiZGFyayIsImhlYWRlciIsImJvdHRvbSIsInBhcmVudCIsIm9uQ2xpY2siLCJ1c2VDYWxsYmFjayIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwibW9yZUJveCIsImluY2x1ZGVzIiwiYmciLCJtb3JlSXRlbSIsIkxheW91dCIsIlRvcEltZyIsImltYWdlIiwibGF5b3V0QmciLCJtb3VudENvbXBvbmVudCIsImdldEVsZW1lbnRCeUlkIiwiX193cmFwQ29tcG9uZW50X18iLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJSZWFjdERPTSIsInJlbmRlciIsInNob3dMb2FkaW5nIiwiZGVzdG9yeSIsImxvYWRpbmdVSSIsImxvYWRpbmdDb250YWluZXIiLCJMb2FkaW5nIiwic2hvdyIsImhpZGUiLCJzaG93TG9naW4iLCJhdXRvQ2xvc2UiLCJMb2dpbk1vZGFsIiwiYXJnIiwiYm9vbCIsIm5hbWUiLCJvbkNoYW5nZSIsIm9uRW50ZXIiLCJfIiwic2V0Rm91Y3VzIiwib25JbnNlcnQiLCJ0YXJnZXQiLCJvbktleURvd24iLCJrZXlDb2RlIiwiaW5wdXRJdGVtIiwiTG9naW4iLCJvbkNoYW5nZVBhZ2UiLCJ2YWx1ZXMiLCJzZXRWYWwiLCJwYXNzd29yZCIsInNldE5ld1ZhbCIsImNvZGUiLCJ2YWwiLCJvblN1Ym1pdCIsIkJhc2U2NCIsImVuY29kZSIsImhleCIsInN1Ym1pdFBhc3N3b3JkIiwibG9naW4iLCJzdWNjZXNzIiwicmVsb2FkIiwiZmFpbCIsIm1lc3NhZ2UiLCJlcnJvck1zZyIsImNvbnRhaW5lciIsIm9yIiwicXFTaWduIiwiZW1haWwiLCJyZWdpc3RlckVtYWlsQ29kZSIsIm9uU2V0RW1haWxDb2RlIiwidGltZSIsInNldFRpbWUiLCJpc0VtYWlsIiwiSVNfRU1BSUwiLCJidG5EaXNhYmxlZCIsInNldERpc2FibGVkIiwiY2xlYXJJbnRlcnZhbCIsImludGVyVmFsIiwiZGlzYWJsZWRTdGF0dXMiLCJnZXRDb2RlIiwic2VuZENvZGVUb0VtYWlsIiwidHJpbSIsInJlcyIsInN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJSZWdpc3RyeSIsInJlZ2lzdHJ5IiwiZGF0YSIsIkFwaSIsInJlZ2lzdGVyIiwiQ09NUE9ORU5UX0xJU1QiLCJFbGVtZW50IiwiTG9naW5Cb3giLCJkaXNwYXRjaCIsIm9uQ2xvc2UiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInN0eWxlIiwidHJhbnNmb3JtIiwibWFzayIsImxvZ2luQm94IiwibG9hZGluZyIsImxpc3QiLCJzZXRTdGF0ZSIsInF1ZXJ5UmFuZG9tIiwicmVzRGF0YSIsIm9uRnJlc2giLCJsaXN0Qm94IiwiYW1pbldyYXAiLCJsb2FkaW5nV3JhcCIsImxvYWRpbkRvdCIsInVwZEljb24iLCJ0b1N0cmluZyIsInNpdGVJY29uIiwic2l0ZU5hbWUiLCJzaXRlSWQiLCJfaWQiLCJzaXRlVHlwZSIsInNpdGVJbWdzIiwic2l0ZURlc2MiLCJzdWJtaXREYXRlIiwibGlzdEl0ZW0iLCJzaXRlSWNvbldyYXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyaWdodCIsImJ0biIsInN0cmluZ2lmeSIsImRhdGUiLCJmb3JtYXRUaW1lIiwicm91dGVyUHJvcHMiLCJqc29uIiwiYXBpU2VydmljZSIsImluZGV4RGF0YSIsInVzZXJJbmZvIiwibG9naW5FbnRyeSIsInVzZUNvbnRleHQiLCJwYWdlQ29uZmlnIiwibWFpblRpdGxlIiwidG9wV3JhcCIsInNpdGVJbmZvIiwiYmFzaWMiLCJwcm9qZWN0Iiwiam9pbmciLCJ1c2VyRW50cnkiLCJzdXBlckFkbWluIiwidmlldyIsInJlZHVjZXIiLCJuYW1lc3BhY2UiLCJOT19MT0FESU5HX0FQSSIsIk5PRVJST1JfQVBJIiwiRU1PSklfQ0FDSEVfS0VZIiwiU0lURV9UWVBFIiwiTUFQX1NJVEVfVFlQRSIsInRlY2hub2xvZ3kiLCJsaWZlIiwiaW5mbyIsIm90aGVycyIsIkRFU0MiLCJtb21lbnQiLCJsb2NhbGUiLCJkZWxheSIsIm9rIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImdldFBhcmFtIiwic2VhcmNoIiwidXJsIiwic2xpY2UiLCJjaHVua3MiLCJzcGxpdCIsImsiLCJlcnJvciIsInNldENhY2hlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJnZXRDYWNoZSIsInN0ciIsImdldEl0ZW0iLCJwYXJzZSIsImhhc0NoYW5nZSIsImRhdGExIiwiZGF0YTIiLCJyZWxhdGl2ZVRpbWUiLCJpc05hTiIsInN0YXJ0T2YiLCJmcm9tTm93IiwiRGF0ZSIsIk51bWJlciIsInJlc2V0T2JqIiwib2JqIiwia2V5cyIsIlFDIiwic2hvd1BvcHVwIiwiYXBwSWQiLCJyZWRpcmVjdFVSSSIsImdldFZhbHVlQnlSZWYiLCJyZWYiLCJnZXRWYWx1ZSIsInJlc3VsdCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWludSIsImdldE1pbnV0ZXMiLCJnZXRVUkwyQmFzZTY0IiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwiYmxvYiIsInJlc3BvbnNlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZWFkQXNEYXRhVVJMIiwib25lcnJvciIsInNlbmQiLCJ1cGRUaXRsZURlc2MiLCJuZXdEZXNjIiwibWV0YSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJwdXNoMkJhaWR1IiwiYnAiLCJjdXJQcm90b2NvbCIsInByb3RvY29sIiwicyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJzbGljZU51bWJlciIsIm51bSIsImxvYWRJbWdTaXplIiwiaW1nIiwiSW1hZ2UiLCJuYXR1cmFsSGVpZ2h0IiwibmF0dXJhbFdpZHRoIiwicmF0aW8iLCJmbiIsInByZVRpbWUiLCJub3ciLCJjYWxsIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0U3JjQ29uZmlnIiwiY29uZmlncyIsInNpbXBsZUxvYWRJbWciLCJjYWxsYmFjayIsInVzZVVubW91bnQiLCJ1c2VJbnRlcnZhbCIsInNhdmVkQ2FsbGJhY2siLCJ1c2VSZWYiLCJ0aWNrIiwidXNlTG9vcCIsInRpbWVvdXQiLCJzZXRSZXN1bHQiLCJzZXRFcnJvciIsInVzZURlYm91bmNlIiwiZGVib3VuY2VkVmFsdWUiLCJzZXREZWJvdW5jZWRWYWx1ZSIsImhhbmRsZXIiLCJjbGVhclRpbWVvdXQiLCJ1c2VMb2FkaW5nIiwiY2IiLCJzZXRMb2FkaW5nIiwid29yayIsInBhcnNlRXJyb3IiLCJpc0J1aWxkIiwibWV0aG9kIiwiaXNTdmciLCJfdXJsXyIsIm9yaWdpbiIsIm5lZWRMb2FkaW5nIiwibm9FcnJvciIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiYWNjZXB0IiwiYXV0aG9yaXphdGlvbiIsIkNvb2tpZXMiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzZW5jZUtleSIsInRoZW4iLCJvcGVuTG9naW4iLCJlcnIiLCJ0ZXh0Il0sIm1hcHBpbmdz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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlBhZ2VcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdC8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuIFx0Ly8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKCkge1xuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gVGhlIGZpbGUgaXMgcHJvdmlzaW9uYWzvvIxkb24ndCBkZXBlbmQgb24gaXRcblxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSUNvbnRleHQgfSBmcm9tICdzc3ItdHlwZXMtcmVhY3QnXG5cbmNvbnN0IFNUT1JFX0NPTlRFWFQgPSBjcmVhdGVDb250ZXh0PElDb250ZXh0Pih7XG4gIHN0YXRlOiB7fVxufSlcblxuZXhwb3J0IHtcbiAgU1RPUkVfQ09OVEVYVFxufVxuIiwiXG4gICAgICAvLyBUaGUgZmlsZSBpcyBwcm92aXNpb25hbO+8jGRvbid0IGRlcGVuZCBvbiBpdCBcbiAgICAgICAgZXhwb3J0IGNvbnN0IEZlUm91dGVzID0gW3tcInBhdGhcIjpcIi9cIixcImNvbXBvbmVudFwiOiBmdW5jdGlvbiBkeW5hbWljQ29tcG9uZW50ICgpIHtcbiAgICAgICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJpbmRleFwiICovICdAL3BhZ2VzL2luZGV4L3JlbmRlci50c3gnKVxuICAgICAgICAgIH1cbiAgICAgICAgICAsXCJ3ZWJwYWNrQ2h1bmtOYW1lXCI6XCJpbmRleFwiLFwiZmV0Y2hcIjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaW5kZXgtZmV0Y2hcIiAqLyAnQC9wYWdlcy9pbmRleC9mZXRjaC50cycpfV0gXG4gICAgICAgIGV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvQXBwLnRzeFwiXG4gICAgICAgIFxuICAgICAgICBleHBvcnQgKiBmcm9tIFwiQC9zdG9yZS9pbmRleC50c1wiXG4gICAgICAgIFxuXG4gICAgICAgICIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHtcbiAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKCFpdCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaWYgKGl0KSBvID0gaXQ7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHZhciBGID0gZnVuY3Rpb24gRigpIHt9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzOiBGLFxuICAgICAgICBuOiBmdW5jdGlvbiBuKCkge1xuICAgICAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IG9baSsrXVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGU6IGZ1bmN0aW9uIGUoX2UpIHtcbiAgICAgICAgICB0aHJvdyBfZTtcbiAgICAgICAgfSxcbiAgICAgICAgZjogRlxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cblxuICB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsXG4gICAgICBkaWRFcnIgPSBmYWxzZSxcbiAgICAgIGVycjtcbiAgcmV0dXJuIHtcbiAgICBzOiBmdW5jdGlvbiBzKCkge1xuICAgICAgaXQgPSBpdC5jYWxsKG8pO1xuICAgIH0sXG4gICAgbjogZnVuY3Rpb24gbigpIHtcbiAgICAgIHZhciBzdGVwID0gaXQubmV4dCgpO1xuICAgICAgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTtcbiAgICAgIHJldHVybiBzdGVwO1xuICAgIH0sXG4gICAgZTogZnVuY3Rpb24gZShfZTIpIHtcbiAgICAgIGRpZEVyciA9IHRydWU7XG4gICAgICBlcnIgPSBfZTI7XG4gICAgfSxcbiAgICBmOiBmdW5jdGlvbiBmKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tIFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG5cbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4ODg4OFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vX2Nzcy1ob3QtbG9hZGVyQDEuNC40QGNzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4ODc0OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vX2Nzcy1ob3QtbG9hZGVyQDEuNC40QGNzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi90b29sdGlwL3N0eWxlXCIpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzczOTIzODg4NzdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL19jc3MtaG90LWxvYWRlckAxLjQuNEBjc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5sZXNzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzczOTIzODkwNTFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL19jc3MtaG90LWxvYWRlckAxLjQuNEBjc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4ODY4N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vX2Nzcy1ob3QtbG9hZGVyQDEuNC40QGNzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4OTExMFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vX2Nzcy1ob3QtbG9hZGVyQDEuNC40QGNzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VydmVyUmVuZGVyID0gdm9pZCAwO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBzc3Jfc2VydmVyX3V0aWxzXzEgPSByZXF1aXJlKFwic3NyLXNlcnZlci11dGlsc1wiKTtcbmNvbnN0IHNlcmlhbGl6ZSA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCJfYnVpbGQvc3NyLXRlbXBvcmFyeS1yb3V0ZXNcIik7XG4vLyBAdHMtZXhwZWN0LWVycm9yXG5jb25zdCBjcmVhdGVfY29udGV4dF8xID0gcmVxdWlyZShcIl9idWlsZC9jcmVhdGUtY29udGV4dFwiKTtcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmNvbnN0IGluZGV4X3RzeF8xID0gcmVxdWlyZShcIkAvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHN4XCIpO1xuY29uc3QgeyBGZVJvdXRlcywgbGF5b3V0RmV0Y2gsIFByZWZpeFJvdXRlckJhc2UsIHN0YXRlIH0gPSBSb3V0ZXM7XG5jb25zdCBzZXJ2ZXJSZW5kZXIgPSBhc3luYyAoY3R4LCBjb25maWcpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHsgY3NzT3JkZXIsIGpzT3JkZXIsIGR5bmFtaWMsIG1vZGUsIGNodW5rTmFtZSwgcGFyYWxsZWxGZXRjaCwgZGlzYWJsZUNsaWVudFJlbmRlciwgcHJlZml4IH0gPSBjb25maWc7XG4gICAgZ2xvYmFsLndpbmRvdyA9IChfYSA9IGdsb2JhbC53aW5kb3cpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9OyAvLyDpmLLmraLopobnm5bkuIrlsYLlupTnlKjoh6rlt7HlrprkuYnnmoQgd2luZG93IOWvueixoVxuICAgIGxldCBwYXRoID0gY3R4LnJlcXVlc3QucGF0aDsgLy8g6L+Z6YeM5Y+WIHBhdGhuYW1lIOS4jeiDveWkn+WMheWQqyBxdWVyeVN0cmluZ1xuICAgIGNvbnN0IGJhc2UgPSBwcmVmaXggIT09IG51bGwgJiYgcHJlZml4ICE9PSB2b2lkIDAgPyBwcmVmaXggOiBQcmVmaXhSb3V0ZXJCYXNlOyAvLyDku6XlvIDlj5HogIXlrp7pmYXkvKDlhaXnmoTkuLrmnIDpq5jkvJjlhYjnuqdcbiAgICBpZiAoYmFzZSkge1xuICAgICAgICBwYXRoID0gKDAsIHNzcl9zZXJ2ZXJfdXRpbHNfMS5ub3JtYWxpemVQYXRoKShwYXRoLCBiYXNlKTtcbiAgICB9XG4gICAgY29uc3Qgcm91dGVJdGVtID0gKDAsIHNzcl9zZXJ2ZXJfdXRpbHNfMS5maW5kUm91dGUpKEZlUm91dGVzLCBwYXRoKTtcbiAgICBjb25zdCB2aXRlTW9kZSA9IHByb2Nlc3MuZW52LkJVSUxEX1RPT0wgPT09ICd2aXRlJztcbiAgICBpZiAoIXJvdXRlSXRlbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgIOafpeaJvue7hOS7tuWksei0pe+8jOivt+ehruiupOW9k+WJjSBwYXRoOiAke3BhdGh9IOWvueW6lOWJjeerr+e7hOS7tuaYr+WQpuWtmOWcqFxuICAgIOiLpeWIm+W7uuS6huaWsOeahOmhtemdouaWh+S7tuWkue+8jOivt+mHjeaWsOaJp+ihjCBucG0gc3RhcnQg6YeN5ZCv5pyN5YqhXG4gICAgYCk7XG4gICAgfVxuICAgIGxldCBkeW5hbWljQ3NzT3JkZXIgPSBjc3NPcmRlcjtcbiAgICBpZiAoZHluYW1pYyAmJiAhdml0ZU1vZGUpIHtcbiAgICAgICAgZHluYW1pY0Nzc09yZGVyID0gY3NzT3JkZXIuY29uY2F0KFtgJHtyb3V0ZUl0ZW0ud2VicGFja0NodW5rTmFtZX0uY3NzYF0pO1xuICAgICAgICBkeW5hbWljQ3NzT3JkZXIgPSBhd2FpdCAoMCwgc3NyX3NlcnZlcl91dGlsc18xLmFkZEFzeW5jQ2h1bmspKGR5bmFtaWNDc3NPcmRlciwgcm91dGVJdGVtLndlYnBhY2tDaHVua05hbWUpO1xuICAgIH1cbiAgICBjb25zdCBtYW5pZmVzdCA9IHZpdGVNb2RlID8ge30gOiBhd2FpdCAoMCwgc3NyX3NlcnZlcl91dGlsc18xLmdldE1hbmlmZXN0KSgpO1xuICAgIGNvbnN0IGluamVjdENzcyA9IFtdO1xuICAgIGlmICh2aXRlTW9kZSkge1xuICAgICAgICBpbmplY3RDc3MucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHsgc3JjOiBcIi9Adml0ZS9jbGllbnRcIiwgdHlwZTogXCJtb2R1bGVcIiwga2V5OiBcInZpdGUtY2xpZW50XCIgfSkpO1xuICAgICAgICBpbmplY3RDc3MucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHsga2V5OiBcInZpdGUtcmVhY3QtcmVmcmVzaFwiLCB0eXBlOiBcIm1vZHVsZVwiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYCBpbXBvcnQgUmVmcmVzaFJ1bnRpbWUgZnJvbSBcIi9AcmVhY3QtcmVmcmVzaFwiXG4gICAgICBSZWZyZXNoUnVudGltZS5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpXG4gICAgICB3aW5kb3cuJFJlZnJlc2hSZWckID0gKCkgPT4ge31cbiAgICAgIHdpbmRvdy4kUmVmcmVzaFNpZyQgPSAoKSA9PiAodHlwZSkgPT4gdHlwZVxuICAgICAgd2luZG93Ll9fdml0ZV9wbHVnaW5fcmVhY3RfcHJlYW1ibGVfaW5zdGFsbGVkX18gPSB0cnVlYFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgIGluamVjdENzcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGAvc2VydmVyL3N0YXRpYy9jc3MvJHtjaHVua05hbWV9LmNzc2AsIGtleTogXCJ2aXRlLWhlYWQtY3NzXCIgfSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZHluYW1pY0Nzc09yZGVyLmZvckVhY2goY3NzID0+IHtcbiAgICAgICAgICAgIGlmIChtYW5pZmVzdFtjc3NdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IG1hbmlmZXN0W2Nzc107XG4gICAgICAgICAgICAgICAgaW5qZWN0Q3NzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyByZWw6ICdzdHlsZXNoZWV0Jywga2V5OiBpdGVtLCBocmVmOiBpdGVtIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkaXNhYmxlQ2xpZW50UmVuZGVyKSB7XG4gICAgICAgIGluamVjdENzcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwgeyBrZXk6IFwiZGlzYWJsZUNsaWVudFJlbmRlclwiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogJ3dpbmRvdy5fX2Rpc2FibGVDbGllbnRSZW5kZXJfXyA9IHRydWUnXG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9XG4gICAgY29uc3QgaW5qZWN0U2NyaXB0ID0gdml0ZU1vZGUgPyBbXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwgeyBrZXk6IFwidml0ZVdpbmRvd0luaXRcIiwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6ICd3aW5kb3cuX19VU0VfVklURV9fPXRydWUnXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHsgdHlwZTogXCJtb2R1bGVcIiwgc3JjOiAnL25vZGVfbW9kdWxlcy9zc3ItcGx1Z2luLXJlYWN0L2VzbS9lbnRyeS9jbGllbnQtZW50cnkuanMnLCBrZXk6IFwidml0ZS1yZWFjdC1lbnRyeVwiIH0pXG4gICAgXVxuICAgICAgICA6IGpzT3JkZXIubWFwKGpzID0+IG1hbmlmZXN0W2pzXSkubWFwKGl0ZW0gPT4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IGtleTogaXRlbSwgc3JjOiBpdGVtIH0pKTtcbiAgICBjb25zdCBzdGF0aWNMaXN0ID0ge1xuICAgICAgICBpbmplY3RDc3MsXG4gICAgICAgIGluamVjdFNjcmlwdFxuICAgIH07XG4gICAgY29uc3QgaXNDc3IgPSAhIShtb2RlID09PSAnY3NyJyB8fCAoKF9iID0gY3R4LnJlcXVlc3QucXVlcnkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jc3IpKTtcbiAgICBjb25zdCB7IGNvbXBvbmVudCwgZmV0Y2ggfSA9IHJvdXRlSXRlbTtcbiAgICBjb25zdCBDb21wb25lbnQgPSAoYXdhaXQgY29tcG9uZW50KCkpLmRlZmF1bHQ7XG4gICAgaWYgKGlzQ3NyKSB7XG4gICAgICAgICgwLCBzc3Jfc2VydmVyX3V0aWxzXzEubG9nR3JlZW4pKGBDdXJyZW50IHBhdGggJHtwYXRofSB1c2UgY3NyIHJlbmRlciBtb2RlYCk7XG4gICAgfVxuICAgIGxldCBsYXlvdXRGZXRjaERhdGEgPSB7fTtcbiAgICBsZXQgZmV0Y2hEYXRhID0ge307XG4gICAgaWYgKCFpc0Nzcikge1xuICAgICAgICBjb25zdCBjdXJyZW50RmV0Y2ggPSBmZXRjaCA/IChhd2FpdCBmZXRjaCgpKS5kZWZhdWx0IDogbnVsbDtcbiAgICAgICAgLy8gY3NyIOS4i+S4jemcgOimgeacjeWKoeerr+iOt+WPluaVsOaNrlxuICAgICAgICBpZiAocGFyYWxsZWxGZXRjaCkge1xuICAgICAgICAgICAgW2xheW91dEZldGNoRGF0YSwgZmV0Y2hEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBsYXlvdXRGZXRjaCA/IGxheW91dEZldGNoKHsgY3R4IH0pIDogUHJvbWlzZS5yZXNvbHZlKHt9KSxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmV0Y2ggPyBjdXJyZW50RmV0Y2goeyBjdHggfSkgOiBQcm9taXNlLnJlc29sdmUoe30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dEZldGNoRGF0YSA9IGxheW91dEZldGNoID8gYXdhaXQgbGF5b3V0RmV0Y2goeyBjdHggfSkgOiB7fTtcbiAgICAgICAgICAgIGZldGNoRGF0YSA9IGN1cnJlbnRGZXRjaCA/IGF3YWl0IGN1cnJlbnRGZXRjaCh7IGN0eCB9KSA6IHt9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNvbWJpbmVEYXRhID0gaXNDc3IgPyBudWxsIDogT2JqZWN0LmFzc2lnbihzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdm9pZCAwID8gc3RhdGUgOiB7fSwgbGF5b3V0RmV0Y2hEYXRhICE9PSBudWxsICYmIGxheW91dEZldGNoRGF0YSAhPT0gdm9pZCAwID8gbGF5b3V0RmV0Y2hEYXRhIDoge30sIGZldGNoRGF0YSAhPT0gbnVsbCAmJiBmZXRjaERhdGEgIT09IHZvaWQgMCA/IGZldGNoRGF0YSA6IHt9KTtcbiAgICBjb25zdCBpbmplY3RTdGF0ZSA9IGlzQ3NyID8gbnVsbCA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgX19odG1sOiBgd2luZG93Ll9fVVNFX1NTUl9fPXRydWU7IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0ke3NlcmlhbGl6ZShjb21iaW5lRGF0YSl9YFxuICAgICAgICB9IH0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChjcmVhdGVfY29udGV4dF8xLlNUT1JFX0NPTlRFWFQuUHJvdmlkZXIsIHsgdmFsdWU6IHsgc3RhdGU6IGNvbWJpbmVEYXRhIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChpbmRleF90c3hfMS5kZWZhdWx0LCB7IGN0eDogY3R4LCBjb25maWc6IGNvbmZpZywgc3RhdGljTGlzdDogc3RhdGljTGlzdCwgaW5qZWN0U3RhdGU6IGluamVjdFN0YXRlIH0sIGlzQ3NyID8gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgbnVsbCkpKSk7XG59O1xuZXhwb3J0cy5zZXJ2ZXJSZW5kZXIgPSBzZXJ2ZXJSZW5kZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5leHBvcnQgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkoKTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9oaXN0b3J5JztcclxuIiwiaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxudHlwZSBJVHlwZXMgPSBcImVycm9yXCIgfCBcInN1Y2Nlc3NcIiB8IFwiZmFpbFwiIHwgXCJ3YXJuaW5nXCI7XHJcblxyXG50eXBlIE5vdGlJbnN0YW5jZSA9IHtcclxuICBbeCBpbiBJVHlwZXNdPzogKGFyZzogUHJvcHMpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb246IE5vdGlJbnN0YW5jZSA9IHt9O1xyXG5cclxuY29uc3Qgc2V0SW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgW1wiZXJyb3JcIiwgXCJmYWlsXCIsIFwid2FybmluZ1wiLCBcInN1Y2Nlc3NcIl0uZm9yRWFjaCgoX3R5cGVfOiBJVHlwZXMpID0+IHtcclxuICAgIGNvbnN0IGtleTogSVR5cGVzID0gX3R5cGVfO1xyXG4gICAgTm90aWZpY2F0aW9uW190eXBlX10gPSAoYXJnczogUHJvcHMpID0+IENvbXBvbmVudChhcmdzLCBrZXkpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuc2V0SW5zdGFuY2UoKTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgbXNnPzogc3RyaW5nO1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xyXG59XHJcblxyXG5tZXNzYWdlLmNvbmZpZyh7XHJcbiAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAzLFxyXG59KTtcclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IChwcm9wczogUHJvcHMsIF90eXBlXzogSVR5cGVzKSA9PiB7XHJcbiAgY29uc3QgeyBtc2cgPSBcIumAmuefpVwiIH0gPSBwcm9wcztcclxuICBtZXNzYWdlW190eXBlXyA9PT0gXCJmYWlsXCIgPyBcImVycm9yXCIgOiBfdHlwZV9dKG1zZyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzczOTIzODc4MTlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWhvdC1sb2FkZXJAMS40LjRAY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIOatpOaWh+S7tuWwhuS8muWcqOacjeWKoeerry/lrqLmiLfnq6/pg73lsIbkvJrnlKjliLBcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gJ3Nzci10eXBlcy1yZWFjdCc7XG5pbXBvcnQgJy4vY29tbW9uLmxlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IExheW91dFByb3BzKSA9PiBwcm9wcy5jaGlsZHJlbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUsIEljb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgTUVOVVMgfSBmcm9tICcuL2NvbnN0YW50JztcclxuXHJcbmNvbnN0IHsgU2lkZXIgfSA9IExheW91dDtcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5leHBvcnQgZGVmYXVsdCAoeyBoaXN0b3J5IH06IHsgaGlzdG9yeTogSGlzdG9yeSB9KSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdEtleSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBsb2NhdGlvbjogeyBwYXRobmFtZSB9LFxyXG4gICAgfSA9IGhpc3Rvcnk7XHJcbiAgICByZXR1cm4gcGF0aG5hbWU/LnJlcGxhY2UoJ3N1cGVyLWFkbWluLycsICcnKSB8fCAnJztcclxuICB9LCBbaGlzdG9yeV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZXIgd2lkdGg9ezIwMH0gc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYnIH19PlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tkZWZhdWx0S2V5XX1cclxuICAgICAgICBkZWZhdWx0T3BlbktleXM9e01FTlVTLm1hcCgoaXRlbSkgPT4gaXRlbS50aXRsZSl9XHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIGJvcmRlclJpZ2h0OiAwIH19XHJcbiAgICAgID5cclxuICAgICAgICB7TUVOVVMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9e2l0ZW0uaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXRlbS5tZW51cy5tYXAoKG1lbnUpID0+IChcclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaChgL3N1cGVyLWFkbWluJHttZW51LnBhdGh9YCl9IGtleT17bWVudS5wYXRofT5cclxuICAgICAgICAgICAgICAgIHttZW51LnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9TaWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgTUVOVVMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICfnlKjmiLfnrqHnkIYnLFxyXG4gICAgaWNvbjogJ3VzZXInLFxyXG4gICAgbWVudXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAn55So5oi35YiX6KGoJyxcclxuICAgICAgICBwYXRoOiAnL3VzZXItbGlzdCcsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfnq5nngrnnrqHnkIYnLFxyXG4gICAgaWNvbjogJ2xhcHRvcCcsXHJcbiAgICBtZW51czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfmioDmnK/nsbsnLFxyXG4gICAgICAgIHBhdGg6ICcvc2l0ZXNsaXN0L3RlY2hub2xvZ3knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfnlJ/mtLvnsbsnLFxyXG4gICAgICAgIHBhdGg6ICcvc2l0ZXNsaXN0L2xpZmUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfotYTorq/nsbsnLFxyXG4gICAgICAgIHBhdGg6ICcvc2l0ZXNsaXN0L2luZm8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICflhbblroPnq5nngrknLFxyXG4gICAgICAgIHBhdGg6ICcvc2l0ZXNsaXN0L290aGVycycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfliY3lj7DnrqHnkIYnLFxyXG4gICAgaWNvbjogJ3NraW4nLFxyXG4gICAgbWVudXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAn5paw5bu65oqV5pS+JyxcclxuICAgICAgICBwYXRoOiAnL3dlYi9wYWdlLXNyYy9jcmVhdGUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfpobXpnaLntKDmnZDliJfooagnLFxyXG4gICAgICAgIHBhdGg6ICcvd2ViL3BhZ2Utc3JjL2xpc3QnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmxlc3MnO1xyXG5cclxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dDtcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEwLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25qaXNodSBpY29uZm9udFwiIC8+XHJcbiAgICAgICAgICBTdXBlci1hZG1pblxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9oMT5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IEFzaWRlIGZyb20gJy4vYXNpZGUnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUubGVzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQWRtaW46IFJlYWN0LkZDPGFueT4gPSAoeyBjaGlsZHJlbiwgaGlzdG9yeSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT5cclxuICAgICAgPEhlYWRlciBoaXN0b3J5PXtoaXN0b3J5fSAvPlxyXG4gICAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbn0+XHJcbiAgICAgICAgPEFzaWRlIGhpc3Rvcnk9e2hpc3Rvcnl9IC8+XHJcbiAgICAgICAgPExheW91dC5Db250ZW50PntjaGlsZHJlbn08L0xheW91dC5Db250ZW50PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibG9nb1wiOlwic3R5bGVzLW1vZHVsZV9fbG9nb19fXzNRaDdFXCIsXCJsYXlvdXRcIjpcInN0eWxlcy1tb2R1bGVfX2xheW91dF9fXzNnOVM4XCIsXCJjb25cIjpcInN0eWxlcy1tb2R1bGVfX2Nvbl9fXzM2aFFZXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzczOTIzODYzMDZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWhvdC1sb2FkZXJAMS40LjRAY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzczOTMzMjYxOTFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWhvdC1sb2FkZXJAMS40LjRAY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlkTW91bnQgfSBmcm9tICdAL3V0aWxzL2hvb2tzJztcclxuaW1wb3J0IERlc2lnbiBmcm9tICcuLi9kZXNpZ24nO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9oZWFkZXInO1xyXG5pbXBvcnQgeyBUb3BJbWcgfSBmcm9tICcuLi90b3BJbWcnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5sZXNzJztcclxuaW1wb3J0IHsgQWRtaW4gfSBmcm9tICcuLi9hZG1pbic7XHJcblxyXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCBFbGVtZW50O1xyXG4gIGhpc3Rvcnk6IEhpc3Rvcnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tb25MYXlvdXQ6IFJlYWN0LkZDPExheW91dFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGhpc3RvcnkgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHtcclxuICAgIGxvY2F0aW9uOiB7IHBhdGhuYW1lID0gJycgfSxcclxuICB9ID0gaGlzdG9yeTtcclxuICBpZiAoL3N1cGVyLWFkbWluLy50ZXN0KHBhdGhuYW1lKSkgcmV0dXJuIDxBZG1pbiBoaXN0b3J5PXtoaXN0b3J5fT57Y2hpbGRyZW59PC9BZG1pbj47XHJcbiAgY29uc3QgW2tleVBhdGgsIHNldFBhdGhdID0gdXNlU3RhdGU8c3RyaW5nPihwYXRobmFtZSk7XHJcbiAgdXNlRGlkTW91bnQoKCkgPT4ge1xyXG4gICAgaGlzdG9yeS5saXN0ZW4oKHsgcGF0aG5hbWU6IHBhdGggfSkgPT4gc2V0UGF0aChwYXRoKSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgIDxIZWFkZXIgaGlzdG9yeT17aGlzdG9yeX0gLz5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPFRvcEltZyAvPlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnfT5cclxuICAgICAgICA8V2F2ZSAvPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIDxTaGFrZT4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbmltYXRlfSBrZXk9e2tleVBhdGh9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8L1NoYWtlPiAqL31cclxuICAgICAgICA8RGVzaWduIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYm9keVwiOlwic3R5bGVzLW1vZHVsZV9fYm9keV9fX0E4TDNMXCIsXCJhbmltYXRlXCI6XCJzdHlsZXMtbW9kdWxlX19hbmltYXRlX19fMnJYQkRcIixcImZhZGVJblwiOlwic3R5bGVzLW1vZHVsZV9fZmFkZUluX19fMVVqWDdcIixcInNjYWxlXCI6XCJzdHlsZXMtbW9kdWxlX19zY2FsZV9fXzJYczZVXCIsXCJsZWZ0MlJpZ2h0XCI6XCJzdHlsZXMtbW9kdWxlX19sZWZ0MlJpZ2h0X19fMUduaUFcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4NTkyOVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtaG90LWxvYWRlckAxLjQuNEBjc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmxlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbygoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgQ29weXJpZ2h0IChjKSBTaXRlcyBHcm91cCBBbGwgUmlnaHRzIFJlc2VydmVkLnsnICd9XHJcbiAgICAgIDxhXHJcbiAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgIGRhdGEtbGluZVxyXG4gICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvcmVnaXN0ZXJTeXN0ZW1JbmZvP3JlY29yZGNvZGU9MzMwMTA2MDIwMTE3MzRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgTk8gOiAzMzAxMDYwMjAxMTczNFxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJmb290ZXJcIjpcInN0eWxlcy1tb2R1bGVfX2Zvb3Rlcl9fXzJDNDl1XCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzczOTIzODYyODlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWhvdC1sb2FkZXJAMS40LjRAY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImV4cG9ydCBpbnRlcmZhY2UgUm91dGUge1xyXG4gIHBhdGg/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBkZXNjPzogc3RyaW5nO1xyXG4gIGJnQ29sb3I/OiBzdHJpbmc7XHJcbiAgaWNvbmZvbnQ/OiBzdHJpbmc7XHJcbiAgY2hpbGRSb3V0ZXM/OiBSb3V0ZVtdO1xyXG4gIGhpZGRlbj86IGJvb2xlYW47XHJcbiAgcGVybWlzc2lvbj86IGJvb2xlYW47XHJcbiAgbmVlZExvZ2luPzogYm9vbGVhbjtcclxuICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBBcnJheTxSb3V0ZT4gPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgdGl0bGU6ICfpppbpobUnLFxyXG4gICAgaWNvbjogJ2ljb25ob21lLWxpbmUnLFxyXG4gICAgZGVzYzogJ+ino+mUgeaUtuiXj+OAgeeVmeiogOOAgeeCuei1nuetieWKn+iDvScsXHJcbiAgICBiZ0NvbG9yOiAnI2I1ZjFlOCcsXHJcbiAgICBpY29uZm9udDogJ2ljb25ob21lLWxpbmUnLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogJy9zaXRlcy8qJyxcclxuICAvLyAgIGljb25mb250OiAnaWNvbndlYicsXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3NpdGVzJyxcclxuICAgIHR5cGU6ICdtb3JlJyxcclxuICAgIGljb25mb250OiAnaWNvbndlYicsXHJcbiAgICBjaGlsZFJvdXRlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9zaXRlcy90ZWNobm9sb2d5JyxcclxuICAgICAgICB0aXRsZTogJ1RlY2hub2xvZ3knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9zaXRlcy9saWZlJyxcclxuICAgICAgICB0aXRsZTogJ0xpZmUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9zaXRlcy9pbmZvJyxcclxuICAgICAgICB0aXRsZTogJ0luZm8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9zaXRlcy9vdGhlcnMnLFxyXG4gICAgICAgIHRpdGxlOiAnT3RoZXJzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvc2l0ZXMvc3VibWl0LXNpdGUnLFxyXG4gICAgICAgIHRpdGxlOiAnSm9pbiB1cycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogJy90ZWNobm9sb2d5JyxcclxuICAvLyAgIHRpdGxlOiAnVGVjaG5vbG9neScsXHJcbiAgLy8gICBpY29uOiAnaWNvbi16dXpoaWhlZ3VhbmxpdHViaWFvLScsXHJcbiAgLy8gICBkZXNjOiAn5oqA5pyv57G756uZ54K5JyxcclxuICAvLyAgIGJnQ29sb3I6ICcjZjVjNTZjJyxcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6ICcvbGlmZScsXHJcbiAgLy8gICB0aXRsZTogJ0xpZmUnLFxyXG4gIC8vICAgaWNvbjogJ2ljb24tY29mZmVlLTAxJyxcclxuICAvLyAgIGRlc2M6ICfnlJ/mtLvnsbvnq5nngrknLFxyXG4gIC8vICAgYmdDb2xvcjogJyNjOWQxZjknLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogJy9pbmZvJyxcclxuICAvLyAgIHRpdGxlOiAnTmV3cycsXHJcbiAgLy8gICBpY29uOiAnaWNvbi14dW54aXgnLFxyXG4gIC8vICAgZGVzYzogJ+i1hOiur+exu+ermeeCuScsXHJcbiAgLy8gICBiZ0NvbG9yOiAnI2ZkYWVhZScsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiAnL290aGVycycsXHJcbiAgLy8gICB0aXRsZTogJ090aGVycycsXHJcbiAgLy8gICBpY29uOiAnaWNvbi1xaXRhJyxcclxuICAvLyAgIGRlc2M6ICflhbbku5bnq5nngrknLFxyXG4gIC8vICAgYmdDb2xvcjogJyNlNmNkNmEnLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogJy9zdWJtaXQtc2l0ZScsXHJcbiAgLy8gICB0aXRsZTogJ1N1Ym1pdCcsXHJcbiAgLy8gICBpY29uOiAnaWNvbi1qdXJhc3NpY19hZGQtcHJvamVjdCcsXHJcbiAgLy8gICBkZXNjOiAn6ZyA5YWI55m75b2V77yM5o+Q5Lqk5ZCO562J5b6F5a6h5qC4JyxcclxuICAvLyAgIGJnQ29sb3I6ICcjZWFkZmM4JyxcclxuICAvLyB9LFxyXG5cclxuICB7XHJcbiAgICBwYXRoOiAnL3NlYXJjaCcsXHJcbiAgICB0aXRsZTogJ+aQnOe0oicsXHJcbiAgICBpY29uOiAnaWNvbi1zZWFyY2gnLFxyXG4gICAgYmdDb2xvcjogJyNlYWRmYzgnLFxyXG4gICAgaWNvbmZvbnQ6ICdpY29uLXNlYXJjaDEnLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogJy91c2VyLWNlbnRlcicsXHJcbiAgLy8gICB0aXRsZTogJ+S4quS6uuS4reW/gycsXHJcbiAgLy8gICBpY29uZm9udDogJ2ljb251c2VyMScsXHJcbiAgLy8gICBuZWVkTG9naW46IHRydWUsXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL21vcmUnLFxyXG4gICAgdHlwZTogJ21vcmUnLFxyXG4gICAgdGl0bGU6ICfmm7TlpJonLFxyXG4gICAgaWNvbmZvbnQ6ICdpY29uTW9yZScsXHJcbiAgICBjaGlsZFJvdXRlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9tb3JlL2Fib3V0JyxcclxuICAgICAgICB0aXRsZTogJ0Fib3V0JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiAnL3NoYXJlLXRvLXFxJyxcclxuICAvLyAgIHRpdGxlOiAncXHnmbvlvZUnLFxyXG4gIC8vICAgaWNvbjogJ2ljb24tcXEnLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogJy9zaGFyZS10by13ZWlibycsXHJcbiAgLy8gICB0aXRsZTogJ+WIhuS6q+WIsOW+ruWNmicsXHJcbiAgLy8gICBpY29uOiAnaWNvbi13ZWlibycsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiAnL2ljb24td2VpeGluJyxcclxuICAvLyAgIHRpdGxlOiAn5b6u5L+h5LqM57u056CBJyxcclxuICAvLyAgIGljb246ICdpY29uLXdlaXhpbicsXHJcbiAgLy8gfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfVE9QX0hFSUdIVCA9IDIwMDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdzdGF0ZS10eXBpbmdzJztcclxuaW1wb3J0IHsgcm91dGVzLCBSb3V0ZSwgTUFYX1RPUF9IRUlHSFQgfSBmcm9tICcuL2NvbnN0YW50JztcclxuaW1wb3J0IHsgU0lURV9CQVNJQ19JTkZPIH0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmxlc3MnO1xyXG5pbXBvcnQgeyBzaW1wbGVUaHJvbGUgfSBmcm9tICdAL3V0aWxzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY29uc3QgeyBUSVRMRSB9ID0gU0lURV9CQVNJQ19JTkZPO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB1c2VyPzogVXNlcjtcclxuICBoaXN0b3J5OiBIaXN0b3J5O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGhpc3RvcnksIHVzZXIgPSB7fSB9ID0gcHJvcHM7XHJcbiAgY29uc29sZS5sb2coJ2hpc3RvcnknLCBoaXN0b3J5KTtcclxuICBjb25zdCB7XHJcbiAgICBsb2NhdGlvbjogeyBwYXRobmFtZSB9LFxyXG4gICAgcHVzaCxcclxuICB9ID0gaGlzdG9yeTtcclxuICBjb25zdCBbYWN0aXZlUGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZTxTdHJpbmcgfCB1bmRlZmluZWQ+KHBhdGhuYW1lKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhpc3RvcnkubGlzdGVuKCgpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGxvY2F0aW9uOiB7IHBhdGhuYW1lIH0sXHJcbiAgICAgIH0gPSBoaXN0b3J5O1xyXG4gICAgICBjb25zdCB7IHRpdGxlIH0gPVxyXG4gICAgICAgIHJvdXRlcy5maW5kKChpdGVtOiBSb3V0ZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFpdGVtLmNoaWxkUm91dGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnBhdGggPT09IHBhdGhuYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY2hpbGRSb3V0ZXMuZmluZCgoaUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGlJdGVtLnBhdGggPT09IHBhdGhuYW1lO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkgfHwge307XHJcbiAgICAgIHNldFBhdGgocGF0aG5hbWUpO1xyXG4gICAgICBkb2N1bWVudC50aXRsZSA9IHBhdGhuYW1lID09PSAnLycgPyBUSVRMRSA6IGAke3RpdGxlIHx8ICcnfSAke1RJVExFfWAgfHwgVElUTEU7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW3VzZXIuaXNMb2dpbl0pO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBmdW5jdGlvbiByZW5kZXJMaW5rcyhsaW5rczogQXJyYXk8Um91dGU+KSB7XHJcbiAgICByZXR1cm4gbGlua3MubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGhpZGRlbiwgcGVybWlzc2lvbiwgdHlwZSwgY2hpbGRSb3V0ZXMsIHBhdGgsIHRpdGxlLCBpY29uZm9udCwgbmVlZExvZ2luIH0gPSBpdGVtO1xyXG4gICAgICBpZiAoaGlkZGVuIHx8IChwZXJtaXNzaW9uICYmICF1c2VyLmFkbWluKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGlmIChuZWVkTG9naW4gJiYgIXVzZXIuaXNMb2dpbikgcmV0dXJuIG51bGw7XHJcbiAgICAgIGNvbnN0IHJlbmRlclRpdGxlID0gaWNvbmZvbnQgPyA8aSBjbGFzc05hbWU9e2BpY29uZm9udCAke2ljb25mb250fWB9IC8+IDogdGl0bGU7XHJcbiAgICAgIGxldCBjb250ZW50ID0gKFxyXG4gICAgICAgIDxhIGtleT17cGF0aH0gb25DbGljaz17KCkgPT4gcHVzaChwYXRoKX0gZGF0YS11cmw9e3BhdGh9IGRhdGEtY3VycmVudD17YWN0aXZlUGF0aCA9PT0gcGF0aH0+XHJcbiAgICAgICAgICB7cmVuZGVyVGl0bGV9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApO1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ21vcmUnICYmIGNoaWxkUm91dGVzPy5sZW5ndGgpIHtcclxuICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgcHVzaD17cHVzaH1cclxuICAgICAgICAgICAgaWNvbmZvbnQ9e2ljb25mb250fVxyXG4gICAgICAgICAgICBwYXRobmFtZT17cGF0aG5hbWV9XHJcbiAgICAgICAgICAgIHJvdXRlcz17Y2hpbGRSb3V0ZXN9XHJcbiAgICAgICAgICAgIHBhcmVudD17aXRlbX1cclxuICAgICAgICAgICAga2V5PXtwYXRofVxyXG4gICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogYCR7aW5kZXggKiAwLjA1fXNgIH19XHJcbiAgICAgICAgICBrZXk9e3BhdGh9XHJcbiAgICAgICAgICBkYXRhLWN1cnJlbnQ9e3BhdGhuYW1lID09PSBwYXRofVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBsaXN0ZW5TY3JvbGwoZTogRXZlbnQpIHtcclxuICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIHNldFZpc2libGUodG9wID49IE1BWF9UT1BfSEVJR0hUKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnc2Nyb2xsJyxcclxuICAgICAgc2ltcGxlVGhyb2xlKChlOiBFdmVudCkgPT4gbGlzdGVuU2Nyb2xsKGUpKSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gKCkgPT5cclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgJ3Njcm9sbCcsXHJcbiAgICAgICAgc2ltcGxlVGhyb2xlKChlOiBFdmVudCkgPT4gbGlzdGVuU2Nyb2xsKGUpKSxcclxuICAgICAgKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRvVG9wID0gKCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGRhdGEtaGlkZGVuPXt2aXNpYmxlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMud3JhcCwgeyBbc3R5bGVzLmRhcmtdOiB2aXNpYmxlIH0pfVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxoZWFkZXJcclxuICAgICAgICBkYXRhLWhpZGRlbj17dmlzaWJsZX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmhlYWRlciwgeyBbc3R5bGVzLmRhcmtdOiB2aXNpYmxlIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnLycpfT5cclxuICAgICAgICAgIDxzcGFuPnNpdGV8aW5rPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5zaXRlcy5saW5rPC9zcGFuPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHVsPntyZW5kZXJMaW5rcyhyb3V0ZXMpfTwvdWw+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAge3Zpc2libGUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9Ub3B9IG9uQ2xpY2s9e3RvVG9wfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25xaWFuamluMSBpY29uZm9udFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4uL2NvbnN0YW50JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUubGVzcyc7XHJcblxyXG5pbnRlcmZhY2UgTWVudVByb3BzIGV4dGVuZHMgUm91dGUge1xyXG4gIHJvdXRlczogQXJyYXk8Um91dGU+O1xyXG4gIHBhcmVudD86IFJvdXRlO1xyXG4gIHBhdGhuYW1lPzogc3RyaW5nO1xyXG4gIHB1c2g/OiBGdW5jdGlvbjtcclxuICB2aXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcm91dGVzLCBwYXJlbnQsIGljb25mb250LCBwYXRobmFtZSwgcHVzaCwgdmlzaWJsZSB9OiBNZW51UHJvcHMpID0+IHtcclxuICBpZiAoIXJvdXRlcykgcmV0dXJuIG51bGw7XHJcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCByZW5kZXJUaXRsZSA9IGljb25mb250ID8gPGkgY2xhc3NOYW1lPXtgaWNvbmZvbnQgJHtpY29uZm9udH1gfSAvPiA6IHBhcmVudD8udGl0bGU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vcmVCb3h9XHJcbiAgICAgIGRhdGEtY3VycmVudD17cGF0aG5hbWU/LmluY2x1ZGVzKHBhcmVudC5wYXRoKX1cclxuICAgICAgZGF0YS11cmw9e3BhcmVudD8ucGF0aH1cclxuICAgICAgb25DbGljaz17KGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiBvbkNsaWNrKGUpfVxyXG4gICAgPlxyXG4gICAgICB7cmVuZGVyVGl0bGV9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb24sIHsgW3N0eWxlcy5iZ106IHZpc2libGUgfSl9PlxyXG4gICAgICAgIHtyb3V0ZXMubWFwKCh7IHBhdGgsIHRpdGxlLCBoaWRkZW4gfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGhpZGRlbikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIC8vIHRvPXtwYXRofVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHB1c2gocGF0aCl9XHJcbiAgICAgICAgICAgICAgLy8gdXJsPXtwYXRofVxyXG4gICAgICAgICAgICAgIGRhdGEtY3VycmVudD17cGF0aG5hbWUgPT09IHBhdGh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9yZUl0ZW19XHJcbiAgICAgICAgICAgICAgZGF0YS11cmw9e3BhdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtwYXRofVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm1vcmVCb3hcIjpcInN0eWxlcy1tb2R1bGVfX21vcmVCb3hfX18yT2VhS1wiLFwiY29uXCI6XCJzdHlsZXMtbW9kdWxlX19jb25fX18zVE9EWFwiLFwibW9yZUl0ZW1cIjpcInN0eWxlcy1tb2R1bGVfX21vcmVJdGVtX19fMmdRbWhcIixcImFcIjpcInN0eWxlcy1tb2R1bGVfX2FfX18yZlowa1wiLFwic2xpZERvd25cIjpcInN0eWxlcy1tb2R1bGVfX3NsaWREb3duX19fM2xLcDZcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4ODI1NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtaG90LWxvYWRlckAxLjQuNEBjc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJoZWFkZXJcIjpcInN0eWxlcy1tb2R1bGVfX2hlYWRlcl9fXzNMMTZXXCIsXCJzZWFyY2hcIjpcInN0eWxlcy1tb2R1bGVfX3NlYXJjaF9fXzNTYzlSXCIsXCJsb2dvXCI6XCJzdHlsZXMtbW9kdWxlX19sb2dvX19fTnZ0aFdcIixcImJvdHRvbVwiOlwic3R5bGVzLW1vZHVsZV9fYm90dG9tX19fM2M1ZU5cIixcImJsb2dUaXRsZVwiOlwic3R5bGVzLW1vZHVsZV9fYmxvZ1RpdGxlX19fMlNsdWNcIixcImZhZGVJblwiOlwic3R5bGVzLW1vZHVsZV9fZmFkZUluX19fMXdZVjBcIixcIm5hdkxpbmVcIjpcInN0eWxlcy1tb2R1bGVfX25hdkxpbmVfX18zbE1DeVwiLFwibmF2XCI6XCJzdHlsZXMtbW9kdWxlX19uYXZfX18zaHB0cFwiLFwid3JhcFwiOlwic3R5bGVzLW1vZHVsZV9fd3JhcF9fXzJnNUpLXCIsXCJ0b1RvcFwiOlwic3R5bGVzLW1vZHVsZV9fdG9Ub3BfX18zZE9xM1wiLFwic2NhbGVcIjpcInN0eWxlcy1tb2R1bGVfX3NjYWxlX19fQkRObjNcIixcImxlZnQyUmlnaHRcIjpcInN0eWxlcy1tb2R1bGVfX2xlZnQyUmlnaHRfX18zRkR1RFwiLFwiYmdXaGl0ZVwiOlwic3R5bGVzLW1vZHVsZV9fYmdXaGl0ZV9fXzFtWVRIXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzczOTIzODY1MDlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWhvdC1sb2FkZXJAMS40LjRAY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXRQcm9wcywgU1Byb3BzIH0gZnJvbSAnc3NyLXR5cGVzLXJlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVMb2NhdGlvbiB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbi8vIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVMb2NhdGlvbigpO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHM6IExheW91dFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaW5qZWN0U3RhdGUgfSA9IHByb3BzO1xuICBjb25zdCB7IGluamVjdENzcywgaW5qZWN0U2NyaXB0IH0gPSBwcm9wcy5zdGF0aWNMaXN0ITtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XG4gICAgICAgIDx0aXRsZT5TZXJ2ZXJsZXNzIFNpZGUgUmVuZGVyPC90aXRsZT5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6XG4gICAgICAgICAgICAgIFwidmFyIHcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyAzLjc1O2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uc3R5bGVbJ2ZvbnQtc2l6ZSddID0gdyArICdweCdcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7aW5qZWN0Q3NzfVxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICAgICAgICA8QXBwIHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpbmplY3RTdGF0ZX1cbiAgICAgICAge2luamVjdFNjcmlwdH1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb290U3RhdGUsIFVzZXIgfSBmcm9tICdzdGF0ZS10eXBpbmdzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmxlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvcEltZyA9ICgpID0+IHtcclxuICBjb25zdCB7IGltYWdlIH0gPSB7fTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgJHtiZ0NvbG9yfWA7XHJcbiAgLy8gfSwgW2JnQ29sb3JdKTtcclxuICAvLyBjb25zdCBbbG9hZGVkLCBzZXRMb2FkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgLy8gICBzaW1wbGVMb2FkSW1nKGltYWdlKS50aGVuKCgpID0+IHNldExvYWQodHJ1ZSkpO1xyXG4gIC8vIH0sIFtpbWFnZV0pO1xyXG4gIC8vIGlmICghaW1hZ2UgfHwgIWxvYWRlZCkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVmYXVsdH0gLz47XHJcbiAgcmV0dXJuIDxpbWcga2V5PXtpbWFnZX0gYWx0PVwiaW1hZ2VcIiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRCZ30gc3JjPXtpbWFnZX0gLz47XHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibGF5b3V0QmdcIjpcInN0eWxlcy1tb2R1bGVfX2xheW91dEJnX19fTmhlU3BcIixcImZhZGVJblwiOlwic3R5bGVzLW1vZHVsZV9fZmFkZUluX19fM1BWbWpcIixcImRlZmF1bHRcIjpcInN0eWxlcy1tb2R1bGVfX2RlZmF1bHRfX18xbFVIUVwiLFwic2NhbGVcIjpcInN0eWxlcy1tb2R1bGVfX3NjYWxlX19fMTFUY3ZcIixcImxlZnQyUmlnaHRcIjpcInN0eWxlcy1tb2R1bGVfX2xlZnQyUmlnaHRfX18zNkZEN1wifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM3MzkyMzg3MTU5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1ob3QtbG9hZGVyQDEuNC40QGNzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmxlc3MnO1xyXG5cclxuY29uc3QgbW91bnRDb21wb25lbnQgPSAoY29tcG9uZW50OiBSZWFjdC5GQzx7fT4pID0+IHtcclxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX193cmFwQ29tcG9uZW50X18nKTtcclxuICBpZiAoIXBhcmVudCkge1xyXG4gICAgY29uc3QgX193cmFwQ29tcG9uZW50X18gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIF9fd3JhcENvbXBvbmVudF9fLmlkID0gJ19fd3JhcENvbXBvbmVudF9fJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQoX193cmFwQ29tcG9uZW50X18pO1xyXG4gIH1cclxuICBSZWFjdERPTS5yZW5kZXIoY29tcG9uZW50KHt9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fd3JhcENvbXBvbmVudF9fJykpO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0xvYWRpbmcgPSAoZGVzdG9yeTogYm9vbGVhbikgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGlmIChkZXN0b3J5KSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGluZ1VJfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snay1iYWxsN2EnXX0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydrLWJhbGw3YiddfT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2stYmFsbDdjJ119PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snay1iYWxsN2QnXX0+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIG1vdW50Q29tcG9uZW50KCgpID0+IGNvbXBvbmVudCgpKTtcclxufTtcclxuXHJcbmNvbnN0IExvYWRpbmcgPSB7XHJcbiAgc2hvdzogKCkgPT4gc2hvd0xvYWRpbmcoZmFsc2UpLFxyXG4gIGhpZGU6ICgpID0+IHNob3dMb2FkaW5nKHRydWUpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJsb2FkaW5nVUlcIjpcInN0eWxlcy1tb2R1bGVfX2xvYWRpbmdVSV9fX2V5TkVpXCIsXCJsb2FkaW5nQ29udGFpbmVyXCI6XCJzdHlsZXMtbW9kdWxlX19sb2FkaW5nQ29udGFpbmVyX19fMkxCZE5cIixcImstYmFsbDdhXCI6XCJzdHlsZXMtbW9kdWxlX19rLWJhbGw3YV9fXzE0c2d1XCIsXCJrLWxvYWRpbmdPXCI6XCJzdHlsZXMtbW9kdWxlX19rLWxvYWRpbmdPX19fM19SU19cIixcImstYmFsbDdiXCI6XCJzdHlsZXMtbW9kdWxlX19rLWJhbGw3Yl9fX0dlVWFRXCIsXCJrLWJhbGw3Y1wiOlwic3R5bGVzLW1vZHVsZV9fay1iYWxsN2NfX194SmIta1wiLFwiay1iYWxsN2RcIjpcInN0eWxlcy1tb2R1bGVfX2stYmFsbDdkX19fMUFibVdcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4Nzg2OFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtaG90LWxvYWRlckAxLjQuNEBjc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IExvZ2luQm94IH0gZnJvbSAnLi9sb2dpbkJveCc7XHJcblxyXG5jb25zdCBtb3VudENvbXBvbmVudCA9IChjb21wb25lbnQ6IFJlYWN0LkZDPHt9PikgPT4ge1xyXG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX3dyYXBDb21wb25lbnRfX19fbG9naW4nKTtcclxuICBpZiAoIXBhcmVudCkge1xyXG4gICAgY29uc3QgX193cmFwQ29tcG9uZW50X18gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIF9fd3JhcENvbXBvbmVudF9fLmlkID0gJ19fd3JhcENvbXBvbmVudF9fX19sb2dpbic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKF9fd3JhcENvbXBvbmVudF9fKTtcclxuICB9XHJcbiAgUmVhY3RET00ucmVuZGVyKGNvbXBvbmVudCh7fSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX3dyYXBDb21wb25lbnRfX19fbG9naW4nKSk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93TG9naW4gPSAoZGVzdG9yeTogYm9vbGVhbiwgcHJvcHM/OiBhbnksIGF1dG9DbG9zZT86IGJvb2xlYW4pID0+IHtcclxuICBjb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPGFueT4gPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVzdG9yeSkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gPExvZ2luQm94IHsuLi5wcm9wc30gYXV0b0Nsb3NlPXthdXRvQ2xvc2V9IG9uQ2xvc2U9eygpID0+IExvZ2luTW9kYWwuaGlkZSgpfSAvPjtcclxuICB9O1xyXG4gIG1vdW50Q29tcG9uZW50KENvbXBvbmVudCk7XHJcbn07XHJcblxyXG5jb25zdCBMb2dpbk1vZGFsID0ge1xyXG4gIHNob3c6IChhcmcgPSB7fSwgYm9vbCA9IGZhbHNlKSA9PiBzaG93TG9naW4oZmFsc2UsIGFyZywgYm9vbCksXHJcbiAgaGlkZTogKCkgPT4gc2hvd0xvZ2luKHRydWUpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Nb2RhbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUubGVzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHZhbHVlPzogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBvbkNoYW5nZTogRnVuY3Rpb247XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIG9uRW50ZXI/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB2YWx1ZSwgbmFtZSwgb25DaGFuZ2UsIHR5cGUgPSAndGV4dCcsIG9uRW50ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtfLCBzZXRGb3VjdXNdID0gdXNlU3RhdGUoISF2YWx1ZSk7XHJcbiAgLy8gY29uc3QgbmFtZVN0eWxlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBzdHlsZTogYW55ID0ge307XHJcbiAgLy8gICBzdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtpc0ZvY3VzID8gJzBweCcgOiAnMTBweCd9LCAke2lzRm9jdXMgPyAnLTE4cHgnIDogJzAnfSwgMClgO1xyXG4gIC8vICAgcmV0dXJuIHN0eWxlO1xyXG4gIC8vIH0sIFtpc0ZvY3VzXSk7XHJcbiAgY29uc3Qgb25JbnNlcnQgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uS2V5RG93biA9IChlOiBhbnkpID0+IHtcclxuICAgIG9uQ2hhbmdlKGU/LnRhcmdldD8udmFsdWUpO1xyXG4gICAgaWYgKGU/LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIG9uRW50ZXIoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0SXRlbX0+XHJcbiAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfSBzdHlsZT17bmFtZVN0eWxlfT5cclxuICAgICAgICB7bmFtZX1cclxuICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXcmFwfT4gKi99XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvdWN1cyh0cnVlKX1cclxuICAgICAgICBvbkJsdXI9eygpID0+IHNldEZvdWN1cyghIXZhbHVlKX1cclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgb25LZXlEb3duPXsoZTogYW55KSA9PiBvbktleURvd24oZSl9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gb25JbnNlcnQoZSl9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17bmFtZX1cclxuICAgICAgICAvLyBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgIC8vIGF1dG9jb21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImlucHV0SXRlbVwiOlwic3R5bGVzLW1vZHVsZV9faW5wdXRJdGVtX19fOW5vS3NcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4OTE1M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtaG90LWxvYWRlckAxLjQuNEBjc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9Ob3RpZmljYXRpb24nO1xyXG5pbXBvcnQgeyBxcVNpZ24gfSBmcm9tICdAL3V0aWxzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7XHJcbmltcG9ydCB7IEJhc2U2NCB9IGZyb20gJ2pzLWJhc2U2NCc7XHJcbmltcG9ydCB7IGhleCB9IGZyb20gJ2pzLW1kNSc7XHJcbmltcG9ydCB7IGNoYW5nZUZuIH0gZnJvbSAnLi4vLi4nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5sZXNzJztcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICdAL2NvbXBvbmVudHMvbG9naW5Nb2RhbC9zZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBWYWxTdGF0ZSB7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxuICByZWdpc3RlckVtYWlsQ29kZT86IHN0cmluZztcclxuICBzdWJtaXRQYXNzd29yZD86IHN0cmluZztcclxuICBwYXNzd29yZD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luOiBSZWFjdC5GQzx7XHJcbiAgZGlzcGF0Y2g/OiBGdW5jdGlvbjtcclxuICBvbkNoYW5nZVBhZ2U6IGNoYW5nZUZuO1xyXG4gIGF1dG9DbG9zZT86IGJvb2xlYW47XHJcbiAgb25DbG9zZT86IGFueTtcclxufT4gPSAoeyBvbkNoYW5nZVBhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbF0gPSB1c2VTdGF0ZTxWYWxTdGF0ZT4oe30pO1xyXG4gIGNvbnN0IHsgbmFtZSwgcGFzc3dvcmQgfSA9IHZhbHVlcztcclxuICBjb25zdCBzZXROZXdWYWwgPSAoY29kZTogc3RyaW5nLCB2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0VmFsKHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICBbY29kZV06IHZhbCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICBwYXNzd29yZDogQmFzZTY0LmVuY29kZShoZXgodmFsdWVzLnBhc3N3b3JkIHx8ICcnKSksXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign6K+36L6T5YWl55So5oi35ZCNJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5hbWUubGVuZ3RoIDwgMyB8fCBuYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfnlKjmiLflkI3plb/luqYzLTMw5L2NJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+ivt+i+k+WFpeWvhueggScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA2IHx8IHBhc3N3b3JkLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCflr4bnoIHplb/luqY2LTIw5L2NJyk7XHJcbiAgICAgIH1cclxuICAgICAgYm9keS5zdWJtaXRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgIGNvbnN0IHsgc3VjY2VzcyB9ID0gYXdhaXQgbG9naW4oYm9keSk7XHJcbiAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgTm90aWZpY2F0aW9uLmZhaWwoeyBtc2c6IGVycm9yPy5tZXNzYWdlIHx8IGVycm9yPy5lcnJvck1zZyB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIG5hbWU9XCLnlKjmiLflkI3miJbpgq7nrrFcIlxyXG4gICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsodmFsOiBzdHJpbmcpID0+IHNldE5ld1ZhbCgnbmFtZScsIHZhbCl9XHJcbiAgICAgICAgb25FbnRlcj17b25TdWJtaXR9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBuYW1lPVwi5a+G56CBXCJcclxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17KHZhbDogc3RyaW5nKSA9PiBzZXROZXdWYWwoJ3Bhc3N3b3JkJywgdmFsKX1cclxuICAgICAgICBvbkVudGVyPXtvblN1Ym1pdH1cclxuICAgICAgLz5cclxuICAgICAgPGEgZGF0YS1saW5lIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0gb25DbGljaz17b25TdWJtaXR9PlxyXG4gICAgICAgIEdPXHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbnFpYW5qaW5cIiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3J9PlxyXG4gICAgICAgIOayoeaciei0puWPt++8n+WJjeW+gHsnICd9XHJcbiAgICAgICAgPGEgZGF0YS1saW5lIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlUGFnZSgyKX0+XHJcbiAgICAgICAgICDms6jlhoxcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAg77yM5oiW5L2/55SoeycgJ31cclxuICAgICAgICA8YSBkYXRhLWxpbmUgb25DbGljaz17cXFTaWdufT5cclxuICAgICAgICAgIFFRXHJcbiAgICAgICAgPC9hPnsnICd9XHJcbiAgICAgICAg5b+r6YCf55m76ZmGXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJvclwiOlwic3R5bGVzLW1vZHVsZV9fb3JfX18xLVFpd1wiLFwiY29udGFpbmVyXCI6XCJzdHlsZXMtbW9kdWxlX19jb250YWluZXJfX19nRFdwNVwiLFwiZm9vdGVyXCI6XCJzdHlsZXMtbW9kdWxlX19mb290ZXJfX18xT3dSQlwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM3MzkyMzg4Nzg0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1ob3QtbG9hZGVyQDEuNC40QGNzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVNfRU1BSUwgfSBmcm9tIFwiQC91dGlscy9yZWdleHBcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xyXG5pbXBvcnQgeyBzZW5kQ29kZVRvRW1haWwgfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7IEJ1dHRvbiB9XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5sZXNzXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG4gIG9uQ2hhbmdlPzogRnVuY3Rpb247XHJcbiAgcmVnaXN0ZXJFbWFpbENvZGU/OiBzdHJpbmc7XHJcbiAgb25TZXRFbWFpbENvZGU/OiBGdW5jdGlvbjtcclxuICBvbkVudGVyPzogRnVuY3Rpb247XHJcbiAgdHlwZT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ29tcG9uZW50OiBhbnkgPSAoe1xyXG4gIGVtYWlsLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIHJlZ2lzdGVyRW1haWxDb2RlLFxyXG4gIG9uU2V0RW1haWxDb2RlLFxyXG4gIG9uRW50ZXIsXHJcbn06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaXNFbWFpbCA9IElTX0VNQUlMLnRlc3QoZW1haWwpO1xyXG4gIGNvbnN0IFtidG5EaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGltZSA9PT0gMCkge1xyXG4gICAgICBjbGVhckludGVydmFsKENvbXBvbmVudC5pbnRlclZhbCk7XHJcbiAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbdGltZV0pO1xyXG4gIGNvbnN0IGRpc2FibGVkU3RhdHVzOiBib29sZWFuID0gdXNlTWVtbyhcclxuICAgICgpID0+ICFpc0VtYWlsIHx8IGJ0bkRpc2FibGVkLFxyXG4gICAgW2lzRW1haWwsIGJ0bkRpc2FibGVkXVxyXG4gICk7XHJcbiAgY29uc3QgZ2V0Q29kZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmIChkaXNhYmxlZFN0YXR1cykgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvZGVUb0VtYWlsKHsgZW1haWw6IGVtYWlsLnRyaW0oKSB9KTtcclxuICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICBzZXREaXNhYmxlZCh0cnVlKTtcclxuICAgICAgbGV0IHN0YXJ0ID0gNjA7XHJcbiAgICAgIENvbXBvbmVudC5pbnRlclZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lKHN0YXJ0KTtcclxuICAgICAgICBzdGFydCAtPSAxO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9LCBbZGlzYWJsZWRTdGF0dXMsIGVtYWlsXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWx9PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIumCrueusVwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICBvbkVudGVyPXtvbkVudGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGEgb25DbGljaz17Z2V0Q29kZX0gZGF0YS1kaXNhYmxlZD17ZGlzYWJsZWRTdGF0dXN9PlxyXG4gICAgICAgICAg54K55Ye76I635Y+W6aqM6K+B56CBe3RpbWUgIT09IDAgJiYgYCR7dGltZX1zYH1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cIumqjOivgeeggVwiXHJcbiAgICAgICAgb25FbnRlcj17b25FbnRlcn1cclxuICAgICAgICB2YWx1ZT17cmVnaXN0ZXJFbWFpbENvZGV9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uU2V0RW1haWxDb2RlfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9Ob3RpZmljYXRpb24nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnO1xyXG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tICdqcy1iYXNlNjQnO1xyXG5pbXBvcnQgRW1haWwgZnJvbSAnLi9lbWFpbCc7XHJcbmltcG9ydCB7IGhleCB9IGZyb20gJ2pzLW1kNSc7XHJcbmltcG9ydCB7IGNoYW5nZUZuIH0gZnJvbSAnLi4vLi4nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5sZXNzJztcclxuaW1wb3J0IHsgcmVnaXN0cnkgfSBmcm9tICdAL2NvbXBvbmVudHMvbG9naW5Nb2RhbC9zZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBWYWxTdGF0ZSB7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxuICByZWdpc3RlckVtYWlsQ29kZT86IHN0cmluZztcclxuICBzdWJtaXRQYXNzd29yZD86IHN0cmluZztcclxuICBwYXNzd29yZD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJ5OiBSZWFjdC5GQzx7XHJcbiAgZGlzcGF0Y2g/OiBGdW5jdGlvbjtcclxuICBvbkNoYW5nZVBhZ2U6IGNoYW5nZUZuO1xyXG4gIGF1dG9DbG9zZT86IGJvb2xlYW47XHJcbiAgb25DbG9zZT86IGFueTtcclxufT4gPSAoeyBvbkNoYW5nZVBhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbF0gPSB1c2VTdGF0ZTxWYWxTdGF0ZT4oe30pO1xyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHJlZ2lzdGVyRW1haWxDb2RlLCBzdWJtaXRQYXNzd29yZCwgcGFzc3dvcmQgfSA9IHZhbHVlcztcclxuICBjb25zdCBzZXROZXdWYWwgPSAoY29kZTogc3RyaW5nLCB2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0VmFsKHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICBbY29kZV06IHZhbCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICBwYXNzd29yZDogQmFzZTY0LmVuY29kZShoZXgodmFsdWVzLnBhc3N3b3JkIHx8ICcnKSksXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign6K+36L6T5YWl55So5oi35ZCNJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5hbWUubGVuZ3RoIDwgMyB8fCBuYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfnlKjmiLflkI3plb/luqYzLTMw5L2NJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign6K+36L6T5YWl6YKu566xJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyZWdpc3RlckVtYWlsQ29kZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign6K+36L6T5YWl6aqM6K+B56CBJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFwYXNzd29yZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign6K+36L6T5YWl5a+G56CBJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYgfHwgcGFzc3dvcmQubGVuZ3RoID4gMjApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+WvhueggemVv+W6pjYtMjDkvY0nKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGFzc3dvcmQgIT09IHN1Ym1pdFBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfkuKTmrKHlr4bnoIHkuI3kuIDoh7QnKTtcclxuICAgICAgfVxyXG4gICAgICBib2R5LnN1Ym1pdFBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgY29uc3QgeyBzdWNjZXNzIH0gPSBhd2FpdCByZWdpc3RyeShib2R5KTtcclxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgIE5vdGlmaWNhdGlvbi5mYWlsKHsgbXNnOiBlcnJvcj8ubWVzc2FnZSB8fCBlcnJvcj8uZXJyb3JNc2cgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBuYW1lPVwi55So5oi35ZCNXCJcclxuICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KHZhbDogc3RyaW5nKSA9PiBzZXROZXdWYWwoJ25hbWUnLCB2YWwpfVxyXG4gICAgICAgIG9uRW50ZXI9e29uU3VibWl0fVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgLz5cclxuICAgICAgPEVtYWlsXHJcbiAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgIHJlZ2lzdGVyRW1haWxDb2RlPXtyZWdpc3RlckVtYWlsQ29kZX1cclxuICAgICAgICBvblNldEVtYWlsQ29kZT17KHZhbCkgPT4gc2V0TmV3VmFsKCdyZWdpc3RlckVtYWlsQ29kZScsIHZhbCl9XHJcbiAgICAgICAgb25FbnRlcj17b25TdWJtaXR9XHJcbiAgICAgICAgb25DaGFuZ2U9eyh2YWw6IHN0cmluZykgPT4gc2V0TmV3VmFsKCdlbWFpbCcsIHZhbCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIG5hbWU9XCLlr4bnoIFcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsodmFsOiBzdHJpbmcpID0+IHNldE5ld1ZhbCgncGFzc3dvcmQnLCB2YWwpfVxyXG4gICAgICAgIG9uRW50ZXI9e29uU3VibWl0fVxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBuYW1lPVwi5a+G56CB56Gu6K6kXCJcclxuICAgICAgICB2YWx1ZT17c3VibWl0UGFzc3dvcmR9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17KHZhbDogc3RyaW5nKSA9PiBzZXROZXdWYWwoJ3N1Ym1pdFBhc3N3b3JkJywgdmFsKX1cclxuICAgICAgICBvbkVudGVyPXtvblN1Ym1pdH1cclxuICAgICAgLz5cclxuICAgICAgPGEgZGF0YS1saW5lIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0gb25DbGljaz17b25TdWJtaXR9PlxyXG4gICAgICAgIEdPXHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbnFpYW5qaW5cIiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3J9PlxyXG4gICAgICAgIOW3suaciei0puWPt++8n+WJjeW+gHsnICd9XHJcbiAgICAgICAgPGEgZGF0YS1saW5lIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlUGFnZSgxKX0+XHJcbiAgICAgICAgICDnmbvlvZVcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IEFwaSBmcm9tICdAL3V0aWxzL3JlcXVlc3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDb2RlVG9FbWFpbChkYXRhOiBvYmplY3QpIHtcclxuICByZXR1cm4gQXBpKCdhcGkvc2VuZENvZGVUb0VtYWlsJywgJ1BPU1QnLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGRhdGE6IG9iamVjdCkge1xyXG4gIHJldHVybiBBcGkoJ2FwaS9yZWdpc3RlcicsICdQT1NUJywgZGF0YSk7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJvclwiOlwic3R5bGVzLW1vZHVsZV9fb3JfX190MUJ6VFwiLFwiY29udGFpbmVyXCI6XCJzdHlsZXMtbW9kdWxlX19jb250YWluZXJfX18zOVpEVVwiLFwiZm9vdGVyXCI6XCJzdHlsZXMtbW9kdWxlX19mb290ZXJfX19YRUxqUVwiLFwiZW1haWxcIjpcInN0eWxlcy1tb2R1bGVfX2VtYWlsX19fMnhVLS1cIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4ODc5NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtaG90LWxvYWRlckAxLjQuNEBjc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuL2NvbXBvbmVudC9sb2dpbic7XHJcbi8vIGltcG9ydCB7IEJhc2ljSW5mbyB9IGZyb20gJy4vY29tcG9uZW50L2Jhc2VJbmZvJztcclxuaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICcuL2NvbXBvbmVudC9yZWdpc3RyeSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX0xJU1QgPSBbXHJcbiAgLy8ge1xyXG4gIC8vICAgdGl0bGU6ICdTSVRFUy5MSU5LJyxcclxuICAvLyAgIEVsZW1lbnQ6IEJhc2ljSW5mbyxcclxuICAvLyB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnV0VMQ09NRSBCQUNLJyxcclxuICAgIEVsZW1lbnQ6IExvZ2luLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdKT0lOIFVTJyxcclxuICAgIEVsZW1lbnQ6IFJlZ2lzdHJ5LFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdkdmEnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8sIENTU1Byb3BlcnRpZXMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlLCBVc2VyIH0gZnJvbSAnc3RhdGUtdHlwaW5ncyc7XHJcbmltcG9ydCB7IENPTVBPTkVOVF9MSVNUIH0gZnJvbSAnLi9jb25zdGFudCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5sZXNzJztcclxuXHJcbmV4cG9ydCB0eXBlIGNoYW5nZUZuID0gKHBhZ2U6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgZGlzcGF0Y2g6IFZvaWRGdW5jdGlvbjtcclxuICBvbkNsb3NlOiBWb2lkRnVuY3Rpb247XHJcbiAgdXNlcjogVXNlcjtcclxuICBoaXN0b3J5OiBIaXN0b3J5O1xyXG4gIGF1dG9DbG9zZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbkJveDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICB1c2VyLFxyXG4gIGhpc3RvcnksXHJcbiAgZGlzcGF0Y2gsXHJcbiAgb25DbG9zZSxcclxuICBhdXRvQ2xvc2UsXHJcbn06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBzdHlsZTogUGFydGlhbDxDU1NQcm9wZXJ0aWVzPiA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoMCwgLSR7KGN1cnJlbnQgLSAxKSAqIDM2MH1weCwgMClgLFxyXG4gICAgfTtcclxuICB9LCBbY3VycmVudF0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcj8uaXNMb2dpbikge1xyXG4gICAgICBvbkNsb3NlKCk7XHJcbiAgICAgIGhpc3RvcnkucHVzaCgnL3VzZXItY2VudGVyJyk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuICBpZiAodXNlcj8uaXNMb2dpbikgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFza30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Cb3h9IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYW5zZm9ybX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgIHtDT01QT05FTlRfTElTVC5tYXAoKHsgdGl0bGUsIEVsZW1lbnQgfSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXt0aXRsZX0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U9e2F1dG9DbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e3NldEN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm1hc2tcIjpcInN0eWxlcy1tb2R1bGVfX21hc2tfX18xMVVCU1wiLFwibG9naW5Cb3hcIjpcInN0eWxlcy1tb2R1bGVfX2xvZ2luQm94X19fZzN3QkZcIixcInNjYWxlXCI6XCJzdHlsZXMtbW9kdWxlX19zY2FsZV9fXzJVZk1YXCIsXCJ0cmFuc2Zvcm1cIjpcInN0eWxlcy1tb2R1bGVfX3RyYW5zZm9ybV9fXzF3c21WXCIsXCJpdGVtXCI6XCJzdHlsZXMtbW9kdWxlX19pdGVtX19fMW1ZLXJcIixcInRpdGxlXCI6XCJzdHlsZXMtbW9kdWxlX190aXRsZV9fXzNDai1QXCIsXCJsZWZ0MlJpZ2h0XCI6XCJzdHlsZXMtbW9kdWxlX19sZWZ0MlJpZ2h0X19fTjdyZ29cIixcImZhZGVJblwiOlwic3R5bGVzLW1vZHVsZV9fZmFkZUluX19fMmNRV0pcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4NjQ1MFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtaG90LWxvYWRlckAxLjQuNEBjc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0IEFwaSBmcm9tICdAL3V0aWxzL3JlcXVlc3QnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKGJvZHkpIHtcclxuICByZXR1cm4gQXBpKCdhcGkvbG9naW4nLCAnUE9TVCcsIGJvZHkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0cnkoYm9keSkge1xyXG4gIHJldHVybiBBcGkoJ2FwaS9yZWdpc3RlcicsICdQT1NUJywgYm9keSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaWRNb3VudCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzXCI7XHJcbmltcG9ydCB7IGZvcm1hdFRpbWUsIHN0cmluZ2lmeSB9IGZyb20gXCJAL3V0aWxzL2Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBxdWVyeVJhbmRvbSB9IGZyb20gXCIuL3NlcnZpY2VcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5sZXNzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBoaXN0b3J5IH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBsaXN0PzogUmVjb3JkPHN0cmluZywgbnVtYmVyPltdO1xyXG4gIH0+KHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbGlzdDogW10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgbGV0IGRhdGEgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogcmVzRGF0YSB9ID0gYXdhaXQgcXVlcnlSYW5kb20oKTtcclxuICAgICAgZGF0YSA9IHJlc0RhdGE7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbGlzdDogZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VEaWRNb3VudChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IG9uRnJlc2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBxdWVyeSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBsaXN0ID0gW10gfSA9IHN0YXRlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RCb3h9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFtaW5XcmFwfT5cclxuICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdXcmFwfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5Eb3R9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICDpmo/mnLrmjqjojZDvvJpcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnVwZEljb259IG9uQ2xpY2s9e29uRnJlc2h9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uc2h1YXhpblwiIC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICB7bGlzdC5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fSBrZXk9e2xvYWRpbmcudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcChcclxuICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgc2l0ZUljb24sXHJcbiAgICAgICAgICAgICAgICBzaXRlTmFtZSxcclxuICAgICAgICAgICAgICAgIF9pZDogc2l0ZUlkLFxyXG4gICAgICAgICAgICAgICAgc2l0ZVR5cGUsXHJcbiAgICAgICAgICAgICAgICBzaXRlSW1ncyxcclxuICAgICAgICAgICAgICAgIHNpdGVEZXNjLFxyXG4gICAgICAgICAgICAgICAgc3VibWl0RGF0ZSxcclxuICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17c2l0ZUlkfSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZUljb25XcmFwfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaXRlSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVJbWdzPy5bMF0/LnNyYyB8fCBzaXRlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZU5hbWV9PntzaXRlTmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvc2l0ZS1pbmZvPyR7c3RyaW5naWZ5KHsgc2l0ZVR5cGUsIHNpdGVJZCB9KX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT57c2l0ZURlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e2Zvcm1hdFRpbWUoc3VibWl0RGF0ZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IEFwaSBmcm9tICdAL3V0aWxzL3JlcXVlc3QnO1xyXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlSYW5kb20oKSB7XHJcbiAgcmV0dXJuIEFwaSgnYXBpL3F1ZXJ5UmFuZG9tJywgJ0dFVCcsIHt9KTtcclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImxpc3RCb3hcIjpcInN0eWxlcy1tb2R1bGVfX2xpc3RCb3hfX19lcjN2WFwiLFwidGl0bGVcIjpcInN0eWxlcy1tb2R1bGVfX3RpdGxlX19fQmpJMUNcIixcImxpc3RcIjpcInN0eWxlcy1tb2R1bGVfX2xpc3RfX18yWThJWlwiLFwibGlzdEl0ZW1cIjpcInN0eWxlcy1tb2R1bGVfX2xpc3RJdGVtX19feWVPM1pcIixcInNpdGVJY29uV3JhcFwiOlwic3R5bGVzLW1vZHVsZV9fc2l0ZUljb25XcmFwX19fM0RhZVlcIixcInNpdGVJY29uXCI6XCJzdHlsZXMtbW9kdWxlX19zaXRlSWNvbl9fXzI1bG9nXCIsXCJyaWdodFwiOlwic3R5bGVzLW1vZHVsZV9fcmlnaHRfX18ya0tPNVwiLFwiYm90dG9tXCI6XCJzdHlsZXMtbW9kdWxlX19ib3R0b21fX18ySUItRFwiLFwiZGVzY1wiOlwic3R5bGVzLW1vZHVsZV9fZGVzY19fXzFRVW9CXCIsXCJkYXRlXCI6XCJzdHlsZXMtbW9kdWxlX19kYXRlX19fMXBYdXVcIixcInRvcFwiOlwic3R5bGVzLW1vZHVsZV9fdG9wX19fMl80a1lcIixcImJ0blwiOlwic3R5bGVzLW1vZHVsZV9fYnRuX19fa040cVBcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzM5MjM4NjA4NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtaG90LWxvYWRlckAxLjQuNEBjc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0IHsgUmVhY3RNaWR3YXlGZXRjaCB9IGZyb20gJ3Nzci10eXBlcy1yZWFjdCc7XG5pbXBvcnQgeyBJbmRleERhdGEgfSBmcm9tICd+L3R5cGluZ3MvZGF0YSc7XG5cbmNvbnN0IGZldGNoOiBSZWFjdE1pZHdheUZldGNoPHtcbiAgYXBpU2VydmljZToge1xuICAgIGluZGV4OiAoKSA9PiBQcm9taXNlPEluZGV4RGF0YT47XG4gIH07XG59PiA9IGFzeW5jICh7IGN0eCwgcm91dGVyUHJvcHMgfSkgPT4ge1xuICAvLyDpmIXor7vmlofmoaPojrflvpfmm7TlpJrkv6Hmga8gaHR0cDovL2RvYy5zc3ItZmMuY29tL2RvY3MvZmVhdHVyZXMkZmV0Y2gjJUU1JTg4JUE0JUU2JTk2JUFEJUU1JUJEJTkzJUU1JTg5JThEJUU3JThFJUFGJUU1JUEyJTgzXG4gIGNvbnN0IGRhdGEgPSBfX2lzQnJvd3Nlcl9fXG4gICAgPyBhd2FpdCAoYXdhaXQgd2luZG93LmZldGNoKCcvYXBpL2luZGV4JykpLmpzb24oKVxuICAgIDogYXdhaXQgY3R4IS5hcGlTZXJ2aWNlPy5pbmRleCgpO1xuICByZXR1cm4ge1xuICAgIC8vIOW7uuiuruagueaNruaooeWdl+e7meaVsOaNruWKoOS4iiBuYW1lc3BhY2XpmLLmraLmlbDmja7opobnm5ZcbiAgICBpbmRleERhdGE6IGRhdGEsXG4gICAgdXNlcjoge30sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnc3RhdGUtdHlwaW5ncyc7XHJcbmltcG9ydCB7IFNQcm9wcywgSUNvbnRleHQgfSBmcm9tICdzc3ItdHlwZXMtcmVhY3QnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnQC9jb21wb25lbnRzL2xvZ2luTW9kYWwnO1xyXG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAnQC9jb21tb24vbGliJztcclxuaW1wb3J0IEhvdExpc3QgZnJvbSAnLi9jb21wb25lbnRzL2hvdExpc3QnO1xyXG5pbXBvcnQgeyBJRGF0YSB9IGZyb20gJ34vdHlwaW5ncy9kYXRhJztcclxuaW1wb3J0IHsgU1RPUkVfQ09OVEVYVCB9IGZyb20gJ19idWlsZC9jcmVhdGUtY29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmxlc3MnO1xyXG5pbXBvcnQgeyBDb21tb25MYXlvdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L2NvbW1vbkxheW91dCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGhpc3Rvcnk6IEhpc3Rvcnk7XHJcbiAgdXNlcjogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdXNlckluZm86IFVzZXIgPSB1c2VyIHx8IHt9O1xyXG4gIGNvbnN0IGxvZ2luRW50cnkgPSAoKSA9PiB7XHJcbiAgICBMb2dpbi5zaG93KHsgaGlzdG9yeSwgZGlzcGF0Y2gsIHVzZXI6IHVzZXJJbmZvIH0sIHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQ8SUNvbnRleHQ8SURhdGE+PihTVE9SRV9DT05URVhUKTtcclxuICAvLyBjb25zb2xlLmxvZygnc3RhdGUnLCBzdGF0ZSk7XHJcbiAgY29uc3QgeyBwYWdlQ29uZmlnIH0gPSB1c2VySW5mbztcclxuICBjb25zdCB7IG1haW5UaXRsZSwgZGVzYyB9ID0gcGFnZUNvbmZpZyB8fCB7fTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbW1vbkxheW91dCBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmRleH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BXcmFwfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZUluZm99PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhc2ljfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT7igJzlm6DkuLrng63niLHvvIwg5omA5Lul55u46IGa4oCdLjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT7nq5nngrnogZrlkIjlubPlj7DvvIzorqnmm7TlpJrnmoTkurrorrDkvY/mgqjnmoTnvZHnq5kuPC9wPlxyXG4gICAgICAgICAgICAgIDxoMT5TSVRFUy5MSU5LPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdH0+XHJcbiAgICAgICAgICAgICAgPGgxPnttYWluVGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT57ZGVzY308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmpvaW5nfT5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goJy9zaXRlcy9zdWJtaXQtc2l0ZScpfT7mj5DkuqTmgqjnmoTnvZHnq5nvvIzliqDlhaXmiJHku6zvvIE8L2E+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbnFpYW5qaW4yIGljb25mb250XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckVudHJ5fT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbnVzZXIyIGljb25mb250XCIgb25DbGljaz17bG9naW5FbnRyeX0gLz5cclxuXHJcbiAgICAgICAgICAgIHsodXNlckluZm8uYWRtaW4gfHwgdXNlckluZm8uc3VwZXJBZG1pbikgJiYgKFxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvc3VwZXItYWRtaW4vdXNlci1saXN0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uamlzaHUgaWNvbmZvbnRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BZGFYSC9zaXRlcy1mcm9udC1lbmQtcGNcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmdpdGh1YjEgaWNvbmZvbnRcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXd9PlxyXG4gICAgICAgICAgPEhvdExpc3QgaGlzdG9yeT17aGlzdG9yeX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbW1vbkxheW91dD5cclxuICApO1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhZ2VCb3hcIjpcInN0eWxlcy1tb2R1bGVfX3BhZ2VCb3hfX18yU3JiVlwiLFwiaW5kZXhcIjpcInN0eWxlcy1tb2R1bGVfX2luZGV4X19fMkNBc2RcIixcInRvcFdyYXBcIjpcInN0eWxlcy1tb2R1bGVfX3RvcFdyYXBfX18xVm9QZFwiLFwidXNlckVudHJ5XCI6XCJzdHlsZXMtbW9kdWxlX191c2VyRW50cnlfX19DZ0xKOVwiLFwic2l0ZUluZm9cIjpcInN0eWxlcy1tb2R1bGVfX3NpdGVJbmZvX19fMVFrbHFcIixcImpvaW5nXCI6XCJzdHlsZXMtbW9kdWxlX19qb2luZ19fXzN3R25DXCIsXCJiYXNpY1wiOlwic3R5bGVzLW1vZHVsZV9fYmFzaWNfX18xLU9MMlwiLFwicHJvamVjdFwiOlwic3R5bGVzLW1vZHVsZV9fcHJvamVjdF9fXzJ3LVV2XCIsXCJkZXNjXCI6XCJzdHlsZXMtbW9kdWxlX19kZXNjX19fSnlvblJcIixcInZpZXdcIjpcInN0eWxlcy1tb2R1bGVfX3ZpZXdfX18zbXNRMlwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM3MzkyMzg1NDc1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1ob3QtbG9hZGVyQDEuNC40QGNzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJleHBvcnQgKiBmcm9tICcuL3NyYyc7XHJcbiIsImNvbnN0IHN0YXRlOiBTcmNDb25maWcgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoKSB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWVzcGFjZTogJ3BhZ2VTcmMnLFxyXG4gIHN0YXRlLFxyXG4gIHJlZHVjZXIsXHJcbn07XHJcbiIsIi8vIOS4jemcgOimgWxvYWRpbmfnmoTmjqXlj6NcclxuZXhwb3J0IGNvbnN0IE5PX0xPQURJTkdfQVBJID0gW1xyXG4gICcvZ2V0VXNlckluZm8nLFxyXG4gICcvZ2V0SG90TGlzdCcsXHJcbiAgJy9jcmVhdGVTcmMnLFxyXG4gICcvcXVlcnlTcmMnLFxyXG4gICcvcXVlcnlSYW5kb20nLFxyXG4gICcvdXBkYXRlU3JjJyxcclxuICAnL3BhcnNlUnNzJyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBOT0VSUk9SX0FQSSA9IFsnL2dldFVzZXJJbmZvJywgJy9sb2dpbicsICcvcmVnaXN0ZXInLCAnL3BhcnNlUnNzJ107XHJcblxyXG5leHBvcnQgY29uc3QgRU1PSklfQ0FDSEVfS0VZID0gJ19fZW1vamlfX2xpc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJVEVfVFlQRSA9IFtcclxuICB7XHJcbiAgICBjb2RlOiAndGVjaG5vbG9neScsXHJcbiAgICBuYW1lOiAn5oqA5pyv57G7JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6ICdsaWZlJyxcclxuICAgIG5hbWU6ICfnlJ/mtLvnsbsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogJ2luZm8nLFxyXG4gICAgbmFtZTogJ+i1hOiur+exuycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAnb3RoZXJzJyxcclxuICAgIG5hbWU6ICflhbblroPnq5nngrknLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTUFQX1NJVEVfVFlQRSA9IHtcclxuICB0ZWNobm9sb2d5OiAn5oqA5pyv57G7JyxcclxuICBsaWZlOiAn55Sf5rS757G7JyxcclxuICBpbmZvOiAn6LWE6K6v57G7JyxcclxuICBvdGhlcnM6ICflhbblroPnq5nngrknLFxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEZVTExfU0NSRUVOX1BBVEggPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSVRFX0JBU0lDX0lORk8gPSB7XHJcbiAgREVTQzogJ+ermeeCueiBmuWQiOW5s+WPsO+8jOWboOS4uueDreeIse+8jOaJgOS7peebuOiBmu+8jOiuqeabtOWkmueahOS6uuefpemBk+aCqOeahOe9keermeOAgicsXHJcbiAgVElUTEU6ICfnq5nngrnogZrlkIjlubPlj7AnLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBTcmNDb25maWcgfSBmcm9tICdAL21vZGVscy91c2VyJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBTSVRFX0JBU0lDX0lORk8gfSBmcm9tICcuL2NvbnN0YW50JztcclxuLy8gaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxubW9tZW50LmxvY2FsZSgnemgtY24nKTtcclxuXHJcbmludGVyZmFjZSBSZWYge1xyXG4gIGN1cnJlbnQ/OiB7XHJcbiAgICBnZXRWYWx1ZT86IEZ1bmN0aW9uO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxheSh0aW1lOiBudW1iZXIpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKG9rKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgb2sodW5kZWZpbmVkKTtcclxuICAgIH0sIHRpbWUgKiAxMDAwKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtKHNlYXJjaDogc3RyaW5nLCBrZXk6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIXNlYXJjaCB8fCAha2V5KSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHVybCA9IHNlYXJjaC5zbGljZSgxKTtcclxuICAgIGNvbnN0IGNodW5rcyA9IHVybC5zcGxpdCgnJicpO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNodW5rcykge1xyXG4gICAgICBjb25zdCBbaywgdmFsdWVdID0gaXRlbS5zcGxpdCgnPScpO1xyXG4gICAgICBpZiAoayA9PT0ga2V5KSByZXR1cm4gdmFsdWUgfHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FjaGUoa2V5OiBzdHJpbmcsIGRhdGE6IEFueUNvbW1vbk9iaikge1xyXG4gIHRyeSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhIGluc3RhbmNlb2YgT2JqZWN0ID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZShrZXk6IHN0cmluZykge1xyXG4gIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gIGlmIChzdHIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NoYW5nZShkYXRhMTogQW55Q29tbW9uT2JqLCBkYXRhMjogQW55Q29tbW9uT2JqKSB7XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGExKSAhPT0gSlNPTi5zdHJpbmdpZnkoZGF0YTIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKHRpbWU6IG51bWJlcikge1xyXG4gIGlmIChpc05hTih0aW1lKSkge1xyXG4gICAgcmV0dXJuIG1vbWVudCh0aW1lKS5zdGFydE9mKCdtaW51dGUnKS5mcm9tTm93KCk7XHJcbiAgfVxyXG4gIHJldHVybiBtb21lbnQobmV3IERhdGUoTnVtYmVyKHRpbWUpKSlcclxuICAgIC5zdGFydE9mKCdtaW51dGUnKVxyXG4gICAgLmZyb21Ob3coKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSkge1xyXG4vLyAgIHJldHVybiBtb21lbnQobmV3IERhdGUoTnVtYmVyKHRpbWUpKSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldE9iaihvYmo6IGFueSkge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiAob2JqW2tleV0gPSAnJykpO1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxcVNpZ24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIHdpbmRvdy5RQy5Mb2dpbi5zaG93UG9wdXAoe1xyXG4gICAgICBhcHBJZDogJzEwMTk0Njk2NycsXHJcbiAgICAgIHJlZGlyZWN0VVJJOiAnaHR0cHM6Ly9zaXRlcy5saW5rL3FxLWxvZ2luJyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeVJlZihyZWY6IFJlZikge1xyXG4gIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgcmV0dXJuIHJlZi5jdXJyZW50LmdldFZhbHVlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5KG9iajogYW55KSB7XHJcbiAgaWYgKCFvYmopIHJldHVybiAnJztcclxuICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBwcmVmaXggPSBpbmRleCA9PT0gMCA/ICcnIDogJyYnO1xyXG4gICAgcmVzdWx0ICs9IGAke3ByZWZpeH0ke2tleX09JHtvYmpba2V5XX1gO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRpbWUoc3RyOiBzdHJpbmcpIHtcclxuICBpZiAoYCR7c3RyfWAubGVuZ3RoID09PSAxKSByZXR1cm4gYDAke3N0cn1gO1xyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKHRpbWU6IG51bWJlciB8IERhdGUgfCBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoID0gYCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gO1xyXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpICsgJyc7XHJcbiAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKSArICcnO1xyXG4gIGNvbnN0IG1pbnUgPSBkYXRlLmdldE1pbnV0ZXMoKSArICcnO1xyXG4gIHJldHVybiBgJHt5ZWFyfS0ke3NldFRpbWUobW9udGgpfS0ke3NldFRpbWUoZGF5KX0gJHtzZXRUaW1lKGhvdXIpfToke3NldFRpbWUobWludSl9YDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSHRtbChzdHIpIHtcclxuLy8gICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICBlbGUuaW5uZXJIVE1MID0gc3RyO1xyXG4vLyAgIC8vIHJldHVybiBlbGUuaW5uZXJIVE1MO1xyXG4vLyAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgc3RyKTtcclxuLy8gfVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMMkJhc2U2NCh1cmw6IHN0cmluZykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdnZXQnLCB1cmwsIHRydWUpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IHRoaXMucmVzcG9uc2U7XHJcbiAgICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZT8udGFyZ2V0Py5yZXN1bHQ7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVqZWN0KCk7XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgeyBUSVRMRSwgREVTQyB9ID0gU0lURV9CQVNJQ19JTkZPO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZFRpdGxlRGVzYyh0aXRsZTogc3RyaW5nID0gJycsIGRlc2M6IHN0cmluZykge1xyXG4gIGRvY3VtZW50LnRpdGxlID0gYCR7dGl0bGV9ICR7VElUTEV9YDtcclxuICBjb25zdCB7XHJcbiAgICBsb2NhdGlvbjogeyBwYXRobmFtZSB9LFxyXG4gIH0gPSB3aW5kb3c7XHJcbiAgY29uc3QgbmV3RGVzYyA9IHBhdGhuYW1lID09PSAnLycgPyBERVNDIDogZGVzYztcclxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiRGVzY3JpcHRpb25cIl0nKTtcclxuICAvLyBtZXRhPy5jb250ZW50ID0gbmV3RGVzYztcclxuICBtZXRhPy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBuZXdEZXNjKTtcclxuICAvLyBwdXNoMkJhaWR1KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwdXNoMkJhaWR1KCkge1xyXG4gIGNvbnN0IGJwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgY29uc3QgY3VyUHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wuc3BsaXQoJzonKVswXTtcclxuICBpZiAoY3VyUHJvdG9jb2wgPT09ICdodHRwcycpIHtcclxuICAgIGJwLnNyYyA9ICdodHRwczovL3p6LmJkc3RhdGljLmNvbS9saW5rc3VibWl0L3B1c2guanMnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBicC5zcmMgPSAnaHR0cDovL3B1c2guemhhbnpoYW5nLmJhaWR1LmNvbS9wdXNoLmpzJztcclxuICB9XHJcbiAgY29uc3QgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcclxuICBzPy5wYXJlbnROb2RlPy5pbnNlcnRCZWZvcmUoYnAsIHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2xpY2VOdW1iZXIobnVtOiBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gIGlmIChudW0udG9TdHJpbmcoKS5sZW5ndGggPiAxKSByZXR1cm4gbnVtO1xyXG4gIHJldHVybiBgMCR7bnVtfWA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g5Yqg6L295Zu+54mH5a696auY77yM5q+U5L6LXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmNcclxuICogQHJldHVybnMgeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgcmF0aW86IG51bWJlciB9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEltZ1NpemUoXHJcbiAgc3JjOiBzdHJpbmcsXHJcbik6IFByb21pc2U8eyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgcmF0aW86IG51bWJlciB9PiB7XHJcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgaW1nLnNyYyA9IHNyYztcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaW1nLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY29uc3QgeyBwYXRoIH0gPSBlO1xyXG4gICAgICBjb25zdCBbeyBuYXR1cmFsSGVpZ2h0LCBuYXR1cmFsV2lkdGggfV0gPSBwYXRoO1xyXG4gICAgICByZXNvbHZlKHtcclxuICAgICAgICB3aWR0aDogbmF0dXJhbFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogbmF0dXJhbFdpZHRoLFxyXG4gICAgICAgIHJhdGlvOiBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0LFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBpbWcub25lcnJvciA9IHJlamVjdDtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVRocm9sZTxUIGV4dGVuZHMgKC4uLmFyZzogYW55W10pID0+IGFueT4oZm46IFQsIGRlbGF5OiBudW1iZXIgPSAxMDApIHtcclxuICBsZXQgcHJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgcmV0dXJuICguLi5hcmcpID0+IHtcclxuICAgIGlmIChEYXRlLm5vdygpIC0gcHJlVGltZSA+PSBkZWxheSkge1xyXG4gICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZyk7XHJcbiAgICAgIHByZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21OdW0obGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xyXG59XHJcblxyXG4vKipcclxuICog5p+l6K+i6aG16Z2i57Sg5p2QXHJcbiAqIEBwYXJhbSBjb25maWdzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3JjQ29uZmlnKGNvbmZpZ3M6IFNyY0NvbmZpZ1tdKTogUGFydGlhbDxTcmNDb25maWc+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSBsb2NhdGlvbjtcclxuICBjb25zdCBjb25maWcgPSBjb25maWdzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucGF0aG5hbWUgPT09IHBhdGhuYW1lKSB8fCB7fTtcclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlTG9hZEltZyhzcmM6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgfTtcclxuICAgIGltZy5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICByZWplY3QoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRGlkTW91bnQoY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgfSwgW10pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVW5tb3VudChjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IGNhbGxiYWNrKCk7XHJcbiAgfSwgW10pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJ2YWwoY2FsbGJhY2s6IEZ1bmN0aW9uLCBkZWxheTogbnVtYmVyKSB7XHJcbiAgY29uc3Qgc2F2ZWRDYWxsYmFjazogUmVmPEZ1bmN0aW9uPiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50ID0gY2FsbGJhY2s7XHJcbiAgfSwgW2NhbGxiYWNrXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xyXG4gICAgICBpZiAoc2F2ZWRDYWxsYmFjay5jdXJyZW50KSB7XHJcbiAgICAgICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChkZWxheSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKHRpY2ssIGRlbGF5KTtcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHt9O1xyXG4gIH0sIFtkZWxheV0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9vcChyZXF1ZXN0LCB0aW1lb3V0KSB7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KCk7XHJcbiAgICAgIHNldFJlc3VsdChyZXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBzZXRFcnJvcihlKTtcclxuICAgIH1cclxuICB9LCB0aW1lb3V0KTtcclxuXHJcbiAgcmV0dXJuIFtlcnJvciwgcmVzdWx0XTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYm91bmNlKHZhbHVlLCBkZWxheTogbnVtYmVyKSB7XHJcbiAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RGVib3VuY2VkVmFsdWUodmFsdWUpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICB9LCBbdmFsdWUsIGRlbGF5XSk7XHJcbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9hZGluZzxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KGNiOiBUKTogYW55IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxCb29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgYXJnID0gdXNlUmVmPGFueVtdPigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiB3b3JrKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNiKC4uLmFyZy5jdXJyZW50KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBpbmdvcmVcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgd29yaygpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2FkaW5nXSk7XHJcbiAgcmV0dXJuIFtcclxuICAgIGxvYWRpbmcsXHJcbiAgICAoLi4uYXJncykgPT4ge1xyXG4gICAgICBhcmcuY3VycmVudCA9IGFyZ3M7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IElTX0VNQUlMID0gL15bYS16QS1aMC05Xy1dK0BbYS16QS1aMC05Xy1dKyhcXC5bYS16QS1aMC05Xy1dKykrJC87XHJcbiIsIi8vIEB0cy1ub2NoZWNrXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0AvY29tcG9uZW50cy9sb2FkaW5nJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgTk9fTE9BRElOR19BUEksIE5PRVJST1JfQVBJIH0gZnJvbSAnLi9jb25zdGFudCc7XHJcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9sb2dpbk1vZGFsJztcclxuXHJcbi8qKlxyXG4gKiBSZXF1ZXN0cyBhIFVSTCwgcmV0dXJuaW5nIGEgcHJvbWlzZS5cclxuICpcclxuICogQHBhcmFtICB7c3RyaW5nfSB1cmwgICAgICAgVGhlIFVSTCB3ZSB3YW50IHRvIHJlcXVlc3RcclxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgd2Ugd2FudCB0byBwYXNzIHRvIFwiZmV0Y2hcIlxyXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyBlaXRoZXIgXCJkYXRhXCIgb3IgXCJlcnJcIlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHBhcnNlRXJyb3IoZXJyb3IpIHtcclxuICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBPYmplY3QgPyBKU09OLnN0cmluZ2lmeShlcnJvcikgOiBlcnJvci50b1N0cmluZygpIHx8ICflh7rplJnllabvvJonICsgZXJyb3I7XHJcbn1cclxuXHJcbmNvbnN0IGlzQnVpbGQgPSB0cnVlO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcGkoXHJcbiAgdXJsLFxyXG4gIG1ldGhvZD86IHN0cmluZyA9ICdHRVQnLFxyXG4gIGRhdGE/OiBBbnlDb21tb25PYmosXHJcbiAgaXNTdmcgPSBmYWxzZSxcclxuKTogeyBzdWNjZXNzOiBib29sZWFuOyBkYXRhOiBhbnk7IHRvdGFsQ291bnQ/OiBudW1iZXI7IFt4OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgY29uc3QgX3VybF8gPSAoaXNCdWlsZCA/IHVybC5yZXBsYWNlKC9hcGkvLCAnJykgOiB1cmwpLnJlcGxhY2UoL1xcL21vcmUvLCAnJyk7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IHdpbmRvdy5sb2NhdGlvbjtcclxuICBjb25zdCBuZWVkTG9hZGluZyA9IE5PX0xPQURJTkdfQVBJLmluY2x1ZGVzKFxyXG4gICAgL2FwaS8udGVzdChfdXJsXykgPyBfdXJsXy5yZXBsYWNlKC9hcGkvZywgJycpIDogX3VybF8sXHJcbiAgKTtcclxuICAvLyDkuI3pnIDopoHmj5DnpLrplJnor6/nmoTmjqXlj6NcclxuICBjb25zdCBub0Vycm9yID0gTk9FUlJPUl9BUEkuaW5jbHVkZXMoL2FwaS8udGVzdChfdXJsXykgPyBfdXJsXy5yZXBsYWNlKC9hcGkvZywgJycpIDogX3VybF8pO1xyXG4gIGlmICghaXNTdmcpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogQ29va2llcy5nZXQoJ3NpdGVUb2tlbicpIHx8ICdudWxsJyxcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kID09PSAnUE9TVCcgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIGxldCBzZW5jZUtleSA9IG9yaWdpbltvcmlnaW4ubGVuZ3RoIC0gMV0gPT09ICcvJyA/ICcnIDogJy8nO1xyXG4gICAgaWYgKGlzQnVpbGQpIHtcclxuICAgICAgc2VuY2VLZXkgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICFuZWVkTG9hZGluZyAmJiBMb2FkaW5nLnNob3coe30pO1xyXG4gICAgICBmZXRjaChgJHtvcmlnaW59JHtzZW5jZUtleX0ke191cmxffWAsIG9wdGlvbnMpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCh0eXBlb2YgcmVzdWx0ID09PSAnYm9vbGVhbicgJiYgcmVzdWx0KSB8fCByZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QocmVzdWx0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChub0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICdwYXJzZUVycm9yKChyZXN1bHQgJiYgcmVzdWx0LmVycm9yTXNnKSB8fCByZXN1bHQpJyxcclxuICAgICAgICAgICAgICBwYXJzZUVycm9yKChyZXN1bHQgJiYgcmVzdWx0LmVycm9yTXNnKSB8fCByZXN1bHQpLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmZhaWwoe1xyXG4gICAgICAgICAgICAgIG1zZzogcGFyc2VFcnJvcigocmVzdWx0ICYmIHJlc3VsdC5lcnJvck1zZykgfHwgcmVzdWx0KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQ/Lm9wZW5Mb2dpbikge1xyXG4gICAgICAgICAgICAgIExvZ2luTW9kYWwuc2hvdyh7fSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2ltYWdlL3N2Zyt4bWwnLFxyXG4gICAgICAgIGFjY2VwdDogJ2ltYWdlL3N2Zyt4bWwnLFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCB7IG9yaWdpbiB9ID0gd2luZG93LmxvY2F0aW9uO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2goYCR7b3JpZ2lufSR7X3VybF99YCwgb3B0aW9ucylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2ljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL21lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbWVzc2FnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtYmFzZTY0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1tZDVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNzci1zZXJ2ZXItdXRpbHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==