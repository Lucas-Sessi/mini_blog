function JE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ZE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dy={exports:{}},Pl={},fy={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),e_=Symbol.for("react.portal"),t_=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),r_=Symbol.for("react.profiler"),i_=Symbol.for("react.provider"),s_=Symbol.for("react.context"),o_=Symbol.for("react.forward_ref"),a_=Symbol.for("react.suspense"),l_=Symbol.for("react.memo"),u_=Symbol.for("react.lazy"),Ep=Symbol.iterator;function c_(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var py={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},my=Object.assign,gy={};function Ri(t,e,n){this.props=t,this.context=e,this.refs=gy,this.updater=n||py}Ri.prototype.isReactComponent={};Ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yy(){}yy.prototype=Ri.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=gy,this.updater=n||py}var sd=id.prototype=new yy;sd.constructor=id;my(sd,Ri.prototype);sd.isPureReactComponent=!0;var _p=Array.isArray,vy=Object.prototype.hasOwnProperty,od={current:null},wy={key:!0,ref:!0,__self:!0,__source:!0};function Ey(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vy.call(e,r)&&!wy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:po,type:t,key:s,ref:o,props:i,_owner:od.current}}function h_(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function d_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sp=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?d_(""+t.key):e.toString(36)}function ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case po:case e_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ou(o,0):r,_p(i)?(n="",t!=null&&(n=t.replace(Sp,"$&/")+"/"),ga(i,e,n,"",function(u){return u})):i!=null&&(ad(i)&&(i=h_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_p(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ou(s,a);o+=ga(s,e,n,l,i)}else if(l=c_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ou(s,a++),o+=ga(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zo(t,e,n){if(t==null)return t;var r=[],i=0;return ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function f_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},ya={transition:null},p_={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ya,ReactCurrentOwner:od};q.Children={map:zo,forEach:function(t,e,n){zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zo(t,function(){e++}),e},toArray:function(t){return zo(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Ri;q.Fragment=t_;q.Profiler=r_;q.PureComponent=id;q.StrictMode=n_;q.Suspense=a_;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=my({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vy.call(e,l)&&!wy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:po,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:s_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:i_,_context:t},t.Consumer=t};q.createElement=Ey;q.createFactory=function(t){var e=Ey.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:o_,render:t}};q.isValidElement=ad;q.lazy=function(t){return{$$typeof:u_,_payload:{_status:-1,_result:t},_init:f_}};q.memo=function(t,e){return{$$typeof:l_,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=ya.transition;ya.transition={};try{t()}finally{ya.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return Xe.current.useCallback(t,e)};q.useContext=function(t){return Xe.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};q.useEffect=function(t,e){return Xe.current.useEffect(t,e)};q.useId=function(){return Xe.current.useId()};q.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Xe.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};q.useRef=function(t){return Xe.current.useRef(t)};q.useState=function(t){return Xe.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Xe.current.useTransition()};q.version="18.2.0";fy.exports=q;var S=fy.exports;const _y=ZE(S),m_=JE({__proto__:null,default:_y},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_=S,y_=Symbol.for("react.element"),v_=Symbol.for("react.fragment"),w_=Object.prototype.hasOwnProperty,E_=g_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,__={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)w_.call(e,r)&&!__.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:y_,type:t,key:s,ref:o,props:i,_owner:E_.current}}Pl.Fragment=v_;Pl.jsx=Sy;Pl.jsxs=Sy;dy.exports=Pl;var w=dy.exports,xc={},Iy={exports:{}},ct={},Ty={exports:{}},ky={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,V){var z=D.length;D.push(V);e:for(;0<z;){var de=z-1>>>1,Se=D[de];if(0<i(Se,V))D[de]=V,D[z]=Se,z=de;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var V=D[0],z=D.pop();if(z!==V){D[0]=z;e:for(var de=0,Se=D.length,bo=Se>>>1;de<bo;){var Jn=2*(de+1)-1,Pu=D[Jn],Zn=Jn+1,Vo=D[Zn];if(0>i(Pu,z))Zn<Se&&0>i(Vo,Pu)?(D[de]=Vo,D[Zn]=z,de=Zn):(D[de]=Pu,D[Jn]=z,de=Jn);else if(Zn<Se&&0>i(Vo,z))D[de]=Vo,D[Zn]=z,de=Zn;else break e}}return V}function i(D,V){var z=D.sortIndex-V.sortIndex;return z!==0?z:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,v=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=D)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function E(D){if(y=!1,m(D),!v)if(n(l)!==null)v=!0,Ru(C);else{var V=n(u);V!==null&&Du(E,V.startTime-D)}}function C(D,V){v=!1,y&&(y=!1,p(L),L=-1),g=!0;var z=d;try{for(m(V),h=n(l);h!==null&&(!(h.expirationTime>V)||D&&!Et());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var Se=de(h.expirationTime<=V);V=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),m(V)}else r(l);h=n(l)}if(h!==null)var bo=!0;else{var Jn=n(u);Jn!==null&&Du(E,Jn.startTime-V),bo=!1}return bo}finally{h=null,d=z,g=!1}}var A=!1,P=null,L=-1,J=5,B=-1;function Et(){return!(t.unstable_now()-B<J)}function Ki(){if(P!==null){var D=t.unstable_now();B=D;var V=!0;try{V=P(!0,D)}finally{V?Gi():(A=!1,P=null)}}else A=!1}var Gi;if(typeof f=="function")Gi=function(){f(Ki)};else if(typeof MessageChannel<"u"){var wp=new MessageChannel,XE=wp.port2;wp.port1.onmessage=Ki,Gi=function(){XE.postMessage(null)}}else Gi=function(){I(Ki,0)};function Ru(D){P=D,A||(A=!0,Gi())}function Du(D,V){L=I(function(){D(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Ru(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var z=d;d=V;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return V()}finally{d=z}},t.unstable_scheduleCallback=function(D,V,z){var de=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?de+z:de):z=de,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=z+Se,D={id:c++,callback:V,priorityLevel:D,startTime:z,expirationTime:Se,sortIndex:-1},z>de?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(y?(p(L),L=-1):y=!0,Du(E,z-de))):(D.sortIndex=Se,e(l,D),v||g||(v=!0,Ru(C))),D},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(D){var V=d;return function(){var z=d;d=V;try{return D.apply(this,arguments)}finally{d=z}}}})(ky);Ty.exports=ky;var S_=Ty.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy=S,lt=S_;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ny=new Set,Rs={};function Nr(t,e){fi(t,e),fi(t+"Capture",e)}function fi(t,e){for(Rs[t]=e,t=0;t<e.length;t++)Ny.add(e[t])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=Object.prototype.hasOwnProperty,I_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ip={},Tp={};function T_(t){return Rc.call(Tp,t)?!0:Rc.call(Ip,t)?!1:I_.test(t)?Tp[t]=!0:(Ip[t]=!0,!1)}function k_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C_(t,e,n,r){if(e===null||typeof e>"u"||k_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,ud);Oe[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,ud);Oe[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,ud);Oe[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(C_(e,n,i,r)&&(n=null),r||i===null?T_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hn=Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),br=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),xy=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),Oc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),Ry=Symbol.for("react.offscreen"),kp=Symbol.iterator;function Qi(t){return t===null||typeof t!="object"?null:(t=kp&&t[kp]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Lu;function ss(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var $u=!1;function Mu(t,e){if(!t||$u)return"";$u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ss(t):""}function N_(t){switch(t.tag){case 5:return ss(t.type);case 16:return ss("Lazy");case 13:return ss("Suspense");case 19:return ss("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function Lc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case br:return"Portal";case Dc:return"Profiler";case hd:return"StrictMode";case Pc:return"Suspense";case Oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xy:return(t.displayName||"Context")+".Consumer";case Ay:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:Lc(t.type)||"Memo";case gn:e=t._payload,t=t._init;try{return Lc(t(e))}catch{}}return null}function A_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lc(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x_(t){var e=Dy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){t._valueTracker||(t._valueTracker=x_(t))}function Py(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Dy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Oy(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function Mc(t,e){Oy(t,e);var n=zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uc(t,e.type,zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uc(t,e,n){(e!=="number"||Ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var os=Array.isArray;function ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(os(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zn(n)}}function Ly(t,e){var n=zn(e.value),r=zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $y(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$y(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qo,My=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ds(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R_=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(t){R_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gs[e]=gs[t]})});function Uy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gs.hasOwnProperty(t)&&gs[t]?(""+e).trim():e+"px"}function Fy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var D_=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bc(t,e){if(e){if(D_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zc=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bc=null,ti=null,ni=null;function Rp(t){if(t=yo(t)){if(typeof Bc!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Ul(e),Bc(t.stateNode,t.type,e))}}function jy(t){ti?ni?ni.push(t):ni=[t]:ti=t}function by(){if(ti){var t=ti,e=ni;if(ni=ti=null,Rp(t),e)for(t=0;t<e.length;t++)Rp(e[t])}}function Vy(t,e){return t(e)}function zy(){}var Uu=!1;function By(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return Vy(t,e,n)}finally{Uu=!1,(ti!==null||ni!==null)&&(zy(),by())}}function Ps(t,e){var n=t.stateNode;if(n===null)return null;var r=Ul(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Hc=!1;if(tn)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{Hc=!1}function P_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ys=!1,Ua=null,Fa=!1,qc=null,O_={onError:function(t){ys=!0,Ua=t}};function L_(t,e,n,r,i,s,o,a,l){ys=!1,Ua=null,P_.apply(O_,arguments)}function $_(t,e,n,r,i,s,o,a,l){if(L_.apply(this,arguments),ys){if(ys){var u=Ua;ys=!1,Ua=null}else throw Error(T(198));Fa||(Fa=!0,qc=u)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dp(t){if(Ar(t)!==t)throw Error(T(188))}function M_(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dp(i),t;if(s===r)return Dp(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function qy(t){return t=M_(t),t!==null?Wy(t):null}function Wy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wy(t);if(e!==null)return e;t=t.sibling}return null}var Ky=lt.unstable_scheduleCallback,Pp=lt.unstable_cancelCallback,U_=lt.unstable_shouldYield,F_=lt.unstable_requestPaint,fe=lt.unstable_now,j_=lt.unstable_getCurrentPriorityLevel,md=lt.unstable_ImmediatePriority,Gy=lt.unstable_UserBlockingPriority,ja=lt.unstable_NormalPriority,b_=lt.unstable_LowPriority,Qy=lt.unstable_IdlePriority,Ol=null,Ft=null;function V_(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:H_,z_=Math.log,B_=Math.LN2;function H_(t){return t>>>=0,t===0?32:31-(z_(t)/B_|0)|0}var Wo=64,Ko=4194304;function as(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=as(a):(s&=o,s!==0&&(r=as(s)))}else o=n&~i,o!==0?r=as(o):s!==0&&(r=as(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function q_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=q_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yy(){var t=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function K_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Xy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jy,yd,Zy,ev,tv,Kc=!1,Go=[],An=null,xn=null,Rn=null,Os=new Map,Ls=new Map,vn=[],G_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(t,e){switch(t){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Os.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(e.pointerId)}}function Xi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yo(e),e!==null&&yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Q_(t,e,n,r,i){switch(e){case"focusin":return An=Xi(An,t,e,n,r,i),!0;case"dragenter":return xn=Xi(xn,t,e,n,r,i),!0;case"mouseover":return Rn=Xi(Rn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Os.set(s,Xi(Os.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ls.set(s,Xi(Ls.get(s)||null,t,e,n,r,i)),!0}return!1}function nv(t){var e=ir(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Hy(n),e!==null){t.blockedOn=e,tv(t.priority,function(){Zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zc=r,n.target.dispatchEvent(r),zc=null}else return e=yo(n),e!==null&&yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lp(t,e,n){va(t)&&n.delete(e)}function Y_(){Kc=!1,An!==null&&va(An)&&(An=null),xn!==null&&va(xn)&&(xn=null),Rn!==null&&va(Rn)&&(Rn=null),Os.forEach(Lp),Ls.forEach(Lp)}function Ji(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Y_)))}function $s(t){function e(i){return Ji(i,t)}if(0<Go.length){Ji(Go[0],t);for(var n=1;n<Go.length;n++){var r=Go[n];r.blockedOn===t&&(r.blockedOn=null)}}for(An!==null&&Ji(An,t),xn!==null&&Ji(xn,t),Rn!==null&&Ji(Rn,t),Os.forEach(e),Ls.forEach(e),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)nv(n),n.blockedOn===null&&vn.shift()}var ri=hn.ReactCurrentBatchConfig,Va=!0;function X_(t,e,n,r){var i=Y,s=ri.transition;ri.transition=null;try{Y=1,vd(t,e,n,r)}finally{Y=i,ri.transition=s}}function J_(t,e,n,r){var i=Y,s=ri.transition;ri.transition=null;try{Y=4,vd(t,e,n,r)}finally{Y=i,ri.transition=s}}function vd(t,e,n,r){if(Va){var i=Gc(t,e,n,r);if(i===null)Gu(t,e,r,za,n),Op(t,r);else if(Q_(i,t,e,n,r))r.stopPropagation();else if(Op(t,r),e&4&&-1<G_.indexOf(t)){for(;i!==null;){var s=yo(i);if(s!==null&&Jy(s),s=Gc(t,e,n,r),s===null&&Gu(t,e,r,za,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gu(t,e,r,null,n)}}var za=null;function Gc(t,e,n,r){if(za=null,t=pd(r),t=ir(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return za=t,null}function rv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j_()){case md:return 1;case Gy:return 4;case ja:case b_:return 16;case Qy:return 536870912;default:return 16}default:return 16}}var Tn=null,wd=null,wa=null;function iv(){if(wa)return wa;var t,e=wd,n=e.length,r,i="value"in Tn?Tn.value:Tn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wa=i.slice(t,1<r?1-r:void 0)}function Ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function $p(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:$p,this.isPropagationStopped=$p,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ed=ht(Di),go=le({},Di,{view:0,detail:0}),Z_=ht(go),ju,bu,Zi,Ll=le({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zi&&(Zi&&t.type==="mousemove"?(ju=t.screenX-Zi.screenX,bu=t.screenY-Zi.screenY):bu=ju=0,Zi=t),ju)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),Mp=ht(Ll),eS=le({},Ll,{dataTransfer:0}),tS=ht(eS),nS=le({},go,{relatedTarget:0}),Vu=ht(nS),rS=le({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=ht(rS),sS=le({},Di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oS=ht(sS),aS=le({},Di,{data:0}),Up=ht(aS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cS[t])?!!e[t]:!1}function _d(){return hS}var dS=le({},go,{key:function(t){if(t.key){var e=lS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_d,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fS=ht(dS),pS=le({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=ht(pS),mS=le({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_d}),gS=ht(mS),yS=le({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=ht(yS),wS=le({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ES=ht(wS),_S=[9,13,27,32],Sd=tn&&"CompositionEvent"in window,vs=null;tn&&"documentMode"in document&&(vs=document.documentMode);var SS=tn&&"TextEvent"in window&&!vs,sv=tn&&(!Sd||vs&&8<vs&&11>=vs),jp=String.fromCharCode(32),bp=!1;function ov(t,e){switch(t){case"keyup":return _S.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function IS(t,e){switch(t){case"compositionend":return av(e);case"keypress":return e.which!==32?null:(bp=!0,jp);case"textInput":return t=e.data,t===jp&&bp?null:t;default:return null}}function TS(t,e){if(zr)return t==="compositionend"||!Sd&&ov(t,e)?(t=iv(),wa=wd=Tn=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sv&&e.locale!=="ko"?null:e.data;default:return null}}var kS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kS[t.type]:e==="textarea"}function lv(t,e,n,r){jy(r),e=Ba(e,"onChange"),0<e.length&&(n=new Ed("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ws=null,Ms=null;function CS(t){wv(t,0)}function $l(t){var e=qr(t);if(Py(e))return t}function NS(t,e){if(t==="change")return e}var uv=!1;if(tn){var zu;if(tn){var Bu="oninput"in document;if(!Bu){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Bu=typeof zp.oninput=="function"}zu=Bu}else zu=!1;uv=zu&&(!document.documentMode||9<document.documentMode)}function Bp(){ws&&(ws.detachEvent("onpropertychange",cv),Ms=ws=null)}function cv(t){if(t.propertyName==="value"&&$l(Ms)){var e=[];lv(e,Ms,t,pd(t)),By(CS,e)}}function AS(t,e,n){t==="focusin"?(Bp(),ws=e,Ms=n,ws.attachEvent("onpropertychange",cv)):t==="focusout"&&Bp()}function xS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(Ms)}function RS(t,e){if(t==="click")return $l(e)}function DS(t,e){if(t==="input"||t==="change")return $l(e)}function PS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:PS;function Us(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rc.call(e,i)||!At(t[i],e[i]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qp(t,e){var n=Hp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dv(){for(var t=window,e=Ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ma(t.document)}return e}function Id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OS(t){var e=dv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hv(n.ownerDocument.documentElement,n)){if(r!==null&&Id(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qp(n,s);var o=qp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LS=tn&&"documentMode"in document&&11>=document.documentMode,Br=null,Qc=null,Es=null,Yc=!1;function Wp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yc||Br==null||Br!==Ma(r)||(r=Br,"selectionStart"in r&&Id(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Es&&Us(Es,r)||(Es=r,r=Ba(Qc,"onSelect"),0<r.length&&(e=new Ed("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Br)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hr={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Hu={},fv={};tn&&(fv=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Ml(t){if(Hu[t])return Hu[t];if(!Hr[t])return t;var e=Hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fv)return Hu[t]=e[n];return t}var pv=Ml("animationend"),mv=Ml("animationiteration"),gv=Ml("animationstart"),yv=Ml("transitionend"),vv=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){vv.set(t,e),Nr(e,[t])}for(var qu=0;qu<Kp.length;qu++){var Wu=Kp[qu],$S=Wu.toLowerCase(),MS=Wu[0].toUpperCase()+Wu.slice(1);Kn($S,"on"+MS)}Kn(pv,"onAnimationEnd");Kn(mv,"onAnimationIteration");Kn(gv,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(yv,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function Gp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$_(r,e,void 0,t),t.currentTarget=null}function wv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Gp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Gp(i,a,u),s=l}}}if(Fa)throw t=qc,Fa=!1,qc=null,t}function ee(t,e){var n=e[th];n===void 0&&(n=e[th]=new Set);var r=t+"__bubble";n.has(r)||(Ev(e,t,2,!1),n.add(r))}function Ku(t,e,n){var r=0;e&&(r|=4),Ev(n,t,r,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Fs(t){if(!t[Xo]){t[Xo]=!0,Ny.forEach(function(n){n!=="selectionchange"&&(US.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,Ku("selectionchange",!1,e))}}function Ev(t,e,n,r){switch(rv(e)){case 1:var i=X_;break;case 4:i=J_;break;default:i=vd}n=i.bind(null,e,n,t),i=void 0,!Hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}By(function(){var u=s,c=pd(n),h=[];e:{var d=vv.get(t);if(d!==void 0){var g=Ed,v=t;switch(t){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":g=fS;break;case"focusin":v="focus",g=Vu;break;case"focusout":v="blur",g=Vu;break;case"beforeblur":case"afterblur":g=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gS;break;case pv:case mv:case gv:g=iS;break;case yv:g=vS;break;case"scroll":g=Z_;break;case"wheel":g=ES;break;case"copy":case"cut":case"paste":g=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fp}var y=(e&4)!==0,I=!y&&t==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=Ps(f,p),E!=null&&y.push(js(f,E,m)))),I)break;f=f.return}0<y.length&&(d=new g(d,v,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==zc&&(v=n.relatedTarget||n.fromElement)&&(ir(v)||v[nn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?ir(v):null,v!==null&&(I=Ar(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Mp,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Fp,E="onPointerLeave",p="onPointerEnter",f="pointer"),I=g==null?d:qr(g),m=v==null?d:qr(v),d=new y(E,f+"leave",g,n,c),d.target=I,d.relatedTarget=m,E=null,ir(c)===u&&(y=new y(p,f+"enter",v,n,c),y.target=m,y.relatedTarget=I,E=y),I=E,g&&v)t:{for(y=g,p=v,f=0,m=y;m;m=Mr(m))f++;for(m=0,E=p;E;E=Mr(E))m++;for(;0<f-m;)y=Mr(y),f--;for(;0<m-f;)p=Mr(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Mr(y),p=Mr(p)}y=null}else y=null;g!==null&&Qp(h,d,g,y,!1),v!==null&&I!==null&&Qp(h,I,v,y,!0)}}e:{if(d=u?qr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=NS;else if(Vp(d))if(uv)C=DS;else{C=xS;var A=AS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=RS);if(C&&(C=C(t,u))){lv(h,C,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Uc(d,"number",d.value)}switch(A=u?qr(u):window,t){case"focusin":(Vp(A)||A.contentEditable==="true")&&(Br=A,Qc=u,Es=null);break;case"focusout":Es=Qc=Br=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Wp(h,n,c);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":Wp(h,n,c)}var P;if(Sd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else zr?ov(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(sv&&n.locale!=="ko"&&(zr||L!=="onCompositionStart"?L==="onCompositionEnd"&&zr&&(P=iv()):(Tn=c,wd="value"in Tn?Tn.value:Tn.textContent,zr=!0)),A=Ba(u,L),0<A.length&&(L=new Up(L,t,null,n,c),h.push({event:L,listeners:A}),P?L.data=P:(P=av(n),P!==null&&(L.data=P)))),(P=SS?IS(t,n):TS(t,n))&&(u=Ba(u,"onBeforeInput"),0<u.length&&(c=new Up("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}wv(h,e)})}function js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ba(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ps(t,n),s!=null&&r.unshift(js(t,s,i)),s=Ps(t,e),s!=null&&r.push(js(t,s,i))),t=t.return}return r}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ps(n,s),l!=null&&o.unshift(js(n,l,a))):i||(l=Ps(n,s),l!=null&&o.push(js(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function Yp(t){return(typeof t=="string"?t:""+t).replace(FS,`
`).replace(jS,"")}function Jo(t,e,n){if(e=Yp(e),Yp(t)!==e&&n)throw Error(T(425))}function Ha(){}var Xc=null,Jc=null;function Zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(zS)}:eh;function zS(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$s(e)}function Dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Pi=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Pi,bs="__reactProps$"+Pi,nn="__reactContainer$"+Pi,th="__reactEvents$"+Pi,BS="__reactListeners$"+Pi,HS="__reactHandles$"+Pi;function ir(t){var e=t[Lt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nn]||n[Lt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jp(t);t!==null;){if(n=t[Lt])return n;t=Jp(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[Lt]||t[nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Ul(t){return t[bs]||null}var nh=[],Wr=-1;function Gn(t){return{current:t}}function re(t){0>Wr||(t.current=nh[Wr],nh[Wr]=null,Wr--)}function Z(t,e){Wr++,nh[Wr]=t.current,t.current=e}var Bn={},qe=Gn(Bn),tt=Gn(!1),mr=Bn;function pi(t,e){var n=t.type.contextTypes;if(!n)return Bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function qa(){re(tt),re(qe)}function Zp(t,e,n){if(qe.current!==Bn)throw Error(T(168));Z(qe,e),Z(tt,n)}function _v(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,A_(t)||"Unknown",i));return le({},n,r)}function Wa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bn,mr=qe.current,Z(qe,t),Z(tt,tt.current),!0}function em(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=_v(t,e,mr),r.__reactInternalMemoizedMergedChildContext=t,re(tt),re(qe),Z(qe,t)):re(tt),Z(tt,n)}var Kt=null,Fl=!1,Yu=!1;function Sv(t){Kt===null?Kt=[t]:Kt.push(t)}function qS(t){Fl=!0,Sv(t)}function Qn(){if(!Yu&&Kt!==null){Yu=!0;var t=0,e=Y;try{var n=Kt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kt=null,Fl=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(t+1)),Ky(md,Qn),i}finally{Y=e,Yu=!1}}return null}var Kr=[],Gr=0,Ka=null,Ga=0,dt=[],ft=0,gr=null,Gt=1,Qt="";function tr(t,e){Kr[Gr++]=Ga,Kr[Gr++]=Ka,Ka=t,Ga=e}function Iv(t,e,n){dt[ft++]=Gt,dt[ft++]=Qt,dt[ft++]=gr,gr=t;var r=Gt;t=Qt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gt=1<<32-Ct(e)+i|n<<i|r,Qt=s+t}else Gt=1<<s|n<<i|r,Qt=t}function Td(t){t.return!==null&&(tr(t,1),Iv(t,1,0))}function kd(t){for(;t===Ka;)Ka=Kr[--Gr],Kr[Gr]=null,Ga=Kr[--Gr],Kr[Gr]=null;for(;t===gr;)gr=dt[--ft],dt[ft]=null,Qt=dt[--ft],dt[ft]=null,Gt=dt[--ft],dt[ft]=null}var at=null,ot=null,se=!1,Tt=null;function Tv(t,e){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,at=t,ot=Dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,at=t,ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:Gt,overflow:Qt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,at=t,ot=null,!0):!1;default:return!1}}function rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ih(t){if(se){var e=ot;if(e){var n=e;if(!tm(t,e)){if(rh(t))throw Error(T(418));e=Dn(n.nextSibling);var r=at;e&&tm(t,e)?Tv(r,n):(t.flags=t.flags&-4097|2,se=!1,at=t)}}else{if(rh(t))throw Error(T(418));t.flags=t.flags&-4097|2,se=!1,at=t}}}function nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;at=t}function Zo(t){if(t!==at)return!1;if(!se)return nm(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zc(t.type,t.memoizedProps)),e&&(e=ot)){if(rh(t))throw kv(),Error(T(418));for(;e;)Tv(t,e),e=Dn(e.nextSibling)}if(nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ot=Dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ot=null}}else ot=at?Dn(t.stateNode.nextSibling):null;return!0}function kv(){for(var t=ot;t;)t=Dn(t.nextSibling)}function mi(){ot=at=null,se=!1}function Cd(t){Tt===null?Tt=[t]:Tt.push(t)}var WS=hn.ReactCurrentBatchConfig;function St(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Qa=Gn(null),Ya=null,Qr=null,Nd=null;function Ad(){Nd=Qr=Ya=null}function xd(t){var e=Qa.current;re(Qa),t._currentValue=e}function sh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ii(t,e){Ya=t,Nd=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(Nd!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(Ya===null)throw Error(T(308));Qr=t,Ya.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var sr=null;function Rd(t){sr===null?sr=[t]:sr.push(t)}function Cv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rd(e)):(n.next=i.next,i.next=n),e.interleaved=n,rn(t,r)}function rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yn=!1;function Dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rn(t,n)}return i=r.interleaved,i===null?(e.next=e,Rd(r)):(e.next=i.next,i.next=e),r.interleaved=e,rn(t,n)}function _a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}function rm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xa(t,e,n,r){var i=t.updateQueue;yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(g,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(g,h,d):v,d==null)break e;h=le({},h,d);break e;case 2:yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vr|=o,t.lanes=o,t.memoizedState=h}}function im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Av=new Cy.Component().refs;function oh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Ln(t),s=Zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Pn(t,s,i),e!==null&&(Nt(e,t,i,r),_a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Ln(t),s=Zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pn(t,s,i),e!==null&&(Nt(e,t,i,r),_a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=Ln(t),i=Zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pn(t,i,r),e!==null&&(Nt(e,t,r,n),_a(e,t,r))}};function sm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Us(n,r)||!Us(i,s):!0}function xv(t,e,n){var r=!1,i=Bn,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=nt(e)?mr:qe.current,r=e.contextTypes,s=(r=r!=null)?pi(t,i):Bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function om(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function ah(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Av,Dd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=nt(e)?mr:qe.current,i.context=pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(oh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jl.enqueueReplaceState(i,i.state,null),Xa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Av&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function am(t){var e=t._init;return e(t._payload)}function Rv(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=$n(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,E){return f===null||f.tag!==6?(f=rc(m,p.mode,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,E){var C=m.type;return C===Vr?c(p,f,m.props.children,E,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&am(C)===f.type)?(E=i(f,m.props),E.ref=es(p,f,m),E.return=p,E):(E=Na(m.type,m.key,m.props,null,p.mode,E),E.ref=es(p,f,m),E.return=p,E)}function u(p,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ic(m,p.mode,E),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,E,C){return f===null||f.tag!==7?(f=hr(m,p.mode,E,C),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=rc(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bo:return m=Na(f.type,f.key,f.props,null,p.mode,m),m.ref=es(p,null,f),m.return=p,m;case br:return f=ic(f,p.mode,m),f.return=p,f;case gn:var E=f._init;return h(p,E(f._payload),m)}if(os(f)||Qi(f))return f=hr(f,p.mode,m,null),f.return=p,f;ea(p,f)}return null}function d(p,f,m,E){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(p,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bo:return m.key===C?l(p,f,m,E):null;case br:return m.key===C?u(p,f,m,E):null;case gn:return C=m._init,d(p,f,C(m._payload),E)}if(os(m)||Qi(m))return C!==null?null:c(p,f,m,E,null);ea(p,m)}return null}function g(p,f,m,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(f,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Bo:return p=p.get(E.key===null?m:E.key)||null,l(f,p,E,C);case br:return p=p.get(E.key===null?m:E.key)||null,u(f,p,E,C);case gn:var A=E._init;return g(p,f,m,A(E._payload),C)}if(os(E)||Qi(E))return p=p.get(m)||null,c(f,p,E,C,null);ea(f,E)}return null}function v(p,f,m,E){for(var C=null,A=null,P=f,L=f=0,J=null;P!==null&&L<m.length;L++){P.index>L?(J=P,P=null):J=P.sibling;var B=d(p,P,m[L],E);if(B===null){P===null&&(P=J);break}t&&P&&B.alternate===null&&e(p,P),f=s(B,f,L),A===null?C=B:A.sibling=B,A=B,P=J}if(L===m.length)return n(p,P),se&&tr(p,L),C;if(P===null){for(;L<m.length;L++)P=h(p,m[L],E),P!==null&&(f=s(P,f,L),A===null?C=P:A.sibling=P,A=P);return se&&tr(p,L),C}for(P=r(p,P);L<m.length;L++)J=g(P,p,L,m[L],E),J!==null&&(t&&J.alternate!==null&&P.delete(J.key===null?L:J.key),f=s(J,f,L),A===null?C=J:A.sibling=J,A=J);return t&&P.forEach(function(Et){return e(p,Et)}),se&&tr(p,L),C}function y(p,f,m,E){var C=Qi(m);if(typeof C!="function")throw Error(T(150));if(m=C.call(m),m==null)throw Error(T(151));for(var A=C=null,P=f,L=f=0,J=null,B=m.next();P!==null&&!B.done;L++,B=m.next()){P.index>L?(J=P,P=null):J=P.sibling;var Et=d(p,P,B.value,E);if(Et===null){P===null&&(P=J);break}t&&P&&Et.alternate===null&&e(p,P),f=s(Et,f,L),A===null?C=Et:A.sibling=Et,A=Et,P=J}if(B.done)return n(p,P),se&&tr(p,L),C;if(P===null){for(;!B.done;L++,B=m.next())B=h(p,B.value,E),B!==null&&(f=s(B,f,L),A===null?C=B:A.sibling=B,A=B);return se&&tr(p,L),C}for(P=r(p,P);!B.done;L++,B=m.next())B=g(P,p,L,B.value,E),B!==null&&(t&&B.alternate!==null&&P.delete(B.key===null?L:B.key),f=s(B,f,L),A===null?C=B:A.sibling=B,A=B);return t&&P.forEach(function(Ki){return e(p,Ki)}),se&&tr(p,L),C}function I(p,f,m,E){if(typeof m=="object"&&m!==null&&m.type===Vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Bo:e:{for(var C=m.key,A=f;A!==null;){if(A.key===C){if(C=m.type,C===Vr){if(A.tag===7){n(p,A.sibling),f=i(A,m.props.children),f.return=p,p=f;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&am(C)===A.type){n(p,A.sibling),f=i(A,m.props),f.ref=es(p,A,m),f.return=p,p=f;break e}n(p,A);break}else e(p,A);A=A.sibling}m.type===Vr?(f=hr(m.props.children,p.mode,E,m.key),f.return=p,p=f):(E=Na(m.type,m.key,m.props,null,p.mode,E),E.ref=es(p,f,m),E.return=p,p=E)}return o(p);case br:e:{for(A=m.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ic(m,p.mode,E),f.return=p,p=f}return o(p);case gn:return A=m._init,I(p,f,A(m._payload),E)}if(os(m))return v(p,f,m,E);if(Qi(m))return y(p,f,m,E);ea(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=rc(m,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return I}var gi=Rv(!0),Dv=Rv(!1),vo={},jt=Gn(vo),Vs=Gn(vo),zs=Gn(vo);function or(t){if(t===vo)throw Error(T(174));return t}function Pd(t,e){switch(Z(zs,e),Z(Vs,t),Z(jt,vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jc(e,t)}re(jt),Z(jt,e)}function yi(){re(jt),re(Vs),re(zs)}function Pv(t){or(zs.current);var e=or(jt.current),n=jc(e,t.type);e!==n&&(Z(Vs,t),Z(jt,n))}function Od(t){Vs.current===t&&(re(jt),re(Vs))}var oe=Gn(0);function Ja(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function Ld(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var Sa=hn.ReactCurrentDispatcher,Ju=hn.ReactCurrentBatchConfig,yr=0,ae=null,Ee=null,Te=null,Za=!1,_s=!1,Bs=0,KS=0;function $e(){throw Error(T(321))}function $d(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function Md(t,e,n,r,i,s){if(yr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sa.current=t===null||t.memoizedState===null?XS:JS,t=n(r,i),_s){s=0;do{if(_s=!1,Bs=0,25<=s)throw Error(T(301));s+=1,Te=Ee=null,e.updateQueue=null,Sa.current=ZS,t=n(r,i)}while(_s)}if(Sa.current=el,e=Ee!==null&&Ee.next!==null,yr=0,Te=Ee=ae=null,Za=!1,e)throw Error(T(300));return t}function Ud(){var t=Bs!==0;return Bs=0,t}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ae.memoizedState=Te=t:Te=Te.next=t,Te}function wt(){if(Ee===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=Te===null?ae.memoizedState:Te.next;if(e!==null)Te=e,Ee=t;else{if(t===null)throw Error(T(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Te===null?ae.memoizedState=Te=t:Te=Te.next=t}return Te}function Hs(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,vr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,At(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ov(){}function Lv(t,e){var n=ae,r=wt(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,Fd(Uv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,qs(9,Mv.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(T(349));yr&30||$v(n,e,i)}return i}function $v(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mv(t,e,n,r){e.value=n,e.getSnapshot=r,Fv(e)&&jv(t)}function Uv(t,e,n){return n(function(){Fv(e)&&jv(t)})}function Fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function jv(t){var e=rn(t,1);e!==null&&Nt(e,t,1,-1)}function lm(t){var e=Ot();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:t},e.queue=t,t=t.dispatch=YS.bind(null,ae,t),[e.memoizedState,t]}function qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bv(){return wt().memoizedState}function Ia(t,e,n,r){var i=Ot();ae.flags|=t,i.memoizedState=qs(1|e,n,void 0,r===void 0?null:r)}function bl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&$d(r,o.deps)){i.memoizedState=qs(e,n,s,r);return}}ae.flags|=t,i.memoizedState=qs(1|e,n,s,r)}function um(t,e){return Ia(8390656,8,t,e)}function Fd(t,e){return bl(2048,8,t,e)}function Vv(t,e){return bl(4,2,t,e)}function zv(t,e){return bl(4,4,t,e)}function Bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hv(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,Bv.bind(null,e,t),n)}function jd(){}function qv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$d(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$d(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Kv(t,e,n){return yr&21?(At(n,e)||(n=Yy(),ae.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function GS(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Ju.transition;Ju.transition={};try{t(!1),e()}finally{Y=n,Ju.transition=r}}function Gv(){return wt().memoizedState}function QS(t,e,n){var r=Ln(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qv(t))Yv(e,n);else if(n=Cv(t,e,n,r),n!==null){var i=Ye();Nt(n,t,r,i),Xv(n,e,r)}}function YS(t,e,n){var r=Ln(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qv(t))Yv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,o)){var l=e.interleaved;l===null?(i.next=i,Rd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Cv(t,e,i,r),n!==null&&(i=Ye(),Nt(n,t,r,i),Xv(n,e,r))}}function Qv(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function Yv(t,e){_s=Za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}var el={readContext:vt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},XS={readContext:vt,useCallback:function(t,e){return Ot().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ia(4194308,4,Bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ia(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ia(4,2,t,e)},useMemo:function(t,e){var n=Ot();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ot();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QS.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Ot();return t={current:t},e.memoizedState=t},useState:lm,useDebugValue:jd,useDeferredValue:function(t){return Ot().memoizedState=t},useTransition:function(){var t=lm(!1),e=t[0];return t=GS.bind(null,t[1]),Ot().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Ot();if(se){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),ke===null)throw Error(T(349));yr&30||$v(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,um(Uv.bind(null,r,s,t),[t]),r.flags|=2048,qs(9,Mv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ot(),e=ke.identifierPrefix;if(se){var n=Qt,r=Gt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JS={readContext:vt,useCallback:qv,useContext:vt,useEffect:Fd,useImperativeHandle:Hv,useInsertionEffect:Vv,useLayoutEffect:zv,useMemo:Wv,useReducer:Zu,useRef:bv,useState:function(){return Zu(Hs)},useDebugValue:jd,useDeferredValue:function(t){var e=wt();return Kv(e,Ee.memoizedState,t)},useTransition:function(){var t=Zu(Hs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Ov,useSyncExternalStore:Lv,useId:Gv,unstable_isNewReconciler:!1},ZS={readContext:vt,useCallback:qv,useContext:vt,useEffect:Fd,useImperativeHandle:Hv,useInsertionEffect:Vv,useLayoutEffect:zv,useMemo:Wv,useReducer:ec,useRef:bv,useState:function(){return ec(Hs)},useDebugValue:jd,useDeferredValue:function(t){var e=wt();return Ee===null?e.memoizedState=t:Kv(e,Ee.memoizedState,t)},useTransition:function(){var t=ec(Hs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Ov,useSyncExternalStore:Lv,useId:Gv,unstable_isNewReconciler:!1};function vi(t,e){try{var n="",r=e;do n+=N_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eI=typeof WeakMap=="function"?WeakMap:Map;function Jv(t,e,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nl||(nl=!0,vh=r),lh(t,e)},n}function Zv(t,e,n){n=Zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lh(t,e),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pI.bind(null,t,e,n),e.then(t,t))}function hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zt(-1,1),e.tag=2,Pn(n,e,1))),n.lanes|=1),t)}var tI=hn.ReactCurrentOwner,et=!1;function Ge(t,e,n,r){e.child=t===null?Dv(e,null,n,r):gi(e,t.child,n,r)}function fm(t,e,n,r,i){n=n.render;var s=e.ref;return ii(e,i),r=Md(t,e,n,r,s,i),n=Ud(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(se&&n&&Td(e),e.flags|=1,Ge(t,e,r,i),e.child)}function pm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,e0(t,e,s,r,i)):(t=Na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Us,n(o,r)&&t.ref===e.ref)return sn(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function e0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Us(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,sn(t,e,i)}return uh(t,e,n,r,i)}function t0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Xr,st),st|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Xr,st),st|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Xr,st),st|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Xr,st),st|=r;return Ge(t,e,i,n),e.child}function n0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uh(t,e,n,r,i){var s=nt(n)?mr:qe.current;return s=pi(e,s),ii(e,i),n=Md(t,e,n,r,s,i),r=Ud(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(se&&r&&Td(e),e.flags|=1,Ge(t,e,n,i),e.child)}function mm(t,e,n,r,i){if(nt(n)){var s=!0;Wa(e)}else s=!1;if(ii(e,i),e.stateNode===null)Ta(t,e),xv(e,n,r),ah(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=nt(n)?mr:qe.current,u=pi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&om(e,o,r,u),yn=!1;var d=e.memoizedState;o.state=d,Xa(e,r,o,i),l=e.memoizedState,a!==r||d!==l||tt.current||yn?(typeof c=="function"&&(oh(e,n,c,r),l=e.memoizedState),(a=yn||sm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Nv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:St(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=nt(n)?mr:qe.current,l=pi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&om(e,o,r,l),yn=!1,d=e.memoizedState,o.state=d,Xa(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||tt.current||yn?(typeof g=="function"&&(oh(e,n,g,r),v=e.memoizedState),(u=yn||sm(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return ch(t,e,n,r,s,i)}function ch(t,e,n,r,i,s){n0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&em(e,n,!1),sn(t,e,s);r=e.stateNode,tI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gi(e,t.child,null,s),e.child=gi(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&em(e,n,!0),e.child}function r0(t){var e=t.stateNode;e.pendingContext?Zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zp(t,e.context,!1),Pd(t,e.containerInfo)}function gm(t,e,n,r,i){return mi(),Cd(i),e.flags|=256,Ge(t,e,n,r),e.child}var hh={dehydrated:null,treeContext:null,retryLane:0};function dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function i0(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,r,0,null),t=hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dh(n),e.memoizedState=hh,t):bd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return nI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=$n(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$n(a,s):(s=hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hh,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bd(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,r){return r!==null&&Cd(r),gi(e,t.child,null,n),t=bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tc(Error(T(422))),ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Bl({mode:"visible",children:r.children},i,0,null),s=hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gi(e,t.child,null,o),e.child.memoizedState=dh(o),e.memoizedState=hh,s);if(!(e.mode&1))return ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=tc(s,r,void 0),ta(t,e,o,r)}if(a=(o&t.childLanes)!==0,et||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rn(t,i),Nt(r,t,i,-1))}return Wd(),r=tc(Error(T(421))),ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ot=Dn(i.nextSibling),at=e,se=!0,Tt=null,t!==null&&(dt[ft++]=Gt,dt[ft++]=Qt,dt[ft++]=gr,Gt=t.id,Qt=t.overflow,gr=e),e=bd(e,r.children),e.flags|=4096,e)}function ym(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sh(t.return,e,n)}function nc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function s0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ym(t,n,e);else if(t.tag===19)ym(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ja(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ja(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nc(e,!0,n,null,s);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ta(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rI(t,e,n){switch(e.tag){case 3:r0(e),mi();break;case 5:Pv(e);break;case 1:nt(e.type)&&Wa(e);break;case 4:Pd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Qa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?i0(t,e,n):(Z(oe,oe.current&1),t=sn(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return s0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,t0(t,e,n)}return sn(t,e,n)}var o0,fh,a0,l0;o0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fh=function(){};a0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,or(jt.current);var s=null;switch(n){case"input":i=$c(t,i),r=$c(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Fc(t,i),r=Fc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ha)}bc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};l0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ts(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iI(t,e,n){var r=e.pendingProps;switch(kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return nt(e.type)&&qa(),Me(e),null;case 3:return r=e.stateNode,yi(),re(tt),re(qe),Ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tt!==null&&(_h(Tt),Tt=null))),fh(t,e),Me(e),null;case 5:Od(e);var i=or(zs.current);if(n=e.type,t!==null&&e.stateNode!=null)a0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Me(e),null}if(t=or(jt.current),Zo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Lt]=e,r[bs]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)ee(ls[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Cp(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Ap(r,s),ee("invalid",r)}bc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,a,t),i=["children",""+a]):Rs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":Ho(r),Np(r,s,!0);break;case"textarea":Ho(r),xp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ha)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$y(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Lt]=e,t[bs]=r,o0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)ee(ls[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Cp(t,r),i=$c(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Ap(t,r),i=Fc(t,r),ee("invalid",t);break;default:i=r}bc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&My(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ds(t,l):typeof l=="number"&&Ds(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Rs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&cd(t,s,l,o))}switch(n){case"input":Ho(t),Np(t,r,!1);break;case"textarea":Ho(t),xp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)l0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=or(zs.current),or(jt.current),Zo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Lt]=e,(s=r.nodeValue!==n)&&(t=at,t!==null))switch(t.tag){case 3:Jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=e,e.stateNode=r}return Me(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&ot!==null&&e.mode&1&&!(e.flags&128))kv(),mi(),e.flags|=98560,s=!1;else if(s=Zo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Lt]=e}else mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else Tt!==null&&(_h(Tt),Tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?_e===0&&(_e=3):Wd())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return yi(),fh(t,e),t===null&&Fs(e.stateNode.containerInfo),Me(e),null;case 10:return xd(e.type._context),Me(e),null;case 17:return nt(e.type)&&qa(),Me(e),null;case 19:if(re(oe),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ts(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ja(t),o!==null){for(e.flags|=128,ts(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>wi&&(e.flags|=128,r=!0,ts(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ja(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Me(e),null}else 2*fe()-s.renderingStartTime>wi&&n!==1073741824&&(e.flags|=128,r=!0,ts(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return qd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?st&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function sI(t,e){switch(kd(e),e.tag){case 1:return nt(e.type)&&qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yi(),re(tt),re(qe),Ld(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Od(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return yi(),null;case 10:return xd(e.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var na=!1,je=!1,oI=typeof WeakSet=="function"?WeakSet:Set,R=null;function Yr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function ph(t,e,n){try{n()}catch(r){ce(t,e,r)}}var vm=!1;function aI(t,e){if(Xc=Va,t=dv(),Id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jc={focusedElem:t,selectionRange:n},Va=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,I=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:St(e.type,y),I);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return v=vm,vm=!1,v}function Ss(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ph(e,n,s)}i=i.next}while(i!==r)}}function Vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u0(t){var e=t.alternate;e!==null&&(t.alternate=null,u0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Lt],delete e[bs],delete e[th],delete e[BS],delete e[HS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c0(t){return t.tag===5||t.tag===3||t.tag===4}function wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ha));else if(r!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}function yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yh(t,e,n),t=t.sibling;t!==null;)yh(t,e,n),t=t.sibling}var Ae=null,It=!1;function pn(t,e,n){for(n=n.child;n!==null;)h0(t,e,n),n=n.sibling}function h0(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:je||Yr(n,e);case 6:var r=Ae,i=It;Ae=null,pn(t,e,n),Ae=r,It=i,Ae!==null&&(It?(t=Ae,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(It?(t=Ae,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),$s(t)):Qu(Ae,n.stateNode));break;case 4:r=Ae,i=It,Ae=n.stateNode.containerInfo,It=!0,pn(t,e,n),Ae=r,It=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ph(n,e,o),i=i.next}while(i!==r)}pn(t,e,n);break;case 1:if(!je&&(Yr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,pn(t,e,n),je=r):pn(t,e,n);break;default:pn(t,e,n)}}function Em(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oI),e.forEach(function(r){var i=gI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,It=!1;break e;case 3:Ae=a.stateNode.containerInfo,It=!0;break e;case 4:Ae=a.stateNode.containerInfo,It=!0;break e}a=a.return}if(Ae===null)throw Error(T(160));h0(s,o,i),Ae=null,It=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d0(e,t),e=e.sibling}function d0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_t(e,t),Pt(t),r&4){try{Ss(3,t,t.return),Vl(3,t)}catch(y){ce(t,t.return,y)}try{Ss(5,t,t.return)}catch(y){ce(t,t.return,y)}}break;case 1:_t(e,t),Pt(t),r&512&&n!==null&&Yr(n,n.return);break;case 5:if(_t(e,t),Pt(t),r&512&&n!==null&&Yr(n,n.return),t.flags&32){var i=t.stateNode;try{Ds(i,"")}catch(y){ce(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Oy(i,s),Vc(a,o);var u=Vc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Fy(i,h):c==="dangerouslySetInnerHTML"?My(i,h):c==="children"?Ds(i,h):cd(i,c,h,u)}switch(a){case"input":Mc(i,s);break;case"textarea":Ly(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ei(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?ei(i,!!s.multiple,s.defaultValue,!0):ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[bs]=s}catch(y){ce(t,t.return,y)}}break;case 6:if(_t(e,t),Pt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ce(t,t.return,y)}}break;case 3:if(_t(e,t),Pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$s(e.containerInfo)}catch(y){ce(t,t.return,y)}break;case 4:_t(e,t),Pt(t);break;case 13:_t(e,t),Pt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bd=fe())),r&4&&Em(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(je=(u=je)||c,_t(e,t),je=u):_t(e,t),Pt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(h=R=c;R!==null;){switch(d=R,g=d.child,d.tag){case 0:case 11:case 14:case 15:Ss(4,d,d.return);break;case 1:Yr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:Yr(d,d.return);break;case 22:if(d.memoizedState!==null){Sm(h);continue}}g!==null?(g.return=d,R=g):Sm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Uy("display",o))}catch(y){ce(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){ce(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_t(e,t),Pt(t),r&4&&Em(t);break;case 21:break;default:_t(e,t),Pt(t)}}function Pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c0(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ds(i,""),r.flags&=-33);var s=wm(t);yh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=wm(t);gh(t,a,o);break;default:throw Error(T(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lI(t,e,n){R=t,f0(t)}function f0(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||na;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||je;a=na;var u=je;if(na=o,(je=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?Im(i):l!==null?(l.return=o,R=l):Im(i);for(;s!==null;)R=s,f0(s),s=s.sibling;R=i,na=a,je=u}_m(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):_m(t)}}function _m(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:je||Vl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:St(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&im(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}im(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&$s(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}je||e.flags&512&&mh(e)}catch(d){ce(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Sm(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Im(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vl(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{mh(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{mh(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var uI=Math.ceil,tl=hn.ReactCurrentDispatcher,Vd=hn.ReactCurrentOwner,yt=hn.ReactCurrentBatchConfig,K=0,ke=null,ye=null,De=0,st=0,Xr=Gn(0),_e=0,Ws=null,vr=0,zl=0,zd=0,Is=null,Ze=null,Bd=0,wi=1/0,Wt=null,nl=!1,vh=null,On=null,ra=!1,kn=null,rl=0,Ts=0,wh=null,ka=-1,Ca=0;function Ye(){return K&6?fe():ka!==-1?ka:ka=fe()}function Ln(t){return t.mode&1?K&2&&De!==0?De&-De:WS.transition!==null?(Ca===0&&(Ca=Yy()),Ca):(t=Y,t!==0||(t=window.event,t=t===void 0?16:rv(t.type)),t):1}function Nt(t,e,n,r){if(50<Ts)throw Ts=0,wh=null,Error(T(185));mo(t,n,r),(!(K&2)||t!==ke)&&(t===ke&&(!(K&2)&&(zl|=n),_e===4&&wn(t,De)),rt(t,r),n===1&&K===0&&!(e.mode&1)&&(wi=fe()+500,Fl&&Qn()))}function rt(t,e){var n=t.callbackNode;W_(t,e);var r=ba(t,t===ke?De:0);if(r===0)n!==null&&Pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pp(n),e===1)t.tag===0?qS(Tm.bind(null,t)):Sv(Tm.bind(null,t)),VS(function(){!(K&6)&&Qn()}),n=null;else{switch(Xy(r)){case 1:n=md;break;case 4:n=Gy;break;case 16:n=ja;break;case 536870912:n=Qy;break;default:n=ja}n=_0(n,p0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p0(t,e){if(ka=-1,Ca=0,K&6)throw Error(T(327));var n=t.callbackNode;if(si()&&t.callbackNode!==n)return null;var r=ba(t,t===ke?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=il(t,r);else{e=r;var i=K;K|=2;var s=g0();(ke!==t||De!==e)&&(Wt=null,wi=fe()+500,cr(t,e));do try{dI();break}catch(a){m0(t,a)}while(1);Ad(),tl.current=s,K=i,ye!==null?e=0:(ke=null,De=0,e=_e)}if(e!==0){if(e===2&&(i=Wc(t),i!==0&&(r=i,e=Eh(t,i))),e===1)throw n=Ws,cr(t,0),wn(t,r),rt(t,fe()),n;if(e===6)wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!cI(i)&&(e=il(t,r),e===2&&(s=Wc(t),s!==0&&(r=s,e=Eh(t,s))),e===1))throw n=Ws,cr(t,0),wn(t,r),rt(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:nr(t,Ze,Wt);break;case 3:if(wn(t,r),(r&130023424)===r&&(e=Bd+500-fe(),10<e)){if(ba(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=eh(nr.bind(null,t,Ze,Wt),e);break}nr(t,Ze,Wt);break;case 4:if(wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uI(r/1960))-r,10<r){t.timeoutHandle=eh(nr.bind(null,t,Ze,Wt),r);break}nr(t,Ze,Wt);break;case 5:nr(t,Ze,Wt);break;default:throw Error(T(329))}}}return rt(t,fe()),t.callbackNode===n?p0.bind(null,t):null}function Eh(t,e){var n=Is;return t.current.memoizedState.isDehydrated&&(cr(t,e).flags|=256),t=il(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&_h(e)),t}function _h(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function cI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wn(t,e){for(e&=~zd,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function Tm(t){if(K&6)throw Error(T(327));si();var e=ba(t,0);if(!(e&1))return rt(t,fe()),null;var n=il(t,e);if(t.tag!==0&&n===2){var r=Wc(t);r!==0&&(e=r,n=Eh(t,r))}if(n===1)throw n=Ws,cr(t,0),wn(t,e),rt(t,fe()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,Ze,Wt),rt(t,fe()),null}function Hd(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(wi=fe()+500,Fl&&Qn())}}function wr(t){kn!==null&&kn.tag===0&&!(K&6)&&si();var e=K;K|=1;var n=yt.transition,r=Y;try{if(yt.transition=null,Y=1,t)return t()}finally{Y=r,yt.transition=n,K=e,!(K&6)&&Qn()}}function qd(){st=Xr.current,re(Xr)}function cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bS(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(kd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qa();break;case 3:yi(),re(tt),re(qe),Ld();break;case 5:Od(r);break;case 4:yi();break;case 13:re(oe);break;case 19:re(oe);break;case 10:xd(r.type._context);break;case 22:case 23:qd()}n=n.return}if(ke=t,ye=t=$n(t.current,null),De=st=e,_e=0,Ws=null,zd=zl=vr=0,Ze=Is=null,sr!==null){for(e=0;e<sr.length;e++)if(n=sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}sr=null}return t}function m0(t,e){do{var n=ye;try{if(Ad(),Sa.current=el,Za){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Za=!1}if(yr=0,Te=Ee=ae=null,_s=!1,Bs=0,Vd.current=null,n===null||n.return===null){_e=1,Ws=e,ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=hm(o);if(g!==null){g.flags&=-257,dm(g,o,a,s,e),g.mode&1&&cm(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){cm(s,u,e),Wd();break e}l=Error(T(426))}}else if(se&&a.mode&1){var I=hm(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),dm(I,o,a,s,e),Cd(vi(l,a));break e}}s=l=vi(l,a),_e!==4&&(_e=2),Is===null?Is=[s]:Is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Jv(s,l,e);rm(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(On===null||!On.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Zv(s,a,e);rm(s,E);break e}}s=s.return}while(s!==null)}v0(n)}catch(C){e=C,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function g0(){var t=tl.current;return tl.current=el,t===null?el:t}function Wd(){(_e===0||_e===3||_e===2)&&(_e=4),ke===null||!(vr&268435455)&&!(zl&268435455)||wn(ke,De)}function il(t,e){var n=K;K|=2;var r=g0();(ke!==t||De!==e)&&(Wt=null,cr(t,e));do try{hI();break}catch(i){m0(t,i)}while(1);if(Ad(),K=n,tl.current=r,ye!==null)throw Error(T(261));return ke=null,De=0,_e}function hI(){for(;ye!==null;)y0(ye)}function dI(){for(;ye!==null&&!U_();)y0(ye)}function y0(t){var e=E0(t.alternate,t,st);t.memoizedProps=t.pendingProps,e===null?v0(t):ye=e,Vd.current=null}function v0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sI(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,ye=null;return}}else if(n=iI(n,e,st),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);_e===0&&(_e=5)}function nr(t,e,n){var r=Y,i=yt.transition;try{yt.transition=null,Y=1,fI(t,e,n,r)}finally{yt.transition=i,Y=r}return null}function fI(t,e,n,r){do si();while(kn!==null);if(K&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(K_(t,s),t===ke&&(ye=ke=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ra||(ra=!0,_0(ja,function(){return si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=Y;Y=1;var a=K;K|=4,Vd.current=null,aI(t,n),d0(n,t),OS(Jc),Va=!!Xc,Jc=Xc=null,t.current=n,lI(n),F_(),K=a,Y=o,yt.transition=s}else t.current=n;if(ra&&(ra=!1,kn=t,rl=i),s=t.pendingLanes,s===0&&(On=null),V_(n.stateNode),rt(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,t=vh,vh=null,t;return rl&1&&t.tag!==0&&si(),s=t.pendingLanes,s&1?t===wh?Ts++:(Ts=0,wh=t):Ts=0,Qn(),null}function si(){if(kn!==null){var t=Xy(rl),e=yt.transition,n=Y;try{if(yt.transition=null,Y=16>t?16:t,kn===null)var r=!1;else{if(t=kn,kn=null,rl=0,K&6)throw Error(T(331));var i=K;for(K|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Ss(8,c,s)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var d=c.sibling,g=c.return;if(u0(c),c===u){R=null;break}if(d!==null){d.return=g,R=d;break}R=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ss(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vl(9,a)}}catch(C){ce(a,a.return,C)}if(a===o){R=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,R=E;break e}R=a.return}}if(K=i,Qn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ol,t)}catch{}r=!0}return r}finally{Y=n,yt.transition=e}}return!1}function km(t,e,n){e=vi(n,e),e=Jv(t,e,1),t=Pn(t,e,1),e=Ye(),t!==null&&(mo(t,1,e),rt(t,e))}function ce(t,e,n){if(t.tag===3)km(t,t,n);else for(;e!==null;){if(e.tag===3){km(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){t=vi(n,t),t=Zv(e,t,1),e=Pn(e,t,1),t=Ye(),e!==null&&(mo(e,1,t),rt(e,t));break}}e=e.return}}function pI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(De&n)===n&&(_e===4||_e===3&&(De&130023424)===De&&500>fe()-Bd?cr(t,0):zd|=n),rt(t,e)}function w0(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=Ye();t=rn(t,e),t!==null&&(mo(t,e,n),rt(t,n))}function mI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),w0(t,n)}function gI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),w0(t,n)}var E0;E0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,rI(t,e,n);et=!!(t.flags&131072)}else et=!1,se&&e.flags&1048576&&Iv(e,Ga,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ta(t,e),t=e.pendingProps;var i=pi(e,qe.current);ii(e,n),i=Md(null,e,r,t,i,n);var s=Ud();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,Wa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dd(e),i.updater=jl,e.stateNode=i,i._reactInternals=e,ah(e,r,t,n),e=ch(null,e,r,!0,s,n)):(e.tag=0,se&&s&&Td(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ta(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vI(r),t=St(r,t),i){case 0:e=uh(null,e,r,t,n);break e;case 1:e=mm(null,e,r,t,n);break e;case 11:e=fm(null,e,r,t,n);break e;case 14:e=pm(null,e,r,St(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),uh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),mm(t,e,r,i,n);case 3:e:{if(r0(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Nv(t,e),Xa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(T(423)),e),e=gm(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(T(424)),e),e=gm(t,e,r,n,i);break e}else for(ot=Dn(e.stateNode.containerInfo.firstChild),at=e,se=!0,Tt=null,n=Dv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){e=sn(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return Pv(e),t===null&&ih(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zc(r,i)?o=null:s!==null&&Zc(r,s)&&(e.flags|=32),n0(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&ih(e),null;case 13:return i0(t,e,n);case 4:return Pd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gi(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),fm(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Qa,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!tt.current){e=sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Zt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ii(e,n),i=vt(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=St(r,e.pendingProps),i=St(r.type,i),pm(t,e,r,i,n);case 15:return e0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Ta(t,e),e.tag=1,nt(r)?(t=!0,Wa(e)):t=!1,ii(e,n),xv(e,r,i),ah(e,r,i,n),ch(null,e,r,!0,t,n);case 19:return s0(t,e,n);case 22:return t0(t,e,n)}throw Error(T(156,e.tag))};function _0(t,e){return Ky(t,e)}function yI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,n,r){return new yI(t,e,n,r)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vI(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===fd)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vr:return hr(n.children,i,s,e);case hd:o=8,i|=8;break;case Dc:return t=gt(12,n,e,i|2),t.elementType=Dc,t.lanes=s,t;case Pc:return t=gt(13,n,e,i),t.elementType=Pc,t.lanes=s,t;case Oc:return t=gt(19,n,e,i),t.elementType=Oc,t.lanes=s,t;case Ry:return Bl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ay:o=10;break e;case xy:o=9;break e;case dd:o=11;break e;case fd:o=14;break e;case gn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hr(t,e,n,r){return t=gt(7,t,r,e),t.lanes=n,t}function Bl(t,e,n,r){return t=gt(22,t,r,e),t.elementType=Ry,t.lanes=n,t.stateNode={isHidden:!1},t}function rc(t,e,n){return t=gt(6,t,null,e),t.lanes=n,t}function ic(t,e,n){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gd(t,e,n,r,i,s,o,a,l){return t=new wI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(s),t}function EI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S0(t){if(!t)return Bn;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(nt(n))return _v(t,n,e)}return e}function I0(t,e,n,r,i,s,o,a,l){return t=Gd(n,r,!0,t,i,s,o,a,l),t.context=S0(null),n=t.current,r=Ye(),i=Ln(n),s=Zt(r,i),s.callback=e??null,Pn(n,s,i),t.current.lanes=i,mo(t,i,r),rt(t,r),t}function Hl(t,e,n,r){var i=e.current,s=Ye(),o=Ln(i);return n=S0(n),e.context===null?e.context=n:e.pendingContext=n,e=Zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pn(i,e,o),t!==null&&(Nt(t,i,o,s),_a(t,i,o)),o}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qd(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function _I(){return null}var T0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yd(t){this._internalRoot=t}ql.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Hl(t,e,null,null)};ql.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Hl(null,t,null,null)}),e[nn]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vn.length&&e!==0&&e<vn[n].priority;n++);vn.splice(n,0,t),n===0&&nv(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function SI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=sl(o);s.call(u)}}var o=I0(e,r,t,0,null,!1,!1,"",Nm);return t._reactRootContainer=o,t[nn]=o.current,Fs(t.nodeType===8?t.parentNode:t),wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=sl(l);a.call(u)}}var l=Gd(t,0,!1,null,null,!1,!1,"",Nm);return t._reactRootContainer=l,t[nn]=l.current,Fs(t.nodeType===8?t.parentNode:t),wr(function(){Hl(e,l,n,r)}),l}function Kl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=sl(o);a.call(l)}}Hl(e,o,t,i)}else o=SI(n,e,t,i,r);return sl(o)}Jy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=as(e.pendingLanes);n!==0&&(gd(e,n|1),rt(e,fe()),!(K&6)&&(wi=fe()+500,Qn()))}break;case 13:wr(function(){var r=rn(t,1);if(r!==null){var i=Ye();Nt(r,t,1,i)}}),Qd(t,1)}};yd=function(t){if(t.tag===13){var e=rn(t,134217728);if(e!==null){var n=Ye();Nt(e,t,134217728,n)}Qd(t,134217728)}};Zy=function(t){if(t.tag===13){var e=Ln(t),n=rn(t,e);if(n!==null){var r=Ye();Nt(n,t,e,r)}Qd(t,e)}};ev=function(){return Y};tv=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Bc=function(t,e,n){switch(e){case"input":if(Mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ul(r);if(!i)throw Error(T(90));Py(r),Mc(r,i)}}}break;case"textarea":Ly(t,n);break;case"select":e=n.value,e!=null&&ei(t,!!n.multiple,e,!1)}};Vy=Hd;zy=wr;var II={usingClientEntryPoint:!1,Events:[yo,qr,Ul,jy,by,Hd]},ns={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},TI={bundleType:ns.bundleType,version:ns.version,rendererPackageName:ns.rendererPackageName,rendererConfig:ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qy(t),t===null?null:t.stateNode},findFiberByHostInstance:ns.findFiberByHostInstance||_I,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{Ol=ia.inject(TI),Ft=ia}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=II;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(T(200));return EI(t,e,null,n)};ct.createRoot=function(t,e){if(!Xd(t))throw Error(T(299));var n=!1,r="",i=T0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gd(t,1,!1,null,null,n,!1,r,i),t[nn]=e.current,Fs(t.nodeType===8?t.parentNode:t),new Yd(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=qy(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return wr(t)};ct.hydrate=function(t,e,n){if(!Wl(e))throw Error(T(200));return Kl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=T0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=I0(e,null,t,1,n??null,i,!1,s,o),t[nn]=e.current,Fs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ql(e)};ct.render=function(t,e,n){if(!Wl(e))throw Error(T(200));return Kl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(T(40));return t._reactRootContainer?(wr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[nn]=null})}),!0):!1};ct.unstable_batchedUpdates=Hd;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wl(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Kl(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function k0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k0)}catch(t){console.error(t)}}k0(),Iy.exports=ct;var kI=Iy.exports,Am=kI;xc.createRoot=Am.createRoot,xc.hydrateRoot=Am.hydrateRoot;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ks(){return Ks=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ks.apply(this,arguments)}var Cn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Cn||(Cn={}));const xm="popstate";function CI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Sh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ol(i)}return AI(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NI(){return Math.random().toString(36).substr(2,8)}function Rm(t,e){return{usr:t.state,key:t.key,idx:e}}function Sh(t,e,n,r){return n===void 0&&(n=null),Ks({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Oi(e):e,{state:n,key:e&&e.key||r||NI()})}function ol(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Oi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function AI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Cn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ks({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Cn.Pop;let I=c(),p=I==null?null:I-u;u=I,l&&l({action:a,location:y.location,delta:p})}function d(I,p){a=Cn.Push;let f=Sh(y.location,I,p);n&&n(f,I),u=c()+1;let m=Rm(f,u),E=y.createHref(f);try{o.pushState(m,"",E)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function g(I,p){a=Cn.Replace;let f=Sh(y.location,I,p);n&&n(f,I),u=c();let m=Rm(f,u),E=y.createHref(f);o.replaceState(m,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function v(I){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:ol(I);return pe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xm,h),l=I,()=>{i.removeEventListener(xm,h),l=null}},createHref(I){return e(i,I)},createURL:v,encodeLocation(I){let p=v(I);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(I){return o.go(I)}};return y}var Dm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dm||(Dm={}));function xI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Oi(e):e,i=Zd(r.pathname||"/",n);if(i==null)return null;let s=C0(t);RI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=jI(s[a],zI(i));return o}function C0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Mn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),C0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:UI(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of N0(s.path))i(s,o,l)}),e}function N0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=N0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function RI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const DI=/^:\w+$/,PI=3,OI=2,LI=1,$I=10,MI=-2,Pm=t=>t==="*";function UI(t,e){let n=t.split("/"),r=n.length;return n.some(Pm)&&(r+=MI),e&&(r+=OI),n.filter(i=>!Pm(i)).reduce((i,s)=>i+(DI.test(s)?PI:s===""?LI:$I),r)}function FI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=bI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Mn([i,c.pathname]),pathnameBase:WI(Mn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Mn([i,c.pathnameBase]))}return s}function bI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=BI(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function VI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function zI(t){try{return decodeURI(t)}catch(e){return Jd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function BI(t,e){try{return decodeURIComponent(t)}catch(n){return Jd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Zd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function HI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Oi(t):t;return{pathname:n?n.startsWith("/")?n:qI(n,e):e,search:KI(r),hash:GI(i)}}function qI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ef(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Oi(t):(i=Ks({},t),pe(!i.pathname||!i.pathname.includes("?"),sc("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),sc("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),sc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=HI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Mn=t=>t.join("/").replace(/\/\/+/g,"/"),WI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const A0=["post","put","patch","delete"];new Set(A0);const YI=["get",...A0];new Set(YI);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},al.apply(this,arguments)}const nf=S.createContext(null),x0=S.createContext(null),xr=S.createContext(null),Gl=S.createContext(null),dn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),R0=S.createContext(null);function XI(t,e){let{relative:n}=e===void 0?{}:e;Li()||pe(!1);let{basename:r,navigator:i}=S.useContext(xr),{hash:s,pathname:o,search:a}=rf(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Mn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Li(){return S.useContext(Gl)!=null}function Rr(){return Li()||pe(!1),S.useContext(Gl).location}function D0(t){S.useContext(xr).static||S.useLayoutEffect(t)}function Ql(){let{isDataRoute:t}=S.useContext(dn);return t?hT():JI()}function JI(){Li()||pe(!1);let t=S.useContext(nf),{basename:e,navigator:n}=S.useContext(xr),{matches:r}=S.useContext(dn),{pathname:i}=Rr(),s=JSON.stringify(ef(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return D0(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=tf(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Mn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function ZI(){let{matches:t}=S.useContext(dn),e=t[t.length-1];return e?e.params:{}}function rf(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(dn),{pathname:i}=Rr(),s=JSON.stringify(ef(r).map(o=>o.pathnameBase));return S.useMemo(()=>tf(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function eT(t,e){return tT(t,e)}function tT(t,e,n){Li()||pe(!1);let{navigator:r}=S.useContext(xr),{matches:i}=S.useContext(dn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Rr(),u;if(e){var c;let y=typeof e=="string"?Oi(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||pe(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=xI(t,{pathname:d}),v=oT(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Mn([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Mn([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?S.createElement(Gl.Provider,{value:{location:al({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Cn.Pop}},v):v}function nT(){let t=cT(),e=QI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const rT=S.createElement(nT,null);class iT extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(dn.Provider,{value:this.props.routeContext},S.createElement(R0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sT(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(nf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(dn.Provider,{value:e},r)}function oT(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||pe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||rT);let d=e.concat(s.slice(0,u+1)),g=()=>{let v;return c?v=h:l.route.Component?v=S.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,S.createElement(sT,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(iT,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var Ih;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Ih||(Ih={}));var Gs;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Gs||(Gs={}));function aT(t){let e=S.useContext(nf);return e||pe(!1),e}function lT(t){let e=S.useContext(x0);return e||pe(!1),e}function uT(t){let e=S.useContext(dn);return e||pe(!1),e}function P0(t){let e=uT(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function cT(){var t;let e=S.useContext(R0),n=lT(Gs.UseRouteError),r=P0(Gs.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function hT(){let{router:t}=aT(Ih.UseNavigateStable),e=P0(Gs.UseNavigateStable),n=S.useRef(!1);return D0(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,al({fromRouteId:e},s)))},[t,e])}function sa(t){let{to:e,replace:n,state:r,relative:i}=t;Li()||pe(!1);let{matches:s}=S.useContext(dn),{pathname:o}=Rr(),a=Ql(),l=tf(e,ef(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function qt(t){pe(!1)}function dT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Cn.Pop,navigator:s,static:o=!1}=t;Li()&&pe(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Oi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,v=S.useMemo(()=>{let y=Zd(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return v==null?null:S.createElement(xr.Provider,{value:l},S.createElement(Gl.Provider,{children:n,value:v}))}function fT(t){let{children:e,location:n}=t;return eT(Th(e),n)}var Om;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Om||(Om={}));new Promise(()=>{});function Th(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Th(r.props.children,s));return}r.type!==qt&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Th(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ll.apply(this,arguments)}function O0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function pT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mT(t,e){return t.button===0&&(!e||e==="_self")&&!pT(t)}const gT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],yT=["aria-current","caseSensitive","className","end","style","to","children"],vT="startTransition",Lm=m_[vT];function wT(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=CI({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(h=>{u&&Lm?Lm(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(dT,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const ET=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_T=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$i=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=O0(e,gT),{basename:d}=S.useContext(xr),g,v=!1;if(typeof u=="string"&&_T.test(u)&&(g=u,ET))try{let f=new URL(window.location.href),m=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=Zd(m.pathname,d);m.origin===f.origin&&E!=null?u=E+m.search+m.hash:v=!0}catch{}let y=XI(u,{relative:i}),I=ST(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||I(f)}return S.createElement("a",ll({},h,{href:g||y,onClick:v||s?r:p,ref:n,target:l}))}),er=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=O0(e,yT),h=rf(l,{relative:c.relative}),d=Rr(),g=S.useContext(x0),{navigator:v}=S.useContext(xr),y=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,I=d.pathname,p=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(I=I.toLowerCase(),p=p?p.toLowerCase():null,y=y.toLowerCase());let f=I===y||!o&&I.startsWith(y)&&I.charAt(y.length)==="/",m=p!=null&&(p===y||!o&&p.startsWith(y)&&p.charAt(y.length)==="/"),E=f?r:void 0,C;typeof s=="function"?C=s({isActive:f,isPending:m}):C=[s,f?"active":null,m?"pending":null].filter(Boolean).join(" ");let A=typeof a=="function"?a({isActive:f,isPending:m}):a;return S.createElement($i,ll({},c,{"aria-current":E,className:C,ref:n,style:A,to:l}),typeof u=="function"?u({isActive:f,isPending:m}):u)});var $m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})($m||($m={}));var Mm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mm||(Mm={}));function ST(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ql(),l=Rr(),u=rf(t,{relative:o});return S.useCallback(c=>{if(mT(c,n)){c.preventDefault();let h=r!==void 0?r:ol(l)===ol(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(L0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new TT;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kT=function(t){const e=L0(t);return $0.encodeByteArray(e,!0)},ul=function(t){return kT(t).replace(/\./g,"")},M0=function(t){try{return $0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=()=>CT().__FIREBASE_DEFAULTS__,AT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&M0(t[1]);return e&&JSON.parse(e)},sf=()=>{try{return NT()||AT()||xT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},U0=t=>{var e,n;return(n=(e=sf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RT=t=>{const e=U0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},F0=()=>{var t;return(t=sf())===null||t===void 0?void 0:t.config},j0=t=>{var e;return(e=sf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ul(JSON.stringify(n)),ul(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function LT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MT(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UT(){try{return typeof indexedDB=="object"}catch{return!1}}function FT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jT,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?bT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fn(i,a,r)}}function bT(t,e){return t.replace(VT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VT=/\{\$([^}]+)}/g;function zT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Um(s)&&Um(o)){if(!cl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Um(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function BT(t,e){const n=new HT(t,e);return n.subscribe.bind(n)}class HT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oc),i.error===void 0&&(i.error=oc),i.complete===void 0&&(i.complete=oc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GT(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KT(t){return t===rr?void 0:t}function GT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const YT={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},XT=G.INFO,JT={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},ZT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class of{constructor(e){this.name=e,this._logLevel=XT,this._logHandler=ZT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const ek=(t,e)=>e.some(n=>t instanceof n);let Fm,jm;function tk(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nk(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b0=new WeakMap,kh=new WeakMap,V0=new WeakMap,ac=new WeakMap,af=new WeakMap;function rk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&b0.set(n,t)}).catch(()=>{}),af.set(e,t),e}function ik(t){if(kh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kh.set(t,e)}let Ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||V0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sk(t){Ch=t(Ch)}function ok(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lc(this),e,...n);return V0.set(r,e.sort?e.sort():[e]),Un(r)}:nk().includes(t)?function(...e){return t.apply(lc(this),e),Un(b0.get(this))}:function(...e){return Un(t.apply(lc(this),e))}}function ak(t){return typeof t=="function"?ok(t):(t instanceof IDBTransaction&&ik(t),ek(t,tk())?new Proxy(t,Ch):t)}function Un(t){if(t instanceof IDBRequest)return rk(t);if(ac.has(t))return ac.get(t);const e=ak(t);return e!==t&&(ac.set(t,e),af.set(e,t)),e}const lc=t=>af.get(t);function lk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const uk=["get","getKey","getAll","getAllKeys","count"],ck=["put","add","delete","clear"],uc=new Map;function bm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ck.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return uc.set(e,s),s}sk(t=>({...t,get:(e,n,r)=>bm(e,n)||t.get(e,n,r),has:(e,n)=>!!bm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nh="@firebase/app",Vm="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new of("@firebase/app"),fk="@firebase/app-compat",pk="@firebase/analytics-compat",mk="@firebase/analytics",gk="@firebase/app-check-compat",yk="@firebase/app-check",vk="@firebase/auth",wk="@firebase/auth-compat",Ek="@firebase/database",_k="@firebase/database-compat",Sk="@firebase/functions",Ik="@firebase/functions-compat",Tk="@firebase/installations",kk="@firebase/installations-compat",Ck="@firebase/messaging",Nk="@firebase/messaging-compat",Ak="@firebase/performance",xk="@firebase/performance-compat",Rk="@firebase/remote-config",Dk="@firebase/remote-config-compat",Pk="@firebase/storage",Ok="@firebase/storage-compat",Lk="@firebase/firestore",$k="@firebase/firestore-compat",Mk="firebase",Uk="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="[DEFAULT]",Fk={[Nh]:"fire-core",[fk]:"fire-core-compat",[mk]:"fire-analytics",[pk]:"fire-analytics-compat",[yk]:"fire-app-check",[gk]:"fire-app-check-compat",[vk]:"fire-auth",[wk]:"fire-auth-compat",[Ek]:"fire-rtdb",[_k]:"fire-rtdb-compat",[Sk]:"fire-fn",[Ik]:"fire-fn-compat",[Tk]:"fire-iid",[kk]:"fire-iid-compat",[Ck]:"fire-fcm",[Nk]:"fire-fcm-compat",[Ak]:"fire-perf",[xk]:"fire-perf-compat",[Rk]:"fire-rc",[Dk]:"fire-rc-compat",[Pk]:"fire-gcs",[Ok]:"fire-gcs-compat",[Lk]:"fire-fst",[$k]:"fire-fst-compat","fire-js":"fire-js",[Mk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map,xh=new Map;function jk(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ei(t){const e=t.name;if(xh.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;xh.set(e,t);for(const n of hl.values())jk(n,t);return!0}function lf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fn=new wo("app","Firebase",bk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=Uk;function z0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ah,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=F0()),!n)throw Fn.create("no-options");const s=hl.get(i);if(s){if(cl(n,s.options)&&cl(r,s.config))return s;throw Fn.create("duplicate-app",{appName:i})}const o=new QT(i);for(const l of xh.values())o.addComponent(l);const a=new Vk(n,r,o);return hl.set(i,a),a}function B0(t=Ah){const e=hl.get(t);if(!e&&t===Ah&&F0())return z0();if(!e)throw Fn.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let i=(r=Fk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}Ei(new Er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="firebase-heartbeat-database",Bk=1,Qs="firebase-heartbeat-store";let cc=null;function H0(){return cc||(cc=lk(zk,Bk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qs)}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),cc}async function Hk(t){try{return await(await H0()).transaction(Qs).objectStore(Qs).get(q0(t))}catch(e){if(e instanceof fn)_r.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function zm(t,e){try{const r=(await H0()).transaction(Qs,"readwrite");await r.objectStore(Qs).put(e,q0(t)),await r.done}catch(n){if(n instanceof fn)_r.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(r.message)}}}function q0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=1024,Wk=30*24*60*60*1e3;class Kk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Wk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bm(),{heartbeatsToSend:n,unsentEntries:r}=Gk(this._heartbeatsCache.heartbeats),i=ul(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bm(){return new Date().toISOString().substring(0,10)}function Gk(t,e=qk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UT()?FT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hm(t){return ul(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){Ei(new Er("platform-logger",e=>new hk(e),"PRIVATE")),Ei(new Er("heartbeat",e=>new Kk(e),"PRIVATE")),jn(Nh,Vm,t),jn(Nh,Vm,"esm2017"),jn("fire-js","")}Yk("");function uf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function W0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xk=W0,K0=new wo("auth","Firebase",W0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new of("@firebase/auth");function Jk(t,...e){dl.logLevel<=G.WARN&&dl.warn(`Auth (${Mi}): ${t}`,...e)}function Aa(t,...e){dl.logLevel<=G.ERROR&&dl.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw cf(t,...e)}function bt(t,...e){return cf(t,...e)}function Zk(t,e,n){const r=Object.assign(Object.assign({},Xk()),{[e]:n});return new wo("auth","Firebase",r).create(e,{appName:t.name})}function cf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return K0.create(t,...e)}function M(t,e,...n){if(!t)throw cf(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function on(t,e){t||Yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eC(){return qm()==="http:"||qm()==="https:"}function qm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eC()||LT()||"connection"in navigator)?navigator.onLine:!0}function nC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=OT()||$T()}get(){return tC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new _o(3e4,6e4);function Ui(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dr(t,e,n,r,i={}){return Q0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),G0.fetch()(Y0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Q0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rC),e);try{const i=new sC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw oa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw oa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw oa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zk(t,c,u);xt(t,c)}}catch(i){if(i instanceof fn)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function So(t,e,n,r,i={}){const s=await Dr(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Y0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hf(t.config,i):`${t.config.apiScheme}://${i}`}class sC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),iC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e){return Dr(t,"POST","/v1/accounts:delete",e)}async function aC(t,e){return Dr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lC(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=df(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ks(hc(i.auth_time)),issuedAtTime:ks(hc(i.iat)),expirationTime:ks(hc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hc(t){return Number(t)*1e3}function df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=M0(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uC(t){const e=df(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&cC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _i(t,aC(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pC(s.providerUserInfo):[],a=fC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function dC(t){const e=Le(t);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pC(t){return t.map(e=>{var{providerId:n}=e,r=uf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e){const n=await Q0(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Y0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",G0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ys;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=uf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new X0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lC(this,e)}reload(){return dC(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _i(this,oC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:C,providerData:A,stsTokenManager:P}=n;M(m&&P,e,"internal-error");const L=Ys.fromJSON(this.name,P);M(typeof m=="string",e,"internal-error"),mn(h,e.name),mn(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof C=="boolean",e,"internal-error"),mn(g,e.name),mn(v,e.name),mn(y,e.name),mn(I,e.name),mn(p,e.name),mn(f,e.name);const J=new dr({uid:m,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:C,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:L,createdAt:p,lastLoginAt:f});return A&&Array.isArray(A)&&(J.providerData=A.map(B=>Object.assign({},B))),I&&(J._redirectEventId=I),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ys;i.updateFromServerResponse(n);const s=new dr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Map;function Xt(t){on(t instanceof Function,"Expected a class definition");let e=Wm.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}J0.type="NONE";const Km=J0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class oi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xa(this.userKey,i.apiKey,s),this.fullPersistenceKey=xa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new oi(Xt(Km),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xt(Km);const o=xa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=dr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new oi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new oi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rw(e))return"Blackberry";if(iw(e))return"Webos";if(ff(e))return"Safari";if((e.includes("chrome/")||ew(e))&&!e.includes("edge/"))return"Chrome";if(nw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Z0(t=We()){return/firefox\//i.test(t)}function ff(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ew(t=We()){return/crios\//i.test(t)}function tw(t=We()){return/iemobile/i.test(t)}function nw(t=We()){return/android/i.test(t)}function rw(t=We()){return/blackberry/i.test(t)}function iw(t=We()){return/webos/i.test(t)}function Yl(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gC(t=We()){var e;return Yl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yC(){return MT()&&document.documentMode===10}function sw(t=We()){return Yl(t)||nw(t)||iw(t)||rw(t)||/windows phone/i.test(t)||tw(t)}function vC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t,e=[]){let n;switch(t){case"Browser":n=Gm(We());break;case"Worker":n=`${Gm(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}async function aw(t,e){return Dr(t,"GET","/v2/recaptchaConfig",Ui(t,e))}function Qm(t){return t!==void 0&&t.enterprise!==void 0}class lw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function uw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wC().appendChild(r)})}function EC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _C="https://www.google.com/recaptcha/enterprise.js?render=",SC="recaptcha-enterprise",IC="NO_RECAPTCHA";class cw{constructor(e){this.type=SC,this.auth=Fi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{aw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new lw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Qm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(IC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Qm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}uw(_C+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function pl(t,e,n,r=!1){const i=new cw(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ym(this),this.idTokenSubscription=new Ym(this),this.beforeStateQueue=new TC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=K0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await oi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Le(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}async initializeRecaptchaConfig(){const e=await aw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new lw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new cw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await oi.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ow(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fi(t){return Le(t)}class Ym{constructor(e){this.auth=e,this.observer=null,this.addObserver=BT(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t,e){const n=lf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cl(s,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function NC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AC(t,e,n){const r=Fi(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=hw(e),{host:o,port:a}=xC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||RC()}function hw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xC(t){const e=hw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xm(o)}}}function Xm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function DC(t,e){return Dr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(t,e){return So(t,"POST","/v1/accounts:signInWithPassword",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",Ui(t,e))}async function OC(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends pf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await pl(e,r,"signInWithPassword");return dc(e,i)}else return dc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await pl(e,r,"signInWithPassword");return dc(e,s)}else return Promise.reject(i)});case"emailLink":return PC(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return DC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return OC(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e){return So(t,"POST","/v1/accounts:signInWithIdp",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="http://localhost";class Sr extends pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=uf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:LC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MC(t){const e=us(cs(t)).link,n=e?us(cs(e)).deep_link_id:null,r=us(cs(t)).deep_link_id;return(r?us(cs(r)).link:null)||r||n||e||t}class mf{constructor(e){var n,r,i,s,o,a;const l=us(cs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=$C((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MC(e);try{return new mf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.providerId=ji.PROVIDER_ID}static credential(e,n){return Xs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mf.parseLink(n);return M(r,"argument-error"),Xs._fromEmailAndCode(e,r.code,r.tenantId)}}ji.PROVIDER_ID="password";ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends dw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Io{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Io{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Io{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return In.credential(n,r)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(t,e){return So(t,"POST","/v1/accounts:signUp",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dr._fromIdTokenResponse(e,r,i),o=Jm(r);return new Ir({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jm(r);return new Ir({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ml(e,n,r,i)}}function fw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(t,s,e,r):s})}async function UC(t,e,n=!1){const r=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ir._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _i(t,fw(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=df(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Ir._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(t,e,n=!1){const r="signIn",i=await fw(t,r,e),s=await Ir._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jC(t,e){return pw(Fi(t),e)}async function bC(t,e,n){var r;const i=Fi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await pl(i,s,"signUpPassword");o=fc(i,u)}else o=fc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await pl(i,s,"signUpPassword");return fc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ir._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function VC(t,e,n){return jC(Le(t),ji.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e){return Dr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _i(r,zC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HC(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function qC(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function WC(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function KC(t){return Le(t).signOut()}const gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(){const t=We();return ff(t)||Yl(t)}const QC=1e3,YC=10;class gw extends mw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GC()&&vC(),this.fallbackToPolling=sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gw.type="LOCAL";const XC=gw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw extends mw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yw.type="SESSION";const vw=yw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await JC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=gf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function eN(t){Vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function tN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rN(){return ww()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="firebaseLocalStorageDb",iN=1,yl="firebaseLocalStorage",_w="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jl(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function sN(){const t=indexedDB.deleteDatabase(Ew);return new To(t).toPromise()}function Dh(){const t=indexedDB.open(Ew,iN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:_w})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await sN(),e(await Dh()))})})}async function Zm(t,e,n){const r=Jl(t,!0).put({[_w]:e,value:n});return new To(r).toPromise()}async function oN(t,e){const n=Jl(t,!1).get(e),r=await new To(n).toPromise();return r===void 0?null:r.value}function eg(t,e){const n=Jl(t,!0).delete(e);return new To(n).toPromise()}const aN=800,lN=3;class Sw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ww()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xl._getInstance(rN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tN(),!this.activeServiceWorker)return;this.sender=new ZC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dh();return await Zm(e,gl,"1"),await eg(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jl(i,!1).getAll();return new To(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sw.type="LOCAL";const uN=Sw;new _o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t,e){return e?Xt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hN(t){return pw(t.auth,new yf(t),t.bypassAuthState)}function dN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),FC(n,new yf(t),t.bypassAuthState)}async function fN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),UC(n,new yf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hN;case"linkViaPopup":case"linkViaRedirect":return fN;case"reauthViaPopup":case"reauthViaRedirect":return dN;default:xt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=new _o(2e3,1e4);class Jr extends Iw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pN.get())};e()}}Jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN="pendingRedirect",Ra=new Map;class gN extends Iw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await yN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yN(t,e){const n=EN(e),r=wN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vN(t,e){Ra.set(t._key(),e)}function wN(t){return Xt(t._redirectPersistence)}function EN(t){return xa(mN,t.config.apiKey,t.name)}async function _N(t,e,n=!1){const r=Fi(t),i=cN(r,e),o=await new gN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=10*60*1e3;class IN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SN&&this.cachedEventUids.clear(),this.cachedEventUids.has(tg(e))}saveEventToCache(e){this.cachedEventUids.add(tg(e)),this.lastProcessedEventTime=Date.now()}}function tg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(t,e={}){return Dr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NN=/^https?/;async function AN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kN(t);for(const n of e)try{if(xN(n))return}catch{}xt(t,"unauthorized-domain")}function xN(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NN.test(n))return!1;if(CN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=new _o(3e4,6e4);function ng(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DN(t){return new Promise((e,n)=>{var r,i,s;function o(){ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ng(),n(bt(t,"network-request-failed"))},timeout:RN.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vt().gapi)===null||s===void 0)&&s.load)o();else{const a=EC("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(bt(t,"network-request-failed"))},uw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Da=null,e})}let Da=null;function PN(t){return Da=Da||DN(t),Da}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=new _o(5e3,15e3),LN="__/auth/iframe",$N="emulator/auth/iframe",MN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FN(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hf(e,$N):`https://${t.config.authDomain}/${LN}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},i=UN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eo(r).slice(1)}`}async function jN(t){const e=await PN(t),n=Vt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:FN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=Vt().setTimeout(()=>{s(o)},ON.get());function l(){Vt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VN=500,zN=600,BN="_blank",HN="http://localhost";class rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qN(t,e,n,r=VN,i=zN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=We().toLowerCase();n&&(a=ew(u)?BN:n),Z0(u)&&(e=e||HN,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(gC(u)&&a!=="_self")return WN(e||"",a),new rg(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new rg(h)}function WN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="__/auth/handler",GN="emulator/auth/handler",QN=encodeURIComponent("fac");async function ig(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:i};if(e instanceof dw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Io){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${QN}=${encodeURIComponent(l)}`:"";return`${YN(t)}?${Eo(a).slice(1)}${u}`}function YN({config:t}){return t.emulator?hf(t,GN):`https://${t.authDomain}/${KN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="webStorageSupport";class XN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vw,this._completeRedirectFn=_N,this._overrideRedirectResult=vN}async _openPopup(e,n,r,i){var s;on((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ig(e,n,r,Rh(),i);return qN(e,o,gf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ig(e,n,r,Rh(),i);return eN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jN(e),r=new IN(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pc,{type:pc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pc];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sw()||ff()||Yl()}}const JN=XN;var sg="@firebase/auth",og="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tA(t){Ei(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ow(t)},u=new kC(r,i,s,l);return NC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ei(new Er("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(r=>new ZN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(sg,og,eA(t)),jn(sg,og,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=5*60,rA=j0("authIdTokenMaxAge")||nA;let ag=null;const iA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rA)return;const i=n==null?void 0:n.token;ag!==i&&(ag=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sA(t=B0()){const e=lf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CC(t,{popupRedirectResolver:JN,persistence:[uN,XC,vw]}),r=j0("authTokenSyncURL");if(r){const s=iA(r);qC(n,s,()=>s(n.currentUser)),HC(n,o=>s(o))}const i=U0("auth");return i&&AC(n,`http://${i}`),n}tA("Browser");var oA="firebase",aA="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(oA,aA,"app");var lA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,vf=vf||{},F=lA||self;function Zl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ko(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uA(t){return Object.prototype.hasOwnProperty.call(t,mc)&&t[mc]||(t[mc]=++cA)}var mc="closure_uid_"+(1e9*Math.random()>>>0),cA=0;function hA(t,e,n){return t.call.apply(t.bind,arguments)}function dA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ze=hA:ze=dA,ze.apply(null,arguments)}function aa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Yn(){this.s=this.s,this.o=this.o}var fA=0;Yn.prototype.s=!1;Yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fA!=0)&&uA(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function lg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var pA=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",()=>{},e),F.removeEventListener("test",()=>{},e)}catch{}return t}();function Js(t){return/^[\s\xa0]*$/.test(t)}function eu(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function $t(t){return eu().indexOf(t)!=-1}function Ef(t){return Ef[" "](t),t}Ef[" "]=function(){};function mA(t,e){var n=ax;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var gA=$t("Opera"),Si=$t("Trident")||$t("MSIE"),Cw=$t("Edge"),Ph=Cw||Si,Nw=$t("Gecko")&&!(eu().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge"))&&!($t("Trident")||$t("MSIE"))&&!$t("Edge"),yA=eu().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge");function Aw(){var t=F.document;return t?t.documentMode:void 0}var Oh;e:{var gc="",yc=function(){var t=eu();if(Nw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cw)return/Edge\/([\d\.]+)/.exec(t);if(Si)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yA)return/WebKit\/(\S+)/.exec(t);if(gA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yc&&(gc=yc?yc[1]:""),Si){var vc=Aw();if(vc!=null&&vc>parseFloat(gc)){Oh=String(vc);break e}}Oh=gc}var Lh;if(F.document&&Si){var ug=Aw();Lh=ug||parseInt(Oh,10)||void 0}else Lh=void 0;var vA=Lh;function Zs(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nw){e:{try{Ef(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zs.$.h.call(this)}}Ne(Zs,Be);var wA={2:"touch",3:"pen",4:"mouse"};Zs.prototype.h=function(){Zs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Co="closure_listenable_"+(1e6*Math.random()|0),EA=0;function _A(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++EA,this.fa=this.ia=!1}function tu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _f(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function SA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xw(t){const e={};for(const n in t)e[n]=t[n];return e}const cg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<cg.length;s++)n=cg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function nu(t){this.src=t,this.g={},this.h=0}nu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Mh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new _A(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function $h(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=kw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(tu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Mh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Sf="closure_lm_"+(1e6*Math.random()|0),wc={};function Dw(t,e,n,r,i){if(r&&r.once)return Ow(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Dw(t,e[s],n,r,i);return null}return n=kf(n),t&&t[Co]?t.O(e,n,ko(r)?!!r.capture:!!r,i):Pw(t,e,n,!1,r,i)}function Pw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ko(i)?!!i.capture:!!i,a=Tf(t);if(a||(t[Sf]=a=new nu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=IA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($w(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function IA(){function t(n){return e.call(t.src,t.listener,n)}const e=TA;return t}function Ow(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ow(t,e[s],n,r,i);return null}return n=kf(n),t&&t[Co]?t.P(e,n,ko(r)?!!r.capture:!!r,i):Pw(t,e,n,!0,r,i)}function Lw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Lw(t,e[s],n,r,i);else r=ko(r)?!!r.capture:!!r,n=kf(n),t&&t[Co]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Mh(s,n,r,i),-1<n&&(tu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Mh(e,n,r,i)),(n=-1<t?e[t]:null)&&If(n))}function If(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Co])$h(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($w(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tf(e))?($h(n,t),n.h==0&&(n.src=null,e[Sf]=null)):tu(t)}}}function $w(t){return t in wc?wc[t]:wc[t]="on"+t}function TA(t,e){if(t.fa)t=!0;else{e=new Zs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&If(t),t=n.call(r,e)}return t}function Tf(t){return t=t[Sf],t instanceof nu?t:null}var Ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function kf(t){return typeof t=="function"?t:(t[Ec]||(t[Ec]=function(e){return t.handleEvent(e)}),t[Ec])}function Ce(){Yn.call(this),this.i=new nu(this),this.S=this,this.J=null}Ne(Ce,Yn);Ce.prototype[Co]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){Lw(this,t,e,n,r)};function Pe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),Rw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=la(o,r,!0,e)&&i}if(o=e.g=t,i=la(o,r,!0,e)&&i,i=la(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=la(o,r,!1,e)&&i}Ce.prototype.N=function(){if(Ce.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tu(n[r]);delete t.g[e],t.h--}}this.J=null};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function la(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&$h(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Cf=F.JSON.stringify;class kA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function CA(){var t=Nf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NA{constructor(){this.h=this.g=null}add(e,n){const r=Mw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Mw=new kA(()=>new AA,t=>t.reset());class AA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function RA(t){F.setTimeout(()=>{throw t},0)}let eo,to=!1,Nf=new NA,Uw=()=>{const t=F.Promise.resolve(void 0);eo=()=>{t.then(DA)}};var DA=()=>{for(var t;t=CA();){try{t.h.call(t.g)}catch(n){RA(n)}var e=Mw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}to=!1};function ru(t,e){Ce.call(this),this.h=t||1,this.g=e||F,this.j=ze(this.qb,this),this.l=Date.now()}Ne(ru,Ce);N=ru.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pe(this,"tick"),this.ga&&(Af(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Af(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){ru.$.N.call(this),Af(this),delete this.g};function xf(t,e,n){if(typeof t=="function")n&&(t=ze(t,n));else if(t&&typeof t.handleEvent=="function")t=ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function Fw(t){t.g=xf(()=>{t.g=null,t.i&&(t.i=!1,Fw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PA extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fw(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function no(t){Yn.call(this),this.h=t,this.g={}}Ne(no,Yn);var hg=[];function jw(t,e,n,r){Array.isArray(n)||(n&&(hg[0]=n.toString()),n=hg);for(var i=0;i<n.length;i++){var s=Dw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function bw(t){_f(t.g,function(e,n){this.g.hasOwnProperty(n)&&If(e)},t),t.g={}}no.prototype.N=function(){no.$.N.call(this),bw(this)};no.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function iu(){this.g=!0}iu.prototype.Ea=function(){this.g=!1};function OA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function LA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Zr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MA(t,n)+(r?" "+r:"")})}function $A(t,e){t.info(function(){return"TIMEOUT: "+e})}iu.prototype.info=function(){};function MA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Cf(n)}catch{return e}}var Pr={},dg=null;function su(){return dg=dg||new Ce}Pr.Ta="serverreachability";function Vw(t){Be.call(this,Pr.Ta,t)}Ne(Vw,Be);function ro(t){const e=su();Pe(e,new Vw(e))}Pr.STAT_EVENT="statevent";function zw(t,e){Be.call(this,Pr.STAT_EVENT,t),this.stat=e}Ne(zw,Be);function Qe(t){const e=su();Pe(e,new zw(e,t))}Pr.Ua="timingevent";function Bw(t,e){Be.call(this,Pr.Ua,t),this.size=e}Ne(Bw,Be);function No(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var ou={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Hw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rf(){}Rf.prototype.h=null;function fg(t){return t.h||(t.h=t.i())}function qw(){}var Ao={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Df(){Be.call(this,"d")}Ne(Df,Be);function Pf(){Be.call(this,"c")}Ne(Pf,Be);var Uh;function au(){}Ne(au,Rf);au.prototype.g=function(){return new XMLHttpRequest};au.prototype.i=function(){return{}};Uh=new au;function xo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new no(this),this.P=UA,t=Ph?125:void 0,this.V=new ru(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ww}function Ww(){this.i=null,this.g="",this.h=!1}var UA=45e3,Fh={},vl={};N=xo.prototype;N.setTimeout=function(t){this.P=t};function jh(t,e,n){t.L=1,t.v=uu(an(e)),t.s=n,t.S=!0,Kw(t,null)}function Kw(t,e){t.G=Date.now(),Ro(t),t.A=an(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),t1(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ww,t.g=S1(t.l,n?e:null,!t.s),0<t.O&&(t.M=new PA(ze(t.Pa,t,t.g),t.O)),jw(t.U,t.g,"readystatechange",t.nb),e=t.I?xw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ro(),OA(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&Mt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=Mt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Ph||this.g&&(this.h.h||this.g.ja()||yg(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ro(3):ro(2)),lu(this);var n=this.g.da();this.ca=n;t:if(Gw(this)){var r=yg(this.g);t="";var i=r.length,s=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),Cs(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,LA(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Js(a)){var u=a;break t}}u=null}if(n=u)Zr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bh(this,n);else{this.i=!1,this.o=3,Qe(12),ar(this),Cs(this);break e}}this.S?(Qw(this,c,o),Ph&&this.i&&c==3&&(jw(this.U,this.V,"tick",this.mb),this.V.start())):(Zr(this.j,this.m,o,null),bh(this,o)),c==4&&ar(this),this.i&&!this.J&&(c==4?v1(this.l,this):(this.i=!1,Ro(this)))}else ix(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),ar(this),Cs(this)}}}catch{}finally{}};function Gw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Qw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=FA(t,n),i==vl){e==4&&(t.o=4,Qe(14),r=!1),Zr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Fh){t.o=4,Qe(15),Zr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Zr(t.j,t.m,i,null),bh(t,i);Gw(t)&&i!=vl&&i!=Fh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ff(e),e.M=!0,Qe(11))):(Zr(t.j,t.m,n,"[Invalid Chunked Response]"),ar(t),Cs(t))}N.mb=function(){if(this.g){var t=Mt(this.g),e=this.g.ja();this.C<e.length&&(lu(this),Qw(this,t,e),this.i&&t!=4&&Ro(this))}};function FA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?vl:(n=Number(e.substring(n,r)),isNaN(n)?Fh:(r+=1,r+n>e.length?vl:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,ar(this)};function Ro(t){t.Y=Date.now()+t.P,Yw(t,t.P)}function Yw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=No(ze(t.lb,t),e)}function lu(t){t.B&&(F.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($A(this.j,this.A),this.L!=2&&(ro(),Qe(17)),ar(this),this.o=2,Cs(this)):Yw(this,this.Y-t)};function Cs(t){t.l.H==0||t.J||v1(t.l,t)}function ar(t){lu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Af(t.V),bw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function bh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Vh(n.i,t))){if(!t.K&&Vh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)_l(n),du(n);else break e;Uf(n),Qe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=No(ze(n.ib,n),6e3));if(1>=i1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else lr(n,11)}else if((t.K||n.g==t)&&_l(n),!Js(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Of(s,s.h),s.h=null))}if(r.F){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,te(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=_1(r,r.J?r.pa:null,r.Y),o.K){s1(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(lu(a),Ro(a)),r.g=o}else g1(r);0<n.j.length&&fu(n)}else u[0]!="stop"&&u[0]!="close"||lr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?lr(n,7):Mf(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ro(4)}catch{}}function jA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function bA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Xw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bA(t),r=jA(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Jw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof fr){this.h=t.h,wl(this,t.j),this.s=t.s,this.g=t.g,El(this,t.m),this.l=t.l;var e=t.i,n=new io;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),pg(this,n),this.o=t.o}else t&&(e=String(t).match(Jw))?(this.h=!1,wl(this,e[1]||"",!0),this.s=hs(e[2]||""),this.g=hs(e[3]||"",!0),El(this,e[4]),this.l=hs(e[5]||"",!0),pg(this,e[6]||"",!0),this.o=hs(e[7]||"")):(this.h=!1,this.i=new io(null,this.h))}fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ds(e,mg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ds(e,mg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ds(n,n.charAt(0)=="/"?HA:BA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ds(n,WA)),t.join("")};function an(t){return new fr(t)}function wl(t,e,n){t.j=n?hs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function El(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pg(t,e,n){e instanceof io?(t.i=e,KA(t.i,t.h)):(n||(e=ds(e,qA)),t.i=new io(e,t.h))}function te(t,e,n){t.i.set(e,n)}function uu(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ds(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mg=/[#\/\?@]/g,BA=/[#\?:]/g,HA=/[#\?]/g,qA=/[#\?@]/g,WA=/#/g;function io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&VA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=io.prototype;N.add=function(t,e){Xn(this),this.i=null,t=bi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zw(t,e){Xn(t),e=bi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function e1(t,e){return Xn(t),e=bi(t,e),t.g.has(e)}N.forEach=function(t,e){Xn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){Xn(this);let e=[];if(typeof t=="string")e1(this,t)&&(e=e.concat(this.g.get(bi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Xn(this),this.i=null,t=bi(this,t),e1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function t1(t,e,n){Zw(t,e),0<n.length&&(t.i=null,t.g.set(bi(t,e),wf(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function bi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KA(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Zw(this,r),t1(this,i,n))},t)),t.j=e}var GA=class{constructor(t,e){this.g=t,this.map=e}};function n1(t){this.l=t||QA,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QA=10;function r1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function i1(t){return t.h?1:t.g?t.g.size:0}function Vh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Of(t,e){t.g?t.g.add(e):t.h=e}function s1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}n1.prototype.cancel=function(){if(this.i=o1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function o1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return wf(t.i)}var YA=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function XA(){this.g=new YA}function JA(t,e,n){const r=n||"";try{Xw(t,function(i,s){let o=i;ko(i)&&(o=Cf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZA(t,e){const n=new iu;if(F.Image){const r=new Image;r.onload=aa(ua,n,r,"TestLoadImage: loaded",!0,e),r.onerror=aa(ua,n,r,"TestLoadImage: error",!1,e),r.onabort=aa(ua,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=aa(ua,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ua(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Do(t){this.l=t.fc||null,this.j=t.ob||!1}Ne(Do,Rf);Do.prototype.g=function(){return new cu(this.l,this.j)};Do.prototype.i=function(t){return function(){return t}}({});function cu(t,e){Ce.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Lf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(cu,Ce);var Lf=0;N=cu.prototype;N.open=function(t,e){if(this.readyState!=Lf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,so(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Po(this)),this.readyState=Lf};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,so(this)),this.g&&(this.readyState=3,so(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;a1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function a1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Po(this):so(this),this.readyState==3&&a1(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Po(this))};N.Ya=function(t){this.g&&(this.response=t,Po(this))};N.ka=function(){this.g&&Po(this)};function Po(t){t.readyState=4,t.l=null,t.j=null,t.A=null,so(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function so(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ex=F.JSON.parse;function he(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=l1,this.L=this.M=!1}Ne(he,Ce);var l1="",tx=/^https?$/i,nx=["POST","PUT"];N=he.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Uh.g(),this.C=this.u?fg(this.u):fg(Uh),this.g.onreadystatechange=ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){gg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=kw(nx,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{h1(this),0<this.B&&((this.L=rx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ze(this.ua,this)):this.A=xf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){gg(this,s)}};function rx(t){return Si&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof vf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function gg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,u1(t),hu(t)}function u1(t){t.F||(t.F=!0,Pe(t,"complete"),Pe(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),hu(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hu(this,!0)),he.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?c1(this):this.kb())};N.kb=function(){c1(this)};function c1(t){if(t.h&&typeof vf<"u"&&(!t.C[1]||Mt(t)!=4||t.da()!=2)){if(t.v&&Mt(t)==4)xf(t.La,0,t);else if(Pe(t,"readystatechange"),Mt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Jw)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!tx.test(i?i.toLowerCase():"")}n=r}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var s=2<Mt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",u1(t)}}finally{hu(t)}}}}function hu(t,e){if(t.g){h1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=r}catch{}}}function h1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Mt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ex(e)}};function yg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case l1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ix(t){const e={};t=(t.g&&2<=Mt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Js(t[r]))continue;var n=xA(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}SA(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function d1(t){let e="";return _f(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $f(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=d1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function f1(t){this.Ga=0,this.j=[],this.l=new iu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rs("baseRetryDelayMs",5e3,t),this.hb=rs("retryDelaySeedMs",1e4,t),this.eb=rs("forwardChannelMaxRetries",2,t),this.xa=rs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new n1(t&&t.concurrentRequestLimit),this.Ja=new XA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=f1.prototype;N.ra=8;N.H=1;function Mf(t){if(p1(t),t.H==3){var e=t.W++,n=an(t.I);if(te(n,"SID",t.K),te(n,"RID",e),te(n,"TYPE","terminate"),Oo(t,n),e=new xo(t,t.l,e),e.L=2,e.v=uu(an(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=S1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ro(e)}E1(t)}function du(t){t.g&&(Ff(t),t.g.cancel(),t.g=null)}function p1(t){du(t),t.u&&(F.clearTimeout(t.u),t.u=null),_l(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function fu(t){if(!r1(t.i)&&!t.m){t.m=!0;var e=t.Na;eo||Uw(),to||(eo(),to=!0),Nf.add(e,t),t.C=0}}function sx(t,e){return i1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=No(ze(t.Na,t,e),w1(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new xo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=xw(s),Rw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=m1(this,i,e),n=an(this.I),te(n,"RID",t),te(n,"CVER",22),this.F&&te(n,"X-HTTP-Session-Id",this.F),Oo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(d1(s)))+"&"+e:this.o&&$f(n,this.o,s)),Of(this.i,i),this.bb&&te(n,"TYPE","init"),this.P?(te(n,"$req",e),te(n,"SID","null"),i.aa=!0,jh(i,n,null)):jh(i,n,e),this.H=2}}else this.H==3&&(t?vg(this,t):this.j.length==0||r1(this.i)||vg(this))};function vg(t,e){var n;e?n=e.m:n=t.W++;const r=an(t.I);te(r,"SID",t.K),te(r,"RID",n),te(r,"AID",t.V),Oo(t,r),t.o&&t.s&&$f(r,t.o,t.s),n=new xo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=m1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Of(t.i,n),jh(n,r,e)}function Oo(t,e){t.na&&_f(t.na,function(n,r){te(e,r,n)}),t.h&&Xw({},function(n,r){te(e,r,n)})}function m1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ze(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{JA(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function g1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;eo||Uw(),to||(eo(),to=!0),Nf.add(e,t),t.A=0}}function Uf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=No(ze(t.Ma,t),w1(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,y1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=No(ze(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qe(10),du(this),y1(this))};function Ff(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function y1(t){t.g=new xo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=an(t.wa);te(e,"RID","rpc"),te(e,"SID",t.K),te(e,"AID",t.V),te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&te(e,"TO",t.qa),te(e,"TYPE","xmlhttp"),Oo(t,e),t.o&&t.s&&$f(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=uu(an(e)),n.s=null,n.S=!0,Kw(n,t)}N.ib=function(){this.v!=null&&(this.v=null,du(this),Uf(this),Qe(19))};function _l(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function v1(t,e){var n=null;if(t.g==e){_l(t),Ff(t),t.g=null;var r=2}else if(Vh(t.i,e))n=e.F,s1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=su(),Pe(r,new Bw(r,n)),fu(t)}else g1(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&sx(t,e)||r==2&&Uf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:lr(t,5);break;case 4:lr(t,10);break;case 3:lr(t,6);break;default:lr(t,2)}}}function w1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function lr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ze(t.pb,t);n||(n=new fr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||wl(n,"https"),uu(n)),ZA(n.toString(),r)}else Qe(2);t.H=0,t.h&&t.h.za(e),E1(t),p1(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Qe(2)):(this.l.info("Failed to ping google.com"),Qe(1))};function E1(t){if(t.H=0,t.ma=[],t.h){const e=o1(t.i);(e.length!=0||t.j.length!=0)&&(lg(t.ma,e),lg(t.ma,t.j),t.i.i.length=0,wf(t.j),t.j.length=0),t.h.ya()}}function _1(t,e,n){var r=n instanceof fr?an(n):new fr(n);if(r.g!="")e&&(r.g=e+"."+r.g),El(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new fr(null);r&&wl(s,r),e&&(s.g=e),i&&El(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&te(r,n,e),te(r,"VER",t.ra),Oo(t,r),r}function S1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new he(new Do({ob:!0})):new he(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function I1(){}N=I1.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Sl(){if(Si&&!(10<=Number(vA)))throw Error("Environmental error: no available transport.")}Sl.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Ce.call(this),this.g=new f1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Js(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Js(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vi(this)}Ne(ut,Ce);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Qe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=_1(t,null,t.Y),fu(t)};ut.prototype.close=function(){Mf(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Cf(t),t=n);e.j.push(new GA(e.fb++,t)),e.H==3&&fu(e)};ut.prototype.N=function(){this.g.h=null,delete this.j,Mf(this.g),delete this.g,ut.$.N.call(this)};function T1(t){Df.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(T1,Df);function k1(){Pf.call(this),this.status=1}Ne(k1,Pf);function Vi(t){this.g=t}Ne(Vi,I1);Vi.prototype.Ba=function(){Pe(this.g,"a")};Vi.prototype.Aa=function(t){Pe(this.g,new T1(t))};Vi.prototype.za=function(t){Pe(this.g,new k1)};Vi.prototype.ya=function(){Pe(this.g,"b")};function ox(){this.blockSize=-1}function Rt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ne(Rt,ox);Rt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _c(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Rt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)_c(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){_c(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){_c(this,r),i=0;break}}this.h=i,this.i+=e};Rt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function X(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var ax={};function jf(t){return-128<=t&&128>t?mA(t,function(e){return new X([e|0],0>e?-1:0)}):new X([t|0],0>t?-1:0)}function Ut(t){if(isNaN(t)||!isFinite(t))return li;if(0>t)return Re(Ut(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=zh;return new X(e,0)}function C1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Re(C1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ut(Math.pow(e,8)),r=li,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ut(Math.pow(e,s)),r=r.R(s).add(Ut(o))):(r=r.R(n),r=r.add(Ut(o)))}return r}var zh=4294967296,li=jf(0),Bh=jf(1),wg=jf(16777216);N=X.prototype;N.ea=function(){if(pt(this))return-Re(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:zh+r)*e,e*=zh}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jt(this))return"0";if(pt(this))return"-"+Re(this).toString(t);for(var e=Ut(Math.pow(t,6)),n=this,r="";;){var i=Tl(n,e).g;n=Il(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Jt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pt(t){return t.h==-1}N.X=function(t){return t=Il(this,t),pt(t)?-1:Jt(t)?0:1};function Re(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new X(n,~t.h).add(Bh)}N.abs=function(){return pt(this)?Re(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new X(n,n[n.length-1]&-2147483648?-1:0)};function Il(t,e){return t.add(Re(e))}N.R=function(t){if(Jt(this)||Jt(t))return li;if(pt(this))return pt(t)?Re(this).R(Re(t)):Re(Re(this).R(t));if(pt(t))return Re(this.R(Re(t)));if(0>this.X(wg)&&0>t.X(wg))return Ut(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ca(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ca(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ca(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ca(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new X(n,0)};function ca(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function is(t,e){this.g=t,this.h=e}function Tl(t,e){if(Jt(e))throw Error("division by zero");if(Jt(t))return new is(li,li);if(pt(t))return e=Tl(Re(t),e),new is(Re(e.g),Re(e.h));if(pt(e))return e=Tl(t,Re(e)),new is(Re(e.g),e.h);if(30<t.g.length){if(pt(t)||pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Bh,r=e;0>=r.X(t);)n=Eg(n),r=Eg(r);var i=Ur(n,1),s=Ur(r,1);for(r=Ur(r,2),n=Ur(n,2);!Jt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ur(r,1),n=Ur(n,1)}return e=Il(t,i.R(e)),new is(i,e)}for(i=li;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ut(n),o=s.R(e);pt(o)||0<o.X(t);)n-=r,s=Ut(n),o=s.R(e);Jt(s)&&(s=Bh),i=i.add(s),t=Il(t,o)}return new is(i,t)}N.gb=function(t){return Tl(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new X(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new X(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new X(n,this.h^t.h)};function Eg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new X(n,t.h)}function Ur(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new X(i,t.h)}Sl.prototype.createWebChannel=Sl.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;ou.NO_ERROR=0;ou.TIMEOUT=8;ou.HTTP_ERROR=6;Hw.COMPLETE="complete";qw.EventType=Ao;Ao.OPEN="a";Ao.CLOSE="b";Ao.ERROR="c";Ao.MESSAGE="d";Ce.prototype.listen=Ce.prototype.O;he.prototype.listenOnce=he.prototype.P;he.prototype.getLastError=he.prototype.Sa;he.prototype.getLastErrorCode=he.prototype.Ia;he.prototype.getStatus=he.prototype.da;he.prototype.getResponseJson=he.prototype.Wa;he.prototype.getResponseText=he.prototype.ja;he.prototype.send=he.prototype.ha;he.prototype.setWithCredentials=he.prototype.Oa;Rt.prototype.digest=Rt.prototype.l;Rt.prototype.reset=Rt.prototype.reset;Rt.prototype.update=Rt.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=Ut;X.fromString=C1;var lx=function(){return new Sl},ux=function(){return su()},Sc=ou,cx=Hw,hx=Pr,_g={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},dx=Do,ha=qw,fx=he,px=Rt,ui=X;const Sg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new of("@firebase/firestore");function Ig(){return Tr.logLevel}function O(t,...e){if(Tr.logLevel<=G.DEBUG){const n=e.map(bf);Tr.debug(`Firestore (${zi}): ${t}`,...n)}}function ln(t,...e){if(Tr.logLevel<=G.ERROR){const n=e.map(bf);Tr.error(`Firestore (${zi}): ${t}`,...n)}}function Ii(t,...e){if(Tr.logLevel<=G.WARN){const n=e.map(bf);Tr.warn(`Firestore (${zi}): ${t}`,...n)}}function bf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: `+t;throw ln(e),new Error(e)}function ie(t,e){t||U()}function b(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class gx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yx{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new N1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Fe(e)}}class vx{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class wx{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new vx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ex{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _x{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.T=n.token,new Ex(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Sx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function Ti(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new we(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new we(0,0))}static max(){return new j(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends oo{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const Ix=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends oo{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return Ix.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ne.fromString(e))}static fromName(e){return new $(ne.fromString(e).popFirst(5))}static empty(){return new $(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ne(e.slice()))}}function Tx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Hn(i,$.empty(),e)}function kx(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(j.min(),$.empty(),-1)}static max(){return new Hn(j.max(),$.empty(),-1)}}function Cx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ax{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==Nx)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $o(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Vf.ct=-1;function pu(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function xx(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new da(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new da(this.root,e,this.comparator,!1)}getReverseIterator(){return new da(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new da(this.root,e,this.comparator,!0)}}class da{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??xe.EMPTY,this.right=s??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kg(this.data.getIterator())}getIteratorFrom(e){return new kg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class kg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new kt([])}unionWith(e){let n=new He(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new R1("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const Rx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(ie(!!t),typeof t=="string"){let e=0;const n=Rx.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bf(t){const e=t.mapValue.fields.__previous_value__;return zf(e)?Bf(e):e}function ao(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zf(t)?4:Px(t)?9007199254740991:10:U()}function Bt(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ao(t).isEqual(ao(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=qn(r.timestampValue),o=qn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return kr(r.bytesValue).isEqual(kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ge(r.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(r.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ge(r.integerValue)===ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ge(r.doubleValue),o=ge(i.doubleValue);return s===o?kl(s)===kl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Tg(s)!==Tg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Bt(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function uo(t,e){return(t.values||[]).find(n=>Bt(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ge(i.integerValue||i.doubleValue),a=ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cg(t.timestampValue,e.timestampValue);case 4:return Cg(ao(t),ao(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=kr(i),a=kr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(ge(i.latitude),ge(s.latitude));return o!==0?o:Q(ge(i.longitude),ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ki(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===fa.mapValue&&s===fa.mapValue)return 0;if(i===fa.mapValue)return 1;if(s===fa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=ki(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function Cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=qn(t),r=qn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Ci(t){return Hh(t)}function Hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=qn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?kr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Hh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Hh(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function Ng(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qh(t){return!!t&&"integerValue"in t}function Hf(t){return!!t&&"arrayValue"in t}function Ag(t){return!!t&&"nullValue"in t}function xg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pa(t){return!!t&&"mapValue"in t}function Ns(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ns(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ns(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Px(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ns(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ns(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(Ns(this.value))}}function D1(t){const e=[];return Bi(t.fields,(n,r)=>{const i=new Ve([n]);if(Pa(r)){const s=D1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,j.min(),j.min(),j.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new be(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new be(e,2,n,j.min(),j.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new be(e,3,n,j.min(),j.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.position=e,this.inclusive=n}}function Rg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ox(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{}class ve extends P1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $x(e,n,r):n==="array-contains"?new Fx(e,r):n==="in"?new jx(e,r):n==="not-in"?new bx(e,r):n==="array-contains-any"?new Vx(e,r):new ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Mx(e,r):new Ux(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ki(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dt extends P1{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Dt(e,n)}matches(e){return O1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function O1(t){return t.op==="and"}function L1(t){return Lx(t)&&O1(t)}function Lx(t){for(const e of t.filters)if(e instanceof Dt)return!1;return!0}function Wh(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+Ci(t.value);if(L1(t))return t.filters.map(e=>Wh(e)).join(",");{const e=t.filters.map(n=>Wh(n)).join(",");return`${t.op}(${e})`}}function $1(t,e){return t instanceof ve?function(n,r){return r instanceof ve&&n.op===r.op&&n.field.isEqual(r.field)&&Bt(n.value,r.value)}(t,e):t instanceof Dt?function(n,r){return r instanceof Dt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&$1(s,r.filters[o]),!0):!1}(t,e):void U()}function M1(t){return t instanceof ve?function(e){return`${e.field.canonicalString()} ${e.op} ${Ci(e.value)}`}(t):t instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(M1).join(" ,")+"}"}(t):"Filter"}class $x extends ve{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mx extends ve{constructor(e,n){super(e,"in",n),this.keys=U1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ux extends ve{constructor(e,n){super(e,"not-in",n),this.keys=U1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function U1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class Fx extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hf(n)&&uo(n.arrayValue,this.value)}}class jx extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uo(this.value.arrayValue,n)}}class bx extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uo(this.value.arrayValue,n)}}class Vx extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Pg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new zx(t,e,n,r,i,s,o)}function qf(t){const e=b(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ci(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ci(r)).join(",")),e.dt=n}return e.dt}function Wf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ox(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dg(t.startAt,e.startAt)&&Dg(t.endAt,e.endAt)}function Kh(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function Bx(t,e,n,r,i,s,o,a){return new Hi(t,e,n,r,i,s,o,a)}function mu(t){return new Hi(t)}function Og(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function F1(t){return t.collectionGroup!==null}function hi(t){const e=b(t);if(e.wt===null){e.wt=[];const n=gu(e),r=Kf(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new ci(n)),e.wt.push(new ci(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ci(Ve.keyField(),s))}}}return e.wt}function un(t){const e=b(t);if(!e._t)if(e.limitType==="F")e._t=Pg(e.path,e.collectionGroup,hi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of hi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ci(s.field,o))}const r=e.endAt?new Cl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Cl(e.startAt.position,e.startAt.inclusive):null;e._t=Pg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Gh(t,e){e.getFirstInequalityField(),gu(t);const n=t.filters.concat([e]);return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qh(t,e,n){return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yu(t,e){return Wf(un(t),un(e))&&t.limitType===e.limitType}function j1(t){return`${qf(un(t))}|lt:${t.limitType}`}function Yh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>M1(r)).join(", ")}]`),pu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ci(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ci(r)).join(",")),`Target(${n})`}(un(t))}; limitType=${t.limitType})`}function vu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of hi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Rg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,hi(n),r)||n.endAt&&!function(i,s,o){const a=Rg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,hi(n),r))}(t,e)}function Hx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function b1(t){return(e,n)=>{let r=!1;for(const i of hi(t)){const s=qx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qx(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ki(a,l):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return x1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new ue($.comparator);function cn(){return Wx}const V1=new ue($.comparator);function fs(...t){let e=V1;for(const n of t)e=e.insert(n.key,n);return e}function z1(t){let e=V1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ur(){return As()}function B1(){return As()}function As(){return new qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Kx=new ue($.comparator),Gx=new He($.comparator);function H(...t){let e=Gx;for(const n of t)e=e.add(n);return e}const Qx=new He(Q);function Yx(){return Qx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function q1(t){return{integerValue:""+t}}function Xx(t,e){return xx(e)?q1(e):H1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this._=void 0}}function Jx(t,e,n){return t instanceof Nl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&zf(i)&&(i=Bf(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof co?K1(t,e):t instanceof ho?G1(t,e):function(r,i){const s=W1(r,i),o=Lg(s)+Lg(r.gt);return qh(s)&&qh(r.gt)?q1(o):H1(r.serializer,o)}(t,e)}function Zx(t,e,n){return t instanceof co?K1(t,e):t instanceof ho?G1(t,e):n}function W1(t,e){return t instanceof Al?qh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Nl extends wu{}class co extends wu{constructor(e){super(),this.elements=e}}function K1(t,e){const n=Q1(e);for(const r of t.elements)n.some(i=>Bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ho extends wu{constructor(e){super(),this.elements=e}}function G1(t,e){let n=Q1(e);for(const r of t.elements)n=n.filter(i=>!Bt(i,r));return{arrayValue:{values:n}}}class Al extends wu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Lg(t){return ge(t.integerValue||t.doubleValue)}function Q1(t){return Hf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof co&&r instanceof co||n instanceof ho&&r instanceof ho?Ti(n.elements,r.elements,Bt):n instanceof Al&&r instanceof Al?Bt(n.gt,r.gt):n instanceof Nl&&r instanceof Nl}(t.transform,e.transform)}class tR{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eu{}function Y1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new J1(t.key,en.none()):new Mo(t.key,t.data,en.none());{const n=t.data,r=mt.empty();let i=new He(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new kt(i.toArray()),en.none())}}function nR(t,e,n){t instanceof Mo?function(r,i,s){const o=r.value.clone(),a=Mg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(r,i,s){if(!Oa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Mg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(X1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function xs(t,e,n,r){return t instanceof Mo?function(i,s,o,a){if(!Oa(i.precondition,s))return o;const l=i.value.clone(),u=Ug(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(i,s,o,a){if(!Oa(i.precondition,s))return o;const l=Ug(i.fieldTransforms,a,s),u=s.data;return u.setAll(X1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Oa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function rR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=W1(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function $g(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ti(n,r,(i,s)=>eR(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mo extends Eu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Eu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function X1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mg(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Zx(o,a,n[i]))}return r}function Ug(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Jx(s,o,e))}return r}class J1 extends Eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iR extends Eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=B1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Y1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,(n,r)=>$g(n,r))&&Ti(this.baseMutations,e.baseMutations,(n,r)=>$g(n,r))}}class Gf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=Kx;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,W;function lR(t){switch(t){default:return U();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Z1(t){if(t===void 0)return ln("GRPC error has no .code"),_.UNKNOWN;switch(t){case me.OK:return _.OK;case me.CANCELLED:return _.CANCELLED;case me.UNKNOWN:return _.UNKNOWN;case me.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case me.INTERNAL:return _.INTERNAL;case me.UNAVAILABLE:return _.UNAVAILABLE;case me.UNAUTHENTICATED:return _.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case me.NOT_FOUND:return _.NOT_FOUND;case me.ALREADY_EXISTS:return _.ALREADY_EXISTS;case me.PERMISSION_DENIED:return _.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case me.ABORTED:return _.ABORTED;case me.OUT_OF_RANGE:return _.OUT_OF_RANGE;case me.UNIMPLEMENTED:return _.UNIMPLEMENTED;case me.DATA_LOSS:return _.DATA_LOSS;default:return U()}}(W=me||(me={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return pa}static getOrCreateInstance(){return pa===null&&(pa=new Qf),pa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let pa=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new ui([4294967295,4294967295],0);function Fg(t){const e=uR().encode(t),n=new px;return n.update(e),new Uint8Array(n.digest())}function jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ui([n,r],0),new ui([i,s],0)]}class Yf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ps(`Invalid padding: ${n}`);if(r<0)throw new ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ps(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ps(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ui.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(ui.fromNumber(r)));return i.compare(cR)===1&&(i=new ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Fg(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Yf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Fg(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _u(j.min(),i,new ue(Q),cn(),H())}}class Uo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class eE{constructor(e,n){this.targetId=e,this.Vt=n}}class tE{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bg{constructor(){this.St=0,this.Dt=zg(),this.Ct=Ke.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=H(),n=H(),r=H();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new Uo(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=zg()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class hR{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=cn(),this.zt=Vg(),this.Wt=new ue(Q)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Kh(o))if(i===0){const a=new $(o.path);this.Yt(r,a,be.newNoDocument(a,j.min()))}else ie(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Qf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,g,v,y,I,p;const f={localCacheCount:c,existenceFilterCount:h.count},m=h.unchangedNames;return m&&(f.bloomFilter={applied:u===0,hashCount:(d=m==null?void 0:m.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(v=(g=m==null?void 0:m.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&y!==void 0?y:0,padding:(p=(I=m==null?void 0:m.bits)===null||I===void 0?void 0:I.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=kr(s).toUint8Array()}catch(c){if(c instanceof R1)return Ii("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Yf(l,o,a)}catch(c){return Ii(c instanceof ps?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Kh(a.target)){const l=new $(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,be.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=H();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new _u(e,n,this.Wt,this.jt,r);return this.jt=cn(),this.zt=Vg(),this.Wt=new ue(Q),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new bg,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new He(Q),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new bg),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Vg(){return new ue($.comparator)}function zg(){return new ue($.comparator)}const dR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pR=(()=>({and:"AND",or:"OR"}))();class mR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xh(t,e){return t.useProto3Json||pu(e)?e:{value:e}}function xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gR(t,e){return xl(t,e.toTimestamp())}function zt(t){return ie(!!t),j.fromTimestamp(function(e){const n=qn(e);return new we(n.seconds,n.nanos)}(t))}function Xf(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function rE(t){const e=ne.fromString(t);return ie(aE(e)),e}function Jh(t,e){return Xf(t.databaseId,e.path)}function Ic(t,e){const n=rE(e);if(n.get(1)!==t.databaseId.projectId)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(iE(n))}function Zh(t,e){return Xf(t.databaseId,e)}function yR(t){const e=rE(t);return e.length===4?ne.emptyPath():iE(e)}function ed(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iE(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bg(t,e,n){return{name:Jh(t,e),fields:n.value.mapValue.fields}}function vR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ie(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(ie(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:Z1(l.code);return new x(u,l.message||"")}(o);n=new tE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ic(t,r.document.name),s=zt(r.document.updateTime),o=r.document.createTime?zt(r.document.createTime):j.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=be.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new La(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ic(t,r.document),s=r.readTime?zt(r.readTime):j.min(),o=be.newNoDocument(i,s),a=r.removedTargetIds||[];n=new La([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ic(t,r.document),s=r.removedTargetIds||[];n=new La([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aR(i,s),a=r.targetId;n=new eE(a,o)}}return n}function wR(t,e){let n;if(e instanceof Mo)n={update:Bg(t,e.key,e.value)};else if(e instanceof J1)n={delete:Jh(t,e.key)};else if(e instanceof Or)n={update:Bg(t,e.key,e.data),updateMask:AR(e.fieldMask)};else{if(!(e instanceof iR))return U();n={verify:Jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Nl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof co)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ho)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Al)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:gR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function ER(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?zt(r.updateTime):zt(i);return s.isEqual(j.min())&&(s=zt(i)),new tR(s,r.transformResults||[])}(n,e))):[]}function _R(t,e){return{documents:[Zh(t,e.path)]}}function SR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return oE(Dt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Fr(c.field),direction:kR(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Xh(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function IR(t){let e=yR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=sE(c);return h instanceof Dt&&L1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ci(jr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,pu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Cl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Cl(d,h)}(n.endAt)),Bx(e,i,o,s,a,"F",l,u)}function TR(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=jr(e.unaryFilter.field);return ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=jr(e.unaryFilter.field);return ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(e.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=jr(e.unaryFilter.field);return ve.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return ve.create(jr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(n=>sE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function kR(t){return dR[t]}function CR(t){return fR[t]}function NR(t){return pR[t]}function Fr(t){return{fieldPath:t.canonicalString()}}function jr(t){return Ve.fromServerFormat(t.fieldPath)}function oE(t){return t instanceof ve?function(e){if(e.op==="=="){if(xg(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NAN"}};if(Ag(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xg(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NOT_NAN"}};if(Ag(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(e.field),op:CR(e.op),value:e.value}}}(t):t instanceof Dt?function(e){const n=e.getFilters().map(r=>oE(r));return n.length===1?n[0]:{compositeFilter:{op:NR(e.op),filters:n}}}(t):U()}function AR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Ke.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.fe=e}}function RR(t){const e=IR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.rn=new PR}addToCollectionParentIndex(e,n){return this.rn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Hn.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class PR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ni(0)}static Mn(){return new Ni(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.changes=new qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xs(r.mutation,i,kt.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=cn();const o=As(),a=As();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Or)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),xs(c.mutation,u,c.mutation.getFieldMask(),we.now())):o.set(u.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new LR(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=As();let i=new ue((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||kt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=B1();c.forEach(d=>{if(!s.has(d)){const g=Y1(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(ur());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:z1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=fs();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new Hi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,be.newInvalidDocument(u)))});let o=fs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&xs(u.mutation,l,kt.empty(),we.now()),vu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return k.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:zt(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:RR(r.bundledQuery),readTime:zt(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.overlays=new ue($.comparator),this.ls=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ur();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=ur(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ur(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ur(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oR(n,r));let s=this.ls.get(n);s===void 0&&(s=H(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.fs=new He(Ie.ds),this.ws=new He(Ie._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ie(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new $(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new $(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=H();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return $.comparator(e.key,n.key)||Q(e.As,n.As)}static _s(e,n){return Q(e.As,n.As)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new He(Ie.ds)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sR(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(Q);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),k.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new $(s),0);let a=new He(Q);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),k.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return k.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ie(n,0),i=this.Rs.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.Ds=e,this.docs=new ue($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():be.newInvalidDocument(n))}getEntries(e,n){let r=cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():be.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=cn();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Cx(kx(c),r)<=0||(i.has(c.key)||vu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Cs(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bR(this)}getSize(e){return k.resolve(this.size)}}class bR extends OR{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.persistence=e,this.xs=new qi(n=>qf(n),Wf),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Jf,this.targetCount=0,this.Ms=Ni.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),k.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ni(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Fn(n),k.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.$s={},this.overlays={},this.Os=new Vf(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new VR(this),this.indexManager=new DR,this.remoteDocumentCache=function(r){return new jR(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new xR(n),this.qs=new MR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new FR(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new BR(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return k.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class BR extends Ax{constructor(e){super(),this.currentSequenceNumber=e}}class Zf{constructor(e){this.persistence=e,this.Qs=new Jf,this.js=null}static zs(e){return new Zf(e)}get Ws(){if(this.js)return this.js;throw U()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),k.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ws,r=>{const i=$.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return k.or([()=>k.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ep(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Og(n))return k.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qh(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Qh(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Og(n)||i.isEqual(j.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Ig()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yh(n)),this.Wi(e,o,n,Tx(i,-1)))})}ji(e,n){let r=new He(b1(e));return n.forEach((i,s)=>{vu(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Ig()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Yh(n)),this.Ui.getDocumentsMatchingQuery(e,n,Hn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ue(Q),this.Yi=new qi(s=>qf(s),Wf),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $R(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function WR(t,e,n,r){return new qR(t,e,n,r)}async function lE(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function KR(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=k.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const y=l.docVersions.get(g);ie(y!==null),v.version.compareTo(y)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function uE(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function GR(t,e){const n=b(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(v,y,I){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,g,c)&&a.push(n.Bs.updateTargetData(s,g))});let l=cn(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(QR(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(j.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function QR(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=cn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function YR(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XR(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Nn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function td(t,e,n){const r=b(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$o(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Hg(t,e,n){const r=b(t);let i=j.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=b(a),h=c.Yi.get(u);return h!==void 0?k.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:H())).next(a=>(JR(r,Hx(e),a),{documents:a,ir:s})))}function JR(t,e,n){let r=t.Xi.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class qg{constructor(){this.activeTargetIds=Yx()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZR{constructor(){this.Hr=new qg,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new qg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma=null;function Tc(){return ma===null?ma=268435456+Math.round(2147483648*Math.random()):ma++,"0x"+ma.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection";class r2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Tc(),a=this.To(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(O("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ii("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+zi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=t2[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Tc();return new Promise((o,a)=>{const l=new fx;l.setWithCredentials(!0),l.listenOnce(cx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Sc.NO_ERROR:const c=l.getResponseJson();O(Ue,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Sc.TIMEOUT:O(Ue,`RPC '${e}' ${s} timed out`),a(new x(_.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const h=l.getStatus();if(O(Ue,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(I)>=0?I:_.UNKNOWN}(g.status);a(new x(v,g.message))}else a(new x(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(_.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O(Ue,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(Ue,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Tc(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lx(),a=ux(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new dx({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(Ue,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const v=new n2({ro:I=>{g?O(Ue,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(O(Ue,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(Ue,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},oo:()=>h.close()}),y=(I,p,f)=>{I.listen(p,m=>{try{f(m)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,ha.EventType.OPEN,()=>{g||O(Ue,`RPC '${e}' stream ${i} transport opened.`)}),y(h,ha.EventType.CLOSE,()=>{g||(g=!0,O(Ue,`RPC '${e}' stream ${i} transport closed`),v.wo())}),y(h,ha.EventType.ERROR,I=>{g||(g=!0,Ii(Ue,`RPC '${e}' stream ${i} transport errored:`,I),v.wo(new x(_.UNAVAILABLE,"The operation could not be completed")))}),y(h,ha.EventType.MESSAGE,I=>{var p;if(!g){const f=I.data[0];ie(!!f);const m=f,E=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(E){O(Ue,`RPC '${e}' stream ${i} received error:`,E);const C=E.status;let A=function(L){const J=me[L];if(J!==void 0)return Z1(J)}(C),P=E.message;A===void 0&&(A=_.INTERNAL,P="Unknown error status: "+C+" with message "+E.message),g=!0,v.wo(new x(A,P)),h.close()}else O(Ue,`RPC '${e}' stream ${i} received:`,f),v._o(f)}}),y(a,hx.STAT_EVENT,I=>{I.stat===_g.PROXY?O(Ue,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===_g.NOPROXY&&O(Ue,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){return new mR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new cE(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new x(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class i2 extends hE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=vR(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?zt(s.readTime):j.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=ed(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Kh(a)?{documents:_R(i,a)}:{query:SR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=nE(i,s.resumeToken);const l=Xh(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(j.min())>0){o.readTime=xl(i,s.snapshotVersion.toTimestamp());const l=Xh(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=TR(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=ed(this.serializer),n.removeTarget=e,this.Wo(n)}}class s2 extends hE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=ER(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.cu(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ed(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wR(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(_.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(_.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class a2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ln(n),this.mu=!1):O("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Lr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=b(a);l.vu.add(4),await Fo(l),l.bu.set("Unknown"),l.vu.delete(4),await Iu(l)}(this))})}),this.bu=new a2(r,i)}}async function Iu(t){if(Lr(t))for(const e of t.Ru)await e(!0)}async function Fo(t){for(const e of t.Ru)await e(!1)}function dE(t,e){const n=b(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),rp(n)?np(n):Wi(n).Ko()&&tp(n,e))}function fE(t,e){const n=b(t),r=Wi(n);n.Au.delete(e),r.Ko()&&pE(n,e),n.Au.size===0&&(r.Ko()?r.jo():Lr(n)&&n.bu.set("Unknown"))}function tp(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wi(t).su(e)}function pE(t,e){t.Vu.qt(e),Wi(t).iu(e)}function np(t){t.Vu=new hR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Wi(t).start(),t.bu.gu()}function rp(t){return Lr(t)&&!Wi(t).Uo()&&t.Au.size>0}function Lr(t){return b(t).vu.size===0}function mE(t){t.Vu=void 0}async function u2(t){t.Au.forEach((e,n)=>{tp(t,e)})}async function c2(t,e){mE(t),rp(t)?(t.bu.Iu(e),np(t)):t.bu.set("Unknown")}async function h2(t,e,n){if(t.bu.set("Online"),e instanceof tE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rl(t,r)}else if(e instanceof La?t.Vu.Ht(e):e instanceof eE?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(j.min()))try{const r=await uE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Ke.EMPTY_BYTE_STRING,u.snapshotVersion)),pE(i,a);const c=new Nn(u.target,a,l,u.sequenceNumber);tp(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Rl(t,r)}}async function Rl(t,e,n){if(!$o(e))throw e;t.vu.add(1),await Fo(t),t.bu.set("Offline"),n||(n=()=>uE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Iu(t)})}function gE(t,e){return e().catch(n=>Rl(t,n,e))}async function Tu(t){const e=b(t),n=Wn(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;d2(e);)try{const i=await YR(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,f2(e,i)}catch(i){await Rl(e,i)}yE(e)&&vE(e)}function d2(t){return Lr(t)&&t.Eu.length<10}function f2(t,e){t.Eu.push(e);const n=Wn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function yE(t){return Lr(t)&&!Wn(t).Uo()&&t.Eu.length>0}function vE(t){Wn(t).start()}async function p2(t){Wn(t).hu()}async function m2(t){const e=Wn(t);for(const n of t.Eu)e.uu(n.mutations)}async function g2(t,e,n){const r=t.Eu.shift(),i=Gf.from(r,e,n);await gE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Tu(t)}async function y2(t,e){e&&Wn(t).ou&&await async function(n,r){if(i=r.code,lR(i)&&i!==_.ABORTED){const s=n.Eu.shift();Wn(n).Qo(),await gE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Tu(n)}var i}(t,e),yE(t)&&vE(t)}async function Kg(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Lr(n);n.vu.add(3),await Fo(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Iu(n)}async function v2(t,e){const n=b(t);e?(n.vu.delete(2),await Iu(n)):e||(n.vu.add(2),await Fo(n),n.bu.set("Unknown"))}function Wi(t){return t.Su||(t.Su=function(e,n,r){const i=b(e);return i.fu(),new i2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:u2.bind(null,t),ao:c2.bind(null,t),nu:h2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),rp(t)?np(t):t.bu.set("Unknown")):(await t.Su.stop(),mE(t))})),t.Su}function Wn(t){return t.Du||(t.Du=function(e,n,r){const i=b(e);return i.fu(),new s2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:p2.bind(null,t),ao:y2.bind(null,t),au:m2.bind(null,t),cu:g2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Tu(t)):(await t.Du.stop(),t.Eu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ip(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sp(t,e){if(ln("AsyncQueue",`${e}: ${t}`),$o(t))return new x(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=fs(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new di(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.Cu=new ue($.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):U():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ai{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ai(e,n,di.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(){this.Nu=void 0,this.listeners=[]}}class E2{constructor(){this.queries=new qi(e=>j1(e),yu),this.onlineState="Unknown",this.ku=new Set}}async function wE(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new w2),i)try{s.Nu=await n.onListen(r)}catch(o){const a=sp(o,`Initialization of query '${Yh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&op(n)}async function EE(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _2(t,e){const n=b(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&op(n)}function S2(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function op(t){t.ku.forEach(e=>{e.next()})}class _E{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.key=e}}class IE{constructor(e){this.key=e}}class I2{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=H(),this.mutatedKeys=H(),this.tc=b1(e),this.ec=new di(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Gg,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=vu(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?v!==y&&(r.track({type:3,doc:g}),I=!0):this.rc(d,g)||(r.track({type:2,doc:g}),I=!0,(l&&this.tc(g,l)>0||u&&this.tc(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),I=!0):d&&!g&&(r.track({type:1,doc:d}),I=!0,(l||u)&&(a=!0)),I&&(g?(o=o.add(g),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return g(h)-g(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Ai(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Gg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=H(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new IE(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new SE(r))}),n}hc(e){this.Yu=e.ir,this.Zu=H();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ai.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class T2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class k2{constructor(e){this.key=e,this.fc=!1}}class C2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new qi(a=>j1(a),yu),this._c=new Map,this.mc=new Set,this.gc=new ue($.comparator),this.yc=new Map,this.Ic=new Jf,this.Tc={},this.Ec=new Map,this.Ac=Ni.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function N2(t,e){const n=U2(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await XR(n.localStore,un(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await A2(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&dE(n.remoteStore,o)}return i}async function A2(t,e,n,r,i){t.Rc=(h,d,g)=>async function(v,y,I,p){let f=y.view.sc(I);f.zi&&(f=await Hg(v.localStore,y.query,!1).then(({documents:C})=>y.view.sc(C,f)));const m=p&&p.targetChanges.get(y.targetId),E=y.view.applyChanges(f,v.isPrimaryClient,m);return Yg(v,y.targetId,E.cc),E.snapshot}(t,h,d,g);const s=await Hg(t.localStore,e,!0),o=new I2(e,s.ir),a=o.sc(s.documents),l=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Yg(t,n,u.cc);const c=new T2(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function x2(t,e){const n=b(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!yu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await td(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),fE(n.remoteStore,r.targetId),nd(n,r.targetId)}).catch(Lo)):(nd(n,r.targetId),await td(n.localStore,r.targetId,!0))}async function R2(t,e,n){const r=F2(t);try{const i=await function(s,o){const a=b(s),l=we.now(),u=o.reduce((d,g)=>d.add(g.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=cn(),v=H();return a.Zi.getEntries(d,u).next(y=>{g=y,g.forEach((I,p)=>{p.isValidDocument()||(v=v.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(y=>{c=y;const I=[];for(const p of o){const f=rR(p,c.get(p.key).overlayedDocument);f!=null&&I.push(new Or(p.key,f,D1(f.value.mapValue),en.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,I,o)}).next(y=>{h=y;const I=y.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,y.batchId,I)})}).then(()=>({batchId:h.batchId,changes:z1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new ue(Q)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await jo(r,i.changes),await Tu(r.remoteStore)}catch(i){const s=sp(i,"Failed to persist write");n.reject(s)}}async function TE(t,e){const n=b(t);try{const r=await GR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ie(o.fc):i.removedDocuments.size>0&&(ie(o.fc),o.fc=!1))}),await jo(n,r,e)}catch(r){await Lo(r)}}function Qg(t,e,n){const r=b(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=b(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&op(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function D2(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ue($.comparator);o=o.insert(s,be.newNoDocument(s,j.min()));const a=H().add(s),l=new _u(j.min(),new Map,new ue(Q),o,a);await TE(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),ap(r)}else await td(r.localStore,e,!1).then(()=>nd(r,e,n)).catch(Lo)}async function P2(t,e){const n=b(t),r=e.batch.batchId;try{const i=await KR(n.localStore,e);CE(n,r,null),kE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jo(n,i)}catch(i){await Lo(i)}}async function O2(t,e,n){const r=b(t);try{const i=await function(s,o){const a=b(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ie(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);CE(r,e,n),kE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jo(r,i)}catch(i){await Lo(i)}}function kE(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function CE(t,e,n){const r=b(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||NE(t,r)})}function NE(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(fE(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),ap(t))}function Yg(t,e,n){for(const r of n)r instanceof SE?(t.Ic.addReference(r.key,e),L2(t,r)):r instanceof IE?(O("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||NE(t,r.key)):U()}function L2(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.mc.add(r),ap(t))}function ap(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(ne.fromString(e)),r=t.Ac.next();t.yc.set(r,new k2(n)),t.gc=t.gc.insert(n,r),dE(t.remoteStore,new Nn(un(mu(n.path)),r,"TargetPurposeLimboResolution",Vf.ct))}}async function jo(t,e,n){const r=b(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ep.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,h=>k.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>k.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!$o(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,v)}}}(r.localStore,s))}async function $2(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await lE(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new x(_.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(n,r.er)}}function M2(t,e){const n=b(t),r=n.yc.get(e);if(r&&r.fc)return H().add(r.key);{let i=H();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function U2(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=M2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D2.bind(null,e),e.dc.nu=_2.bind(null,e.eventManager),e.dc.Pc=S2.bind(null,e.eventManager),e}function F2(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=O2.bind(null,e),e}class Xg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Su(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return WR(this.persistence,new HR,e.initialUser,this.serializer)}createPersistence(e){return new zR(Zf.zs,this.serializer)}createSharedClientState(e){return new ZR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class j2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$2.bind(null,this.syncEngine),await v2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new E2}createDatastore(e){const n=Su(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new r2(i));var i;return function(s,o,a,l){return new o2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Qg(this.syncEngine,a,0),o=Wg.D()?new Wg:new e2,new l2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new C2(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=b(e);O("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Fo(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=A1.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await z2(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Kg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Kg(e.remoteStore,s)),t._onlineComponents=e}function V2(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function z2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!V2(n))throw n;Ii("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new Xg)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Cc(t,new Xg);return t._offlineComponents}async function xE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Jg(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Jg(t,new j2))),t._onlineComponents}function B2(t){return xE(t).then(e=>e.syncEngine)}async function rd(t){const e=await xE(t),n=e.eventManager;return n.onListen=N2.bind(null,e.syncEngine),n.onUnlisten=x2.bind(null,e.syncEngine),n}function H2(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new AE({next:h=>{s.enqueueAndForget(()=>EE(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new x(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new x(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new _E(mu(o.path),u,{includeMetadataChanges:!0,Ku:!0});return wE(i,c)}(await rd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t,e,n){if(!n)throw new x(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function q2(t,e,n,r){if(e===!0&&r===!0)throw new x(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ey(t){if(!$.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ty(t){if($.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ku(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ku(t);throw new x(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Cu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ny({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ny(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mx;switch(n.type){case"firstParty":return new wx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zg.get(e);n&&(O("ComponentProvider","Removing Datastore"),Zg.delete(e),n.terminate())}(this),Promise.resolve()}}function W2(t,e,n,r={}){var i;const s=(t=pr(t,Cu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Fe.MOCK_USER;else{a=PT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Fe(u)}t._authCredentials=new gx(new N1(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class $r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $r(this.firestore,e,this._query)}}class Vn extends $r{constructor(e,n,r){super(e,n,mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new $(e))}withConverter(e){return new Vn(this.firestore,e,this._path)}}function PE(t,e,...n){if(t=Le(t),DE("collection","path",e),t instanceof Cu){const r=ne.fromString(e,...n);return ty(r),new Vn(t,null,r)}{if(!(t instanceof it||t instanceof Vn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return ty(r),new Vn(t.firestore,null,r)}}function OE(t,e,...n){if(t=Le(t),arguments.length===1&&(e=A1.A()),DE("doc","path",e),t instanceof Cu){const r=ne.fromString(e,...n);return ey(r),new it(t,null,new $(r))}{if(!(t instanceof it||t instanceof Vn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return ey(r),new it(t.firestore,t instanceof Vn?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new cE(this,"async_queue_retry"),this.Xc=()=>{const n=kc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new bn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!$o(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ln("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=ip.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&U()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function ry(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class fo extends Cu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new K2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||LE(this),this._firestoreClient.terminate()}}function G2(t,e){const n=typeof t=="object"?t:B0(),r=typeof t=="string"?t:e||"(default)",i=lf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=RT("firestore");s&&W2(i,...s)}return i}function lp(t){return t._firestoreClient||LE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function LE(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new Dx(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,RE(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new b2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xi(Ke.fromBase64String(e))}catch(n){throw new x(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xi(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=/^__.*__$/;class Y2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mo(e,this.data,n,this.fieldTransforms)}}function ME(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class hp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new hp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Dl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ME(this.ca)&&Q2.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class X2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Su(e)}ya(e,n,r,i=!1){return new hp({ca:e,methodName:n,ga:r,path:Ve.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function UE(t){const e=t._freezeSettings(),n=Su(t._databaseId);return new X2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function J2(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);bE("Data must be an object, but it was:",o,r);const a=FE(r,o);let l,u;if(s.merge)l=new kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=eD(e,h,n);if(!o.contains(d))throw new x(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nD(c,d)||c.push(d)}l=new kt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Y2(new mt(a),l,u)}function Z2(t,e,n,r=!1){return dp(n,t.ya(r?4:3,e))}function dp(t,e){if(jE(t=Le(t)))return bE("Unsupported field value:",e,t),FE(t,e);if(t instanceof $E)return function(n,r){if(!ME(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=dp(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Xx(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=we.fromDate(n);return{timestampValue:xl(r.serializer,i)}}if(n instanceof we){const i=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xl(r.serializer,i)}}if(n instanceof cp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xi)return{bytesValue:nE(r.serializer,n._byteString)};if(n instanceof it){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${ku(n)}`)}(t,e)}function FE(t,e){const n={};return x1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bi(t,(r,i)=>{const s=dp(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof cp||t instanceof xi||t instanceof it||t instanceof $E)}function bE(t,e,n){if(!jE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ku(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function eD(t,e,n){if((e=Le(e))instanceof up)return e._internalPath;if(typeof e=="string")return VE(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const tD=new RegExp("[~\\*/\\[\\]]");function VE(t,e,n){if(e.search(tD)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new up(...e.split("."))._internalPath}catch{throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(_.INVALID_ARGUMENT,a+t+l)}function nD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rD extends zE{data(){return super.data()}}function Nu(t,e){return typeof e=="string"?VE(t,e):e instanceof up?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fp{}class BE extends fp{}function Nc(t,e,...n){let r=[];e instanceof fp&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof pp).length,o=i.filter(a=>a instanceof Au).length;if(s>1||s>0&&o>0)throw new x(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Au extends BE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Au(e,n,r)}_apply(e){const n=this._parse(e);return HE(e._query,n),new $r(e.firestore,e.converter,Gh(e._query,n))}_parse(e){const n=UE(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){oy(c,u);const d=[];for(const g of c)d.push(sy(a,i,g));h={arrayValue:{values:d}}}else h=sy(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||oy(c,u),h=Z2(o,s,c,u==="in"||u==="not-in");return ve.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function iy(t,e,n){const r=e,i=Nu("where",t);return Au._create(i,r,n)}class pp extends fp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)HE(s,a),s=Gh(s,a)}(e._query,n),new $r(e.firestore,e.converter,Gh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mp extends BE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new mp(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ci(i,s);return function(a,l){if(Kf(a)===null){const u=gu(a);u!==null&&qE(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new $r(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Hi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Ac(t,e="asc"){const n=e,r=Nu("orderBy",t);return mp._create(r,n)}function sy(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new x(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!F1(e)&&n.indexOf("/")!==-1)throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ne.fromString(n));if(!$.isDocumentKey(r))throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ng(t,new $(r))}if(n instanceof it)return Ng(t,n._key);throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ku(n)}.`)}function oy(t,e){if(!Array.isArray(t)||t.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function HE(t,e){if(e.isInequality()){const r=gu(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new x(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Kf(t);s!==null&&qE(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function qE(t,e,n){if(!n.isEqual(e))throw new x(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class sD{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Bi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new cp(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ao(e));default:return null}}convertTimestamp(e){const n=qn(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);ie(aE(r));const i=new lo(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||ln(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class WE extends zE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $a extends WE{data(e={}){return super.data(e)}}class aD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ms(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new $a(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ms(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new $a(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ms(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:lD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){t=pr(t,it);const e=pr(t.firestore,fo);return H2(lp(e),t._key).then(n=>GE(e,t,n))}class KE extends sD{constructor(e){super(),this.firestore=e}convertBytes(e){return new xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function cD(t,e){const n=pr(t.firestore,fo),r=OE(t),i=oD(t.converter,e);return dD(n,[J2(UE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function hD(t,...e){var n,r,i;t=Le(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ry(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ry(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof it)u=pr(t.firestore,fo),c=mu(t._key.path),l={next:h=>{e[o]&&e[o](GE(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=pr(t,$r);u=pr(h.firestore,fo),c=h._query;const d=new KE(u);l={next:g=>{e[o]&&e[o](new aD(u,d,h,g))},error:e[o+1],complete:e[o+2]},iD(t._query)}return function(h,d,g,v){const y=new AE(v),I=new _E(d,y,g);return h.asyncQueue.enqueueAndForget(async()=>wE(await rd(h),I)),()=>{y.Dc(),h.asyncQueue.enqueueAndForget(async()=>EE(await rd(h),I))}}(lp(u),c,a,l)}function dD(t,e){return function(n,r){const i=new bn;return n.asyncQueue.enqueueAndForget(async()=>R2(await B2(n),r,i)),i.promise}(lp(t),e)}function GE(t,e,n){const r=n.docs.get(e._key),i=new KE(t);return new WE(t,i,e._key,r,new ms(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){zi=n})(Mi),Ei(new Er("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new fo(new yx(n.getProvider("auth-internal")),new _x(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),jn(Sg,"3.13.0",t),jn(Sg,"3.13.0","esm2017")})();const fD={apiKey:"AIzaSyA-tLvH1XL4cMwDTyE6KRRyfPZ66NaGfyY",authDomain:"mini-blog-9fbe4.firebaseapp.com",projectId:"mini-blog-9fbe4",storageBucket:"mini-blog-9fbe4.appspot.com",messagingSenderId:"547051502498",appId:"1:547051502498:web:85f0ac188d591f68e410fb"},pD=z0(fD),gp=G2(pD),xu=()=>{const[t,e]=S.useState(null),[n,r]=S.useState(null),[i,s]=S.useState(!1),o=sA(),a=async c=>{r(!0),e(null);try{const{user:h}=await bC(o,c.email,c.password);return await BC(h,{displayName:c.displayName}),r(!1),h}catch(h){console.log(h.message),console.log(typeof h.message);let d;h.message.includes("password")?d="A senha precisa ter pelo menos 6 caracteres":h.message.includes("email-already")?d="Email já cadastrado!":d="Ocorreu um erro, por favor tente novamente mais tarde!",r(!1),e(d)}},l=()=>{KC(o)},u=async c=>{r(!0),e(!1);try{await VC(o,c.email,c.password),r(!1)}catch(h){let d;h.message.includes("user-not-found")?d="Usuário não encontrado!":h.message.includes("wrong-password")?d="Senha incorreta!":d="Ocorreu um erro, tente novamente mais tarde!",e(d),r(!1)}};return S.useEffect(()=>()=>s(!0),[]),{auth:o,createUser:a,error:t,loading:n,logout:l,login:u}},QE=S.createContext(),mD=({children:t,value:e})=>w.jsx(QE.Provider,{value:e,children:t}),yp=()=>S.useContext(QE),gD="_home_1rbut_1",yD="_search_form_1rbut_15",vD="_noposts_1rbut_41",ay={home:gD,search_form:yD,noposts:vD},vp=(t,e=null,n=null)=>{const[r,i]=S.useState(null),[s,o]=S.useState(null),[a,l]=S.useState(null),[u,c]=S.useState(!1);return S.useEffect(()=>{(async()=>{if(u)return;o(!0);const d=await PE(gp,t);try{let g;e?g=await Nc(d,iy("tagsArray","array-contains",e),Ac("createdAt","desc")):n?g=await Nc(d,iy("uid","==",n),Ac("createdAt","desc")):g=await Nc(d,Ac("createdAt","desc")),await hD(g,v=>{i(v.docs.map(y=>({id:y.id,...y.data()})))}),o(!1)}catch(g){console.log(g),l(g),o(!1)}})()},[t,e,n,u]),S.useEffect(()=>()=>c(!0),[]),{documents:r,loading:s,error:a}},wD="_post_detail_1158q_1",ED="_tags_1158q_25",_D="_createdby_1158q_51",ly={post_detail:wD,tags:ED,createdby:_D},YE=({post:t})=>w.jsxs("div",{className:ly.post_detail,children:[w.jsx("img",{src:t.image,alt:t.title}),w.jsx("h2",{children:t.title}),w.jsx("p",{children:t.createdBy}),w.jsx("div",{className:ly.tags,children:t.tagsArray.map(e=>w.jsxs("p",{children:[w.jsx("span",{children:"#"}),e]},e))}),w.jsx($i,{to:`/mini_blog/posts/${t.id}`,className:"btn btn-outline",children:"Ler"})]}),SD=()=>{const t=Ql(),[e,n]=S.useState(""),{documents:r,loading:i}=vp("posts"),s=o=>{if(o.preventDefault(),e)return t(`/mini_blog/search?q=${e}`)};return w.jsxs("div",{className:ay.home,children:[w.jsx("h1",{children:"Veja os posts mais recentes"}),w.jsxs("form",{onSubmit:s,children:[w.jsx("input",{type:"text",placeholder:"ou busque por tags...",onChange:o=>n(o.target.value),value:e}),w.jsx("button",{className:"btn btn-dark",children:"Pesquisar"})]}),w.jsxs("div",{children:[w.jsx("h1",{children:"Posts..."}),i&&w.jsx("p",{children:"Carregando..."}),r&&r.map(o=>w.jsx(YE,{post:o},o.id)),r&&r.length===0&&w.jsxs("div",{className:ay.noposts,children:[w.jsx("p",{children:"Não foram encontrados posts"}),w.jsx($i,{to:"/createpost",className:"btn",children:"Criar primeiro post"})]})]})]})},ID="_search_container_1hecv_3",TD="_noposts_1hecv_33",uy={search_container:ID,noposts:TD},kD=()=>{const{search:t}=Rr();return S.useMemo(()=>new URLSearchParams(t),[t])},CD=()=>{const e=kD().get("q"),{documents:n}=vp("posts",e);return w.jsxs("div",{className:uy.search_container,children:[w.jsx("h2",{children:"Search"}),w.jsxs("div",{children:[n&&n.length===0&&w.jsxs("div",{className:uy.noposts,children:[w.jsx("p",{children:"Não foram encontrados posts a partir da sua busca..."}),w.jsx($i,{to:"/mini_blog/",className:"btn btn-dark",children:"Voltar"})]}),n&&n.map(r=>w.jsx(YE,{post:r},r.id))]})]})},ND="_about_1m61i_1",AD={about:ND},xD=()=>w.jsxs("div",{className:AD.about,children:[w.jsxs("h2",{children:["Sobre o Mini ",w.jsx("span",{children:"Blog"})]}),w.jsx("p",{children:"Este projeto consiste em um blog feito em React no Front-end e Firebase no Back-end."}),w.jsx($i,{to:"/mini_blog/createpost",className:"btn",children:"Criar Post"})]}),RD="_navbar_1wzzc_1",DD="_brand_1wzzc_17",PD="_links_list_1wzzc_35",OD="_active_1wzzc_61",Ht={navbar:RD,brand:DD,links_list:PD,active:OD},LD=()=>{const{user:t}=yp(),{logout:e}=xu();return w.jsxs("nav",{className:Ht.navbar,children:[w.jsxs(er,{to:"/mini_blog/",className:Ht.brand,children:["Mini ",w.jsx("span",{children:"Blog"})]}),w.jsxs("ul",{className:Ht.links_list,children:[w.jsx("li",{children:w.jsx(er,{to:"/mini_blog/",className:({isActive:n})=>n?Ht.active:"",children:"Home"})}),w.jsx("li",{children:w.jsx(er,{to:"/mini_blog/about",className:({isActive:n})=>n?Ht.active:"",children:"About"})}),!t&&w.jsxs(w.Fragment,{children:[w.jsx("li",{children:w.jsx(er,{to:"/mini_blog/login",className:({isActive:n})=>n?Ht.active:"",children:"Login"})}),w.jsx("li",{children:w.jsx(er,{to:"/mini_blog/register",className:({isActive:n})=>n?Ht.active:"",children:"Register"})})]}),t&&w.jsxs(w.Fragment,{children:[w.jsx("li",{children:w.jsx(er,{to:"/mini_blog/dashboard",className:({isActive:n})=>n?Ht.active:"",children:"Dashboard"})}),w.jsx("li",{children:w.jsx(er,{to:"/mini_blog/createpost",className:({isActive:n})=>n?Ht.active:"",children:"Create Post"})})]}),t&&w.jsx("button",{onClick:e,children:"Sair"})]})]})},$D="_footer_ajs0w_1",MD={footer:$D},UD=()=>w.jsxs("footer",{className:MD.footer,children:[w.jsx("h3",{children:"Escreva sobre o que vc tem interesse!"}),w.jsx("p",{children:"Mini Blog © 2023"}),w.jsx("p",{children:"desenvolvido por Lucas Sessi :)"})]}),FD="_login_dxhj2_1",jD={login:FD},bD=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),{login:o,error:a,loading:l}=xu(),u=async c=>{c.preventDefault(),s(""),await o({email:t,password:n})};return S.useEffect(()=>{a&&s(a)},[a]),w.jsxs("div",{className:jD.login,children:[w.jsx("h1",{children:"Entrar"}),w.jsx("p",{children:"Faça o login para postar"}),w.jsxs("form",{onSubmit:u,children:[w.jsxs("label",{children:[w.jsx("span",{children:"E-mail:"}),w.jsx("input",{type:"email",name:"email",value:t,required:!0,onChange:c=>e(c.target.value),placeholder:"E-mail do usuário"})]}),w.jsxs("label",{children:[w.jsx("span",{children:"Password:"}),w.jsx("input",{type:"password",name:"password",value:n,required:!0,onChange:c=>r(c.target.value),placeholder:"Insira a sua senha"})]}),!l&&w.jsx("button",{className:"btn",children:"Entrar"}),l&&w.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),i&&w.jsx("p",{className:"error",children:i})]})]})},VD="_register_4fdht_1",zD={register:VD},BD=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(""),{createUser:c,error:h,loading:d}=xu(),g=async v=>{v.preventDefault(),u("");const y={displayName:t,email:n,password:i,confirmPassword:o};if(i!==o&&i){u("Senhas Diferentes!");return}if(t===" "||t==="  "||t==="   "||t.length<=2){u("nome de usuário inválido!"),e("");return}await c(y),console.log(y)};return S.useEffect(()=>{h&&u(h)},[h]),w.jsxs("div",{className:zD.register,children:[w.jsx("h1",{children:"Cadastre-se para postar"}),w.jsx("p",{children:"crie seu usuário e compartilhe suas histórias"}),w.jsxs("form",{onSubmit:g,children:[w.jsxs("label",{children:[w.jsx("span",{children:"Name:"}),w.jsx("input",{type:"text",name:"displayName",value:t,required:!0,onChange:v=>e(v.target.value),placeholder:"Nome do Usuário"})]}),w.jsxs("label",{children:[w.jsx("span",{children:"E-mail:"}),w.jsx("input",{type:"email",name:"email",value:n,required:!0,onChange:v=>r(v.target.value),placeholder:"E-mail do usuário"})]}),w.jsxs("label",{children:[w.jsx("span",{children:"Password:"}),w.jsx("input",{type:"password",name:"password",value:i,required:!0,onChange:v=>s(v.target.value),placeholder:"Insira a sua senha"})]}),w.jsxs("label",{children:[w.jsx("span",{children:"Confirm Password:"}),w.jsx("input",{type:"password",name:"confirmPassword",value:o,required:!0,onChange:v=>a(v.target.value),placeholder:"Confirme a sua senha"})]}),!d&&w.jsx("button",{className:"btn",children:"Cadastrar"}),d&&w.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),l&&w.jsx("p",{className:"error",children:l})]})]})},HD="_dashboard_1tuhl_1",qD="_noposts_1tuhl_37",WD="_post_header_1tuhl_61",KD="_post_row_1tuhl_79",cy={dashboard:HD,noposts:qD,post_header:WD,post_row:KD},GD=()=>{const{user:t}=yp(),e=t.uid,{documents:n,loading:r}=vp("posts",null,e);return w.jsxs("div",{className:cy.dashboard,children:[w.jsx("h2",{children:"Dashboard"}),w.jsx("p",{children:"Gerencie os seus posts"}),n&&n.length===0?w.jsxs("div",{className:cy.noposts,children:[w.jsx("p",{children:"Não foram encontrados posts"}),w.jsx($i,{to:"/mini_blog/createpost",className:"btn",children:"Criar primeiro post"})]}):w.jsx("div",{children:w.jsx("p",{children:"tem posts!"})}),n&&n.map(i=>w.jsx("h2",{children:i.title}))]})},QD="_createPost_9h3oz_1",YD={createPost:QD},XD={loading:null,error:null},JD=(t,e)=>{switch(e.type){case"LOADING":return{loading:!0,error:null};case"INSERTED_DOC":return{loading:!1,error:null};case"ERROR":return{loading:!1,error:e.payload};default:return t}},ZD=t=>{const[e,n]=S.useReducer(JD,XD),[r,i]=S.useState(!1),s=a=>{r||n(a)},o=async a=>{s({type:"LOADING"});try{const l={...a,createdAt:we.now()},u=await cD(PE(gp,t),l);s({type:"INSERTED_DOC",payload:u})}catch(l){s({type:"ERROR",payload:l.message})}};return S.useEffect(()=>()=>i(!0),[]),{insertDocument:o,response:e}},eP=()=>{const t=Ql(),[e,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState(""),[a,l]=S.useState(""),[u,c]=S.useState(""),{insertDocument:h,response:d}=ZD("posts"),{user:g}=yp(),v=y=>{y.preventDefault(),c("");try{new URL(r)}catch{c("URL Inválida!")}const I=a.split(",").map(p=>p.trim().toLowerCase());if(!e||!r||!s||!I){c("Preencha todos os campos!");return}else if(e===" "||e.length<=1||r===" "||s===" "||s.length<=1||I===" "){c("Preencha corretamente os campos!"),n(""),o("");return}u||(h({title:e,image:r,body:s,tagsArray:I,uid:g.uid,createBy:g.displayName}),t("/mini_blog/"))};return w.jsxs("div",{className:YD.createPost,children:[w.jsx("h2",{children:"Criar Post"}),w.jsx("p",{children:"Escreva o que quiser e compartilhe o seu conhecimento!"}),w.jsxs("form",{onSubmit:v,style:{marginTop:"40px"},children:[w.jsxs("label",{children:[w.jsx("span",{children:"Título:"}),w.jsx("input",{type:"text",name:"title",required:!0,placeholder:"Pense em um bom título...",onChange:y=>n(y.target.value),value:e})]}),w.jsxs("label",{children:[w.jsx("span",{children:"URL da imagem:"}),w.jsx("input",{type:"text",name:"image",required:!0,placeholder:"Insira uma imagem",onChange:y=>i(y.target.value),value:r})]}),w.jsxs("label",{children:[w.jsx("span",{children:"Conteúdo: "}),w.jsx("textarea",{name:"body",id:"body",required:!0,placeholder:"Insira o conteúdo do post",onChange:y=>o(y.target.value),value:s})]}),w.jsxs("label",{children:[w.jsx("span",{children:"Tags:"}),w.jsx("input",{type:"text",name:"tags",required:!0,placeholder:"Insira as Tags separadas por vírgula",onChange:y=>l(y.target.value),value:a})]}),!d.loading&&w.jsx("button",{className:"btn",children:"Publicar"}),d.loading&&w.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),d.error||u&&w.jsx("p",{className:"error",children:d.error||u})]})]})},tP="_post_container_19bfi_1",nP="_tags_19bfi_17",hy={post_container:tP,tags:nP},rP=(t,e)=>{const[n,r]=S.useState(null),[i,s]=S.useState(null),[o,a]=S.useState(null),[l,u]=S.useState(!1);return S.useEffect(()=>{(async()=>{if(!l){s(!0);try{const h=await OE(gp,t,e),d=await uD(h);r(d.data()),s(!1)}catch(h){console.log(h),a(h.message),s(!0)}}})()},[t,e,l]),S.useEffect(()=>()=>u(!0),[]),{document:n,loading:i,error:o}},iP=()=>{const{id:t}=ZI(),{document:e,loading:n}=rP("posts",t);return w.jsxs("div",{className:hy.post_container,children:[n&&w.jsx("p",{children:"carregando..."}),e&&w.jsxs("div",{children:[w.jsx("h1",{children:e.title}),w.jsx("img",{src:e.image,alt:e.image}),w.jsx("p",{children:e.body}),w.jsx("h3",{children:"Este post trata sobre:"}),w.jsx("div",{className:hy.tags,children:e.tagsArray.map(r=>w.jsxs("p",{children:[w.jsx("span",{children:"#"}),r]},r))})]})]})};function sP(){const[t,e]=S.useState(void 0),{auth:n}=xu(),r=t===void 0;return S.useEffect(()=>{WC(n,i=>{e(i)})},[n]),r?w.jsx("p",{children:"carregando..."}):w.jsx("div",{className:"App",children:w.jsx(mD,{value:{user:t},children:w.jsxs(wT,{children:[w.jsx(LD,{}),w.jsx("div",{className:"container",children:w.jsxs(fT,{children:[w.jsx(qt,{path:"/mini_blog/",element:w.jsx(SD,{})}),w.jsx(qt,{path:"/mini_blog/search",element:w.jsx(CD,{})}),w.jsx(qt,{path:"/mini_blog/posts/:id",element:w.jsx(iP,{})}),w.jsx(qt,{path:"/mini_blog/about",element:w.jsx(xD,{})}),w.jsx(qt,{path:"/mini_blog/login",element:t?w.jsx(sa,{to:"/mini_blog/"}):w.jsx(bD,{})}),w.jsx(qt,{path:"/mini_blog/register",element:t?w.jsx(sa,{to:"/mini_blog/"}):w.jsx(BD,{})}),w.jsx(qt,{path:"/mini_blog/dashboard",element:t?w.jsx(GD,{}):w.jsx(sa,{to:"/mini_blog/login"})}),w.jsx(qt,{path:"/mini_blog/createpost",element:t?w.jsx(eP,{}):w.jsx(sa,{to:"/mini_blog/login"})})]})}),w.jsx(UD,{})]})})})}xc.createRoot(document.getElementById("root")).render(w.jsx(_y.StrictMode,{children:w.jsx(sP,{})}));
