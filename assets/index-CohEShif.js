function hS(a,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in a)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(a,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function t0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Dh={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx;function g1(){if(rx)return bl;rx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return bl.Fragment=e,bl.jsx=n,bl.jsxs=n,bl}var sx;function v1(){return sx||(sx=1,Dh.exports=g1()),Dh.exports}var ge=v1(),Nh={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function _1(){if(ox)return _t;ox=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function x(F,K,se){this.props=F,this.context=K,this.refs=A,this.updater=se||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,K){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,K,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=x.prototype;function U(F,K,se){this.props=F,this.context=K,this.refs=A,this.updater=se||S}var P=U.prototype=new y;P.constructor=U,M(P,x.prototype),P.isPureReactComponent=!0;var C=Array.isArray,R={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function O(F,K,se,_e,Ce,Ae){return se=Ae.ref,{$$typeof:a,type:F,key:K,ref:se!==void 0?se:null,props:Ae}}function b(F,K){return O(F.type,K,void 0,void 0,void 0,F.props)}function L(F){return typeof F=="object"&&F!==null&&F.$$typeof===a}function G(F){var K={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(se){return K[se]})}var z=/\/+/g;function V(F,K){return typeof F=="object"&&F!==null&&F.key!=null?G(""+F.key):K.toString(36)}function Y(){}function $(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(Y,Y):(F.status="pending",F.then(function(K){F.status==="pending"&&(F.status="fulfilled",F.value=K)},function(K){F.status==="pending"&&(F.status="rejected",F.reason=K)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function k(F,K,se,_e,Ce){var Ae=typeof F;(Ae==="undefined"||Ae==="boolean")&&(F=null);var ee=!1;if(F===null)ee=!0;else switch(Ae){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(F.$$typeof){case a:case e:ee=!0;break;case g:return ee=F._init,k(ee(F._payload),K,se,_e,Ce)}}if(ee)return Ce=Ce(F),ee=_e===""?"."+V(F,0):_e,C(Ce)?(se="",ee!=null&&(se=ee.replace(z,"$&/")+"/"),k(Ce,K,se,"",function(ke){return ke})):Ce!=null&&(L(Ce)&&(Ce=b(Ce,se+(Ce.key==null||F&&F.key===Ce.key?"":(""+Ce.key).replace(z,"$&/")+"/")+ee)),K.push(Ce)),1;ee=0;var Te=_e===""?".":_e+":";if(C(F))for(var ve=0;ve<F.length;ve++)_e=F[ve],Ae=Te+V(_e,ve),ee+=k(_e,K,se,Ae,Ce);else if(ve=v(F),typeof ve=="function")for(F=ve.call(F),ve=0;!(_e=F.next()).done;)_e=_e.value,Ae=Te+V(_e,ve++),ee+=k(_e,K,se,Ae,Ce);else if(Ae==="object"){if(typeof F.then=="function")return k($(F),K,se,_e,Ce);throw K=String(F),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ee}function I(F,K,se){if(F==null)return F;var _e=[],Ce=0;return k(F,_e,"","",function(Ae){return K.call(se,Ae,Ce++)}),_e}function H(F){if(F._status===-1){var K=F._result;K=K(),K.then(function(se){(F._status===0||F._status===-1)&&(F._status=1,F._result=se)},function(se){(F._status===0||F._status===-1)&&(F._status=2,F._result=se)}),F._status===-1&&(F._status=0,F._result=K)}if(F._status===1)return F._result.default;throw F._result}var J=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function fe(){}return _t.Children={map:I,forEach:function(F,K,se){I(F,function(){K.apply(this,arguments)},se)},count:function(F){var K=0;return I(F,function(){K++}),K},toArray:function(F){return I(F,function(K){return K})||[]},only:function(F){if(!L(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},_t.Component=x,_t.Fragment=n,_t.Profiler=o,_t.PureComponent=U,_t.StrictMode=r,_t.Suspense=p,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,_t.__COMPILER_RUNTIME={__proto__:null,c:function(F){return R.H.useMemoCache(F)}},_t.cache=function(F){return function(){return F.apply(null,arguments)}},_t.cloneElement=function(F,K,se){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var _e=M({},F.props),Ce=F.key,Ae=void 0;if(K!=null)for(ee in K.ref!==void 0&&(Ae=void 0),K.key!==void 0&&(Ce=""+K.key),K)!N.call(K,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&K.ref===void 0||(_e[ee]=K[ee]);var ee=arguments.length-2;if(ee===1)_e.children=se;else if(1<ee){for(var Te=Array(ee),ve=0;ve<ee;ve++)Te[ve]=arguments[ve+2];_e.children=Te}return O(F.type,Ce,void 0,void 0,Ae,_e)},_t.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},_t.createElement=function(F,K,se){var _e,Ce={},Ae=null;if(K!=null)for(_e in K.key!==void 0&&(Ae=""+K.key),K)N.call(K,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Ce[_e]=K[_e]);var ee=arguments.length-2;if(ee===1)Ce.children=se;else if(1<ee){for(var Te=Array(ee),ve=0;ve<ee;ve++)Te[ve]=arguments[ve+2];Ce.children=Te}if(F&&F.defaultProps)for(_e in ee=F.defaultProps,ee)Ce[_e]===void 0&&(Ce[_e]=ee[_e]);return O(F,Ae,void 0,void 0,null,Ce)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(F){return{$$typeof:h,render:F}},_t.isValidElement=L,_t.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:H}},_t.memo=function(F,K){return{$$typeof:d,type:F,compare:K===void 0?null:K}},_t.startTransition=function(F){var K=R.T,se={};R.T=se;try{var _e=F(),Ce=R.S;Ce!==null&&Ce(se,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(fe,J)}catch(Ae){J(Ae)}finally{R.T=K}},_t.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},_t.use=function(F){return R.H.use(F)},_t.useActionState=function(F,K,se){return R.H.useActionState(F,K,se)},_t.useCallback=function(F,K){return R.H.useCallback(F,K)},_t.useContext=function(F){return R.H.useContext(F)},_t.useDebugValue=function(){},_t.useDeferredValue=function(F,K){return R.H.useDeferredValue(F,K)},_t.useEffect=function(F,K,se){var _e=R.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _e.useEffect(F,K)},_t.useId=function(){return R.H.useId()},_t.useImperativeHandle=function(F,K,se){return R.H.useImperativeHandle(F,K,se)},_t.useInsertionEffect=function(F,K){return R.H.useInsertionEffect(F,K)},_t.useLayoutEffect=function(F,K){return R.H.useLayoutEffect(F,K)},_t.useMemo=function(F,K){return R.H.useMemo(F,K)},_t.useOptimistic=function(F,K){return R.H.useOptimistic(F,K)},_t.useReducer=function(F,K,se){return R.H.useReducer(F,K,se)},_t.useRef=function(F){return R.H.useRef(F)},_t.useState=function(F){return R.H.useState(F)},_t.useSyncExternalStore=function(F,K,se){return R.H.useSyncExternalStore(F,K,se)},_t.useTransition=function(){return R.H.useTransition()},_t.version="19.1.0",_t}var lx;function n0(){return lx||(lx=1,Nh.exports=_1()),Nh.exports}var W=n0();const fn=t0(W),i0=hS({__proto__:null,default:fn},[W]);var Uh={exports:{}},El={},Lh={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx;function x1(){return cx||(cx=1,function(a){function e(I,H){var J=I.length;I.push(H);e:for(;0<J;){var fe=J-1>>>1,F=I[fe];if(0<o(F,H))I[fe]=H,I[J]=F,J=fe;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var H=I[0],J=I.pop();if(J!==H){I[0]=J;e:for(var fe=0,F=I.length,K=F>>>1;fe<K;){var se=2*(fe+1)-1,_e=I[se],Ce=se+1,Ae=I[Ce];if(0>o(_e,J))Ce<F&&0>o(Ae,_e)?(I[fe]=Ae,I[Ce]=J,fe=Ce):(I[fe]=_e,I[se]=J,fe=se);else if(Ce<F&&0>o(Ae,J))I[fe]=Ae,I[Ce]=J,fe=Ce;else break e}}return H}function o(I,H){var J=I.sortIndex-H.sortIndex;return J!==0?J:I.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,_=null,v=3,S=!1,M=!1,A=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var H=n(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=I)r(d),H.sortIndex=H.expirationTime,e(p,H);else break;H=n(d)}}function R(I){if(A=!1,C(I),!M)if(n(p)!==null)M=!0,N||(N=!0,V());else{var H=n(d);H!==null&&k(R,H.startTime-I)}}var N=!1,O=-1,b=5,L=-1;function G(){return x?!0:!(a.unstable_now()-L<b)}function z(){if(x=!1,N){var I=a.unstable_now();L=I;var H=!0;try{e:{M=!1,A&&(A=!1,U(O),O=-1),S=!0;var J=v;try{t:{for(C(I),_=n(p);_!==null&&!(_.expirationTime>I&&G());){var fe=_.callback;if(typeof fe=="function"){_.callback=null,v=_.priorityLevel;var F=fe(_.expirationTime<=I);if(I=a.unstable_now(),typeof F=="function"){_.callback=F,C(I),H=!0;break t}_===n(p)&&r(p),C(I)}else r(p);_=n(p)}if(_!==null)H=!0;else{var K=n(d);K!==null&&k(R,K.startTime-I),H=!1}}break e}finally{_=null,v=J,S=!1}H=void 0}}finally{H?V():N=!1}}}var V;if(typeof P=="function")V=function(){P(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=z,V=function(){$.postMessage(null)}}else V=function(){y(z,0)};function k(I,H){O=y(function(){I(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(I){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var J=v;v=H;try{return I()}finally{v=J}},a.unstable_requestPaint=function(){x=!0},a.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=v;v=I;try{return H()}finally{v=J}},a.unstable_scheduleCallback=function(I,H,J){var fe=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?fe+J:fe):J=fe,I){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=J+F,I={id:g++,callback:H,priorityLevel:I,startTime:J,expirationTime:F,sortIndex:-1},J>fe?(I.sortIndex=J,e(d,I),n(p)===null&&I===n(d)&&(A?(U(O),O=-1):A=!0,k(R,J-fe))):(I.sortIndex=F,e(p,I),M||S||(M=!0,N||(N=!0,V()))),I},a.unstable_shouldYield=G,a.unstable_wrapCallback=function(I){var H=v;return function(){var J=v;v=H;try{return I.apply(this,arguments)}finally{v=J}}}}(Oh)),Oh}var ux;function y1(){return ux||(ux=1,Lh.exports=x1()),Lh.exports}var Ph={exports:{}},Xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function S1(){if(fx)return Xn;fx=1;var a=n0();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Xn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,g)},Xn.flushSync=function(p){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=d,r.p=g,r.d.f()}},Xn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},Xn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Xn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Xn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},Xn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Xn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},Xn.requestFormReset=function(p){r.d.r(p)},Xn.unstable_batchedUpdates=function(p,d){return p(d)},Xn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Xn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Xn.version="19.1.0",Xn}var dx;function pS(){if(dx)return Ph.exports;dx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ph.exports=S1(),Ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function M1(){if(hx)return El;hx=1;var a=y1(),e=n0(),n=pS();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),t;if(m===l)return h(f),i;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var E=!1,D=f.child;D;){if(D===s){E=!0,s=f,l=m;break}if(D===l){E=!0,l=f,s=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===s){E=!0,s=m,l=f;break}if(D===l){E=!0,l=m,s=f;break}D=D.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function d(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=d(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),P=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),G=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Symbol.for("react.client.reference");function $(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Y?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case x:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case P:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:$(t.type)||"Memo";case b:i=t._payload,t=t._init;try{return $(t(i))}catch{}}return null}var k=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},fe=[],F=-1;function K(t){return{current:t}}function se(t){0>F||(t.current=fe[F],fe[F]=null,F--)}function _e(t,i){F++,fe[F]=t.current,t.current=i}var Ce=K(null),Ae=K(null),ee=K(null),Te=K(null);function ve(t,i){switch(_e(ee,i),_e(Ae,t),_e(Ce,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?L_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=L_(i),t=O_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(Ce),_e(Ce,t)}function ke(){se(Ce),se(Ae),se(ee)}function $e(t){t.memoizedState!==null&&_e(Te,t);var i=Ce.current,s=O_(i,t.type);i!==s&&(_e(Ae,t),_e(Ce,s))}function qe(t){Ae.current===t&&(se(Ce),se(Ae)),Te.current===t&&(se(Te),_l._currentValue=J)}var bt=Object.prototype.hasOwnProperty,nt=a.unstable_scheduleCallback,gt=a.unstable_cancelCallback,xt=a.unstable_shouldYield,rt=a.unstable_requestPaint,Et=a.unstable_now,Gt=a.unstable_getCurrentPriorityLevel,Vt=a.unstable_ImmediatePriority,kt=a.unstable_UserBlockingPriority,lt=a.unstable_NormalPriority,mt=a.unstable_LowPriority,q=a.unstable_IdlePriority,Zt=a.log,ft=a.unstable_setDisableYieldValue,B=null,T=null;function te(t){if(typeof Zt=="function"&&ft(t),T&&typeof T.setStrictMode=="function")try{T.setStrictMode(B,t)}catch{}}var ie=Math.clz32?Math.clz32:Le,me=Math.log,Re=Math.LN2;function Le(t){return t>>>=0,t===0?32:31-(me(t)/Re|0)|0}var pe=256,xe=4194304;function we(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ye(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var D=l&134217727;return D!==0?(l=D&~m,l!==0?f=we(l):(E&=D,E!==0?f=we(E):s||(s=D&~t,s!==0&&(f=we(s))))):(D=l&~m,D!==0?f=we(D):E!==0?f=we(E):s||(s=l&~t,s!==0&&(f=we(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ne(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Oe(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Je(){var t=pe;return pe<<=1,(pe&4194048)===0&&(pe=256),t}function tt(){var t=xe;return xe<<=1,(xe&62914560)===0&&(xe=4194304),t}function ct(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function j(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ue(t,i,s,l,f,m){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var D=t.entanglements,X=t.expirationTimes,oe=t.hiddenUpdates;for(s=E&~s;0<s;){var Se=31-ie(s),Ee=1<<Se;D[Se]=0,X[Se]=-1;var ue=oe[Se];if(ue!==null)for(oe[Se]=null,Se=0;Se<ue.length;Se++){var he=ue[Se];he!==null&&(he.lane&=-536870913)}s&=~Ee}l!==0&&ye(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~i))}function ye(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ie(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function De(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ie(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Pe(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function be(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function We(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:J_(t.type))}function ze(t,i){var s=H.p;try{return H.p=t,i()}finally{H.p=s}}var At=Math.random().toString(36).slice(2),dt="__reactFiber$"+At,en="__reactProps$"+At,Nt="__reactContainer$"+At,Ka="__reactEvents$"+At,Do="__reactListeners$"+At,rn="__reactHandles$"+At,sn="__reactResources$"+At,Dn="__reactMarker$"+At;function In(t){delete t[dt],delete t[en],delete t[Ka],delete t[Do],delete t[rn]}function ai(t){var i=t[dt];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Nt]||s[dt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=B_(t);t!==null;){if(s=t[dt])return s;t=B_(t)}return i}t=s,s=t.parentNode}return null}function Vn(t){if(t=t[dt]||t[Nt]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function bi(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ui(t){var i=t[sn];return i||(i=t[sn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function on(t){t[Dn]=!0}var ya=new Set,Ur={};function hn(t,i){Sa(t,i),Sa(t+"Capture",i)}function Sa(t,i){for(Ur[t]=i,t=0;t<i.length;t++)ya.add(i[t])}var ic=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ac={},rc={};function Df(t){return bt.call(rc,t)?!0:bt.call(ac,t)?!1:ic.test(t)?rc[t]=!0:(ac[t]=!0,!1)}function ps(t,i,s){if(Df(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function w(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Q(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var de,le;function re(t){if(de===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);de=i&&i[1]||"",le=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+de+t+le}var Ie=!1;function He(t,i){if(!t||Ie)return"";Ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(he){var ue=he}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(he){ue=he}t.call(Ee.prototype)}}else{try{throw Error()}catch(he){ue=he}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(he){if(he&&ue&&typeof he.stack=="string")return[he.stack,ue.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],D=m[1];if(E&&D){var X=E.split(`
`),oe=D.split(`
`);for(f=l=0;l<X.length&&!X[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===X.length||f===oe.length)for(l=X.length-1,f=oe.length-1;1<=l&&0<=f&&X[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(X[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||X[l]!==oe[f]){var Se=`
`+X[l].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=l&&0<=f);break}}}finally{Ie=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?re(s):""}function Fe(t){switch(t.tag){case 26:case 27:case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return He(t.type,!1);case 11:return He(t.type.render,!1);case 1:return He(t.type,!0);case 31:return re("Activity");default:return""}}function Ze(t){try{var i="";do i+=Fe(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(t){var i=ht(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Qe(t){t._valueTracker||(t._valueTracker=vt(t))}function Ft(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ht(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ln=/[\n"\\]/g;function yt(t){return t.replace(ln,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function yn(t,i,s,l,f,m,E,D){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Ge(i)):t.value!==""+Ge(i)&&(t.value=""+Ge(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Fn(t,E,Ge(i)):s!=null?Fn(t,E,Ge(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+Ge(D):t.removeAttribute("name")}function Ve(t,i,s,l,f,m,E,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+Ge(s):"",i=i!=null?""+Ge(i):s,D||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=D?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Fn(t,i,s){i==="number"&&nn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function St(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ge(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Kn(t,i,s){if(i!=null&&(i=""+Ge(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Ge(s):""}function fi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(k(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Ge(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function $n(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var $a=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xt(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||$a.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function cn(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Xt(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Xt(t,m,i[m])}function Ei(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ta=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gi(t){return ta.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ms=null;function Nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gs=null,vs=null;function P0(t){var i=Vn(t);if(i&&(t=i.stateNode)){var s=t[en]||null;e:switch(t=i.stateNode,i.type){case"input":if(yn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[en]||null;if(!f)throw Error(r(90));yn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Ft(l)}break e;case"textarea":Kn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&St(t,!!s.multiple,i,!1)}}}var Uf=!1;function I0(t,i,s){if(Uf)return t(i,s);Uf=!0;try{var l=t(i);return l}finally{if(Uf=!1,(gs!==null||vs!==null)&&(Xc(),gs&&(i=gs,t=vs,vs=gs=null,P0(i),t)))for(i=0;i<t.length;i++)P0(t[i])}}function No(t,i){var s=t.stateNode;if(s===null)return null;var l=s[en]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=!1;if(Ma)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Lf=!1}var Qa=null,Of=null,sc=null;function F0(){if(sc)return sc;var t,i=Of,s=i.length,l,f="value"in Qa?Qa.value:Qa.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===f[m-l];l++);return sc=f.slice(t,1<l?1-l:void 0)}function oc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function lc(){return!0}function B0(){return!1}function ri(t){function i(s,l,f,m,E){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?lc:B0,this.isPropagationStopped=B0,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=lc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=lc)},persist:function(){},isPersistent:lc}),i}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=ri(Lr),Lo=g({},Lr,{view:0,detail:0}),gb=ri(Lo),Pf,If,Oo,uc=g({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(Pf=t.screenX-Oo.screenX,If=t.screenY-Oo.screenY):If=Pf=0,Oo=t),Pf)},movementY:function(t){return"movementY"in t?t.movementY:If}}),z0=ri(uc),vb=g({},uc,{dataTransfer:0}),_b=ri(vb),xb=g({},Lo,{relatedTarget:0}),Ff=ri(xb),yb=g({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sb=ri(yb),Mb=g({},Lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bb=ri(Mb),Eb=g({},Lr,{data:0}),H0=ri(Eb),Tb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ab={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rb(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Cb[t])?!!i[t]:!1}function Bf(){return Rb}var wb=g({},Lo,{key:function(t){if(t.key){var i=Tb[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ab[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Db=ri(wb),Nb=g({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),G0=ri(Nb),Ub=g({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),Lb=ri(Ub),Ob=g({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pb=ri(Ob),Ib=g({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fb=ri(Ib),Bb=g({},Lr,{newState:0,oldState:0}),zb=ri(Bb),Hb=[9,13,27,32],zf=Ma&&"CompositionEvent"in window,Po=null;Ma&&"documentMode"in document&&(Po=document.documentMode);var Gb=Ma&&"TextEvent"in window&&!Po,V0=Ma&&(!zf||Po&&8<Po&&11>=Po),k0=" ",X0=!1;function W0(t,i){switch(t){case"keyup":return Hb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function Vb(t,i){switch(t){case"compositionend":return q0(i);case"keypress":return i.which!==32?null:(X0=!0,k0);case"textInput":return t=i.data,t===k0&&X0?null:t;default:return null}}function kb(t,i){if(_s)return t==="compositionend"||!zf&&W0(t,i)?(t=F0(),sc=Of=Qa=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return V0&&i.locale!=="ko"?null:i.data;default:return null}}var Xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Y0(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Xb[t.type]:i==="textarea"}function j0(t,i,s,l){gs?vs?vs.push(l):vs=[l]:gs=l,i=Kc(i,"onChange"),0<i.length&&(s=new cc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Io=null,Fo=null;function Wb(t){R_(t,0)}function fc(t){var i=bi(t);if(Ft(i))return t}function Z0(t,i){if(t==="change")return i}var K0=!1;if(Ma){var Hf;if(Ma){var Gf="oninput"in document;if(!Gf){var $0=document.createElement("div");$0.setAttribute("oninput","return;"),Gf=typeof $0.oninput=="function"}Hf=Gf}else Hf=!1;K0=Hf&&(!document.documentMode||9<document.documentMode)}function Q0(){Io&&(Io.detachEvent("onpropertychange",J0),Fo=Io=null)}function J0(t){if(t.propertyName==="value"&&fc(Fo)){var i=[];j0(i,Fo,t,Nf(t)),I0(Wb,i)}}function qb(t,i,s){t==="focusin"?(Q0(),Io=i,Fo=s,Io.attachEvent("onpropertychange",J0)):t==="focusout"&&Q0()}function Yb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fc(Fo)}function jb(t,i){if(t==="click")return fc(i)}function Zb(t,i){if(t==="input"||t==="change")return fc(i)}function Kb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var di=typeof Object.is=="function"?Object.is:Kb;function Bo(t,i){if(di(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!bt.call(i,f)||!di(t[f],i[f]))return!1}return!0}function eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tg(t,i){var s=eg(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=eg(s)}}function ng(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ng(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ig(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=nn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=nn(t.document)}return i}function Vf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var $b=Ma&&"documentMode"in document&&11>=document.documentMode,xs=null,kf=null,zo=null,Xf=!1;function ag(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Xf||xs==null||xs!==nn(l)||(l=xs,"selectionStart"in l&&Vf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zo&&Bo(zo,l)||(zo=l,l=Kc(kf,"onSelect"),0<l.length&&(i=new cc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=xs)))}function Or(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ys={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionrun:Or("Transition","TransitionRun"),transitionstart:Or("Transition","TransitionStart"),transitioncancel:Or("Transition","TransitionCancel"),transitionend:Or("Transition","TransitionEnd")},Wf={},rg={};Ma&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Pr(t){if(Wf[t])return Wf[t];if(!ys[t])return t;var i=ys[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in rg)return Wf[t]=i[s];return t}var sg=Pr("animationend"),og=Pr("animationiteration"),lg=Pr("animationstart"),Qb=Pr("transitionrun"),Jb=Pr("transitionstart"),eE=Pr("transitioncancel"),cg=Pr("transitionend"),ug=new Map,qf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qf.push("scrollEnd");function Vi(t,i){ug.set(t,i),hn(i,[t])}var fg=new WeakMap;function Ti(t,i){if(typeof t=="object"&&t!==null){var s=fg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Ze(i)},fg.set(t,i),i)}return{value:t,source:i,stack:Ze(i)}}var Ai=[],Ss=0,Yf=0;function dc(){for(var t=Ss,i=Yf=Ss=0;i<t;){var s=Ai[i];Ai[i++]=null;var l=Ai[i];Ai[i++]=null;var f=Ai[i];Ai[i++]=null;var m=Ai[i];if(Ai[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&dg(s,f,m)}}function hc(t,i,s,l){Ai[Ss++]=t,Ai[Ss++]=i,Ai[Ss++]=s,Ai[Ss++]=l,Yf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function jf(t,i,s,l){return hc(t,i,s,l),pc(t)}function Ms(t,i){return hc(t,null,null,i),pc(t)}function dg(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-ie(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function pc(t){if(50<ul)throw ul=0,eh=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var bs={};function tE(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,i,s,l){return new tE(t,i,s,l)}function Zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ba(t,i){var s=t.alternate;return s===null?(s=hi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function hg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function mc(t,i,s,l,f,m){var E=0;if(l=t,typeof t=="function")Zf(t)&&(E=1);else if(typeof t=="string")E=i1(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=hi(31,s,i,f),t.elementType=L,t.lanes=m,t;case M:return Ir(s.children,f,m,i);case A:E=8,f|=24;break;case x:return t=hi(12,s,i,f|2),t.elementType=x,t.lanes=m,t;case R:return t=hi(13,s,i,f),t.elementType=R,t.lanes=m,t;case N:return t=hi(19,s,i,f),t.elementType=N,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case P:E=10;break e;case U:E=9;break e;case C:E=11;break e;case O:E=14;break e;case b:E=16,l=null;break e}E=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=hi(E,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Ir(t,i,s,l){return t=hi(7,t,l,i),t.lanes=s,t}function Kf(t,i,s){return t=hi(6,t,null,i),t.lanes=s,t}function $f(t,i,s){return i=hi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Es=[],Ts=0,gc=null,vc=0,Ci=[],Ri=0,Fr=null,Ea=1,Ta="";function Br(t,i){Es[Ts++]=vc,Es[Ts++]=gc,gc=t,vc=i}function pg(t,i,s){Ci[Ri++]=Ea,Ci[Ri++]=Ta,Ci[Ri++]=Fr,Fr=t;var l=Ea;t=Ta;var f=32-ie(l)-1;l&=~(1<<f),s+=1;var m=32-ie(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Ea=1<<32-ie(i)+f|s<<f|l,Ta=m+t}else Ea=1<<m|s<<f|l,Ta=t}function Qf(t){t.return!==null&&(Br(t,1),pg(t,1,0))}function Jf(t){for(;t===gc;)gc=Es[--Ts],Es[Ts]=null,vc=Es[--Ts],Es[Ts]=null;for(;t===Fr;)Fr=Ci[--Ri],Ci[Ri]=null,Ta=Ci[--Ri],Ci[Ri]=null,Ea=Ci[--Ri],Ci[Ri]=null}var Qn=null,pn=null,Bt=!1,zr=null,na=!1,ed=Error(r(519));function Hr(t){var i=Error(r(418,""));throw Vo(Ti(i,t)),ed}function mg(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[dt]=t,i[en]=l,s){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(s=0;s<dl.length;s++)wt(dl[s],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":wt("invalid",i),Ve(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Qe(i);break;case"select":wt("invalid",i);break;case"textarea":wt("invalid",i),fi(i,l.value,l.defaultValue,l.children),Qe(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||U_(i.textContent,s)?(l.popover!=null&&(wt("beforetoggle",i),wt("toggle",i)),l.onScroll!=null&&wt("scroll",i),l.onScrollEnd!=null&&wt("scrollend",i),l.onClick!=null&&(i.onclick=$c),i=!0):i=!1,i||Hr(t)}function gg(t){for(Qn=t.return;Qn;)switch(Qn.tag){case 5:case 13:na=!1;return;case 27:case 3:na=!0;return;default:Qn=Qn.return}}function Ho(t){if(t!==Qn)return!1;if(!Bt)return gg(t),Bt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||gh(t.type,t.memoizedProps)),s=!s),s&&pn&&Hr(t),gg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){pn=Xi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}pn=null}}else i===27?(i=pn,pr(t.type)?(t=yh,yh=null,pn=t):pn=i):pn=Qn?Xi(t.stateNode.nextSibling):null;return!0}function Go(){pn=Qn=null,Bt=!1}function vg(){var t=zr;return t!==null&&(li===null?li=t:li.push.apply(li,t),zr=null),t}function Vo(t){zr===null?zr=[t]:zr.push(t)}var td=K(null),Gr=null,Aa=null;function Ja(t,i,s){_e(td,i._currentValue),i._currentValue=s}function Ca(t){t._currentValue=td.current,se(td)}function nd(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function id(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var D=m;m=f;for(var X=0;X<i.length;X++)if(D.context===i[X]){m.lanes|=s,D=m.alternate,D!==null&&(D.lanes|=s),nd(m.return,s,t),l||(E=null);break e}m=D.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(r(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),nd(E,s,t),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===t){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function ko(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var D=f.type;di(f.pendingProps.value,E.value)||(t!==null?t.push(D):t=[D])}}else if(f===Te.current){if(E=f.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(_l):t=[_l])}f=f.return}t!==null&&id(i,t,s,l),i.flags|=262144}function _c(t){for(t=t.firstContext;t!==null;){if(!di(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Vr(t){Gr=t,Aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return _g(Gr,t)}function xc(t,i){return Gr===null&&Vr(t),_g(t,i)}function _g(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Aa===null){if(t===null)throw Error(r(308));Aa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Aa=Aa.next=i;return s}var nE=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},iE=a.unstable_scheduleCallback,aE=a.unstable_NormalPriority,An={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ad(){return{controller:new nE,data:new Map,refCount:0}}function Xo(t){t.refCount--,t.refCount===0&&iE(aE,function(){t.controller.abort()})}var Wo=null,rd=0,As=0,Cs=null;function rE(t,i){if(Wo===null){var s=Wo=[];rd=0,As=oh(),Cs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return rd++,i.then(xg,xg),i}function xg(){if(--rd===0&&Wo!==null){Cs!==null&&(Cs.status="fulfilled");var t=Wo;Wo=null,As=0,Cs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function sE(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var yg=I.S;I.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&rE(t,i),yg!==null&&yg(t,i)};var kr=K(null);function sd(){var t=kr.current;return t!==null?t:an.pooledCache}function yc(t,i){i===null?_e(kr,kr.current):_e(kr,i.pool)}function Sg(){var t=sd();return t===null?null:{parent:An._currentValue,pool:t}}var qo=Error(r(460)),Mg=Error(r(474)),Sc=Error(r(542)),od={then:function(){}};function bg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mc(){}function Eg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Mc,Mc),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ag(t),t;default:if(typeof i.status=="string")i.then(Mc,Mc);else{if(t=an,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ag(t),t}throw Yo=i,qo}}var Yo=null;function Tg(){if(Yo===null)throw Error(r(459));var t=Yo;return Yo=null,t}function Ag(t){if(t===qo||t===Sc)throw Error(r(483))}var er=!1;function ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function tr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function nr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(qt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=pc(t),dg(t,null,s),i}return hc(t,l,i,s),pc(t)}function jo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,De(t,s)}}function ud(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var fd=!1;function Zo(){if(fd){var t=Cs;if(t!==null)throw t}}function Ko(t,i,s,l){fd=!1;var f=t.updateQueue;er=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var X=D,oe=X.next;X.next=null,E===null?m=oe:E.next=oe,E=X;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==E&&(D===null?Se.firstBaseUpdate=oe:D.next=oe,Se.lastBaseUpdate=X))}if(m!==null){var Ee=f.baseState;E=0,Se=oe=X=null,D=m;do{var ue=D.lane&-536870913,he=ue!==D.lane;if(he?(Ot&ue)===ue:(l&ue)===ue){ue!==0&&ue===As&&(fd=!0),Se!==null&&(Se=Se.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var ut=t,it=D;ue=i;var Jt=s;switch(it.tag){case 1:if(ut=it.payload,typeof ut=="function"){Ee=ut.call(Jt,Ee,ue);break e}Ee=ut;break e;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=it.payload,ue=typeof ut=="function"?ut.call(Jt,Ee,ue):ut,ue==null)break e;Ee=g({},Ee,ue);break e;case 2:er=!0}}ue=D.callback,ue!==null&&(t.flags|=64,he&&(t.flags|=8192),he=f.callbacks,he===null?f.callbacks=[ue]:he.push(ue))}else he={lane:ue,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(oe=Se=he,X=Ee):Se=Se.next=he,E|=ue;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;he=D,D=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);Se===null&&(X=Ee),f.baseState=X,f.firstBaseUpdate=oe,f.lastBaseUpdate=Se,m===null&&(f.shared.lanes=0),ur|=E,t.lanes=E,t.memoizedState=Ee}}function Cg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Rg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Cg(s[t],i)}var Rs=K(null),bc=K(0);function wg(t,i){t=Oa,_e(bc,t),_e(Rs,i),Oa=t|i.baseLanes}function dd(){_e(bc,Oa),_e(Rs,Rs.current)}function hd(){Oa=bc.current,se(Rs),se(bc)}var ir=0,Tt=null,$t=null,Sn=null,Ec=!1,ws=!1,Xr=!1,Tc=0,$o=0,Ds=null,oE=0;function vn(){throw Error(r(321))}function pd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!di(t[s],i[s]))return!1;return!0}function md(t,i,s,l,f,m){return ir=m,Tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?dv:hv,Xr=!1,m=s(l,f),Xr=!1,ws&&(m=Ng(i,s,l,f)),Dg(t),m}function Dg(t){I.H=Nc;var i=$t!==null&&$t.next!==null;if(ir=0,Sn=$t=Tt=null,Ec=!1,$o=0,Ds=null,i)throw Error(r(300));t===null||Nn||(t=t.dependencies,t!==null&&_c(t)&&(Nn=!0))}function Ng(t,i,s,l){Tt=t;var f=0;do{if(ws&&(Ds=null),$o=0,ws=!1,25<=f)throw Error(r(301));if(f+=1,Sn=$t=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=pE,m=i(s,l)}while(ws);return m}function lE(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?Qo(i):i,t=t.useState()[0],($t!==null?$t.memoizedState:null)!==t&&(Tt.flags|=1024),i}function gd(){var t=Tc!==0;return Tc=0,t}function vd(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function _d(t){if(Ec){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ec=!1}ir=0,Sn=$t=Tt=null,ws=!1,$o=Tc=0,Ds=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?Tt.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function Mn(){if($t===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=Sn===null?Tt.memoizedState:Sn.next;if(i!==null)Sn=i,$t=t;else{if(t===null)throw Tt.alternate===null?Error(r(467)):Error(r(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Sn===null?Tt.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function xd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(t){var i=$o;return $o+=1,Ds===null&&(Ds=[]),t=Eg(Ds,t,i),i=Tt,(Sn===null?i.memoizedState:Sn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?dv:hv),t}function Ac(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qo(t);if(t.$$typeof===P)return kn(t)}throw Error(r(438,String(t)))}function yd(t){var i=null,s=Tt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Tt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=xd(),Tt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=G;return i.index++,s}function Ra(t,i){return typeof i=="function"?i(t):i}function Cc(t){var i=Mn();return Sd(i,$t,t)}function Sd(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var D=E=null,X=null,oe=i,Se=!1;do{var Ee=oe.lane&-536870913;if(Ee!==oe.lane?(Ot&Ee)===Ee:(ir&Ee)===Ee){var ue=oe.revertLane;if(ue===0)X!==null&&(X=X.next={lane:0,revertLane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Ee===As&&(Se=!0);else if((ir&ue)===ue){oe=oe.next,ue===As&&(Se=!0);continue}else Ee={lane:0,revertLane:oe.revertLane,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},X===null?(D=X=Ee,E=m):X=X.next=Ee,Tt.lanes|=ue,ur|=ue;Ee=oe.action,Xr&&s(m,Ee),m=oe.hasEagerState?oe.eagerState:s(m,Ee)}else ue={lane:Ee,revertLane:oe.revertLane,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},X===null?(D=X=ue,E=m):X=X.next=ue,Tt.lanes|=Ee,ur|=Ee;oe=oe.next}while(oe!==null&&oe!==i);if(X===null?E=m:X.next=D,!di(m,t.memoizedState)&&(Nn=!0,Se&&(s=Cs,s!==null)))throw s;t.memoizedState=m,t.baseState=E,t.baseQueue=X,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Md(t){var i=Mn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do m=t(m,E.action),E=E.next;while(E!==f);di(m,i.memoizedState)||(Nn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Ug(t,i,s){var l=Tt,f=Mn(),m=Bt;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!di(($t||f).memoizedState,s);E&&(f.memoizedState=s,Nn=!0),f=f.queue;var D=Pg.bind(null,l,f,t);if(Jo(2048,8,D,[t]),f.getSnapshot!==i||E||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,Ns(9,Rc(),Og.bind(null,l,f,s,i),null),an===null)throw Error(r(349));m||(ir&124)!==0||Lg(l,i,s)}return s}function Lg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Tt.updateQueue,i===null?(i=xd(),Tt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Og(t,i,s,l){i.value=s,i.getSnapshot=l,Ig(i)&&Fg(t)}function Pg(t,i,s){return s(function(){Ig(i)&&Fg(t)})}function Ig(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!di(t,s)}catch{return!0}}function Fg(t){var i=Ms(t,2);i!==null&&_i(i,t,2)}function bd(t){var i=si();if(typeof t=="function"){var s=t;if(t=s(),Xr){te(!0);try{s()}finally{te(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},i}function Bg(t,i,s,l){return t.baseState=s,Sd(t,$t,typeof l=="function"?l:Ra)}function cE(t,i,s,l,f){if(Dc(t))throw Error(r(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};I.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,zg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function zg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=I.T,E={};I.T=E;try{var D=s(f,l),X=I.S;X!==null&&X(E,D),Hg(t,i,D)}catch(oe){Ed(t,i,oe)}finally{I.T=m}}else try{m=s(f,l),Hg(t,i,m)}catch(oe){Ed(t,i,oe)}}function Hg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Gg(t,i,l)},function(l){return Ed(t,i,l)}):Gg(t,i,s)}function Gg(t,i,s){i.status="fulfilled",i.value=s,Vg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,zg(t,s)))}function Ed(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Vg(i),i=i.next;while(i!==l)}t.action=null}function Vg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function kg(t,i){return i}function Xg(t,i){if(Bt){var s=an.formState;if(s!==null){e:{var l=Tt;if(Bt){if(pn){t:{for(var f=pn,m=na;f.nodeType!==8;){if(!m){f=null;break t}if(f=Xi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){pn=Xi(f.nextSibling),l=f.data==="F!";break e}}Hr(l)}l=!1}l&&(i=s[0])}}return s=si(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:i},s.queue=l,s=cv.bind(null,Tt,l),l.dispatch=s,l=bd(!1),m=wd.bind(null,Tt,!1,l.queue),l=si(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=cE.bind(null,Tt,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Wg(t){var i=Mn();return qg(i,$t,t)}function qg(t,i,s){if(i=Sd(t,i,kg)[0],t=Cc(Ra)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Qo(i)}catch(E){throw E===qo?Sc:E}else l=i;i=Mn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(Tt.flags|=2048,Ns(9,Rc(),uE.bind(null,f,s),null)),[l,m,t]}function uE(t,i){t.action=i}function Yg(t){var i=Mn(),s=$t;if(s!==null)return qg(i,s,t);Mn(),i=i.memoizedState,s=Mn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Ns(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=Tt.updateQueue,i===null&&(i=xd(),Tt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Rc(){return{destroy:void 0,resource:void 0}}function jg(){return Mn().memoizedState}function wc(t,i,s,l){var f=si();l=l===void 0?null:l,Tt.flags|=t,f.memoizedState=Ns(1|i,Rc(),s,l)}function Jo(t,i,s,l){var f=Mn();l=l===void 0?null:l;var m=f.memoizedState.inst;$t!==null&&l!==null&&pd(l,$t.memoizedState.deps)?f.memoizedState=Ns(i,m,s,l):(Tt.flags|=t,f.memoizedState=Ns(1|i,m,s,l))}function Zg(t,i){wc(8390656,8,t,i)}function Kg(t,i){Jo(2048,8,t,i)}function $g(t,i){return Jo(4,2,t,i)}function Qg(t,i){return Jo(4,4,t,i)}function Jg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ev(t,i,s){s=s!=null?s.concat([t]):null,Jo(4,4,Jg.bind(null,i,t),s)}function Td(){}function tv(t,i){var s=Mn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&pd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function nv(t,i){var s=Mn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&pd(i,l[1]))return l[0];if(l=t(),Xr){te(!0);try{t()}finally{te(!1)}}return s.memoizedState=[l,i],l}function Ad(t,i,s){return s===void 0||(ir&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=r_(),Tt.lanes|=t,ur|=t,s)}function iv(t,i,s,l){return di(s,i)?s:Rs.current!==null?(t=Ad(t,s,l),di(t,i)||(Nn=!0),t):(ir&42)===0?(Nn=!0,t.memoizedState=s):(t=r_(),Tt.lanes|=t,ur|=t,i)}function av(t,i,s,l,f){var m=H.p;H.p=m!==0&&8>m?m:8;var E=I.T,D={};I.T=D,wd(t,!1,i,s);try{var X=f(),oe=I.S;if(oe!==null&&oe(D,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var Se=sE(X,l);el(t,i,Se,vi(t))}else el(t,i,l,vi(t))}catch(Ee){el(t,i,{then:function(){},status:"rejected",reason:Ee},vi())}finally{H.p=m,I.T=E}}function fE(){}function Cd(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=rv(t).queue;av(t,f,i,J,s===null?fE:function(){return sv(t),s(l)})}function rv(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:J},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function sv(t){var i=rv(t).next.queue;el(t,i,{},vi())}function Rd(){return kn(_l)}function ov(){return Mn().memoizedState}function lv(){return Mn().memoizedState}function dE(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=vi();t=tr(s);var l=nr(i,t,s);l!==null&&(_i(l,i,s),jo(l,i,s)),i={cache:ad()},t.payload=i;return}i=i.return}}function hE(t,i,s){var l=vi();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Dc(t)?uv(i,s):(s=jf(t,i,s,l),s!==null&&(_i(s,t,l),fv(s,i,l)))}function cv(t,i,s){var l=vi();el(t,i,s,l)}function el(t,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Dc(t))uv(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,D=m(E,s);if(f.hasEagerState=!0,f.eagerState=D,di(D,E))return hc(t,i,f,0),an===null&&dc(),!1}catch{}finally{}if(s=jf(t,i,f,l),s!==null)return _i(s,t,l),fv(s,i,l),!0}return!1}function wd(t,i,s,l){if(l={lane:2,revertLane:oh(),action:l,hasEagerState:!1,eagerState:null,next:null},Dc(t)){if(i)throw Error(r(479))}else i=jf(t,s,l,2),i!==null&&_i(i,t,2)}function Dc(t){var i=t.alternate;return t===Tt||i!==null&&i===Tt}function uv(t,i){ws=Ec=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function fv(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,De(t,s)}}var Nc={readContext:kn,use:Ac,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn},dv={readContext:kn,use:Ac,useCallback:function(t,i){return si().memoizedState=[t,i===void 0?null:i],t},useContext:kn,useEffect:Zg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,wc(4194308,4,Jg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return wc(4194308,4,t,i)},useInsertionEffect:function(t,i){wc(4,2,t,i)},useMemo:function(t,i){var s=si();i=i===void 0?null:i;var l=t();if(Xr){te(!0);try{t()}finally{te(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=si();if(s!==void 0){var f=s(i);if(Xr){te(!0);try{s(i)}finally{te(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=hE.bind(null,Tt,t),[l.memoizedState,t]},useRef:function(t){var i=si();return t={current:t},i.memoizedState=t},useState:function(t){t=bd(t);var i=t.queue,s=cv.bind(null,Tt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Td,useDeferredValue:function(t,i){var s=si();return Ad(s,t,i)},useTransition:function(){var t=bd(!1);return t=av.bind(null,Tt,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=Tt,f=si();if(Bt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),an===null)throw Error(r(349));(Ot&124)!==0||Lg(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Zg(Pg.bind(null,l,m,t),[t]),l.flags|=2048,Ns(9,Rc(),Og.bind(null,l,m,s,i),null),s},useId:function(){var t=si(),i=an.identifierPrefix;if(Bt){var s=Ta,l=Ea;s=(l&~(1<<32-ie(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Tc++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=oE++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Rd,useFormState:Xg,useActionState:Xg,useOptimistic:function(t){var i=si();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=wd.bind(null,Tt,!0,s),s.dispatch=i,[t,i]},useMemoCache:yd,useCacheRefresh:function(){return si().memoizedState=dE.bind(null,Tt)}},hv={readContext:kn,use:Ac,useCallback:tv,useContext:kn,useEffect:Kg,useImperativeHandle:ev,useInsertionEffect:$g,useLayoutEffect:Qg,useMemo:nv,useReducer:Cc,useRef:jg,useState:function(){return Cc(Ra)},useDebugValue:Td,useDeferredValue:function(t,i){var s=Mn();return iv(s,$t.memoizedState,t,i)},useTransition:function(){var t=Cc(Ra)[0],i=Mn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Ug,useId:ov,useHostTransitionStatus:Rd,useFormState:Wg,useActionState:Wg,useOptimistic:function(t,i){var s=Mn();return Bg(s,$t,t,i)},useMemoCache:yd,useCacheRefresh:lv},pE={readContext:kn,use:Ac,useCallback:tv,useContext:kn,useEffect:Kg,useImperativeHandle:ev,useInsertionEffect:$g,useLayoutEffect:Qg,useMemo:nv,useReducer:Md,useRef:jg,useState:function(){return Md(Ra)},useDebugValue:Td,useDeferredValue:function(t,i){var s=Mn();return $t===null?Ad(s,t,i):iv(s,$t.memoizedState,t,i)},useTransition:function(){var t=Md(Ra)[0],i=Mn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Ug,useId:ov,useHostTransitionStatus:Rd,useFormState:Yg,useActionState:Yg,useOptimistic:function(t,i){var s=Mn();return $t!==null?Bg(s,$t,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:yd,useCacheRefresh:lv},Us=null,tl=0;function Uc(t){var i=tl;return tl+=1,Us===null&&(Us=[]),Eg(Us,t,i)}function nl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Lc(t,i){throw i.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function pv(t){var i=t._init;return i(t._payload)}function mv(t){function i(ne,Z){if(t){var ae=ne.deletions;ae===null?(ne.deletions=[Z],ne.flags|=16):ae.push(Z)}}function s(ne,Z){if(!t)return null;for(;Z!==null;)i(ne,Z),Z=Z.sibling;return null}function l(ne){for(var Z=new Map;ne!==null;)ne.key!==null?Z.set(ne.key,ne):Z.set(ne.index,ne),ne=ne.sibling;return Z}function f(ne,Z){return ne=ba(ne,Z),ne.index=0,ne.sibling=null,ne}function m(ne,Z,ae){return ne.index=ae,t?(ae=ne.alternate,ae!==null?(ae=ae.index,ae<Z?(ne.flags|=67108866,Z):ae):(ne.flags|=67108866,Z)):(ne.flags|=1048576,Z)}function E(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function D(ne,Z,ae,Me){return Z===null||Z.tag!==6?(Z=Kf(ae,ne.mode,Me),Z.return=ne,Z):(Z=f(Z,ae),Z.return=ne,Z)}function X(ne,Z,ae,Me){var je=ae.type;return je===M?Se(ne,Z,ae.props.children,Me,ae.key):Z!==null&&(Z.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===b&&pv(je)===Z.type)?(Z=f(Z,ae.props),nl(Z,ae),Z.return=ne,Z):(Z=mc(ae.type,ae.key,ae.props,null,ne.mode,Me),nl(Z,ae),Z.return=ne,Z)}function oe(ne,Z,ae,Me){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ae.containerInfo||Z.stateNode.implementation!==ae.implementation?(Z=$f(ae,ne.mode,Me),Z.return=ne,Z):(Z=f(Z,ae.children||[]),Z.return=ne,Z)}function Se(ne,Z,ae,Me,je){return Z===null||Z.tag!==7?(Z=Ir(ae,ne.mode,Me,je),Z.return=ne,Z):(Z=f(Z,ae),Z.return=ne,Z)}function Ee(ne,Z,ae){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Kf(""+Z,ne.mode,ae),Z.return=ne,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case v:return ae=mc(Z.type,Z.key,Z.props,null,ne.mode,ae),nl(ae,Z),ae.return=ne,ae;case S:return Z=$f(Z,ne.mode,ae),Z.return=ne,Z;case b:var Me=Z._init;return Z=Me(Z._payload),Ee(ne,Z,ae)}if(k(Z)||V(Z))return Z=Ir(Z,ne.mode,ae,null),Z.return=ne,Z;if(typeof Z.then=="function")return Ee(ne,Uc(Z),ae);if(Z.$$typeof===P)return Ee(ne,xc(ne,Z),ae);Lc(ne,Z)}return null}function ue(ne,Z,ae,Me){var je=Z!==null?Z.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return je!==null?null:D(ne,Z,""+ae,Me);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case v:return ae.key===je?X(ne,Z,ae,Me):null;case S:return ae.key===je?oe(ne,Z,ae,Me):null;case b:return je=ae._init,ae=je(ae._payload),ue(ne,Z,ae,Me)}if(k(ae)||V(ae))return je!==null?null:Se(ne,Z,ae,Me,null);if(typeof ae.then=="function")return ue(ne,Z,Uc(ae),Me);if(ae.$$typeof===P)return ue(ne,Z,xc(ne,ae),Me);Lc(ne,ae)}return null}function he(ne,Z,ae,Me,je){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ne=ne.get(ae)||null,D(Z,ne,""+Me,je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case v:return ne=ne.get(Me.key===null?ae:Me.key)||null,X(Z,ne,Me,je);case S:return ne=ne.get(Me.key===null?ae:Me.key)||null,oe(Z,ne,Me,je);case b:var Ct=Me._init;return Me=Ct(Me._payload),he(ne,Z,ae,Me,je)}if(k(Me)||V(Me))return ne=ne.get(ae)||null,Se(Z,ne,Me,je,null);if(typeof Me.then=="function")return he(ne,Z,ae,Uc(Me),je);if(Me.$$typeof===P)return he(ne,Z,ae,xc(Z,Me),je);Lc(Z,Me)}return null}function ut(ne,Z,ae,Me){for(var je=null,Ct=null,et=Z,at=Z=0,Ln=null;et!==null&&at<ae.length;at++){et.index>at?(Ln=et,et=null):Ln=et.sibling;var It=ue(ne,et,ae[at],Me);if(It===null){et===null&&(et=Ln);break}t&&et&&It.alternate===null&&i(ne,et),Z=m(It,Z,at),Ct===null?je=It:Ct.sibling=It,Ct=It,et=Ln}if(at===ae.length)return s(ne,et),Bt&&Br(ne,at),je;if(et===null){for(;at<ae.length;at++)et=Ee(ne,ae[at],Me),et!==null&&(Z=m(et,Z,at),Ct===null?je=et:Ct.sibling=et,Ct=et);return Bt&&Br(ne,at),je}for(et=l(et);at<ae.length;at++)Ln=he(et,ne,at,ae[at],Me),Ln!==null&&(t&&Ln.alternate!==null&&et.delete(Ln.key===null?at:Ln.key),Z=m(Ln,Z,at),Ct===null?je=Ln:Ct.sibling=Ln,Ct=Ln);return t&&et.forEach(function(xr){return i(ne,xr)}),Bt&&Br(ne,at),je}function it(ne,Z,ae,Me){if(ae==null)throw Error(r(151));for(var je=null,Ct=null,et=Z,at=Z=0,Ln=null,It=ae.next();et!==null&&!It.done;at++,It=ae.next()){et.index>at?(Ln=et,et=null):Ln=et.sibling;var xr=ue(ne,et,It.value,Me);if(xr===null){et===null&&(et=Ln);break}t&&et&&xr.alternate===null&&i(ne,et),Z=m(xr,Z,at),Ct===null?je=xr:Ct.sibling=xr,Ct=xr,et=Ln}if(It.done)return s(ne,et),Bt&&Br(ne,at),je;if(et===null){for(;!It.done;at++,It=ae.next())It=Ee(ne,It.value,Me),It!==null&&(Z=m(It,Z,at),Ct===null?je=It:Ct.sibling=It,Ct=It);return Bt&&Br(ne,at),je}for(et=l(et);!It.done;at++,It=ae.next())It=he(et,ne,at,It.value,Me),It!==null&&(t&&It.alternate!==null&&et.delete(It.key===null?at:It.key),Z=m(It,Z,at),Ct===null?je=It:Ct.sibling=It,Ct=It);return t&&et.forEach(function(m1){return i(ne,m1)}),Bt&&Br(ne,at),je}function Jt(ne,Z,ae,Me){if(typeof ae=="object"&&ae!==null&&ae.type===M&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case v:e:{for(var je=ae.key;Z!==null;){if(Z.key===je){if(je=ae.type,je===M){if(Z.tag===7){s(ne,Z.sibling),Me=f(Z,ae.props.children),Me.return=ne,ne=Me;break e}}else if(Z.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===b&&pv(je)===Z.type){s(ne,Z.sibling),Me=f(Z,ae.props),nl(Me,ae),Me.return=ne,ne=Me;break e}s(ne,Z);break}else i(ne,Z);Z=Z.sibling}ae.type===M?(Me=Ir(ae.props.children,ne.mode,Me,ae.key),Me.return=ne,ne=Me):(Me=mc(ae.type,ae.key,ae.props,null,ne.mode,Me),nl(Me,ae),Me.return=ne,ne=Me)}return E(ne);case S:e:{for(je=ae.key;Z!==null;){if(Z.key===je)if(Z.tag===4&&Z.stateNode.containerInfo===ae.containerInfo&&Z.stateNode.implementation===ae.implementation){s(ne,Z.sibling),Me=f(Z,ae.children||[]),Me.return=ne,ne=Me;break e}else{s(ne,Z);break}else i(ne,Z);Z=Z.sibling}Me=$f(ae,ne.mode,Me),Me.return=ne,ne=Me}return E(ne);case b:return je=ae._init,ae=je(ae._payload),Jt(ne,Z,ae,Me)}if(k(ae))return ut(ne,Z,ae,Me);if(V(ae)){if(je=V(ae),typeof je!="function")throw Error(r(150));return ae=je.call(ae),it(ne,Z,ae,Me)}if(typeof ae.then=="function")return Jt(ne,Z,Uc(ae),Me);if(ae.$$typeof===P)return Jt(ne,Z,xc(ne,ae),Me);Lc(ne,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,Z!==null&&Z.tag===6?(s(ne,Z.sibling),Me=f(Z,ae),Me.return=ne,ne=Me):(s(ne,Z),Me=Kf(ae,ne.mode,Me),Me.return=ne,ne=Me),E(ne)):s(ne,Z)}return function(ne,Z,ae,Me){try{tl=0;var je=Jt(ne,Z,ae,Me);return Us=null,je}catch(et){if(et===qo||et===Sc)throw et;var Ct=hi(29,et,null,ne.mode);return Ct.lanes=Me,Ct.return=ne,Ct}finally{}}}var Ls=mv(!0),gv=mv(!1),wi=K(null),ia=null;function ar(t){var i=t.alternate;_e(Cn,Cn.current&1),_e(wi,t),ia===null&&(i===null||Rs.current!==null||i.memoizedState!==null)&&(ia=t)}function vv(t){if(t.tag===22){if(_e(Cn,Cn.current),_e(wi,t),ia===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(ia=t)}}else rr()}function rr(){_e(Cn,Cn.current),_e(wi,wi.current)}function wa(t){se(wi),ia===t&&(ia=null),se(Cn)}var Cn=K(0);function Oc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||xh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Dd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Nd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=vi(),f=tr(l);f.payload=i,s!=null&&(f.callback=s),i=nr(t,f,l),i!==null&&(_i(i,t,l),jo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=vi(),f=tr(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=nr(t,f,l),i!==null&&(_i(i,t,l),jo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=vi(),l=tr(s);l.tag=2,i!=null&&(l.callback=i),i=nr(t,l,s),i!==null&&(_i(i,t,s),jo(i,t,s))}};function _v(t,i,s,l,f,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!Bo(s,l)||!Bo(f,m):!0}function xv(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Nd.enqueueReplaceState(i,i.state,null)}function Wr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var Pc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function yv(t){Pc(t)}function Sv(t){console.error(t)}function Mv(t){Pc(t)}function Ic(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function bv(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ud(t,i,s){return s=tr(s),s.tag=3,s.payload={element:null},s.callback=function(){Ic(t,i)},s}function Ev(t){return t=tr(t),t.tag=3,t}function Tv(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){bv(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){bv(i,s,l),typeof f!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function mE(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&ko(i,s,f,!0),s=wi.current,s!==null){switch(s.tag){case 13:return ia===null?nh():s.alternate===null&&mn===0&&(mn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===od?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),ah(t,l,f)),!1;case 22:return s.flags|=65536,l===od?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),ah(t,l,f)),!1}throw Error(r(435,s.tag))}return ah(t,l,f),nh(),!1}if(Bt)return i=wi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==ed&&(t=Error(r(422),{cause:l}),Vo(Ti(t,s)))):(l!==ed&&(i=Error(r(423),{cause:l}),Vo(Ti(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ti(l,s),f=Ud(t.stateNode,l,f),ud(t,f),mn!==4&&(mn=2)),!1;var m=Error(r(520),{cause:l});if(m=Ti(m,s),cl===null?cl=[m]:cl.push(m),mn!==4&&(mn=2),i===null)return!0;l=Ti(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Ud(s.stateNode,l,t),ud(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fr===null||!fr.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Ev(f),Tv(f,t,s,l),ud(s,f),!1}s=s.return}while(s!==null);return!1}var Av=Error(r(461)),Nn=!1;function Bn(t,i,s,l){i.child=t===null?gv(i,null,s,l):Ls(i,t.child,s,l)}function Cv(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var D in l)D!=="ref"&&(E[D]=l[D])}else E=l;return Vr(i),l=md(t,i,s,E,m,f),D=gd(),t!==null&&!Nn?(vd(t,i,f),Da(t,i,f)):(Bt&&D&&Qf(i),i.flags|=1,Bn(t,i,l,f),i.child)}function Rv(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!Zf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,wv(t,i,m,l,f)):(t=mc(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Hd(t,f)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:Bo,s(E,l)&&t.ref===i.ref)return Da(t,i,f)}return i.flags|=1,t=ba(m,l),t.ref=i.ref,t.return=i,i.child=t}function wv(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(Bo(m,l)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=l=m,Hd(t,f))(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Da(t,i,f)}return Ld(t,i,s,l,f)}function Dv(t,i,s){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Nv(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&yc(i,m!==null?m.cachePool:null),m!==null?wg(i,m):dd(),vv(i);else return i.lanes=i.childLanes=536870912,Nv(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(yc(i,m.cachePool),wg(i,m),rr(),i.memoizedState=null):(t!==null&&yc(i,null),dd(),rr());return Bn(t,i,f,s),i.child}function Nv(t,i,s,l){var f=sd();return f=f===null?null:{parent:An._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&yc(i,null),dd(),vv(i),t!==null&&ko(t,i,l,!0),null}function Fc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Ld(t,i,s,l,f){return Vr(i),s=md(t,i,s,l,void 0,f),l=gd(),t!==null&&!Nn?(vd(t,i,f),Da(t,i,f)):(Bt&&l&&Qf(i),i.flags|=1,Bn(t,i,s,f),i.child)}function Uv(t,i,s,l,f,m){return Vr(i),i.updateQueue=null,s=Ng(i,l,s,f),Dg(t),l=gd(),t!==null&&!Nn?(vd(t,i,m),Da(t,i,m)):(Bt&&l&&Qf(i),i.flags|=1,Bn(t,i,s,m),i.child)}function Lv(t,i,s,l,f){if(Vr(i),i.stateNode===null){var m=bs,E=s.contextType;typeof E=="object"&&E!==null&&(m=kn(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Nd,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},ld(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?kn(E):bs,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Dd(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Nd.enqueueReplaceState(m,m.state,null),Ko(i,l,m,f),Zo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var D=i.memoizedProps,X=Wr(s,D);m.props=X;var oe=m.context,Se=s.contextType;E=bs,typeof Se=="object"&&Se!==null&&(E=kn(Se));var Ee=s.getDerivedStateFromProps;Se=typeof Ee=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,Se||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||oe!==E)&&xv(i,m,l,E),er=!1;var ue=i.memoizedState;m.state=ue,Ko(i,l,m,f),Zo(),oe=i.memoizedState,D||ue!==oe||er?(typeof Ee=="function"&&(Dd(i,s,Ee,l),oe=i.memoizedState),(X=er||_v(i,s,X,l,ue,oe,E))?(Se||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=oe),m.props=l,m.state=oe,m.context=E,l=X):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,cd(t,i),E=i.memoizedProps,Se=Wr(s,E),m.props=Se,Ee=i.pendingProps,ue=m.context,oe=s.contextType,X=bs,typeof oe=="object"&&oe!==null&&(X=kn(oe)),D=s.getDerivedStateFromProps,(oe=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Ee||ue!==X)&&xv(i,m,l,X),er=!1,ue=i.memoizedState,m.state=ue,Ko(i,l,m,f),Zo();var he=i.memoizedState;E!==Ee||ue!==he||er||t!==null&&t.dependencies!==null&&_c(t.dependencies)?(typeof D=="function"&&(Dd(i,s,D,l),he=i.memoizedState),(Se=er||_v(i,s,Se,l,ue,he,X)||t!==null&&t.dependencies!==null&&_c(t.dependencies))?(oe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,he,X),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,he,X)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&ue===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ue===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=he),m.props=l,m.state=he,m.context=X,l=Se):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&ue===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ue===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,Fc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=Ls(i,t.child,null,f),i.child=Ls(i,null,s,f)):Bn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=Da(t,i,f),t}function Ov(t,i,s,l){return Go(),i.flags|=256,Bn(t,i,s,l),i.child}var Od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pd(t){return{baseLanes:t,cachePool:Sg()}}function Id(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Di),t}function Pv(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Bt){if(f?ar(i):rr(),Bt){var D=pn,X;if(X=D){e:{for(X=D,D=na;X.nodeType!==8;){if(!D){D=null;break e}if(X=Xi(X.nextSibling),X===null){D=null;break e}}D=X}D!==null?(i.memoizedState={dehydrated:D,treeContext:Fr!==null?{id:Ea,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},X=hi(18,null,null,0),X.stateNode=D,X.return=i,i.child=X,Qn=i,pn=null,X=!0):X=!1}X||Hr(i)}if(D=i.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return xh(D)?i.lanes=32:i.lanes=536870912,null;wa(i)}return D=l.children,l=l.fallback,f?(rr(),f=i.mode,D=Bc({mode:"hidden",children:D},f),l=Ir(l,f,s,null),D.return=i,l.return=i,D.sibling=l,i.child=D,f=i.child,f.memoizedState=Pd(s),f.childLanes=Id(t,E,s),i.memoizedState=Od,l):(ar(i),Fd(i,D))}if(X=t.memoizedState,X!==null&&(D=X.dehydrated,D!==null)){if(m)i.flags&256?(ar(i),i.flags&=-257,i=Bd(t,i,s)):i.memoizedState!==null?(rr(),i.child=t.child,i.flags|=128,i=null):(rr(),f=l.fallback,D=i.mode,l=Bc({mode:"visible",children:l.children},D),f=Ir(f,D,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,Ls(i,t.child,null,s),l=i.child,l.memoizedState=Pd(s),l.childLanes=Id(t,E,s),i.memoizedState=Od,i=f);else if(ar(i),xh(D)){if(E=D.nextSibling&&D.nextSibling.dataset,E)var oe=E.dgst;E=oe,l=Error(r(419)),l.stack="",l.digest=E,Vo({value:l,source:null,stack:null}),i=Bd(t,i,s)}else if(Nn||ko(t,i,s,!1),E=(s&t.childLanes)!==0,Nn||E){if(E=an,E!==null&&(l=s&-s,l=(l&42)!==0?1:Pe(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==X.retryLane))throw X.retryLane=l,Ms(t,l),_i(E,t,l),Av;D.data==="$?"||nh(),i=Bd(t,i,s)}else D.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=X.treeContext,pn=Xi(D.nextSibling),Qn=i,Bt=!0,zr=null,na=!1,t!==null&&(Ci[Ri++]=Ea,Ci[Ri++]=Ta,Ci[Ri++]=Fr,Ea=t.id,Ta=t.overflow,Fr=i),i=Fd(i,l.children),i.flags|=4096);return i}return f?(rr(),f=l.fallback,D=i.mode,X=t.child,oe=X.sibling,l=ba(X,{mode:"hidden",children:l.children}),l.subtreeFlags=X.subtreeFlags&65011712,oe!==null?f=ba(oe,f):(f=Ir(f,D,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,D=t.child.memoizedState,D===null?D=Pd(s):(X=D.cachePool,X!==null?(oe=An._currentValue,X=X.parent!==oe?{parent:oe,pool:oe}:X):X=Sg(),D={baseLanes:D.baseLanes|s,cachePool:X}),f.memoizedState=D,f.childLanes=Id(t,E,s),i.memoizedState=Od,l):(ar(i),s=t.child,t=s.sibling,s=ba(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function Fd(t,i){return i=Bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Bc(t,i){return t=hi(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Bd(t,i,s){return Ls(i,t.child,null,s),t=Fd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Iv(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),nd(t.return,i,s)}function zd(t,i,s,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function Fv(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Bn(t,i,l.children,s),l=Cn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iv(t,s,i);else if(t.tag===19)Iv(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(_e(Cn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Oc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),zd(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Oc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}zd(i,!0,s,null,m);break;case"together":zd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Da(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ur|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(ko(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ba(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ba(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Hd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&_c(t)))}function gE(t,i,s){switch(i.tag){case 3:ve(i,i.stateNode.containerInfo),Ja(i,An,t.memoizedState.cache),Go();break;case 27:case 5:$e(i);break;case 4:ve(i,i.stateNode.containerInfo);break;case 10:Ja(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ar(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Pv(t,i,s):(ar(i),t=Da(t,i,s),t!==null?t.sibling:null);ar(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(ko(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Fv(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),_e(Cn,Cn.current),l)break;return null;case 22:case 23:return i.lanes=0,Dv(t,i,s);case 24:Ja(i,An,t.memoizedState.cache)}return Da(t,i,s)}function Bv(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Nn=!0;else{if(!Hd(t,s)&&(i.flags&128)===0)return Nn=!1,gE(t,i,s);Nn=(t.flags&131072)!==0}else Nn=!1,Bt&&(i.flags&1048576)!==0&&pg(i,vc,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Zf(l)?(t=Wr(l,t),i.tag=1,i=Lv(null,i,l,t,s)):(i.tag=0,i=Ld(null,i,l,t,s));else{if(l!=null){if(f=l.$$typeof,f===C){i.tag=11,i=Cv(null,i,l,t,s);break e}else if(f===O){i.tag=14,i=Rv(null,i,l,t,s);break e}}throw i=$(l)||l,Error(r(306,i,""))}}return i;case 0:return Ld(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Wr(l,i.pendingProps),Lv(t,i,l,f,s);case 3:e:{if(ve(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,cd(t,i),Ko(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Ja(i,An,l),l!==m.cache&&id(i,[An],s,!0),Zo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Ov(t,i,l,s);break e}else if(l!==f){f=Ti(Error(r(424)),i),Vo(f),i=Ov(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pn=Xi(t.firstChild),Qn=i,Bt=!0,zr=null,na=!0,s=gv(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Go(),l===f){i=Da(t,i,s);break e}Bn(t,i,l,s)}i=i.child}return i;case 26:return Fc(t,i),t===null?(s=V_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Bt||(s=i.type,t=i.pendingProps,l=Qc(ee.current).createElement(s),l[dt]=i,l[en]=t,Hn(l,s,t),on(l),i.stateNode=l):i.memoizedState=V_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return $e(i),t===null&&Bt&&(l=i.stateNode=z_(i.type,i.pendingProps,ee.current),Qn=i,na=!0,f=pn,pr(i.type)?(yh=f,pn=Xi(l.firstChild)):pn=f),Bn(t,i,i.pendingProps.children,s),Fc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Bt&&((f=l=pn)&&(l=XE(l,i.type,i.pendingProps,na),l!==null?(i.stateNode=l,Qn=i,pn=Xi(l.firstChild),na=!1,f=!0):f=!1),f||Hr(i)),$e(i),f=i.type,m=i.pendingProps,E=t!==null?t.memoizedProps:null,l=m.children,gh(f,m)?l=null:E!==null&&gh(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=md(t,i,lE,null,null,s),_l._currentValue=f),Fc(t,i),Bn(t,i,l,s),i.child;case 6:return t===null&&Bt&&((t=s=pn)&&(s=WE(s,i.pendingProps,na),s!==null?(i.stateNode=s,Qn=i,pn=null,t=!0):t=!1),t||Hr(i)),null;case 13:return Pv(t,i,s);case 4:return ve(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ls(i,null,l,s):Bn(t,i,l,s),i.child;case 11:return Cv(t,i,i.type,i.pendingProps,s);case 7:return Bn(t,i,i.pendingProps,s),i.child;case 8:return Bn(t,i,i.pendingProps.children,s),i.child;case 12:return Bn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ja(i,i.type,l.value),Bn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Vr(i),f=kn(f),l=l(f),i.flags|=1,Bn(t,i,l,s),i.child;case 14:return Rv(t,i,i.type,i.pendingProps,s);case 15:return wv(t,i,i.type,i.pendingProps,s);case 19:return Fv(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=Bc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ba(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Dv(t,i,s);case 24:return Vr(i),l=kn(An),t===null?(f=sd(),f===null&&(f=an,m=ad(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},ld(i),Ja(i,An,f)):((t.lanes&s)!==0&&(cd(t,i),Ko(i,null,null,s),Zo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ja(i,An,l)):(l=m.cache,Ja(i,An,l),l!==f.cache&&id(i,[An],s,!0))),Bn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Na(t){t.flags|=4}function zv(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y_(i)){if(i=wi.current,i!==null&&((Ot&4194048)===Ot?ia!==null:(Ot&62914560)!==Ot&&(Ot&536870912)===0||i!==ia))throw Yo=od,Mg;t.flags|=8192}}function zc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?tt():536870912,t.lanes|=i,Fs|=i)}function il(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function vE(t,i,s){var l=i.pendingProps;switch(Jf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return dn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ca(An),ke(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ho(i)?Na(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vg())),dn(i),null;case 26:return s=i.memoizedState,t===null?(Na(i),s!==null?(dn(i),zv(i,s)):(dn(i),i.flags&=-16777217)):s?s!==t.memoizedState?(Na(i),dn(i),zv(i,s)):(dn(i),i.flags&=-16777217):(t.memoizedProps!==l&&Na(i),dn(i),i.flags&=-16777217),null;case 27:qe(i),s=ee.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Na(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return dn(i),null}t=Ce.current,Ho(i)?mg(i):(t=z_(f,l,s),i.stateNode=t,Na(i))}return dn(i),null;case 5:if(qe(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Na(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return dn(i),null}if(t=Ce.current,Ho(i))mg(i);else{switch(f=Qc(ee.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}t[dt]=i,t[en]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(Hn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Na(i)}}return dn(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Na(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=ee.current,Ho(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Qn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[dt]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||U_(t.nodeValue,s)),t||Hr(i)}else t=Qc(t).createTextNode(l),t[dt]=i,i.stateNode=t}return dn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Ho(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[dt]=i}else Go(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),f=!1}else f=vg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(wa(i),i):(wa(i),null)}if(wa(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),zc(i,i.updateQueue),dn(i),null;case 4:return ke(),t===null&&fh(i.stateNode.containerInfo),dn(i),null;case 10:return Ca(i.type),dn(i),null;case 19:if(se(Cn),f=i.memoizedState,f===null)return dn(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)il(f,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Oc(t),m!==null){for(i.flags|=128,il(f,!1),t=m.updateQueue,i.updateQueue=t,zc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)hg(s,t),s=s.sibling;return _e(Cn,Cn.current&1|2),i.child}t=t.sibling}f.tail!==null&&Et()>Vc&&(i.flags|=128,l=!0,il(f,!1),i.lanes=4194304)}else{if(!l)if(t=Oc(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,zc(i,t),il(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Bt)return dn(i),null}else 2*Et()-f.renderingStartTime>Vc&&s!==536870912&&(i.flags|=128,l=!0,il(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Et(),i.sibling=null,t=Cn.current,_e(Cn,l?t&1|2:t&1),i):(dn(i),null);case 22:case 23:return wa(i),hd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),s=i.updateQueue,s!==null&&zc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&se(kr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ca(An),dn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function _E(t,i){switch(Jf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ca(An),ke(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return qe(i),null;case 13:if(wa(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Go()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return se(Cn),null;case 4:return ke(),null;case 10:return Ca(i.type),null;case 22:case 23:return wa(i),hd(),t!==null&&se(kr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ca(An),null;case 25:return null;default:return null}}function Hv(t,i){switch(Jf(i),i.tag){case 3:Ca(An),ke();break;case 26:case 27:case 5:qe(i);break;case 4:ke();break;case 13:wa(i);break;case 19:se(Cn);break;case 10:Ca(i.type);break;case 22:case 23:wa(i),hd(),t!==null&&se(kr);break;case 24:Ca(An)}}function al(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==f)}}catch(D){tn(i,i.return,D)}}function sr(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var E=l.inst,D=E.destroy;if(D!==void 0){E.destroy=void 0,f=i;var X=s,oe=D;try{oe()}catch(Se){tn(f,X,Se)}}}l=l.next}while(l!==m)}}catch(Se){tn(i,i.return,Se)}}function Gv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Rg(i,s)}catch(l){tn(t,t.return,l)}}}function Vv(t,i,s){s.props=Wr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){tn(t,i,l)}}function rl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){tn(t,i,f)}}function aa(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){tn(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){tn(t,i,f)}else s.current=null}function kv(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){tn(t,t.return,f)}}function Gd(t,i,s){try{var l=t.stateNode;zE(l,t.type,s,i),l[en]=i}catch(f){tn(t,t.return,f)}}function Xv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&pr(t.type)||t.tag===4}function Vd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&pr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=$c));else if(l!==4&&(l===27&&pr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(kd(t,i,s),t=t.sibling;t!==null;)kd(t,i,s),t=t.sibling}function Hc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&pr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Hc(t,i,s),t=t.sibling;t!==null;)Hc(t,i,s),t=t.sibling}function Wv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Hn(i,l,s),i[dt]=t,i[en]=s}catch(m){tn(t,t.return,m)}}var Ua=!1,_n=!1,Xd=!1,qv=typeof WeakSet=="function"?WeakSet:Set,Un=null;function xE(t,i){if(t=t.containerInfo,ph=au,t=ig(t),Vf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,D=-1,X=-1,oe=0,Se=0,Ee=t,ue=null;t:for(;;){for(var he;Ee!==s||f!==0&&Ee.nodeType!==3||(D=E+f),Ee!==m||l!==0&&Ee.nodeType!==3||(X=E+l),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(he=Ee.firstChild)!==null;)ue=Ee,Ee=he;for(;;){if(Ee===t)break t;if(ue===s&&++oe===f&&(D=E),ue===m&&++Se===l&&(X=E),(he=Ee.nextSibling)!==null)break;Ee=ue,ue=Ee.parentNode}Ee=he}s=D===-1||X===-1?null:{start:D,end:X}}else s=null}s=s||{start:0,end:0}}else s=null;for(mh={focusedElem:t,selectionRange:s},au=!1,Un=i;Un!==null;)if(i=Un,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Un=t;else for(;Un!==null;){switch(i=Un,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ut=Wr(s.type,f,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(ut,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(it){tn(s,s.return,it)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)_h(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":_h(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Un=t;break}Un=i.return}}function Yv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:or(t,s),l&4&&al(5,s);break;case 1:if(or(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){tn(s,s.return,E)}else{var f=Wr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){tn(s,s.return,E)}}l&64&&Gv(s),l&512&&rl(s,s.return);break;case 3:if(or(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Rg(t,i)}catch(E){tn(s,s.return,E)}}break;case 27:i===null&&l&4&&Wv(s);case 26:case 5:or(t,s),i===null&&l&4&&kv(s),l&512&&rl(s,s.return);break;case 12:or(t,s);break;case 13:or(t,s),l&4&&Kv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=RE.bind(null,s),qE(t,s))));break;case 22:if(l=s.memoizedState!==null||Ua,!l){i=i!==null&&i.memoizedState!==null||_n,f=Ua;var m=_n;Ua=l,(_n=i)&&!m?lr(t,s,(s.subtreeFlags&8772)!==0):or(t,s),Ua=f,_n=m}break;case 30:break;default:or(t,s)}}function jv(t){var i=t.alternate;i!==null&&(t.alternate=null,jv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&In(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,oi=!1;function La(t,i,s){for(s=s.child;s!==null;)Zv(t,i,s),s=s.sibling}function Zv(t,i,s){if(T&&typeof T.onCommitFiberUnmount=="function")try{T.onCommitFiberUnmount(B,s)}catch{}switch(s.tag){case 26:_n||aa(s,i),La(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:_n||aa(s,i);var l=un,f=oi;pr(s.type)&&(un=s.stateNode,oi=!1),La(t,i,s),pl(s.stateNode),un=l,oi=f;break;case 5:_n||aa(s,i);case 6:if(l=un,f=oi,un=null,La(t,i,s),un=l,oi=f,un!==null)if(oi)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(s.stateNode)}catch(m){tn(s,i,m)}else try{un.removeChild(s.stateNode)}catch(m){tn(s,i,m)}break;case 18:un!==null&&(oi?(t=un,F_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Ml(t)):F_(un,s.stateNode));break;case 4:l=un,f=oi,un=s.stateNode.containerInfo,oi=!0,La(t,i,s),un=l,oi=f;break;case 0:case 11:case 14:case 15:_n||sr(2,s,i),_n||sr(4,s,i),La(t,i,s);break;case 1:_n||(aa(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Vv(s,i,l)),La(t,i,s);break;case 21:La(t,i,s);break;case 22:_n=(l=_n)||s.memoizedState!==null,La(t,i,s),_n=l;break;default:La(t,i,s)}}function Kv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ml(t)}catch(s){tn(i,i.return,s)}}function yE(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new qv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new qv),i;default:throw Error(r(435,t.tag))}}function Wd(t,i){var s=yE(t);i.forEach(function(l){var f=wE.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}function pi(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 27:if(pr(D.type)){un=D.stateNode,oi=!1;break e}break;case 5:un=D.stateNode,oi=!1;break e;case 3:case 4:un=D.stateNode.containerInfo,oi=!0;break e}D=D.return}if(un===null)throw Error(r(160));Zv(m,E,f),un=null,oi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)$v(i,t),i=i.sibling}var ki=null;function $v(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pi(i,t),mi(t),l&4&&(sr(3,t,t.return),al(3,t),sr(5,t,t.return));break;case 1:pi(i,t),mi(t),l&512&&(_n||s===null||aa(s,s.return)),l&64&&Ua&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=ki;if(pi(i,t),mi(t),l&512&&(_n||s===null||aa(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Dn]||m[dt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Hn(m,l,s),m[dt]=t,on(m),l=m;break e;case"link":var E=W_("link","href",f).get(l+(s.href||""));if(E){for(var D=0;D<E.length;D++)if(m=E[D],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(D,1);break t}}m=f.createElement(l),Hn(m,l,s),f.head.appendChild(m);break;case"meta":if(E=W_("meta","content",f).get(l+(s.content||""))){for(D=0;D<E.length;D++)if(m=E[D],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(D,1);break t}}m=f.createElement(l),Hn(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[dt]=t,on(m),l=m}t.stateNode=l}else q_(f,t.type,t.stateNode);else t.stateNode=X_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?q_(f,t.type,t.stateNode):X_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Gd(t,t.memoizedProps,s.memoizedProps)}break;case 27:pi(i,t),mi(t),l&512&&(_n||s===null||aa(s,s.return)),s!==null&&l&4&&Gd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(pi(i,t),mi(t),l&512&&(_n||s===null||aa(s,s.return)),t.flags&32){f=t.stateNode;try{$n(f,"")}catch(he){tn(t,t.return,he)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Gd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Xd=!0);break;case 6:if(pi(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(he){tn(t,t.return,he)}}break;case 3:if(tu=null,f=ki,ki=Jc(i.containerInfo),pi(i,t),ki=f,mi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ml(i.containerInfo)}catch(he){tn(t,t.return,he)}Xd&&(Xd=!1,Qv(t));break;case 4:l=ki,ki=Jc(t.stateNode.containerInfo),pi(i,t),mi(t),ki=l;break;case 12:pi(i,t),mi(t);break;case 13:pi(i,t),mi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($d=Et()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wd(t,l)));break;case 22:f=t.memoizedState!==null;var X=s!==null&&s.memoizedState!==null,oe=Ua,Se=_n;if(Ua=oe||f,_n=Se||X,pi(i,t),_n=Se,Ua=oe,mi(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||X||Ua||_n||qr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){X=s=i;try{if(m=X.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{D=X.stateNode;var Ee=X.memoizedProps.style,ue=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;D.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(he){tn(X,X.return,he)}}}else if(i.tag===6){if(s===null){X=i;try{X.stateNode.nodeValue=f?"":X.memoizedProps}catch(he){tn(X,X.return,he)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Wd(t,s))));break;case 19:pi(i,t),mi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wd(t,l)));break;case 30:break;case 21:break;default:pi(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Xv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=Vd(t);Hc(t,m,f);break;case 5:var E=s.stateNode;s.flags&32&&($n(E,""),s.flags&=-33);var D=Vd(t);Hc(t,D,E);break;case 3:case 4:var X=s.stateNode.containerInfo,oe=Vd(t);kd(t,oe,X);break;default:throw Error(r(161))}}catch(Se){tn(t,t.return,Se)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Qv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Qv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function or(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Yv(t,i.alternate,i),i=i.sibling}function qr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:sr(4,i,i.return),qr(i);break;case 1:aa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Vv(i,i.return,s),qr(i);break;case 27:pl(i.stateNode);case 26:case 5:aa(i,i.return),qr(i);break;case 22:i.memoizedState===null&&qr(i);break;case 30:qr(i);break;default:qr(i)}t=t.sibling}}function lr(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:lr(f,m,s),al(4,m);break;case 1:if(lr(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){tn(l,l.return,oe)}if(l=m,f=l.updateQueue,f!==null){var D=l.stateNode;try{var X=f.shared.hiddenCallbacks;if(X!==null)for(f.shared.hiddenCallbacks=null,f=0;f<X.length;f++)Cg(X[f],D)}catch(oe){tn(l,l.return,oe)}}s&&E&64&&Gv(m),rl(m,m.return);break;case 27:Wv(m);case 26:case 5:lr(f,m,s),s&&l===null&&E&4&&kv(m),rl(m,m.return);break;case 12:lr(f,m,s);break;case 13:lr(f,m,s),s&&E&4&&Kv(f,m);break;case 22:m.memoizedState===null&&lr(f,m,s),rl(m,m.return);break;case 30:break;default:lr(f,m,s)}i=i.sibling}}function qd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Xo(s))}function Yd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Xo(t))}function ra(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Jv(t,i,s,l),i=i.sibling}function Jv(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:ra(t,i,s,l),f&2048&&al(9,i);break;case 1:ra(t,i,s,l);break;case 3:ra(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Xo(t)));break;case 12:if(f&2048){ra(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,E=m.id,D=m.onPostCommit;typeof D=="function"&&D(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(X){tn(i,i.return,X)}}else ra(t,i,s,l);break;case 13:ra(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?ra(t,i,s,l):sl(t,i):m._visibility&2?ra(t,i,s,l):(m._visibility|=2,Os(t,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&qd(E,i);break;case 24:ra(t,i,s,l),f&2048&&Yd(i.alternate,i);break;default:ra(t,i,s,l)}}function Os(t,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,E=i,D=s,X=l,oe=E.flags;switch(E.tag){case 0:case 11:case 15:Os(m,E,D,X,f),al(8,E);break;case 23:break;case 22:var Se=E.stateNode;E.memoizedState!==null?Se._visibility&2?Os(m,E,D,X,f):sl(m,E):(Se._visibility|=2,Os(m,E,D,X,f)),f&&oe&2048&&qd(E.alternate,E);break;case 24:Os(m,E,D,X,f),f&&oe&2048&&Yd(E.alternate,E);break;default:Os(m,E,D,X,f)}i=i.sibling}}function sl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:sl(s,l),f&2048&&qd(l.alternate,l);break;case 24:sl(s,l),f&2048&&Yd(l.alternate,l);break;default:sl(s,l)}i=i.sibling}}var ol=8192;function Ps(t){if(t.subtreeFlags&ol)for(t=t.child;t!==null;)e_(t),t=t.sibling}function e_(t){switch(t.tag){case 26:Ps(t),t.flags&ol&&t.memoizedState!==null&&r1(ki,t.memoizedState,t.memoizedProps);break;case 5:Ps(t);break;case 3:case 4:var i=ki;ki=Jc(t.stateNode.containerInfo),Ps(t),ki=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ol,ol=16777216,Ps(t),ol=i):Ps(t));break;default:Ps(t)}}function t_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ll(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Un=l,i_(l,t)}t_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n_(t),t=t.sibling}function n_(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&sr(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Gc(t)):ll(t);break;default:ll(t)}}function Gc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Un=l,i_(l,t)}t_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:sr(8,i,i.return),Gc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Gc(i));break;default:Gc(i)}t=t.sibling}}function i_(t,i){for(;Un!==null;){var s=Un;switch(s.tag){case 0:case 11:case 15:sr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Un=l;else e:for(s=t;Un!==null;){l=Un;var f=l.sibling,m=l.return;if(jv(l),l===s){Un=null;break e}if(f!==null){f.return=m,Un=f;break e}Un=m}}}var SE={getCacheForType:function(t){var i=kn(An),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},ME=typeof WeakMap=="function"?WeakMap:Map,qt=0,an=null,Rt=null,Ot=0,Yt=0,gi=null,cr=!1,Is=!1,jd=!1,Oa=0,mn=0,ur=0,Yr=0,Zd=0,Di=0,Fs=0,cl=null,li=null,Kd=!1,$d=0,Vc=1/0,kc=null,fr=null,zn=0,dr=null,Bs=null,zs=0,Qd=0,Jd=null,a_=null,ul=0,eh=null;function vi(){if((qt&2)!==0&&Ot!==0)return Ot&-Ot;if(I.T!==null){var t=As;return t!==0?t:oh()}return We()}function r_(){Di===0&&(Di=(Ot&536870912)===0||Bt?Je():536870912);var t=wi.current;return t!==null&&(t.flags|=32),Di}function _i(t,i,s){(t===an&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(Hs(t,0),hr(t,Ot,Di,!1)),j(t,s),((qt&2)===0||t!==an)&&(t===an&&((qt&2)===0&&(Yr|=s),mn===4&&hr(t,Ot,Di,!1)),sa(t))}function s_(t,i,s){if((qt&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Ne(t,i),f=l?TE(t,i):ih(t,i,!0),m=l;do{if(f===0){Is&&!l&&hr(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!bE(s)){f=ih(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var D=t;f=cl;var X=D.current.memoizedState.isDehydrated;if(X&&(Hs(D,E).flags|=256),E=ih(D,E,!1),E!==2){if(jd&&!X){D.errorRecoveryDisabledLanes|=m,Yr|=m,f=4;break e}m=li,li=f,m!==null&&(li===null?li=m:li.push.apply(li,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Hs(t,0),hr(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:hr(l,i,Di,!cr);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=$d+300-Et(),10<f)){if(hr(l,i,Di,!cr),Ye(l,0,!0)!==0)break e;l.timeoutHandle=P_(o_.bind(null,l,s,li,kc,Kd,i,Di,Yr,Fs,cr,m,2,-0,0),f);break e}o_(l,s,li,kc,Kd,i,Di,Yr,Fs,cr,m,0,-0,0)}}break}while(!0);sa(t)}function o_(t,i,s,l,f,m,E,D,X,oe,Se,Ee,ue,he){if(t.timeoutHandle=-1,Ee=i.subtreeFlags,(Ee&8192||(Ee&16785408)===16785408)&&(vl={stylesheets:null,count:0,unsuspend:a1},e_(i),Ee=s1(),Ee!==null)){t.cancelPendingCommit=Ee(p_.bind(null,t,i,m,s,l,f,E,D,X,Se,1,ue,he)),hr(t,m,E,!oe);return}p_(t,i,m,s,l,f,E,D,X)}function bE(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!di(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(t,i,s,l){i&=~Zd,i&=~Yr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-ie(f),E=1<<m;l[m]=-1,f&=~E}s!==0&&ye(t,s,i)}function Xc(){return(qt&6)===0?(fl(0),!1):!0}function th(){if(Rt!==null){if(Yt===0)var t=Rt.return;else t=Rt,Aa=Gr=null,_d(t),Us=null,tl=0,t=Rt;for(;t!==null;)Hv(t.alternate,t),t=t.return;Rt=null}}function Hs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,GE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),th(),an=t,Rt=s=ba(t.current,null),Ot=i,Yt=0,gi=null,cr=!1,Is=Ne(t,i),jd=!1,Fs=Di=Zd=Yr=ur=mn=0,li=cl=null,Kd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-ie(l),m=1<<f;i|=t[f],l&=~m}return Oa=i,dc(),s}function l_(t,i){Tt=null,I.H=Nc,i===qo||i===Sc?(i=Tg(),Yt=3):i===Mg?(i=Tg(),Yt=4):Yt=i===Av?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gi=i,Rt===null&&(mn=1,Ic(t,Ti(i,t.current)))}function c_(){var t=I.H;return I.H=Nc,t===null?Nc:t}function u_(){var t=I.A;return I.A=SE,t}function nh(){mn=4,cr||(Ot&4194048)!==Ot&&wi.current!==null||(Is=!0),(ur&134217727)===0&&(Yr&134217727)===0||an===null||hr(an,Ot,Di,!1)}function ih(t,i,s){var l=qt;qt|=2;var f=c_(),m=u_();(an!==t||Ot!==i)&&(kc=null,Hs(t,i)),i=!1;var E=mn;e:do try{if(Yt!==0&&Rt!==null){var D=Rt,X=gi;switch(Yt){case 8:th(),E=6;break e;case 3:case 2:case 9:case 6:wi.current===null&&(i=!0);var oe=Yt;if(Yt=0,gi=null,Gs(t,D,X,oe),s&&Is){E=0;break e}break;default:oe=Yt,Yt=0,gi=null,Gs(t,D,X,oe)}}EE(),E=mn;break}catch(Se){l_(t,Se)}while(!0);return i&&t.shellSuspendCounter++,Aa=Gr=null,qt=l,I.H=f,I.A=m,Rt===null&&(an=null,Ot=0,dc()),E}function EE(){for(;Rt!==null;)f_(Rt)}function TE(t,i){var s=qt;qt|=2;var l=c_(),f=u_();an!==t||Ot!==i?(kc=null,Vc=Et()+500,Hs(t,i)):Is=Ne(t,i);e:do try{if(Yt!==0&&Rt!==null){i=Rt;var m=gi;t:switch(Yt){case 1:Yt=0,gi=null,Gs(t,i,m,1);break;case 2:case 9:if(bg(m)){Yt=0,gi=null,d_(i);break}i=function(){Yt!==2&&Yt!==9||an!==t||(Yt=7),sa(t)},m.then(i,i);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:bg(m)?(Yt=0,gi=null,d_(i)):(Yt=0,gi=null,Gs(t,i,m,7));break;case 5:var E=null;switch(Rt.tag){case 26:E=Rt.memoizedState;case 5:case 27:var D=Rt;if(!E||Y_(E)){Yt=0,gi=null;var X=D.sibling;if(X!==null)Rt=X;else{var oe=D.return;oe!==null?(Rt=oe,Wc(oe)):Rt=null}break t}}Yt=0,gi=null,Gs(t,i,m,5);break;case 6:Yt=0,gi=null,Gs(t,i,m,6);break;case 8:th(),mn=6;break e;default:throw Error(r(462))}}AE();break}catch(Se){l_(t,Se)}while(!0);return Aa=Gr=null,I.H=l,I.A=f,qt=s,Rt!==null?0:(an=null,Ot=0,dc(),mn)}function AE(){for(;Rt!==null&&!xt();)f_(Rt)}function f_(t){var i=Bv(t.alternate,t,Oa);t.memoizedProps=t.pendingProps,i===null?Wc(t):Rt=i}function d_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Uv(s,i,i.pendingProps,i.type,void 0,Ot);break;case 11:i=Uv(s,i,i.pendingProps,i.type.render,i.ref,Ot);break;case 5:_d(i);default:Hv(s,i),i=Rt=hg(i,Oa),i=Bv(s,i,Oa)}t.memoizedProps=t.pendingProps,i===null?Wc(t):Rt=i}function Gs(t,i,s,l){Aa=Gr=null,_d(i),Us=null,tl=0;var f=i.return;try{if(mE(t,f,i,s,Ot)){mn=1,Ic(t,Ti(s,t.current)),Rt=null;return}}catch(m){if(f!==null)throw Rt=f,m;mn=1,Ic(t,Ti(s,t.current)),Rt=null;return}i.flags&32768?(Bt||l===1?t=!0:Is||(Ot&536870912)!==0?t=!1:(cr=t=!0,(l===2||l===9||l===3||l===6)&&(l=wi.current,l!==null&&l.tag===13&&(l.flags|=16384))),h_(i,t)):Wc(i)}function Wc(t){var i=t;do{if((i.flags&32768)!==0){h_(i,cr);return}t=i.return;var s=vE(i.alternate,i,Oa);if(s!==null){Rt=s;return}if(i=i.sibling,i!==null){Rt=i;return}Rt=i=t}while(i!==null);mn===0&&(mn=5)}function h_(t,i){do{var s=_E(t.alternate,t);if(s!==null){s.flags&=32767,Rt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Rt=t;return}Rt=t=s}while(t!==null);mn=6,Rt=null}function p_(t,i,s,l,f,m,E,D,X){t.cancelPendingCommit=null;do qc();while(zn!==0);if((qt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(m=i.lanes|i.childLanes,m|=Yf,Ue(t,s,m,E,D,X),t===an&&(Rt=an=null,Ot=0),Bs=i,dr=t,zs=s,Qd=m,Jd=f,a_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,DE(lt,function(){return x_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=H.p,H.p=2,E=qt,qt|=4;try{xE(t,i,s)}finally{qt=E,H.p=f,I.T=l}}zn=1,m_(),g_(),v_()}}function m_(){if(zn===1){zn=0;var t=dr,i=Bs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=H.p;H.p=2;var f=qt;qt|=4;try{$v(i,t);var m=mh,E=ig(t.containerInfo),D=m.focusedElem,X=m.selectionRange;if(E!==D&&D&&D.ownerDocument&&ng(D.ownerDocument.documentElement,D)){if(X!==null&&Vf(D)){var oe=X.start,Se=X.end;if(Se===void 0&&(Se=oe),"selectionStart"in D)D.selectionStart=oe,D.selectionEnd=Math.min(Se,D.value.length);else{var Ee=D.ownerDocument||document,ue=Ee&&Ee.defaultView||window;if(ue.getSelection){var he=ue.getSelection(),ut=D.textContent.length,it=Math.min(X.start,ut),Jt=X.end===void 0?it:Math.min(X.end,ut);!he.extend&&it>Jt&&(E=Jt,Jt=it,it=E);var ne=tg(D,it),Z=tg(D,Jt);if(ne&&Z&&(he.rangeCount!==1||he.anchorNode!==ne.node||he.anchorOffset!==ne.offset||he.focusNode!==Z.node||he.focusOffset!==Z.offset)){var ae=Ee.createRange();ae.setStart(ne.node,ne.offset),he.removeAllRanges(),it>Jt?(he.addRange(ae),he.extend(Z.node,Z.offset)):(ae.setEnd(Z.node,Z.offset),he.addRange(ae))}}}}for(Ee=[],he=D;he=he.parentNode;)he.nodeType===1&&Ee.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Ee.length;D++){var Me=Ee[D];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}au=!!ph,mh=ph=null}finally{qt=f,H.p=l,I.T=s}}t.current=i,zn=2}}function g_(){if(zn===2){zn=0;var t=dr,i=Bs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=H.p;H.p=2;var f=qt;qt|=4;try{Yv(t,i.alternate,i)}finally{qt=f,H.p=l,I.T=s}}zn=3}}function v_(){if(zn===4||zn===3){zn=0,rt();var t=dr,i=Bs,s=zs,l=a_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?zn=5:(zn=0,Bs=dr=null,__(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(fr=null),be(s),i=i.stateNode,T&&typeof T.onCommitFiberRoot=="function")try{T.onCommitFiberRoot(B,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,f=H.p,H.p=2,I.T=null;try{for(var m=t.onRecoverableError,E=0;E<l.length;E++){var D=l[E];m(D.value,{componentStack:D.stack})}}finally{I.T=i,H.p=f}}(zs&3)!==0&&qc(),sa(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===eh?ul++:(ul=0,eh=t):ul=0,fl(0)}}function __(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Xo(i)))}function qc(t){return m_(),g_(),v_(),x_()}function x_(){if(zn!==5)return!1;var t=dr,i=Qd;Qd=0;var s=be(zs),l=I.T,f=H.p;try{H.p=32>s?32:s,I.T=null,s=Jd,Jd=null;var m=dr,E=zs;if(zn=0,Bs=dr=null,zs=0,(qt&6)!==0)throw Error(r(331));var D=qt;if(qt|=4,n_(m.current),Jv(m,m.current,E,s),qt=D,fl(0,!1),T&&typeof T.onPostCommitFiberRoot=="function")try{T.onPostCommitFiberRoot(B,m)}catch{}return!0}finally{H.p=f,I.T=l,__(t,i)}}function y_(t,i,s){i=Ti(s,i),i=Ud(t.stateNode,i,2),t=nr(t,i,2),t!==null&&(j(t,2),sa(t))}function tn(t,i,s){if(t.tag===3)y_(t,t,s);else for(;i!==null;){if(i.tag===3){y_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fr===null||!fr.has(l))){t=Ti(s,t),s=Ev(2),l=nr(i,s,2),l!==null&&(Tv(s,l,i,t),j(l,2),sa(l));break}}i=i.return}}function ah(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new ME;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(jd=!0,f.add(s),t=CE.bind(null,t,i,s),i.then(t,t))}function CE(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,an===t&&(Ot&s)===s&&(mn===4||mn===3&&(Ot&62914560)===Ot&&300>Et()-$d?(qt&2)===0&&Hs(t,0):Zd|=s,Fs===Ot&&(Fs=0)),sa(t)}function S_(t,i){i===0&&(i=tt()),t=Ms(t,i),t!==null&&(j(t,i),sa(t))}function RE(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),S_(t,s)}function wE(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),S_(t,s)}function DE(t,i){return nt(t,i)}var Yc=null,Vs=null,rh=!1,jc=!1,sh=!1,jr=0;function sa(t){t!==Vs&&t.next===null&&(Vs===null?Yc=Vs=t:Vs=Vs.next=t),jc=!0,rh||(rh=!0,UE())}function fl(t,i){if(!sh&&jc){sh=!0;do for(var s=!1,l=Yc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,D=l.pingedLanes;m=(1<<31-ie(42|t)+1)-1,m&=f&~(E&~D),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,T_(l,m))}else m=Ot,m=Ye(l,l===an?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ne(l,m)||(s=!0,T_(l,m));l=l.next}while(s);sh=!1}}function NE(){M_()}function M_(){jc=rh=!1;var t=0;jr!==0&&(HE()&&(t=jr),jr=0);for(var i=Et(),s=null,l=Yc;l!==null;){var f=l.next,m=b_(l,i);m===0?(l.next=null,s===null?Yc=f:s.next=f,f===null&&(Vs=s)):(s=l,(t!==0||(m&3)!==0)&&(jc=!0)),l=f}fl(t)}function b_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-ie(m),D=1<<E,X=f[E];X===-1?((D&s)===0||(D&l)!==0)&&(f[E]=Oe(D,i)):X<=i&&(t.expiredLanes|=D),m&=~D}if(i=an,s=Ot,s=Ye(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&gt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ne(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&gt(l),be(s)){case 2:case 8:s=kt;break;case 32:s=lt;break;case 268435456:s=q;break;default:s=lt}return l=E_.bind(null,t),s=nt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&gt(l),t.callbackPriority=2,t.callbackNode=null,2}function E_(t,i){if(zn!==0&&zn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(qc()&&t.callbackNode!==s)return null;var l=Ot;return l=Ye(t,t===an?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(s_(t,l,i),b_(t,Et()),t.callbackNode!=null&&t.callbackNode===s?E_.bind(null,t):null)}function T_(t,i){if(qc())return null;s_(t,i,!0)}function UE(){VE(function(){(qt&6)!==0?nt(Vt,NE):M_()})}function oh(){return jr===0&&(jr=Je()),jr}function A_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gi(""+t)}function C_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function LE(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=A_((f[en]||null).action),E=l.submitter;E&&(i=(i=E[en]||null)?A_(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var D=new cc("action","action",null,l,f);t.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(jr!==0){var X=E?C_(f,E):new FormData(f);Cd(s,{pending:!0,data:X,method:f.method,action:m},null,X)}}else typeof m=="function"&&(D.preventDefault(),X=E?C_(f,E):new FormData(f),Cd(s,{pending:!0,data:X,method:f.method,action:m},m,X))},currentTarget:f}]})}}for(var lh=0;lh<qf.length;lh++){var ch=qf[lh],OE=ch.toLowerCase(),PE=ch[0].toUpperCase()+ch.slice(1);Vi(OE,"on"+PE)}Vi(sg,"onAnimationEnd"),Vi(og,"onAnimationIteration"),Vi(lg,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(Qb,"onTransitionRun"),Vi(Jb,"onTransitionStart"),Vi(eE,"onTransitionCancel"),Vi(cg,"onTransitionEnd"),Sa("onMouseEnter",["mouseout","mouseover"]),Sa("onMouseLeave",["mouseout","mouseover"]),Sa("onPointerEnter",["pointerout","pointerover"]),Sa("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function R_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],X=D.instance,oe=D.currentTarget;if(D=D.listener,X!==m&&f.isPropagationStopped())break e;m=D,f.currentTarget=oe;try{m(f)}catch(Se){Pc(Se)}f.currentTarget=null,m=X}else for(E=0;E<l.length;E++){if(D=l[E],X=D.instance,oe=D.currentTarget,D=D.listener,X!==m&&f.isPropagationStopped())break e;m=D,f.currentTarget=oe;try{m(f)}catch(Se){Pc(Se)}f.currentTarget=null,m=X}}}}function wt(t,i){var s=i[Ka];s===void 0&&(s=i[Ka]=new Set);var l=t+"__bubble";s.has(l)||(w_(i,t,2,!1),s.add(l))}function uh(t,i,s){var l=0;i&&(l|=4),w_(s,t,l,i)}var Zc="_reactListening"+Math.random().toString(36).slice(2);function fh(t){if(!t[Zc]){t[Zc]=!0,ya.forEach(function(s){s!=="selectionchange"&&(IE.has(s)||uh(s,!1,t),uh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Zc]||(i[Zc]=!0,uh("selectionchange",!1,i))}}function w_(t,i,s,l){switch(J_(i)){case 2:var f=c1;break;case 8:f=u1;break;default:f=Th}s=f.bind(null,i,s,t),f=void 0,!Lf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function dh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===f)break;if(E===4)for(E=l.return;E!==null;){var X=E.tag;if((X===3||X===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;D!==null;){if(E=ai(D),E===null)return;if(X=E.tag,X===5||X===6||X===26||X===27){l=m=E;continue e}D=D.parentNode}}l=l.return}I0(function(){var oe=m,Se=Nf(s),Ee=[];e:{var ue=ug.get(t);if(ue!==void 0){var he=cc,ut=t;switch(t){case"keypress":if(oc(s)===0)break e;case"keydown":case"keyup":he=Db;break;case"focusin":ut="focus",he=Ff;break;case"focusout":ut="blur",he=Ff;break;case"beforeblur":case"afterblur":he=Ff;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=_b;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Lb;break;case sg:case og:case lg:he=Sb;break;case cg:he=Pb;break;case"scroll":case"scrollend":he=gb;break;case"wheel":he=Fb;break;case"copy":case"cut":case"paste":he=bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=G0;break;case"toggle":case"beforetoggle":he=zb}var it=(i&4)!==0,Jt=!it&&(t==="scroll"||t==="scrollend"),ne=it?ue!==null?ue+"Capture":null:ue;it=[];for(var Z=oe,ae;Z!==null;){var Me=Z;if(ae=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||ae===null||ne===null||(Me=No(Z,ne),Me!=null&&it.push(hl(Z,Me,ae))),Jt)break;Z=Z.return}0<it.length&&(ue=new he(ue,ut,null,s,Se),Ee.push({event:ue,listeners:it}))}}if((i&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",ue&&s!==ms&&(ut=s.relatedTarget||s.fromElement)&&(ai(ut)||ut[Nt]))break e;if((he||ue)&&(ue=Se.window===Se?Se:(ue=Se.ownerDocument)?ue.defaultView||ue.parentWindow:window,he?(ut=s.relatedTarget||s.toElement,he=oe,ut=ut?ai(ut):null,ut!==null&&(Jt=c(ut),it=ut.tag,ut!==Jt||it!==5&&it!==27&&it!==6)&&(ut=null)):(he=null,ut=oe),he!==ut)){if(it=z0,Me="onMouseLeave",ne="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(it=G0,Me="onPointerLeave",ne="onPointerEnter",Z="pointer"),Jt=he==null?ue:bi(he),ae=ut==null?ue:bi(ut),ue=new it(Me,Z+"leave",he,s,Se),ue.target=Jt,ue.relatedTarget=ae,Me=null,ai(Se)===oe&&(it=new it(ne,Z+"enter",ut,s,Se),it.target=ae,it.relatedTarget=Jt,Me=it),Jt=Me,he&&ut)t:{for(it=he,ne=ut,Z=0,ae=it;ae;ae=ks(ae))Z++;for(ae=0,Me=ne;Me;Me=ks(Me))ae++;for(;0<Z-ae;)it=ks(it),Z--;for(;0<ae-Z;)ne=ks(ne),ae--;for(;Z--;){if(it===ne||ne!==null&&it===ne.alternate)break t;it=ks(it),ne=ks(ne)}it=null}else it=null;he!==null&&D_(Ee,ue,he,it,!1),ut!==null&&Jt!==null&&D_(Ee,Jt,ut,it,!0)}}e:{if(ue=oe?bi(oe):window,he=ue.nodeName&&ue.nodeName.toLowerCase(),he==="select"||he==="input"&&ue.type==="file")var je=Z0;else if(Y0(ue))if(K0)je=Zb;else{je=Yb;var Ct=qb}else he=ue.nodeName,!he||he.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?oe&&Ei(oe.elementType)&&(je=Z0):je=jb;if(je&&(je=je(t,oe))){j0(Ee,je,s,Se);break e}Ct&&Ct(t,ue,oe),t==="focusout"&&oe&&ue.type==="number"&&oe.memoizedProps.value!=null&&Fn(ue,"number",ue.value)}switch(Ct=oe?bi(oe):window,t){case"focusin":(Y0(Ct)||Ct.contentEditable==="true")&&(xs=Ct,kf=oe,zo=null);break;case"focusout":zo=kf=xs=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,ag(Ee,s,Se);break;case"selectionchange":if($b)break;case"keydown":case"keyup":ag(Ee,s,Se)}var et;if(zf)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else _s?W0(t,s)&&(at="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(at="onCompositionStart");at&&(V0&&s.locale!=="ko"&&(_s||at!=="onCompositionStart"?at==="onCompositionEnd"&&_s&&(et=F0()):(Qa=Se,Of="value"in Qa?Qa.value:Qa.textContent,_s=!0)),Ct=Kc(oe,at),0<Ct.length&&(at=new H0(at,t,null,s,Se),Ee.push({event:at,listeners:Ct}),et?at.data=et:(et=q0(s),et!==null&&(at.data=et)))),(et=Gb?Vb(t,s):kb(t,s))&&(at=Kc(oe,"onBeforeInput"),0<at.length&&(Ct=new H0("onBeforeInput","beforeinput",null,s,Se),Ee.push({event:Ct,listeners:at}),Ct.data=et)),LE(Ee,t,oe,s,Se)}R_(Ee,i)})}function hl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Kc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=No(t,s),f!=null&&l.unshift(hl(t,f,m)),f=No(t,i),f!=null&&l.push(hl(t,f,m))),t.tag===3)return l;t=t.return}return[]}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function D_(t,i,s,l,f){for(var m=i._reactName,E=[];s!==null&&s!==l;){var D=s,X=D.alternate,oe=D.stateNode;if(D=D.tag,X!==null&&X===l)break;D!==5&&D!==26&&D!==27||oe===null||(X=oe,f?(oe=No(s,m),oe!=null&&E.unshift(hl(s,oe,X))):f||(oe=No(s,m),oe!=null&&E.push(hl(s,oe,X)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var FE=/\r\n?/g,BE=/\u0000|\uFFFD/g;function N_(t){return(typeof t=="string"?t:""+t).replace(FE,`
`).replace(BE,"")}function U_(t,i){return i=N_(i),N_(t)===i}function $c(){}function Qt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||$n(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&$n(t,""+l);break;case"className":w(t,"class",l);break;case"tabIndex":w(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":w(t,s,l);break;case"style":cn(t,l,m);break;case"data":if(i!=="object"){w(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Gi(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Qt(t,i,"name",f.name,f,null),Qt(t,i,"formEncType",f.formEncType,f,null),Qt(t,i,"formMethod",f.formMethod,f,null),Qt(t,i,"formTarget",f.formTarget,f,null)):(Qt(t,i,"encType",f.encType,f,null),Qt(t,i,"method",f.method,f,null),Qt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Gi(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=$c);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Gi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":wt("beforetoggle",t),wt("toggle",t),ps(t,"popover",l);break;case"xlinkActuate":Q(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Q(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Q(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Q(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Q(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Q(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Q(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Q(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Q(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ps(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Kt.get(s)||s,ps(t,s,l))}}function hh(t,i,s,l,f,m){switch(s){case"style":cn(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?$n(t,l):(typeof l=="number"||typeof l=="bigint")&&$n(t,""+l);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=$c);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ur.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[en]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ps(t,s,l)}}}function Hn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Qt(t,i,m,E,s,null)}}f&&Qt(t,i,"srcSet",s.srcSet,s,null),l&&Qt(t,i,"src",s.src,s,null);return;case"input":wt("invalid",t);var D=m=E=f=null,X=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var Se=s[l];if(Se!=null)switch(l){case"name":f=Se;break;case"type":E=Se;break;case"checked":X=Se;break;case"defaultChecked":oe=Se;break;case"value":m=Se;break;case"defaultValue":D=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(r(137,i));break;default:Qt(t,i,l,Se,s,null)}}Ve(t,m,D,X,oe,E,f,!1),Qe(t);return;case"select":wt("invalid",t),l=E=m=null;for(f in s)if(s.hasOwnProperty(f)&&(D=s[f],D!=null))switch(f){case"value":m=D;break;case"defaultValue":E=D;break;case"multiple":l=D;default:Qt(t,i,f,D,s,null)}i=m,s=E,t.multiple=!!l,i!=null?St(t,!!l,i,!1):s!=null&&St(t,!!l,s,!0);return;case"textarea":wt("invalid",t),m=f=l=null;for(E in s)if(s.hasOwnProperty(E)&&(D=s[E],D!=null))switch(E){case"value":l=D;break;case"defaultValue":f=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:Qt(t,i,E,D,s,null)}fi(t,l,f,m),Qe(t);return;case"option":for(X in s)if(s.hasOwnProperty(X)&&(l=s[X],l!=null))switch(X){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(t,i,X,l,s,null)}return;case"dialog":wt("beforetoggle",t),wt("toggle",t),wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(l=0;l<dl.length;l++)wt(dl[l],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Qt(t,i,oe,l,s,null)}return;default:if(Ei(i)){for(Se in s)s.hasOwnProperty(Se)&&(l=s[Se],l!==void 0&&hh(t,i,Se,l,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(l=s[D],l!=null&&Qt(t,i,D,l,s,null))}function zE(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,D=null,X=null,oe=null,Se=null;for(he in s){var Ee=s[he];if(s.hasOwnProperty(he)&&Ee!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":X=Ee;default:l.hasOwnProperty(he)||Qt(t,i,he,null,l,Ee)}}for(var ue in l){var he=l[ue];if(Ee=s[ue],l.hasOwnProperty(ue)&&(he!=null||Ee!=null))switch(ue){case"type":m=he;break;case"name":f=he;break;case"checked":oe=he;break;case"defaultChecked":Se=he;break;case"value":E=he;break;case"defaultValue":D=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,i));break;default:he!==Ee&&Qt(t,i,ue,he,l,Ee)}}yn(t,E,D,X,oe,Se,m,f);return;case"select":he=E=D=ue=null;for(m in s)if(X=s[m],s.hasOwnProperty(m)&&X!=null)switch(m){case"value":break;case"multiple":he=X;default:l.hasOwnProperty(m)||Qt(t,i,m,null,l,X)}for(f in l)if(m=l[f],X=s[f],l.hasOwnProperty(f)&&(m!=null||X!=null))switch(f){case"value":ue=m;break;case"defaultValue":D=m;break;case"multiple":E=m;default:m!==X&&Qt(t,i,f,m,l,X)}i=D,s=E,l=he,ue!=null?St(t,!!s,ue,!1):!!l!=!!s&&(i!=null?St(t,!!s,i,!0):St(t,!!s,s?[]:"",!1));return;case"textarea":he=ue=null;for(D in s)if(f=s[D],s.hasOwnProperty(D)&&f!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Qt(t,i,D,null,l,f)}for(E in l)if(f=l[E],m=s[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":ue=f;break;case"defaultValue":he=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Qt(t,i,E,f,l,m)}Kn(t,ue,he);return;case"option":for(var ut in s)if(ue=s[ut],s.hasOwnProperty(ut)&&ue!=null&&!l.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:Qt(t,i,ut,null,l,ue)}for(X in l)if(ue=l[X],he=s[X],l.hasOwnProperty(X)&&ue!==he&&(ue!=null||he!=null))switch(X){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Qt(t,i,X,ue,l,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)ue=s[it],s.hasOwnProperty(it)&&ue!=null&&!l.hasOwnProperty(it)&&Qt(t,i,it,null,l,ue);for(oe in l)if(ue=l[oe],he=s[oe],l.hasOwnProperty(oe)&&ue!==he&&(ue!=null||he!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,i));break;default:Qt(t,i,oe,ue,l,he)}return;default:if(Ei(i)){for(var Jt in s)ue=s[Jt],s.hasOwnProperty(Jt)&&ue!==void 0&&!l.hasOwnProperty(Jt)&&hh(t,i,Jt,void 0,l,ue);for(Se in l)ue=l[Se],he=s[Se],!l.hasOwnProperty(Se)||ue===he||ue===void 0&&he===void 0||hh(t,i,Se,ue,l,he);return}}for(var ne in s)ue=s[ne],s.hasOwnProperty(ne)&&ue!=null&&!l.hasOwnProperty(ne)&&Qt(t,i,ne,null,l,ue);for(Ee in l)ue=l[Ee],he=s[Ee],!l.hasOwnProperty(Ee)||ue===he||ue==null&&he==null||Qt(t,i,Ee,ue,l,he)}var ph=null,mh=null;function Qc(t){return t.nodeType===9?t:t.ownerDocument}function L_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function gh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vh=null;function HE(){var t=window.event;return t&&t.type==="popstate"?t===vh?!1:(vh=t,!0):(vh=null,!1)}var P_=typeof setTimeout=="function"?setTimeout:void 0,GE=typeof clearTimeout=="function"?clearTimeout:void 0,I_=typeof Promise=="function"?Promise:void 0,VE=typeof queueMicrotask=="function"?queueMicrotask:typeof I_<"u"?function(t){return I_.resolve(null).then(t).catch(kE)}:P_;function kE(t){setTimeout(function(){throw t})}function pr(t){return t==="head"}function F_(t,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var E=t.ownerDocument;if(s&1&&pl(E.documentElement),s&2&&pl(E.body),s&4)for(s=E.head,pl(s),E=s.firstChild;E;){var D=E.nextSibling,X=E.nodeName;E[Dn]||X==="SCRIPT"||X==="STYLE"||X==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=D}}if(f===0){t.removeChild(m),Ml(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);Ml(i)}function _h(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":_h(s),In(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function XE(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Dn])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Xi(t.nextSibling),t===null)break}return null}function WE(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Xi(t.nextSibling),t===null))return null;return t}function xh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function qE(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Xi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var yh=null;function B_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function z_(t,i,s){switch(i=Qc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function pl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);In(t)}var Ni=new Map,H_=new Set;function Jc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Pa=H.d;H.d={f:YE,r:jE,D:ZE,C:KE,L:$E,m:QE,X:e1,S:JE,M:t1};function YE(){var t=Pa.f(),i=Xc();return t||i}function jE(t){var i=Vn(t);i!==null&&i.tag===5&&i.type==="form"?sv(i):Pa.r(t)}var Xs=typeof document>"u"?null:document;function G_(t,i,s){var l=Xs;if(l&&typeof i=="string"&&i){var f=yt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),H_.has(f)||(H_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Hn(i,"link",t),on(i),l.head.appendChild(i)))}}function ZE(t){Pa.D(t),G_("dns-prefetch",t,null)}function KE(t,i){Pa.C(t,i),G_("preconnect",t,i)}function $E(t,i,s){Pa.L(t,i,s);var l=Xs;if(l&&t&&i){var f='link[rel="preload"][as="'+yt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+yt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+yt(s.imageSizes)+'"]')):f+='[href="'+yt(t)+'"]';var m=f;switch(i){case"style":m=Ws(t);break;case"script":m=qs(t)}Ni.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ni.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(ml(m))||i==="script"&&l.querySelector(gl(m))||(i=l.createElement("link"),Hn(i,"link",t),on(i),l.head.appendChild(i)))}}function QE(t,i){Pa.m(t,i);var s=Xs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=qs(t)}if(!Ni.has(m)&&(t=g({rel:"modulepreload",href:t},i),Ni.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(gl(m)))return}l=s.createElement("link"),Hn(l,"link",t),on(l),s.head.appendChild(l)}}}function JE(t,i,s){Pa.S(t,i,s);var l=Xs;if(l&&t){var f=ui(l).hoistableStyles,m=Ws(t);i=i||"default";var E=f.get(m);if(!E){var D={loading:0,preload:null};if(E=l.querySelector(ml(m)))D.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ni.get(m))&&Sh(t,s);var X=E=l.createElement("link");on(X),Hn(X,"link",t),X._p=new Promise(function(oe,Se){X.onload=oe,X.onerror=Se}),X.addEventListener("load",function(){D.loading|=1}),X.addEventListener("error",function(){D.loading|=2}),D.loading|=4,eu(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:D},f.set(m,E)}}}function e1(t,i){Pa.X(t,i);var s=Xs;if(s&&t){var l=ui(s).hoistableScripts,f=qs(t),m=l.get(f);m||(m=s.querySelector(gl(f)),m||(t=g({src:t,async:!0},i),(i=Ni.get(f))&&Mh(t,i),m=s.createElement("script"),on(m),Hn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function t1(t,i){Pa.M(t,i);var s=Xs;if(s&&t){var l=ui(s).hoistableScripts,f=qs(t),m=l.get(f);m||(m=s.querySelector(gl(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=Ni.get(f))&&Mh(t,i),m=s.createElement("script"),on(m),Hn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function V_(t,i,s,l){var f=(f=ee.current)?Jc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ws(s.href),s=ui(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ws(s.href);var m=ui(f).hoistableStyles,E=m.get(t);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=f.querySelector(ml(t)))&&!m._p&&(E.instance=m,E.state.loading=5),Ni.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ni.set(t,s),m||n1(f,t,s,E.state))),i&&l===null)throw Error(r(528,""));return E}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=qs(s),s=ui(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ws(t){return'href="'+yt(t)+'"'}function ml(t){return'link[rel="stylesheet"]['+t+"]"}function k_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function n1(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Hn(i,"link",s),on(i),t.head.appendChild(i))}function qs(t){return'[src="'+yt(t)+'"]'}function gl(t){return"script[async]"+t}function X_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+yt(s.href)+'"]');if(l)return i.instance=l,on(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),on(l),Hn(l,"style",f),eu(l,s.precedence,t),i.instance=l;case"stylesheet":f=Ws(s.href);var m=t.querySelector(ml(f));if(m)return i.state.loading|=4,i.instance=m,on(m),m;l=k_(s),(f=Ni.get(f))&&Sh(l,f),m=(t.ownerDocument||t).createElement("link"),on(m);var E=m;return E._p=new Promise(function(D,X){E.onload=D,E.onerror=X}),Hn(m,"link",l),i.state.loading|=4,eu(m,s.precedence,t),i.instance=m;case"script":return m=qs(s.src),(f=t.querySelector(gl(m)))?(i.instance=f,on(f),f):(l=s,(f=Ni.get(m))&&(l=g({},s),Mh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),on(f),Hn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,eu(l,s.precedence,t));return i.instance}function eu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var D=l[E];if(D.dataset.precedence===i)m=D;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Sh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Mh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var tu=null;function W_(t,i,s){if(tu===null){var l=new Map,f=tu=new Map;f.set(s,l)}else f=tu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Dn]||m[dt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=t+E;var D=l.get(E);D?D.push(m):l.set(E,[m])}}return l}function q_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function i1(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Y_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var vl=null;function a1(){}function r1(t,i,s){if(vl===null)throw Error(r(475));var l=vl;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Ws(s.href),m=t.querySelector(ml(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=nu.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,on(m);return}m=t.ownerDocument||t,s=k_(s),(f=Ni.get(f))&&Sh(s,f),m=m.createElement("link"),on(m);var E=m;E._p=new Promise(function(D,X){E.onload=D,E.onerror=X}),Hn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=nu.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function s1(){if(vl===null)throw Error(r(475));var t=vl;return t.stylesheets&&t.count===0&&bh(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&bh(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function nu(){if(this.count--,this.count===0){if(this.stylesheets)bh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var iu=null;function bh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,iu=new Map,i.forEach(o1,t),iu=null,nu.call(t))}function o1(t,i){if(!(i.state.loading&4)){var s=iu.get(t);if(s)var l=s.get(null);else{s=new Map,iu.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,f),s.set(E,f),this.count++,l=nu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var _l={$$typeof:P,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function l1(t,i,s,l,f,m,E,D){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function j_(t,i,s,l,f,m,E,D,X,oe,Se,Ee){return t=new l1(t,i,s,E,D,X,oe,Ee),i=1,m===!0&&(i|=24),m=hi(3,null,null,i),t.current=m,m.stateNode=t,i=ad(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},ld(m),t}function Z_(t){return t?(t=bs,t):bs}function K_(t,i,s,l,f,m){f=Z_(f),l.context===null?l.context=f:l.pendingContext=f,l=tr(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=nr(t,l,i),s!==null&&(_i(s,t,i),jo(s,t,i))}function $_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Eh(t,i){$_(t,i),(t=t.alternate)&&$_(t,i)}function Q_(t){if(t.tag===13){var i=Ms(t,67108864);i!==null&&_i(i,t,67108864),Eh(t,67108864)}}var au=!0;function c1(t,i,s,l){var f=I.T;I.T=null;var m=H.p;try{H.p=2,Th(t,i,s,l)}finally{H.p=m,I.T=f}}function u1(t,i,s,l){var f=I.T;I.T=null;var m=H.p;try{H.p=8,Th(t,i,s,l)}finally{H.p=m,I.T=f}}function Th(t,i,s,l){if(au){var f=Ah(l);if(f===null)dh(t,i,l,ru,s),ex(t,l);else if(d1(f,t,i,s,l))l.stopPropagation();else if(ex(t,l),i&4&&-1<f1.indexOf(t)){for(;f!==null;){var m=Vn(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=we(m.pendingLanes);if(E!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;E;){var X=1<<31-ie(E);D.entanglements[1]|=X,E&=~X}sa(m),(qt&6)===0&&(Vc=Et()+500,fl(0))}}break;case 13:D=Ms(m,2),D!==null&&_i(D,m,2),Xc(),Eh(m,2)}if(m=Ah(l),m===null&&dh(t,i,l,ru,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else dh(t,i,l,null,s)}}function Ah(t){return t=Nf(t),Ch(t)}var ru=null;function Ch(t){if(ru=null,t=ai(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return ru=t,null}function J_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case Vt:return 2;case kt:return 8;case lt:case mt:return 32;case q:return 268435456;default:return 32}default:return 32}}var Rh=!1,mr=null,gr=null,vr=null,xl=new Map,yl=new Map,_r=[],f1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ex(t,i){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":xl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(i.pointerId)}}function Sl(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Vn(i),i!==null&&Q_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function d1(t,i,s,l,f){switch(i){case"focusin":return mr=Sl(mr,t,i,s,l,f),!0;case"dragenter":return gr=Sl(gr,t,i,s,l,f),!0;case"mouseover":return vr=Sl(vr,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return xl.set(m,Sl(xl.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,yl.set(m,Sl(yl.get(m)||null,t,i,s,l,f)),!0}return!1}function tx(t){var i=ai(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ze(t.priority,function(){if(s.tag===13){var l=vi();l=Pe(l);var f=Ms(s,l);f!==null&&_i(f,s,l),Eh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function su(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ah(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);ms=l,s.target.dispatchEvent(l),ms=null}else return i=Vn(s),i!==null&&Q_(i),t.blockedOn=s,!1;i.shift()}return!0}function nx(t,i,s){su(t)&&s.delete(i)}function h1(){Rh=!1,mr!==null&&su(mr)&&(mr=null),gr!==null&&su(gr)&&(gr=null),vr!==null&&su(vr)&&(vr=null),xl.forEach(nx),yl.forEach(nx)}function ou(t,i){t.blockedOn===i&&(t.blockedOn=null,Rh||(Rh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,h1)))}var lu=null;function ix(t){lu!==t&&(lu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){lu===t&&(lu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Ch(l||s)===null)continue;break}var m=Vn(s);m!==null&&(t.splice(i,3),i-=3,Cd(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Ml(t){function i(X){return ou(X,t)}mr!==null&&ou(mr,t),gr!==null&&ou(gr,t),vr!==null&&ou(vr,t),xl.forEach(i),yl.forEach(i);for(var s=0;s<_r.length;s++){var l=_r[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<_r.length&&(s=_r[0],s.blockedOn===null);)tx(s),s.blockedOn===null&&_r.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],E=f[en]||null;if(typeof m=="function")E||ix(s);else if(E){var D=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[en]||null)D=E.formAction;else if(Ch(f)!==null)continue}else D=E.action;typeof D=="function"?s[l+1]=D:(s.splice(l,3),l-=3),ix(s)}}}function wh(t){this._internalRoot=t}cu.prototype.render=wh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=vi();K_(s,l,t,i,null,null)},cu.prototype.unmount=wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;K_(t.current,2,null,t,null,null),Xc(),i[Nt]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var i=We();t={blockedOn:null,target:t,priority:i};for(var s=0;s<_r.length&&i!==0&&i<_r[s].priority;s++);_r.splice(s,0,t),s===0&&tx(t)}};var ax=e.version;if(ax!=="19.1.0")throw Error(r(527,ax,"19.1.0"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?d(t):null,t=t===null?null:t.stateNode,t};var p1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{B=uu.inject(p1),T=uu}catch{}}return El.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=yv,m=Sv,E=Mv,D=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(D=i.unstable_transitionCallbacks)),i=j_(t,1,!1,null,null,s,l,f,m,E,D,null),t[Nt]=i.current,fh(t),new wh(i)},El.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",m=yv,E=Sv,D=Mv,X=null,oe=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(X=s.unstable_transitionCallbacks),s.formState!==void 0&&(oe=s.formState)),i=j_(t,1,!0,i,s??null,l,f,m,E,D,X,oe),i.context=Z_(null),s=i.current,l=vi(),l=Pe(l),f=tr(l),f.callback=null,nr(s,f,l),s=l,i.current.lanes=s,j(i,s),sa(i),t[Nt]=i.current,fh(t),new cu(i)},El.version="19.1.0",El}var px;function b1(){if(px)return Uh.exports;px=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Uh.exports=M1(),Uh.exports}var E1=b1();const T1=({activeSection:a,scrollToSection:e})=>ge.jsx("nav",{className:"kx-nav fixed top-0 w-full z-50 transition-all duration-300",children:ge.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-8",children:ge.jsxs("div",{className:"flex justify-between items-center py-4",children:[ge.jsxs("button",{onClick:()=>e("home"),className:"font-display text-xl font-bold tracking-tight",style:{fontFamily:"var(--font-display)",color:"var(--text)"},children:["kshitij",ge.jsx("span",{style:{color:"var(--amber)"},children:"."}),"dev"]}),ge.jsx("div",{className:"hidden md:flex space-x-9",children:["home","about","skills","projects","contact"].map((n,r)=>ge.jsxs("button",{onClick:()=>e(n),className:`kx-nav-link ${a===n?"active":""}`,children:[String(r).padStart(2,"0"),"_",n,a===n&&ge.jsx("span",{className:"kx-nav-underline"})]},n))})]})})});/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C1=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),mx=a=>{const e=C1(a);return e.charAt(0).toUpperCase()+e.slice(1)},mS=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),R1=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=W.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...h},p)=>W.createElement("svg",{ref:p,...w1,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:mS("lucide",o),...!c&&!R1(h)&&{"aria-hidden":"true"},...h},[...u.map(([d,g])=>W.createElement(d,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=(a,e)=>{const n=W.forwardRef(({className:r,...o},c)=>W.createElement(D1,{ref:c,iconNode:e,className:mS(`lucide-${A1(mx(a))}`,`lucide-${a}`,r),...o}));return n.displayName=mx(a),n};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],U1=Zn("award",N1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],O1=Zn("briefcase",L1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],I1=Zn("chevron-down",P1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],B1=Zn("code",F1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],H1=Zn("external-link",z1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],V1=Zn("github",G1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],X1=Zn("graduation-cap",k1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],q1=Zn("linkedin",W1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],j1=Zn("mail",Y1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],K1=Zn("map-pin",Z1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Q1=Zn("palette",$1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],eT=Zn("phone",J1);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],nT=Zn("send",tT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],aT=Zn("smartphone",iT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],sT=Zn("twitter",rT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],lT=Zn("user",oT);function gS(a=12){const e=W.useRef(null),n=W.useCallback(()=>{if(typeof window>"u")return!1;const c=window.matchMedia("(pointer: fine)").matches,u=window.matchMedia("(prefers-reduced-motion: reduce)").matches;return c&&!u},[]),r=W.useCallback(c=>{if(!e.current||!n())return;const u=e.current.getBoundingClientRect(),h=(c.clientX-u.left)/u.width-.5,p=(c.clientY-u.top)/u.height-.5,d=h*a*2,g=-p*a*2;e.current.style.transform=`perspective(900px) rotateX(${g}deg) rotateY(${d}deg) scale3d(1.02, 1.02, 1.02)`},[a,n]),o=W.useCallback(()=>{e.current&&(e.current.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")},[]);return{ref:e,onMouseMove:r,onMouseLeave:o}}const cT="/assets/photo-DSR4VxxD.png",uT=({isVisible:a,typedText:e,scrollToSection:n,photoSrc:r})=>{const o=gS(10);return ge.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center relative overflow-hidden",children:[ge.jsx("div",{className:"kx-blueprint-grid"}),ge.jsxs("div",{className:"max-w-6xl mx-auto px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center",children:[ge.jsxs("div",{className:`transition-all duration-1000 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[ge.jsx("div",{className:"kx-eyebrow",children:"// welcome"}),ge.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4",style:{color:"var(--text)"},children:"Kshitij Adhikari"}),ge.jsxs("div",{className:"text-xl md:text-2xl mb-6 h-8 font-medium",style:{fontFamily:"var(--font-mono)",color:"var(--teal)"},children:[e,ge.jsx("span",{className:"animate-pulse",children:"_"})]}),ge.jsx("p",{className:"text-lg mb-8 leading-relaxed max-w-xl",style:{color:"var(--text-dim)"},children:"Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference."}),ge.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[ge.jsx("button",{onClick:()=>n("projects"),className:"kx-btn-primary",children:"View My Work"}),ge.jsx("button",{onClick:()=>n("contact"),className:"kx-btn-secondary",children:"Get In Touch"})]})]}),ge.jsx("div",{className:"flex justify-center md:justify-end",style:{perspective:"900px"},children:ge.jsx("div",{ref:o.ref,onMouseMove:o.onMouseMove,onMouseLeave:o.onMouseLeave,className:"kx-badge kx-tilt",children:ge.jsxs("div",{className:"kx-badge-inner",children:[ge.jsx("div",{className:"kx-badge-photo",children:ge.jsx("div",{className:"kx-badge-photo-inner",children:r?ge.jsx("img",{src:r,alt:"Kshitij Adhikari"}):"K"})}),ge.jsx("div",{className:"kx-badge-name",children:"KSHITIJ_ADHIKARI"}),ge.jsx("div",{className:"kx-badge-role",children:"FULL-STACK · UI/UX"})]})})})]}),ge.jsx("button",{onClick:()=>n("about"),className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",style:{color:"var(--text-faint)"},"aria-label":"Scroll to About section",children:ge.jsx(I1,{className:"w-6 h-6"})})]})};function a0(a=.15){const e=W.useRef(null),[n,r]=W.useState(!1);return W.useEffect(()=>{const o=e.current;if(!o)return;const c=new IntersectionObserver(([u])=>{u.isIntersecting&&(r(!0),c.unobserve(o))},{threshold:a});return c.observe(o),()=>c.disconnect()},[a]),{ref:e,className:`kx-reveal ${n?"kx-visible":""}`}}const fT=()=>{const a=a0(),e=[{icon:lT,title:"Who I Am",desc:"Creative developer with 2+ years of self learning experience",color:"var(--teal)"},{icon:O1,title:"What I Do",desc:"Full-stack development & UI/UX design",color:"var(--amber)"},{icon:X1,title:"Education",desc:`Bsc (Hons) Computer Science,
University of Wolverhampton`,color:"var(--teal)"}];return ge.jsx("section",{id:"about",className:"py-24 relative",style:{background:"var(--bg-alt)"},children:ge.jsxs("div",{className:"max-w-6xl mx-auto px-6 lg:px-8 relative z-10",children:[ge.jsxs("div",{className:"mb-16",children:[ge.jsx("div",{className:"kx-eyebrow",children:"// 01_about"}),ge.jsx("h2",{className:"text-3xl md:text-4xl font-bold",style:{color:"var(--text)"},children:"About Me"})]}),ge.jsxs("div",{ref:a.ref,className:`${a.className} grid md:grid-cols-2 gap-12 items-center`,children:[ge.jsx("div",{className:"space-y-5",children:e.map((n,r)=>ge.jsxs("div",{className:"kx-card flex items-center space-x-4 p-6",children:[ge.jsx(n.icon,{className:"w-7 h-7 shrink-0",style:{color:n.color}}),ge.jsxs("div",{children:[ge.jsx("h3",{className:"text-lg font-semibold mb-1",style:{color:"var(--text)"},children:n.title}),ge.jsx("p",{style:{color:"var(--text-dim)",whiteSpace:"pre-line"},children:n.desc})]})]},r))}),ge.jsxs("div",{className:"space-y-6",children:[ge.jsx("p",{className:"text-lg leading-relaxed",style:{color:"var(--text-dim)"},children:"I'm a passionate full-stack developer and designer who loves creating digital experiences that are not only visually stunning but also highly functional and user-friendly."}),ge.jsx("p",{className:"text-lg leading-relaxed",style:{color:"var(--text-dim)"},children:"With expertise in modern web technologies and a keen eye for design, I bridge the gap between technical implementation and creative vision to deliver exceptional results."}),ge.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{number:"10+",label:"Projects",color:"var(--teal)"},{number:"2+",label:"Years Experience",color:"var(--amber)"}].map((n,r)=>ge.jsxs("div",{className:"kx-card text-center p-6",children:[ge.jsx("div",{className:"text-3xl font-bold mb-2",style:{color:n.color,fontFamily:"var(--font-display)"},children:n.number}),ge.jsx("div",{className:"text-sm",style:{color:"var(--text-dim)"},children:n.label})]},r))})]})]})]})})},dT=()=>{const a=a0(),[e,n]=W.useState(!1),r=[{name:"Frontend Development",icon:B1,level:95,color:"var(--teal)"},{name:"UI/UX Design",icon:Q1,level:88,color:"var(--amber)"},{name:"Mobile Development",icon:aT,level:50,color:"var(--teal)"},{name:"Backend Development",icon:U1,level:78,color:"var(--amber)"}];return W.useEffect(()=>{if(a.className.includes("kx-visible")){const o=setTimeout(()=>n(!0),150);return()=>clearTimeout(o)}},[a.className]),ge.jsx("section",{id:"skills",className:"py-24 relative",children:ge.jsxs("div",{className:"max-w-6xl mx-auto px-6 lg:px-8 relative z-10",children:[ge.jsxs("div",{className:"mb-16",children:[ge.jsx("div",{className:"kx-eyebrow",children:"// 02_skills"}),ge.jsx("h2",{className:"text-3xl md:text-4xl font-bold",style:{color:"var(--text)"},children:"Skills & Expertise"})]}),ge.jsx("div",{ref:a.ref,className:`${a.className} grid md:grid-cols-2 gap-6`,children:r.map((o,c)=>ge.jsxs("div",{className:"kx-card p-6",children:[ge.jsxs("div",{className:"flex items-center mb-4",children:[ge.jsx(o.icon,{className:"w-7 h-7 mr-4",style:{color:o.color}}),ge.jsx("h3",{className:"text-lg font-semibold",style:{color:"var(--text)"},children:o.name})]}),ge.jsx("div",{className:"kx-skill-bar-track",children:ge.jsx("div",{className:"kx-skill-bar-fill",style:{width:e?`${o.level}%`:"0%",background:o.color}})}),ge.jsxs("div",{className:"text-right text-sm mt-2",style:{color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:[o.level,"%"]})]},c))})]})})},hT=[{title:"E-Commerce Platform",description:"A full-stack e-commerce solution with React, Node.js, and MongoDB",image:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",tags:["React","Node.js","MongoDB"],link:"#"},{title:"AI Dashboard",description:"Analytics dashboard with machine learning insights and data visualization",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",tags:["Python","TensorFlow","D3.js"],link:"#"},{title:"Task Management App",description:"Collaborative project management tool with real-time updates",image:"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",tags:["React","Firebase","Tailwind"],link:"#"}],pT=({project:a})=>{const e=gS(8);return ge.jsxs("a",{href:a.link,ref:e.ref,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,className:"kx-project-card kx-tilt block",style:{perspective:"900px"},children:[ge.jsx("div",{className:"aspect-video overflow-hidden",children:ge.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover"})}),ge.jsxs("div",{className:"p-6",children:[ge.jsxs("div",{className:"flex items-center justify-between mb-2",children:[ge.jsx("h3",{className:"text-lg font-semibold",style:{color:"var(--text)"},children:a.title}),ge.jsx(H1,{className:"w-4 h-4 shrink-0",style:{color:"var(--text-faint)"}})]}),ge.jsx("p",{className:"mb-4 text-sm leading-relaxed",style:{color:"var(--text-dim)"},children:a.description}),ge.jsx("div",{className:"flex flex-wrap gap-2",children:a.tags.map((n,r)=>ge.jsx("span",{className:"kx-project-tag",children:n},r))})]})]})},mT=()=>{const a=a0();return ge.jsx("section",{id:"projects",className:"py-24 relative",style:{background:"var(--bg-alt)"},children:ge.jsxs("div",{className:"max-w-6xl mx-auto px-6 lg:px-8 relative z-10",children:[ge.jsxs("div",{className:"mb-16",children:[ge.jsx("div",{className:"kx-eyebrow",children:"// 03_projects"}),ge.jsx("h2",{className:"text-3xl md:text-4xl font-bold",style:{color:"var(--text)"},children:"Featured Projects"})]}),ge.jsx("div",{ref:a.ref,className:`${a.className} grid md:grid-cols-2 lg:grid-cols-3 gap-8`,children:hT.map((e,n)=>ge.jsx(pT,{project:e},n))})]})})};var Ih={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var gx;function gT(){return gx||(gx=1,function(a){(function(){var e={}.hasOwnProperty;function n(){for(var c="",u=0;u<arguments.length;u++){var h=arguments[u];h&&(c=o(c,r(h)))}return c}function r(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return n.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var u="";for(var h in c)e.call(c,h)&&c[h]&&(u=o(u,h));return u}function o(c,u){return u?c?c+" "+u:c+u:c}a.exports?(n.default=n,a.exports=n):window.classNames=n})()}(Ih)),Ih.exports}var vT=gT();const $i=t0(vT);function ii(){return ii=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},ii.apply(null,arguments)}function Ht(a){"@babel/helpers - typeof";return Ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ht(a)}var _T=Symbol.for("react.element"),xT=Symbol.for("react.transitional.element"),yT=Symbol.for("react.fragment");function ST(a){return a&&Ht(a)==="object"&&(a.$$typeof===_T||a.$$typeof===xT)&&a.type===yT}var Cp={},MT=function(e){};function bT(a,e){}function ET(a,e){}function TT(){Cp={}}function vS(a,e,n){!e&&!Cp[n]&&(a(!1,n),Cp[n]=!0)}function Ql(a,e){vS(bT,a,e)}function AT(a,e){vS(ET,a,e)}Ql.preMessage=MT;Ql.resetWarned=TT;Ql.noteOnce=AT;function CT(a,e){if(Ht(a)!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(Ht(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function _S(a){var e=CT(a,"string");return Ht(e)=="symbol"?e:e+""}function Ke(a,e,n){return(e=_S(e))in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function vx(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function Xe(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vx(Object(n),!0).forEach(function(r){Ke(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):vx(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}var r0=pS();const Rp=t0(r0),RT=hS({__proto__:null,default:Rp},[r0]);function _x(a){return a instanceof HTMLElement||a instanceof SVGElement}function wT(a){return a&&Ht(a)==="object"&&_x(a.nativeElement)?a.nativeElement:_x(a)?a:null}function DT(a){var e=wT(a);if(e)return e;if(a instanceof fn.Component){var n;return(n=Rp.findDOMNode)===null||n===void 0?void 0:n.call(Rp,a)}return null}var Fh={exports:{}},Wt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx;function NT(){if(xx)return Wt;xx=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),M;M=Symbol.for("react.module.reference");function A(x){if(typeof x=="object"&&x!==null){var y=x.$$typeof;switch(y){case a:switch(x=x.type,x){case n:case o:case r:case d:case g:return x;default:switch(x=x&&x.$$typeof,x){case h:case u:case p:case v:case _:case c:return x;default:return y}}case e:return y}}}return Wt.ContextConsumer=u,Wt.ContextProvider=c,Wt.Element=a,Wt.ForwardRef=p,Wt.Fragment=n,Wt.Lazy=v,Wt.Memo=_,Wt.Portal=e,Wt.Profiler=o,Wt.StrictMode=r,Wt.Suspense=d,Wt.SuspenseList=g,Wt.isAsyncMode=function(){return!1},Wt.isConcurrentMode=function(){return!1},Wt.isContextConsumer=function(x){return A(x)===u},Wt.isContextProvider=function(x){return A(x)===c},Wt.isElement=function(x){return typeof x=="object"&&x!==null&&x.$$typeof===a},Wt.isForwardRef=function(x){return A(x)===p},Wt.isFragment=function(x){return A(x)===n},Wt.isLazy=function(x){return A(x)===v},Wt.isMemo=function(x){return A(x)===_},Wt.isPortal=function(x){return A(x)===e},Wt.isProfiler=function(x){return A(x)===o},Wt.isStrictMode=function(x){return A(x)===r},Wt.isSuspense=function(x){return A(x)===d},Wt.isSuspenseList=function(x){return A(x)===g},Wt.isValidElementType=function(x){return typeof x=="string"||typeof x=="function"||x===n||x===o||x===r||x===d||x===g||x===S||typeof x=="object"&&x!==null&&(x.$$typeof===v||x.$$typeof===_||x.$$typeof===c||x.$$typeof===u||x.$$typeof===p||x.$$typeof===M||x.getModuleId!==void 0)},Wt.typeOf=A,Wt}var yx;function UT(){return yx||(yx=1,Fh.exports=NT()),Fh.exports}var Bh=UT();function xS(a,e,n){var r=W.useRef({});return(!("value"in r.current)||n(r.current.condition,e))&&(r.current.value=a(),r.current.condition=e),r.current.value}var LT=Number(W.version.split(".")[0]),OT=function(e,n){typeof e=="function"?e(n):Ht(e)==="object"&&e&&"current"in e&&(e.current=n)},PT=function(e){var n,r;if(!e)return!1;if(yS(e)&&LT>=19)return!0;var o=Bh.isMemo(e)?e.type.type:e.type;return!(typeof o=="function"&&!((n=o.prototype)!==null&&n!==void 0&&n.render)&&o.$$typeof!==Bh.ForwardRef||typeof e=="function"&&!((r=e.prototype)!==null&&r!==void 0&&r.render)&&e.$$typeof!==Bh.ForwardRef)};function yS(a){return W.isValidElement(a)&&!ST(a)}var IT=function(e){if(e&&yS(e)){var n=e;return n.props.propertyIsEnumerable("ref")?n.props.ref:n.ref}return null};function va(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function Sx(a,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,_S(r.key),r)}}function _a(a,e,n){return e&&Sx(a.prototype,e),n&&Sx(a,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function wp(a,e){return wp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},wp(a,e)}function mf(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&wp(a,e)}function Ju(a){return Ju=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ju(a)}function SS(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SS=function(){return!!a})()}function ss(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function FT(a,e){if(e&&(Ht(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ss(a)}function gf(a){var e=SS();return function(){var n,r=Ju(a);if(e){var o=Ju(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return FT(this,n)}}function Dp(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=Array(e);n<e;n++)r[n]=a[n];return r}function BT(a){if(Array.isArray(a))return Dp(a)}function MS(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function s0(a,e){if(a){if(typeof a=="string")return Dp(a,e);var n={}.toString.call(a).slice(8,-1);return n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set"?Array.from(a):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dp(a,e):void 0}}function zT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ci(a){return BT(a)||MS(a)||s0(a)||zT()}var bS=function(e){return+setTimeout(e,16)},ES=function(e){return clearTimeout(e)};typeof window<"u"&&"requestAnimationFrame"in window&&(bS=function(e){return window.requestAnimationFrame(e)},ES=function(e){return window.cancelAnimationFrame(e)});var Mx=0,o0=new Map;function TS(a){o0.delete(a)}var Np=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Mx+=1;var r=Mx;function o(c){if(c===0)TS(r),e();else{var u=bS(function(){o(c-1)});o0.set(r,u)}}return o(n),r};Np.cancel=function(a){var e=o0.get(a);return TS(a),ES(e)};function AS(a){if(Array.isArray(a))return a}function HT(a,e){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var r,o,c,u,h=[],p=!0,d=!1;try{if(c=(n=n.call(a)).next,e===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=c.call(n)).done)&&(h.push(r.value),h.length!==e);p=!0);}catch(g){d=!0,o=g}finally{try{if(!p&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(d)throw o}}return h}}function CS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ot(a,e){return AS(a)||HT(a,e)||s0(a,e)||CS()}function Vl(a){for(var e=0,n,r=0,o=a.length;o>=4;++r,o-=4)n=a.charCodeAt(r)&255|(a.charCodeAt(++r)&255)<<8|(a.charCodeAt(++r)&255)<<16|(a.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(a.charCodeAt(r+2)&255)<<16;case 2:e^=(a.charCodeAt(r+1)&255)<<8;case 1:e^=a.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}function ja(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function GT(a,e){if(!a)return!1;if(a.contains)return a.contains(e);for(var n=e;n;){if(n===a)return!0;n=n.parentNode}return!1}var bx="data-rc-order",Ex="data-rc-priority",VT="rc-util-key",Up=new Map;function RS(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.mark;return e?e.startsWith("data-")?e:"data-".concat(e):VT}function vf(a){if(a.attachTo)return a.attachTo;var e=document.querySelector("head");return e||document.body}function kT(a){return a==="queue"?"prependQueue":a?"prepend":"append"}function l0(a){return Array.from((Up.get(a)||a).children).filter(function(e){return e.tagName==="STYLE"})}function wS(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!ja())return null;var n=e.csp,r=e.prepend,o=e.priority,c=o===void 0?0:o,u=kT(r),h=u==="prependQueue",p=document.createElement("style");p.setAttribute(bx,u),h&&c&&p.setAttribute(Ex,"".concat(c)),n!=null&&n.nonce&&(p.nonce=n?.nonce),p.innerHTML=a;var d=vf(e),g=d.firstChild;if(r){if(h){var _=(e.styles||l0(d)).filter(function(v){if(!["prepend","prependQueue"].includes(v.getAttribute(bx)))return!1;var S=Number(v.getAttribute(Ex)||0);return c>=S});if(_.length)return d.insertBefore(p,_[_.length-1].nextSibling),p}d.insertBefore(p,g)}else d.appendChild(p);return p}function DS(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=vf(e);return(e.styles||l0(n)).find(function(r){return r.getAttribute(RS(e))===a})}function NS(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=DS(a,e);if(n){var r=vf(e);r.removeChild(n)}}function XT(a,e){var n=Up.get(a);if(!n||!GT(document,n)){var r=wS("",e),o=r.parentNode;Up.set(a,o),a.removeChild(r)}}function os(a,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=vf(n),o=l0(r),c=Xe(Xe({},n),{},{styles:o});XT(r,c);var u=DS(e,c);if(u){var h,p;if((h=c.csp)!==null&&h!==void 0&&h.nonce&&u.nonce!==((p=c.csp)===null||p===void 0?void 0:p.nonce)){var d;u.nonce=(d=c.csp)===null||d===void 0?void 0:d.nonce}return u.innerHTML!==a&&(u.innerHTML=a),u}var g=wS(a,c);return g.setAttribute(RS(c),e),g}function WT(a,e){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(e.indexOf(r)!==-1)continue;n[r]=a[r]}return n}function cs(a,e){if(a==null)return{};var n,r,o=WT(a,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(a,n)&&(o[n]=a[n])}return o}function qT(a,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function o(c,u){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,p=r.has(c);if(Ql(!p,"Warning: There may be circular references"),p)return!1;if(c===u)return!0;if(n&&h>1)return!1;r.add(c);var d=h+1;if(Array.isArray(c)){if(!Array.isArray(u)||c.length!==u.length)return!1;for(var g=0;g<c.length;g++)if(!o(c[g],u[g],d))return!1;return!0}if(c&&u&&Ht(c)==="object"&&Ht(u)==="object"){var _=Object.keys(c);return _.length!==Object.keys(u).length?!1:_.every(function(v){return o(c[v],u[v],d)})}return!1}return o(a,e)}var YT="%";function Lp(a){return a.join(YT)}var jT=function(){function a(e){va(this,a),Ke(this,"instanceId",void 0),Ke(this,"cache",new Map),Ke(this,"extracted",new Set),this.instanceId=e}return _a(a,[{key:"get",value:function(n){return this.opGet(Lp(n))}},{key:"opGet",value:function(n){return this.cache.get(n)||null}},{key:"update",value:function(n,r){return this.opUpdate(Lp(n),r)}},{key:"opUpdate",value:function(n,r){var o=this.cache.get(n),c=r(o);c===null?this.cache.delete(n):this.cache.set(n,c)}}]),a}(),go="data-token-hash",Qi="data-css-hash",Rr="__cssinjs_instance__";function ZT(){var a=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){var e=document.body.querySelectorAll("style[".concat(Qi,"]"))||[],n=document.head.firstChild;Array.from(e).forEach(function(o){o[Rr]=o[Rr]||a,o[Rr]===a&&document.head.insertBefore(o,n)});var r={};Array.from(document.querySelectorAll("style[".concat(Qi,"]"))).forEach(function(o){var c=o.getAttribute(Qi);if(r[c]){if(o[Rr]===a){var u;(u=o.parentNode)===null||u===void 0||u.removeChild(o)}}else r[c]=!0})}return new jT(a)}var Jl=W.createContext({hashPriority:"low",cache:ZT(),defaultCache:!0});function KT(a,e){if(a.length!==e.length)return!1;for(var n=0;n<a.length;n++)if(a[n]!==e[n])return!1;return!0}var c0=function(){function a(){va(this,a),Ke(this,"cache",void 0),Ke(this,"keys",void 0),Ke(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return _a(a,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(n){var r,o,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u={map:this.cache};return n.forEach(function(h){if(!u)u=void 0;else{var p;u=(p=u)===null||p===void 0||(p=p.map)===null||p===void 0?void 0:p.get(h)}}),(r=u)!==null&&r!==void 0&&r.value&&c&&(u.value[1]=this.cacheCallTimes++),(o=u)===null||o===void 0?void 0:o.value}},{key:"get",value:function(n){var r;return(r=this.internalGet(n,!0))===null||r===void 0?void 0:r[0]}},{key:"has",value:function(n){return!!this.internalGet(n)}},{key:"set",value:function(n,r){var o=this;if(!this.has(n)){if(this.size()+1>a.MAX_CACHE_SIZE+a.MAX_CACHE_OFFSET){var c=this.keys.reduce(function(d,g){var _=ot(d,2),v=_[1];return o.internalGet(g)[1]<v?[g,o.internalGet(g)[1]]:d},[this.keys[0],this.cacheCallTimes]),u=ot(c,1),h=u[0];this.delete(h)}this.keys.push(n)}var p=this.cache;n.forEach(function(d,g){if(g===n.length-1)p.set(d,{value:[r,o.cacheCallTimes++]});else{var _=p.get(d);_?_.map||(_.map=new Map):p.set(d,{map:new Map}),p=p.get(d).map}})}},{key:"deleteByPath",value:function(n,r){var o=n.get(r[0]);if(r.length===1){var c;return o.map?n.set(r[0],{map:o.map}):n.delete(r[0]),(c=o.value)===null||c===void 0?void 0:c[0]}var u=this.deleteByPath(o.map,r.slice(1));return(!o.map||o.map.size===0)&&!o.value&&n.delete(r[0]),u}},{key:"delete",value:function(n){if(this.has(n))return this.keys=this.keys.filter(function(r){return!KT(r,n)}),this.deleteByPath(this.cache,n)}}]),a}();Ke(c0,"MAX_CACHE_SIZE",20);Ke(c0,"MAX_CACHE_OFFSET",5);var Tx=0,US=function(){function a(e){va(this,a),Ke(this,"derivatives",void 0),Ke(this,"id",void 0),this.derivatives=Array.isArray(e)?e:[e],this.id=Tx,e.length===0&&(e.length>0,void 0),Tx+=1}return _a(a,[{key:"getDerivativeToken",value:function(n){return this.derivatives.reduce(function(r,o){return o(n,r)},void 0)}}]),a}(),zh=new c0;function Op(a){var e=Array.isArray(a)?a:[a];return zh.has(e)||zh.set(e,new US(e)),zh.get(e)}var $T=new WeakMap,Hh={};function QT(a,e){for(var n=$T,r=0;r<e.length;r+=1){var o=e[r];n.has(o)||n.set(o,new WeakMap),n=n.get(o)}return n.has(Hh)||n.set(Hh,a()),n.get(Hh)}var Ax=new WeakMap;function Bl(a){var e=Ax.get(a)||"";return e||(Object.keys(a).forEach(function(n){var r=a[n];e+=n,r instanceof US?e+=r.id:r&&Ht(r)==="object"?e+=Bl(r):e+=r}),e=Vl(e),Ax.set(a,e)),e}function Cx(a,e){return Vl("".concat(e,"_").concat(Bl(a)))}var Pp=ja();function Rx(a){return typeof a=="number"?"".concat(a,"px"):a}function ef(a,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(o)return a;var c=Xe(Xe({},r),{},Ke(Ke({},go,e),Qi,n)),u=Object.keys(c).map(function(h){var p=c[h];return p?"".concat(h,'="').concat(p,'"'):null}).filter(function(h){return h}).join(" ");return"<style ".concat(u,">").concat(a,"</style>")}var Hu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"--".concat(n?"".concat(n,"-"):"").concat(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase()},JT=function(e,n,r){return Object.keys(e).length?".".concat(n).concat(r!=null&&r.scope?".".concat(r.scope):"","{").concat(Object.entries(e).map(function(o){var c=ot(o,2),u=c[0],h=c[1];return"".concat(u,":").concat(h,";")}).join(""),"}"):""},LS=function(e,n,r){var o={},c={};return Object.entries(e).forEach(function(u){var h,p,d=ot(u,2),g=d[0],_=d[1];if(r!=null&&(h=r.preserve)!==null&&h!==void 0&&h[g])c[g]=_;else if((typeof _=="string"||typeof _=="number")&&!(r!=null&&(p=r.ignore)!==null&&p!==void 0&&p[g])){var v,S=Hu(g,r?.prefix);o[S]=typeof _=="number"&&!(r!=null&&(v=r.unitless)!==null&&v!==void 0&&v[g])?"".concat(_,"px"):String(_),c[g]="var(".concat(S,")")}}),[c,JT(o,n,{scope:r?.scope})]},wx=ja()?W.useLayoutEffect:W.useEffect,eA=function(e,n){var r=W.useRef(!0);wx(function(){return e(r.current)},n),wx(function(){return r.current=!1,function(){r.current=!0}},[])},tA=Xe({},i0),Dx=tA.useInsertionEffect,nA=function(e,n,r){W.useMemo(e,r),eA(function(){return n(!0)},r)},iA=Dx?function(a,e,n){return Dx(function(){return a(),e()},n)}:nA,aA=Xe({},i0),rA=aA.useInsertionEffect,sA=function(e){var n=[],r=!1;function o(c){r||n.push(c)}return W.useEffect(function(){return r=!1,function(){r=!0,n.length&&n.forEach(function(c){return c()})}},e),o},oA=function(){return function(e){e()}},lA=typeof rA<"u"?sA:oA;function u0(a,e,n,r,o){var c=W.useContext(Jl),u=c.cache,h=[a].concat(ci(e)),p=Lp(h),d=lA([p]),g=function(M){u.opUpdate(p,function(A){var x=A||[void 0,void 0],y=ot(x,2),U=y[0],P=U===void 0?0:U,C=y[1],R=C,N=R||n(),O=[P,N];return M?M(O):O})};W.useMemo(function(){g()},[p]);var _=u.opGet(p),v=_[1];return iA(function(){o?.(v)},function(S){return g(function(M){var A=ot(M,2),x=A[0],y=A[1];return S&&x===0&&o?.(v),[x+1,y]}),function(){u.opUpdate(p,function(M){var A=M||[],x=ot(A,2),y=x[0],U=y===void 0?0:y,P=x[1],C=U-1;return C===0?(d(function(){(S||!u.opGet(p))&&r?.(P,!1)}),null):[U-1,P]})}},[p]),v}var cA={},uA="css",es=new Map;function fA(a){es.set(a,(es.get(a)||0)+1)}function dA(a,e){if(typeof document<"u"){var n=document.querySelectorAll("style[".concat(go,'="').concat(a,'"]'));n.forEach(function(r){if(r[Rr]===e){var o;(o=r.parentNode)===null||o===void 0||o.removeChild(r)}})}}var hA=0;function pA(a,e){es.set(a,(es.get(a)||0)-1);var n=new Set;es.forEach(function(r,o){r<=0&&n.add(o)}),es.size-n.size>hA&&n.forEach(function(r){dA(r,e),es.delete(r)})}var mA=function(e,n,r,o){var c=r.getDerivativeToken(e),u=Xe(Xe({},c),n);return o&&(u=o(u)),u},OS="token";function gA(a,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=W.useContext(Jl),o=r.cache.instanceId,c=r.container,u=n.salt,h=u===void 0?"":u,p=n.override,d=p===void 0?cA:p,g=n.formatToken,_=n.getComputedToken,v=n.cssVar,S=QT(function(){return Object.assign.apply(Object,[{}].concat(ci(e)))},e),M=Bl(S),A=Bl(d),x=v?Bl(v):"",y=u0(OS,[h,a.id,M,A,x],function(){var U,P=_?_(S,d,a):mA(S,d,a,g),C=Xe({},P),R="";if(v){var N=LS(P,v.key,{prefix:v.prefix,ignore:v.ignore,unitless:v.unitless,preserve:v.preserve}),O=ot(N,2);P=O[0],R=O[1]}var b=Cx(P,h);P._tokenKey=b,C._tokenKey=Cx(C,h);var L=(U=v?.key)!==null&&U!==void 0?U:b;P._themeKey=L,fA(L);var G="".concat(uA,"-").concat(Vl(b));return P._hashId=G,[P,G,C,R,v?.key||""]},function(U){pA(U[0]._themeKey,o)},function(U){var P=ot(U,4),C=P[0],R=P[3];if(v&&R){var N=os(R,Vl("css-variables-".concat(C._themeKey)),{mark:Qi,prepend:"queue",attachTo:c,priority:-999});N[Rr]=o,N.setAttribute(go,C._themeKey)}});return y}var vA=function(e,n,r){var o=ot(e,5),c=o[2],u=o[3],h=o[4],p=r||{},d=p.plain;if(!u)return null;var g=c._tokenKey,_=-999,v={"data-rc-order":"prependQueue","data-rc-priority":"".concat(_)},S=ef(u,h,g,v,d);return[_,g,S]},_A={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},PS="comm",IS="rule",FS="decl",xA="@import",yA="@namespace",SA="@keyframes",MA="@layer",BS=Math.abs,f0=String.fromCharCode;function zS(a){return a.trim()}function Gu(a,e,n){return a.replace(e,n)}function bA(a,e,n){return a.indexOf(e,n)}function fo(a,e){return a.charCodeAt(e)|0}function vo(a,e,n){return a.slice(e,n)}function ca(a){return a.length}function EA(a){return a.length}function fu(a,e){return e.push(a),a}var _f=1,_o=1,HS=0,zi=0,En=0,Eo="";function d0(a,e,n,r,o,c,u,h){return{value:a,root:e,parent:n,type:r,props:o,children:c,line:_f,column:_o,length:u,return:"",siblings:h}}function TA(){return En}function AA(){return En=zi>0?fo(Eo,--zi):0,_o--,En===10&&(_o=1,_f--),En}function Ji(){return En=zi<HS?fo(Eo,zi++):0,_o++,En===10&&(_o=1,_f++),En}function wr(){return fo(Eo,zi)}function Vu(){return zi}function xf(a,e){return vo(Eo,a,e)}function kl(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function CA(a){return _f=_o=1,HS=ca(Eo=a),zi=0,[]}function RA(a){return Eo="",a}function Gh(a){return zS(xf(zi-1,Ip(a===91?a+2:a===40?a+1:a)))}function wA(a){for(;(En=wr())&&En<33;)Ji();return kl(a)>2||kl(En)>3?"":" "}function DA(a,e){for(;--e&&Ji()&&!(En<48||En>102||En>57&&En<65||En>70&&En<97););return xf(a,Vu()+(e<6&&wr()==32&&Ji()==32))}function Ip(a){for(;Ji();)switch(En){case a:return zi;case 34:case 39:a!==34&&a!==39&&Ip(En);break;case 40:a===41&&Ip(a);break;case 92:Ji();break}return zi}function NA(a,e){for(;Ji()&&a+En!==57;)if(a+En===84&&wr()===47)break;return"/*"+xf(e,zi-1)+"*"+f0(a===47?a:Ji())}function UA(a){for(;!kl(wr());)Ji();return xf(a,zi)}function LA(a){return RA(ku("",null,null,null,[""],a=CA(a),0,[0],a))}function ku(a,e,n,r,o,c,u,h,p){for(var d=0,g=0,_=u,v=0,S=0,M=0,A=1,x=1,y=1,U=0,P="",C=o,R=c,N=r,O=P;x;)switch(M=U,U=Ji()){case 40:if(M!=108&&fo(O,_-1)==58){bA(O+=Gu(Gh(U),"&","&\f"),"&\f",BS(d?h[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:O+=Gh(U);break;case 9:case 10:case 13:case 32:O+=wA(M);break;case 92:O+=DA(Vu()-1,7);continue;case 47:switch(wr()){case 42:case 47:fu(OA(NA(Ji(),Vu()),e,n,p),p),(kl(M||1)==5||kl(wr()||1)==5)&&ca(O)&&vo(O,-1,void 0)!==" "&&(O+=" ");break;default:O+="/"}break;case 123*A:h[d++]=ca(O)*y;case 125*A:case 59:case 0:switch(U){case 0:case 125:x=0;case 59+g:y==-1&&(O=Gu(O,/\f/g,"")),S>0&&(ca(O)-_||A===0&&M===47)&&fu(S>32?Ux(O+";",r,n,_-1,p):Ux(Gu(O," ","")+";",r,n,_-2,p),p);break;case 59:O+=";";default:if(fu(N=Nx(O,e,n,d,g,o,h,P,C=[],R=[],_,c),c),U===123)if(g===0)ku(O,e,N,N,C,c,_,h,R);else{switch(v){case 99:if(fo(O,3)===110)break;case 108:if(fo(O,2)===97)break;default:g=0;case 100:case 109:case 115:}g?ku(a,N,N,r&&fu(Nx(a,N,N,0,0,o,h,P,o,C=[],_,R),R),o,R,_,h,r?C:R):ku(O,N,N,N,[""],R,0,h,R)}}d=g=S=0,A=y=1,P=O="",_=u;break;case 58:_=1+ca(O),S=M;default:if(A<1){if(U==123)--A;else if(U==125&&A++==0&&AA()==125)continue}switch(O+=f0(U),U*A){case 38:y=g>0?1:(O+="\f",-1);break;case 44:h[d++]=(ca(O)-1)*y,y=1;break;case 64:wr()===45&&(O+=Gh(Ji())),v=wr(),g=_=ca(P=O+=UA(Vu())),U++;break;case 45:M===45&&ca(O)==2&&(A=0)}}return c}function Nx(a,e,n,r,o,c,u,h,p,d,g,_){for(var v=o-1,S=o===0?c:[""],M=EA(S),A=0,x=0,y=0;A<r;++A)for(var U=0,P=vo(a,v+1,v=BS(x=u[A])),C=a;U<M;++U)(C=zS(x>0?S[U]+" "+P:Gu(P,/&\f/g,S[U])))&&(p[y++]=C);return d0(a,e,n,o===0?IS:h,p,d,g,_)}function OA(a,e,n,r){return d0(a,e,n,PS,f0(TA()),vo(a,2,-2),0,r)}function Ux(a,e,n,r,o){return d0(a,e,n,FS,vo(a,0,r),vo(a,r+1,-1),r,o)}function Fp(a,e){for(var n="",r=0;r<a.length;r++)n+=e(a[r],r,a,e)||"";return n}function PA(a,e,n,r){switch(a.type){case MA:if(a.children.length)break;case xA:case yA:case FS:return a.return=a.return||a.value;case PS:return"";case SA:return a.return=a.value+"{"+Fp(a.children,r)+"}";case IS:if(!ca(a.value=a.props.join(",")))return""}return ca(n=Fp(a.children,r))?a.return=a.value+"{"+n+"}":""}var Lx="data-ant-cssinjs-cache-path",GS="_FILE_STYLE__",ls,VS=!0;function IA(){if(!ls&&(ls={},ja())){var a=document.createElement("div");a.className=Lx,a.style.position="fixed",a.style.visibility="hidden",a.style.top="-9999px",document.body.appendChild(a);var e=getComputedStyle(a).content||"";e=e.replace(/^"/,"").replace(/"$/,""),e.split(";").forEach(function(o){var c=o.split(":"),u=ot(c,2),h=u[0],p=u[1];ls[h]=p});var n=document.querySelector("style[".concat(Lx,"]"));if(n){var r;VS=!1,(r=n.parentNode)===null||r===void 0||r.removeChild(n)}document.body.removeChild(a)}}function FA(a){return IA(),!!ls[a]}function BA(a){var e=ls[a],n=null;if(e&&ja())if(VS)n=GS;else{var r=document.querySelector("style[".concat(Qi,'="').concat(ls[a],'"]'));r?n=r.innerHTML:delete ls[a]}return[n,e]}var zA="_skip_check_",kS="_multi_value_";function Xu(a){var e=Fp(LA(a),PA);return e.replace(/\{%%%\:[^;];}/g,";")}function HA(a){return Ht(a)==="object"&&a&&(zA in a||kS in a)}function Ox(a,e,n){if(!e)return a;var r=".".concat(e),o=n==="low"?":where(".concat(r,")"):r,c=a.split(",").map(function(u){var h,p=u.trim().split(/\s+/),d=p[0]||"",g=((h=d.match(/^\w+/))===null||h===void 0?void 0:h[0])||"";return d="".concat(g).concat(o).concat(d.slice(g.length)),[d].concat(ci(p.slice(1))).join(" ")});return c.join(",")}var GA=function a(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},o=r.root,c=r.injectHash,u=r.parentSelectors,h=n.hashId,p=n.layer;n.path;var d=n.hashPriority,g=n.transformers,_=g===void 0?[]:g;n.linters;var v="",S={};function M(y){var U=y.getName(h);if(!S[U]){var P=a(y.style,n,{root:!1,parentSelectors:u}),C=ot(P,1),R=C[0];S[U]="@keyframes ".concat(y.getName(h)).concat(R)}}function A(y){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return y.forEach(function(P){Array.isArray(P)?A(P,U):P&&U.push(P)}),U}var x=A(Array.isArray(e)?e:[e]);return x.forEach(function(y){var U=typeof y=="string"&&!o?{}:y;if(typeof U=="string")v+="".concat(U,`
`);else if(U._keyframe)M(U);else{var P=_.reduce(function(C,R){var N;return(R==null||(N=R.visit)===null||N===void 0?void 0:N.call(R,C))||C},U);Object.keys(P).forEach(function(C){var R=P[C];if(Ht(R)==="object"&&R&&(C!=="animationName"||!R._keyframe)&&!HA(R)){var N=!1,O=C.trim(),b=!1;(o||c)&&h?O.startsWith("@")?N=!0:O==="&"?O=Ox("",h,d):O=Ox(C,h,d):o&&!h&&(O==="&"||O==="")&&(O="",b=!0);var L=a(R,n,{root:b,injectHash:N,parentSelectors:[].concat(ci(u),[O])}),G=ot(L,2),z=G[0],V=G[1];S=Xe(Xe({},S),V),v+="".concat(O).concat(z)}else{let k=function(I,H){var J=I.replace(/[A-Z]/g,function(F){return"-".concat(F.toLowerCase())}),fe=H;!_A[I]&&typeof fe=="number"&&fe!==0&&(fe="".concat(fe,"px")),I==="animationName"&&H!==null&&H!==void 0&&H._keyframe&&(M(H),fe=H.getName(h)),v+="".concat(J,":").concat(fe,";")};var Y,$=(Y=R?.value)!==null&&Y!==void 0?Y:R;Ht(R)==="object"&&R!==null&&R!==void 0&&R[kS]&&Array.isArray($)?$.forEach(function(I){k(C,I)}):k(C,$)}})}}),o?p&&(v&&(v="@layer ".concat(p.name," {").concat(v,"}")),p.dependencies&&(S["@layer ".concat(p.name)]=p.dependencies.map(function(y){return"@layer ".concat(y,", ").concat(p.name,";")}).join(`
`))):v="{".concat(v,"}"),[v,S]};function XS(a,e){return Vl("".concat(a.join("%")).concat(e))}function VA(){return null}var WS="style";function Bp(a,e){var n=a.token,r=a.path,o=a.hashId,c=a.layer,u=a.nonce,h=a.clientOnly,p=a.order,d=p===void 0?0:p,g=W.useContext(Jl),_=g.autoClear;g.mock;var v=g.defaultCache,S=g.hashPriority,M=g.container,A=g.ssrInline,x=g.transformers,y=g.linters,U=g.cache,P=g.layer,C=n._tokenKey,R=[C];P&&R.push("layer"),R.push.apply(R,ci(r));var N=Pp,O=u0(WS,R,function(){var V=R.join("|");if(FA(V)){var Y=BA(V),$=ot(Y,2),k=$[0],I=$[1];if(k)return[k,C,I,{},h,d]}var H=e(),J=GA(H,{hashId:o,hashPriority:S,layer:P?c:void 0,path:r.join("-"),transformers:x,linters:y}),fe=ot(J,2),F=fe[0],K=fe[1],se=Xu(F),_e=XS(R,se);return[se,C,_e,K,h,d]},function(V,Y){var $=ot(V,3),k=$[2];(Y||_)&&Pp&&NS(k,{mark:Qi,attachTo:M})},function(V){var Y=ot(V,4),$=Y[0];Y[1];var k=Y[2],I=Y[3];if(N&&$!==GS){var H={mark:Qi,prepend:P?!1:"queue",attachTo:M,priority:d},J=typeof u=="function"?u():u;J&&(H.csp={nonce:J});var fe=[],F=[];Object.keys(I).forEach(function(se){se.startsWith("@layer")?fe.push(se):F.push(se)}),fe.forEach(function(se){os(Xu(I[se]),"_layer-".concat(se),Xe(Xe({},H),{},{prepend:!0}))});var K=os($,k,H);K[Rr]=U.instanceId,K.setAttribute(go,C),F.forEach(function(se){os(Xu(I[se]),"_effect-".concat(se),H)})}}),b=ot(O,3),L=b[0],G=b[1],z=b[2];return function(V){var Y;return!A||N||!v?Y=W.createElement(VA,null):Y=W.createElement("style",ii({},Ke(Ke({},go,G),Qi,z),{dangerouslySetInnerHTML:{__html:L}})),W.createElement(W.Fragment,null,Y,V)}}var kA=function(e,n,r){var o=ot(e,6),c=o[0],u=o[1],h=o[2],p=o[3],d=o[4],g=o[5],_=r||{},v=_.plain;if(d)return null;var S=c,M={"data-rc-order":"prependQueue","data-rc-priority":"".concat(g)};return S=ef(c,u,h,M,v),p&&Object.keys(p).forEach(function(A){if(!n[A]){n[A]=!0;var x=Xu(p[A]),y=ef(x,u,"_effect-".concat(A),M,v);A.startsWith("@layer")?S=y+S:S+=y}}),[g,h,S]},qS="cssVar",XA=function(e,n){var r=e.key,o=e.prefix,c=e.unitless,u=e.ignore,h=e.token,p=e.scope,d=p===void 0?"":p,g=W.useContext(Jl),_=g.cache.instanceId,v=g.container,S=h._tokenKey,M=[].concat(ci(e.path),[r,d,S]),A=u0(qS,M,function(){var x=n(),y=LS(x,r,{prefix:o,unitless:c,ignore:u,scope:d}),U=ot(y,2),P=U[0],C=U[1],R=XS(M,C);return[P,C,R,r]},function(x){var y=ot(x,3),U=y[2];Pp&&NS(U,{mark:Qi,attachTo:v})},function(x){var y=ot(x,3),U=y[1],P=y[2];if(U){var C=os(U,P,{mark:Qi,prepend:"queue",attachTo:v,priority:-999});C[Rr]=_,C.setAttribute(go,r)}});return A},WA=function(e,n,r){var o=ot(e,4),c=o[1],u=o[2],h=o[3],p=r||{},d=p.plain;if(!c)return null;var g=-999,_={"data-rc-order":"prependQueue","data-rc-priority":"".concat(g)},v=ef(c,h,u,_,d);return[g,u,v]};Ke(Ke(Ke({},WS,kA),OS,vA),qS,WA);var Px=function(){function a(e,n){va(this,a),Ke(this,"name",void 0),Ke(this,"style",void 0),Ke(this,"_keyframe",!0),this.name=e,this.style=n}return _a(a,[{key:"getName",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return n?"".concat(n,"-").concat(this.name):this.name}}]),a}();function Ys(a){return a.notSplit=!0,a}Ys(["borderTop","borderBottom"]),Ys(["borderTop"]),Ys(["borderBottom"]),Ys(["borderLeft","borderRight"]),Ys(["borderLeft"]),Ys(["borderRight"]);var h0=W.createContext({});function qA(a){return AS(a)||MS(a)||s0(a)||CS()}function zp(a,e){for(var n=a,r=0;r<e.length;r+=1){if(n==null)return;n=n[e[r]]}return n}function YS(a,e,n,r){if(!e.length)return n;var o=qA(e),c=o[0],u=o.slice(1),h;return!a&&typeof c=="number"?h=[]:Array.isArray(a)?h=ci(a):h=Xe({},a),r&&n===void 0&&u.length===1?delete h[c][u[0]]:h[c]=YS(h[c],u,n,r),h}function Vh(a,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.length&&r&&n===void 0&&!zp(a,e.slice(0,-1))?a:YS(a,e,n,r)}function YA(a){return Ht(a)==="object"&&a!==null&&Object.getPrototypeOf(a)===Object.prototype}function Ix(a){return Array.isArray(a)?[]:{}}var jA=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function ZA(){for(var a=arguments.length,e=new Array(a),n=0;n<a;n++)e[n]=arguments[n];var r=Ix(e[0]);return e.forEach(function(o){function c(u,h){var p=new Set(h),d=zp(o,u),g=Array.isArray(d);if(g||YA(d)){if(!p.has(d)){p.add(d);var _=zp(r,u);g?r=Vh(r,u,[]):(!_||Ht(_)!=="object")&&(r=Vh(r,u,Ix(d))),jA(d).forEach(function(v){c([].concat(ci(u),[v]),p)})}}else r=Vh(r,u,d)}c([])}),r}const KA=W.createContext({}),$A=W.createContext(void 0),xi="${label} is not a valid ${type}",yf={Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:xi,method:xi,array:xi,object:xi,number:xi,date:xi,boolean:xi,integer:xi,float:xi,regexp:xi,email:xi,url:xi,hex:xi},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}}};Object.assign({},yf.Modal);let Wu=[];const Fx=()=>Wu.reduce((a,e)=>Object.assign(Object.assign({},a),e),yf.Modal);function QA(a){if(a){const e=Object.assign({},a);return Wu.push(e),Fx(),()=>{Wu=Wu.filter(n=>n!==e),Fx()}}Object.assign({},yf.Modal)}const jS=W.createContext(void 0),JA="internalMark",eC=a=>{const{locale:e={},children:n,_ANT_MARK__:r}=a;W.useEffect(()=>QA(e?.Modal),[e]);const o=W.useMemo(()=>Object.assign(Object.assign({},e),{exist:!0}),[e]);return W.createElement(jS.Provider,{value:o},n)},ZS={blue:"#1677FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#EB2F96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},Xl=Object.assign(Object.assign({},ZS),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0}),On=Math.round;function kh(a,e){const n=a.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],r=n.map(o=>parseFloat(o));for(let o=0;o<3;o+=1)r[o]=e(r[o]||0,n[o]||"",o);return n[3]?r[3]=n[3].includes("%")?r[3]/100:r[3]:r[3]=1,r}const Bx=(a,e,n)=>n===0?a:a/100;function Tl(a,e){const n=e||255;return a>n?n:a<0?0:a}class xn{constructor(e){Ke(this,"isValid",!0),Ke(this,"r",0),Ke(this,"g",0),Ke(this,"b",0),Ke(this,"a",1),Ke(this,"_h",void 0),Ke(this,"_s",void 0),Ke(this,"_l",void 0),Ke(this,"_v",void 0),Ke(this,"_max",void 0),Ke(this,"_min",void 0),Ke(this,"_brightness",void 0);function n(o){return o[0]in e&&o[1]in e&&o[2]in e}if(e)if(typeof e=="string"){let c=function(u){return o.startsWith(u)};var r=c;const o=e.trim();/^#?[A-F\d]{3,8}$/i.test(o)?this.fromHexString(o):c("rgb")?this.fromRgbString(o):c("hsl")?this.fromHslString(o):(c("hsv")||c("hsb"))&&this.fromHsvString(o)}else if(e instanceof xn)this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this._h=e._h,this._s=e._s,this._l=e._l,this._v=e._v;else if(n("rgb"))this.r=Tl(e.r),this.g=Tl(e.g),this.b=Tl(e.b),this.a=typeof e.a=="number"?Tl(e.a,1):1;else if(n("hsl"))this.fromHsl(e);else if(n("hsv"))this.fromHsv(e);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(e))}setR(e){return this._sc("r",e)}setG(e){return this._sc("g",e)}setB(e){return this._sc("b",e)}setA(e){return this._sc("a",e,1)}setHue(e){const n=this.toHsv();return n.h=e,this._c(n)}getLuminance(){function e(c){const u=c/255;return u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)}const n=e(this.r),r=e(this.g),o=e(this.b);return .2126*n+.7152*r+.0722*o}getHue(){if(typeof this._h>"u"){const e=this.getMax()-this.getMin();e===0?this._h=0:this._h=On(60*(this.r===this.getMax()?(this.g-this.b)/e+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/e+2:(this.r-this.g)/e+4))}return this._h}getSaturation(){if(typeof this._s>"u"){const e=this.getMax()-this.getMin();e===0?this._s=0:this._s=e/this.getMax()}return this._s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(e=10){const n=this.getHue(),r=this.getSaturation();let o=this.getLightness()-e/100;return o<0&&(o=0),this._c({h:n,s:r,l:o,a:this.a})}lighten(e=10){const n=this.getHue(),r=this.getSaturation();let o=this.getLightness()+e/100;return o>1&&(o=1),this._c({h:n,s:r,l:o,a:this.a})}mix(e,n=50){const r=this._c(e),o=n/100,c=h=>(r[h]-this[h])*o+this[h],u={r:On(c("r")),g:On(c("g")),b:On(c("b")),a:On(c("a")*100)/100};return this._c(u)}tint(e=10){return this.mix({r:255,g:255,b:255,a:1},e)}shade(e=10){return this.mix({r:0,g:0,b:0,a:1},e)}onBackground(e){const n=this._c(e),r=this.a+n.a*(1-this.a),o=c=>On((this[c]*this.a+n[c]*n.a*(1-this.a))/r);return this._c({r:o("r"),g:o("g"),b:o("b"),a:r})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}clone(){return this._c(this)}toHexString(){let e="#";const n=(this.r||0).toString(16);e+=n.length===2?n:"0"+n;const r=(this.g||0).toString(16);e+=r.length===2?r:"0"+r;const o=(this.b||0).toString(16);if(e+=o.length===2?o:"0"+o,typeof this.a=="number"&&this.a>=0&&this.a<1){const c=On(this.a*255).toString(16);e+=c.length===2?c:"0"+c}return e}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const e=this.getHue(),n=On(this.getSaturation()*100),r=On(this.getLightness()*100);return this.a!==1?`hsla(${e},${n}%,${r}%,${this.a})`:`hsl(${e},${n}%,${r}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(e,n,r){const o=this.clone();return o[e]=Tl(n,r),o}_c(e){return new this.constructor(e)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(e){const n=e.replace("#","");function r(o,c){return parseInt(n[o]+n[c||o],16)}n.length<6?(this.r=r(0),this.g=r(1),this.b=r(2),this.a=n[3]?r(3)/255:1):(this.r=r(0,1),this.g=r(2,3),this.b=r(4,5),this.a=n[6]?r(6,7)/255:1)}fromHsl({h:e,s:n,l:r,a:o}){if(this._h=e%360,this._s=n,this._l=r,this.a=typeof o=="number"?o:1,n<=0){const v=On(r*255);this.r=v,this.g=v,this.b=v}let c=0,u=0,h=0;const p=e/60,d=(1-Math.abs(2*r-1))*n,g=d*(1-Math.abs(p%2-1));p>=0&&p<1?(c=d,u=g):p>=1&&p<2?(c=g,u=d):p>=2&&p<3?(u=d,h=g):p>=3&&p<4?(u=g,h=d):p>=4&&p<5?(c=g,h=d):p>=5&&p<6&&(c=d,h=g);const _=r-d/2;this.r=On((c+_)*255),this.g=On((u+_)*255),this.b=On((h+_)*255)}fromHsv({h:e,s:n,v:r,a:o}){this._h=e%360,this._s=n,this._v=r,this.a=typeof o=="number"?o:1;const c=On(r*255);if(this.r=c,this.g=c,this.b=c,n<=0)return;const u=e/60,h=Math.floor(u),p=u-h,d=On(r*(1-n)*255),g=On(r*(1-n*p)*255),_=On(r*(1-n*(1-p))*255);switch(h){case 0:this.g=_,this.b=d;break;case 1:this.r=g,this.b=d;break;case 2:this.r=d,this.b=_;break;case 3:this.r=d,this.g=g;break;case 4:this.r=_,this.g=d;break;case 5:default:this.g=d,this.b=g;break}}fromHsvString(e){const n=kh(e,Bx);this.fromHsv({h:n[0],s:n[1],v:n[2],a:n[3]})}fromHslString(e){const n=kh(e,Bx);this.fromHsl({h:n[0],s:n[1],l:n[2],a:n[3]})}fromRgbString(e){const n=kh(e,(r,o)=>o.includes("%")?On(r/100*255):r);this.r=n[0],this.g=n[1],this.b=n[2],this.a=n[3]}}var du=2,zx=.16,tC=.05,nC=.05,iC=.15,KS=5,$S=4,aC=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function Hx(a,e,n){var r;return Math.round(a.h)>=60&&Math.round(a.h)<=240?r=n?Math.round(a.h)-du*e:Math.round(a.h)+du*e:r=n?Math.round(a.h)+du*e:Math.round(a.h)-du*e,r<0?r+=360:r>=360&&(r-=360),r}function Gx(a,e,n){if(a.h===0&&a.s===0)return a.s;var r;return n?r=a.s-zx*e:e===$S?r=a.s+zx:r=a.s+tC*e,r>1&&(r=1),n&&e===KS&&r>.1&&(r=.1),r<.06&&(r=.06),Math.round(r*100)/100}function Vx(a,e,n){var r;return n?r=a.v+nC*e:r=a.v-iC*e,r=Math.max(0,Math.min(1,r)),Math.round(r*100)/100}function Wl(a){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=new xn(a),o=r.toHsv(),c=KS;c>0;c-=1){var u=new xn({h:Hx(o,c,!0),s:Gx(o,c,!0),v:Vx(o,c,!0)});n.push(u)}n.push(r);for(var h=1;h<=$S;h+=1){var p=new xn({h:Hx(o,h),s:Gx(o,h),v:Vx(o,h)});n.push(p)}return e.theme==="dark"?aC.map(function(d){var g=d.index,_=d.amount;return new xn(e.backgroundColor||"#141414").mix(n[g],_).toHexString()}):n.map(function(d){return d.toHexString()})}var Xh={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Hp=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];Hp.primary=Hp[5];var Gp=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];Gp.primary=Gp[5];var Vp=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];Vp.primary=Vp[5];var kp=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];kp.primary=kp[5];var Xp=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];Xp.primary=Xp[5];var Wp=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];Wp.primary=Wp[5];var qp=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];qp.primary=qp[5];var Yp=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];Yp.primary=Yp[5];var tf=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];tf.primary=tf[5];var jp=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];jp.primary=jp[5];var Zp=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];Zp.primary=Zp[5];var Kp=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];Kp.primary=Kp[5];var $p=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];$p.primary=$p[5];var Wh={red:Hp,volcano:Gp,orange:Vp,gold:kp,yellow:Xp,lime:Wp,green:qp,cyan:Yp,blue:tf,geekblue:jp,purple:Zp,magenta:Kp,grey:$p};function rC(a,{generateColorPalettes:e,generateNeutralColorPalettes:n}){const{colorSuccess:r,colorWarning:o,colorError:c,colorInfo:u,colorPrimary:h,colorBgBase:p,colorTextBase:d}=a,g=e(h),_=e(r),v=e(o),S=e(c),M=e(u),A=n(p,d),x=a.colorLink||a.colorInfo,y=e(x),U=new xn(S[1]).mix(new xn(S[3]),50).toHexString();return Object.assign(Object.assign({},A),{colorPrimaryBg:g[1],colorPrimaryBgHover:g[2],colorPrimaryBorder:g[3],colorPrimaryBorderHover:g[4],colorPrimaryHover:g[5],colorPrimary:g[6],colorPrimaryActive:g[7],colorPrimaryTextHover:g[8],colorPrimaryText:g[9],colorPrimaryTextActive:g[10],colorSuccessBg:_[1],colorSuccessBgHover:_[2],colorSuccessBorder:_[3],colorSuccessBorderHover:_[4],colorSuccessHover:_[4],colorSuccess:_[6],colorSuccessActive:_[7],colorSuccessTextHover:_[8],colorSuccessText:_[9],colorSuccessTextActive:_[10],colorErrorBg:S[1],colorErrorBgHover:S[2],colorErrorBgFilledHover:U,colorErrorBgActive:S[3],colorErrorBorder:S[3],colorErrorBorderHover:S[4],colorErrorHover:S[5],colorError:S[6],colorErrorActive:S[7],colorErrorTextHover:S[8],colorErrorText:S[9],colorErrorTextActive:S[10],colorWarningBg:v[1],colorWarningBgHover:v[2],colorWarningBorder:v[3],colorWarningBorderHover:v[4],colorWarningHover:v[4],colorWarning:v[6],colorWarningActive:v[7],colorWarningTextHover:v[8],colorWarningText:v[9],colorWarningTextActive:v[10],colorInfoBg:M[1],colorInfoBgHover:M[2],colorInfoBorder:M[3],colorInfoBorderHover:M[4],colorInfoHover:M[4],colorInfo:M[6],colorInfoActive:M[7],colorInfoTextHover:M[8],colorInfoText:M[9],colorInfoTextActive:M[10],colorLinkHover:y[4],colorLink:y[6],colorLinkActive:y[7],colorBgMask:new xn("#000").setA(.45).toRgbString(),colorWhite:"#fff"})}const sC=a=>{let e=a,n=a,r=a,o=a;return a<6&&a>=5?e=a+1:a<16&&a>=6?e=a+2:a>=16&&(e=16),a<7&&a>=5?n=4:a<8&&a>=7?n=5:a<14&&a>=8?n=6:a<16&&a>=14?n=7:a>=16&&(n=8),a<6&&a>=2?r=1:a>=6&&(r=2),a>4&&a<8?o=4:a>=8&&(o=6),{borderRadius:a,borderRadiusXS:r,borderRadiusSM:n,borderRadiusLG:e,borderRadiusOuter:o}};function oC(a){const{motionUnit:e,motionBase:n,borderRadius:r,lineWidth:o}=a;return Object.assign({motionDurationFast:`${(n+e).toFixed(1)}s`,motionDurationMid:`${(n+e*2).toFixed(1)}s`,motionDurationSlow:`${(n+e*3).toFixed(1)}s`,lineWidthBold:o+1},sC(r))}const lC=a=>{const{controlHeight:e}=a;return{controlHeightSM:e*.75,controlHeightXS:e*.5,controlHeightLG:e*1.25}};function cC(a){return(a+8)/a}function uC(a){const e=Array.from({length:10}).map((n,r)=>{const o=r-1,c=a*Math.pow(Math.E,o/5),u=r>1?Math.floor(c):Math.ceil(c);return Math.floor(u/2)*2});return e[1]=a,e.map(n=>({size:n,lineHeight:cC(n)}))}const fC=a=>{const e=uC(a),n=e.map(g=>g.size),r=e.map(g=>g.lineHeight),o=n[1],c=n[0],u=n[2],h=r[1],p=r[0],d=r[2];return{fontSizeSM:c,fontSize:o,fontSizeLG:u,fontSizeXL:n[3],fontSizeHeading1:n[6],fontSizeHeading2:n[5],fontSizeHeading3:n[4],fontSizeHeading4:n[3],fontSizeHeading5:n[2],lineHeight:h,lineHeightLG:d,lineHeightSM:p,fontHeight:Math.round(h*o),fontHeightLG:Math.round(d*u),fontHeightSM:Math.round(p*c),lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}};function dC(a){const{sizeUnit:e,sizeStep:n}=a;return{sizeXXL:e*(n+8),sizeXL:e*(n+4),sizeLG:e*(n+2),sizeMD:e*(n+1),sizeMS:e*n,size:e*n,sizeSM:e*(n-1),sizeXS:e*(n-2),sizeXXS:e*(n-3)}}const Ui=(a,e)=>new xn(a).setA(e).toRgbString(),Al=(a,e)=>new xn(a).darken(e).toHexString(),hC=a=>{const e=Wl(a);return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[4],6:e[5],7:e[6],8:e[4],9:e[5],10:e[6]}},pC=(a,e)=>{const n=a||"#fff",r=e||"#000";return{colorBgBase:n,colorTextBase:r,colorText:Ui(r,.88),colorTextSecondary:Ui(r,.65),colorTextTertiary:Ui(r,.45),colorTextQuaternary:Ui(r,.25),colorFill:Ui(r,.15),colorFillSecondary:Ui(r,.06),colorFillTertiary:Ui(r,.04),colorFillQuaternary:Ui(r,.02),colorBgSolid:Ui(r,1),colorBgSolidHover:Ui(r,.75),colorBgSolidActive:Ui(r,.95),colorBgLayout:Al(n,4),colorBgContainer:Al(n,0),colorBgElevated:Al(n,0),colorBgSpotlight:Ui(r,.85),colorBgBlur:"transparent",colorBorder:Al(n,15),colorBorderSecondary:Al(n,6)}};function mC(a){Xh.pink=Xh.magenta,Wh.pink=Wh.magenta;const e=Object.keys(ZS).map(n=>{const r=a[n]===Xh[n]?Wh[n]:Wl(a[n]);return Array.from({length:10},()=>1).reduce((o,c,u)=>(o[`${n}-${u+1}`]=r[u],o[`${n}${u+1}`]=r[u],o),{})}).reduce((n,r)=>(n=Object.assign(Object.assign({},n),r),n),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},a),e),rC(a,{generateColorPalettes:hC,generateNeutralColorPalettes:pC})),fC(a.fontSize)),dC(a)),lC(a)),oC(a))}const QS=Op(mC),Qp={token:Xl,override:{override:Xl},hashed:!0},JS=fn.createContext(Qp),Jp="ant",Sf="anticon",gC=(a,e)=>e||(a?`${Jp}-${a}`:Jp),Wa=W.createContext({getPrefixCls:gC,iconPrefixCls:Sf}),{Consumer:GO}=Wa,vC=`-ant-${Date.now()}-${Math.random()}`;function _C(a,e){const n={},r=(u,h)=>{let p=u.clone();return p=h?.(p)||p,p.toRgbString()},o=(u,h)=>{const p=new xn(u),d=Wl(p.toRgbString());n[`${h}-color`]=r(p),n[`${h}-color-disabled`]=d[1],n[`${h}-color-hover`]=d[4],n[`${h}-color-active`]=d[6],n[`${h}-color-outline`]=p.clone().setA(.2).toRgbString(),n[`${h}-color-deprecated-bg`]=d[0],n[`${h}-color-deprecated-border`]=d[2]};if(e.primaryColor){o(e.primaryColor,"primary");const u=new xn(e.primaryColor),h=Wl(u.toRgbString());h.forEach((d,g)=>{n[`primary-${g+1}`]=d}),n["primary-color-deprecated-l-35"]=r(u,d=>d.lighten(35)),n["primary-color-deprecated-l-20"]=r(u,d=>d.lighten(20)),n["primary-color-deprecated-t-20"]=r(u,d=>d.tint(20)),n["primary-color-deprecated-t-50"]=r(u,d=>d.tint(50)),n["primary-color-deprecated-f-12"]=r(u,d=>d.setA(d.a*.12));const p=new xn(h[0]);n["primary-color-active-deprecated-f-30"]=r(p,d=>d.setA(d.a*.3)),n["primary-color-active-deprecated-d-02"]=r(p,d=>d.darken(2))}return e.successColor&&o(e.successColor,"success"),e.warningColor&&o(e.warningColor,"warning"),e.errorColor&&o(e.errorColor,"error"),e.infoColor&&o(e.infoColor,"info"),`
  :root {
    ${Object.keys(n).map(u=>`--${a}-${u}: ${n[u]};`).join(`
`)}
  }
  `.trim()}function xC(a,e){const n=_C(a,e);ja()&&os(n,`${vC}-dynamic-theme`)}const em=W.createContext(!1),yC=({children:a,disabled:e})=>{const n=W.useContext(em);return W.createElement(em.Provider,{value:e??n},a)},ql=W.createContext(void 0),SC=({children:a,size:e})=>{const n=W.useContext(ql);return W.createElement(ql.Provider,{value:e||n},a)};function MC(){const a=W.useContext(em),e=W.useContext(ql);return{componentDisabled:a,componentSize:e}}var eM=_a(function a(){va(this,a)}),tM="CALC_UNIT",bC=new RegExp(tM,"g");function qh(a){return typeof a=="number"?"".concat(a).concat(tM):a}var EC=function(a){mf(n,a);var e=gf(n);function n(r,o){var c;va(this,n),c=e.call(this),Ke(ss(c),"result",""),Ke(ss(c),"unitlessCssVar",void 0),Ke(ss(c),"lowPriority",void 0);var u=Ht(r);return c.unitlessCssVar=o,r instanceof n?c.result="(".concat(r.result,")"):u==="number"?c.result=qh(r):u==="string"&&(c.result=r),c}return _a(n,[{key:"add",value:function(o){return o instanceof n?this.result="".concat(this.result," + ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," + ").concat(qh(o))),this.lowPriority=!0,this}},{key:"sub",value:function(o){return o instanceof n?this.result="".concat(this.result," - ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," - ").concat(qh(o))),this.lowPriority=!0,this}},{key:"mul",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof n?this.result="".concat(this.result," * ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," * ").concat(o)),this.lowPriority=!1,this}},{key:"div",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof n?this.result="".concat(this.result," / ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," / ").concat(o)),this.lowPriority=!1,this}},{key:"getResult",value:function(o){return this.lowPriority||o?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(o){var c=this,u=o||{},h=u.unit,p=!0;return typeof h=="boolean"?p=h:Array.from(this.unitlessCssVar).some(function(d){return c.result.includes(d)})&&(p=!1),this.result=this.result.replace(bC,p?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),n}(eM),TC=function(a){mf(n,a);var e=gf(n);function n(r){var o;return va(this,n),o=e.call(this),Ke(ss(o),"result",0),r instanceof n?o.result=r.result:typeof r=="number"&&(o.result=r),o}return _a(n,[{key:"add",value:function(o){return o instanceof n?this.result+=o.result:typeof o=="number"&&(this.result+=o),this}},{key:"sub",value:function(o){return o instanceof n?this.result-=o.result:typeof o=="number"&&(this.result-=o),this}},{key:"mul",value:function(o){return o instanceof n?this.result*=o.result:typeof o=="number"&&(this.result*=o),this}},{key:"div",value:function(o){return o instanceof n?this.result/=o.result:typeof o=="number"&&(this.result/=o),this}},{key:"equal",value:function(){return this.result}}]),n}(eM),AC=function(e,n){var r=e==="css"?EC:TC;return function(o){return new r(o,n)}},kx=function(e,n){return"".concat([n,e.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-"))};function nf(a){var e=W.useRef();e.current=a;var n=W.useCallback(function(){for(var r,o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];return(r=e.current)===null||r===void 0?void 0:r.call.apply(r,[e].concat(c))},[]);return n}function tm(a){var e=W.useRef(!1),n=W.useState(a),r=ot(n,2),o=r[0],c=r[1];W.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]);function u(h,p){p&&e.current||c(h)}return[o,u]}function Xx(a,e,n,r){var o=Xe({},e[a]);if(r!=null&&r.deprecatedTokens){var c=r.deprecatedTokens;c.forEach(function(h){var p=ot(h,2),d=p[0],g=p[1];if(o!=null&&o[d]||o!=null&&o[g]){var _;(_=o[g])!==null&&_!==void 0||(o[g]=o?.[d])}})}var u=Xe(Xe({},n),o);return Object.keys(u).forEach(function(h){u[h]===e[h]&&delete u[h]}),u}var nM=typeof CSSINJS_STATISTIC<"u",nm=!0;function p0(){for(var a=arguments.length,e=new Array(a),n=0;n<a;n++)e[n]=arguments[n];if(!nM)return Object.assign.apply(Object,[{}].concat(e));nm=!1;var r={};return e.forEach(function(o){if(Ht(o)==="object"){var c=Object.keys(o);c.forEach(function(u){Object.defineProperty(r,u,{configurable:!0,enumerable:!0,get:function(){return o[u]}})})}}),nm=!0,r}var Wx={};function CC(){}var RC=function(e){var n,r=e,o=CC;return nM&&typeof Proxy<"u"&&(n=new Set,r=new Proxy(e,{get:function(u,h){if(nm){var p;(p=n)===null||p===void 0||p.add(h)}return u[h]}}),o=function(u,h){var p;Wx[u]={global:Array.from(n),component:Xe(Xe({},(p=Wx[u])===null||p===void 0?void 0:p.component),h)}}),{token:r,keys:n,flush:o}};function qx(a,e,n){if(typeof n=="function"){var r;return n(p0(e,(r=e[a])!==null&&r!==void 0?r:{}))}return n??{}}function wC(a){return a==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return"max(".concat(r.map(function(c){return Rx(c)}).join(","),")")},min:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return"min(".concat(r.map(function(c){return Rx(c)}).join(","),")")}}}var DC=1e3*60*10,NC=function(){function a(){va(this,a),Ke(this,"map",new Map),Ke(this,"objectIDMap",new WeakMap),Ke(this,"nextID",0),Ke(this,"lastAccessBeat",new Map),Ke(this,"accessBeat",0)}return _a(a,[{key:"set",value:function(n,r){this.clear();var o=this.getCompositeKey(n);this.map.set(o,r),this.lastAccessBeat.set(o,Date.now())}},{key:"get",value:function(n){var r=this.getCompositeKey(n),o=this.map.get(r);return this.lastAccessBeat.set(r,Date.now()),this.accessBeat+=1,o}},{key:"getCompositeKey",value:function(n){var r=this,o=n.map(function(c){return c&&Ht(c)==="object"?"obj_".concat(r.getObjectID(c)):"".concat(Ht(c),"_").concat(c)});return o.join("|")}},{key:"getObjectID",value:function(n){if(this.objectIDMap.has(n))return this.objectIDMap.get(n);var r=this.nextID;return this.objectIDMap.set(n,r),this.nextID+=1,r}},{key:"clear",value:function(){var n=this;if(this.accessBeat>1e4){var r=Date.now();this.lastAccessBeat.forEach(function(o,c){r-o>DC&&(n.map.delete(c),n.lastAccessBeat.delete(c))}),this.accessBeat=0}}}]),a}(),Yx=new NC;function UC(a,e){return fn.useMemo(function(){var n=Yx.get(e);if(n)return n;var r=a();return Yx.set(e,r),r},e)}var LC=function(){return{}};function OC(a){var e=a.useCSP,n=e===void 0?LC:e,r=a.useToken,o=a.usePrefix,c=a.getResetStyles,u=a.getCommonStyle,h=a.getCompUnitless;function p(v,S,M,A){var x=Array.isArray(v)?v[0]:v;function y(b){return"".concat(String(x)).concat(b.slice(0,1).toUpperCase()).concat(b.slice(1))}var U=A?.unitless||{},P=typeof h=="function"?h(v):{},C=Xe(Xe({},P),{},Ke({},y("zIndexPopup"),!0));Object.keys(U).forEach(function(b){C[y(b)]=U[b]});var R=Xe(Xe({},A),{},{unitless:C,prefixToken:y}),N=g(v,S,M,R),O=d(x,M,R);return function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b,G=N(b,L),z=ot(G,2),V=z[1],Y=O(L),$=ot(Y,2),k=$[0],I=$[1];return[k,V,I]}}function d(v,S,M){var A=M.unitless,x=M.injectStyle,y=x===void 0?!0:x,U=M.prefixToken,P=M.ignore,C=function(O){var b=O.rootCls,L=O.cssVar,G=L===void 0?{}:L,z=r(),V=z.realToken;return XA({path:[v],prefix:G.prefix,key:G.key,unitless:A,ignore:P,token:V,scope:b},function(){var Y=qx(v,V,S),$=Xx(v,V,Y,{deprecatedTokens:M?.deprecatedTokens});return Object.keys(Y).forEach(function(k){$[U(k)]=$[k],delete $[k]}),$}),null},R=function(O){var b=r(),L=b.cssVar;return[function(G){return y&&L?fn.createElement(fn.Fragment,null,fn.createElement(C,{rootCls:O,cssVar:L,component:v}),G):G},L?.key]};return R}function g(v,S,M){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},x=Array.isArray(v)?v:[v,v],y=ot(x,1),U=y[0],P=x.join("-"),C=a.layer||{name:"antd"};return function(R){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R,O=r(),b=O.theme,L=O.realToken,G=O.hashId,z=O.token,V=O.cssVar,Y=o(),$=Y.rootPrefixCls,k=Y.iconPrefixCls,I=n(),H=V?"css":"js",J=UC(function(){var Ce=new Set;return V&&Object.keys(A.unitless||{}).forEach(function(Ae){Ce.add(Hu(Ae,V.prefix)),Ce.add(Hu(Ae,kx(U,V.prefix)))}),AC(H,Ce)},[H,U,V?.prefix]),fe=wC(H),F=fe.max,K=fe.min,se={theme:b,token:z,hashId:G,nonce:function(){return I.nonce},clientOnly:A.clientOnly,layer:C,order:A.order||-999};typeof c=="function"&&Bp(Xe(Xe({},se),{},{clientOnly:!1,path:["Shared",$]}),function(){return c(z,{prefix:{rootPrefixCls:$,iconPrefixCls:k},csp:I})});var _e=Bp(Xe(Xe({},se),{},{path:[P,R,k]}),function(){if(A.injectStyle===!1)return[];var Ce=RC(z),Ae=Ce.token,ee=Ce.flush,Te=qx(U,L,M),ve=".".concat(R),ke=Xx(U,L,Te,{deprecatedTokens:A.deprecatedTokens});V&&Te&&Ht(Te)==="object"&&Object.keys(Te).forEach(function(nt){Te[nt]="var(".concat(Hu(nt,kx(U,V.prefix)),")")});var $e=p0(Ae,{componentCls:ve,prefixCls:R,iconCls:".".concat(k),antCls:".".concat($),calc:J,max:F,min:K},V?Te:ke),qe=S($e,{hashId:G,prefixCls:R,rootPrefixCls:$,iconPrefixCls:k});ee(U,ke);var bt=typeof u=="function"?u($e,R,N,A.resetFont):null;return[A.resetStyle===!1?null:bt,qe]});return[_e,G]}}function _(v,S,M){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},x=g(v,S,M,Xe({resetStyle:!1,order:-998},A)),y=function(P){var C=P.prefixCls,R=P.rootCls,N=R===void 0?C:R;return x(C,N),null};return y}return{genStyleHooks:p,genSubStyleComponent:_,genComponentStyleHook:g}}const PC="5.26.6";function Yh(a){return a>=0&&a<=255}function hu(a,e){const{r:n,g:r,b:o,a:c}=new xn(a).toRgb();if(c<1)return a;const{r:u,g:h,b:p}=new xn(e).toRgb();for(let d=.01;d<=1;d+=.01){const g=Math.round((n-u*(1-d))/d),_=Math.round((r-h*(1-d))/d),v=Math.round((o-p*(1-d))/d);if(Yh(g)&&Yh(_)&&Yh(v))return new xn({r:g,g:_,b:v,a:Math.round(d*100)/100}).toRgbString()}return new xn({r:n,g:r,b:o,a:1}).toRgbString()}var IC=function(a,e){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(a);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(a,r[o])&&(n[r[o]]=a[r[o]]);return n};function iM(a){const{override:e}=a,n=IC(a,["override"]),r=Object.assign({},e);Object.keys(Xl).forEach(v=>{delete r[v]});const o=Object.assign(Object.assign({},n),r),c=480,u=576,h=768,p=992,d=1200,g=1600;return o.motion===!1&&(o.motionDurationFast="0s",o.motionDurationMid="0s",o.motionDurationSlow="0s"),Object.assign(Object.assign(Object.assign({},o),{colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:hu(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:hu(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:hu(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:o.lineWidth*3,lineWidth:o.lineWidth,controlOutlineWidth:o.lineWidth*2,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:hu(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:c,screenXSMin:c,screenXSMax:u-1,screenSM:u,screenSMMin:u,screenSMMax:h-1,screenMD:h,screenMDMin:h,screenMDMax:p-1,screenLG:p,screenLGMin:p,screenLGMax:d-1,screenXL:d,screenXLMin:d,screenXLMax:g-1,screenXXL:g,screenXXLMin:g,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new xn("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new xn("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new xn("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),r)}var jx=function(a,e){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(a);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(a,r[o])&&(n[r[o]]=a[r[o]]);return n};const aM={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0,opacityImage:!0},FC={size:!0,sizeSM:!0,sizeLG:!0,sizeMD:!0,sizeXS:!0,sizeXXS:!0,sizeMS:!0,sizeXL:!0,sizeXXL:!0,sizeUnit:!0,sizeStep:!0,motionBase:!0,motionUnit:!0},BC={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},rM=(a,e,n)=>{const r=n.getDerivativeToken(a),{override:o}=e,c=jx(e,["override"]);let u=Object.assign(Object.assign({},r),{override:o});return u=iM(u),c&&Object.entries(c).forEach(([h,p])=>{const{theme:d}=p,g=jx(p,["theme"]);let _=g;d&&(_=rM(Object.assign(Object.assign({},u),g),{override:g},d)),u[h]=_}),u};function Mf(){const{token:a,hashed:e,theme:n,override:r,cssVar:o}=fn.useContext(JS),c=`${PC}-${e||""}`,u=n||QS,[h,p,d]=gA(u,[Xl,a],{salt:c,override:r,getComputedToken:rM,formatToken:iM,cssVar:o&&{prefix:o.prefix,key:o.key,unitless:aM,ignore:FC,preserve:BC}});return[u,d,e?p:"",h,o]}const zC=(a,e=!1)=>({boxSizing:"border-box",margin:0,padding:0,color:a.colorText,fontSize:a.fontSize,lineHeight:a.lineHeight,listStyle:"none",fontFamily:e?"inherit":a.fontFamily}),HC=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),GC=a=>({a:{color:a.colorLink,textDecoration:a.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${a.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:a.colorLinkHover},"&:active":{color:a.colorLinkActive},"&:active, &:hover":{textDecoration:a.linkHoverDecoration,outline:0},"&:focus":{textDecoration:a.linkFocusDecoration,outline:0},"&[disabled]":{color:a.colorTextDisabled,cursor:"not-allowed"}}}),VC=(a,e,n,r)=>{const o=`[class^="${e}"], [class*=" ${e}"]`,c=n?`.${n}`:o,u={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let h={};return r!==!1&&(h={fontFamily:a.fontFamily,fontSize:a.fontSize}),{[c]:Object.assign(Object.assign(Object.assign({},h),u),{[o]:u})}},sM=a=>({[`.${a}`]:Object.assign(Object.assign({},HC()),{[`.${a} .${a}-icon`]:{display:"block"}})}),{genStyleHooks:kC}=OC({usePrefix:()=>{const{getPrefixCls:a,iconPrefixCls:e}=W.useContext(Wa);return{rootPrefixCls:a(),iconPrefixCls:e}},useToken:()=>{const[a,e,n,r,o]=Mf();return{theme:a,realToken:e,hashId:n,token:r,cssVar:o}},useCSP:()=>{const{csp:a}=W.useContext(Wa);return a??{}},getResetStyles:(a,e)=>{var n;const r=GC(a);return[r,{"&":r},sM((n=e?.prefix.iconPrefixCls)!==null&&n!==void 0?n:Sf)]},getCommonStyle:VC,getCompUnitless:()=>aM}),XC=(a,e)=>{const[n,r]=Mf();return Bp({token:r,hashId:"",path:["ant-design-icons",a],nonce:()=>e?.nonce,layer:{name:"antd"}},()=>[sM(a)])},WC=Object.assign({},i0),{useId:Zx}=WC,qC=()=>"",YC=typeof Zx>"u"?qC:Zx;function jC(a,e,n){var r;const o=a||{},c=o.inherit===!1||!e?Object.assign(Object.assign({},Qp),{hashed:(r=e?.hashed)!==null&&r!==void 0?r:Qp.hashed,cssVar:e?.cssVar}):e,u=YC();return xS(()=>{var h,p;if(!a)return e;const d=Object.assign({},c.components);Object.keys(a.components||{}).forEach(v=>{d[v]=Object.assign(Object.assign({},d[v]),a.components[v])});const g=`css-var-${u.replace(/:/g,"")}`,_=((h=o.cssVar)!==null&&h!==void 0?h:c.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:n?.prefixCls},typeof c.cssVar=="object"?c.cssVar:{}),typeof o.cssVar=="object"?o.cssVar:{}),{key:typeof o.cssVar=="object"&&((p=o.cssVar)===null||p===void 0?void 0:p.key)||g});return Object.assign(Object.assign(Object.assign({},c),o),{token:Object.assign(Object.assign({},c.token),o.token),components:d,cssVar:_})},[o,c],(h,p)=>h.some((d,g)=>{const _=p[g];return!qT(d,_,!0)}))}var ZC=["children"],oM=W.createContext({});function KC(a){var e=a.children,n=cs(a,ZC);return W.createElement(oM.Provider,{value:n},e)}var $C=function(a){mf(n,a);var e=gf(n);function n(){return va(this,n),e.apply(this,arguments)}return _a(n,[{key:"render",value:function(){return this.props.children}}]),n}(W.Component);function QC(a){var e=W.useReducer(function(h){return h+1},0),n=ot(e,2),r=n[1],o=W.useRef(a),c=nf(function(){return o.current}),u=nf(function(h){o.current=typeof h=="function"?h(o.current):h,r()});return[c,u]}var Ar="none",pu="appear",mu="enter",gu="leave",Kx="none",ji="prepare",co="start",uo="active",m0="end",lM="prepared";function $x(a,e){var n={};return n[a.toLowerCase()]=e.toLowerCase(),n["Webkit".concat(a)]="webkit".concat(e),n["Moz".concat(a)]="moz".concat(e),n["ms".concat(a)]="MS".concat(e),n["O".concat(a)]="o".concat(e.toLowerCase()),n}function JC(a,e){var n={animationend:$x("Animation","AnimationEnd"),transitionend:$x("Transition","TransitionEnd")};return a&&("AnimationEvent"in e||delete n.animationend.animation,"TransitionEvent"in e||delete n.transitionend.transition),n}var e2=JC(ja(),typeof window<"u"?window:{}),cM={};if(ja()){var t2=document.createElement("div");cM=t2.style}var vu={};function uM(a){if(vu[a])return vu[a];var e=e2[a];if(e)for(var n=Object.keys(e),r=n.length,o=0;o<r;o+=1){var c=n[o];if(Object.prototype.hasOwnProperty.call(e,c)&&c in cM)return vu[a]=e[c],vu[a]}return""}var fM=uM("animationend"),dM=uM("transitionend"),hM=!!(fM&&dM),Qx=fM||"animationend",Jx=dM||"transitionend";function ey(a,e){if(!a)return null;if(Ht(a)==="object"){var n=e.replace(/-\w/g,function(r){return r[1].toUpperCase()});return a[n]}return"".concat(a,"-").concat(e)}const n2=function(a){var e=W.useRef();function n(o){o&&(o.removeEventListener(Jx,a),o.removeEventListener(Qx,a))}function r(o){e.current&&e.current!==o&&n(e.current),o&&o!==e.current&&(o.addEventListener(Jx,a),o.addEventListener(Qx,a),e.current=o)}return W.useEffect(function(){return function(){n(e.current)}},[]),[r,n]};var pM=ja()?W.useLayoutEffect:W.useEffect;const i2=function(){var a=W.useRef(null);function e(){Np.cancel(a.current)}function n(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;e();var c=Np(function(){o<=1?r({isCanceled:function(){return c!==a.current}}):n(r,o-1)});a.current=c}return W.useEffect(function(){return function(){e()}},[]),[n,e]};var a2=[ji,co,uo,m0],r2=[ji,lM],mM=!1,s2=!0;function gM(a){return a===uo||a===m0}const o2=function(a,e,n){var r=tm(Kx),o=ot(r,2),c=o[0],u=o[1],h=i2(),p=ot(h,2),d=p[0],g=p[1];function _(){u(ji,!0)}var v=e?r2:a2;return pM(function(){if(c!==Kx&&c!==m0){var S=v.indexOf(c),M=v[S+1],A=n(c);A===mM?u(M,!0):M&&d(function(x){function y(){x.isCanceled()||u(M,!0)}A===!0?y():Promise.resolve(A).then(y)})}},[a,c]),W.useEffect(function(){return function(){g()}},[]),[_,c]};function l2(a,e,n,r){var o=r.motionEnter,c=o===void 0?!0:o,u=r.motionAppear,h=u===void 0?!0:u,p=r.motionLeave,d=p===void 0?!0:p,g=r.motionDeadline,_=r.motionLeaveImmediately,v=r.onAppearPrepare,S=r.onEnterPrepare,M=r.onLeavePrepare,A=r.onAppearStart,x=r.onEnterStart,y=r.onLeaveStart,U=r.onAppearActive,P=r.onEnterActive,C=r.onLeaveActive,R=r.onAppearEnd,N=r.onEnterEnd,O=r.onLeaveEnd,b=r.onVisibleChanged,L=tm(),G=ot(L,2),z=G[0],V=G[1],Y=QC(Ar),$=ot(Y,2),k=$[0],I=$[1],H=tm(null),J=ot(H,2),fe=J[0],F=J[1],K=k(),se=W.useRef(!1),_e=W.useRef(null);function Ce(){return n()}var Ae=W.useRef(!1);function ee(){I(Ar),F(null,!0)}var Te=nf(function(lt){var mt=k();if(mt!==Ar){var q=Ce();if(!(lt&&!lt.deadline&&lt.target!==q)){var Zt=Ae.current,ft;mt===pu&&Zt?ft=R?.(q,lt):mt===mu&&Zt?ft=N?.(q,lt):mt===gu&&Zt&&(ft=O?.(q,lt)),Zt&&ft!==!1&&ee()}}}),ve=n2(Te),ke=ot(ve,1),$e=ke[0],qe=function(mt){switch(mt){case pu:return Ke(Ke(Ke({},ji,v),co,A),uo,U);case mu:return Ke(Ke(Ke({},ji,S),co,x),uo,P);case gu:return Ke(Ke(Ke({},ji,M),co,y),uo,C);default:return{}}},bt=W.useMemo(function(){return qe(K)},[K]),nt=o2(K,!a,function(lt){if(lt===ji){var mt=bt[ji];return mt?mt(Ce()):mM}if(rt in bt){var q;F(((q=bt[rt])===null||q===void 0?void 0:q.call(bt,Ce(),null))||null)}return rt===uo&&K!==Ar&&($e(Ce()),g>0&&(clearTimeout(_e.current),_e.current=setTimeout(function(){Te({deadline:!0})},g))),rt===lM&&ee(),s2}),gt=ot(nt,2),xt=gt[0],rt=gt[1],Et=gM(rt);Ae.current=Et;var Gt=W.useRef(null);pM(function(){if(!(se.current&&Gt.current===e)){V(e);var lt=se.current;se.current=!0;var mt;!lt&&e&&h&&(mt=pu),lt&&e&&c&&(mt=mu),(lt&&!e&&d||!lt&&_&&!e&&d)&&(mt=gu);var q=qe(mt);mt&&(a||q[ji])?(I(mt),xt()):I(Ar),Gt.current=e}},[e]),W.useEffect(function(){(K===pu&&!h||K===mu&&!c||K===gu&&!d)&&I(Ar)},[h,c,d]),W.useEffect(function(){return function(){se.current=!1,clearTimeout(_e.current)}},[]);var Vt=W.useRef(!1);W.useEffect(function(){z&&(Vt.current=!0),z!==void 0&&K===Ar&&((Vt.current||z)&&b?.(z),Vt.current=!0)},[z,K]);var kt=fe;return bt[ji]&&rt===co&&(kt=Xe({transition:"none"},kt)),[K,rt,kt,z??e]}function c2(a){var e=a;Ht(a)==="object"&&(e=a.transitionSupport);function n(o,c){return!!(o.motionName&&e&&c!==!1)}var r=W.forwardRef(function(o,c){var u=o.visible,h=u===void 0?!0:u,p=o.removeOnLeave,d=p===void 0?!0:p,g=o.forceRender,_=o.children,v=o.motionName,S=o.leavedClassName,M=o.eventProps,A=W.useContext(oM),x=A.motion,y=n(o,x),U=W.useRef(),P=W.useRef();function C(){try{return U.current instanceof HTMLElement?U.current:DT(P.current)}catch{return null}}var R=l2(y,h,C,o),N=ot(R,4),O=N[0],b=N[1],L=N[2],G=N[3],z=W.useRef(G);G&&(z.current=!0);var V=W.useCallback(function(J){U.current=J,OT(c,J)},[c]),Y,$=Xe(Xe({},M),{},{visible:h});if(!_)Y=null;else if(O===Ar)G?Y=_(Xe({},$),V):!d&&z.current&&S?Y=_(Xe(Xe({},$),{},{className:S}),V):g||!d&&!S?Y=_(Xe(Xe({},$),{},{style:{display:"none"}}),V):Y=null;else{var k;b===ji?k="prepare":gM(b)?k="active":b===co&&(k="start");var I=ey(v,"".concat(O,"-").concat(k));Y=_(Xe(Xe({},$),{},{className:$i(ey(v,O),Ke(Ke({},I,I&&k),v,typeof v=="string")),style:L}),V)}if(W.isValidElement(Y)&&PT(Y)){var H=IT(Y);H||(Y=W.cloneElement(Y,{ref:V}))}return W.createElement($C,{ref:P},Y)});return r.displayName="CSSMotion",r}const u2=c2(hM);var im="add",am="keep",rm="remove",jh="removed";function f2(a){var e;return a&&Ht(a)==="object"&&"key"in a?e=a:e={key:a},Xe(Xe({},e),{},{key:String(e.key)})}function sm(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return a.map(f2)}function d2(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=[],r=0,o=e.length,c=sm(a),u=sm(e);c.forEach(function(d){for(var g=!1,_=r;_<o;_+=1){var v=u[_];if(v.key===d.key){r<_&&(n=n.concat(u.slice(r,_).map(function(S){return Xe(Xe({},S),{},{status:im})})),r=_),n.push(Xe(Xe({},v),{},{status:am})),r+=1,g=!0;break}}g||n.push(Xe(Xe({},d),{},{status:rm}))}),r<o&&(n=n.concat(u.slice(r).map(function(d){return Xe(Xe({},d),{},{status:im})})));var h={};n.forEach(function(d){var g=d.key;h[g]=(h[g]||0)+1});var p=Object.keys(h).filter(function(d){return h[d]>1});return p.forEach(function(d){n=n.filter(function(g){var _=g.key,v=g.status;return _!==d||v!==rm}),n.forEach(function(g){g.key===d&&(g.status=am)})}),n}var h2=["component","children","onVisibleChanged","onAllRemoved"],p2=["status"],m2=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function g2(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:u2,n=function(r){mf(c,r);var o=gf(c);function c(){var u;va(this,c);for(var h=arguments.length,p=new Array(h),d=0;d<h;d++)p[d]=arguments[d];return u=o.call.apply(o,[this].concat(p)),Ke(ss(u),"state",{keyEntities:[]}),Ke(ss(u),"removeKey",function(g){u.setState(function(_){var v=_.keyEntities.map(function(S){return S.key!==g?S:Xe(Xe({},S),{},{status:jh})});return{keyEntities:v}},function(){var _=u.state.keyEntities,v=_.filter(function(S){var M=S.status;return M!==jh}).length;v===0&&u.props.onAllRemoved&&u.props.onAllRemoved()})}),u}return _a(c,[{key:"render",value:function(){var h=this,p=this.state.keyEntities,d=this.props,g=d.component,_=d.children,v=d.onVisibleChanged;d.onAllRemoved;var S=cs(d,h2),M=g||W.Fragment,A={};return m2.forEach(function(x){A[x]=S[x],delete S[x]}),delete S.keys,W.createElement(M,S,p.map(function(x,y){var U=x.status,P=cs(x,p2),C=U===im||U===am;return W.createElement(e,ii({},A,{key:P.key,visible:C,eventProps:P,onVisibleChanged:function(N){v?.(N,{key:P.key}),N||h.removeKey(P.key)}}),function(R,N){return _(Xe(Xe({},R),{},{index:y}),N)})}))}}],[{key:"getDerivedStateFromProps",value:function(h,p){var d=h.keys,g=p.keyEntities,_=sm(d),v=d2(g,_);return{keyEntities:v.filter(function(S){var M=g.find(function(A){var x=A.key;return S.key===x});return!(M&&M.status===jh&&S.status===rm)})}}}]),c}(W.Component);return Ke(n,"defaultProps",{component:"div"}),n}const v2=g2(hM),ty=W.createContext(!0);function _2(a){const e=W.useContext(ty),{children:n}=a,[,r]=Mf(),{motion:o}=r,c=W.useRef(!1);return c.current||(c.current=e!==o),c.current?W.createElement(ty.Provider,{value:o},W.createElement(KC,{motion:o},n)):n}const x2=()=>null;var y2=function(a,e){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(a);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(a,r[o])&&(n[r[o]]=a[r[o]]);return n};const S2=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];let af,vM,_M,xM;function qu(){return af||Jp}function M2(){return vM||Sf}function b2(a){return Object.keys(a).some(e=>e.endsWith("Color"))}const E2=a=>{const{prefixCls:e,iconPrefixCls:n,theme:r,holderRender:o}=a;e!==void 0&&(af=e),n!==void 0&&(vM=n),"holderRender"in a&&(xM=o),r&&(b2(r)?xC(qu(),r):_M=r)},T2=()=>({getPrefixCls:(a,e)=>e||(a?`${qu()}-${a}`:qu()),getIconPrefixCls:M2,getRootPrefixCls:()=>af||qu(),getTheme:()=>_M,holderRender:xM}),A2=a=>{const{children:e,csp:n,autoInsertSpaceInButton:r,alert:o,anchor:c,form:u,locale:h,componentSize:p,direction:d,space:g,splitter:_,virtual:v,dropdownMatchSelectWidth:S,popupMatchSelectWidth:M,popupOverflow:A,legacyLocale:x,parentContext:y,iconPrefixCls:U,theme:P,componentDisabled:C,segmented:R,statistic:N,spin:O,calendar:b,carousel:L,cascader:G,collapse:z,typography:V,checkbox:Y,descriptions:$,divider:k,drawer:I,skeleton:H,steps:J,image:fe,layout:F,list:K,mentions:se,modal:_e,progress:Ce,result:Ae,slider:ee,breadcrumb:Te,menu:ve,pagination:ke,input:$e,textArea:qe,empty:bt,badge:nt,radio:gt,rate:xt,switch:rt,transfer:Et,avatar:Gt,message:Vt,tag:kt,table:lt,card:mt,tabs:q,timeline:Zt,timePicker:ft,upload:B,notification:T,tree:te,colorPicker:ie,datePicker:me,rangePicker:Re,flex:Le,wave:pe,dropdown:xe,warning:we,tour:Ye,tooltip:Ne,popover:Oe,popconfirm:Je,floatButtonGroup:tt,variant:ct,inputNumber:j,treeSelect:Ue}=a,ye=W.useCallback((rn,sn)=>{const{prefixCls:Dn}=a;if(sn)return sn;const In=Dn||y.getPrefixCls("");return rn?`${In}-${rn}`:In},[y.getPrefixCls,a.prefixCls]),De=U||y.iconPrefixCls||Sf,Pe=n||y.csp;XC(De,Pe);const be=jC(P,y.theme,{prefixCls:ye("")}),We={csp:Pe,autoInsertSpaceInButton:r,alert:o,anchor:c,locale:h||x,direction:d,space:g,splitter:_,virtual:v,popupMatchSelectWidth:M??S,popupOverflow:A,getPrefixCls:ye,iconPrefixCls:De,theme:be,segmented:R,statistic:N,spin:O,calendar:b,carousel:L,cascader:G,collapse:z,typography:V,checkbox:Y,descriptions:$,divider:k,drawer:I,skeleton:H,steps:J,image:fe,input:$e,textArea:qe,layout:F,list:K,mentions:se,modal:_e,progress:Ce,result:Ae,slider:ee,breadcrumb:Te,menu:ve,pagination:ke,empty:bt,badge:nt,radio:gt,rate:xt,switch:rt,transfer:Et,avatar:Gt,message:Vt,tag:kt,table:lt,card:mt,tabs:q,timeline:Zt,timePicker:ft,upload:B,notification:T,tree:te,colorPicker:ie,datePicker:me,rangePicker:Re,flex:Le,wave:pe,dropdown:xe,warning:we,tour:Ye,tooltip:Ne,popover:Oe,popconfirm:Je,floatButtonGroup:tt,variant:ct,inputNumber:j,treeSelect:Ue},ze=Object.assign({},y);Object.keys(We).forEach(rn=>{We[rn]!==void 0&&(ze[rn]=We[rn])}),S2.forEach(rn=>{const sn=a[rn];sn&&(ze[rn]=sn)}),typeof r<"u"&&(ze.button=Object.assign({autoInsertSpace:r},ze.button));const At=xS(()=>ze,ze,(rn,sn)=>{const Dn=Object.keys(rn),In=Object.keys(sn);return Dn.length!==In.length||Dn.some(ai=>rn[ai]!==sn[ai])}),{layer:dt}=W.useContext(Jl),en=W.useMemo(()=>({prefixCls:De,csp:Pe,layer:dt?"antd":void 0}),[De,Pe,dt]);let Nt=W.createElement(W.Fragment,null,W.createElement(x2,{dropdownMatchSelectWidth:S}),e);const Ka=W.useMemo(()=>{var rn,sn,Dn,In;return ZA(((rn=yf.Form)===null||rn===void 0?void 0:rn.defaultValidateMessages)||{},((Dn=(sn=At.locale)===null||sn===void 0?void 0:sn.Form)===null||Dn===void 0?void 0:Dn.defaultValidateMessages)||{},((In=At.form)===null||In===void 0?void 0:In.validateMessages)||{},u?.validateMessages||{})},[At,u?.validateMessages]);Object.keys(Ka).length>0&&(Nt=W.createElement($A.Provider,{value:Ka},Nt)),h&&(Nt=W.createElement(eC,{locale:h,_ANT_MARK__:JA},Nt)),Nt=W.createElement(h0.Provider,{value:en},Nt),p&&(Nt=W.createElement(SC,{size:p},Nt)),Nt=W.createElement(_2,null,Nt);const Do=W.useMemo(()=>{const rn=be||{},{algorithm:sn,token:Dn,components:In,cssVar:ai}=rn,Vn=y2(rn,["algorithm","token","components","cssVar"]),bi=sn&&(!Array.isArray(sn)||sn.length>0)?Op(sn):QS,ui={};Object.entries(In||{}).forEach(([ya,Ur])=>{const hn=Object.assign({},Ur);"algorithm"in hn&&(hn.algorithm===!0?hn.theme=bi:(Array.isArray(hn.algorithm)||typeof hn.algorithm=="function")&&(hn.theme=Op(hn.algorithm)),delete hn.algorithm),ui[ya]=hn});const on=Object.assign(Object.assign({},Xl),Dn);return Object.assign(Object.assign({},Vn),{theme:bi,token:on,components:ui,override:Object.assign({override:on},ui),cssVar:ai})},[be]);return P&&(Nt=W.createElement(JS.Provider,{value:Do},Nt)),At.warning&&(Nt=W.createElement(KA.Provider,{value:At.warning},Nt)),C!==void 0&&(Nt=W.createElement(yC,{disabled:C},Nt)),W.createElement(Wa.Provider,{value:At},Nt)},To=a=>{const e=W.useContext(Wa),n=W.useContext(jS);return W.createElement(A2,Object.assign({parentContext:e,legacyLocale:n},a))};To.ConfigContext=Wa;To.SizeContext=ql;To.config=E2;To.useConfig=MC;Object.defineProperty(To,"SizeContext",{get:()=>ql});var C2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};function yM(a){var e;return a==null||(e=a.getRootNode)===null||e===void 0?void 0:e.call(a)}function R2(a){return yM(a)instanceof ShadowRoot}function w2(a){return R2(a)?yM(a):null}function D2(a){return a.replace(/-(.)/g,function(e,n){return n.toUpperCase()})}function N2(a,e){Ql(a,"[@ant-design/icons] ".concat(e))}function ny(a){return Ht(a)==="object"&&typeof a.name=="string"&&typeof a.theme=="string"&&(Ht(a.icon)==="object"||typeof a.icon=="function")}function iy(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(a).reduce(function(e,n){var r=a[n];switch(n){case"class":e.className=r,delete e.class;break;default:delete e[n],e[D2(n)]=r}return e},{})}function om(a,e,n){return n?fn.createElement(a.tag,Xe(Xe({key:e},iy(a.attrs)),n),(a.children||[]).map(function(r,o){return om(r,"".concat(e,"-").concat(a.tag,"-").concat(o))})):fn.createElement(a.tag,Xe({key:e},iy(a.attrs)),(a.children||[]).map(function(r,o){return om(r,"".concat(e,"-").concat(a.tag,"-").concat(o))}))}function SM(a){return Wl(a)[0]}function MM(a){return a?Array.isArray(a)?a:[a]:[]}var U2=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,L2=function(e){var n=W.useContext(h0),r=n.csp,o=n.prefixCls,c=n.layer,u=U2;o&&(u=u.replace(/anticon/g,o)),c&&(u="@layer ".concat(c,` {
`).concat(u,`
}`)),W.useEffect(function(){var h=e.current,p=w2(h);os(u,"@ant-design-icons",{prepend:!c,csp:r,attachTo:p})},[])},O2=["icon","className","onClick","style","primaryColor","secondaryColor"],zl={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function P2(a){var e=a.primaryColor,n=a.secondaryColor;zl.primaryColor=e,zl.secondaryColor=n||SM(e),zl.calculated=!!n}function I2(){return Xe({},zl)}var Ao=function(e){var n=e.icon,r=e.className,o=e.onClick,c=e.style,u=e.primaryColor,h=e.secondaryColor,p=cs(e,O2),d=W.useRef(),g=zl;if(u&&(g={primaryColor:u,secondaryColor:h||SM(u)}),L2(d),N2(ny(n),"icon should be icon definiton, but got ".concat(n)),!ny(n))return null;var _=n;return _&&typeof _.icon=="function"&&(_=Xe(Xe({},_),{},{icon:_.icon(g.primaryColor,g.secondaryColor)})),om(_.icon,"svg-".concat(_.name),Xe(Xe({className:r,onClick:o,style:c,"data-icon":_.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},p),{},{ref:d}))};Ao.displayName="IconReact";Ao.getTwoToneColors=I2;Ao.setTwoToneColors=P2;function bM(a){var e=MM(a),n=ot(e,2),r=n[0],o=n[1];return Ao.setTwoToneColors({primaryColor:r,secondaryColor:o})}function F2(){var a=Ao.getTwoToneColors();return a.calculated?[a.primaryColor,a.secondaryColor]:a.primaryColor}var B2=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];bM(tf.primary);var Za=W.forwardRef(function(a,e){var n=a.className,r=a.icon,o=a.spin,c=a.rotate,u=a.tabIndex,h=a.onClick,p=a.twoToneColor,d=cs(a,B2),g=W.useContext(h0),_=g.prefixCls,v=_===void 0?"anticon":_,S=g.rootClassName,M=$i(S,v,Ke(Ke({},"".concat(v,"-").concat(r.name),!!r.name),"".concat(v,"-spin"),!!o||r.name==="loading"),n),A=u;A===void 0&&h&&(A=-1);var x=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,y=MM(p),U=ot(y,2),P=U[0],C=U[1];return W.createElement("span",ii({role:"img","aria-label":r.name},d,{ref:e,tabIndex:A,onClick:h,className:M}),W.createElement(Ao,{icon:r,primaryColor:P,secondaryColor:C,style:x}))});Za.displayName="AntdIcon";Za.getTwoToneColor=F2;Za.setTwoToneColor=bM;var z2=function(e,n){return W.createElement(Za,ii({},e,{ref:n,icon:C2}))},H2=W.forwardRef(z2),G2={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"},V2=function(e,n){return W.createElement(Za,ii({},e,{ref:n,icon:G2}))},k2=W.forwardRef(V2),X2={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},W2=function(e,n){return W.createElement(Za,ii({},e,{ref:n,icon:X2}))},q2=W.forwardRef(W2),Y2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},j2=function(e,n){return W.createElement(Za,ii({},e,{ref:n,icon:Y2}))},Z2=W.forwardRef(j2),K2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},$2=function(e,n){return W.createElement(Za,ii({},e,{ref:n,icon:K2}))},Q2=W.forwardRef($2),J2=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,eR=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,tR="".concat(J2," ").concat(eR).split(/[\s\n]+/),nR="aria-",iR="data-";function ay(a,e){return a.indexOf(e)===0}function aR(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;e===!1?n={aria:!0,data:!0,attr:!0}:e===!0?n={aria:!0}:n=Xe({},e);var r={};return Object.keys(a).forEach(function(o){(n.aria&&(o==="role"||ay(o,nR))||n.data&&ay(o,iR)||n.attr&&tR.includes(o))&&(r[o]=a[o])}),r}const EM=a=>{const[,,,,e]=Mf();return e?`${a}-css-var`:""};var rR={ENTER:13},TM=W.forwardRef(function(a,e){var n=a.prefixCls,r=a.style,o=a.className,c=a.duration,u=c===void 0?4.5:c,h=a.showProgress,p=a.pauseOnHover,d=p===void 0?!0:p,g=a.eventKey,_=a.content,v=a.closable,S=a.closeIcon,M=S===void 0?"x":S,A=a.props,x=a.onClick,y=a.onNoticeClose,U=a.times,P=a.hovering,C=W.useState(!1),R=ot(C,2),N=R[0],O=R[1],b=W.useState(0),L=ot(b,2),G=L[0],z=L[1],V=W.useState(0),Y=ot(V,2),$=Y[0],k=Y[1],I=P||N,H=u>0&&h,J=function(){y(g)},fe=function(Ae){(Ae.key==="Enter"||Ae.code==="Enter"||Ae.keyCode===rR.ENTER)&&J()};W.useEffect(function(){if(!I&&u>0){var Ce=Date.now()-$,Ae=setTimeout(function(){J()},u*1e3-$);return function(){d&&clearTimeout(Ae),k(Date.now()-Ce)}}},[u,I,U]),W.useEffect(function(){if(!I&&H&&(d||$===0)){var Ce=performance.now(),Ae,ee=function Te(){cancelAnimationFrame(Ae),Ae=requestAnimationFrame(function(ve){var ke=ve+$-Ce,$e=Math.min(ke/(u*1e3),1);z($e*100),$e<1&&Te()})};return ee(),function(){d&&cancelAnimationFrame(Ae)}}},[u,$,I,H,U]);var F=W.useMemo(function(){return Ht(v)==="object"&&v!==null?v:v?{closeIcon:M}:{}},[v,M]),K=aR(F,!0),se=100-(!G||G<0?0:G>100?100:G),_e="".concat(n,"-notice");return W.createElement("div",ii({},A,{ref:e,className:$i(_e,o,Ke({},"".concat(_e,"-closable"),v)),style:r,onMouseEnter:function(Ae){var ee;O(!0),A==null||(ee=A.onMouseEnter)===null||ee===void 0||ee.call(A,Ae)},onMouseLeave:function(Ae){var ee;O(!1),A==null||(ee=A.onMouseLeave)===null||ee===void 0||ee.call(A,Ae)},onClick:x}),W.createElement("div",{className:"".concat(_e,"-content")},_),v&&W.createElement("a",ii({tabIndex:0,className:"".concat(_e,"-close"),onKeyDown:fe,"aria-label":"Close"},K,{onClick:function(Ae){Ae.preventDefault(),Ae.stopPropagation(),J()}}),F.closeIcon),H&&W.createElement("progress",{className:"".concat(_e,"-progress"),max:"100",value:se},se+"%"))}),AM=fn.createContext({}),sR=function(e){var n=e.children,r=e.classNames;return fn.createElement(AM.Provider,{value:{classNames:r}},n)},ry=8,sy=3,oy=16,oR=function(e){var n={offset:ry,threshold:sy,gap:oy};if(e&&Ht(e)==="object"){var r,o,c;n.offset=(r=e.offset)!==null&&r!==void 0?r:ry,n.threshold=(o=e.threshold)!==null&&o!==void 0?o:sy,n.gap=(c=e.gap)!==null&&c!==void 0?c:oy}return[!!e,n]},lR=["className","style","classNames","styles"],cR=function(e){var n=e.configList,r=e.placement,o=e.prefixCls,c=e.className,u=e.style,h=e.motion,p=e.onAllNoticeRemoved,d=e.onNoticeClose,g=e.stack,_=W.useContext(AM),v=_.classNames,S=W.useRef({}),M=W.useState(null),A=ot(M,2),x=A[0],y=A[1],U=W.useState([]),P=ot(U,2),C=P[0],R=P[1],N=n.map(function(I){return{config:I,key:String(I.key)}}),O=oR(g),b=ot(O,2),L=b[0],G=b[1],z=G.offset,V=G.threshold,Y=G.gap,$=L&&(C.length>0||N.length<=V),k=typeof h=="function"?h(r):h;return W.useEffect(function(){L&&C.length>1&&R(function(I){return I.filter(function(H){return N.some(function(J){var fe=J.key;return H===fe})})})},[C,N,L]),W.useEffect(function(){var I;if(L&&S.current[(I=N[N.length-1])===null||I===void 0?void 0:I.key]){var H;y(S.current[(H=N[N.length-1])===null||H===void 0?void 0:H.key])}},[N,L]),fn.createElement(v2,ii({key:r,className:$i(o,"".concat(o,"-").concat(r),v?.list,c,Ke(Ke({},"".concat(o,"-stack"),!!L),"".concat(o,"-stack-expanded"),$)),style:u,keys:N,motionAppear:!0},k,{onAllRemoved:function(){p(r)}}),function(I,H){var J=I.config,fe=I.className,F=I.style,K=I.index,se=J,_e=se.key,Ce=se.times,Ae=String(_e),ee=J,Te=ee.className,ve=ee.style,ke=ee.classNames,$e=ee.styles,qe=cs(ee,lR),bt=N.findIndex(function(Zt){return Zt.key===Ae}),nt={};if(L){var gt=N.length-1-(bt>-1?bt:K-1),xt=r==="top"||r==="bottom"?"-50%":"0";if(gt>0){var rt,Et,Gt;nt.height=$?(rt=S.current[Ae])===null||rt===void 0?void 0:rt.offsetHeight:x?.offsetHeight;for(var Vt=0,kt=0;kt<gt;kt++){var lt;Vt+=((lt=S.current[N[N.length-1-kt].key])===null||lt===void 0?void 0:lt.offsetHeight)+Y}var mt=($?Vt:gt*z)*(r.startsWith("top")?1:-1),q=!$&&x!==null&&x!==void 0&&x.offsetWidth&&(Et=S.current[Ae])!==null&&Et!==void 0&&Et.offsetWidth?(x?.offsetWidth-z*2*(gt<3?gt:3))/((Gt=S.current[Ae])===null||Gt===void 0?void 0:Gt.offsetWidth):1;nt.transform="translate3d(".concat(xt,", ").concat(mt,"px, 0) scaleX(").concat(q,")")}else nt.transform="translate3d(".concat(xt,", 0, 0)")}return fn.createElement("div",{ref:H,className:$i("".concat(o,"-notice-wrapper"),fe,ke?.wrapper),style:Xe(Xe(Xe({},F),nt),$e?.wrapper),onMouseEnter:function(){return R(function(ft){return ft.includes(Ae)?ft:[].concat(ci(ft),[Ae])})},onMouseLeave:function(){return R(function(ft){return ft.filter(function(B){return B!==Ae})})}},fn.createElement(TM,ii({},qe,{ref:function(ft){bt>-1?S.current[Ae]=ft:delete S.current[Ae]},prefixCls:o,classNames:ke,styles:$e,className:$i(Te,v?.notice),style:ve,times:Ce,key:_e,eventKey:_e,onNoticeClose:d,hovering:L&&C.length>0})))})},uR=W.forwardRef(function(a,e){var n=a.prefixCls,r=n===void 0?"rc-notification":n,o=a.container,c=a.motion,u=a.maxCount,h=a.className,p=a.style,d=a.onAllRemoved,g=a.stack,_=a.renderNotifications,v=W.useState([]),S=ot(v,2),M=S[0],A=S[1],x=function(L){var G,z=M.find(function(V){return V.key===L});z==null||(G=z.onClose)===null||G===void 0||G.call(z),A(function(V){return V.filter(function(Y){return Y.key!==L})})};W.useImperativeHandle(e,function(){return{open:function(L){A(function(G){var z=ci(G),V=z.findIndex(function(k){return k.key===L.key}),Y=Xe({},L);if(V>=0){var $;Y.times=((($=G[V])===null||$===void 0?void 0:$.times)||0)+1,z[V]=Y}else Y.times=0,z.push(Y);return u>0&&z.length>u&&(z=z.slice(-u)),z})},close:function(L){x(L)},destroy:function(){A([])}}});var y=W.useState({}),U=ot(y,2),P=U[0],C=U[1];W.useEffect(function(){var b={};M.forEach(function(L){var G=L.placement,z=G===void 0?"topRight":G;z&&(b[z]=b[z]||[],b[z].push(L))}),Object.keys(P).forEach(function(L){b[L]=b[L]||[]}),C(b)},[M]);var R=function(L){C(function(G){var z=Xe({},G),V=z[L]||[];return V.length||delete z[L],z})},N=W.useRef(!1);if(W.useEffect(function(){Object.keys(P).length>0?N.current=!0:N.current&&(d?.(),N.current=!1)},[P]),!o)return null;var O=Object.keys(P);return r0.createPortal(W.createElement(W.Fragment,null,O.map(function(b){var L=P[b],G=W.createElement(cR,{key:b,configList:L,placement:b,prefixCls:r,className:h?.(b),style:p?.(b),motion:c,onNoticeClose:x,onAllNoticeRemoved:R,stack:g});return _?_(G,{prefixCls:r,key:b}):G})),o)}),fR=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],dR=function(){return document.body},ly=0;function hR(){for(var a={},e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.forEach(function(o){o&&Object.keys(o).forEach(function(c){var u=o[c];u!==void 0&&(a[c]=u)})}),a}function pR(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.getContainer,n=e===void 0?dR:e,r=a.motion,o=a.prefixCls,c=a.maxCount,u=a.className,h=a.style,p=a.onAllRemoved,d=a.stack,g=a.renderNotifications,_=cs(a,fR),v=W.useState(),S=ot(v,2),M=S[0],A=S[1],x=W.useRef(),y=W.createElement(uR,{container:M,ref:x,prefixCls:o,motion:r,maxCount:c,className:u,style:h,onAllRemoved:p,stack:d,renderNotifications:g}),U=W.useState([]),P=ot(U,2),C=P[0],R=P[1],N=nf(function(b){var L=hR(_,b);(L.key===null||L.key===void 0)&&(L.key="rc-notification-".concat(ly),ly+=1),R(function(G){return[].concat(ci(G),[{type:"open",config:L}])})}),O=W.useMemo(function(){return{open:N,close:function(L){R(function(G){return[].concat(ci(G),[{type:"close",key:L}])})},destroy:function(){R(function(L){return[].concat(ci(L),[{type:"destroy"}])})}}},[]);return W.useEffect(function(){A(n())}),W.useEffect(function(){if(x.current&&C.length){C.forEach(function(G){switch(G.type){case"open":x.current.open(G.config);break;case"close":x.current.close(G.key);break;case"destroy":x.current.destroy();break}});var b,L;R(function(G){return(b!==G||!L)&&(b=G,L=G.filter(function(z){return!C.includes(z)})),L})}},[C]),[O,y]}var mR={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},gR=function(e,n){return W.createElement(Za,ii({},e,{ref:n,icon:mR}))},vR=W.forwardRef(gR);const _R=100,xR=10,yR=_R*xR,SR=a=>{const{componentCls:e,iconCls:n,boxShadow:r,colorText:o,colorSuccess:c,colorError:u,colorWarning:h,colorInfo:p,fontSizeLG:d,motionEaseInOutCirc:g,motionDurationSlow:_,marginXS:v,paddingXS:S,borderRadiusLG:M,zIndexPopup:A,contentPadding:x,contentBg:y}=a,U=`${e}-notice`,P=new Px("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:S,transform:"translateY(0)",opacity:1}}),C=new Px("MessageMoveOut",{"0%":{maxHeight:a.height,padding:S,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),R={padding:S,textAlign:"center",[`${e}-custom-content`]:{display:"flex",alignItems:"center"},[`${e}-custom-content > ${n}`]:{marginInlineEnd:v,fontSize:d},[`${U}-content`]:{display:"inline-block",padding:x,background:y,borderRadius:M,boxShadow:r,pointerEvents:"all"},[`${e}-success > ${n}`]:{color:c},[`${e}-error > ${n}`]:{color:u},[`${e}-warning > ${n}`]:{color:h},[`${e}-info > ${n},
      ${e}-loading > ${n}`]:{color:p}};return[{[e]:Object.assign(Object.assign({},zC(a)),{color:o,position:"fixed",top:v,width:"100%",pointerEvents:"none",zIndex:A,[`${e}-move-up`]:{animationFillMode:"forwards"},[`
        ${e}-move-up-appear,
        ${e}-move-up-enter
      `]:{animationName:P,animationDuration:_,animationPlayState:"paused",animationTimingFunction:g},[`
        ${e}-move-up-appear${e}-move-up-appear-active,
        ${e}-move-up-enter${e}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${e}-move-up-leave`]:{animationName:C,animationDuration:_,animationPlayState:"paused",animationTimingFunction:g},[`${e}-move-up-leave${e}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[e]:{[`${U}-wrapper`]:Object.assign({},R)}},{[`${e}-notice-pure-panel`]:Object.assign(Object.assign({},R),{padding:0,textAlign:"start"})}]},MR=a=>({zIndexPopup:a.zIndexPopupBase+yR+10,contentBg:a.colorBgElevated,contentPadding:`${(a.controlHeightLG-a.fontSize*a.lineHeight)/2}px ${a.paddingSM}px`}),CM=kC("Message",a=>{const e=p0(a,{height:150});return[SR(e)]},MR);var bR=function(a,e){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(a);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(a,r[o])&&(n[r[o]]=a[r[o]]);return n};const ER={info:W.createElement(Q2,null),success:W.createElement(H2,null),error:W.createElement(k2,null),warning:W.createElement(Z2,null),loading:W.createElement(vR,null)},RM=({prefixCls:a,type:e,icon:n,children:r})=>W.createElement("div",{className:$i(`${a}-custom-content`,`${a}-${e}`)},n||ER[e],W.createElement("span",null,r)),TR=a=>{const{prefixCls:e,className:n,type:r,icon:o,content:c}=a,u=bR(a,["prefixCls","className","type","icon","content"]),{getPrefixCls:h}=W.useContext(Wa),p=e||h("message"),d=EM(p),[g,_,v]=CM(p,d);return g(W.createElement(TM,Object.assign({},u,{prefixCls:p,className:$i(n,_,`${p}-notice-pure-panel`,v,d),eventKey:"pure",duration:null,content:W.createElement(RM,{prefixCls:p,type:r,icon:o},c)})))};function AR(a,e){return{motionName:e??`${a}-move-up`}}function g0(a){let e;const n=new Promise(o=>{e=a(()=>{o(!0)})}),r=()=>{e?.()};return r.then=(o,c)=>n.then(o,c),r.promise=n,r}var CR=function(a,e){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(a);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(a,r[o])&&(n[r[o]]=a[r[o]]);return n};const RR=8,wR=3,DR=({children:a,prefixCls:e})=>{const n=EM(e),[r,o,c]=CM(e,n);return r(W.createElement(sR,{classNames:{list:$i(o,c,n)}},a))},NR=(a,{prefixCls:e,key:n})=>W.createElement(DR,{prefixCls:e,key:n},a),UR=W.forwardRef((a,e)=>{const{top:n,prefixCls:r,getContainer:o,maxCount:c,duration:u=wR,rtl:h,transitionName:p,onAllRemoved:d}=a,{getPrefixCls:g,getPopupContainer:_,message:v,direction:S}=W.useContext(Wa),M=r||g("message"),A=()=>({left:"50%",transform:"translateX(-50%)",top:n??RR}),x=()=>$i({[`${M}-rtl`]:h??S==="rtl"}),y=()=>AR(M,p),U=W.createElement("span",{className:`${M}-close-x`},W.createElement(q2,{className:`${M}-close-icon`})),[P,C]=pR({prefixCls:M,style:A,className:x,motion:y,closable:!1,closeIcon:U,duration:u,getContainer:()=>o?.()||_?.()||document.body,maxCount:c,onAllRemoved:d,renderNotifications:NR});return W.useImperativeHandle(e,()=>Object.assign(Object.assign({},P),{prefixCls:M,message:v})),C});let cy=0;function wM(a){const e=W.useRef(null);return[W.useMemo(()=>{const r=p=>{var d;(d=e.current)===null||d===void 0||d.close(p)},o=p=>{if(!e.current){const N=()=>{};return N.then=()=>{},N}const{open:d,prefixCls:g,message:_}=e.current,v=`${g}-notice`,{content:S,icon:M,type:A,key:x,className:y,style:U,onClose:P}=p,C=CR(p,["content","icon","type","key","className","style","onClose"]);let R=x;return R==null&&(cy+=1,R=`antd-message-${cy}`),g0(N=>(d(Object.assign(Object.assign({},C),{key:R,content:W.createElement(RM,{prefixCls:g,type:A,icon:M},S),placement:"top",className:$i(A&&`${v}-${A}`,y,_?.className),style:Object.assign(Object.assign({},_?.style),U),onClose:()=>{P?.(),N()}})),()=>{r(R)}))},u={open:o,destroy:p=>{var d;p!==void 0?r(p):(d=e.current)===null||d===void 0||d.destroy()}};return["info","success","warning","error","loading"].forEach(p=>{const d=(g,_,v)=>{let S;g&&typeof g=="object"&&"content"in g?S=g:S={content:g};let M,A;typeof _=="function"?A=_:(M=_,A=v);const x=Object.assign(Object.assign({onClose:A,duration:M},S),{type:p});return o(x)};u[p]=d}),u},[]),W.createElement(UR,Object.assign({key:"message-holder"},a,{ref:e}))]}function LR(a){return wM(a)}function DM(a,e){this.v=a,this.k=e}function Yn(a,e,n,r){var o=Object.defineProperty;try{o({},"",{})}catch{o=0}Yn=function(u,h,p,d){if(h)o?o(u,h,{value:p,enumerable:!d,configurable:!d,writable:!d}):u[h]=p;else{var g=function(v,S){Yn(u,v,function(M){return this._invoke(v,S,M)})};g("next",0),g("throw",1),g("return",2)}},Yn(a,e,n,r)}function v0(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var a,e,n=typeof Symbol=="function"?Symbol:{},r=n.iterator||"@@iterator",o=n.toStringTag||"@@toStringTag";function c(S,M,A,x){var y=M&&M.prototype instanceof h?M:h,U=Object.create(y.prototype);return Yn(U,"_invoke",function(P,C,R){var N,O,b,L=0,G=R||[],z=!1,V={p:0,n:0,v:a,a:Y,f:Y.bind(a,4),d:function(k,I){return N=k,O=0,b=a,V.n=I,u}};function Y($,k){for(O=$,b=k,e=0;!z&&L&&!I&&e<G.length;e++){var I,H=G[e],J=V.p,fe=H[2];$>3?(I=fe===k)&&(b=H[(O=H[4])?5:(O=3,3)],H[4]=H[5]=a):H[0]<=J&&((I=$<2&&J<H[1])?(O=0,V.v=k,V.n=H[1]):J<fe&&(I=$<3||H[0]>k||k>fe)&&(H[4]=$,H[5]=k,V.n=fe,O=0))}if(I||$>1)return u;throw z=!0,k}return function($,k,I){if(L>1)throw TypeError("Generator is already running");for(z&&k===1&&Y(k,I),O=k,b=I;(e=O<2?a:b)||!z;){N||(O?O<3?(O>1&&(V.n=-1),Y(O,b)):V.n=b:V.v=b);try{if(L=2,N){if(O||($="next"),e=N[$]){if(!(e=e.call(N,b)))throw TypeError("iterator result is not an object");if(!e.done)return e;b=e.value,O<2&&(O=0)}else O===1&&(e=N.return)&&e.call(N),O<2&&(b=TypeError("The iterator does not provide a '"+$+"' method"),O=1);N=a}else if((e=(z=V.n<0)?b:P.call(C,V))!==u)break}catch(H){N=a,O=1,b=H}finally{L=1}}return{value:e,done:z}}}(S,A,x),!0),U}var u={};function h(){}function p(){}function d(){}e=Object.getPrototypeOf;var g=[][r]?e(e([][r]())):(Yn(e={},r,function(){return this}),e),_=d.prototype=h.prototype=Object.create(g);function v(S){return Object.setPrototypeOf?Object.setPrototypeOf(S,d):(S.__proto__=d,Yn(S,o,"GeneratorFunction")),S.prototype=Object.create(_),S}return p.prototype=d,Yn(_,"constructor",d),Yn(d,"constructor",p),p.displayName="GeneratorFunction",Yn(d,o,"GeneratorFunction"),Yn(_),Yn(_,o,"Generator"),Yn(_,r,function(){return this}),Yn(_,"toString",function(){return"[object Generator]"}),(v0=function(){return{w:c,m:v}})()}function rf(a,e){function n(o,c,u,h){try{var p=a[o](c),d=p.value;return d instanceof DM?e.resolve(d.v).then(function(g){n("next",g,u,h)},function(g){n("throw",g,u,h)}):e.resolve(d).then(function(g){p.value=g,u(p)},function(g){return n("throw",g,u,h)})}catch(g){h(g)}}var r;this.next||(Yn(rf.prototype),Yn(rf.prototype,typeof Symbol=="function"&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),Yn(this,"_invoke",function(o,c,u){function h(){return new e(function(p,d){n(o,u,p,d)})}return r=r?r.then(h,h):h()},!0)}function NM(a,e,n,r,o){return new rf(v0().w(a,e,n,r),o||Promise)}function OR(a,e,n,r,o){var c=NM(a,e,n,r,o);return c.next().then(function(u){return u.done?u.value:c.next()})}function PR(a){var e=Object(a),n=[];for(var r in e)n.unshift(r);return function o(){for(;n.length;)if((r=n.pop())in e)return o.value=r,o.done=!1,o;return o.done=!0,o}}function uy(a){if(a!=null){var e=a[typeof Symbol=="function"&&Symbol.iterator||"@@iterator"],n=0;if(e)return e.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length))return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}}}throw new TypeError(Ht(a)+" is not iterable")}function xo(){var a=v0(),e=a.m(xo),n=(Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__).constructor;function r(u){var h=typeof u=="function"&&u.constructor;return!!h&&(h===n||(h.displayName||h.name)==="GeneratorFunction")}var o={throw:1,return:2,break:3,continue:3};function c(u){var h,p;return function(d){h||(h={stop:function(){return p(d.a,2)},catch:function(){return d.v},abrupt:function(_,v){return p(d.a,o[_],v)},delegateYield:function(_,v,S){return h.resultName=v,p(d.d,uy(_),S)},finish:function(_){return p(d.f,_)}},p=function(_,v,S){d.p=h.prev,d.n=h.next;try{return _(v,S)}finally{h.next=d.n}}),h.resultName&&(h[h.resultName]=d.v,h.resultName=void 0),h.sent=d.v,h.next=d.n;try{return u.call(this,h)}finally{d.p=h.prev,d.n=h.next}}}return(xo=function(){return{wrap:function(p,d,g,_){return a.w(c(p),d,g,_&&_.reverse())},isGeneratorFunction:r,mark:a.m,awrap:function(p,d){return new DM(p,d)},AsyncIterator:rf,async:function(p,d,g,_,v){return(r(d)?NM:OR)(c(p),d,g,_,v)},keys:PR,values:uy}})()}function fy(a,e,n,r,o,c,u){try{var h=a[c](u),p=h.value}catch(d){return void n(d)}h.done?e(p):Promise.resolve(p).then(r,o)}function UM(a){return function(){var e=this,n=arguments;return new Promise(function(r,o){var c=a.apply(e,n);function u(p){fy(c,r,o,u,h,"next",p)}function h(p){fy(c,r,o,u,h,"throw",p)}u(void 0)})}}var ec=Xe({},RT),IR=ec.version,Zh=ec.render,FR=ec.unmountComponentAtNode,bf;try{var BR=Number((IR||"").split(".")[0]);BR>=18&&(bf=ec.createRoot)}catch{}function dy(a){var e=ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&Ht(e)==="object"&&(e.usingClientEntryPoint=a)}var sf="__rc_react_root__";function zR(a,e){dy(!0);var n=e[sf]||bf(e);dy(!1),n.render(a),e[sf]=n}function HR(a,e){Zh?.(a,e)}function GR(a,e){if(bf){zR(a,e);return}HR(a,e)}function VR(a){return lm.apply(this,arguments)}function lm(){return lm=UM(xo().mark(function a(e){return xo().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve().then(function(){var o;(o=e[sf])===null||o===void 0||o.unmount(),delete e[sf]}));case 1:case"end":return r.stop()}},a)})),lm.apply(this,arguments)}function kR(a){FR(a)}function XR(a){return cm.apply(this,arguments)}function cm(){return cm=UM(xo().mark(function a(e){return xo().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(bf===void 0){r.next=2;break}return r.abrupt("return",VR(e));case 2:kR(e);case 3:case"end":return r.stop()}},a)})),cm.apply(this,arguments)}const WR=(a,e)=>(GR(a,e),()=>XR(e));let qR=WR;function YR(a){return qR}const jR=fn.createContext({});let Oi=null,is=a=>a(),Yl=[],jl={};function hy(){const{getContainer:a,duration:e,rtl:n,maxCount:r,top:o}=jl,c=a?.()||document.body;return{getContainer:()=>c,duration:e,rtl:n,maxCount:r,top:o}}const ZR=fn.forwardRef((a,e)=>{const{messageConfig:n,sync:r}=a,{getPrefixCls:o}=W.useContext(Wa),c=jl.prefixCls||o("message"),u=W.useContext(jR),[h,p]=wM(Object.assign(Object.assign(Object.assign({},n),{prefixCls:c}),u.message));return fn.useImperativeHandle(e,()=>{const d=Object.assign({},h);return Object.keys(d).forEach(g=>{d[g]=(..._)=>(r(),h[g].apply(h,_))}),{instance:d,sync:r}}),p}),KR=fn.forwardRef((a,e)=>{const[n,r]=fn.useState(hy),o=()=>{r(hy)};fn.useEffect(o,[]);const c=T2(),u=c.getRootPrefixCls(),h=c.getIconPrefixCls(),p=c.getTheme(),d=fn.createElement(ZR,{ref:e,sync:o,messageConfig:n});return fn.createElement(To,{prefixCls:u,iconPrefixCls:h,theme:p},c.holderRender?c.holderRender(d):d)});function Ef(){if(!Oi){const a=document.createDocumentFragment(),e={fragment:a};Oi=e,is(()=>{YR()(fn.createElement(KR,{ref:r=>{const{instance:o,sync:c}=r||{};Promise.resolve().then(()=>{!e.instance&&o&&(e.instance=o,e.sync=c,Ef())})}}),a)});return}Oi.instance&&(Yl.forEach(a=>{const{type:e,skipped:n}=a;if(!n)switch(e){case"open":{is(()=>{const r=Oi.instance.open(Object.assign(Object.assign({},jl),a.config));r?.then(a.resolve),a.setCloseFn(r)});break}case"destroy":is(()=>{Oi?.instance.destroy(a.key)});break;default:is(()=>{var r;const o=(r=Oi.instance)[e].apply(r,ci(a.args));o?.then(a.resolve),a.setCloseFn(o)})}}),Yl=[])}function $R(a){jl=Object.assign(Object.assign({},jl),a),is(()=>{var e;(e=Oi?.sync)===null||e===void 0||e.call(Oi)})}function QR(a){const e=g0(n=>{let r;const o={type:"open",config:a,resolve:n,setCloseFn:c=>{r=c}};return Yl.push(o),()=>{r?is(()=>{r()}):o.skipped=!0}});return Ef(),e}function JR(a,e){const n=g0(r=>{let o;const c={type:a,args:e,resolve:r,setCloseFn:u=>{o=u}};return Yl.push(c),()=>{o?is(()=>{o()}):c.skipped=!0}});return Ef(),n}const e3=a=>{Yl.push({type:"destroy",key:a}),Ef()},t3=["success","info","warning","error","loading"],n3={open:QR,destroy:e3,config:$R,useMessage:LR,_InternalPanelDoNotUseOrYouWillBeFired:TR},um=n3;t3.forEach(a=>{um[a]=(...e)=>JR(a,e)});const i3=()=>{const[a,e]=W.useState({name:"",email:"",message:""}),[n,r]=W.useState(!1),[o,c]=W.useState(!1),u=d=>{e({...a,[d.target.name]:d.target.value})},h=async d=>{d.preventDefault(),c(!0);const g="https://formsubmit.co/ajax/adhikarykshitiz123@gmail.com";try{(await fetch(g,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)})).ok?(r(!0),e({name:"",email:"",message:""}),setTimeout(()=>r(!1),4e3)):um.error("Something went wrong. Please try again.")}catch{um.error("Failed to send. Check your network and try again.")}finally{c(!1)}},p=[{icon:j1,label:"Email",value:"kshitij@example.com",color:"var(--teal)"},{icon:eT,label:"Phone",value:"+977 9800000000",color:"var(--amber)"},{icon:K1,label:"Location",value:"Kathmandu, Nepal",color:"var(--teal)"}];return ge.jsx("section",{id:"contact",className:"py-24 relative",children:ge.jsxs("div",{className:"max-w-4xl mx-auto px-6 lg:px-8 relative z-10",children:[ge.jsxs("div",{className:"text-center mb-16",children:[ge.jsx("div",{className:"kx-eyebrow",style:{justifyContent:"center"},children:"// 04_contact"}),ge.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",style:{color:"var(--text)"},children:"Let's Work Together"}),ge.jsx("p",{className:"text-lg mt-4",style:{color:"var(--text-dim)"},children:"Have a project in mind? Let's discuss how we can bring your ideas to life."})]}),ge.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[ge.jsxs("div",{className:"space-y-6",children:[ge.jsx("h3",{className:"text-xl font-semibold mb-2",style:{color:"var(--text)"},children:"Get in Touch"}),p.map((d,g)=>ge.jsxs("div",{className:"kx-card flex items-center space-x-4 p-4",children:[ge.jsx(d.icon,{className:"w-6 h-6 shrink-0",style:{color:d.color}}),ge.jsxs("div",{children:[ge.jsx("div",{className:"text-sm",style:{color:"var(--text-faint)",fontFamily:"var(--font-mono)"},children:d.label}),ge.jsx("div",{className:"font-medium",style:{color:"var(--text)"},children:d.value})]})]},g)),ge.jsxs("div",{className:"pt-4",children:[ge.jsx("h4",{className:"text-sm mb-4",style:{color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:"Follow Me"}),ge.jsx("div",{className:"flex space-x-4",children:[V1,q1,sT].map((d,g)=>ge.jsx("a",{href:"#",className:"kx-card w-11 h-11 flex items-center justify-center",style:{color:"var(--text-dim)"},children:ge.jsx(d,{className:"w-5 h-5"})},g))})]})]}),ge.jsx("div",{className:"kx-glass p-8",children:ge.jsxs("form",{onSubmit:h,className:"space-y-6",children:[ge.jsxs("div",{children:[ge.jsx("label",{className:"kx-label",children:"Name"}),ge.jsx("input",{type:"text",name:"name",value:a.name,onChange:u,required:!0,className:"kx-input",placeholder:"Your name"})]}),ge.jsxs("div",{children:[ge.jsx("label",{className:"kx-label",children:"Email"}),ge.jsx("input",{type:"email",name:"email",value:a.email,onChange:u,required:!0,className:"kx-input",placeholder:"your@email.com"})]}),ge.jsxs("div",{children:[ge.jsx("label",{className:"kx-label",children:"Message"}),ge.jsx("textarea",{name:"message",rows:"4",value:a.message,onChange:u,required:!0,className:"kx-input resize-none",placeholder:"Tell me about your project..."})]}),ge.jsxs("button",{type:"submit",disabled:o,className:"kx-btn-primary w-full flex items-center justify-center space-x-2",children:[ge.jsx(nT,{className:"w-4 h-4"}),ge.jsx("span",{children:o?"Sending…":"Send Message"})]}),n&&ge.jsx("div",{className:"text-center font-medium pt-2",style:{color:"var(--teal)"},children:"✅ Message sent successfully!"})]})})]})]})})},a3=()=>ge.jsx("footer",{className:"py-8",style:{borderTop:"1px solid var(--line)",background:"var(--bg)"},children:ge.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-8 text-center",children:ge.jsx("p",{style:{color:"var(--text-faint)",fontFamily:"var(--font-mono)",fontSize:"0.85rem"},children:"© 2025 Kshitij Adhikari — built with React"})})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _0="185",r3=0,py=1,s3=2,Yu=1,o3=2,Pl=3,Nr=0,ti=1,Ga=2,ka=0,ho=1,fm=2,my=3,gy=4,l3=5,ts=100,c3=101,u3=102,f3=103,d3=104,h3=200,p3=201,m3=202,g3=203,dm=204,hm=205,v3=206,_3=207,x3=208,y3=209,S3=210,M3=211,b3=212,E3=213,T3=214,pm=0,mm=1,gm=2,yo=3,vm=4,_m=5,xm=6,ym=7,LM=0,A3=1,C3=2,ha=0,OM=1,PM=2,IM=3,FM=4,BM=5,zM=6,HM=7,GM=300,us=301,So=302,Kh=303,$h=304,Tf=306,Sm=1e3,Va=1001,Mm=1002,Gn=1003,R3=1004,_u=1005,jn=1006,Qh=1007,as=1008,Fi=1009,VM=1010,kM=1011,Zl=1012,x0=1013,ga=1014,fa=1015,qa=1016,y0=1017,S0=1018,Kl=1020,XM=35902,WM=35899,qM=1021,YM=1022,Ki=1023,Ya=1026,rs=1027,jM=1028,M0=1029,fs=1030,b0=1031,E0=1033,ju=33776,Zu=33777,Ku=33778,$u=33779,bm=35840,Em=35841,Tm=35842,Am=35843,Cm=36196,Rm=37492,wm=37496,Dm=37488,Nm=37489,of=37490,Um=37491,Lm=37808,Om=37809,Pm=37810,Im=37811,Fm=37812,Bm=37813,zm=37814,Hm=37815,Gm=37816,Vm=37817,km=37818,Xm=37819,Wm=37820,qm=37821,Ym=36492,jm=36494,Zm=36495,Km=36283,$m=36284,lf=36285,Qm=36286,w3=3200,vy=0,D3=1,Cr="",Pi="srgb",cf="srgb-linear",uf="linear",jt="srgb",js=7680,_y=519,N3=512,U3=513,L3=514,T0=515,O3=516,P3=517,A0=518,I3=519,xy=35044,yy="300 es",da=2e3,ff=2001;function F3(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function df(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function B3(){const a=df("canvas");return a.style.display="block",a}const Sy={};function My(...a){const e="THREE."+a.shift();console.log(e,...a)}function ZM(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function st(...a){a=ZM(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Pt(...a){a=ZM(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function po(...a){const e=a.join(" ");e in Sy||(Sy[e]=!0,st(...a))}function z3(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const H3={[pm]:mm,[gm]:xm,[vm]:ym,[yo]:_m,[mm]:pm,[xm]:gm,[ym]:vm,[_m]:yo};class hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let by=1234567;const Hl=Math.PI/180,$l=180/Math.PI;function Co(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[a&255]+Wn[a>>8&255]+Wn[a>>16&255]+Wn[a>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function Dt(a,e,n){return Math.max(e,Math.min(n,a))}function C0(a,e){return(a%e+e)%e}function G3(a,e,n,r,o){return r+(a-e)*(o-r)/(n-e)}function V3(a,e,n){return a!==e?(n-a)/(e-a):0}function Gl(a,e,n){return(1-n)*a+n*e}function k3(a,e,n,r){return Gl(a,e,1-Math.exp(-n*r))}function X3(a,e=1){return e-Math.abs(C0(a,e*2)-e)}function W3(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*(3-2*a))}function q3(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*a*(a*(a*6-15)+10))}function Y3(a,e){return a+Math.floor(Math.random()*(e-a+1))}function j3(a,e){return a+Math.random()*(e-a)}function Z3(a){return a*(.5-Math.random())}function K3(a){a!==void 0&&(by=a);let e=by+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $3(a){return a*Hl}function Q3(a){return a*$l}function J3(a){return(a&a-1)===0&&a!==0}function ew(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function tw(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function nw(a,e,n,r,o){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),S=c((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":a.set(h*g,p*_,p*v,h*d);break;case"YZY":a.set(p*v,h*g,p*_,h*d);break;case"ZXZ":a.set(p*_,p*v,h*g,h*d);break;case"XZX":a.set(h*g,p*M,p*S,h*d);break;case"YXY":a.set(p*S,h*g,p*M,h*d);break;case"ZYZ":a.set(p*M,p*S,h*g,h*d);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function lo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Cl={DEG2RAD:Hl,RAD2DEG:$l,generateUUID:Co,clamp:Dt,euclideanModulo:C0,mapLinear:G3,inverseLerp:V3,lerp:Gl,damp:k3,pingpong:X3,smoothstep:W3,smootherstep:q3,randInt:Y3,randFloat:j3,randFloatSpread:Z3,seededRandom:K3,degToRad:$3,radToDeg:Q3,isPowerOfTwo:J3,ceilPowerOfTwo:ew,floorPowerOfTwo:tw,setQuaternionFromProperEuler:nw,normalize:Jn,denormalize:lo},D0=class D0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Dt(this.x,e.x,n.x),this.y=Dt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Dt(this.x,e,n),this.y=Dt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};D0.prototype.isVector2=!0;let zt=D0;class Ro{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,h){let p=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],S=c[u+1],M=c[u+2],A=c[u+3];if(_!==A||p!==v||d!==S||g!==M){let x=p*v+d*S+g*M+_*A;x<0&&(v=-v,S=-S,M=-M,A=-A,x=-x);let y=1-h;if(x<.9995){const U=Math.acos(x),P=Math.sin(U);y=Math.sin(y*U)/P,h=Math.sin(h*U)/P,p=p*y+v*h,d=d*y+S*h,g=g*y+M*h,_=_*y+A*h}else{p=p*y+v*h,d=d*y+S*h,g=g*y+M*h,_=_*y+A*h;const U=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=U,d*=U,g*=U,_*=U}}e[n]=p,e[n+1]=d,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,u){const h=r[o],p=r[o+1],d=r[o+2],g=r[o+3],_=c[u],v=c[u+1],S=c[u+2],M=c[u+3];return e[n]=h*M+g*_+p*S-d*v,e[n+1]=p*M+g*v+d*_-h*S,e[n+2]=d*M+g*S+h*v-p*_,e[n+3]=g*M-h*_-p*v-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(r/2),g=h(o/2),_=h(c/2),v=p(r/2),S=p(o/2),M=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*S*M,this._y=d*S*_-v*g*M,this._z=d*g*M+v*S*_,this._w=d*g*_-v*S*M;break;case"YXZ":this._x=v*g*_+d*S*M,this._y=d*S*_-v*g*M,this._z=d*g*M-v*S*_,this._w=d*g*_+v*S*M;break;case"ZXY":this._x=v*g*_-d*S*M,this._y=d*S*_+v*g*M,this._z=d*g*M+v*S*_,this._w=d*g*_-v*S*M;break;case"ZYX":this._x=v*g*_-d*S*M,this._y=d*S*_+v*g*M,this._z=d*g*M-v*S*_,this._w=d*g*_+v*S*M;break;case"YZX":this._x=v*g*_+d*S*M,this._y=d*S*_+v*g*M,this._z=d*g*M-v*S*_,this._w=d*g*_-v*S*M;break;case"XZY":this._x=v*g*_-d*S*M,this._y=d*S*_-v*g*M,this._z=d*g*M+v*S*_,this._w=d*g*_+v*S*M;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=r+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-d)*S,this._z=(u-o)*S}else if(r>h&&r>_){const S=2*Math.sqrt(1+r-h-_);this._w=(g-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+d)/S}else if(h>_){const S=2*Math.sqrt(1+h-r-_);this._w=(c-d)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-h);this._w=(u-o)/S,this._x=(c+d)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=r*g+u*h+o*d-c*p,this._y=o*g+u*p+c*h-r*d,this._z=c*g+u*d+r*p-o*h,this._w=u*g-r*h-o*p-c*d,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const N0=class N0{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ey.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ey.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*o-h*r),g=2*(h*n-c*o),_=2*(c*r-u*n);return this.x=n+p*d+u*_-h*g,this.y=r+p*g+h*d-c*_,this.z=o+p*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Dt(this.x,e.x,n.x),this.y=Dt(this.y,e.y,n.y),this.z=Dt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Dt(this.x,e,n),this.y=Dt(this.y,e,n),this.z=Dt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-r*p,this.z=r*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};N0.prototype.isVector3=!0;let ce=N0;const Jh=new ce,Ey=new Ro,U0=class U0{constructor(e,n,r,o,c,u,h,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,p,d)}set(e,n,r,o,c,u,h,p,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[3],p=r[6],d=r[1],g=r[4],_=r[7],v=r[2],S=r[5],M=r[8],A=o[0],x=o[3],y=o[6],U=o[1],P=o[4],C=o[7],R=o[2],N=o[5],O=o[8];return c[0]=u*A+h*U+p*R,c[3]=u*x+h*P+p*N,c[6]=u*y+h*C+p*O,c[1]=d*A+g*U+_*R,c[4]=d*x+g*P+_*N,c[7]=d*y+g*C+_*O,c[2]=v*A+S*U+M*R,c[5]=v*x+S*P+M*N,c[8]=v*y+S*C+M*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8];return n*u*g-n*h*d-r*c*g+r*h*p+o*c*d-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*p-g*c,S=d*c-u*p,M=n*_+r*v+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(o*d-g*r)*A,e[2]=(h*r-o*u)*A,e[3]=v*A,e[4]=(g*n-o*p)*A,e[5]=(o*c-h*n)*A,e[6]=S*A,e[7]=(r*p-d*n)*A,e[8]=(u*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(r*p,r*d,-r*(p*u+d*h)+u+e,-o*d,o*p,-o*(-d*u+p*h)+h+n,0,0,1),this}scale(e,n){return po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ep.makeScale(e,n)),this}rotate(e){return po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ep.makeRotation(-e)),this}translate(e,n){return po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ep.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};U0.prototype.isMatrix3=!0;let pt=U0;const ep=new pt,Ty=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ay=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iw(){const a={enabled:!0,workingColorSpace:cf,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===jt&&(o.r=Xa(o.r),o.g=Xa(o.g),o.b=Xa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===jt&&(o.r=mo(o.r),o.g=mo(o.g),o.b=mo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?uf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[cf]:{primaries:e,whitePoint:r,transfer:uf,toXYZ:Ty,fromXYZ:Ay,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:Ty,fromXYZ:Ay,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),a}const Ut=iw();function Xa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function mo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Zs;class aw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=df("canvas")),Zs.width=e.width,Zs.height=e.height;const o=Zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=df("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Xa(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xa(n[r]/255)*255):n[r]=Xa(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rw=0;class R0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(tp(o[u].image)):c.push(tp(o[u]))}else c=tp(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function tp(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?aw.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let sw=0;const np=new ce;class ni extends hs{constructor(e=ni.DEFAULT_IMAGE,n=ni.DEFAULT_MAPPING,r=Va,o=Va,c=jn,u=as,h=Ki,p=Fi,d=ni.DEFAULT_ANISOTROPY,g=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=Co(),this.name="",this.source=new R0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(np).x}get height(){return this.source.getSize(np).y}get depth(){return this.source.getSize(np).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==GM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sm:e.x=e.x-Math.floor(e.x);break;case Va:e.x=e.x<0?0:1;break;case Mm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sm:e.y=e.y-Math.floor(e.y);break;case Va:e.y=e.y<0?0:1;break;case Mm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=GM;ni.DEFAULT_ANISOTROPY=1;const L0=class L0{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,d=p[0],g=p[4],_=p[8],v=p[1],S=p[5],M=p[9],A=p[2],x=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(M+x)<.1&&Math.abs(d+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(d+1)/2,C=(S+1)/2,R=(y+1)/2,N=(g+v)/4,O=(_+A)/4,b=(M+x)/4;return P>C&&P>R?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=N/r,c=O/r):C>R?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=N/o,c=b/o):R<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(R),r=O/c,o=b/c),this.set(r,o,c,n),this}let U=Math.sqrt((x-M)*(x-M)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(x-M)/U,this.y=(_-A)/U,this.z=(v-g)/U,this.w=Math.acos((d+S+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Dt(this.x,e.x,n.x),this.y=Dt(this.y,e.y,n.y),this.z=Dt(this.z,e.z,n.z),this.w=Dt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Dt(this.x,e,n),this.y=Dt(this.y,e,n),this.z=Dt(this.z,e,n),this.w=Dt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};L0.prototype.isVector4=!0;let gn=L0;class ow extends hs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new gn(0,0,e,n),this.scissorTest=!1,this.viewport=new gn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new ni(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new R0(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pa extends ow{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class KM extends ni{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lw extends ni{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=class pf{constructor(e,n,r,o,c,u,h,p,d,g,_,v,S,M,A,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,p,d,g,_,v,S,M,A,x)}set(e,n,r,o,c,u,h,p,d,g,_,v,S,M,A,x){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=M,y[11]=A,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pf().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),c=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,S=u*_,M=h*g,A=h*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=S+M*d,n[5]=v-A*d,n[9]=-h*p,n[2]=A-v*d,n[6]=M+S*d,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,S=p*_,M=d*g,A=d*_;n[0]=v+A*h,n[4]=M*h-S,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=S*h-M,n[6]=A+v*h,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,S=p*_,M=d*g,A=d*_;n[0]=v-A*h,n[4]=-u*_,n[8]=M+S*h,n[1]=S+M*h,n[5]=u*g,n[9]=A-v*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,S=u*_,M=h*g,A=h*_;n[0]=p*g,n[4]=M*d-S,n[8]=v*d+A,n[1]=p*_,n[5]=A*d+v,n[9]=S*d-M,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,S=u*d,M=h*p,A=h*d;n[0]=p*g,n[4]=A-v*_,n[8]=M*_+S,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=S*_+M,n[10]=v-A*_}else if(e.order==="XZY"){const v=u*p,S=u*d,M=h*p,A=h*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+A,n[5]=u*g,n[9]=S*_-M,n[2]=M*_-S,n[6]=h*g,n[10]=A*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cw,e,uw)}lookAt(e,n,r){const o=this.elements;return yi.subVectors(e,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),yr.crossVectors(r,yi),yr.lengthSq()===0&&(Math.abs(r.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),yr.crossVectors(r,yi)),yr.normalize(),xu.crossVectors(yi,yr),o[0]=yr.x,o[4]=xu.x,o[8]=yi.x,o[1]=yr.y,o[5]=xu.y,o[9]=yi.y,o[2]=yr.z,o[6]=xu.z,o[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[4],p=r[8],d=r[12],g=r[1],_=r[5],v=r[9],S=r[13],M=r[2],A=r[6],x=r[10],y=r[14],U=r[3],P=r[7],C=r[11],R=r[15],N=o[0],O=o[4],b=o[8],L=o[12],G=o[1],z=o[5],V=o[9],Y=o[13],$=o[2],k=o[6],I=o[10],H=o[14],J=o[3],fe=o[7],F=o[11],K=o[15];return c[0]=u*N+h*G+p*$+d*J,c[4]=u*O+h*z+p*k+d*fe,c[8]=u*b+h*V+p*I+d*F,c[12]=u*L+h*Y+p*H+d*K,c[1]=g*N+_*G+v*$+S*J,c[5]=g*O+_*z+v*k+S*fe,c[9]=g*b+_*V+v*I+S*F,c[13]=g*L+_*Y+v*H+S*K,c[2]=M*N+A*G+x*$+y*J,c[6]=M*O+A*z+x*k+y*fe,c[10]=M*b+A*V+x*I+y*F,c[14]=M*L+A*Y+x*H+y*K,c[3]=U*N+P*G+C*$+R*J,c[7]=U*O+P*z+C*k+R*fe,c[11]=U*b+P*V+C*I+R*F,c[15]=U*L+P*Y+C*H+R*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],p=e[9],d=e[13],g=e[2],_=e[6],v=e[10],S=e[14],M=e[3],A=e[7],x=e[11],y=e[15],U=p*S-d*v,P=h*S-d*_,C=h*v-p*_,R=u*S-d*g,N=u*v-p*g,O=u*_-h*g;return n*(A*U-x*P+y*C)-r*(M*U-x*R+y*N)+o*(M*P-A*R+y*O)-c*(M*C-A*N+x*O)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],p=e[2],d=e[6],g=e[10];return n*(u*g-h*d)-r*(c*g-h*p)+o*(c*d-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=e[9],v=e[10],S=e[11],M=e[12],A=e[13],x=e[14],y=e[15],U=n*h-r*u,P=n*p-o*u,C=n*d-c*u,R=r*p-o*h,N=r*d-c*h,O=o*d-c*p,b=g*A-_*M,L=g*x-v*M,G=g*y-S*M,z=_*x-v*A,V=_*y-S*A,Y=v*y-S*x,$=U*Y-P*V+C*z+R*G-N*L+O*b;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/$;return e[0]=(h*Y-p*V+d*z)*k,e[1]=(o*V-r*Y-c*z)*k,e[2]=(A*O-x*N+y*R)*k,e[3]=(v*N-_*O-S*R)*k,e[4]=(p*G-u*Y-d*L)*k,e[5]=(n*Y-o*G+c*L)*k,e[6]=(x*C-M*O-y*P)*k,e[7]=(g*O-v*C+S*P)*k,e[8]=(u*V-h*G+d*b)*k,e[9]=(r*G-n*V-c*b)*k,e[10]=(M*N-A*C+y*U)*k,e[11]=(_*C-g*N-S*U)*k,e[12]=(h*L-u*z-p*b)*k,e[13]=(n*z-r*L+o*b)*k,e[14]=(A*P-M*R-x*U)*k,e[15]=(g*R-_*P+v*U)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,h=e.y,p=e.z,d=c*u,g=c*h;return this.set(d*u+r,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+r,g*p-o*u,0,d*p-o*h,g*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,_=h+h,v=c*d,S=c*g,M=c*_,A=u*g,x=u*_,y=h*_,U=p*d,P=p*g,C=p*_,R=r.x,N=r.y,O=r.z;return o[0]=(1-(A+y))*R,o[1]=(S+C)*R,o[2]=(M-P)*R,o[3]=0,o[4]=(S-C)*N,o[5]=(1-(v+y))*N,o[6]=(x+U)*N,o[7]=0,o[8]=(M+P)*O,o[9]=(x-U)*O,o[10]=(1-(v+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let u=Ks.set(o[0],o[1],o[2]).length();const h=Ks.set(o[4],o[5],o[6]).length(),p=Ks.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Wi.copy(this);const d=1/u,g=1/h,_=1/p;return Wi.elements[0]*=d,Wi.elements[1]*=d,Wi.elements[2]*=d,Wi.elements[4]*=g,Wi.elements[5]*=g,Wi.elements[6]*=g,Wi.elements[8]*=_,Wi.elements[9]*=_,Wi.elements[10]*=_,n.setFromRotationMatrix(Wi),r.x=u,r.y=h,r.z=p,this}makePerspective(e,n,r,o,c,u,h=da,p=!1){const d=this.elements,g=2*c/(n-e),_=2*c/(r-o),v=(n+e)/(n-e),S=(r+o)/(r-o);let M,A;if(p)M=c/(u-c),A=u*c/(u-c);else if(h===da)M=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===ff)M=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,r,o,c,u,h=da,p=!1){const d=this.elements,g=2/(n-e),_=2/(r-o),v=-(n+e)/(n-e),S=-(r+o)/(r-o);let M,A;if(p)M=1/(u-c),A=u/(u-c);else if(h===da)M=-2/(u-c),A=-(u+c)/(u-c);else if(h===ff)M=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=M,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};pf.prototype.isMatrix4=!0;let Tn=pf;const Ks=new ce,Wi=new Tn,cw=new ce(0,0,0),uw=new ce(1,1,1),yr=new ce,xu=new ce,yi=new ce,Cy=new Tn,Ry=new Ro;class ds{constructor(e=0,n=0,r=0,o=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],p=o[1],d=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Dt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Cy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cy,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ry.setFromEuler(this),this.setFromQuaternion(Ry,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class $M{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fw=0;const wy=new ce,$s=new Ro,Ia=new Tn,yu=new ce,Rl=new ce,dw=new ce,hw=new Ro,Dy=new ce(1,0,0),Ny=new ce(0,1,0),Uy=new ce(0,0,1),Ly={type:"added"},pw={type:"removed"},Qs={type:"childadded",child:null},ip={type:"childremoved",child:null};class Mi extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fw++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mi.DEFAULT_UP.clone();const e=new ce,n=new ds,r=new Ro,o=new ce(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Tn},normalMatrix:{value:new pt}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=Mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $M,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Dy,e)}rotateY(e){return this.rotateOnAxis(Ny,e)}rotateZ(e){return this.rotateOnAxis(Uy,e)}translateOnAxis(e,n){return wy.copy(e).applyQuaternion(this.quaternion),this.position.add(wy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dy,e)}translateY(e){return this.translateOnAxis(Ny,e)}translateZ(e){return this.translateOnAxis(Uy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?yu.copy(e):yu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt(Rl,yu,this.up):Ia.lookAt(yu,Rl,this.up),this.quaternion.setFromRotationMatrix(Ia),o&&(Ia.extractRotation(o.matrixWorld),$s.setFromRotationMatrix(Ia),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ly),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pw),ip.child=e,this.dispatchEvent(ip),ip.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ly),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,e,dw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,hw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),M=u(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Mi.DEFAULT_UP=new ce(0,1,0);Mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Il extends Mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mw={type:"move"};class ap{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const A of e.hand.values()){const x=n.getJointPose(A,r),y=this._getHandJoint(d,A);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,M=.005;d.inputState.pinching&&v>S+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=S-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(mw)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Il;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const QM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Su={h:0,s:0,l:0};function rp(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Lt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Ut.workingColorSpace){if(e=C0(e,1),n=Dt(n,0,1),r=Dt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=rp(u,c,e+1/3),this.g=rp(u,c,e),this.b=rp(u,c,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,n=Pi){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pi){const r=QM[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return Ut.workingToColorSpace(qn.copy(this),e),Math.round(Dt(qn.r*255,0,255))*65536+Math.round(Dt(qn.g*255,0,255))*256+Math.round(Dt(qn.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.workingToColorSpace(qn.copy(this),n);const r=qn.r,o=qn.g,c=qn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case r:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-r)/_+2;break;case c:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,n=Ut.workingColorSpace){return Ut.workingToColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Pi){Ut.workingToColorSpace(qn.copy(this),e);const n=qn.r,r=qn.g,o=qn.b;return e!==Pi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+n,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Sr),e.getHSL(Su);const r=Gl(Sr.h,Su.h,n),o=Gl(Sr.s,Su.s,n),c=Gl(Sr.l,Su.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Lt;Lt.NAMES=QM;class gw extends Mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ds,this.environmentIntensity=1,this.environmentRotation=new ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qi=new ce,Fa=new ce,sp=new ce,Ba=new ce,Js=new ce,eo=new ce,Oy=new ce,op=new ce,lp=new ce,cp=new ce,up=new gn,fp=new gn,dp=new gn;class Zi{constructor(e=new ce,n=new ce,r=new ce){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),qi.subVectors(e,n),o.cross(qi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){qi.subVectors(o,n),Fa.subVectors(r,n),sp.subVectors(e,n);const u=qi.dot(qi),h=qi.dot(Fa),p=qi.dot(sp),d=Fa.dot(Fa),g=Fa.dot(sp),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(d*p-h*g)*v,M=(u*g-h*p)*v;return c.set(1-S-M,M,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(e,n,r,o,c,u,h,p){return this.getBarycoord(e,n,r,o,Ba)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ba.x),p.addScaledVector(u,Ba.y),p.addScaledVector(h,Ba.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return up.setScalar(0),fp.setScalar(0),dp.setScalar(0),up.fromBufferAttribute(e,n),fp.fromBufferAttribute(e,r),dp.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(up,c.x),u.addScaledVector(fp,c.y),u.addScaledVector(dp,c.z),u}static isFrontFacing(e,n,r,o){return qi.subVectors(r,n),Fa.subVectors(e,n),qi.cross(Fa).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Fa.subVectors(this.a,this.b),qi.cross(Fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Zi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,h;Js.subVectors(o,r),eo.subVectors(c,r),op.subVectors(e,r);const p=Js.dot(op),d=eo.dot(op);if(p<=0&&d<=0)return n.copy(r);lp.subVectors(e,o);const g=Js.dot(lp),_=eo.dot(lp);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(r).addScaledVector(Js,u);cp.subVectors(e,c);const S=Js.dot(cp),M=eo.dot(cp);if(M>=0&&S<=M)return n.copy(c);const A=S*d-p*M;if(A<=0&&d>=0&&M<=0)return h=d/(d-M),n.copy(r).addScaledVector(eo,h);const x=g*M-S*_;if(x<=0&&_-g>=0&&S-M>=0)return Oy.subVectors(c,o),h=(_-g)/(_-g+(S-M)),n.copy(o).addScaledVector(Oy,h);const y=1/(x+A+v);return u=A*y,h=v*y,n.copy(r).addScaledVector(Js,u).addScaledVector(eo,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class tc{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Yi):Yi.fromBufferAttribute(c,u),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mu.copy(r.boundingBox)),Mu.applyMatrix4(e.matrixWorld),this.union(Mu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),bu.subVectors(this.max,wl),to.subVectors(e.a,wl),no.subVectors(e.b,wl),io.subVectors(e.c,wl),Mr.subVectors(no,to),br.subVectors(io,no),Zr.subVectors(to,io);let n=[0,-Mr.z,Mr.y,0,-br.z,br.y,0,-Zr.z,Zr.y,Mr.z,0,-Mr.x,br.z,0,-br.x,Zr.z,0,-Zr.x,-Mr.y,Mr.x,0,-br.y,br.x,0,-Zr.y,Zr.x,0];return!hp(n,to,no,io,bu)||(n=[1,0,0,0,1,0,0,0,1],!hp(n,to,no,io,bu))?!1:(Eu.crossVectors(Mr,br),n=[Eu.x,Eu.y,Eu.z],hp(n,to,no,io,bu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const za=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Yi=new ce,Mu=new tc,to=new ce,no=new ce,io=new ce,Mr=new ce,br=new ce,Zr=new ce,wl=new ce,bu=new ce,Eu=new ce,Kr=new ce;function hp(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Kr.fromArray(a,c);const h=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),p=e.dot(Kr),d=n.dot(Kr),g=r.dot(Kr);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const bn=new ce,Tu=new zt;let vw=0;class ma extends hs{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=xy,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Tu.fromBufferAttribute(this,n),Tu.applyMatrix3(e),this.setXY(n,Tu.x,Tu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix3(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=lo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),r=Jn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),r=Jn(r,this.array),o=Jn(o,this.array),c=Jn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xy&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class JM extends ma{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class eb extends ma{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Bi extends ma{constructor(e,n,r){super(new Float32Array(e),n,r)}}const _w=new tc,Dl=new ce,pp=new ce;class w0{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_w.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dl.subVectors(e,this.center);const n=Dl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Dl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dl.copy(e.center).add(pp)),this.expandByPoint(Dl.copy(e.center).sub(pp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xw=0;const Li=new Tn,mp=new Mi,ao=new ce,Si=new tc,Nl=new tc,Pn=new ce;class xa extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F3(e)?eb:JM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,n,r){return Li.makeTranslation(e,n,r),this.applyMatrix4(Li),this}scale(e,n,r){return Li.makeScale(e,n,r),this.applyMatrix4(Li),this}lookAt(e){return mp.lookAt(e),mp.updateMatrix(),this.applyMatrix4(mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Bi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new w0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Nl.setFromBufferAttribute(h),this.morphTargetsRelative?(Pn.addVectors(Si.min,Nl.min),Si.expandByPoint(Pn),Pn.addVectors(Si.max,Nl.max),Si.expandByPoint(Pn)):(Si.expandByPoint(Nl.min),Si.expandByPoint(Nl.max))}Si.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Pn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Pn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Pn.fromBufferAttribute(h,d),p&&(ao.fromBufferAttribute(e,d),Pn.add(ao)),o=Math.max(o,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ma(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],p=[];for(let b=0;b<r.count;b++)h[b]=new ce,p[b]=new ce;const d=new ce,g=new ce,_=new ce,v=new zt,S=new zt,M=new zt,A=new ce,x=new ce;function y(b,L,G){d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,L),_.fromBufferAttribute(r,G),v.fromBufferAttribute(c,b),S.fromBufferAttribute(c,L),M.fromBufferAttribute(c,G),g.sub(d),_.sub(d),S.sub(v),M.sub(v);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(z),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(z),h[b].add(A),h[L].add(A),h[G].add(A),p[b].add(x),p[L].add(x),p[G].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let b=0,L=U.length;b<L;++b){const G=U[b],z=G.start,V=G.count;for(let Y=z,$=z+V;Y<$;Y+=3)y(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const P=new ce,C=new ce,R=new ce,N=new ce;function O(b){R.fromBufferAttribute(o,b),N.copy(R);const L=h[b];P.copy(L),P.sub(R.multiplyScalar(R.dot(L))).normalize(),C.crossVectors(N,L);const z=C.dot(p[b])<0?-1:1;u.setXYZW(b,P.x,P.y,P.z,z)}for(let b=0,L=U.length;b<L;++b){const G=U[b],z=G.start,V=G.count;for(let Y=z,$=z+V;Y<$;Y+=3)O(e.getX(Y+0)),O(e.getX(Y+1)),O(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new ma(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new ce,c=new ce,u=new ce,h=new ce,p=new ce,d=new ce,g=new ce,_=new ce;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),A=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,x),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,M),p.fromBufferAttribute(r,A),d.fromBufferAttribute(r,x),h.add(g),p.add(g),d.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(x,d.x,d.y,d.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(h,p){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(p.length*g);let S=0,M=0;for(let A=0,x=p.length;A<x;A++){h.isInterleavedBufferAttribute?S=p[A]*h.data.stride+h.offset:S=p[A]*g;for(let y=0;y<g;y++)v[M++]=d[S++]}return new ma(v,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xa,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=e(p,r);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],S=e(v,r);p.push(S)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const d=r[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const S=d[_];g.push(S.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let yw=0;class Af extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=ho,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dm,this.blendDst=hm,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_y,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==dm&&(r.blendSrc=this.blendSrc),this.blendDst!==hm&&(r.blendDst=this.blendDst),this.blendEquation!==ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_y&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ha=new ce,gp=new ce,Au=new ce,Er=new ce,vp=new ce,Cu=new ce,_p=new ce;class Sw{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ha)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ha.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ha.copy(this.origin).addScaledVector(this.direction,n),Ha.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){gp.copy(e).add(n).multiplyScalar(.5),Au.copy(n).sub(e).normalize(),Er.copy(this.origin).sub(gp);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Au),h=Er.dot(this.direction),p=-Er.dot(Au),d=Er.lengthSq(),g=Math.abs(1-u*u);let _,v,S,M;if(g>0)if(_=u*p-h,v=u*h-p,M=c*g,_>=0)if(v>=-M)if(v<=M){const A=1/g;_*=A,v*=A,S=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*p)+d;else v<=-M?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+d):v<=M?(_=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(gp).addScaledVector(Au,v),S}intersectSphere(e,n){Ha.subVectors(e.center,this.origin);const r=Ha.dot(this.direction),o=Ha.dot(Ha)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,p=r+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ha)!==null}intersectTriangle(e,n,r,o,c){vp.subVectors(n,e),Cu.subVectors(r,e),_p.crossVectors(vp,Cu);let u=this.direction.dot(_p),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Er.subVectors(this.origin,e);const p=h*this.direction.dot(Cu.crossVectors(Er,Cu));if(p<0)return null;const d=h*this.direction.dot(vp.cross(Er));if(d<0||p+d>u)return null;const g=-h*Er.dot(_p);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tb extends Af{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ds,this.combine=LM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Py=new Tn,$r=new Sw,Ru=new w0,Iy=new ce,wu=new ce,Du=new ce,Nu=new ce,xp=new ce,Uu=new ce,Fy=new ce,Lu=new ce;class ea extends Mi{constructor(e=new xa,n=new tb){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){Uu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(xp.fromBufferAttribute(_,e),u?Uu.addScaledVector(xp,g):Uu.addScaledVector(xp.sub(n),g))}n.add(Uu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ru.copy(r.boundingSphere),Ru.applyMatrix4(c),$r.copy(e.ray).recast(e.near),!(Ru.containsPoint($r.origin)===!1&&($r.intersectSphere(Ru,Iy)===null||$r.origin.distanceToSquared(Iy)>(e.far-e.near)**2))&&(Py.copy(c).invert(),$r.copy(e.ray).applyMatrix4(Py),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,A=v.length;M<A;M++){const x=v[M],y=u[x.materialIndex],U=Math.max(x.start,S.start),P=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let C=U,R=P;C<R;C+=3){const N=h.getX(C),O=h.getX(C+1),b=h.getX(C+2);o=Ou(this,y,e,r,d,g,_,N,O,b),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let x=M,y=A;x<y;x+=3){const U=h.getX(x),P=h.getX(x+1),C=h.getX(x+2);o=Ou(this,u,e,r,d,g,_,U,P,C),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,A=v.length;M<A;M++){const x=v[M],y=u[x.materialIndex],U=Math.max(x.start,S.start),P=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let C=U,R=P;C<R;C+=3){const N=C,O=C+1,b=C+2;o=Ou(this,y,e,r,d,g,_,N,O,b),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let x=M,y=A;x<y;x+=3){const U=x,P=x+1,C=x+2;o=Ou(this,u,e,r,d,g,_,U,P,C),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function Mw(a,e,n,r,o,c,u,h){let p;if(e.side===ti?p=r.intersectTriangle(u,c,o,!0,h):p=r.intersectTriangle(o,c,u,e.side===Nr,h),p===null)return null;Lu.copy(h),Lu.applyMatrix4(a.matrixWorld);const d=n.ray.origin.distanceTo(Lu);return d<n.near||d>n.far?null:{distance:d,point:Lu.clone(),object:a}}function Ou(a,e,n,r,o,c,u,h,p,d){a.getVertexPosition(h,wu),a.getVertexPosition(p,Du),a.getVertexPosition(d,Nu);const g=Mw(a,e,n,r,wu,Du,Nu,Fy);if(g){const _=new ce;Zi.getBarycoord(Fy,wu,Du,Nu,_),o&&(g.uv=Zi.getInterpolatedAttribute(o,h,p,d,_,new zt)),c&&(g.uv1=Zi.getInterpolatedAttribute(c,h,p,d,_,new zt)),u&&(g.normal=Zi.getInterpolatedAttribute(u,h,p,d,_,new ce),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new ce,materialIndex:0};Zi.getNormal(wu,Du,Nu,v.normal),g.face=v,g.barycoord=_}return g}class bw extends ni{constructor(e=null,n=1,r=1,o,c,u,h,p,d=Gn,g=Gn,_,v){super(null,u,h,p,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yp=new ce,Ew=new ce,Tw=new pt;class Jr{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=yp.subVectors(r,n).cross(Ew.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(yp),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Tw.getNormalMatrix(e),o=this.coplanarPoint(yp).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new w0,Aw=new zt(.5,.5),Pu=new ce;class nb{constructor(e=new Jr,n=new Jr,r=new Jr,o=new Jr,c=new Jr,u=new Jr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=da,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],d=c[3],g=c[4],_=c[5],v=c[6],S=c[7],M=c[8],A=c[9],x=c[10],y=c[11],U=c[12],P=c[13],C=c[14],R=c[15];if(o[0].setComponents(d-u,S-g,y-M,R-U).normalize(),o[1].setComponents(d+u,S+g,y+M,R+U).normalize(),o[2].setComponents(d+h,S+_,y+A,R+P).normalize(),o[3].setComponents(d-h,S-_,y-A,R-P).normalize(),r)o[4].setComponents(p,v,x,C).normalize(),o[5].setComponents(d-p,S-v,y-x,R-C).normalize();else if(o[4].setComponents(d-p,S-v,y-x,R-C).normalize(),n===da)o[5].setComponents(d+p,S+v,y+x,R+C).normalize();else if(n===ff)o[5].setComponents(p,v,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const n=Aw.distanceTo(e.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Pu.x=o.normal.x>0?e.max.x:e.min.x,Pu.y=o.normal.y>0?e.max.y:e.min.y,Pu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Pu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ib extends ni{constructor(e=[],n=us,r,o,c,u,h,p,d,g){super(e,n,r,o,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mo extends ni{constructor(e,n,r=ga,o,c,u,h=Gn,p=Gn,d,g=Ya,_=1){if(g!==Ya&&g!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,c,u,h,p,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new R0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Cw extends Mo{constructor(e,n=ga,r=us,o,c,u=Gn,h=Gn,p,d=Ya){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,r,o,c,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ab extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nc extends xa{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,S=0;M("z","y","x",-1,-1,r,n,e,u,c,0),M("z","y","x",1,-1,r,n,-e,u,c,1),M("x","z","y",1,1,e,r,n,o,u,2),M("x","z","y",1,-1,e,r,-n,o,u,3),M("x","y","z",1,-1,e,n,r,o,c,4),M("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Bi(d,3)),this.setAttribute("normal",new Bi(g,3)),this.setAttribute("uv",new Bi(_,2));function M(A,x,y,U,P,C,R,N,O,b,L){const G=C/O,z=R/b,V=C/2,Y=R/2,$=N/2,k=O+1,I=b+1;let H=0,J=0;const fe=new ce;for(let F=0;F<I;F++){const K=F*z-Y;for(let se=0;se<k;se++){const _e=se*G-V;fe[A]=_e*U,fe[x]=K*P,fe[y]=$,d.push(fe.x,fe.y,fe.z),fe[A]=0,fe[x]=0,fe[y]=N>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(se/O),_.push(1-F/b),H+=1}}for(let F=0;F<b;F++)for(let K=0;K<O;K++){const se=v+K+k*F,_e=v+K+k*(F+1),Ce=v+(K+1)+k*(F+1),Ae=v+(K+1)+k*F;p.push(se,_e,Ae),p.push(_e,Ce,Ae),J+=6}h.addGroup(S,J,L),S+=J,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cf extends xa{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(r),p=Math.floor(o),d=h+1,g=p+1,_=e/h,v=n/p,S=[],M=[],A=[],x=[];for(let y=0;y<g;y++){const U=y*v-u;for(let P=0;P<d;P++){const C=P*_-c;M.push(C,-U,0),A.push(0,0,1),x.push(P/h),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let U=0;U<h;U++){const P=U+d*y,C=U+d*(y+1),R=U+1+d*(y+1),N=U+1+d*y;S.push(P,C,N),S.push(C,R,N)}this.setIndex(S),this.setAttribute("position",new Bi(M,3)),this.setAttribute("normal",new Bi(A,3)),this.setAttribute("uv",new Bi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.width,e.height,e.widthSegments,e.heightSegments)}}class hf extends xa{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+h,Math.PI);let d=0;const g=[],_=new ce,v=new ce,S=[],M=[],A=[],x=[];for(let y=0;y<=r;y++){const U=[],P=y/r,C=u+P*h,R=e*Math.cos(C),N=Math.sqrt(e*e-R*R);let O=0;y===0&&u===0?O=.5/n:y===r&&p===Math.PI&&(O=-.5/n);for(let b=0;b<=n;b++){const L=b/n,G=o+L*c;_.x=-N*Math.cos(G),_.y=R,_.z=N*Math.sin(G),M.push(_.x,_.y,_.z),v.copy(_).normalize(),A.push(v.x,v.y,v.z),x.push(L+O,1-P),U.push(d++)}g.push(U)}for(let y=0;y<r;y++)for(let U=0;U<n;U++){const P=g[y][U+1],C=g[y][U],R=g[y+1][U],N=g[y+1][U+1];(y!==0||u>0)&&S.push(P,C,N),(y!==r-1||p<Math.PI)&&S.push(C,R,N)}this.setIndex(S),this.setAttribute("position",new Bi(M,3)),this.setAttribute("normal",new Bi(A,3)),this.setAttribute("uv",new Bi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function bo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(By(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(By(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function ei(a){const e={};for(let n=0;n<a.length;n++){const r=bo(a[n]);for(const o in r)e[o]=r[o]}return e}function By(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Rw(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function rb(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const ww={clone:bo,merge:ei};var Dw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Af{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dw,this.fragmentShader=Nw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=Rw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ce().fromArray(o.value);break;case"v4":this.uniforms[r].value=new gn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new pt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Tn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Uw extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lw extends Af{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends Af{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iu=new ce,Fu=new Ro,oa=new ce;class sb extends Mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Iu,Fu,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Iu,Fu,oa.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Iu,Fu,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Iu,Fu,oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new ce,zy=new zt,Hy=new zt;class Ii extends sb{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$l*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $l*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,zy,Hy),n.subVectors(Hy,zy)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hl*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/d,o*=u.width/p,r*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ob extends sb{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ro=-90,so=1;class Pw extends Mi{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ii(ro,so,e,n);o.layers=this.layers,this.add(o);const c=new Ii(ro,so,e,n);c.layers=this.layers,this.add(c);const u=new Ii(ro,so,e,n);u.layers=this.layers,this.add(u);const h=new Ii(ro,so,e,n);h.layers=this.layers,this.add(h);const p=new Ii(ro,so,e,n);p.layers=this.layers,this.add(p);const d=new Ii(ro,so,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,h,p]=n;for(const d of n)this.remove(d);if(e===da)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ff)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(_,v,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Iw extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const O0=class O0{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};O0.prototype.isMatrix2=!0;let Gy=O0;function Vy(a,e,n,r){const o=Bw(r);switch(n){case qM:return a*e;case jM:return a*e/o.components*o.byteLength;case M0:return a*e/o.components*o.byteLength;case fs:return a*e*2/o.components*o.byteLength;case b0:return a*e*2/o.components*o.byteLength;case YM:return a*e*3/o.components*o.byteLength;case Ki:return a*e*4/o.components*o.byteLength;case E0:return a*e*4/o.components*o.byteLength;case ju:case Zu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ku:case $u:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Em:case Am:return Math.max(a,16)*Math.max(e,8)/4;case bm:case Tm:return Math.max(a,8)*Math.max(e,8)/2;case Cm:case Rm:case Dm:case Nm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case wm:case of:case Um:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Lm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Om:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Pm:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Im:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Fm:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Bm:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case zm:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Hm:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Gm:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Vm:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case km:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Xm:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Wm:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case qm:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ym:case jm:case Zm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Km:case $m:return Math.ceil(a/4)*Math.ceil(e/4)*8;case lf:case Qm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Bw(a){switch(a){case Fi:case VM:return{byteLength:1,components:1};case Zl:case kM:case qa:return{byteLength:2,components:1};case y0:case S0:return{byteLength:2,components:4};case ga:case x0:case fa:return{byteLength:4,components:1};case XM:case WM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_0}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lb(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function zw(a){const e=new WeakMap;function n(h,p){const d=h.array,g=h.usage,_=d.byteLength,v=a.createBuffer();a.bindBuffer(p,v),a.bufferData(p,d,g),h.onUploadCallback();let S;if(d instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=a.SHORT;else if(d instanceof Uint32Array)S=a.UNSIGNED_INT;else if(d instanceof Int32Array)S=a.INT;else if(d instanceof Int8Array)S=a.BYTE;else if(d instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,d){const g=p.array,_=p.updateRanges;if(a.bindBuffer(d,h),_.length===0)a.bufferSubData(d,0,g);else{_.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<_.length;S++){const M=_[v],A=_[S];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++v,_[v]=A)}_.length=v+1;for(let S=0,M=_.length;S<M;S++){const A=_[S];a.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(a.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,p),d.version=h.version}}return{get:o,remove:c,update:u}}var Hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$w=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gD="gl_FragColor = linearToOutputTexel( gl_FragColor );",vD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_D=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ED=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ND=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,UD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ID=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VD=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$D=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mN=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_N=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ON=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,KN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$N=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_U=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:Hw,alphahash_pars_fragment:Gw,alphamap_fragment:Vw,alphamap_pars_fragment:kw,alphatest_fragment:Xw,alphatest_pars_fragment:Ww,aomap_fragment:qw,aomap_pars_fragment:Yw,batching_pars_vertex:jw,batching_vertex:Zw,begin_vertex:Kw,beginnormal_vertex:$w,bsdfs:Qw,iridescence_fragment:Jw,bumpmap_pars_fragment:eD,clipping_planes_fragment:tD,clipping_planes_pars_fragment:nD,clipping_planes_pars_vertex:iD,clipping_planes_vertex:aD,color_fragment:rD,color_pars_fragment:sD,color_pars_vertex:oD,color_vertex:lD,common:cD,cube_uv_reflection_fragment:uD,defaultnormal_vertex:fD,displacementmap_pars_vertex:dD,displacementmap_vertex:hD,emissivemap_fragment:pD,emissivemap_pars_fragment:mD,colorspace_fragment:gD,colorspace_pars_fragment:vD,envmap_fragment:_D,envmap_common_pars_fragment:xD,envmap_pars_fragment:yD,envmap_pars_vertex:SD,envmap_physical_pars_fragment:UD,envmap_vertex:MD,fog_vertex:bD,fog_pars_vertex:ED,fog_fragment:TD,fog_pars_fragment:AD,gradientmap_pars_fragment:CD,lightmap_pars_fragment:RD,lights_lambert_fragment:wD,lights_lambert_pars_fragment:DD,lights_pars_begin:ND,lights_toon_fragment:LD,lights_toon_pars_fragment:OD,lights_phong_fragment:PD,lights_phong_pars_fragment:ID,lights_physical_fragment:FD,lights_physical_pars_fragment:BD,lights_fragment_begin:zD,lights_fragment_maps:HD,lights_fragment_end:GD,lightprobes_pars_fragment:VD,logdepthbuf_fragment:kD,logdepthbuf_pars_fragment:XD,logdepthbuf_pars_vertex:WD,logdepthbuf_vertex:qD,map_fragment:YD,map_pars_fragment:jD,map_particle_fragment:ZD,map_particle_pars_fragment:KD,metalnessmap_fragment:$D,metalnessmap_pars_fragment:QD,morphinstance_vertex:JD,morphcolor_vertex:eN,morphnormal_vertex:tN,morphtarget_pars_vertex:nN,morphtarget_vertex:iN,normal_fragment_begin:aN,normal_fragment_maps:rN,normal_pars_fragment:sN,normal_pars_vertex:oN,normal_vertex:lN,normalmap_pars_fragment:cN,clearcoat_normal_fragment_begin:uN,clearcoat_normal_fragment_maps:fN,clearcoat_pars_fragment:dN,iridescence_pars_fragment:hN,opaque_fragment:pN,packing:mN,premultiplied_alpha_fragment:gN,project_vertex:vN,dithering_fragment:_N,dithering_pars_fragment:xN,roughnessmap_fragment:yN,roughnessmap_pars_fragment:SN,shadowmap_pars_fragment:MN,shadowmap_pars_vertex:bN,shadowmap_vertex:EN,shadowmask_pars_fragment:TN,skinbase_vertex:AN,skinning_pars_vertex:CN,skinning_vertex:RN,skinnormal_vertex:wN,specularmap_fragment:DN,specularmap_pars_fragment:NN,tonemapping_fragment:UN,tonemapping_pars_fragment:LN,transmission_fragment:ON,transmission_pars_fragment:PN,uv_pars_fragment:IN,uv_pars_vertex:FN,uv_vertex:BN,worldpos_vertex:zN,background_vert:HN,background_frag:GN,backgroundCube_vert:VN,backgroundCube_frag:kN,cube_vert:XN,cube_frag:WN,depth_vert:qN,depth_frag:YN,distance_vert:jN,distance_frag:ZN,equirect_vert:KN,equirect_frag:$N,linedashed_vert:QN,linedashed_frag:JN,meshbasic_vert:eU,meshbasic_frag:tU,meshlambert_vert:nU,meshlambert_frag:iU,meshmatcap_vert:aU,meshmatcap_frag:rU,meshnormal_vert:sU,meshnormal_frag:oU,meshphong_vert:lU,meshphong_frag:cU,meshphysical_vert:uU,meshphysical_frag:fU,meshtoon_vert:dU,meshtoon_frag:hU,points_vert:pU,points_frag:mU,shadow_vert:gU,shadow_frag:vU,sprite_vert:_U,sprite_frag:xU},Be={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ua={basic:{uniforms:ei([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:ei([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:ei([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:ei([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:ei([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:ei([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:ei([Be.points,Be.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:ei([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:ei([Be.common,Be.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:ei([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:ei([Be.sprite,Be.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:ei([Be.common,Be.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:ei([Be.lights,Be.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};ua.physical={uniforms:ei([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Bu={r:0,b:0,g:0},yU=new Tn,cb=new pt;cb.set(-1,0,0,0,1,0,0,0,1);function SU(a,e,n,r,o,c){const u=new Lt(0);let h=o===!0?0:1,p,d,g=null,_=0,v=null;function S(U){let P=U.isScene===!0?U.background:null;if(P&&P.isTexture){const C=U.backgroundBlurriness>0;P=e.get(P,C)}return P}function M(U){let P=!1;const C=S(U);C===null?x(u,h):C&&C.isColor&&(x(C,1),P=!0);const R=a.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function A(U,P){const C=S(P);C&&(C.isCubeTexture||C.mapping===Tf)?(d===void 0&&(d=new ea(new nc(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:bo(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(yU.makeRotationFromEuler(P.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(cb),d.material.toneMapped=Ut.getTransfer(C.colorSpace)!==jt,(g!==C||_!==C.version||v!==a.toneMapping)&&(d.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new ea(new Cf(2,2),new Hi({name:"BackgroundMaterial",uniforms:bo(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(C.colorSpace)!==jt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,P){U.getRGB(Bu,rb(a)),n.buffers.color.setClear(Bu.r,Bu.g,Bu.b,P,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,P=1){u.set(U),h=P,x(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,x(u,h)},render:M,addToRenderList:A,dispose:y}}function MU(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function h(z,V,Y,$,k){let I=!1;const H=_(z,$,Y,V);c!==H&&(c=H,d(c.object)),I=S(z,$,Y,k),I&&M(z,$,Y,k),k!==null&&e.update(k,a.ELEMENT_ARRAY_BUFFER),(I||u)&&(u=!1,C(z,V,Y,$),k!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function p(){return a.createVertexArray()}function d(z){return a.bindVertexArray(z)}function g(z){return a.deleteVertexArray(z)}function _(z,V,Y,$){const k=$.wireframe===!0;let I=r[V.id];I===void 0&&(I={},r[V.id]=I);const H=z.isInstancedMesh===!0?z.id:0;let J=I[H];J===void 0&&(J={},I[H]=J);let fe=J[Y.id];fe===void 0&&(fe={},J[Y.id]=fe);let F=fe[k];return F===void 0&&(F=v(p()),fe[k]=F),F}function v(z){const V=[],Y=[],$=[];for(let k=0;k<n;k++)V[k]=0,Y[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:$,object:z,attributes:{},index:null}}function S(z,V,Y,$){const k=c.attributes,I=V.attributes;let H=0;const J=Y.getAttributes();for(const fe in J)if(J[fe].location>=0){const K=k[fe];let se=I[fe];if(se===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(se=z.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;H++}return c.attributesNum!==H||c.index!==$}function M(z,V,Y,$){const k={},I=V.attributes;let H=0;const J=Y.getAttributes();for(const fe in J)if(J[fe].location>=0){let K=I[fe];K===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(K=z.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),k[fe]=se,H++}c.attributes=k,c.attributesNum=H,c.index=$}function A(){const z=c.newAttributes;for(let V=0,Y=z.length;V<Y;V++)z[V]=0}function x(z){y(z,0)}function y(z,V){const Y=c.newAttributes,$=c.enabledAttributes,k=c.attributeDivisors;Y[z]=1,$[z]===0&&(a.enableVertexAttribArray(z),$[z]=1),k[z]!==V&&(a.vertexAttribDivisor(z,V),k[z]=V)}function U(){const z=c.newAttributes,V=c.enabledAttributes;for(let Y=0,$=V.length;Y<$;Y++)V[Y]!==z[Y]&&(a.disableVertexAttribArray(Y),V[Y]=0)}function P(z,V,Y,$,k,I,H){H===!0?a.vertexAttribIPointer(z,V,Y,k,I):a.vertexAttribPointer(z,V,Y,$,k,I)}function C(z,V,Y,$){A();const k=$.attributes,I=Y.getAttributes(),H=V.defaultAttributeValues;for(const J in I){const fe=I[J];if(fe.location>=0){let F=k[J];if(F===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(F=z.instanceColor)),F!==void 0){const K=F.normalized,se=F.itemSize,_e=e.get(F);if(_e===void 0)continue;const Ce=_e.buffer,Ae=_e.type,ee=_e.bytesPerElement,Te=Ae===a.INT||Ae===a.UNSIGNED_INT||F.gpuType===x0;if(F.isInterleavedBufferAttribute){const ve=F.data,ke=ve.stride,$e=F.offset;if(ve.isInstancedInterleavedBuffer){for(let qe=0;qe<fe.locationSize;qe++)y(fe.location+qe,ve.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let qe=0;qe<fe.locationSize;qe++)x(fe.location+qe);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let qe=0;qe<fe.locationSize;qe++)P(fe.location+qe,se/fe.locationSize,Ae,K,ke*ee,($e+se/fe.locationSize*qe)*ee,Te)}else{if(F.isInstancedBufferAttribute){for(let ve=0;ve<fe.locationSize;ve++)y(fe.location+ve,F.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ve=0;ve<fe.locationSize;ve++)x(fe.location+ve);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let ve=0;ve<fe.locationSize;ve++)P(fe.location+ve,se/fe.locationSize,Ae,K,se*ee,se/fe.locationSize*ve*ee,Te)}}else if(H!==void 0){const K=H[J];if(K!==void 0)switch(K.length){case 2:a.vertexAttrib2fv(fe.location,K);break;case 3:a.vertexAttrib3fv(fe.location,K);break;case 4:a.vertexAttrib4fv(fe.location,K);break;default:a.vertexAttrib1fv(fe.location,K)}}}}U()}function R(){L();for(const z in r){const V=r[z];for(const Y in V){const $=V[Y];for(const k in $){const I=$[k];for(const H in I)g(I[H].object),delete I[H];delete $[k]}}delete r[z]}}function N(z){if(r[z.id]===void 0)return;const V=r[z.id];for(const Y in V){const $=V[Y];for(const k in $){const I=$[k];for(const H in I)g(I[H].object),delete I[H];delete $[k]}}delete r[z.id]}function O(z){for(const V in r){const Y=r[V];for(const $ in Y){const k=Y[$];if(k[z.id]===void 0)continue;const I=k[z.id];for(const H in I)g(I[H].object),delete I[H];delete k[z.id]}}}function b(z){for(const V in r){const Y=r[V],$=z.isInstancedMesh===!0?z.id:0,k=Y[$];if(k!==void 0){for(const I in k){const H=k[I];for(const J in H)g(H[J].object),delete H[J];delete k[I]}delete Y[$],Object.keys(Y).length===0&&delete r[V]}}}function L(){G(),u=!0,c!==o&&(c=o,d(c.object))}function G(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:L,resetDefaultState:G,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:x,disableUnusedAttributes:U}}function bU(a,e,n){let r;function o(p){r=p}function c(p,d){a.drawArrays(r,p,d),n.update(d,r,1)}function u(p,d,g){g!==0&&(a.drawArraysInstanced(r,p,d,g),n.update(d,r,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,d,0,g);let v=0;for(let S=0;S<g;S++)v+=d[S];n.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function EU(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ki&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const b=O===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Fi&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==fa&&!b)}function p(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(st("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),P=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),R=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:C,maxSamples:R,samples:N}}function TU(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Jr,h=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const M=_.clippingPlanes,A=_.clipIntersection,x=_.clipShadows,y=a.get(_);if(!o||M===null||M.length===0||c&&!x)c?g(null):d();else{const U=c?0:r,P=U*4;let C=y.clippingState||null;p.value=C,C=g(M,v,P,S);for(let R=0;R!==P;++R)C[R]=n[R];y.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,M){const A=_!==null?_.length:0;let x=null;if(A!==0){if(x=p.value,M!==!0||x===null){const y=S+A*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(x===null||x.length<y)&&(x=new Float32Array(y));for(let P=0,C=S;P!==A;++P,C+=4)u.copy(_[P]).applyMatrix4(U,h),u.normal.toArray(x,C),x[C+3]=u.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}const Dr=4,ky=[.125,.215,.35,.446,.526,.582],ns=20,AU=256,Ul=new ob,Xy=new Lt;let Sp=null,Mp=0,bp=0,Ep=!1;const CU=new ce;class Wy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:h=CU}=c;Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sp,Mp,bp),this._renderer.xr.enabled=Ep,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:qa,format:Ki,colorSpace:cf,depthBuffer:!1},o=qy(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qy(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RU(c)),this._blurMaterial=DU(c,e,n),this._ggxMaterial=wU(c,e,n)}return o}_compileMaterial(e){const n=new ea(new xa,e);this._renderer.compile(n,Ul)}_sceneToCubeUV(e,n,r,o,c){const p=new Ii(90,1,n,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Xy),_.toneMapping=ha,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ea(new nc,new tb({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let y=!1;const U=e.background;U?U.isColor&&(x.color.copy(U),e.background=null,y=!0):(x.color.copy(Xy),y=!0);for(let P=0;P<6;P++){const C=P%3;C===0?(p.up.set(0,d[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):C===1?(p.up.set(0,0,d[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,d[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const R=this._cubeSize;oo(o,C*R,P>2?R:0,R,R),_.setRenderTarget(o),y&&_.render(A,p),_.render(e,p)}_.toneMapping=S,_.autoClear=v,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===us||e.mapping===So;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=jy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yy());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;oo(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Ul)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const p=u.uniforms,d=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,S=_*v,{_lodMax:M}=this,A=this._sizeLods[r],x=3*A*(r>M-Dr?r-M+Dr:0),y=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=M-n,oo(c,x,y,3*A,2*A),o.setRenderTarget(c),o.render(h,Ul),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-r,oo(e,x,y,3*A,2*A),o.setRenderTarget(e),o.render(h,Ul)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,S=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ns-1),A=c/M,x=isFinite(c)?1+Math.floor(g*A):ns;x>ns&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ns}`);const y=[];let U=0;for(let O=0;O<ns;++O){const b=O/A,L=Math.exp(-b*b/2);y.push(L),O===0?U+=L:O<x&&(U+=2*L)}for(let O=0;O<y.length;O++)y[O]=y[O]/U;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-r;const C=this._sizeLods[o],R=3*C*(o>P-Dr?o-P+Dr:0),N=4*(this._cubeSize-C);oo(n,R,N,3*C,2*C),p.setRenderTarget(n),p.render(_,Ul)}}function RU(a){const e=[],n=[],r=[];let o=a;const c=a-Dr+1+ky.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let p=1/h;u>a-Dr?p=ky[u-a+Dr-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,A=3,x=2,y=1,U=new Float32Array(A*M*S),P=new Float32Array(x*M*S),C=new Float32Array(y*M*S);for(let N=0;N<S;N++){const O=N%3*2/3-1,b=N>2?0:-1,L=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];U.set(L,A*M*N),P.set(v,x*M*N);const G=[N,N,N,N,N,N];C.set(G,y*M*N)}const R=new xa;R.setAttribute("position",new ma(U,A)),R.setAttribute("uv",new ma(P,x)),R.setAttribute("faceIndex",new ma(C,y)),r.push(new ea(R,null)),o>Dr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function qy(a,e,n){const r=new pa(a,e,n);return r.texture.mapping=Tf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function oo(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function wU(a,e,n){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AU,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function DU(a,e,n){const r=new Float32Array(ns),o=new ce(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Yy(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function jy(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ub extends pa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new ib(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new nc(5,5,5),c=new Hi({name:"CubemapFromEquirect",uniforms:bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:ka});c.uniforms.tEquirect.value=n;const u=new ea(o,c),h=n.minFilter;return n.minFilter===as&&(n.minFilter=jn),new Pw(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function NU(a){let e=new WeakMap,n=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?u(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===Kh||S===$h)if(e.has(v)){const M=e.get(v).texture;return h(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const A=new ub(M.height);return A.fromEquirectangularTexture(a,v),e.set(v,A),v.addEventListener("dispose",d),h(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const S=v.mapping,M=S===Kh||S===$h,A=S===us||S===So;if(M||A){let x=n.get(v);const y=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return r===null&&(r=new Wy(a)),x=M?r.fromEquirectangular(v,x):r.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,n.set(v,x),x.texture;if(x!==void 0)return x.texture;{const U=v.image;return M&&U&&U.height>0||A&&U&&p(U)?(r===null&&(r=new Wy(a)),x=M?r.fromEquirectangular(v):r.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,n.set(v,x),v.addEventListener("dispose",g),x.texture):null}}}return v}function h(v,S){return S===Kh?v.mapping=us:S===$h&&(v.mapping=So),v}function p(v){let S=0;const M=6;for(let A=0;A<M;A++)v[A]!==void 0&&S++;return S===M}function d(v){const S=v.target;S.removeEventListener("dispose",d);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const M=n.get(S);M!==void 0&&(n.delete(S),M.dispose())}function _(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function UU(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&po("WebGLRenderer: "+r+" extension not supported."),o}}}function LU(a,e,n,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)e.update(v[S],a.ARRAY_BUFFER)}function d(_){const v=[],S=_.index,M=_.attributes.position;let A=0;if(M===void 0)return;if(S!==null){const U=S.array;A=S.version;for(let P=0,C=U.length;P<C;P+=3){const R=U[P+0],N=U[P+1],O=U[P+2];v.push(R,N,N,O,O,R)}}else{const U=M.array;A=M.version;for(let P=0,C=U.length/3-1;P<C;P+=3){const R=P+0,N=P+1,O=P+2;v.push(R,N,N,O,O,R)}}const x=new(M.count>=65535?eb:JM)(v,1);x.version=A;const y=c.get(_);y&&e.remove(y),c.set(_,x)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function OU(a,e,n){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,v){a.drawElements(r,v,c,_*u),n.update(v,r,1)}function d(_,v,S){S!==0&&(a.drawElementsInstanced(r,v,c,_*u,S),n.update(v,r,S))}function g(_,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,S);let A=0;for(let x=0;x<S;x++)A+=v[x];n.update(A,r,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g}function PU(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function IU(a,e,n){const r=new WeakMap,o=new gn;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let G=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",G)};var S=G;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let C=0;M===!0&&(C=1),A===!0&&(C=2),x===!0&&(C=3);let R=h.attributes.position.count*C,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const O=new Float32Array(R*N*4*_),b=new KM(O,R,N,_);b.type=fa,b.needsUpdate=!0;const L=C*4;for(let z=0;z<_;z++){const V=y[z],Y=U[z],$=P[z],k=R*N*4*z;for(let I=0;I<V.count;I++){const H=I*L;M===!0&&(o.fromBufferAttribute(V,I),O[k+H+0]=o.x,O[k+H+1]=o.y,O[k+H+2]=o.z,O[k+H+3]=0),A===!0&&(o.fromBufferAttribute(Y,I),O[k+H+4]=o.x,O[k+H+5]=o.y,O[k+H+6]=o.z,O[k+H+7]=0),x===!0&&(o.fromBufferAttribute($,I),O[k+H+8]=o.x,O[k+H+9]=o.y,O[k+H+10]=o.z,O[k+H+11]=$.itemSize===4?o.w:1)}}v={count:_,texture:b,size:new zt(R,N)},r.set(h,v),h.addEventListener("dispose",G)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let M=0;for(let x=0;x<d.length;x++)M+=d[x];const A=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",A),p.getUniforms().setValue(a,"morphTargetInfluences",d)}p.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function FU(a,e,n,r,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),c.get(d)!==g&&(n.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const S=d.skeleton;c.get(S)!==g&&(S.update(),c.set(S,g))}return v}function h(){c=new WeakMap}function p(d){const g=d.target;g.removeEventListener("dispose",p),r.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const BU={[OM]:"LINEAR_TONE_MAPPING",[PM]:"REINHARD_TONE_MAPPING",[IM]:"CINEON_TONE_MAPPING",[FM]:"ACES_FILMIC_TONE_MAPPING",[zM]:"AGX_TONE_MAPPING",[HM]:"NEUTRAL_TONE_MAPPING",[BM]:"CUSTOM_TONE_MAPPING"};function zU(a,e,n,r,o,c){const u=new pa(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Mo(e,n):void 0}),h=new pa(e,n,{type:qa,depthBuffer:!1,stencilBuffer:!1}),p=new xa;p.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Bi([0,2,0,0,2,0],2));const d=new Uw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new ea(p,d),_=new ob(-1,1,1,-1,0,1);let v=null,S=null,M=!1,A,x=null,y=[],U=!1;this.setSize=function(P,C){u.setSize(P,C),h.setSize(P,C);for(let R=0;R<y.length;R++){const N=y[R];N.setSize&&N.setSize(P,C)}},this.setEffects=function(P){y=P,U=y.length>0&&y[0].isRenderPass===!0;const C=u.width,R=u.height;for(let N=0;N<y.length;N++){const O=y[N];O.setSize&&O.setSize(C,R)}},this.begin=function(P,C){if(M||P.toneMapping===ha&&y.length===0)return!1;if(x=C,C!==null){const R=C.width,N=C.height;(u.width!==R||u.height!==N)&&this.setSize(R,N)}return U===!1&&P.setRenderTarget(u),A=P.toneMapping,P.toneMapping=ha,!0},this.hasRenderPass=function(){return U},this.end=function(P,C){P.toneMapping=A,M=!0;let R=u,N=h;for(let O=0;O<y.length;O++){const b=y[O];if(b.enabled!==!1&&(b.render(P,N,R,C),b.needsSwap!==!1)){const L=R;R=N,N=L}}if(v!==P.outputColorSpace||S!==P.toneMapping){v=P.outputColorSpace,S=P.toneMapping,d.defines={},Ut.getTransfer(v)===jt&&(d.defines.SRGB_TRANSFER="");const O=BU[S];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,P.setRenderTarget(x),P.render(g,_),x=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),p.dispose(),d.dispose()}}const fb=new ni,Jm=new Mo(1,1),db=new KM,hb=new lw,pb=new ib,Zy=[],Ky=[],$y=new Float32Array(16),Qy=new Float32Array(9),Jy=new Float32Array(4);function wo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=Zy[o];if(c===void 0&&(c=new Float32Array(o),Zy[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,a[u].toArray(c,h)}return c}function Rn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function wn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function wf(a,e){let n=Ky[e];n===void 0&&(n=new Int32Array(e),Ky[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function HU(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function GU(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;a.uniform2fv(this.addr,e),wn(n,e)}}function VU(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rn(n,e))return;a.uniform3fv(this.addr,e),wn(n,e)}}function kU(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;a.uniform4fv(this.addr,e),wn(n,e)}}function XU(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Rn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(n,e)}else{if(Rn(n,r))return;Jy.set(r),a.uniformMatrix2fv(this.addr,!1,Jy),wn(n,r)}}function WU(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Rn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(n,e)}else{if(Rn(n,r))return;Qy.set(r),a.uniformMatrix3fv(this.addr,!1,Qy),wn(n,r)}}function qU(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Rn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(n,e)}else{if(Rn(n,r))return;$y.set(r),a.uniformMatrix4fv(this.addr,!1,$y),wn(n,r)}}function YU(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function jU(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;a.uniform2iv(this.addr,e),wn(n,e)}}function ZU(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rn(n,e))return;a.uniform3iv(this.addr,e),wn(n,e)}}function KU(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;a.uniform4iv(this.addr,e),wn(n,e)}}function $U(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function QU(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;a.uniform2uiv(this.addr,e),wn(n,e)}}function JU(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rn(n,e))return;a.uniform3uiv(this.addr,e),wn(n,e)}}function eL(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;a.uniform4uiv(this.addr,e),wn(n,e)}}function tL(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Jm.compareFunction=n.isReversedDepthBuffer()?A0:T0,c=Jm):c=fb,n.setTexture2D(e||c,o)}function nL(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||hb,o)}function iL(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||pb,o)}function aL(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||db,o)}function rL(a){switch(a){case 5126:return HU;case 35664:return GU;case 35665:return VU;case 35666:return kU;case 35674:return XU;case 35675:return WU;case 35676:return qU;case 5124:case 35670:return YU;case 35667:case 35671:return jU;case 35668:case 35672:return ZU;case 35669:case 35673:return KU;case 5125:return $U;case 36294:return QU;case 36295:return JU;case 36296:return eL;case 35678:case 36198:case 36298:case 36306:case 35682:return tL;case 35679:case 36299:case 36307:return nL;case 35680:case 36300:case 36308:case 36293:return iL;case 36289:case 36303:case 36311:case 36292:return aL}}function sL(a,e){a.uniform1fv(this.addr,e)}function oL(a,e){const n=wo(e,this.size,2);a.uniform2fv(this.addr,n)}function lL(a,e){const n=wo(e,this.size,3);a.uniform3fv(this.addr,n)}function cL(a,e){const n=wo(e,this.size,4);a.uniform4fv(this.addr,n)}function uL(a,e){const n=wo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function fL(a,e){const n=wo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function dL(a,e){const n=wo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function hL(a,e){a.uniform1iv(this.addr,e)}function pL(a,e){a.uniform2iv(this.addr,e)}function mL(a,e){a.uniform3iv(this.addr,e)}function gL(a,e){a.uniform4iv(this.addr,e)}function vL(a,e){a.uniform1uiv(this.addr,e)}function _L(a,e){a.uniform2uiv(this.addr,e)}function xL(a,e){a.uniform3uiv(this.addr,e)}function yL(a,e){a.uniform4uiv(this.addr,e)}function SL(a,e,n){const r=this.cache,o=e.length,c=wf(n,o);Rn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Jm:u=fb;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function ML(a,e,n){const r=this.cache,o=e.length,c=wf(n,o);Rn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||hb,c[u])}function bL(a,e,n){const r=this.cache,o=e.length,c=wf(n,o);Rn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||pb,c[u])}function EL(a,e,n){const r=this.cache,o=e.length,c=wf(n,o);Rn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||db,c[u])}function TL(a){switch(a){case 5126:return sL;case 35664:return oL;case 35665:return lL;case 35666:return cL;case 35674:return uL;case 35675:return fL;case 35676:return dL;case 5124:case 35670:return hL;case 35667:case 35671:return pL;case 35668:case 35672:return mL;case 35669:case 35673:return gL;case 5125:return vL;case 36294:return _L;case 36295:return xL;case 36296:return yL;case 35678:case 36198:case 36298:case 36306:case 35682:return SL;case 35679:case 36299:case 36307:return ML;case 35680:case 36300:case 36308:case 36293:return bL;case 36289:case 36303:case 36311:case 36292:return EL}}class AL{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=rL(n.type)}}class CL{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TL(n.type)}}class RL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],r)}}}const Tp=/(\w+)(\])?(\[|\.)?/g;function eS(a,e){a.seq.push(e),a.map[e.id]=e}function wL(a,e,n){const r=a.name,o=r.length;for(Tp.lastIndex=0;;){const c=Tp.exec(r),u=Tp.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===o){eS(n,d===void 0?new AL(h,a,e):new CL(h,a,e));break}else{let _=n.map[h];_===void 0&&(_=new RL(h),eS(n,_)),n=_}}}class Qu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(n,u),p=e.getUniformLocation(n,h.name);wL(h,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function tS(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const DL=37297;let NL=0;function UL(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return r.join(`
`)}const nS=new pt;function LL(a){Ut._getMatrix(nS,Ut.workingColorSpace,a);const e=`mat3( ${nS.elements.map(n=>n.toFixed(4))} )`;switch(Ut.getTransfer(a)){case uf:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function iS(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+UL(a.getShaderSource(e),h)}else return c}function OL(a,e){const n=LL(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const PL={[OM]:"Linear",[PM]:"Reinhard",[IM]:"Cineon",[FM]:"ACESFilmic",[zM]:"AgX",[HM]:"Neutral",[BM]:"Custom"};function IL(a,e){const n=PL[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zu=new ce;function FL(){Ut.getLuminanceCoefficients(zu);const a=zu.x.toFixed(4),e=zu.y.toFixed(4),n=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BL(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function zL(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function HL(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return n}function Fl(a){return a!==""}function aS(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rS(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GL=/^[ \t]*#include +<([\w\d./]+)>/gm;function e0(a){return a.replace(GL,kL)}const VL=new Map;function kL(a,e){let n=Mt[e];if(n===void 0){const r=VL.get(e);if(r!==void 0)n=Mt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return e0(n)}const XL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sS(a){return a.replace(XL,WL)}function WL(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function oS(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qL={[Yu]:"SHADOWMAP_TYPE_PCF",[Pl]:"SHADOWMAP_TYPE_VSM"};function YL(a){return qL[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jL={[us]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[Tf]:"ENVMAP_TYPE_CUBE_UV"};function ZL(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":jL[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const KL={[So]:"ENVMAP_MODE_REFRACTION"};function $L(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":KL[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QL={[LM]:"ENVMAP_BLENDING_MULTIPLY",[A3]:"ENVMAP_BLENDING_MIX",[C3]:"ENVMAP_BLENDING_ADD"};function JL(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":QL[a.combine]||"ENVMAP_BLENDING_NONE"}function eO(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function tO(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=YL(n),d=ZL(n),g=$L(n),_=JL(n),v=eO(n),S=BL(n),M=zL(c),A=o.createProgram();let x,y,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Fl).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Fl).join(`
`),y.length>0&&(y+=`
`)):(x=[oS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),y=[oS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ha?"#define TONE_MAPPING":"",n.toneMapping!==ha?Mt.tonemapping_pars_fragment:"",n.toneMapping!==ha?IL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,OL("linearToOutputTexel",n.outputColorSpace),FL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fl).join(`
`)),u=e0(u),u=aS(u,n),u=rS(u,n),h=e0(h),h=aS(h,n),h=rS(h,n),u=sS(u),h=sS(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===yy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=U+x+u,C=U+y+h,R=tS(o,o.VERTEX_SHADER,P),N=tS(o,o.FRAGMENT_SHADER,C);o.attachShader(A,R),o.attachShader(A,N),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(z){if(a.debug.checkShaderErrors){const V=o.getProgramInfoLog(A)||"",Y=o.getShaderInfoLog(R)||"",$=o.getShaderInfoLog(N)||"",k=V.trim(),I=Y.trim(),H=$.trim();let J=!0,fe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(J=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,R,N);else{const F=iS(o,R,"vertex"),K=iS(o,N,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+k+`
`+F+`
`+K)}else k!==""?st("WebGLProgram: Program Info Log:",k):(I===""||H==="")&&(fe=!1);fe&&(z.diagnostics={runnable:J,programLog:k,vertexShader:{log:I,prefix:x},fragmentShader:{log:H,prefix:y}})}o.deleteShader(R),o.deleteShader(N),b=new Qu(o,A),L=HL(o,A)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=o.getProgramParameter(A,DL)),G},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NL++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=R,this.fragmentShader=N,this}let nO=0;class iO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new aO(e),n.set(e,r)),r}}class aO{constructor(e){this.id=nO++,this.code=e,this.usedTimes=0}}function rO(a){return a===fs||a===of||a===lf}function sO(a,e,n,r,o,c){const u=new $M,h=new iO,p=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function A(b,L,G,z,V,Y){const $=z.fog,k=V.geometry,I=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,J=e.get(b.envMap||I,H),fe=J&&J.mapping===Tf?J.image.height:null,F=S[b.type];b.precision!==null&&(v=r.getMaxPrecision(b.precision),v!==b.precision&&st("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=K!==void 0?K.length:0;let _e=0;k.morphAttributes.position!==void 0&&(_e=1),k.morphAttributes.normal!==void 0&&(_e=2),k.morphAttributes.color!==void 0&&(_e=3);let Ce,Ae,ee,Te;if(F){const ze=ua[F];Ce=ze.vertexShader,Ae=ze.fragmentShader}else{Ce=b.vertexShader,Ae=b.fragmentShader;const ze=h.getVertexShaderStage(b),At=h.getFragmentShaderStage(b);h.update(b,ze,At),ee=ze.id,Te=At.id}const ve=a.getRenderTarget(),ke=a.state.buffers.depth.getReversed(),$e=V.isInstancedMesh===!0,qe=V.isBatchedMesh===!0,bt=!!b.map,nt=!!b.matcap,gt=!!J,xt=!!b.aoMap,rt=!!b.lightMap,Et=!!b.bumpMap&&b.wireframe===!1,Gt=!!b.normalMap,Vt=!!b.displacementMap,kt=!!b.emissiveMap,lt=!!b.metalnessMap,mt=!!b.roughnessMap,q=b.anisotropy>0,Zt=b.clearcoat>0,ft=b.dispersion>0,B=b.iridescence>0,T=b.sheen>0,te=b.transmission>0,ie=q&&!!b.anisotropyMap,me=Zt&&!!b.clearcoatMap,Re=Zt&&!!b.clearcoatNormalMap,Le=Zt&&!!b.clearcoatRoughnessMap,pe=B&&!!b.iridescenceMap,xe=B&&!!b.iridescenceThicknessMap,we=T&&!!b.sheenColorMap,Ye=T&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Oe=!!b.specularColorMap,Je=!!b.specularIntensityMap,tt=te&&!!b.transmissionMap,ct=te&&!!b.thicknessMap,j=!!b.gradientMap,Ue=!!b.alphaMap,ye=b.alphaTest>0,De=!!b.alphaHash,Pe=!!b.extensions;let be=ha;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(be=a.toneMapping);const We={shaderID:F,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:Ae,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:qe,batchingColor:qe&&V._colorsTexture!==null,instancing:$e,instancingColor:$e&&V.instanceColor!==null,instancingMorph:$e&&V.morphTexture!==null,outputColorSpace:ve===null?a.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:bt,matcap:nt,envMap:gt,envMapMode:gt&&J.mapping,envMapCubeUVHeight:fe,aoMap:xt,lightMap:rt,bumpMap:Et,normalMap:Gt,displacementMap:Vt,emissiveMap:kt,normalMapObjectSpace:Gt&&b.normalMapType===D3,normalMapTangentSpace:Gt&&b.normalMapType===vy,packedNormalMap:Gt&&b.normalMapType===vy&&rO(b.normalMap.format),metalnessMap:lt,roughnessMap:mt,anisotropy:q,anisotropyMap:ie,clearcoat:Zt,clearcoatMap:me,clearcoatNormalMap:Re,clearcoatRoughnessMap:Le,dispersion:ft,iridescence:B,iridescenceMap:pe,iridescenceThicknessMap:xe,sheen:T,sheenColorMap:we,sheenRoughnessMap:Ye,specularMap:Ne,specularColorMap:Oe,specularIntensityMap:Je,transmission:te,transmissionMap:tt,thicknessMap:ct,gradientMap:j,opaque:b.transparent===!1&&b.blending===ho&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ye,alphaHash:De,combine:b.combine,mapUv:bt&&M(b.map.channel),aoMapUv:xt&&M(b.aoMap.channel),lightMapUv:rt&&M(b.lightMap.channel),bumpMapUv:Et&&M(b.bumpMap.channel),normalMapUv:Gt&&M(b.normalMap.channel),displacementMapUv:Vt&&M(b.displacementMap.channel),emissiveMapUv:kt&&M(b.emissiveMap.channel),metalnessMapUv:lt&&M(b.metalnessMap.channel),roughnessMapUv:mt&&M(b.roughnessMap.channel),anisotropyMapUv:ie&&M(b.anisotropyMap.channel),clearcoatMapUv:me&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&M(b.sheenRoughnessMap.channel),specularMapUv:Ne&&M(b.specularMap.channel),specularColorMapUv:Oe&&M(b.specularColorMap.channel),specularIntensityMapUv:Je&&M(b.specularIntensityMap.channel),transmissionMapUv:tt&&M(b.transmissionMap.channel),thicknessMapUv:ct&&M(b.thicknessMap.channel),alphaMapUv:Ue&&M(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Gt||q),vertexNormals:!!k.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!k.attributes.uv&&(bt||Ue),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Gt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ke,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:_e,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&G.length>0,shadowMapType:a.shadowMap.type,toneMapping:be,decodeVideoTexture:bt&&b.map.isVideoTexture===!0&&Ut.getTransfer(b.map.colorSpace)===jt,decodeVideoTextureEmissive:kt&&b.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(b.emissiveMap.colorSpace)===jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ga,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&b.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=p.has(1),We.vertexUv2s=p.has(2),We.vertexUv3s=p.has(3),p.clear(),We}function x(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)L.push(G),L.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(y(L,b),U(L,b),L.push(a.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function y(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function U(b,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),b.push(u.mask)}function P(b){const L=S[b.type];let G;if(L){const z=ua[L];G=ww.clone(z.uniforms)}else G=b.uniforms;return G}function C(b,L){let G=g.get(L);return G!==void 0?++G.usedTimes:(G=new tO(a,L,b,o),d.push(G),g.set(L,G)),G}function R(b){if(--b.usedTimes===0){const L=d.indexOf(b);d[L]=d[d.length-1],d.pop(),g.delete(b.cacheKey),b.destroy()}}function N(b){h.remove(b)}function O(){h.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:P,acquireProgram:C,releaseProgram:R,releaseShaderCache:N,programs:d,dispose:O}}function oO(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,p){a.get(u)[h]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function lO(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function lS(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function cS(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function h(v,S,M,A,x,y){let U=a[e];return U===void 0?(U={id:v.id,object:v,geometry:S,material:M,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:x,group:y},a[e]=U):(U.id=v.id,U.object=v,U.geometry=S,U.material=M,U.materialVariant=u(v),U.groupOrder=A,U.renderOrder=v.renderOrder,U.z=x,U.group=y),e++,U}function p(v,S,M,A,x,y){const U=h(v,S,M,A,x,y);M.transmission>0?r.push(U):M.transparent===!0?o.push(U):n.push(U)}function d(v,S,M,A,x,y){const U=h(v,S,M,A,x,y);M.transmission>0?r.unshift(U):M.transparent===!0?o.unshift(U):n.unshift(U)}function g(v,S,M){n.length>1&&n.sort(v||lO),r.length>1&&r.sort(S||lS),o.length>1&&o.sort(S||lS),M&&(n.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,S=a.length;v<S;v++){const M=a[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:p,unshift:d,finish:_,sort:g}}function cO(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new cS,a.set(r,[u])):o>=c.length?(u=new cS,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function uO(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new Lt};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":n={color:new Lt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return a[e.id]=n,n}}}function fO(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let dO=0;function hO(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function pO(a){const e=new uO,n=fO(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ce);const o=new ce,c=new Tn,u=new Tn;function h(d){let g=0,_=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,M=0,A=0,x=0,y=0,U=0,P=0,C=0,R=0,N=0,O=0;d.sort(hO);for(let L=0,G=d.length;L<G;L++){const z=d[L],V=z.color,Y=z.intensity,$=z.distance;let k=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===fs?k=z.shadow.map.texture:k=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=V.r*Y,_+=V.g*Y,v+=V.b*Y;else if(z.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(z.sh.coefficients[I],Y);O++}else if(z.isDirectionalLight){const I=e.get(z);if(I.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const H=z.shadow,J=n.get(z);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.directionalShadow[S]=J,r.directionalShadowMap[S]=k,r.directionalShadowMatrix[S]=z.shadow.matrix,U++}r.directional[S]=I,S++}else if(z.isSpotLight){const I=e.get(z);I.position.setFromMatrixPosition(z.matrixWorld),I.color.copy(V).multiplyScalar(Y),I.distance=$,I.coneCos=Math.cos(z.angle),I.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),I.decay=z.decay,r.spot[A]=I;const H=z.shadow;if(z.map&&(r.spotLightMap[R]=z.map,R++,H.updateMatrices(z),z.castShadow&&N++),r.spotLightMatrix[A]=H.matrix,z.castShadow){const J=n.get(z);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.spotShadow[A]=J,r.spotShadowMap[A]=k,C++}A++}else if(z.isRectAreaLight){const I=e.get(z);I.color.copy(V).multiplyScalar(Y),I.halfWidth.set(z.width*.5,0,0),I.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=I,x++}else if(z.isPointLight){const I=e.get(z);if(I.color.copy(z.color).multiplyScalar(z.intensity),I.distance=z.distance,I.decay=z.decay,z.castShadow){const H=z.shadow,J=n.get(z);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,r.pointShadow[M]=J,r.pointShadowMap[M]=k,r.pointShadowMatrix[M]=z.shadow.matrix,P++}r.point[M]=I,M++}else if(z.isHemisphereLight){const I=e.get(z);I.skyColor.copy(z.color).multiplyScalar(Y),I.groundColor.copy(z.groundColor).multiplyScalar(Y),r.hemi[y]=I,y++}}x>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const b=r.hash;(b.directionalLength!==S||b.pointLength!==M||b.spotLength!==A||b.rectAreaLength!==x||b.hemiLength!==y||b.numDirectionalShadows!==U||b.numPointShadows!==P||b.numSpotShadows!==C||b.numSpotMaps!==R||b.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+R-N,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,b.directionalLength=S,b.pointLength=M,b.spotLength=A,b.rectAreaLength=x,b.hemiLength=y,b.numDirectionalShadows=U,b.numPointShadows=P,b.numSpotShadows=C,b.numSpotMaps=R,b.numLightProbes=O,r.version=dO++)}function p(d,g){let _=0,v=0,S=0,M=0,A=0;const x=g.matrixWorldInverse;for(let y=0,U=d.length;y<U;y++){const P=d[y];if(P.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(x),_++}else if(P.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),u.identity(),c.copy(P.matrixWorld),c.premultiply(x),u.extractRotation(c),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),v++}else if(P.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(x),A++}}}return{setup:h,setupView:p,state:r}}function uS(a){const e=new pO(a),n=[],r=[],o=[];function c(v){_.camera=v,n.length=0,r.length=0,o.length=0}function u(v){n.push(v)}function h(v){r.push(v)}function p(v){o.push(v)}function d(){e.setup(n)}function g(v){e.setupView(n,v)}const _={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function mO(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new uS(a),e.set(o,[h])):c>=u.length?(h=new uS(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const gO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_O=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],xO=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],fS=new Tn,Ll=new ce,Ap=new ce;function yO(a,e,n){let r=new nb;const o=new zt,c=new zt,u=new gn,h=new Lw,p=new Ow,d={},g=n.maxTextureSize,_={[Nr]:ti,[ti]:Nr,[Ga]:Ga},v=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:gO,fragmentShader:vO}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new xa;M.setAttribute("position",new ma(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ea(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let y=this.type;this.render=function(N,O,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;this.type===o3&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yu);const L=a.getRenderTarget(),G=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),V=a.state;V.setBlending(ka),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Y=y!==this.type;Y&&O.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(k=>k.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,k=N.length;$<k;$++){const I=N[$],H=I.shadow;if(H===void 0){st("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const J=H.getFrameExtents();o.multiply(J),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/J.x),o.x=c.x*J.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/J.y),o.y=c.y*J.y,H.mapSize.y=c.y));const fe=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=fe,H.map===null||Y===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Pl){if(I.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new pa(o.x,o.y,{format:fs,type:qa,minFilter:jn,magFilter:jn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new Mo(o.x,o.y,fa),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=Ya,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn}else I.isPointLight?(H.map=new ub(o.x),H.map.depthTexture=new Cw(o.x,ga)):(H.map=new pa(o.x,o.y),H.map.depthTexture=new Mo(o.x,o.y,ga)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=Ya,this.type===Yu?(H.map.depthTexture.compareFunction=fe?A0:T0,H.map.depthTexture.minFilter=jn,H.map.depthTexture.magFilter=jn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn);H.camera.updateProjectionMatrix()}const F=H.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<F;K++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,K),a.clear();else{K===0&&(a.setRenderTarget(H.map),a.clear());const se=H.getViewport(K);u.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),V.viewport(u)}if(I.isPointLight){const se=H.camera,_e=H.matrix,Ce=I.distance||se.far;Ce!==se.far&&(se.far=Ce,se.updateProjectionMatrix()),Ll.setFromMatrixPosition(I.matrixWorld),se.position.copy(Ll),Ap.copy(se.position),Ap.add(_O[K]),se.up.copy(xO[K]),se.lookAt(Ap),se.updateMatrixWorld(),_e.makeTranslation(-Ll.x,-Ll.y,-Ll.z),fS.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(fS,se.coordinateSystem,se.reversedDepth)}else H.updateMatrices(I);r=H.getFrustum(),C(O,b,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===Pl&&U(H,b),H.needsUpdate=!1}y=this.type,x.needsUpdate=!1,a.setRenderTarget(L,G,z)};function U(N,O){const b=e.update(A);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new pa(o.x,o.y,{format:fs,type:qa})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(O,null,b,v,A,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(O,null,b,S,A,null)}function P(N,O,b,L){let G=null;const z=b.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)G=z;else if(G=b.isPointLight===!0?p:h,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const V=G.uuid,Y=O.uuid;let $=d[V];$===void 0&&($={},d[V]=$);let k=$[Y];k===void 0&&(k=G.clone(),$[Y]=k,O.addEventListener("dispose",R)),G=k}if(G.visible=O.visible,G.wireframe=O.wireframe,L===Pl?G.side=O.shadowSide!==null?O.shadowSide:O.side:G.side=O.shadowSide!==null?O.shadowSide:_[O.side],G.alphaMap=O.alphaMap,G.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,G.map=O.map,G.clipShadows=O.clipShadows,G.clippingPlanes=O.clippingPlanes,G.clipIntersection=O.clipIntersection,G.displacementMap=O.displacementMap,G.displacementScale=O.displacementScale,G.displacementBias=O.displacementBias,G.wireframeLinewidth=O.wireframeLinewidth,G.linewidth=O.linewidth,b.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const V=a.properties.get(G);V.light=b}return G}function C(N,O,b,L,G){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&G===Pl)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,N.matrixWorld);const Y=e.update(N),$=N.material;if(Array.isArray($)){const k=Y.groups;for(let I=0,H=k.length;I<H;I++){const J=k[I],fe=$[J.materialIndex];if(fe&&fe.visible){const F=P(N,fe,L,G);N.onBeforeShadow(a,N,O,b,Y,F,J),a.renderBufferDirect(b,null,Y,F,N,J),N.onAfterShadow(a,N,O,b,Y,F,J)}}}else if($.visible){const k=P(N,$,L,G);N.onBeforeShadow(a,N,O,b,Y,k,null),a.renderBufferDirect(b,null,Y,k,N,null),N.onAfterShadow(a,N,O,b,Y,k,null)}}const V=N.children;for(let Y=0,$=V.length;Y<$;Y++)C(V[Y],O,b,L,G)}function R(N){N.target.removeEventListener("dispose",R);for(const b in d){const L=d[b],G=N.target.uuid;G in L&&(L[G].dispose(),delete L[G])}}}function SO(a,e){function n(){let j=!1;const Ue=new gn;let ye=null;const De=new gn(0,0,0,0);return{setMask:function(Pe){ye!==Pe&&!j&&(a.colorMask(Pe,Pe,Pe,Pe),ye=Pe)},setLocked:function(Pe){j=Pe},setClear:function(Pe,be,We,ze,At){At===!0&&(Pe*=ze,be*=ze,We*=ze),Ue.set(Pe,be,We,ze),De.equals(Ue)===!1&&(a.clearColor(Pe,be,We,ze),De.copy(Ue))},reset:function(){j=!1,ye=null,De.set(-1,0,0,0)}}}function r(){let j=!1,Ue=!1,ye=null,De=null,Pe=null;return{setReversed:function(be){if(Ue!==be){const We=e.get("EXT_clip_control");be?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ue=be;const ze=Pe;Pe=null,this.setClear(ze)}},getReversed:function(){return Ue},setTest:function(be){be?ve(a.DEPTH_TEST):ke(a.DEPTH_TEST)},setMask:function(be){ye!==be&&!j&&(a.depthMask(be),ye=be)},setFunc:function(be){if(Ue&&(be=H3[be]),De!==be){switch(be){case pm:a.depthFunc(a.NEVER);break;case mm:a.depthFunc(a.ALWAYS);break;case gm:a.depthFunc(a.LESS);break;case yo:a.depthFunc(a.LEQUAL);break;case vm:a.depthFunc(a.EQUAL);break;case _m:a.depthFunc(a.GEQUAL);break;case xm:a.depthFunc(a.GREATER);break;case ym:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}De=be}},setLocked:function(be){j=be},setClear:function(be){Pe!==be&&(Pe=be,Ue&&(be=1-be),a.clearDepth(be))},reset:function(){j=!1,ye=null,De=null,Pe=null,Ue=!1}}}function o(){let j=!1,Ue=null,ye=null,De=null,Pe=null,be=null,We=null,ze=null,At=null;return{setTest:function(dt){j||(dt?ve(a.STENCIL_TEST):ke(a.STENCIL_TEST))},setMask:function(dt){Ue!==dt&&!j&&(a.stencilMask(dt),Ue=dt)},setFunc:function(dt,en,Nt){(ye!==dt||De!==en||Pe!==Nt)&&(a.stencilFunc(dt,en,Nt),ye=dt,De=en,Pe=Nt)},setOp:function(dt,en,Nt){(be!==dt||We!==en||ze!==Nt)&&(a.stencilOp(dt,en,Nt),be=dt,We=en,ze=Nt)},setLocked:function(dt){j=dt},setClear:function(dt){At!==dt&&(a.clearStencil(dt),At=dt)},reset:function(){j=!1,Ue=null,ye=null,De=null,Pe=null,be=null,We=null,ze=null,At=null}}}const c=new n,u=new r,h=new o,p=new WeakMap,d=new WeakMap;let g={},_={},v={},S=new WeakMap,M=[],A=null,x=!1,y=null,U=null,P=null,C=null,R=null,N=null,O=null,b=new Lt(0,0,0),L=0,G=!1,z=null,V=null,Y=null,$=null,k=null;const I=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const fe=a.getParameter(a.VERSION);fe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(fe)[1]),H=J>=1):fe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),H=J>=2);let F=null,K={};const se=a.getParameter(a.SCISSOR_BOX),_e=a.getParameter(a.VIEWPORT),Ce=new gn().fromArray(se),Ae=new gn().fromArray(_e);function ee(j,Ue,ye,De){const Pe=new Uint8Array(4),be=a.createTexture();a.bindTexture(j,be),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let We=0;We<ye;We++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(Ue,0,a.RGBA,1,1,De,0,a.RGBA,a.UNSIGNED_BYTE,Pe):a.texImage2D(Ue+We,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Pe);return be}const Te={};Te[a.TEXTURE_2D]=ee(a.TEXTURE_2D,a.TEXTURE_2D,1),Te[a.TEXTURE_CUBE_MAP]=ee(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[a.TEXTURE_2D_ARRAY]=ee(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Te[a.TEXTURE_3D]=ee(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ve(a.DEPTH_TEST),u.setFunc(yo),Et(!1),Gt(py),ve(a.CULL_FACE),xt(ka);function ve(j){g[j]!==!0&&(a.enable(j),g[j]=!0)}function ke(j){g[j]!==!1&&(a.disable(j),g[j]=!1)}function $e(j,Ue){return v[j]!==Ue?(a.bindFramebuffer(j,Ue),v[j]=Ue,j===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ue),j===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ue),!0):!1}function qe(j,Ue){let ye=M,De=!1;if(j){ye=S.get(Ue),ye===void 0&&(ye=[],S.set(Ue,ye));const Pe=j.textures;if(ye.length!==Pe.length||ye[0]!==a.COLOR_ATTACHMENT0){for(let be=0,We=Pe.length;be<We;be++)ye[be]=a.COLOR_ATTACHMENT0+be;ye.length=Pe.length,De=!0}}else ye[0]!==a.BACK&&(ye[0]=a.BACK,De=!0);De&&a.drawBuffers(ye)}function bt(j){return A!==j?(a.useProgram(j),A=j,!0):!1}const nt={[ts]:a.FUNC_ADD,[c3]:a.FUNC_SUBTRACT,[u3]:a.FUNC_REVERSE_SUBTRACT};nt[f3]=a.MIN,nt[d3]=a.MAX;const gt={[h3]:a.ZERO,[p3]:a.ONE,[m3]:a.SRC_COLOR,[dm]:a.SRC_ALPHA,[S3]:a.SRC_ALPHA_SATURATE,[x3]:a.DST_COLOR,[v3]:a.DST_ALPHA,[g3]:a.ONE_MINUS_SRC_COLOR,[hm]:a.ONE_MINUS_SRC_ALPHA,[y3]:a.ONE_MINUS_DST_COLOR,[_3]:a.ONE_MINUS_DST_ALPHA,[M3]:a.CONSTANT_COLOR,[b3]:a.ONE_MINUS_CONSTANT_COLOR,[E3]:a.CONSTANT_ALPHA,[T3]:a.ONE_MINUS_CONSTANT_ALPHA};function xt(j,Ue,ye,De,Pe,be,We,ze,At,dt){if(j===ka){x===!0&&(ke(a.BLEND),x=!1);return}if(x===!1&&(ve(a.BLEND),x=!0),j!==l3){if(j!==y||dt!==G){if((U!==ts||R!==ts)&&(a.blendEquation(a.FUNC_ADD),U=ts,R=ts),dt)switch(j){case ho:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fm:a.blendFunc(a.ONE,a.ONE);break;case my:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case gy:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Pt("WebGLState: Invalid blending: ",j);break}else switch(j){case ho:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fm:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case my:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gy:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",j);break}P=null,C=null,N=null,O=null,b.set(0,0,0),L=0,y=j,G=dt}return}Pe=Pe||Ue,be=be||ye,We=We||De,(Ue!==U||Pe!==R)&&(a.blendEquationSeparate(nt[Ue],nt[Pe]),U=Ue,R=Pe),(ye!==P||De!==C||be!==N||We!==O)&&(a.blendFuncSeparate(gt[ye],gt[De],gt[be],gt[We]),P=ye,C=De,N=be,O=We),(ze.equals(b)===!1||At!==L)&&(a.blendColor(ze.r,ze.g,ze.b,At),b.copy(ze),L=At),y=j,G=!1}function rt(j,Ue){j.side===Ga?ke(a.CULL_FACE):ve(a.CULL_FACE);let ye=j.side===ti;Ue&&(ye=!ye),Et(ye),j.blending===ho&&j.transparent===!1?xt(ka):xt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),c.setMask(j.colorWrite);const De=j.stencilWrite;h.setTest(De),De&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),kt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ve(a.SAMPLE_ALPHA_TO_COVERAGE):ke(a.SAMPLE_ALPHA_TO_COVERAGE)}function Et(j){z!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),z=j)}function Gt(j){j!==r3?(ve(a.CULL_FACE),j!==V&&(j===py?a.cullFace(a.BACK):j===s3?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ke(a.CULL_FACE),V=j}function Vt(j){j!==Y&&(H&&a.lineWidth(j),Y=j)}function kt(j,Ue,ye){j?(ve(a.POLYGON_OFFSET_FILL),($!==Ue||k!==ye)&&($=Ue,k=ye,u.getReversed()&&(Ue=-Ue),a.polygonOffset(Ue,ye))):ke(a.POLYGON_OFFSET_FILL)}function lt(j){j?ve(a.SCISSOR_TEST):ke(a.SCISSOR_TEST)}function mt(j){j===void 0&&(j=a.TEXTURE0+I-1),F!==j&&(a.activeTexture(j),F=j)}function q(j,Ue,ye){ye===void 0&&(F===null?ye=a.TEXTURE0+I-1:ye=F);let De=K[ye];De===void 0&&(De={type:void 0,texture:void 0},K[ye]=De),(De.type!==j||De.texture!==Ue)&&(F!==ye&&(a.activeTexture(ye),F=ye),a.bindTexture(j,Ue||Te[j]),De.type=j,De.texture=Ue)}function Zt(){const j=K[F];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ft(){try{a.compressedTexImage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function B(){try{a.compressedTexImage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function T(){try{a.texSubImage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function te(){try{a.texSubImage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function ie(){try{a.compressedTexSubImage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function me(){try{a.compressedTexSubImage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function Re(){try{a.texStorage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function Le(){try{a.texStorage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function pe(){try{a.texImage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function xe(){try{a.texImage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function we(j){return _[j]!==void 0?_[j]:a.getParameter(j)}function Ye(j,Ue){_[j]!==Ue&&(a.pixelStorei(j,Ue),_[j]=Ue)}function Ne(j){Ce.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),Ce.copy(j))}function Oe(j){Ae.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),Ae.copy(j))}function Je(j,Ue){let ye=d.get(Ue);ye===void 0&&(ye=new WeakMap,d.set(Ue,ye));let De=ye.get(j);De===void 0&&(De=a.getUniformBlockIndex(Ue,j.name),ye.set(j,De))}function tt(j,Ue){const De=d.get(Ue).get(j);p.get(Ue)!==De&&(a.uniformBlockBinding(Ue,De,j.__bindingPointIndex),p.set(Ue,De))}function ct(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},F=null,K={},v={},S=new WeakMap,M=[],A=null,x=!1,y=null,U=null,P=null,C=null,R=null,N=null,O=null,b=new Lt(0,0,0),L=0,G=!1,z=null,V=null,Y=null,$=null,k=null,Ce.set(0,0,a.canvas.width,a.canvas.height),Ae.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ve,disable:ke,bindFramebuffer:$e,drawBuffers:qe,useProgram:bt,setBlending:xt,setMaterial:rt,setFlipSided:Et,setCullFace:Gt,setLineWidth:Vt,setPolygonOffset:kt,setScissorTest:lt,activeTexture:mt,bindTexture:q,unbindTexture:Zt,compressedTexImage2D:ft,compressedTexImage3D:B,texImage2D:pe,texImage3D:xe,pixelStorei:Ye,getParameter:we,updateUBOMapping:Je,uniformBlockBinding:tt,texStorage2D:Re,texStorage3D:Le,texSubImage2D:T,texSubImage3D:te,compressedTexSubImage2D:ie,compressedTexSubImage3D:me,scissor:Ne,viewport:Oe,reset:ct}}function MO(a,e,n,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new zt,g=new WeakMap,_=new Set;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(B,T){return M?new OffscreenCanvas(B,T):df("canvas")}function x(B,T,te){let ie=1;const me=ft(B);if((me.width>te||me.height>te)&&(ie=te/Math.max(me.width,me.height)),ie<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Re=Math.floor(ie*me.width),Le=Math.floor(ie*me.height);v===void 0&&(v=A(Re,Le));const pe=T?A(Re,Le):v;return pe.width=Re,pe.height=Le,pe.getContext("2d").drawImage(B,0,0,Re,Le),st("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Re+"x"+Le+")."),pe}else return"data"in B&&st("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),B;return B}function y(B){return B.generateMipmaps}function U(B){a.generateMipmap(B)}function P(B){return B.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?a.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(B,T,te,ie,me,Re=!1){if(B!==null){if(a[B]!==void 0)return a[B];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Le;ie&&(Le=e.get("EXT_texture_norm16"),Le||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=T;if(T===a.RED&&(te===a.FLOAT&&(pe=a.R32F),te===a.HALF_FLOAT&&(pe=a.R16F),te===a.UNSIGNED_BYTE&&(pe=a.R8),te===a.UNSIGNED_SHORT&&Le&&(pe=Le.R16_EXT),te===a.SHORT&&Le&&(pe=Le.R16_SNORM_EXT)),T===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(pe=a.R8UI),te===a.UNSIGNED_SHORT&&(pe=a.R16UI),te===a.UNSIGNED_INT&&(pe=a.R32UI),te===a.BYTE&&(pe=a.R8I),te===a.SHORT&&(pe=a.R16I),te===a.INT&&(pe=a.R32I)),T===a.RG&&(te===a.FLOAT&&(pe=a.RG32F),te===a.HALF_FLOAT&&(pe=a.RG16F),te===a.UNSIGNED_BYTE&&(pe=a.RG8),te===a.UNSIGNED_SHORT&&Le&&(pe=Le.RG16_EXT),te===a.SHORT&&Le&&(pe=Le.RG16_SNORM_EXT)),T===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(pe=a.RG8UI),te===a.UNSIGNED_SHORT&&(pe=a.RG16UI),te===a.UNSIGNED_INT&&(pe=a.RG32UI),te===a.BYTE&&(pe=a.RG8I),te===a.SHORT&&(pe=a.RG16I),te===a.INT&&(pe=a.RG32I)),T===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),te===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),te===a.UNSIGNED_INT&&(pe=a.RGB32UI),te===a.BYTE&&(pe=a.RGB8I),te===a.SHORT&&(pe=a.RGB16I),te===a.INT&&(pe=a.RGB32I)),T===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),te===a.UNSIGNED_INT&&(pe=a.RGBA32UI),te===a.BYTE&&(pe=a.RGBA8I),te===a.SHORT&&(pe=a.RGBA16I),te===a.INT&&(pe=a.RGBA32I)),T===a.RGB&&(te===a.UNSIGNED_SHORT&&Le&&(pe=Le.RGB16_EXT),te===a.SHORT&&Le&&(pe=Le.RGB16_SNORM_EXT),te===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),te===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),T===a.RGBA){const xe=Re?uf:Ut.getTransfer(me);te===a.FLOAT&&(pe=a.RGBA32F),te===a.HALF_FLOAT&&(pe=a.RGBA16F),te===a.UNSIGNED_BYTE&&(pe=xe===jt?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT&&Le&&(pe=Le.RGBA16_EXT),te===a.SHORT&&Le&&(pe=Le.RGBA16_SNORM_EXT),te===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function R(B,T){let te;return B?T===null||T===ga||T===Kl?te=a.DEPTH24_STENCIL8:T===fa?te=a.DEPTH32F_STENCIL8:T===Zl&&(te=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ga||T===Kl?te=a.DEPTH_COMPONENT24:T===fa?te=a.DEPTH_COMPONENT32F:T===Zl&&(te=a.DEPTH_COMPONENT16),te}function N(B,T){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==Gn&&B.minFilter!==jn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function O(B){const T=B.target;T.removeEventListener("dispose",O),L(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&_.delete(T)}function b(B){const T=B.target;T.removeEventListener("dispose",b),z(T)}function L(B){const T=r.get(B);if(T.__webglInit===void 0)return;const te=B.source,ie=S.get(te);if(ie){const me=ie[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&G(B),Object.keys(ie).length===0&&S.delete(te)}r.remove(B)}function G(B){const T=r.get(B);a.deleteTexture(T.__webglTexture);const te=B.source,ie=S.get(te);delete ie[T.__cacheKey],u.memory.textures--}function z(B){const T=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let me=0;me<T.__webglFramebuffer[ie].length;me++)a.deleteFramebuffer(T.__webglFramebuffer[ie][me]);else a.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)a.deleteFramebuffer(T.__webglFramebuffer[ie]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=B.textures;for(let ie=0,me=te.length;ie<me;ie++){const Re=r.get(te[ie]);Re.__webglTexture&&(a.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(te[ie])}r.remove(B)}let V=0;function Y(){V=0}function $(){return V}function k(B){V=B}function I(){const B=V;return B>=o.maxTextures&&st("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),V+=1,B}function H(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function J(B,T){const te=r.get(B);if(B.isVideoTexture&&q(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&te.__version!==B.version){const ie=B.image;if(ie===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(te,B,T);return}}else B.isExternalTexture&&(te.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+T)}function fe(B,T){const te=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&te.__version!==B.version){ke(te,B,T);return}else B.isExternalTexture&&(te.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+T)}function F(B,T){const te=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&te.__version!==B.version){ke(te,B,T);return}n.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+T)}function K(B,T){const te=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&te.__version!==B.version){$e(te,B,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+T)}const se={[Sm]:a.REPEAT,[Va]:a.CLAMP_TO_EDGE,[Mm]:a.MIRRORED_REPEAT},_e={[Gn]:a.NEAREST,[R3]:a.NEAREST_MIPMAP_NEAREST,[_u]:a.NEAREST_MIPMAP_LINEAR,[jn]:a.LINEAR,[Qh]:a.LINEAR_MIPMAP_NEAREST,[as]:a.LINEAR_MIPMAP_LINEAR},Ce={[N3]:a.NEVER,[I3]:a.ALWAYS,[U3]:a.LESS,[T0]:a.LEQUAL,[L3]:a.EQUAL,[A0]:a.GEQUAL,[O3]:a.GREATER,[P3]:a.NOTEQUAL};function Ae(B,T){if(T.type===fa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===jn||T.magFilter===Qh||T.magFilter===_u||T.magFilter===as||T.minFilter===jn||T.minFilter===Qh||T.minFilter===_u||T.minFilter===as)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(B,a.TEXTURE_WRAP_S,se[T.wrapS]),a.texParameteri(B,a.TEXTURE_WRAP_T,se[T.wrapT]),(B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY)&&a.texParameteri(B,a.TEXTURE_WRAP_R,se[T.wrapR]),a.texParameteri(B,a.TEXTURE_MAG_FILTER,_e[T.magFilter]),a.texParameteri(B,a.TEXTURE_MIN_FILTER,_e[T.minFilter]),T.compareFunction&&(a.texParameteri(B,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(B,a.TEXTURE_COMPARE_FUNC,Ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Gn||T.minFilter!==_u&&T.minFilter!==as||T.type===fa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(B,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ee(B,T){let te=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",O));const ie=T.source;let me=S.get(ie);me===void 0&&(me={},S.set(ie,me));const Re=H(T);if(Re!==B.__cacheKey){me[Re]===void 0&&(me[Re]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,te=!0),me[Re].usedTimes++;const Le=me[B.__cacheKey];Le!==void 0&&(me[B.__cacheKey].usedTimes--,Le.usedTimes===0&&G(T)),B.__cacheKey=Re,B.__webglTexture=me[Re].texture}return te}function Te(B,T,te){return Math.floor(Math.floor(B/te)/T)}function ve(B,T,te,ie){const Re=B.updateRanges;if(Re.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,te,ie,T.data);else{Re.sort((Ye,Ne)=>Ye.start-Ne.start);let Le=0;for(let Ye=1;Ye<Re.length;Ye++){const Ne=Re[Le],Oe=Re[Ye],Je=Ne.start+Ne.count,tt=Te(Oe.start,T.width,4),ct=Te(Ne.start,T.width,4);Oe.start<=Je+1&&tt===ct&&Te(Oe.start+Oe.count-1,T.width,4)===tt?Ne.count=Math.max(Ne.count,Oe.start+Oe.count-Ne.start):(++Le,Re[Le]=Oe)}Re.length=Le+1;const pe=n.getParameter(a.UNPACK_ROW_LENGTH),xe=n.getParameter(a.UNPACK_SKIP_PIXELS),we=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Ye=0,Ne=Re.length;Ye<Ne;Ye++){const Oe=Re[Ye],Je=Math.floor(Oe.start/4),tt=Math.ceil(Oe.count/4),ct=Je%T.width,j=Math.floor(Je/T.width),Ue=tt,ye=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,ct),n.pixelStorei(a.UNPACK_SKIP_ROWS,j),n.texSubImage2D(a.TEXTURE_2D,0,ct,j,Ue,ye,te,ie,T.data)}B.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,pe),n.pixelStorei(a.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(a.UNPACK_SKIP_ROWS,we)}}function ke(B,T,te){let ie=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=a.TEXTURE_3D);const me=ee(B,T),Re=T.source;n.bindTexture(ie,B.__webglTexture,a.TEXTURE0+te);const Le=r.get(Re);if(Re.version!==Le.__version||me===!0){if(n.activeTexture(a.TEXTURE0+te),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ye=Ut.getPrimaries(Ut.workingColorSpace),De=T.colorSpace===Cr?null:Ut.getPrimaries(T.colorSpace),Pe=T.colorSpace===Cr||ye===De?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}n.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment);let xe=x(T.image,!1,o.maxTextureSize);xe=Zt(T,xe);const we=c.convert(T.format,T.colorSpace),Ye=c.convert(T.type);let Ne=C(T.internalFormat,we,Ye,T.normalized,T.colorSpace,T.isVideoTexture);Ae(ie,T);let Oe;const Je=T.mipmaps,tt=T.isVideoTexture!==!0,ct=Le.__version===void 0||me===!0,j=Re.dataReady,Ue=N(T,xe);if(T.isDepthTexture)Ne=R(T.format===rs,T.type),ct&&(tt?n.texStorage2D(a.TEXTURE_2D,1,Ne,xe.width,xe.height):n.texImage2D(a.TEXTURE_2D,0,Ne,xe.width,xe.height,0,we,Ye,null));else if(T.isDataTexture)if(Je.length>0){tt&&ct&&n.texStorage2D(a.TEXTURE_2D,Ue,Ne,Je[0].width,Je[0].height);for(let ye=0,De=Je.length;ye<De;ye++)Oe=Je[ye],tt?j&&n.texSubImage2D(a.TEXTURE_2D,ye,0,0,Oe.width,Oe.height,we,Ye,Oe.data):n.texImage2D(a.TEXTURE_2D,ye,Ne,Oe.width,Oe.height,0,we,Ye,Oe.data);T.generateMipmaps=!1}else tt?(ct&&n.texStorage2D(a.TEXTURE_2D,Ue,Ne,xe.width,xe.height),j&&ve(T,xe,we,Ye)):n.texImage2D(a.TEXTURE_2D,0,Ne,xe.width,xe.height,0,we,Ye,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){tt&&ct&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,Ne,Je[0].width,Je[0].height,xe.depth);for(let ye=0,De=Je.length;ye<De;ye++)if(Oe=Je[ye],T.format!==Ki)if(we!==null)if(tt){if(j)if(T.layerUpdates.size>0){const Pe=Vy(Oe.width,Oe.height,T.format,T.type);for(const be of T.layerUpdates){const We=Oe.data.subarray(be*Pe/Oe.data.BYTES_PER_ELEMENT,(be+1)*Pe/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ye,0,0,be,Oe.width,Oe.height,1,we,We)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ye,0,0,0,Oe.width,Oe.height,xe.depth,we,Oe.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ye,Ne,Oe.width,Oe.height,xe.depth,0,Oe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?j&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,ye,0,0,0,Oe.width,Oe.height,xe.depth,we,Ye,Oe.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ye,Ne,Oe.width,Oe.height,xe.depth,0,we,Ye,Oe.data)}else{tt&&ct&&n.texStorage2D(a.TEXTURE_2D,Ue,Ne,Je[0].width,Je[0].height);for(let ye=0,De=Je.length;ye<De;ye++)Oe=Je[ye],T.format!==Ki?we!==null?tt?j&&n.compressedTexSubImage2D(a.TEXTURE_2D,ye,0,0,Oe.width,Oe.height,we,Oe.data):n.compressedTexImage2D(a.TEXTURE_2D,ye,Ne,Oe.width,Oe.height,0,Oe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?j&&n.texSubImage2D(a.TEXTURE_2D,ye,0,0,Oe.width,Oe.height,we,Ye,Oe.data):n.texImage2D(a.TEXTURE_2D,ye,Ne,Oe.width,Oe.height,0,we,Ye,Oe.data)}else if(T.isDataArrayTexture)if(tt){if(ct&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,Ne,xe.width,xe.height,xe.depth),j)if(T.layerUpdates.size>0){const ye=Vy(xe.width,xe.height,T.format,T.type);for(const De of T.layerUpdates){const Pe=xe.data.subarray(De*ye/xe.data.BYTES_PER_ELEMENT,(De+1)*ye/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,De,xe.width,xe.height,1,we,Ye,Pe)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,we,Ye,xe.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,we,Ye,xe.data);else if(T.isData3DTexture)tt?(ct&&n.texStorage3D(a.TEXTURE_3D,Ue,Ne,xe.width,xe.height,xe.depth),j&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,we,Ye,xe.data)):n.texImage3D(a.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,we,Ye,xe.data);else if(T.isFramebufferTexture){if(ct)if(tt)n.texStorage2D(a.TEXTURE_2D,Ue,Ne,xe.width,xe.height);else{let ye=xe.width,De=xe.height;for(let Pe=0;Pe<Ue;Pe++)n.texImage2D(a.TEXTURE_2D,Pe,Ne,ye,De,0,we,Ye,null),ye>>=1,De>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in a){const ye=a.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),xe.parentNode!==ye){ye.appendChild(xe),_.add(T),ye.onpaint=De=>{const Pe=De.changedElements;for(const be of _)Pe.includes(be.image)&&(be.needsUpdate=!0)},ye.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,xe);else{const Pe=a.RGBA,be=a.RGBA,We=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Pe,be,We,xe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Je.length>0){if(tt&&ct){const ye=ft(Je[0]);n.texStorage2D(a.TEXTURE_2D,Ue,Ne,ye.width,ye.height)}for(let ye=0,De=Je.length;ye<De;ye++)Oe=Je[ye],tt?j&&n.texSubImage2D(a.TEXTURE_2D,ye,0,0,we,Ye,Oe):n.texImage2D(a.TEXTURE_2D,ye,Ne,we,Ye,Oe);T.generateMipmaps=!1}else if(tt){if(ct){const ye=ft(xe);n.texStorage2D(a.TEXTURE_2D,Ue,Ne,ye.width,ye.height)}j&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,we,Ye,xe)}else n.texImage2D(a.TEXTURE_2D,0,Ne,we,Ye,xe);y(T)&&U(ie),Le.__version=Re.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function $e(B,T,te){if(T.image.length!==6)return;const ie=ee(B,T),me=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+te);const Re=r.get(me);if(me.version!==Re.__version||ie===!0){n.activeTexture(a.TEXTURE0+te);const Le=Ut.getPrimaries(Ut.workingColorSpace),pe=T.colorSpace===Cr?null:Ut.getPrimaries(T.colorSpace),xe=T.colorSpace===Cr||Le===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const we=T.isCompressedTexture||T.image[0].isCompressedTexture,Ye=T.image[0]&&T.image[0].isDataTexture,Ne=[];for(let be=0;be<6;be++)!we&&!Ye?Ne[be]=x(T.image[be],!0,o.maxCubemapSize):Ne[be]=Ye?T.image[be].image:T.image[be],Ne[be]=Zt(T,Ne[be]);const Oe=Ne[0],Je=c.convert(T.format,T.colorSpace),tt=c.convert(T.type),ct=C(T.internalFormat,Je,tt,T.normalized,T.colorSpace),j=T.isVideoTexture!==!0,Ue=Re.__version===void 0||ie===!0,ye=me.dataReady;let De=N(T,Oe);Ae(a.TEXTURE_CUBE_MAP,T);let Pe;if(we){j&&Ue&&n.texStorage2D(a.TEXTURE_CUBE_MAP,De,ct,Oe.width,Oe.height);for(let be=0;be<6;be++){Pe=Ne[be].mipmaps;for(let We=0;We<Pe.length;We++){const ze=Pe[We];T.format!==Ki?Je!==null?j?ye&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,ze.width,ze.height,Je,ze.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,ct,ze.width,ze.height,0,ze.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,ze.width,ze.height,Je,tt,ze.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,ct,ze.width,ze.height,0,Je,tt,ze.data)}}}else{if(Pe=T.mipmaps,j&&Ue){Pe.length>0&&De++;const be=ft(Ne[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,De,ct,be.width,be.height)}for(let be=0;be<6;be++)if(Ye){j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ne[be].width,Ne[be].height,Je,tt,Ne[be].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,Ne[be].width,Ne[be].height,0,Je,tt,Ne[be].data);for(let We=0;We<Pe.length;We++){const At=Pe[We].image[be].image;j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,At.width,At.height,Je,tt,At.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,ct,At.width,At.height,0,Je,tt,At.data)}}else{j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Je,tt,Ne[be]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,Je,tt,Ne[be]);for(let We=0;We<Pe.length;We++){const ze=Pe[We];j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,Je,tt,ze.image[be]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,ct,Je,tt,ze.image[be])}}}y(T)&&U(a.TEXTURE_CUBE_MAP),Re.__version=me.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function qe(B,T,te,ie,me,Re){const Le=c.convert(te.format,te.colorSpace),pe=c.convert(te.type),xe=C(te.internalFormat,Le,pe,te.normalized,te.colorSpace),we=r.get(T),Ye=r.get(te);if(Ye.__renderTarget=T,!we.__hasExternalTextures){const Ne=Math.max(1,T.width>>Re),Oe=Math.max(1,T.height>>Re);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?n.texImage3D(me,Re,xe,Ne,Oe,T.depth,0,Le,pe,null):n.texImage2D(me,Re,xe,Ne,Oe,0,Le,pe,null)}n.bindFramebuffer(a.FRAMEBUFFER,B),mt(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ie,me,Ye.__webglTexture,0,lt(T)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ie,me,Ye.__webglTexture,Re),n.bindFramebuffer(a.FRAMEBUFFER,null)}function bt(B,T,te){if(a.bindRenderbuffer(a.RENDERBUFFER,B),T.depthBuffer){const ie=T.depthTexture,me=ie&&ie.isDepthTexture?ie.type:null,Re=R(T.stencilBuffer,me),Le=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;mt(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,lt(T),Re,T.width,T.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,lt(T),Re,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Re,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Le,a.RENDERBUFFER,B)}else{const ie=T.textures;for(let me=0;me<ie.length;me++){const Re=ie[me],Le=c.convert(Re.format,Re.colorSpace),pe=c.convert(Re.type),xe=C(Re.internalFormat,Le,pe,Re.normalized,Re.colorSpace);mt(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,lt(T),xe,T.width,T.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,lt(T),xe,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,xe,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function nt(B,T,te){const ie=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(T.depthTexture);if(me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ie){if(me.__webglInit===void 0&&(me.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),me.__webglTexture===void 0){me.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),Ae(a.TEXTURE_CUBE_MAP,T.depthTexture);const we=c.convert(T.depthTexture.format),Ye=c.convert(T.depthTexture.type);let Ne;T.depthTexture.format===Ya?Ne=a.DEPTH_COMPONENT24:T.depthTexture.format===rs&&(Ne=a.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ne,T.width,T.height,0,we,Ye,null)}}else J(T.depthTexture,0);const Re=me.__webglTexture,Le=lt(T),pe=ie?a.TEXTURE_CUBE_MAP_POSITIVE_X+te:a.TEXTURE_2D,xe=T.depthTexture.format===rs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ya)mt(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,xe,pe,Re,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,xe,pe,Re,0);else if(T.depthTexture.format===rs)mt(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,xe,pe,Re,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,xe,pe,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(B){const T=r.get(B),te=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const ie=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",me)};ie.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=ie}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(te)for(let ie=0;ie<6;ie++)nt(T.__webglFramebuffer[ie],B,ie);else{const ie=B.texture.mipmaps;ie&&ie.length>0?nt(T.__webglFramebuffer[0],B,0):nt(T.__webglFramebuffer,B,0)}else if(te){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=a.createRenderbuffer(),bt(T.__webglDepthbuffer[ie],B,!1);else{const me=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=T.__webglDepthbuffer[ie];a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,Re)}}else{const ie=B.texture.mipmaps;if(ie&&ie.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),bt(T.__webglDepthbuffer,B,!1);else{const me=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,Re)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function xt(B,T,te){const ie=r.get(B);T!==void 0&&qe(ie.__webglFramebuffer,B,B.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&gt(B)}function rt(B){const T=B.texture,te=r.get(B),ie=r.get(T);B.addEventListener("dispose",b);const me=B.textures,Re=B.isWebGLCubeRenderTarget===!0,Le=me.length>1;if(Le||(ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture()),ie.__version=T.version,u.memory.textures++),Re){te.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[pe]=[];for(let xe=0;xe<T.mipmaps.length;xe++)te.__webglFramebuffer[pe][xe]=a.createFramebuffer()}else te.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)te.__webglFramebuffer[pe]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Le)for(let pe=0,xe=me.length;pe<xe;pe++){const we=r.get(me[pe]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),u.memory.textures++)}if(B.samples>0&&mt(B)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let pe=0;pe<me.length;pe++){const xe=me[pe];te.__webglColorRenderbuffer[pe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[pe]);const we=c.convert(xe.format,xe.colorSpace),Ye=c.convert(xe.type),Ne=C(xe.internalFormat,we,Ye,xe.normalized,xe.colorSpace,B.isXRRenderTarget===!0),Oe=lt(B);a.renderbufferStorageMultisample(a.RENDERBUFFER,Oe,Ne,B.width,B.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,te.__webglColorRenderbuffer[pe])}a.bindRenderbuffer(a.RENDERBUFFER,null),B.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),bt(te.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Re){n.bindTexture(a.TEXTURE_CUBE_MAP,ie.__webglTexture),Ae(a.TEXTURE_CUBE_MAP,T);for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)qe(te.__webglFramebuffer[pe][xe],B,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else qe(te.__webglFramebuffer[pe],B,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(T)&&U(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let pe=0,xe=me.length;pe<xe;pe++){const we=me[pe],Ye=r.get(we);let Ne=a.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ne=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ne,Ye.__webglTexture),Ae(Ne,we),qe(te.__webglFramebuffer,B,we,a.COLOR_ATTACHMENT0+pe,Ne,0),y(we)&&U(Ne)}n.unbindTexture()}else{let pe=a.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(pe=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(pe,ie.__webglTexture),Ae(pe,T),T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)qe(te.__webglFramebuffer[xe],B,T,a.COLOR_ATTACHMENT0,pe,xe);else qe(te.__webglFramebuffer,B,T,a.COLOR_ATTACHMENT0,pe,0);y(T)&&U(pe),n.unbindTexture()}B.depthBuffer&&gt(B)}function Et(B){const T=B.textures;for(let te=0,ie=T.length;te<ie;te++){const me=T[te];if(y(me)){const Re=P(B),Le=r.get(me).__webglTexture;n.bindTexture(Re,Le),U(Re),n.unbindTexture()}}}const Gt=[],Vt=[];function kt(B){if(B.samples>0){if(mt(B)===!1){const T=B.textures,te=B.width,ie=B.height;let me=a.COLOR_BUFFER_BIT;const Re=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=r.get(B),pe=T.length>1;if(pe)for(let we=0;we<T.length;we++)n.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const xe=B.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let we=0;we<T.length;we++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),pe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Ye=r.get(T[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ye,0)}a.blitFramebuffer(0,0,te,ie,0,0,te,ie,me,a.NEAREST),p===!0&&(Gt.length=0,Vt.length=0,Gt.push(a.COLOR_ATTACHMENT0+we),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Gt.push(Re),Vt.push(Re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Vt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Gt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<T.length;we++){n.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Ye=r.get(T[we]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,Ye,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const T=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function lt(B){return Math.min(o.maxSamples,B.samples)}function mt(B){const T=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function q(B){const T=u.render.frame;g.get(B)!==T&&(g.set(B,T),B.update())}function Zt(B,T){const te=B.colorSpace,ie=B.format,me=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||te!==cf&&te!==Cr&&(Ut.getTransfer(te)===jt?(ie!==Ki||me!==Fi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",te)),T}function ft(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(d.width=B.naturalWidth||B.width,d.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(d.width=B.displayWidth,d.height=B.displayHeight):(d.width=B.width,d.height=B.height),d}this.allocateTextureUnit=I,this.resetTextureUnits=Y,this.getTextureUnits=$,this.setTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=fe,this.setTexture3D=F,this.setTextureCube=K,this.rebindTextures=xt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bO(a,e){function n(r,o=Cr){let c;const u=Ut.getTransfer(o);if(r===Fi)return a.UNSIGNED_BYTE;if(r===y0)return a.UNSIGNED_SHORT_4_4_4_4;if(r===S0)return a.UNSIGNED_SHORT_5_5_5_1;if(r===XM)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===WM)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===VM)return a.BYTE;if(r===kM)return a.SHORT;if(r===Zl)return a.UNSIGNED_SHORT;if(r===x0)return a.INT;if(r===ga)return a.UNSIGNED_INT;if(r===fa)return a.FLOAT;if(r===qa)return a.HALF_FLOAT;if(r===qM)return a.ALPHA;if(r===YM)return a.RGB;if(r===Ki)return a.RGBA;if(r===Ya)return a.DEPTH_COMPONENT;if(r===rs)return a.DEPTH_STENCIL;if(r===jM)return a.RED;if(r===M0)return a.RED_INTEGER;if(r===fs)return a.RG;if(r===b0)return a.RG_INTEGER;if(r===E0)return a.RGBA_INTEGER;if(r===ju||r===Zu||r===Ku||r===$u)if(u===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ju)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ju)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ku)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bm||r===Em||r===Tm||r===Am)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===bm)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Em)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tm)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Am)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cm||r===Rm||r===wm||r===Dm||r===Nm||r===of||r===Um)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Cm||r===Rm)return u===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Dm)return c.COMPRESSED_R11_EAC;if(r===Nm)return c.COMPRESSED_SIGNED_R11_EAC;if(r===of)return c.COMPRESSED_RG11_EAC;if(r===Um)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Lm||r===Om||r===Pm||r===Im||r===Fm||r===Bm||r===zm||r===Hm||r===Gm||r===Vm||r===km||r===Xm||r===Wm||r===qm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Lm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Om)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Im)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===km)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ym||r===jm||r===Zm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ym)return u===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Km||r===$m||r===lf||r===Qm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Km)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$m)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Kl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const EO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new ab(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Hi({vertexShader:EO,fragmentShader:TO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ea(new Cf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CO extends hs{constructor(e,n){super();const r=this;let o=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,_=null,v=null,S=null,M=null;const A=typeof XRWebGLBinding<"u",x=new AO,y={},U=n.getContextAttributes();let P=null,C=null;const R=[],N=[],O=new zt;let b=null;const L=new Ii;L.viewport=new gn;const G=new Ii;G.viewport=new gn;const z=[L,G],V=new Iw;let Y=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Te=R[ee];return Te===void 0&&(Te=new ap,R[ee]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(ee){let Te=R[ee];return Te===void 0&&(Te=new ap,R[ee]=Te),Te.getGripSpace()},this.getHand=function(ee){let Te=R[ee];return Te===void 0&&(Te=new ap,R[ee]=Te),Te.getHandSpace()};function k(ee){const Te=N.indexOf(ee.inputSource);if(Te===-1)return;const ve=R[Te];ve!==void 0&&(ve.update(ee.inputSource,ee.frame,d||u),ve.dispatchEvent({type:ee.type,data:ee.inputSource}))}function I(){o.removeEventListener("select",k),o.removeEventListener("selectstart",k),o.removeEventListener("selectend",k),o.removeEventListener("squeeze",k),o.removeEventListener("squeezestart",k),o.removeEventListener("squeezeend",k),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",H);for(let ee=0;ee<R.length;ee++){const Te=N[ee];Te!==null&&(N[ee]=null,R[ee].disconnect(Te))}Y=null,$=null,x.reset();for(const ee in y)delete y[ee];e.setRenderTarget(P),S=null,v=null,_=null,o=null,C=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ee){d=ee},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",k),o.addEventListener("selectstart",k),o.addEventListener("selectend",k),o.addEventListener("squeeze",k),o.addEventListener("squeezestart",k),o.addEventListener("squeezeend",k),o.addEventListener("end",I),o.addEventListener("inputsourceschange",H),U.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ke=null,$e=null;U.depth&&($e=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=U.stencil?rs:Ya,ke=U.stencil?Kl:ga);const qe={colorFormat:n.RGBA8,depthFormat:$e,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(qe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new pa(v.textureWidth,v.textureHeight,{format:Ki,type:Fi,depthTexture:new Mo(v.textureWidth,v.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ve={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,ve),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new pa(S.framebufferWidth,S.framebufferHeight,{format:Ki,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(h),Ae.setContext(o),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(ee){for(let Te=0;Te<ee.removed.length;Te++){const ve=ee.removed[Te],ke=N.indexOf(ve);ke>=0&&(N[ke]=null,R[ke].disconnect(ve))}for(let Te=0;Te<ee.added.length;Te++){const ve=ee.added[Te];let ke=N.indexOf(ve);if(ke===-1){for(let qe=0;qe<R.length;qe++)if(qe>=N.length){N.push(ve),ke=qe;break}else if(N[qe]===null){N[qe]=ve,ke=qe;break}if(ke===-1)break}const $e=R[ke];$e&&$e.connect(ve)}}const J=new ce,fe=new ce;function F(ee,Te,ve){J.setFromMatrixPosition(Te.matrixWorld),fe.setFromMatrixPosition(ve.matrixWorld);const ke=J.distanceTo(fe),$e=Te.projectionMatrix.elements,qe=ve.projectionMatrix.elements,bt=$e[14]/($e[10]-1),nt=$e[14]/($e[10]+1),gt=($e[9]+1)/$e[5],xt=($e[9]-1)/$e[5],rt=($e[8]-1)/$e[0],Et=(qe[8]+1)/qe[0],Gt=bt*rt,Vt=bt*Et,kt=ke/(-rt+Et),lt=kt*-rt;if(Te.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(lt),ee.translateZ(kt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),$e[10]===-1)ee.projectionMatrix.copy(Te.projectionMatrix),ee.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const mt=bt+kt,q=nt+kt,Zt=Gt-lt,ft=Vt+(ke-lt),B=gt*nt/q*mt,T=xt*nt/q*mt;ee.projectionMatrix.makePerspective(Zt,ft,B,T,mt,q),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function K(ee,Te){Te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let Te=ee.near,ve=ee.far;x.texture!==null&&(x.depthNear>0&&(Te=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),V.near=G.near=L.near=Te,V.far=G.far=L.far=ve,(Y!==V.near||$!==V.far)&&(o.updateRenderState({depthNear:V.near,depthFar:V.far}),Y=V.near,$=V.far),V.layers.mask=ee.layers.mask|6,L.layers.mask=V.layers.mask&-5,G.layers.mask=V.layers.mask&-3;const ke=ee.parent,$e=V.cameras;K(V,ke);for(let qe=0;qe<$e.length;qe++)K($e[qe],ke);$e.length===2?F(V,L,G):V.projectionMatrix.copy(L.projectionMatrix),se(ee,V,ke)};function se(ee,Te,ve){ve===null?ee.matrix.copy(Te.matrixWorld):(ee.matrix.copy(ve.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Te.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Te.projectionMatrix),ee.projectionMatrixInverse.copy(Te.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=$l*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(ee){p=ee,v!==null&&(v.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(V)},this.getCameraTexture=function(ee){return y[ee]};let _e=null;function Ce(ee,Te){if(g=Te.getViewerPose(d||u),M=Te,g!==null){const ve=g.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let ke=!1;ve.length!==V.cameras.length&&(V.cameras.length=0,ke=!0);for(let nt=0;nt<ve.length;nt++){const gt=ve[nt];let xt=null;if(S!==null)xt=S.getViewport(gt);else{const Et=_.getViewSubImage(v,gt);xt=Et.viewport,nt===0&&(e.setRenderTargetTextures(C,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(C))}let rt=z[nt];rt===void 0&&(rt=new Ii,rt.layers.enable(nt),rt.viewport=new gn,z[nt]=rt),rt.matrix.fromArray(gt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(gt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(xt.x,xt.y,xt.width,xt.height),nt===0&&(V.matrix.copy(rt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ke===!0&&V.cameras.push(rt)}const $e=o.enabledFeatures;if($e&&$e.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const nt=_.getDepthInformation(ve[0]);nt&&nt.isValid&&nt.texture&&x.init(nt,o.renderState)}if($e&&$e.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let nt=0;nt<ve.length;nt++){const gt=ve[nt].camera;if(gt){let xt=y[gt];xt||(xt=new ab,y[gt]=xt);const rt=_.getCameraImage(gt);xt.sourceTexture=rt}}}}for(let ve=0;ve<R.length;ve++){const ke=N[ve],$e=R[ve];ke!==null&&$e!==void 0&&$e.update(ke,Te,d||u)}_e&&_e(ee,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),M=null}const Ae=new lb;Ae.setAnimationLoop(Ce),this.setAnimationLoop=function(ee){_e=ee},this.dispose=function(){}}}const RO=new Tn,mb=new pt;mb.set(-1,0,0,0,1,0,0,0,1);function wO(a,e){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,rb(a)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,U,P,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(x,y):y.isMeshLambertMaterial?(c(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(x,y),_(x,y)):y.isMeshPhongMaterial?(c(x,y),g(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,C)):y.isMeshMatcapMaterial?(c(x,y),M(x,y)):y.isMeshDepthMaterial?c(x,y):y.isMeshDistanceMaterial?(c(x,y),A(x,y)):y.isMeshNormalMaterial?c(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?p(x,y,U,P):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===ti&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===ti&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const U=e.get(y),P=U.envMap,C=U.envMapRotation;P&&(x.envMap.value=P,x.envMapRotation.value.setFromMatrix4(RO.makeRotationFromEuler(C)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(mb),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,U,P){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*U,x.scale.value=P*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,U){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function A(x,y){const U=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function DO(a,e,n,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,R){const N=R.program;r.uniformBlockBinding(C,N)}function d(C,R){let N=o[C.id];N===void 0&&(x(C),N=g(C),o[C.id]=N,C.addEventListener("dispose",U));const O=R.program;r.updateUBOMapping(C,O);const b=e.render.frame;c[C.id]!==b&&(v(C),c[C.id]=b)}function g(C){const R=_();C.__bindingPointIndex=R;const N=a.createBuffer(),O=C.__size,b=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,O,b),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,R,N),N}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const R=o[C.id],N=C.uniforms,O=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,R);for(let b=0,L=N.length;b<L;b++){const G=N[b];if(Array.isArray(G))for(let z=0,V=G.length;z<V;z++)S(G[z],b,z,O);else S(G,b,0,O)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(C,R,N,O){if(A(C,R,N,O)===!0){const b=C.__offset,L=C.value;if(Array.isArray(L)){let G=0;for(let z=0;z<L.length;z++){const V=L[z],Y=y(V);M(V,C.__data,G),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(L,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,b,C.__data)}}function M(C,R,N){typeof C=="number"||typeof C=="boolean"?R[0]=C:C.isMatrix3?(R[0]=C.elements[0],R[1]=C.elements[1],R[2]=C.elements[2],R[3]=0,R[4]=C.elements[3],R[5]=C.elements[4],R[6]=C.elements[5],R[7]=0,R[8]=C.elements[6],R[9]=C.elements[7],R[10]=C.elements[8],R[11]=0):ArrayBuffer.isView(C)?R.set(new C.constructor(C.buffer,C.byteOffset,R.length)):C.toArray(R,N)}function A(C,R,N,O){const b=C.value,L=R+"_"+N;if(O[L]===void 0)return typeof b=="number"||typeof b=="boolean"?O[L]=b:ArrayBuffer.isView(b)?O[L]=b.slice():O[L]=b.clone(),!0;{const G=O[L];if(typeof b=="number"||typeof b=="boolean"){if(G!==b)return O[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(G.equals(b)===!1)return G.copy(b),!0}}return!1}function x(C){const R=C.uniforms;let N=0;const O=16;for(let L=0,G=R.length;L<G;L++){const z=Array.isArray(R[L])?R[L]:[R[L]];for(let V=0,Y=z.length;V<Y;V++){const $=z[V],k=Array.isArray($.value)?$.value:[$.value];for(let I=0,H=k.length;I<H;I++){const J=k[I],fe=y(J),F=N%O,K=F%fe.boundary,se=F+K;N+=K,se!==0&&O-se<fe.storage&&(N+=O-se),$.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=fe.storage}}}const b=N%O;return b>0&&(N+=O-b),C.__size=N,C.__cache={},this}function y(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(R.boundary=16,R.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),R}function U(C){const R=C.target;R.removeEventListener("dispose",U);const N=u.indexOf(R.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[R.id]),delete o[R.id],delete c[R.id]}function P(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:p,update:d,dispose:P}}const NO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let la=null;function UO(){return la===null&&(la=new bw(NO,16,16,fs,qa),la.name="DFG_LUT",la.minFilter=jn,la.magFilter=jn,la.wrapS=Va,la.wrapT=Va,la.generateMipmaps=!1,la.needsUpdate=!0),la}class LO{constructor(e={}){const{canvas:n=B3(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Fi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=S,x=new Set([E0,b0,M0]),y=new Set([Fi,ga,Zl,Kl,y0,S0]),U=new Uint32Array(4),P=new Int32Array(4),C=new ce;let R=null,N=null;const O=[],b=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let z=!1,V=null,Y=null,$=null,k=null;this._outputColorSpace=Pi;let I=0,H=0,J=null,fe=-1,F=null;const K=new gn,se=new gn;let _e=null;const Ce=new Lt(0);let Ae=0,ee=n.width,Te=n.height,ve=1,ke=null,$e=null;const qe=new gn(0,0,ee,Te),bt=new gn(0,0,ee,Te);let nt=!1;const gt=new nb;let xt=!1,rt=!1;const Et=new Tn,Gt=new ce,Vt=new gn,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function mt(){return J===null?ve:1}let q=r;function Zt(w,Q){return n.getContext(w,Q)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_0}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",en,!1),q===null){const Q="webgl2";if(q=Zt(Q,w),q===null)throw Zt(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Pt("WebGLRenderer: "+w.message),w}let ft,B,T,te,ie,me,Re,Le,pe,xe,we,Ye,Ne,Oe,Je,tt,ct,j,Ue,ye,De,Pe,be;function We(){ft=new UU(q),ft.init(),De=new bO(q,ft),B=new EU(q,ft,e,De),T=new SO(q,ft),B.reversedDepthBuffer&&v&&T.buffers.depth.setReversed(!0),Y=q.createFramebuffer(),$=q.createFramebuffer(),k=q.createFramebuffer(),te=new PU(q),ie=new oO,me=new MO(q,ft,T,ie,B,De,te),Re=new NU(G),Le=new zw(q),Pe=new MU(q,Le),pe=new LU(q,Le,te,Pe),xe=new FU(q,pe,Le,Pe,te),j=new IU(q,B,me),Je=new TU(ie),we=new sO(G,Re,ft,B,Pe,Je),Ye=new wO(G,ie),Ne=new cO,Oe=new mO(ft),ct=new SU(G,Re,T,xe,M,p),tt=new yO(G,xe,B),be=new DO(q,te,B,T),Ue=new bU(q,ft,te),ye=new OU(q,ft,te),te.programs=we.programs,G.capabilities=B,G.extensions=ft,G.properties=ie,G.renderLists=Ne,G.shadowMap=tt,G.state=T,G.info=te}We(),A!==Fi&&(L=new zU(A,n.width,n.height,h,o,c));const ze=new CO(G,q);this.xr=ze,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(ee,Te,!1))},this.getSize=function(w){return w.set(ee,Te)},this.setSize=function(w,Q,de=!0){if(ze.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,Te=Q,n.width=Math.floor(w*ve),n.height=Math.floor(Q*ve),de===!0&&(n.style.width=w+"px",n.style.height=Q+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(ee*ve,Te*ve).floor()},this.setDrawingBufferSize=function(w,Q,de){ee=w,Te=Q,ve=de,n.width=Math.floor(w*de),n.height=Math.floor(Q*de),this.setViewport(0,0,w,Q)},this.setEffects=function(w){if(A===Fi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Q=0;Q<w.length;Q++)if(w[Q].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(K)},this.getViewport=function(w){return w.copy(qe)},this.setViewport=function(w,Q,de,le){w.isVector4?qe.set(w.x,w.y,w.z,w.w):qe.set(w,Q,de,le),T.viewport(K.copy(qe).multiplyScalar(ve).round())},this.getScissor=function(w){return w.copy(bt)},this.setScissor=function(w,Q,de,le){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,Q,de,le),T.scissor(se.copy(bt).multiplyScalar(ve).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){T.setScissorTest(nt=w)},this.setOpaqueSort=function(w){ke=w},this.setTransparentSort=function(w){$e=w},this.getClearColor=function(w){return w.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,de=!0){let le=0;if(w){let re=!1;if(J!==null){const Ie=J.texture.format;re=x.has(Ie)}if(re){const Ie=J.texture.type,He=y.has(Ie),Fe=ct.getClearColor(),Ze=ct.getClearAlpha(),Ge=Fe.r,ht=Fe.g,vt=Fe.b;He?(U[0]=Ge,U[1]=ht,U[2]=vt,U[3]=Ze,q.clearBufferuiv(q.COLOR,0,U)):(P[0]=Ge,P[1]=ht,P[2]=vt,P[3]=Ze,q.clearBufferiv(q.COLOR,0,P))}else le|=q.COLOR_BUFFER_BIT}Q&&(le|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&q.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),V=w},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",en,!1),ct.dispose(),Ne.dispose(),Oe.dispose(),ie.dispose(),Re.dispose(),xe.dispose(),Pe.dispose(),be.dispose(),we.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",In),ze.removeEventListener("sessionend",ai),Vn.stop()};function At(w){w.preventDefault(),My("WebGLRenderer: Context Lost."),z=!0}function dt(){My("WebGLRenderer: Context Restored."),z=!1;const w=te.autoReset,Q=tt.enabled,de=tt.autoUpdate,le=tt.needsUpdate,re=tt.type;We(),te.autoReset=w,tt.enabled=Q,tt.autoUpdate=de,tt.needsUpdate=le,tt.type=re}function en(w){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const Q=w.target;Q.removeEventListener("dispose",Nt),Ka(Q)}function Ka(w){Do(w),ie.remove(w)}function Do(w){const Q=ie.get(w).programs;Q!==void 0&&(Q.forEach(function(de){we.releaseProgram(de)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,de,le,re,Ie){Q===null&&(Q=kt);const He=re.isMesh&&re.matrixWorld.determinantAffine()<0,Fe=rc(w,Q,de,le,re);T.setMaterial(le,He);let Ze=de.index,Ge=1;if(le.wireframe===!0){if(Ze=pe.getWireframeAttribute(de),Ze===void 0)return;Ge=2}const ht=de.drawRange,vt=de.attributes.position;let Qe=ht.start*Ge,Ft=(ht.start+ht.count)*Ge;Ie!==null&&(Qe=Math.max(Qe,Ie.start*Ge),Ft=Math.min(Ft,(Ie.start+Ie.count)*Ge)),Ze!==null?(Qe=Math.max(Qe,0),Ft=Math.min(Ft,Ze.count)):vt!=null&&(Qe=Math.max(Qe,0),Ft=Math.min(Ft,vt.count));const nn=Ft-Qe;if(nn<0||nn===1/0)return;Pe.setup(re,le,Fe,de,Ze);let ln,yt=Ue;if(Ze!==null&&(ln=Le.get(Ze),yt=ye,yt.setIndex(ln)),re.isMesh)le.wireframe===!0?(T.setLineWidth(le.wireframeLinewidth*mt()),yt.setMode(q.LINES)):yt.setMode(q.TRIANGLES);else if(re.isLine){let yn=le.linewidth;yn===void 0&&(yn=1),T.setLineWidth(yn*mt()),re.isLineSegments?yt.setMode(q.LINES):re.isLineLoop?yt.setMode(q.LINE_LOOP):yt.setMode(q.LINE_STRIP)}else re.isPoints?yt.setMode(q.POINTS):re.isSprite&&yt.setMode(q.TRIANGLES);if(re.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))yt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const yn=re._multiDrawStarts,Ve=re._multiDrawCounts,Fn=re._multiDrawCount,St=Ze?Le.get(Ze).bytesPerElement:1,Kn=ie.get(le).currentProgram.getUniforms();for(let fi=0;fi<Fn;fi++)Kn.setValue(q,"_gl_DrawID",fi),yt.render(yn[fi]/St,Ve[fi])}else if(re.isInstancedMesh)yt.renderInstances(Qe,nn,re.count);else if(de.isInstancedBufferGeometry){const yn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ve=Math.min(de.instanceCount,yn);yt.renderInstances(Qe,nn,Ve)}else yt.render(Qe,nn)};function rn(w,Q,de){w.transparent===!0&&w.side===Ga&&w.forceSinglePass===!1?(w.side=ti,w.needsUpdate=!0,hn(w,Q,de),w.side=Nr,w.needsUpdate=!0,hn(w,Q,de),w.side=Ga):hn(w,Q,de)}this.compile=function(w,Q,de=null){de===null&&(de=w),N=Oe.get(de),N.init(Q),b.push(N),de.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),w!==de&&w.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),N.setupLights();const le=new Set;return w.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){const Fe=Ie[He];rn(Fe,de,re),le.add(Fe)}else rn(Ie,de,re),le.add(Ie)}),N=b.pop(),le},this.compileAsync=function(w,Q,de=null){const le=this.compile(w,Q,de);return new Promise(re=>{function Ie(){if(le.forEach(function(He){ie.get(He).currentProgram.isReady()&&le.delete(He)}),le.size===0){re(w);return}setTimeout(Ie,10)}ft.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let sn=null;function Dn(w){sn&&sn(w)}function In(){Vn.stop()}function ai(){Vn.start()}const Vn=new lb;Vn.setAnimationLoop(Dn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(w){sn=w,ze.setAnimationLoop(w),w===null?Vn.stop():Vn.start()},ze.addEventListener("sessionstart",In),ze.addEventListener("sessionend",ai),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;V!==null&&V.renderStart(w,Q);const de=ze.enabled===!0&&ze.isPresenting===!0,le=L!==null&&(J===null||de)&&L.begin(G,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(Q),Q=ze.getCamera()),w.isScene===!0&&w.onBeforeRender(G,w,Q,J),N=Oe.get(w,b.length),N.init(Q),N.state.textureUnits=me.getTextureUnits(),b.push(N),Et.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),gt.setFromProjectionMatrix(Et,da,Q.reversedDepth),rt=this.localClippingEnabled,xt=Je.init(this.clippingPlanes,rt),R=Ne.get(w,O.length),R.init(),O.push(R),ze.enabled===!0&&ze.isPresenting===!0){const He=G.xr.getDepthSensingMesh();He!==null&&bi(He,Q,-1/0,G.sortObjects)}bi(w,Q,0,G.sortObjects),R.finish(),G.sortObjects===!0&&R.sort(ke,$e,Q.reversedDepth),lt=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,lt&&ct.addToRenderList(R,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Je.beginShadows();const re=N.state.shadowsArray;if(tt.render(re,w,Q),xt===!0&&Je.endShadows(),(le&&L.hasRenderPass())===!1){const He=R.opaque,Fe=R.transmissive;if(N.setupLights(),Q.isArrayCamera){const Ze=Q.cameras;if(Fe.length>0)for(let Ge=0,ht=Ze.length;Ge<ht;Ge++){const vt=Ze[Ge];on(He,Fe,w,vt)}lt&&ct.render(w);for(let Ge=0,ht=Ze.length;Ge<ht;Ge++){const vt=Ze[Ge];ui(R,w,vt,vt.viewport)}}else Fe.length>0&&on(He,Fe,w,Q),lt&&ct.render(w),ui(R,w,Q)}J!==null&&H===0&&(me.updateMultisampleRenderTarget(J),me.updateRenderTargetMipmap(J)),le&&L.end(G),w.isScene===!0&&w.onAfterRender(G,w,Q),Pe.resetDefaultState(),fe=-1,F=null,b.pop(),b.length>0?(N=b[b.length-1],me.setTextureUnits(N.state.textureUnits),xt===!0&&Je.setGlobalState(G.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?R=O[O.length-1]:R=null,V!==null&&V.renderEnd()};function bi(w,Q,de,le){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)de=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLightProbeGrid)N.pushLightProbeGrid(w);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||gt.intersectsSprite(w)){le&&Vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const He=xe.update(w),Fe=w.material;Fe.visible&&R.push(w,He,Fe,de,Vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||gt.intersectsObject(w))){const He=xe.update(w),Fe=w.material;if(le&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Vt.copy(w.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Vt.copy(He.boundingSphere.center)),Vt.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(Fe)){const Ze=He.groups;for(let Ge=0,ht=Ze.length;Ge<ht;Ge++){const vt=Ze[Ge],Qe=Fe[vt.materialIndex];Qe&&Qe.visible&&R.push(w,He,Qe,de,Vt.z,vt)}}else Fe.visible&&R.push(w,He,Fe,de,Vt.z,null)}}const Ie=w.children;for(let He=0,Fe=Ie.length;He<Fe;He++)bi(Ie[He],Q,de,le)}function ui(w,Q,de,le){const{opaque:re,transmissive:Ie,transparent:He}=w;N.setupLightsView(de),xt===!0&&Je.setGlobalState(G.clippingPlanes,de),le&&T.viewport(K.copy(le)),re.length>0&&ya(re,Q,de),Ie.length>0&&ya(Ie,Q,de),He.length>0&&ya(He,Q,de),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function on(w,Q,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[le.id]===void 0){const Qe=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[le.id]=new pa(1,1,{generateMipmaps:!0,type:Qe?qa:Fi,minFilter:as,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const Ie=N.state.transmissionRenderTarget[le.id],He=le.viewport||K;Ie.setSize(He.z*G.transmissionResolutionScale,He.w*G.transmissionResolutionScale);const Fe=G.getRenderTarget(),Ze=G.getActiveCubeFace(),Ge=G.getActiveMipmapLevel();G.setRenderTarget(Ie),G.getClearColor(Ce),Ae=G.getClearAlpha(),Ae<1&&G.setClearColor(16777215,.5),G.clear(),lt&&ct.render(de);const ht=G.toneMapping;G.toneMapping=ha;const vt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),N.setupLightsView(le),xt===!0&&Je.setGlobalState(G.clippingPlanes,le),ya(w,de,le),me.updateMultisampleRenderTarget(Ie),me.updateRenderTargetMipmap(Ie),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ft=0,nn=Q.length;Ft<nn;Ft++){const ln=Q[Ft],{object:yt,geometry:yn,material:Ve,group:Fn}=ln;if(Ve.side===Ga&&yt.layers.test(le.layers)){const St=Ve.side;Ve.side=ti,Ve.needsUpdate=!0,Ur(yt,de,le,yn,Ve,Fn),Ve.side=St,Ve.needsUpdate=!0,Qe=!0}}Qe===!0&&(me.updateMultisampleRenderTarget(Ie),me.updateRenderTargetMipmap(Ie))}G.setRenderTarget(Fe,Ze,Ge),G.setClearColor(Ce,Ae),vt!==void 0&&(le.viewport=vt),G.toneMapping=ht}function ya(w,Q,de){const le=Q.isScene===!0?Q.overrideMaterial:null;for(let re=0,Ie=w.length;re<Ie;re++){const He=w[re],{object:Fe,geometry:Ze,group:Ge}=He;let ht=He.material;ht.allowOverride===!0&&le!==null&&(ht=le),Fe.layers.test(de.layers)&&Ur(Fe,Q,de,Ze,ht,Ge)}}function Ur(w,Q,de,le,re,Ie){w.onBeforeRender(G,Q,de,le,re,Ie),w.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),re.onBeforeRender(G,Q,de,le,w,Ie),re.transparent===!0&&re.side===Ga&&re.forceSinglePass===!1?(re.side=ti,re.needsUpdate=!0,G.renderBufferDirect(de,Q,le,re,w,Ie),re.side=Nr,re.needsUpdate=!0,G.renderBufferDirect(de,Q,le,re,w,Ie),re.side=Ga):G.renderBufferDirect(de,Q,le,re,w,Ie),w.onAfterRender(G,Q,de,le,re,Ie)}function hn(w,Q,de){Q.isScene!==!0&&(Q=kt);const le=ie.get(w),re=N.state.lights,Ie=N.state.shadowsArray,He=re.state.version,Fe=we.getParameters(w,re.state,Ie,Q,de,N.state.lightProbeGridArray),Ze=we.getProgramCacheKey(Fe);let Ge=le.programs;le.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Q.environment:null,le.fog=Q.fog;const ht=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;le.envMap=Re.get(w.envMap||le.environment,ht),le.envMapRotation=le.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",Nt),Ge=new Map,le.programs=Ge);let vt=Ge.get(Ze);if(vt!==void 0){if(le.currentProgram===vt&&le.lightsStateVersion===He)return ic(w,Fe),vt}else Fe.uniforms=we.getUniforms(w),V!==null&&w.isNodeMaterial&&V.build(w,de,Fe),w.onBeforeCompile(Fe,G),vt=we.acquireProgram(Fe,Ze),Ge.set(Ze,vt),le.uniforms=Fe.uniforms;const Qe=le.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=Je.uniform),ic(w,Fe),le.needsLights=ps(w),le.lightsStateVersion=He,le.needsLights&&(Qe.ambientLightColor.value=re.state.ambient,Qe.lightProbe.value=re.state.probe,Qe.directionalLights.value=re.state.directional,Qe.directionalLightShadows.value=re.state.directionalShadow,Qe.spotLights.value=re.state.spot,Qe.spotLightShadows.value=re.state.spotShadow,Qe.rectAreaLights.value=re.state.rectArea,Qe.ltc_1.value=re.state.rectAreaLTC1,Qe.ltc_2.value=re.state.rectAreaLTC2,Qe.pointLights.value=re.state.point,Qe.pointLightShadows.value=re.state.pointShadow,Qe.hemisphereLights.value=re.state.hemi,Qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Qe.spotLightMatrix.value=re.state.spotLightMatrix,Qe.spotLightMap.value=re.state.spotLightMap,Qe.pointShadowMatrix.value=re.state.pointShadowMatrix),le.lightProbeGrid=N.state.lightProbeGridArray.length>0,le.currentProgram=vt,le.uniformsList=null,vt}function Sa(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=Qu.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function ic(w,Q){const de=ie.get(w);de.outputColorSpace=Q.outputColorSpace,de.batching=Q.batching,de.batchingColor=Q.batchingColor,de.instancing=Q.instancing,de.instancingColor=Q.instancingColor,de.instancingMorph=Q.instancingMorph,de.skinning=Q.skinning,de.morphTargets=Q.morphTargets,de.morphNormals=Q.morphNormals,de.morphColors=Q.morphColors,de.morphTargetsCount=Q.morphTargetsCount,de.numClippingPlanes=Q.numClippingPlanes,de.numIntersection=Q.numClipIntersection,de.vertexAlphas=Q.vertexAlphas,de.vertexTangents=Q.vertexTangents,de.toneMapping=Q.toneMapping}function ac(w,Q){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;C.setFromMatrixPosition(Q.matrixWorld);for(let de=0,le=w.length;de<le;de++){const re=w[de];if(re.texture!==null&&re.boundingBox.containsPoint(C))return re}return null}function rc(w,Q,de,le,re){Q.isScene!==!0&&(Q=kt),me.resetTextureUnits();const Ie=Q.fog,He=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Q.environment:null,Fe=J===null?G.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ut.workingColorSpace,Ze=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,Ge=Re.get(le.envMap||He,Ze),ht=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,vt=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Qe=!!de.morphAttributes.position,Ft=!!de.morphAttributes.normal,nn=!!de.morphAttributes.color;let ln=ha;le.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ln=G.toneMapping);const yt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,yn=yt!==void 0?yt.length:0,Ve=ie.get(le),Fn=N.state.lights;if(xt===!0&&(rt===!0||w!==F)){const Kt=w===F&&le.id===fe;Je.setState(le,w,Kt)}let St=!1;le.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Fn.state.version||Ve.outputColorSpace!==Fe||re.isBatchedMesh&&Ve.batching===!1||!re.isBatchedMesh&&Ve.batching===!0||re.isBatchedMesh&&Ve.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ve.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ve.instancing===!1||!re.isInstancedMesh&&Ve.instancing===!0||re.isSkinnedMesh&&Ve.skinning===!1||!re.isSkinnedMesh&&Ve.skinning===!0||re.isInstancedMesh&&Ve.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ve.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ve.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ve.instancingMorph===!1&&re.morphTexture!==null||Ve.envMap!==Ge||le.fog===!0&&Ve.fog!==Ie||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Je.numPlanes||Ve.numIntersection!==Je.numIntersection)||Ve.vertexAlphas!==ht||Ve.vertexTangents!==vt||Ve.morphTargets!==Qe||Ve.morphNormals!==Ft||Ve.morphColors!==nn||Ve.toneMapping!==ln||Ve.morphTargetsCount!==yn||!!Ve.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ve.__version=le.version);let Kn=Ve.currentProgram;St===!0&&(Kn=hn(le,Q,re),V&&le.isNodeMaterial&&V.onUpdateProgram(le,Kn,Ve));let fi=!1,$n=!1,$a=!1;const Xt=Kn.getUniforms(),cn=Ve.uniforms;if(T.useProgram(Kn.program)&&(fi=!0,$n=!0,$a=!0),le.id!==fe&&(fe=le.id,$n=!0),Ve.needsLights){const Kt=ac(N.state.lightProbeGridArray,re);Ve.lightProbeGrid!==Kt&&(Ve.lightProbeGrid=Kt,$n=!0)}if(fi||F!==w){T.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Xt.setValue(q,"projectionMatrix",w.projectionMatrix),Xt.setValue(q,"viewMatrix",w.matrixWorldInverse);const ta=Xt.map.cameraPosition;ta!==void 0&&ta.setValue(q,Gt.setFromMatrixPosition(w.matrixWorld)),B.logarithmicDepthBuffer&&Xt.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Xt.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,$n=!0,$a=!0)}if(Ve.needsLights&&(Fn.state.directionalShadowMap.length>0&&Xt.setValue(q,"directionalShadowMap",Fn.state.directionalShadowMap,me),Fn.state.spotShadowMap.length>0&&Xt.setValue(q,"spotShadowMap",Fn.state.spotShadowMap,me),Fn.state.pointShadowMap.length>0&&Xt.setValue(q,"pointShadowMap",Fn.state.pointShadowMap,me)),re.isSkinnedMesh){Xt.setOptional(q,re,"bindMatrix"),Xt.setOptional(q,re,"bindMatrixInverse");const Kt=re.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Xt.setValue(q,"boneTexture",Kt.boneTexture,me))}re.isBatchedMesh&&(Xt.setOptional(q,re,"batchingTexture"),Xt.setValue(q,"batchingTexture",re._matricesTexture,me),Xt.setOptional(q,re,"batchingIdTexture"),Xt.setValue(q,"batchingIdTexture",re._indirectTexture,me),Xt.setOptional(q,re,"batchingColorTexture"),re._colorsTexture!==null&&Xt.setValue(q,"batchingColorTexture",re._colorsTexture,me));const Ei=de.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&j.update(re,de,Kn),($n||Ve.receiveShadow!==re.receiveShadow)&&(Ve.receiveShadow=re.receiveShadow,Xt.setValue(q,"receiveShadow",re.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Q.environment!==null&&(cn.envMapIntensity.value=Q.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=UO()),$n){if(Xt.setValue(q,"toneMappingExposure",G.toneMappingExposure),Ve.needsLights&&Df(cn,$a),Ie&&le.fog===!0&&Ye.refreshFogUniforms(cn,Ie),Ye.refreshMaterialUniforms(cn,le,ve,Te,N.state.transmissionRenderTarget[w.id]),Ve.needsLights&&Ve.lightProbeGrid){const Kt=Ve.lightProbeGrid;cn.probesSH.value=Kt.texture,cn.probesMin.value.copy(Kt.boundingBox.min),cn.probesMax.value.copy(Kt.boundingBox.max),cn.probesResolution.value.copy(Kt.resolution)}Qu.upload(q,Sa(Ve),cn,me)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Qu.upload(q,Sa(Ve),cn,me),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Xt.setValue(q,"center",re.center),Xt.setValue(q,"modelViewMatrix",re.modelViewMatrix),Xt.setValue(q,"normalMatrix",re.normalMatrix),Xt.setValue(q,"modelMatrix",re.matrixWorld),le.uniformsGroups!==void 0){const Kt=le.uniformsGroups;for(let ta=0,Gi=Kt.length;ta<Gi;ta++){const ms=Kt[ta];be.update(ms,Kn),be.bind(ms,Kn)}}return Kn}function Df(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function ps(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,Q,de){const le=ie.get(w);le.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),ie.get(w.texture).__webglTexture=Q,ie.get(w.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const de=ie.get(w);de.__webglFramebuffer=Q,de.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(w,Q=0,de=0){J=w,I=Q,H=de;let le=null,re=!1,Ie=!1;if(w){const Fe=ie.get(w);if(Fe.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(q.FRAMEBUFFER,Fe.__webglFramebuffer),K.copy(w.viewport),se.copy(w.scissor),_e=w.scissorTest,T.viewport(K),T.scissor(se),T.setScissorTest(_e),fe=-1;return}else if(Fe.__webglFramebuffer===void 0)me.setupRenderTarget(w);else if(Fe.__hasExternalTextures)me.rebindTextures(w,ie.get(w.texture).__webglTexture,ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ht=w.depthTexture;if(Fe.__boundDepthTexture!==ht){if(ht!==null&&ie.has(ht)&&(w.width!==ht.image.width||w.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(w)}}const Ze=w.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ie=!0);const Ge=ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[Q])?le=Ge[Q][de]:le=Ge[Q],re=!0):w.samples>0&&me.useMultisampledRTT(w)===!1?le=ie.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?le=Ge[de]:le=Ge,K.copy(w.viewport),se.copy(w.scissor),_e=w.scissorTest}else K.copy(qe).multiplyScalar(ve).floor(),se.copy(bt).multiplyScalar(ve).floor(),_e=nt;if(de!==0&&(le=Y),T.bindFramebuffer(q.FRAMEBUFFER,le)&&T.drawBuffers(w,le),T.viewport(K),T.scissor(se),T.setScissorTest(_e),re){const Fe=ie.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Fe.__webglTexture,de)}else if(Ie){const Fe=Q;for(let Ze=0;Ze<w.textures.length;Ze++){const Ge=ie.get(w.textures[Ze]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ze,Ge.__webglTexture,de,Fe)}}else if(w!==null&&de!==0){const Fe=ie.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Fe.__webglTexture,de)}fe=-1},this.readRenderTargetPixels=function(w,Q,de,le,re,Ie,He,Fe=0){if(!(w&&w.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze){T.bindFramebuffer(q.FRAMEBUFFER,Ze);try{const Ge=w.textures[Fe],ht=Ge.format,vt=Ge.type;if(w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe),!B.textureFormatReadable(ht)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(vt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-le&&de>=0&&de<=w.height-re&&q.readPixels(Q,de,le,re,De.convert(ht),De.convert(vt),Ie)}finally{const Ge=J!==null?ie.get(J).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,Q,de,le,re,Ie,He,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze)if(Q>=0&&Q<=w.width-le&&de>=0&&de<=w.height-re){T.bindFramebuffer(q.FRAMEBUFFER,Ze);const Ge=w.textures[Fe],ht=Ge.format,vt=Ge.type;if(w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe),!B.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Qe),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(Q,de,le,re,De.convert(ht),De.convert(vt),0);const Ft=J!==null?ie.get(J).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,Ft);const nn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await z3(q,nn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Qe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.deleteBuffer(Qe),q.deleteSync(nn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,de=0){const le=Math.pow(2,-de),re=Math.floor(w.image.width*le),Ie=Math.floor(w.image.height*le),He=Q!==null?Q.x:0,Fe=Q!==null?Q.y:0;me.setTexture2D(w,0),q.copyTexSubImage2D(q.TEXTURE_2D,de,0,0,He,Fe,re,Ie),T.unbindTexture()},this.copyTextureToTexture=function(w,Q,de=null,le=null,re=0,Ie=0){let He,Fe,Ze,Ge,ht,vt,Qe,Ft,nn;const ln=w.isCompressedTexture?w.mipmaps[Ie]:w.image;if(de!==null)He=de.max.x-de.min.x,Fe=de.max.y-de.min.y,Ze=de.isBox3?de.max.z-de.min.z:1,Ge=de.min.x,ht=de.min.y,vt=de.isBox3?de.min.z:0;else{const cn=Math.pow(2,-re);He=Math.floor(ln.width*cn),Fe=Math.floor(ln.height*cn),w.isDataArrayTexture?Ze=ln.depth:w.isData3DTexture?Ze=Math.floor(ln.depth*cn):Ze=1,Ge=0,ht=0,vt=0}le!==null?(Qe=le.x,Ft=le.y,nn=le.z):(Qe=0,Ft=0,nn=0);const yt=De.convert(Q.format),yn=De.convert(Q.type);let Ve;Q.isData3DTexture?(me.setTexture3D(Q,0),Ve=q.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(me.setTexture2DArray(Q,0),Ve=q.TEXTURE_2D_ARRAY):(me.setTexture2D(Q,0),Ve=q.TEXTURE_2D),T.activeTexture(q.TEXTURE0),T.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),T.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),T.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment);const Fn=T.getParameter(q.UNPACK_ROW_LENGTH),St=T.getParameter(q.UNPACK_IMAGE_HEIGHT),Kn=T.getParameter(q.UNPACK_SKIP_PIXELS),fi=T.getParameter(q.UNPACK_SKIP_ROWS),$n=T.getParameter(q.UNPACK_SKIP_IMAGES);T.pixelStorei(q.UNPACK_ROW_LENGTH,ln.width),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ln.height),T.pixelStorei(q.UNPACK_SKIP_PIXELS,Ge),T.pixelStorei(q.UNPACK_SKIP_ROWS,ht),T.pixelStorei(q.UNPACK_SKIP_IMAGES,vt);const $a=w.isDataArrayTexture||w.isData3DTexture,Xt=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const cn=ie.get(w),Ei=ie.get(Q),Kt=ie.get(cn.__renderTarget),ta=ie.get(Ei.__renderTarget);T.bindFramebuffer(q.READ_FRAMEBUFFER,Kt.__webglFramebuffer),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let Gi=0;Gi<Ze;Gi++)$a&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get(w).__webglTexture,re,vt+Gi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get(Q).__webglTexture,Ie,nn+Gi)),q.blitFramebuffer(Ge,ht,He,Fe,Qe,Ft,He,Fe,q.DEPTH_BUFFER_BIT,q.NEAREST);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(re!==0||w.isRenderTargetTexture||ie.has(w)){const cn=ie.get(w),Ei=ie.get(Q);T.bindFramebuffer(q.READ_FRAMEBUFFER,$),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,k);for(let Kt=0;Kt<Ze;Kt++)$a?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,cn.__webglTexture,re,vt+Kt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,cn.__webglTexture,re),Xt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ei.__webglTexture,Ie,nn+Kt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ei.__webglTexture,Ie),re!==0?q.blitFramebuffer(Ge,ht,He,Fe,Qe,Ft,He,Fe,q.COLOR_BUFFER_BIT,q.NEAREST):Xt?q.copyTexSubImage3D(Ve,Ie,Qe,Ft,nn+Kt,Ge,ht,He,Fe):q.copyTexSubImage2D(Ve,Ie,Qe,Ft,Ge,ht,He,Fe);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Xt?w.isDataTexture||w.isData3DTexture?q.texSubImage3D(Ve,Ie,Qe,Ft,nn,He,Fe,Ze,yt,yn,ln.data):Q.isCompressedArrayTexture?q.compressedTexSubImage3D(Ve,Ie,Qe,Ft,nn,He,Fe,Ze,yt,ln.data):q.texSubImage3D(Ve,Ie,Qe,Ft,nn,He,Fe,Ze,yt,yn,ln):w.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,Qe,Ft,He,Fe,yt,yn,ln.data):w.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,Qe,Ft,ln.width,ln.height,yt,ln.data):q.texSubImage2D(q.TEXTURE_2D,Ie,Qe,Ft,He,Fe,yt,yn,ln);T.pixelStorei(q.UNPACK_ROW_LENGTH,Fn),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,St),T.pixelStorei(q.UNPACK_SKIP_PIXELS,Kn),T.pixelStorei(q.UNPACK_SKIP_ROWS,fi),T.pixelStorei(q.UNPACK_SKIP_IMAGES,$n),Ie===0&&Q.generateMipmaps&&q.generateMipmap(Ve),T.unbindTexture()},this.initRenderTarget=function(w){ie.get(w).__webglFramebuffer===void 0&&me.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?me.setTextureCube(w,0):w.isData3DTexture?me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?me.setTexture2DArray(w,0):me.setTexture2D(w,0),T.unbindTexture()},this.resetState=function(){I=0,H=0,J=null,T.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ut._getUnpackColorSpace()}}const Ol={home:{x:.76,y:.46,scale:1.05,color:"#5eeacf"},about:{x:.12,y:.28,scale:.62,color:"#5eeacf"},skills:{x:.88,y:.62,scale:.8,color:"#f2a65a"},projects:{x:.5,y:.14,scale:.5,color:"#f2a65a"},contact:{x:.85,y:.7,scale:1.15,color:"#5eeacf"}},dS=`
  uniform float uTime;
  uniform float uWobble;
  varying vec3 vNormal;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;
    float n = sin(pos.x * 3.0 + uTime) * 0.06
            + sin(pos.y * 4.0 + uTime * 1.3) * 0.05
            + sin(pos.z * 3.5 + uTime * 0.7) * 0.05;
    pos += normal * n * uWobble;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,OO=`
  uniform vec3 uColor;
  varying vec3 vNormal;

  void main() {
    float fresnel = pow(1.0 - max(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0), 2.2);
    vec3 core = uColor * 0.35;
    vec3 rim = uColor * 1.6;
    vec3 color = mix(core, rim, fresnel);
    gl_FragColor = vec4(color, 0.92);
  }
`,PO=`
  uniform vec3 uColor;
  varying vec3 vNormal;

  void main() {
    float intensity = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.6);
    gl_FragColor = vec4(uColor, intensity * 0.55);
  }
`;function IO(){try{const a=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl")))}catch{return!1}}const FO=()=>{const a=W.useRef(null);return W.useEffect(()=>{const e=a.current;if(!e||!IO())return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=new LO({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(window.innerWidth,window.innerHeight),e.appendChild(r.domElement);const o=new gw,c=5,u=new Ii(50,window.innerWidth/window.innerHeight,.1,100);u.position.z=c;const h=new hf(1,96,96),p=new hf(1.18,96,96),d=new Lt(Ol.home.color),g=new Hi({vertexShader:dS,fragmentShader:OO,uniforms:{uTime:{value:0},uWobble:{value:n?0:1},uColor:{value:d.clone()}},transparent:!0}),_=new Hi({vertexShader:dS,fragmentShader:PO,uniforms:{uTime:{value:0},uWobble:{value:n?0:1},uColor:{value:d.clone()}},transparent:!0,side:ti,blending:fm,depthWrite:!1}),v=new ea(h,g),S=new ea(p,_),M=new Il;M.add(v),M.add(S),o.add(M);let A=[];const x=()=>{A=Object.keys(Ol).map(V=>{const Y=document.getElementById(V);if(!Y)return null;const $=Y.getBoundingClientRect();return{id:V,offsetTop:$.top+window.scrollY,waypoint:Ol[V]}}).filter(Boolean).sort((V,Y)=>V.offsetTop-Y.offsetTop)};x();const y=(z,V)=>{const Y=u.fov*Math.PI/180,$=2*Math.tan(Y/2)*c,k=$*u.aspect;return{x:(z-.5)*k,y:(.5-V)*$}},U=new Lt,P=new Lt,C=z=>{if(A.length===0)return Ol.home;if(z<=A[0].offsetTop)return A[0].waypoint;const V=A[A.length-1];if(z>=V.offsetTop)return V.waypoint;for(let Y=0;Y<A.length-1;Y++){const $=A[Y],k=A[Y+1];if(z>=$.offsetTop&&z<=k.offsetTop){const I=(z-$.offsetTop)/(k.offsetTop-$.offsetTop||1);return U.set($.waypoint.color),P.set(k.waypoint.color),{x:Cl.lerp($.waypoint.x,k.waypoint.x,I),y:Cl.lerp($.waypoint.y,k.waypoint.y,I),scale:Cl.lerp($.waypoint.scale,k.waypoint.scale,I),color:U.clone().lerp(P,I)}}}return Ol.home},R=new Fw;let N;const O=new ce(0,0,0),b=()=>{const z=R.getElapsedTime();g.uniforms.uTime.value=z,_.uniforms.uTime.value=z;const V=window.scrollY+window.innerHeight*.5,Y=C(V),$=y(Y.x,Y.y);O.x=Cl.lerp(O.x,$.x,.08),O.y=Cl.lerp(O.y,$.y,.08),M.position.set(O.x,O.y,0);const k=Y.scale||1;M.scale.lerp(new ce(k,k,k),.08);const I=Y.color instanceof Lt?Y.color:new Lt(Y.color);g.uniforms.uColor.value.lerp(I,.05),_.uniforms.uColor.value.lerp(I,.05),n||(M.rotation.y=z*.15,M.rotation.x=Math.sin(z*.2)*.1),r.render(o,u),N=requestAnimationFrame(b)};b();let L;const G=()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),clearTimeout(L),L=setTimeout(x,150)};return window.addEventListener("resize",G),window.addEventListener("load",x),()=>{cancelAnimationFrame(N),window.removeEventListener("resize",G),window.removeEventListener("load",x),clearTimeout(L),h.dispose(),p.dispose(),g.dispose(),_.dispose(),r.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),ge.jsx("div",{ref:a,className:"kx-orb-scene","aria-hidden":"true"})};function BO(){const[a,e]=W.useState({scrollY:0,progress:0});return W.useEffect(()=>{let n=!1;const r=()=>{const c=window.scrollY,u=document.documentElement.scrollHeight-window.innerHeight,h=u>0?Math.min(1,Math.max(0,c/u)):0;e({scrollY:c,progress:h}),n=!1},o=()=>{n||(window.requestAnimationFrame(r),n=!0)};return r(),window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",o)}},[]),a}const zO=()=>{const[a,e]=W.useState(!1),[n,r]=W.useState("home"),[o,c]=W.useState(""),[u,h]=W.useState(0),[p,d]=W.useState(!1),{progress:g}=BO(),_=["Full Stack Developer","UI/UX Designer","Problem Solver","Creative Coder"];W.useEffect(()=>{const S=_[u],M=p?50:100,A=p?500:2e3,x=setTimeout(()=>{!p&&o===S?setTimeout(()=>d(!0),A):p&&o===""?(d(!1),h(y=>(y+1)%_.length)):c(y=>p?y.slice(0,-1):S.slice(0,y.length+1))},M);return()=>clearTimeout(x)},[o,p,u]),W.useEffect(()=>{e(!0);const S=new IntersectionObserver(A=>{A.forEach(x=>{x.isIntersecting&&r(x.target.id)})},{threshold:.6}),M=document.querySelectorAll("section[id]");return M.forEach(A=>S.observe(A)),()=>{M.forEach(A=>S.unobserve(A))}},[]);const v=S=>{const M=document.getElementById(S);M&&M.scrollIntoView({behavior:"smooth"})};return ge.jsxs("div",{className:"kx-portfolio min-h-screen relative",children:[ge.jsx("div",{className:"kx-progress",style:{width:`${g*100}%`}}),ge.jsx(FO,{}),ge.jsxs("div",{className:"relative z-10",children:[ge.jsx(T1,{activeSection:n,scrollToSection:v}),ge.jsx(uT,{isVisible:a,typedText:o,scrollToSection:v,photoSrc:cT}),ge.jsx(fT,{}),ge.jsx(dT,{}),ge.jsx(mT,{}),ge.jsx(i3,{}),ge.jsx(a3,{})]})]})};function HO(){return ge.jsx(ge.Fragment,{children:ge.jsx(zO,{})})}E1.createRoot(document.getElementById("root")).render(ge.jsx(W.StrictMode,{children:ge.jsx(HO,{})}));
