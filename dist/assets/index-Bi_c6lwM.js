(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function yE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var gd={exports:{}},La={},yd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function _E(){if(_g)return Re;_g=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),x=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,X={};function F(O,q,de){this.props=O,this.context=q,this.refs=X,this.updater=de||B}F.prototype.isReactComponent={},F.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},F.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Q(){}Q.prototype=F.prototype;function J(O,q,de){this.props=O,this.context=q,this.refs=X,this.updater=de||B}var ne=J.prototype=new Q;ne.constructor=J,W(ne,F.prototype),ne.isPureReactComponent=!0;var me=Array.isArray,Ee=Object.prototype.hasOwnProperty,Ae={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(O,q,de){var xe,Ce={},be=null,je=null;if(q!=null)for(xe in q.ref!==void 0&&(je=q.ref),q.key!==void 0&&(be=""+q.key),q)Ee.call(q,xe)&&!N.hasOwnProperty(xe)&&(Ce[xe]=q[xe]);var Fe=arguments.length-2;if(Fe===1)Ce.children=de;else if(1<Fe){for(var He=Array(Fe),wt=0;wt<Fe;wt++)He[wt]=arguments[wt+2];Ce.children=He}if(O&&O.defaultProps)for(xe in Fe=O.defaultProps,Fe)Ce[xe]===void 0&&(Ce[xe]=Fe[xe]);return{$$typeof:r,type:O,key:be,ref:je,props:Ce,_owner:Ae.current}}function C(O,q){return{$$typeof:r,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function b(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(de){return q[de]})}var V=/\/+/g;function R(O,q){return typeof O=="object"&&O!==null&&O.key!=null?b(""+O.key):q.toString(36)}function Ze(O,q,de,xe,Ce){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var je=!1;if(O===null)je=!0;else switch(be){case"string":case"number":je=!0;break;case"object":switch(O.$$typeof){case r:case e:je=!0}}if(je)return je=O,Ce=Ce(je),O=xe===""?"."+R(je,0):xe,me(Ce)?(de="",O!=null&&(de=O.replace(V,"$&/")+"/"),Ze(Ce,q,de,"",function(wt){return wt})):Ce!=null&&(P(Ce)&&(Ce=C(Ce,de+(!Ce.key||je&&je.key===Ce.key?"":(""+Ce.key).replace(V,"$&/")+"/")+O)),q.push(Ce)),1;if(je=0,xe=xe===""?".":xe+":",me(O))for(var Fe=0;Fe<O.length;Fe++){be=O[Fe];var He=xe+R(be,Fe);je+=Ze(be,q,de,He,Ce)}else if(He=A(O),typeof He=="function")for(O=He.call(O),Fe=0;!(be=O.next()).done;)be=be.value,He=xe+R(be,Fe++),je+=Ze(be,q,de,He,Ce);else if(be==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return je}function ft(O,q,de){if(O==null)return O;var xe=[],Ce=0;return Ze(O,xe,"","",function(be){return q.call(de,be,Ce++)}),xe}function se(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(de){(O._status===0||O._status===-1)&&(O._status=1,O._result=de)},function(de){(O._status===0||O._status===-1)&&(O._status=2,O._result=de)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var Te={current:null},ee={transition:null},pe={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ae};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:ft,forEach:function(O,q,de){ft(O,function(){q.apply(this,arguments)},de)},count:function(O){var q=0;return ft(O,function(){q++}),q},toArray:function(O){return ft(O,function(q){return q})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=F,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=J,Re.StrictMode=i,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Re.act=ie,Re.cloneElement=function(O,q,de){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var xe=W({},O.props),Ce=O.key,be=O.ref,je=O._owner;if(q!=null){if(q.ref!==void 0&&(be=q.ref,je=Ae.current),q.key!==void 0&&(Ce=""+q.key),O.type&&O.type.defaultProps)var Fe=O.type.defaultProps;for(He in q)Ee.call(q,He)&&!N.hasOwnProperty(He)&&(xe[He]=q[He]===void 0&&Fe!==void 0?Fe[He]:q[He])}var He=arguments.length-2;if(He===1)xe.children=de;else if(1<He){Fe=Array(He);for(var wt=0;wt<He;wt++)Fe[wt]=arguments[wt+2];xe.children=Fe}return{$$typeof:r,type:O.type,key:Ce,ref:be,props:xe,_owner:je}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Re.createElement=S,Re.createFactory=function(O){var q=S.bind(null,O);return q.type=O,q},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:p,render:O}},Re.isValidElement=P,Re.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:se}},Re.memo=function(O,q){return{$$typeof:_,type:O,compare:q===void 0?null:q}},Re.startTransition=function(O){var q=ee.transition;ee.transition={};try{O()}finally{ee.transition=q}},Re.unstable_act=ie,Re.useCallback=function(O,q){return Te.current.useCallback(O,q)},Re.useContext=function(O){return Te.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Te.current.useDeferredValue(O)},Re.useEffect=function(O,q){return Te.current.useEffect(O,q)},Re.useId=function(){return Te.current.useId()},Re.useImperativeHandle=function(O,q,de){return Te.current.useImperativeHandle(O,q,de)},Re.useInsertionEffect=function(O,q){return Te.current.useInsertionEffect(O,q)},Re.useLayoutEffect=function(O,q){return Te.current.useLayoutEffect(O,q)},Re.useMemo=function(O,q){return Te.current.useMemo(O,q)},Re.useReducer=function(O,q,de){return Te.current.useReducer(O,q,de)},Re.useRef=function(O){return Te.current.useRef(O)},Re.useState=function(O){return Te.current.useState(O)},Re.useSyncExternalStore=function(O,q,de){return Te.current.useSyncExternalStore(O,q,de)},Re.useTransition=function(){return Te.current.useTransition()},Re.version="18.3.1",Re}var vg;function ff(){return vg||(vg=1,yd.exports=_E()),yd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function vE(){if(wg)return La;wg=1;var r=ff(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,_){var T,x={},A=null,B=null;_!==void 0&&(A=""+_),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(B=g.ref);for(T in g)i.call(g,T)&&!u.hasOwnProperty(T)&&(x[T]=g[T]);if(p&&p.defaultProps)for(T in g=p.defaultProps,g)x[T]===void 0&&(x[T]=g[T]);return{$$typeof:e,type:p,key:A,ref:B,props:x,_owner:o.current}}return La.Fragment=t,La.jsx=h,La.jsxs=h,La}var Eg;function wE(){return Eg||(Eg=1,gd.exports=vE()),gd.exports}var w=wE(),Ue=ff();const Yu=yE(Ue);var Nu={},_d={exports:{}},en={},vd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function EE(){return Tg||(Tg=1,(function(r){function e(ee,pe){var ie=ee.length;ee.push(pe);e:for(;0<ie;){var O=ie-1>>>1,q=ee[O];if(0<o(q,pe))ee[O]=pe,ee[ie]=q,ie=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var pe=ee[0],ie=ee.pop();if(ie!==pe){ee[0]=ie;e:for(var O=0,q=ee.length,de=q>>>1;O<de;){var xe=2*(O+1)-1,Ce=ee[xe],be=xe+1,je=ee[be];if(0>o(Ce,ie))be<q&&0>o(je,Ce)?(ee[O]=je,ee[be]=ie,O=be):(ee[O]=Ce,ee[xe]=ie,O=xe);else if(be<q&&0>o(je,ie))ee[O]=je,ee[be]=ie,O=be;else break e}}return pe}function o(ee,pe){var ie=ee.sortIndex-pe.sortIndex;return ie!==0?ie:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],_=[],T=1,x=null,A=3,B=!1,W=!1,X=!1,F=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(ee){for(var pe=t(_);pe!==null;){if(pe.callback===null)i(_);else if(pe.startTime<=ee)i(_),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(_)}}function me(ee){if(X=!1,ne(ee),!W)if(t(g)!==null)W=!0,se(Ee);else{var pe=t(_);pe!==null&&Te(me,pe.startTime-ee)}}function Ee(ee,pe){W=!1,X&&(X=!1,Q(S),S=-1),B=!0;var ie=A;try{for(ne(pe),x=t(g);x!==null&&(!(x.expirationTime>pe)||ee&&!b());){var O=x.callback;if(typeof O=="function"){x.callback=null,A=x.priorityLevel;var q=O(x.expirationTime<=pe);pe=r.unstable_now(),typeof q=="function"?x.callback=q:x===t(g)&&i(g),ne(pe)}else i(g);x=t(g)}if(x!==null)var de=!0;else{var xe=t(_);xe!==null&&Te(me,xe.startTime-pe),de=!1}return de}finally{x=null,A=ie,B=!1}}var Ae=!1,N=null,S=-1,C=5,P=-1;function b(){return!(r.unstable_now()-P<C)}function V(){if(N!==null){var ee=r.unstable_now();P=ee;var pe=!0;try{pe=N(!0,ee)}finally{pe?R():(Ae=!1,N=null)}}else Ae=!1}var R;if(typeof J=="function")R=function(){J(V)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,ft=Ze.port2;Ze.port1.onmessage=V,R=function(){ft.postMessage(null)}}else R=function(){F(V,0)};function se(ee){N=ee,Ae||(Ae=!0,R())}function Te(ee,pe){S=F(function(){ee(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){W||B||(W=!0,se(Ee))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(A){case 1:case 2:case 3:var pe=3;break;default:pe=A}var ie=A;A=pe;try{return ee()}finally{A=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ie=A;A=ee;try{return pe()}finally{A=ie}},r.unstable_scheduleCallback=function(ee,pe,ie){var O=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?O+ie:O):ie=O,ee){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ie+q,ee={id:T++,callback:pe,priorityLevel:ee,startTime:ie,expirationTime:q,sortIndex:-1},ie>O?(ee.sortIndex=ie,e(_,ee),t(g)===null&&ee===t(_)&&(X?(Q(S),S=-1):X=!0,Te(me,ie-O))):(ee.sortIndex=q,e(g,ee),W||B||(W=!0,se(Ee))),ee},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(ee){var pe=A;return function(){var ie=A;A=pe;try{return ee.apply(this,arguments)}finally{A=ie}}}})(wd)),wd}var Ig;function TE(){return Ig||(Ig=1,vd.exports=EE()),vd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function IE(){if(Sg)return en;Sg=1;var r=ff(),e=TE();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function u(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},x={};function A(n){return g.call(x,n)?!0:g.call(T,n)?!1:_.test(n)?x[n]=!0:(T[n]=!0,!1)}function B(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,s,a,c){if(s===null||typeof s>"u"||B(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function X(n,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){F[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];F[s]=new X(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){F[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){F[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){F[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){F[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){F[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){F[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){F[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function J(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(Q,J);F[s]=new X(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(Q,J);F[s]=new X(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(Q,J);F[s]=new X(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){F[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),F.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){F[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ne(n,s,a,c){var d=F.hasOwnProperty(s)?F[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(W(s,a,d,c)&&(a=null),c||d===null?A(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var me=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),b=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,O;function q(n){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var de=!1;function xe(n,s){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(n,[],s)}else{try{s.call()}catch(U){c=U}n.call(s.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,I=m.length-1;1<=v&&0<=I&&d[v]!==m[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==m[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==m[I]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=I);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Ce(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=xe(n.type,!1),n;case 11:return n=xe(n.type.render,!1),n;case 1:return n=xe(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ae:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case Ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case b:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case V:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ft:return s=n.displayName||null,s!==null?s:be(n.type)||"Memo";case se:s=n._payload,n=n._init;try{return be(n(s))}catch{}}return null}function je(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(n){var s=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function mr(n){n._valueTracker||(n._valueTracker=wt(n))}function Ti(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Br(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ds(n,s){var a=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ii(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function $o(n,s){s=s.checked,s!=null&&ne(n,"checked",s,!1)}function qo(n,s){$o(n,s);var a=Fe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Si(n,s.type,a):s.hasOwnProperty("defaultValue")&&Si(n,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function gl(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Si(n,s,a){(s!=="number"||Br(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gr=Array.isArray;function yr(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Ho(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ai(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Fe(a)}}function xi(n,s){var a=Fe(s.value),c=Fe(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Wo(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function pt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?pt(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _r,Go=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=_r.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function $r(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vs=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(n){Vs.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),bs[s]=bs[n]})});function Ko(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||bs.hasOwnProperty(n)&&bs[n]?(""+s).trim():s+"px"}function Qo(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Ko(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Yo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(n,s){if(s){if(Yo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Jo(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Os=null;function Ci(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ri=null,pn=null,Kn=null;function ki(n){if(n=Ta(n)){if(typeof Ri!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Wl(s),Ri(n.stateNode,n.type,s))}}function Qn(n){pn?Kn?Kn.push(n):Kn=[n]:pn=n}function Zo(){if(pn){var n=pn,s=Kn;if(Kn=pn=null,ki(n),s)for(n=0;n<s.length;n++)ki(s[n])}}function Ms(n,s){return n(s)}function ea(){}var vr=!1;function ta(n,s,a){if(vr)return n(s,a);vr=!0;try{return Ms(n,s,a)}finally{vr=!1,(pn!==null||Kn!==null)&&(ea(),Zo())}}function st(n,s){var a=n.stateNode;if(a===null)return null;var c=Wl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Pi=!1;if(p)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Pi=!1}function Ls(n,s,a,c,d,m,v,I,k){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(K){this.onError(K)}}var js=!1,Ni=null,Rn=!1,na=null,qc={onError:function(n){js=!0,Ni=n}};function Di(n,s,a,c,d,m,v,I,k){js=!1,Ni=null,Ls.apply(qc,arguments)}function yl(n,s,a,c,d,m,v,I,k){if(Di.apply(this,arguments),js){if(js){var U=Ni;js=!1,Ni=null}else throw Error(t(198));Rn||(Rn=!0,na=U)}}function kn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Fs(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Pn(n){if(kn(n)!==n)throw Error(t(188))}function _l(n){var s=n.alternate;if(!s){if(s=kn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Pn(d),n;if(m===c)return Pn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=m;break}if(I===c){v=!0,c=d,a=m;break}I=I.sibling}if(!v){for(I=m.child;I;){if(I===a){v=!0,a=m,c=d;break}if(I===c){v=!0,c=m,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function ra(n){return n=_l(n),n!==null?bi(n):null}function bi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=bi(n);if(s!==null)return s;n=n.sibling}return null}var Vi=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,vl=e.unstable_shouldYield,Hc=e.unstable_requestPaint,We=e.unstable_now,wl=e.unstable_getCurrentPriorityLevel,Us=e.unstable_ImmediatePriority,qr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,ia=e.unstable_LowPriority,El=e.unstable_IdlePriority,zs=null,sn=null;function Tl(n){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(zs,n,void 0,(n.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Sl,oa=Math.log,Il=Math.LN2;function Sl(n){return n>>>=0,n===0?32:31-(oa(n)/Il|0)|0}var Oi=64,Mi=4194304;function Hr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bs(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Hr(I):(m&=v,m!==0&&(c=Hr(m)))}else v=a&~d,v!==0?c=Hr(v):m!==0&&(c=Hr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-$t(s),d=1<<a,c|=n[a],s&=~d;return c}function Wc(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-$t(m),I=1<<v,k=d[v];k===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Wc(I,s)):k<=s&&(n.expiredLanes|=I),m&=~I}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $s(){var n=Oi;return Oi<<=1,(Oi&4194240)===0&&(Oi=64),n}function Wr(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Gr(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-$t(s),n[s]=a}function $e(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-$t(a),m=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Kr(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-$t(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var De=0;function Qr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Al,Li,xl,Cl,Rl,aa=!1,Yn=[],Ct=null,Nn=null,Dn=null,Yr=new Map,gn=new Map,Xn=[],Gc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kl(n,s){switch(n){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Yr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Gt(n,s,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ta(s),s!==null&&Li(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function Kc(n,s,a,c,d){switch(s){case"focusin":return Ct=Gt(Ct,n,s,a,c,d),!0;case"dragenter":return Nn=Gt(Nn,n,s,a,c,d),!0;case"mouseover":return Dn=Gt(Dn,n,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Yr.set(m,Gt(Yr.get(m)||null,n,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,gn.set(m,Gt(gn.get(m)||null,n,s,a,c,d)),!0}return!1}function Pl(n){var s=Ks(n.target);if(s!==null){var a=kn(s);if(a!==null){if(s=a.tag,s===13){if(s=Fs(a),s!==null){n.blockedOn=s,Rl(n.priority,function(){xl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Er(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=ji(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Os=c,a.target.dispatchEvent(c),Os=null}else return s=Ta(a),s!==null&&Li(s),n.blockedOn=a,!1;s.shift()}return!0}function qs(n,s,a){Er(n)&&a.delete(s)}function Nl(){aa=!1,Ct!==null&&Er(Ct)&&(Ct=null),Nn!==null&&Er(Nn)&&(Nn=null),Dn!==null&&Er(Dn)&&(Dn=null),Yr.forEach(qs),gn.forEach(qs)}function bn(n,s){n.blockedOn===s&&(n.blockedOn=null,aa||(aa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nl)))}function Vn(n){function s(d){return bn(d,n)}if(0<Yn.length){bn(Yn[0],n);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ct!==null&&bn(Ct,n),Nn!==null&&bn(Nn,n),Dn!==null&&bn(Dn,n),Yr.forEach(s),gn.forEach(s),a=0;a<Xn.length;a++)c=Xn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Xn.length&&(a=Xn[0],a.blockedOn===null);)Pl(a),a.blockedOn===null&&Xn.shift()}var Tr=me.ReactCurrentBatchConfig,Xr=!0;function Xe(n,s,a,c){var d=De,m=Tr.transition;Tr.transition=null;try{De=1,la(n,s,a,c)}finally{De=d,Tr.transition=m}}function Qc(n,s,a,c){var d=De,m=Tr.transition;Tr.transition=null;try{De=4,la(n,s,a,c)}finally{De=d,Tr.transition=m}}function la(n,s,a,c){if(Xr){var d=ji(n,s,a,c);if(d===null)oh(n,s,c,Hs,a),kl(n,c);else if(Kc(d,n,s,a,c))c.stopPropagation();else if(kl(n,c),s&4&&-1<Gc.indexOf(n)){for(;d!==null;){var m=Ta(d);if(m!==null&&Al(m),m=ji(n,s,a,c),m===null&&oh(n,s,c,Hs,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else oh(n,s,c,null,a)}}var Hs=null;function ji(n,s,a,c){if(Hs=null,n=Ci(c),n=Ks(n),n!==null)if(s=kn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Fs(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Hs=n,null}function ua(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wl()){case Us:return 1;case qr:return 4;case mn:case ia:return 16;case El:return 536870912;default:return 16}default:return 16}}var an=null,Fi=null,Kt=null;function ca(){if(Kt)return Kt;var n,s=Fi,a=s.length,c,d="value"in an?an.value:an.textContent,m=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function Ui(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Jn(){return!0}function ha(){return!1}function Rt(n){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Jn:ha,this.isPropagationStopped=ha,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=Rt(On),Zn=ie({},On,{view:0,detail:0}),Yc=Rt(Zn),Bi,Ir,Jr,Ws=ie({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Jr&&(Jr&&n.type==="mousemove"?(Bi=n.screenX-Jr.screenX,Ir=n.screenY-Jr.screenY):Ir=Bi=0,Jr=n),Bi)},movementY:function(n){return"movementY"in n?n.movementY:Ir}}),$i=Rt(Ws),da=ie({},Ws,{dataTransfer:0}),Dl=Rt(da),qi=ie({},Zn,{relatedTarget:0}),Hi=Rt(qi),bl=ie({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Rt(bl),Vl=ie({},On,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ol=Rt(Vl),Ml=ie({},On,{data:0}),fa=Rt(Ml),Wi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ll={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jl(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Ll[n])?!!s[n]:!1}function er(){return jl}var l=ie({},Zn,{key:function(n){if(n.key){var s=Wi[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Ui(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(n){return n.type==="keypress"?Ui(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ui(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Rt(l),y=ie({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Rt(y),M=ie({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),z=Rt(M),te=ie({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=Rt(te),gt=ie({},Ws,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=Rt(gt),Et=[9,13,27,32],lt=p&&"CompositionEvent"in window,yn=null;p&&"documentMode"in document&&(yn=document.documentMode);var ln=p&&"TextEvent"in window&&!yn,Gs=p&&(!lt||yn&&8<yn&&11>=yn),Gi=" ",dp=!1;function fp(n,s){switch(n){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ki=!1;function pw(n,s){switch(n){case"compositionend":return pp(s);case"keypress":return s.which!==32?null:(dp=!0,Gi);case"textInput":return n=s.data,n===Gi&&dp?null:n;default:return null}}function mw(n,s){if(Ki)return n==="compositionend"||!lt&&fp(n,s)?(n=ca(),Kt=Fi=an=null,Ki=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Gs&&s.locale!=="ko"?null:s.data;default:return null}}var gw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!gw[n.type]:s==="textarea"}function gp(n,s,a,c){Qn(c),s=$l(s,"onChange"),0<s.length&&(a=new zi("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var pa=null,ma=null;function yw(n){Vp(n,0)}function Fl(n){var s=Zi(n);if(Ti(s))return n}function _w(n,s){if(n==="change")return s}var yp=!1;if(p){var Xc;if(p){var Jc="oninput"in document;if(!Jc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),Jc=typeof _p.oninput=="function"}Xc=Jc}else Xc=!1;yp=Xc&&(!document.documentMode||9<document.documentMode)}function vp(){pa&&(pa.detachEvent("onpropertychange",wp),ma=pa=null)}function wp(n){if(n.propertyName==="value"&&Fl(ma)){var s=[];gp(s,ma,n,Ci(n)),ta(yw,s)}}function vw(n,s,a){n==="focusin"?(vp(),pa=s,ma=a,pa.attachEvent("onpropertychange",wp)):n==="focusout"&&vp()}function ww(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fl(ma)}function Ew(n,s){if(n==="click")return Fl(s)}function Tw(n,s){if(n==="input"||n==="change")return Fl(s)}function Iw(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Mn=typeof Object.is=="function"?Object.is:Iw;function ga(n,s){if(Mn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Mn(n[d],s[d]))return!1}return!0}function Ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Tp(n,s){var a=Ep(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ep(a)}}function Ip(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Ip(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Sp(){for(var n=window,s=Br();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Br(n.document)}return s}function Zc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Sw(n){var s=Sp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Ip(a.ownerDocument.documentElement,a)){if(c!==null&&Zc(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Tp(a,m);var v=Tp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Aw=p&&"documentMode"in document&&11>=document.documentMode,Qi=null,eh=null,ya=null,th=!1;function Ap(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;th||Qi==null||Qi!==Br(c)||(c=Qi,"selectionStart"in c&&Zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ya&&ga(ya,c)||(ya=c,c=$l(eh,"onSelect"),0<c.length&&(s=new zi("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Qi)))}function Ul(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var Yi={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},nh={},xp={};p&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function zl(n){if(nh[n])return nh[n];if(!Yi[n])return n;var s=Yi[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in xp)return nh[n]=s[a];return n}var Cp=zl("animationend"),Rp=zl("animationiteration"),kp=zl("animationstart"),Pp=zl("transitionend"),Np=new Map,Dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(n,s){Np.set(n,s),u(s,[n])}for(var rh=0;rh<Dp.length;rh++){var sh=Dp[rh],xw=sh.toLowerCase(),Cw=sh[0].toUpperCase()+sh.slice(1);Zr(xw,"on"+Cw)}Zr(Cp,"onAnimationEnd"),Zr(Rp,"onAnimationIteration"),Zr(kp,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(Pp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rw=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function bp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,yl(c,s,void 0,n),n.currentTarget=null}function Vp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var I=c[v],k=I.instance,U=I.currentTarget;if(I=I.listener,k!==m&&d.isPropagationStopped())break e;bp(d,I,U),m=k}else for(v=0;v<c.length;v++){if(I=c[v],k=I.instance,U=I.currentTarget,I=I.listener,k!==m&&d.isPropagationStopped())break e;bp(d,I,U),m=k}}}if(Rn)throw n=na,Rn=!1,na=null,n}function Qe(n,s){var a=s[dh];a===void 0&&(a=s[dh]=new Set);var c=n+"__bubble";a.has(c)||(Op(s,n,2,!1),a.add(c))}function ih(n,s,a){var c=0;s&&(c|=4),Op(a,n,c,s)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function va(n){if(!n[Bl]){n[Bl]=!0,i.forEach(function(a){a!=="selectionchange"&&(Rw.has(a)||ih(a,!1,n),ih(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Bl]||(s[Bl]=!0,ih("selectionchange",!1,s))}}function Op(n,s,a,c){switch(ua(s)){case 1:var d=Xe;break;case 4:d=Qc;break;default:d=la}a=d.bind(null,s,a,n),d=void 0,!Pi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function oh(n,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;I!==null;){if(v=Ks(I),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}I=I.parentNode}}c=c.return}ta(function(){var U=m,K=Ci(a),Y=[];e:{var G=Np.get(n);if(G!==void 0){var oe=zi,ue=n;switch(n){case"keypress":if(Ui(a)===0)break e;case"keydown":case"keyup":oe=f;break;case"focusin":ue="focus",oe=Hi;break;case"focusout":ue="blur",oe=Hi;break;case"beforeblur":case"afterblur":oe=Hi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=$i;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Dl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=z;break;case Cp:case Rp:case kp:oe=Sr;break;case Pp:oe=Be;break;case"scroll":oe=Yc;break;case"wheel":oe=Ve;break;case"copy":case"cut":case"paste":oe=Ol;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=E}var ce=(s&4)!==0,it=!ce&&n==="scroll",L=ce?G!==null?G+"Capture":null:G;ce=[];for(var D=U,j;D!==null;){j=D;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,L!==null&&(Z=st(D,L),Z!=null&&ce.push(wa(D,Z,j)))),it)break;D=D.return}0<ce.length&&(G=new oe(G,ue,null,a,K),Y.push({event:G,listeners:ce}))}}if((s&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",oe=n==="mouseout"||n==="pointerout",G&&a!==Os&&(ue=a.relatedTarget||a.fromElement)&&(Ks(ue)||ue[Ar]))break e;if((oe||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,oe?(ue=a.relatedTarget||a.toElement,oe=U,ue=ue?Ks(ue):null,ue!==null&&(it=kn(ue),ue!==it||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(oe=null,ue=U),oe!==ue)){if(ce=$i,Z="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ce=E,Z="onPointerLeave",L="onPointerEnter",D="pointer"),it=oe==null?G:Zi(oe),j=ue==null?G:Zi(ue),G=new ce(Z,D+"leave",oe,a,K),G.target=it,G.relatedTarget=j,Z=null,Ks(K)===U&&(ce=new ce(L,D+"enter",ue,a,K),ce.target=j,ce.relatedTarget=it,Z=ce),it=Z,oe&&ue)t:{for(ce=oe,L=ue,D=0,j=ce;j;j=Xi(j))D++;for(j=0,Z=L;Z;Z=Xi(Z))j++;for(;0<D-j;)ce=Xi(ce),D--;for(;0<j-D;)L=Xi(L),j--;for(;D--;){if(ce===L||L!==null&&ce===L.alternate)break t;ce=Xi(ce),L=Xi(L)}ce=null}else ce=null;oe!==null&&Mp(Y,G,oe,ce,!1),ue!==null&&it!==null&&Mp(Y,it,ue,ce,!0)}}e:{if(G=U?Zi(U):window,oe=G.nodeName&&G.nodeName.toLowerCase(),oe==="select"||oe==="input"&&G.type==="file")var he=_w;else if(mp(G))if(yp)he=Tw;else{he=ww;var ge=vw}else(oe=G.nodeName)&&oe.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=Ew);if(he&&(he=he(n,U))){gp(Y,he,a,K);break e}ge&&ge(n,G,U),n==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&Si(G,"number",G.value)}switch(ge=U?Zi(U):window,n){case"focusin":(mp(ge)||ge.contentEditable==="true")&&(Qi=ge,eh=U,ya=null);break;case"focusout":ya=eh=Qi=null;break;case"mousedown":th=!0;break;case"contextmenu":case"mouseup":case"dragend":th=!1,Ap(Y,a,K);break;case"selectionchange":if(Aw)break;case"keydown":case"keyup":Ap(Y,a,K)}var ye;if(lt)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ki?fp(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Gs&&a.locale!=="ko"&&(Ki||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ki&&(ye=ca()):(an=K,Fi="value"in an?an.value:an.textContent,Ki=!0)),ge=$l(U,ve),0<ge.length&&(ve=new fa(ve,n,null,a,K),Y.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=pp(a),ye!==null&&(ve.data=ye)))),(ye=ln?pw(n,a):mw(n,a))&&(U=$l(U,"onBeforeInput"),0<U.length&&(K=new fa("onBeforeInput","beforeinput",null,a,K),Y.push({event:K,listeners:U}),K.data=ye))}Vp(Y,s)})}function wa(n,s,a){return{instance:n,listener:s,currentTarget:a}}function $l(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=st(n,a),m!=null&&c.unshift(wa(n,m,d)),m=st(n,s),m!=null&&c.push(wa(n,m,d))),n=n.return}return c}function Xi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mp(n,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var I=a,k=I.alternate,U=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&U!==null&&(I=U,d?(k=st(a,m),k!=null&&v.unshift(wa(a,k,I))):d||(k=st(a,m),k!=null&&v.push(wa(a,k,I)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var kw=/\r\n?/g,Pw=/\u0000|\uFFFD/g;function Lp(n){return(typeof n=="string"?n:""+n).replace(kw,`
`).replace(Pw,"")}function ql(n,s,a){if(s=Lp(s),Lp(n)!==s&&a)throw Error(t(425))}function Hl(){}var ah=null,lh=null;function uh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,Nw=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,Dw=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(n){return jp.resolve(null).then(n).catch(bw)}:ch;function bw(n){setTimeout(function(){throw n})}function hh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Vn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Vn(s)}function es(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Fp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),tr="__reactFiber$"+Ji,Ea="__reactProps$"+Ji,Ar="__reactContainer$"+Ji,dh="__reactEvents$"+Ji,Vw="__reactListeners$"+Ji,Ow="__reactHandles$"+Ji;function Ks(n){var s=n[tr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Ar]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Fp(n);n!==null;){if(a=n[tr])return a;n=Fp(n)}return s}n=a,a=n.parentNode}return null}function Ta(n){return n=n[tr]||n[Ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Zi(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wl(n){return n[Ea]||null}var fh=[],eo=-1;function ts(n){return{current:n}}function Ye(n){0>eo||(n.current=fh[eo],fh[eo]=null,eo--)}function Ge(n,s){eo++,fh[eo]=n.current,n.current=s}var ns={},Ot=ts(ns),Qt=ts(!1),Qs=ns;function to(n,s){var a=n.type.contextTypes;if(!a)return ns;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function Gl(){Ye(Qt),Ye(Ot)}function Up(n,s,a){if(Ot.current!==ns)throw Error(t(168));Ge(Ot,s),Ge(Qt,a)}function zp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,je(n)||"Unknown",d));return ie({},a,c)}function Kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ns,Qs=Ot.current,Ge(Ot,n),Ge(Qt,Qt.current),!0}function Bp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=zp(n,s,Qs),c.__reactInternalMemoizedMergedChildContext=n,Ye(Qt),Ye(Ot),Ge(Ot,n)):Ye(Qt),Ge(Qt,a)}var xr=null,Ql=!1,ph=!1;function $p(n){xr===null?xr=[n]:xr.push(n)}function Mw(n){Ql=!0,$p(n)}function rs(){if(!ph&&xr!==null){ph=!0;var n=0,s=De;try{var a=xr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}xr=null,Ql=!1}catch(d){throw xr!==null&&(xr=xr.slice(n+1)),Vi(Us,rs),d}finally{De=s,ph=!1}}return null}var no=[],ro=0,Yl=null,Xl=0,_n=[],vn=0,Ys=null,Cr=1,Rr="";function Xs(n,s){no[ro++]=Xl,no[ro++]=Yl,Yl=n,Xl=s}function qp(n,s,a){_n[vn++]=Cr,_n[vn++]=Rr,_n[vn++]=Ys,Ys=n;var c=Cr;n=Rr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var m=32-$t(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Cr=1<<32-$t(s)+d|a<<d|c,Rr=m+n}else Cr=1<<m|a<<d|c,Rr=n}function mh(n){n.return!==null&&(Xs(n,1),qp(n,1,0))}function gh(n){for(;n===Yl;)Yl=no[--ro],no[ro]=null,Xl=no[--ro],no[ro]=null;for(;n===Ys;)Ys=_n[--vn],_n[vn]=null,Rr=_n[--vn],_n[vn]=null,Cr=_n[--vn],_n[vn]=null}var un=null,cn=null,Je=!1,Ln=null;function Hp(n,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Wp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,un=n,cn=es(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,un=n,cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Ys!==null?{id:Cr,overflow:Rr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,un=n,cn=null,!0):!1;default:return!1}}function yh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _h(n){if(Je){var s=cn;if(s){var a=s;if(!Wp(n,s)){if(yh(n))throw Error(t(418));s=es(a.nextSibling);var c=un;s&&Wp(n,s)?Hp(c,a):(n.flags=n.flags&-4097|2,Je=!1,un=n)}}else{if(yh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,un=n}}}function Gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;un=n}function Jl(n){if(n!==un)return!1;if(!Je)return Gp(n),Je=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!uh(n.type,n.memoizedProps)),s&&(s=cn)){if(yh(n))throw Kp(),Error(t(418));for(;s;)Hp(n,s),s=es(s.nextSibling)}if(Gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){cn=es(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}cn=null}}else cn=un?es(n.stateNode.nextSibling):null;return!0}function Kp(){for(var n=cn;n;)n=es(n.nextSibling)}function so(){cn=un=null,Je=!1}function vh(n){Ln===null?Ln=[n]:Ln.push(n)}var Lw=me.ReactCurrentBatchConfig;function Ia(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var I=d.refs;v===null?delete I[m]:I[m]=v},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Zl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Qp(n){var s=n._init;return s(n._payload)}function Yp(n){function s(L,D){if(n){var j=L.deletions;j===null?(L.deletions=[D],L.flags|=16):j.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)s(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=hs(L,D),L.index=0,L.sibling=null,L}function m(L,D,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<D?(L.flags|=2,D):j):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,D,j,Z){return D===null||D.tag!==6?(D=cd(j,L.mode,Z),D.return=L,D):(D=d(D,j),D.return=L,D)}function k(L,D,j,Z){var he=j.type;return he===N?K(L,D,j.props.children,Z,j.key):D!==null&&(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===se&&Qp(he)===D.type)?(Z=d(D,j.props),Z.ref=Ia(L,D,j),Z.return=L,Z):(Z=Iu(j.type,j.key,j.props,null,L.mode,Z),Z.ref=Ia(L,D,j),Z.return=L,Z)}function U(L,D,j,Z){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=hd(j,L.mode,Z),D.return=L,D):(D=d(D,j.children||[]),D.return=L,D)}function K(L,D,j,Z,he){return D===null||D.tag!==7?(D=ii(j,L.mode,Z,he),D.return=L,D):(D=d(D,j),D.return=L,D)}function Y(L,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=cd(""+D,L.mode,j),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ee:return j=Iu(D.type,D.key,D.props,null,L.mode,j),j.ref=Ia(L,null,D),j.return=L,j;case Ae:return D=hd(D,L.mode,j),D.return=L,D;case se:var Z=D._init;return Y(L,Z(D._payload),j)}if(gr(D)||pe(D))return D=ii(D,L.mode,j,null),D.return=L,D;Zl(L,D)}return null}function G(L,D,j,Z){var he=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:I(L,D,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ee:return j.key===he?k(L,D,j,Z):null;case Ae:return j.key===he?U(L,D,j,Z):null;case se:return he=j._init,G(L,D,he(j._payload),Z)}if(gr(j)||pe(j))return he!==null?null:K(L,D,j,Z,null);Zl(L,j)}return null}function oe(L,D,j,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return L=L.get(j)||null,I(D,L,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Ee:return L=L.get(Z.key===null?j:Z.key)||null,k(D,L,Z,he);case Ae:return L=L.get(Z.key===null?j:Z.key)||null,U(D,L,Z,he);case se:var ge=Z._init;return oe(L,D,j,ge(Z._payload),he)}if(gr(Z)||pe(Z))return L=L.get(j)||null,K(D,L,Z,he,null);Zl(D,Z)}return null}function ue(L,D,j,Z){for(var he=null,ge=null,ye=D,ve=D=0,St=null;ye!==null&&ve<j.length;ve++){ye.index>ve?(St=ye,ye=null):St=ye.sibling;var Le=G(L,ye,j[ve],Z);if(Le===null){ye===null&&(ye=St);break}n&&ye&&Le.alternate===null&&s(L,ye),D=m(Le,D,ve),ge===null?he=Le:ge.sibling=Le,ge=Le,ye=St}if(ve===j.length)return a(L,ye),Je&&Xs(L,ve),he;if(ye===null){for(;ve<j.length;ve++)ye=Y(L,j[ve],Z),ye!==null&&(D=m(ye,D,ve),ge===null?he=ye:ge.sibling=ye,ge=ye);return Je&&Xs(L,ve),he}for(ye=c(L,ye);ve<j.length;ve++)St=oe(ye,L,ve,j[ve],Z),St!==null&&(n&&St.alternate!==null&&ye.delete(St.key===null?ve:St.key),D=m(St,D,ve),ge===null?he=St:ge.sibling=St,ge=St);return n&&ye.forEach(function(ds){return s(L,ds)}),Je&&Xs(L,ve),he}function ce(L,D,j,Z){var he=pe(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var ge=he=null,ye=D,ve=D=0,St=null,Le=j.next();ye!==null&&!Le.done;ve++,Le=j.next()){ye.index>ve?(St=ye,ye=null):St=ye.sibling;var ds=G(L,ye,Le.value,Z);if(ds===null){ye===null&&(ye=St);break}n&&ye&&ds.alternate===null&&s(L,ye),D=m(ds,D,ve),ge===null?he=ds:ge.sibling=ds,ge=ds,ye=St}if(Le.done)return a(L,ye),Je&&Xs(L,ve),he;if(ye===null){for(;!Le.done;ve++,Le=j.next())Le=Y(L,Le.value,Z),Le!==null&&(D=m(Le,D,ve),ge===null?he=Le:ge.sibling=Le,ge=Le);return Je&&Xs(L,ve),he}for(ye=c(L,ye);!Le.done;ve++,Le=j.next())Le=oe(ye,L,ve,Le.value,Z),Le!==null&&(n&&Le.alternate!==null&&ye.delete(Le.key===null?ve:Le.key),D=m(Le,D,ve),ge===null?he=Le:ge.sibling=Le,ge=Le);return n&&ye.forEach(function(gE){return s(L,gE)}),Je&&Xs(L,ve),he}function it(L,D,j,Z){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ee:e:{for(var he=j.key,ge=D;ge!==null;){if(ge.key===he){if(he=j.type,he===N){if(ge.tag===7){a(L,ge.sibling),D=d(ge,j.props.children),D.return=L,L=D;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===se&&Qp(he)===ge.type){a(L,ge.sibling),D=d(ge,j.props),D.ref=Ia(L,ge,j),D.return=L,L=D;break e}a(L,ge);break}else s(L,ge);ge=ge.sibling}j.type===N?(D=ii(j.props.children,L.mode,Z,j.key),D.return=L,L=D):(Z=Iu(j.type,j.key,j.props,null,L.mode,Z),Z.ref=Ia(L,D,j),Z.return=L,L=Z)}return v(L);case Ae:e:{for(ge=j.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(L,D.sibling),D=d(D,j.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else s(L,D);D=D.sibling}D=hd(j,L.mode,Z),D.return=L,L=D}return v(L);case se:return ge=j._init,it(L,D,ge(j._payload),Z)}if(gr(j))return ue(L,D,j,Z);if(pe(j))return ce(L,D,j,Z);Zl(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,j),D.return=L,L=D):(a(L,D),D=cd(j,L.mode,Z),D.return=L,L=D),v(L)):a(L,D)}return it}var io=Yp(!0),Xp=Yp(!1),eu=ts(null),tu=null,oo=null,wh=null;function Eh(){wh=oo=tu=null}function Th(n){var s=eu.current;Ye(eu),n._currentValue=s}function Ih(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function ao(n,s){tu=n,wh=oo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Xt=!0),n.firstContext=null)}function wn(n){var s=n._currentValue;if(wh!==n)if(n={context:n,memoizedValue:s,next:null},oo===null){if(tu===null)throw Error(t(308));oo=n,tu.dependencies={lanes:0,firstContext:n}}else oo=oo.next=n;return s}var Js=null;function Sh(n){Js===null?Js=[n]:Js.push(n)}function Jp(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Sh(s)):(a.next=d.next,d.next=a),s.interleaved=a,kr(n,c)}function kr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ss=!1;function Ah(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function is(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,kr(n,a)}return d=c.interleaved,d===null?(s.next=s,Sh(c)):(s.next=d.next,d.next=s),c.interleaved=s,kr(n,a)}function nu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Kr(n,a)}}function em(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function ru(n,s,a,c){var d=n.updateQueue;ss=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,U=k.next;k.next=null,v===null?m=U:v.next=U,v=k;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=U:I.next=U,K.lastBaseUpdate=k))}if(m!==null){var Y=d.baseState;v=0,K=U=k=null,I=m;do{var G=I.lane,oe=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:oe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ue=n,ce=I;switch(G=s,oe=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){Y=ue.call(oe,Y,G);break e}Y=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,G=typeof ue=="function"?ue.call(oe,Y,G):ue,G==null)break e;Y=ie({},Y,G);break e;case 2:ss=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else oe={eventTime:oe,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(U=K=oe,k=Y):K=K.next=oe,v|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(k=Y),d.baseState=k,d.firstBaseUpdate=U,d.lastBaseUpdate=K,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);ti|=v,n.lanes=v,n.memoizedState=Y}}function tm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Sa={},nr=ts(Sa),Aa=ts(Sa),xa=ts(Sa);function Zs(n){if(n===Sa)throw Error(t(174));return n}function xh(n,s){switch(Ge(xa,s),Ge(Aa,n),Ge(nr,Sa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:mt(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=mt(s,n)}Ye(nr),Ge(nr,s)}function lo(){Ye(nr),Ye(Aa),Ye(xa)}function nm(n){Zs(xa.current);var s=Zs(nr.current),a=mt(s,n.type);s!==a&&(Ge(Aa,n),Ge(nr,a))}function Ch(n){Aa.current===n&&(Ye(nr),Ye(Aa))}var et=ts(0);function su(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Rh=[];function kh(){for(var n=0;n<Rh.length;n++)Rh[n]._workInProgressVersionPrimary=null;Rh.length=0}var iu=me.ReactCurrentDispatcher,Ph=me.ReactCurrentBatchConfig,ei=0,tt=null,yt=null,Tt=null,ou=!1,Ca=!1,Ra=0,jw=0;function Mt(){throw Error(t(321))}function Nh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Mn(n[a],s[a]))return!1;return!0}function Dh(n,s,a,c,d,m){if(ei=m,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,iu.current=n===null||n.memoizedState===null?Bw:$w,n=a(c,d),Ca){m=0;do{if(Ca=!1,Ra=0,25<=m)throw Error(t(301));m+=1,Tt=yt=null,s.updateQueue=null,iu.current=qw,n=a(c,d)}while(Ca)}if(iu.current=uu,s=yt!==null&&yt.next!==null,ei=0,Tt=yt=tt=null,ou=!1,s)throw Error(t(300));return n}function bh(){var n=Ra!==0;return Ra=0,n}function rr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function En(){if(yt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var s=Tt===null?tt.memoizedState:Tt.next;if(s!==null)Tt=s,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function ka(n,s){return typeof s=="function"?s(n):s}function Vh(n){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=v=null,k=null,U=m;do{var K=U.lane;if((ei&K)===K)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Y={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(I=k=Y,v=c):k=k.next=Y,tt.lanes|=K,ti|=K}U=U.next}while(U!==null&&U!==m);k===null?v=c:k.next=I,Mn(c,s.memoizedState)||(Xt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,tt.lanes|=m,ti|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Oh(n){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Mn(m,s.memoizedState)||(Xt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function rm(){}function sm(n,s){var a=tt,c=En(),d=s(),m=!Mn(c.memoizedState,d);if(m&&(c.memoizedState=d,Xt=!0),c=c.queue,Mh(am.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Pa(9,om.bind(null,a,c,d,s),void 0,null),It===null)throw Error(t(349));(ei&30)!==0||im(a,s,d)}return d}function im(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function om(n,s,a,c){s.value=a,s.getSnapshot=c,lm(s)&&um(n)}function am(n,s,a){return a(function(){lm(s)&&um(n)})}function lm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Mn(n,a)}catch{return!0}}function um(n){var s=kr(n,1);s!==null&&zn(s,n,1,-1)}function cm(n){var s=rr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},s.queue=n,n=n.dispatch=zw.bind(null,tt,n),[s.memoizedState,n]}function Pa(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function hm(){return En().memoizedState}function au(n,s,a,c){var d=rr();tt.flags|=n,d.memoizedState=Pa(1|s,a,void 0,c===void 0?null:c)}function lu(n,s,a,c){var d=En();c=c===void 0?null:c;var m=void 0;if(yt!==null){var v=yt.memoizedState;if(m=v.destroy,c!==null&&Nh(c,v.deps)){d.memoizedState=Pa(s,a,m,c);return}}tt.flags|=n,d.memoizedState=Pa(1|s,a,m,c)}function dm(n,s){return au(8390656,8,n,s)}function Mh(n,s){return lu(2048,8,n,s)}function fm(n,s){return lu(4,2,n,s)}function pm(n,s){return lu(4,4,n,s)}function mm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function gm(n,s,a){return a=a!=null?a.concat([n]):null,lu(4,4,mm.bind(null,s,n),a)}function Lh(){}function ym(n,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Nh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function _m(n,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Nh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function vm(n,s,a){return(ei&21)===0?(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=a):(Mn(a,s)||(a=$s(),tt.lanes|=a,ti|=a,n.baseState=!0),s)}function Fw(n,s){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=Ph.transition;Ph.transition={};try{n(!1),s()}finally{De=a,Ph.transition=c}}function wm(){return En().memoizedState}function Uw(n,s,a){var c=us(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Em(n))Tm(s,a);else if(a=Jp(n,s,a,c),a!==null){var d=Wt();zn(a,n,c,d),Im(a,s,c)}}function zw(n,s,a){var c=us(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Em(n))Tm(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,I=m(v,a);if(d.hasEagerState=!0,d.eagerState=I,Mn(I,v)){var k=s.interleaved;k===null?(d.next=d,Sh(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=Jp(n,s,d,c),a!==null&&(d=Wt(),zn(a,n,c,d),Im(a,s,c))}}function Em(n){var s=n.alternate;return n===tt||s!==null&&s===tt}function Tm(n,s){Ca=ou=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Im(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Kr(n,a)}}var uu={readContext:wn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},Bw={readContext:wn,useCallback:function(n,s){return rr().memoizedState=[n,s===void 0?null:s],n},useContext:wn,useEffect:dm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,au(4194308,4,mm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return au(4194308,4,n,s)},useInsertionEffect:function(n,s){return au(4,2,n,s)},useMemo:function(n,s){var a=rr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=Uw.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var s=rr();return n={current:n},s.memoizedState=n},useState:cm,useDebugValue:Lh,useDeferredValue:function(n){return rr().memoizedState=n},useTransition:function(){var n=cm(!1),s=n[0];return n=Fw.bind(null,n[1]),rr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=tt,d=rr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(ei&30)!==0||im(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,dm(am.bind(null,c,m,n),[n]),c.flags|=2048,Pa(9,om.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=rr(),s=It.identifierPrefix;if(Je){var a=Rr,c=Cr;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ra++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=jw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},$w={readContext:wn,useCallback:ym,useContext:wn,useEffect:Mh,useImperativeHandle:gm,useInsertionEffect:fm,useLayoutEffect:pm,useMemo:_m,useReducer:Vh,useRef:hm,useState:function(){return Vh(ka)},useDebugValue:Lh,useDeferredValue:function(n){var s=En();return vm(s,yt.memoizedState,n)},useTransition:function(){var n=Vh(ka)[0],s=En().memoizedState;return[n,s]},useMutableSource:rm,useSyncExternalStore:sm,useId:wm,unstable_isNewReconciler:!1},qw={readContext:wn,useCallback:ym,useContext:wn,useEffect:Mh,useImperativeHandle:gm,useInsertionEffect:fm,useLayoutEffect:pm,useMemo:_m,useReducer:Oh,useRef:hm,useState:function(){return Oh(ka)},useDebugValue:Lh,useDeferredValue:function(n){var s=En();return yt===null?s.memoizedState=n:vm(s,yt.memoizedState,n)},useTransition:function(){var n=Oh(ka)[0],s=En().memoizedState;return[n,s]},useMutableSource:rm,useSyncExternalStore:sm,useId:wm,unstable_isNewReconciler:!1};function jn(n,s){if(n&&n.defaultProps){s=ie({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function jh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:ie({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cu={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Wt(),d=us(n),m=Pr(c,d);m.payload=s,a!=null&&(m.callback=a),s=is(n,m,d),s!==null&&(zn(s,n,d,c),nu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Wt(),d=us(n),m=Pr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=is(n,m,d),s!==null&&(zn(s,n,d,c),nu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Wt(),c=us(n),d=Pr(a,c);d.tag=2,s!=null&&(d.callback=s),s=is(n,d,c),s!==null&&(zn(s,n,c,a),nu(s,n,c))}};function Sm(n,s,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!ga(a,c)||!ga(d,m):!0}function Am(n,s,a){var c=!1,d=ns,m=s.contextType;return typeof m=="object"&&m!==null?m=wn(m):(d=Yt(s)?Qs:Ot.current,c=s.contextTypes,m=(c=c!=null)?to(n,d):ns),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=cu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),s}function xm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&cu.enqueueReplaceState(s,s.state,null)}function Fh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Ah(n);var m=s.contextType;typeof m=="object"&&m!==null?d.context=wn(m):(m=Yt(s)?Qs:Ot.current,d.context=to(n,m)),d.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(jh(n,s,m,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&cu.enqueueReplaceState(d,d.state,null),ru(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function uo(n,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:d,digest:null}}function Uh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function zh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Hw=typeof WeakMap=="function"?WeakMap:Map;function Cm(n,s,a){a=Pr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){yu||(yu=!0,nd=c),zh(n,s)},a}function Rm(n,s,a){a=Pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){zh(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){zh(n,s),typeof c!="function"&&(as===null?as=new Set([this]):as.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function km(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Hw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=iE.bind(null,n,s,a),s.then(n,n))}function Pm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Nm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Pr(-1,1),s.tag=2,is(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Ww=me.ReactCurrentOwner,Xt=!1;function Ht(n,s,a,c){s.child=n===null?Xp(s,null,a,c):io(s,n.child,a,c)}function Dm(n,s,a,c,d){a=a.render;var m=s.ref;return ao(s,d),c=Dh(n,s,a,c,m,d),a=bh(),n!==null&&!Xt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Nr(n,s,d)):(Je&&a&&mh(s),s.flags|=1,Ht(n,s,c,d),s.child)}function bm(n,s,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!ud(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Vm(n,s,m,c,d)):(n=Iu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(v,c)&&n.ref===s.ref)return Nr(n,s,d)}return s.flags|=1,n=hs(m,c),n.ref=s.ref,n.return=s,s.child=n}function Vm(n,s,a,c,d){if(n!==null){var m=n.memoizedProps;if(ga(m,c)&&n.ref===s.ref)if(Xt=!1,s.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xt=!0);else return s.lanes=n.lanes,Nr(n,s,d)}return Bh(n,s,a,c,d)}function Om(n,s,a){var c=s.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(ho,hn),hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ge(ho,hn),hn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ge(ho,hn),hn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,Ge(ho,hn),hn|=c;return Ht(n,s,d,a),s.child}function Mm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Bh(n,s,a,c,d){var m=Yt(a)?Qs:Ot.current;return m=to(s,m),ao(s,d),a=Dh(n,s,a,c,m,d),c=bh(),n!==null&&!Xt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Nr(n,s,d)):(Je&&c&&mh(s),s.flags|=1,Ht(n,s,a,d),s.child)}function Lm(n,s,a,c,d){if(Yt(a)){var m=!0;Kl(s)}else m=!1;if(ao(s,d),s.stateNode===null)du(n,s),Am(s,a,c),Fh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,I=s.memoizedProps;v.props=I;var k=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=wn(U):(U=Yt(a)?Qs:Ot.current,U=to(s,U));var K=a.getDerivedStateFromProps,Y=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||k!==U)&&xm(s,v,c,U),ss=!1;var G=s.memoizedState;v.state=G,ru(s,c,v,d),k=s.memoizedState,I!==c||G!==k||Qt.current||ss?(typeof K=="function"&&(jh(s,a,K,c),k=s.memoizedState),(I=ss||Sm(s,a,I,c,G,k,U))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),v.props=c,v.state=k,v.context=U,c=I):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Zp(n,s),I=s.memoizedProps,U=s.type===s.elementType?I:jn(s.type,I),v.props=U,Y=s.pendingProps,G=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=wn(k):(k=Yt(a)?Qs:Ot.current,k=to(s,k));var oe=a.getDerivedStateFromProps;(K=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Y||G!==k)&&xm(s,v,c,k),ss=!1,G=s.memoizedState,v.state=G,ru(s,c,v,d);var ue=s.memoizedState;I!==Y||G!==ue||Qt.current||ss?(typeof oe=="function"&&(jh(s,a,oe,c),ue=s.memoizedState),(U=ss||Sm(s,a,U,c,G,ue,k)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=k,c=U):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(s.flags|=1024),c=!1)}return $h(n,s,a,c,m,d)}function $h(n,s,a,c,d,m){Mm(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Bp(s,a,!1),Nr(n,s,m);c=s.stateNode,Ww.current=s;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=io(s,n.child,null,m),s.child=io(s,null,I,m)):Ht(n,s,I,m),s.memoizedState=c.state,d&&Bp(s,a,!0),s.child}function jm(n){var s=n.stateNode;s.pendingContext?Up(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Up(n,s.context,!1),xh(n,s.containerInfo)}function Fm(n,s,a,c,d){return so(),vh(d),s.flags|=256,Ht(n,s,a,c),s.child}var qh={dehydrated:null,treeContext:null,retryLane:0};function Hh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Um(n,s,a){var c=s.pendingProps,d=et.current,m=!1,v=(s.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(et,d&1),n===null)return _h(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Su(v,c,0,null),n=ii(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=Hh(a),s.memoizedState=qh,n):Wh(s,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Gw(n,s,v,c,I,d,a);if(m){m=c.fallback,v=s.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=hs(d,k),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=hs(I,m):(m=ii(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=n.child.memoizedState,v=v===null?Hh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,s.memoizedState=qh,c}return m=n.child,n=m.sibling,c=hs(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Wh(n,s){return s=Su({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function hu(n,s,a,c){return c!==null&&vh(c),io(s,n.child,null,a),n=Wh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Gw(n,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=Uh(Error(t(422))),hu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=Su({mode:"visible",children:c.children},d,0,null),m=ii(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&io(s,n.child,null,v),s.child.memoizedState=Hh(v),s.memoizedState=qh,m);if((s.mode&1)===0)return hu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=Uh(m,c,void 0),hu(n,s,v,c)}if(I=(v&n.childLanes)!==0,Xt||I){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,kr(n,d),zn(c,n,d,-1))}return ld(),c=Uh(Error(t(421))),hu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=oE.bind(null,n),d._reactRetry=s,null):(n=m.treeContext,cn=es(d.nextSibling),un=s,Je=!0,Ln=null,n!==null&&(_n[vn++]=Cr,_n[vn++]=Rr,_n[vn++]=Ys,Cr=n.id,Rr=n.overflow,Ys=s),s=Wh(s,c.children),s.flags|=4096,s)}function zm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Ih(n.return,s,a)}function Gh(n,s,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Bm(n,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Ht(n,s,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zm(n,a,s);else if(n.tag===19)zm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(et,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&su(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Gh(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&su(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Gh(s,!0,a,null,m);break;case"together":Gh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function du(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Nr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),ti|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=hs(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=hs(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function Kw(n,s,a){switch(s.tag){case 3:jm(s),so();break;case 5:nm(s);break;case 1:Yt(s.type)&&Kl(s);break;case 4:xh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ge(eu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ge(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Um(n,s,a):(Ge(et,et.current&1),n=Nr(n,s,a),n!==null?n.sibling:null);Ge(et,et.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Bm(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(et,et.current),c)break;return null;case 22:case 23:return s.lanes=0,Om(n,s,a)}return Nr(n,s,a)}var $m,Kh,qm,Hm;$m=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Kh=function(){},qm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,Zs(nr.current);var m=null;switch(a){case"input":d=Ds(n,d),c=Ds(n,c),m=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),m=[];break;case"textarea":d=Ho(n,d),c=Ho(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Hl)}Xo(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var I=d[U];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var k=c[U];if(I=d?.[U],c.hasOwnProperty(U)&&k!==I&&(k!=null||I!=null))if(U==="style")if(I){for(v in I)!I.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&I[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(U,a)),a=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(m=m||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&Qe("scroll",n),m||I===k||(m=[])):(m=m||[]).push(U,k))}a&&(m=m||[]).push("style",a);var U=m;(s.updateQueue=U)&&(s.flags|=4)}},Hm=function(n,s,a,c){a!==c&&(s.flags|=4)};function Na(n,s){if(!Je)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function Qw(n,s,a){var c=s.pendingProps;switch(gh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(s),null;case 1:return Yt(s.type)&&Gl(),Lt(s),null;case 3:return c=s.stateNode,lo(),Ye(Qt),Ye(Ot),kh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Jl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ln!==null&&(id(Ln),Ln=null))),Kh(n,s),Lt(s),null;case 5:Ch(s);var d=Zs(xa.current);if(a=s.type,n!==null&&s.stateNode!=null)qm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Lt(s),null}if(n=Zs(nr.current),Jl(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[tr]=s,c[Ea]=m,n=(s.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<_a.length;d++)Qe(_a[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Ii(c,m),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Qe("invalid",c);break;case"textarea":Ai(c,m),Qe("invalid",c)}Xo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var I=m[v];v==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&ql(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&ql(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":mr(c),gl(c,m,!0);break;case"textarea":mr(c),Wo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Hl)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[tr]=s,n[Ea]=c,$m(n,s,!1,!1),s.stateNode=n;e:{switch(v=Jo(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<_a.length;d++)Qe(_a[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":Ii(n,c),d=Ds(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":Ai(n,c),d=Ho(n,c),Qe("invalid",n);break;default:d=c}Xo(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var k=I[m];m==="style"?Qo(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Go(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&$r(n,k):typeof k=="number"&&$r(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Qe("scroll",n):k!=null&&ne(n,m,k,v))}switch(a){case"input":mr(n),gl(n,c,!1);break;case"textarea":mr(n),Wo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?yr(n,!!c.multiple,m,!1):c.defaultValue!=null&&yr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Hl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Lt(s),null;case 6:if(n&&s.stateNode!=null)Hm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Zs(xa.current),Zs(nr.current),Jl(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(m=c.nodeValue!==a)&&(n=un,n!==null))switch(n.tag){case 3:ql(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ql(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return Lt(s),null;case 13:if(Ye(et),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&cn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Kp(),so(),s.flags|=98560,m=!1;else if(m=Jl(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[tr]=s}else so(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Lt(s),m=!1}else Ln!==null&&(id(Ln),Ln=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(et.current&1)!==0?_t===0&&(_t=3):ld())),s.updateQueue!==null&&(s.flags|=4),Lt(s),null);case 4:return lo(),Kh(n,s),n===null&&va(s.stateNode.containerInfo),Lt(s),null;case 10:return Th(s.type._context),Lt(s),null;case 17:return Yt(s.type)&&Gl(),Lt(s),null;case 19:if(Ye(et),m=s.memoizedState,m===null)return Lt(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)Na(m,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=su(n),v!==null){for(s.flags|=128,Na(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(et,et.current&1|2),s.child}n=n.sibling}m.tail!==null&&We()>fo&&(s.flags|=128,c=!0,Na(m,!1),s.lanes=4194304)}else{if(!c)if(n=su(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Na(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Je)return Lt(s),null}else 2*We()-m.renderingStartTime>fo&&a!==1073741824&&(s.flags|=128,c=!0,Na(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=We(),s.sibling=null,a=et.current,Ge(et,c?a&1|2:a&1),s):(Lt(s),null);case 22:case 23:return ad(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(hn&1073741824)!==0&&(Lt(s),s.subtreeFlags&6&&(s.flags|=8192)):Lt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Yw(n,s){switch(gh(s),s.tag){case 1:return Yt(s.type)&&Gl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return lo(),Ye(Qt),Ye(Ot),kh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Ch(s),null;case 13:if(Ye(et),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));so()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ye(et),null;case 4:return lo(),null;case 10:return Th(s.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var fu=!1,jt=!1,Xw=typeof WeakSet=="function"?WeakSet:Set,le=null;function co(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,s,c)}else a.current=null}function Qh(n,s,a){try{a()}catch(c){rt(n,s,c)}}var Wm=!1;function Jw(n,s){if(ah=Xr,n=Sp(),Zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,I=-1,k=-1,U=0,K=0,Y=n,G=null;t:for(;;){for(var oe;Y!==a||d!==0&&Y.nodeType!==3||(I=v+d),Y!==m||c!==0&&Y.nodeType!==3||(k=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(oe=Y.firstChild)!==null;)G=Y,Y=oe;for(;;){if(Y===n)break t;if(G===a&&++U===d&&(I=v),G===m&&++K===c&&(k=v),(oe=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=oe}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(lh={focusedElem:n,selectionRange:a},Xr=!1,le=s;le!==null;)if(s=le,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,le=n;else for(;le!==null;){s=le;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,it=ue.memoizedState,L=s.stateNode,D=L.getSnapshotBeforeUpdate(s.elementType===s.type?ce:jn(s.type,ce),it);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){rt(s,s.return,Z)}if(n=s.sibling,n!==null){n.return=s.return,le=n;break}le=s.return}return ue=Wm,Wm=!1,ue}function Da(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Qh(s,a,m)}d=d.next}while(d!==c)}}function pu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Yh(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Gm(n){var s=n.alternate;s!==null&&(n.alternate=null,Gm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[tr],delete s[Ea],delete s[dh],delete s[Vw],delete s[Ow])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Km(n){return n.tag===5||n.tag===3||n.tag===4}function Qm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Km(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Xh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Hl));else if(c!==4&&(n=n.child,n!==null))for(Xh(n,s,a),n=n.sibling;n!==null;)Xh(n,s,a),n=n.sibling}function Jh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Jh(n,s,a),n=n.sibling;n!==null;)Jh(n,s,a),n=n.sibling}var kt=null,Fn=!1;function os(n,s,a){for(a=a.child;a!==null;)Ym(n,s,a),a=a.sibling}function Ym(n,s,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(zs,a)}catch{}switch(a.tag){case 5:jt||co(a,s);case 6:var c=kt,d=Fn;kt=null,os(n,s,a),kt=c,Fn=d,kt!==null&&(Fn?(n=kt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):kt.removeChild(a.stateNode));break;case 18:kt!==null&&(Fn?(n=kt,a=a.stateNode,n.nodeType===8?hh(n.parentNode,a):n.nodeType===1&&hh(n,a),Vn(n)):hh(kt,a.stateNode));break;case 4:c=kt,d=Fn,kt=a.stateNode.containerInfo,Fn=!0,os(n,s,a),kt=c,Fn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Qh(a,s,v),d=d.next}while(d!==c)}os(n,s,a);break;case 1:if(!jt&&(co(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){rt(a,s,I)}os(n,s,a);break;case 21:os(n,s,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,os(n,s,a),jt=c):os(n,s,a);break;default:os(n,s,a)}}function Xm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Xw),s.forEach(function(c){var d=aE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Un(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=s,I=v;e:for(;I!==null;){switch(I.tag){case 5:kt=I.stateNode,Fn=!1;break e;case 3:kt=I.stateNode.containerInfo,Fn=!0;break e;case 4:kt=I.stateNode.containerInfo,Fn=!0;break e}I=I.return}if(kt===null)throw Error(t(160));Ym(m,v,d),kt=null,Fn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(U){rt(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Jm(s,n),s=s.sibling}function Jm(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Un(s,n),sr(n),c&4){try{Da(3,n,n.return),pu(3,n)}catch(ce){rt(n,n.return,ce)}try{Da(5,n,n.return)}catch(ce){rt(n,n.return,ce)}}break;case 1:Un(s,n),sr(n),c&512&&a!==null&&co(a,a.return);break;case 5:if(Un(s,n),sr(n),c&512&&a!==null&&co(a,a.return),n.flags&32){var d=n.stateNode;try{$r(d,"")}catch(ce){rt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&$o(d,m),Jo(I,v);var U=Jo(I,m);for(v=0;v<k.length;v+=2){var K=k[v],Y=k[v+1];K==="style"?Qo(d,Y):K==="dangerouslySetInnerHTML"?Go(d,Y):K==="children"?$r(d,Y):ne(d,K,Y,U)}switch(I){case"input":qo(d,m);break;case"textarea":xi(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var oe=m.value;oe!=null?yr(d,!!m.multiple,oe,!1):G!==!!m.multiple&&(m.defaultValue!=null?yr(d,!!m.multiple,m.defaultValue,!0):yr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ea]=m}catch(ce){rt(n,n.return,ce)}}break;case 6:if(Un(s,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ce){rt(n,n.return,ce)}}break;case 3:if(Un(s,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(s.containerInfo)}catch(ce){rt(n,n.return,ce)}break;case 4:Un(s,n),sr(n);break;case 13:Un(s,n),sr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(td=We())),c&4&&Xm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(jt=(U=jt)||K,Un(s,n),jt=U):Un(s,n),sr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(le=n,K=n.child;K!==null;){for(Y=le=K;le!==null;){switch(G=le,oe=G.child,G.tag){case 0:case 11:case 14:case 15:Da(4,G,G.return);break;case 1:co(G,G.return);var ue=G.stateNode;if(typeof ue.componentWillUnmount=="function"){c=G,a=G.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){rt(c,a,ce)}}break;case 5:co(G,G.return);break;case 22:if(G.memoizedState!==null){tg(Y);continue}}oe!==null?(oe.return=G,le=oe):tg(Y)}K=K.sibling}e:for(K=null,Y=n;;){if(Y.tag===5){if(K===null){K=Y;try{d=Y.stateNode,U?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Y.stateNode,k=Y.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Ko("display",v))}catch(ce){rt(n,n.return,ce)}}}else if(Y.tag===6){if(K===null)try{Y.stateNode.nodeValue=U?"":Y.memoizedProps}catch(ce){rt(n,n.return,ce)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;K===Y&&(K=null),Y=Y.return}K===Y&&(K=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Un(s,n),sr(n),c&4&&Xm(n);break;case 21:break;default:Un(s,n),sr(n)}}function sr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Km(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&($r(d,""),c.flags&=-33);var m=Qm(n);Jh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Qm(n);Xh(n,I,v);break;default:throw Error(t(161))}}catch(k){rt(n,n.return,k)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function Zw(n,s,a){le=n,Zm(n)}function Zm(n,s,a){for(var c=(n.mode&1)!==0;le!==null;){var d=le,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||fu;if(!v){var I=d.alternate,k=I!==null&&I.memoizedState!==null||jt;I=fu;var U=jt;if(fu=v,(jt=k)&&!U)for(le=d;le!==null;)v=le,k=v.child,v.tag===22&&v.memoizedState!==null?ng(d):k!==null?(k.return=v,le=k):ng(d);for(;m!==null;)le=m,Zm(m),m=m.sibling;le=d,fu=I,jt=U}eg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,le=m):eg(n)}}function eg(n){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||pu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!jt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:jn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&tm(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}tm(s,v,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Y=K.dehydrated;Y!==null&&Vn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&Yh(s)}catch(G){rt(s,s.return,G)}}if(s===n){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function tg(n){for(;le!==null;){var s=le;if(s===n){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function ng(n){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{pu(4,s)}catch(k){rt(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(k){rt(s,d,k)}}var m=s.return;try{Yh(s)}catch(k){rt(s,m,k)}break;case 5:var v=s.return;try{Yh(s)}catch(k){rt(s,v,k)}}}catch(k){rt(s,s.return,k)}if(s===n){le=null;break}var I=s.sibling;if(I!==null){I.return=s.return,le=I;break}le=s.return}}var eE=Math.ceil,mu=me.ReactCurrentDispatcher,Zh=me.ReactCurrentOwner,Tn=me.ReactCurrentBatchConfig,Me=0,It=null,ut=null,Pt=0,hn=0,ho=ts(0),_t=0,ba=null,ti=0,gu=0,ed=0,Va=null,Jt=null,td=0,fo=1/0,Dr=null,yu=!1,nd=null,as=null,_u=!1,ls=null,vu=0,Oa=0,rd=null,wu=-1,Eu=0;function Wt(){return(Me&6)!==0?We():wu!==-1?wu:wu=We()}function us(n){return(n.mode&1)===0?1:(Me&2)!==0&&Pt!==0?Pt&-Pt:Lw.transition!==null?(Eu===0&&(Eu=$s()),Eu):(n=De,n!==0||(n=window.event,n=n===void 0?16:ua(n.type)),n)}function zn(n,s,a,c){if(50<Oa)throw Oa=0,rd=null,Error(t(185));Gr(n,a,c),((Me&2)===0||n!==It)&&(n===It&&((Me&2)===0&&(gu|=a),_t===4&&cs(n,Pt)),Zt(n,c),a===1&&Me===0&&(s.mode&1)===0&&(fo=We()+500,Ql&&rs()))}function Zt(n,s){var a=n.callbackNode;wr(n,s);var c=Bs(n,n===It?Pt:0);if(c===0)a!==null&&sa(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&sa(a),s===1)n.tag===0?Mw(sg.bind(null,n)):$p(sg.bind(null,n)),Dw(function(){(Me&6)===0&&rs()}),a=null;else{switch(Qr(c)){case 1:a=Us;break;case 4:a=qr;break;case 16:a=mn;break;case 536870912:a=El;break;default:a=mn}a=dg(a,rg.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function rg(n,s){if(wu=-1,Eu=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(po()&&n.callbackNode!==a)return null;var c=Bs(n,n===It?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Tu(n,c);else{s=c;var d=Me;Me|=2;var m=og();(It!==n||Pt!==s)&&(Dr=null,fo=We()+500,ri(n,s));do try{rE();break}catch(I){ig(n,I)}while(!0);Eh(),mu.current=m,Me=d,ut!==null?s=0:(It=null,Pt=0,s=_t)}if(s!==0){if(s===2&&(d=on(n),d!==0&&(c=d,s=sd(n,d))),s===1)throw a=ba,ri(n,0),cs(n,c),Zt(n,We()),a;if(s===6)cs(n,c);else{if(d=n.current.alternate,(c&30)===0&&!tE(d)&&(s=Tu(n,c),s===2&&(m=on(n),m!==0&&(c=m,s=sd(n,m))),s===1))throw a=ba,ri(n,0),cs(n,c),Zt(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:si(n,Jt,Dr);break;case 3:if(cs(n,c),(c&130023424)===c&&(s=td+500-We(),10<s)){if(Bs(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ch(si.bind(null,n,Jt,Dr),s);break}si(n,Jt,Dr);break;case 4:if(cs(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-$t(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*eE(c/1960))-c,10<c){n.timeoutHandle=ch(si.bind(null,n,Jt,Dr),c);break}si(n,Jt,Dr);break;case 5:si(n,Jt,Dr);break;default:throw Error(t(329))}}}return Zt(n,We()),n.callbackNode===a?rg.bind(null,n):null}function sd(n,s){var a=Va;return n.current.memoizedState.isDehydrated&&(ri(n,s).flags|=256),n=Tu(n,s),n!==2&&(s=Jt,Jt=a,s!==null&&id(s)),n}function id(n){Jt===null?Jt=n:Jt.push.apply(Jt,n)}function tE(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Mn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function cs(n,s){for(s&=~ed,s&=~gu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-$t(s),c=1<<a;n[a]=-1,s&=~c}}function sg(n){if((Me&6)!==0)throw Error(t(327));po();var s=Bs(n,0);if((s&1)===0)return Zt(n,We()),null;var a=Tu(n,s);if(n.tag!==0&&a===2){var c=on(n);c!==0&&(s=c,a=sd(n,c))}if(a===1)throw a=ba,ri(n,0),cs(n,s),Zt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,si(n,Jt,Dr),Zt(n,We()),null}function od(n,s){var a=Me;Me|=1;try{return n(s)}finally{Me=a,Me===0&&(fo=We()+500,Ql&&rs())}}function ni(n){ls!==null&&ls.tag===0&&(Me&6)===0&&po();var s=Me;Me|=1;var a=Tn.transition,c=De;try{if(Tn.transition=null,De=1,n)return n()}finally{De=c,Tn.transition=a,Me=s,(Me&6)===0&&rs()}}function ad(){hn=ho.current,Ye(ho)}function ri(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Nw(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(gh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Gl();break;case 3:lo(),Ye(Qt),Ye(Ot),kh();break;case 5:Ch(c);break;case 4:lo();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:Th(c.type._context);break;case 22:case 23:ad()}a=a.return}if(It=n,ut=n=hs(n.current,null),Pt=hn=s,_t=0,ba=null,ed=gu=ti=0,Jt=Va=null,Js!==null){for(s=0;s<Js.length;s++)if(a=Js[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Js=null}return n}function ig(n,s){do{var a=ut;try{if(Eh(),iu.current=uu,ou){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ou=!1}if(ei=0,Tt=yt=tt=null,Ca=!1,Ra=0,Zh.current=null,a===null||a.return===null){_t=1,ba=s,ut=null;break}e:{var m=n,v=a.return,I=a,k=s;if(s=Pt,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,K=I,Y=K.tag;if((K.mode&1)===0&&(Y===0||Y===11||Y===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var oe=Pm(v);if(oe!==null){oe.flags&=-257,Nm(oe,v,I,m,s),oe.mode&1&&km(m,U,s),s=oe,k=U;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if((s&1)===0){km(m,U,s),ld();break e}k=Error(t(426))}}else if(Je&&I.mode&1){var it=Pm(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Nm(it,v,I,m,s),vh(uo(k,I));break e}}m=k=uo(k,I),_t!==4&&(_t=2),Va===null?Va=[m]:Va.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var L=Cm(m,k,s);em(m,L);break e;case 1:I=k;var D=m.type,j=m.stateNode;if((m.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(as===null||!as.has(j)))){m.flags|=65536,s&=-s,m.lanes|=s;var Z=Rm(m,I,s);em(m,Z);break e}}m=m.return}while(m!==null)}lg(a)}catch(he){s=he,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function og(){var n=mu.current;return mu.current=uu,n===null?uu:n}function ld(){(_t===0||_t===3||_t===2)&&(_t=4),It===null||(ti&268435455)===0&&(gu&268435455)===0||cs(It,Pt)}function Tu(n,s){var a=Me;Me|=2;var c=og();(It!==n||Pt!==s)&&(Dr=null,ri(n,s));do try{nE();break}catch(d){ig(n,d)}while(!0);if(Eh(),Me=a,mu.current=c,ut!==null)throw Error(t(261));return It=null,Pt=0,_t}function nE(){for(;ut!==null;)ag(ut)}function rE(){for(;ut!==null&&!vl();)ag(ut)}function ag(n){var s=hg(n.alternate,n,hn);n.memoizedProps=n.pendingProps,s===null?lg(n):ut=s,Zh.current=null}function lg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=Qw(a,s,hn),a!==null){ut=a;return}}else{if(a=Yw(a,s),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,ut=null;return}}if(s=s.sibling,s!==null){ut=s;return}ut=s=n}while(s!==null);_t===0&&(_t=5)}function si(n,s,a){var c=De,d=Tn.transition;try{Tn.transition=null,De=1,sE(n,s,a,c)}finally{Tn.transition=d,De=c}return null}function sE(n,s,a,c){do po();while(ls!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if($e(n,m),n===It&&(ut=It=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||_u||(_u=!0,dg(mn,function(){return po(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Tn.transition,Tn.transition=null;var v=De;De=1;var I=Me;Me|=4,Zh.current=null,Jw(n,a),Jm(a,n),Sw(lh),Xr=!!ah,lh=ah=null,n.current=a,Zw(a),Hc(),Me=I,De=v,Tn.transition=m}else n.current=a;if(_u&&(_u=!1,ls=n,vu=d),m=n.pendingLanes,m===0&&(as=null),Tl(a.stateNode),Zt(n,We()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(yu)throw yu=!1,n=nd,nd=null,n;return(vu&1)!==0&&n.tag!==0&&po(),m=n.pendingLanes,(m&1)!==0?n===rd?Oa++:(Oa=0,rd=n):Oa=0,rs(),null}function po(){if(ls!==null){var n=Qr(vu),s=Tn.transition,a=De;try{if(Tn.transition=null,De=16>n?16:n,ls===null)var c=!1;else{if(n=ls,ls=null,vu=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,le=n.current;le!==null;){var m=le,v=m.child;if((le.flags&16)!==0){var I=m.deletions;if(I!==null){for(var k=0;k<I.length;k++){var U=I[k];for(le=U;le!==null;){var K=le;switch(K.tag){case 0:case 11:case 15:Da(8,K,m)}var Y=K.child;if(Y!==null)Y.return=K,le=Y;else for(;le!==null;){K=le;var G=K.sibling,oe=K.return;if(Gm(K),K===U){le=null;break}if(G!==null){G.return=oe,le=G;break}le=oe}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}le=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,le=v;else e:for(;le!==null;){if(m=le,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Da(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,le=L;break e}le=m.return}}var D=n.current;for(le=D;le!==null;){v=le;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,le=j;else e:for(v=D;le!==null;){if(I=le,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:pu(9,I)}}catch(he){rt(I,I.return,he)}if(I===v){le=null;break e}var Z=I.sibling;if(Z!==null){Z.return=I.return,le=Z;break e}le=I.return}}if(Me=d,rs(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(zs,n)}catch{}c=!0}return c}finally{De=a,Tn.transition=s}}return!1}function ug(n,s,a){s=uo(a,s),s=Cm(n,s,1),n=is(n,s,1),s=Wt(),n!==null&&(Gr(n,1,s),Zt(n,s))}function rt(n,s,a){if(n.tag===3)ug(n,n,a);else for(;s!==null;){if(s.tag===3){ug(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(as===null||!as.has(c))){n=uo(a,n),n=Rm(s,n,1),s=is(s,n,1),n=Wt(),s!==null&&(Gr(s,1,n),Zt(s,n));break}}s=s.return}}function iE(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Wt(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Pt&a)===a&&(_t===4||_t===3&&(Pt&130023424)===Pt&&500>We()-td?ri(n,0):ed|=a),Zt(n,s)}function cg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Mi,Mi<<=1,(Mi&130023424)===0&&(Mi=4194304)));var a=Wt();n=kr(n,s),n!==null&&(Gr(n,s,a),Zt(n,a))}function oE(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),cg(n,a)}function aE(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),cg(n,a)}var hg;hg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Qt.current)Xt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Xt=!1,Kw(n,s,a);Xt=(n.flags&131072)!==0}else Xt=!1,Je&&(s.flags&1048576)!==0&&qp(s,Xl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;du(n,s),n=s.pendingProps;var d=to(s,Ot.current);ao(s,a),d=Dh(null,s,c,n,d,a);var m=bh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(c)?(m=!0,Kl(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ah(s),d.updater=cu,s.stateNode=d,d._reactInternals=s,Fh(s,c,n,a),s=$h(null,s,c,!0,m,a)):(s.tag=0,Je&&m&&mh(s),Ht(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(du(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=uE(c),n=jn(c,n),d){case 0:s=Bh(null,s,c,n,a);break e;case 1:s=Lm(null,s,c,n,a);break e;case 11:s=Dm(null,s,c,n,a);break e;case 14:s=bm(null,s,c,jn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:jn(c,d),Bh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:jn(c,d),Lm(n,s,c,d,a);case 3:e:{if(jm(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,Zp(n,s),ru(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=uo(Error(t(423)),s),s=Fm(n,s,c,a,d);break e}else if(c!==d){d=uo(Error(t(424)),s),s=Fm(n,s,c,a,d);break e}else for(cn=es(s.stateNode.containerInfo.firstChild),un=s,Je=!0,Ln=null,a=Xp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(so(),c===d){s=Nr(n,s,a);break e}Ht(n,s,c,a)}s=s.child}return s;case 5:return nm(s),n===null&&_h(s),c=s.type,d=s.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,uh(c,d)?v=null:m!==null&&uh(c,m)&&(s.flags|=32),Mm(n,s),Ht(n,s,v,a),s.child;case 6:return n===null&&_h(s),null;case 13:return Um(n,s,a);case 4:return xh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=io(s,null,c,a):Ht(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:jn(c,d),Dm(n,s,c,d,a);case 7:return Ht(n,s,s.pendingProps,a),s.child;case 8:return Ht(n,s,s.pendingProps.children,a),s.child;case 12:return Ht(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,Ge(eu,c._currentValue),c._currentValue=v,m!==null)if(Mn(m.value,v)){if(m.children===d.children&&!Qt.current){s=Nr(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var I=m.dependencies;if(I!==null){v=m.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=Pr(-1,a&-a),k.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?k.next=k:(k.next=K.next,K.next=k),U.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Ih(m.return,a,s),I.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Ih(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Ht(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,ao(s,a),d=wn(d),c=c(d),s.flags|=1,Ht(n,s,c,a),s.child;case 14:return c=s.type,d=jn(c,s.pendingProps),d=jn(c.type,d),bm(n,s,c,d,a);case 15:return Vm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:jn(c,d),du(n,s),s.tag=1,Yt(c)?(n=!0,Kl(s)):n=!1,ao(s,a),Am(s,c,d),Fh(s,c,d,a),$h(null,s,c,!0,n,a);case 19:return Bm(n,s,a);case 22:return Om(n,s,a)}throw Error(t(156,s.tag))};function dg(n,s){return Vi(n,s)}function lE(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,s,a,c){return new lE(n,s,a,c)}function ud(n){return n=n.prototype,!(!n||!n.isReactComponent)}function uE(n){if(typeof n=="function")return ud(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===ft)return 14}return 2}function hs(n,s){var a=n.alternate;return a===null?(a=In(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Iu(n,s,a,c,d,m){var v=2;if(c=n,typeof n=="function")ud(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return ii(a.children,d,m,s);case S:v=8,d|=8;break;case C:return n=In(12,a,s,d|2),n.elementType=C,n.lanes=m,n;case R:return n=In(13,a,s,d),n.elementType=R,n.lanes=m,n;case Ze:return n=In(19,a,s,d),n.elementType=Ze,n.lanes=m,n;case Te:return Su(a,d,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case b:v=9;break e;case V:v=11;break e;case ft:v=14;break e;case se:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=In(v,a,s,d),s.elementType=n,s.type=c,s.lanes=m,s}function ii(n,s,a,c){return n=In(7,n,c,s),n.lanes=a,n}function Su(n,s,a,c){return n=In(22,n,c,s),n.elementType=Te,n.lanes=a,n.stateNode={isHidden:!1},n}function cd(n,s,a){return n=In(6,n,null,s),n.lanes=a,n}function hd(n,s,a){return s=In(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function cE(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wr(0),this.expirationTimes=Wr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function dd(n,s,a,c,d,m,v,I,k){return n=new cE(n,s,a,I,k),s===1?(s=1,m===!0&&(s|=8)):s=0,m=In(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ah(m),n}function hE(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function fg(n){if(!n)return ns;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return zp(n,a,s)}return s}function pg(n,s,a,c,d,m,v,I,k){return n=dd(a,c,!0,n,d,m,v,I,k),n.context=fg(null),a=n.current,c=Wt(),d=us(a),m=Pr(c,d),m.callback=s??null,is(a,m,d),n.current.lanes=d,Gr(n,d,c),Zt(n,c),n}function Au(n,s,a,c){var d=s.current,m=Wt(),v=us(d);return a=fg(a),s.context===null?s.context=a:s.pendingContext=a,s=Pr(m,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=is(d,s,v),n!==null&&(zn(n,d,v,m),nu(n,d,v)),v}function xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function fd(n,s){mg(n,s),(n=n.alternate)&&mg(n,s)}function dE(){return null}var gg=typeof reportError=="function"?reportError:function(n){console.error(n)};function pd(n){this._internalRoot=n}Cu.prototype.render=pd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Au(n,s,null,null)},Cu.prototype.unmount=pd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ni(function(){Au(null,n,null,null)}),s[Ar]=null}};function Cu(n){this._internalRoot=n}Cu.prototype.unstable_scheduleHydration=function(n){if(n){var s=Cl();n={blockedOn:null,target:n,priority:s};for(var a=0;a<Xn.length&&s!==0&&s<Xn[a].priority;a++);Xn.splice(a,0,n),a===0&&Pl(n)}};function md(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function yg(){}function fE(n,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var U=xu(v);m.call(U)}}var v=pg(s,c,n,0,null,!1,!1,"",yg);return n._reactRootContainer=v,n[Ar]=v.current,va(n.nodeType===8?n.parentNode:n),ni(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var U=xu(k);I.call(U)}}var k=dd(n,0,!1,null,null,!1,!1,"",yg);return n._reactRootContainer=k,n[Ar]=k.current,va(n.nodeType===8?n.parentNode:n),ni(function(){Au(s,k,a,c)}),k}function ku(n,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var I=d;d=function(){var k=xu(v);I.call(k)}}Au(s,v,n,d)}else v=fE(a,s,n,d,c);return xu(v)}Al=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Hr(s.pendingLanes);a!==0&&(Kr(s,a|1),Zt(s,We()),(Me&6)===0&&(fo=We()+500,rs()))}break;case 13:ni(function(){var c=kr(n,1);if(c!==null){var d=Wt();zn(c,n,1,d)}}),fd(n,1)}},Li=function(n){if(n.tag===13){var s=kr(n,134217728);if(s!==null){var a=Wt();zn(s,n,134217728,a)}fd(n,134217728)}},xl=function(n){if(n.tag===13){var s=us(n),a=kr(n,s);if(a!==null){var c=Wt();zn(a,n,s,c)}fd(n,s)}},Cl=function(){return De},Rl=function(n,s){var a=De;try{return De=n,s()}finally{De=a}},Ri=function(n,s,a){switch(s){case"input":if(qo(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Wl(c);if(!d)throw Error(t(90));Ti(c),qo(c,d)}}}break;case"textarea":xi(n,a);break;case"select":s=a.value,s!=null&&yr(n,!!a.multiple,s,!1)}},Ms=od,ea=ni;var pE={usingClientEntryPoint:!1,Events:[Ta,Zi,Wl,Qn,Zo,od]},Ma={findFiberByHostInstance:Ks,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mE={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ra(n),n===null?null:n.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||dE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{zs=Pu.inject(mE),sn=Pu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pE,en.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(s))throw Error(t(200));return hE(n,s,null,a)},en.createRoot=function(n,s){if(!md(n))throw Error(t(299));var a=!1,c="",d=gg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=dd(n,1,!1,null,null,a,!1,c,d),n[Ar]=s.current,va(n.nodeType===8?n.parentNode:n),new pd(s)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ra(s),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return ni(n)},en.hydrate=function(n,s,a){if(!Ru(s))throw Error(t(200));return ku(null,n,s,!0,a)},en.hydrateRoot=function(n,s,a){if(!md(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=gg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=pg(s,null,n,1,a??null,d,!1,m,v),n[Ar]=s.current,va(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Cu(s)},en.render=function(n,s,a){if(!Ru(s))throw Error(t(200));return ku(null,n,s,!1,a)},en.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(ni(function(){ku(null,null,n,!1,function(){n._reactRootContainer=null,n[Ar]=null})}),!0):!1},en.unstable_batchedUpdates=od,en.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Ru(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ku(n,s,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Ag;function SE(){if(Ag)return _d.exports;Ag=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),_d.exports=IE(),_d.exports}var xg;function AE(){if(xg)return Nu;xg=1;var r=SE();return Nu.createRoot=r.createRoot,Nu.hydrateRoot=r.hydrateRoot,Nu}var xE=AE();/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),xt=(r,e)=>{const t=Ue.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:h,className:p="",children:g,..._},T)=>Ue.createElement("svg",{ref:T,...CE,width:o,height:o,stroke:i,strokeWidth:h?Number(u)*24/Number(o):u,className:["lucide",`lucide-${RE(r)}`,p].join(" "),..._},[...e.map(([x,A])=>Ue.createElement(x,A)),...Array.isArray(g)?g:[g]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=xt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=xt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=xt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=xt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=xt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=xt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=xt("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=xt("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=xt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=xt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=xt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=xt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=xt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=xt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=xt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=xt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=xt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),br=[{id:"1",name:"Tiago Dutra",email:"tiago@dominus.com",avatar:"TD",color:"bg-blue-500"},{id:"2",name:"Otávio Laplechade",email:"otavio@dominus.com",avatar:"OL",color:"bg-purple-500"},{id:"3",name:"João Braziliano",email:"joao@dominus.com",avatar:"JB",color:"bg-green-500"}],jE=({onLogin:r})=>{const[e,t]=Ue.useState(""),[i,o]=Ue.useState(""),[u,h]=Ue.useState(""),p=g=>{if(g.preventDefault(),!e){h("Selecione um usuário");return}const _=br.find(x=>x.id===e);if(!_){h("Usuário não encontrado");return}if(i!=={1:"tiago123",2:"otavio123",3:"joao123"}[e]){h("Senha incorreta");return}r(_)};return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:w.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl",children:[w.jsxs("div",{className:"text-center mb-8",children:[w.jsx("div",{className:"flex items-center justify-center mb-4",children:w.jsx("img",{src:"/AgendaDominus/DominusClear.png",alt:"Dominus Logo",className:"w-16 h-16"})}),w.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Dominus"}),w.jsx("p",{className:"text-purple-200",children:"Sistema de Agenda"})]}),w.jsxs("form",{onSubmit:p,className:"space-y-6",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-white mb-3",children:"Selecionar Usuário"}),w.jsx("div",{className:"space-y-2",children:br.map(g=>w.jsxs("label",{className:"flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors border border-white/10",children:[w.jsx("input",{type:"radio",name:"user",value:g.id,checked:e===g.id,onChange:_=>t(_.target.value),className:"sr-only"}),w.jsx("div",{className:`w-10 h-10 rounded-full ${g.color} flex items-center justify-center text-white font-bold mr-3`,children:g.avatar}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-medium",children:g.name}),w.jsx("p",{className:"text-purple-200 text-sm",children:g.email})]}),e===g.id&&w.jsx("div",{className:"ml-auto",children:w.jsx("div",{className:"w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center",children:w.jsx("div",{className:"w-2 h-2 bg-white rounded-full"})})})]},g.id))})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-white mb-2",children:"Senha"}),w.jsx("input",{type:"password",value:i,onChange:g=>o(g.target.value),className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Digite sua senha"})]}),u&&w.jsx("div",{className:"bg-red-500/20 border border-red-500/50 rounded-lg p-3",children:w.jsx("p",{className:"text-red-200 text-sm",children:u})}),w.jsxs("button",{type:"submit",className:"w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 flex items-center justify-center",children:[w.jsx(NE,{className:"h-5 w-5 mr-2"}),"Entrar no Dominus"]})]})]})})},FE=({currentUser:r,selectedDate:e,onClose:t,onSave:i})=>{const[o,u]=Ue.useState(""),[h,p]=Ue.useState(""),[g,_]=Ue.useState(e),[T,x]=Ue.useState(""),[A,B]=Ue.useState("meeting"),[W,X]=Ue.useState("presencial"),[F,Q]=Ue.useState(""),J=ne=>{if(ne.preventDefault(),!o.trim()||!T.trim())return;const me={title:o.trim(),description:h.trim(),date:g,time:T,userId:r.id,type:A,location:{type:W,value:F.trim()||(W==="online"?"Online":"A definir")}};i(me)};return w.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:w.jsxs("div",{className:"bg-white rounded-xl w-full max-w-sm shadow-xl",children:[w.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-100",children:[w.jsx("h2",{className:"text-lg font-bold text-gray-900",children:"Novo Evento"}),w.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:w.jsx(pf,{className:"h-5 w-5"})})]}),w.jsxs("form",{onSubmit:J,className:"p-4 space-y-4",children:[w.jsxs("div",{children:[w.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[w.jsx(c_,{className:"h-4 w-4 inline mr-1"}),"Título"]}),w.jsx("input",{type:"text",value:o,onChange:ne=>u(ne.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Digite o título do evento",required:!0})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Descrição"}),w.jsx("textarea",{value:h,onChange:ne=>p(ne.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none",rows:3,placeholder:"Descrição opcional do evento"})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[w.jsx(Ya,{className:"h-4 w-4 inline mr-1"}),"Data"]}),w.jsx("input",{type:"date",value:g,onChange:ne=>_(ne.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"})]}),w.jsxs("div",{children:[w.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[w.jsx(xo,{className:"h-4 w-4 inline mr-1"}),"Horário"]}),w.jsx("input",{type:"time",value:T,onChange:ne=>x(ne.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:!0})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Local do Evento"}),w.jsxs("div",{className:"space-y-3",children:[w.jsxs("div",{className:"flex space-x-4",children:[w.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[w.jsx("input",{type:"radio",name:"locationType",value:"presencial",checked:W==="presencial",onChange:ne=>X(ne.target.value),className:"text-purple-600 focus:ring-purple-500"}),w.jsx("span",{className:"text-sm text-gray-700",children:"Presencial"})]}),w.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[w.jsx("input",{type:"radio",name:"locationType",value:"online",checked:W==="online",onChange:ne=>X(ne.target.value),className:"text-purple-600 focus:ring-purple-500"}),w.jsx("span",{className:"text-sm text-gray-700",children:"Online"})]})]}),w.jsx("input",{type:"text",value:F,onChange:ne=>Q(ne.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:W==="presencial"?"Digite o endereço do local":"Digite o link da reunião"})]})]}),w.jsxs("div",{children:[w.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[w.jsx(f_,{className:"h-4 w-4 inline mr-1"}),"Tipo de Evento"]}),w.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[w.jsx("button",{type:"button",onClick:()=>B("meeting"),className:`p-3 rounded-lg border-2 transition-all ${A==="meeting"?"border-blue-500 bg-blue-50 text-blue-700":"border-gray-200 text-gray-600 hover:border-blue-300"}`,children:w.jsx("div",{className:"text-center",children:w.jsx("div",{className:"font-medium text-sm",children:"Reunião"})})}),w.jsx("button",{type:"button",onClick:()=>B("task"),className:`p-3 rounded-lg border-2 transition-all ${A==="task"?"border-green-500 bg-green-50 text-green-700":"border-gray-200 text-gray-600 hover:border-green-300"}`,children:w.jsx("div",{className:"text-center",children:w.jsx("div",{className:"font-medium text-sm",children:"Tarefa"})})}),w.jsx("button",{type:"button",onClick:()=>B("reminder"),className:`p-3 rounded-lg border-2 transition-all ${A==="reminder"?"border-yellow-500 bg-yellow-50 text-yellow-700":"border-gray-200 text-gray-600 hover:border-yellow-300"}`,children:w.jsx("div",{className:"text-center",children:w.jsx("div",{className:"font-medium text-sm",children:"Lembrete"})})})]})]}),w.jsxs("div",{className:"flex space-x-3 pt-3",children:[w.jsx("button",{type:"button",onClick:t,className:"flex-1 px-3 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium",children:"Cancelar"}),w.jsx("button",{type:"submit",className:"flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium",children:"Salvar Evento"})]})]})]})})},UE=({event:r,currentUser:e,onClose:t,onDelete:i})=>{const[o,u]=Ue.useState(!1),h=br.find(A=>A.id===r.userId),p=e.id===r.userId,g=()=>{i&&(i(r.id),t())},_=A=>new Date(A).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),T=A=>{switch(A){case"meeting":return"Reunião";case"task":return"Tarefa";case"reminder":return"Lembrete";default:return A}},x=A=>{switch(A){case"meeting":return"bg-blue-100 text-blue-800";case"task":return"bg-green-100 text-green-800";case"reminder":return"bg-yellow-100 text-yellow-800";default:return"bg-gray-100 text-gray-800"}};return w.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:w.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md shadow-2xl",children:[w.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-100",children:[w.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Detalhes do Evento"}),w.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:w.jsx(pf,{className:"h-6 w-6"})})]}),w.jsxs("div",{className:"p-6 space-y-6",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[w.jsx(c_,{className:"h-5 w-5 text-purple-600"}),w.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:r.title})]}),w.jsxs("span",{className:`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${x(r.type)}`,children:[w.jsx(f_,{className:"h-3 w-3 mr-1"}),T(r.type)]})]}),r.description&&w.jsx("div",{children:w.jsx("p",{className:"text-gray-600",children:r.description})}),w.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx(Ya,{className:"h-5 w-5 text-purple-600"}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:"Data"}),w.jsx("p",{className:"text-gray-600 capitalize",children:_(r.date)})]})]}),w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx(xo,{className:"h-5 w-5 text-purple-600"}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:"Horário"}),w.jsx("p",{className:"text-gray-600",children:r.time})]})]})]}),r.location&&w.jsxs("div",{className:"flex items-start space-x-3",children:[r.location.type==="presencial"?w.jsx(d_,{className:"h-5 w-5 text-purple-600 mt-0.5"}):w.jsx(h_,{className:"h-5 w-5 text-purple-600 mt-0.5"}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:r.location.type==="presencial"?"Local":"Link da Reunião"}),r.location.type==="online"?w.jsx("a",{href:r.location.value,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline break-all",children:r.location.value}):w.jsx("p",{className:"text-gray-600",children:r.location.value})]})]}),w.jsxs("div",{className:"flex items-center space-x-3 pt-4 border-t border-gray-100",children:[w.jsx(ME,{className:"h-5 w-5 text-purple-600"}),w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("div",{className:`w-8 h-8 rounded-full ${h?.color} flex items-center justify-center text-white font-bold text-sm`,children:h?.avatar}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:"Criado por"}),w.jsx("p",{className:"text-gray-600",children:h?.name})]})]})]}),o?w.jsxs("div",{className:"space-y-3",children:[w.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3",children:w.jsx("p",{className:"text-red-800 text-sm text-center",children:"Tem certeza que deseja excluir este evento?"})}),w.jsxs("div",{className:"flex space-x-3",children:[w.jsx("button",{onClick:()=>u(!1),className:"flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium",children:"Cancelar"}),w.jsx("button",{onClick:g,className:"flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium",children:"Excluir"})]})]}):w.jsxs("div",{className:"space-y-3",children:[p&&w.jsxs("button",{onClick:()=>u(!0),className:"w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center",children:[w.jsx(OE,{className:"h-4 w-4 mr-2"}),"Excluir Evento"]}),w.jsx("button",{onClick:t,className:"w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium",children:"Fechar"})]})]})]})})},zE=({programmer:r,session:e,onClose:t})=>{const i=g=>new Date(g).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),o=g=>{const _=new Date(g),x=new Date().getTime()-_.getTime(),A=Math.floor(x/(1e3*60*60)),B=Math.floor(x%(1e3*60*60)/(1e3*60)),W=Math.floor(x%(1e3*60)/1e3);return{hours:A,minutes:B,seconds:W}},[u,h]=Yu.useState(new Date);Yu.useEffect(()=>{const g=setInterval(()=>{h(new Date)},1e3);return()=>clearInterval(g)},[]);const p=o(e.startTime);return w.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:w.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md shadow-2xl",children:[w.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-100",children:[w.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Sessão de Desenvolvimento"}),w.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:w.jsx(pf,{className:"h-6 w-6"})})]}),w.jsxs("div",{className:"p-6 space-y-6",children:[w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:`w-20 h-20 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`,children:r.avatar}),w.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:r.name}),w.jsxs("div",{className:"flex items-center justify-center space-x-2 text-green-600",children:[w.jsx(Ld,{className:"h-5 w-5"}),w.jsx("span",{className:"font-medium",children:"Desenvolvendo"}),w.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"})]})]}),w.jsxs("div",{className:"bg-gray-50 rounded-xl p-4 space-y-4",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center space-x-2 text-gray-600",children:[w.jsx(jd,{className:"h-4 w-4"}),w.jsx("span",{className:"font-medium",children:"Iniciado às"})]}),w.jsx("span",{className:"font-mono text-gray-900",children:i(e.startTime)})]}),w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center space-x-2 text-gray-600",children:[w.jsx(xo,{className:"h-4 w-4"}),w.jsx("span",{className:"font-medium",children:"Duração"})]}),w.jsxs("span",{className:"font-mono text-gray-900 text-lg",children:[String(p.hours).padStart(2,"0"),":",String(p.minutes).padStart(2,"0"),":",String(p.seconds).padStart(2,"0")]})]}),w.jsx("div",{className:"border-t border-gray-200 pt-4",children:w.jsxs("div",{className:"text-center",children:[w.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Horário atual"}),w.jsx("p",{className:"font-mono text-xl text-gray-900",children:u.toLocaleTimeString("pt-BR")})]})})]}),w.jsx("div",{className:"text-center",children:w.jsxs("div",{className:"inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full",children:[w.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),w.jsx("span",{className:"text-sm font-medium",children:"Sessão ativa"})]})}),w.jsx("button",{onClick:t,className:"w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium",children:"Entendi"})]})]})})},BE=({events:r,selectedDate:e,onDateSelect:t,onEventClick:i})=>{const[o,u]=Yu.useState(new Date),[h,p]=Yu.useState({}),g=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],_=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],T=F=>{const Q=F.getFullYear(),J=F.getMonth(),ne=new Date(Q,J,1),Ee=new Date(Q,J+1,0).getDate(),Ae=ne.getDay(),N=[];for(let C=Ae-1;C>=0;C--){const P=new Date(Q,J,-C);N.push({date:P,isCurrentMonth:!1,dateString:P.toISOString().split("T")[0]})}for(let C=1;C<=Ee;C++){const P=new Date(Q,J,C);N.push({date:P,isCurrentMonth:!0,dateString:P.toISOString().split("T")[0]})}const S=42-N.length;for(let C=1;C<=S;C++){const P=new Date(Q,J+1,C);N.push({date:P,isCurrentMonth:!1,dateString:P.toISOString().split("T")[0]})}return N},x=F=>{u(Q=>{const J=new Date(Q);return F==="prev"?J.setMonth(Q.getMonth()-1):J.setMonth(Q.getMonth()+1),J})},A=F=>r.filter(Q=>Q.date===F),B=T(o),W=new Date().toISOString().split("T")[0];return B.map(F=>F.dateString).every(F=>h[F]),w.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100",children:[w.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-100",children:[w.jsxs("div",{className:"flex items-center space-x-4",children:[w.jsx(Ya,{className:"h-6 w-6 text-purple-600"}),w.jsxs("h2",{className:"text-xl font-bold text-gray-900",children:[g[o.getMonth()]," ",o.getFullYear()]})]}),w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("button",{onClick:()=>x("prev"),className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:w.jsx(kE,{className:"h-5 w-5 text-gray-600"})}),w.jsx("button",{onClick:()=>{u(new Date),t(new Date().toISOString().split("T")[0])},className:"px-3 py-1 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors",children:"Hoje"}),w.jsx("button",{onClick:()=>x("next"),className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:w.jsx(PE,{className:"h-5 w-5 text-gray-600"})})]})]}),w.jsx("div",{className:"p-6 pb-0",children:w.jsx("div",{className:"grid grid-cols-7 gap-1 mb-4",children:_.map(F=>w.jsx("div",{className:"p-2 text-center text-sm font-medium text-gray-500",children:F},F))})}),w.jsx("div",{className:"p-6",children:w.jsx("div",{className:"grid grid-cols-7 gap-1",children:B.map((F,Q)=>{const J=A(F.dateString),ne=F.dateString===e,me=F.dateString===W;return w.jsxs("div",{onClick:()=>t(F.dateString),className:`min-h-[120px] p-2 border border-gray-100 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${F.isCurrentMonth?"":"bg-gray-50 text-gray-400"} ${ne?"ring-2 ring-purple-500 bg-purple-50":""} ${me?"bg-blue-50 border-blue-200":""}`,children:[w.jsx("div",{className:`text-sm font-medium mb-1 ${me?"text-blue-600":F.isCurrentMonth?"text-gray-900":"text-gray-400"}`,children:F.date.getDate()}),w.jsxs("div",{className:"space-y-1",children:[J.slice(0,3).map(Ee=>{const Ae=br.find(N=>N.id===Ee.userId);return w.jsx("div",{onClick:N=>{N.stopPropagation(),i(Ee)},className:`text-xs p-2 rounded cursor-pointer hover:opacity-80 min-h-[60px] ${Ee.type==="meeting"?"bg-blue-100 text-blue-800":Ee.type==="task"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,title:`${Ee.title} - ${Ee.time}`,children:w.jsxs("div",{className:"flex flex-col gap-1 h-full",children:[w.jsxs("div",{className:"flex items-center space-x-1",children:[w.jsx("div",{className:`w-2 h-2 rounded-full ${Ae?.color} flex-shrink-0`}),w.jsx("span",{className:"font-semibold text-xs leading-tight",children:Ee.title})]}),w.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-gray-600",children:[w.jsx(xo,{className:"w-3 h-3"}),w.jsx("span",{children:Ee.time})]}),Ee.location?.type&&w.jsx("div",{className:"mt-1",children:w.jsx("span",{className:`px-1.5 py-0.5 rounded text-white text-[10px] font-medium ${Ee.location.type==="presencial"?"bg-purple-500":"bg-blue-500"}`,children:Ee.location.type==="presencial"?"Presencial":"Online"})})]})},Ee.id)}),J.length>3&&w.jsxs("div",{className:"text-xs text-gray-500 text-center",children:["+",J.length-3," mais"]})]})]},Q)})})})]})},$E=()=>{};var Cg={};/**
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
 */const p_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},qE=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[i++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},m_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,T=u>>2,x=(u&3)<<4|p>>4;let A=(p&15)<<2|_>>6,B=_&63;g||(B=64,h||(A=64)),i.push(t[T],t[x],t[A],t[B])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(p_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):qE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const x=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||_==null||x==null)throw new HE;const A=u<<2|p>>4;if(i.push(A),_!==64){const B=p<<4&240|_>>2;if(i.push(B),x!==64){const W=_<<6&192|x;i.push(W)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class HE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WE=function(r){const e=p_(r);return m_.encodeByteArray(e,!0)},Xu=function(r){return WE(r).replace(/\./g,"")},g_=function(r){try{return m_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KE=()=>GE().__FIREBASE_DEFAULTS__,QE=()=>{if(typeof process>"u"||typeof Cg>"u")return;const r=Cg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},YE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&g_(r[1]);return e&&JSON.parse(e)},vc=()=>{try{return $E()||KE()||QE()||YE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},y_=r=>vc()?.emulatorHosts?.[r],XE=r=>{const e=y_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},__=()=>vc()?.config,v_=r=>vc()?.[`_${r}`];/**
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
 */class JE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Oo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function w_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function ZE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Xu(JSON.stringify(t)),Xu(JSON.stringify(h)),""].join(".")}const $a={};function eT(){const r={prod:[],emulator:[]};for(const e of Object.keys($a))$a[e]?r.emulator.push(e):r.prod.push(e);return r}function tT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Rg=!1;function E_(r,e){if(typeof window>"u"||typeof document>"u"||!Oo(window.location.host)||$a[r]===e||$a[r]||Rg)return;$a[r]=e;function t(A){return`__firebase__banner__${A}`}const i="__firebase__banner",u=eT().prod.length>0;function h(){const A=document.getElementById(i);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function g(A,B){A.setAttribute("width","24"),A.setAttribute("id",B),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function _(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Rg=!0,h()},A}function T(A,B){A.setAttribute("id",B),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function x(){const A=tT(i),B=t("text"),W=document.getElementById(B)||document.createElement("span"),X=t("learnmore"),F=document.getElementById(X)||document.createElement("a"),Q=t("preprendIcon"),J=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const ne=A.element;p(ne),T(F,X);const me=_();g(J,Q),ne.append(J,W,F,me),document.body.appendChild(ne)}u?(W.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function rT(){const r=vc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function T_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function iT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oT(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function aT(){return!rT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I_(){try{return typeof indexedDB=="object"}catch{return!1}}function S_(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}function lT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const uT="FirebaseError";class Gn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=uT,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?cT(u,i):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Gn(o,p,i)}}function cT(r,e){return r.replace(hT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const hT=/\{\$([^}]+)}/g;function dT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Is(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const u=r[o],h=e[o];if(kg(u)&&kg(h)){if(!Is(u,h))return!1}else if(u!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function kg(r){return r!==null&&typeof r=="object"}/**
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
 */function ol(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fT(r,e){const t=new pT(r,e);return t.subscribe.bind(t)}class pT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");mT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Ed),o.error===void 0&&(o.error=Ed),o.complete===void 0&&(o.complete=Ed);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ed(){}/**
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
 */const gT=1e3,yT=2,_T=14400*1e3,vT=.5;function Pg(r,e=gT,t=yT){const i=e*Math.pow(t,r),o=Math.round(vT*i*(Math.random()-.5)*2);return Math.min(_T,i+o)}/**
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
 */function bt(r){return r&&r._delegate?r._delegate:r}class qn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const oi="[DEFAULT]";/**
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
 */class wT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new JE;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TT(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});i.resolve(u)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);i===p&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&e(u,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ET(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ET(r){return r===oi?void 0:r}function TT(r){return r.instantiationMode==="EAGER"}/**
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
 */class IT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ke||(ke={}));const ST={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},AT=ke.INFO,xT={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},CT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=xT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=AT,this._logHandler=CT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ST[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const RT=(r,e)=>e.some(t=>r instanceof t);let Ng,Dg;function kT(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PT(){return Dg||(Dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const A_=new WeakMap,Fd=new WeakMap,x_=new WeakMap,Td=new WeakMap,mf=new WeakMap;function NT(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(vs(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&A_.set(t,r)}).catch(()=>{}),mf.set(e,r),e}function DT(r){if(Fd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Fd.set(r,e)}let Ud={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Fd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||x_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function bT(r){Ud=r(Ud)}function VT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Id(this),e,...t);return x_.set(i,e.sort?e.sort():[e]),vs(i)}:PT().includes(r)?function(...e){return r.apply(Id(this),e),vs(A_.get(this))}:function(...e){return vs(r.apply(Id(this),e))}}function OT(r){return typeof r=="function"?VT(r):(r instanceof IDBTransaction&&DT(r),RT(r,kT())?new Proxy(r,Ud):r)}function vs(r){if(r instanceof IDBRequest)return NT(r);if(Td.has(r))return Td.get(r);const e=OT(r);return e!==r&&(Td.set(r,e),mf.set(e,r)),e}const Id=r=>mf.get(r);function C_(r,e,{blocked:t,upgrade:i,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=vs(h);return i&&h.addEventListener("upgradeneeded",g=>{i(vs(h.result),g.oldVersion,g.newVersion,vs(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const MT=["get","getKey","getAll","getAllKeys","count"],LT=["put","add","delete","clear"],Sd=new Map;function bg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Sd.get(e))return Sd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=LT.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||MT.includes(t)))return;const u=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(p.shift())),(await Promise.all([_[t](...p),o&&g.done]))[0]};return Sd.set(e,u),u}bT(r=>({...r,get:(e,t,i)=>bg(e,t)||r.get(e,t,i),has:(e,t)=>!!bg(e,t)||r.has(e,t)}));/**
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
 */class jT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(FT(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function FT(r){return r.getComponent()?.type==="VERSION"}const zd="@firebase/app",Vg="0.14.1";/**
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
 */const Lr=new wc("@firebase/app"),UT="@firebase/app-compat",zT="@firebase/analytics-compat",BT="@firebase/analytics",$T="@firebase/app-check-compat",qT="@firebase/app-check",HT="@firebase/auth",WT="@firebase/auth-compat",GT="@firebase/database",KT="@firebase/data-connect",QT="@firebase/database-compat",YT="@firebase/functions",XT="@firebase/functions-compat",JT="@firebase/installations",ZT="@firebase/installations-compat",eI="@firebase/messaging",tI="@firebase/messaging-compat",nI="@firebase/performance",rI="@firebase/performance-compat",sI="@firebase/remote-config",iI="@firebase/remote-config-compat",oI="@firebase/storage",aI="@firebase/storage-compat",lI="@firebase/firestore",uI="@firebase/ai",cI="@firebase/firestore-compat",hI="firebase",dI="12.1.0";/**
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
 */const Bd="[DEFAULT]",fI={[zd]:"fire-core",[UT]:"fire-core-compat",[BT]:"fire-analytics",[zT]:"fire-analytics-compat",[qT]:"fire-app-check",[$T]:"fire-app-check-compat",[HT]:"fire-auth",[WT]:"fire-auth-compat",[GT]:"fire-rtdb",[KT]:"fire-data-connect",[QT]:"fire-rtdb-compat",[YT]:"fire-fn",[XT]:"fire-fn-compat",[JT]:"fire-iid",[ZT]:"fire-iid-compat",[eI]:"fire-fcm",[tI]:"fire-fcm-compat",[nI]:"fire-perf",[rI]:"fire-perf-compat",[sI]:"fire-rc",[iI]:"fire-rc-compat",[oI]:"fire-gcs",[aI]:"fire-gcs-compat",[lI]:"fire-fst",[cI]:"fire-fst-compat",[uI]:"fire-vertex","fire-js":"fire-js",[hI]:"fire-js-all"};/**
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
 */const Ju=new Map,pI=new Map,$d=new Map;function Og(r,e){try{r.container.addComponent(e)}catch(t){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function fr(r){const e=r.name;if($d.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;$d.set(e,r);for(const t of Ju.values())Og(t,r);for(const t of pI.values())Og(t,r);return!0}function yi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function or(r){return r==null?!1:r.settings!==void 0}/**
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
 */const mI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ws=new gi("app","Firebase",mI);/**
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
 */class gI{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}}/**
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
 */const Mo=dI;function R_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Bd,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw ws.create("bad-app-name",{appName:String(o)});if(t||(t=__()),!t)throw ws.create("no-options");const u=Ju.get(o);if(u){if(Is(t,u.options)&&Is(i,u.config))return u;throw ws.create("duplicate-app",{appName:o})}const h=new IT(o);for(const g of $d.values())h.addComponent(g);const p=new gI(t,i,h);return Ju.set(o,p),p}function gf(r=Bd){const e=Ju.get(r);if(!e&&r===Bd&&__())return R_();if(!e)throw ws.create("no-app",{appName:r});return e}function An(r,e,t){let i=fI[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(h.join(" "));return}fr(new qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yI="firebase-heartbeat-database",_I=1,Xa="firebase-heartbeat-store";let Ad=null;function k_(){return Ad||(Ad=C_(yI,_I,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Xa)}catch(t){console.warn(t)}}}}).catch(r=>{throw ws.create("idb-open",{originalErrorMessage:r.message})})),Ad}async function vI(r){try{const t=(await k_()).transaction(Xa),i=await t.objectStore(Xa).get(P_(r));return await t.done,i}catch(e){if(e instanceof Gn)Lr.warn(e.message);else{const t=ws.create("idb-get",{originalErrorMessage:e?.message});Lr.warn(t.message)}}}async function Mg(r,e){try{const i=(await k_()).transaction(Xa,"readwrite");await i.objectStore(Xa).put(e,P_(r)),await i.done}catch(t){if(t instanceof Gn)Lr.warn(t.message);else{const i=ws.create("idb-set",{originalErrorMessage:t?.message});Lr.warn(i.message)}}}function P_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const wI=1024,EI=30;class TI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new SI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>EI){const o=AI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Lr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lg(),{heartbeatsToSend:t,unsentEntries:i}=II(this._heartbeatsCache.heartbeats),o=Xu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Lr.warn(e),""}}}function Lg(){return new Date().toISOString().substring(0,10)}function II(r,e=wI){const t=[];let i=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),jg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),jg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class SI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return I_()?S_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Mg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Mg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jg(r){return Xu(JSON.stringify({version:2,heartbeats:r})).length}function AI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function xI(r){fr(new qn("platform-logger",e=>new jT(e),"PRIVATE")),fr(new qn("heartbeat",e=>new TI(e),"PRIVATE")),An(zd,Vg,r),An(zd,Vg,"esm2020"),An("fire-js","")}xI("");var Fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Es,N_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function C(){}C.prototype=S.prototype,N.D=S.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(P,b,V){for(var R=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)R[Ze-2]=arguments[Ze];return S.prototype[b].apply(P,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,C){C||(C=0);var P=Array(16);if(typeof S=="string")for(var b=0;16>b;++b)P[b]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(b=0;16>b;++b)P[b]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=N.g[0],C=N.g[1],b=N.g[2];var V=N.g[3],R=S+(V^C&(b^V))+P[0]+3614090360&4294967295;S=C+(R<<7&4294967295|R>>>25),R=V+(b^S&(C^b))+P[1]+3905402710&4294967295,V=S+(R<<12&4294967295|R>>>20),R=b+(C^V&(S^C))+P[2]+606105819&4294967295,b=V+(R<<17&4294967295|R>>>15),R=C+(S^b&(V^S))+P[3]+3250441966&4294967295,C=b+(R<<22&4294967295|R>>>10),R=S+(V^C&(b^V))+P[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=V+(b^S&(C^b))+P[5]+1200080426&4294967295,V=S+(R<<12&4294967295|R>>>20),R=b+(C^V&(S^C))+P[6]+2821735955&4294967295,b=V+(R<<17&4294967295|R>>>15),R=C+(S^b&(V^S))+P[7]+4249261313&4294967295,C=b+(R<<22&4294967295|R>>>10),R=S+(V^C&(b^V))+P[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=V+(b^S&(C^b))+P[9]+2336552879&4294967295,V=S+(R<<12&4294967295|R>>>20),R=b+(C^V&(S^C))+P[10]+4294925233&4294967295,b=V+(R<<17&4294967295|R>>>15),R=C+(S^b&(V^S))+P[11]+2304563134&4294967295,C=b+(R<<22&4294967295|R>>>10),R=S+(V^C&(b^V))+P[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=V+(b^S&(C^b))+P[13]+4254626195&4294967295,V=S+(R<<12&4294967295|R>>>20),R=b+(C^V&(S^C))+P[14]+2792965006&4294967295,b=V+(R<<17&4294967295|R>>>15),R=C+(S^b&(V^S))+P[15]+1236535329&4294967295,C=b+(R<<22&4294967295|R>>>10),R=S+(b^V&(C^b))+P[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=V+(C^b&(S^C))+P[6]+3225465664&4294967295,V=S+(R<<9&4294967295|R>>>23),R=b+(S^C&(V^S))+P[11]+643717713&4294967295,b=V+(R<<14&4294967295|R>>>18),R=C+(V^S&(b^V))+P[0]+3921069994&4294967295,C=b+(R<<20&4294967295|R>>>12),R=S+(b^V&(C^b))+P[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=V+(C^b&(S^C))+P[10]+38016083&4294967295,V=S+(R<<9&4294967295|R>>>23),R=b+(S^C&(V^S))+P[15]+3634488961&4294967295,b=V+(R<<14&4294967295|R>>>18),R=C+(V^S&(b^V))+P[4]+3889429448&4294967295,C=b+(R<<20&4294967295|R>>>12),R=S+(b^V&(C^b))+P[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=V+(C^b&(S^C))+P[14]+3275163606&4294967295,V=S+(R<<9&4294967295|R>>>23),R=b+(S^C&(V^S))+P[3]+4107603335&4294967295,b=V+(R<<14&4294967295|R>>>18),R=C+(V^S&(b^V))+P[8]+1163531501&4294967295,C=b+(R<<20&4294967295|R>>>12),R=S+(b^V&(C^b))+P[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=V+(C^b&(S^C))+P[2]+4243563512&4294967295,V=S+(R<<9&4294967295|R>>>23),R=b+(S^C&(V^S))+P[7]+1735328473&4294967295,b=V+(R<<14&4294967295|R>>>18),R=C+(V^S&(b^V))+P[12]+2368359562&4294967295,C=b+(R<<20&4294967295|R>>>12),R=S+(C^b^V)+P[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=V+(S^C^b)+P[8]+2272392833&4294967295,V=S+(R<<11&4294967295|R>>>21),R=b+(V^S^C)+P[11]+1839030562&4294967295,b=V+(R<<16&4294967295|R>>>16),R=C+(b^V^S)+P[14]+4259657740&4294967295,C=b+(R<<23&4294967295|R>>>9),R=S+(C^b^V)+P[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=V+(S^C^b)+P[4]+1272893353&4294967295,V=S+(R<<11&4294967295|R>>>21),R=b+(V^S^C)+P[7]+4139469664&4294967295,b=V+(R<<16&4294967295|R>>>16),R=C+(b^V^S)+P[10]+3200236656&4294967295,C=b+(R<<23&4294967295|R>>>9),R=S+(C^b^V)+P[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=V+(S^C^b)+P[0]+3936430074&4294967295,V=S+(R<<11&4294967295|R>>>21),R=b+(V^S^C)+P[3]+3572445317&4294967295,b=V+(R<<16&4294967295|R>>>16),R=C+(b^V^S)+P[6]+76029189&4294967295,C=b+(R<<23&4294967295|R>>>9),R=S+(C^b^V)+P[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=V+(S^C^b)+P[12]+3873151461&4294967295,V=S+(R<<11&4294967295|R>>>21),R=b+(V^S^C)+P[15]+530742520&4294967295,b=V+(R<<16&4294967295|R>>>16),R=C+(b^V^S)+P[2]+3299628645&4294967295,C=b+(R<<23&4294967295|R>>>9),R=S+(b^(C|~V))+P[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=V+(C^(S|~b))+P[7]+1126891415&4294967295,V=S+(R<<10&4294967295|R>>>22),R=b+(S^(V|~C))+P[14]+2878612391&4294967295,b=V+(R<<15&4294967295|R>>>17),R=C+(V^(b|~S))+P[5]+4237533241&4294967295,C=b+(R<<21&4294967295|R>>>11),R=S+(b^(C|~V))+P[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=V+(C^(S|~b))+P[3]+2399980690&4294967295,V=S+(R<<10&4294967295|R>>>22),R=b+(S^(V|~C))+P[10]+4293915773&4294967295,b=V+(R<<15&4294967295|R>>>17),R=C+(V^(b|~S))+P[1]+2240044497&4294967295,C=b+(R<<21&4294967295|R>>>11),R=S+(b^(C|~V))+P[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=V+(C^(S|~b))+P[15]+4264355552&4294967295,V=S+(R<<10&4294967295|R>>>22),R=b+(S^(V|~C))+P[6]+2734768916&4294967295,b=V+(R<<15&4294967295|R>>>17),R=C+(V^(b|~S))+P[13]+1309151649&4294967295,C=b+(R<<21&4294967295|R>>>11),R=S+(b^(C|~V))+P[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=V+(C^(S|~b))+P[11]+3174756917&4294967295,V=S+(R<<10&4294967295|R>>>22),R=b+(S^(V|~C))+P[2]+718787259&4294967295,b=V+(R<<15&4294967295|R>>>17),R=C+(V^(b|~S))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+b&4294967295,N.g[3]=N.g[3]+V&4294967295}i.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var C=S-this.blockSize,P=this.B,b=this.h,V=0;V<S;){if(b==0)for(;V<=C;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<S;)if(P[b++]=N.charCodeAt(V++),b==this.blockSize){o(this,P),b=0;break}}else for(;V<S;)if(P[b++]=N[V++],b==this.blockSize){o(this,P),b=0;break}}this.h=b,this.o+=S},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var C=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=C&255,C/=256;for(this.u(N),N=Array(16),S=C=0;4>S;++S)for(var P=0;32>P;P+=8)N[C++]=this.g[S]>>>P&255;return N};function u(N,S){var C=p;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=S(N)}function h(N,S){this.h=S;for(var C=[],P=!0,b=N.length-1;0<=b;b--){var V=N[b]|0;P&&V==S||(C[b]=V,P=!1)}this.g=C}var p={};function g(N){return-128<=N&&128>N?u(N,function(S){return new h([S|0],0>S?-1:0)}):new h([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return x;if(0>N)return F(_(-N));for(var S=[],C=1,P=0;N>=C;P++)S[P]=N/C|0,C*=4294967296;return new h(S,0)}function T(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return F(T(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=_(Math.pow(S,8)),P=x,b=0;b<N.length;b+=8){var V=Math.min(8,N.length-b),R=parseInt(N.substring(b,b+V),S);8>V?(V=_(Math.pow(S,V)),P=P.j(V).add(_(R))):(P=P.j(C),P=P.add(_(R)))}return P}var x=g(0),A=g(1),B=g(16777216);r=h.prototype,r.m=function(){if(X(this))return-F(this).m();for(var N=0,S=1,C=0;C<this.g.length;C++){var P=this.i(C);N+=(0<=P?P:4294967296+P)*S,S*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(W(this))return"0";if(X(this))return"-"+F(this).toString(N);for(var S=_(Math.pow(N,6)),C=this,P="";;){var b=me(C,S).g;C=Q(C,b.j(S));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=b,W(C))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function W(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function X(N){return N.h==-1}r.l=function(N){return N=Q(this,N),X(N)?-1:W(N)?0:1};function F(N){for(var S=N.g.length,C=[],P=0;P<S;P++)C[P]=~N.g[P];return new h(C,~N.h).add(A)}r.abs=function(){return X(this)?F(this):this},r.add=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],P=0,b=0;b<=S;b++){var V=P+(this.i(b)&65535)+(N.i(b)&65535),R=(V>>>16)+(this.i(b)>>>16)+(N.i(b)>>>16);P=R>>>16,V&=65535,R&=65535,C[b]=R<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function Q(N,S){return N.add(F(S))}r.j=function(N){if(W(this)||W(N))return x;if(X(this))return X(N)?F(this).j(F(N)):F(F(this).j(N));if(X(N))return F(this.j(F(N)));if(0>this.l(B)&&0>N.l(B))return _(this.m()*N.m());for(var S=this.g.length+N.g.length,C=[],P=0;P<2*S;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(var b=0;b<N.g.length;b++){var V=this.i(P)>>>16,R=this.i(P)&65535,Ze=N.i(b)>>>16,ft=N.i(b)&65535;C[2*P+2*b]+=R*ft,J(C,2*P+2*b),C[2*P+2*b+1]+=V*ft,J(C,2*P+2*b+1),C[2*P+2*b+1]+=R*Ze,J(C,2*P+2*b+1),C[2*P+2*b+2]+=V*Ze,J(C,2*P+2*b+2)}for(P=0;P<S;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=S;P<2*S;P++)C[P]=0;return new h(C,0)};function J(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ne(N,S){this.g=N,this.h=S}function me(N,S){if(W(S))throw Error("division by zero");if(W(N))return new ne(x,x);if(X(N))return S=me(F(N),S),new ne(F(S.g),F(S.h));if(X(S))return S=me(N,F(S)),new ne(F(S.g),S.h);if(30<N.g.length){if(X(N)||X(S))throw Error("slowDivide_ only works with positive integers.");for(var C=A,P=S;0>=P.l(N);)C=Ee(C),P=Ee(P);var b=Ae(C,1),V=Ae(P,1);for(P=Ae(P,2),C=Ae(C,2);!W(P);){var R=V.add(P);0>=R.l(N)&&(b=b.add(C),V=R),P=Ae(P,1),C=Ae(C,1)}return S=Q(N,b.j(S)),new ne(b,S)}for(b=x;0<=N.l(S);){for(C=Math.max(1,Math.floor(N.m()/S.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=_(C),R=V.j(S);X(R)||0<R.l(N);)C-=P,V=_(C),R=V.j(S);W(V)&&(V=A),b=b.add(V),N=Q(N,R)}return new ne(b,N)}r.A=function(N){return me(this,N).h},r.and=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],P=0;P<S;P++)C[P]=this.i(P)&N.i(P);return new h(C,this.h&N.h)},r.or=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],P=0;P<S;P++)C[P]=this.i(P)|N.i(P);return new h(C,this.h|N.h)},r.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],P=0;P<S;P++)C[P]=this.i(P)^N.i(P);return new h(C,this.h^N.h)};function Ee(N){for(var S=N.g.length+1,C=[],P=0;P<S;P++)C[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(C,N.h)}function Ae(N,S){var C=S>>5;S%=32;for(var P=N.g.length-C,b=[],V=0;V<P;V++)b[V]=0<S?N.i(V+C)>>>S|N.i(V+C+1)<<32-S:N.i(V+C);return new h(b,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,N_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=T,Es=h}).apply(typeof Fg<"u"?Fg:typeof self<"u"?self:typeof window<"u"?window:{});var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D_,Fa,b_,Uu,qd,V_,O_,M_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Du=="object"&&Du];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(l,f){if(f)e:{var y=i;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,M={next:function(){if(!E&&y<l.length){var z=y++;return{value:f(z,l[z]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function T(l,f,y){return l.call.apply(l.bind,arguments)}function x(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function A(l,f,y){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:x,A.apply(null,arguments)}function B(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function W(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,M,z){for(var te=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)te[Be-2]=arguments[Be];return f.prototype[M].apply(E,te)}}function X(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function F(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const M=l.length||0,z=E.length||0;l.length=M+z;for(let te=0;te<z;te++)l[M+te]=E[te]}else l.push(E)}}class Q{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function J(l){return/^[\s\xa0]*$/.test(l)}function ne(){var l=p.navigator;return l&&(l=l.userAgent)?l:""}function me(l){return me[" "](l),l}me[" "]=function(){};var Ee=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Ae(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function N(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function S(l){const f={};for(const y in l)f[y]=l[y];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let z=0;z<C.length;z++)y=C[z],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function b(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function V(l){p.setTimeout(()=>{throw l},0)}function R(){var l=pe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,y){const E=ft.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var ft=new Q(()=>new se,l=>l.reset());class se{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ee=!1,pe=new Ze,ie=()=>{const l=p.Promise.resolve(void 0);Te=()=>{l.then(O)}};var O=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(y){V(y)}var f=ft;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ee=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var xe=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};p.addEventListener("test",y,f),p.removeEventListener("test",y,f)}catch{}return l})();function Ce(l,f){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Ee){e:{try{me(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:be[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ce.aa.h.call(this)}}W(Ce,de);var be={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function He(l,f,y,E,M){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=M,this.key=++Fe,this.da=this.fa=!1}function wt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function mr(l){this.src=l,this.g={},this.h=0}mr.prototype.add=function(l,f,y,E,M){var z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);var te=Br(l,f,E,M);return-1<te?(f=l[te],y||(f.fa=!1)):(f=new He(f,this.src,z,!!E,M),f.fa=y,l.push(f)),f};function Ti(l,f){var y=f.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,f,void 0),z;(z=0<=M)&&Array.prototype.splice.call(E,M,1),z&&(wt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Br(l,f,y,E){for(var M=0;M<l.length;++M){var z=l[M];if(!z.da&&z.listener==f&&z.capture==!!y&&z.ha==E)return M}return-1}var Ds="closure_lm_"+(1e6*Math.random()|0),Ii={};function $o(l,f,y,E,M){if(Array.isArray(f)){for(var z=0;z<f.length;z++)$o(l,f[z],y,E,M);return null}return y=Wo(y),l&&l[je]?l.K(f,y,_(E)?!!E.capture:!1,M):qo(l,f,y,!1,E,M)}function qo(l,f,y,E,M,z){if(!f)throw Error("Invalid event type");var te=_(M)?!!M.capture:!!M,Be=Ai(l);if(Be||(l[Ds]=Be=new mr(l)),y=Be.add(f,y,E,te,z),y.proxy)return y;if(E=gl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)xe||(M=te),M===void 0&&(M=!1),l.addEventListener(f.toString(),E,M);else if(l.attachEvent)l.attachEvent(yr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function gl(){function l(y){return f.call(l.src,l.listener,y)}const f=Ho;return l}function Si(l,f,y,E,M){if(Array.isArray(f))for(var z=0;z<f.length;z++)Si(l,f[z],y,E,M);else E=_(E)?!!E.capture:!!E,y=Wo(y),l&&l[je]?(l=l.i,f=String(f).toString(),f in l.g&&(z=l.g[f],y=Br(z,y,E,M),-1<y&&(wt(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete l.g[f],l.h--)))):l&&(l=Ai(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Br(f,y,E,M)),(y=-1<l?f[l]:null)&&gr(y))}function gr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[je])Ti(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(yr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=Ai(f))?(Ti(y,l),y.h==0&&(y.src=null,f[Ds]=null)):wt(l)}}}function yr(l){return l in Ii?Ii[l]:Ii[l]="on"+l}function Ho(l,f){if(l.da)l=!0;else{f=new Ce(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&gr(l),l=y.call(E,f)}return l}function Ai(l){return l=l[Ds],l instanceof mr?l:null}var xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wo(l){return typeof l=="function"?l:(l[xi]||(l[xi]=function(f){return l.handleEvent(f)}),l[xi])}function pt(){q.call(this),this.i=new mr(this),this.M=this,this.F=null}W(pt,q),pt.prototype[je]=!0,pt.prototype.removeEventListener=function(l,f,y,E){Si(this,l,f,y,E)};function mt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new de(f,l);else if(f instanceof de)f.target=f.target||l;else{var M=f;f=new de(E,l),P(f,M)}if(M=!0,y)for(var z=y.length-1;0<=z;z--){var te=f.g=y[z];M=_r(te,E,!0,f)&&M}if(te=f.g=l,M=_r(te,E,!0,f)&&M,M=_r(te,E,!1,f)&&M,y)for(z=0;z<y.length;z++)te=f.g=y[z],M=_r(te,E,!1,f)&&M}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)wt(y[E]);delete l.g[f],l.h--}}this.F=null},pt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},pt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function _r(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,z=0;z<f.length;++z){var te=f[z];if(te&&!te.da&&te.capture==y){var Be=te.listener,gt=te.ha||te.src;te.fa&&Ti(l.i,te),M=Be.call(gt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Go(l,f,y){if(typeof l=="function")y&&(l=A(l,y));else if(l&&typeof l.handleEvent=="function")l=A(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(l,f||0)}function $r(l){l.g=Go(()=>{l.g=null,l.i&&(l.i=!1,$r(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class bs extends q{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:$r(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(l){q.call(this),this.h=l,this.g={}}W(Vs,q);var Ko=[];function Qo(l){Ae(l.g,function(f,y){this.g.hasOwnProperty(y)&&gr(f)},l),l.g={}}Vs.prototype.N=function(){Vs.aa.N.call(this),Qo(this)},Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yo=p.JSON.stringify,Xo=p.JSON.parse,Jo=class{stringify(l){return p.JSON.stringify(l,void 0)}parse(l){return p.JSON.parse(l,void 0)}};function Os(){}Os.prototype.h=null;function Ci(l){return l.h||(l.h=l.i())}function Ri(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){de.call(this,"d")}W(Kn,de);function ki(){de.call(this,"c")}W(ki,de);var Qn={},Zo=null;function Ms(){return Zo=Zo||new pt}Qn.La="serverreachability";function ea(l){de.call(this,Qn.La,l)}W(ea,de);function vr(l){const f=Ms();mt(f,new ea(f))}Qn.STAT_EVENT="statevent";function ta(l,f){de.call(this,Qn.STAT_EVENT,l),this.stat=f}W(ta,de);function st(l){const f=Ms();mt(f,new ta(f,l))}Qn.Ma="timingevent";function Pi(l,f){de.call(this,Qn.Ma,l),this.size=f}W(Pi,de);function Cn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){l()},f)}function Ls(){this.g=!0}Ls.prototype.xa=function(){this.g=!1};function js(l,f,y,E,M,z){l.info(function(){if(l.g)if(z)for(var te="",Be=z.split("&"),gt=0;gt<Be.length;gt++){var Ve=Be[gt].split("=");if(1<Ve.length){var Et=Ve[0];Ve=Ve[1];var lt=Et.split("_");te=2<=lt.length&&lt[1]=="type"?te+(Et+"="+Ve+"&"):te+(Et+"=redacted&")}}else te=null;else te=z;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+f+`
`+y+`
`+te})}function Ni(l,f,y,E,M,z,te){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+f+`
`+y+`
`+z+" "+te})}function Rn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+qc(l,y)+(E?" "+E:"")})}function na(l,f){l.info(function(){return"TIMEOUT: "+f})}Ls.prototype.info=function(){};function qc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var te=1;te<M.length;te++)M[te]=""}}}}return Yo(y)}catch{return f}}var Di={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kn;function Fs(){}W(Fs,Os),Fs.prototype.g=function(){return new XMLHttpRequest},Fs.prototype.i=function(){return{}},kn=new Fs;function Pn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _l}function _l(){this.i=null,this.g="",this.h=!1}var ra={},bi={};function Vi(l,f,y){l.L=1,l.v=Kr(on(f)),l.m=y,l.P=!0,sa(l,null)}function sa(l,f){l.F=Date.now(),We(l),l.A=on(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Yr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new _l,l.g=Ml(l.j,y?f:null,!l.m),0<l.O&&(l.M=new bs(A(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Ko[0]=M.toString()),M=Ko);for(var z=0;z<M.length;z++){var te=$o(y,M[z],E||f.handleEvent,!1,f.h||f);if(!te)break;f.g[te.key]=te}f=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),vr(),js(l.i,l.u,l.A,l.l,l.R,l.m)}Pn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Kt(l)==3?f.j():this.Y(l)},Pn.prototype.Y=function(l){try{if(l==this.g)e:{const lt=Kt(this.g);var f=this.g.Ba();const yn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ca(this.g)))){this.J||lt!=4||f==7||(f==8||0>=yn?vr(3):vr(2)),Us(this);var y=this.g.Z();this.X=y;t:if(vl(this)){var E=ca(this.g);l="";var M=E.length,z=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),qr(this);var te="";break t}this.h.i=new p.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(z&&f==M-1)});E.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,Ni(this.i,this.u,this.A,this.l,this.R,lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,gt=this.g;if((Be=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Be)){var Ve=Be;break t}}Ve=null}if(y=Ve)Rn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ia(this,y);else{this.o=!1,this.s=3,st(12),mn(this),qr(this);break e}}if(this.P){y=!0;let ln;for(;!this.J&&this.C<te.length;)if(ln=Hc(this,te),ln==bi){lt==4&&(this.s=4,st(14),y=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==ra){this.s=4,st(15),Rn(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else Rn(this.i,this.l,ln,null),ia(this,ln);if(vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||te.length!=0||this.h.h||(this.s=1,st(16),y=!1),this.o=this.o&&y,!y)Rn(this.i,this.l,te,"[Invalid Chunked Response]"),mn(this),qr(this);else if(0<te.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),da(Et),Et.M=!0,st(11))}}else Rn(this.i,this.l,te,null),ia(this,te);lt==4&&mn(this),this.o&&!this.J&&(lt==4?Hi(this.j,this):(this.o=!1,We(this)))}else Ui(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),mn(this),qr(this)}}}catch{}finally{}};function vl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Hc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?bi:(y=Number(f.substring(y,E)),isNaN(y)?ra:(E+=1,E+y>f.length?bi:(f=f.slice(E,E+y),l.C=E+y,f)))}Pn.prototype.cancel=function(){this.J=!0,mn(this)};function We(l){l.S=Date.now()+l.I,wl(l,l.I)}function wl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Cn(A(l.ba,l),f)}function Us(l){l.B&&(p.clearTimeout(l.B),l.B=null)}Pn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(na(this.i,this.A),this.L!=2&&(vr(),st(17)),mn(this),this.s=2,qr(this)):wl(this,this.S-l)};function qr(l){l.j.G==0||l.J||Hi(l.j,l)}function mn(l){Us(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Qo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function ia(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||$t(y.h,l))){if(!l.K&&$t(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)qi(y),On(y);else break e;$i(y),st(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Cn(A(y.Za,y),6e3));if(1>=Tl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Sr(y,11)}else if((l.K||y.g==l)&&qi(y),!J(f))for(M=y.Da.g.parse(f),f=0;f<M.length;f++){let Ve=M[f];if(y.T=Ve[0],Ve=Ve[1],y.G==2)if(Ve[0]=="c"){y.K=Ve[1],y.ia=Ve[2];const Et=Ve[3];Et!=null&&(y.la=Et,y.j.info("VER="+y.la));const lt=Ve[4];lt!=null&&(y.Aa=lt,y.j.info("SVER="+y.Aa));const yn=Ve[5];yn!=null&&typeof yn=="number"&&0<yn&&(E=1.5*yn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const ln=l.g;if(ln){const Gs=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gs){var z=E.h;z.g||Gs.indexOf("spdy")==-1&&Gs.indexOf("quic")==-1&&Gs.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(oa(z,z.h),z.h=null))}if(E.D){const Gi=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Gi&&(E.ya=Gi,$e(E.I,E.D,Gi))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var te=l;if(E.qa=Ol(E,E.J?E.ia:null,E.W),te.K){Il(E.h,te);var Be=te,gt=E.L;gt&&(Be.I=gt),Be.B&&(Us(Be),We(Be)),E.g=te}else Ws(E);0<y.i.length&&Zn(y)}else Ve[0]!="stop"&&Ve[0]!="close"||Sr(y,7);else y.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Sr(y,7):Rt(y):Ve[0]!="noop"&&y.l&&y.l.ta(Ve),y.v=0)}}vr(4)}catch{}}var El=class{constructor(l,f){this.g=l,this.map=f}};function zs(l){this.l=l||10,p.PerformanceNavigationTiming?(l=p.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Tl(l){return l.h?1:l.g?l.g.size:0}function $t(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function oa(l,f){l.g?l.g.add(f):l.h=f}function Il(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}zs.prototype.cancel=function(){if(this.i=Sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Sl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return X(l.i)}function Oi(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Mi(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Hr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Mi(l),E=Oi(l),M=E.length,z=0;z<M;z++)f.call(void 0,E[z],y&&y[z],l)}var Bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),M=null;if(0<=E){var z=l[y].substring(0,E);M=l[y].substring(E+1)}else z=l[y];f(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function wr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof wr){this.h=l.h,$s(this,l.j),this.o=l.o,this.g=l.g,Wr(this,l.s),this.l=l.l;var f=l.i,y=new Yn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Gr(this,y),this.m=l.m}else l&&(f=String(l).match(Bs))?(this.h=!1,$s(this,f[1]||"",!0),this.o=De(f[2]||""),this.g=De(f[3]||"",!0),Wr(this,f[4]),this.l=De(f[5]||"",!0),Gr(this,f[6]||"",!0),this.m=De(f[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}wr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Qr(f,Li,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Qr(f,Li,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Qr(y,y.charAt(0)=="/"?Cl:xl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Qr(y,aa)),l.join("")};function on(l){return new wr(l)}function $s(l,f,y){l.j=y?De(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Wr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Gr(l,f,y){f instanceof Yn?(l.i=f,Xn(l.i,l.h)):(y||(f=Qr(f,Rl)),l.i=new Yn(f,l.h))}function $e(l,f,y){l.i.set(f,y)}function Kr(l){return $e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function De(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Qr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,Al),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Al(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Li=/[#\/\?@]/g,xl=/[#\?:]/g,Cl=/[#\?]/g,Rl=/[#\?@]/g,aa=/#/g;function Yn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Ct(l){l.g||(l.g=new Map,l.h=0,l.i&&Wc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=Yn.prototype,r.add=function(l,f){Ct(this),this.i=null,l=gn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Nn(l,f){Ct(l),f=gn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Dn(l,f){return Ct(l),f=gn(l,f),l.g.has(f)}r.forEach=function(l,f){Ct(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(f,M,E,this)},this)},this)},r.na=function(){Ct(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const M=l[E];for(let z=0;z<M.length;z++)y.push(f[E])}return y},r.V=function(l){Ct(this);let f=[];if(typeof l=="string")Dn(this,l)&&(f=f.concat(this.g.get(gn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},r.set=function(l,f){return Ct(this),this.i=null,l=gn(this,l),Dn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Yr(l,f,y){Nn(l,f),0<y.length&&(l.i=null,l.g.set(gn(l,f),X(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const z=encodeURIComponent(String(E)),te=this.V(E);for(E=0;E<te.length;E++){var M=z;te[E]!==""&&(M+="="+encodeURIComponent(String(te[E]))),l.push(M)}}return this.i=l.join("&")};function gn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Xn(l,f){f&&!l.j&&(Ct(l),l.i=null,l.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(Nn(this,E),Yr(this,M,y))},l)),l.j=f}function Gc(l,f){const y=new Ls;if(p.Image){const E=new Image;E.onload=B(Gt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=B(Gt,y,"TestLoadImage: error",!1,f,E),E.onabort=B(Gt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=B(Gt,y,"TestLoadImage: timeout",!1,f,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function kl(l,f){const y=new Ls,E=new AbortController,M=setTimeout(()=>{E.abort(),Gt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(z=>{clearTimeout(M),z.ok?Gt(y,"TestPingServer: ok",!0,f):Gt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Gt(y,"TestPingServer: error",!1,f)})}function Gt(l,f,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function Kc(){this.g=new Jo}function Pl(l,f,y){const E=y||"";try{Hr(l,function(M,z){let te=M;_(M)&&(te=Yo(M)),f.push(E+z+"="+encodeURIComponent(te))})}catch(M){throw f.push(E+"type="+encodeURIComponent("_badmap")),M}}function Er(l){this.l=l.Ub||null,this.j=l.eb||!1}W(Er,Os),Er.prototype.g=function(){return new qs(this.l,this.j)},Er.prototype.i=(function(l){return function(){return l}})({});function qs(l,f){pt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(qs,pt),r=qs.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Vn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?bn(this):Vn(this),this.readyState==3&&Nl(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,bn(this))},r.Qa=function(l){this.g&&(this.response=l,bn(this))},r.ga=function(){this.g&&bn(this)};function bn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Vn(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Vn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Tr(l){let f="";return Ae(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Xr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Tr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):$e(l,f,y))}function Xe(l){pt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Xe,pt);var Qc=/^https?$/i,la=["POST","PUT"];r=Xe.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?Ci(this.o):Ci(kn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(z){Hs(this,z);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=p.FormData&&l instanceof p.FormData,!(0<=Array.prototype.indexOf.call(la,f,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,te]of y)this.g.setRequestHeader(z,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fi(this),this.u=!0,this.g.send(l),this.u=!1}catch(z){Hs(this,z)}};function Hs(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ji(l),an(l)}function ji(l){l.A||(l.A=!0,mt(l,"complete"),mt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,mt(this,"complete"),mt(this,"abort"),an(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ua(this):this.bb())},r.bb=function(){ua(this)};function ua(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Kt(l)!=4||l.Z()!=2)){if(l.u&&Kt(l)==4)Go(l.Ea,0,l);else if(mt(l,"readystatechange"),Kt(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=te===0){var M=String(l.D).match(Bs)[1]||null;!M&&p.self&&p.self.location&&(M=p.self.location.protocol.slice(0,-1)),E=!Qc.test(M?M.toLowerCase():"")}y=E}if(y)mt(l,"complete"),mt(l,"success");else{l.m=6;try{var z=2<Kt(l)?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.Z()+"]",ji(l)}}finally{an(l)}}}}function an(l,f){if(l.g){Fi(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||mt(l,"ready");try{y.onreadystatechange=E}catch{}}}function Fi(l){l.I&&(p.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Kt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Xo(f)}};function ca(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ui(l){const f={};l=(l.g&&2<=Kt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(J(l[E]))continue;var y=b(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=f[M]||[];f[M]=z,z.push(y)}N(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function ha(l){this.Aa=0,this.i=[],this.j=new Ls,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,l),this.cb=Jn("retryDelaySeedMs",1e4,l),this.Wa=Jn("forwardChannelMaxRetries",2,l),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new zs(l&&l.concurrentRequestLimit),this.Da=new Kc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ha.prototype,r.la=8,r.G=1,r.connect=function(l,f,y,E){st(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Ol(this,null,this.W),Zn(this)};function Rt(l){if(zi(l),l.G==3){var f=l.U++,y=on(l.I);if($e(y,"SID",l.K),$e(y,"RID",f),$e(y,"TYPE","terminate"),Ir(l,y),f=new Pn(l,l.j,f),f.L=2,f.v=Kr(on(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=f.v,y=!0),y||(f.g=Ml(f.j,null),f.g.ea(f.v)),f.F=Date.now(),We(f)}Vl(l)}function On(l){l.g&&(da(l),l.g.cancel(),l.g=null)}function zi(l){On(l),l.u&&(p.clearTimeout(l.u),l.u=null),qi(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&p.clearTimeout(l.s),l.s=null)}function Zn(l){if(!sn(l.h)&&!l.s){l.s=!0;var f=l.Ga;Te||ie(),ee||(Te(),ee=!0),pe.add(f,l),l.B=0}}function Yc(l,f){return Tl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Cn(A(l.Ga,l,f),bl(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Pn(this,this.j,l);let z=this.o;if(this.S&&(z?(z=S(z),P(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Jr(this,M,f),y=on(this.I),$e(y,"RID",l),$e(y,"CVER",22),this.D&&$e(y,"X-HTTP-Session-Id",this.D),Ir(this,y),z&&(this.O?f="headers="+encodeURIComponent(String(Tr(z)))+"&"+f:this.m&&Xr(y,this.m,z)),oa(this.h,M),this.Ua&&$e(y,"TYPE","init"),this.P?($e(y,"$req",f),$e(y,"SID","null"),M.T=!0,Vi(M,y,null)):Vi(M,y,f),this.G=2}}else this.G==3&&(l?Bi(this,l):this.i.length==0||sn(this.h)||Bi(this))};function Bi(l,f){var y;f?y=f.l:y=l.U++;const E=on(l.I);$e(E,"SID",l.K),$e(E,"RID",y),$e(E,"AID",l.T),Ir(l,E),l.m&&l.o&&Xr(E,l.m,l.o),y=new Pn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Jr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),oa(l.h,y),Vi(y,E,f)}function Ir(l,f){l.H&&Ae(l.H,function(y,E){$e(f,E,y)}),l.l&&Hr({},function(y,E){$e(f,E,y)})}function Jr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?A(l.l.Na,l.l,l):null;e:{var M=l.i;let z=-1;for(;;){const te=["count="+y];z==-1?0<y?(z=M[0].g,te.push("ofs="+z)):z=0:te.push("ofs="+z);let Be=!0;for(let gt=0;gt<y;gt++){let Ve=M[gt].g;const Et=M[gt].map;if(Ve-=z,0>Ve)z=Math.max(0,M[gt].g-100),Be=!1;else try{Pl(Et,te,"req"+Ve+"_")}catch{E&&E(Et)}}if(Be){E=te.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ws(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Te||ie(),ee||(Te(),ee=!0),pe.add(f,l),l.v=0}}function $i(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Cn(A(l.Fa,l),bl(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,Dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Cn(A(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),On(this),Dl(this))};function da(l){l.A!=null&&(p.clearTimeout(l.A),l.A=null)}function Dl(l){l.g=new Pn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=on(l.qa);$e(f,"RID","rpc"),$e(f,"SID",l.K),$e(f,"AID",l.T),$e(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&$e(f,"TO",l.ja),$e(f,"TYPE","xmlhttp"),Ir(l,f),l.m&&l.o&&Xr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Kr(on(f)),y.m=null,y.P=!0,sa(y,l)}r.Za=function(){this.C!=null&&(this.C=null,On(this),$i(this),st(19))};function qi(l){l.C!=null&&(p.clearTimeout(l.C),l.C=null)}function Hi(l,f){var y=null;if(l.g==f){qi(l),da(l),l.g=null;var E=2}else if($t(l.h,f))y=f.D,Il(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;E=Ms(),mt(E,new Pi(E,y)),Zn(l)}else Ws(l);else if(M=f.s,M==3||M==0&&0<f.X||!(E==1&&Yc(l,f)||E==2&&$i(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),M){case 1:Sr(l,5);break;case 4:Sr(l,10);break;case 3:Sr(l,6);break;default:Sr(l,2)}}}function bl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function Sr(l,f){if(l.j.info("Error code "+f),f==2){var y=A(l.fb,l),E=l.Xa;const M=!E;E=new wr(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||$s(E,"https"),Kr(E),M?Gc(E.toString(),y):kl(E.toString(),y)}else st(2);l.G=0,l.l&&l.l.sa(f),Vl(l),zi(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Vl(l){if(l.G=0,l.ka=[],l.l){const f=Sl(l.h);(f.length!=0||l.i.length!=0)&&(F(l.ka,f),F(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function Ol(l,f,y){var E=y instanceof wr?on(y):new wr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Wr(E,E.s);else{var M=p.location;E=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var z=new wr(null);E&&$s(z,E),f&&(z.g=f),M&&Wr(z,M),y&&(z.l=y),E=z}return y=l.D,f=l.ya,y&&f&&$e(E,y,f),$e(E,"VER",l.la),Ir(l,E),E}function Ml(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Xe(new Er({eb:y})):new Xe(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fa(){}r=fa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Wi(){}Wi.prototype.g=function(l,f){return new qt(l,f)};function qt(l,f){pt.call(this),this.g=new ha(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!J(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!J(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new er(this)}W(qt,pt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Rt(this.g)},qt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Yo(l),l=y);f.i.push(new El(f.Ya++,l)),f.G==3&&Zn(f)},qt.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,qt.aa.N.call(this)};function Ll(l){Kn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}W(Ll,Kn);function jl(){ki.call(this),this.status=1}W(jl,ki);function er(l){this.g=l}W(er,fa),er.prototype.ua=function(){mt(this.g,"a")},er.prototype.ta=function(l){mt(this.g,new Ll(l))},er.prototype.sa=function(l){mt(this.g,new jl)},er.prototype.ra=function(){mt(this.g,"b")},Wi.prototype.createWebChannel=Wi.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,M_=function(){return new Wi},O_=function(){return Ms()},V_=Qn,qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Di.NO_ERROR=0,Di.TIMEOUT=8,Di.HTTP_ERROR=6,Uu=Di,yl.COMPLETE="complete",b_=yl,Ri.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Fa=Ri,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,D_=Xe}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});const Ug="@firebase/firestore",zg="4.9.0";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Lo="12.0.0";/**
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
 */const hi=new wc("@firebase/firestore");function mo(){return hi.logLevel}function ae(r,...e){if(hi.logLevel<=ke.DEBUG){const t=e.map(yf);hi.debug(`Firestore (${Lo}): ${r}`,...t)}}function jr(r,...e){if(hi.logLevel<=ke.ERROR){const t=e.map(yf);hi.error(`Firestore (${Lo}): ${r}`,...t)}}function Co(r,...e){if(hi.logLevel<=ke.WARN){const t=e.map(yf);hi.warn(`Firestore (${Lo}): ${r}`,...t)}}function yf(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function _e(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,L_(r,i,t)}function L_(r,e,t){let i=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw jr(i),new Error(i)}function ze(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||L_(e,o,i)}function Se(r,e){return r}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class j_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class RI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class kI{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let u=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Mr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Mr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string",31837,{l:i}),new j_(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class PI{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class NI{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new PI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,or(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const i=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>i(u)))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class _f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=bI(40);for(let u=0;u<o.length;++u)i.length<20&&o[u]<t&&(i+=e.charAt(o[u]%62))}return i}}function Pe(r,e){return r<e?-1:r>e?1:0}function Hd(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),u=e.charAt(i);if(o!==u)return xd(o)===xd(u)?Pe(o,u):xd(o)?1:-1}return Pe(r.length,e.length)}const VI=55296,OI=57343;function xd(r){const e=r.charCodeAt(0);return e>=VI&&e<=OI}function Ro(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const $g="__name__";class ir{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const u=ir.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Pe(e.length,t.length)}static compareSegments(e,t){const i=ir.isNumericId(e),o=ir.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):Hd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Es.fromString(e.substring(4,e.length-2))}}class Ke extends ir{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new re($.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const MI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ir{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return MI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$g}static keyField(){return new Dt([$g])}static fromServerFormat(e){const t=[];let i="",o=0;const u=()=>{if(i.length===0)throw new re($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new re($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new re($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(i+=p,o++):(u(),o++)}if(u(),h)throw new re($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Ke.fromString(e))}static fromName(e){return new fe(Ke.fromString(e).popFirst(5))}static empty(){return new fe(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Ke(e.slice()))}}/**
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
 */function F_(r,e,t){if(!t)throw new re($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function LI(r,e,t,i){if(e===!0&&i===!0)throw new re($.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function qg(r){if(!fe.isDocumentKey(r))throw new re($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Hg(r){if(fe.isDocumentKey(r))throw new re($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function U_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ec(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function Hn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new re($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ec(r);throw new re($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function dt(r,e){const t={typeString:r};return e&&(t.value=e),t}function al(r,e){if(!U_(r))throw new re($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,u="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${i}' field to equal '${u.value}'`;break}}if(t)throw new re($.INVALID_ARGUMENT,t);return!0}/**
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
 */const Wg=-62135596800,Gg=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Gg);return new qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wg)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gg}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(al(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:dt("string",qe._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
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
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new qe(0,0))}static max(){return new Ie(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ja=-1;function jI(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new qe(t+1,0):new qe(t,i));return new Ss(o,fe.empty(),e)}function FI(r){return new Ss(r.readTime,r.key,Ja)}class Ss{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ss(Ie.min(),fe.empty(),Ja)}static max(){return new Ss(Ie.max(),fe.empty(),Ja)}}function UI(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(r.documentKey,e.documentKey),t!==0?t:Pe(r.largestBatchId,e.largestBatchId))}/**
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
 */const zI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function jo(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==zI)throw r;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((i,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(i,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,i)=>{t(e)}))}static reject(e){return new H(((t,i)=>{i(e)}))}static waitFor(e){return new H(((t,i)=>{let o=0,u=0,h=!1;e.forEach((p=>{++o,p.next((()=>{++u,h&&u===o&&t()}),(g=>i(g)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next((o=>o?H.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,u)=>{i.push(t.call(this,o,u))})),this.waitFor(i)}static mapArray(e,t){return new H(((i,o)=>{const u=e.length,h=new Array(u);let p=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((T=>{h[_]=T,++p,p===u&&i(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new H(((i,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):i()};u()}))}}function $I(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Fo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Tc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Tc.ce=-1;/**
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
 */const vf=-1;function Ic(r){return r==null}function Zu(r){return r===0&&1/r==-1/0}function qI(r){return typeof r=="number"&&Number.isInteger(r)&&!Zu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const z_="";function HI(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Kg(e)),e=WI(r.get(t),e);return Kg(e)}function WI(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case z_:t+="";break;default:t+=u}}return t}function Kg(r){return r+z_+""}/**
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
 */function Qg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ps(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function B_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?i(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,u){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=u??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,u){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const u=i(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,i),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,u){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yg(this.data.getIterator())}getIteratorFrom(e){return new Yg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=i.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Yg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new dn([])}unionWith(e){let t=new vt(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new dn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class $_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new $_("Invalid base64 string: "+u):u}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const GI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=GI.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function xs(r){return typeof r=="string"?Vt.fromBase64String(r):Vt.fromUint8Array(r)}/**
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
 */const q_="server_timestamp",H_="__type__",W_="__previous_value__",G_="__local_write_time__";function wf(r){return(r?.mapValue?.fields||{})[H_]?.stringValue===q_}function Sc(r){const e=r.mapValue.fields[W_];return wf(e)?Sc(e):e}function Za(r){const e=As(r.mapValue.fields[G_].timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class KI{constructor(e,t,i,o,u,h,p,g,_,T){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=T}}const ec="(default)";class el{constructor(e,t){this.projectId=e,this.database=t||ec}static empty(){return new el("","")}get isDefaultDatabase(){return this.database===ec}isEqual(e){return e instanceof el&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const K_="__type__",QI="__max__",Vu={mapValue:{}},Q_="__vector__",tc="value";function Cs(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?wf(r)?4:XI(r)?9007199254740991:YI(r)?10:11:_e(28295,{value:r})}function pr(r,e){if(r===e)return!0;const t=Cs(r);if(t!==Cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Za(r).isEqual(Za(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=As(o.timestampValue),p=As(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return xs(o.bytesValue).isEqual(xs(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return ot(o.geoPointValue.latitude)===ot(u.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ot(o.integerValue)===ot(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ot(o.doubleValue),p=ot(u.doubleValue);return h===p?Zu(h)===Zu(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return Ro(r.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(Qg(h)!==Qg(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!pr(h[g],p[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function tl(r,e){return(r.values||[]).find((t=>pr(t,e)))!==void 0}function ko(r,e){if(r===e)return 0;const t=Cs(r),i=Cs(e);if(t!==i)return Pe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const p=ot(u.integerValue||u.doubleValue),g=ot(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return Xg(r.timestampValue,e.timestampValue);case 4:return Xg(Za(r),Za(e));case 5:return Hd(r.stringValue,e.stringValue);case 6:return(function(u,h){const p=xs(u),g=xs(h);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const p=u.split("/"),g=h.split("/");for(let _=0;_<p.length&&_<g.length;_++){const T=Pe(p[_],g[_]);if(T!==0)return T}return Pe(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const p=Pe(ot(u.latitude),ot(h.latitude));return p!==0?p:Pe(ot(u.longitude),ot(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Jg(r.arrayValue,e.arrayValue);case 10:return(function(u,h){const p=u.fields||{},g=h.fields||{},_=p[tc]?.arrayValue,T=g[tc]?.arrayValue,x=Pe(_?.values?.length||0,T?.values?.length||0);return x!==0?x:Jg(_,T)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Vu.mapValue&&h===Vu.mapValue)return 0;if(u===Vu.mapValue)return 1;if(h===Vu.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),_=h.fields||{},T=Object.keys(_);g.sort(),T.sort();for(let x=0;x<g.length&&x<T.length;++x){const A=Hd(g[x],T[x]);if(A!==0)return A;const B=ko(p[g[x]],_[T[x]]);if(B!==0)return B}return Pe(g.length,T.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function Xg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Pe(r,e);const t=As(r),i=As(e),o=Pe(t.seconds,i.seconds);return o!==0?o:Pe(t.nanos,i.nanos)}function Jg(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const u=ko(t[o],i[o]);if(u)return u}return Pe(t.length,i.length)}function Po(r){return Wd(r)}function Wd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=As(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return xs(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return fe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const u of t.values||[])o?o=!1:i+=",",i+=Wd(u);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of i)u?u=!1:o+=",",o+=`${h}:${Wd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function zu(r){switch(Cs(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sc(r);return e?16+zu(e):16;case 5:return 2*r.stringValue.length;case 6:return xs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,u)=>o+zu(u)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return Ps(i.fields,((u,h)=>{o+=u.length+zu(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Zg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Gd(r){return!!r&&"integerValue"in r}function Ef(r){return!!r&&"arrayValue"in r}function ey(r){return!!r&&"nullValue"in r}function ty(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Bu(r){return!!r&&"mapValue"in r}function YI(r){return(r?.mapValue?.fields||{})[K_]?.stringValue===Q_}function qa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Ps(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=qa(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qa(r.arrayValue.values[t]);return e}return{...r}}function XI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===QI}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Bu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qa(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach(((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=p.popLast()}h?i[p.lastSegment()]=qa(h):o.push(p.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,i,o)}delete(e){const t=this.field(e.popLast());Bu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Bu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ps(t,((o,u)=>e[o]=u));for(const o of i)delete e[o]}clone(){return new nn(qa(this.value))}}function Y_(r){const e=[];return Ps(r.fields,((t,i)=>{const o=new Dt([t]);if(Bu(i)){const u=Y_(i.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new dn(e)}/**
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
 */class zt{constructor(e,t,i,o,u,h,p){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new zt(e,0,Ie.min(),Ie.min(),Ie.min(),nn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ie.min(),Ie.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ie.min(),Ie.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nc{constructor(e,t){this.position=e,this.inclusive=t}}function ny(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?i=fe.comparator(fe.fromName(h.referenceValue),t.key):i=ko(h,t.data.field(u.field)),u.dir==="desc"&&(i*=-1),i!==0)break}return i}function ry(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!pr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class nl{constructor(e,t="asc"){this.field=e,this.dir=t}}function JI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class X_{}class ht extends X_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new e1(e,t,i):t==="array-contains"?new r1(e,i):t==="in"?new s1(e,i):t==="not-in"?new i1(e,i):t==="array-contains-any"?new o1(e,i):new ht(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new t1(e,i):new n1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ko(t,this.value)):t!==null&&Cs(this.value)===Cs(t)&&this.matchesComparison(ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends X_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Wn(e,t)}matches(e){return J_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function J_(r){return r.op==="and"}function Z_(r){return ZI(r)&&J_(r)}function ZI(r){for(const e of r.filters)if(e instanceof Wn)return!1;return!0}function Kd(r){if(r instanceof ht)return r.field.canonicalString()+r.op.toString()+Po(r.value);if(Z_(r))return r.filters.map((e=>Kd(e))).join(",");{const e=r.filters.map((t=>Kd(t))).join(",");return`${r.op}(${e})`}}function ev(r,e){return r instanceof ht?(function(i,o){return o instanceof ht&&i.op===o.op&&i.field.isEqual(o.field)&&pr(i.value,o.value)})(r,e):r instanceof Wn?(function(i,o){return o instanceof Wn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((u,h,p)=>u&&ev(h,o.filters[p])),!0):!1})(r,e):void _e(19439)}function tv(r){return r instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${Po(t.value)}`})(r):r instanceof Wn?(function(t){return t.op.toString()+" {"+t.getFilters().map(tv).join(" ,")+"}"})(r):"Filter"}class e1 extends ht{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class t1 extends ht{constructor(e,t){super(e,"in",t),this.keys=nv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class n1 extends ht{constructor(e,t){super(e,"not-in",t),this.keys=nv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function nv(r,e){return(e.arrayValue?.values||[]).map((t=>fe.fromName(t.referenceValue)))}class r1 extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ef(t)&&tl(t.arrayValue,this.value)}}class s1 extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tl(this.value.arrayValue,t)}}class i1 extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!tl(this.value.arrayValue,t)}}class o1 extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>tl(this.value.arrayValue,i)))}}/**
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
 */class a1{constructor(e,t=null,i=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.Te=null}}function sy(r,e=null,t=[],i=[],o=null,u=null,h=null){return new a1(r,e,t,i,o,u,h)}function Tf(r){const e=Se(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Kd(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(u){return u.field.canonicalString()+u.dir})(i))).join(","),Ic(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Po(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Po(i))).join(",")),e.Te=t}return e.Te}function If(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!JI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!ev(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ry(r.startAt,e.startAt)&&ry(r.endAt,e.endAt)}function Qd(r){return fe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Uo{constructor(e,t=null,i=[],o=[],u=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function l1(r,e,t,i,o,u,h,p){return new Uo(r,e,t,i,o,u,h,p)}function Sf(r){return new Uo(r)}function iy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function rv(r){return r.collectionGroup!==null}function Ha(r){const e=Se(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new vt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new nl(u,i))})),t.has(Dt.keyField().canonicalString())||e.Ie.push(new nl(Dt.keyField(),i))}return e.Ie}function ar(r){const e=Se(r);return e.Ee||(e.Ee=u1(e,Ha(r))),e.Ee}function u1(r,e){if(r.limitType==="F")return sy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new nl(o.field,u)}));const t=r.endAt?new nc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new nc(r.startAt.position,r.startAt.inclusive):null;return sy(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function Yd(r,e){const t=r.filters.concat([e]);return new Uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Xd(r,e,t){return new Uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ac(r,e){return If(ar(r),ar(e))&&r.limitType===e.limitType}function sv(r){return`${Tf(ar(r))}|lt:${r.limitType}`}function go(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>tv(o))).join(", ")}]`),Ic(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Po(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Po(o))).join(",")),`Target(${i})`})(ar(r))}; limitType=${r.limitType})`}function xc(r,e){return e.isFoundDocument()&&(function(i,o){const u=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(u):fe.isDocumentKey(i.path)?i.path.isEqual(u):i.path.isImmediateParentOf(u)})(r,e)&&(function(i,o){for(const u of Ha(i))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const u of i.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,p,g){const _=ny(h,p,g);return h.inclusive?_<=0:_<0})(i.startAt,Ha(i),o)||i.endAt&&!(function(h,p,g){const _=ny(h,p,g);return h.inclusive?_>=0:_>0})(i.endAt,Ha(i),o))})(r,e)}function c1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function iv(r){return(e,t)=>{let i=!1;for(const o of Ha(r)){const u=h1(o,e,t);if(u!==0)return u;i=i||o.field.isKeyField()}return 0}}function h1(r,e,t){const i=r.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,p){const g=h.data.field(u),_=p.data.field(u);return g!==null&&_!==null?ko(g,_):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:r.dir})}}/**
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
 */class _i{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,u]of i)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,((t,i)=>{for(const[o,u]of i)e(o,u)}))}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
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
 */const d1=new nt(fe.comparator);function Fr(){return d1}const ov=new nt(fe.comparator);function Ua(...r){let e=ov;for(const t of r)e=e.insert(t.key,t);return e}function av(r){let e=ov;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ai(){return Wa()}function lv(){return Wa()}function Wa(){return new _i((r=>r.toString()),((r,e)=>r.isEqual(e)))}const f1=new nt(fe.comparator),p1=new vt(fe.comparator);function Ne(...r){let e=p1;for(const t of r)e=e.add(t);return e}const m1=new vt(Pe);function g1(){return m1}/**
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
 */function Af(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function uv(r){return{integerValue:""+r}}function y1(r,e){return qI(e)?uv(e):Af(r,e)}/**
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
 */class Cc{constructor(){this._=void 0}}function _1(r,e,t){return r instanceof rc?(function(o,u){const h={fields:{[H_]:{stringValue:q_},[G_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&wf(u)&&(u=Sc(u)),u&&(h.fields[W_]=u),{mapValue:h}})(t,e):r instanceof rl?hv(r,e):r instanceof sl?dv(r,e):(function(o,u){const h=cv(o,u),p=oy(h)+oy(o.Ae);return Gd(h)&&Gd(o.Ae)?uv(p):Af(o.serializer,p)})(r,e)}function v1(r,e,t){return r instanceof rl?hv(r,e):r instanceof sl?dv(r,e):t}function cv(r,e){return r instanceof sc?(function(i){return Gd(i)||(function(u){return!!u&&"doubleValue"in u})(i)})(e)?e:{integerValue:0}:null}class rc extends Cc{}class rl extends Cc{constructor(e){super(),this.elements=e}}function hv(r,e){const t=fv(e);for(const i of r.elements)t.some((o=>pr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class sl extends Cc{constructor(e){super(),this.elements=e}}function dv(r,e){let t=fv(e);for(const i of r.elements)t=t.filter((o=>!pr(o,i)));return{arrayValue:{values:t}}}class sc extends Cc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function oy(r){return ot(r.integerValue||r.doubleValue)}function fv(r){return Ef(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function w1(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof rl&&o instanceof rl||i instanceof sl&&o instanceof sl?Ro(i.elements,o.elements,pr):i instanceof sc&&o instanceof sc?pr(i.Ae,o.Ae):i instanceof rc&&o instanceof rc})(r.transform,e.transform)}class E1{constructor(e,t){this.version=e,this.transformResults=t}}class xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $u(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Rc{}function pv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new xf(r.key,xn.none()):new ll(r.key,r.data,xn.none());{const t=r.data,i=nn.empty();let o=new vt(Dt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?i.delete(u):i.set(u,h),o=o.add(u)}return new Ns(r.key,i,new dn(o.toArray()),xn.none())}}function T1(r,e,t){r instanceof ll?(function(o,u,h){const p=o.value.clone(),g=ly(o.fieldTransforms,u,h.transformResults);p.setAll(g),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,t):r instanceof Ns?(function(o,u,h){if(!$u(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=ly(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(mv(o)),g.setAll(p),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ga(r,e,t,i){return r instanceof ll?(function(u,h,p,g){if(!$u(u.precondition,h))return p;const _=u.value.clone(),T=uy(u.fieldTransforms,g,h);return _.setAll(T),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof Ns?(function(u,h,p,g){if(!$u(u.precondition,h))return p;const _=uy(u.fieldTransforms,g,h),T=h.data;return T.setAll(mv(u)),T.setAll(_),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((x=>x.field)))})(r,e,t,i):(function(u,h,p){return $u(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,t)}function I1(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),u=cv(i.transform,o||null);u!=null&&(t===null&&(t=nn.empty()),t.set(i.field,u))}return t||null}function ay(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Ro(i,o,((u,h)=>w1(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ll extends Rc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ns extends Rc{constructor(e,t,i,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function mv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function ly(r,e,t){const i=new Map;ze(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);i.set(u.field,v1(h,p,t[o]))}return i}function uy(r,e,t){const i=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);i.set(o.field,_1(u,h,e))}return i}class xf extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S1 extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class A1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&T1(u,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ga(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ga(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=lv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const g=pv(h,p);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ie.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,((t,i)=>ay(t,i)))&&Ro(this.baseMutations,e.baseMutations,((t,i)=>ay(t,i)))}}class Cf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){ze(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return f1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,i[h].version);return new Cf(e,t,i,o)}}/**
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
 */class x1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class C1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,Oe;function R1(r){switch(r){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function gv(r){if(r===void 0)return jr("GRPC error has no .code"),$.UNKNOWN;switch(r){case ct.OK:return $.OK;case ct.CANCELLED:return $.CANCELLED;case ct.UNKNOWN:return $.UNKNOWN;case ct.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ct.INTERNAL:return $.INTERNAL;case ct.UNAVAILABLE:return $.UNAVAILABLE;case ct.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ct.NOT_FOUND:return $.NOT_FOUND;case ct.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ct.ABORTED:return $.ABORTED;case ct.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ct.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:r})}}(Oe=ct||(ct={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function k1(){return new TextEncoder}/**
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
 */const P1=new Es([4294967295,4294967295],0);function cy(r){const e=k1().encode(r),t=new N_;return t.update(e),new Uint8Array(t.digest())}function hy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Es([t,i],0),new Es([o,u],0)]}class Rf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new za(`Invalid padding: ${t}`);if(i<0)throw new za(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new za(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new za(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Es.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Es.fromNumber(i)));return o.compare(P1)===1&&(o=new Es([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=cy(e),[i,o]=hy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(i,o,u);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Rf(u,o,t);return i.forEach((p=>h.insert(p))),h}insert(e){if(this.ge===0)return;const t=cy(e),[i,o]=hy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(i,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kc{constructor(e,t,i,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,ul.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new kc(Ie.min(),o,new nt(Pe),Fr(),Ne())}}class ul{constructor(e,t,i,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ul(i,t,Ne(),Ne(),Ne())}}/**
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
 */class qu{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class yv{constructor(e,t){this.targetId=e,this.Ce=t}}class _v{constructor(e,t,i=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class dy{constructor(){this.ve=0,this.Fe=fy(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),t=Ne(),i=Ne();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:u})}})),new ul(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=fy()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class N1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Fr(),this.Je=Ou(),this.He=Ou(),this.Ye=new nt(Pe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Qd(u))if(i===0){const h=new fe(u.path);this.et(t,h,zt.newNoDocument(h,Ie.min()))}else ze(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const p=this.ut(e),g=p?this.ct(p,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=xs(i).toUint8Array()}catch(g){if(g instanceof $_)return Co("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Rf(h,o,u)}catch(g){return Co(g instanceof za?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((u=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const p=this.ot(h);if(p){if(u.current&&Qd(p.target)){const g=new fe(p.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,zt.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let i=Ne();this.He.forEach(((u,h)=>{let p=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(i=i.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new kc(e,t,this.Ye,this.je,i);return this.je=Fr(),this.Je=Ou(),this.He=Ou(),this.Ye=new nt(Pe),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new dy,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(Pe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(Pe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new dy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ou(){return new nt(fe.comparator)}function fy(){return new nt(fe.comparator)}const D1={asc:"ASCENDING",desc:"DESCENDING"},b1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V1={and:"AND",or:"OR"};class O1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jd(r,e){return r.useProto3Json||Ic(e)?e:{value:e}}function ic(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function M1(r,e){return ic(r,e.toTimestamp())}function lr(r){return ze(!!r,49232),Ie.fromTimestamp((function(t){const i=As(t);return new qe(i.seconds,i.nanos)})(r))}function kf(r,e){return Zd(r,e).canonicalString()}function Zd(r,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function wv(r){const e=Ke.fromString(r);return ze(Av(e),10190,{key:e.toString()}),e}function ef(r,e){return kf(r.databaseId,e.path)}function Cd(r,e){const t=wv(e);if(t.get(1)!==r.databaseId.projectId)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new fe(Tv(t))}function Ev(r,e){return kf(r.databaseId,e)}function L1(r){const e=wv(r);return e.length===4?Ke.emptyPath():Tv(e)}function tf(r){return new Ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Tv(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function py(r,e,t){return{name:ef(r,e),fields:t.value.mapValue.fields}}function j1(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,T){return _.useProto3Json?(ze(T===void 0||typeof T=="string",58123),Vt.fromBase64String(T||"")):(ze(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Vt.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(_){const T=_.code===void 0?$.UNKNOWN:gv(_.code);return new re(T,_.message||"")})(h);t=new _v(i,o,u,p||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Cd(r,i.document.name),u=lr(i.document.updateTime),h=i.document.createTime?lr(i.document.createTime):Ie.min(),p=new nn({mapValue:{fields:i.document.fields}}),g=zt.newFoundDocument(o,u,h,p),_=i.targetIds||[],T=i.removedTargetIds||[];t=new qu(_,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Cd(r,i.document),u=i.readTime?lr(i.readTime):Ie.min(),h=zt.newNoDocument(o,u),p=i.removedTargetIds||[];t=new qu([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Cd(r,i.document),u=i.removedTargetIds||[];t=new qu([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:u}=i,h=new C1(o,u),p=i.targetId;t=new yv(p,h)}}return t}function F1(r,e){let t;if(e instanceof ll)t={update:py(r,e.key,e.value)};else if(e instanceof xf)t={delete:ef(r,e.key)};else if(e instanceof Ns)t={update:py(r,e.key,e.data),updateMask:K1(e.fieldMask)};else{if(!(e instanceof S1))return _e(16599,{Vt:e.type});t={verify:ef(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(u,h){const p=h.transform;if(p instanceof rc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof rl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof sl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof sc)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw _e(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:M1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(r,e.precondition)),t}function U1(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?lr(o.updateTime):lr(u);return h.isEqual(Ie.min())&&(h=lr(u)),new E1(h,o.transformResults||[])})(t,e)))):[]}function z1(r,e){return{documents:[Ev(r,e.path)]}}function B1(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Ev(r,o);const u=(function(_){if(_.length!==0)return Sv(Wn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((T=>(function(A){return{field:yo(A.field),direction:H1(A.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=Jd(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function $1(r){let e=L1(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ze(i===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(x){const A=Iv(x);return A instanceof Wn&&Z_(A)?A.getFilters():[A]})(t.where));let h=[];t.orderBy&&(h=(function(x){return x.map((A=>(function(W){return new nl(_o(W.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(A)))})(t.orderBy));let p=null;t.limit&&(p=(function(x){let A;return A=typeof x=="object"?x.value:x,Ic(A)?null:A})(t.limit));let g=null;t.startAt&&(g=(function(x){const A=!!x.before,B=x.values||[];return new nc(B,A)})(t.startAt));let _=null;return t.endAt&&(_=(function(x){const A=!x.before,B=x.values||[];return new nc(B,A)})(t.endAt)),l1(e,o,h,u,p,"F",g,_)}function q1(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Iv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=_o(t.unaryFilter.field);return ht.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=_o(t.unaryFilter.field);return ht.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=_o(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ht.create(_o(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Wn.create(t.compositeFilter.filters.map((i=>Iv(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function H1(r){return D1[r]}function W1(r){return b1[r]}function G1(r){return V1[r]}function yo(r){return{fieldPath:r.canonicalString()}}function _o(r){return Dt.fromServerFormat(r.fieldPath)}function Sv(r){return r instanceof ht?(function(t){if(t.op==="=="){if(ty(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NAN"}};if(ey(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ty(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NAN"}};if(ey(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yo(t.field),op:W1(t.op),value:t.value}}})(r):r instanceof Wn?(function(t){const i=t.getFilters().map((o=>Sv(o)));return i.length===1?i[0]:{compositeFilter:{op:G1(t.op),filters:i}}})(r):_e(54877,{filter:r})}function K1(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Av(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class _s{constructor(e,t,i,o,u=Ie.min(),h=Ie.min(),p=Vt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new _s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Q1{constructor(e){this.yt=e}}function Y1(r){const e=$1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Xd(e,e.limit,"L"):e}/**
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
 */class X1{constructor(){this.Cn=new J1}addToCollectionParentIndex(e,t){return this.Cn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ss.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ss.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class J1{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(Ke.comparator),u=!o.has(i);return this.index[t]=o.add(i),u}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(Ke.comparator)).toArray()}}/**
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
 */const my={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xv=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(xv,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
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
 */class No{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new No(0)}static cr(){return new No(-1)}}/**
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
 */const gy="LruGarbageCollector",Z1=1048576;function yy([r,e],[t,i]){const o=Pe(r,t);return o===0?Pe(e,i):o}class eS{constructor(e){this.Ir=e,this.buffer=new vt(yy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();yy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tS{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(gy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Fo(t)?ae(gy,"Ignoring IndexedDB error during garbage collection: ",t):await jo(t)}await this.Vr(3e5)}))}}class nS{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(Tc.ce);const i=new eS(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(my)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),my):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,u,h,p,g,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,h=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(i=x,p=Date.now(),this.removeTargets(e,i,t)))).next((x=>(u=x,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((x=>(_=Date.now(),mo()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${x} documents in `+(_-g)+`ms
Total Duration: ${_-T}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:x}))))}}function rS(r,e){return new nS(r,e)}/**
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
 */class sS{constructor(){this.changes=new _i((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class oS{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Ga(i.mutation,o,dn.empty(),qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=ai();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((u=>{let h=Ua();return u.forEach(((p,g)=>{h=h.insert(p,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=ai();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,p)=>{t.set(h,p)}))}))}computeViews(e,t,i,o){let u=Fr();const h=Wa(),p=(function(){return Wa()})();return t.forEach(((g,_)=>{const T=i.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof Ns)?u=u.insert(_.key,_):T!==void 0?(h.set(_.key,T.mutation.getFieldMask()),Ga(T.mutation,_,T.mutation.getFieldMask(),qe.now())):h.set(_.key,dn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,T)=>h.set(_,T))),t.forEach(((_,T)=>p.set(_,new iS(T,h.get(_)??null)))),p)))}recalculateAndSaveOverlays(e,t){const i=Wa();let o=new nt(((h,p)=>h-p)),u=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const p of h)p.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let T=i.get(g)||dn.empty();T=p.applyToLocalView(_,T),i.set(g,T);const x=(o.get(p.batchId)||Ne()).add(g);o=o.insert(p.batchId,x)}))})).next((()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,T=g.value,x=lv();T.forEach((A=>{if(!u.has(A)){const B=pv(t.get(A),i.get(A));B!==null&&x.set(A,B),u=u.add(A)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,x))}return H.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-u.size):H.resolve(ai());let p=Ja,g=u;return h.next((_=>H.forEach(_,((T,x)=>(p<x.largestBatchId&&(p=x.largestBatchId),u.get(T)?H.resolve():this.remoteDocumentCache.getEntry(e,T).next((A=>{g=g.insert(T,A)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Ne()))).next((T=>({batchId:p,changes:av(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=Ua();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const u=t.collectionGroup;let h=Ua();return this.indexManager.getCollectionParents(e,u).next((p=>H.forEach(p,(g=>{const _=(function(x,A){return new Uo(A,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((T=>{T.forEach(((x,A)=>{h=h.insert(x,A)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,u,o)))).next((h=>{u.forEach(((g,_)=>{const T=_.getKey();h.get(T)===null&&(h=h.insert(T,zt.newInvalidDocument(T)))}));let p=Ua();return h.forEach(((g,_)=>{const T=u.get(g);T!==void 0&&Ga(T.mutation,_,dn.empty(),qe.now()),xc(t,_)&&(p=p.insert(g,_))})),p}))}}/**
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
 */class aS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return H.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:Y1(o.bundledQuery),readTime:lr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class lS{constructor(){this.overlays=new nt(fe.comparator),this.qr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ai();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&i.set(o,u)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,u)=>{this.St(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=ai(),u=t.length+1,h=new fe(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>i&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let u=new nt(((_,T)=>_-T));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let T=u.get(_.largestBatchId);T===null&&(T=ai(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const p=ai(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,T)=>p.set(_,T))),!(p.size()>=o)););return H.resolve(p)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new x1(t,i));let u=this.qr.get(t);u===void 0&&(u=Ne(),this.qr.set(t,u)),this.qr.set(t,u.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class uS{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class Pf{constructor(){this.Qr=new vt(At.$r),this.Ur=new vt(At.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new At(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new At(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new fe(new Ke([])),i=new At(t,e),o=new At(t,e+1),u=[];return this.Ur.forEachInRange([i,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new fe(new Ke([])),i=new At(t,e),o=new At(t,e+1);let u=Ne();return this.Ur.forEachInRange([i,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new At(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return fe.comparator(e.key,t.key)||Pe(e.Yr,t.Yr)}static Kr(e,t){return Pe(e.Yr,t.Yr)||fe.comparator(e.key,t.key)}}/**
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
 */class cS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(At.$r)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new A1(u,t,i,o);this.mutationQueue.push(h);for(const p of o)this.Zr=this.Zr.add(new At(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?vf:this.tr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([i,o],(h=>{const p=this.Xr(h.Yr);u.push(p)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(Pe);return t.forEach((o=>{const u=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(p=>{i=i.add(p.Yr)}))})),H.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let u=i;fe.isDocumentKey(u)||(u=u.child(""));const h=new At(new fe(u),0);let p=new vt(Pe);return this.Zr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Yr)),!0)}),h),H.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return H.forEach(t.mutations,(o=>{const u=new At(o.key,t.batchId);return i=i.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new At(t,0),o=this.Zr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class hS{constructor(e){this.ri=e,this.docs=(function(){return new nt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Fr();return t.forEach((o=>{const u=this.docs.get(o);i=i.insert(o,u?u.document.mutableCopy():zt.newInvalidDocument(o))})),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let u=Fr();const h=t.path,p=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:T}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||UI(FI(T),i)<=0||(o.has(T.key)||xc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ii(e,t){return H.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new dS(this)}getSize(e){return H.resolve(this.size)}}class dS extends sS{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),H.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class fS{constructor(e){this.persistence=e,this.si=new _i((t=>Tf(t)),If),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.oi=0,this._i=new Pf,this.targetCount=0,this.ai=No.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),H.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new No(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Pr(t),H.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const u=[];return this.si.forEach(((h,p)=>{p.sequenceNumber<=t&&i.get(p.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),H.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this._i.containsKey(t))}}/**
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
 */class Cv{constructor(e,t){this.ui={},this.overlays={},this.ci=new Tc(0),this.li=!1,this.li=!0,this.hi=new uS,this.referenceDelegate=e(this),this.Pi=new fS(this),this.indexManager=new X1,this.remoteDocumentCache=(function(o){return new hS(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new Q1(t),this.Ii=new aS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new cS(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new pS(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return H.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class pS extends BI{constructor(e){super(),this.currentSequenceNumber=e}}class Nf{constructor(e){this.persistence=e,this.Ri=new Pf,this.Vi=null}static mi(e){return new Nf(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.fi,(i=>{const o=fe.fromPath(i);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class oc{constructor(e,t){this.persistence=e,this.pi=new _i((i=>HI(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=rS(this,t)}static mi(e,t){return new oc(e,t)}Ei(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return H.forEach(this.pi,((i,o)=>this.br(e,i,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((p=>{p||(i++,u.removeEntry(h,Ie.min()))})))).next((()=>u.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zu(e.data.value)),t}br(e,t,i){return H.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Df{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=Ne(),o=Ne();for(const u of t.docChanges)switch(u.type){case 0:i=i.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Df(e,t.fromCache,i,o)}}/**
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
 */class mS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return aT()?8:$I(Bt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,i).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new mS;return this.Ss(e,t,h).next((p=>{if(u.result=p,this.Vs)return this.bs(e,t,h,p.size)}))})).next((()=>u.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(mo()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),H.resolve()):(mo()<=ke.DEBUG&&ae("QueryEngine","Query:",go(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(mo()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):H.resolve())}ys(e,t){if(iy(t))return H.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Xd(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((u=>{const h=Ne(...u);return this.ps.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.Ds(t,p);return this.Cs(t,_,h,g.readTime)?this.ys(e,Xd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ws(e,t,i,o){return iy(t)||o.isEqual(Ie.min())?H.resolve(null):this.ps.getDocuments(e,i).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,i,o)?H.resolve(null):(mo()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),go(t)),this.vs(e,h,t,jI(o,Ja)).next((p=>p)))}))}Ds(e,t){let i=new vt(iv(e));return t.forEach(((o,u)=>{xc(e,u)&&(i=i.add(u))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,i){return mo()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",go(t)),this.ps.getDocumentsMatchingQuery(e,t,Ss.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const bf="LocalStore",yS=3e8;class _S{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(Pe),this.xs=new _i((u=>Tf(u)),If),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function vS(r,e,t,i){return new _S(r,e,t,i)}async function Rv(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((u=>{const h=[],p=[];let g=Ne();for(const _ of o){h.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}for(const _ of u){p.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:p})))}))}))}function wS(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,g,_,T){const x=_.batch,A=x.keys();let B=H.resolve();return A.forEach((W=>{B=B.next((()=>T.getEntry(g,W))).next((X=>{const F=_.docVersions.get(W);ze(F!==null,48541),X.version.compareTo(F)<0&&(x.applyToRemoteDocument(X,_),X.isValidDocument()&&(X.setReadTime(_.commitVersion),T.addEntry(X)))}))})),B.next((()=>p.mutationQueue.removeMutationBatch(g,x)))})(t,i,e,u).next((()=>u.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(p){let g=Ne();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function kv(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function ES(r,e){const t=Se(r),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const p=[];e.targetChanges.forEach(((T,x)=>{const A=o.get(x);if(!A)return;p.push(t.Pi.removeMatchingKeys(u,T.removedDocuments,x).next((()=>t.Pi.addMatchingKeys(u,T.addedDocuments,x))));let B=A.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(x)!==null?B=B.withResumeToken(Vt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):T.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(T.resumeToken,i)),o=o.insert(x,B),(function(X,F,Q){return X.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=yS?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(A,B,T)&&p.push(t.Pi.updateTargetData(u,B))}));let g=Fr(),_=Ne();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),p.push(TS(u,h,e.documentUpdates).next((T=>{g=T.ks,_=T.qs}))),!i.isEqual(Ie.min())){const T=t.Pi.getLastRemoteSnapshotVersion(u).next((x=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,i)));p.push(T)}return H.waitFor(p).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.Ms=o,u)))}function TS(r,e,t){let i=Ne(),o=Ne();return t.forEach((u=>i=i.add(u))),e.getEntries(r,i).next((u=>{let h=Fr();return t.forEach(((p,g)=>{const _=u.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(Ie.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):ae(bf,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function IS(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=vf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function SS(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((u=>u?(o=u,H.resolve(o)):t.Pi.allocateTargetId(i).next((h=>(o=new _s(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function nf(r,e,t){const i=Se(r),o=i.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",u,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Fo(h))throw h;ae(bf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function _y(r,e,t){const i=Se(r);let o=Ie.min(),u=Ne();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,T){const x=Se(g),A=x.xs.get(T);return A!==void 0?H.resolve(x.Ms.get(A)):x.Pi.getTargetData(_,T)})(i,h,ar(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(h,p.targetId).next((g=>{u=g}))})).next((()=>i.Fs.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?u:Ne()))).next((p=>(AS(i,c1(e),p),{documents:p,Qs:u})))))}function AS(r,e,t){let i=r.Os.get(e)||Ie.min();t.forEach(((o,u)=>{u.readTime.compareTo(i)>0&&(i=u.readTime)})),r.Os.set(e,i)}class vy{constructor(){this.activeTargetIds=g1()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xS{constructor(){this.Mo=new vy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new vy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CS{Oo(e){}shutdown(){}}/**
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
 */const wy="ConnectivityMonitor";class Ey{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(wy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(wy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mu=null;function rf(){return Mu===null?Mu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mu++,"0x"+Mu.toString(16)}/**
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
 */const Rd="RestConnection",RS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===ec?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,u){const h=rf(),p=this.zo(e,t.toUriEncodedString());ae(Rd,`Sending RPC '${e}' ${h}:`,p,i);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:_}=new URL(p),T=Oo(_);return this.Jo(e,p,g,i,T).then((x=>(ae(Rd,`Received RPC '${e}' ${h}: `,x),x)),(x=>{throw Co(Rd,`RPC '${e}' ${h} failed with error: `,x,"url: ",p,"request:",i),x}))}Ho(e,t,i,o,u,h){return this.Go(e,t,i,o,u)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Lo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),i&&i.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const i=RS[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
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
 */class PS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ft="WebChannelConnection";class NS extends kS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,u){const h=rf();return new Promise(((p,g)=>{const _=new D_;_.setWithCredentials(!0),_.listenOnce(b_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Uu.NO_ERROR:const x=_.getResponseJson();ae(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(x)),p(x);break;case Uu.TIMEOUT:ae(Ft,`RPC '${e}' ${h} timed out`),g(new re($.DEADLINE_EXCEEDED,"Request time out"));break;case Uu.HTTP_ERROR:const A=_.getStatus();if(ae(Ft,`RPC '${e}' ${h} failed with status:`,A,"response text:",_.getResponseText()),A>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const W=B?.error;if(W&&W.status&&W.message){const X=(function(Q){const J=Q.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(J)>=0?J:$.UNKNOWN})(W.status);g(new re(X,W.message))}else g(new re($.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new re($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ae(Ft,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);ae(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",T,i,15)}))}T_(e,t,i){const o=rf(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=M_(),p=O_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const T=u.join("");ae(Ft,`Creating RPC '${e}' stream ${o}: ${T}`,g);const x=h.createWebChannel(T,g);this.I_(x);let A=!1,B=!1;const W=new PS({Yo:F=>{B?ae(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(A||(ae(Ft,`Opening RPC '${e}' stream ${o} transport.`),x.open(),A=!0),ae(Ft,`RPC '${e}' stream ${o} sending:`,F),x.send(F))},Zo:()=>x.close()}),X=(F,Q,J)=>{F.listen(Q,(ne=>{try{J(ne)}catch(me){setTimeout((()=>{throw me}),0)}}))};return X(x,Fa.EventType.OPEN,(()=>{B||(ae(Ft,`RPC '${e}' stream ${o} transport opened.`),W.o_())})),X(x,Fa.EventType.CLOSE,(()=>{B||(B=!0,ae(Ft,`RPC '${e}' stream ${o} transport closed`),W.a_(),this.E_(x))})),X(x,Fa.EventType.ERROR,(F=>{B||(B=!0,Co(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,F.name,"Message:",F.message),W.a_(new re($.UNAVAILABLE,"The operation could not be completed")))})),X(x,Fa.EventType.MESSAGE,(F=>{if(!B){const Q=F.data[0];ze(!!Q,16349);const J=Q,ne=J?.error||J[0]?.error;if(ne){ae(Ft,`RPC '${e}' stream ${o} received error:`,ne);const me=ne.status;let Ee=(function(S){const C=ct[S];if(C!==void 0)return gv(C)})(me),Ae=ne.message;Ee===void 0&&(Ee=$.INTERNAL,Ae="Unknown error status: "+me+" with message "+ne.message),B=!0,W.a_(new re(Ee,Ae)),x.close()}else ae(Ft,`RPC '${e}' stream ${o} received:`,Q),W.u_(Q)}})),X(p,V_.STAT_EVENT,(F=>{F.stat===qd.PROXY?ae(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===qd.NOPROXY&&ae(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{W.__()}),0),W}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function kd(){return typeof document<"u"?document:null}/**
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
 */function Pc(r){return new O1(r,!0)}/**
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
 */class Pv{constructor(e,t,i=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ty="PersistentStream";class Nv{constructor(e,t,i,o,u,h,p,g){this.Mi=e,this.S_=i,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Pv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(jr(t.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new re($.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(Ty,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ae(Ty,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class DS extends Nv{constructor(e,t,i,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=j1(this.serializer,e),i=(function(u){if(!("targetChange"in u))return Ie.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?lr(h.readTime):Ie.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=tf(this.serializer),t.addTarget=(function(u,h){let p;const g=h.target;if(p=Qd(g)?{documents:z1(u,g)}:{query:B1(u,g).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=vv(u,h.resumeToken);const _=Jd(u,h.expectedCount);_!==null&&(p.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ie.min())>0){p.readTime=ic(u,h.snapshotVersion.toTimestamp());const _=Jd(u,h.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,e);const i=q1(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=tf(this.serializer),t.removeTarget=e,this.q_(t)}}class bS extends Nv{constructor(e,t,i,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=U1(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=tf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>F1(this.serializer,i)))};this.q_(t)}}/**
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
 */class VS{}class OS extends VS{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,Zd(t,i),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new re($.UNKNOWN,u.toString())}))}Ho(e,t,i,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.Ho(e,Zd(t,i),o,h,p,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new re($.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class MS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(jr(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const di="RemoteStore";class LS{constructor(e,t,i,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{i.enqueueAndForget((async()=>{vi(this)&&(ae(di,"Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.Ea.add(4),await cl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Nc(_)})(this))}))})),this.Ra=new MS(i,o)}}async function Nc(r){if(vi(r))for(const e of r.da)await e(!0)}async function cl(r){for(const e of r.da)await e(!1)}function Dv(r,e){const t=Se(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Lf(t)?Mf(t):zo(t).O_()&&Of(t,e))}function Vf(r,e){const t=Se(r),i=zo(t);t.Ia.delete(e),i.O_()&&bv(t,e),t.Ia.size===0&&(i.O_()?i.L_():vi(t)&&t.Ra.set("Unknown"))}function Of(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zo(r).Y_(e)}function bv(r,e){r.Va.Ue(e),zo(r).Z_(e)}function Mf(r){r.Va=new N1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),zo(r).start(),r.Ra.ua()}function Lf(r){return vi(r)&&!zo(r).x_()&&r.Ia.size>0}function vi(r){return Se(r).Ea.size===0}function Vv(r){r.Va=void 0}async function jS(r){r.Ra.set("Online")}async function FS(r){r.Ia.forEach(((e,t)=>{Of(r,e)}))}async function US(r,e){Vv(r),Lf(r)?(r.Ra.ha(e),Mf(r)):r.Ra.set("Unknown")}async function zS(r,e,t){if(r.Ra.set("Online"),e instanceof _v&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.Va.removeTarget(p))})(r,e)}catch(i){ae(di,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ac(r,i)}else if(e instanceof qu?r.Va.Ze(e):e instanceof yv?r.Va.st(e):r.Va.tt(e),!t.isEqual(Ie.min()))try{const i=await kv(r.localStore);t.compareTo(i)>=0&&await(function(u,h){const p=u.Va.Tt(h);return p.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ia.get(_);T&&u.Ia.set(_,T.withResumeToken(g.resumeToken,h))}})),p.targetMismatches.forEach(((g,_)=>{const T=u.Ia.get(g);if(!T)return;u.Ia.set(g,T.withResumeToken(Vt.EMPTY_BYTE_STRING,T.snapshotVersion)),bv(u,g);const x=new _s(T.target,g,_,T.sequenceNumber);Of(u,x)})),u.remoteSyncer.applyRemoteEvent(p)})(r,t)}catch(i){ae(di,"Failed to raise snapshot:",i),await ac(r,i)}}async function ac(r,e,t){if(!Fo(e))throw e;r.Ea.add(1),await cl(r),r.Ra.set("Offline"),t||(t=()=>kv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ae(di,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Nc(r)}))}function Ov(r,e){return e().catch((t=>ac(r,t,e)))}async function Dc(r){const e=Se(r),t=Rs(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:vf;for(;BS(e);)try{const o=await IS(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,$S(e,o)}catch(o){await ac(e,o)}Mv(e)&&Lv(e)}function BS(r){return vi(r)&&r.Ta.length<10}function $S(r,e){r.Ta.push(e);const t=Rs(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Mv(r){return vi(r)&&!Rs(r).x_()&&r.Ta.length>0}function Lv(r){Rs(r).start()}async function qS(r){Rs(r).ra()}async function HS(r){const e=Rs(r);for(const t of r.Ta)e.ea(t.mutations)}async function WS(r,e,t){const i=r.Ta.shift(),o=Cf.from(i,e,t);await Ov(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Dc(r)}async function GS(r,e){e&&Rs(r).X_&&await(async function(i,o){if((function(h){return R1(h)&&h!==$.ABORTED})(o.code)){const u=i.Ta.shift();Rs(i).B_(),await Ov(i,(()=>i.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Dc(i)}})(r,e),Mv(r)&&Lv(r)}async function Iy(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),ae(di,"RemoteStore received new credentials");const i=vi(t);t.Ea.add(3),await cl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Nc(t)}async function KS(r,e){const t=Se(r);e?(t.Ea.delete(2),await Nc(t)):e||(t.Ea.add(2),await cl(t),t.Ra.set("Unknown"))}function zo(r){return r.ma||(r.ma=(function(t,i,o){const u=Se(t);return u.sa(),new DS(i,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:jS.bind(null,r),t_:FS.bind(null,r),r_:US.bind(null,r),H_:zS.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Lf(r)?Mf(r):r.Ra.set("Unknown")):(await r.ma.stop(),Vv(r))}))),r.ma}function Rs(r){return r.fa||(r.fa=(function(t,i,o){const u=Se(t);return u.sa(),new bS(i,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:qS.bind(null,r),r_:GS.bind(null,r),ta:HS.bind(null,r),na:WS.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Dc(r)):(await r.fa.stop(),r.Ta.length>0&&(ae(di,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class jf{constructor(e,t,i,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=u,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,u){const h=Date.now()+i,p=new jf(e,t,h,o,u);return p.start(i),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ff(r,e){if(jr("AsyncQueue",`${e}: ${r}`),Fo(r))return new re($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class wo{static emptySet(e){return new wo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=Ua(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=i.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new wo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Sy{constructor(){this.ga=new nt(fe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Do{constructor(e,t,i,o,u,h,p,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,u){const h=[];return t.forEach((p=>{h.push({type:0,doc:p})})),new Do(e,t,wo.emptySet(t),h,i,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class QS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class YS{constructor(){this.queries=Ay(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Se(t),u=o.queries;o.queries=Ay(),u.forEach(((h,p)=>{for(const g of p.Sa)g.onError(i)}))})(this,new re($.ABORTED,"Firestore shutting down"))}}function Ay(){return new _i((r=>sv(r)),Ac)}async function jv(r,e){const t=Se(r);let i=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(i=2):(u=new QS,i=e.Da()?0:1);try{switch(i){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=Ff(h,`Initialization of query '${go(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Uf(t)}async function Fv(r,e){const t=Se(r),i=e.query;let o=3;const u=t.queries.get(i);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function XS(r,e){const t=Se(r);let i=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.Sa)p.Fa(o)&&(i=!0);h.wa=o}}i&&Uf(t)}function JS(r,e,t){const i=Se(r),o=i.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);i.queries.delete(e)}function Uf(r){r.Ca.forEach((e=>{e.next()}))}var sf,xy;(xy=sf||(sf={})).Ma="default",xy.Cache="cache";class Uv{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Do(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Do.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sf.Cache}}/**
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
 */class zv{constructor(e){this.key=e}}class Bv{constructor(e){this.key=e}}class ZS{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=iv(e),this.tu=new wo(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new Sy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,x)=>{const A=o.get(T),B=xc(this.query,x)?x:null,W=!!A&&this.mutatedKeys.has(A.key),X=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let F=!1;A&&B?A.data.isEqual(B.data)?W!==X&&(i.track({type:3,doc:B}),F=!0):this.su(A,B)||(i.track({type:2,doc:B}),F=!0,(g&&this.eu(B,g)>0||_&&this.eu(B,_)<0)&&(p=!0)):!A&&B?(i.track({type:0,doc:B}),F=!0):A&&!B&&(i.track({type:1,doc:A}),F=!0,(g||_)&&(p=!0)),F&&(B?(h=h.add(B),u=X?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),i.track({type:1,doc:T})}return{tu:h,iu:i,Cs:p,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((T,x)=>(function(B,W){const X=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:F})}};return X(B)-X(W)})(T.type,x.type)||this.eu(T.doc,x.doc))),this.ou(i),o=o??!1;const p=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,_=g!==this.Za;return this.Za=g,h.length!==0||_?{snapshot:new Do(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Sy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new Bv(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new zv(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Do.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zf="SyncEngine";class eA{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class tA{constructor(e){this.key=e,this.hu=!1}}class nA{constructor(e,t,i,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new _i((p=>sv(p)),Ac),this.Iu=new Map,this.Eu=new Set,this.du=new nt(fe.comparator),this.Au=new Map,this.Ru=new Pf,this.Vu={},this.mu=new Map,this.fu=No.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function rA(r,e,t=!0){const i=Kv(r);let o;const u=i.Tu.get(e);return u?(i.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await $v(i,e,t,!0),o}async function sA(r,e){const t=Kv(r);await $v(t,e,!0,!1)}async function $v(r,e,t,i){const o=await SS(r.localStore,ar(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let p;return i&&(p=await iA(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Dv(r.remoteStore,o),p}async function iA(r,e,t,i,o){r.pu=(x,A,B)=>(async function(X,F,Q,J){let ne=F.view.ru(Q);ne.Cs&&(ne=await _y(X.localStore,F.query,!1).then((({documents:N})=>F.view.ru(N,ne))));const me=J&&J.targetChanges.get(F.targetId),Ee=J&&J.targetMismatches.get(F.targetId)!=null,Ae=F.view.applyChanges(ne,X.isPrimaryClient,me,Ee);return Ry(X,F.targetId,Ae.au),Ae.snapshot})(r,x,A,B);const u=await _y(r.localStore,e,!0),h=new ZS(e,u.Qs),p=h.ru(u.documents),g=ul.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(p,r.isPrimaryClient,g);Ry(r,t,_.au);const T=new eA(e,t,h);return r.Tu.set(e,T),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function oA(r,e,t){const i=Se(r),o=i.Tu.get(e),u=i.Iu.get(o.targetId);if(u.length>1)return i.Iu.set(o.targetId,u.filter((h=>!Ac(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await nf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Vf(i.remoteStore,o.targetId),of(i,o.targetId)})).catch(jo)):(of(i,o.targetId),await nf(i.localStore,o.targetId,!0))}async function aA(r,e){const t=Se(r),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Vf(t.remoteStore,i.targetId))}async function lA(r,e,t){const i=mA(r);try{const o=await(function(h,p){const g=Se(h),_=qe.now(),T=p.reduce(((B,W)=>B.add(W.key)),Ne());let x,A;return g.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let W=Fr(),X=Ne();return g.Ns.getEntries(B,T).next((F=>{W=F,W.forEach(((Q,J)=>{J.isValidDocument()||(X=X.add(Q))}))})).next((()=>g.localDocuments.getOverlayedDocuments(B,W))).next((F=>{x=F;const Q=[];for(const J of p){const ne=I1(J,x.get(J.key).overlayedDocument);ne!=null&&Q.push(new Ns(J.key,ne,Y_(ne.value.mapValue),xn.exists(!0)))}return g.mutationQueue.addMutationBatch(B,_,Q,p)})).next((F=>{A=F;const Q=F.applyToLocalDocumentSet(x,X);return g.documentOverlayCache.saveOverlays(B,F.batchId,Q)}))})).then((()=>({batchId:A.batchId,changes:av(x)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,p,g){let _=h.Vu[h.currentUser.toKey()];_||(_=new nt(Pe)),_=_.insert(p,g),h.Vu[h.currentUser.toKey()]=_})(i,o.batchId,t),await hl(i,o.changes),await Dc(i.remoteStore)}catch(o){const u=Ff(o,"Failed to persist write");t.reject(u)}}async function qv(r,e){const t=Se(r);try{const i=await ES(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await hl(t,i,e)}catch(i){await jo(i)}}function Cy(r,e,t){const i=Se(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((u,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(h,p){const g=Se(h);g.onlineState=p;let _=!1;g.queries.forEach(((T,x)=>{for(const A of x.Sa)A.va(p)&&(_=!0)})),_&&Uf(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function uA(r,e,t){const i=Se(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),u=o&&o.key;if(u){let h=new nt(fe.comparator);h=h.insert(u,zt.newNoDocument(u,Ie.min()));const p=Ne().add(u),g=new kc(Ie.min(),new Map,new nt(Pe),h,p);await qv(i,g),i.du=i.du.remove(u),i.Au.delete(e),Bf(i)}else await nf(i.localStore,e,!1).then((()=>of(i,e,t))).catch(jo)}async function cA(r,e){const t=Se(r),i=e.batch.batchId;try{const o=await wS(t.localStore,e);Wv(t,i,null),Hv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await hl(t,o)}catch(o){await jo(o)}}async function hA(r,e,t){const i=Se(r);try{const o=await(function(h,p){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return g.mutationQueue.lookupMutationBatch(_,p).next((x=>(ze(x!==null,37113),T=x.keys(),g.mutationQueue.removeMutationBatch(_,x)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,T,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>g.localDocuments.getDocuments(_,T)))}))})(i.localStore,e);Wv(i,e,t),Hv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await hl(i,o)}catch(o){await jo(o)}}function Hv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Wv(r,e,t){const i=Se(r);let o=i.Vu[i.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function of(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||Gv(r,i)}))}function Gv(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Vf(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Bf(r))}function Ry(r,e,t){for(const i of t)i instanceof zv?(r.Ru.addReference(i.key,e),dA(r,i)):i instanceof Bv?(ae(zf,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||Gv(r,i.key)):_e(19791,{wu:i})}function dA(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(ae(zf,"New document in limbo: "+t),r.Eu.add(i),Bf(r))}function Bf(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new fe(Ke.fromString(e)),i=r.fu.next();r.Au.set(i,new tA(t)),r.du=r.du.insert(t,i),Dv(r.remoteStore,new _s(ar(Sf(t.path)),i,"TargetPurposeLimboResolution",Tc.ce))}}async function hl(r,e,t){const i=Se(r),o=[],u=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((p,g)=>{h.push(i.pu(g,e,t).then((_=>{if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:t?.targetChanges.get(g.targetId)?.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Df.As(g.targetId,_);u.push(T)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,_){const T=Se(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>H.forEach(_,(A=>H.forEach(A.Es,(B=>T.persistence.referenceDelegate.addReference(x,A.targetId,B))).next((()=>H.forEach(A.ds,(B=>T.persistence.referenceDelegate.removeReference(x,A.targetId,B)))))))))}catch(x){if(!Fo(x))throw x;ae(bf,"Failed to update sequence numbers: "+x)}for(const x of _){const A=x.targetId;if(!x.fromCache){const B=T.Ms.get(A),W=B.snapshotVersion,X=B.withLastLimboFreeSnapshotVersion(W);T.Ms=T.Ms.insert(A,X)}}})(i.localStore,u))}async function fA(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){ae(zf,"User change. New user:",e.toKey());const i=await Rv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((p=>{p.forEach((g=>{g.reject(new re($.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await hl(t,i.Ls)}}function pA(r,e){const t=Se(r),i=t.Au.get(e);if(i&&i.hu)return Ne().add(i.key);{let o=Ne();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const p=t.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function Kv(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=qv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uA.bind(null,e),e.Pu.H_=XS.bind(null,e.eventManager),e.Pu.yu=JS.bind(null,e.eventManager),e}function mA(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hA.bind(null,e),e}class lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return vS(this.persistence,new gS,e.initialUser,this.serializer)}Cu(e){return new Cv(Nf.mi,this.serializer)}Du(e){return new xS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lc.provider={build:()=>new lc};class gA extends lc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof oc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new tS(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new Cv((i=>oc.mi(i,t)),this.serializer)}}class af{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Cy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=fA.bind(null,this.syncEngine),await KS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new YS})()}createDatastore(e){const t=Pc(e.databaseInfo.databaseId),i=(function(u){return new NS(u)})(e.databaseInfo);return(function(u,h,p,g){return new OS(u,h,p,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,u,h,p){return new LS(i,o,u,h,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Cy(this.syncEngine,t,0)),(function(){return Ey.v()?new Ey:new CS})())}createSyncEngine(e,t){return(function(o,u,h,p,g,_,T){const x=new nA(o,u,h,p,g,_);return T&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Se(t);ae(di,"RemoteStore shutting down."),i.Ea.add(5),await cl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}af.provider={build:()=>new af};/**
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
 */class Qv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ks="FirestoreClient";class yA{constructor(e,t,i,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=_f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(i,(async h=>{ae(ks,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ae(ks,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ff(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Pd(r,e){r.asyncQueue.verifyOperationInProgress(),ae(ks,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Rv(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function ky(r,e){r.asyncQueue.verifyOperationInProgress();const t=await _A(r);ae(ks,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>Iy(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>Iy(e.remoteStore,o))),r._onlineComponents=e}async function _A(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ae(ks,"Using user provided OfflineComponentProvider");try{await Pd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Co("Error using user provided cache. Falling back to memory cache: "+t),await Pd(r,new lc)}}else ae(ks,"Using default OfflineComponentProvider"),await Pd(r,new gA(void 0));return r._offlineComponents}async function Yv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ae(ks,"Using user provided OnlineComponentProvider"),await ky(r,r._uninitializedComponentsProvider._online)):(ae(ks,"Using default OnlineComponentProvider"),await ky(r,new af))),r._onlineComponents}function vA(r){return Yv(r).then((e=>e.syncEngine))}async function Xv(r){const e=await Yv(r),t=e.eventManager;return t.onListen=rA.bind(null,e.syncEngine),t.onUnlisten=oA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aA.bind(null,e.syncEngine),t}function wA(r,e,t={}){const i=new Mr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,p,g,_){const T=new Qv({next:A=>{T.Nu(),h.enqueueAndForget((()=>Fv(u,x)));const B=A.docs.has(p);!B&&A.fromCache?_.reject(new re($.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&A.fromCache&&g&&g.source==="server"?_.reject(new re($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(A)},error:A=>_.reject(A)}),x=new Uv(Sf(p.path),T,{includeMetadataChanges:!0,qa:!0});return jv(u,x)})(await Xv(r),r.asyncQueue,e,t,i))),i.promise}function EA(r,e,t={}){const i=new Mr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,p,g,_){const T=new Qv({next:A=>{T.Nu(),h.enqueueAndForget((()=>Fv(u,x))),A.fromCache&&g.source==="server"?_.reject(new re($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(A)},error:A=>_.reject(A)}),x=new Uv(p,T,{includeMetadataChanges:!0,qa:!0});return jv(u,x)})(await Xv(r),r.asyncQueue,e,t,i))),i.promise}/**
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
 */function Jv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Py=new Map;/**
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
 */const Zv="firestore.googleapis.com",Ny=!0;class Dy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zv,this.ssl=Ny}else this.host=e.host,this.ssl=e.ssl??Ny;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Z1)throw new re($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jv(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new CI;switch(i.type){case"firstParty":return new NI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new re($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Py.get(t);i&&(ae("ComponentProvider","Removing Datastore"),Py.delete(t),i.terminate())})(this),Promise.resolve()}}function TA(r,e,t,i={}){r=Hn(r,bc);const o=Oo(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&(w_(`https://${p}`),E_("Firestore",!0)),u.host!==Zv&&u.host!==p&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:p,ssl:o,emulatorOptions:i};if(!Is(g,h)&&(r._setSettings(g),i.mockUserToken)){let _,T;if(typeof i.mockUserToken=="string")_=i.mockUserToken,T=Ut.MOCK_USER;else{_=ZE(i.mockUserToken,r._app?.options.projectId);const x=i.mockUserToken.sub||i.mockUserToken.user_id;if(!x)throw new re($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ut(x)}r._authCredentials=new RI(new j_(_,T))}}/**
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
 */class wi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new wi(this.firestore,e,this._query)}}class at{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(al(t,at._jsonSchema))return new at(e,i||null,new fe(Ke.fromString(t.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:dt("string",at._jsonSchemaVersion),referencePath:dt("string")};class Ts extends wi{constructor(e,t,i){super(e,t,Sf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new fe(e))}withConverter(e){return new Ts(this.firestore,e,this._path)}}function Eo(r,e,...t){if(r=bt(r),F_("collection","path",e),r instanceof bc){const i=Ke.fromString(e,...t);return Hg(i),new Ts(r,null,i)}{if(!(r instanceof at||r instanceof Ts))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ke.fromString(e,...t));return Hg(i),new Ts(r.firestore,null,i)}}function bo(r,e,...t){if(r=bt(r),arguments.length===1&&(e=_f.newId()),F_("doc","path",e),r instanceof bc){const i=Ke.fromString(e,...t);return qg(i),new at(r,null,new fe(i))}{if(!(r instanceof at||r instanceof Ts))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ke.fromString(e,...t));return qg(i),new at(r.firestore,r instanceof Ts?r.converter:null,new fe(i))}}/**
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
 */const by="AsyncQueue";class Vy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Pv(this,"async_queue_retry"),this._c=()=>{const i=kd();i&&ae(by,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=kd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=kd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Mr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Fo(e))throw e;ae(by,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,jr("INTERNAL UNHANDLED ERROR: ",Oy(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=jf.createAndSchedule(this,e,t,i,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:Oy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Oy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Ei extends bc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Vy,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vy(e),this._firestoreClient=void 0,await e}}}function IA(r,e){const t=typeof r=="object"?r:gf(),i=typeof r=="string"?r:ec,o=yi(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const u=XE("firestore");u&&TA(o,...u)}return o}function $f(r){if(r._terminated)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||SA(r),r._firestoreClient}function SA(r){const e=r._freezeSettings(),t=(function(o,u,h,p){return new KI(o,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Jv(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new yA(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Vt.fromBase64String(e))}catch(t){throw new re($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(al(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:dt("string",Sn._jsonSchemaVersion),bytes:dt("string")};/**
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
 */class Vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qf{constructor(e){this._methodName=e}}/**
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
 */class ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ur._jsonSchemaVersion}}static fromJSON(e){if(al(e,ur._jsonSchema))return new ur(e.latitude,e.longitude)}}ur._jsonSchemaVersion="firestore/geoPoint/1.0",ur._jsonSchema={type:dt("string",ur._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class cr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let u=0;u<i.length;++u)if(i[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:cr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(al(e,cr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new cr(e.vectorValues);throw new re($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cr._jsonSchemaVersion="firestore/vectorValue/1.0",cr._jsonSchema={type:dt("string",cr._jsonSchemaVersion),vectorValues:dt("object")};/**
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
 */const AA=/^__.*__$/;class xA{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ns(e,this.data,this.fieldMask,t,this.fieldTransforms):new ll(e,this.data,t,this.fieldTransforms)}}class e0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ns(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function t0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:r})}}class Hf{constructor(e,t,i,o,u,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Hf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return uc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(t0(this.Ac)&&AA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class CA{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Pc(e)}Cc(e,t,i,o=!1){return new Hf({Ac:e,methodName:t,Dc:i,path:Dt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oc(r){const e=r._freezeSettings(),t=Pc(r._databaseId);return new CA(r._databaseId,!!e.ignoreUndefinedProperties,t)}function n0(r,e,t,i,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);Wf("Data must be an object, but it was:",h,i);const p=r0(i,h);let g,_;if(u.merge)g=new dn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const x of u.mergeFields){const A=lf(e,x,t);if(!h.contains(A))throw new re($.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);i0(T,A)||T.push(A)}g=new dn(T),_=h.fieldTransforms.filter((x=>g.covers(x.field)))}else g=null,_=h.fieldTransforms;return new xA(new nn(p),g,_)}class Mc extends qf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mc}}function RA(r,e,t,i){const o=r.Cc(1,e,t);Wf("Data must be an object, but it was:",o,i);const u=[],h=nn.empty();Ps(i,((g,_)=>{const T=Gf(e,g,t);_=bt(_);const x=o.yc(T);if(_ instanceof Mc)u.push(T);else{const A=dl(_,x);A!=null&&(u.push(T),h.set(T,A))}}));const p=new dn(u);return new e0(h,p,o.fieldTransforms)}function kA(r,e,t,i,o,u){const h=r.Cc(1,e,t),p=[lf(e,i,t)],g=[o];if(u.length%2!=0)throw new re($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<u.length;A+=2)p.push(lf(e,u[A])),g.push(u[A+1]);const _=[],T=nn.empty();for(let A=p.length-1;A>=0;--A)if(!i0(_,p[A])){const B=p[A];let W=g[A];W=bt(W);const X=h.yc(B);if(W instanceof Mc)_.push(B);else{const F=dl(W,X);F!=null&&(_.push(B),T.set(B,F))}}const x=new dn(_);return new e0(T,x,h.fieldTransforms)}function PA(r,e,t,i=!1){return dl(t,r.Cc(i?4:3,e))}function dl(r,e){if(s0(r=bt(r)))return Wf("Unsupported field value:",e,r),r0(r,e);if(r instanceof qf)return(function(i,o){if(!t0(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const u=i._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const u=[];let h=0;for(const p of i){let g=dl(p,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(i,o){if((i=bt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return y1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const u=qe.fromDate(i);return{timestampValue:ic(o.serializer,u)}}if(i instanceof qe){const u=new qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ic(o.serializer,u)}}if(i instanceof ur)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Sn)return{bytesValue:vv(o.serializer,i._byteString)};if(i instanceof at){const u=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:kf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof cr)return(function(h,p){return{mapValue:{fields:{[K_]:{stringValue:Q_},[tc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw p.Sc("VectorValues must only contain numeric values.");return Af(p.serializer,_)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${Ec(i)}`)})(r,e)}function r0(r,e){const t={};return B_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(r,((i,o)=>{const u=dl(o,e.mc(i));u!=null&&(t[i]=u)})),{mapValue:{fields:t}}}function s0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof qe||r instanceof ur||r instanceof Sn||r instanceof at||r instanceof qf||r instanceof cr)}function Wf(r,e,t){if(!s0(t)||!U_(t)){const i=Ec(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function lf(r,e,t){if((e=bt(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return Gf(r,e);throw uc("Field path arguments must be of type string or ",r,!1,void 0,t)}const NA=new RegExp("[~\\*/\\[\\]]");function Gf(r,e,t){if(e.search(NA)>=0)throw uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Vc(...e.split("."))._internalPath}catch{throw uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function uc(r,e,t,i,o){const u=i&&!i.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new re($.INVALID_ARGUMENT,p+r+g)}function i0(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class o0{constructor(e,t,i,o,u){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DA extends o0{data(){return super.data()}}function Lc(r,e){return typeof e=="string"?Gf(r,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
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
 */function bA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new re($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kf{}class a0 extends Kf{}function l0(r,e,...t){let i=[];e instanceof Kf&&i.push(e),i=i.concat(t),(function(u){const h=u.filter((g=>g instanceof Qf)).length,p=u.filter((g=>g instanceof jc)).length;if(h>1||h>0&&p>0)throw new re($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class jc extends a0{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new jc(e,t,i)}_apply(e){const t=this._parse(e);return u0(e._query,t),new wi(e.firestore,e.converter,Yd(e._query,t))}_parse(e){const t=Oc(e.firestore);return(function(u,h,p,g,_,T,x){let A;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new re($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){Ly(x,T);const W=[];for(const X of x)W.push(My(g,u,X));A={arrayValue:{values:W}}}else A=My(g,u,x)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||Ly(x,T),A=PA(p,h,x,T==="in"||T==="not-in");return ht.create(_,T,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function VA(r,e,t){const i=e,o=Lc("where",r);return jc._create(o,i,t)}class Qf extends Kf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qf(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Wn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const p=u.getFlattenedFilters();for(const g of p)u0(h,g),h=Yd(h,g)})(e._query,t),new wi(e.firestore,e.converter,Yd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yf extends a0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nl(u,h)})(e._query,this._field,this._direction);return new wi(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Uo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function OA(r,e="asc"){const t=e,i=Lc("orderBy",r);return Yf._create(i,t)}function My(r,e,t){if(typeof(t=bt(t))=="string"){if(t==="")throw new re($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rv(e)&&t.indexOf("/")!==-1)throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!fe.isDocumentKey(i))throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Zg(r,new fe(i))}if(t instanceof at)return Zg(r,t._key);throw new re($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ec(t)}.`)}function Ly(r,e){if(!Array.isArray(r)||r.length===0)throw new re($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function u0(r,e){const t=(function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class MA{convertValue(e,t="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ps(e,((o,u)=>{i[o]=this.convertValue(u,t)})),i}convertVectorValue(e){const t=e.fields?.[tc].arrayValue?.values?.map((i=>ot(i.doubleValue)));return new cr(t)}convertGeoPoint(e){return new ur(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Sc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Za(e));default:return null}}convertTimestamp(e){const t=As(e);return new qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);ze(Av(i),9688,{name:e});const o=new el(i.get(1),i.get(3)),u=new fe(i.popFirst(5));return o.isEqual(t)||jr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function c0(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class Ba{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ui extends o0{constructor(e,t,i,o,u,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Lc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ui._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ui._jsonSchemaVersion="firestore/documentSnapshot/1.0",ui._jsonSchema={type:dt("string",ui._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Hu extends ui{data(e={}){return super.data(e)}}class To{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ba(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Hu(this._firestore,this._userDataWriter,i.key,i,new Ba(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((p=>{const g=new Hu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ba(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const g=new Hu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ba(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return p.type!==0&&(_=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),T=h.indexOf(p.doc.key)),{type:LA(p.type),doc:g,oldIndex:_,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=To._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_f.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),i.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */function jA(r){r=Hn(r,at);const e=Hn(r.firestore,Ei);return wA($f(e),r._key).then((t=>UA(e,r,t)))}To._jsonSchemaVersion="firestore/querySnapshot/1.0",To._jsonSchema={type:dt("string",To._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class h0 extends MA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}function cc(r){r=Hn(r,wi);const e=Hn(r.firestore,Ei),t=$f(e),i=new h0(e);return bA(r._query),EA(t,r._query).then((o=>new To(e,i,r,o)))}function d0(r,e,t){r=Hn(r,at);const i=Hn(r.firestore,Ei),o=c0(r.converter,e,t);return Fc(i,[n0(Oc(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,xn.none())])}function f0(r,e,t,...i){r=Hn(r,at);const o=Hn(r.firestore,Ei),u=Oc(o);let h;return h=typeof(e=bt(e))=="string"||e instanceof Vc?kA(u,"updateDoc",r._key,e,t,i):RA(u,"updateDoc",r._key,e),Fc(o,[h.toMutation(r._key,xn.exists(!0))])}function FA(r){return Fc(Hn(r.firestore,Ei),[new xf(r._key,xn.none())])}function p0(r,e){const t=Hn(r.firestore,Ei),i=bo(r),o=c0(r.converter,e);return Fc(t,[n0(Oc(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,xn.exists(!1))]).then((()=>i))}function Fc(r,e){return(function(i,o){const u=new Mr;return i.asyncQueue.enqueueAndForget((async()=>lA(await vA(i),o,u))),u.promise})($f(r),e)}function UA(r,e,t){const i=t.docs.get(e._key),o=new h0(r);return new ui(r,o,e._key,i,new Ba(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Lo=o})(Mo),fr(new qn("firestore",((i,{instanceIdentifier:o,options:u})=>{const h=i.getProvider("app").getImmediate(),p=new Ei(new kI(i.getProvider("auth-internal")),new DI(h,i.getProvider("app-check-internal")),(function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new re($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new el(_.options.projectId,T)})(h,o),h);return u={useFetchStreams:t,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),An(Ug,zg,e),An(Ug,zg,"esm2020")})();var zA="firebase",BA="12.1.0";/**
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
 */An(zA,BA,"app");const m0="@firebase/installations",Xf="0.6.19";/**
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
 */const g0=1e4,y0=`w:${Xf}`,_0="FIS_v2",$A="https://firebaseinstallations.googleapis.com/v1",qA=3600*1e3,HA="installations",WA="Installations";/**
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
 */const GA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fi=new gi(HA,WA,GA);function v0(r){return r instanceof Gn&&r.code.includes("request-failed")}/**
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
 */function w0({projectId:r}){return`${$A}/projects/${r}/installations`}function E0(r){return{token:r.token,requestStatus:2,expiresIn:QA(r.expiresIn),creationTime:Date.now()}}async function T0(r,e){const i=(await e.json()).error;return fi.create("request-failed",{requestName:r,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function I0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function KA(r,{refreshToken:e}){const t=I0(r);return t.append("Authorization",YA(e)),t}async function S0(r){const e=await r();return e.status>=500&&e.status<600?r():e}function QA(r){return Number(r.replace("s","000"))}function YA(r){return`${_0} ${r}`}/**
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
 */async function XA({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const i=w0(r),o=I0(r),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:_0,appId:r.appId,sdkVersion:y0},p={method:"POST",headers:o,body:JSON.stringify(h)},g=await S0(()=>fetch(i,p));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:E0(_.authToken)}}else throw await T0("Create Installation",g)}/**
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
 */function A0(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function JA(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ZA=/^[cdef][\w-]{21}$/,uf="";function ex(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=tx(r);return ZA.test(t)?t:uf}catch{return uf}}function tx(r){return JA(r).substr(0,22)}/**
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
 */function Uc(r){return`${r.appName}!${r.appId}`}/**
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
 */const x0=new Map;function C0(r,e){const t=Uc(r);R0(t,e),nx(t,e)}function R0(r,e){const t=x0.get(r);if(t)for(const i of t)i(e)}function nx(r,e){const t=rx();t&&t.postMessage({key:r,fid:e}),sx()}let li=null;function rx(){return!li&&"BroadcastChannel"in self&&(li=new BroadcastChannel("[Firebase] FID Change"),li.onmessage=r=>{R0(r.data.key,r.data.fid)}),li}function sx(){x0.size===0&&li&&(li.close(),li=null)}/**
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
 */const ix="firebase-installations-database",ox=1,pi="firebase-installations-store";let Nd=null;function Jf(){return Nd||(Nd=C_(ix,ox,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(pi)}}})),Nd}async function hc(r,e){const t=Uc(r),o=(await Jf()).transaction(pi,"readwrite"),u=o.objectStore(pi),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&C0(r,e.fid),e}async function k0(r){const e=Uc(r),i=(await Jf()).transaction(pi,"readwrite");await i.objectStore(pi).delete(e),await i.done}async function zc(r,e){const t=Uc(r),o=(await Jf()).transaction(pi,"readwrite"),u=o.objectStore(pi),h=await u.get(t),p=e(h);return p===void 0?await u.delete(t):await u.put(p,t),await o.done,p&&(!h||h.fid!==p.fid)&&C0(r,p.fid),p}/**
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
 */async function Zf(r){let e;const t=await zc(r.appConfig,i=>{const o=ax(i),u=lx(r,o);return e=u.registrationPromise,u.installationEntry});return t.fid===uf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ax(r){const e=r||{fid:ex(),registrationStatus:0};return P0(e)}function lx(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(fi.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=ux(r,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cx(r)}:{installationEntry:e}}async function ux(r,e){try{const t=await XA(r,e);return hc(r.appConfig,t)}catch(t){throw v0(t)&&t.customData.serverCode===409?await k0(r.appConfig):await hc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function cx(r){let e=await jy(r.appConfig);for(;e.registrationStatus===1;)await A0(100),e=await jy(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Zf(r);return i||t}return e}function jy(r){return zc(r,e=>{if(!e)throw fi.create("installation-not-found");return P0(e)})}function P0(r){return hx(r)?{fid:r.fid,registrationStatus:0}:r}function hx(r){return r.registrationStatus===1&&r.registrationTime+g0<Date.now()}/**
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
 */async function dx({appConfig:r,heartbeatServiceProvider:e},t){const i=fx(r,t),o=KA(r,t),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:y0,appId:r.appId}},p={method:"POST",headers:o,body:JSON.stringify(h)},g=await S0(()=>fetch(i,p));if(g.ok){const _=await g.json();return E0(_)}else throw await T0("Generate Auth Token",g)}function fx(r,{fid:e}){return`${w0(r)}/${e}/authTokens:generate`}/**
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
 */async function ep(r,e=!1){let t;const i=await zc(r.appConfig,u=>{if(!N0(u))throw fi.create("not-registered");const h=u.authToken;if(!e&&gx(h))return u;if(h.requestStatus===1)return t=px(r,e),u;{if(!navigator.onLine)throw fi.create("app-offline");const p=_x(u);return t=mx(r,p),p}});return t?await t:i.authToken}async function px(r,e){let t=await Fy(r.appConfig);for(;t.authToken.requestStatus===1;)await A0(100),t=await Fy(r.appConfig);const i=t.authToken;return i.requestStatus===0?ep(r,e):i}function Fy(r){return zc(r,e=>{if(!N0(e))throw fi.create("not-registered");const t=e.authToken;return vx(t)?{...e,authToken:{requestStatus:0}}:e})}async function mx(r,e){try{const t=await dx(r,e),i={...e,authToken:t};return await hc(r.appConfig,i),t}catch(t){if(v0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await k0(r.appConfig);else{const i={...e,authToken:{requestStatus:0}};await hc(r.appConfig,i)}throw t}}function N0(r){return r!==void 0&&r.registrationStatus===2}function gx(r){return r.requestStatus===2&&!yx(r)}function yx(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+qA}function _x(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function vx(r){return r.requestStatus===1&&r.requestTime+g0<Date.now()}/**
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
 */async function wx(r){const e=r,{installationEntry:t,registrationPromise:i}=await Zf(e);return i?i.catch(console.error):ep(e).catch(console.error),t.fid}/**
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
 */async function Ex(r,e=!1){const t=r;return await Tx(t),(await ep(t,e)).token}async function Tx(r){const{registrationPromise:e}=await Zf(r);e&&await e}/**
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
 */function Ix(r){if(!r||!r.options)throw Dd("App Configuration");if(!r.name)throw Dd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Dd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Dd(r){return fi.create("missing-app-config-values",{valueName:r})}/**
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
 */const D0="installations",Sx="installations-internal",Ax=r=>{const e=r.getProvider("app").getImmediate(),t=Ix(e),i=yi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},xx=r=>{const e=r.getProvider("app").getImmediate(),t=yi(e,D0).getImmediate();return{getId:()=>wx(t),getToken:o=>Ex(t,o)}};function Cx(){fr(new qn(D0,Ax,"PUBLIC")),fr(new qn(Sx,xx,"PRIVATE"))}Cx();An(m0,Xf);An(m0,Xf,"esm2020");/**
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
 */const dc="analytics",Rx="firebase_id",kx="origin",Px=60*1e3,Nx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",tp="https://www.googletagmanager.com/gtag/js";/**
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
 */const rn=new wc("@firebase/analytics");/**
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
 */const Dx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new gi("analytics","Analytics",Dx);/**
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
 */function bx(r){if(!r.startsWith(tp)){const e=fn.create("invalid-gtag-resource",{gtagURL:r});return rn.warn(e.message),""}return r}function b0(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function Vx(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function Ox(r,e){const t=Vx("firebase-js-sdk-policy",{createScriptURL:bx}),i=document.createElement("script"),o=`${tp}?l=${r}&id=${e}`;i.src=t?t?.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function Mx(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Lx(r,e,t,i,o,u){const h=i[o];try{if(h)await e[h];else{const g=(await b0(t)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(p){rn.error(p)}r("config",o,u)}async function jx(r,e,t,i,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const p=await b0(t);for(const g of h){const _=p.find(x=>x.measurementId===g),T=_&&e[_.appId];if(T)u.push(T);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",i,o||{})}catch(u){rn.error(u)}}function Fx(r,e,t,i){async function o(u,...h){try{if(u==="event"){const[p,g]=h;await jx(r,e,t,p,g)}else if(u==="config"){const[p,g]=h;await Lx(r,e,t,i,p,g)}else if(u==="consent"){const[p,g]=h;r("consent",p,g)}else if(u==="get"){const[p,g,_]=h;r("get",p,g,_)}else if(u==="set"){const[p]=h;r("set",p)}else r(u,...h)}catch(p){rn.error(p)}}return o}function Ux(r,e,t,i,o){let u=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=Fx(u,r,e,t),{gtagCore:u,wrappedGtag:window[o]}}function zx(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(tp)&&t.src.includes(r))return t;return null}/**
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
 */const Bx=30,$x=1e3;class qx{constructor(e={},t=$x){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const V0=new qx;function Hx(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Wx(r){const{appId:e,apiKey:t}=r,i={method:"GET",headers:Hx(t)},o=Nx.replace("{app-id}",e),u=await fetch(o,i);if(u.status!==200&&u.status!==304){let h="";try{const p=await u.json();p.error?.message&&(h=p.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:h})}return u.json()}async function Gx(r,e=V0,t){const{appId:i,apiKey:o,measurementId:u}=r.options;if(!i)throw fn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:i};throw fn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new Yx;return setTimeout(async()=>{p.abort()},Px),O0({appId:i,apiKey:o,measurementId:u},h,p,e)}async function O0(r,{throttleEndTimeMillis:e,backoffCount:t},i,o=V0){const{appId:u,measurementId:h}=r;try{await Kx(i,e)}catch(p){if(h)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:h};throw p}try{const p=await Wx(r);return o.deleteThrottleMetadata(u),p}catch(p){const g=p;if(!Qx(g)){if(o.deleteThrottleMetadata(u),h)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:u,measurementId:h};throw p}const _=Number(g?.customData?.httpStatus)===503?Pg(t,o.intervalMillis,Bx):Pg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(u,T),rn.debug(`Calling attemptFetch again in ${_} millis`),O0(r,T,i,o)}}function Kx(r,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(u),i(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Qx(r){if(!(r instanceof Gn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Yx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Xx(r,e,t,i,o){if(o&&o.global){r("event",t,i);return}else{const u=await e,h={...i,send_to:u};r("event",t,h)}}/**
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
 */async function Jx(){if(I_())try{await S_()}catch(r){return rn.warn(fn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return rn.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zx(r,e,t,i,o,u,h){const p=Gx(r);p.then(A=>{t[A.measurementId]=A.appId,r.options.measurementId&&A.measurementId!==r.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>rn.error(A)),e.push(p);const g=Jx().then(A=>{if(A)return i.getId()}),[_,T]=await Promise.all([p,g]);zx(u)||Ox(u,_.measurementId),o("js",new Date);const x=h?.config??{};return x[kx]="firebase",x.update=!0,T!=null&&(x[Rx]=T),o("config",_.measurementId,x),_.measurementId}/**
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
 */class eC{constructor(e){this.app=e}_delete(){return delete Ka[this.app.options.appId],Promise.resolve()}}let Ka={},Uy=[];const zy={};let bd="dataLayer",tC="gtag",By,M0,$y=!1;function nC(){const r=[];if(T_()&&r.push("This is a browser extension environment."),lT()||r.push("Cookies are not available."),r.length>0){const e=r.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=fn.create("invalid-analytics-context",{errorInfo:e});rn.warn(t.message)}}function rC(r,e,t){nC();const i=r.options.appId;if(!i)throw fn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(Ka[i]!=null)throw fn.create("already-exists",{id:i});if(!$y){Mx(bd);const{wrappedGtag:u,gtagCore:h}=Ux(Ka,Uy,zy,bd,tC);M0=u,By=h,$y=!0}return Ka[i]=Zx(r,Uy,zy,e,By,bd,t),new eC(r)}function sC(r=gf()){r=bt(r);const e=yi(r,dc);return e.isInitialized()?e.getImmediate():iC(r)}function iC(r,e={}){const t=yi(r,dc);if(t.isInitialized()){const o=t.getImmediate();if(Is(e,t.getOptions()))return o;throw fn.create("already-initialized")}return t.initialize({options:e})}function oC(r,e,t,i){r=bt(r),Xx(M0,Ka[r.app.options.appId],e,t,i).catch(o=>rn.error(o))}const qy="@firebase/analytics",Hy="0.10.18";function aC(){fr(new qn(dc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return rC(i,o,t)},"PUBLIC")),fr(new qn("analytics-internal",r,"PRIVATE")),An(qy,Hy),An(qy,Hy,"esm2020");function r(e){try{const t=e.getProvider(dc).getImmediate();return{logEvent:(i,o,u)=>oC(t,i,o,u)}}catch(t){throw fn.create("interop-component-reg-failed",{reason:t})}}}aC();function L0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lC=L0,j0=new gi("auth","Firebase",L0());/**
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
 */const fc=new wc("@firebase/auth");function uC(r,...e){fc.logLevel<=ke.WARN&&fc.warn(`Auth (${Mo}): ${r}`,...e)}function Wu(r,...e){fc.logLevel<=ke.ERROR&&fc.error(`Auth (${Mo}): ${r}`,...e)}/**
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
 */function Ur(r,...e){throw np(r,...e)}function hr(r,...e){return np(r,...e)}function F0(r,e,t){const i={...lC(),[e]:t};return new gi("auth","Firebase",i).create(e,{appName:r.name})}function ci(r){return F0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function np(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return j0.create(r,...e)}function we(r,e,...t){if(!r)throw np(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Wu(e),new Error(e)}function zr(r,e){r||Vr(e)}/**
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
 */function cf(){return typeof self<"u"&&self.location?.href||""}function cC(){return Wy()==="http:"||Wy()==="https:"}function Wy(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function hC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cC()||T_()||"connection"in navigator)?navigator.onLine:!0}function dC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class fl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=nT()||iT()}get(){return hC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rp(r,e){zr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class U0{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mC=new fl(3e4,6e4);function sp(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Bo(r,e,t,i,o={}){return z0(r,o,async()=>{let u={},h={};i&&(e==="GET"?h=i:u={body:JSON.stringify(i)});const p=ol({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return sT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Oo(r.emulatorConfig.host)&&(_.credentials="include"),U0.fetch()(await B0(r,r.config.apiHost,t,p),_)})}async function z0(r,e,t){r._canInitEmulator=!1;const i={...fC,...e};try{const o=new yC(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Lu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Lu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Lu(r,"user-disabled",h);const T=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw F0(r,T,_);Ur(r,T)}}catch(o){if(o instanceof Gn)throw o;Ur(r,"network-request-failed",{message:String(o)})}}async function gC(r,e,t,i,o={}){const u=await Bo(r,e,t,i,o);return"mfaPendingCredential"in u&&Ur(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function B0(r,e,t,i){const o=`${e}${t}?${i}`,u=r,h=u.config.emulator?rp(r.config,o):`${r.config.apiScheme}://${o}`;return pC.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class yC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(hr(this.auth,"network-request-failed")),mC.get())})}}function Lu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=hr(r,e,i);return o.customData._tokenResponse=t,o}/**
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
 */async function _C(r,e){return Bo(r,"POST","/v1/accounts:delete",e)}async function pc(r,e){return Bo(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vC(r,e=!1){const t=bt(r),i=await t.getIdToken(e),o=ip(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:i,authTime:Qa(Vd(o.auth_time)),issuedAtTime:Qa(Vd(o.iat)),expirationTime:Qa(Vd(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Vd(r){return Number(r)*1e3}function ip(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const o=g_(t);return o?JSON.parse(o):(Wu("Failed to decode base64 JWT payload"),null)}catch(o){return Wu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Gy(r){const e=ip(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function il(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gn&&wC(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function wC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class EC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mc(r){const e=r.auth,t=await r.getIdToken(),i=await il(r,pc(e,{idToken:t}));we(i?.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?$0(o.providerUserInfo):[],h=IC(r.providerData,u),p=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!h?.length,_=p?g:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new hf(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,T)}async function TC(r){const e=bt(r);await mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IC(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function $0(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function SC(r,e){const t=await z0(r,{},async()=>{const i=ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await B0(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:i};return r.emulatorConfig&&Oo(r.emulatorConfig.host)&&(g.credentials="include"),U0.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AC(r,e){return Bo(r,"POST","/v2/accounts:revokeToken",sp(r,e))}/**
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
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Gy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:u}=await SC(e,t);this.updateTokensAndExpiration(i,o,Number(u))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:u}=t,h=new Io;return i&&(we(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(we(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function fs(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class $n{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new EC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new hf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await il(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vC(this,e)}reload(){return TC(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await mc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(or(this.auth.app))return Promise.reject(ci(this.auth));const e=await this.getIdToken();return await il(this,_C(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,p=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:x,emailVerified:A,isAnonymous:B,providerData:W,stsTokenManager:X}=t;we(x&&X,e,"internal-error");const F=Io.fromJSON(this.name,X);we(typeof x=="string",e,"internal-error"),fs(i,e.name),fs(o,e.name),we(typeof A=="boolean",e,"internal-error"),we(typeof B=="boolean",e,"internal-error"),fs(u,e.name),fs(h,e.name),fs(p,e.name),fs(g,e.name),fs(_,e.name),fs(T,e.name);const Q=new $n({uid:x,auth:e,email:o,emailVerified:A,displayName:i,isAnonymous:B,photoURL:h,phoneNumber:u,tenantId:p,stsTokenManager:F,createdAt:_,lastLoginAt:T});return W&&Array.isArray(W)&&(Q.providerData=W.map(J=>({...J}))),g&&(Q._redirectEventId=g),Q}static async _fromIdTokenResponse(e,t,i=!1){const o=new Io;o.updateFromServerResponse(t);const u=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await mc(u),u}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?$0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,p=new Io;p.updateFromIdToken(i);const g=new $n({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new hf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,_),g}}/**
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
 */const Ky=new Map;function Or(r){zr(r instanceof Function,"Expected a class definition");let e=Ky.get(r);return e?(zr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Ky.set(r,e),e)}/**
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
 */class q0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}q0.type="NONE";const Qy=q0;/**
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
 */function Gu(r,e,t){return`firebase:${r}:${e}:${t}`}class So{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:u}=this.auth;this.fullUserKey=Gu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Gu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await pc(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new So(Or(Qy),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Or(Qy);const h=Gu(i,e.config.apiKey,e.name);let p=null;for(const _ of t)try{const T=await _._get(h);if(T){let x;if(typeof T=="string"){const A=await pc(e,{idToken:T}).catch(()=>{});if(!A)break;x=await $n._fromGetAccountInfoResponse(e,A,T)}else x=$n._fromJSON(e,T);_!==u&&(p=x),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new So(u,e,i):(u=g[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new So(u,e,i))}}/**
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
 */function Yy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y0(e))return"Blackberry";if(X0(e))return"Webos";if(W0(e))return"Safari";if((e.includes("chrome/")||G0(e))&&!e.includes("edge/"))return"Chrome";if(Q0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function H0(r=Bt()){return/firefox\//i.test(r)}function W0(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G0(r=Bt()){return/crios\//i.test(r)}function K0(r=Bt()){return/iemobile/i.test(r)}function Q0(r=Bt()){return/android/i.test(r)}function Y0(r=Bt()){return/blackberry/i.test(r)}function X0(r=Bt()){return/webos/i.test(r)}function op(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function xC(r=Bt()){return op(r)&&!!window.navigator?.standalone}function CC(){return oT()&&document.documentMode===10}function J0(r=Bt()){return op(r)||Q0(r)||X0(r)||Y0(r)||/windows phone/i.test(r)||K0(r)}/**
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
 */function Z0(r,e=[]){let t;switch(r){case"Browser":t=Yy(Bt());break;case"Worker":t=`${Yy(Bt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mo}/${i}`}/**
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
 */class RC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=u=>new Promise((h,p)=>{try{const g=e(u);h(g)}catch(g){p(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function kC(r,e={}){return Bo(r,"GET","/v2/passwordPolicy",sp(r,e))}/**
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
 */const PC=6;class NC{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??PC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class DC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xy(this),this.idTokenSubscription=new Xy(this),this.beforeStateQueue=new RC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await So.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pc(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(or(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=i?._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===h)&&p?.user&&(i=p.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(u){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(or(this.app))return Promise.reject(ci(this));const t=e?bt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return or(this.app)?Promise.reject(ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return or(this.app)?Promise.reject(ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kC(this),t=new NC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await AC(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(or(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&uC(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ap(r){return bt(r)}class Xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=fT(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bC(r){lp=r}function VC(r){return lp.loadJS(r)}function OC(){return lp.gapiScript}function MC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function LC(r,e){const t=yi(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Is(u,e??{}))return o;Ur(o,"already-initialized")}return t.initialize({options:e})}function jC(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Or);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function FC(r,e,t){const i=ap(r);we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,u=ew(e),{host:h,port:p}=UC(e),g=p===null?"":`:${p}`,_={url:`${u}//${h}${g}/`},T=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){we(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),we(Is(_,i.config.emulator)&&Is(T,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=T,i.settings.appVerificationDisabledForTesting=!0,Oo(h)?(w_(`${u}//${h}${g}`),E_("Auth",!0)):zC()}function ew(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function UC(r){const e=ew(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const u=o[1];return{host:u,port:Jy(i.substr(u.length+1))}}else{const[u,h]=i.split(":");return{host:u,port:Jy(h)}}}function Jy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function zC(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class tw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}/**
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
 */async function Ao(r,e){return gC(r,"POST","/v1/accounts:signInWithIdp",sp(r,e))}/**
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
 */const BC="http://localhost";class mi extends tw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ur("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...u}=t;if(!i||!o)return null;const h=new mi(i,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ao(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ao(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ao(e,t)}buildRequest(){const e={requestUri:BC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ol(t)}return e}}/**
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
 */class nw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pl extends nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ps extends pl{constructor(){super("facebook.com")}static credential(e){return mi._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ps.credential(e.oauthAccessToken)}catch{return null}}}ps.FACEBOOK_SIGN_IN_METHOD="facebook.com";ps.PROVIDER_ID="facebook.com";/**
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
 */class ms extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mi._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ms.credential(t,i)}catch{return null}}}ms.GOOGLE_SIGN_IN_METHOD="google.com";ms.PROVIDER_ID="google.com";/**
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
 */class gs extends pl{constructor(){super("github.com")}static credential(e){return mi._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gs.credential(e.oauthAccessToken)}catch{return null}}}gs.GITHUB_SIGN_IN_METHOD="github.com";gs.PROVIDER_ID="github.com";/**
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
 */class ys extends pl{constructor(){super("twitter.com")}static credential(e,t){return mi._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ys.credential(t,i)}catch{return null}}}ys.TWITTER_SIGN_IN_METHOD="twitter.com";ys.PROVIDER_ID="twitter.com";/**
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
 */class Vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const u=await $n._fromIdTokenResponse(e,i,o),h=Zy(i);return new Vo({user:u,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Zy(i);return new Vo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Zy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class gc extends Gn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,gc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new gc(e,t,i,o)}}function rw(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?gc._fromErrorAndOperation(r,u,e,i):u})}async function $C(r,e,t=!1){const i=await il(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Vo._forOperation(r,"link",i)}/**
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
 */async function qC(r,e,t=!1){const{auth:i}=r;if(or(i.app))return Promise.reject(ci(i));const o="reauthenticate";try{const u=await il(r,rw(i,o,e,r),t);we(u.idToken,i,"internal-error");const h=ip(u.idToken);we(h,i,"internal-error");const{sub:p}=h;return we(r.uid===p,i,"user-mismatch"),Vo._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Ur(i,"user-mismatch"),u}}/**
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
 */async function HC(r,e,t=!1){if(or(r.app))return Promise.reject(ci(r));const i="signIn",o=await rw(r,i,e),u=await Vo._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(u.user),u}function WC(r,e,t,i){return bt(r).onIdTokenChanged(e,t,i)}function GC(r,e,t){return bt(r).beforeAuthStateChanged(e,t)}const yc="__sak";/**
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
 */class sw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yc,"1"),this.storage.removeItem(yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const KC=1e3,QC=10;class iw extends sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},u=this.storage.getItem(i);CC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,QC):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},KC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iw.type="LOCAL";const YC=iw;/**
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
 */class ow extends sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ow.type="SESSION";const aw=ow;/**
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
 */function XC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Bc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const p=Array.from(h).map(async _=>_(t.origin,u)),g=await XC(p);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bc.receivers=[];/**
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
 */function up(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class JC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,g)=>{const _=up("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(x){const A=x;if(A.data.eventId===_)switch(A.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(A.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function dr(){return window}function ZC(r){dr().location.href=r}/**
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
 */function lw(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function eR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tR(){return navigator?.serviceWorker?.controller||null}function nR(){return lw()?self:null}/**
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
 */const uw="firebaseLocalStorageDb",rR=1,_c="firebaseLocalStorage",cw="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $c(r,e){return r.transaction([_c],e?"readwrite":"readonly").objectStore(_c)}function sR(){const r=indexedDB.deleteDatabase(uw);return new ml(r).toPromise()}function df(){const r=indexedDB.open(uw,rR);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(_c,{keyPath:cw})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(_c)?e(i):(i.close(),await sR(),e(await df()))})})}async function e_(r,e,t){const i=$c(r,!0).put({[cw]:e,value:t});return new ml(i).toPromise()}async function iR(r,e){const t=$c(r,!1).get(e),i=await new ml(t).toPromise();return i===void 0?null:i.value}function t_(r,e){const t=$c(r,!0).delete(e);return new ml(t).toPromise()}const oR=800,aR=3;class hw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await df(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>aR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bc._getInstance(nR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await eR(),!this.activeServiceWorker)return;this.sender=new JC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await df();return await e_(e,yc,"1"),await t_(e,yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>e_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>iR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>t_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=$c(o,!1).getAll();return new ml(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hw.type="LOCAL";const lR=hw;new fl(3e4,6e4);/**
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
 */function uR(r,e){return e?Or(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class cp extends tw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ao(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ao(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cR(r){return HC(r.auth,new cp(r),r.bypassAuthState)}function hR(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),qC(t,new cp(r),r.bypassAuthState)}async function dR(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),$C(t,new cp(r),r.bypassAuthState)}/**
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
 */class dw{constructor(e,t,i,o,u=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cR;case"linkViaPopup":case"linkViaRedirect":return dR;case"reauthViaPopup":case"reauthViaRedirect":return hR;default:Ur(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fR=new fl(2e3,1e4);class vo extends dw{constructor(e,t,i,o,u){super(e,t,o,u),this.provider=i,this.authWindow=null,this.pollId=null,vo.currentPopupAction&&vo.currentPopupAction.cancel(),vo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(hr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(hr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fR.get())};e()}}vo.currentPopupAction=null;/**
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
 */const pR="pendingRedirect",Ku=new Map;class mR extends dw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const i=await gR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gR(r,e){const t=vR(e),i=_R(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function yR(r,e){Ku.set(r._key(),e)}function _R(r){return Or(r._redirectPersistence)}function vR(r){return Gu(pR,r.config.apiKey,r.name)}async function wR(r,e,t=!1){if(or(r.app))return Promise.reject(ci(r));const i=ap(r),o=uR(i,e),h=await new mR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const ER=600*1e3;class TR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!fw(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(hr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ER&&this.cachedEventUids.clear(),this.cachedEventUids.has(n_(e))}saveEventToCache(e){this.cachedEventUids.add(n_(e)),this.lastProcessedEventTime=Date.now()}}function n_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function fw({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function IR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fw(r);default:return!1}}/**
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
 */async function SR(r,e={}){return Bo(r,"GET","/v1/projects",e)}/**
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
 */const AR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xR=/^https?/;async function CR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await SR(r);for(const t of e)try{if(RR(t))return}catch{}Ur(r,"unauthorized-domain")}function RR(r){const e=cf(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!xR.test(t))return!1;if(AR.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const kR=new fl(3e4,6e4);function r_(){const r=dr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function PR(r){return new Promise((e,t)=>{function i(){r_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{r_(),t(hr(r,"network-request-failed"))},timeout:kR.get()})}if(dr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(dr().gapi?.load)i();else{const o=MC("iframefcb");return dr()[o]=()=>{gapi.load?i():t(hr(r,"network-request-failed"))},VC(`${OC()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw Qu=null,e})}let Qu=null;function NR(r){return Qu=Qu||PR(r),Qu}/**
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
 */const DR=new fl(5e3,15e3),bR="__/auth/iframe",VR="emulator/auth/iframe",OR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LR(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?rp(e,VR):`https://${r.config.authDomain}/${bR}`,i={apiKey:e.apiKey,appName:r.name,v:Mo},o=MR.get(r.config.apiHost);o&&(i.eid=o);const u=r._getFrameworks();return u.length&&(i.fw=u.join(",")),`${t}?${ol(i).slice(1)}`}async function jR(r){const e=await NR(r),t=dr().gapi;return we(t,r,"internal-error"),e.open({where:document.body,url:LR(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OR,dontclear:!0},i=>new Promise(async(o,u)=>{await i.restyle({setHideOnLeave:!1});const h=hr(r,"network-request-failed"),p=dr().setTimeout(()=>{u(h)},DR.get());function g(){dr().clearTimeout(p),o(i)}i.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const FR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UR=500,zR=600,BR="_blank",$R="http://localhost";class s_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qR(r,e,t,i=UR,o=zR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let p="";const g={...FR,width:i.toString(),height:o.toString(),top:u,left:h},_=Bt().toLowerCase();t&&(p=G0(_)?BR:t),H0(_)&&(e=e||$R,g.scrollbars="yes");const T=Object.entries(g).reduce((A,[B,W])=>`${A}${B}=${W},`,"");if(xC(_)&&p!=="_self")return HR(e||"",p),new s_(null);const x=window.open(e||"",p,T);we(x,r,"popup-blocked");try{x.focus()}catch{}return new s_(x)}function HR(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const WR="__/auth/handler",GR="emulator/auth/handler",KR=encodeURIComponent("fac");async function i_(r,e,t,i,o,u){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Mo,eventId:o};if(e instanceof nw){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",dT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,x]of Object.entries({}))h[T]=x}if(e instanceof pl){const T=e.getScopes().filter(x=>x!=="");T.length>0&&(h.scopes=T.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const g=await r._getAppCheckToken(),_=g?`#${KR}=${encodeURIComponent(g)}`:"";return`${QR(r)}?${ol(p).slice(1)}${_}`}function QR({config:r}){return r.emulator?rp(r,GR):`https://${r.authDomain}/${WR}`}/**
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
 */const Od="webStorageSupport";class YR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aw,this._completeRedirectFn=wR,this._overrideRedirectResult=yR}async _openPopup(e,t,i,o){zr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await i_(e,t,i,cf(),o);return qR(e,u,up())}async _openRedirect(e,t,i,o){await this._originValidation(e);const u=await i_(e,t,i,cf(),o);return ZC(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(zr(u,"If manager is not set, promise should be"),u)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await jR(e),i=new TR(e);return t.register("authEvent",o=>(we(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Od,{type:Od},o=>{const u=o?.[0]?.[Od];u!==void 0&&t(!!u),Ur(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return J0()||W0()||op()}}const XR=YR;var o_="@firebase/auth",a_="1.11.0";/**
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
 */class JR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ek(r){fr(new qn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=i.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z0(r)},_=new DC(i,o,u,g);return jC(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),fr(new qn("auth-internal",e=>{const t=ap(e.getProvider("auth").getImmediate());return(i=>new JR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(o_,a_,ZR(r)),An(o_,a_,"esm2020")}/**
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
 */const tk=300,nk=v_("authIdTokenMaxAge")||tk;let l_=null;const rk=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>nk)return;const o=t?.token;l_!==o&&(l_=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sk(r=gf()){const e=yi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=LC(r,{popupRedirectResolver:XR,persistence:[lR,YC,aw]}),i=v_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(i,location.origin);if(location.origin===u.origin){const h=rk(u.toString());GC(t,h,()=>h(t.currentUser)),WC(t,p=>h(p))}}const o=y_("auth");return o&&FC(t,`http://${o}`),t}function ik(){return document.getElementsByTagName("head")?.[0]??document}bC({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const u=hr("internal-error");u.customData=o,t(u)},i.type="text/javascript",i.charset="UTF-8",ik().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ek("Browser");const ok={apiKey:"AIzaSyAUpJ1n8uaUujJQiQg9VH0wRi5QcN3NDtE",authDomain:"agenda-8466d.firebaseapp.com",projectId:"agenda-8466d",storageBucket:"agenda-8466d.firebasestorage.app",messagingSenderId:"501812400667",appId:"1:501812400667:web:8e1d61ea6686ffe0195ebe",measurementId:"G-12X4KWCRYH"},hp=R_(ok);sC(hp);sk(hp);const Bn=IA(hp),ja="events",u_="users",Md="programming_sessions",ju={async getEvents(){try{const r=Eo(Bn,ja);return(await cc(r)).docs.map(t=>({id:t.id,...t.data()}))}catch(r){return console.error("Erro ao buscar eventos:",r),[]}},async addEvent(r){try{const e=Eo(Bn,ja);return(await p0(e,{...r,createdAt:qe.now()})).id}catch(e){throw console.error("Erro ao adicionar evento:",e),e}},async updateEvent(r,e){try{const t=bo(Bn,ja,r);await f0(t,{...e,updatedAt:qe.now()})}catch(t){throw console.error("Erro ao atualizar evento:",t),t}},async deleteEvent(r){try{const e=bo(Bn,ja,r);await FA(e)}catch(e){throw console.error("Erro ao deletar evento:",e),e}},async getEventsByUser(r){try{const e=Eo(Bn,ja),t=l0(e,VA("userId","==",r));return(await cc(t)).docs.map(o=>({id:o.id,...o.data()}))}catch(e){return console.error("Erro ao buscar eventos do usuário:",e),[]}}},Fu={async getSessions(){try{const r=Eo(Bn,Md),e=l0(r,OA("startTime","desc"));return(await cc(e)).docs.map(i=>({id:i.id,...i.data()}))}catch(r){return console.error("Erro ao buscar sessões:",r),[]}},async startSession(r){try{const e=Eo(Bn,Md);return(await p0(e,{...r,startTime:new Date().toISOString(),isActive:!0})).id}catch(e){throw console.error("Erro ao iniciar sessão:",e),e}},async endSession(r){try{const e=bo(Bn,Md,r);await f0(e,{endTime:new Date().toISOString(),isActive:!1})}catch(e){throw console.error("Erro ao finalizar sessão:",e),e}}},ak={async getUsers(){try{const r=Eo(Bn,u_);return(await cc(r)).docs.map(t=>({id:t.id,...t.data()}))}catch(r){return console.error("Erro ao buscar usuários:",r),[]}},async syncUsers(r){try{for(const e of r){const t=bo(Bn,u_,e.id),i={...e};await d0(t,i,{merge:!0})}}catch(e){console.error("Erro ao sincronizar usuários:",e)}}},lk=async()=>{try{console.log("🔥 Testando conexão com Firebase...");const r=bo(Bn,"test","connection");await d0(r,{message:"Teste de conexão",timestamp:new Date().toISOString()}),console.log("✅ Documento de teste criado com sucesso");const e=await jA(r);return e.exists()?console.log("✅ Documento de teste lido com sucesso:",e.data()):console.log("❌ Documento de teste não encontrado"),!0}catch(r){return console.error("❌ Erro na conexão com Firebase:",r),r.code==="permission-denied"?(console.error("🔒 Erro de permissão - verifique as regras do Firestore"),console.log(`
📋 SOLUÇÃO: Configure as regras do Firestore no Console Firebase

1. Acesse: https://console.firebase.google.com/project/agenda-8466d/firestore/rules
2. Cole as regras abaixo e publique:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir acesso total temporariamente para desenvolvimento
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

⚠️  IMPORTANTE: Essas são regras para desenvolvimento.
Para produção, use regras mais restritivas.
      `)):r.code==="failed-precondition"?console.error("🏗️ Firestore não está configurado - ative no console"):r.code==="unauthenticated"&&console.error("🔑 Problema de autenticação - verifique as credenciais"),!1}},uk=()=>{const[r,e]=Ue.useState([]),[t,i]=Ue.useState([]),[o,u]=Ue.useState(!0),[h,p]=Ue.useState(null),[g,_]=Ue.useState(!1);Ue.useEffect(()=>{T()},[]);const T=async()=>{try{u(!0),console.log("🔄 Iniciando carregamento de dados...");const F=await lk();if(_(F),F){console.log("🔥 Firebase conectado - sincronizando dados..."),await ak.syncUsers(br),console.log("👥 Usuários sincronizados");const[Q,J]=await Promise.all([ju.getEvents(),Fu.getSessions()]);console.log(`📅 ${Q.length} eventos carregados`),console.log(`💻 ${J.length} sessões carregadas`),e(Q),i(J),p(null)}else throw new Error("Falha na conexão com Firebase")}catch(F){console.error("❌ Erro ao carregar dados:",F),p(F.message||"Erro ao conectar com o servidor"),console.log("🔄 Carregando dados locais como fallback...");const Q=JSON.parse(localStorage.getItem("dominus-events")||"[]"),J=JSON.parse(localStorage.getItem("dominus-history")||"[]");e(Q),i(J)}finally{u(!1)}};return{events:r,sessions:t,loading:o,error:h,addEvent:async F=>{try{console.log("📝 Tentando adicionar evento:",F);const Q=await ju.addEvent(F);console.log("✅ Evento adicionado com sucesso, ID:",Q);const J={...F,id:Q};e(Ee=>{const Ae=[...Ee,J];return console.log("📅 Total de eventos agora:",Ae.length),Ae});const me=[...r,J];return localStorage.setItem("dominus-events",JSON.stringify(me)),console.log("💾 Backup local salvo"),Q}catch(Q){console.error("❌ Erro ao adicionar evento no Firebase:",Q),Q.code==="permission-denied"&&console.error("🔒 Erro de permissão - verifique as regras do Firestore"),console.log("🔄 Salvando localmente como fallback...");const J={...F,id:Date.now().toString()};e(Ee=>[...Ee,J]);const me=[...r,J];return localStorage.setItem("dominus-events",JSON.stringify(me)),J.id}},updateEvent:async(F,Q)=>{try{await ju.updateEvent(F,Q),e(ne=>ne.map(me=>me.id===F?{...me,...Q}:me));const J=r.map(ne=>ne.id===F?{...ne,...Q}:ne);localStorage.setItem("dominus-events",JSON.stringify(J))}catch(J){throw console.error("Erro ao atualizar evento:",J),J}},deleteEvent:async F=>{try{await ju.deleteEvent(F),e(J=>J.filter(ne=>ne.id!==F));const Q=r.filter(J=>J.id!==F);localStorage.setItem("dominus-events",JSON.stringify(Q))}catch(Q){throw console.error("Erro ao deletar evento:",Q),Q}},startProgrammingSession:async F=>{try{console.log("🚀 Iniciando sessão de programação para usuário:",F);const Q={userId:F,startTime:new Date().toISOString(),isActive:!0},J=await Fu.startSession(Q);console.log("✅ Sessão iniciada com sucesso, ID:",J);const ne={...Q,id:J};return i(me=>{const Ee=[ne,...me];return console.log("💻 Total de sessões agora:",Ee.length),Ee}),ne}catch(Q){throw console.error("❌ Erro ao iniciar sessão no Firebase:",Q),Q.code==="permission-denied"&&console.error("🔒 Erro de permissão - verifique as regras do Firestore"),Q}},endProgrammingSession:async F=>{try{await Fu.endSession(F);const Q=await Fu.getSessions();i(Q)}catch(Q){throw console.error("Erro ao finalizar sessão:",Q),Q}},refreshData:T}},ck=({currentUser:r,onLogout:e})=>{const[t,i]=Ue.useState(!1),[o,u]=Ue.useState(null),[h,p]=Ue.useState(!1),[g,_]=Ue.useState(null),[T,x]=Ue.useState(new Date().toISOString().split("T")[0]),[A,B]=Ue.useState("calendar"),{events:W,sessions:X,loading:F,error:Q,addEvent:J,deleteEvent:ne,startProgrammingSession:me,endProgrammingSession:Ee}=uk();Ue.useEffect(()=>{const se=X.find(Te=>Te.isActive&&Te.userId===r.id);_(se||null)},[X,r.id]);const Ae=async se=>{try{await J(se),i(!1)}catch(Te){console.error("Erro ao adicionar evento:",Te)}},N=async se=>{try{await ne(se),u(null)}catch(Te){console.error("Erro ao excluir evento:",Te)}},S=async()=>{try{const se=await me(r.id);_(se)}catch(se){console.error("Erro ao iniciar programação:",se)}},C=async()=>{try{g&&(await Ee(g.id),_(null))}catch(se){console.error("Erro ao parar programação:",se)}},P=se=>{u(se)},b=W.filter(se=>se.date===T),V=g?br.find(se=>se.id===g.userId):null;if(F)return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center",children:w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"}),w.jsx("p",{className:"text-gray-600",children:"Carregando dados..."})]})});if(Q)return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center",children:w.jsxs("div",{className:"text-center bg-white rounded-lg p-6 shadow-lg",children:[w.jsx("div",{className:"text-red-500 mb-4",children:"⚠️"}),w.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Erro de Conexão"}),w.jsx("p",{className:"text-gray-600 mb-4",children:Q}),w.jsx("p",{className:"text-sm text-gray-500",children:"Usando dados locais como backup"})]})});const R=se=>new Date(se).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),Ze=se=>new Date(se).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),ft=(se,Te)=>{const ee=new Date(se),ie=(Te?new Date(Te):new Date).getTime()-ee.getTime(),O=Math.floor(ie/(1e3*60*60)),q=Math.floor(ie%(1e3*60*60)/(1e3*60));return`${O}h ${q}m`};return w.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",children:[w.jsx("header",{className:"bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4",children:w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx("div",{className:"flex items-center space-x-4",children:w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx(Ya,{className:"h-8 w-8 text-purple-600"}),w.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"Agenda Dominus"})]})}),w.jsxs("div",{className:"flex items-center space-x-4",children:[V&&w.jsxs("div",{className:"flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-2 rounded-full",children:[w.jsx(Ld,{className:"h-4 w-4"}),w.jsxs("span",{className:"text-sm font-medium",children:[V.name," está programando"]}),w.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"})]}),w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx("div",{className:`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-bold`,children:r.avatar}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:r.name}),w.jsx("p",{className:"text-sm text-gray-500",children:r.email})]}),w.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-600 transition-colors",children:w.jsx(DE,{className:"h-5 w-5"})})]})]})]})}),w.jsxs("div",{className:"flex",children:[w.jsx("div",{className:"w-64 bg-white/50 backdrop-blur-lg border-r border-gray-200 min-h-screen p-4",children:w.jsxs("div",{className:"h-full flex flex-col space-y-4",children:[w.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100",children:[w.jsxs("h3",{className:"font-medium text-gray-900 mb-3 flex items-center text-sm",children:[w.jsx(Ld,{className:"h-4 w-4 mr-2 text-purple-600"}),"Status de Desenvolvimento"]}),g&&g.userId===r.id?w.jsxs("div",{className:"space-y-2",children:[w.jsxs("div",{className:"flex items-center space-x-2 text-green-600",children:[w.jsx(jd,{className:"h-3 w-3"}),w.jsx("span",{className:"font-medium text-sm",children:"Você está programando"})]}),w.jsxs("p",{className:"text-xs text-gray-600",children:["Iniciado às ",R(g.startTime)]}),w.jsxs("p",{className:"text-xs text-gray-600",children:["Duração: ",ft(g.startTime)]}),w.jsxs("button",{onClick:C,className:"w-full bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center text-sm",children:[w.jsx(VE,{className:"h-3 w-3 mr-2"}),"Parar Desenvolvimento"]})]}):g?w.jsxs("div",{className:"text-center text-gray-600",children:[w.jsxs("p",{className:"text-sm mb-2",children:[V?.name," está programando"]}),w.jsxs("p",{className:"text-xs text-gray-500",children:["Iniciado às ",R(g.startTime)]}),w.jsx("button",{onClick:()=>p(!0),className:"mt-2 text-sm text-purple-600 hover:text-purple-800 transition-colors",children:"Ver detalhes"})]}):w.jsxs("button",{onClick:S,className:"w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-3 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center text-sm",children:[w.jsx(jd,{className:"h-4 w-4 mr-2"}),"Iniciar Desenvolvimento"]})]}),w.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100",children:[w.jsxs("h3",{className:"font-medium text-gray-900 mb-3 flex items-center text-sm",children:[w.jsx(LE,{className:"h-4 w-4 mr-2 text-purple-600"}),"Equipe"]}),w.jsx("div",{className:"space-y-2",children:br.map(se=>{const Te=se.id===r.id,ee=g?.userId===se.id;return w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("div",{className:`w-6 h-6 rounded-full ${se.color} flex items-center justify-center text-white font-bold text-xs`,children:se.avatar}),w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"font-medium text-xs text-gray-900",children:se.name}),w.jsx("p",{className:"text-xs text-gray-500",children:ee?"Programando":Te?"Online":"Offline"})]}),w.jsx("div",{className:`w-2 h-2 rounded-full ${ee||Te?"bg-green-500":"bg-gray-300"}`})]},se.id)})})]}),X.length>0&&w.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex-1 flex flex-col",children:[w.jsxs("h3",{className:"font-medium text-gray-900 mb-3 flex items-center text-sm",children:[w.jsx(xo,{className:"h-4 w-4 mr-2 text-purple-600"}),"Histórico Recente"]}),w.jsx("div",{className:"space-y-2 flex-1 overflow-y-auto",children:X.slice(0,20).map(se=>{const Te=br.find(ee=>ee.id===se.userId);return w.jsxs("div",{className:"text-xs bg-gray-50 rounded-lg p-2",children:[w.jsx("p",{className:"font-medium text-gray-900",children:Te?.name}),w.jsxs("p",{className:"text-gray-600",children:[Ze(se.startTime)," - ",R(se.startTime)," às ",se.endTime?R(se.endTime):"Em andamento"]}),w.jsxs("p",{className:"text-gray-500",children:["Duração: ",ft(se.startTime,se.endTime)]})]},se.id)})})]})]})}),w.jsx("div",{className:"flex-1 p-4",children:w.jsxs("div",{className:"max-w-full",children:[w.jsxs("div",{className:"flex items-center justify-between mb-6",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:A==="calendar"?"Agenda Geral":"Agenda do Dia"}),w.jsx("p",{className:"text-gray-600",children:"Gerencie seus compromissos e tarefas"})]}),w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsxs("div",{className:"flex bg-gray-100 rounded-lg p-1",children:[w.jsx("button",{onClick:()=>B("calendar"),className:`px-3 py-1 rounded-md text-sm font-medium transition-colors ${A==="calendar"?"bg-white text-purple-600 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:"Mês"}),w.jsx("button",{onClick:()=>B("day"),className:`px-3 py-1 rounded-md text-sm font-medium transition-colors ${A==="day"?"bg-white text-purple-600 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:"Dia"})]}),w.jsxs("button",{onClick:()=>i(!0),className:"bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center",children:[w.jsx(bE,{className:"h-5 w-5 mr-2"}),"Novo Evento"]})]})]}),A==="calendar"?w.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-5 gap-4",children:[w.jsx("div",{className:"xl:col-span-4",children:w.jsx(BE,{events:W,selectedDate:T,onDateSelect:x,onEventClick:P})}),w.jsxs("div",{className:"xl:col-span-1 space-y-3 hidden xl:block",children:[w.jsx("div",{className:"bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 text-white shadow-lg",children:w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"text-xs uppercase tracking-wide opacity-80 mb-2",children:"Oferta Especial"}),w.jsx("h3",{className:"text-base font-bold mb-2",children:"Dominus Pro"}),w.jsx("p",{className:"text-xs opacity-90 mb-3",children:"Desbloqueie recursos avançados de produtividade"}),w.jsxs("div",{className:"bg-white/20 rounded-lg p-2 mb-3",children:[w.jsx("div",{className:"text-xl font-bold",children:"50% OFF"}),w.jsx("div",{className:"text-xs opacity-80",children:"Por tempo limitado"})]}),w.jsx("button",{className:"w-full bg-white text-purple-600 font-semibold py-1.5 px-3 rounded-lg hover:bg-gray-100 transition-colors text-sm",children:"Assinar Agora"})]})}),w.jsx("div",{className:"bg-white rounded-xl p-4 border border-gray-200 shadow-sm",children:w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2",children:w.jsx("span",{className:"text-lg",children:"🧹"})}),w.jsx("h4",{className:"font-semibold text-gray-900 mb-1 text-sm",children:"iClean"}),w.jsx("p",{className:"text-xs text-gray-600 mb-3",children:"Conecte-se com faxineiras qualificadas ou encontre trabalho"}),w.jsx("button",{className:"text-blue-600 font-medium text-xs hover:text-blue-800 transition-colors",children:"Baixar App →"})]})}),w.jsxs("div",{className:"bg-gradient-to-r from-slate-700 to-gray-800 rounded-xl p-3 text-white text-center",children:[w.jsx("div",{className:"text-xs font-medium mb-1",children:"💫 Eternity"}),w.jsx("p",{className:"text-xs opacity-90",children:"IA que preserva memórias de seus entes queridos através de áudio, texto e fotos"})]})]})]}):w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6",children:w.jsx("input",{type:"date",value:T,onChange:se=>x(se.target.value),className:"bg-transparent border-none text-lg font-medium text-gray-900 focus:outline-none"})}),w.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100",children:w.jsxs("div",{className:"p-6",children:[w.jsxs("h3",{className:"font-semibold text-gray-900 mb-4",children:["Eventos para ",new Date(T).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})]}),b.length===0?w.jsxs("div",{className:"text-center py-12",children:[w.jsx(Ya,{className:"h-12 w-12 text-gray-300 mx-auto mb-4"}),w.jsx("p",{className:"text-gray-500 mb-2",children:"Nenhum evento para esta data"}),w.jsx("button",{onClick:()=>i(!0),className:"text-purple-600 hover:text-purple-800 transition-colors",children:"Adicionar um evento"})]}):w.jsx("div",{className:"space-y-3",children:b.map(se=>{const Te=br.find(ee=>ee.id===se.userId);return w.jsxs("div",{onClick:()=>P(se),className:"flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors",children:[w.jsx("div",{className:`w-10 h-10 rounded-full ${Te?.color} flex items-center justify-center text-white font-bold flex-shrink-0`,children:Te?.avatar}),w.jsxs("div",{className:"flex-1",children:[w.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[w.jsx("h4",{className:"font-medium text-gray-900",children:se.title}),w.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${se.type==="meeting"?"bg-blue-100 text-blue-800":se.type==="task"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:se.type==="meeting"?"Reunião":se.type==="task"?"Tarefa":"Lembrete"})]}),w.jsx("p",{className:"text-gray-600 mb-2",children:se.description}),w.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-500",children:[w.jsxs("div",{className:"flex items-center",children:[w.jsx(xo,{className:"h-4 w-4 mr-1"}),se.time]}),se.location&&w.jsxs("div",{className:"flex items-center",children:[se.location.type==="presencial"?w.jsx(d_,{className:"h-4 w-4 mr-1"}):w.jsx(h_,{className:"h-4 w-4 mr-1"}),w.jsx("span",{className:"truncate max-w-32",children:se.location.value})]})]})]})]},se.id)})})]})})]})]})})]}),t&&w.jsx(FE,{currentUser:r,selectedDate:T,onClose:()=>i(!1),onSave:Ae}),o&&w.jsx(UE,{event:o,currentUser:r,onClose:()=>u(null),onDelete:N}),h&&V&&w.jsx(zE,{programmer:V,session:g,onClose:()=>p(!1)})]})};function hk(){const[r,e]=Ue.useState(null);Ue.useEffect(()=>{localStorage.removeItem("dominus-user"),e(null)},[]);const t=o=>{e(o),localStorage.setItem("dominus-user",JSON.stringify(o))},i=()=>{e(null),localStorage.removeItem("dominus-user")};return r?w.jsx(ck,{currentUser:r,onLogout:i}):w.jsx(jE,{onLogin:t})}xE.createRoot(document.getElementById("root")).render(w.jsx(Ue.StrictMode,{children:w.jsx(hk,{})}));
