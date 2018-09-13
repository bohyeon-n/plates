webpackHotUpdate(4,{

/***/ "./components/ListComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("./node_modules/antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=4.2fbd298ae2c29ae45561.hot-update.js.map