(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d75749a"],{"27ae":function(t,e,n){(function(n){var r,o;(function(e,n){t.exports=n(e)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n?n:this,(function(n){"use strict";n=n||{};var a,c=n.Base64,i="2.6.4",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t.charAt(n)]=n;return e}(u),f=String.fromCharCode,d=function(t){if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?f(192|e>>>6)+f(128|63&e):f(224|e>>>12&15)+f(128|e>>>6&63)+f(128|63&e)}e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return f(240|e>>>18&7)+f(128|e>>>12&63)+f(128|e>>>6&63)+f(128|63&e)},l=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,h=function(t){return t.replace(l,d)},p=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),r=[u.charAt(n>>>18),u.charAt(n>>>12&63),e>=2?"=":u.charAt(n>>>6&63),e>=1?"=":u.charAt(63&n)];return r.join("")},g=n.btoa&&"function"==typeof n.btoa?function(t){return n.btoa(t)}:function(t){if(t.match(/[^\x00-\xFF]/))throw new RangeError("The string contains invalid characters.");return t.replace(/[\s\S]{1,3}/g,p)},v=function(t){return g(h(String(t)))},A=function(t){return t.replace(/[+\/]/g,(function(t){return"+"==t?"-":"_"})).replace(/=/g,"")},m=function(t,e){return e?A(v(t)):v(t)},w=function(t){return m(t,!0)};n.Uint8Array&&(a=function(t,e){for(var n="",r=0,o=t.length;r<o;r+=3){var a=t[r],c=t[r+1],i=t[r+2],s=a<<16|c<<8|i;n+=u.charAt(s>>>18)+u.charAt(s>>>12&63)+("undefined"!=typeof c?u.charAt(s>>>6&63):"=")+("undefined"!=typeof i?u.charAt(63&s):"=")}return e?A(n):n});var y,b=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,x=function(t){switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),n=e-65536;return f(55296+(n>>>10))+f(56320+(1023&n));case 3:return f((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return f((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},B=function(t){return t.replace(b,x)},C=function(t){var e=t.length,n=e%4,r=(e>0?s[t.charAt(0)]<<18:0)|(e>1?s[t.charAt(1)]<<12:0)|(e>2?s[t.charAt(2)]<<6:0)|(e>3?s[t.charAt(3)]:0),o=[f(r>>>16),f(r>>>8&255),f(255&r)];return o.length-=[0,0,2,1][n],o.join("")},F=n.atob&&"function"==typeof n.atob?function(t){return n.atob(t)}:function(t){return t.replace(/\S{1,4}/g,C)},_=function(t){return F(String(t).replace(/[^A-Za-z0-9\+\/]/g,""))},j=function(t){return B(F(t))},S=function(t){return String(t).replace(/[-_]/g,(function(t){return"-"==t?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,"")},k=function(t){return j(S(t))};n.Uint8Array&&(y=function(t){return Uint8Array.from(_(S(t)),(function(t){return t.charCodeAt(0)}))});var M=function(){var t=n.Base64;return n.Base64=c,t};if(n.Base64={VERSION:i,atob:_,btoa:g,fromBase64:k,toBase64:m,utob:h,encode:m,encodeURI:w,btou:B,decode:k,noConflict:M,fromUint8Array:a,toUint8Array:y},"function"===typeof Object.defineProperty){var O=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};n.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",O((function(){return k(this)}))),Object.defineProperty(String.prototype,"toBase64",O((function(t){return m(this,t)}))),Object.defineProperty(String.prototype,"toBase64URI",O((function(){return m(this,!0)})))}}return n["Meteor"]&&(Base64=n.Base64),t.exports?t.exports.Base64=n.Base64:(r=[],o=function(){return n.Base64}.apply(e,r),void 0===o||(t.exports=o)),{Base64:n.Base64}}))}).call(this,n("c8ba"))},9503:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"",""])},a05c:function(t,e,n){"use strict";n.r(e);n("433b");var r=n("d399"),o=(n("7514"),n("bc3a")),a=n.n(o),c=n("27ae"),i=n("ca00"),u=function(){var t="",e="";return window.api&&(t=window.api.loadSecureValue({sync:!0,key:"tencentPush_AppId"}),e=window.api.loadSecureValue({sync:!0,key:"tencentPush_SecretKey"})),c["Base64"].encode(t+":"+e)},s=a.a.create({baseURL:"https://openapi.xg.qq.com/v3"});s.interceptors.request.use((function(t){var e=u();return e&&(t.headers["Authorization"]="Basic ".concat(e)),t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){if(console.log("XQ_Response",t),200===t.status&&Object(i["g"])(t.data.err_msg))return t.data;var e=t.data.err_msg;throw new Error(e)}),(function(t){return console.error("请求错误",t),Promise.reject(t)}));var f=function(t){var e=t.message,n=t.platform,r=void 0===n?"all":n,o=t.messageType,a=void 0===o?"notify":o,c=t.audienceType,i=void 0===c?"all":c,u=t.accountList,f=void 0===u?[]:u,d="/push/app",l={message:e,audience_type:i,account_list:f,platform:r,message_type:a},p={"Content-Type":"application/json"};return s.post(d,l,{headers:p}).then((function(t){return t})).catch((function(t){h(t)}))},d=[{msg:"timeout of 10000ms exceeded",showMsg:"连接超时，请稍后再试！"},{msg:"Request failed with status code 404",showMsg:"请求服务接口失败或者未找到相关服务接口，请联系管理员！"},{msg:"Network Error",showMsg:"网络请求错误，请稍后再试"},{msg:"Request failed with status code 400",showMsg:"请求服务接口失败，请联系管理员"},{msg:"Request failed with status code 500",showMsg:"服务端内部错误，请联系管理员"}],l=function(t){var e,n=d.find((function(e){return e.msg===t}));return e=n?n.showMsg:t,e},h=function(t){console.error("错误：",t);var e=l(t.message);throw e?r["a"].fail(e):r["a"].fail(t.message),new Error(t)},p={name:"TencentPushDemo",data:function(){return{title:"",content:""}},methods:{sendMsg:function(){var t=this;if(Object(i["g"])(this.title)||Object(i["g"])(this.content))this.$toast.fail("消息头和内容必填");else{var e={title:this.title,content:this.content};f({message:e,platform:"android",audienceType:"account",accountList:["wj_zxx"]}).then((function(){t.$toast("发送成功")})).catch((function(){}))}}}},g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("van-field",{attrs:{label:"消息头:",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("van-field",{attrs:{label:"消息内容:",required:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("van-button",{on:{click:t.sendMsg}},[t._v("发送消息")])],1)},v=[],A=n("2455");function m(t){n("fcc7")}var w=!1,y=m,b="data-v-195b5c0a",x=null,B=Object(A["a"])(p,g,v,w,y,b,x);e["default"]=B.exports},fcc7:function(t,e,n){var r=n("9503");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("59222e89",r,!0,{})}}]);