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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/ItemComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card__ = __webpack_require__("antd/lib/card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PopupComponent__ = __webpack_require__("./components/PopupComponent.js");


var _jsxFileName = "/Users/koobohyeon/Documents/hello-next2/components/ItemComponent.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Meta = __WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default.a.Meta;




var ItemComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ItemComponent, _React$Component);

  function ItemComponent() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ItemComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ItemComponent.__proto__ || Object.getPrototypeOf(ItemComponent)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        show: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "showModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          show: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "dismiss", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          show: false
        });
      }
    }), _temp));
  }

  _createClass(ItemComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          store = _props.store,
          url = _props.url;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default.a, {
        xs: 24,
        md: 12,
        lg: 8,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.state.show ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__PopupComponent__["default"], {
        store: store,
        dismiss: this.dismiss,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }) : null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default.a, {
        styleId: "608508366",
        css: ".item.jsx-608508366{padding-left:1rem;padding-top:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSXRlbUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQlcsQUFHaUMsa0JBQ0QsaUJBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvSXRlbUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva29vYm9oeWVvbi9Eb2N1bWVudHMvaGVsbG8tbmV4dDIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2wsIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFBvcHVwQ29tcG9uZW50IGZyb20gXCIuL1BvcHVwQ29tcG9uZW50XCI7XG5cbmNsYXNzIEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzaG93OiBmYWxzZVxuICB9O1xuICBzaG93TW9kYWwgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcbiAgfTtcbiAgZGlzbWlzcyA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUsIHVybCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfSBsZz17OH0geGw9ezZ9PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93ID8gKFxuICAgICAgICAgIDxQb3B1cENvbXBvbmVudCBzdG9yZT17c3RvcmV9IGRpc21pc3M9e3RoaXMuZGlzbWlzc30gLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbH0+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGhvdmVyYWJsZVxuICAgICAgICAgICAgY292ZXI9ezxpbWcgYWx0PXtgJHtzdG9yZS50aXRsZX3snbTrr7jsp4BgfSBzcmM9e3N0b3JlLmltYWdlc1swXX0gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1ldGEgdGl0bGU9e3N0b3JlLnRpdGxlfSAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Db21wb25lbnQ7XG4iXX0= */\n/*@ sourceURL=components/ItemComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        onClick: this.showModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-608508366" + " " + "item"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default.a, {
        hoverable: true,
        cover: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
          alt: "".concat(store.title, "\uC774\uBBF8\uC9C0"),
          src: store.images[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          className: "jsx-608508366"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Meta, {
        title: store.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }))));
    }
  }]);

  return ItemComponent;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ItemComponent);

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

/***/ "./components/ListComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ItemComponent__ = __webpack_require__("./components/ItemComponent.js");

var _jsxFileName = "/Users/koobohyeon/Documents/hello-next2/components/ListComponent.js";


var gutter = {
  xs: 8,
  sm: 16,
  md: 24
};

var ListContainer = function ListContainer(_ref) {
  var stores = _ref.stores;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
    gutter: 16,
    type: "flex",
    justify: "start",
    align: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, stores.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ItemComponent__["a" /* default */], {
      key: item.id,
      store: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ListContainer);

/***/ }),

/***/ "./components/PopupComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__("antd/lib/modal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_carousel__ = __webpack_require__("antd/lib/carousel");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_router__);




var _jsxFileName = "/Users/koobohyeon/Documents/hello-next2/components/PopupComponent.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PopupComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PopupComponent, _React$Component);

  function PopupComponent() {
    _classCallCheck(this, PopupComponent);

    return _possibleConstructorReturn(this, (PopupComponent.__proto__ || Object.getPrototypeOf(PopupComponent)).apply(this, arguments));
  }

  _createClass(PopupComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          store = _props.store,
          dismiss = _props.dismiss;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
        visible: true,
        title: "AWESOME FOOD STORE",
        footer: null,
        width: "90vw",
        style: {
          top: 20
        },
        onCancel: dismiss,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_styled_jsx_style___default.a, {
        styleId: "3117394478",
        css: ".modal-content.jsx-3117394478{min-height:80vh;}h1.jsx-3117394478{padding-bottom:2rem;}.content-img.jsx-3117394478{width:45%;height:100%;}img.jsx-3117394478{width:100%  height:100%;}.content-desc.jsx-3117394478{width:45%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9wdXBDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JXLEFBRzJCLEFBSUksQUFHVixBQU1iLEFBR2EsVUFSRSxBQVNBLE1BZmQsSUFHQSxFQUlBLEFBU0EsRUFMQSIsImZpbGUiOiJjb21wb25lbnRzL1BvcHVwQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rb29ib2h5ZW9uL0RvY3VtZW50cy9oZWxsby1uZXh0MiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsLCBCdXR0b24sIENhcm91c2VsLCBDb2wsIFJvdyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY2xhc3MgUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSwgZGlzbWlzcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgIHRpdGxlPVwiQVdFU09NRSBGT09EIFNUT1JFXCJcbiAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICB3aWR0aD1cIjkwdndcIlxuICAgICAgICBzdHlsZT17eyB0b3A6IDIwIH19XG4gICAgICAgIG9uQ2FuY2VsPXtkaXNtaXNzfVxuICAgICAgPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xuXG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50LWltZyB7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSBcbiAgICAgICAgICBoZWlnaHQ6IDEwMCUgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5jb250ZW50LWRlc2Mge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gIFxuICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9PlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXk+XG4gICAgICAgICAgICAgICAge3N0b3JlLmltYWdlcy5tYXAoaW1nID0+IChcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9PlxuICAgICAgICAgICAgICA8aDE+e3N0b3JlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIHtzdG9yZS5kZXNjLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICA8cD57cH08L3A+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7c3RvcmUudXJsID8gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3N0b3JlLnVybH0+e2Ake3N0b3JlLnRpdGxlfSDtmYjtjpjsnbTsp4DroZwg7J2064+ZYH08L2E+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cENvbXBvbmVudDtcbiJdfQ== */\n/*@ sourceURL=components/PopupComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-3117394478" + " " + "modal-content"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        xs: 24,
        lg: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_carousel___default.a, {
        autoplay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, store.images.map(function (img) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
          src: img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          className: "jsx-3117394478"
        });
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        xs: 24,
        lg: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-3117394478"
      }, store.title), store.desc.map(function (p) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          className: "jsx-3117394478"
        }, p);
      }), store.url ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        href: store.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3117394478"
      }, "".concat(store.title, " \uD648\uD398\uC774\uC9C0\uB85C \uC774\uB3D9")) : null))));
    }
  }]);

  return PopupComponent;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PopupComponent);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LayoutComponent__ = __webpack_require__("./components/LayoutComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ListComponent__ = __webpack_require__("./components/ListComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PopupComponent__ = __webpack_require__("./components/PopupComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_dynamic__);

var _jsxFileName = "/Users/koobohyeon/Documents/hello-next2/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Modal = __WEBPACK_IMPORTED_MODULE_6_next_dynamic___default()( false ? new (require('next/dynamic').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require("../components/PopupComponent.js");

    m.__webpackChunkName = 'components_PopupComponent_3cbf0730d8802c209a12c9c350bdaf23.js';
    resolve(m);
  }, 'chunks/components_PopupComponent_3cbf0730d8802c209a12c9c350bdaf23.js');
}) : new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./components/PopupComponent.js");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  new Promise(function(resolve) { resolve(); }).then((function (require) {
    try {
      var m = __webpack_require__("./components/PopupComponent.js");

      m.__webpackChunkName = 'components_PopupComponent_3cbf0730d8802c209a12c9c350bdaf23';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}), {
  ssr: false
});

var MainPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainPage, _React$Component);

  function MainPage() {
    _classCallCheck(this, MainPage);

    return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
  }

  _createClass(MainPage, [{
    key: "render",
    value: function render() {
      var url = this.props.url;
      var stores = this.props.stores;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_LayoutComponent__["a" /* default */], {
        title: "AWESOME FOOD STORE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ListComponent__["a" /* default */], {
        stores: stores,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get("http://localhost:9000/stores");

              case 3:
                res = _context.sent;
                return _context.abrupt("return", {
                  stores: res.data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MainPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/card":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/carousel":
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "antd/lib/col":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/layout":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/modal":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/row":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/dynamic":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=index.js.map