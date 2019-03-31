module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/thales@2x.png":
/*!******************************!*\
  !*** ./assets/thales@2x.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa4AAACGCAYAAACFfW51AAAACXBIWXMAAC4jAAAuIwF4pT92AAAILmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDEzLTExLTA2VDExOjUyOjM2LTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wNC0zMFQxMjoxODozOS0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wNC0zMFQxMjoxODozOS0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ZWNkNTQ2OS1kZGUzLTU5NGMtYWIxMy1lMThmZTNkNjk5ZWQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNWE4N2VhOS0xODE4LTNmNGYtYjI4MC1lZTMyZWE0YmQ5NWYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMWY4NzA0My02YWNmLWRjNDYtOGI2Zi1kNzFmZTY2NjM4ZWMiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjIyMzciIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyNzAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxZjg3MDQzLTZhY2YtZGM0Ni04YjZmLWQ3MWZlNjY2MzhlYyIgc3RFdnQ6d2hlbj0iMjAxMy0xMS0wNlQxMTo1MjozNi0wNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozNjc2Zjk0Zi04MDIzLWM3NGMtYWEwMS0yYzFiNzgxOWQ1ZTYiIHN0RXZ0OndoZW49IjIwMTMtMTEtMDdUMDk6NTY6MDYtMDU6MDAiIHN0RXZ0OnNv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"

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    color: "blue",
    inverted: true,
    stackable: true,
    style: {
      marginTop: '0px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "gamepad"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    inverted: true,
    name: "heart"
  }), "HOME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "item"
  }, "Plan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "item"
  }, "Benifits")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "item"
  }, "Join"))));
});

/***/ }),

/***/ "./components/Layout.css":
/*!*******************************!*\
  !*** ./components/Layout.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_thales_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/thales@2x.png */ "./assets/thales@2x.png");
/* harmony import */ var _assets_thales_2x_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_thales_2x_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout.css */ "./components/Layout.css");
/* harmony import */ var _Layout_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Layout_css__WEBPACK_IMPORTED_MODULE_5__);




 // import images


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      marginTop: '20px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'inline'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "app-title"
  }, "I"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "app-title"
  }, "NSURANCE "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "app-title"
  }, "S"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "app-title"
  }, "HARING")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_thales_2x_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    style: {
      height: '44px'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children);
});
var sytles = {};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");









var MediCostSharing =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MediCostSharing, _Component);

  function MediCostSharing() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MediCostSharing);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MediCostSharing).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MediCostSharing, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Medical Cost Sharing Plan"));
    }
  }]);

  return MediCostSharing;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MediCostSharing);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__(/*! next-routes */ "next-routes")();

module.exports = routes;

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Study/Security/Blockchain/SampleProject/react_insurance/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map