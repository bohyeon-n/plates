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
        css: ".modal-content.jsx-636041642{height:80vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:90vw;}h1.jsx-636041642{padding-bottom:2rem;}.content-img.jsx-636041642{width:45%;height:100%;}img.jsx-636041642{width:100%  height:100%;}.content-desc.jsx-636041642{width:45%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9wdXBDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JhLEFBR3VCLEFBTVEsQUFHVixBQU1iLEFBR2EsVUFSRSxBQVNBLEVBbEJDLFFBTWYsRUFJQSxBQVNBLEVBTEEsOERBYitCLDJIQUNsQixXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9wdXBDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tvb2JvaHllb24vRG9jdW1lbnRzL2hlbGxvLW5leHQyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgQ2Fyb3VzZWwsIENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5jbGFzcyBQb3B1cENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGRpc21pc3MgPSAoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC9gKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdmlzaWJsZT17dHJ1ZX1cbiAgICAgICAgICB0aXRsZT1cIkFXRVNPTUUgRk9PRCBTVE9SRVwiXG4gICAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICAgIHdpZHRoPVwiOTB2d1wiXG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiAyMCB9fVxuICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmRpc21pc3N9XG4gICAgICAgID5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudC1pbWcge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlIFxuICAgICAgICB9XG4gIFxuICAgICAgICAuY29udGVudC1kZXNjIHtcbiAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICBcbiAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pbWdcIj5cbiAgICAgICAgICAgICAgPENhcm91c2VsIGF1dG9wbGF5PlxuICAgICAgICAgICAgICAgIHtzdG9yZS5pbWFnZXMubWFwKGltZyA9PiAoXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZGVzY1wiPlxuICAgICAgICAgICAgICA8aDE+e3N0b3JlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIHtzdG9yZS5kZXNjLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICA8cD57cH08L3A+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7c3RvcmUudXJsID8gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3N0b3JlLnVybH0+e2Ake3N0b3JlLnRpdGxlfSDtmYjtjpjsnbTsp4DroZwg7J2064+ZYH08L2E+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwQ29tcG9uZW50O1xuIl19 */\n/*@ sourceURL=components/PopupComponent.js */"
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
//# sourceMappingURL=4.b805f0cde21db6afbc20.hot-update.js.map