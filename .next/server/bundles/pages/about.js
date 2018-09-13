module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FooterComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/koobohyeon/Documents/hello-next2/components/FooterComponent.js";


var FooterComponent = function FooterComponent() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    }
  }, "\xA9 2018 Koo Bo Hyeon");
};

/* harmony default export */ __webpack_exports__["a"] = (FooterComponent);

/***/ }),

/***/ "./components/HeaderComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/koobohyeon/Documents/hello-next2/components/HeaderComponent.js";



var HeaderComponent = function HeaderComponent() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "\n      .header {\n        color: #fff;\n        line-height: 10vh;\n        display: flex;\n        justify-content: space-between;\n      }\n      .menu a {\n          padding-left: 1rem;\n\n        }\n\n    "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "AWESOME FOOD STORE"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "ABOUT")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "STORES"))));
};

/* harmony default export */ __webpack_exports__["a"] = (HeaderComponent);

/***/ }),

/***/ "./components/LayoutComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HeaderComponent__ = __webpack_require__("./components/HeaderComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FooterComponent__ = __webpack_require__("./components/FooterComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);

var _jsxFileName = "/Users/koobohyeon/Documents/hello-next2/components/LayoutComponent.js";





var Header = __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a.Header,
    Footer = __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a.Footer,
    Content = __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a.Content;

var LayoutComponent = function LayoutComponent(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-581873171"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "581873171",
    css: ".content.jsx-581873171{padding-top:2rem;width:80%;min-height:80vh;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVPLEFBRzRCLGlCQUNQLFVBQ00sZ0JBQ0osWUFDZCIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva29vYm9oeWVvbi9Eb2N1bWVudHMvaGVsbG8tbmV4dDIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL0hlYWRlckNvbXBvbmVudFwiO1xuaW1wb3J0IEZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9Gb290ZXJDb21wb25lbnRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgQ29udGVudCB9ID0gTGF5b3V0O1xuY29uc3QgTGF5b3V0Q29tcG9uZW50ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IChcbiAgPGRpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgbWluLWhlaWdodDogODB2aDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAga2V5PVwidmlld3BvcnRcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjIuMC9hbnRkLm1pbi5jc3NcIlxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxIZWFkZXJDb21wb25lbnQgLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxGb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICA8Rm9vdGVyQ29tcG9uZW50IC8+XG4gICAgICA8L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRDb21wb25lbnQ7XG4iXX0= */\n/*@ sourceURL=components/LayoutComponent.js */"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-581873171"
  }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-581873171"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-581873171"
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__HeaderComponent__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: "jsx-581873171" + " " + "content"
  }, children))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Footer, {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FooterComponent__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (LayoutComponent);

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LayoutComponent__ = __webpack_require__("./components/LayoutComponent.js");
var _jsxFileName = "/Users/koobohyeon/Documents/hello-next2/pages/about.js";



var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_LayoutComponent__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "\n    .about{\n      padding-top: 2rem;\n    }\n    "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "AWESOME FOOD STORE\uB294 \uC9C0\uAE08 \uAC00\uC7A5 \uD56B\uD55C \uB9DB\uC9D1\uC744 \uC18C\uAC1C\uD574\uC8FC\uB294 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4.")));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


/***/ }),

/***/ "antd/lib/layout":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map