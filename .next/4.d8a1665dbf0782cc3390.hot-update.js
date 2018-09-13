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

/***/ })

})
//# sourceMappingURL=4.d8a1665dbf0782cc3390.hot-update.js.map