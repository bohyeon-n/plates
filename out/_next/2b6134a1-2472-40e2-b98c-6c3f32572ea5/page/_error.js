module.exports=__NEXT_REGISTER_PAGE("/_error",function(){return{page:webpackJsonp([3],{245:function(e,t,n){e.exports=n(246)},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return m});var r=n(90),o=n.n(r),u=n(0),a=n.n(u),c=n(92),l=n.n(c),i=n(93),s=n.n(i);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=new Array(o),a=0;a<o;a++)u[a]=arguments[a];return y(r,(n=r=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),Object.defineProperty(b(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{count:5}}),n))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),n=t,u=[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:null}}}],(r=[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){l.a.push("/")},5e3),this.interval=setInterval(function(){e.setState({count:--e.state.count})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",null,this.props.statusCode?"An error ".concat(this.props.statusCode," occurred on server!"):"An error occurred on client"),a.a.createElement("p",null,"5초 뒤에 메인 페이지로 이동합니다. ",this.state.count),a.a.createElement(s.a,{href:"/"},a.a.createElement("a",null,a.a.createElement(o.a,null,"STORE 페이지로 이동"))))}}])&&p(n.prototype,r),u&&p(n,u),t}()}},[245]).default}});