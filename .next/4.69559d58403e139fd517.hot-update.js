webpackHotUpdate(4,{

/***/ "./components/ItemComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_col__ = __webpack_require__("./node_modules/antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card__ = __webpack_require__("./node_modules/antd/lib/card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
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
      return;
      {
        this.state.show ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__PopupComponent__["default"], {
          store: store,
          dismiss: this.dismiss,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }) : null;
      }
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_col___default.a, {
        xs: 24,
        md: 12,
        lg: 8,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default.a, {
        styleId: "2442094124",
        css: ".item.jsx-2442094124{padding-left:1rem;padding-top:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSXRlbUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlMsQUFHK0Isa0JBQ0QsaUJBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvSXRlbUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva29vYm9oeWVvbi9Eb2N1bWVudHMvaGVsbG8tbmV4dDIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2wsIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFBvcHVwQ29tcG9uZW50IGZyb20gXCIuL1BvcHVwQ29tcG9uZW50XCI7XG5cbmNsYXNzIEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzaG93OiBmYWxzZVxuICB9O1xuICBzaG93TW9kYWwgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcbiAgfTtcbiAgZGlzbWlzcyA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUsIHVybCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybjtcblxuICAgIHtcbiAgICAgIHRoaXMuc3RhdGUuc2hvdyA/IChcbiAgICAgICAgPFBvcHVwQ29tcG9uZW50IHN0b3JlPXtzdG9yZX0gZGlzbWlzcz17dGhpcy5kaXNtaXNzfSAvPlxuICAgICAgKSA6IG51bGw7XG4gICAgfVxuICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9IGxnPXs4fSB4bD17Nn0+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbH0+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaG92ZXJhYmxlXG4gICAgICAgICAgY292ZXI9ezxpbWcgYWx0PXtgJHtzdG9yZS50aXRsZX3snbTrr7jsp4BgfSBzcmM9e3N0b3JlLmltYWdlc1swXX0gLz59XG4gICAgICAgID5cbiAgICAgICAgICA8TWV0YSB0aXRsZT17c3RvcmUudGl0bGV9IC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29sPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtQ29tcG9uZW50O1xuIl19 */\n/*@ sourceURL=components/ItemComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        onClick: this.showModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-2442094124" + " " + "item"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default.a, {
        hoverable: true,
        cover: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
          alt: "".concat(store.title, "\uC774\uBBF8\uC9C0"),
          src: store.images[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          className: "jsx-2442094124"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Meta, {
        title: store.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }))));
    }
  }]);

  return ItemComponent;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ItemComponent);

/***/ })

})
//# sourceMappingURL=4.69559d58403e139fd517.hot-update.js.map