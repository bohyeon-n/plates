module.exports=__NEXT_REGISTER_PAGE("/store",function(){return{page:webpackJsonp([2],{384:function(e,t,n){e.exports=n(385)},385:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(36),o=n.n(r),u=n(0),a=n.n(u),i=n(64),c=n(150),f=n(94),s=n.n(f);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,u,f,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),n=t,r=[{key:"render",value:function(){var e=this.props.store;return a.a.createElement(c.a,null,a.a.createElement(i.default,{store:e}))}}],u=[{key:"getInitialProps",value:(f=o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,n=t.query,e.next=3,s.a.get("http://localhost:9000/stores/".concat(n.id));case 3:return r=e.sent,e.abrupt("return",{store:r.data});case 5:case"end":return e.stop()}},e,this)}),l=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=f.apply(e,t);function u(e,t){try{var u=o[e](t),c=u.value}catch(e){return void r(e)}u.done?n(c):Promise.resolve(c).then(a,i)}function a(e){u("next",e)}function i(e){u("throw",e)}a()})},function(e){return l.apply(this,arguments)})}],r&&p(n.prototype,r),u&&p(n,u),t}();t.default=b}},[384]).default}});