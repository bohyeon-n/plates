webpackHotUpdate(4,{

/***/ "./components/PopupComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__("./node_modules/antd/lib/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__("./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_carousel__ = __webpack_require__("./node_modules/antd/lib/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_router__);




var _jsxFileName = "/Users/koobohyeon/Documents/hello-next2/components/PopupComponent.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var PopupComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PopupComponent, _React$Component);

  function PopupComponent() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, PopupComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = PopupComponent.__proto__ || Object.getPrototypeOf(PopupComponent)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "dismiss", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_7_next_router___default.a.push("/");
      }
    }), _temp));
  }

  _createClass(PopupComponent, [{
    key: "render",
    value: function render() {
      var store = this.props.store;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
        visible: true,
        title: "AWESOME FOOD STORE",
        footer: null,
        width: "90vw",
        style: {
          top: 20
        },
        onCancel: this.dismiss,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_styled_jsx_style___default.a, {
        styleId: "3117394478",
        css: ".modal-content.jsx-3117394478{min-height:80vh;}h1.jsx-3117394478{padding-bottom:2rem;}.content-img.jsx-3117394478{width:45%;height:100%;}img.jsx-3117394478{width:100%  height:100%;}.content-desc.jsx-3117394478{width:45%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9wdXBDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJXLEFBRzJCLEFBSUksQUFHVixBQU1iLEFBR2EsVUFSRSxBQVNBLE1BZmQsSUFHQSxFQUlBLEFBU0EsRUFMQSIsImZpbGUiOiJjb21wb25lbnRzL1BvcHVwQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rb29ib2h5ZW9uL0RvY3VtZW50cy9oZWxsby1uZXh0MiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsLCBCdXR0b24sIENhcm91c2VsLCBDb2wsIFJvdyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY2xhc3MgUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBkaXNtaXNzID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKGAvYCk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJBV0VTT01FIEZPT0QgU1RPUkVcIlxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgIHdpZHRoPVwiOTB2d1wiXG4gICAgICAgIHN0eWxlPXt7IHRvcDogMjAgfX1cbiAgICAgICAgb25DYW5jZWw9e3RoaXMuZGlzbWlzc31cbiAgICAgID5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgICAgbWluLWhlaWdodDogODB2aDtcblxuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudC1pbWcge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlIFxuICAgICAgICB9XG4gIFxuICAgICAgICAuY29udGVudC1kZXNjIHtcbiAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICBcbiAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgPENhcm91c2VsIGF1dG9wbGF5PlxuICAgICAgICAgICAgICAgIHtzdG9yZS5pbWFnZXMubWFwKGltZyA9PiAoXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgPGgxPntzdG9yZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICB7c3RvcmUuZGVzYy5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgPHA+e3B9PC9wPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAge3N0b3JlLnVybCA/IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtzdG9yZS51cmx9PntgJHtzdG9yZS50aXRsZX0g7ZmI7Y6Y7J207KeA66GcIOydtOuPmWB9PC9hPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBDb21wb25lbnQ7XG4iXX0= */\n/*@ sourceURL=components/PopupComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-3117394478" + " " + "modal-content"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        xs: 24,
        lg: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_carousel___default.a, {
        autoplay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, store.images.map(function (img) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", {
          src: img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          className: "jsx-3117394478"
        });
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        xs: 24,
        lg: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3117394478"
      }, store.title), store.desc.map(function (p) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          className: "jsx-3117394478"
        }, p);
      }), store.url ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        href: store.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-3117394478"
      }, "".concat(store.title, " \uD648\uD398\uC774\uC9C0\uB85C \uC774\uB3D9")) : null))));
    }
  }]);

  return PopupComponent;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PopupComponent);

/***/ })

})
//# sourceMappingURL=4.74893e7636574628e455.hot-update.js.map