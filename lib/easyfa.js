!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=s(n(1)),l=u(n(4)),f=n(9);n(10);var p=function(e){function t(t){var n=e.call(this,t)||this;n.apng=null,n.apngList=[],n.canvas=null,n.canvasList=[],n.player=null,n.playerList=[],n.isPlay=!1,n.hasPerformance="undefined"!=typeof performance,n.speed=1e3/24,n.reset=function(e){var t=e.src,r=void 0===t?[]:t,o=e.rate,i=void 0===o?1:o,a=e.autoPlay,s=void 0!==a&&a,u=e.style,c=void 0===u?{}:u,l=e.className,f=void 0===l?"":l,p=e.canvasStyle,h=void 0===p?{}:p,d=e.canvasClassName,y=void 0===d?"":d,v="string"==typeof r?[r]:r;n.stop(),n.apngList=[],n.playerList=[],n.canvasList=[],n.player=null,n.isPlay=!1,n.setState({src:v,rate:i,autoPlay:s,style:c,className:f,canvasStyle:h,canvasClassName:y,loadDone:!1,showLayer:0},function(){n.getImgData()})},n.changeLayer=function(e){n.canvasList[e]&&(n.setState({showLayer:e}),n.player=n.playerList[e])},n.play=function(e){n.player&&(n.player.play(e),n.isPlay=!0)},n.one=function(){n.play(1)},n.pause=function(){n.player&&(n.player.pause(),n.isPlay=!1)},n.stop=function(){n.player&&(n.player.stop(),n.isPlay=!1)},n.end=function(){n.player&&n.player.end()},n.getImgData=function(){var e=n.props,t=e.onLoad,r=e.onLoopStart,o=e.onLoopEnd,s=e.onEnd,u=n.state,c=u.rate,p=u.src,h=u.autoPlay,d=u.showLayer,y=p.map(function(e,t){return i(n,void 0,void 0,function(){var n,i,u,p,d,y,v,m=this;return a(this,function(a){switch(a.label){case 0:return[4,f.getImgBuffer(e)];case 1:return n=a.sent(),i=this.apngList[t]=l.default(n),u=this.canvasList[t],i instanceof Error?(console.log("目前不支持其他类型图片"),[2]):i.error instanceof Error?(p=i.apngInfo,u.width=p.width,u.height=p.height,d=u.getContext("2d"),(y=document.createElement("img")).src=e,y.onload=function(){d.drawImage(y,0,0)},[2]):(u.width=i.width,u.height=i.height,[4,i.getPlayer(u.getContext("2d"))]);case 2:return v=a.sent(),this.playerList[t]=v,this.playerList[t].playbackRate=c,h&&this.playerList[t].play(),this.playerList[t].on("play",function(){m.isPlay=!0}),this.playerList[t].on("stop",function(){m.isPlay=!1}),this.playerList[t].on("loopStart",function(){r&&r()}),this.playerList[t].on("loopEnd",function(){o&&o()}),this.playerList[t].on("end",function(){s&&s()}),[2]}})})});Promise.all(y).then(function(){n.setState({loadDone:!0}),n.player=n.playerList[d],t&&t()})};var r=t.src,o=void 0===r?[]:r,s=t.rate,u=void 0===s?1:s,c=t.autoPlay,p=void 0!==c&&c,h=t.style,d=void 0===h?{}:h,y=t.className,v=void 0===y?"":y,m=t.canvasStyle,b=void 0===m?{}:m,g=t.canvasClassName,_=void 0===g?"":g,w="string"==typeof o?[o]:o;return n.state={src:w,rate:u,autoPlay:p,style:d,className:v,canvasStyle:b,canvasClassName:_,showLayer:0,loadDone:!1},n.speed=1e3/(24*u),n}return o(t,e),t.prototype.componentDidMount=function(){this.getImgData()},t.prototype.componentWillReceiveProps=function(e){var t=e.src,n=Array.isArray(t)?t.join(""):t;this.state.src.join("")!==n&&this.reset(e)},t.prototype.componentWillUnmount=function(){this.player&&(this.player.stop(),this.player._apng=null)},t.prototype.render=function(){var e=this,t=this.state,n=t.style,r=t.className,o=t.canvasStyle,i=t.canvasClassName,a=t.src,s=t.showLayer,u=t.loadDone;return c.createElement("div",{className:"easyfa-canvas-box "+r,style:n},a.map(function(t,n){return c.createElement("canvas",{key:n,ref:function(t){return e.canvasList[n]=t},style:o,className:i+" "+(n===s&&u?"easyfa-canvas-show":"")+" easyfa-canvas"})}))},t}(c.Component);t.default=p},function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(3),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,h=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,i,a,s){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],c=0;(e=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function w(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||g}function O(){}function L(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=w.prototype;var P=L.prototype=new O;P.constructor=L,r(P,w.prototype),P.isPureReactComponent=!0;var j={current:null},x={current:null},S=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r=void 0,o={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:x.current}}function U(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g,N=[];function k(e,t,n,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function F(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var u=!1;if(null===t)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case i:case a:u=!0}}if(u)return r(o,t,""===n?"."+I(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var l=n+I(s=t[c],c);u+=e(s,l,r,o)}else if(l=null===t||"object"!=typeof t?null:"function"==typeof(l=m&&t[m]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),c=0;!(s=t.next()).done;)u+=e(s=s.value,l=n+I(s,c++),r,o);else"object"===s&&b("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,function(e){return e}):null!=e&&(U(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(C,"$&/")+"/"),A(e,M,t=k(t,i,r,o)),F(t)}function $(){var e=j.current;return null===e&&b("321"),e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,T,t=k(null,null,t,n)),F(t)},count:function(e){return A(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return U(e)||b("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:L,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:h,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return $().useCallback(e,t)},useContext:function(e,t){return $().useContext(e,t)},useEffect:function(e,t){return $().useEffect(e,t)},useImperativeHandle:function(e,t,n){return $().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return $().useLayoutEffect(e,t)},useMemo:function(e,t){return $().useMemo(e,t)},useReducer:function(e,t,n){return $().useReducer(e,t,n)},useRef:function(e){return $().useRef(e)},useState:function(e){return $().useState(e)},Fragment:s,StrictMode:u,Suspense:d,createElement:R,cloneElement:function(e,t,n){null==e&&b("267",e);var o=void 0,a=r({},e.props),s=e.key,u=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,c=x.current),void 0!==t.key&&(s=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)S.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){l=Array(o);for(var f=0;f<o;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:i,type:e.type,key:s,ref:u,props:a,_owner:c}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:U,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:j,ReactCurrentOwner:x,assign:r}},B={default:q},G=B&&q||B;e.exports=G.default||G},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))o.call(n,c)&&(s[c]=n[c]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(s[a[l]]=n[a[l]])}}return s}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(5)),i=n(6),a=new Error("Not a PNG"),s={error:new Error("Not an animated PNG"),apngInfo:{width:0,height:0}};t.isNotPNG=function(e){return e===a},t.isNotAPNG=function(e){return e.error===s.error};var u=new Uint8Array([137,80,78,71,13,10,26,10]);function c(e,t){var n,r,o,i=new DataView(e.buffer),a=8;do{r=i.getUint32(a),o=t(n=l(e,a+4,4),e,a,r),a+=12+r}while(!1!==o&&"IEND"!=n&&a<e.length)}function l(e,t,n){var r=Array.prototype.slice.call(e.subarray(t,t+n));return String.fromCharCode.apply(String,r)}function f(e,t,n){var r=new Uint8Array(n);return r.set(e.subarray(t,t+n)),r}t.default=function(e){var t=new Uint8Array(e);if(Array.prototype.some.call(u,function(e,n){return e!==t[n]}))return a;var n=new i.APNG,r=!1;if(c(t,function(e,t,o){switch(e){case"acTL":r=!0;break;case"IHDR":var i=new DataView(t.buffer);n.width=i.getUint32(o+8),n.height=i.getUint32(o+12)}}),!r)return s.apngInfo=n,s;var o=[],l=[],d=null,y=null,v=0;if(c(t,function(e,t,r,a){var s=new DataView(t.buffer);switch(e){case"IHDR":d=t.subarray(r+8,r+8+a),n.width=s.getUint32(r+8),n.height=s.getUint32(r+12);break;case"acTL":n.numPlays=s.getUint32(r+8+4);break;case"fcTL":y&&(n.frames.push(y),v++),(y=new i.Frame).width=s.getUint32(r+8+4),y.height=s.getUint32(r+8+8),y.left=s.getUint32(r+8+12),y.top=s.getUint32(r+8+16);var u=s.getUint16(r+8+20),c=s.getUint16(r+8+22);0===c&&(c=100),y.delay=1e3*u/c,y.delay<=10&&(y.delay=100),n.playTime+=y.delay,y.disposeOp=s.getUint8(r+8+24),y.blendOp=s.getUint8(r+8+25),y.dataParts=[],0===v&&2===y.disposeOp&&(y.disposeOp=1);break;case"fdAT":y&&y.dataParts.push(t.subarray(r+8+4,r+8+a));break;case"IDAT":y&&y.dataParts.push(t.subarray(r+8,r+8+a));break;case"IEND":l.push(f(t,r,12+a));break;default:o.push(f(t,r,12+a))}}),y&&n.frames.push(y),0==n.frames.length)return s.apngInfo=n,s;var m=new Blob(o),b=new Blob(l);return n.frames.forEach(function(e){var t=[];t.push(u),d.set(h(e.width),0),d.set(h(e.height),4),t.push(p("IHDR",d)),t.push(m),e.dataParts.forEach(function(e){return t.push(p("IDAT",e))}),t.push(b),e.imageData=new Blob(t,{type:"image/png"}),delete e.dataParts,t=null}),n};var p=function(e,t){var n=e.length+t.length,r=new Uint8Array(n+8),i=new DataView(r.buffer);i.setUint32(0,t.length),r.set(function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(e),4),r.set(t,8);var a=o.default(r,4,n);return i.setUint32(n+4,a),r},h=function(e){return new Uint8Array([e>>>24&255,e>>>16&255,e>>>8&255,255&e])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var r=new Uint32Array(256),o=0;o<256;o++){for(var i=o,a=0;a<8;a++)i=0!=(1&i)?3988292384^i>>>1:i>>>1;r[o]=i}t.default=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=e.length-t);for(var o=-1,i=t,a=t+n;i<a;i++)o=o>>>8^r[255&(o^e[i])];return-1^o}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(7)),i=function(){function e(){this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return e.prototype.createImages=function(){return Promise.all(this.frames.map(function(e){return e.createImage()}))},e.prototype.getPlayer=function(e,t){var n=this;return void 0===t&&(t=!1),this.createImages().then(function(){return new o.default(n,e,t)})},e}();t.APNG=i;var a=function(){function e(){this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return e.prototype.createImage=function(){var e=this;return this.imageElement?Promise.resolve():new Promise(function(t,n){var r=URL.createObjectURL(e.imageData);e.imageElement=document.createElement("img"),e.imageElement.onload=function(){URL.revokeObjectURL(r),t()},e.imageElement.onerror=function(){URL.revokeObjectURL(r),e.imageElement=null,n(new Error("Image creation error"))},e.imageElement.src=r})},e}();t.Frame=a},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t,n,r){var o=e.call(this)||this;return o.playbackRate=1,o._delayStop=!1,o._currentFrameNumber=0,o._ended=!1,o._paused=!0,o._numPlays=0,o._requestTimer=0,o._playRound=-1,o._apng=t,o.context=n,o.stop(),o.hasPerformance="undefined"!=typeof performance,r&&o.play(),o}return o(t,e),Object.defineProperty(t.prototype,"currentFrameNumber",{get:function(){return this._currentFrameNumber},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentFrame",{get:function(){return this._apng.frames[this._currentFrameNumber]},enumerable:!0,configurable:!0}),t.prototype.renderNextFrame=function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,!this._paused&&0===this._currentFrameNumber&&this.emit("loopStart"),this._currentFrameNumber===this._apng.frames.length-1&&(this.emit("loopEnd"),this._numPlays++),this._prevFrame&&1==this._prevFrame.disposeOp?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&2==this._prevFrame.disposeOp&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var e=this.currentFrame;this._prevFrame=e,this._prevFrameData=null,2==e.disposeOp&&(this._prevFrameData=this.context.getImageData(e.left,e.top,e.width,e.height)),0==e.blendOp&&this.context.clearRect(e.left,e.top,e.width,e.height),this.context.drawImage(e.imageElement,e.left,e.top)},Object.defineProperty(t.prototype,"paused",{get:function(){return this._paused},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ended",{get:function(){return this._ended},enumerable:!0,configurable:!0}),t.prototype.play=function(e){e<1||this.playFrame(e)},t.prototype.one=function(){this.playFrame(1)},t.prototype.playFrame=function(e){var t=this;if(void 0===e&&(e=1/0),this._paused){(e!==this._playRound||this._ended)&&this.stop(),0===this._numPlays&&0===this._currentFrameNumber&&this.emit("loopStart"),this.emit("play"),this._playRound=e,this._delayStop=!1,this._paused=!1;var n=(this.hasPerformance?window.performance:Date).now()+this.currentFrame.delay/this.playbackRate,r=this._apng.frames.length||0,o=function(e){var i=t.hasPerformance?e:Date.now();if(!t._ended&&!t._paused){if(i>=n)do{if((t._numPlays>=t._playRound||t._delayStop)&&(t._ended||t._currentFrameNumber===r-1))return t.emit("end"),void t.stop(!0);t.renderNextFrame(),n+=t.currentFrame.delay/t.playbackRate}while(!t._ended&&i>n);t._requestTimer=requestAnimationFrame(o)}};this._requestTimer=requestAnimationFrame(o)}},t.prototype.pause=function(){this._paused||(this.emit("pause"),this._paused=!0)},t.prototype.stop=function(e){void 0===e&&(e=!1),this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,cancelAnimationFrame(this._requestTimer),e||(this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame())},t.prototype.end=function(){this._delayStop=!0},t}(n(8).EventEmitter);t.default=i},function(e,t,n){"use strict";var r,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var a=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var u=10;function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var o,i,a,s;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),a=i[t]),void 0===a)a=i[t]=n,++e._eventsCount;else if("function"==typeof a?a=i[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(o=c(e))>0&&a.length>o&&!a.warned){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=a.length,s=u,console&&console.warn&&console.warn(s)}return e}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,e))}.bind(r);return o.listener=n,r.wrapFn=o,o}function p(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):d(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function d(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var u=o[e];if(void 0===u)return!1;if("function"==typeof u)i(u,this,t);else{var c=u.length,l=d(u,c);for(n=0;n<c;++n)i(l[n],this,t)}return!0},s.prototype.addListener=function(e,t){return l(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return l(this,e,t,!0)},s.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,f(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,f(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,o,i,a;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){a=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},s.prototype.listeners=function(e){return p(this,e,!0)},s.prototype.rawListeners=function(e){return p(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImgBuffer=function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="arraybuffer",r.onload=function(){4!==r.readyState||200!==r.status&&304!==r.status?n(new Error("图片获取失败")):t(this.response)},r.send()})}},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(13)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".easyfa-canvas-box {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n.easyfa-canvas  {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    visibility: hidden;\r\n}\r\n.easyfa-canvas-show {\r\n    position: relative;\r\n    visibility: initial;\r\n}\r\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),u=null,c=0,l=[],f=n(14);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),d(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=u||(u=v(t)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){y(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(h(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var g,_=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});