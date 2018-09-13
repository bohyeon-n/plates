webpackHotUpdate(4,{

/***/ "./components/PopupComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__("./node_modules/antd/lib/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_carousel__ = __webpack_require__("./node_modules/antd/lib/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);


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
        __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push("/");
      }
    }), _temp));
  }

  _createClass(PopupComponent, [{
    key: "render",
    value: function render() {
      var store = this.props.store;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
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
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default.a, {
        styleId: "636041642",
        css: ".modal-content.jsx-636041642{height:80vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:90vw;}h1.jsx-636041642{padding-bottom:2rem;}.content-img.jsx-636041642{width:45%;height:100%;}img.jsx-636041642{width:100%  height:100%;}.content-desc.jsx-636041642{width:45%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9wdXBDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JhLEFBR3VCLEFBTVEsQUFHVixBQU1iLEFBR2EsVUFSRSxBQVNBLEVBbEJDLFFBTWYsRUFJQSxBQVNBLEVBTEEsOERBYitCLDJIQUNsQixXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9wdXBDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tvb2JvaHllb24vRG9jdW1lbnRzL2hlbGxvLW5leHQyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgQ2Fyb3VzZWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmNsYXNzIFBvcHVwQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZGlzbWlzcyA9ICgpID0+IHtcbiAgICBSb3V0ZXIucHVzaChgL2ApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxuICAgICAgICAgIHRpdGxlPVwiQVdFU09NRSBGT09EIFNUT1JFXCJcbiAgICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgICAgd2lkdGg9XCI5MHZ3XCJcbiAgICAgICAgICBzdHlsZT17eyB0b3A6IDIwIH19XG4gICAgICAgICAgb25DYW5jZWw9e3RoaXMuZGlzbWlzc31cbiAgICAgICAgPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50LWltZyB7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSBcbiAgICAgICAgICBoZWlnaHQ6IDEwMCUgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5jb250ZW50LWRlc2Mge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gIFxuICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWltZ1wiPlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXk+XG4gICAgICAgICAgICAgICAge3N0b3JlLmltYWdlcy5tYXAoaW1nID0+IChcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1kZXNjXCI+XG4gICAgICAgICAgICAgIDxoMT57c3RvcmUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAge3N0b3JlLmRlc2MubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgIDxwPntwfTwvcD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtzdG9yZS51cmwgPyAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17c3RvcmUudXJsfT57YCR7c3RvcmUudGl0bGV9IO2ZiO2OmOydtOyngOuhnCDsnbTrj5lgfTwvYT5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBDb21wb25lbnQ7XG4iXX0= */\n/*@ sourceURL=components/PopupComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-636041642" + " " + "modal-content"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-636041642" + " " + "content-img"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_carousel___default.a, {
        autoplay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, store.images.map(function (img) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
          src: img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          className: "jsx-636041642"
        });
      }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-636041642" + " " + "content-desc"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-636041642"
      }, store.title), store.desc.map(function (p) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          className: "jsx-636041642"
        }, p);
      }), store.url ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: store.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-636041642"
      }, "".concat(store.title, " \uD648\uD398\uC774\uC9C0\uB85C \uC774\uB3D9")) : null))));
    }
  }]);

  return PopupComponent;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PopupComponent);

/***/ })

})
//# sourceMappingURL=4.2a09ec328fcaeb5c46cc.hot-update.js.map