import{v as e,N as t,j as r}from"./index.20cbabfe.js";var n=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var p={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:u,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):s(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function d(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var l=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(p.isURLSearchParams(t))n=t.toString();else{var o=[];p.forEach(t,(function(e,t){null!=e&&(p.isArray(e)?t+="[]":e=[e],p.forEach(e,(function(e){p.isDate(e)?e=e.toISOString():p.isObject(e)&&(e=JSON.stringify(e)),o.push(d(t)+"="+d(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function h(){this.handlers=[]}h.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},h.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},h.prototype.forEach=function(e){p.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var m=h,y=function(e,t,r){return p.forEach(r,(function(r){e=r(e,t)})),e},g=function(e){return!(!e||!e.__CANCEL__)},v=function(e,t){p.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},w=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},b=p.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),p.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),p.isString(n)&&a.push("path="+n),p.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},E=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],x=p.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=p.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},C=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;p.isFormData(n)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+i)}var u,c,f=(u=e.baseURL,c=e.url,u&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(u,c):c);if(s.open(e.method.toUpperCase(),l(f,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var n,o,a,i,u,c="getAllResponseHeaders"in s?(n=s.getAllResponseHeaders(),u={},n?(p.forEach(n.split("\n"),(function(e){if(i=e.indexOf(":"),o=p.trim(e.substr(0,i)).toLowerCase(),a=p.trim(e.substr(i+1)),o){if(u[o]&&E.indexOf(o)>=0)return;u[o]="set-cookie"===o?(u[o]?u[o]:[]).concat([a]):u[o]?u[o]+", "+a:a}})),u):u):null,f={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:c,config:e,request:s};!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(w("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,f),s=null}},s.onabort=function(){s&&(r(w("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(w("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(w(t,e,"ECONNABORTED",s)),s=null},p.isStandardBrowserEnv()){var d=(e.withCredentials||x(f))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;d&&(o[e.xsrfHeaderName]=d)}if("setRequestHeader"in s&&p.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)})),p.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(h){if("json"!==e.responseType)throw h}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),r(e),s=null)})),n||(n=null),s.send(n)}))},j={"Content-Type":"application/x-www-form-urlencoded"};function S(e,t){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var R,A={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(R=C),R),transformRequest:[function(e,t){return v(t,"Accept"),v(t,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)?e:p.isArrayBufferView(e)?e.buffer:p.isURLSearchParams(e)?(S(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):p.isObject(e)?(S(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};A.headers={common:{Accept:"application/json, text/plain, */*"}},p.forEach(["delete","get","head"],(function(e){A.headers[e]={}})),p.forEach(["post","put","patch"],(function(e){A.headers[e]=p.merge(j)}));var O=A;function N(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var B=function(e){return N(e),e.headers=e.headers||{},e.data=y(e.data,e.headers,e.transformRequest),e.headers=p.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),p.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||O.adapter)(e).then((function(t){return N(e),t.data=y(t.data,t.headers,e.transformResponse),t}),(function(t){return g(t)||(N(e),t&&t.response&&(t.response.data=y(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},T=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function i(e,t){return p.isPlainObject(e)&&p.isPlainObject(t)?p.merge(e,t):p.isPlainObject(t)?p.merge({},t):p.isArray(t)?t.slice():t}function u(n){p.isUndefined(t[n])?p.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}p.forEach(n,(function(e){p.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),p.forEach(o,u),p.forEach(s,(function(n){p.isUndefined(t[n])?p.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),p.forEach(a,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var c=n.concat(o).concat(s).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return p.forEach(f,u),r};function U(e){this.defaults=e,this.interceptors={request:new m,response:new m}}U.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=T(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[B,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},U.prototype.getUri=function(e){return e=T(this.defaults,e),l(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},p.forEach(["delete","get","head","options"],(function(e){U.prototype[e]=function(t,r){return this.request(T(r||{},{method:e,url:t,data:(r||{}).data}))}})),p.forEach(["post","put","patch"],(function(e){U.prototype[e]=function(t,r,n){return this.request(T(n||{},{method:e,url:t,data:r}))}}));var P=U;function L(e){this.message=e}L.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},L.prototype.__CANCEL__=!0;var q=L;function k(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new q(e),t(r.reason))}))}k.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},k.source=function(){var e;return{token:new k((function(t){e=t})),cancel:e}};var D=k;function F(e){var t=new P(e),r=n(P.prototype.request,t);return p.extend(r,P.prototype,t),p.extend(r,t),r}var z=F(O);z.Axios=P,z.create=function(e){return F(T(z.defaults,e))},z.Cancel=q,z.CancelToken=D,z.isCancel=g,z.all=function(e){return Promise.all(e)},z.spread=function(e){return function(t){return e.apply(null,t)}},z.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var H=z,_=z;H.default=_;const I=t=>{e({showClose:!0,message:t,type:"success"})},M=()=>new Promise((function(e,r){t.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",confirmButtonClass:"focus-button"}).then((()=>{e()})).catch((()=>{}))})),X=H.create({baseURL:"/api",timeout:2e4});X.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",X.interceptors.request.use((e=>(r()&&(e.headers.Authorization="Bearer "+r()),e)),(e=>{Promise.reject(e)})),X.interceptors.response.use((t=>{const r=t.data;var n;return r.success||(n=r.desc,e({showClose:!0,message:n,type:"error"})),Promise.resolve(t.data)}));export{M as D,I as S,X as h};
