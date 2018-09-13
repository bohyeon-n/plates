webpackHotUpdate(4,{

/***/ "./components/LayoutComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__ = __webpack_require__("./node_modules/antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HeaderComponent__ = __webpack_require__("./components/HeaderComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FooterComponent__ = __webpack_require__("./components/FooterComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("./node_modules/next/head.js");
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

/***/ })

})
//# sourceMappingURL=4.ee0e5cc89a596bdff93d.hot-update.js.map