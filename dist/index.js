var e=p(require("query-string")),t=p(require("lru-cache")),r=p(require("axios")),n=require("react-dom"),o=p(n),u=n.render,a=require("react"),i=p(a),c=a.Component,l=a.useEffect,s=a.Suspense,f=a.useState;function p(e){return e&&e.__esModule?e.default:e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return"string"==typeof t&&t?e.push(t):Array.isArray(t)?e.push(y(t)):t&&"object"===d(t)&&Object.keys(t).forEach((function(r){t[r]&&e.push(r)})),e}),[]).join(" ")}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e){var t,r={container:document.getElementById("fx-notification-container")||((t=document.createElement("div")).id="fx-notification-container",t.classList.add("flax"),t.classList.add("fx-notification-container"),document.body.appendChild(t),t)}.container;return{container:r,alert:function(e){var t=e.delay,n=m(e,["delay"]),a=document.createElement("div");a.classList.add("fx-notification-wrapper"),r.appendChild(a),u(i.createElement(h,n),a),setTimeout((function(){a.classList.add("--hide"),setTimeout((function(){o.unmountComponentAtNode(a),a.remove()}),450)}),t||3e3)}}}function h(e){var t=e.type,r=e.title,n=e.message;return l((function(){return function(){}})),i.createElement(i.Fragment,null,i.createElement("div",{className:y("flax fx-notification","--".concat((t||"info").toLocaleLowerCase()))},t&&function(e){return e&&"INFO"!==e?i.createElement("div",{className:"--icon"},"SUCC"===e&&i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})),"WARN"===e&&i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})),"ERROR"===e&&i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))):null}(t),r&&i.createElement("strong",null,r),n))}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=new t({max:100,maxAge:6e5}),O=function(e,t,r,n,o){if(o){var u,a,i;if(null===(u=o.response)||void 0===u?void 0:u.data)if(r.errReducer)o.response.reduced=r.errReducer(null===(a=o.response)||void 0===a?void 0:a.data,o);else o.response.reduced=null===(i=o.response)||void 0===i?void 0:i.data;t(o)}else e({data:null==n?void 0:n.data,reduced:r.reducer?r.reducer(null==n?void 0:n.data):null==n?void 0:n.data,response:n})},j={},w=function(e,t,r,n,o,u){if(u&&e.props.cacheMaxAge&&g.set(u,{data:null==r?void 0:r.data},e.props.cacheMaxAge),t){j[t].splice(0,j[t].length).forEach((function(e){var t=e.resolve,u=e.reject,a=e.props,i=(a.delay||0)-((new Date).getTime()-o.getTime());setTimeout((function(){O(t,u,a,r,n)}),Math.max(i,0))}))}else{var a=(e.props.delay||0)-((new Date).getTime()-o.getTime());setTimeout((function(){O(e.resolve,e.reject,e.props,r,n)}),Math.max(a,0))}},E=function(e){return e?"object"!==v(e)?e:Object.keys(e).reduce((function(t,r){return"object"===v(e[r])?e[r].current instanceof HTMLElement?t[r]=e[r].current.value:t[r]=E(e[r]):t[r]=e[r],t}),{}):e};function S(t){return new Promise((function(n,o){setTimeout((function(){var u,a,i,c=(u=t.url,a=t.query||{},i=e.stringify(a),u+(i?(u.includes("?")?"&":"?")+i:"")),l="GET"===t.method&&t.cacheMaxAge&&t.cacheMaxAge>0?"".concat(t.method," ").concat(t.url," ").concat(t.cacheMaxAge):null,s=l&&g.get(l);if(s)w({resolve:n,reject:o,props:t},null,s,null,new Date,null);else{var f="GET"===t.method&&t.throttle?"".concat(t.method," ").concat(c," ").concat(t.delay||0):null;if(!(f&&(j[f]=j[f]||[],j[f].push({resolve:n,reject:o,props:t}),j[f].length>1))){var p=new Date;r.request({method:t.method,url:c,headers:t.headers,responseType:t.responseType,data:E("function"==typeof t.data?t.data():t.data)}).then((function(e){w({resolve:n,reject:o,props:t},f,e,null,p,l)})).catch((function(e){w({resolve:n,reject:o,props:t},f,null,e,p,null)}))}}}),25)}))}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=T(e);if(t){var o=T(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return D(this,r)}}function D(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}exports.setDefaultHeaders=function(e){r.defaults.headers.common=Object.assign(r.defaults.headers.common,e)};var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,c);var t,r,n,o=L(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this,e)).state={busy:!1},t}return t=u,(r=[{key:"noti",value:function(e,t){e&&("string"==typeof e&&(e={message:e}),e.message&&(e.type=e.type||t,(0,b().alert)(e)))}},{key:"handleClick",value:function(){var e=this;if(!this.state.busy){this.setState(P(P({},this.state),{},{busy:!0}));var t=this.props,r=t.success,n=t.error,o=t.done;S(P({},this.props.api)).then((function(t){e.noti(r&&r(t.reduced,t.response),"SUCC"),e.noti(o&&o(t.data,null,t.response),"INFO"),e.setState(P(P({},e.state),{},{busy:!1}))})).catch((function(t){var r,u,a,i,c="number"==typeof(null===(r=t.response)||void 0===r?void 0:r.status)&&(null===(u=t.response)||void 0===u?void 0:u.status)<500?"WARN":"ERROR";e.noti(n&&n(null===(a=t.response)||void 0===a?void 0:a.reduced,t),c),e.noti(o&&o(null===(i=t.response)||void 0===i?void 0:i.data,t,t.response),c),e.setState(P(P({},e.state),{},{busy:!1}))}))}}},{key:"render",value:function(){var e=this;return i.createElement("button",{className:"flax fx-button",onClick:function(){return e.handleClick()},disabled:this.state.busy},this.props.children||this.props.label)}}])&&I(t.prototype,r),n&&I(t,n),u}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=U(e);if(t){var o=U(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return W(this,r)}}function W(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){return function(){return{status:t?"ERROR":"SUCCESS",result:e,error:t}}}exports.FxButton=A;function J(e){var t=H(f(),2),r=t[0],n=t[1],o=e.api,u=e.refreshId,a=e.reloadId,c=e.error,s=e.naked,p=function(){return S(Object.assign({throttle:!1!==o.throttle,refreshId:u},e.api,{reducer:void 0,errReducer:void 0}))};if(l((function(){a>0&&p().then((function(t){n((function(){return $(t,null)})),e.releaseBusy(!0)})).catch((function(t){n((function(){return $(null,t)})),e.releaseBusy(!1)}))}),[a]),l((function(){n((function(){return function(e,t){var r,n,o="PENDING";return t.then((function(t){var u=$(t,null)();n=u.result,o=u.status,r=u.error,e(!0)})).catch((function(t){var u=$(null,t)();n=u.result,o=u.status,r=u.error,e(!1)})),function(){if("PENDING"===o)throw t;return{status:o,error:r,result:n}}}(e.releaseBusy,p())}))}),[o.method,o.url,u]),!r)return i.createElement(i.Fragment,null);var d=r();if("ERROR"===d.status){var y=function(){var t,r,n,o,u;return i.createElement(i.Fragment,null,c&&c((null===(r=d.error)||void 0===r||null===(n=r.response)||void 0===n?void 0:n.data)?e.api.errReducer?e.api.errReducer(null===(o=d.error)||void 0===o?void 0:o.response.data,d.error):null===(u=d.error)||void 0===u?void 0:u.response.data:null,d.error),!c&&i.createElement("div",null,"Error (",null===(t=d.error)||void 0===t?void 0:t.message,")"))};return i.createElement(i.Fragment,null,s&&y(),!s&&i.createElement("div",{className:"flax fx-guard-error"},y()))}var m,b,h;return i.createElement(i.Fragment,null,e.render((null===(m=d.result)||void 0===m?void 0:m.data)?e.api.reducer?e.api.reducer(null===(b=d.result)||void 0===b?void 0:b.data):null===(h=d.result)||void 0===h?void 0:h.data:null,e.refreshId>0))}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(u,c);var t,r,n,o=G(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this,e)).state={refreshId:0,reloadId:0,busy:!1},t}return t=u,(r=[{key:"reload",value:function(e){this.state.busy||(e?this.setState(F(F({},this.state),{},{reloadId:this.state.reloadId+1,busy:!0})):this.setState(F(F({},this.state),{},{refreshId:this.state.refreshId+1,busy:!0})))}},{key:"releaseBusy",value:function(e){this.props.done&&this.props.done(e),this.setState(F(F({},this.state),{},{busy:!1}))}},{key:"render",value:function(){var e=this,t=function(){var t=function(){return i.createElement(i.Fragment,null,e.props.disableLoading&&i.createElement(i.Fragment,null,e.props.render(null,e.state.refreshId>0)),e.props.loading&&e.props.loading(),!e.props.loading&&!e.props.disableLoading&&i.createElement("div",{className:"flax fx-guard-loader"},"Loading .."))};return i.createElement(i.Fragment,null,i.createElement(s,{fallback:i.createElement(i.Fragment,null,e.props.naked&&t(),!e.props.naked&&i.createElement("div",{className:"flax fx-guard-loading"},t()))},i.createElement(J,{releaseBusy:function(t){return e.releaseBusy(t)},refreshId:e.state.refreshId,reloadId:e.state.reloadId,api:e.props.api,render:e.props.render,error:e.props.error,naked:e.props.naked})))};return i.createElement(i.Fragment,null,this.props.naked&&t(),!this.props.naked&&i.createElement("div",{className:y("flax fx-guard",{"--loading":this.state.busy})},t()))}}])&&B(t.prototype,r),n&&B(t,n),u}();exports.FxGuard=K;
//# sourceMappingURL=index.js.map
