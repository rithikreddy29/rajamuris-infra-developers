(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Rm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hu={exports:{}},Ca={},pu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function Wx(){if(yp)return ft;yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(D,ie,De){this.props=D,this.context=ie,this.refs=C,this.updater=De||M}S.prototype.isReactComponent={},S.prototype.setState=function(D,ie){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ie,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function x(){}x.prototype=S.prototype;function U(D,ie,De){this.props=D,this.context=ie,this.refs=C,this.updater=De||M}var I=U.prototype=new x;I.constructor=U,T(I,S.prototype),I.isPureReactComponent=!0;var N=Array.isArray,X=Object.prototype.hasOwnProperty,H={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function Y(D,ie,De){var Q,pe={},Me=null,_e=null;if(ie!=null)for(Q in ie.ref!==void 0&&(_e=ie.ref),ie.key!==void 0&&(Me=""+ie.key),ie)X.call(ie,Q)&&!O.hasOwnProperty(Q)&&(pe[Q]=ie[Q]);var be=arguments.length-2;if(be===1)pe.children=De;else if(1<be){for(var Ye=Array(be),je=0;je<be;je++)Ye[je]=arguments[je+2];pe.children=Ye}if(D&&D.defaultProps)for(Q in be=D.defaultProps,be)pe[Q]===void 0&&(pe[Q]=be[Q]);return{$$typeof:s,type:D,key:Me,ref:_e,props:pe,_owner:H.current}}function R(D,ie){return{$$typeof:s,type:D.type,key:ie,ref:D.ref,props:D.props,_owner:D._owner}}function A(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function z(D){var ie={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(De){return ie[De]})}var ae=/\/+/g;function J(D,ie){return typeof D=="object"&&D!==null&&D.key!=null?z(""+D.key):ie.toString(36)}function ue(D,ie,De,Q,pe){var Me=typeof D;(Me==="undefined"||Me==="boolean")&&(D=null);var _e=!1;if(D===null)_e=!0;else switch(Me){case"string":case"number":_e=!0;break;case"object":switch(D.$$typeof){case s:case e:_e=!0}}if(_e)return _e=D,pe=pe(_e),D=Q===""?"."+J(_e,0):Q,N(pe)?(De="",D!=null&&(De=D.replace(ae,"$&/")+"/"),ue(pe,ie,De,"",function(je){return je})):pe!=null&&(A(pe)&&(pe=R(pe,De+(!pe.key||_e&&_e.key===pe.key?"":(""+pe.key).replace(ae,"$&/")+"/")+D)),ie.push(pe)),1;if(_e=0,Q=Q===""?".":Q+":",N(D))for(var be=0;be<D.length;be++){Me=D[be];var Ye=Q+J(Me,be);_e+=ue(Me,ie,De,Ye,pe)}else if(Ye=y(D),typeof Ye=="function")for(D=Ye.call(D),be=0;!(Me=D.next()).done;)Me=Me.value,Ye=Q+J(Me,be++),_e+=ue(Me,ie,De,Ye,pe);else if(Me==="object")throw ie=String(D),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return _e}function he(D,ie,De){if(D==null)return D;var Q=[],pe=0;return ue(D,Q,"","",function(Me){return ie.call(De,Me,pe++)}),Q}function oe(D){if(D._status===-1){var ie=D._result;ie=ie(),ie.then(function(De){(D._status===0||D._status===-1)&&(D._status=1,D._result=De)},function(De){(D._status===0||D._status===-1)&&(D._status=2,D._result=De)}),D._status===-1&&(D._status=0,D._result=ie)}if(D._status===1)return D._result.default;throw D._result}var ce={current:null},B={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:H};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(D,ie,De){he(D,function(){ie.apply(this,arguments)},De)},count:function(D){var ie=0;return he(D,function(){ie++}),ie},toArray:function(D){return he(D,function(ie){return ie})||[]},only:function(D){if(!A(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ft.Component=S,ft.Fragment=n,ft.Profiler=o,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=m,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=se,ft.cloneElement=function(D,ie,De){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Q=T({},D.props),pe=D.key,Me=D.ref,_e=D._owner;if(ie!=null){if(ie.ref!==void 0&&(Me=ie.ref,_e=H.current),ie.key!==void 0&&(pe=""+ie.key),D.type&&D.type.defaultProps)var be=D.type.defaultProps;for(Ye in ie)X.call(ie,Ye)&&!O.hasOwnProperty(Ye)&&(Q[Ye]=ie[Ye]===void 0&&be!==void 0?be[Ye]:ie[Ye])}var Ye=arguments.length-2;if(Ye===1)Q.children=De;else if(1<Ye){be=Array(Ye);for(var je=0;je<Ye;je++)be[je]=arguments[je+2];Q.children=be}return{$$typeof:s,type:D.type,key:pe,ref:Me,props:Q,_owner:_e}},ft.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:c,_context:D},D.Consumer=D},ft.createElement=Y,ft.createFactory=function(D){var ie=Y.bind(null,D);return ie.type=D,ie},ft.createRef=function(){return{current:null}},ft.forwardRef=function(D){return{$$typeof:f,render:D}},ft.isValidElement=A,ft.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:oe}},ft.memo=function(D,ie){return{$$typeof:g,type:D,compare:ie===void 0?null:ie}},ft.startTransition=function(D){var ie=B.transition;B.transition={};try{D()}finally{B.transition=ie}},ft.unstable_act=se,ft.useCallback=function(D,ie){return ce.current.useCallback(D,ie)},ft.useContext=function(D){return ce.current.useContext(D)},ft.useDebugValue=function(){},ft.useDeferredValue=function(D){return ce.current.useDeferredValue(D)},ft.useEffect=function(D,ie){return ce.current.useEffect(D,ie)},ft.useId=function(){return ce.current.useId()},ft.useImperativeHandle=function(D,ie,De){return ce.current.useImperativeHandle(D,ie,De)},ft.useInsertionEffect=function(D,ie){return ce.current.useInsertionEffect(D,ie)},ft.useLayoutEffect=function(D,ie){return ce.current.useLayoutEffect(D,ie)},ft.useMemo=function(D,ie){return ce.current.useMemo(D,ie)},ft.useReducer=function(D,ie,De){return ce.current.useReducer(D,ie,De)},ft.useRef=function(D){return ce.current.useRef(D)},ft.useState=function(D){return ce.current.useState(D)},ft.useSyncExternalStore=function(D,ie,De){return ce.current.useSyncExternalStore(D,ie,De)},ft.useTransition=function(){return ce.current.useTransition()},ft.version="18.3.1",ft}var Sp;function Hd(){return Sp||(Sp=1,pu.exports=Wx()),pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function Xx(){if(Mp)return Ca;Mp=1;var s=Hd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var v,_={},y=null,M=null;g!==void 0&&(y=""+g),m.key!==void 0&&(y=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)r.call(m,v)&&!c.hasOwnProperty(v)&&(_[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)_[v]===void 0&&(_[v]=m[v]);return{$$typeof:e,type:f,key:y,ref:M,props:_,_owner:o.current}}return Ca.Fragment=n,Ca.jsx=d,Ca.jsxs=d,Ca}var Ep;function Yx(){return Ep||(Ep=1,hu.exports=Xx()),hu.exports}var h=Yx(),$t=Hd();const qx=Rm($t);var Zo={},mu={exports:{}},Ln={},gu={exports:{}},xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function $x(){return wp||(wp=1,(function(s){function e(B,le){var se=B.length;B.push(le);e:for(;0<se;){var D=se-1>>>1,ie=B[D];if(0<o(ie,le))B[D]=le,B[se]=ie,se=D;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var le=B[0],se=B.pop();if(se!==le){B[0]=se;e:for(var D=0,ie=B.length,De=ie>>>1;D<De;){var Q=2*(D+1)-1,pe=B[Q],Me=Q+1,_e=B[Me];if(0>o(pe,se))Me<ie&&0>o(_e,pe)?(B[D]=_e,B[Me]=se,D=Me):(B[D]=pe,B[Q]=se,D=Q);else if(Me<ie&&0>o(_e,se))B[D]=_e,B[Me]=se,D=Me;else break e}}return le}function o(B,le){var se=B.sortIndex-le.sortIndex;return se!==0?se:B.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var m=[],g=[],v=1,_=null,y=3,M=!1,T=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var le=n(g);le!==null;){if(le.callback===null)r(g);else if(le.startTime<=B)r(g),le.sortIndex=le.expirationTime,e(m,le);else break;le=n(g)}}function N(B){if(C=!1,I(B),!T)if(n(m)!==null)T=!0,oe(X);else{var le=n(g);le!==null&&ce(N,le.startTime-B)}}function X(B,le){T=!1,C&&(C=!1,x(Y),Y=-1),M=!0;var se=y;try{for(I(le),_=n(m);_!==null&&(!(_.expirationTime>le)||B&&!z());){var D=_.callback;if(typeof D=="function"){_.callback=null,y=_.priorityLevel;var ie=D(_.expirationTime<=le);le=s.unstable_now(),typeof ie=="function"?_.callback=ie:_===n(m)&&r(m),I(le)}else r(m);_=n(m)}if(_!==null)var De=!0;else{var Q=n(g);Q!==null&&ce(N,Q.startTime-le),De=!1}return De}finally{_=null,y=se,M=!1}}var H=!1,O=null,Y=-1,R=5,A=-1;function z(){return!(s.unstable_now()-A<R)}function ae(){if(O!==null){var B=s.unstable_now();A=B;var le=!0;try{le=O(!0,B)}finally{le?J():(H=!1,O=null)}}else H=!1}var J;if(typeof U=="function")J=function(){U(ae)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=ae,J=function(){he.postMessage(null)}}else J=function(){S(ae,0)};function oe(B){O=B,H||(H=!0,J())}function ce(B,le){Y=S(function(){B(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,oe(X))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(B){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var se=y;y=le;try{return B()}finally{y=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,le){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=y;y=B;try{return le()}finally{y=se}},s.unstable_scheduleCallback=function(B,le,se){var D=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?D+se:D):se=D,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,B={id:v++,callback:le,priorityLevel:B,startTime:se,expirationTime:ie,sortIndex:-1},se>D?(B.sortIndex=se,e(g,B),n(m)===null&&B===n(g)&&(C?(x(Y),Y=-1):C=!0,ce(N,se-D))):(B.sortIndex=ie,e(m,B),T||M||(T=!0,oe(X))),B},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(B){var le=y;return function(){var se=y;y=le;try{return B.apply(this,arguments)}finally{y=se}}}})(xu)),xu}var bp;function Kx(){return bp||(bp=1,gu.exports=$x()),gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Zx(){if(Tp)return Ln;Tp=1;var s=Hd(),e=Kx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function y(t){return m.call(_,t)?!0:m.call(v,t)?!1:g.test(t)?_[t]=!0:(v[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,u,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,U);S[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,U);S[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,U);S[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,i,a,l){var u=S.hasOwnProperty(i)?S[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,u,l)&&(a=null),l||u===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),H=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,D;function ie(t){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+t}var De=!1;function Q(t,i){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var u=te.stack.split(`
`),p=l.stack.split(`
`),E=u.length-1,L=p.length-1;1<=E&&0<=L&&u[E]!==p[L];)L--;for(;1<=E&&0<=L;E--,L--)if(u[E]!==p[L]){if(E!==1||L!==1)do if(E--,L--,0>L||u[E]!==p[L]){var F=`
`+u[E].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=E&&0<=L);break}}}finally{De=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ie(t):""}function pe(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case H:return"Portal";case R:return"Profiler";case Y:return"StrictMode";case J:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ye(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t){var i=Ye(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){l=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){t._valueTracker||(t._valueTracker=je(t))}function Nt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ye(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function yn(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&I(t,"checked",i,!1)}function ut(t,i){ht(t,i);var a=be(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,a):i.hasOwnProperty("defaultValue")&&wt(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function wt(t,i,a){(i!=="number"||lt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ge=Array.isArray;function P(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ge(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:be(a)}}function me(t,i){var a=be(i.value),l=be(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Te,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Te=Te||document.createElement("div"),Te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Te.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ct(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function Qe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=Qe(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var ke=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function j(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,re=null,fe=null;function Pe(t){if(t=ha(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fo(i),Ae(t.stateNode,t.type,i))}}function Ne(t){re?fe?fe.push(t):fe=[t]:re=t}function rt(){if(re){var t=re,i=fe;if(fe=re=null,Pe(t),i)for(t=0;t<i.length;t++)Pe(i[t])}}function Lt(t,i){return t(i)}function Kt(){}var vt=!1;function Tn(t,i,a){if(vt)return t(i,a);vt=!0;try{return Lt(t,i,a)}finally{vt=!1,(re!==null||fe!==null)&&(Kt(),rt())}}function Sn(t,i){var a=t.stateNode;if(a===null)return null;var l=fo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var es=!1;if(f)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){es=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{es=!1}function Si(t,i,a,l,u,p,E,L,F){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(ve){this.onError(ve)}}var Mi=!1,wr=null,br=!1,Wi=null,ja={onError:function(t){Mi=!0,wr=t}};function ts(t,i,a,l,u,p,E,L,F){Mi=!1,wr=null,Si.apply(ja,arguments)}function Ga(t,i,a,l,u,p,E,L,F){if(ts.apply(this,arguments),Mi){if(Mi){var te=wr;Mi=!1,wr=null}else throw Error(n(198));br||(br=!0,Wi=te)}}function ui(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Wa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Xa(t){if(ui(t)!==t)throw Error(n(188))}function Fl(t){var i=t.alternate;if(!i){if(i=ui(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return Xa(u),t;if(p===l)return Xa(u),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=u,l=p;else{for(var E=!1,L=u.child;L;){if(L===a){E=!0,a=u,l=p;break}if(L===l){E=!0,l=u,a=p;break}L=L.sibling}if(!E){for(L=p.child;L;){if(L===a){E=!0,a=p,l=u;break}if(L===l){E=!0,l=p,a=u;break}L=L.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Ya(t){return t=Fl(t),t!==null?qa(t):null}function qa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=qa(t);if(i!==null)return i;t=t.sibling}return null}var $a=e.unstable_scheduleCallback,b=e.unstable_cancelCallback,G=e.unstable_shouldYield,ee=e.unstable_requestPaint,$=e.unstable_now,W=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ze=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,He=null;function mt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:xt,Bt=Math.log,Ft=Math.LN2;function xt(t){return t>>>=0,t===0?32:31-(Bt(t)/Ft|0)|0}var $e=64,Ht=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,E=a&268435455;if(E!==0){var L=E&~u;L!==0?l=pt(L):(p&=E,p!==0&&(l=pt(p)))}else E=a&~u,E!==0?l=pt(E):p!==0&&(l=pt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-st(i),u=1<<a,l|=t[a],i&=~u;return l}function Xi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-st(p),L=1<<E,F=u[E];F===-1?((L&a)===0||(L&l)!==0)&&(u[E]=Xi(L,i)):F<=i&&(t.expiredLanes|=L),p&=~L}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function At(){var t=$e;return $e<<=1,($e&4194240)===0&&($e=64),t}function fn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function tn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=a}function ln(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-st(a),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,a&=~p}}function nn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-st(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}var _t=0;function di(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Qd,Ol,Jd,ef,tf,kl=!1,Ka=[],Yi=null,qi=null,$i=null,Zs=new Map,Qs=new Map,Ki=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nf(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,a,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=ha(i),i!==null&&Ol(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function pg(t,i,a,l,u){switch(i){case"focusin":return Yi=Js(Yi,t,i,a,l,u),!0;case"dragenter":return qi=Js(qi,t,i,a,l,u),!0;case"mouseover":return $i=Js($i,t,i,a,l,u),!0;case"pointerover":var p=u.pointerId;return Zs.set(p,Js(Zs.get(p)||null,t,i,a,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Qs.set(p,Js(Qs.get(p)||null,t,i,a,l,u)),!0}return!1}function rf(t){var i=Tr(t.target);if(i!==null){var a=ui(i);if(a!==null){if(i=a.tag,i===13){if(i=Wa(a),i!==null){t.blockedOn=i,tf(t.priority,function(){Jd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Bl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Et=l,a.target.dispatchEvent(l),Et=null}else return i=ha(a),i!==null&&Ol(i),t.blockedOn=a,!1;i.shift()}return!0}function sf(t,i,a){Za(t)&&a.delete(i)}function mg(){kl=!1,Yi!==null&&Za(Yi)&&(Yi=null),qi!==null&&Za(qi)&&(qi=null),$i!==null&&Za($i)&&($i=null),Zs.forEach(sf),Qs.forEach(sf)}function ea(t,i){t.blockedOn===i&&(t.blockedOn=null,kl||(kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mg)))}function ta(t){function i(u){return ea(u,t)}if(0<Ka.length){ea(Ka[0],t);for(var a=1;a<Ka.length;a++){var l=Ka[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Yi!==null&&ea(Yi,t),qi!==null&&ea(qi,t),$i!==null&&ea($i,t),Zs.forEach(i),Qs.forEach(i),a=0;a<Ki.length;a++)l=Ki[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)rf(a),a.blockedOn===null&&Ki.shift()}var ns=N.ReactCurrentBatchConfig,Qa=!0;function gg(t,i,a,l){var u=_t,p=ns.transition;ns.transition=null;try{_t=1,zl(t,i,a,l)}finally{_t=u,ns.transition=p}}function xg(t,i,a,l){var u=_t,p=ns.transition;ns.transition=null;try{_t=4,zl(t,i,a,l)}finally{_t=u,ns.transition=p}}function zl(t,i,a,l){if(Qa){var u=Bl(t,i,a,l);if(u===null)ic(t,i,l,Ja,a),nf(t,l);else if(pg(u,t,i,a,l))l.stopPropagation();else if(nf(t,l),i&4&&-1<hg.indexOf(t)){for(;u!==null;){var p=ha(u);if(p!==null&&Qd(p),p=Bl(t,i,a,l),p===null&&ic(t,i,l,Ja,a),p===u)break;u=p}u!==null&&l.stopPropagation()}else ic(t,i,l,null,a)}}var Ja=null;function Bl(t,i,a,l){if(Ja=null,t=j(l),t=Tr(t),t!==null)if(i=ui(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Wa(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ja=t,null}function af(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W()){case Se:return 1;case Ce:return 4;case Le:case ze:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Zi=null,Hl=null,eo=null;function of(){if(eo)return eo;var t,i=Hl,a=i.length,l,u="value"in Zi?Zi.value:Zi.textContent,p=u.length;for(t=0;t<a&&i[t]===u[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===u[p-l];l++);return eo=u.slice(t,1<l?1-l:void 0)}function to(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function lf(){return!1}function On(t){function i(a,l,u,p,E){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(a=t[L],this[L]=a?a(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?no:lf,this.isPropagationStopped=lf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=On(is),na=se({},is,{view:0,detail:0}),vg=On(na),jl,Gl,ia,io=se({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(jl=t.screenX-ia.screenX,Gl=t.screenY-ia.screenY):Gl=jl=0,ia=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),cf=On(io),_g=se({},io,{dataTransfer:0}),yg=On(_g),Sg=se({},na,{relatedTarget:0}),Wl=On(Sg),Mg=se({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=On(Mg),wg=se({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bg=On(wg),Tg=se({},is,{data:0}),uf=On(Tg),Ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Rg[t])?!!i[t]:!1}function Xl(){return Ng}var Pg=se({},na,{key:function(t){if(t.key){var i=Ag[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xl,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lg=On(Pg),Ig=se({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=On(Ig),Dg=se({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xl}),Ug=On(Dg),Fg=se({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=On(Fg),kg=se({},io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zg=On(kg),Bg=[9,13,27,32],Yl=f&&"CompositionEvent"in window,ra=null;f&&"documentMode"in document&&(ra=document.documentMode);var Hg=f&&"TextEvent"in window&&!ra,ff=f&&(!Yl||ra&&8<ra&&11>=ra),hf=" ",pf=!1;function mf(t,i){switch(t){case"keyup":return Bg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Vg(t,i){switch(t){case"compositionend":return gf(i);case"keypress":return i.which!==32?null:(pf=!0,hf);case"textInput":return t=i.data,t===hf&&pf?null:t;default:return null}}function jg(t,i){if(rs)return t==="compositionend"||!Yl&&mf(t,i)?(t=of(),eo=Hl=Zi=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ff&&i.locale!=="ko"?null:i.data;default:return null}}var Gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Gg[t.type]:i==="textarea"}function vf(t,i,a,l){Ne(l),i=lo(i,"onChange"),0<i.length&&(a=new Vl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var sa=null,aa=null;function Wg(t){Ff(t,0)}function ro(t){var i=cs(t);if(Nt(i))return t}function Xg(t,i){if(t==="change")return i}var _f=!1;if(f){var ql;if(f){var $l="oninput"in document;if(!$l){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),$l=typeof yf.oninput=="function"}ql=$l}else ql=!1;_f=ql&&(!document.documentMode||9<document.documentMode)}function Sf(){sa&&(sa.detachEvent("onpropertychange",Mf),aa=sa=null)}function Mf(t){if(t.propertyName==="value"&&ro(aa)){var i=[];vf(i,aa,t,j(t)),Tn(Wg,i)}}function Yg(t,i,a){t==="focusin"?(Sf(),sa=i,aa=a,sa.attachEvent("onpropertychange",Mf)):t==="focusout"&&Sf()}function qg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ro(aa)}function $g(t,i){if(t==="click")return ro(i)}function Kg(t,i){if(t==="input"||t==="change")return ro(i)}function Zg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:Zg;function oa(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!m.call(i,u)||!Qn(t[u],i[u]))return!1}return!0}function Ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wf(t,i){var a=Ef(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ef(a)}}function bf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?bf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Tf(){for(var t=window,i=lt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=lt(t.document)}return i}function Kl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Qg(t){var i=Tf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&bf(a.ownerDocument.documentElement,a)){if(l!==null&&Kl(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=wf(a,p);var E=wf(a,l);u&&E&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jg=f&&"documentMode"in document&&11>=document.documentMode,ss=null,Zl=null,la=null,Ql=!1;function Af(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ql||ss==null||ss!==lt(l)||(l=ss,"selectionStart"in l&&Kl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),la&&oa(la,l)||(la=l,l=lo(Zl,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ss)))}function so(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var as={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Jl={},Cf={};f&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ao(t){if(Jl[t])return Jl[t];if(!as[t])return t;var i=as[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Cf)return Jl[t]=i[a];return t}var Rf=ao("animationend"),Nf=ao("animationiteration"),Pf=ao("animationstart"),Lf=ao("transitionend"),If=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){If.set(t,i),c(i,[t])}for(var ec=0;ec<Df.length;ec++){var tc=Df[ec],ex=tc.toLowerCase(),tx=tc[0].toUpperCase()+tc.slice(1);Qi(ex,"on"+tx)}Qi(Rf,"onAnimationEnd"),Qi(Nf,"onAnimationIteration"),Qi(Pf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Lf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Uf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Ga(l,i,void 0,t),t.currentTarget=null}function Ff(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var E=l.length-1;0<=E;E--){var L=l[E],F=L.instance,te=L.currentTarget;if(L=L.listener,F!==p&&u.isPropagationStopped())break e;Uf(u,L,te),p=F}else for(E=0;E<l.length;E++){if(L=l[E],F=L.instance,te=L.currentTarget,L=L.listener,F!==p&&u.isPropagationStopped())break e;Uf(u,L,te),p=F}}}if(br)throw t=Wi,br=!1,Wi=null,t}function It(t,i){var a=i[cc];a===void 0&&(a=i[cc]=new Set);var l=t+"__bubble";a.has(l)||(Of(i,t,2,!1),a.add(l))}function nc(t,i,a){var l=0;i&&(l|=4),Of(a,t,l,i)}var oo="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[oo]){t[oo]=!0,r.forEach(function(a){a!=="selectionchange"&&(nx.has(a)||nc(a,!1,t),nc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[oo]||(i[oo]=!0,nc("selectionchange",!1,i))}}function Of(t,i,a,l){switch(af(i)){case 1:var u=gg;break;case 4:u=xg;break;default:u=zl}a=u.bind(null,i,a,t),u=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function ic(t,i,a,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var L=l.stateNode.containerInfo;if(L===u||L.nodeType===8&&L.parentNode===u)break;if(E===4)for(E=l.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===u||F.nodeType===8&&F.parentNode===u))return;E=E.return}for(;L!==null;){if(E=Tr(L),E===null)return;if(F=E.tag,F===5||F===6){l=p=E;continue e}L=L.parentNode}}l=l.return}Tn(function(){var te=p,ve=j(a),ye=[];e:{var ge=If.get(t);if(ge!==void 0){var Ie=Vl,Be=t;switch(t){case"keypress":if(to(a)===0)break e;case"keydown":case"keyup":Ie=Lg;break;case"focusin":Be="focus",Ie=Wl;break;case"focusout":Be="blur",Ie=Wl;break;case"beforeblur":case"afterblur":Ie=Wl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Ug;break;case Rf:case Nf:case Pf:Ie=Eg;break;case Lf:Ie=Og;break;case"scroll":Ie=vg;break;case"wheel":Ie=zg;break;case"copy":case"cut":case"paste":Ie=bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=df}var Ve=(i&4)!==0,Gt=!Ve&&t==="scroll",q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var V=te,K;V!==null;){K=V;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,q!==null&&(we=Sn(V,q),we!=null&&Ve.push(da(V,we,K)))),Gt)break;V=V.return}0<Ve.length&&(ge=new Ie(ge,Be,null,a,ve),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&a!==Et&&(Be=a.relatedTarget||a.fromElement)&&(Tr(Be)||Be[wi]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(Be=a.relatedTarget||a.toElement,Ie=te,Be=Be?Tr(Be):null,Be!==null&&(Gt=ui(Be),Be!==Gt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=te),Ie!==Be)){if(Ve=cf,we="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=df,we="onPointerLeave",q="onPointerEnter",V="pointer"),Gt=Ie==null?ge:cs(Ie),K=Be==null?ge:cs(Be),ge=new Ve(we,V+"leave",Ie,a,ve),ge.target=Gt,ge.relatedTarget=K,we=null,Tr(ve)===te&&(Ve=new Ve(q,V+"enter",Be,a,ve),Ve.target=K,Ve.relatedTarget=Gt,we=Ve),Gt=we,Ie&&Be)t:{for(Ve=Ie,q=Be,V=0,K=Ve;K;K=os(K))V++;for(K=0,we=q;we;we=os(we))K++;for(;0<V-K;)Ve=os(Ve),V--;for(;0<K-V;)q=os(q),K--;for(;V--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=os(Ve),q=os(q)}Ve=null}else Ve=null;Ie!==null&&kf(ye,ge,Ie,Ve,!1),Be!==null&&Gt!==null&&kf(ye,Gt,Be,Ve,!0)}}e:{if(ge=te?cs(te):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var Xe=Xg;else if(xf(ge))if(_f)Xe=Kg;else{Xe=qg;var Ke=Yg}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=$g);if(Xe&&(Xe=Xe(t,te))){vf(ye,Xe,a,ve);break e}Ke&&Ke(t,ge,te),t==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&wt(ge,"number",ge.value)}switch(Ke=te?cs(te):window,t){case"focusin":(xf(Ke)||Ke.contentEditable==="true")&&(ss=Ke,Zl=te,la=null);break;case"focusout":la=Zl=ss=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Af(ye,a,ve);break;case"selectionchange":if(Jg)break;case"keydown":case"keyup":Af(ye,a,ve)}var Ze;if(Yl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else rs?mf(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(ff&&a.locale!=="ko"&&(rs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&rs&&(Ze=of()):(Zi=ve,Hl="value"in Zi?Zi.value:Zi.textContent,rs=!0)),Ke=lo(te,nt),0<Ke.length&&(nt=new uf(nt,t,null,a,ve),ye.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=gf(a),Ze!==null&&(nt.data=Ze)))),(Ze=Hg?Vg(t,a):jg(t,a))&&(te=lo(te,"onBeforeInput"),0<te.length&&(ve=new uf("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:te}),ve.data=Ze))}Ff(ye,i)})}function da(t,i,a){return{instance:t,listener:i,currentTarget:a}}function lo(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=Sn(t,a),p!=null&&l.unshift(da(t,p,u)),p=Sn(t,i),p!=null&&l.push(da(t,p,u))),t=t.return}return l}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kf(t,i,a,l,u){for(var p=i._reactName,E=[];a!==null&&a!==l;){var L=a,F=L.alternate,te=L.stateNode;if(F!==null&&F===l)break;L.tag===5&&te!==null&&(L=te,u?(F=Sn(a,p),F!=null&&E.unshift(da(a,F,L))):u||(F=Sn(a,p),F!=null&&E.push(da(a,F,L)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var ix=/\r\n?/g,rx=/\u0000|\uFFFD/g;function zf(t){return(typeof t=="string"?t:""+t).replace(ix,`
`).replace(rx,"")}function co(t,i,a){if(i=zf(i),zf(t)!==i&&a)throw Error(n(425))}function uo(){}var rc=null,sc=null;function ac(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var oc=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(t){return Bf.resolve(null).then(t).catch(ox)}:oc;function ox(t){setTimeout(function(){throw t})}function lc(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),ta(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);ta(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Hf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),fi="__reactFiber$"+ls,fa="__reactProps$"+ls,wi="__reactContainer$"+ls,cc="__reactEvents$"+ls,lx="__reactListeners$"+ls,cx="__reactHandles$"+ls;function Tr(t){var i=t[fi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[wi]||a[fi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Hf(t);t!==null;){if(a=t[fi])return a;t=Hf(t)}return i}t=a,a=t.parentNode}return null}function ha(t){return t=t[fi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fo(t){return t[fa]||null}var uc=[],us=-1;function er(t){return{current:t}}function Dt(t){0>us||(t.current=uc[us],uc[us]=null,us--)}function Pt(t,i){us++,uc[us]=t.current,t.current=i}var tr={},hn=er(tr),An=er(!1),Ar=tr;function ds(t,i){var a=t.type.contextTypes;if(!a)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in a)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Cn(t){return t=t.childContextTypes,t!=null}function ho(){Dt(An),Dt(hn)}function Vf(t,i,a){if(hn.current!==tr)throw Error(n(168));Pt(hn,i),Pt(An,a)}function jf(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,_e(t)||"Unknown",u));return se({},a,l)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ar=hn.current,Pt(hn,t),Pt(An,An.current),!0}function Gf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=jf(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Dt(An),Dt(hn),Pt(hn,t)):Dt(An),Pt(An,a)}var bi=null,mo=!1,dc=!1;function Wf(t){bi===null?bi=[t]:bi.push(t)}function ux(t){mo=!0,Wf(t)}function nr(){if(!dc&&bi!==null){dc=!0;var t=0,i=_t;try{var a=bi;for(_t=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}bi=null,mo=!1}catch(u){throw bi!==null&&(bi=bi.slice(t+1)),$a(Se,nr),u}finally{_t=i,dc=!1}}return null}var fs=[],hs=0,go=null,xo=0,jn=[],Gn=0,Cr=null,Ti=1,Ai="";function Rr(t,i){fs[hs++]=xo,fs[hs++]=go,go=t,xo=i}function Xf(t,i,a){jn[Gn++]=Ti,jn[Gn++]=Ai,jn[Gn++]=Cr,Cr=t;var l=Ti;t=Ai;var u=32-st(l)-1;l&=~(1<<u),a+=1;var p=32-st(i)+u;if(30<p){var E=u-u%5;p=(l&(1<<E)-1).toString(32),l>>=E,u-=E,Ti=1<<32-st(i)+u|a<<u|l,Ai=p+t}else Ti=1<<p|a<<u|l,Ai=t}function fc(t){t.return!==null&&(Rr(t,1),Xf(t,1,0))}function hc(t){for(;t===go;)go=fs[--hs],fs[hs]=null,xo=fs[--hs],fs[hs]=null;for(;t===Cr;)Cr=jn[--Gn],jn[Gn]=null,Ai=jn[--Gn],jn[Gn]=null,Ti=jn[--Gn],jn[Gn]=null}var kn=null,zn=null,Ot=!1,Jn=null;function Yf(t,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function qf(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,zn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Cr!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,kn=t,zn=null,!0):!1;default:return!1}}function pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mc(t){if(Ot){var i=zn;if(i){var a=i;if(!qf(t,i)){if(pc(t))throw Error(n(418));i=Ji(a.nextSibling);var l=kn;i&&qf(t,i)?Yf(l,a):(t.flags=t.flags&-4097|2,Ot=!1,kn=t)}}else{if(pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,kn=t}}}function $f(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function vo(t){if(t!==kn)return!1;if(!Ot)return $f(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ac(t.type,t.memoizedProps)),i&&(i=zn)){if(pc(t))throw Kf(),Error(n(418));for(;i;)Yf(t,i),i=Ji(i.nextSibling)}if($f(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){zn=Ji(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}zn=null}}else zn=kn?Ji(t.stateNode.nextSibling):null;return!0}function Kf(){for(var t=zn;t;)t=Ji(t.nextSibling)}function ps(){zn=kn=null,Ot=!1}function gc(t){Jn===null?Jn=[t]:Jn.push(t)}var dx=N.ReactCurrentBatchConfig;function pa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var L=u.refs;E===null?delete L[p]:L[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function _o(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Zf(t){var i=t._init;return i(t._payload)}function Qf(t){function i(q,V){if(t){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function l(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function u(q,V){return q=ur(q,V),q.index=0,q.sibling=null,q}function p(q,V,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return t&&q.alternate===null&&(q.flags|=2),q}function L(q,V,K,we){return V===null||V.tag!==6?(V=ou(K,q.mode,we),V.return=q,V):(V=u(V,K),V.return=q,V)}function F(q,V,K,we){var Xe=K.type;return Xe===O?ve(q,V,K.props.children,we,K.key):V!==null&&(V.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&Zf(Xe)===V.type)?(we=u(V,K.props),we.ref=pa(q,V,K),we.return=q,we):(we=jo(K.type,K.key,K.props,null,q.mode,we),we.ref=pa(q,V,K),we.return=q,we)}function te(q,V,K,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=lu(K,q.mode,we),V.return=q,V):(V=u(V,K.children||[]),V.return=q,V)}function ve(q,V,K,we,Xe){return V===null||V.tag!==7?(V=Or(K,q.mode,we,Xe),V.return=q,V):(V=u(V,K),V.return=q,V)}function ye(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ou(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return K=jo(V.type,V.key,V.props,null,q.mode,K),K.ref=pa(q,null,V),K.return=q,K;case H:return V=lu(V,q.mode,K),V.return=q,V;case oe:var we=V._init;return ye(q,we(V._payload),K)}if(Ge(V)||le(V))return V=Or(V,q.mode,K,null),V.return=q,V;_o(q,V)}return null}function ge(q,V,K,we){var Xe=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:L(q,V,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case X:return K.key===Xe?F(q,V,K,we):null;case H:return K.key===Xe?te(q,V,K,we):null;case oe:return Xe=K._init,ge(q,V,Xe(K._payload),we)}if(Ge(K)||le(K))return Xe!==null?null:ve(q,V,K,we,null);_o(q,K)}return null}function Ie(q,V,K,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(K)||null,L(V,q,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case X:return q=q.get(we.key===null?K:we.key)||null,F(V,q,we,Xe);case H:return q=q.get(we.key===null?K:we.key)||null,te(V,q,we,Xe);case oe:var Ke=we._init;return Ie(q,V,K,Ke(we._payload),Xe)}if(Ge(we)||le(we))return q=q.get(K)||null,ve(V,q,we,Xe,null);_o(V,we)}return null}function Be(q,V,K,we){for(var Xe=null,Ke=null,Ze=V,nt=V=0,an=null;Ze!==null&&nt<K.length;nt++){Ze.index>nt?(an=Ze,Ze=null):an=Ze.sibling;var St=ge(q,Ze,K[nt],we);if(St===null){Ze===null&&(Ze=an);break}t&&Ze&&St.alternate===null&&i(q,Ze),V=p(St,V,nt),Ke===null?Xe=St:Ke.sibling=St,Ke=St,Ze=an}if(nt===K.length)return a(q,Ze),Ot&&Rr(q,nt),Xe;if(Ze===null){for(;nt<K.length;nt++)Ze=ye(q,K[nt],we),Ze!==null&&(V=p(Ze,V,nt),Ke===null?Xe=Ze:Ke.sibling=Ze,Ke=Ze);return Ot&&Rr(q,nt),Xe}for(Ze=l(q,Ze);nt<K.length;nt++)an=Ie(Ze,q,nt,K[nt],we),an!==null&&(t&&an.alternate!==null&&Ze.delete(an.key===null?nt:an.key),V=p(an,V,nt),Ke===null?Xe=an:Ke.sibling=an,Ke=an);return t&&Ze.forEach(function(dr){return i(q,dr)}),Ot&&Rr(q,nt),Xe}function Ve(q,V,K,we){var Xe=le(K);if(typeof Xe!="function")throw Error(n(150));if(K=Xe.call(K),K==null)throw Error(n(151));for(var Ke=Xe=null,Ze=V,nt=V=0,an=null,St=K.next();Ze!==null&&!St.done;nt++,St=K.next()){Ze.index>nt?(an=Ze,Ze=null):an=Ze.sibling;var dr=ge(q,Ze,St.value,we);if(dr===null){Ze===null&&(Ze=an);break}t&&Ze&&dr.alternate===null&&i(q,Ze),V=p(dr,V,nt),Ke===null?Xe=dr:Ke.sibling=dr,Ke=dr,Ze=an}if(St.done)return a(q,Ze),Ot&&Rr(q,nt),Xe;if(Ze===null){for(;!St.done;nt++,St=K.next())St=ye(q,St.value,we),St!==null&&(V=p(St,V,nt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return Ot&&Rr(q,nt),Xe}for(Ze=l(q,Ze);!St.done;nt++,St=K.next())St=Ie(Ze,q,nt,St.value,we),St!==null&&(t&&St.alternate!==null&&Ze.delete(St.key===null?nt:St.key),V=p(St,V,nt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return t&&Ze.forEach(function(Gx){return i(q,Gx)}),Ot&&Rr(q,nt),Xe}function Gt(q,V,K,we){if(typeof K=="object"&&K!==null&&K.type===O&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case X:e:{for(var Xe=K.key,Ke=V;Ke!==null;){if(Ke.key===Xe){if(Xe=K.type,Xe===O){if(Ke.tag===7){a(q,Ke.sibling),V=u(Ke,K.props.children),V.return=q,q=V;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&Zf(Xe)===Ke.type){a(q,Ke.sibling),V=u(Ke,K.props),V.ref=pa(q,Ke,K),V.return=q,q=V;break e}a(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}K.type===O?(V=Or(K.props.children,q.mode,we,K.key),V.return=q,q=V):(we=jo(K.type,K.key,K.props,null,q.mode,we),we.ref=pa(q,V,K),we.return=q,q=we)}return E(q);case H:e:{for(Ke=K.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(q,V.sibling),V=u(V,K.children||[]),V.return=q,q=V;break e}else{a(q,V);break}else i(q,V);V=V.sibling}V=lu(K,q.mode,we),V.return=q,q=V}return E(q);case oe:return Ke=K._init,Gt(q,V,Ke(K._payload),we)}if(Ge(K))return Be(q,V,K,we);if(le(K))return Ve(q,V,K,we);_o(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(a(q,V.sibling),V=u(V,K),V.return=q,q=V):(a(q,V),V=ou(K,q.mode,we),V.return=q,q=V),E(q)):a(q,V)}return Gt}var ms=Qf(!0),Jf=Qf(!1),yo=er(null),So=null,gs=null,xc=null;function vc(){xc=gs=So=null}function _c(t){var i=yo.current;Dt(yo),t._currentValue=i}function yc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function xs(t,i){So=t,xc=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Rn=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(xc!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(So===null)throw Error(n(308));gs=t,So.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Nr=null;function Sc(t){Nr===null?Nr=[t]:Nr.push(t)}function eh(t,i,a,l){var u=i.interleaved;return u===null?(a.next=a,Sc(i)):(a.next=u.next,u.next=a),i.interleaved=a,Ci(t,l)}function Ci(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ir=!1;function Mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ci(t,a)}return u=l.interleaved,u===null?(i.next=i,Sc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ci(t,a)}function Mo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,nn(t,a)}}function nh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?u=p=E:p=p.next=E,a=a.next}while(a!==null);p===null?u=p=i:p=p.next=i}else u=p=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Eo(t,i,a,l){var u=t.updateQueue;ir=!1;var p=u.firstBaseUpdate,E=u.lastBaseUpdate,L=u.shared.pending;if(L!==null){u.shared.pending=null;var F=L,te=F.next;F.next=null,E===null?p=te:E.next=te,E=F;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==E&&(L===null?ve.firstBaseUpdate=te:L.next=te,ve.lastBaseUpdate=F))}if(p!==null){var ye=u.baseState;E=0,ve=te=F=null,L=p;do{var ge=L.lane,Ie=L.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,Ve=L;switch(ge=i,Ie=a,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){ye=Be.call(Ie,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,ge=typeof Be=="function"?Be.call(Ie,ye,ge):Be,ge==null)break e;ye=se({},ye,ge);break e;case 2:ir=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[L]:ge.push(L))}else Ie={eventTime:Ie,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(te=ve=Ie,F=ye):ve=ve.next=Ie,E|=ge;if(L=L.next,L===null){if(L=u.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(ve===null&&(F=ye),u.baseState=F,u.firstBaseUpdate=te,u.lastBaseUpdate=ve,i=u.shared.interleaved,i!==null){u=i;do E|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);Ir|=E,t.lanes=E,t.memoizedState=ye}}function ih(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var ma={},hi=er(ma),ga=er(ma),xa=er(ma);function Pr(t){if(t===ma)throw Error(n(174));return t}function Ec(t,i){switch(Pt(xa,i),Pt(ga,t),Pt(hi,ma),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}Dt(hi),Pt(hi,i)}function vs(){Dt(hi),Dt(ga),Dt(xa)}function rh(t){Pr(xa.current);var i=Pr(hi.current),a=We(i,t.type);i!==a&&(Pt(ga,t),Pt(hi,a))}function wc(t){ga.current===t&&(Dt(hi),Dt(ga))}var kt=er(0);function wo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bc=[];function Tc(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var bo=N.ReactCurrentDispatcher,Ac=N.ReactCurrentBatchConfig,Lr=0,zt=null,Zt=null,rn=null,To=!1,va=!1,_a=0,fx=0;function pn(){throw Error(n(321))}function Cc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Qn(t[a],i[a]))return!1;return!0}function Rc(t,i,a,l,u,p){if(Lr=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,bo.current=t===null||t.memoizedState===null?gx:xx,t=a(l,u),va){p=0;do{if(va=!1,_a=0,25<=p)throw Error(n(301));p+=1,rn=Zt=null,i.updateQueue=null,bo.current=vx,t=a(l,u)}while(va)}if(bo.current=Ro,i=Zt!==null&&Zt.next!==null,Lr=0,rn=Zt=zt=null,To=!1,i)throw Error(n(300));return t}function Nc(){var t=_a!==0;return _a=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?zt.memoizedState=rn=t:rn=rn.next=t,rn}function Xn(){if(Zt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=rn===null?zt.memoizedState:rn.next;if(i!==null)rn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?zt.memoizedState=rn=t:rn=rn.next=t}return rn}function ya(t,i){return typeof i=="function"?i(t):i}function Pc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Zt,u=l.baseQueue,p=a.pending;if(p!==null){if(u!==null){var E=u.next;u.next=p.next,p.next=E}l.baseQueue=u=p,a.pending=null}if(u!==null){p=u.next,l=l.baseState;var L=E=null,F=null,te=p;do{var ve=te.lane;if((Lr&ve)===ve)F!==null&&(F=F.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var ye={lane:ve,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};F===null?(L=F=ye,E=l):F=F.next=ye,zt.lanes|=ve,Ir|=ve}te=te.next}while(te!==null&&te!==p);F===null?E=l:F.next=L,Qn(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=F,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do p=u.lane,zt.lanes|=p,Ir|=p,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Lc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,p=i.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do p=t(p,E.action),E=E.next;while(E!==u);Qn(p,i.memoizedState)||(Rn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function sh(){}function ah(t,i){var a=zt,l=Xn(),u=i(),p=!Qn(l.memoizedState,u);if(p&&(l.memoizedState=u,Rn=!0),l=l.queue,Ic(ch.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,Sa(9,lh.bind(null,a,l,u,i),void 0,null),sn===null)throw Error(n(349));(Lr&30)!==0||oh(a,i,u)}return u}function oh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function lh(t,i,a,l){i.value=a,i.getSnapshot=l,uh(i)&&dh(t)}function ch(t,i,a){return a(function(){uh(i)&&dh(t)})}function uh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Qn(t,a)}catch{return!0}}function dh(t){var i=Ci(t,1);i!==null&&ii(i,t,1,-1)}function fh(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},i.queue=t,t=t.dispatch=mx.bind(null,zt,t),[i.memoizedState,t]}function Sa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function hh(){return Xn().memoizedState}function Ao(t,i,a,l){var u=pi();zt.flags|=t,u.memoizedState=Sa(1|i,a,void 0,l===void 0?null:l)}function Co(t,i,a,l){var u=Xn();l=l===void 0?null:l;var p=void 0;if(Zt!==null){var E=Zt.memoizedState;if(p=E.destroy,l!==null&&Cc(l,E.deps)){u.memoizedState=Sa(i,a,p,l);return}}zt.flags|=t,u.memoizedState=Sa(1|i,a,p,l)}function ph(t,i){return Ao(8390656,8,t,i)}function Ic(t,i){return Co(2048,8,t,i)}function mh(t,i){return Co(4,2,t,i)}function gh(t,i){return Co(4,4,t,i)}function xh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function vh(t,i,a){return a=a!=null?a.concat([t]):null,Co(4,4,xh.bind(null,i,t),a)}function Dc(){}function _h(t,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function yh(t,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Sh(t,i,a){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=a):(Qn(a,i)||(a=At(),zt.lanes|=a,Ir|=a,t.baseState=!0),i)}function hx(t,i){var a=_t;_t=a!==0&&4>a?a:4,t(!0);var l=Ac.transition;Ac.transition={};try{t(!1),i()}finally{_t=a,Ac.transition=l}}function Mh(){return Xn().memoizedState}function px(t,i,a){var l=lr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Eh(t))wh(i,a);else if(a=eh(t,i,a,l),a!==null){var u=wn();ii(a,t,l,u),bh(a,i,l)}}function mx(t,i,a){var l=lr(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Eh(t))wh(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,L=p(E,a);if(u.hasEagerState=!0,u.eagerState=L,Qn(L,E)){var F=i.interleaved;F===null?(u.next=u,Sc(i)):(u.next=F.next,F.next=u),i.interleaved=u;return}}catch{}finally{}a=eh(t,i,u,l),a!==null&&(u=wn(),ii(a,t,l,u),bh(a,i,l))}}function Eh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function wh(t,i){va=To=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function bh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,nn(t,a)}}var Ro={readContext:Wn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},gx={readContext:Wn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:ph,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Ao(4194308,4,xh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ao(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ao(4,2,t,i)},useMemo:function(t,i){var a=pi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=pi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=px.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:fh,useDebugValue:Dc,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=fh(!1),i=t[0];return t=hx.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,u=pi();if(Ot){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),sn===null)throw Error(n(349));(Lr&30)!==0||oh(l,i,a)}u.memoizedState=a;var p={value:a,getSnapshot:i};return u.queue=p,ph(ch.bind(null,l,p,t),[t]),l.flags|=2048,Sa(9,lh.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=pi(),i=sn.identifierPrefix;if(Ot){var a=Ai,l=Ti;a=(l&~(1<<32-st(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=_a++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=fx++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},xx={readContext:Wn,useCallback:_h,useContext:Wn,useEffect:Ic,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:Pc,useRef:hh,useState:function(){return Pc(ya)},useDebugValue:Dc,useDeferredValue:function(t){var i=Xn();return Sh(i,Zt.memoizedState,t)},useTransition:function(){var t=Pc(ya)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:ah,useId:Mh,unstable_isNewReconciler:!1},vx={readContext:Wn,useCallback:_h,useContext:Wn,useEffect:Ic,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:Lc,useRef:hh,useState:function(){return Lc(ya)},useDebugValue:Dc,useDeferredValue:function(t){var i=Xn();return Zt===null?i.memoizedState=t:Sh(i,Zt.memoizedState,t)},useTransition:function(){var t=Lc(ya)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:ah,useId:Mh,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Uc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:se({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var No={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=wn(),u=lr(t),p=Ri(l,u);p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,u),i!==null&&(ii(i,t,u,l),Mo(i,t,u))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=wn(),u=lr(t),p=Ri(l,u);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,u),i!==null&&(ii(i,t,u,l),Mo(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=wn(),l=lr(t),u=Ri(a,l);u.tag=2,i!=null&&(u.callback=i),i=rr(t,u,l),i!==null&&(ii(i,t,l,a),Mo(i,t,l))}};function Th(t,i,a,l,u,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,E):i.prototype&&i.prototype.isPureReactComponent?!oa(a,l)||!oa(u,p):!0}function Ah(t,i,a){var l=!1,u=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(u=Cn(i)?Ar:hn.current,l=i.contextTypes,p=(l=l!=null)?ds(t,u):tr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=No,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function Ch(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&No.enqueueReplaceState(i,i.state,null)}function Fc(t,i,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Mc(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=Wn(p):(p=Cn(i)?Ar:hn.current,u.context=ds(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Uc(t,i,p,a),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&No.enqueueReplaceState(u,u.state,null),Eo(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var a="",l=i;do a+=pe(l),l=l.return;while(l);var u=a}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function Oc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function kc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function Rh(t,i,a){a=Ri(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Oo||(Oo=!0,Jc=l),kc(t,i)},a}function Nh(t,i,a){a=Ri(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){kc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){kc(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Ph(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new _x;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),t=Ix.bind(null,t,i,a),i.then(t,t))}function Lh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ih(t,i,a,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ri(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var yx=N.ReactCurrentOwner,Rn=!1;function En(t,i,a,l){i.child=t===null?Jf(i,null,a,l):ms(i,t.child,a,l)}function Dh(t,i,a,l,u){a=a.render;var p=i.ref;return xs(i,u),l=Rc(t,i,a,l,p,u),a=Nc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ni(t,i,u)):(Ot&&a&&fc(i),i.flags|=1,En(t,i,l,u),i.child)}function Uh(t,i,a,l,u){if(t===null){var p=a.type;return typeof p=="function"&&!au(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Fh(t,i,p,l,u)):(t=jo(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var E=p.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(E,l)&&t.ref===i.ref)return Ni(t,i,u)}return i.flags|=1,t=ur(p,l),t.ref=i.ref,t.return=i,i.child=t}function Fh(t,i,a,l,u){if(t!==null){var p=t.memoizedProps;if(oa(p,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,Ni(t,i,u)}return zc(t,i,a,l,u)}function Oh(t,i,a){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(Ss,Bn),Bn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pt(Ss,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Pt(Ss,Bn),Bn|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Pt(Ss,Bn),Bn|=l;return En(t,i,u,a),i.child}function kh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function zc(t,i,a,l,u){var p=Cn(a)?Ar:hn.current;return p=ds(i,p),xs(i,u),a=Rc(t,i,a,l,p,u),l=Nc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ni(t,i,u)):(Ot&&l&&fc(i),i.flags|=1,En(t,i,a,u),i.child)}function zh(t,i,a,l,u){if(Cn(a)){var p=!0;po(i)}else p=!1;if(xs(i,u),i.stateNode===null)Lo(t,i),Ah(i,a,l),Fc(i,a,l,u),l=!0;else if(t===null){var E=i.stateNode,L=i.memoizedProps;E.props=L;var F=E.context,te=a.contextType;typeof te=="object"&&te!==null?te=Wn(te):(te=Cn(a)?Ar:hn.current,te=ds(i,te));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==l||F!==te)&&Ch(i,E,l,te),ir=!1;var ge=i.memoizedState;E.state=ge,Eo(i,l,E,u),F=i.memoizedState,L!==l||ge!==F||An.current||ir?(typeof ve=="function"&&(Uc(i,a,ve,l),F=i.memoizedState),(L=ir||Th(i,a,L,l,ge,F,te))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),E.props=l,E.state=F,E.context=te,l=L):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,th(t,i),L=i.memoizedProps,te=i.type===i.elementType?L:ei(i.type,L),E.props=te,ye=i.pendingProps,ge=E.context,F=a.contextType,typeof F=="object"&&F!==null?F=Wn(F):(F=Cn(a)?Ar:hn.current,F=ds(i,F));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==ye||ge!==F)&&Ch(i,E,l,F),ir=!1,ge=i.memoizedState,E.state=ge,Eo(i,l,E,u);var Be=i.memoizedState;L!==ye||ge!==Be||An.current||ir?(typeof Ie=="function"&&(Uc(i,a,Ie,l),Be=i.memoizedState),(te=ir||Th(i,a,te,l,ge,Be,F)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Be,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Be,F)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),E.props=l,E.state=Be,E.context=F,l=te):(typeof E.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Bc(t,i,a,l,p,u)}function Bc(t,i,a,l,u,p){kh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return u&&Gf(i,a,!1),Ni(t,i,p);l=i.stateNode,yx.current=i;var L=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=ms(i,t.child,null,p),i.child=ms(i,null,L,p)):En(t,i,L,p),i.memoizedState=l.state,u&&Gf(i,a,!0),i.child}function Bh(t){var i=t.stateNode;i.pendingContext?Vf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Vf(t,i.context,!1),Ec(t,i.containerInfo)}function Hh(t,i,a,l,u){return ps(),gc(u),i.flags|=256,En(t,i,a,l),i.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vh(t,i,a){var l=i.pendingProps,u=kt.current,p=!1,E=(i.flags&128)!==0,L;if((L=E)||(L=t!==null&&t.memoizedState===null?!1:(u&2)!==0),L?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Pt(kt,u&1),t===null)return mc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,p?(l=i.mode,p=i.child,E={mode:"hidden",children:E},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=Go(E,l,0,null),t=Or(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Vc(a),i.memoizedState=Hc,t):jc(i,E));if(u=t.memoizedState,u!==null&&(L=u.dehydrated,L!==null))return Sx(t,i,E,l,L,u,a);if(p){p=l.fallback,E=i.mode,u=t.child,L=u.sibling;var F={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=ur(u,F),l.subtreeFlags=u.subtreeFlags&14680064),L!==null?p=ur(L,p):(p=Or(p,E,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,E=t.child.memoizedState,E=E===null?Vc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~a,i.memoizedState=Hc,l}return p=t.child,t=p.sibling,l=ur(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function jc(t,i){return i=Go({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Po(t,i,a,l){return l!==null&&gc(l),ms(i,t.child,null,a),t=jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Sx(t,i,a,l,u,p,E){if(a)return i.flags&256?(i.flags&=-257,l=Oc(Error(n(422))),Po(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=Go({mode:"visible",children:l.children},u,0,null),p=Or(p,u,E,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,E),i.child.memoizedState=Vc(E),i.memoizedState=Hc,p);if((i.mode&1)===0)return Po(t,i,E,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var L=l.dgst;return l=L,p=Error(n(419)),l=Oc(p,l,void 0),Po(t,i,E,l)}if(L=(E&t.childLanes)!==0,Rn||L){if(l=sn,l!==null){switch(E&-E){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|E))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Ci(t,u),ii(l,t,u,-1))}return su(),l=Oc(Error(n(421))),Po(t,i,E,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=Dx.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,zn=Ji(u.nextSibling),kn=i,Ot=!0,Jn=null,t!==null&&(jn[Gn++]=Ti,jn[Gn++]=Ai,jn[Gn++]=Cr,Ti=t.id,Ai=t.overflow,Cr=i),i=jc(i,l.children),i.flags|=4096,i)}function jh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),yc(t.return,i,a)}function Gc(t,i,a,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=u)}function Gh(t,i,a){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(En(t,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jh(t,a,i);else if(t.tag===19)jh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&wo(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Gc(i,!1,u,a,p);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&wo(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Gc(i,!0,a,null,p);break;case"together":Gc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ni(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=ur(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ur(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Mx(t,i,a){switch(i.tag){case 3:Bh(i),ps();break;case 5:rh(i);break;case 1:Cn(i.type)&&po(i);break;case 4:Ec(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Pt(yo,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Pt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Vh(t,i,a):(Pt(kt,kt.current&1),t=Ni(t,i,a),t!==null?t.sibling:null);Pt(kt,kt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Gh(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Pt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Oh(t,i,a)}return Ni(t,i,a)}var Wh,Wc,Xh,Yh;Wh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Wc=function(){},Xh=function(t,i,a,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Pr(hi.current);var p=null;switch(a){case"input":u=k(t,u),l=k(t,l),p=[];break;case"select":u=se({},u,{value:void 0}),l=se({},l,{value:void 0}),p=[];break;case"textarea":u=w(t,u),l=w(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=uo)}dt(a,l);var E;a=null;for(te in u)if(!l.hasOwnProperty(te)&&u.hasOwnProperty(te)&&u[te]!=null)if(te==="style"){var L=u[te];for(E in L)L.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in l){var F=l[te];if(L=u!=null?u[te]:void 0,l.hasOwnProperty(te)&&F!==L&&(F!=null||L!=null))if(te==="style")if(L){for(E in L)!L.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in F)F.hasOwnProperty(E)&&L[E]!==F[E]&&(a||(a={}),a[E]=F[E])}else a||(p||(p=[]),p.push(te,a)),a=F;else te==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,L=L?L.__html:void 0,F!=null&&L!==F&&(p=p||[]).push(te,F)):te==="children"?typeof F!="string"&&typeof F!="number"||(p=p||[]).push(te,""+F):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(F!=null&&te==="onScroll"&&It("scroll",t),p||L===F||(p=[])):(p=p||[]).push(te,F))}a&&(p=p||[]).push("style",a);var te=p;(i.updateQueue=te)&&(i.flags|=4)}},Yh=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ma(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Ex(t,i,a){var l=i.pendingProps;switch(hc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Cn(i.type)&&ho(),mn(i),null;case 3:return l=i.stateNode,vs(),Dt(An),Dt(hn),Tc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(vo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(nu(Jn),Jn=null))),Wc(t,i),mn(i),null;case 5:wc(i);var u=Pr(xa.current);if(a=i.type,t!==null&&i.stateNode!=null)Xh(t,i,a,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return mn(i),null}if(t=Pr(hi.current),vo(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[fi]=i,l[fa]=p,t=(i.mode&1)!==0,a){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(u=0;u<ca.length;u++)It(ca[u],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":yn(l,p),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},It("invalid",l);break;case"textarea":Z(l,p),It("invalid",l)}dt(a,p),u=null;for(var E in p)if(p.hasOwnProperty(E)){var L=p[E];E==="children"?typeof L=="string"?l.textContent!==L&&(p.suppressHydrationWarning!==!0&&co(l.textContent,L,t),u=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&co(l.textContent,L,t),u=["children",""+L]):o.hasOwnProperty(E)&&L!=null&&E==="onScroll"&&It("scroll",l)}switch(a){case"input":Rt(l),qe(l,p,!0);break;case"textarea":Rt(l),xe(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=uo)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[fi]=i,t[fa]=l,Wh(t,i,!1,!1),i.stateNode=t;e:{switch(E=it(a,l),a){case"dialog":It("cancel",t),It("close",t),u=l;break;case"iframe":case"object":case"embed":It("load",t),u=l;break;case"video":case"audio":for(u=0;u<ca.length;u++)It(ca[u],t);u=l;break;case"source":It("error",t),u=l;break;case"img":case"image":case"link":It("error",t),It("load",t),u=l;break;case"details":It("toggle",t),u=l;break;case"input":yn(t,l),u=k(t,l),It("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=se({},l,{value:void 0}),It("invalid",t);break;case"textarea":Z(t,l),u=w(t,l),It("invalid",t);break;default:u=l}dt(a,u),L=u;for(p in L)if(L.hasOwnProperty(p)){var F=L[p];p==="style"?et(t,F):p==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ue(t,F)):p==="children"?typeof F=="string"?(a!=="textarea"||F!=="")&&ct(t,F):typeof F=="number"&&ct(t,""+F):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?F!=null&&p==="onScroll"&&It("scroll",t):F!=null&&I(t,p,F,E))}switch(a){case"input":Rt(t),qe(t,l,!1);break;case"textarea":Rt(t),xe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?P(t,!!l.multiple,p,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=uo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(t&&i.stateNode!=null)Yh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Pr(xa.current),Pr(hi.current),vo(i)){if(l=i.stateNode,a=i.memoizedProps,l[fi]=i,(p=l.nodeValue!==a)&&(t=kn,t!==null))switch(t.tag){case 3:co(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[fi]=i,i.stateNode=l}return mn(i),null;case 13:if(Dt(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kf(),ps(),i.flags|=98560,p=!1;else if(p=vo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[fi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),p=!1}else Jn!==null&&(nu(Jn),Jn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Qt===0&&(Qt=3):su())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return vs(),Wc(t,i),t===null&&ua(i.stateNode.containerInfo),mn(i),null;case 10:return _c(i.type._context),mn(i),null;case 17:return Cn(i.type)&&ho(),mn(i),null;case 19:if(Dt(kt),p=i.memoizedState,p===null)return mn(i),null;if(l=(i.flags&128)!==0,E=p.rendering,E===null)if(l)Ma(p,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=wo(t),E!==null){for(i.flags|=128,Ma(p,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Pt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&$()>Ms&&(i.flags|=128,l=!0,Ma(p,!1),i.lanes=4194304)}else{if(!l)if(t=wo(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ma(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Ot)return mn(i),null}else 2*$()-p.renderingStartTime>Ms&&a!==1073741824&&(i.flags|=128,l=!0,Ma(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(a=p.last,a!==null?a.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=$(),i.sibling=null,a=kt.current,Pt(kt,l?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return ru(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function wx(t,i){switch(hc(i),i.tag){case 1:return Cn(i.type)&&ho(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Dt(An),Dt(hn),Tc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return wc(i),null;case 13:if(Dt(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(kt),null;case 4:return vs(),null;case 10:return _c(i.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var Io=!1,gn=!1,bx=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ys(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Vt(t,i,l)}else a.current=null}function Xc(t,i,a){try{a()}catch(l){Vt(t,i,l)}}var qh=!1;function Tx(t,i){if(rc=Qa,t=Tf(),Kl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var E=0,L=-1,F=-1,te=0,ve=0,ye=t,ge=null;t:for(;;){for(var Ie;ye!==a||u!==0&&ye.nodeType!==3||(L=E+u),ye!==p||l!==0&&ye.nodeType!==3||(F=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)ge=ye,ye=Ie;for(;;){if(ye===t)break t;if(ge===a&&++te===u&&(L=E),ge===p&&++ve===l&&(F=E),(Ie=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ie}a=L===-1||F===-1?null:{start:L,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(sc={focusedElem:t,selectionRange:a},Qa=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Gt=Be.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ei(i.type,Ve),Gt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Vt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=qh,qh=!1,Be}function Ea(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&Xc(i,a,p)}u=u.next}while(u!==l)}}function Do(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Yc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function $h(t){var i=t.alternate;i!==null&&(t.alternate=null,$h(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[fi],delete i[fa],delete i[cc],delete i[lx],delete i[cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kh(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=uo));else if(l!==4&&(t=t.child,t!==null))for(qc(t,i,a),t=t.sibling;t!==null;)qc(t,i,a),t=t.sibling}function $c(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for($c(t,i,a),t=t.sibling;t!==null;)$c(t,i,a),t=t.sibling}var cn=null,ti=!1;function sr(t,i,a){for(a=a.child;a!==null;)Qh(t,i,a),a=a.sibling}function Qh(t,i,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 5:gn||ys(a,i);case 6:var l=cn,u=ti;cn=null,sr(t,i,a),cn=l,ti=u,cn!==null&&(ti?(t=cn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ti?(t=cn,a=a.stateNode,t.nodeType===8?lc(t.parentNode,a):t.nodeType===1&&lc(t,a),ta(t)):lc(cn,a.stateNode));break;case 4:l=cn,u=ti,cn=a.stateNode.containerInfo,ti=!0,sr(t,i,a),cn=l,ti=u;break;case 0:case 11:case 14:case 15:if(!gn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&Xc(a,i,E),u=u.next}while(u!==l)}sr(t,i,a);break;case 1:if(!gn&&(ys(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(L){Vt(a,i,L)}sr(t,i,a);break;case 21:sr(t,i,a);break;case 22:a.mode&1?(gn=(l=gn)||a.memoizedState!==null,sr(t,i,a),gn=l):sr(t,i,a);break;default:sr(t,i,a)}}function Jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new bx),i.forEach(function(l){var u=Ux.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function ni(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var p=t,E=i,L=E;e:for(;L!==null;){switch(L.tag){case 5:cn=L.stateNode,ti=!1;break e;case 3:cn=L.stateNode.containerInfo,ti=!0;break e;case 4:cn=L.stateNode.containerInfo,ti=!0;break e}L=L.return}if(cn===null)throw Error(n(160));Qh(p,E,u),cn=null,ti=!1;var F=u.alternate;F!==null&&(F.return=null),u.return=null}catch(te){Vt(u,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ep(i,t),i=i.sibling}function ep(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),mi(t),l&4){try{Ea(3,t,t.return),Do(3,t)}catch(Ve){Vt(t,t.return,Ve)}try{Ea(5,t,t.return)}catch(Ve){Vt(t,t.return,Ve)}}break;case 1:ni(i,t),mi(t),l&512&&a!==null&&ys(a,a.return);break;case 5:if(ni(i,t),mi(t),l&512&&a!==null&&ys(a,a.return),t.flags&32){var u=t.stateNode;try{ct(u,"")}catch(Ve){Vt(t,t.return,Ve)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,E=a!==null?a.memoizedProps:p,L=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&ht(u,p),it(L,E);var te=it(L,p);for(E=0;E<F.length;E+=2){var ve=F[E],ye=F[E+1];ve==="style"?et(u,ye):ve==="dangerouslySetInnerHTML"?Ue(u,ye):ve==="children"?ct(u,ye):I(u,ve,ye,te)}switch(L){case"input":ut(u,p);break;case"textarea":me(u,p);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?P(u,!!p.multiple,Ie,!1):ge!==!!p.multiple&&(p.defaultValue!=null?P(u,!!p.multiple,p.defaultValue,!0):P(u,!!p.multiple,p.multiple?[]:"",!1))}u[fa]=p}catch(Ve){Vt(t,t.return,Ve)}}break;case 6:if(ni(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(Ve){Vt(t,t.return,Ve)}}break;case 3:if(ni(i,t),mi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ta(i.containerInfo)}catch(Ve){Vt(t,t.return,Ve)}break;case 4:ni(i,t),mi(t);break;case 13:ni(i,t),mi(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(Qc=$())),l&4&&Jh(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(gn=(te=gn)||ve,ni(i,t),gn=te):ni(i,t),mi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!ve&&(t.mode&1)!==0)for(Fe=t,ve=t.child;ve!==null;){for(ye=Fe=ve;Fe!==null;){switch(ge=Fe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ea(4,ge,ge.return);break;case 1:ys(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){Vt(l,a,Ve)}}break;case 5:ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){ip(ye);continue}}Ie!==null?(Ie.return=ge,Fe=Ie):ip(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{u=ye.stateNode,te?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=ye.stateNode,F=ye.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,L.style.display=Qe("display",E))}catch(Ve){Vt(t,t.return,Ve)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Ve){Vt(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ni(i,t),mi(t),l&4&&Jh(t);break;case 21:break;default:ni(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Kh(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ct(u,""),l.flags&=-33);var p=Zh(t);$c(t,p,u);break;case 3:case 4:var E=l.stateNode.containerInfo,L=Zh(t);qc(t,L,E);break;default:throw Error(n(161))}}catch(F){Vt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ax(t,i,a){Fe=t,tp(t)}function tp(t,i,a){for(var l=(t.mode&1)!==0;Fe!==null;){var u=Fe,p=u.child;if(u.tag===22&&l){var E=u.memoizedState!==null||Io;if(!E){var L=u.alternate,F=L!==null&&L.memoizedState!==null||gn;L=Io;var te=gn;if(Io=E,(gn=F)&&!te)for(Fe=u;Fe!==null;)E=Fe,F=E.child,E.tag===22&&E.memoizedState!==null?rp(u):F!==null?(F.return=E,Fe=F):rp(u);for(;p!==null;)Fe=p,tp(p),p=p.sibling;Fe=u,Io=L,gn=te}np(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,Fe=p):np(t)}}function np(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Do(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!gn)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:ei(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ih(i,p,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ih(i,E,a)}break;case 5:var L=i.stateNode;if(a===null&&i.flags&4){a=L;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&a.focus();break;case"img":F.src&&(a.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ve=te.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ta(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&Yc(i)}catch(ge){Vt(i,i.return,ge)}}if(i===t){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function ip(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function rp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Do(4,i)}catch(F){Vt(i,a,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(F){Vt(i,u,F)}}var p=i.return;try{Yc(i)}catch(F){Vt(i,p,F)}break;case 5:var E=i.return;try{Yc(i)}catch(F){Vt(i,E,F)}}}catch(F){Vt(i,i.return,F)}if(i===t){Fe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Fe=L;break}Fe=i.return}}var Cx=Math.ceil,Uo=N.ReactCurrentDispatcher,Kc=N.ReactCurrentOwner,Yn=N.ReactCurrentBatchConfig,yt=0,sn=null,Yt=null,un=0,Bn=0,Ss=er(0),Qt=0,wa=null,Ir=0,Fo=0,Zc=0,ba=null,Nn=null,Qc=0,Ms=1/0,Pi=null,Oo=!1,Jc=null,ar=null,ko=!1,or=null,zo=0,Ta=0,eu=null,Bo=-1,Ho=0;function wn(){return(yt&6)!==0?$():Bo!==-1?Bo:Bo=$()}function lr(t){return(t.mode&1)===0?1:(yt&2)!==0&&un!==0?un&-un:dx.transition!==null?(Ho===0&&(Ho=At()),Ho):(t=_t,t!==0||(t=window.event,t=t===void 0?16:af(t.type)),t)}function ii(t,i,a,l){if(50<Ta)throw Ta=0,eu=null,Error(n(185));tn(t,a,l),((yt&2)===0||t!==sn)&&(t===sn&&((yt&2)===0&&(Fo|=a),Qt===4&&cr(t,un)),Pn(t,l),a===1&&yt===0&&(i.mode&1)===0&&(Ms=$()+500,mo&&nr()))}function Pn(t,i){var a=t.callbackNode;Mn(t,i);var l=dn(t,t===sn?un:0);if(l===0)a!==null&&b(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&b(a),i===1)t.tag===0?ux(ap.bind(null,t)):Wf(ap.bind(null,t)),ax(function(){(yt&6)===0&&nr()}),a=null;else{switch(di(l)){case 1:a=Se;break;case 4:a=Ce;break;case 16:a=Le;break;case 536870912:a=tt;break;default:a=Le}a=pp(a,sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function sp(t,i){if(Bo=-1,Ho=0,(yt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Es()&&t.callbackNode!==a)return null;var l=dn(t,t===sn?un:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Vo(t,l);else{i=l;var u=yt;yt|=2;var p=lp();(sn!==t||un!==i)&&(Pi=null,Ms=$()+500,Ur(t,i));do try{Px();break}catch(L){op(t,L)}while(!0);vc(),Uo.current=p,yt=u,Yt!==null?i=0:(sn=null,un=0,i=Qt)}if(i!==0){if(i===2&&(u=Ei(t),u!==0&&(l=u,i=tu(t,u))),i===1)throw a=wa,Ur(t,0),cr(t,l),Pn(t,$()),a;if(i===6)cr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!Rx(u)&&(i=Vo(t,l),i===2&&(p=Ei(t),p!==0&&(l=p,i=tu(t,p))),i===1))throw a=wa,Ur(t,0),cr(t,l),Pn(t,$()),a;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,Nn,Pi);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=Qc+500-$(),10<i)){if(dn(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=oc(Fr.bind(null,t,Nn,Pi),i);break}Fr(t,Nn,Pi);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var E=31-st(l);p=1<<E,E=i[E],E>u&&(u=E),l&=~p}if(l=u,l=$()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Cx(l/1960))-l,10<l){t.timeoutHandle=oc(Fr.bind(null,t,Nn,Pi),l);break}Fr(t,Nn,Pi);break;case 5:Fr(t,Nn,Pi);break;default:throw Error(n(329))}}}return Pn(t,$()),t.callbackNode===a?sp.bind(null,t):null}function tu(t,i){var a=ba;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Vo(t,i),t!==2&&(i=Nn,Nn=a,i!==null&&nu(i)),t}function nu(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function Rx(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],p=u.getSnapshot;u=u.value;try{if(!Qn(p(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~Zc,i&=~Fo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-st(i),l=1<<a;t[a]=-1,i&=~l}}function ap(t){if((yt&6)!==0)throw Error(n(327));Es();var i=dn(t,0);if((i&1)===0)return Pn(t,$()),null;var a=Vo(t,i);if(t.tag!==0&&a===2){var l=Ei(t);l!==0&&(i=l,a=tu(t,l))}if(a===1)throw a=wa,Ur(t,0),cr(t,i),Pn(t,$()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,Nn,Pi),Pn(t,$()),null}function iu(t,i){var a=yt;yt|=1;try{return t(i)}finally{yt=a,yt===0&&(Ms=$()+500,mo&&nr())}}function Dr(t){or!==null&&or.tag===0&&(yt&6)===0&&Es();var i=yt;yt|=1;var a=Yn.transition,l=_t;try{if(Yn.transition=null,_t=1,t)return t()}finally{_t=l,Yn.transition=a,yt=i,(yt&6)===0&&nr()}}function ru(){Bn=Ss.current,Dt(Ss)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,sx(a)),Yt!==null)for(a=Yt.return;a!==null;){var l=a;switch(hc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ho();break;case 3:vs(),Dt(An),Dt(hn),Tc();break;case 5:wc(l);break;case 4:vs();break;case 13:Dt(kt);break;case 19:Dt(kt);break;case 10:_c(l.type._context);break;case 22:case 23:ru()}a=a.return}if(sn=t,Yt=t=ur(t.current,null),un=Bn=i,Qt=0,wa=null,Zc=Fo=Ir=0,Nn=ba=null,Nr!==null){for(i=0;i<Nr.length;i++)if(a=Nr[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,p=a.pending;if(p!==null){var E=p.next;p.next=u,l.next=E}a.pending=l}Nr=null}return t}function op(t,i){do{var a=Yt;try{if(vc(),bo.current=Ro,To){for(var l=zt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}To=!1}if(Lr=0,rn=Zt=zt=null,va=!1,_a=0,Kc.current=null,a===null||a.return===null){Qt=1,wa=i,Yt=null;break}e:{var p=t,E=a.return,L=a,F=i;if(i=un,L.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var te=F,ve=L,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Lh(E);if(Ie!==null){Ie.flags&=-257,Ih(Ie,E,L,p,i),Ie.mode&1&&Ph(p,te,i),i=Ie,F=te;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(F),i.updateQueue=Ve}else Be.add(F);break e}else{if((i&1)===0){Ph(p,te,i),su();break e}F=Error(n(426))}}else if(Ot&&L.mode&1){var Gt=Lh(E);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Ih(Gt,E,L,p,i),gc(_s(F,L));break e}}p=F=_s(F,L),Qt!==4&&(Qt=2),ba===null?ba=[p]:ba.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=Rh(p,F,i);nh(p,q);break e;case 1:L=F;var V=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ar===null||!ar.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Nh(p,L,i);nh(p,we);break e}}p=p.return}while(p!==null)}up(a)}catch(Xe){i=Xe,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function lp(){var t=Uo.current;return Uo.current=Ro,t===null?Ro:t}function su(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(Ir&268435455)===0&&(Fo&268435455)===0||cr(sn,un)}function Vo(t,i){var a=yt;yt|=2;var l=lp();(sn!==t||un!==i)&&(Pi=null,Ur(t,i));do try{Nx();break}catch(u){op(t,u)}while(!0);if(vc(),yt=a,Uo.current=l,Yt!==null)throw Error(n(261));return sn=null,un=0,Qt}function Nx(){for(;Yt!==null;)cp(Yt)}function Px(){for(;Yt!==null&&!G();)cp(Yt)}function cp(t){var i=hp(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?up(t):Yt=i,Kc.current=null}function up(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Ex(a,i,Bn),a!==null){Yt=a;return}}else{if(a=wx(a,i),a!==null){a.flags&=32767,Yt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Fr(t,i,a){var l=_t,u=Yn.transition;try{Yn.transition=null,_t=1,Lx(t,i,a,l)}finally{Yn.transition=u,_t=l}return null}function Lx(t,i,a,l){do Es();while(or!==null);if((yt&6)!==0)throw Error(n(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(ln(t,p),t===sn&&(Yt=sn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ko||(ko=!0,pp(Le,function(){return Es(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Yn.transition,Yn.transition=null;var E=_t;_t=1;var L=yt;yt|=4,Kc.current=null,Tx(t,a),ep(a,t),Qg(sc),Qa=!!rc,sc=rc=null,t.current=a,Ax(a),ee(),yt=L,_t=E,Yn.transition=p}else t.current=a;if(ko&&(ko=!1,or=t,zo=u),p=t.pendingLanes,p===0&&(ar=null),mt(a.stateNode),Pn(t,$()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(Oo)throw Oo=!1,t=Jc,Jc=null,t;return(zo&1)!==0&&t.tag!==0&&Es(),p=t.pendingLanes,(p&1)!==0?t===eu?Ta++:(Ta=0,eu=t):Ta=0,nr(),null}function Es(){if(or!==null){var t=di(zo),i=Yn.transition,a=_t;try{if(Yn.transition=null,_t=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,zo=0,(yt&6)!==0)throw Error(n(331));var u=yt;for(yt|=4,Fe=t.current;Fe!==null;){var p=Fe,E=p.child;if((Fe.flags&16)!==0){var L=p.deletions;if(L!==null){for(var F=0;F<L.length;F++){var te=L[F];for(Fe=te;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:Ea(8,ve,p)}var ye=ve.child;if(ye!==null)ye.return=ve,Fe=ye;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,Ie=ve.return;if($h(ve),ve===te){Fe=null;break}if(ge!==null){ge.return=Ie,Fe=ge;break}Fe=Ie}}}var Be=p.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,Fe=E;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ea(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,Fe=q;break e}Fe=p.return}}var V=t.current;for(Fe=V;Fe!==null;){E=Fe;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Fe=K;else e:for(E=V;Fe!==null;){if(L=Fe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Do(9,L)}}catch(Xe){Vt(L,L.return,Xe)}if(L===E){Fe=null;break e}var we=L.sibling;if(we!==null){we.return=L.return,Fe=we;break e}Fe=L.return}}if(yt=u,nr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Je,t)}catch{}l=!0}return l}finally{_t=a,Yn.transition=i}}return!1}function dp(t,i,a){i=_s(a,i),i=Rh(t,i,1),t=rr(t,i,1),i=wn(),t!==null&&(tn(t,1,i),Pn(t,i))}function Vt(t,i,a){if(t.tag===3)dp(t,t,a);else for(;i!==null;){if(i.tag===3){dp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=_s(a,t),t=Nh(i,t,1),i=rr(i,t,1),t=wn(),i!==null&&(tn(i,1,t),Pn(i,t));break}}i=i.return}}function Ix(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&a,sn===t&&(un&a)===a&&(Qt===4||Qt===3&&(un&130023424)===un&&500>$()-Qc?Ur(t,0):Zc|=a),Pn(t,i)}function fp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ht,Ht<<=1,(Ht&130023424)===0&&(Ht=4194304)));var a=wn();t=Ci(t,i),t!==null&&(tn(t,i,a),Pn(t,a))}function Dx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),fp(t,a)}function Ux(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),fp(t,a)}var hp;hp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Rn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,Mx(t,i,a);Rn=(t.flags&131072)!==0}else Rn=!1,Ot&&(i.flags&1048576)!==0&&Xf(i,xo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Lo(t,i),t=i.pendingProps;var u=ds(i,hn.current);xs(i,a),u=Rc(null,i,l,t,u,a);var p=Nc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(p=!0,po(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Mc(i),u.updater=No,i.stateNode=u,u._reactInternals=i,Fc(i,l,t,a),i=Bc(null,i,l,!0,p,a)):(i.tag=0,Ot&&p&&fc(i),En(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Lo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=Ox(l),t=ei(l,t),u){case 0:i=zc(null,i,l,t,a);break e;case 1:i=zh(null,i,l,t,a);break e;case 11:i=Dh(null,i,l,t,a);break e;case 14:i=Uh(null,i,l,ei(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),zc(t,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),zh(t,i,l,u,a);case 3:e:{if(Bh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,th(t,i),Eo(i,l,null,a);var E=i.memoizedState;if(l=E.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=_s(Error(n(423)),i),i=Hh(t,i,l,a,u);break e}else if(l!==u){u=_s(Error(n(424)),i),i=Hh(t,i,l,a,u);break e}else for(zn=Ji(i.stateNode.containerInfo.firstChild),kn=i,Ot=!0,Jn=null,a=Jf(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),l===u){i=Ni(t,i,a);break e}En(t,i,l,a)}i=i.child}return i;case 5:return rh(i),t===null&&mc(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,E=u.children,ac(l,u)?E=null:p!==null&&ac(l,p)&&(i.flags|=32),kh(t,i),En(t,i,E,a),i.child;case 6:return t===null&&mc(i),null;case 13:return Vh(t,i,a);case 4:return Ec(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,a):En(t,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),Dh(t,i,l,u,a);case 7:return En(t,i,i.pendingProps,a),i.child;case 8:return En(t,i,i.pendingProps.children,a),i.child;case 12:return En(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,E=u.value,Pt(yo,l._currentValue),l._currentValue=E,p!==null)if(Qn(p.value,E)){if(p.children===u.children&&!An.current){i=Ni(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var L=p.dependencies;if(L!==null){E=p.child;for(var F=L.firstContext;F!==null;){if(F.context===l){if(p.tag===1){F=Ri(-1,a&-a),F.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var ve=te.pending;ve===null?F.next=F:(F.next=ve.next,ve.next=F),te.pending=F}}p.lanes|=a,F=p.alternate,F!==null&&(F.lanes|=a),yc(p.return,a,i),L.lanes|=a;break}F=F.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=a,L=E.alternate,L!==null&&(L.lanes|=a),yc(E,a,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}En(t,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,xs(i,a),u=Wn(u),l=l(u),i.flags|=1,En(t,i,l,a),i.child;case 14:return l=i.type,u=ei(l,i.pendingProps),u=ei(l.type,u),Uh(t,i,l,u,a);case 15:return Fh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),Lo(t,i),i.tag=1,Cn(l)?(t=!0,po(i)):t=!1,xs(i,a),Ah(i,l,u),Fc(i,l,u,a),Bc(null,i,l,!0,t,a);case 19:return Gh(t,i,a);case 22:return Oh(t,i,a)}throw Error(n(156,i.tag))};function pp(t,i){return $a(t,i)}function Fx(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,a,l){return new Fx(t,i,a,l)}function au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ox(t){if(typeof t=="function")return au(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===he)return 14}return 2}function ur(t,i){var a=t.alternate;return a===null?(a=qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function jo(t,i,a,l,u,p){var E=2;if(l=t,typeof t=="function")au(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Or(a.children,u,p,i);case Y:E=8,u|=8;break;case R:return t=qn(12,a,i,u|2),t.elementType=R,t.lanes=p,t;case J:return t=qn(13,a,i,u),t.elementType=J,t.lanes=p,t;case ue:return t=qn(19,a,i,u),t.elementType=ue,t.lanes=p,t;case ce:return Go(a,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:E=10;break e;case z:E=9;break e;case ae:E=11;break e;case he:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(E,a,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function Or(t,i,a,l){return t=qn(7,t,l,i),t.lanes=a,t}function Go(t,i,a,l){return t=qn(22,t,l,i),t.elementType=ce,t.lanes=a,t.stateNode={isHidden:!1},t}function ou(t,i,a){return t=qn(6,t,null,i),t.lanes=a,t}function lu(t,i,a){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function kx(t,i,a,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function cu(t,i,a,l,u,p,E,L,F){return t=new kx(t,i,a,L,F),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(p),t}function zx(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function mp(t){if(!t)return tr;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Cn(a))return jf(t,a,i)}return i}function gp(t,i,a,l,u,p,E,L,F){return t=cu(a,l,!0,t,u,p,E,L,F),t.context=mp(null),a=t.current,l=wn(),u=lr(a),p=Ri(l,u),p.callback=i??null,rr(a,p,u),t.current.lanes=u,tn(t,u,l),Pn(t,l),t}function Wo(t,i,a,l){var u=i.current,p=wn(),E=lr(u);return a=mp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ri(p,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(u,i,E),t!==null&&(ii(t,u,E,p),Mo(t,u,E)),E}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function uu(t,i){xp(t,i),(t=t.alternate)&&xp(t,i)}function Bx(){return null}var vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function du(t){this._internalRoot=t}Yo.prototype.render=du.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wo(t,i,null,null)},Yo.prototype.unmount=du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Wo(null,t,null,null)}),i[wi]=null}};function Yo(t){this._internalRoot=t}Yo.prototype.unstable_scheduleHydration=function(t){if(t){var i=ef();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ki.length&&i!==0&&i<Ki[a].priority;a++);Ki.splice(a,0,t),a===0&&rf(t)}};function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _p(){}function Hx(t,i,a,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var te=Xo(E);p.call(te)}}var E=gp(i,l,t,0,null,!1,!1,"",_p);return t._reactRootContainer=E,t[wi]=E.current,ua(t.nodeType===8?t.parentNode:t),Dr(),E}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var L=l;l=function(){var te=Xo(F);L.call(te)}}var F=cu(t,0,!1,null,null,!1,!1,"",_p);return t._reactRootContainer=F,t[wi]=F.current,ua(t.nodeType===8?t.parentNode:t),Dr(function(){Wo(i,F,a,l)}),F}function $o(t,i,a,l,u){var p=a._reactRootContainer;if(p){var E=p;if(typeof u=="function"){var L=u;u=function(){var F=Xo(E);L.call(F)}}Wo(i,E,t,u)}else E=Hx(a,i,t,u,l);return Xo(E)}Qd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=pt(i.pendingLanes);a!==0&&(nn(i,a|1),Pn(i,$()),(yt&6)===0&&(Ms=$()+500,nr()))}break;case 13:Dr(function(){var l=Ci(t,1);if(l!==null){var u=wn();ii(l,t,1,u)}}),uu(t,1)}},Ol=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var a=wn();ii(i,t,134217728,a)}uu(t,134217728)}},Jd=function(t){if(t.tag===13){var i=lr(t),a=Ci(t,i);if(a!==null){var l=wn();ii(a,t,i,l)}uu(t,i)}},ef=function(){return _t},tf=function(t,i){var a=_t;try{return _t=t,i()}finally{_t=a}},Ae=function(t,i,a){switch(i){case"input":if(ut(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=fo(l);if(!u)throw Error(n(90));Nt(l),ut(l,u)}}}break;case"textarea":me(t,a);break;case"select":i=a.value,i!=null&&P(t,!!a.multiple,i,!1)}},Lt=iu,Kt=Dr;var Vx={usingClientEntryPoint:!1,Events:[ha,cs,fo,Ne,rt,iu]},Aa={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jx={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ya(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Je=Ko.inject(jx),He=Ko}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vx,Ln.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(i))throw Error(n(200));return zx(t,i,null,a)},Ln.createRoot=function(t,i){if(!fu(t))throw Error(n(299));var a=!1,l="",u=vp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=cu(t,1,!1,null,null,a,!1,l,u),t[wi]=i.current,ua(t.nodeType===8?t.parentNode:t),new du(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ya(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return Dr(t)},Ln.hydrate=function(t,i,a){if(!qo(i))throw Error(n(200));return $o(null,t,i,!0,a)},Ln.hydrateRoot=function(t,i,a){if(!fu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,u=!1,p="",E=vp;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=gp(i,null,t,1,a??null,u,!1,p,E),t[wi]=i.current,ua(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new Yo(i)},Ln.render=function(t,i,a){if(!qo(i))throw Error(n(200));return $o(null,t,i,!1,a)},Ln.unmountComponentAtNode=function(t){if(!qo(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){$o(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Ln.unstable_batchedUpdates=iu,Ln.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!qo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return $o(t,i,a,!1,l)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Ap;function Qx(){if(Ap)return mu.exports;Ap=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mu.exports=Zx(),mu.exports}var Cp;function Jx(){if(Cp)return Zo;Cp=1;var s=Qx();return Zo.createRoot=s.createRoot,Zo.hydrateRoot=s.hydrateRoot,Zo}var ev=Jx();const tv=Rm(ev),jt={name:"Rajamuri Sai Rithik Reddy",monogram:"RSRR",title:"Technologist · Policy Fellow · Venture Architect",location:"Hyderabad, Telangana, India",coordinates:"17.3850° N, 78.4867° E",institution:"Prof. C.R. Rao AIMSCS, University of Hyderabad Campus",bio:{lead:"Rajamuri Sai Rithik Reddy operates across machine intelligence, public governance, and venture architecture. Based in Hyderabad, his work synthesizes computational data science with institutional statecraft to build foundational digital infrastructure.",body:"From the hallowed legislative galleries of the New Parliament of India and the podium of the Constitution Club of India to architecting deep retrieval-augmented intelligence systems for Indian agriculture (Bhoomi) and cloud optimization frameworks under ISRO scientist mentorship, Rithik treats code, governance, and capital as unified levers of national impact."},socials:{email:"rithikreddy.rajamuri@gmail.com",linkedin:"https://www.linkedin.com/in/rajamuri-sai-rithik-reddy-738986259/",github:"https://github.com/rithikreddy"}},vu={leadText:"True systemic transformation occurs where frontier engineering meets democratic institutional architecture. Engaging with national policy frameworks at Rishihood University, the New Parliament of India, and the Constitution Club of India.",fellowships:[{id:"pbc-10",institution:"Rishihood University",program:"Policy BootCamp — 10th Edition Cohort",location:"Sonipat, NCR, India",period:"2026",role:"Selected Policy Fellow",description:"Immersive policy accelerator addressing public governance, economic statecraft, regulatory frameworks, and systemic institutional reforms in India. Evaluated real-world legislative proposals and socio-economic governance models.",highlights:["Selected for competitive 10th Edition National Cohort","Engaged in direct deliberations with civil servants, policy analysts, and legislators","Conducted strategic policy brief on agricultural supply-chain digitization","Awarded Official Certificate of Completion on stage"],image:"/assets/policy/pbc-cohort.jpeg",secondaryImage:"/assets/policy/pbc-certificate-stage.jpeg",badge:"Policy Fellow 2026"},{id:"parliament-engagement",institution:"Parliament of India (Sansad Bhavan)",program:"Parliamentary Delegation & Legislative Observation",location:"New Delhi, India",period:"2026",role:"Institutional Delegate",description:"Conducted archival and on-site legislative studies within the New Parliament building (Lok Sabha, Rajya Sabha chambers) and the historic Samvidhan Sadan (Constitution Hall). Examined the architectural synthesis of ancient Indian heritage with modern high-capacity legislative infrastructure.",highlights:["Studied parliamentary procedure and committee governance in Lok Sabha & Rajya Sabha precincts","Photographic ledger and archival exploration of Samvidhan Sadan colonnades and Raisina Hill","Synthesized principles of institutional longevity and constitutional continuity"],image:"/assets/parliament/loksabha-1.jpg",secondaryImage:"/assets/parliament/samvidhan-sadan.jpg",badge:"Parliamentary Study"},{id:"constitution-club",institution:"Constitution Club of India",program:"National Policy Summit & Address",location:"Rafi Marg, New Delhi",period:"2026",role:"Keynote / Podium Speaker",description:"Delivered a podium address on youth-driven technological integration, sovereign AI infrastructure, and empowering agrarian ecosystems through open data architectures.",highlights:["Addressed policy practitioners, youth leaders, and civil society delegates","Advocated for vernacular intelligence interfaces in tier-2 and tier-3 rural economies","Highlighted the role of computational models in sovereign economic resilience"],image:"/assets/parliament/constitution-club-podium.jpg",secondaryImage:"/assets/parliament/constitution-club-address.jpg",badge:"Keynote Address"}]},Cl=[{id:"bhoomi",title:"BHOOMI (Farmer GPT)",category:"Agritech AI / Sovereign Enterprise",stage:"MCA Incorporated · Antler Pitch Cohort",role:"Founder & Lead Architect",summary:"A unified AI-powered agricultural intelligence ecosystem providing hyperlocal, agronomic advisory via multilingual voice and RAG architectures over verified ICAR research.",metrics:[{label:"Architecture",value:"RAG + Specialized LLMs"},{label:"Vernacular Voice",value:"Indic Speech Models"},{label:"Incorporation",value:"Ministry of Corporate Affairs (MCA)"},{label:"Paper",value:"Published Research Abstract"}],description:"Bhoomi solves the critical last-mile information divide for 140M+ Indian farmers. Existing LLMs hallucinate agronomic dosage and lack regional dialect nuances. Bhoomi couples dense vector retrieval over verified agricultural university compendiums with voice-in, voice-out multilingual synthesis in regional languages (Telugu, Hindi, and Indian dialects).",techStack:["Python","FastAPI","LangChain / LlamaIndex","ChromaDB / Pinecone","Whisper ASR","ElevenLabs / Indic TTS","React Native"],logo:"/assets/bhoomi/bhoomi-logo-circle.png",brandImage:"/assets/bhoomi/bhoomi-brand-green.png",filingImage:"/assets/bhoomi/bhoomi-mca-filing.png",featured:!0,paperTitle:"Bhoomi: Building a Unified Digital Ecosystem for India's Agricultural Future",author:"R. Sai Rithik Reddy"},{id:"isro-cloud",title:"Cloud Cost Optimization Framework",category:"Distributed Systems & Cloud Infrastructure",stage:"Research & Systems Engineering",role:"Lead Systems Engineer (Mentored by Senior ISRO Scientist)",summary:"Algorithmic resource allocation and predictive autoscaling system designed under the direct mentorship of a Senior Space Scientist from ISRO.",metrics:[{label:"Spend Reduction",value:"35–45% Idle Trim"},{label:"Heuristics",value:"Predictive Workload Modeling"},{label:"Mentorship",value:"Senior ISRO Scientist"},{label:"Stack",value:"AWS / Kubernetes / Python"}],description:"Developed an autonomous cloud cost governance architecture that analyzes telemetry data, spots zombie compute instances, and predicts traffic spikes. Replaces static threshold autoscaling with predictive statistical modeling, drastically cutting cloud expenditure without violating SLA latency bounds.",techStack:["AWS CloudWatch","Python","Prometheus","Kubernetes","Time-Series Forecasting","Terraform"],featured:!0},{id:"sentinel-voice",title:"Sentinel Voice — Deepfake Audio Detector",category:"Machine Learning & Acoustic Forensics",stage:"2nd Place Winner · National Hackathon",role:"Machine Learning Architect",summary:"Neural acoustic classification framework detecting synthetic voice cloning and deepfake speech manipulation in real-time.",metrics:[{label:"Accolade",value:"2nd Place Nationally"},{label:"Accuracy",value:"94.2% Zero-Shot"},{label:"Latency",value:"< 250ms Inference"},{label:"Analysis",value:"Multi-Band Spectrograms"}],description:"Built to counter malicious voice phishing and executive identity impersonation. The pipeline transforms raw waveform audio into mel-spectrograms and bispectral representations, feeding a residual neural network that captures vocoder-generated micro-artifacts imperceptible to the human ear.",techStack:["PyTorch","Librosa","ResNet-Audio","ONNX Runtime","FastAPI","Web Audio API"],featured:!0},{id:"asr-convention",title:"ASR Convention & Resort Systems",category:"Enterprise ERP & Venue Infrastructure",stage:"Production Deployment",role:"Full-Stack System Architect",summary:"Integrated management system handling large-scale venue reservations, banquet logistics, multi-tier staff coordination, and revenue analytics.",metrics:[{label:"Operations",value:"Multi-Acre Facility"},{label:"Bookings",value:"Zero-Conflict Realtime"},{label:"Reporting",value:"Automated Ledger & Tax"},{label:"Uptime",value:"99.9% Production"}],description:"Architected a custom high-reliability ERP tailored for luxury convention centres and destination resort complexes. Features role-based access control, automated dynamic pricing schedules, contract generation, and multi-department task dispatch.",techStack:["React","Node.js","PostgreSQL","Tailwind CSS","Redis","Docker"],featured:!1},{id:"rithsaa",title:"RITHSAA",category:"Luxury Event Management & Brand Advisory",stage:"Founder & Managing Director",role:"Founder",summary:"Bespoke executive event production, institutional summit management, and strategic brand choreography for high-net-worth gatherings and institutional galas.",metrics:[{label:"Focus",value:"Curated Experiences"},{label:"Scale",value:"High-Caliber Summits"},{label:"Services",value:"End-to-End Orchestration"}],description:"RITHSAA brings structural precision and architectural elegance to executive events, cultural festivals, and brand experiences, bridging luxury aesthetic curation with military-grade operational logistics.",techStack:["Executive Production","Vendor Operations","Spatial Architecture","VIP Protocol"],featured:!1}],_n=[{id:"cultural-sec",role:"Cultural Secretary (2025–2026)",organization:"Prof. C.R. Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS)",affiliation:"University of Hyderabad Campus",period:"2025 — 2026",summary:"Elected institutional executive steering the comprehensive cultural, academic, and summit portfolio of the institute.",responsibilities:["Stewarding an institutional budget of ₹5–6 Lakhs across major annual summits, inter-collegiate festivals, and technical symposiums.","Governing operational, logistics, and hospitality workflows for a 1,000+ student body and visiting academic dignitaries.","Leading 30+ member cross-functional organizing councils with rigorous fiscal accountability, vendor negotiations, and protocol enforcement.","Pioneering streamlined sponsorship acquisition models and digital attendee verification pipelines."],impactNumbers:[{metric:"₹5–6 Lakhs",label:"Budget Stewarded"},{metric:"1,000+",label:"Students Governed"},{metric:"30+",label:"Council Members"},{metric:"100%",label:"Audit Compliance"}]},{id:"ppei",role:"Initiator & Founding Lead",organization:"People's Platform for Educational Innovation (PPEI)",period:"2024 — Present",summary:"Grassroots youth policy think-tank and collaborative forum committed to modernizing STEM pedagogy and public educational accessibility.",responsibilities:["Conceived and founded PPEI as an autonomous intellectual incubator for students and young policy thinkers.","Authored student-centric policy position papers on integrating practical machine intelligence curricula into undergraduate studies.","Organized multi-college roundtables examining educational equity, digital literacy gaps, and vocational skill pipelines.","Mentored inter-disciplinary student cohorts in open-source contribution and civic technology."],impactNumbers:[{metric:"Founding",label:"Pioneer & Lead"},{metric:"12+",label:"Symposia Hosted"},{metric:"500+",label:"Youth Engaged"}]}],_u={title:"The Crucible of Discipline",manifesto:"High-stakes executive decision-making and deep algorithmic focus require an unshakeable physiological and mental baseline. Rithik approaches competitive athletics not as pastimes, but as rigorous calibrations of the human instrument.",disciplines:[{sport:"Open-Water Swimming",metaphor:"Stamina & Calm in Turbulent Waters",description:"Unlike static pool lanes, open water demands continuous sensory calibration against currents, temperature fluctuations, and boundless depth. It trains unyielding cardiovascular grit and the emotional equanimity to sustain momentum when immediate visibility is zero.",attributes:["Endurance Under Pressure","Directional Awareness","Mental Self-Regulation"]},{sport:"Competitive Archery",metaphor:"Singular Target Precision",description:"Archery is the art of extreme stillness. The archer must arrest heart rate, read subtle cross-winds, align skeletal geometry, and execute clean release without anticipation. A discipline where perfection is measured in millimeters at extreme distance.",attributes:["Laser Focus","Biomechanical Control","Zero-Variance Execution"]}]},xi={degree:"Bachelor of Technology (B.Tech)",major:"Computer Science and Engineering (Data Science)",institution:"Prof. C.R. Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS)",campus:"University of Hyderabad Campus, Gachibowli, Hyderabad",focusAreas:["Machine Learning & Statistical Data Modeling","Deep Neural Architectures & Retrieval Systems","Distributed Cloud Systems & Database Internals","Algorithmic Complexity & Discrete Mathematics"]},nv=[{domain:"Machine Intelligence & NLP",skills:["Large Language Models (LLMs)","Retrieval-Augmented Generation (RAG)","Vector Databases (Pinecone, ChromaDB)","PyTorch","Audio Spectrogram Forensics","Whisper Speech ASR","LangChain"]},{domain:"Cloud & Distributed Architecture",skills:["AWS (EC2, Lambda, S3, CloudWatch)","Kubernetes","Docker","Predictive Cloud Optimization","FastAPI","Node.js / Express","PostgreSQL","Redis"]},{domain:"Policy, Strategy & Governance",skills:["Public Policy Analysis (Rishihood PBC Fellow)","Legislative Studies (Parliament of India)","Institutional Budget Governance (₹5–6L)","MCA Corporate Filings","Venture Incubation","Cross-Functional Leadership"]}];/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=s=>{const e=rv(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},av=$t.createContext({}),ov=()=>$t.useContext(av),lv=$t.forwardRef(({color:s,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:o="",children:c,iconNode:d,...f},m)=>{const{size:g=24,strokeWidth:v=2,absoluteStrokeWidth:_=!1,color:y="currentColor",className:M=""}=ov()??{},T=r??_?Number(n??v)*24/Number(e??g):n??v;return $t.createElement("svg",{ref:m,...yu,width:e??g??yu.width,height:e??g??yu.height,stroke:s??y,strokeWidth:T,className:Nm("lucide",M,o),...!c&&!sv(f)&&{"aria-hidden":"true"},...f},[...d.map(([C,S])=>$t.createElement(C,S)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=(s,e)=>{const n=$t.forwardRef(({className:r,...o},c)=>$t.createElement(lv,{ref:c,iconNode:e,className:Nm(`lucide-${iv(Rp(s))}`,`lucide-${s}`,r),...o}));return n.displayName=Rp(s),n};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],uv=Ut("arrow-down",cv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Qu=Ut("arrow-up-right",dv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],hv=Ut("arrow-up",fv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],mv=Ut("chevron-right",pv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],Su=Ut("circle-check",gv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],vv=Ut("clock",xv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],yv=Ut("compass",_v);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Mv=Ut("cpu",Sv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],wv=Ut("download",Ev);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Tv=Ut("external-link",bv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Cv=Ut("file-text",Av);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Nv=Ut("funnel",Rv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Lv=Ut("graduation-cap",Pv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",key:"yxxwt6"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],Pm=Ut("landmark",Iv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Uv=Ut("layers",Dv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Lm=Ut("mail",Fv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ll=Ut("map-pin",Ov);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],zv=Ut("maximize-2",kv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Hv=Ut("menu",Bv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],jv=Ut("quote",Vv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Im=Ut("shield-check",Gv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Xv=Ut("target",Wv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],qv=Ut("terminal",Yv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],Kv=Ut("waves-horizontal",$v);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Dm=Ut("x",Zv);function Qv({onOpenDossier:s}){const[e,n]=$t.useState(!1),[r,o]=$t.useState(!1),[c,d]=$t.useState("");$t.useEffect(()=>{const m=()=>{n(window.scrollY>40)};window.addEventListener("scroll",m);const g=()=>{const _=new Date,y={timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1};d(new Intl.DateTimeFormat("en-GB",y).format(_))};g();const v=setInterval(g,1e3);return()=>{window.removeEventListener("scroll",m),clearInterval(v)}},[]);const f=[{label:"Manifesto",href:"#manifesto"},{label:"Policy & Statecraft",href:"#policy"},{label:"Ventures & Code",href:"#ventures"},{label:"Leadership",href:"#leadership"},{label:"Archival Ledger",href:"#ledger"},{label:"Research",href:"#research"}];return h.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${e?"bg-obsidian-950/85 backdrop-blur-md border-b border-brass/15 py-3.5 shadow-2xl":"bg-transparent py-6"}`,children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between",children:[h.jsxs("a",{href:"#",className:"group flex items-center gap-3.5 text-parchment-100 hover:text-brass transition-colors",children:[h.jsx("div",{className:"w-9 h-9 rounded-sm border border-brass/30 bg-obsidian-850 flex items-center justify-center font-cinzel text-sm font-bold text-brass group-hover:border-brass transition-all",children:jt.monogram}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-cinzel text-xs tracking-widest-editorial uppercase font-semibold text-parchment-100",children:"R. Sai Rithik Reddy"}),h.jsxs("span",{className:"font-mono text-[10px] tracking-wider text-parchment-400 flex items-center gap-1.5",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block"}),"HYD · ",jt.coordinates.split(",")[0]]})]})]}),h.jsx("nav",{className:"hidden lg:flex items-center gap-7 text-[12px] font-mono tracking-widest uppercase text-parchment-400",children:f.map(m=>h.jsx("a",{href:m.href,className:"hover:text-brass transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brass hover:after:w-full after:transition-all after:duration-300",children:m.label},m.href))}),h.jsxs("div",{className:"hidden sm:flex items-center gap-5",children:[h.jsxs("div",{className:"hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded bg-obsidian-850 border border-white/5 text-[11px] font-mono text-parchment-400",children:[h.jsx(vv,{className:"w-3 h-3 text-brass/70"}),h.jsxs("span",{children:[c||"00:00:00"," IST"]})]}),h.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase bg-brass/10 hover:bg-brass text-brass hover:text-obsidian-950 border border-brass/40 hover:border-brass rounded-sm transition-all duration-300 shadow-sm",children:[h.jsx("span",{children:"Executive Dossier"}),h.jsx(Qu,{className:"w-3.5 h-3.5"})]})]}),h.jsx("button",{onClick:()=>o(!r),className:"lg:hidden p-2 text-parchment-200 hover:text-brass transition-colors","aria-label":"Toggle navigation",children:r?h.jsx(Dm,{className:"w-6 h-6"}):h.jsx(Hv,{className:"w-6 h-6"})})]}),r&&h.jsxs("div",{className:"lg:hidden fixed inset-0 top-[65px] bg-obsidian-950/98 backdrop-blur-2xl border-b border-brass/20 p-8 flex flex-col justify-between animate-fadeIn z-40",children:[h.jsxs("div",{className:"flex flex-col gap-6 pt-4",children:[h.jsx("div",{className:"text-[11px] font-mono text-brass uppercase tracking-widest pb-2 border-b border-white/10",children:"Navigation Index"}),f.map(m=>h.jsx("a",{href:m.href,onClick:()=>o(!1),className:"font-cinzel text-xl text-parchment-100 hover:text-brass transition-colors",children:m.label},m.href))]}),h.jsxs("div",{className:"pt-8 border-t border-white/10 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-parchment-400",children:[h.jsx("span",{children:jt.location}),h.jsxs("span",{children:[c," IST"]})]}),h.jsx("button",{onClick:()=>{o(!1),s()},className:"w-full py-3 text-center text-xs font-mono uppercase tracking-widest bg-brass text-obsidian-950 font-bold rounded-sm",children:"Open Executive Dossier"})]})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="174",Jv=0,Np=1,e0=2,Um=1,t0=2,Oi=3,Sr=0,Dn=1,ki=2,_r=0,zs=1,Pp=2,Lp=3,Ip=4,n0=5,Yr=100,i0=101,r0=102,s0=103,a0=104,o0=200,l0=201,c0=202,u0=203,Ju=204,ed=205,d0=206,f0=207,h0=208,p0=209,m0=210,g0=211,x0=212,v0=213,_0=214,td=0,nd=1,id=2,Vs=3,rd=4,sd=5,ad=6,od=7,Fm=0,y0=1,S0=2,yr=0,M0=1,E0=2,w0=3,b0=4,T0=5,A0=6,C0=7,Om=300,js=301,Gs=302,ld=303,cd=304,Il=306,ud=1e3,$r=1001,dd=1002,ci=1003,R0=1004,Qo=1005,vi=1006,Mu=1007,Kr=1008,Vi=1009,km=1010,zm=1011,Ua=1012,jd=1013,Qr=1014,zi=1015,Fa=1016,Gd=1017,Wd=1018,Ws=1020,Bm=35902,Hm=1021,Vm=1022,li=1023,jm=1024,Gm=1025,Bs=1026,Xs=1027,Wm=1028,Xd=1029,Xm=1030,Yd=1031,qd=1033,Ml=33776,El=33777,wl=33778,bl=33779,fd=35840,hd=35841,pd=35842,md=35843,gd=36196,xd=37492,vd=37496,_d=37808,yd=37809,Sd=37810,Md=37811,Ed=37812,wd=37813,bd=37814,Td=37815,Ad=37816,Cd=37817,Rd=37818,Nd=37819,Pd=37820,Ld=37821,Tl=36492,Id=36494,Dd=36495,Ym=36283,Ud=36284,Fd=36285,Od=36286,N0=3200,P0=3201,L0=0,I0=1,vr="",Kn="srgb",Ys="srgb-linear",Rl="linear",Tt="srgb",ws=7680,Dp=519,D0=512,U0=513,F0=514,qm=515,O0=516,k0=517,z0=518,B0=519,Up=35044,Fp="300 es",Bi=2e3,Nl=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=Math.PI/180,kd=180/Math.PI;function Oa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function H0(s,e){return(s%e+e)%e}function wu(s,e,n){return(1-n)*s+n*e}function Ra(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,o,c,d,f,m,g){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,m,g)}set(e,n,r,o,c,d,f,m,g){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=c,v[5]=m,v[6]=r,v[7]=d,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],m=r[6],g=r[1],v=r[4],_=r[7],y=r[2],M=r[5],T=r[8],C=o[0],S=o[3],x=o[6],U=o[1],I=o[4],N=o[7],X=o[2],H=o[5],O=o[8];return c[0]=d*C+f*U+m*X,c[3]=d*S+f*I+m*H,c[6]=d*x+f*N+m*O,c[1]=g*C+v*U+_*X,c[4]=g*S+v*I+_*H,c[7]=g*x+v*N+_*O,c[2]=y*C+M*U+T*X,c[5]=y*S+M*I+T*H,c[8]=y*x+M*N+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],g=e[7],v=e[8];return n*d*v-n*f*g-r*c*v+r*f*m+o*c*g-o*d*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],g=e[7],v=e[8],_=v*d-f*g,y=f*m-v*c,M=g*c-d*m,T=n*_+r*y+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(o*g-v*r)*C,e[2]=(f*r-o*d)*C,e[3]=y*C,e[4]=(v*n-o*m)*C,e[5]=(o*c-f*n)*C,e[6]=M*C,e[7]=(r*m-g*n)*C,e[8]=(d*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const m=Math.cos(c),g=Math.sin(c);return this.set(r*m,r*g,-r*(m*d+g*f)+d+e,-o*g,o*m,-o*(-g*d+m*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new at;function $m(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function V0(){const s=Pl("canvas");return s.style.display="block",s}const Op={};function Gr(s){s in Op||(Op[s]=!0,console.warn(s))}function j0(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function G0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function W0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const kp=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zp=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X0(){const s={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Tt&&(o.r=Hi(o.r),o.g=Hi(o.g),o.b=Hi(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Tt&&(o.r=Hs(o.r),o.g=Hs(o.g),o.b=Hs(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===vr?Rl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ys]:{primaries:e,whitePoint:r,transfer:Rl,toXYZ:kp,fromXYZ:zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Tt,toXYZ:kp,fromXYZ:zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const Mt=X0();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class Y0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=Pl("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bs}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Hi(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q0=0;class $d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Oa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(Tu(o[d].image)):c.push(Tu(o[d]))}else c=Tu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Y0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $0=0;class Un extends $s{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=$r,o=$r,c=vi,d=Kr,f=li,m=Vi,g=Un.DEFAULT_ANISOTROPY,v=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Oa(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Om)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ud:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ud:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Om;Un.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,o=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,g=m[0],v=m[4],_=m[8],y=m[1],M=m[5],T=m[9],C=m[2],S=m[6],x=m[10];if(Math.abs(v-y)<.01&&Math.abs(_-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+C)<.1&&Math.abs(T+S)<.1&&Math.abs(g+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(g+1)/2,N=(M+1)/2,X=(x+1)/2,H=(v+y)/4,O=(_+C)/4,Y=(T+S)/4;return I>N&&I>X?I<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(I),o=H/r,c=O/r):N>X?N<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),r=H/o,c=Y/o):X<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(X),r=O/c,o=Y/c),this.set(r,o,c,n),this}let U=Math.sqrt((S-T)*(S-T)+(_-C)*(_-C)+(y-v)*(y-v));return Math.abs(U)<.001&&(U=1),this.x=(S-T)/U,this.y=(_-C)/U,this.z=(y-v)/U,this.w=Math.acos((g+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K0 extends $s{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Un(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new $d(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends K0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Km extends Un{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z0 extends Un{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let m=r[o+0],g=r[o+1],v=r[o+2],_=r[o+3];const y=c[d+0],M=c[d+1],T=c[d+2],C=c[d+3];if(f===0){e[n+0]=m,e[n+1]=g,e[n+2]=v,e[n+3]=_;return}if(f===1){e[n+0]=y,e[n+1]=M,e[n+2]=T,e[n+3]=C;return}if(_!==C||m!==y||g!==M||v!==T){let S=1-f;const x=m*y+g*M+v*T+_*C,U=x>=0?1:-1,I=1-x*x;if(I>Number.EPSILON){const X=Math.sqrt(I),H=Math.atan2(X,x*U);S=Math.sin(S*H)/X,f=Math.sin(f*H)/X}const N=f*U;if(m=m*S+y*N,g=g*S+M*N,v=v*S+T*N,_=_*S+C*N,S===1-f){const X=1/Math.sqrt(m*m+g*g+v*v+_*_);m*=X,g*=X,v*=X,_*=X}}e[n]=m,e[n+1]=g,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],m=r[o+1],g=r[o+2],v=r[o+3],_=c[d],y=c[d+1],M=c[d+2],T=c[d+3];return e[n]=f*T+v*_+m*M-g*y,e[n+1]=m*T+v*y+g*_-f*M,e[n+2]=g*T+v*M+f*y-m*_,e[n+3]=v*T-f*_-m*y-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,m=Math.sin,g=f(r/2),v=f(o/2),_=f(c/2),y=m(r/2),M=m(o/2),T=m(c/2);switch(d){case"XYZ":this._x=y*v*_+g*M*T,this._y=g*M*_-y*v*T,this._z=g*v*T+y*M*_,this._w=g*v*_-y*M*T;break;case"YXZ":this._x=y*v*_+g*M*T,this._y=g*M*_-y*v*T,this._z=g*v*T-y*M*_,this._w=g*v*_+y*M*T;break;case"ZXY":this._x=y*v*_-g*M*T,this._y=g*M*_+y*v*T,this._z=g*v*T+y*M*_,this._w=g*v*_-y*M*T;break;case"ZYX":this._x=y*v*_-g*M*T,this._y=g*M*_+y*v*T,this._z=g*v*T-y*M*_,this._w=g*v*_+y*M*T;break;case"YZX":this._x=y*v*_+g*M*T,this._y=g*M*_+y*v*T,this._z=g*v*T-y*M*_,this._w=g*v*_-y*M*T;break;case"XZY":this._x=y*v*_-g*M*T,this._y=g*M*_-y*v*T,this._z=g*v*T+y*M*_,this._w=g*v*_+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],m=n[9],g=n[2],v=n[6],_=n[10],y=r+f+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-g)*M,this._z=(d-o)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(v-m)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+g)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(c-g)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(d-o)/M,this._x=(c+g)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,m=n._y,g=n._z,v=n._w;return this._x=r*v+d*f+o*g-c*m,this._y=o*v+d*m+c*f-r*g,this._z=c*v+d*g+r*m-o*f,this._w=d*v-r*f-o*m-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const m=1-f*f;if(m<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const g=Math.sqrt(m),v=Math.atan2(g,f),_=Math.sin((1-n)*v)/g,y=Math.sin(n*v)/g;return this._w=d*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,m=e.w,g=2*(d*o-f*r),v=2*(f*n-c*o),_=2*(c*r-d*n);return this.x=n+m*g+d*_-f*v,this.y=r+m*v+f*g-c*_,this.z=o+m*_+c*v-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,m=n.z;return this.x=o*m-c*f,this.y=c*d-r*m,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new ne,Bp=new ka;class za{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ri):ri.fromBufferAttribute(c,d),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Jo.copy(r.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),el.subVectors(this.max,Na),Ts.subVectors(e.a,Na),As.subVectors(e.b,Na),Cs.subVectors(e.c,Na),fr.subVectors(As,Ts),hr.subVectors(Cs,As),kr.subVectors(Ts,Cs);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-kr.z,kr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,kr.z,0,-kr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-kr.y,kr.x,0];return!Cu(n,Ts,As,Cs,el)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,Ts,As,Cs,el))?!1:(tl.crossVectors(fr,hr),n=[tl.x,tl.y,tl.z],Cu(n,Ts,As,Cs,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ri=new ne,Jo=new za,Ts=new ne,As=new ne,Cs=new ne,fr=new ne,hr=new ne,kr=new ne,Na=new ne,el=new ne,tl=new ne,zr=new ne;function Cu(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){zr.fromArray(s,c);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),m=e.dot(zr),g=n.dot(zr),v=r.dot(zr);if(Math.max(-Math.max(m,g,v),Math.min(m,g,v))>f)return!1}return!0}const Q0=new za,Pa=new ne,Ru=new ne;class Dl{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Q0.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const n=Pa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Ru)),this.expandByPoint(Pa.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new ne,Nu=new ne,nl=new ne,pr=new ne,Pu=new ne,il=new ne,Lu=new ne;class Zm{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Nu.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Nu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(nl),f=pr.dot(this.direction),m=-pr.dot(nl),g=pr.lengthSq(),v=Math.abs(1-d*d);let _,y,M,T;if(v>0)if(_=d*m-f,y=d*f-m,T=c*v,_>=0)if(y>=-T)if(y<=T){const C=1/v;_*=C,y*=C,M=_*(_+d*y+2*f)+y*(d*_+y+2*m)+g}else y=c,_=Math.max(0,-(d*y+f)),M=-_*_+y*(y+2*m)+g;else y=-c,_=Math.max(0,-(d*y+f)),M=-_*_+y*(y+2*m)+g;else y<=-T?(_=Math.max(0,-(-d*c+f)),y=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+y*(y+2*m)+g):y<=T?(_=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+g):(_=Math.max(0,-(d*c+f)),y=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+y*(y+2*m)+g);else y=d>0?-c:c,_=Math.max(0,-(d*y+f)),M=-_*_+y*(y+2*m)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Nu).addScaledVector(nl,y),M}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),o=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,m=r+d;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,m;const g=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,o=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,o=(e.min.x-y.x)*g),v>=0?(c=(e.min.y-y.y)*v,d=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,d=(e.min.y-y.y)*v),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),_>=0?(f=(e.min.z-y.z)*_,m=(e.max.z-y.z)*_):(f=(e.max.z-y.z)*_,m=(e.min.z-y.z)*_),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,o,c){Pu.subVectors(n,e),il.subVectors(r,e),Lu.crossVectors(Pu,il);let d=this.direction.dot(Lu),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;pr.subVectors(this.origin,e);const m=f*this.direction.dot(il.crossVectors(pr,il));if(m<0)return null;const g=f*this.direction.dot(Pu.cross(pr));if(g<0||m+g>d)return null;const v=-f*pr.dot(Lu);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,o,c,d,f,m,g,v,_,y,M,T,C,S){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,m,g,v,_,y,M,T,C,S)}set(e,n,r,o,c,d,f,m,g,v,_,y,M,T,C,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=d,x[9]=f,x[13]=m,x[2]=g,x[6]=v,x[10]=_,x[14]=y,x[3]=M,x[7]=T,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),d=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),m=Math.cos(o),g=Math.sin(o),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const y=d*v,M=d*_,T=f*v,C=f*_;n[0]=m*v,n[4]=-m*_,n[8]=g,n[1]=M+T*g,n[5]=y-C*g,n[9]=-f*m,n[2]=C-y*g,n[6]=T+M*g,n[10]=d*m}else if(e.order==="YXZ"){const y=m*v,M=m*_,T=g*v,C=g*_;n[0]=y+C*f,n[4]=T*f-M,n[8]=d*g,n[1]=d*_,n[5]=d*v,n[9]=-f,n[2]=M*f-T,n[6]=C+y*f,n[10]=d*m}else if(e.order==="ZXY"){const y=m*v,M=m*_,T=g*v,C=g*_;n[0]=y-C*f,n[4]=-d*_,n[8]=T+M*f,n[1]=M+T*f,n[5]=d*v,n[9]=C-y*f,n[2]=-d*g,n[6]=f,n[10]=d*m}else if(e.order==="ZYX"){const y=d*v,M=d*_,T=f*v,C=f*_;n[0]=m*v,n[4]=T*g-M,n[8]=y*g+C,n[1]=m*_,n[5]=C*g+y,n[9]=M*g-T,n[2]=-g,n[6]=f*m,n[10]=d*m}else if(e.order==="YZX"){const y=d*m,M=d*g,T=f*m,C=f*g;n[0]=m*v,n[4]=C-y*_,n[8]=T*_+M,n[1]=_,n[5]=d*v,n[9]=-f*v,n[2]=-g*v,n[6]=M*_+T,n[10]=y-C*_}else if(e.order==="XZY"){const y=d*m,M=d*g,T=f*m,C=f*g;n[0]=m*v,n[4]=-_,n[8]=g*v,n[1]=y*_+C,n[5]=d*v,n[9]=M*_-T,n[2]=T*_-M,n[6]=f*v,n[10]=C*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J0,e,e_)}lookAt(e,n,r){const o=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),mr.crossVectors(r,Hn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),mr.crossVectors(r,Hn)),mr.normalize(),rl.crossVectors(Hn,mr),o[0]=mr.x,o[4]=rl.x,o[8]=Hn.x,o[1]=mr.y,o[5]=rl.y,o[9]=Hn.y,o[2]=mr.z,o[6]=rl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],m=r[8],g=r[12],v=r[1],_=r[5],y=r[9],M=r[13],T=r[2],C=r[6],S=r[10],x=r[14],U=r[3],I=r[7],N=r[11],X=r[15],H=o[0],O=o[4],Y=o[8],R=o[12],A=o[1],z=o[5],ae=o[9],J=o[13],ue=o[2],he=o[6],oe=o[10],ce=o[14],B=o[3],le=o[7],se=o[11],D=o[15];return c[0]=d*H+f*A+m*ue+g*B,c[4]=d*O+f*z+m*he+g*le,c[8]=d*Y+f*ae+m*oe+g*se,c[12]=d*R+f*J+m*ce+g*D,c[1]=v*H+_*A+y*ue+M*B,c[5]=v*O+_*z+y*he+M*le,c[9]=v*Y+_*ae+y*oe+M*se,c[13]=v*R+_*J+y*ce+M*D,c[2]=T*H+C*A+S*ue+x*B,c[6]=T*O+C*z+S*he+x*le,c[10]=T*Y+C*ae+S*oe+x*se,c[14]=T*R+C*J+S*ce+x*D,c[3]=U*H+I*A+N*ue+X*B,c[7]=U*O+I*z+N*he+X*le,c[11]=U*Y+I*ae+N*oe+X*se,c[15]=U*R+I*J+N*ce+X*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],m=e[9],g=e[13],v=e[2],_=e[6],y=e[10],M=e[14],T=e[3],C=e[7],S=e[11],x=e[15];return T*(+c*m*_-o*g*_-c*f*y+r*g*y+o*f*M-r*m*M)+C*(+n*m*M-n*g*y+c*d*y-o*d*M+o*g*v-c*m*v)+S*(+n*g*_-n*f*M-c*d*_+r*d*M+c*f*v-r*g*v)+x*(-o*f*v-n*m*_+n*f*y+o*d*_-r*d*y+r*m*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],g=e[7],v=e[8],_=e[9],y=e[10],M=e[11],T=e[12],C=e[13],S=e[14],x=e[15],U=_*S*g-C*y*g+C*m*M-f*S*M-_*m*x+f*y*x,I=T*y*g-v*S*g-T*m*M+d*S*M+v*m*x-d*y*x,N=v*C*g-T*_*g+T*f*M-d*C*M-v*f*x+d*_*x,X=T*_*m-v*C*m-T*f*y+d*C*y+v*f*S-d*_*S,H=n*U+r*I+o*N+c*X;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=U*O,e[1]=(C*y*c-_*S*c-C*o*M+r*S*M+_*o*x-r*y*x)*O,e[2]=(f*S*c-C*m*c+C*o*g-r*S*g-f*o*x+r*m*x)*O,e[3]=(_*m*c-f*y*c-_*o*g+r*y*g+f*o*M-r*m*M)*O,e[4]=I*O,e[5]=(v*S*c-T*y*c+T*o*M-n*S*M-v*o*x+n*y*x)*O,e[6]=(T*m*c-d*S*c-T*o*g+n*S*g+d*o*x-n*m*x)*O,e[7]=(d*y*c-v*m*c+v*o*g-n*y*g-d*o*M+n*m*M)*O,e[8]=N*O,e[9]=(T*_*c-v*C*c-T*r*M+n*C*M+v*r*x-n*_*x)*O,e[10]=(d*C*c-T*f*c+T*r*g-n*C*g-d*r*x+n*f*x)*O,e[11]=(v*f*c-d*_*c-v*r*g+n*_*g+d*r*M-n*f*M)*O,e[12]=X*O,e[13]=(v*C*o-T*_*o+T*r*y-n*C*y-v*r*S+n*_*S)*O,e[14]=(T*f*o-d*C*o-T*r*m+n*C*m+d*r*S-n*f*S)*O,e[15]=(d*_*o-v*f*o+v*r*m-n*_*m-d*r*y+n*f*y)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,m=e.z,g=c*d,v=c*f;return this.set(g*d+r,g*f-o*m,g*m+o*f,0,g*f+o*m,v*f+r,v*m-o*d,0,g*m-o*f,v*m+o*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,m=n._w,g=c+c,v=d+d,_=f+f,y=c*g,M=c*v,T=c*_,C=d*v,S=d*_,x=f*_,U=m*g,I=m*v,N=m*_,X=r.x,H=r.y,O=r.z;return o[0]=(1-(C+x))*X,o[1]=(M+N)*X,o[2]=(T-I)*X,o[3]=0,o[4]=(M-N)*H,o[5]=(1-(y+x))*H,o[6]=(S+U)*H,o[7]=0,o[8]=(T+I)*O,o[9]=(S-U)*O,o[10]=(1-(y+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Rs.set(o[0],o[1],o[2]).length();const d=Rs.set(o[4],o[5],o[6]).length(),f=Rs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],si.copy(this);const g=1/c,v=1/d,_=1/f;return si.elements[0]*=g,si.elements[1]*=g,si.elements[2]*=g,si.elements[4]*=v,si.elements[5]*=v,si.elements[6]*=v,si.elements[8]*=_,si.elements[9]*=_,si.elements[10]*=_,n.setFromRotationMatrix(si),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=Bi){const m=this.elements,g=2*c/(n-e),v=2*c/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let M,T;if(f===Bi)M=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(f===Nl)M=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=Bi){const m=this.elements,g=1/(n-e),v=1/(r-o),_=1/(d-c),y=(n+e)*g,M=(r+o)*v;let T,C;if(f===Bi)T=(d+c)*_,C=-2*_;else if(f===Nl)T=c*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*g,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new ne,si=new Xt,J0=new ne(0,0,0),e_=new ne(1,1,1),mr=new ne,rl=new ne,Hn=new ne,Hp=new Xt,Vp=new ka;class ji{constructor(e=0,n=0,r=0,o=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],m=o[1],g=o[5],v=o[9],_=o[2],y=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,g)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class Qm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t_=0;const jp=new ne,Ns=new ka,Di=new Xt,sl=new ne,La=new ne,n_=new ne,i_=new ka,Gp=new ne(1,0,0),Wp=new ne(0,1,0),Xp=new ne(0,0,1),Yp={type:"added"},r_={type:"removed"},Ps={type:"childadded",child:null},Iu={type:"childremoved",child:null};class Fn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new ne,n=new ji,r=new ka,o=new ne(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xt},normalMatrix:{value:new at}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Gp,e)}rotateY(e){return this.rotateOnAxis(Wp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gp,e)}translateY(e){return this.translateOnAxis(Wp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?sl.copy(e):sl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(La,sl,this.up):Di.lookAt(sl,La,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(Di),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(r_),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,n_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,i_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let g=0,v=m.length;g<v;g++){const _=m[g];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,g=this.material.length;m<g;m++)f.push(c(e.materials,this.material[m]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(c(e.animations,m))}}if(n){const f=d(e.geometries),m=d(e.materials),g=d(e.textures),v=d(e.images),_=d(e.shapes),y=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),g.length>0&&(r.textures=g),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(f){const m=[];for(const g in f){const v=f[g];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new ne(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new ne,Ui=new ne,Du=new ne,Fi=new ne,Ls=new ne,Is=new ne,qp=new ne,Uu=new ne,Fu=new ne,Ou=new ne,ku=new Wt,zu=new Wt,Bu=new Wt;class oi{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ai.subVectors(e,n),o.cross(ai);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){ai.subVectors(o,n),Ui.subVectors(r,n),Du.subVectors(e,n);const d=ai.dot(ai),f=ai.dot(Ui),m=ai.dot(Du),g=Ui.dot(Ui),v=Ui.dot(Du),_=d*g-f*f;if(_===0)return c.set(0,0,0),null;const y=1/_,M=(g*m-f*v)*y,T=(d*v-f*m)*y;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,o,c,d,f,m){return this.getBarycoord(e,n,r,o,Fi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Fi.x),m.addScaledVector(d,Fi.y),m.addScaledVector(f,Fi.z),m)}static getInterpolatedAttribute(e,n,r,o,c,d){return ku.setScalar(0),zu.setScalar(0),Bu.setScalar(0),ku.fromBufferAttribute(e,n),zu.fromBufferAttribute(e,r),Bu.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(ku,c.x),d.addScaledVector(zu,c.y),d.addScaledVector(Bu,c.z),d}static isFrontFacing(e,n,r,o){return ai.subVectors(r,n),Ui.subVectors(e,n),ai.cross(Ui).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ai.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;Ls.subVectors(o,r),Is.subVectors(c,r),Uu.subVectors(e,r);const m=Ls.dot(Uu),g=Is.dot(Uu);if(m<=0&&g<=0)return n.copy(r);Fu.subVectors(e,o);const v=Ls.dot(Fu),_=Is.dot(Fu);if(v>=0&&_<=v)return n.copy(o);const y=m*_-v*g;if(y<=0&&m>=0&&v<=0)return d=m/(m-v),n.copy(r).addScaledVector(Ls,d);Ou.subVectors(e,c);const M=Ls.dot(Ou),T=Is.dot(Ou);if(T>=0&&M<=T)return n.copy(c);const C=M*g-m*T;if(C<=0&&g>=0&&T<=0)return f=g/(g-T),n.copy(r).addScaledVector(Is,f);const S=v*T-M*_;if(S<=0&&_-v>=0&&M-T>=0)return qp.subVectors(c,o),f=(_-v)/(_-v+(M-T)),n.copy(o).addScaledVector(qp,f);const x=1/(S+C+y);return d=C*x,f=y*x,n.copy(r).addScaledVector(Ls,d).addScaledVector(Is,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},al={h:0,s:0,l:0};function Hu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class bt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Mt.workingColorSpace){if(e=H0(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Hu(d,c,e+1/3),this.g=Hu(d,c,e),this.b=Hu(d,c,e-1/3)}return Mt.toWorkingColorSpace(this,o),this}setStyle(e,n=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=Jm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Mt.fromWorkingColorSpace(vn.copy(this),e),Math.round(gt(vn.r*255,0,255))*65536+Math.round(gt(vn.g*255,0,255))*256+Math.round(gt(vn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(vn.copy(this),n);const r=vn.r,o=vn.g,c=vn.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let m,g;const v=(f+d)/2;if(f===d)m=0,g=0;else{const _=d-f;switch(g=v<=.5?_/(d+f):_/(2-d-f),d){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=g,e.l=v,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Kn){Mt.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,o=vn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(al);const r=wu(gr.h,al.h,n),o=wu(gr.s,al.s,n),c=wu(gr.l,al.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new bt;bt.NAMES=Jm;let s_=0;class Ba extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=zs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=ed,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ju&&(r.blendSrc=this.blendSrc),this.blendDst!==ed&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const m=c[f];delete m.metadata,d.push(m)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kd extends Ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new ne,ol=new Ct;let a_=0;class yi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Up,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ra(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ra(n,this.array)),n}setX(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ra(n,this.array)),n}setY(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ra(n,this.array)),n}setZ(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ra(n,this.array)),n}setW(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),o=In(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),o=In(o,this.array),c=In(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Up&&(e.usage=this.usage),e}}class eg extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class tg extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Zr extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let o_=0;const $n=new Xt,Vu=new Fn,Ds=new ne,Vn=new za,Ia=new za,on=new ne;class Er extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($m(e)?tg:eg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new at().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Zr(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Vn.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Ia.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(Vn.min,Ia.min),Vn.expandByPoint(on),on.addVectors(Vn.max,Ia.max),Vn.expandByPoint(on)):(Vn.expandByPoint(Ia.min),Vn.expandByPoint(Ia.max))}Vn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)on.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(on));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],m=this.morphTargetsRelative;for(let g=0,v=f.count;g<v;g++)on.fromBufferAttribute(f,g),m&&(Ds.fromBufferAttribute(e,g),on.add(Ds)),o=Math.max(o,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],m=[];for(let Y=0;Y<r.count;Y++)f[Y]=new ne,m[Y]=new ne;const g=new ne,v=new ne,_=new ne,y=new Ct,M=new Ct,T=new Ct,C=new ne,S=new ne;function x(Y,R,A){g.fromBufferAttribute(r,Y),v.fromBufferAttribute(r,R),_.fromBufferAttribute(r,A),y.fromBufferAttribute(c,Y),M.fromBufferAttribute(c,R),T.fromBufferAttribute(c,A),v.sub(g),_.sub(g),M.sub(y),T.sub(y);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(z),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(z),f[Y].add(C),f[R].add(C),f[A].add(C),m[Y].add(S),m[R].add(S),m[A].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Y=0,R=U.length;Y<R;++Y){const A=U[Y],z=A.start,ae=A.count;for(let J=z,ue=z+ae;J<ue;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const I=new ne,N=new ne,X=new ne,H=new ne;function O(Y){X.fromBufferAttribute(o,Y),H.copy(X);const R=f[Y];I.copy(R),I.sub(X.multiplyScalar(X.dot(R))).normalize(),N.crossVectors(H,R);const z=N.dot(m[Y])<0?-1:1;d.setXYZW(Y,I.x,I.y,I.z,z)}for(let Y=0,R=U.length;Y<R;++Y){const A=U[Y],z=A.start,ae=A.count;for(let J=z,ue=z+ae;J<ue;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new ne,c=new ne,d=new ne,f=new ne,m=new ne,g=new ne,v=new ne,_=new ne;if(e)for(let y=0,M=e.count;y<M;y+=3){const T=e.getX(y+0),C=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,S),v.subVectors(d,c),_.subVectors(o,c),v.cross(_),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),g.fromBufferAttribute(r,S),f.add(v),m.add(v),g.add(v),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,g.x,g.y,g.z)}else for(let y=0,M=n.count;y<M;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),v.subVectors(d,c),_.subVectors(o,c),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(f,m){const g=f.array,v=f.itemSize,_=f.normalized,y=new g.constructor(m.length*v);let M=0,T=0;for(let C=0,S=m.length;C<S;C++){f.isInterleavedBufferAttribute?M=m[C]*f.data.stride+f.offset:M=m[C]*v;for(let x=0;x<v;x++)y[T++]=g[M++]}return new yi(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Er,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],g=e(m,r);n.setAttribute(f,g)}const c=this.morphAttributes;for(const f in c){const m=[],g=c[f];for(let v=0,_=g.length;v<_;v++){const y=g[v],M=e(y,r);m.push(M)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,m=d.length;f<m;f++){const g=d[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const g in m)m[g]!==void 0&&(e[g]=m[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const g=r[m];e.data.attributes[m]=g.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const g=this.morphAttributes[m],v=[];for(let _=0,y=g.length;_<y;_++){const M=g[_];v.push(M.toJSON(e.data))}v.length>0&&(o[m]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const v=o[g];this.setAttribute(g,v.clone(n))}const c=e.morphAttributes;for(const g in c){const v=[],_=c[g];for(let y=0,M=_.length;y<M;y++)v.push(_[y].clone(n));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,v=d.length;g<v;g++){const _=d[g];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $p=new Xt,Br=new Zm,ll=new Dl,Kp=new ne,cl=new ne,ul=new ne,dl=new ne,ju=new ne,fl=new ne,Zp=new ne,hl=new ne;class _i extends Fn{constructor(e=new Er,n=new Kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){fl.set(0,0,0);for(let m=0,g=c.length;m<g;m++){const v=f[m],_=c[m];v!==0&&(ju.fromBufferAttribute(_,e),d?fl.addScaledVector(ju,v):fl.addScaledVector(ju.sub(n),v))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ll.copy(r.boundingSphere),ll.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(ll.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ll,Kp)===null||Br.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&($p.copy(c).invert(),Br.copy(e.ray).applyMatrix4($p),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,m=c.attributes.position,g=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,y=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,C=y.length;T<C;T++){const S=y[T],x=d[S.materialIndex],U=Math.max(S.start,M.start),I=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let N=U,X=I;N<X;N+=3){const H=f.getX(N),O=f.getX(N+1),Y=f.getX(N+2);o=pl(this,x,e,r,g,v,_,H,O,Y),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let S=T,x=C;S<x;S+=3){const U=f.getX(S),I=f.getX(S+1),N=f.getX(S+2);o=pl(this,d,e,r,g,v,_,U,I,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=y.length;T<C;T++){const S=y[T],x=d[S.materialIndex],U=Math.max(S.start,M.start),I=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let N=U,X=I;N<X;N+=3){const H=N,O=N+1,Y=N+2;o=pl(this,x,e,r,g,v,_,H,O,Y),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=T,x=C;S<x;S+=3){const U=S,I=S+1,N=S+2;o=pl(this,d,e,r,g,v,_,U,I,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function l_(s,e,n,r,o,c,d,f){let m;if(e.side===Dn?m=r.intersectTriangle(d,c,o,!0,f):m=r.intersectTriangle(o,c,d,e.side===Sr,f),m===null)return null;hl.copy(f),hl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(hl);return g<n.near||g>n.far?null:{distance:g,point:hl.clone(),object:s}}function pl(s,e,n,r,o,c,d,f,m,g){s.getVertexPosition(f,cl),s.getVertexPosition(m,ul),s.getVertexPosition(g,dl);const v=l_(s,e,n,r,cl,ul,dl,Zp);if(v){const _=new ne;oi.getBarycoord(Zp,cl,ul,dl,_),o&&(v.uv=oi.getInterpolatedAttribute(o,f,m,g,_,new Ct)),c&&(v.uv1=oi.getInterpolatedAttribute(c,f,m,g,_,new Ct)),d&&(v.normal=oi.getInterpolatedAttribute(d,f,m,g,_,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:f,b:m,c:g,normal:new ne,materialIndex:0};oi.getNormal(cl,ul,dl,y.normal),v.face=y,v.barycoord=_}return v}class Ha extends Er{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const m=[],g=[],v=[],_=[];let y=0,M=0;T("z","y","x",-1,-1,r,n,e,d,c,0),T("z","y","x",1,-1,r,n,-e,d,c,1),T("x","z","y",1,1,e,r,n,o,d,2),T("x","z","y",1,-1,e,r,-n,o,d,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Zr(g,3)),this.setAttribute("normal",new Zr(v,3)),this.setAttribute("uv",new Zr(_,2));function T(C,S,x,U,I,N,X,H,O,Y,R){const A=N/O,z=X/Y,ae=N/2,J=X/2,ue=H/2,he=O+1,oe=Y+1;let ce=0,B=0;const le=new ne;for(let se=0;se<oe;se++){const D=se*z-J;for(let ie=0;ie<he;ie++){const De=ie*A-ae;le[C]=De*U,le[S]=D*I,le[x]=ue,g.push(le.x,le.y,le.z),le[C]=0,le[S]=0,le[x]=H>0?1:-1,v.push(le.x,le.y,le.z),_.push(ie/O),_.push(1-se/Y),ce+=1}}for(let se=0;se<Y;se++)for(let D=0;D<O;D++){const ie=y+D+he*se,De=y+D+he*(se+1),Q=y+(D+1)+he*(se+1),pe=y+(D+1)+he*se;m.push(ie,De,pe),m.push(De,Q,pe),B+=6}f.addGroup(M,B,R),M+=B,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function bn(s){const e={};for(let n=0;n<s.length;n++){const r=qs(s[n]);for(const o in r)e[o]=r[o]}return e}function c_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function ng(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const u_={clone:qs,merge:bn};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=c_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ig extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new ne,Qp=new Ct,Jp=new Ct;class Zn extends ig{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kd*2*Math.atan(Math.tan(Eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,Jp),n.subVectors(Jp,Qp)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Eu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,g=d.fullHeight;c+=d.offsetX*o/m,n-=d.offsetY*r/g,o*=d.width/m,r*=d.height/g}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Fs=1;class h_ extends Fn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Us,Fs,e,n);o.layers=this.layers,this.add(o);const c=new Zn(Us,Fs,e,n);c.layers=this.layers,this.add(c);const d=new Zn(Us,Fs,e,n);d.layers=this.layers,this.add(d);const f=new Zn(Us,Fs,e,n);f.layers=this.layers,this.add(f);const m=new Zn(Us,Fs,e,n);m.layers=this.layers,this.add(m);const g=new Zn(Us,Fs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,m]=n;for(const g of n)this.remove(g);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,m,g,v]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(_,y,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class rg extends Un{constructor(e,n,r,o,c,d,f,m,g,v){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,o,c,d,f,m,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p_ extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new rg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ha(5,5,5),c=new Mr({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:_r});c.uniforms.tEquirect.value=n;const d=new _i(o,c),f=n.minFilter;return n.minFilter===Kr&&(n.minFilter=vi),new h_(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}class ml extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m_={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,m=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),x=this._getHandJoint(g,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],y=v.position.distanceTo(_.position),M=.02,T=.005;g.inputState.pinching&&y>M+T?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=M-T&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ml;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class g_ extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wu=new ne,x_=new ne,v_=new at;class Wr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Wu.subVectors(r,n).cross(x_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||v_.getNormalMatrix(e),o=this.coplanarPoint(Wu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Dl,gl=new ne;class sg{constructor(e=new Wr,n=new Wr,r=new Wr,o=new Wr,c=new Wr,d=new Wr){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,o=e.elements,c=o[0],d=o[1],f=o[2],m=o[3],g=o[4],v=o[5],_=o[6],y=o[7],M=o[8],T=o[9],C=o[10],S=o[11],x=o[12],U=o[13],I=o[14],N=o[15];if(r[0].setComponents(m-c,y-g,S-M,N-x).normalize(),r[1].setComponents(m+c,y+g,S+M,N+x).normalize(),r[2].setComponents(m+d,y+v,S+T,N+U).normalize(),r[3].setComponents(m-d,y-v,S-T,N-U).normalize(),r[4].setComponents(m-f,y-_,S-C,N-I).normalize(),n===Bi)r[5].setComponents(m+f,y+_,S+C,N+I).normalize();else if(n===Nl)r[5].setComponents(f,_,C,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(gl.x=o.normal.x>0?e.max.x:e.min.x,gl.y=o.normal.y>0?e.max.y:e.min.y,gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ag extends Ba{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const em=new Xt,zd=new Zm,xl=new Dl,vl=new ne;class __ extends Fn{constructor(e=new Er,n=new ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(o),xl.radius+=c,e.ray.intersectsSphere(xl)===!1)return;em.copy(o).invert(),zd.copy(e.ray).applyMatrix4(em);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let T=y,C=M;T<C;T++){const S=g.getX(T);vl.fromBufferAttribute(_,S),tm(vl,S,m,o,e,n,this)}}else{const y=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let T=y,C=M;T<C;T++)vl.fromBufferAttribute(_,T),tm(vl,T,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function tm(s,e,n,r,o,c,d){const f=zd.distanceSqToPoint(s);if(f<n){const m=new ne;zd.closestPointToPoint(s,m),m.applyMatrix4(r);const g=o.ray.origin.distanceTo(m);if(g<o.near||g>o.far)return;c.push({distance:g,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class og extends Un{constructor(e,n,r,o,c,d,f,m,g,v=Bs){if(v!==Bs&&v!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Bs&&(r=Qr),r===void 0&&v===Xs&&(r=Ws),super(null,o,c,d,f,m,v,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ci,this.minFilter=m!==void 0?m:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Va extends Er{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),m=Math.floor(o),g=f+1,v=m+1,_=e/f,y=n/m,M=[],T=[],C=[],S=[];for(let x=0;x<v;x++){const U=x*y-d;for(let I=0;I<g;I++){const N=I*_-c;T.push(N,-U,0),C.push(0,0,1),S.push(I/f),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let U=0;U<f;U++){const I=U+g*x,N=U+g*(x+1),X=U+1+g*(x+1),H=U+1+g*x;M.push(I,N,H),M.push(N,X,H)}this.setIndex(M),this.setAttribute("position",new Zr(T,3)),this.setAttribute("normal",new Zr(C,3)),this.setAttribute("uv",new Zr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.widthSegments,e.heightSegments)}}class y_ extends Ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S_ extends Ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class M_ extends ig{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,f-=v*this.view.offsetY,m=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class E_ extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class w_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=nm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function nm(){return performance.now()}function im(s,e,n,r){const o=b_(r);switch(n){case Hm:return s*e;case jm:return s*e;case Gm:return s*e*2;case Wm:return s*e/o.components*o.byteLength;case Xd:return s*e/o.components*o.byteLength;case Xm:return s*e*2/o.components*o.byteLength;case Yd:return s*e*2/o.components*o.byteLength;case Vm:return s*e*3/o.components*o.byteLength;case li:return s*e*4/o.components*o.byteLength;case qd:return s*e*4/o.components*o.byteLength;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hd:case md:return Math.max(s,16)*Math.max(e,8)/4;case fd:case pd:return Math.max(s,8)*Math.max(e,8)/2;case gd:case xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Id:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ym:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fd:case Od:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function b_(s){switch(s){case Vi:case km:return{byteLength:1,components:1};case Ua:case zm:case Fa:return{byteLength:2,components:1};case Gd:case Wd:return{byteLength:2,components:4};case Qr:case jd:case zi:return{byteLength:4,components:1};case Bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lg(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function T_(s){const e=new WeakMap;function n(f,m){const g=f.array,v=f.usage,_=g.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,g,v),f.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,m,g){const v=m.array,_=m.updateRanges;if(s.bindBuffer(g,f),_.length===0)s.bufferSubData(g,0,v);else{_.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<_.length;M++){const T=_[y],C=_[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++y,_[y]=C)}_.length=y+1;for(let M=0,T=_.length;M<T;M++){const C=_[M];s.bufferSubData(g,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function d(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,m));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,m),g.version=f.version}}return{get:o,remove:c,update:d}}var A_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C_=`#ifdef USE_ALPHAHASH
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
#endif`,R_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I_=`#ifdef USE_AOMAP
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
#endif`,D_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U_=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,F_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B_=`#ifdef USE_IRIDESCENCE
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
#endif`,H_=`#ifdef USE_BUMPMAP
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,K_=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Z_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q_=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ry=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oy=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,py=`#ifdef USE_GRADIENTMAP
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
}`,my=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vy=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,_y=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,My=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,by=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ty=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fy=`#if defined( USE_POINTS_UV )
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
#endif`,Oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,By=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`#ifdef USE_MORPHTARGETS
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
#endif`,jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$y=`#ifdef USE_NORMALMAP
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
#endif`,Ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,dS=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,fS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hS=`#ifdef USE_SKINNING
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
#endif`,pS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_S=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yS=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SS=`#ifdef USE_TRANSMISSION
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
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AS=`uniform sampler2D t2D;
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
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`#include <common>
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
}`,IS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DS=`#define DISTANCE
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
}`,US=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`uniform float scale;
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
}`,zS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,HS=`uniform vec3 diffuse;
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
}`,VS=`#define LAMBERT
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
}`,jS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,GS=`#define MATCAP
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
}`,WS=`#define MATCAP
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
}`,XS=`#define NORMAL
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
}`,YS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qS=`#define PHONG
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
}`,$S=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,KS=`#define STANDARD
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
}`,ZS=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,QS=`#define TOON
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
}`,JS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,eM=`uniform float size;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,rM=`uniform float rotation;
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
}`,sM=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:A_,alphahash_pars_fragment:C_,alphamap_fragment:R_,alphamap_pars_fragment:N_,alphatest_fragment:P_,alphatest_pars_fragment:L_,aomap_fragment:I_,aomap_pars_fragment:D_,batching_pars_vertex:U_,batching_vertex:F_,begin_vertex:O_,beginnormal_vertex:k_,bsdfs:z_,iridescence_fragment:B_,bumpmap_pars_fragment:H_,clipping_planes_fragment:V_,clipping_planes_pars_fragment:j_,clipping_planes_pars_vertex:G_,clipping_planes_vertex:W_,color_fragment:X_,color_pars_fragment:Y_,color_pars_vertex:q_,color_vertex:$_,common:K_,cube_uv_reflection_fragment:Z_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:J_,displacementmap_vertex:ey,emissivemap_fragment:ty,emissivemap_pars_fragment:ny,colorspace_fragment:iy,colorspace_pars_fragment:ry,envmap_fragment:sy,envmap_common_pars_fragment:ay,envmap_pars_fragment:oy,envmap_pars_vertex:ly,envmap_physical_pars_fragment:_y,envmap_vertex:cy,fog_vertex:uy,fog_pars_vertex:dy,fog_fragment:fy,fog_pars_fragment:hy,gradientmap_pars_fragment:py,lightmap_pars_fragment:my,lights_lambert_fragment:gy,lights_lambert_pars_fragment:xy,lights_pars_begin:vy,lights_toon_fragment:yy,lights_toon_pars_fragment:Sy,lights_phong_fragment:My,lights_phong_pars_fragment:Ey,lights_physical_fragment:wy,lights_physical_pars_fragment:by,lights_fragment_begin:Ty,lights_fragment_maps:Ay,lights_fragment_end:Cy,logdepthbuf_fragment:Ry,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Py,logdepthbuf_vertex:Ly,map_fragment:Iy,map_pars_fragment:Dy,map_particle_fragment:Uy,map_particle_pars_fragment:Fy,metalnessmap_fragment:Oy,metalnessmap_pars_fragment:ky,morphinstance_vertex:zy,morphcolor_vertex:By,morphnormal_vertex:Hy,morphtarget_pars_vertex:Vy,morphtarget_vertex:jy,normal_fragment_begin:Gy,normal_fragment_maps:Wy,normal_pars_fragment:Xy,normal_pars_vertex:Yy,normal_vertex:qy,normalmap_pars_fragment:$y,clearcoat_normal_fragment_begin:Ky,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:Qy,iridescence_pars_fragment:Jy,opaque_fragment:eS,packing:tS,premultiplied_alpha_fragment:nS,project_vertex:iS,dithering_fragment:rS,dithering_pars_fragment:sS,roughnessmap_fragment:aS,roughnessmap_pars_fragment:oS,shadowmap_pars_fragment:lS,shadowmap_pars_vertex:cS,shadowmap_vertex:uS,shadowmask_pars_fragment:dS,skinbase_vertex:fS,skinning_pars_vertex:hS,skinning_vertex:pS,skinnormal_vertex:mS,specularmap_fragment:gS,specularmap_pars_fragment:xS,tonemapping_fragment:vS,tonemapping_pars_fragment:_S,transmission_fragment:yS,transmission_pars_fragment:SS,uv_pars_fragment:MS,uv_pars_vertex:ES,uv_vertex:wS,worldpos_vertex:bS,background_vert:TS,background_frag:AS,backgroundCube_vert:CS,backgroundCube_frag:RS,cube_vert:NS,cube_frag:PS,depth_vert:LS,depth_frag:IS,distanceRGBA_vert:DS,distanceRGBA_frag:US,equirect_vert:FS,equirect_frag:OS,linedashed_vert:kS,linedashed_frag:zS,meshbasic_vert:BS,meshbasic_frag:HS,meshlambert_vert:VS,meshlambert_frag:jS,meshmatcap_vert:GS,meshmatcap_frag:WS,meshnormal_vert:XS,meshnormal_frag:YS,meshphong_vert:qS,meshphong_frag:$S,meshphysical_vert:KS,meshphysical_frag:ZS,meshtoon_vert:QS,meshtoon_frag:JS,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:rM,sprite_frag:sM},Re={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},gi={basic:{uniforms:bn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:bn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new bt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:bn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:bn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:bn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new bt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:bn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:bn([Re.points,Re.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:bn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:bn([Re.common,Re.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:bn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:bn([Re.sprite,Re.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:bn([Re.common,Re.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:bn([Re.lights,Re.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};gi.physical={uniforms:bn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const _l={r:0,b:0,g:0},Vr=new ji,aM=new Xt;function oM(s,e,n,r,o,c,d){const f=new bt(0);let m=c===!0?0:1,g,v,_=null,y=0,M=null;function T(I){let N=I.isScene===!0?I.background:null;return N&&N.isTexture&&(N=(I.backgroundBlurriness>0?n:e).get(N)),N}function C(I){let N=!1;const X=T(I);X===null?x(f,m):X&&X.isColor&&(x(X,1),N=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(I,N){const X=T(N);X&&(X.isCubeTexture||X.mapping===Il)?(v===void 0&&(v=new _i(new Ha(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:qs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,O,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Vr.copy(N.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(aM.makeRotationFromEuler(Vr)),v.material.toneMapped=Mt.getTransfer(X.colorSpace)!==Tt,(_!==X||y!==X.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=X,y=X.version,M=s.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(g===void 0&&(g=new _i(new Va(2,2),new Mr({name:"BackgroundMaterial",uniforms:qs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=X,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.toneMapped=Mt.getTransfer(X.colorSpace)!==Tt,X.matrixAutoUpdate===!0&&X.updateMatrix(),g.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||y!==X.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=X,y=X.version,M=s.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null))}function x(I,N){I.getRGB(_l,ng(s)),r.buffers.color.setClear(_l.r,_l.g,_l.b,N,d)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,N=1){f.set(I),m=N,x(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(I){m=I,x(f,m)},render:C,addToRenderList:S,dispose:U}}function lM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let c=o,d=!1;function f(A,z,ae,J,ue){let he=!1;const oe=_(J,ae,z);c!==oe&&(c=oe,g(c.object)),he=M(A,J,ae,ue),he&&T(A,J,ae,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,N(A,z,ae,J),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function m(){return s.createVertexArray()}function g(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function _(A,z,ae){const J=ae.wireframe===!0;let ue=r[A.id];ue===void 0&&(ue={},r[A.id]=ue);let he=ue[z.id];he===void 0&&(he={},ue[z.id]=he);let oe=he[J];return oe===void 0&&(oe=y(m()),he[J]=oe),oe}function y(A){const z=[],ae=[],J=[];for(let ue=0;ue<n;ue++)z[ue]=0,ae[ue]=0,J[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ae,attributeDivisors:J,object:A,attributes:{},index:null}}function M(A,z,ae,J){const ue=c.attributes,he=z.attributes;let oe=0;const ce=ae.getAttributes();for(const B in ce)if(ce[B].location>=0){const se=ue[B];let D=he[B];if(D===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(D=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(D=A.instanceColor)),se===void 0||se.attribute!==D||D&&se.data!==D.data)return!0;oe++}return c.attributesNum!==oe||c.index!==J}function T(A,z,ae,J){const ue={},he=z.attributes;let oe=0;const ce=ae.getAttributes();for(const B in ce)if(ce[B].location>=0){let se=he[B];se===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const D={};D.attribute=se,se&&se.data&&(D.data=se.data),ue[B]=D,oe++}c.attributes=ue,c.attributesNum=oe,c.index=J}function C(){const A=c.newAttributes;for(let z=0,ae=A.length;z<ae;z++)A[z]=0}function S(A){x(A,0)}function x(A,z){const ae=c.newAttributes,J=c.enabledAttributes,ue=c.attributeDivisors;ae[A]=1,J[A]===0&&(s.enableVertexAttribArray(A),J[A]=1),ue[A]!==z&&(s.vertexAttribDivisor(A,z),ue[A]=z)}function U(){const A=c.newAttributes,z=c.enabledAttributes;for(let ae=0,J=z.length;ae<J;ae++)z[ae]!==A[ae]&&(s.disableVertexAttribArray(ae),z[ae]=0)}function I(A,z,ae,J,ue,he,oe){oe===!0?s.vertexAttribIPointer(A,z,ae,ue,he):s.vertexAttribPointer(A,z,ae,J,ue,he)}function N(A,z,ae,J){C();const ue=J.attributes,he=ae.getAttributes(),oe=z.defaultAttributeValues;for(const ce in he){const B=he[ce];if(B.location>=0){let le=ue[ce];if(le===void 0&&(ce==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),ce==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const se=le.normalized,D=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const De=ie.buffer,Q=ie.type,pe=ie.bytesPerElement,Me=Q===s.INT||Q===s.UNSIGNED_INT||le.gpuType===jd;if(le.isInterleavedBufferAttribute){const _e=le.data,be=_e.stride,Ye=le.offset;if(_e.isInstancedInterleavedBuffer){for(let je=0;je<B.locationSize;je++)x(B.location+je,_e.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let je=0;je<B.locationSize;je++)S(B.location+je);s.bindBuffer(s.ARRAY_BUFFER,De);for(let je=0;je<B.locationSize;je++)I(B.location+je,D/B.locationSize,Q,se,be*pe,(Ye+D/B.locationSize*je)*pe,Me)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<B.locationSize;_e++)x(B.location+_e,le.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<B.locationSize;_e++)S(B.location+_e);s.bindBuffer(s.ARRAY_BUFFER,De);for(let _e=0;_e<B.locationSize;_e++)I(B.location+_e,D/B.locationSize,Q,se,D*pe,D/B.locationSize*_e*pe,Me)}}else if(oe!==void 0){const se=oe[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(B.location,se);break;case 3:s.vertexAttrib3fv(B.location,se);break;case 4:s.vertexAttrib4fv(B.location,se);break;default:s.vertexAttrib1fv(B.location,se)}}}}U()}function X(){Y();for(const A in r){const z=r[A];for(const ae in z){const J=z[ae];for(const ue in J)v(J[ue].object),delete J[ue];delete z[ae]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const ae in z){const J=z[ae];for(const ue in J)v(J[ue].object),delete J[ue];delete z[ae]}delete r[A.id]}function O(A){for(const z in r){const ae=r[z];if(ae[A.id]===void 0)continue;const J=ae[A.id];for(const ue in J)v(J[ue].object),delete J[ue];delete ae[A.id]}}function Y(){R(),d=!0,c!==o&&(c=o,g(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:R,dispose:X,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:U}}function cM(s,e,n){let r;function o(g){r=g}function c(g,v){s.drawArrays(r,g,v),n.update(v,r,1)}function d(g,v,_){_!==0&&(s.drawArraysInstanced(r,g,v,_),n.update(v,r,_))}function f(g,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,v,0,_);let M=0;for(let T=0;T<_;T++)M+=v[T];n.update(M,r,1)}function m(g,v,_,y){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<g.length;T++)d(g[T],v[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,v,0,y,0,_);let T=0;for(let C=0;C<_;C++)T+=v[C]*y[C];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function uM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(O){return!(O!==li&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const Y=O===Fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Vi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==zi&&!Y)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const v=m(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const _=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:N,vertexTextures:X,maxSamples:H}}function dM(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new Wr,f=new at,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||o;return o=y,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){n=v(_,y,0)},this.setState=function(_,y,M){const T=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!o||T===null||T.length===0||c&&!S)c?v(null):g();else{const U=c?0:r,I=U*4;let N=x.clippingState||null;m.value=N,N=v(T,y,I,M);for(let X=0;X!==I;++X)N[X]=n[X];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function g(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,y,M,T){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=m.value,T!==!0||S===null){const x=M+C*4,U=y.matrixWorldInverse;f.getNormalMatrix(U),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,N=M;I!==C;++I,N+=4)d.copy(_[I]).applyMatrix4(U,f),d.normal.toArray(S,N),S[N+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function fM(s){let e=new WeakMap;function n(d,f){return f===ld?d.mapping=js:f===cd&&(d.mapping=Gs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ld||f===cd)if(e.has(d)){const m=e.get(d).texture;return n(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const g=new p_(m.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",o),n(g.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ks=4,rm=[.125,.215,.35,.446,.526,.582],qr=20,Xu=new M_,sm=new bt;let Yu=null,qu=0,$u=0,Ku=!1;const Xr=(1+Math.sqrt(5))/2,Os=1/Xr,am=[new ne(-Xr,Os,0),new ne(Xr,Os,0),new ne(-Os,0,Xr),new ne(Os,0,Xr),new ne(0,Xr,-Os),new ne(0,Xr,Os),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],hM=new ne;class om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100,c={}){const{size:d=256,position:f=hM}=c;Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,qu,$u),this._renderer.xr.enabled=Ku,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Fa,format:li,colorSpace:Ys,depthBuffer:!1},o=lm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(c)),this._blurMaterial=mM(c,e,n)}return o}_compileMaterial(e){const n=new _i(this._lodPlanes[0],e);this._renderer.compile(n,Xu)}_sceneToCubeUV(e,n,r,o,c){const m=new Zn(90,1,n,r),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,M=_.toneMapping;_.getClearColor(sm),_.toneMapping=yr,_.autoClear=!1;const T=new Kd({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),C=new _i(new Ha,T);let S=!1;const x=e.background;x?x.isColor&&(T.color.copy(x),e.background=null,S=!0):(T.color.copy(sm),S=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(m.up.set(0,g[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):I===1?(m.up.set(0,0,g[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,g[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const N=this._cubeSize;yl(o,I*N,U>2?N:0,N,N),_.setRenderTarget(o),S&&_.render(C,m),_.render(e,m)}C.geometry.dispose(),C.material.dispose(),_.toneMapping=M,_.autoClear=y,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===js||e.mapping===Gs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new _i(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const m=this._cubeSize;yl(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(d,Xu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=am[(o-c-1)%am.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const m=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new _i(this._lodPlanes[o],g),y=g.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*qr-1),C=c/T,S=isFinite(c)?1+Math.floor(v*C):qr;S>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qr}`);const x=[];let U=0;for(let O=0;O<qr;++O){const Y=O/C,R=Math.exp(-Y*Y/2);x.push(R),O===0?U+=R:O<S&&(U+=2*R)}for(let O=0;O<x.length;O++)x[O]=x[O]/U;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=d==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:I}=this;y.dTheta.value=T,y.mipInt.value=I-r;const N=this._sizeLods[o],X=3*N*(o>I-ks?o-I+ks:0),H=4*(this._cubeSize-N);yl(n,X,H,3*N,2*N),m.setRenderTarget(n),m.render(_,Xu)}}function pM(s){const e=[],n=[],r=[];let o=s;const c=s-ks+1+rm.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);n.push(f);let m=1/f;d>s-ks?m=rm[d-s+ks-1]:d===0&&(m=0),r.push(m);const g=1/(f-2),v=-g,_=1+g,y=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,T=6,C=3,S=2,x=1,U=new Float32Array(C*T*M),I=new Float32Array(S*T*M),N=new Float32Array(x*T*M);for(let H=0;H<M;H++){const O=H%3*2/3-1,Y=H>2?0:-1,R=[O,Y,0,O+2/3,Y,0,O+2/3,Y+1,0,O,Y,0,O+2/3,Y+1,0,O,Y+1,0];U.set(R,C*T*H),I.set(y,S*T*H);const A=[H,H,H,H,H,H];N.set(A,x*T*H)}const X=new Er;X.setAttribute("position",new yi(U,C)),X.setAttribute("uv",new yi(I,S)),X.setAttribute("faceIndex",new yi(N,x)),e.push(X),o>ks&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function lm(s,e,n){const r=new Jr(s,e,n);return r.texture.mapping=Il,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function mM(s,e,n){const r=new Float32Array(qr),o=new ne(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function cm(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function um(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Zd(){return`

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
	`}function gM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const m=f.mapping,g=m===ld||m===cd,v=m===js||m===Gs;if(g||v){let _=e.get(f);const y=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new om(s)),_=g?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const M=f.image;return g&&M&&M.height>0||v&&M&&o(M)?(n===null&&(n=new om(s)),_=g?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let m=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&m++;return m===g}function c(f){const m=f.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function xM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Gr("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function vM(s,e,n,r){const o={},c=new WeakMap;function d(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",d),delete o[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(_,y){return o[y.id]===!0||(y.addEventListener("dispose",d),o[y.id]=!0,n.memory.geometries++),y}function m(_){const y=_.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function g(_){const y=[],M=_.index,T=_.attributes.position;let C=0;if(M!==null){const U=M.array;C=M.version;for(let I=0,N=U.length;I<N;I+=3){const X=U[I+0],H=U[I+1],O=U[I+2];y.push(X,H,H,O,O,X)}}else if(T!==void 0){const U=T.array;C=T.version;for(let I=0,N=U.length/3-1;I<N;I+=3){const X=I+0,H=I+1,O=I+2;y.push(X,H,H,O,O,X)}}else return;const S=new($m(y)?tg:eg)(y,1);S.version=C;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function v(_){const y=c.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&g(_)}else g(_);return c.get(_)}return{get:f,update:m,getWireframeAttribute:v}}function _M(s,e,n){let r;function o(y){r=y}let c,d;function f(y){c=y.type,d=y.bytesPerElement}function m(y,M){s.drawElements(r,M,c,y*d),n.update(M,r,1)}function g(y,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,y*d,T),n.update(M,r,T))}function v(y,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,T);let S=0;for(let x=0;x<T;x++)S+=M[x];n.update(S,r,1)}function _(y,M,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)g(y[x]/d,M[x],C[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,C,0,T);let x=0;for(let U=0;U<T;U++)x+=M[U]*C[U];n.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function yM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function SM(s,e,n){const r=new WeakMap,o=new Wt;function c(d,f,m){const g=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(f);if(y===void 0||y.count!==_){let A=function(){Y.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var M=A;y!==void 0&&y.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),S===!0&&(N=3);let X=f.attributes.position.count*N,H=1;X>e.maxTextureSize&&(H=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const O=new Float32Array(X*H*4*_),Y=new Km(O,X,H,_);Y.type=zi,Y.needsUpdate=!0;const R=N*4;for(let z=0;z<_;z++){const ae=x[z],J=U[z],ue=I[z],he=X*H*4*z;for(let oe=0;oe<ae.count;oe++){const ce=oe*R;T===!0&&(o.fromBufferAttribute(ae,oe),O[he+ce+0]=o.x,O[he+ce+1]=o.y,O[he+ce+2]=o.z,O[he+ce+3]=0),C===!0&&(o.fromBufferAttribute(J,oe),O[he+ce+4]=o.x,O[he+ce+5]=o.y,O[he+ce+6]=o.z,O[he+ce+7]=0),S===!0&&(o.fromBufferAttribute(ue,oe),O[he+ce+8]=o.x,O[he+ce+9]=o.y,O[he+ce+10]=o.z,O[he+ce+11]=ue.itemSize===4?o.w:1)}}y={count:_,texture:Y,size:new Ct(X,H)},r.set(f,y),f.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let S=0;S<g.length;S++)T+=g[S];const C=f.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",g)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function MM(s,e,n,r){let o=new WeakMap;function c(m){const g=r.render.frame,v=m.geometry,_=e.get(m,v);if(o.get(_)!==g&&(e.update(_),o.set(_,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),o.get(m)!==g&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,g))),m.isSkinnedMesh){const y=m.skeleton;o.get(y)!==g&&(y.update(),o.set(y,g))}return _}function d(){o=new WeakMap}function f(m){const g=m.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:d}}const cg=new Un,dm=new og(1,1),ug=new Km,dg=new Z0,fg=new rg,fm=[],hm=[],pm=new Float32Array(16),mm=new Float32Array(9),gm=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=fm[o];if(c===void 0&&(c=new Float32Array(o),fm[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ul(s,e){let n=hm[e];n===void 0&&(n=new Int32Array(e),hm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function EM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function wM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function bM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function TM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function AM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;gm.set(r),s.uniformMatrix2fv(this.addr,!1,gm),en(n,r)}}function CM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;mm.set(r),s.uniformMatrix3fv(this.addr,!1,mm),en(n,r)}}function RM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;pm.set(r),s.uniformMatrix4fv(this.addr,!1,pm),en(n,r)}}function NM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function PM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function DM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function FM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function OM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function kM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(dm.compareFunction=qm,c=dm):c=cg,n.setTexture2D(e||c,o)}function zM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||dg,o)}function BM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||fg,o)}function HM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||ug,o)}function VM(s){switch(s){case 5126:return EM;case 35664:return wM;case 35665:return bM;case 35666:return TM;case 35674:return AM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return NM;case 35667:case 35671:return PM;case 35668:case 35672:return LM;case 35669:case 35673:return IM;case 5125:return DM;case 36294:return UM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return HM}}function jM(s,e){s.uniform1fv(this.addr,e)}function GM(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function WM(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function XM(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function YM(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function qM(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function $M(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function KM(s,e){s.uniform1iv(this.addr,e)}function ZM(s,e){s.uniform2iv(this.addr,e)}function QM(s,e){s.uniform3iv(this.addr,e)}function JM(s,e){s.uniform4iv(this.addr,e)}function eE(s,e){s.uniform1uiv(this.addr,e)}function tE(s,e){s.uniform2uiv(this.addr,e)}function nE(s,e){s.uniform3uiv(this.addr,e)}function iE(s,e){s.uniform4uiv(this.addr,e)}function rE(s,e,n){const r=this.cache,o=e.length,c=Ul(n,o);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||cg,c[d])}function sE(s,e,n){const r=this.cache,o=e.length,c=Ul(n,o);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||dg,c[d])}function aE(s,e,n){const r=this.cache,o=e.length,c=Ul(n,o);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||fg,c[d])}function oE(s,e,n){const r=this.cache,o=e.length,c=Ul(n,o);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||ug,c[d])}function lE(s){switch(s){case 5126:return jM;case 35664:return GM;case 35665:return WM;case 35666:return XM;case 35674:return YM;case 35675:return qM;case 35676:return $M;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return QM;case 35669:case 35673:return JM;case 5125:return eE;case 36294:return tE;case 36295:return nE;case 36296:return iE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return aE;case 36289:case 36303:case 36311:case 36292:return oE}}class cE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=VM(n.type)}}class uE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lE(n.type)}}class dE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const Zu=/(\w+)(\])?(\[|\.)?/g;function xm(s,e){s.seq.push(e),s.map[e.id]=e}function fE(s,e,n){const r=s.name,o=r.length;for(Zu.lastIndex=0;;){const c=Zu.exec(r),d=Zu.lastIndex;let f=c[1];const m=c[2]==="]",g=c[3];if(m&&(f=f|0),g===void 0||g==="["&&d+2===o){xm(n,g===void 0?new cE(f,s,e):new uE(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new dE(f),xm(n,_)),n=_}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);fE(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function vm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const hE=37297;let pE=0;function mE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const _m=new at;function gE(s){Mt._getMatrix(_m,Mt.workingColorSpace,s);const e=`mat3( ${_m.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(s)){case Rl:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ym(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+mE(s.getShaderSource(e),d)}else return o}function xE(s,e){const n=gE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function vE(s,e){let n;switch(e){case M0:n="Linear";break;case E0:n="Reinhard";break;case w0:n="Cineon";break;case b0:n="ACESFilmic";break;case A0:n="AgX";break;case C0:n="Neutral";break;case T0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new ne;function _E(){Mt.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function SE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function ME(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Da(s){return s!==""}function Sm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(s){return s.replace(EE,bE)}const wE=new Map;function bE(s,e){let n=ot[e];if(n===void 0){const r=wE.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bd(n)}const TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(s){return s.replace(TE,AE)}function AE(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function wm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===t0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function RE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Gs:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function PE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fm:e="ENVMAP_BLENDING_MULTIPLY";break;case y0:e="ENVMAP_BLENDING_MIX";break;case S0:e="ENVMAP_BLENDING_ADD";break}return e}function LE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function IE(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const m=CE(n),g=RE(n),v=NE(n),_=PE(n),y=LE(n),M=yE(n),T=SE(c),C=o.createProgram();let S,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Da).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Da).join(`
`),x.length>0&&(x+=`
`)):(S=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),x=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?ot.tonemapping_pars_fragment:"",n.toneMapping!==yr?vE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,xE("linearToOutputTexel",n.outputColorSpace),_E(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Da).join(`
`)),d=Bd(d),d=Sm(d,n),d=Mm(d,n),f=Bd(f),f=Sm(f,n),f=Mm(f,n),d=Em(d),f=Em(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=U+S+d,N=U+x+f,X=vm(o,o.VERTEX_SHADER,I),H=vm(o,o.FRAGMENT_SHADER,N);o.attachShader(C,X),o.attachShader(C,H),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(z){if(s.debug.checkShaderErrors){const ae=o.getProgramInfoLog(C).trim(),J=o.getShaderInfoLog(X).trim(),ue=o.getShaderInfoLog(H).trim();let he=!0,oe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,X,H);else{const ce=ym(o,X,"vertex"),B=ym(o,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ae+`
`+ce+`
`+B)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||ue==="")&&(oe=!1);oe&&(z.diagnostics={runnable:he,programLog:ae,vertexShader:{log:J,prefix:S},fragmentShader:{log:ue,prefix:x}})}o.deleteShader(X),o.deleteShader(H),Y=new Al(o,C),R=ME(o,C)}let Y;this.getUniforms=function(){return Y===void 0&&O(this),Y};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(C,hE)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=H,this}let DE=0;class UE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new FE(e),n.set(e,r)),r}}class FE{constructor(e){this.id=DE++,this.code=e,this.usedTimes=0}}function OE(s,e,n,r,o,c,d){const f=new Qm,m=new UE,g=new Set,v=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return g.add(R),R===0?"uv":`uv${R}`}function S(R,A,z,ae,J){const ue=ae.fog,he=J.geometry,oe=R.isMeshStandardMaterial?ae.environment:null,ce=(R.isMeshStandardMaterial?n:e).get(R.envMap||oe),B=ce&&ce.mapping===Il?ce.image.height:null,le=T[R.type];R.precision!==null&&(M=o.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,D=se!==void 0?se.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let De,Q,pe,Me;if(le){const vt=gi[le];De=vt.vertexShader,Q=vt.fragmentShader}else De=R.vertexShader,Q=R.fragmentShader,m.update(R),pe=m.getVertexShaderID(R),Me=m.getFragmentShaderID(R);const _e=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ye=J.isInstancedMesh===!0,je=J.isBatchedMesh===!0,Rt=!!R.map,Nt=!!R.matcap,lt=!!ce,k=!!R.aoMap,yn=!!R.lightMap,ht=!!R.bumpMap,ut=!!R.normalMap,qe=!!R.displacementMap,wt=!!R.emissiveMap,Ge=!!R.metalnessMap,P=!!R.roughnessMap,w=R.anisotropy>0,Z=R.clearcoat>0,me=R.dispersion>0,xe=R.iridescence>0,de=R.sheen>0,We=R.transmission>0,Te=w&&!!R.anisotropyMap,Ue=Z&&!!R.clearcoatMap,ct=Z&&!!R.clearcoatNormalMap,Ee=Z&&!!R.clearcoatRoughnessMap,Oe=xe&&!!R.iridescenceMap,Qe=xe&&!!R.iridescenceThicknessMap,et=de&&!!R.sheenColorMap,ke=de&&!!R.sheenRoughnessMap,dt=!!R.specularMap,it=!!R.specularColorMap,Et=!!R.specularIntensityMap,j=We&&!!R.transmissionMap,Ae=We&&!!R.thicknessMap,re=!!R.gradientMap,fe=!!R.alphaMap,Pe=R.alphaTest>0,Ne=!!R.alphaHash,rt=!!R.extensions;let Lt=yr;R.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Lt=s.toneMapping);const Kt={shaderID:le,shaderType:R.type,shaderName:R.name,vertexShader:De,fragmentShader:Q,defines:R.defines,customVertexShaderID:pe,customFragmentShaderID:Me,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:je,batchingColor:je&&J._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&J.instanceColor!==null,instancingMorph:Ye&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ys,alphaToCoverage:!!R.alphaToCoverage,map:Rt,matcap:Nt,envMap:lt,envMapMode:lt&&ce.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:yn,bumpMap:ht,normalMap:ut,displacementMap:y&&qe,emissiveMap:wt,normalMapObjectSpace:ut&&R.normalMapType===I0,normalMapTangentSpace:ut&&R.normalMapType===L0,metalnessMap:Ge,roughnessMap:P,anisotropy:w,anisotropyMap:Te,clearcoat:Z,clearcoatMap:Ue,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:xe,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:de,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:dt,specularColorMap:it,specularIntensityMap:Et,transmission:We,transmissionMap:j,thicknessMap:Ae,gradientMap:re,opaque:R.transparent===!1&&R.blending===zs&&R.alphaToCoverage===!1,alphaMap:fe,alphaTest:Pe,alphaHash:Ne,combine:R.combine,mapUv:Rt&&C(R.map.channel),aoMapUv:k&&C(R.aoMap.channel),lightMapUv:yn&&C(R.lightMap.channel),bumpMapUv:ht&&C(R.bumpMap.channel),normalMapUv:ut&&C(R.normalMap.channel),displacementMapUv:qe&&C(R.displacementMap.channel),emissiveMapUv:wt&&C(R.emissiveMap.channel),metalnessMapUv:Ge&&C(R.metalnessMap.channel),roughnessMapUv:P&&C(R.roughnessMap.channel),anisotropyMapUv:Te&&C(R.anisotropyMap.channel),clearcoatMapUv:Ue&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:ct&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:et&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:ke&&C(R.sheenRoughnessMap.channel),specularMapUv:dt&&C(R.specularMap.channel),specularColorMapUv:it&&C(R.specularColorMap.channel),specularIntensityMapUv:Et&&C(R.specularIntensityMap.channel),transmissionMapUv:j&&C(R.transmissionMap.channel),thicknessMapUv:Ae&&C(R.thicknessMap.channel),alphaMapUv:fe&&C(R.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||w),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(Rt||fe),fog:!!ue,useFog:R.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:be,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Rt&&R.map.isVideoTexture===!0&&Mt.getTransfer(R.map.colorSpace)===Tt,decodeVideoTextureEmissive:wt&&R.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(R.emissiveMap.colorSpace)===Tt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ki,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:rt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&R.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Kt.vertexUv1s=g.has(1),Kt.vertexUv2s=g.has(2),Kt.vertexUv3s=g.has(3),g.clear(),Kt}function x(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)A.push(z),A.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(U(A,R),I(A,R),A.push(s.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function U(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function I(R,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),R.push(f.mask)}function N(R){const A=T[R.type];let z;if(A){const ae=gi[A];z=u_.clone(ae.uniforms)}else z=R.uniforms;return z}function X(R,A){let z;for(let ae=0,J=v.length;ae<J;ae++){const ue=v[ae];if(ue.cacheKey===A){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new IE(s,A,R,c),v.push(z)),z}function H(R){if(--R.usedTimes===0){const A=v.indexOf(R);v[A]=v[v.length-1],v.pop(),R.destroy()}}function O(R){m.remove(R)}function Y(){m.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:N,acquireProgram:X,releaseProgram:H,releaseShaderCache:O,programs:v,dispose:Y}}function kE(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,m){s.get(d)[f]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function zE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Tm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(_,y,M,T,C,S){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:y,material:M,groupOrder:T,renderOrder:_.renderOrder,z:C,group:S},s[e]=x):(x.id=_.id,x.object=_,x.geometry=y,x.material=M,x.groupOrder=T,x.renderOrder=_.renderOrder,x.z=C,x.group=S),e++,x}function f(_,y,M,T,C,S){const x=d(_,y,M,T,C,S);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):n.push(x)}function m(_,y,M,T,C,S){const x=d(_,y,M,T,C,S);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):n.unshift(x)}function g(_,y){n.length>1&&n.sort(_||zE),r.length>1&&r.sort(y||bm),o.length>1&&o.sort(y||bm)}function v(){for(let _=e,y=s.length;_<y;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:m,finish:v,sort:g}}function BE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new Tm,s.set(r,[d])):o>=c.length?(d=new Tm,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function HE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new bt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":n={color:new bt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function VE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let jE=0;function GE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function WE(s){const e=new HE,n=VE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new ne);const o=new ne,c=new Xt,d=new Xt;function f(g){let v=0,_=0,y=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,T=0,C=0,S=0,x=0,U=0,I=0,N=0,X=0,H=0,O=0;g.sort(GE);for(let R=0,A=g.length;R<A;R++){const z=g[R],ae=z.color,J=z.intensity,ue=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=ae.r*J,_+=ae.g*J,y+=ae.b*J;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(z.sh.coefficients[oe],J);O++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,B=n.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.directionalShadow[M]=B,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=z.shadow.matrix,U++}r.directional[M]=oe,M++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(ae).multiplyScalar(J),oe.distance=ue,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,r.spot[C]=oe;const ce=z.shadow;if(z.map&&(r.spotLightMap[X]=z.map,X++,ce.updateMatrices(z),z.castShadow&&H++),r.spotLightMatrix[C]=ce.matrix,z.castShadow){const B=n.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.spotShadow[C]=B,r.spotShadowMap[C]=he,N++}C++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(ae).multiplyScalar(J),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=oe,S++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const ce=z.shadow,B=n.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=z.shadow.matrix,I++}r.point[T]=oe,T++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(J),oe.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[x]=oe,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const Y=r.hash;(Y.directionalLength!==M||Y.pointLength!==T||Y.spotLength!==C||Y.rectAreaLength!==S||Y.hemiLength!==x||Y.numDirectionalShadows!==U||Y.numPointShadows!==I||Y.numSpotShadows!==N||Y.numSpotMaps!==X||Y.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=N+X-H,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=O,Y.directionalLength=M,Y.pointLength=T,Y.spotLength=C,Y.rectAreaLength=S,Y.hemiLength=x,Y.numDirectionalShadows=U,Y.numPointShadows=I,Y.numSpotShadows=N,Y.numSpotMaps=X,Y.numLightProbes=O,r.version=jE++)}function m(g,v){let _=0,y=0,M=0,T=0,C=0;const S=v.matrixWorldInverse;for(let x=0,U=g.length;x<U;x++){const I=g[x];if(I.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),_++}else if(I.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),M++}else if(I.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),d.identity(),c.copy(I.matrixWorld),c.premultiply(S),d.extractRotation(c),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),T++}else if(I.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),y++}else if(I.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(S),C++}}}return{setup:f,setupView:m,state:r}}function Am(s){const e=new WE(s),n=[],r=[];function o(v){g.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function d(v){r.push(v)}function f(){e.setup(n)}function m(v){e.setupView(n,v)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:d}}function XE(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new Am(s),e.set(o,[f])):c>=d.length?(f=new Am(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const YE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $E(s,e,n){let r=new sg;const o=new Ct,c=new Ct,d=new Wt,f=new y_({depthPacking:P0}),m=new S_,g={},v=n.maxTextureSize,_={[Sr]:Dn,[Dn]:Sr,[ki]:ki},y=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:YE,fragmentShader:qE}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Er;T.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new _i(T,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let x=this.type;this.render=function(H,O,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const R=s.getRenderTarget(),A=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(_r),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=x!==Oi&&this.type===Oi,ue=x===Oi&&this.type!==Oi;for(let he=0,oe=H.length;he<oe;he++){const ce=H[he],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const le=B.getFrameExtents();if(o.multiply(le),c.copy(B.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/le.x),o.x=c.x*le.x,B.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/le.y),o.y=c.y*le.y,B.mapSize.y=c.y)),B.map===null||J===!0||ue===!0){const D=this.type!==Oi?{minFilter:ci,magFilter:ci}:{};B.map!==null&&B.map.dispose(),B.map=new Jr(o.x,o.y,D),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const se=B.getViewportCount();for(let D=0;D<se;D++){const ie=B.getViewport(D);d.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ae.viewport(d),B.updateMatrices(ce,D),r=B.getFrustum(),N(O,Y,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===Oi&&U(B,Y),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(R,A,z)};function U(H,O){const Y=e.update(C);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Jr(o.x,o.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(O,null,Y,y,C,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(O,null,Y,M,C,null)}function I(H,O,Y,R){let A=null;const z=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(z!==void 0)A=z;else if(A=Y.isPointLight===!0?m:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ae=A.uuid,J=O.uuid;let ue=g[ae];ue===void 0&&(ue={},g[ae]=ue);let he=ue[J];he===void 0&&(he=A.clone(),ue[J]=he,O.addEventListener("dispose",X)),A=he}if(A.visible=O.visible,A.wireframe=O.wireframe,R===Oi?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:_[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,Y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ae=s.properties.get(A);ae.light=Y}return A}function N(H,O,Y,R,A){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===Oi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const J=e.update(H),ue=H.material;if(Array.isArray(ue)){const he=J.groups;for(let oe=0,ce=he.length;oe<ce;oe++){const B=he[oe],le=ue[B.materialIndex];if(le&&le.visible){const se=I(H,le,R,A);H.onBeforeShadow(s,H,O,Y,J,se,B),s.renderBufferDirect(Y,null,J,se,H,B),H.onAfterShadow(s,H,O,Y,J,se,B)}}}else if(ue.visible){const he=I(H,ue,R,A);H.onBeforeShadow(s,H,O,Y,J,he,null),s.renderBufferDirect(Y,null,J,he,H,null),H.onAfterShadow(s,H,O,Y,J,he,null)}}const ae=H.children;for(let J=0,ue=ae.length;J<ue;J++)N(ae[J],O,Y,R,A)}function X(H){H.target.removeEventListener("dispose",X);for(const Y in g){const R=g[Y],A=H.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const KE={[td]:nd,[id]:ad,[rd]:od,[Vs]:sd,[nd]:td,[ad]:id,[od]:rd,[sd]:Vs};function ZE(s,e){function n(){let j=!1;const Ae=new Wt;let re=null;const fe=new Wt(0,0,0,0);return{setMask:function(Pe){re!==Pe&&!j&&(s.colorMask(Pe,Pe,Pe,Pe),re=Pe)},setLocked:function(Pe){j=Pe},setClear:function(Pe,Ne,rt,Lt,Kt){Kt===!0&&(Pe*=Lt,Ne*=Lt,rt*=Lt),Ae.set(Pe,Ne,rt,Lt),fe.equals(Ae)===!1&&(s.clearColor(Pe,Ne,rt,Lt),fe.copy(Ae))},reset:function(){j=!1,re=null,fe.set(-1,0,0,0)}}}function r(){let j=!1,Ae=!1,re=null,fe=null,Pe=null;return{setReversed:function(Ne){if(Ae!==Ne){const rt=e.get("EXT_clip_control");Ae?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Lt=Pe;Pe=null,this.setClear(Lt)}Ae=Ne},getReversed:function(){return Ae},setTest:function(Ne){Ne?_e(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(Ne){re!==Ne&&!j&&(s.depthMask(Ne),re=Ne)},setFunc:function(Ne){if(Ae&&(Ne=KE[Ne]),fe!==Ne){switch(Ne){case td:s.depthFunc(s.NEVER);break;case nd:s.depthFunc(s.ALWAYS);break;case id:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case rd:s.depthFunc(s.EQUAL);break;case sd:s.depthFunc(s.GEQUAL);break;case ad:s.depthFunc(s.GREATER);break;case od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Ne}},setLocked:function(Ne){j=Ne},setClear:function(Ne){Pe!==Ne&&(Ae&&(Ne=1-Ne),s.clearDepth(Ne),Pe=Ne)},reset:function(){j=!1,re=null,fe=null,Pe=null,Ae=!1}}}function o(){let j=!1,Ae=null,re=null,fe=null,Pe=null,Ne=null,rt=null,Lt=null,Kt=null;return{setTest:function(vt){j||(vt?_e(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!j&&(s.stencilMask(vt),Ae=vt)},setFunc:function(vt,Tn,Sn){(re!==vt||fe!==Tn||Pe!==Sn)&&(s.stencilFunc(vt,Tn,Sn),re=vt,fe=Tn,Pe=Sn)},setOp:function(vt,Tn,Sn){(Ne!==vt||rt!==Tn||Lt!==Sn)&&(s.stencilOp(vt,Tn,Sn),Ne=vt,rt=Tn,Lt=Sn)},setLocked:function(vt){j=vt},setClear:function(vt){Kt!==vt&&(s.clearStencil(vt),Kt=vt)},reset:function(){j=!1,Ae=null,re=null,fe=null,Pe=null,Ne=null,rt=null,Lt=null,Kt=null}}}const c=new n,d=new r,f=new o,m=new WeakMap,g=new WeakMap;let v={},_={},y=new WeakMap,M=[],T=null,C=!1,S=null,x=null,U=null,I=null,N=null,X=null,H=null,O=new bt(0,0,0),Y=0,R=!1,A=null,z=null,ae=null,J=null,ue=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=ce>=1):B.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=ce>=2);let le=null,se={};const D=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),De=new Wt().fromArray(D),Q=new Wt().fromArray(ie);function pe(j,Ae,re,fe){const Pe=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(j,Ne),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<re;rt++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(Ae+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ne}const Me={};Me[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),d.setFunc(Vs),ht(!1),ut(Np),_e(s.CULL_FACE),k(_r);function _e(j){v[j]!==!0&&(s.enable(j),v[j]=!0)}function be(j){v[j]!==!1&&(s.disable(j),v[j]=!1)}function Ye(j,Ae){return _[j]!==Ae?(s.bindFramebuffer(j,Ae),_[j]=Ae,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ae),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function je(j,Ae){let re=M,fe=!1;if(j){re=y.get(Ae),re===void 0&&(re=[],y.set(Ae,re));const Pe=j.textures;if(re.length!==Pe.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,rt=Pe.length;Ne<rt;Ne++)re[Ne]=s.COLOR_ATTACHMENT0+Ne;re.length=Pe.length,fe=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,fe=!0);fe&&s.drawBuffers(re)}function Rt(j){return T!==j?(s.useProgram(j),T=j,!0):!1}const Nt={[Yr]:s.FUNC_ADD,[i0]:s.FUNC_SUBTRACT,[r0]:s.FUNC_REVERSE_SUBTRACT};Nt[s0]=s.MIN,Nt[a0]=s.MAX;const lt={[o0]:s.ZERO,[l0]:s.ONE,[c0]:s.SRC_COLOR,[Ju]:s.SRC_ALPHA,[m0]:s.SRC_ALPHA_SATURATE,[h0]:s.DST_COLOR,[d0]:s.DST_ALPHA,[u0]:s.ONE_MINUS_SRC_COLOR,[ed]:s.ONE_MINUS_SRC_ALPHA,[p0]:s.ONE_MINUS_DST_COLOR,[f0]:s.ONE_MINUS_DST_ALPHA,[g0]:s.CONSTANT_COLOR,[x0]:s.ONE_MINUS_CONSTANT_COLOR,[v0]:s.CONSTANT_ALPHA,[_0]:s.ONE_MINUS_CONSTANT_ALPHA};function k(j,Ae,re,fe,Pe,Ne,rt,Lt,Kt,vt){if(j===_r){C===!0&&(be(s.BLEND),C=!1);return}if(C===!1&&(_e(s.BLEND),C=!0),j!==n0){if(j!==S||vt!==R){if((x!==Yr||N!==Yr)&&(s.blendEquation(s.FUNC_ADD),x=Yr,N=Yr),vt)switch(j){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pp:s.blendFunc(s.ONE,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}U=null,I=null,X=null,H=null,O.set(0,0,0),Y=0,S=j,R=vt}return}Pe=Pe||Ae,Ne=Ne||re,rt=rt||fe,(Ae!==x||Pe!==N)&&(s.blendEquationSeparate(Nt[Ae],Nt[Pe]),x=Ae,N=Pe),(re!==U||fe!==I||Ne!==X||rt!==H)&&(s.blendFuncSeparate(lt[re],lt[fe],lt[Ne],lt[rt]),U=re,I=fe,X=Ne,H=rt),(Lt.equals(O)===!1||Kt!==Y)&&(s.blendColor(Lt.r,Lt.g,Lt.b,Kt),O.copy(Lt),Y=Kt),S=j,R=!1}function yn(j,Ae){j.side===ki?be(s.CULL_FACE):_e(s.CULL_FACE);let re=j.side===Dn;Ae&&(re=!re),ht(re),j.blending===zs&&j.transparent===!1?k(_r):k(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const fe=j.stencilWrite;f.setTest(fe),fe&&(f.setMask(j.stencilWriteMask),f.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),f.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),wt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(j){A!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),A=j)}function ut(j){j!==Jv?(_e(s.CULL_FACE),j!==z&&(j===Np?s.cullFace(s.BACK):j===e0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),z=j}function qe(j){j!==ae&&(oe&&s.lineWidth(j),ae=j)}function wt(j,Ae,re){j?(_e(s.POLYGON_OFFSET_FILL),(J!==Ae||ue!==re)&&(s.polygonOffset(Ae,re),J=Ae,ue=re)):be(s.POLYGON_OFFSET_FILL)}function Ge(j){j?_e(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function P(j){j===void 0&&(j=s.TEXTURE0+he-1),le!==j&&(s.activeTexture(j),le=j)}function w(j,Ae,re){re===void 0&&(le===null?re=s.TEXTURE0+he-1:re=le);let fe=se[re];fe===void 0&&(fe={type:void 0,texture:void 0},se[re]=fe),(fe.type!==j||fe.texture!==Ae)&&(le!==re&&(s.activeTexture(re),le=re),s.bindTexture(j,Ae||Me[j]),fe.type=j,fe.texture=Ae)}function Z(){const j=se[le];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{s.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{s.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function We(){try{s.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Te(){try{s.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ue(){try{s.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ct(){try{s.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{s.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Oe(){try{s.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(){try{s.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(j){De.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),De.copy(j))}function ke(j){Q.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Q.copy(j))}function dt(j,Ae){let re=g.get(Ae);re===void 0&&(re=new WeakMap,g.set(Ae,re));let fe=re.get(j);fe===void 0&&(fe=s.getUniformBlockIndex(Ae,j.name),re.set(j,fe))}function it(j,Ae){const fe=g.get(Ae).get(j);m.get(Ae)!==fe&&(s.uniformBlockBinding(Ae,fe,j.__bindingPointIndex),m.set(Ae,fe))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,se={},_={},y=new WeakMap,M=[],T=null,C=!1,S=null,x=null,U=null,I=null,N=null,X=null,H=null,O=new bt(0,0,0),Y=0,R=!1,A=null,z=null,ae=null,J=null,ue=null,De.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:_e,disable:be,bindFramebuffer:Ye,drawBuffers:je,useProgram:Rt,setBlending:k,setMaterial:yn,setFlipSided:ht,setCullFace:ut,setLineWidth:qe,setPolygonOffset:wt,setScissorTest:Ge,activeTexture:P,bindTexture:w,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:ct,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:We,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ue,scissor:et,viewport:ke,reset:Et}}function QE(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Ct,v=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,w){return M?new OffscreenCanvas(P,w):Pl("canvas")}function C(P,w,Z){let me=1;const xe=Ge(P);if((xe.width>Z||xe.height>Z)&&(me=Z/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(me*xe.width),We=Math.floor(me*xe.height);_===void 0&&(_=T(de,We));const Te=w?T(de,We):_;return Te.width=de,Te.height=We,Te.getContext("2d").drawImage(P,0,0,de,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+We+")."),Te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){s.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(P,w,Z,me,xe=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=w;if(w===s.RED&&(Z===s.FLOAT&&(de=s.R32F),Z===s.HALF_FLOAT&&(de=s.R16F),Z===s.UNSIGNED_BYTE&&(de=s.R8)),w===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.R8UI),Z===s.UNSIGNED_SHORT&&(de=s.R16UI),Z===s.UNSIGNED_INT&&(de=s.R32UI),Z===s.BYTE&&(de=s.R8I),Z===s.SHORT&&(de=s.R16I),Z===s.INT&&(de=s.R32I)),w===s.RG&&(Z===s.FLOAT&&(de=s.RG32F),Z===s.HALF_FLOAT&&(de=s.RG16F),Z===s.UNSIGNED_BYTE&&(de=s.RG8)),w===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RG8UI),Z===s.UNSIGNED_SHORT&&(de=s.RG16UI),Z===s.UNSIGNED_INT&&(de=s.RG32UI),Z===s.BYTE&&(de=s.RG8I),Z===s.SHORT&&(de=s.RG16I),Z===s.INT&&(de=s.RG32I)),w===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Z===s.UNSIGNED_INT&&(de=s.RGB32UI),Z===s.BYTE&&(de=s.RGB8I),Z===s.SHORT&&(de=s.RGB16I),Z===s.INT&&(de=s.RGB32I)),w===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Z===s.UNSIGNED_INT&&(de=s.RGBA32UI),Z===s.BYTE&&(de=s.RGBA8I),Z===s.SHORT&&(de=s.RGBA16I),Z===s.INT&&(de=s.RGBA32I)),w===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),w===s.RGBA){const We=xe?Rl:Mt.getTransfer(me);Z===s.FLOAT&&(de=s.RGBA32F),Z===s.HALF_FLOAT&&(de=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(de=We===Tt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function N(P,w){let Z;return P?w===null||w===Qr||w===Ws?Z=s.DEPTH24_STENCIL8:w===zi?Z=s.DEPTH32F_STENCIL8:w===Ua&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Qr||w===Ws?Z=s.DEPTH_COMPONENT24:w===zi?Z=s.DEPTH_COMPONENT32F:w===Ua&&(Z=s.DEPTH_COMPONENT16),Z}function X(P,w){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==ci&&P.minFilter!==vi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function H(P){const w=P.target;w.removeEventListener("dispose",H),Y(w),w.isVideoTexture&&v.delete(w)}function O(P){const w=P.target;w.removeEventListener("dispose",O),A(w)}function Y(P){const w=r.get(P);if(w.__webglInit===void 0)return;const Z=P.source,me=y.get(Z);if(me){const xe=me[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&R(P),Object.keys(me).length===0&&y.delete(Z)}r.remove(P)}function R(P){const w=r.get(P);s.deleteTexture(w.__webglTexture);const Z=P.source,me=y.get(Z);delete me[w.__cacheKey],d.memory.textures--}function A(P){const w=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let xe=0;xe<w.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(w.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=P.textures;for(let me=0,xe=Z.length;me<xe;me++){const de=r.get(Z[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(Z[me])}r.remove(P)}let z=0;function ae(){z=0}function J(){const P=z;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),z+=1,P}function ue(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function he(P,w){const Z=r.get(P);if(P.isVideoTexture&&qe(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,P,w);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+w)}function oe(P,w){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+w)}function ce(P,w){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,w);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+w)}function B(P,w){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){pe(Z,P,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+w)}const le={[ud]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[dd]:s.MIRRORED_REPEAT},se={[ci]:s.NEAREST,[R0]:s.NEAREST_MIPMAP_NEAREST,[Qo]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[Mu]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},D={[D0]:s.NEVER,[B0]:s.ALWAYS,[U0]:s.LESS,[qm]:s.LEQUAL,[F0]:s.EQUAL,[z0]:s.GEQUAL,[O0]:s.GREATER,[k0]:s.NOTEQUAL};function ie(P,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===vi||w.magFilter===Mu||w.magFilter===Qo||w.magFilter===Kr||w.minFilter===vi||w.minFilter===Mu||w.minFilter===Qo||w.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,le[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,le[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,le[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,D[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==Qo&&w.minFilter!==Kr||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function De(P,w){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",H));const me=w.source;let xe=y.get(me);xe===void 0&&(xe={},y.set(me,xe));const de=ue(w);if(de!==P.__cacheKey){xe[de]===void 0&&(xe[de]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),xe[de].usedTimes++;const We=xe[P.__cacheKey];We!==void 0&&(xe[P.__cacheKey].usedTimes--,We.usedTimes===0&&R(w)),P.__cacheKey=de,P.__webglTexture=xe[de].texture}return Z}function Q(P,w,Z){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const xe=De(P,w),de=w.source;n.bindTexture(me,P.__webglTexture,s.TEXTURE0+Z);const We=r.get(de);if(de.version!==We.__version||xe===!0){n.activeTexture(s.TEXTURE0+Z);const Te=Mt.getPrimaries(Mt.workingColorSpace),Ue=w.colorSpace===vr?null:Mt.getPrimaries(w.colorSpace),ct=w.colorSpace===vr||Te===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Ee=C(w.image,!1,o.maxTextureSize);Ee=wt(w,Ee);const Oe=c.convert(w.format,w.colorSpace),Qe=c.convert(w.type);let et=I(w.internalFormat,Oe,Qe,w.colorSpace,w.isVideoTexture);ie(me,w);let ke;const dt=w.mipmaps,it=w.isVideoTexture!==!0,Et=We.__version===void 0||xe===!0,j=de.dataReady,Ae=X(w,Ee);if(w.isDepthTexture)et=N(w.format===Xs,w.type),Et&&(it?n.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Oe,Qe,null));else if(w.isDataTexture)if(dt.length>0){it&&Et&&n.texStorage2D(s.TEXTURE_2D,Ae,et,dt[0].width,dt[0].height);for(let re=0,fe=dt.length;re<fe;re++)ke=dt[re],it?j&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,re,et,ke.width,ke.height,0,Oe,Qe,ke.data);w.generateMipmaps=!1}else it?(Et&&n.texStorage2D(s.TEXTURE_2D,Ae,et,Ee.width,Ee.height),j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Oe,Qe,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Oe,Qe,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,et,dt[0].width,dt[0].height,Ee.depth);for(let re=0,fe=dt.length;re<fe;re++)if(ke=dt[re],w.format!==li)if(Oe!==null)if(it){if(j)if(w.layerUpdates.size>0){const Pe=im(ke.width,ke.height,w.format,w.type);for(const Ne of w.layerUpdates){const rt=ke.data.subarray(Ne*Pe/ke.data.BYTES_PER_ELEMENT,(Ne+1)*Pe/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Ne,ke.width,ke.height,1,Oe,rt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Ee.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,et,ke.width,ke.height,Ee.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?j&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Ee.depth,Oe,Qe,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,re,et,ke.width,ke.height,Ee.depth,0,Oe,Qe,ke.data)}else{it&&Et&&n.texStorage2D(s.TEXTURE_2D,Ae,et,dt[0].width,dt[0].height);for(let re=0,fe=dt.length;re<fe;re++)ke=dt[re],w.format!==li?Oe!==null?it?j&&n.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,re,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?j&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,re,et,ke.width,ke.height,0,Oe,Qe,ke.data)}else if(w.isDataArrayTexture)if(it){if(Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,et,Ee.width,Ee.height,Ee.depth),j)if(w.layerUpdates.size>0){const re=im(Ee.width,Ee.height,w.format,w.type);for(const fe of w.layerUpdates){const Pe=Ee.data.subarray(fe*re/Ee.data.BYTES_PER_ELEMENT,(fe+1)*re/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Ee.width,Ee.height,1,Oe,Qe,Pe)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Qe,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,Oe,Qe,Ee.data);else if(w.isData3DTexture)it?(Et&&n.texStorage3D(s.TEXTURE_3D,Ae,et,Ee.width,Ee.height,Ee.depth),j&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Qe,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,Oe,Qe,Ee.data);else if(w.isFramebufferTexture){if(Et)if(it)n.texStorage2D(s.TEXTURE_2D,Ae,et,Ee.width,Ee.height);else{let re=Ee.width,fe=Ee.height;for(let Pe=0;Pe<Ae;Pe++)n.texImage2D(s.TEXTURE_2D,Pe,et,re,fe,0,Oe,Qe,null),re>>=1,fe>>=1}}else if(dt.length>0){if(it&&Et){const re=Ge(dt[0]);n.texStorage2D(s.TEXTURE_2D,Ae,et,re.width,re.height)}for(let re=0,fe=dt.length;re<fe;re++)ke=dt[re],it?j&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Oe,Qe,ke):n.texImage2D(s.TEXTURE_2D,re,et,Oe,Qe,ke);w.generateMipmaps=!1}else if(it){if(Et){const re=Ge(Ee);n.texStorage2D(s.TEXTURE_2D,Ae,et,re.width,re.height)}j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Qe,Ee)}else n.texImage2D(s.TEXTURE_2D,0,et,Oe,Qe,Ee);S(w)&&x(me),We.__version=de.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function pe(P,w,Z){if(w.image.length!==6)return;const me=De(P,w),xe=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Z);const de=r.get(xe);if(xe.version!==de.__version||me===!0){n.activeTexture(s.TEXTURE0+Z);const We=Mt.getPrimaries(Mt.workingColorSpace),Te=w.colorSpace===vr?null:Mt.getPrimaries(w.colorSpace),Ue=w.colorSpace===vr||We===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!ct&&!Ee?Oe[fe]=C(w.image[fe],!0,o.maxCubemapSize):Oe[fe]=Ee?w.image[fe].image:w.image[fe],Oe[fe]=wt(w,Oe[fe]);const Qe=Oe[0],et=c.convert(w.format,w.colorSpace),ke=c.convert(w.type),dt=I(w.internalFormat,et,ke,w.colorSpace),it=w.isVideoTexture!==!0,Et=de.__version===void 0||me===!0,j=xe.dataReady;let Ae=X(w,Qe);ie(s.TEXTURE_CUBE_MAP,w);let re;if(ct){it&&Et&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,dt,Qe.width,Qe.height);for(let fe=0;fe<6;fe++){re=Oe[fe].mipmaps;for(let Pe=0;Pe<re.length;Pe++){const Ne=re[Pe];w.format!==li?et!==null?it?j&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,0,0,Ne.width,Ne.height,et,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,dt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,0,0,Ne.width,Ne.height,et,ke,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,dt,Ne.width,Ne.height,0,et,ke,Ne.data)}}}else{if(re=w.mipmaps,it&&Et){re.length>0&&Ae++;const fe=Ge(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,dt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ee){it?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,et,ke,Oe[fe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,Oe[fe].width,Oe[fe].height,0,et,ke,Oe[fe].data);for(let Pe=0;Pe<re.length;Pe++){const rt=re[Pe].image[fe].image;it?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,0,0,rt.width,rt.height,et,ke,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,dt,rt.width,rt.height,0,et,ke,rt.data)}}else{it?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,et,ke,Oe[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,et,ke,Oe[fe]);for(let Pe=0;Pe<re.length;Pe++){const Ne=re[Pe];it?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,0,0,et,ke,Ne.image[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,dt,et,ke,Ne.image[fe])}}}S(w)&&x(s.TEXTURE_CUBE_MAP),de.__version=xe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Me(P,w,Z,me,xe,de){const We=c.convert(Z.format,Z.colorSpace),Te=c.convert(Z.type),Ue=I(Z.internalFormat,We,Te,Z.colorSpace),ct=r.get(w),Ee=r.get(Z);if(Ee.__renderTarget=w,!ct.__hasExternalTextures){const Oe=Math.max(1,w.width>>de),Qe=Math.max(1,w.height>>de);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?n.texImage3D(xe,de,Ue,Oe,Qe,w.depth,0,We,Te,null):n.texImage2D(xe,de,Ue,Oe,Qe,0,We,Te,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),ut(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,xe,Ee.__webglTexture,0,ht(w)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,xe,Ee.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(P,w,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const me=w.depthTexture,xe=me&&me.isDepthTexture?me.type:null,de=N(w.stencilBuffer,xe),We=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=ht(w);ut(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,de,w.width,w.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,P)}else{const me=w.textures;for(let xe=0;xe<me.length;xe++){const de=me[xe],We=c.convert(de.format,de.colorSpace),Te=c.convert(de.type),Ue=I(de.internalFormat,We,Te,de.colorSpace),ct=ht(w);Z&&ut(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ue,w.width,w.height):ut(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const xe=me.__webglTexture,de=ht(w);if(w.depthTexture.format===Bs)ut(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(w.depthTexture.format===Xs)ut(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ye(P){const w=r.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=me}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");be(w.__webglFramebuffer,P)}else if(Z){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),_e(w.__webglDepthbuffer[me],P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),_e(w.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function je(P,w,Z){const me=r.get(P);w!==void 0&&Me(me.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ye(P)}function Rt(P){const w=P.texture,Z=r.get(P),me=r.get(w);P.addEventListener("dispose",O);const xe=P.textures,de=P.isWebGLCubeRenderTarget===!0,We=xe.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,d.memory.textures++),de){Z.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Te]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)Z.__webglFramebuffer[Te][Ue]=s.createFramebuffer()}else Z.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)Z.__webglFramebuffer[Te]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(We)for(let Te=0,Ue=xe.length;Te<Ue;Te++){const ct=r.get(xe[Te]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&ut(P)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Te=0;Te<xe.length;Te++){const Ue=xe[Te];Z.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Te]);const ct=c.convert(Ue.format,Ue.colorSpace),Ee=c.convert(Ue.type),Oe=I(Ue.internalFormat,ct,Ee,Ue.colorSpace,P.isXRRenderTarget===!0),Qe=ht(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Oe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(Z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,w);for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Me(Z.__webglFramebuffer[Te][Ue],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ue);else Me(Z.__webglFramebuffer[Te],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(w)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let Te=0,Ue=xe.length;Te<Ue;Te++){const ct=xe[Te],Ee=r.get(ct);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),ie(s.TEXTURE_2D,ct),Me(Z.__webglFramebuffer,P,ct,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,0),S(ct)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let Te=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,me.__webglTexture),ie(Te,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Me(Z.__webglFramebuffer[Ue],P,w,s.COLOR_ATTACHMENT0,Te,Ue);else Me(Z.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,Te,0);S(w)&&x(Te),n.unbindTexture()}P.depthBuffer&&Ye(P)}function Nt(P){const w=P.textures;for(let Z=0,me=w.length;Z<me;Z++){const xe=w[Z];if(S(xe)){const de=U(P),We=r.get(xe).__webglTexture;n.bindTexture(de,We),x(de),n.unbindTexture()}}}const lt=[],k=[];function yn(P){if(P.samples>0){if(ut(P)===!1){const w=P.textures,Z=P.width,me=P.height;let xe=s.COLOR_BUFFER_BIT;const de=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(P),Te=w.length>1;if(Te)for(let Ue=0;Ue<w.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ct=r.get(w[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,Z,me,0,0,Z,me,xe,s.NEAREST),m===!0&&(lt.length=0,k.length=0,lt.push(s.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(lt.push(de),k.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let Ue=0;Ue<w.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ct=r.get(w[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ct,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ht(P){return Math.min(o.maxSamples,P.samples)}function ut(P){const w=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(P){const w=d.render.frame;v.get(P)!==w&&(v.set(P,w),P.update())}function wt(P,w){const Z=P.colorSpace,me=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Ys&&Z!==vr&&(Mt.getTransfer(Z)===Tt?(me!==li||xe!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(g.width=P.naturalWidth||P.width,g.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(g.width=P.displayWidth,g.height=P.displayHeight):(g.width=P.width,g.height=P.height),g}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=je,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function JE(s,e){function n(r,o=vr){let c;const d=Mt.getTransfer(o);if(r===Vi)return s.UNSIGNED_BYTE;if(r===Gd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Bm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===km)return s.BYTE;if(r===zm)return s.SHORT;if(r===Ua)return s.UNSIGNED_SHORT;if(r===jd)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Fa)return s.HALF_FLOAT;if(r===Hm)return s.ALPHA;if(r===Vm)return s.RGB;if(r===li)return s.RGBA;if(r===jm)return s.LUMINANCE;if(r===Gm)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===Xs)return s.DEPTH_STENCIL;if(r===Wm)return s.RED;if(r===Xd)return s.RED_INTEGER;if(r===Xm)return s.RG;if(r===Yd)return s.RG_INTEGER;if(r===qd)return s.RGBA_INTEGER;if(r===Ml||r===El||r===wl||r===bl)if(d===Tt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ml)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ml)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fd||r===hd||r===pd||r===md)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gd||r===xd||r===vd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===gd||r===xd)return d===Tt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===vd)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_d||r===yd||r===Sd||r===Md||r===Ed||r===wd||r===bd||r===Td||r===Ad||r===Cd||r===Rd||r===Nd||r===Pd||r===Ld)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===_d)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yd)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sd)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Md)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ed)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wd)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bd)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Td)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ad)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cd)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rd)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nd)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pd)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ld)return d===Tt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Id||r===Dd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Tl)return d===Tt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Id)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ym||r===Ud||r===Fd||r===Od)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Tl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Od)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t1=`
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

}`;class n1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Un,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:e1,fragmentShader:t1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _i(new Va(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i1 extends $s{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",m=1,g=null,v=null,_=null,y=null,M=null,T=null;const C=new n1,S=n.getContextAttributes();let x=null,U=null;const I=[],N=[],X=new Ct;let H=null;const O=new Zn;O.viewport=new Wt;const Y=new Zn;Y.viewport=new Wt;const R=[O,Y],A=new E_;let z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=I[Q];return pe===void 0&&(pe=new Gu,I[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=I[Q];return pe===void 0&&(pe=new Gu,I[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=I[Q];return pe===void 0&&(pe=new Gu,I[Q]=pe),pe.getHandSpace()};function J(Q){const pe=N.indexOf(Q.inputSource);if(pe===-1)return;const Me=I[pe];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,g||d),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",he);for(let Q=0;Q<I.length;Q++){const pe=N[Q];pe!==null&&(N[Q]=null,I[Q].disconnect(pe))}z=null,ae=null,C.reset(),e.setRenderTarget(x),M=null,y=null,_=null,o=null,U=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(Q){g=Q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,_e=null,be=null;S.depth&&(be=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=S.stencil?Xs:Bs,_e=S.stencil?Ws:Qr);const Ye={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:c};_=new XRWebGLBinding(o,n),y=_.createProjectionLayer(Ye),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Jr(y.textureWidth,y.textureHeight,{format:li,type:Vi,depthTexture:new og(y.textureWidth,y.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,Me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Jr(M.framebufferWidth,M.framebufferHeight,{format:li,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),g=null,d=await o.requestReferenceSpace(f),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function he(Q){for(let pe=0;pe<Q.removed.length;pe++){const Me=Q.removed[pe],_e=N.indexOf(Me);_e>=0&&(N[_e]=null,I[_e].disconnect(Me))}for(let pe=0;pe<Q.added.length;pe++){const Me=Q.added[pe];let _e=N.indexOf(Me);if(_e===-1){for(let Ye=0;Ye<I.length;Ye++)if(Ye>=N.length){N.push(Me),_e=Ye;break}else if(N[Ye]===null){N[Ye]=Me,_e=Ye;break}if(_e===-1)break}const be=I[_e];be&&be.connect(Me)}}const oe=new ne,ce=new ne;function B(Q,pe,Me){oe.setFromMatrixPosition(pe.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const _e=oe.distanceTo(ce),be=pe.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,je=be[14]/(be[10]-1),Rt=be[14]/(be[10]+1),Nt=(be[9]+1)/be[5],lt=(be[9]-1)/be[5],k=(be[8]-1)/be[0],yn=(Ye[8]+1)/Ye[0],ht=je*k,ut=je*yn,qe=_e/(-k+yn),wt=qe*-k;if(pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ge=je+qe,P=Rt+qe,w=ht-wt,Z=ut+(_e-wt),me=Nt*Rt/P*Ge,xe=lt*Rt/P*Ge;Q.projectionMatrix.makePerspective(w,Z,me,xe,Ge,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let pe=Q.near,Me=Q.far;C.texture!==null&&(C.depthNear>0&&(pe=C.depthNear),C.depthFar>0&&(Me=C.depthFar)),A.near=Y.near=O.near=pe,A.far=Y.far=O.far=Me,(z!==A.near||ae!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,ae=A.far),O.layers.mask=Q.layers.mask|2,Y.layers.mask=Q.layers.mask|4,A.layers.mask=O.layers.mask|Y.layers.mask;const _e=Q.parent,be=A.cameras;le(A,_e);for(let Ye=0;Ye<be.length;Ye++)le(be[Ye],_e);be.length===2?B(A,O,Y):A.projectionMatrix.copy(O.projectionMatrix),se(Q,A,_e)};function se(Q,pe,Me){Me===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=kd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(Q){m=Q,y!==null&&(y.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let D=null;function ie(Q,pe){if(v=pe.getViewerPose(g||d),T=pe,v!==null){const Me=v.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let _e=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,_e=!0);for(let je=0;je<Me.length;je++){const Rt=Me[je];let Nt=null;if(M!==null)Nt=M.getViewport(Rt);else{const k=_.getViewSubImage(y,Rt);Nt=k.viewport,je===0&&(e.setRenderTargetTextures(U,k.colorTexture,y.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(U))}let lt=R[je];lt===void 0&&(lt=new Zn,lt.layers.enable(je),lt.viewport=new Wt,R[je]=lt),lt.matrix.fromArray(Rt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Rt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),je===0&&(A.matrix.copy(lt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),_e===!0&&A.cameras.push(lt)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const je=_.getDepthInformation(Me[0]);je&&je.isValid&&je.texture&&C.init(e,je,o.renderState)}}for(let Me=0;Me<I.length;Me++){const _e=N[Me],be=I[Me];_e!==null&&be!==void 0&&be.update(_e,pe,g||d)}D&&D(Q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),T=null}const De=new lg;De.setAnimationLoop(ie),this.setAnimationLoop=function(Q){D=Q},this.dispose=function(){}}}const jr=new ji,r1=new Xt;function s1(s,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,ng(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,U,I,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),v(S,x)):x.isMeshStandardMaterial?(c(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,N)):x.isMeshMatcapMaterial?(c(S,x),T(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),C(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?m(S,x,U,I):x.isSpriteMaterial?g(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Dn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Dn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const U=e.get(x),I=U.envMap,N=U.envMapRotation;I&&(S.envMap.value=I,jr.copy(N),jr.x*=-1,jr.y*=-1,jr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),S.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(jr)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,U,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*U,S.scale.value=I*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,U){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Dn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const U=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function a1(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,I){const N=I.program;r.uniformBlockBinding(U,N)}function g(U,I){let N=o[U.id];N===void 0&&(T(U),N=v(U),o[U.id]=N,U.addEventListener("dispose",S));const X=I.program;r.updateUBOMapping(U,X);const H=e.render.frame;c[U.id]!==H&&(y(U),c[U.id]=H)}function v(U){const I=_();U.__bindingPointIndex=I;const N=s.createBuffer(),X=U.__size,H=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,X,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,N),N}function _(){for(let U=0;U<f;U++)if(d.indexOf(U)===-1)return d.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const I=o[U.id],N=U.uniforms,X=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let H=0,O=N.length;H<O;H++){const Y=Array.isArray(N[H])?N[H]:[N[H]];for(let R=0,A=Y.length;R<A;R++){const z=Y[R];if(M(z,H,R,X)===!0){const ae=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let he=0;he<J.length;he++){const oe=J[he],ce=C(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ae+ue,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,ue),ue+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,I,N,X){const H=U.value,O=I+"_"+N;if(X[O]===void 0)return typeof H=="number"||typeof H=="boolean"?X[O]=H:X[O]=H.clone(),!0;{const Y=X[O];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return X[O]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function T(U){const I=U.uniforms;let N=0;const X=16;for(let O=0,Y=I.length;O<Y;O++){const R=Array.isArray(I[O])?I[O]:[I[O]];for(let A=0,z=R.length;A<z;A++){const ae=R[A],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let ue=0,he=J.length;ue<he;ue++){const oe=J[ue],ce=C(oe),B=N%X,le=B%ce.boundary,se=B+le;N+=le,se!==0&&X-se<ce.storage&&(N+=X-se),ae.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=N,N+=ce.storage}}}const H=N%X;return H>0&&(N+=X-H),U.__size=N,U.__cache={},this}function C(U){const I={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(I.boundary=4,I.storage=4):U.isVector2?(I.boundary=8,I.storage=8):U.isVector3||U.isColor?(I.boundary=16,I.storage=12):U.isVector4?(I.boundary=16,I.storage=16):U.isMatrix3?(I.boundary=48,I.storage=48):U.isMatrix4?(I.boundary=64,I.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),I}function S(U){const I=U.target;I.removeEventListener("dispose",S);const N=d.indexOf(I.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function x(){for(const U in o)s.deleteBuffer(o[U]);d=[],o={},c={}}return{bind:m,update:g,dispose:x}}class o1{constructor(e={}){const{canvas:n=V0(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Uint32Array(4),C=new Int32Array(4);let S=null,x=null;const U=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=yr,this.toneMappingExposure=1;const N=this;let X=!1,H=0,O=0,Y=null,R=-1,A=null;const z=new Wt,ae=new Wt;let J=null;const ue=new bt(0);let he=0,oe=n.width,ce=n.height,B=1,le=null,se=null;const D=new Wt(0,0,oe,ce),ie=new Wt(0,0,oe,ce);let De=!1;const Q=new sg;let pe=!1,Me=!1;this.transmissionResolutionScale=1;const _e=new Xt,be=new Xt,Ye=new ne,je=new Wt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function lt(){return Y===null?B:1}let k=r;function yn(b,G){return n.getContext(b,G)}try{const b={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vd}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),k===null){const G="webgl2";if(k=yn(G,b),k===null)throw yn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ht,ut,qe,wt,Ge,P,w,Z,me,xe,de,We,Te,Ue,ct,Ee,Oe,Qe,et,ke,dt,it,Et,j;function Ae(){ht=new xM(k),ht.init(),it=new JE(k,ht),ut=new uM(k,ht,e,it),qe=new ZE(k,ht),ut.reverseDepthBuffer&&y&&qe.buffers.depth.setReversed(!0),wt=new yM(k),Ge=new kE,P=new QE(k,ht,qe,Ge,ut,it,wt),w=new fM(N),Z=new gM(N),me=new T_(k),Et=new lM(k,me),xe=new vM(k,me,wt,Et),de=new MM(k,xe,me,wt),et=new SM(k,ut,P),Ee=new dM(Ge),We=new OE(N,w,Z,ht,ut,Et,Ee),Te=new s1(N,Ge),Ue=new BE,ct=new XE(ht),Qe=new oM(N,w,Z,qe,de,M,m),Oe=new $E(N,de,ut),j=new a1(k,wt,ut,qe),ke=new cM(k,ht,wt),dt=new _M(k,ht,wt),wt.programs=We.programs,N.capabilities=ut,N.extensions=ht,N.properties=Ge,N.renderLists=Ue,N.shadowMap=Oe,N.state=qe,N.info=wt}Ae();const re=new i1(N,k);this.xr=re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(oe,ce,!1))},this.getSize=function(b){return b.set(oe,ce)},this.setSize=function(b,G,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=b,ce=G,n.width=Math.floor(b*B),n.height=Math.floor(G*B),ee===!0&&(n.style.width=b+"px",n.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(oe*B,ce*B).floor()},this.setDrawingBufferSize=function(b,G,ee){oe=b,ce=G,B=ee,n.width=Math.floor(b*ee),n.height=Math.floor(G*ee),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,G,ee,$){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,G,ee,$),qe.viewport(z.copy(D).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,G,ee,$){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,G,ee,$),qe.scissor(ae.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){qe.setScissorTest(De=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,ee=!0){let $=0;if(b){let W=!1;if(Y!==null){const Se=Y.texture.format;W=Se===qd||Se===Yd||Se===Xd}if(W){const Se=Y.texture.type,Ce=Se===Vi||Se===Qr||Se===Ua||Se===Ws||Se===Gd||Se===Wd,Le=Qe.getClearColor(),ze=Qe.getClearAlpha(),tt=Le.r,Je=Le.g,He=Le.b;Ce?(T[0]=tt,T[1]=Je,T[2]=He,T[3]=ze,k.clearBufferuiv(k.COLOR,0,T)):(C[0]=tt,C[1]=Je,C[2]=He,C[3]=ze,k.clearBufferiv(k.COLOR,0,C))}else $|=k.COLOR_BUFFER_BIT}G&&($|=k.DEPTH_BUFFER_BIT),ee&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Qe.dispose(),Ue.dispose(),ct.dispose(),Ge.dispose(),w.dispose(),Z.dispose(),de.dispose(),Et.dispose(),j.dispose(),We.dispose(),re.dispose(),re.removeEventListener("sessionstart",es),re.removeEventListener("sessionend",Gi),Si.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const b=wt.autoReset,G=Oe.enabled,ee=Oe.autoUpdate,$=Oe.needsUpdate,W=Oe.type;Ae(),wt.autoReset=b,Oe.enabled=G,Oe.autoUpdate=ee,Oe.needsUpdate=$,Oe.type=W}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){const G=b.target;G.removeEventListener("dispose",rt),Lt(G)}function Lt(b){Kt(b),Ge.remove(b)}function Kt(b){const G=Ge.get(b).programs;G!==void 0&&(G.forEach(function(ee){We.releaseProgram(ee)}),b.isShaderMaterial&&We.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,ee,$,W,Se){G===null&&(G=Rt);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,Le=Wa(b,G,ee,$,W);qe.setMaterial($,Ce);let ze=ee.index,tt=1;if($.wireframe===!0){if(ze=xe.getWireframeAttribute(ee),ze===void 0)return;tt=2}const Je=ee.drawRange,He=ee.attributes.position;let mt=Je.start*tt,st=(Je.start+Je.count)*tt;Se!==null&&(mt=Math.max(mt,Se.start*tt),st=Math.min(st,(Se.start+Se.count)*tt)),ze!==null?(mt=Math.max(mt,0),st=Math.min(st,ze.count)):He!=null&&(mt=Math.max(mt,0),st=Math.min(st,He.count));const Bt=st-mt;if(Bt<0||Bt===1/0)return;Et.setup(W,$,Le,ee,ze);let Ft,xt=ke;if(ze!==null&&(Ft=me.get(ze),xt=dt,xt.setIndex(Ft)),W.isMesh)$.wireframe===!0?(qe.setLineWidth($.wireframeLinewidth*lt()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if(W.isLine){let $e=$.linewidth;$e===void 0&&($e=1),qe.setLineWidth($e*lt()),W.isLineSegments?xt.setMode(k.LINES):W.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else W.isPoints?xt.setMode(k.POINTS):W.isSprite&&xt.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const $e=W._multiDrawStarts,Ht=W._multiDrawCounts,pt=W._multiDrawCount,dn=ze?me.get(ze).bytesPerElement:1,Xi=Ge.get($).currentProgram.getUniforms();for(let Mn=0;Mn<pt;Mn++)Xi.setValue(k,"_gl_DrawID",Mn),xt.render($e[Mn]/dn,Ht[Mn])}else if(W.isInstancedMesh)xt.renderInstances(mt,Bt,W.count);else if(ee.isInstancedBufferGeometry){const $e=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ht=Math.min(ee.instanceCount,$e);xt.renderInstances(mt,Bt,Ht)}else xt.render(mt,Bt)};function vt(b,G,ee){b.transparent===!0&&b.side===ki&&b.forceSinglePass===!1?(b.side=Dn,b.needsUpdate=!0,ts(b,G,ee),b.side=Sr,b.needsUpdate=!0,ts(b,G,ee),b.side=ki):ts(b,G,ee)}this.compile=function(b,G,ee=null){ee===null&&(ee=b),x=ct.get(ee),x.init(G),I.push(x),ee.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),b!==ee&&b.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights();const $=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Le=Se[Ce];vt(Le,ee,W),$.add(Le)}else vt(Se,ee,W),$.add(Se)}),x=I.pop(),$},this.compileAsync=function(b,G,ee=null){const $=this.compile(b,G,ee);return new Promise(W=>{function Se(){if($.forEach(function(Ce){Ge.get(Ce).currentProgram.isReady()&&$.delete(Ce)}),$.size===0){W(b);return}setTimeout(Se,10)}ht.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Tn=null;function Sn(b){Tn&&Tn(b)}function es(){Si.stop()}function Gi(){Si.start()}const Si=new lg;Si.setAnimationLoop(Sn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){Tn=b,re.setAnimationLoop(b),b===null?Si.stop():Si.start()},re.addEventListener("sessionstart",es),re.addEventListener("sessionend",Gi),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,G,Y),x=ct.get(b,I.length),x.init(G),I.push(x),be.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(be),Me=this.localClippingEnabled,pe=Ee.init(this.clippingPlanes,Me),S=Ue.get(b,U.length),S.init(),U.push(S),re.enabled===!0&&re.isPresenting===!0){const Se=N.xr.getDepthSensingMesh();Se!==null&&Mi(Se,G,-1/0,N.sortObjects)}Mi(b,G,0,N.sortObjects),S.finish(),N.sortObjects===!0&&S.sort(le,se),Nt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Nt&&Qe.addToRenderList(S,b),this.info.render.frame++,pe===!0&&Ee.beginShadows();const ee=x.state.shadowsArray;Oe.render(ee,b,G),pe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=S.opaque,W=S.transmissive;if(x.setupLights(),G.isArrayCamera){const Se=G.cameras;if(W.length>0)for(let Ce=0,Le=Se.length;Ce<Le;Ce++){const ze=Se[Ce];br($,W,b,ze)}Nt&&Qe.render(b);for(let Ce=0,Le=Se.length;Ce<Le;Ce++){const ze=Se[Ce];wr(S,b,ze,ze.viewport)}}else W.length>0&&br($,W,b,G),Nt&&Qe.render(b),wr(S,b,G);Y!==null&&O===0&&(P.updateMultisampleRenderTarget(Y),P.updateRenderTargetMipmap(Y)),b.isScene===!0&&b.onAfterRender(N,b,G),Et.resetDefaultState(),R=-1,A=null,I.pop(),I.length>0?(x=I[I.length-1],pe===!0&&Ee.setGlobalState(N.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Mi(b,G,ee,$){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)ee=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){$&&je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);const Ce=de.update(b),Le=b.material;Le.visible&&S.push(b,Ce,Le,ee,je.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Ce=de.update(b),Le=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),je.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),je.copy(Ce.boundingSphere.center)),je.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(Le)){const ze=Ce.groups;for(let tt=0,Je=ze.length;tt<Je;tt++){const He=ze[tt],mt=Le[He.materialIndex];mt&&mt.visible&&S.push(b,Ce,mt,ee,je.z,He)}}else Le.visible&&S.push(b,Ce,Le,ee,je.z,null)}}const Se=b.children;for(let Ce=0,Le=Se.length;Ce<Le;Ce++)Mi(Se[Ce],G,ee,$)}function wr(b,G,ee,$){const W=b.opaque,Se=b.transmissive,Ce=b.transparent;x.setupLightsView(ee),pe===!0&&Ee.setGlobalState(N.clippingPlanes,ee),$&&qe.viewport(z.copy($)),W.length>0&&Wi(W,G,ee),Se.length>0&&Wi(Se,G,ee),Ce.length>0&&Wi(Ce,G,ee),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function br(b,G,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[$.id]===void 0&&(x.state.transmissionRenderTarget[$.id]=new Jr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Fa:Vi,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=x.state.transmissionRenderTarget[$.id],Ce=$.viewport||z;Se.setSize(Ce.z*N.transmissionResolutionScale,Ce.w*N.transmissionResolutionScale);const Le=N.getRenderTarget();N.setRenderTarget(Se),N.getClearColor(ue),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),Nt&&Qe.render(ee);const ze=N.toneMapping;N.toneMapping=yr;const tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),pe===!0&&Ee.setGlobalState(N.clippingPlanes,$),Wi(b,ee,$),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let He=0,mt=G.length;He<mt;He++){const st=G[He],Bt=st.object,Ft=st.geometry,xt=st.material,$e=st.group;if(xt.side===ki&&Bt.layers.test($.layers)){const Ht=xt.side;xt.side=Dn,xt.needsUpdate=!0,ja(Bt,ee,$,Ft,xt,$e),xt.side=Ht,xt.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}N.setRenderTarget(Le),N.setClearColor(ue,he),tt!==void 0&&($.viewport=tt),N.toneMapping=ze}function Wi(b,G,ee){const $=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Se=b.length;W<Se;W++){const Ce=b[W],Le=Ce.object,ze=Ce.geometry,tt=$===null?Ce.material:$,Je=Ce.group;Le.layers.test(ee.layers)&&ja(Le,G,ee,ze,tt,Je)}}function ja(b,G,ee,$,W,Se){b.onBeforeRender(N,G,ee,$,W,Se),b.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(N,G,ee,$,b,Se),W.transparent===!0&&W.side===ki&&W.forceSinglePass===!1?(W.side=Dn,W.needsUpdate=!0,N.renderBufferDirect(ee,G,$,W,b,Se),W.side=Sr,W.needsUpdate=!0,N.renderBufferDirect(ee,G,$,W,b,Se),W.side=ki):N.renderBufferDirect(ee,G,$,W,b,Se),b.onAfterRender(N,G,ee,$,W,Se)}function ts(b,G,ee){G.isScene!==!0&&(G=Rt);const $=Ge.get(b),W=x.state.lights,Se=x.state.shadowsArray,Ce=W.state.version,Le=We.getParameters(b,W.state,Se,G,ee),ze=We.getProgramCacheKey(Le);let tt=$.programs;$.environment=b.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(b.isMeshStandardMaterial?Z:w).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",rt),tt=new Map,$.programs=tt);let Je=tt.get(ze);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Ce)return ui(b,Le),Je}else Le.uniforms=We.getUniforms(b),b.onBeforeCompile(Le,N),Je=We.acquireProgram(Le,ze),tt.set(ze,Je),$.uniforms=Le.uniforms;const He=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Ee.uniform),ui(b,Le),$.needsLights=Fl(b),$.lightsStateVersion=Ce,$.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.directionalShadowMap.value=W.state.directionalShadowMap,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotShadowMap.value=W.state.spotShadowMap,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMap.value=W.state.pointShadowMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Ga(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=Al.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function ui(b,G){const ee=Ge.get(b);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Wa(b,G,ee,$,W){G.isScene!==!0&&(G=Rt),P.resetTextureUnits();const Se=G.fog,Ce=$.isMeshStandardMaterial?G.environment:null,Le=Y===null?N.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ys,ze=($.isMeshStandardMaterial?Z:w).get($.envMap||Ce),tt=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,st=!!ee.morphAttributes.color;let Bt=yr;$.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Bt=N.toneMapping);const Ft=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,xt=Ft!==void 0?Ft.length:0,$e=Ge.get($),Ht=x.state.lights;if(pe===!0&&(Me===!0||b!==A)){const ln=b===A&&$.id===R;Ee.setState($,b,ln)}let pt=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ht.state.version||$e.outputColorSpace!==Le||W.isBatchedMesh&&$e.batching===!1||!W.isBatchedMesh&&$e.batching===!0||W.isBatchedMesh&&$e.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&$e.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&$e.instancing===!1||!W.isInstancedMesh&&$e.instancing===!0||W.isSkinnedMesh&&$e.skinning===!1||!W.isSkinnedMesh&&$e.skinning===!0||W.isInstancedMesh&&$e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&$e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&$e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&$e.instancingMorph===!1&&W.morphTexture!==null||$e.envMap!==ze||$.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ee.numPlanes||$e.numIntersection!==Ee.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==Je||$e.morphTargets!==He||$e.morphNormals!==mt||$e.morphColors!==st||$e.toneMapping!==Bt||$e.morphTargetsCount!==xt)&&(pt=!0):(pt=!0,$e.__version=$.version);let dn=$e.currentProgram;pt===!0&&(dn=ts($,G,W));let Xi=!1,Mn=!1,Ei=!1;const At=dn.getUniforms(),fn=$e.uniforms;if(qe.useProgram(dn.program)&&(Xi=!0,Mn=!0,Ei=!0),$.id!==R&&(R=$.id,Mn=!0),Xi||A!==b){qe.buffers.depth.getReversed()?(_e.copy(b.projectionMatrix),G0(_e),W0(_e),At.setValue(k,"projectionMatrix",_e)):At.setValue(k,"projectionMatrix",b.projectionMatrix),At.setValue(k,"viewMatrix",b.matrixWorldInverse);const nn=At.map.cameraPosition;nn!==void 0&&nn.setValue(k,Ye.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&At.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&At.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Mn=!0,Ei=!0)}if(W.isSkinnedMesh){At.setOptional(k,W,"bindMatrix"),At.setOptional(k,W,"bindMatrixInverse");const ln=W.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),At.setValue(k,"boneTexture",ln.boneTexture,P))}W.isBatchedMesh&&(At.setOptional(k,W,"batchingTexture"),At.setValue(k,"batchingTexture",W._matricesTexture,P),At.setOptional(k,W,"batchingIdTexture"),At.setValue(k,"batchingIdTexture",W._indirectTexture,P),At.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&At.setValue(k,"batchingColorTexture",W._colorsTexture,P));const tn=ee.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&et.update(W,ee,dn),(Mn||$e.receiveShadow!==W.receiveShadow)&&($e.receiveShadow=W.receiveShadow,At.setValue(k,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(fn.envMap.value=ze,fn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(fn.envMapIntensity.value=G.environmentIntensity),Mn&&(At.setValue(k,"toneMappingExposure",N.toneMappingExposure),$e.needsLights&&Xa(fn,Ei),Se&&$.fog===!0&&Te.refreshFogUniforms(fn,Se),Te.refreshMaterialUniforms(fn,$,B,ce,x.state.transmissionRenderTarget[b.id]),Al.upload(k,Ga($e),fn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Al.upload(k,Ga($e),fn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&At.setValue(k,"center",W.center),At.setValue(k,"modelViewMatrix",W.modelViewMatrix),At.setValue(k,"normalMatrix",W.normalMatrix),At.setValue(k,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ln=$.uniformsGroups;for(let nn=0,_t=ln.length;nn<_t;nn++){const di=ln[nn];j.update(di,dn),j.bind(di,dn)}}return dn}function Xa(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Fl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,G,ee){Ge.get(b.texture).__webglTexture=G,Ge.get(b.depthTexture).__webglTexture=ee;const $=Ge.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=ee===void 0,$.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){const ee=Ge.get(b);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0};const Ya=k.createFramebuffer();this.setRenderTarget=function(b,G=0,ee=0){Y=b,H=G,O=ee;let $=!0,W=null,Se=!1,Ce=!1;if(b){const ze=Ge.get(b);if(ze.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(k.FRAMEBUFFER,null),$=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(ze.__hasExternalTextures)P.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const He=b.depthTexture;if(ze.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const Je=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?W=Je[G][ee]:W=Je[G],Se=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?W=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?W=Je[ee]:W=Je,z.copy(b.viewport),ae.copy(b.scissor),J=b.scissorTest}else z.copy(D).multiplyScalar(B).floor(),ae.copy(ie).multiplyScalar(B).floor(),J=De;if(ee!==0&&(W=Ya),qe.bindFramebuffer(k.FRAMEBUFFER,W)&&$&&qe.drawBuffers(b,W),qe.viewport(z),qe.scissor(ae),qe.setScissorTest(J),Se){const ze=Ge.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,ee)}else if(Ce){const ze=Ge.get(b.texture),tt=G;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.__webglTexture,ee,tt)}else if(b!==null&&ee!==0){const ze=Ge.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ze.__webglTexture,ee)}R=-1},this.readRenderTargetPixels=function(b,G,ee,$,W,Se,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){qe.bindFramebuffer(k.FRAMEBUFFER,Le);try{const ze=b.texture,tt=ze.format,Je=ze.type;if(!ut.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-$&&ee>=0&&ee<=b.height-W&&k.readPixels(G,ee,$,W,it.convert(tt),it.convert(Je),Se)}finally{const ze=Y!==null?Ge.get(Y).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,G,ee,$,W,Se,Ce){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){const ze=b.texture,tt=ze.format,Je=ze.type;if(!ut.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-$&&ee>=0&&ee<=b.height-W){qe.bindFramebuffer(k.FRAMEBUFFER,Le);const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),k.readPixels(G,ee,$,W,it.convert(tt),it.convert(Je),0);const mt=Y!==null?Ge.get(Y).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,mt);const st=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await j0(k,st,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se),k.deleteBuffer(He),k.deleteSync(st),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,ee=0){b.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-ee),W=Math.floor(b.image.width*$),Se=Math.floor(b.image.height*$),Ce=G!==null?G.x:0,Le=G!==null?G.y:0;P.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,ee,0,0,Ce,Le,W,Se),qe.unbindTexture()};const qa=k.createFramebuffer(),$a=k.createFramebuffer();this.copyTextureToTexture=function(b,G,ee=null,$=null,W=0,Se=null){b.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],G=arguments[2],Se=arguments[3]||0,ee=null),Se===null&&(W!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=W,W=0):Se=0);let Ce,Le,ze,tt,Je,He,mt,st,Bt;const Ft=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(ee!==null)Ce=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,ze=ee.isBox3?ee.max.z-ee.min.z:1,tt=ee.min.x,Je=ee.min.y,He=ee.isBox3?ee.min.z:0;else{const tn=Math.pow(2,-W);Ce=Math.floor(Ft.width*tn),Le=Math.floor(Ft.height*tn),b.isDataArrayTexture?ze=Ft.depth:b.isData3DTexture?ze=Math.floor(Ft.depth*tn):ze=1,tt=0,Je=0,He=0}$!==null?(mt=$.x,st=$.y,Bt=$.z):(mt=0,st=0,Bt=0);const xt=it.convert(G.format),$e=it.convert(G.type);let Ht;G.isData3DTexture?(P.setTexture3D(G,0),Ht=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(P.setTexture2DArray(G,0),Ht=k.TEXTURE_2D_ARRAY):(P.setTexture2D(G,0),Ht=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const pt=k.getParameter(k.UNPACK_ROW_LENGTH),dn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Xi=k.getParameter(k.UNPACK_SKIP_PIXELS),Mn=k.getParameter(k.UNPACK_SKIP_ROWS),Ei=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const At=b.isDataArrayTexture||b.isData3DTexture,fn=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){const tn=Ge.get(b),ln=Ge.get(G),nn=Ge.get(tn.__renderTarget),_t=Ge.get(ln.__renderTarget);qe.bindFramebuffer(k.READ_FRAMEBUFFER,nn.__webglFramebuffer),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let di=0;di<ze;di++)At&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(b).__webglTexture,W,He+di),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(G).__webglTexture,Se,Bt+di)),k.blitFramebuffer(tt,Je,Ce,Le,mt,st,Ce,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Ge.has(b)){const tn=Ge.get(b),ln=Ge.get(G);qe.bindFramebuffer(k.READ_FRAMEBUFFER,qa),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,$a);for(let nn=0;nn<ze;nn++)At?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,W,He+nn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,W),fn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,Se,Bt+nn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,Se),W!==0?k.blitFramebuffer(tt,Je,Ce,Le,mt,st,Ce,Le,k.COLOR_BUFFER_BIT,k.NEAREST):fn?k.copyTexSubImage3D(Ht,Se,mt,st,Bt+nn,tt,Je,Ce,Le):k.copyTexSubImage2D(Ht,Se,mt,st,tt,Je,Ce,Le);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else fn?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Ht,Se,mt,st,Bt,Ce,Le,ze,xt,$e,Ft.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(Ht,Se,mt,st,Bt,Ce,Le,ze,xt,Ft.data):k.texSubImage3D(Ht,Se,mt,st,Bt,Ce,Le,ze,xt,$e,Ft):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Se,mt,st,Ce,Le,xt,$e,Ft.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Se,mt,st,Ft.width,Ft.height,xt,Ft.data):k.texSubImage2D(k.TEXTURE_2D,Se,mt,st,Ce,Le,xt,$e,Ft);k.pixelStorei(k.UNPACK_ROW_LENGTH,pt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Mn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ei),Se===0&&G.generateMipmaps&&k.generateMipmap(Ht),qe.unbindTexture()},this.copyTextureToTexture3D=function(b,G,ee=null,$=null,W=0){return b.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,$=arguments[1]||null,b=arguments[2],G=arguments[3],W=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,ee,$,W)},this.initRenderTarget=function(b){Ge.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),qe.unbindTexture()},this.resetState=function(){H=0,O=0,Y=null,qe.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}function l1(){const s=$t.useRef(null);return $t.useEffect(()=>{const e=s.current;if(!e)return;const n=new g_,r=new Zn(50,e.clientWidth/e.clientHeight,.1,1e3);r.position.set(0,4,11),r.lookAt(0,0,0);const o=new o1({alpha:!0,antialias:!0});o.setSize(e.clientWidth,e.clientHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(o.domElement);const c=24,d=24,f=48,m=48,g=new Va(c,d,f,m);g.rotateX(-Math.PI/2.2);const v=g.attributes.position,_=new Float32Array(v.array),y=new Kd({color:12953728,wireframe:!0,transparent:!0,opacity:.12}),M=new _i(g,y);n.add(M);const T=new ag({color:13938487,size:.05,transparent:!0,opacity:.45}),C=new __(g,T);n.add(C);let S=0,x=0,U=0,I=0;const N=R=>{const{innerWidth:A,innerHeight:z}=window;S=(R.clientX/A-.5)*2,x=(R.clientY/z-.5)*2};window.addEventListener("mousemove",N);const X=()=>{if(!e)return;const R=e.clientWidth,A=e.clientHeight;r.aspect=R/A,r.updateProjectionMatrix(),o.setSize(R,A)};window.addEventListener("resize",X);let H=new w_,O;const Y=()=>{O=requestAnimationFrame(Y);const R=H.getElapsedTime();U+=(S*1.2-U)*.04,I+=(x*.8-I)*.04,r.position.x=U*1.5,r.position.y=4+I*-.8,r.lookAt(0,0,0);const A=v.array;for(let z=0;z<A.length;z+=3){const ae=_[z],J=_[z+2],ue=Math.sin(ae*.4+R*.7)*.35,he=Math.cos(J*.4+R*.5)*.35,oe=Math.sin(Math.sqrt(ae*ae+J*J)*.5-R*.9)*.2;A[z+1]=ue+he+oe}v.needsUpdate=!0,M.rotation.y=R*.03,C.rotation.y=R*.03,o.render(n,r)};return Y(),()=>{cancelAnimationFrame(O),window.removeEventListener("mousemove",N),window.removeEventListener("resize",X),e&&o.domElement&&e.removeChild(o.domElement),g.dispose(),y.dispose(),T.dispose(),o.dispose()}},[]),h.jsx("div",{ref:s,className:"absolute inset-0 pointer-events-none z-0 opacity-60 overflow-hidden","aria-hidden":"true"})}function c1({onOpenDossier:s}){return h.jsxs("section",{className:"relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 overflow-hidden border-b border-brass/10",children:[h.jsx(l1,{}),h.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brass/5 rounded-full blur-3xl pointer-events-none"}),h.jsx("div",{className:"absolute bottom-10 right-10 w-96 h-96 bg-institutional-forest/10 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pb-10 border-b border-white/10 font-mono text-[11px] tracking-widest uppercase text-parchment-400",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("span",{className:"text-brass",children:"EST. 2026 // DOSSIER NO. 01"}),h.jsx("span",{className:"text-white/20",children:"|"}),h.jsx("span",{children:"HYDERABAD, DECCAN"})]}),h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"ACTIVE RESEARCH & ARCHITECTURE"]}),h.jsx("span",{className:"hidden md:inline text-white/20",children:"|"}),h.jsx("span",{className:"hidden md:inline text-parchment-300",children:"AIMSCS · UoH CAMPUS"})]})]}),h.jsx("div",{className:"relative z-10 max-w-7xl mx-auto w-full my-auto py-12 lg:py-16",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[h.jsxs("div",{className:"lg:col-span-8 flex flex-col",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[h.jsx("div",{className:"h-[1px] w-12 bg-brass"}),h.jsx("p",{className:"font-mono text-xs md:text-sm tracking-monumental uppercase text-brass font-medium",children:jt.title})]}),h.jsxs("h1",{className:"font-cinzel text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight text-parchment-50 leading-[0.95] uppercase mb-8",children:["Rajamuri Sai ",h.jsx("br",{}),h.jsx("span",{className:"gold-gradient-bright font-serif italic tracking-normal font-normal",children:"Rithik Reddy"})]}),h.jsxs("div",{className:"relative pl-6 border-l-2 border-brass/50 mb-10",children:[h.jsxs("p",{className:"font-editorial text-2xl md:text-3xl text-parchment-100 font-normal leading-snug",children:["“Building at the intersection of ",h.jsx("span",{className:"text-brass font-semibold",children:"technology"}),", ",h.jsx("span",{className:"text-brass font-semibold",children:"institutional ideas"}),", and ",h.jsx("span",{className:"text-brass font-semibold",children:"relentless execution"}),".”"]}),h.jsx("p",{className:"mt-4 font-sans text-sm md:text-base text-parchment-400 max-w-2xl leading-relaxed",children:"Synthesizing machine intelligence, public governance, and venture creation. Operating between the halls of Indian legislative statecraft and deep algorithmic systems."})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2",children:[h.jsxs("a",{href:"#manifesto",className:"group flex items-center gap-3 px-6 py-3.5 bg-brass text-obsidian-950 font-mono text-xs uppercase tracking-widest font-bold hover:bg-parchment-100 transition-all duration-300 rounded-sm shadow-luxury",children:[h.jsx("span",{children:"Read The Manifesto"}),h.jsx(uv,{className:"w-4 h-4 group-hover:translate-y-0.5 transition-transform"})]}),h.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-6 py-3.5 bg-obsidian-850 hover:bg-obsidian-800 text-parchment-200 border border-brass/30 hover:border-brass rounded-sm font-mono text-xs uppercase tracking-widest transition-all duration-300",children:[h.jsx("span",{children:"View Full Dossier"}),h.jsx(Tv,{className:"w-3.5 h-3.5 text-brass"})]})]})]}),h.jsx("div",{className:"lg:col-span-4 flex justify-center lg:justify-end",children:h.jsxs("div",{className:"relative w-full max-w-sm glass-card rounded-sm p-4 border border-brass/25 shadow-2xl",children:[h.jsxs("div",{className:"relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-obsidian-900 group",children:[h.jsx("img",{src:"/assets/portraits/heritage-temple.jpeg",alt:"Rajamuri Sai Rithik Reddy",className:"w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"}),h.jsx("div",{className:"absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brass"}),h.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brass"}),h.jsx("div",{className:"absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brass"}),h.jsx("div",{className:"absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brass"}),h.jsxs("div",{className:"absolute bottom-0 inset-x-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent p-4",children:[h.jsx("span",{className:"font-cinzel text-xs uppercase tracking-widest text-brass block",children:"Institutional Portrait"}),h.jsx("span",{className:"font-mono text-[10px] text-parchment-300",children:"Telangana Heritage · Cultural Roots"})]})]}),h.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10 flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono",children:[h.jsx("span",{className:"text-parchment-400",children:"AFFILIATION"}),h.jsx("span",{className:"text-parchment-100 font-medium",children:"Prof. C.R. Rao AIMSCS"})]}),h.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono",children:[h.jsx("span",{className:"text-parchment-400",children:"MANDATE"}),h.jsx("span",{className:"text-brass font-medium",children:"Cultural Secretary (2025–26)"})]}),h.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono",children:[h.jsx("span",{className:"text-parchment-400",children:"FELLOWSHIP"}),h.jsx("span",{className:"text-parchment-100",children:"Rishihood Policy BootCamp '26"})]})]})]})})]})}),h.jsx("div",{className:"relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/10",children:h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-parchment-300",children:[h.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-sm bg-obsidian-850/50 border border-white/5",children:[h.jsx(Mv,{className:"w-5 h-5 text-brass shrink-0"}),h.jsxs("div",{children:[h.jsx("div",{className:"text-parchment-100 font-bold uppercase tracking-wider",children:"01. Technology"}),h.jsx("div",{className:"text-[11px] text-parchment-400",children:"RAG Architectures, Speech AI, Cloud Systems"})]})]}),h.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-sm bg-obsidian-850/50 border border-white/5",children:[h.jsx(Pm,{className:"w-5 h-5 text-brass shrink-0"}),h.jsxs("div",{children:[h.jsx("div",{className:"text-parchment-100 font-bold uppercase tracking-wider",children:"02. Ideas"}),h.jsx("div",{className:"text-[11px] text-parchment-400",children:"Public Policy, Legislative Statecraft & Reform"})]})]}),h.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-sm bg-obsidian-850/50 border border-white/5",children:[h.jsx(qv,{className:"w-5 h-5 text-brass shrink-0"}),h.jsxs("div",{children:[h.jsx("div",{className:"text-parchment-100 font-bold uppercase tracking-wider",children:"03. Execution"}),h.jsx("div",{className:"text-[11px] text-parchment-400",children:"Institutional Governance, Ventures & Athletics"})]})]})]})})]})}function u1(){return h.jsxs("section",{id:"manifesto",className:"py-28 px-6 md:px-12 bg-obsidian-900 border-b border-brass/10 relative overflow-hidden",children:[h.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 font-cinzel text-[16rem] text-white/[0.015] select-none pointer-events-none font-bold",children:"IDEA"}),h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10",children:[h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center gap-3 mb-3",children:h.jsx("span",{className:"font-mono text-xs text-brass uppercase tracking-monumental",children:"SECTION 01 // ESSAY & PRINCIPLES"})}),h.jsxs("h2",{className:"font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50",children:["The Narrative ",h.jsx("span",{className:"gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl",children:"manifesto"})]})]}),h.jsx("p",{className:"font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider",children:"[ THESIS : SOVEREIGN SYSTEMS & PRAGMATISM ]"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",children:[h.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-8",children:[h.jsxs("div",{className:"p-8 rounded-sm glass-card border border-brass/30 relative",children:[h.jsx(jv,{className:"w-10 h-10 text-brass/30 mb-4"}),h.jsx("blockquote",{className:"font-editorial text-2xl md:text-3xl text-parchment-100 italic leading-snug",children:"“A line of code is an ideological commitment. True transformation in a nation of 1.4 billion cannot be achieved solely in an IDE; it demands an intimate grasp of public policy, civic institutions, and the ground reality of the citizen.”"}),h.jsxs("div",{className:"mt-6 pt-6 border-t border-white/10 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-cinzel text-xs uppercase tracking-widest text-brass font-bold",children:"Rajamuri Sai Rithik Reddy"}),h.jsx("div",{className:"font-mono text-[10px] text-parchment-400",children:"Hyderabad, Telangana"})]}),h.jsx("div",{className:"w-8 h-8 rounded-full border border-brass/40 flex items-center justify-center text-brass font-cinzel text-xs font-bold",children:"Ω"})]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"p-5 border border-white/5 bg-obsidian-850/60 rounded-sm",children:[h.jsxs("div",{className:"flex items-center gap-3 text-brass font-mono text-xs uppercase tracking-wider mb-2",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brass"}),"Pillar I: Technological Depth"]}),h.jsx("p",{className:"text-xs text-parchment-300 leading-relaxed",children:"Rigorous computer science, vector retrieval architectures, and distributed systems. Rejecting superficial wrappers in favor of foundational engineering."})]}),h.jsxs("div",{className:"p-5 border border-white/5 bg-obsidian-850/60 rounded-sm",children:[h.jsxs("div",{className:"flex items-center gap-3 text-brass font-mono text-xs uppercase tracking-wider mb-2",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brass"}),"Pillar II: Institutional Literacy"]}),h.jsx("p",{className:"text-xs text-parchment-300 leading-relaxed",children:"Deep immersion in parliamentary procedures, public governance, and state-level policy. Engineering systems that seamlessly integrate into the democratic fabric."})]}),h.jsxs("div",{className:"p-5 border border-white/5 bg-obsidian-850/60 rounded-sm",children:[h.jsxs("div",{className:"flex items-center gap-3 text-brass font-mono text-xs uppercase tracking-wider mb-2",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brass"}),"Pillar III: Relentless Execution"]}),h.jsx("p",{className:"text-xs text-parchment-300 leading-relaxed",children:"From managing a ₹5–6L institutional budget as Cultural Secretary to incorporating enterprises under the Ministry of Corporate Affairs (MCA)."})]})]})]}),h.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-8 text-parchment-200 text-base leading-relaxed font-sans font-light",children:[h.jsx("p",{className:"first-letter:font-cinzel first-letter:text-6xl first-letter:font-bold first-letter:text-brass first-letter:mr-3 first-letter:float-left text-lg text-parchment-100 leading-relaxed",children:"In an era overflowing with transient software iterations and ephemeral trends, the real frontier lies in systems that endure. India stands at a momentous civilizational inflection point: an economy expanding at relentless velocity, backed by the largest digital population on earth, yet anchored in agricultural and institutional imperatives that cannot be solved by generic Silicon Valley templates."}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-parchment-300 leading-relaxed pt-2",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-cinzel text-xs font-bold uppercase tracking-widest text-brass mb-3 pb-1 border-b border-white/10",children:"The Computational Anchor"}),h.jsxs("p",{children:["Trained in Computer Science and Data Science at the Prof. C.R. Rao AIMSCS (University of Hyderabad Campus), my engineering work centers on machine intelligence that functions in high-friction environments. When architecting ",h.jsx("strong",{className:"text-parchment-100 font-medium",children:"Bhoomi (Farmer GPT)"}),", the mandate was unequivocal: generic multilingual LLMs fail Indian farmers when soil chemistry and local climate nuances are overlooked. By pairing localized dense vector retrieval with regional speech synthesis, we turned computational theory into an enterprise designed for the Indian heartland."]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-cinzel text-xs font-bold uppercase tracking-widest text-brass mb-3 pb-1 border-b border-white/10",children:"The Democratic Axis"}),h.jsxs("p",{children:["Technology created in a vacuum is doomed to regulatory friction or social obsolescence. My selection to the 10th Cohort of the ",h.jsx("strong",{className:"text-parchment-100 font-medium",children:"Rishihood University Policy BootCamp"}),", immersive delegations within the ",h.jsx("strong",{className:"text-parchment-100 font-medium",children:"Lok Sabha & Rajya Sabha"})," chambers of the New Parliament of India, and delivering addresses at the ",h.jsx("strong",{className:"text-parchment-100 font-medium",children:"Constitution Club of India"})," solidified a core principle: engineers must understand statecraft, economics, and institutional law to build sovereign digital infrastructure."]})]})]}),h.jsx("div",{className:"p-6 rounded-sm bg-obsidian-800/70 border-l-2 border-brass text-sm text-parchment-300 leading-relaxed mt-2",children:h.jsx("p",{className:"italic",children:'"Leadership is measured neither by applause nor titles, but by the quiet capacity to orchestrate complex human and computational resources toward a shared institutional objective. Whether coordinating 1,000+ students and fiscal accountability as Cultural Secretary, or enduring kilometers of open-water endurance, discipline precedes triumph."'})}),h.jsxs("div",{className:"pt-6 border-t border-white/10 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-editorial text-2xl italic text-brass block",children:"R. Sai Rithik Reddy"}),h.jsx("span",{className:"font-mono text-[10px] text-parchment-400 uppercase tracking-widest",children:"Founding Lead · Technologist · Policy Fellow"})]}),h.jsxs("div",{className:"font-mono text-[11px] text-parchment-400 text-right",children:[h.jsx("span",{children:"HYDERABAD // TELANGANA"}),h.jsx("span",{className:"block text-brass/70",children:jt.coordinates})]})]})]})]})]})]})}function d1({onSelectExhibit:s}){const[e,n]=$t.useState(0),r=vu.fellowships[e];return h.jsxs("section",{id:"policy",className:"py-28 px-6 md:px-12 bg-obsidian-950 border-b border-brass/10 relative",children:[h.jsx("div",{className:"absolute inset-0 bg-grain pointer-events-none opacity-40"}),h.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10",children:[h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center gap-3 mb-3",children:h.jsx("span",{className:"font-mono text-xs text-brass uppercase tracking-monumental",children:"SECTION 02 // GOVERNANCE & STATECRAFT"})}),h.jsxs("h2",{className:"font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50",children:["Institutional & ",h.jsx("span",{className:"gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl",children:"policy"})," Leadership"]})]}),h.jsx("p",{className:"font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider",children:"[ SANSAD BHAVAN · CONSTITUTION CLUB · RISHIHOOD ]"})]}),h.jsx("div",{className:"max-w-3xl mb-14",children:h.jsx("p",{className:"font-editorial text-xl md:text-2xl text-parchment-200 font-light leading-relaxed",children:vu.leadText})}),h.jsx("div",{className:"flex flex-wrap gap-3 mb-10 pb-4 border-b border-white/10 font-mono text-xs uppercase tracking-wider",children:vu.fellowships.map((o,c)=>h.jsxs("button",{onClick:()=>n(c),className:`px-5 py-3 rounded-sm border transition-all duration-300 flex items-center gap-2.5 ${e===c?"bg-brass text-obsidian-950 border-brass font-bold shadow-md":"bg-obsidian-900 text-parchment-400 border-white/10 hover:border-brass/40 hover:text-parchment-200"}`,children:[h.jsx(Pm,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:o.institution})]},o.id))}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",children:[h.jsxs("div",{className:"lg:col-span-6 flex flex-col justify-between glass-card p-6 md:p-8 rounded-sm border border-brass/30 shadow-2xl relative group",children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-[11px] text-parchment-400",children:[h.jsxs("span",{className:"flex items-center gap-2 text-brass",children:[h.jsx(Im,{className:"w-3.5 h-3.5"}),"VERIFIED ARCHIVAL EXHIBIT"]}),h.jsxs("span",{children:[r.period," // ",r.badge]})]}),h.jsxs("div",{className:"relative aspect-[4/3] rounded-sm overflow-hidden bg-obsidian-950 cursor-pointer group/img border border-white/10",onClick:()=>s&&s({title:r.institution,src:r.image,location:r.location,caption:r.description}),children:[h.jsx("img",{src:r.image,alt:r.institution,className:"w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent opacity-80 group-hover/img:opacity-40 transition-opacity"}),h.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none",children:[h.jsx("span",{className:"font-mono text-[11px] text-parchment-200 bg-obsidian-950/80 px-2.5 py-1 rounded border border-white/10",children:r.location}),h.jsxs("span",{className:"font-mono text-[11px] text-brass bg-obsidian-950/80 px-2.5 py-1 rounded border border-brass/30 flex items-center gap-1",children:[h.jsx("span",{children:"Inspect Fullscreen"}),h.jsx(mv,{className:"w-3 h-3"})]})]})]}),r.secondaryImage&&h.jsxs("div",{className:"mt-4 pt-4 border-t border-white/10 flex items-center gap-4",children:[h.jsx("div",{className:"w-24 h-16 rounded-sm overflow-hidden border border-brass/30 shrink-0 cursor-pointer hover:opacity-80 transition-opacity",onClick:()=>s&&s({title:`${r.institution} (Secondary View)`,src:r.secondaryImage,location:r.location,caption:r.description}),children:h.jsx("img",{src:r.secondaryImage,alt:"Secondary archival viewpoint",className:"w-full h-full object-cover"})}),h.jsxs("div",{className:"text-xs font-mono text-parchment-400",children:[h.jsx("span",{className:"text-brass block font-semibold",children:"Supplementary Archival Record"}),h.jsx("span",{children:"Click thumbnail to inspect comparative photographic evidence."})]})]})]}),h.jsxs("div",{className:"lg:col-span-6 flex flex-col justify-between glass-card p-6 md:p-8 rounded-sm border border-brass/30 shadow-2xl",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-brass mb-2 uppercase tracking-wider",children:[h.jsx(Ll,{className:"w-3.5 h-3.5 text-brass"}),h.jsx("span",{children:r.location})]}),h.jsx("h3",{className:"font-cinzel text-2xl md:text-3xl font-bold text-parchment-50 mb-2",children:r.program}),h.jsxs("div",{className:"font-mono text-xs text-brass mb-6 pb-4 border-b border-white/10 flex items-center justify-between",children:[h.jsxs("span",{children:["ROLE: ",r.role]}),h.jsxs("span",{children:["YEAR: ",r.period]})]}),h.jsx("p",{className:"font-sans text-sm md:text-base text-parchment-300 leading-relaxed mb-8",children:r.description}),h.jsxs("div",{className:"space-y-3 mb-8",children:[h.jsx("span",{className:"font-cinzel text-xs font-bold uppercase tracking-widest text-parchment-100 block mb-2",children:"Key Strategic Contributions & Focus Areas"}),r.highlights.map((o,c)=>h.jsxs("div",{className:"flex items-start gap-3 text-xs md:text-sm text-parchment-300",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brass mt-1.5 shrink-0"}),h.jsx("span",{children:o})]},c))]})]}),h.jsxs("div",{className:"pt-6 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-parchment-400",children:[h.jsx("span",{children:"GOVERNANCE & CIVIC DISCOURSE"}),h.jsx("span",{className:"text-brass font-bold",children:"SOVEREIGNTY & REFORM"})]})]})]})]})]})}function f1({onOpenVentureModal:s}){const e=Cl.find(r=>r.id==="bhoomi"),n=Cl.filter(r=>r.id!=="bhoomi");return h.jsx("section",{id:"ventures",className:"py-28 px-6 md:px-12 bg-obsidian-900 border-b border-brass/10 relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10",children:[h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center gap-3 mb-3",children:h.jsx("span",{className:"font-mono text-xs text-brass uppercase tracking-monumental",children:"SECTION 03 // VENTURES & COMPUTATION"})}),h.jsxs("h2",{className:"font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50",children:["Engineering & ",h.jsx("span",{className:"gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl",children:"ventures"})]})]}),h.jsx("p",{className:"font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider",children:"[ SOVEREIGN AI · CLOUD SYSTEMS · ACOUSTIC FORENSICS ]"})]}),e&&h.jsxs("div",{className:"mb-16 glass-card rounded-sm border border-brass/40 p-8 md:p-12 relative overflow-hidden shadow-2xl",children:[h.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-institutional-forest/30 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[h.jsxs("div",{className:"lg:col-span-7 flex flex-col",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[h.jsx("span",{className:"px-3 py-1 rounded-sm bg-brass/15 border border-brass/40 font-mono text-xs text-brass uppercase tracking-wider font-semibold",children:"Flagship Sovereign Agritech"}),h.jsx("span",{className:"px-3 py-1 rounded-sm bg-white/5 border border-white/10 font-mono text-xs text-parchment-300",children:e.stage})]}),h.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[h.jsx("img",{src:e.logo,alt:"Bhoomi Official Seal",className:"w-14 h-14 rounded-full border border-brass/50 bg-obsidian-950 p-1 shadow-md"}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-cinzel text-3xl md:text-4xl font-bold text-parchment-50 tracking-tight",children:e.title}),h.jsx("p",{className:"font-mono text-xs text-brass",children:e.role})]})]}),h.jsx("p",{className:"font-sans text-sm md:text-base text-parchment-200 leading-relaxed mb-6 font-light",children:e.description}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8",children:e.metrics.map((r,o)=>h.jsxs("div",{className:"p-3 rounded-sm bg-obsidian-950/80 border border-white/10",children:[h.jsx("span",{className:"block font-mono text-[10px] text-parchment-400 uppercase tracking-wider",children:r.label}),h.jsx("span",{className:"font-mono text-xs font-semibold text-brass",children:r.value})]},o))}),h.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:e.techStack.map((r,o)=>h.jsx("span",{className:"px-2.5 py-1 bg-obsidian-800 text-parchment-300 font-mono text-[11px] rounded-sm border border-white/5",children:r},o))}),h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsxs("button",{onClick:()=>s(e),className:"flex items-center gap-2 px-6 py-3 bg-brass text-obsidian-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-parchment-100 transition-all rounded-sm shadow-md",children:[h.jsx("span",{children:"Inspect Full Architecture"}),h.jsx(Qu,{className:"w-4 h-4"})]}),h.jsx("span",{className:"font-mono text-[11px] text-parchment-400 hidden sm:inline",children:"Incorporation & Research Abstract Available"})]})]}),h.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-4",children:[h.jsx("div",{className:"rounded-sm overflow-hidden border border-brass/30 bg-obsidian-950 p-2 group shadow-xl",children:h.jsxs("div",{className:"aspect-[16/10] overflow-hidden rounded-sm relative",children:[h.jsx("img",{src:e.brandImage,alt:"Bhoomi Brand Architecture",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent"}),h.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[11px] text-parchment-200",children:[h.jsx("span",{children:"THE MODERN FARMING AI"}),h.jsx("span",{className:"text-brass",children:"MCA INCORPORATED"})]})]})}),h.jsxs("div",{className:"rounded-sm border border-white/10 bg-obsidian-950/70 p-3.5 flex items-center gap-4 cursor-pointer hover:border-brass/40 transition-colors",onClick:()=>s(e),children:[h.jsx("div",{className:"w-16 h-12 rounded-sm overflow-hidden border border-white/10 shrink-0",children:h.jsx("img",{src:e.filingImage,alt:"MCA Registration",className:"w-full h-full object-cover"})}),h.jsxs("div",{children:[h.jsx("span",{className:"font-cinzel text-xs font-bold text-parchment-100 block",children:"Ministry of Corporate Affairs (MCA)"}),h.jsx("span",{className:"font-mono text-[10px] text-parchment-400",children:"Official Company Incorporation & Filing Ledger"})]})]})]})]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:n.map(r=>h.jsxs("div",{className:"glass-card glass-card-hover rounded-sm p-8 border border-brass/20 flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between font-mono text-[11px] text-parchment-400 mb-4 pb-3 border-b border-white/10",children:[h.jsx("span",{className:"text-brass font-medium uppercase tracking-wider",children:r.category}),h.jsx("span",{className:"px-2 py-0.5 rounded bg-white/5 border border-white/10",children:r.stage})]}),h.jsx("h3",{className:"font-cinzel text-2xl font-bold text-parchment-50 mb-1",children:r.title}),h.jsx("div",{className:"font-mono text-xs text-brass mb-4",children:r.role}),h.jsx("p",{className:"font-sans text-sm text-parchment-300 leading-relaxed mb-6",children:r.description}),h.jsx("div",{className:"grid grid-cols-2 gap-3 mb-6",children:r.metrics.map((o,c)=>h.jsxs("div",{className:"p-2.5 rounded-sm bg-obsidian-950/70 border border-white/5",children:[h.jsx("div",{className:"font-mono text-[10px] text-parchment-400 uppercase",children:o.label}),h.jsx("div",{className:"font-mono text-xs font-bold text-parchment-100 mt-0.5",children:o.value})]},c))})]}),h.jsxs("div",{className:"pt-6 border-t border-white/10",children:[h.jsx("div",{className:"flex flex-wrap gap-1.5 mb-4",children:r.techStack.map((o,c)=>h.jsx("span",{className:"px-2 py-0.5 bg-obsidian-850 text-parchment-400 font-mono text-[10px] rounded border border-white/5",children:o},c))}),h.jsxs("button",{onClick:()=>s(r),className:"w-full py-2.5 flex items-center justify-center gap-2 bg-obsidian-850 hover:bg-brass text-parchment-200 hover:text-obsidian-950 border border-brass/30 hover:border-brass rounded-sm font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300",children:[h.jsx("span",{children:"Examine Dossier"}),h.jsx(Qu,{className:"w-3.5 h-3.5"})]})]})]},r.id))})]})})}function h1(){return h.jsx("section",{id:"leadership",className:"py-28 px-6 md:px-12 bg-obsidian-950 border-b border-brass/10 relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10",children:[h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center gap-3 mb-3",children:h.jsx("span",{className:"font-mono text-xs text-brass uppercase tracking-monumental",children:"SECTION 04 // GOVERNANCE & DISCIPLINE"})}),h.jsxs("h2",{className:"font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50",children:["Executive & ",h.jsx("span",{className:"gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl",children:"field"})," Leadership"]})]}),h.jsx("p",{className:"font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider",children:"[ INSTITUTIONAL STEWARDSHIP · ATHLETIC CALIBRATION ]"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20",children:[_n[0]&&h.jsxs("div",{className:"lg:col-span-7 glass-card p-8 md:p-10 rounded-sm border border-brass/30 flex flex-col justify-between shadow-2xl",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between font-mono text-xs text-parchment-400 pb-3 mb-4 border-b border-white/10",children:[h.jsx("span",{className:"text-brass font-bold uppercase tracking-widest",children:"ELECTED INSTITUTIONAL EXECUTIVE"}),h.jsx("span",{children:_n[0].period})]}),h.jsx("h3",{className:"font-cinzel text-2xl md:text-3xl font-bold text-parchment-50 mb-2",children:_n[0].role}),h.jsxs("div",{className:"font-mono text-xs text-brass mb-6",children:[_n[0].organization,h.jsx("span",{className:"block text-parchment-400 text-[11px] font-sans mt-0.5",children:_n[0].affiliation})]}),h.jsx("p",{className:"font-sans text-sm text-parchment-300 leading-relaxed mb-8 font-light",children:_n[0].summary}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8",children:_n[0].impactNumbers.map((s,e)=>h.jsxs("div",{className:"p-3 bg-obsidian-950/80 rounded-sm border border-white/10 text-center",children:[h.jsx("div",{className:"font-mono text-base md:text-lg font-bold text-brass",children:s.metric}),h.jsx("div",{className:"font-mono text-[10px] text-parchment-400 uppercase tracking-wider mt-1",children:s.label})]},e))}),h.jsxs("div",{className:"space-y-3",children:[h.jsx("span",{className:"font-cinzel text-xs font-bold uppercase tracking-widest text-parchment-200 block mb-2",children:"Executive Scope & Governance Mandate"}),_n[0].responsibilities.map((s,e)=>h.jsxs("div",{className:"flex items-start gap-3 text-xs md:text-sm text-parchment-300",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brass mt-1.5 shrink-0"}),h.jsx("span",{children:s})]},e))]})]}),h.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-parchment-400",children:[h.jsx("span",{children:"CAMPUS GOVERNANCE"}),h.jsx("span",{className:"text-brass",children:"FISCAL STEWARDSHIP"})]})]}),_n[1]&&h.jsxs("div",{className:"lg:col-span-5 glass-card p-8 md:p-10 rounded-sm border border-brass/20 flex flex-col justify-between shadow-xl",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between font-mono text-xs text-parchment-400 pb-3 mb-4 border-b border-white/10",children:[h.jsx("span",{className:"text-brass font-bold uppercase tracking-widest",children:"CIVIC POLICY INITIATIVE"}),h.jsx("span",{children:_n[1].period})]}),h.jsx("h3",{className:"font-cinzel text-2xl font-bold text-parchment-50 mb-2",children:_n[1].role}),h.jsx("div",{className:"font-mono text-xs text-brass mb-6",children:_n[1].organization}),h.jsx("p",{className:"font-sans text-sm text-parchment-300 leading-relaxed mb-6 font-light",children:_n[1].summary}),h.jsx("div",{className:"grid grid-cols-3 gap-2 mb-6",children:_n[1].impactNumbers.map((s,e)=>h.jsxs("div",{className:"p-2.5 bg-obsidian-950/80 rounded-sm border border-white/5 text-center",children:[h.jsx("div",{className:"font-mono text-sm font-bold text-brass",children:s.metric}),h.jsx("div",{className:"font-mono text-[9px] text-parchment-400 uppercase mt-0.5",children:s.label})]},e))}),h.jsx("div",{className:"space-y-2.5",children:_n[1].responsibilities.map((s,e)=>h.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-parchment-300",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brass mt-1 shrink-0"}),h.jsx("span",{children:s})]},e))})]}),h.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-parchment-400",children:[h.jsx("span",{children:"FOUNDING INITIATOR"}),h.jsx("span",{className:"text-brass",children:"PEDAGOGICAL REFORM"})]})]})]}),h.jsxs("div",{className:"p-8 md:p-12 glass-card rounded-sm border border-brass/25 relative overflow-hidden",children:[h.jsxs("div",{className:"max-w-3xl mb-10",children:[h.jsxs("div",{className:"flex items-center gap-2 text-brass font-mono text-xs uppercase tracking-widest mb-2",children:[h.jsx(yv,{className:"w-4 h-4"}),h.jsx("span",{children:"Physiological Baseline & High-Stakes Equanimity"})]}),h.jsx("h3",{className:"font-cinzel text-2xl md:text-4xl font-bold text-parchment-50 mb-4",children:_u.title}),h.jsxs("p",{className:"font-editorial text-lg md:text-xl text-parchment-200 leading-relaxed italic",children:["“",_u.manifesto,"”"]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10",children:_u.disciplines.map((s,e)=>h.jsxs("div",{className:"p-6 rounded-sm bg-obsidian-950/70 border border-white/10 flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[s.sport.includes("Swim")?h.jsx(Kv,{className:"w-6 h-6 text-brass"}):h.jsx(Xv,{className:"w-6 h-6 text-brass"}),h.jsx("h4",{className:"font-cinzel text-xl font-bold text-parchment-50",children:s.sport})]}),h.jsxs("div",{className:"font-mono text-xs text-brass mb-4",children:["[ METAPHOR: ",s.metaphor," ]"]}),h.jsx("p",{className:"font-sans text-xs md:text-sm text-parchment-300 leading-relaxed mb-6 font-light",children:s.description})]}),h.jsx("div",{className:"pt-4 border-t border-white/5 flex flex-wrap gap-2",children:s.attributes.map((n,r)=>h.jsx("span",{className:"px-2.5 py-1 rounded bg-obsidian-850 font-mono text-[10px] text-parchment-300 border border-white/5",children:n},r))})]},e))})]})]})})}const Cm=[{id:"exhibit-lok-sabha",title:"The Lower House: Lok Sabha",location:"New Parliament of India (Sansad Bhavan), New Delhi",date:"2026",category:"Institutional Statecraft",src:"/assets/parliament/loksabha-1.jpg",aspectRatio:"portrait",caption:"Standing beside the ceremonial brass inscription of the Lok Sabha, the House of the People, representing the democratic sovereignty of 1.4 billion citizens.",details:{institution:"Parliament of India",chamber:"Lok Sabha Precinct",context:"Parliamentary Delegation & Institutional Study",historicalNote:"The New Parliament features the peacock motif in the Lok Sabha chamber, symbolizing national grace and vibrant legislative discourse."}},{id:"exhibit-rajya-sabha",title:"The Upper House: Rajya Sabha",location:"New Parliament of India (Sansad Bhavan), New Delhi",date:"2026",category:"Institutional Statecraft",src:"/assets/parliament/rajyasabha-1.jpg",aspectRatio:"portrait",caption:"At the Rajya Sabha—the Council of States. Deliberating on legislative continuity, federal cooperation, and national policy consensus.",details:{institution:"Parliament of India",chamber:"Rajya Sabha Precinct",context:"Federal Policy Deliberations",historicalNote:"The Rajya Sabha chamber is themed around the sacred lotus flower, representing intellect, institutional permanence, and federal harmony."}},{id:"exhibit-samvidhan-sadan",title:"Samvidhan Sadan (The Historic Colonnade)",location:"Central Vista, New Delhi",date:"2026",category:"Constitutional Heritage",src:"/assets/parliament/samvidhan-sadan.jpg",aspectRatio:"portrait",caption:"Before the 144 circular pillars of Samvidhan Sadan, where the Constituent Assembly of India debated and enacted the world's longest written constitution.",details:{institution:"Historic Parliament Complex",edifice:"Central Hall of the Constitution",context:"Constitutional Heritage & Legislative Continuity",historicalNote:"Renamed 'Samvidhan Sadan' by unanimous resolution to honor the sacred soil where the Constitution was drafted."}},{id:"exhibit-constitution-club-podium",title:"Podium Address: Constitution Club of India",location:"Rafi Marg, New Delhi",date:"2026",category:"Public Policy & Discourse",src:"/assets/parliament/constitution-club-podium.jpg",aspectRatio:"portrait",caption:"Delivering an address on youth leadership, foundational AI sovereignty, and vernacular computational access in India's agricultural heartlands.",details:{institution:"Constitution Club of India",platform:"National Leadership Summit",context:"Invited Speaker Address",historicalNote:"Established in 1947, the Constitution Club serves as the historic forum for parliamentarians, thinkers, and policy innovators."}},{id:"exhibit-constitution-club-speech",title:"Keynote Delivery & Deliberations",location:"Constitution Club of India, New Delhi",date:"2026",category:"Public Policy & Discourse",src:"/assets/parliament/constitution-club-address.jpg",aspectRatio:"portrait",caption:"Engaging delegates on bridging algorithmic machine learning with grassroots socio-economic governance.",details:{institution:"Constitution Club of India",platform:"Youth Statecraft Assembly",context:"Plenary Session",historicalNote:"Fostering dialogue across technological disruption and institutional policy governance."}},{id:"exhibit-central-vista",title:"Raisina Hill & The Central Vista",location:"Kartavya Path, New Delhi",date:"2026",category:"Capital Architecture",src:"/assets/parliament/central-vista-fountain.jpg",aspectRatio:"portrait",caption:"Framed against the monumental fountain plazas of the reimagined Central Vista corridor, symbolizing modern civic grandeur.",details:{institution:"Central Vista Precinct",axis:"Kartavya Path — Raisina Hill",context:"Civic Architecture & Urban Planning Study",historicalNote:"The heart of Indian executive power, where the North and South Blocks meet the new democratic avenues."}},{id:"exhibit-pbc-cohort",title:"Policy BootCamp 10th Edition Cohort",location:"Rishihood University, NCR",date:"2026",category:"Policy Fellowship",src:"/assets/policy/pbc-cohort.jpeg",aspectRatio:"landscape",caption:"Convening with national cohort fellows, professors of public policy, and administrative luminaries at the 10th Edition of the flagship Policy BootCamp.",details:{institution:"Rishihood University",program:"Policy BootCamp 2026",cohort:"10th Anniversary Milestone Cohort",focus:"Legislative Architecture & Public Governance"}},{id:"exhibit-pbc-stage",title:"Policy Fellowship Convocation",location:"Rishihood University, NCR",date:"2026",category:"Policy Fellowship",src:"/assets/policy/pbc-certificate-stage.jpeg",aspectRatio:"landscape",caption:"Receiving the Policy BootCamp Certificate of Completion on stage, recognizing rigorous contributions to public policy simulations.",details:{institution:"Rishihood University",honor:"Certificate of Completion",significance:"Validation of Policy Acumen & Public Problem-Solving"}},{id:"exhibit-heritage",title:"Sacred Architecture & Roots",location:"Telangana, India",date:"2025",category:"Heritage & Identity",src:"/assets/portraits/heritage-temple.jpeg",aspectRatio:"portrait",caption:"Rooted in timeless civilization. Traditional silk attire before the sanctum of historic Dravidian stone architecture.",details:{provenance:"Deccan Plateau Temple Architecture",significance:"Cultural anchor grounding cutting-edge technological aspirations in ancestral values."}}];function p1({onSelectExhibit:s}){const[e,n]=$t.useState("All"),r=["All","Institutional Statecraft","Public Policy & Discourse","Policy Fellowship","Constitutional Heritage"],o=e==="All"?Cm:Cm.filter(c=>c.category===e);return h.jsx("section",{id:"ledger",className:"py-28 px-6 md:px-12 bg-obsidian-900 border-b border-brass/10 relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10",children:[h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center gap-3 mb-3",children:h.jsx("span",{className:"font-mono text-xs text-brass uppercase tracking-monumental",children:"SECTION 05 // ARCHIVAL PHOTO ARCHIVE"})}),h.jsxs("h2",{className:"font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50",children:["The Archival ",h.jsx("span",{className:"gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl",children:"ledger"})]})]}),h.jsx("p",{className:"font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider",children:"[ AUTHENTICATED HISTORICAL & INSTITUTIONAL PHOTOGRAPHY ]"})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10",children:[h.jsxs("span",{className:"flex items-center gap-1.5 font-mono text-xs text-brass uppercase mr-2",children:[h.jsx(Nv,{className:"w-3.5 h-3.5"}),"Category:"]}),r.map(c=>h.jsx("button",{onClick:()=>n(c),className:`px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-200 ${e===c?"bg-brass text-obsidian-950 font-bold border border-brass shadow-sm":"bg-obsidian-850 text-parchment-400 border border-white/5 hover:border-brass/40 hover:text-parchment-200"}`,children:c},c))]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map(c=>h.jsxs("div",{onClick:()=>s(c),className:"group cursor-pointer glass-card rounded-sm overflow-hidden border border-brass/20 hover:border-brass/60 transition-all duration-500 flex flex-col justify-between shadow-xl",children:[h.jsxs("div",{className:"relative aspect-[4/3] bg-obsidian-950 overflow-hidden",children:[h.jsx("img",{src:c.src,alt:c.title,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity"}),h.jsxs("div",{className:"absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-parchment-200 pointer-events-none",children:[h.jsxs("span",{className:"px-2 py-0.5 rounded bg-obsidian-950/80 backdrop-blur-sm border border-white/10 flex items-center gap-1",children:[h.jsx(Im,{className:"w-3 h-3 text-brass"}),h.jsx("span",{children:"VERIFIED"})]}),h.jsx("span",{className:"px-2 py-0.5 rounded bg-obsidian-950/80 backdrop-blur-sm border border-white/10 text-brass",children:c.date})]}),h.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",children:h.jsxs("span",{className:"px-4 py-2 rounded-sm bg-obsidian-950/90 border border-brass text-brass font-mono text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl",children:[h.jsx(zv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Inspect Archival Record"})]})})]}),h.jsxs("div",{className:"p-6 flex flex-col justify-between flex-grow",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 font-mono text-[11px] text-brass uppercase tracking-wider mb-2",children:[h.jsx(Ll,{className:"w-3 h-3"}),h.jsx("span",{children:c.location.split(",")[0]})]}),h.jsx("h3",{className:"font-cinzel text-lg font-bold text-parchment-50 group-hover:text-brass transition-colors mb-2",children:c.title}),h.jsx("p",{className:"font-sans text-xs text-parchment-300 leading-relaxed line-clamp-2",children:c.caption})]}),h.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-parchment-400",children:[h.jsx("span",{className:"uppercase",children:c.category}),h.jsx("span",{className:"text-brass group-hover:translate-x-0.5 transition-transform",children:"EXAMINE →"})]})]})]},c.id))})]})})}function m1({onOpenPaperAbstract:s}){return h.jsx("section",{id:"research",className:"py-28 px-6 md:px-12 bg-obsidian-950 border-b border-brass/10 relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10",children:[h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center gap-3 mb-3",children:h.jsx("span",{className:"font-mono text-xs text-brass uppercase tracking-monumental",children:"SECTION 06 // SCHOLARSHIP & ACADEMIA"})}),h.jsxs("h2",{className:"font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50",children:["Research & ",h.jsx("span",{className:"gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl",children:"academic"})," Foundations"]})]}),h.jsx("p",{className:"font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider",children:"[ PEER RESEARCH · AIMSCS UoH · TECHNICAL MATRIX ]"})]}),h.jsxs("div",{className:"glass-card p-8 md:p-12 rounded-sm border border-brass/30 mb-16 shadow-2xl relative overflow-hidden",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 font-mono text-xs text-parchment-400",children:[h.jsxs("span",{className:"flex items-center gap-2 text-brass font-bold uppercase tracking-wider",children:[h.jsx(Cv,{className:"w-4 h-4"}),"PEER-REVIEWED MONOGRAPH / ABSTRACT"]}),h.jsx("span",{children:"PUBLICATION YEAR: 2026 // INDIA AGRITECH ARCHIVES"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[h.jsxs("div",{className:"lg:col-span-8",children:[h.jsx("h3",{className:"font-cinzel text-2xl md:text-3xl font-bold text-parchment-50 mb-3 leading-snug",children:"Bhoomi: Building a Unified Digital Ecosystem for India's Agricultural Future"}),h.jsxs("p",{className:"font-mono text-xs text-brass mb-6",children:["Author: ",h.jsx("strong",{className:"text-parchment-100",children:"R. Sai Rithik Reddy"})," · B.Tech CSE (Data Science), Prof. C.R. Rao AIMSCS"]}),h.jsxs("div",{className:"space-y-4 text-sm text-parchment-300 leading-relaxed font-sans font-light",children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Abstract:"})," Modern agricultural productivity in developing agrarian economies suffers from critical information asymmetry. Smallholder farmers encounter hyper-localized challenges—such as variable soil micronutrient degradation, dynamic pest infestations, and volatile mandi spot-prices—which generic large language models fail to resolve accurately due to hallucination risks and dialectal boundaries."]}),h.jsxs("p",{children:["This monograph proposes ",h.jsx("em",{children:"Bhoomi"}),", a dual-layer architectural pipeline integrating domain-constrained Retrieval-Augmented Generation (RAG) over verified ICAR (Indian Council of Agricultural Research) corpora, paired with low-latency Indic speech-to-text and text-to-speech pipelines. The paper demonstrates that grounding foundation models in localized geospatial and agronomic vector databases reduces erroneous dosage recommendations by over 87% compared to general-purpose LLM baselines."]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4",children:[h.jsx("button",{onClick:s,className:"px-5 py-2.5 bg-brass text-obsidian-950 font-mono text-xs uppercase tracking-wider font-bold hover:bg-parchment-100 transition-colors rounded-sm",children:"Examine Technical Monograph"}),h.jsx("span",{className:"font-mono text-[11px] text-parchment-400",children:"Includes Architectural Schematics & Benchmarking Tables"})]})]}),h.jsxs("div",{className:"lg:col-span-4 p-6 rounded-sm bg-obsidian-950/80 border border-white/10 space-y-4",children:[h.jsx("span",{className:"font-cinzel text-xs font-bold uppercase tracking-widest text-parchment-100 block pb-2 border-b border-white/10",children:"Core Innovations In Monograph"}),h.jsxs("div",{className:"text-xs text-parchment-300 space-y-3",children:[h.jsxs("div",{className:"flex items-start gap-2.5",children:[h.jsx(Su,{className:"w-4 h-4 text-brass shrink-0 mt-0.5"}),h.jsx("span",{children:"Constrained domain embeddings over verified regional agronomist compendiums."})]}),h.jsxs("div",{className:"flex items-start gap-2.5",children:[h.jsx(Su,{className:"w-4 h-4 text-brass shrink-0 mt-0.5"}),h.jsx("span",{children:"Multilingual phonetic tokenization for vernacular Telugu & Hindi rural dialects."})]}),h.jsxs("div",{className:"flex items-start gap-2.5",children:[h.jsx(Su,{className:"w-4 h-4 text-brass shrink-0 mt-0.5"}),h.jsx("span",{children:"Zero-shot pest symptom visual classification heuristics."})]})]})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[h.jsxs("div",{className:"lg:col-span-5 glass-card p-8 rounded-sm border border-brass/25 flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 text-brass font-mono text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10",children:[h.jsx(Lv,{className:"w-4 h-4"}),h.jsx("span",{children:"Academic Pedigree"})]}),h.jsx("h3",{className:"font-cinzel text-2xl font-bold text-parchment-50 mb-1",children:xi.degree}),h.jsx("div",{className:"font-mono text-xs text-brass mb-4",children:xi.major}),h.jsxs("div",{className:"font-sans text-sm text-parchment-200 mb-6",children:[h.jsx("strong",{children:xi.institution}),h.jsx("p",{className:"text-xs text-parchment-400 mt-1",children:xi.campus})]}),h.jsxs("div",{className:"space-y-2 pt-4 border-t border-white/10",children:[h.jsx("span",{className:"font-cinzel text-xs font-bold uppercase tracking-widest text-parchment-300 block mb-2",children:"Key Curriculum Pillars"}),xi.focusAreas.map((e,n)=>h.jsxs("div",{className:"flex items-center gap-2 text-xs text-parchment-300",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brass shrink-0"}),h.jsx("span",{children:e})]},n))]})]}),h.jsx("div",{className:"pt-6 mt-6 border-t border-white/10 font-mono text-[10px] text-parchment-400",children:"AFFILIATED WITH UNIVERSITY OF HYDERABAD (UoH) CAMPUS"})]}),h.jsxs("div",{className:"lg:col-span-7 glass-card p-8 rounded-sm border border-brass/25 flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 text-brass font-mono text-xs uppercase tracking-wider mb-6 pb-2 border-b border-white/10",children:[h.jsx(Uv,{className:"w-4 h-4"}),h.jsx("span",{children:"Domain Capabilities & Technical Matrix"})]}),h.jsx("div",{className:"space-y-6",children:nv.map((e,n)=>h.jsxs("div",{children:[h.jsx("h4",{className:"font-cinzel text-sm font-bold text-parchment-100 uppercase tracking-wider mb-2.5",children:e.domain}),h.jsx("div",{className:"flex flex-wrap gap-2",children:e.skills.map((r,o)=>h.jsx("span",{className:"px-3 py-1 bg-obsidian-950 text-parchment-300 font-mono text-xs rounded-sm border border-white/10 hover:border-brass/40 transition-colors",children:r},o))})]},n))})]}),h.jsx("div",{className:"pt-6 mt-6 border-t border-white/10 font-mono text-[10px] text-parchment-400",children:"SYNTHESIS OF COMPUTATION, PUBLIC POLICY & VENTURE ACCELERATION"})]})]})]})})}const g1=({className:s})=>h.jsx("svg",{className:s,viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"})}),x1=({className:s})=>h.jsx("svg",{className:s,viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})});function v1({onOpenDossier:s}){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return h.jsxs("footer",{className:"bg-obsidian-950 border-t border-brass/20 text-parchment-300 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden",children:[h.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brass/5 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10",children:[h.jsxs("div",{className:"lg:col-span-6 flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[h.jsx("div",{className:"w-10 h-10 rounded-sm border border-brass bg-obsidian-900 flex items-center justify-center font-cinzel text-base font-bold text-brass",children:jt.monogram}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-cinzel text-lg font-bold text-parchment-50 uppercase tracking-widest",children:jt.name}),h.jsx("p",{className:"font-mono text-xs text-brass",children:jt.title})]})]}),h.jsx("p",{className:"font-editorial text-xl text-parchment-200 max-w-lg leading-relaxed italic mb-6",children:"“Building at the intersection of technology, institutional ideas, and relentless execution.”"}),h.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-parchment-400",children:[h.jsx(Ll,{className:"w-4 h-4 text-brass"}),h.jsxs("span",{children:[jt.location," · ",jt.coordinates]})]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/5 font-mono text-xs text-parchment-400",children:["AFFILIATION: ",jt.institution]})]}),h.jsxs("div",{className:"lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8",children:[h.jsxs("div",{children:[h.jsx("h4",{className:"font-cinzel text-xs font-bold uppercase tracking-widest text-brass mb-4 pb-1 border-b border-white/10",children:"Direct Channels"}),h.jsxs("ul",{className:"space-y-3 font-mono text-xs text-parchment-300",children:[h.jsx("li",{children:h.jsxs("a",{href:`mailto:${jt.socials.email}`,className:"flex items-center gap-2.5 hover:text-brass transition-colors group",children:[h.jsx(Lm,{className:"w-4 h-4 text-brass"}),h.jsx("span",{className:"truncate",children:jt.socials.email})]})}),h.jsx("li",{children:h.jsxs("a",{href:jt.socials.linkedin,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2.5 hover:text-brass transition-colors",children:[h.jsx(g1,{className:"w-4 h-4 text-brass"}),h.jsx("span",{children:"LinkedIn Network"})]})}),h.jsx("li",{children:h.jsxs("a",{href:jt.socials.github,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2.5 hover:text-brass transition-colors",children:[h.jsx(x1,{className:"w-4 h-4 text-brass"}),h.jsx("span",{children:"GitHub Codebase"})]})})]}),h.jsx("div",{className:"mt-6",children:h.jsx("button",{onClick:s,className:"w-full py-2.5 px-4 bg-brass/15 hover:bg-brass text-brass hover:text-obsidian-950 border border-brass/40 rounded-sm font-mono text-xs uppercase tracking-wider font-semibold transition-all",children:"Access Full Dossier"})})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"font-cinzel text-xs font-bold uppercase tracking-widest text-brass mb-4 pb-1 border-b border-white/10",children:"Architectural Index"}),h.jsxs("ul",{className:"space-y-2.5 font-mono text-xs text-parchment-400",children:[h.jsx("li",{children:h.jsx("a",{href:"#manifesto",className:"hover:text-brass transition-colors",children:"01. Narrative Manifesto"})}),h.jsx("li",{children:h.jsx("a",{href:"#policy",className:"hover:text-brass transition-colors",children:"02. Policy & Parliament"})}),h.jsx("li",{children:h.jsx("a",{href:"#ventures",className:"hover:text-brass transition-colors",children:"03. Bhoomi & Ventures"})}),h.jsx("li",{children:h.jsx("a",{href:"#leadership",className:"hover:text-brass transition-colors",children:"04. Cultural Secretariat"})}),h.jsx("li",{children:h.jsx("a",{href:"#ledger",className:"hover:text-brass transition-colors",children:"05. Archival Ledger"})}),h.jsx("li",{children:h.jsx("a",{href:"#research",className:"hover:text-brass transition-colors",children:"06. Research & Academia"})})]})]})]})]}),h.jsxs("div",{className:"pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-parchment-400",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),h.jsx("span",{children:"HYDERABAD HQ · RAJAMURI SAI RITHIK REDDY © 2026"})]}),h.jsxs("div",{className:"flex items-center gap-6",children:[h.jsx("span",{className:"hidden sm:inline",children:"ARCHITECTURAL EDITORIAL DESIGN"}),h.jsxs("button",{onClick:e,className:"flex items-center gap-1.5 text-brass hover:text-parchment-100 transition-colors uppercase tracking-wider",children:[h.jsx("span",{children:"Back To Zenith"}),h.jsx(hv,{className:"w-3.5 h-3.5"})]})]})]})]})]})}function _1({isOpen:s,onClose:e,selectedExhibit:n,selectedVenture:r,isFullDossier:o}){return $t.useEffect(()=>{const c=d=>{d.key==="Escape"&&e()};return s&&(document.body.style.overflow="hidden",window.addEventListener("keydown",c)),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",c)}},[s,e]),s?h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-obsidian-950/90 backdrop-blur-xl animate-fadeIn",children:h.jsxs("div",{className:"relative w-full max-w-5xl max-h-[90vh] bg-obsidian-900 border border-brass/40 rounded-sm shadow-2xl flex flex-col overflow-hidden",children:[h.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-white/10 bg-obsidian-950 font-mono text-xs text-parchment-300",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-brass"}),h.jsx("span",{className:"uppercase text-brass font-bold tracking-wider",children:o?"OFFICIAL EXECUTIVE PROFILE // DOSSIER NO. 01":n?"ARCHIVAL RECORD INSPECTION":"TECHNICAL VENTURE DOSSIER"})]}),h.jsx("button",{onClick:e,className:"p-1 text-parchment-400 hover:text-brass transition-colors","aria-label":"Close modal",children:h.jsx(Dm,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"overflow-y-auto p-6 md:p-10 space-y-8",children:[o&&h.jsxs("div",{className:"space-y-8",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"font-cinzel text-3xl md:text-4xl font-bold text-parchment-50",children:jt.name}),h.jsxs("p",{className:"font-mono text-xs text-brass mt-1",children:[jt.title," · ",jt.location]}),h.jsxs("p",{className:"text-xs text-parchment-400 font-mono mt-1",children:["AFFILIATION: ",jt.institution]})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[h.jsxs("a",{href:"/dossier.html",target:"_blank",rel:"noreferrer",className:"px-4 py-2 bg-obsidian-850 hover:bg-brass text-parchment-200 hover:text-obsidian-950 border border-brass/40 font-mono text-xs uppercase font-bold tracking-wider rounded-sm transition-colors flex items-center gap-2",children:[h.jsx(wv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Print / Export PDF"})]}),h.jsxs("a",{href:`mailto:${jt.socials.email}`,className:"px-4 py-2 bg-brass text-obsidian-950 font-mono text-xs uppercase font-bold tracking-wider rounded-sm hover:bg-parchment-100 transition-colors flex items-center gap-2",children:[h.jsx(Lm,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Direct Inquiries"})]})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-cinzel text-base font-bold uppercase tracking-widest text-brass mb-2",children:"Executive Abstract"}),h.jsxs("p",{className:"font-sans text-sm text-parchment-200 leading-relaxed",children:[jt.bio.lead," ",jt.bio.body]})]}),h.jsxs("div",{className:"p-6 rounded-sm bg-obsidian-950 border border-white/10",children:[h.jsx("h3",{className:"font-cinzel text-sm font-bold uppercase tracking-widest text-brass mb-3",children:"Academic Credentials"}),h.jsxs("div",{className:"font-sans",children:[h.jsxs("div",{className:"text-base font-semibold text-parchment-100",children:[xi.degree," — ",xi.major]}),h.jsxs("div",{className:"text-xs text-brass font-mono mt-0.5",children:[xi.institution," (",xi.campus,")"]}),h.jsx("div",{className:"mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-parchment-300",children:xi.focusAreas.map((c,d)=>h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brass/60"}),h.jsx("span",{children:c})]},d))})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-cinzel text-base font-bold uppercase tracking-widest text-brass mb-4",children:"Institutional Leadership Record"}),h.jsx("div",{className:"space-y-4",children:_n.map(c=>h.jsxs("div",{className:"p-5 rounded-sm bg-obsidian-950 border border-white/10",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between mb-2",children:[h.jsx("span",{className:"font-cinzel text-base font-bold text-parchment-50",children:c.role}),h.jsx("span",{className:"font-mono text-xs text-brass",children:c.period})]}),h.jsx("div",{className:"font-mono text-xs text-parchment-400 mb-3",children:c.organization}),h.jsx("p",{className:"text-xs text-parchment-300 leading-relaxed mb-3",children:c.summary}),h.jsx("div",{className:"space-y-1.5",children:c.responsibilities.map((d,f)=>h.jsxs("div",{className:"flex items-start gap-2 text-xs text-parchment-300",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brass/60 mt-1 shrink-0"}),h.jsx("span",{children:d})]},f))})]},c.id))})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-cinzel text-base font-bold uppercase tracking-widest text-brass mb-4",children:"Engineering Ventures & Systems Portfolio"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Cl.map(c=>h.jsxs("div",{className:"p-4 rounded-sm bg-obsidian-950 border border-white/10",children:[h.jsx("div",{className:"font-cinzel text-sm font-bold text-parchment-100 mb-1",children:c.title}),h.jsxs("div",{className:"font-mono text-[10px] text-brass mb-2",children:[c.role," · ",c.stage]}),h.jsx("p",{className:"text-xs text-parchment-300 line-clamp-3",children:c.summary})]},c.id))})]})]}),n&&h.jsxs("div",{className:"space-y-6",children:[h.jsx("div",{className:"aspect-[16/10] max-h-[60vh] rounded-sm overflow-hidden bg-obsidian-950 border border-brass/30 flex items-center justify-center",children:h.jsx("img",{src:n.src,alt:n.title,className:"w-full h-full object-contain"})}),h.jsxs("div",{className:"p-6 rounded-sm bg-obsidian-950 border border-white/10 space-y-4",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-cinzel text-xl md:text-2xl font-bold text-parchment-50",children:n.title}),h.jsxs("p",{className:"font-mono text-xs text-brass mt-1 flex items-center gap-1.5",children:[h.jsx(Ll,{className:"w-3.5 h-3.5"}),n.location]})]}),h.jsxs("span",{className:"font-mono text-xs text-parchment-400 bg-obsidian-850 px-3 py-1 rounded border border-white/5",children:["ARCHIVAL DATE: ",n.date||"2026"]})]}),h.jsx("p",{className:"font-sans text-sm text-parchment-200 leading-relaxed",children:n.caption}),n.details&&h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs",children:Object.entries(n.details).map(([c,d])=>h.jsxs("div",{children:[h.jsx("span",{className:"text-brass uppercase block text-[10px]",children:c}),h.jsx("span",{className:"text-parchment-300",children:d})]},c))})]})]}),r&&h.jsxs("div",{className:"space-y-6",children:[h.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10",children:h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-xs text-brass uppercase",children:r.category}),h.jsx("h3",{className:"font-cinzel text-2xl md:text-3xl font-bold text-parchment-50 mt-1",children:r.title}),h.jsxs("p",{className:"font-mono text-xs text-parchment-400",children:[r.role," · ",r.stage]})]})}),r.brandImage&&h.jsx("div",{className:"rounded-sm overflow-hidden border border-brass/30",children:h.jsx("img",{src:r.brandImage,alt:r.title,className:"w-full h-auto max-h-80 object-cover"})}),h.jsx("p",{className:"font-sans text-sm text-parchment-200 leading-relaxed",children:r.description}),r.id==="bhoomi"&&h.jsxs("div",{className:"p-6 rounded-sm bg-obsidian-950 border border-white/10 space-y-4",children:[h.jsx("span",{className:"font-cinzel text-xs font-bold uppercase tracking-widest text-brass block",children:"Institutional Incorporation & Regulatory Proof"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-center",children:[h.jsx("div",{className:"rounded border border-white/10 overflow-hidden",children:h.jsx("img",{src:r.filingImage,alt:"MCA Incorporation Filing",className:"w-full h-auto"})}),h.jsxs("div",{className:"text-xs text-parchment-300 space-y-2",children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Corporate Registry:"})," Duly filed under the Ministry of Corporate Affairs (MCA), Government of India."]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Incubation Track:"})," Selected for the Antler India Agritech Pitch Cohort."]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Paper Title:"})," ",h.jsxs("em",{children:['"',r.paperTitle,'"']})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Author:"})," ",r.author]})]})]})]}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:r.metrics.map((c,d)=>h.jsxs("div",{className:"p-3 rounded-sm bg-obsidian-950 border border-white/10",children:[h.jsx("div",{className:"font-mono text-[10px] text-parchment-400 uppercase",children:c.label}),h.jsx("div",{className:"font-mono text-sm font-bold text-brass mt-0.5",children:c.value})]},d))}),h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-xs text-parchment-400 block mb-2 uppercase",children:"Engineered With"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:r.techStack.map((c,d)=>h.jsx("span",{className:"px-3 py-1 bg-obsidian-950 text-parchment-300 font-mono text-xs rounded border border-white/10",children:c},d))})]})]})]}),h.jsxs("div",{className:"px-6 py-4 border-t border-white/10 bg-obsidian-950 flex items-center justify-between font-mono text-[11px] text-parchment-400",children:[h.jsx("span",{children:"RAJAMURI SAI RITHIK REDDY ARCHIVES"}),h.jsx("button",{onClick:e,className:"px-4 py-1.5 bg-obsidian-850 hover:bg-brass text-parchment-200 hover:text-obsidian-950 font-mono text-xs uppercase tracking-wider rounded border border-white/10 transition-colors",children:"Close Window"})]})]})}):null}function y1(){const[s,e]=$t.useState(0),[n,r]=$t.useState({isOpen:!1,selectedExhibit:null,selectedVenture:null,isFullDossier:!1});$t.useEffect(()=>{const g=()=>{const v=document.documentElement.scrollHeight-window.innerHeight;v>0&&e(window.scrollY/v*100)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const o=()=>{r({isOpen:!0,selectedExhibit:null,selectedVenture:null,isFullDossier:!0})},c=g=>{r({isOpen:!0,selectedExhibit:g,selectedVenture:null,isFullDossier:!1})},d=g=>{r({isOpen:!0,selectedExhibit:null,selectedVenture:g,isFullDossier:!1})},f=()=>{const g=Cl.find(v=>v.id==="bhoomi");d(g)},m=()=>{r({isOpen:!1,selectedExhibit:null,selectedVenture:null,isFullDossier:!1})};return h.jsxs("div",{className:"min-h-screen bg-obsidian-950 text-parchment-100 font-sans selection:bg-brass selection:text-obsidian-950",children:[h.jsx("div",{className:"fixed top-0 left-0 h-[2px] bg-gradient-to-r from-brass via-institutional-gold to-brass-light z-[100] transition-all duration-100",style:{width:`${s}%`}}),h.jsx(Qv,{onOpenDossier:o}),h.jsxs("main",{children:[h.jsx(c1,{onOpenDossier:o}),h.jsx(u1,{}),h.jsx(d1,{onSelectExhibit:c}),h.jsx(f1,{onOpenVentureModal:d}),h.jsx(h1,{}),h.jsx(p1,{onSelectExhibit:c}),h.jsx(m1,{onOpenPaperAbstract:f})]}),h.jsx(v1,{onOpenDossier:o}),h.jsx(_1,{isOpen:n.isOpen,onClose:m,selectedExhibit:n.selectedExhibit,selectedVenture:n.selectedVenture,isFullDossier:n.isFullDossier})]})}tv.createRoot(document.getElementById("root")).render(h.jsx(qx.StrictMode,{children:h.jsx(y1,{})}));
