webpackHotUpdate(1,{

/***/ "./node_modules/@ant-design/icons-react/es/components/Icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__("./node_modules/@ant-design/icons-react/es/utils.js");









var twoToneColorPalette = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6'
};

var Icon = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Icon, _React$Component);

    function Icon() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Icon);

        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Icon, [{
        key: 'render',
        value: function render() {
            var _extends2;

            var _props = this.props,
                type = _props.type,
                className = _props.className,
                onClick = _props.onClick,
                style = _props.style,
                primaryColor = _props.primaryColor,
                secondaryColor = _props.secondaryColor,
                rest = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['type', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor']);

            var target = void 0;
            var colors = twoToneColorPalette;
            if (primaryColor) {
                colors = {
                    primaryColor: primaryColor,
                    secondaryColor: secondaryColor || Object(__WEBPACK_IMPORTED_MODULE_8__utils__["c" /* getSecondaryColor */])(primaryColor)
                };
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_8__utils__["d" /* isIconDefinition */])(type)) {
                target = type;
            } else if (typeof type === 'string') {
                target = Icon.get(type, colors);
                if (!target) {
                    // log(`Could not find icon: ${type}`);
                    return null;
                }
            }
            if (!target) {
                Object(__WEBPACK_IMPORTED_MODULE_8__utils__["e" /* log */])('type should be string or icon definiton, but got ' + type);
                return null;
            }
            if (target && typeof target.icon === 'function') {
                target = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, target, {
                    icon: target.icon(colors.primaryColor, colors.secondaryColor)
                });
            }
            return Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* generate */])(target.icon, 'svg-' + target.name, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()((_extends2 = {
                className: className,
                onClick: onClick,
                style: style
            }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, 'data-icon', target.name), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, 'width', '1em'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, 'height', '1em'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, 'fill', 'currentColor'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, 'aria-hidden', 'true'), _extends2), rest));
        }
    }], [{
        key: 'add',
        value: function add() {
            var _this2 = this;

            for (var _len = arguments.length, icons = Array(_len), _key = 0; _key < _len; _key++) {
                icons[_key] = arguments[_key];
            }

            icons.forEach(function (icon) {
                _this2.definitions.set(Object(__WEBPACK_IMPORTED_MODULE_8__utils__["f" /* withSuffix */])(icon.name, icon.theme), icon);
            });
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.definitions.clear();
        }
    }, {
        key: 'get',
        value: function get(key) {
            var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : twoToneColorPalette;

            if (key) {
                var target = this.definitions.get(key);
                if (target && typeof target.icon === 'function') {
                    target = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, target, {
                        icon: target.icon(colors.primaryColor, colors.secondaryColor)
                    });
                }
                return target;
            }
        }
    }, {
        key: 'setTwoToneColors',
        value: function setTwoToneColors(_ref) {
            var primaryColor = _ref.primaryColor,
                secondaryColor = _ref.secondaryColor;

            twoToneColorPalette.primaryColor = primaryColor;
            twoToneColorPalette.secondaryColor = secondaryColor || Object(__WEBPACK_IMPORTED_MODULE_8__utils__["c" /* getSecondaryColor */])(primaryColor);
        }
    }, {
        key: 'getTwoToneColors',
        value: function getTwoToneColors() {
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, twoToneColorPalette);
        }
    }]);

    return Icon;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Icon.displayName = 'IconReact';
Icon.definitions = new __WEBPACK_IMPORTED_MODULE_8__utils__["a" /* MiniMap */]();
/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ })

})
//# sourceMappingURL=1.7470bdc3dafd039247a8.hot-update.js.map