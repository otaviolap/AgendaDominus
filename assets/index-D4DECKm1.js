(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function kE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sd={exports:{}},ja={},Ad={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function PE(){if(Dg)return Ce;Dg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),x=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=x&&V[x]||V["@@iterator"],typeof V=="function"?V:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,q={};function j(V,W,de){this.props=V,this.context=W,this.refs=q,this.updater=de||F}j.prototype.isReactComponent={},j.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},j.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Z(){}Z.prototype=j.prototype;function re(V,W,de){this.props=V,this.context=W,this.refs=q,this.updater=de||F}var se=re.prototype=new Z;se.constructor=re,$(se,j.prototype),se.isPureReactComponent=!0;var we=Array.isArray,Ie=Object.prototype.hasOwnProperty,xe={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function A(V,W,de){var Se,Ae={},De=null,Le=null;if(W!=null)for(Se in W.ref!==void 0&&(Le=W.ref),W.key!==void 0&&(De=""+W.key),W)Ie.call(W,Se)&&!N.hasOwnProperty(Se)&&(Ae[Se]=W[Se]);var je=arguments.length-2;if(je===1)Ae.children=de;else if(1<je){for(var He=Array(je),wt=0;wt<je;wt++)He[wt]=arguments[wt+2];Ae.children=He}if(V&&V.defaultProps)for(Se in je=V.defaultProps,je)Ae[Se]===void 0&&(Ae[Se]=je[Se]);return{$$typeof:r,type:V,key:De,ref:Le,props:Ae,_owner:xe.current}}function R(V,W){return{$$typeof:r,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function b(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(de){return W[de]})}var O=/\/+/g;function C(V,W){return typeof V=="object"&&V!==null&&V.key!=null?b(""+V.key):W.toString(36)}function Fe(V,W,de,Se,Ae){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(De){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case r:case e:Le=!0}}if(Le)return Le=V,Ae=Ae(Le),V=Se===""?"."+C(Le,0):Se,we(Ae)?(de="",V!=null&&(de=V.replace(O,"$&/")+"/"),Fe(Ae,W,de,"",function(wt){return wt})):Ae!=null&&(P(Ae)&&(Ae=R(Ae,de+(!Ae.key||Le&&Le.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+V)),W.push(Ae)),1;if(Le=0,Se=Se===""?".":Se+":",we(V))for(var je=0;je<V.length;je++){De=V[je];var He=Se+C(De,je);Le+=Fe(De,W,de,He,Ae)}else if(He=I(V),typeof He=="function")for(V=He.call(V),je=0;!(De=V.next()).done;)De=De.value,He=Se+C(De,je++),Le+=Fe(De,W,de,He,Ae);else if(De==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Le}function ft(V,W,de){if(V==null)return V;var Se=[],Ae=0;return Fe(V,Se,"","",function(De){return W.call(de,De,Ae++)}),Se}function st(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(de){(V._status===0||V._status===-1)&&(V._status=1,V._result=de)},function(de){(V._status===0||V._status===-1)&&(V._status=2,V._result=de)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},ne={transition:null},K={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:ne,ReactCurrentOwner:xe};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:ft,forEach:function(V,W,de){ft(V,function(){W.apply(this,arguments)},de)},count:function(V){var W=0;return ft(V,function(){W++}),W},toArray:function(V){return ft(V,function(W){return W})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=j,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=re,Ce.StrictMode=i,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Ce.act=ee,Ce.cloneElement=function(V,W,de){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Se=$({},V.props),Ae=V.key,De=V.ref,Le=V._owner;if(W!=null){if(W.ref!==void 0&&(De=W.ref,Le=xe.current),W.key!==void 0&&(Ae=""+W.key),V.type&&V.type.defaultProps)var je=V.type.defaultProps;for(He in W)Ie.call(W,He)&&!N.hasOwnProperty(He)&&(Se[He]=W[He]===void 0&&je!==void 0?je[He]:W[He])}var He=arguments.length-2;if(He===1)Se.children=de;else if(1<He){je=Array(He);for(var wt=0;wt<He;wt++)je[wt]=arguments[wt+2];Se.children=je}return{$$typeof:r,type:V.type,key:Ae,ref:De,props:Se,_owner:Le}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ce.createElement=A,Ce.createFactory=function(V){var W=A.bind(null,V);return W.type=V,W},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:f,render:V}},Ce.isValidElement=P,Ce.lazy=function(V){return{$$typeof:T,_payload:{_status:-1,_result:V},_init:st}},Ce.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},Ce.startTransition=function(V){var W=ne.transition;ne.transition={};try{V()}finally{ne.transition=W}},Ce.unstable_act=ee,Ce.useCallback=function(V,W){return Ue.current.useCallback(V,W)},Ce.useContext=function(V){return Ue.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Ce.useEffect=function(V,W){return Ue.current.useEffect(V,W)},Ce.useId=function(){return Ue.current.useId()},Ce.useImperativeHandle=function(V,W,de){return Ue.current.useImperativeHandle(V,W,de)},Ce.useInsertionEffect=function(V,W){return Ue.current.useInsertionEffect(V,W)},Ce.useLayoutEffect=function(V,W){return Ue.current.useLayoutEffect(V,W)},Ce.useMemo=function(V,W){return Ue.current.useMemo(V,W)},Ce.useReducer=function(V,W,de){return Ue.current.useReducer(V,W,de)},Ce.useRef=function(V){return Ue.current.useRef(V)},Ce.useState=function(V){return Ue.current.useState(V)},Ce.useSyncExternalStore=function(V,W,de){return Ue.current.useSyncExternalStore(V,W,de)},Ce.useTransition=function(){return Ue.current.useTransition()},Ce.version="18.3.1",Ce}var bg;function Ef(){return bg||(bg=1,Ad.exports=PE()),Ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function NE(){if(Vg)return ja;Vg=1;var r=Ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var T,x={},I=null,F=null;_!==void 0&&(I=""+_),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(F=g.ref);for(T in g)i.call(g,T)&&!u.hasOwnProperty(T)&&(x[T]=g[T]);if(f&&f.defaultProps)for(T in g=f.defaultProps,g)x[T]===void 0&&(x[T]=g[T]);return{$$typeof:e,type:f,key:I,ref:F,props:x,_owner:o.current}}return ja.Fragment=t,ja.jsx=h,ja.jsxs=h,ja}var Og;function DE(){return Og||(Og=1,Sd.exports=NE()),Sd.exports}var w=DE(),ye=Ef();const nc=kE(ye);var Ou={},xd={exports:{}},tn={},Cd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function bE(){return Mg||(Mg=1,(function(r){function e(ne,K){var ee=ne.length;ne.push(K);e:for(;0<ee;){var V=ee-1>>>1,W=ne[V];if(0<o(W,K))ne[V]=K,ne[ee]=W,ee=V;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var K=ne[0],ee=ne.pop();if(ee!==K){ne[0]=ee;e:for(var V=0,W=ne.length,de=W>>>1;V<de;){var Se=2*(V+1)-1,Ae=ne[Se],De=Se+1,Le=ne[De];if(0>o(Ae,ee))De<W&&0>o(Le,Ae)?(ne[V]=Le,ne[De]=ee,V=De):(ne[V]=Ae,ne[Se]=ee,V=Se);else if(De<W&&0>o(Le,ee))ne[V]=Le,ne[De]=ee,V=De;else break e}}return K}function o(ne,K){var ee=ne.sortIndex-K.sortIndex;return ee!==0?ee:ne.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],T=1,x=null,I=3,F=!1,$=!1,q=!1,j=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(ne){for(var K=t(_);K!==null;){if(K.callback===null)i(_);else if(K.startTime<=ne)i(_),K.sortIndex=K.expirationTime,e(g,K);else break;K=t(_)}}function we(ne){if(q=!1,se(ne),!$)if(t(g)!==null)$=!0,st(Ie);else{var K=t(_);K!==null&&Ue(we,K.startTime-ne)}}function Ie(ne,K){$=!1,q&&(q=!1,Z(A),A=-1),F=!0;var ee=I;try{for(se(K),x=t(g);x!==null&&(!(x.expirationTime>K)||ne&&!b());){var V=x.callback;if(typeof V=="function"){x.callback=null,I=x.priorityLevel;var W=V(x.expirationTime<=K);K=r.unstable_now(),typeof W=="function"?x.callback=W:x===t(g)&&i(g),se(K)}else i(g);x=t(g)}if(x!==null)var de=!0;else{var Se=t(_);Se!==null&&Ue(we,Se.startTime-K),de=!1}return de}finally{x=null,I=ee,F=!1}}var xe=!1,N=null,A=-1,R=5,P=-1;function b(){return!(r.unstable_now()-P<R)}function O(){if(N!==null){var ne=r.unstable_now();P=ne;var K=!0;try{K=N(!0,ne)}finally{K?C():(xe=!1,N=null)}}else xe=!1}var C;if(typeof re=="function")C=function(){re(O)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,ft=Fe.port2;Fe.port1.onmessage=O,C=function(){ft.postMessage(null)}}else C=function(){j(O,0)};function st(ne){N=ne,xe||(xe=!0,C())}function Ue(ne,K){A=j(function(){ne(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ne){ne.callback=null},r.unstable_continueExecution=function(){$||F||($=!0,st(Ie))},r.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ne?Math.floor(1e3/ne):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ne){switch(I){case 1:case 2:case 3:var K=3;break;default:K=I}var ee=I;I=K;try{return ne()}finally{I=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ne,K){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var ee=I;I=ne;try{return K()}finally{I=ee}},r.unstable_scheduleCallback=function(ne,K,ee){var V=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?V+ee:V):ee=V,ne){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ee+W,ne={id:T++,callback:K,priorityLevel:ne,startTime:ee,expirationTime:W,sortIndex:-1},ee>V?(ne.sortIndex=ee,e(_,ne),t(g)===null&&ne===t(_)&&(q?(Z(A),A=-1):q=!0,Ue(we,ee-V))):(ne.sortIndex=W,e(g,ne),$||F||($=!0,st(Ie))),ne},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(ne){var K=I;return function(){var ee=I;I=K;try{return ne.apply(this,arguments)}finally{I=ee}}}})(Rd)),Rd}var Lg;function VE(){return Lg||(Lg=1,Cd.exports=bE()),Cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function OE(){if(jg)return tn;jg=1;var r=Ef(),e=VE();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function u(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},x={};function I(n){return g.call(x,n)?!0:g.call(T,n)?!1:_.test(n)?x[n]=!0:(T[n]=!0,!1)}function F(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,s,a,c){if(s===null||typeof s>"u"||F(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(n,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){j[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];j[s]=new q(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){j[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){j[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){j[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){j[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){j[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){j[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){j[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function re(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(Z,re);j[s]=new q(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(Z,re);j[s]=new q(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(Z,re);j[s]=new q(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){j[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),j.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){j[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function se(n,s,a,c){var d=j.hasOwnProperty(s)?j[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var we=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),xe=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),b=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),ne=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=ne&&n[ne]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+n}var de=!1;function Se(n,s){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(n,[],s)}else{try{s.call()}catch(z){c=z}n.call(s.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,S=m.length-1;1<=v&&0<=S&&d[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==m[S]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=S);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Ae(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case xe:return"Portal";case R:return"Profiler";case A:return"StrictMode";case C:return"Suspense";case Fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case b:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case O:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ft:return s=n.displayName||null,s!==null?s:De(n.type)||"Memo";case st:s=n._payload,n=n._init;try{return De(n(s))}catch{}}return null}function Le(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(n){var s=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function mr(n){n._valueTracker||(n._valueTracker=wt(n))}function xi(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Hr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ms(n,s){var a=s.checked;return ee({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ci(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function qo(n,s){s=s.checked,s!=null&&se(n,"checked",s,!1)}function Ho(n,s){qo(n,s);var a=je(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Ri(n,s.type,a):s.hasOwnProperty("defaultValue")&&Ri(n,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function wl(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ri(n,s,a){(s!=="number"||Hr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gr=Array.isArray;function yr(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Wo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ki(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:je(a)}}function Pi(n,s){var a=je(s.value),c=je(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Go(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function pt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?pt(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _r,Ko=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=_r.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Wr(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},js=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(n){js.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ls[s]=Ls[n]})});function Qo(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ls.hasOwnProperty(n)&&Ls[n]?(""+s).trim():s+"px"}function Yo(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Qo(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Xo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jo(n,s){if(s){if(Xo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Zo(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=null;function Ni(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Di=null,gn=null,Kn=null;function bi(n){if(n=Ia(n)){if(typeof Di!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Yl(s),Di(n.stateNode,n.type,s))}}function Qn(n){gn?Kn?Kn.push(n):Kn=[n]:gn=n}function ea(){if(gn){var n=gn,s=Kn;if(Kn=gn=null,bi(n),s)for(n=0;n<s.length;n++)bi(s[n])}}function Us(n,s){return n(s)}function ta(){}var vr=!1;function na(n,s,a){if(vr)return n(s,a);vr=!0;try{return Us(n,s,a)}finally{vr=!1,(gn!==null||Kn!==null)&&(ta(),ea())}}function it(n,s){var a=n.stateNode;if(a===null)return null;var c=Yl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Vi=!1;if(f)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Vi=!1}function zs(n,s,a,c,d,m,v,S,k){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(Y){this.onError(Y)}}var Bs=!1,Oi=null,Pn=!1,ra=null,Jc={onError:function(n){Bs=!0,Oi=n}};function Mi(n,s,a,c,d,m,v,S,k){Bs=!1,Oi=null,zs.apply(Jc,arguments)}function El(n,s,a,c,d,m,v,S,k){if(Mi.apply(this,arguments),Bs){if(Bs){var z=Oi;Bs=!1,Oi=null}else throw Error(t(198));Pn||(Pn=!0,ra=z)}}function Nn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function $s(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Dn(n){if(Nn(n)!==n)throw Error(t(188))}function Tl(n){var s=n.alternate;if(!s){if(s=Nn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Dn(d),n;if(m===c)return Dn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=m;break}if(S===c){v=!0,c=d,a=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===a){v=!0,a=m,c=d;break}if(S===c){v=!0,c=m,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function sa(n){return n=Tl(n),n!==null?Li(n):null}function Li(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Li(n);if(s!==null)return s;n=n.sibling}return null}var ji=e.unstable_scheduleCallback,ia=e.unstable_cancelCallback,Il=e.unstable_shouldYield,Zc=e.unstable_requestPaint,We=e.unstable_now,Sl=e.unstable_getCurrentPriorityLevel,qs=e.unstable_ImmediatePriority,Gr=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Al=e.unstable_IdlePriority,Hs=null,an=null;function xl(n){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Hs,n,void 0,(n.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Rl,aa=Math.log,Cl=Math.LN2;function Rl(n){return n>>>=0,n===0?32:31-(aa(n)/Cl|0)|0}var Fi=64,Ui=4194304;function Kr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ws(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Kr(S):(m&=v,m!==0&&(c=Kr(m)))}else v=a&~d,v!==0?c=Kr(v):m!==0&&(c=Kr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-qt(s),d=1<<a,c|=n[a],s&=~d;return c}function eh(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-qt(m),S=1<<v,k=d[v];k===-1?((S&a)===0||(S&c)!==0)&&(d[v]=eh(S,s)):k<=s&&(n.expiredLanes|=S),m&=~S}}function ln(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gs(){var n=Fi;return Fi<<=1,(Fi&4194240)===0&&(Fi=64),n}function Qr(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Yr(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-qt(s),n[s]=a}function $e(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-qt(a),m=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Xr(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-qt(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var Ne=0;function Jr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kl,zi,Pl,Nl,Dl,la=!1,Yn=[],Rt=null,bn=null,Vn=null,Zr=new Map,_n=new Map,Xn=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(n,s){switch(n){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Zr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(s.pointerId)}}function Kt(n,s,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ia(s),s!==null&&zi(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function nh(n,s,a,c,d){switch(s){case"focusin":return Rt=Kt(Rt,n,s,a,c,d),!0;case"dragenter":return bn=Kt(bn,n,s,a,c,d),!0;case"mouseover":return Vn=Kt(Vn,n,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Zr.set(m,Kt(Zr.get(m)||null,n,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,_n.set(m,Kt(_n.get(m)||null,n,s,a,c,d)),!0}return!1}function Vl(n){var s=Js(n.target);if(s!==null){var a=Nn(s);if(a!==null){if(s=a.tag,s===13){if(s=$s(a),s!==null){n.blockedOn=s,Dl(n.priority,function(){Pl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Er(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Bi(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fs=c,a.target.dispatchEvent(c),Fs=null}else return s=Ia(a),s!==null&&zi(s),n.blockedOn=a,!1;s.shift()}return!0}function Ks(n,s,a){Er(n)&&a.delete(s)}function Ol(){la=!1,Rt!==null&&Er(Rt)&&(Rt=null),bn!==null&&Er(bn)&&(bn=null),Vn!==null&&Er(Vn)&&(Vn=null),Zr.forEach(Ks),_n.forEach(Ks)}function On(n,s){n.blockedOn===s&&(n.blockedOn=null,la||(la=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ol)))}function Mn(n){function s(d){return On(d,n)}if(0<Yn.length){On(Yn[0],n);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Rt!==null&&On(Rt,n),bn!==null&&On(bn,n),Vn!==null&&On(Vn,n),Zr.forEach(s),_n.forEach(s),a=0;a<Xn.length;a++)c=Xn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Xn.length&&(a=Xn[0],a.blockedOn===null);)Vl(a),a.blockedOn===null&&Xn.shift()}var Tr=we.ReactCurrentBatchConfig,es=!0;function Xe(n,s,a,c){var d=Ne,m=Tr.transition;Tr.transition=null;try{Ne=1,ua(n,s,a,c)}finally{Ne=d,Tr.transition=m}}function rh(n,s,a,c){var d=Ne,m=Tr.transition;Tr.transition=null;try{Ne=4,ua(n,s,a,c)}finally{Ne=d,Tr.transition=m}}function ua(n,s,a,c){if(es){var d=Bi(n,s,a,c);if(d===null)ph(n,s,c,Qs,a),bl(n,c);else if(nh(d,n,s,a,c))c.stopPropagation();else if(bl(n,c),s&4&&-1<th.indexOf(n)){for(;d!==null;){var m=Ia(d);if(m!==null&&kl(m),m=Bi(n,s,a,c),m===null&&ph(n,s,c,Qs,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else ph(n,s,c,null,a)}}var Qs=null;function Bi(n,s,a,c){if(Qs=null,n=Ni(c),n=Js(n),n!==null)if(s=Nn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=$s(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Qs=n,null}function ca(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sl()){case qs:return 1;case Gr:return 4;case yn:case oa:return 16;case Al:return 536870912;default:return 16}default:return 16}}var un=null,$i=null,Qt=null;function ha(){if(Qt)return Qt;var n,s=$i,a=s.length,c,d="value"in un?un.value:un.textContent,m=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return Qt=d.slice(n,1<c?1-c:void 0)}function qi(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Jn(){return!0}function da(){return!1}function kt(n){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Jn:da,this.isPropagationStopped=da,this}return ee(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=kt(Ln),Zn=ee({},Ln,{view:0,detail:0}),sh=kt(Zn),Wi,Ir,ts,Ys=ee({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ts&&(ts&&n.type==="mousemove"?(Wi=n.screenX-ts.screenX,Ir=n.screenY-ts.screenY):Ir=Wi=0,ts=n),Wi)},movementY:function(n){return"movementY"in n?n.movementY:Ir}}),Gi=kt(Ys),fa=ee({},Ys,{dataTransfer:0}),Ml=kt(fa),Ki=ee({},Zn,{relatedTarget:0}),Qi=kt(Ki),Ll=ee({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=kt(Ll),jl=ee({},Ln,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fl=kt(jl),Ul=ee({},Ln,{data:0}),pa=kt(Ul),Yi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bl(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=zl[n])?!!s[n]:!1}function er(){return Bl}var l=ee({},Zn,{key:function(n){if(n.key){var s=Yi[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=qi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ht[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(n){return n.type==="keypress"?qi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=kt(l),y=ee({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=kt(y),M=ee({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),B=kt(M),te=ee({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=kt(te),gt=ee({},Ys,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),be=kt(gt),Et=[9,13,27,32],lt=f&&"CompositionEvent"in window,vn=null;f&&"documentMode"in document&&(vn=document.documentMode);var cn=f&&"TextEvent"in window&&!vn,Xs=f&&(!lt||vn&&8<vn&&11>=vn),Xi=" ",xp=!1;function Cp(n,s){switch(n){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ji=!1;function xw(n,s){switch(n){case"compositionend":return Rp(s);case"keypress":return s.which!==32?null:(xp=!0,Xi);case"textInput":return n=s.data,n===Xi&&xp?null:n;default:return null}}function Cw(n,s){if(Ji)return n==="compositionend"||!lt&&Cp(n,s)?(n=ha(),Qt=$i=un=null,Ji=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Xs&&s.locale!=="ko"?null:s.data;default:return null}}var Rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Rw[n.type]:s==="textarea"}function Pp(n,s,a,c){Qn(c),s=Gl(s,"onChange"),0<s.length&&(a=new Hi("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ma=null,ga=null;function kw(n){Kp(n,0)}function $l(n){var s=ro(n);if(xi(s))return n}function Pw(n,s){if(n==="change")return s}var Np=!1;if(f){var ih;if(f){var oh="oninput"in document;if(!oh){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),oh=typeof Dp.oninput=="function"}ih=oh}else ih=!1;Np=ih&&(!document.documentMode||9<document.documentMode)}function bp(){ma&&(ma.detachEvent("onpropertychange",Vp),ga=ma=null)}function Vp(n){if(n.propertyName==="value"&&$l(ga)){var s=[];Pp(s,ga,n,Ni(n)),na(kw,s)}}function Nw(n,s,a){n==="focusin"?(bp(),ma=s,ga=a,ma.attachEvent("onpropertychange",Vp)):n==="focusout"&&bp()}function Dw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $l(ga)}function bw(n,s){if(n==="click")return $l(s)}function Vw(n,s){if(n==="input"||n==="change")return $l(s)}function Ow(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var jn=typeof Object.is=="function"?Object.is:Ow;function ya(n,s){if(jn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!jn(n[d],s[d]))return!1}return!0}function Op(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mp(n,s){var a=Op(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Op(a)}}function Lp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Lp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function jp(){for(var n=window,s=Hr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Hr(n.document)}return s}function ah(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Mw(n){var s=jp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Lp(a.ownerDocument.documentElement,a)){if(c!==null&&ah(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Mp(a,m);var v=Mp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lw=f&&"documentMode"in document&&11>=document.documentMode,Zi=null,lh=null,_a=null,uh=!1;function Fp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uh||Zi==null||Zi!==Hr(c)||(c=Zi,"selectionStart"in c&&ah(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&ya(_a,c)||(_a=c,c=Gl(lh,"onSelect"),0<c.length&&(s=new Hi("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Zi)))}function ql(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var eo={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},ch={},Up={};f&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function Hl(n){if(ch[n])return ch[n];if(!eo[n])return n;var s=eo[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Up)return ch[n]=s[a];return n}var zp=Hl("animationend"),Bp=Hl("animationiteration"),$p=Hl("animationstart"),qp=Hl("transitionend"),Hp=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(n,s){Hp.set(n,s),u(s,[n])}for(var hh=0;hh<Wp.length;hh++){var dh=Wp[hh],jw=dh.toLowerCase(),Fw=dh[0].toUpperCase()+dh.slice(1);ns(jw,"on"+Fw)}ns(zp,"onAnimationEnd"),ns(Bp,"onAnimationIteration"),ns($p,"onAnimationStart"),ns("dblclick","onDoubleClick"),ns("focusin","onFocus"),ns("focusout","onBlur"),ns(qp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function Gp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,El(c,s,void 0,n),n.currentTarget=null}function Kp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],k=S.instance,z=S.currentTarget;if(S=S.listener,k!==m&&d.isPropagationStopped())break e;Gp(d,S,z),m=k}else for(v=0;v<c.length;v++){if(S=c[v],k=S.instance,z=S.currentTarget,S=S.listener,k!==m&&d.isPropagationStopped())break e;Gp(d,S,z),m=k}}}if(Pn)throw n=ra,Pn=!1,ra=null,n}function Qe(n,s){var a=s[wh];a===void 0&&(a=s[wh]=new Set);var c=n+"__bubble";a.has(c)||(Qp(s,n,2,!1),a.add(c))}function fh(n,s,a){var c=0;s&&(c|=4),Qp(a,n,c,s)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[Wl]){n[Wl]=!0,i.forEach(function(a){a!=="selectionchange"&&(Uw.has(a)||fh(a,!1,n),fh(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Wl]||(s[Wl]=!0,fh("selectionchange",!1,s))}}function Qp(n,s,a,c){switch(ca(s)){case 1:var d=Xe;break;case 4:d=rh;break;default:d=ua}a=d.bind(null,s,a,n),d=void 0,!Vi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function ph(n,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Js(S),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}S=S.parentNode}}c=c.return}na(function(){var z=m,Y=Ni(a),X=[];e:{var Q=Hp.get(n);if(Q!==void 0){var oe=Hi,ue=n;switch(n){case"keypress":if(qi(a)===0)break e;case"keydown":case"keyup":oe=p;break;case"focusin":ue="focus",oe=Qi;break;case"focusout":ue="blur",oe=Qi;break;case"beforeblur":case"afterblur":oe=Qi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Gi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Ml;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=B;break;case zp:case Bp:case $p:oe=Sr;break;case qp:oe=Be;break;case"scroll":oe=sh;break;case"wheel":oe=be;break;case"copy":case"cut":case"paste":oe=Fl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=E}var ce=(s&4)!==0,ot=!ce&&n==="scroll",L=ce?Q!==null?Q+"Capture":null:Q;ce=[];for(var D=z,U;D!==null;){U=D;var J=U.stateNode;if(U.tag===5&&J!==null&&(U=J,L!==null&&(J=it(D,L),J!=null&&ce.push(Ea(D,J,U)))),ot)break;D=D.return}0<ce.length&&(Q=new oe(Q,ue,null,a,Y),X.push({event:Q,listeners:ce}))}}if((s&7)===0){e:{if(Q=n==="mouseover"||n==="pointerover",oe=n==="mouseout"||n==="pointerout",Q&&a!==Fs&&(ue=a.relatedTarget||a.fromElement)&&(Js(ue)||ue[Ar]))break e;if((oe||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,oe?(ue=a.relatedTarget||a.toElement,oe=z,ue=ue?Js(ue):null,ue!==null&&(ot=Nn(ue),ue!==ot||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(oe=null,ue=z),oe!==ue)){if(ce=Gi,J="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ce=E,J="onPointerLeave",L="onPointerEnter",D="pointer"),ot=oe==null?Q:ro(oe),U=ue==null?Q:ro(ue),Q=new ce(J,D+"leave",oe,a,Y),Q.target=ot,Q.relatedTarget=U,J=null,Js(Y)===z&&(ce=new ce(L,D+"enter",ue,a,Y),ce.target=U,ce.relatedTarget=ot,J=ce),ot=J,oe&&ue)t:{for(ce=oe,L=ue,D=0,U=ce;U;U=to(U))D++;for(U=0,J=L;J;J=to(J))U++;for(;0<D-U;)ce=to(ce),D--;for(;0<U-D;)L=to(L),U--;for(;D--;){if(ce===L||L!==null&&ce===L.alternate)break t;ce=to(ce),L=to(L)}ce=null}else ce=null;oe!==null&&Yp(X,Q,oe,ce,!1),ue!==null&&ot!==null&&Yp(X,ot,ue,ce,!0)}}e:{if(Q=z?ro(z):window,oe=Q.nodeName&&Q.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Q.type==="file")var he=Pw;else if(kp(Q))if(Np)he=Vw;else{he=Dw;var pe=Nw}else(oe=Q.nodeName)&&oe.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=bw);if(he&&(he=he(n,z))){Pp(X,he,a,Y);break e}pe&&pe(n,Q,z),n==="focusout"&&(pe=Q._wrapperState)&&pe.controlled&&Q.type==="number"&&Ri(Q,"number",Q.value)}switch(pe=z?ro(z):window,n){case"focusin":(kp(pe)||pe.contentEditable==="true")&&(Zi=pe,lh=z,_a=null);break;case"focusout":_a=lh=Zi=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,Fp(X,a,Y);break;case"selectionchange":if(Lw)break;case"keydown":case"keyup":Fp(X,a,Y)}var me;if(lt)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ji?Cp(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Xs&&a.locale!=="ko"&&(Ji||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ji&&(me=ha()):(un=Y,$i="value"in un?un.value:un.textContent,Ji=!0)),pe=Gl(z,_e),0<pe.length&&(_e=new pa(_e,n,null,a,Y),X.push({event:_e,listeners:pe}),me?_e.data=me:(me=Rp(a),me!==null&&(_e.data=me)))),(me=cn?xw(n,a):Cw(n,a))&&(z=Gl(z,"onBeforeInput"),0<z.length&&(Y=new pa("onBeforeInput","beforeinput",null,a,Y),X.push({event:Y,listeners:z}),Y.data=me))}Kp(X,s)})}function Ea(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Gl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=it(n,a),m!=null&&c.unshift(Ea(n,m,d)),m=it(n,s),m!=null&&c.push(Ea(n,m,d))),n=n.return}return c}function to(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yp(n,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var S=a,k=S.alternate,z=S.stateNode;if(k!==null&&k===c)break;S.tag===5&&z!==null&&(S=z,d?(k=it(a,m),k!=null&&v.unshift(Ea(a,k,S))):d||(k=it(a,m),k!=null&&v.push(Ea(a,k,S)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var zw=/\r\n?/g,Bw=/\u0000|\uFFFD/g;function Xp(n){return(typeof n=="string"?n:""+n).replace(zw,`
`).replace(Bw,"")}function Kl(n,s,a){if(s=Xp(s),Xp(n)!==s&&a)throw Error(t(425))}function Ql(){}var mh=null,gh=null;function yh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _h=typeof setTimeout=="function"?setTimeout:void 0,$w=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(n){return Jp.resolve(null).then(n).catch(Hw)}:_h;function Hw(n){setTimeout(function(){throw n})}function vh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Mn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Mn(s)}function rs(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Zp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var no=Math.random().toString(36).slice(2),tr="__reactFiber$"+no,Ta="__reactProps$"+no,Ar="__reactContainer$"+no,wh="__reactEvents$"+no,Ww="__reactListeners$"+no,Gw="__reactHandles$"+no;function Js(n){var s=n[tr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Ar]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Zp(n);n!==null;){if(a=n[tr])return a;n=Zp(n)}return s}n=a,a=n.parentNode}return null}function Ia(n){return n=n[tr]||n[Ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ro(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Yl(n){return n[Ta]||null}var Eh=[],so=-1;function ss(n){return{current:n}}function Ye(n){0>so||(n.current=Eh[so],Eh[so]=null,so--)}function Ge(n,s){so++,Eh[so]=n.current,n.current=s}var is={},Mt=ss(is),Yt=ss(!1),Zs=is;function io(n,s){var a=n.type.contextTypes;if(!a)return is;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(n){return n=n.childContextTypes,n!=null}function Xl(){Ye(Yt),Ye(Mt)}function em(n,s,a){if(Mt.current!==is)throw Error(t(168));Ge(Mt,s),Ge(Yt,a)}function tm(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Le(n)||"Unknown",d));return ee({},a,c)}function Jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||is,Zs=Mt.current,Ge(Mt,n),Ge(Yt,Yt.current),!0}function nm(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=tm(n,s,Zs),c.__reactInternalMemoizedMergedChildContext=n,Ye(Yt),Ye(Mt),Ge(Mt,n)):Ye(Yt),Ge(Yt,a)}var xr=null,Zl=!1,Th=!1;function rm(n){xr===null?xr=[n]:xr.push(n)}function Kw(n){Zl=!0,rm(n)}function os(){if(!Th&&xr!==null){Th=!0;var n=0,s=Ne;try{var a=xr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}xr=null,Zl=!1}catch(d){throw xr!==null&&(xr=xr.slice(n+1)),ji(qs,os),d}finally{Ne=s,Th=!1}}return null}var oo=[],ao=0,eu=null,tu=0,wn=[],En=0,ei=null,Cr=1,Rr="";function ti(n,s){oo[ao++]=tu,oo[ao++]=eu,eu=n,tu=s}function sm(n,s,a){wn[En++]=Cr,wn[En++]=Rr,wn[En++]=ei,ei=n;var c=Cr;n=Rr;var d=32-qt(c)-1;c&=~(1<<d),a+=1;var m=32-qt(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Cr=1<<32-qt(s)+d|a<<d|c,Rr=m+n}else Cr=1<<m|a<<d|c,Rr=n}function Ih(n){n.return!==null&&(ti(n,1),sm(n,1,0))}function Sh(n){for(;n===eu;)eu=oo[--ao],oo[ao]=null,tu=oo[--ao],oo[ao]=null;for(;n===ei;)ei=wn[--En],wn[En]=null,Rr=wn[--En],wn[En]=null,Cr=wn[--En],wn[En]=null}var hn=null,dn=null,Je=!1,Fn=null;function im(n,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function om(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,hn=n,dn=rs(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,hn=n,dn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ei!==null?{id:Cr,overflow:Rr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,hn=n,dn=null,!0):!1;default:return!1}}function Ah(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xh(n){if(Je){var s=dn;if(s){var a=s;if(!om(n,s)){if(Ah(n))throw Error(t(418));s=rs(a.nextSibling);var c=hn;s&&om(n,s)?im(c,a):(n.flags=n.flags&-4097|2,Je=!1,hn=n)}}else{if(Ah(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,hn=n}}}function am(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function nu(n){if(n!==hn)return!1;if(!Je)return am(n),Je=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!yh(n.type,n.memoizedProps)),s&&(s=dn)){if(Ah(n))throw lm(),Error(t(418));for(;s;)im(n,s),s=rs(s.nextSibling)}if(am(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){dn=rs(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}dn=null}}else dn=hn?rs(n.stateNode.nextSibling):null;return!0}function lm(){for(var n=dn;n;)n=rs(n.nextSibling)}function lo(){dn=hn=null,Je=!1}function Ch(n){Fn===null?Fn=[n]:Fn.push(n)}var Qw=we.ReactCurrentBatchConfig;function Sa(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var S=d.refs;v===null?delete S[m]:S[m]=v},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ru(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function um(n){var s=n._init;return s(n._payload)}function cm(n){function s(L,D){if(n){var U=L.deletions;U===null?(L.deletions=[D],L.flags|=16):U.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)s(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=ps(L,D),L.index=0,L.sibling=null,L}function m(L,D,U){return L.index=U,n?(U=L.alternate,U!==null?(U=U.index,U<D?(L.flags|=2,D):U):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,D,U,J){return D===null||D.tag!==6?(D=_d(U,L.mode,J),D.return=L,D):(D=d(D,U),D.return=L,D)}function k(L,D,U,J){var he=U.type;return he===N?Y(L,D,U.props.children,J,U.key):D!==null&&(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===st&&um(he)===D.type)?(J=d(D,U.props),J.ref=Sa(L,D,U),J.return=L,J):(J=Cu(U.type,U.key,U.props,null,L.mode,J),J.ref=Sa(L,D,U),J.return=L,J)}function z(L,D,U,J){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=vd(U,L.mode,J),D.return=L,D):(D=d(D,U.children||[]),D.return=L,D)}function Y(L,D,U,J,he){return D===null||D.tag!==7?(D=ui(U,L.mode,J,he),D.return=L,D):(D=d(D,U),D.return=L,D)}function X(L,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=_d(""+D,L.mode,U),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ie:return U=Cu(D.type,D.key,D.props,null,L.mode,U),U.ref=Sa(L,null,D),U.return=L,U;case xe:return D=vd(D,L.mode,U),D.return=L,D;case st:var J=D._init;return X(L,J(D._payload),U)}if(gr(D)||K(D))return D=ui(D,L.mode,U,null),D.return=L,D;ru(L,D)}return null}function Q(L,D,U,J){var he=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return he!==null?null:S(L,D,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ie:return U.key===he?k(L,D,U,J):null;case xe:return U.key===he?z(L,D,U,J):null;case st:return he=U._init,Q(L,D,he(U._payload),J)}if(gr(U)||K(U))return he!==null?null:Y(L,D,U,J,null);ru(L,U)}return null}function oe(L,D,U,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(U)||null,S(D,L,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Ie:return L=L.get(J.key===null?U:J.key)||null,k(D,L,J,he);case xe:return L=L.get(J.key===null?U:J.key)||null,z(D,L,J,he);case st:var pe=J._init;return oe(L,D,U,pe(J._payload),he)}if(gr(J)||K(J))return L=L.get(U)||null,Y(D,L,J,he,null);ru(D,J)}return null}function ue(L,D,U,J){for(var he=null,pe=null,me=D,_e=D=0,St=null;me!==null&&_e<U.length;_e++){me.index>_e?(St=me,me=null):St=me.sibling;var Me=Q(L,me,U[_e],J);if(Me===null){me===null&&(me=St);break}n&&me&&Me.alternate===null&&s(L,me),D=m(Me,D,_e),pe===null?he=Me:pe.sibling=Me,pe=Me,me=St}if(_e===U.length)return a(L,me),Je&&ti(L,_e),he;if(me===null){for(;_e<U.length;_e++)me=X(L,U[_e],J),me!==null&&(D=m(me,D,_e),pe===null?he=me:pe.sibling=me,pe=me);return Je&&ti(L,_e),he}for(me=c(L,me);_e<U.length;_e++)St=oe(me,L,_e,U[_e],J),St!==null&&(n&&St.alternate!==null&&me.delete(St.key===null?_e:St.key),D=m(St,D,_e),pe===null?he=St:pe.sibling=St,pe=St);return n&&me.forEach(function(ms){return s(L,ms)}),Je&&ti(L,_e),he}function ce(L,D,U,J){var he=K(U);if(typeof he!="function")throw Error(t(150));if(U=he.call(U),U==null)throw Error(t(151));for(var pe=he=null,me=D,_e=D=0,St=null,Me=U.next();me!==null&&!Me.done;_e++,Me=U.next()){me.index>_e?(St=me,me=null):St=me.sibling;var ms=Q(L,me,Me.value,J);if(ms===null){me===null&&(me=St);break}n&&me&&ms.alternate===null&&s(L,me),D=m(ms,D,_e),pe===null?he=ms:pe.sibling=ms,pe=ms,me=St}if(Me.done)return a(L,me),Je&&ti(L,_e),he;if(me===null){for(;!Me.done;_e++,Me=U.next())Me=X(L,Me.value,J),Me!==null&&(D=m(Me,D,_e),pe===null?he=Me:pe.sibling=Me,pe=Me);return Je&&ti(L,_e),he}for(me=c(L,me);!Me.done;_e++,Me=U.next())Me=oe(me,L,_e,Me.value,J),Me!==null&&(n&&Me.alternate!==null&&me.delete(Me.key===null?_e:Me.key),D=m(Me,D,_e),pe===null?he=Me:pe.sibling=Me,pe=Me);return n&&me.forEach(function(RE){return s(L,RE)}),Je&&ti(L,_e),he}function ot(L,D,U,J){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ie:e:{for(var he=U.key,pe=D;pe!==null;){if(pe.key===he){if(he=U.type,he===N){if(pe.tag===7){a(L,pe.sibling),D=d(pe,U.props.children),D.return=L,L=D;break e}}else if(pe.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===st&&um(he)===pe.type){a(L,pe.sibling),D=d(pe,U.props),D.ref=Sa(L,pe,U),D.return=L,L=D;break e}a(L,pe);break}else s(L,pe);pe=pe.sibling}U.type===N?(D=ui(U.props.children,L.mode,J,U.key),D.return=L,L=D):(J=Cu(U.type,U.key,U.props,null,L.mode,J),J.ref=Sa(L,D,U),J.return=L,L=J)}return v(L);case xe:e:{for(pe=U.key;D!==null;){if(D.key===pe)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(L,D.sibling),D=d(D,U.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else s(L,D);D=D.sibling}D=vd(U,L.mode,J),D.return=L,L=D}return v(L);case st:return pe=U._init,ot(L,D,pe(U._payload),J)}if(gr(U))return ue(L,D,U,J);if(K(U))return ce(L,D,U,J);ru(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,U),D.return=L,L=D):(a(L,D),D=_d(U,L.mode,J),D.return=L,L=D),v(L)):a(L,D)}return ot}var uo=cm(!0),hm=cm(!1),su=ss(null),iu=null,co=null,Rh=null;function kh(){Rh=co=iu=null}function Ph(n){var s=su.current;Ye(su),n._currentValue=s}function Nh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function ho(n,s){iu=n,Rh=co=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Jt=!0),n.firstContext=null)}function Tn(n){var s=n._currentValue;if(Rh!==n)if(n={context:n,memoizedValue:s,next:null},co===null){if(iu===null)throw Error(t(308));co=n,iu.dependencies={lanes:0,firstContext:n}}else co=co.next=n;return s}var ni=null;function Dh(n){ni===null?ni=[n]:ni.push(n)}function dm(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Dh(s)):(a.next=d.next,d.next=a),s.interleaved=a,kr(n,c)}function kr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var as=!1;function bh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ls(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,kr(n,a)}return d=c.interleaved,d===null?(s.next=s,Dh(c)):(s.next=d.next,d.next=s),c.interleaved=s,kr(n,a)}function ou(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Xr(n,a)}}function pm(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function au(n,s,a,c){var d=n.updateQueue;as=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var k=S,z=k.next;k.next=null,v===null?m=z:v.next=z,v=k;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==v&&(S===null?Y.firstBaseUpdate=z:S.next=z,Y.lastBaseUpdate=k))}if(m!==null){var X=d.baseState;v=0,Y=z=k=null,S=m;do{var Q=S.lane,oe=S.eventTime;if((c&Q)===Q){Y!==null&&(Y=Y.next={eventTime:oe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ue=n,ce=S;switch(Q=s,oe=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(oe,X,Q);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Q=typeof ue=="function"?ue.call(oe,X,Q):ue,Q==null)break e;X=ee({},X,Q);break e;case 2:as=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,Q=d.effects,Q===null?d.effects=[S]:Q.push(S))}else oe={eventTime:oe,lane:Q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(z=Y=oe,k=X):Y=Y.next=oe,v|=Q;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;Q=S,S=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(Y===null&&(k=X),d.baseState=k,d.firstBaseUpdate=z,d.lastBaseUpdate=Y,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);ii|=v,n.lanes=v,n.memoizedState=X}}function mm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Aa={},nr=ss(Aa),xa=ss(Aa),Ca=ss(Aa);function ri(n){if(n===Aa)throw Error(t(174));return n}function Vh(n,s){switch(Ge(Ca,s),Ge(xa,n),Ge(nr,Aa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:mt(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=mt(s,n)}Ye(nr),Ge(nr,s)}function fo(){Ye(nr),Ye(xa),Ye(Ca)}function gm(n){ri(Ca.current);var s=ri(nr.current),a=mt(s,n.type);s!==a&&(Ge(xa,n),Ge(nr,a))}function Oh(n){xa.current===n&&(Ye(nr),Ye(xa))}var Ze=ss(0);function lu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Mh=[];function Lh(){for(var n=0;n<Mh.length;n++)Mh[n]._workInProgressVersionPrimary=null;Mh.length=0}var uu=we.ReactCurrentDispatcher,jh=we.ReactCurrentBatchConfig,si=0,et=null,yt=null,Tt=null,cu=!1,Ra=!1,ka=0,Yw=0;function Lt(){throw Error(t(321))}function Fh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!jn(n[a],s[a]))return!1;return!0}function Uh(n,s,a,c,d,m){if(si=m,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,uu.current=n===null||n.memoizedState===null?eE:tE,n=a(c,d),Ra){m=0;do{if(Ra=!1,ka=0,25<=m)throw Error(t(301));m+=1,Tt=yt=null,s.updateQueue=null,uu.current=nE,n=a(c,d)}while(Ra)}if(uu.current=fu,s=yt!==null&&yt.next!==null,si=0,Tt=yt=et=null,cu=!1,s)throw Error(t(300));return n}function zh(){var n=ka!==0;return ka=0,n}function rr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?et.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function In(){if(yt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var s=Tt===null?et.memoizedState:Tt.next;if(s!==null)Tt=s,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Tt===null?et.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Pa(n,s){return typeof s=="function"?s(n):s}function Bh(n){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var S=v=null,k=null,z=m;do{var Y=z.lane;if((si&Y)===Y)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var X={lane:Y,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(S=k=X,v=c):k=k.next=X,et.lanes|=Y,ii|=Y}z=z.next}while(z!==null&&z!==m);k===null?v=c:k.next=S,jn(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,et.lanes|=m,ii|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function $h(n){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);jn(m,s.memoizedState)||(Jt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function ym(){}function _m(n,s){var a=et,c=In(),d=s(),m=!jn(c.memoizedState,d);if(m&&(c.memoizedState=d,Jt=!0),c=c.queue,qh(Em.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Na(9,wm.bind(null,a,c,d,s),void 0,null),It===null)throw Error(t(349));(si&30)!==0||vm(a,s,d)}return d}function vm(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function wm(n,s,a,c){s.value=a,s.getSnapshot=c,Tm(s)&&Im(n)}function Em(n,s,a){return a(function(){Tm(s)&&Im(n)})}function Tm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!jn(n,a)}catch{return!0}}function Im(n){var s=kr(n,1);s!==null&&$n(s,n,1,-1)}function Sm(n){var s=rr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},s.queue=n,n=n.dispatch=Zw.bind(null,et,n),[s.memoizedState,n]}function Na(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function Am(){return In().memoizedState}function hu(n,s,a,c){var d=rr();et.flags|=n,d.memoizedState=Na(1|s,a,void 0,c===void 0?null:c)}function du(n,s,a,c){var d=In();c=c===void 0?null:c;var m=void 0;if(yt!==null){var v=yt.memoizedState;if(m=v.destroy,c!==null&&Fh(c,v.deps)){d.memoizedState=Na(s,a,m,c);return}}et.flags|=n,d.memoizedState=Na(1|s,a,m,c)}function xm(n,s){return hu(8390656,8,n,s)}function qh(n,s){return du(2048,8,n,s)}function Cm(n,s){return du(4,2,n,s)}function Rm(n,s){return du(4,4,n,s)}function km(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Pm(n,s,a){return a=a!=null?a.concat([n]):null,du(4,4,km.bind(null,s,n),a)}function Hh(){}function Nm(n,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Fh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Dm(n,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Fh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function bm(n,s,a){return(si&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a):(jn(a,s)||(a=Gs(),et.lanes|=a,ii|=a,n.baseState=!0),s)}function Xw(n,s){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=jh.transition;jh.transition={};try{n(!1),s()}finally{Ne=a,jh.transition=c}}function Vm(){return In().memoizedState}function Jw(n,s,a){var c=ds(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Om(n))Mm(s,a);else if(a=dm(n,s,a,c),a!==null){var d=Gt();$n(a,n,c,d),Lm(a,s,c)}}function Zw(n,s,a){var c=ds(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Om(n))Mm(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,S=m(v,a);if(d.hasEagerState=!0,d.eagerState=S,jn(S,v)){var k=s.interleaved;k===null?(d.next=d,Dh(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=dm(n,s,d,c),a!==null&&(d=Gt(),$n(a,n,c,d),Lm(a,s,c))}}function Om(n){var s=n.alternate;return n===et||s!==null&&s===et}function Mm(n,s){Ra=cu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Lm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Xr(n,a)}}var fu={readContext:Tn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},eE={readContext:Tn,useCallback:function(n,s){return rr().memoizedState=[n,s===void 0?null:s],n},useContext:Tn,useEffect:xm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,hu(4194308,4,km.bind(null,s,n),a)},useLayoutEffect:function(n,s){return hu(4194308,4,n,s)},useInsertionEffect:function(n,s){return hu(4,2,n,s)},useMemo:function(n,s){var a=rr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=Jw.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var s=rr();return n={current:n},s.memoizedState=n},useState:Sm,useDebugValue:Hh,useDeferredValue:function(n){return rr().memoizedState=n},useTransition:function(){var n=Sm(!1),s=n[0];return n=Xw.bind(null,n[1]),rr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=et,d=rr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(si&30)!==0||vm(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,xm(Em.bind(null,c,m,n),[n]),c.flags|=2048,Na(9,wm.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=rr(),s=It.identifierPrefix;if(Je){var a=Rr,c=Cr;a=(c&~(1<<32-qt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=ka++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Yw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},tE={readContext:Tn,useCallback:Nm,useContext:Tn,useEffect:qh,useImperativeHandle:Pm,useInsertionEffect:Cm,useLayoutEffect:Rm,useMemo:Dm,useReducer:Bh,useRef:Am,useState:function(){return Bh(Pa)},useDebugValue:Hh,useDeferredValue:function(n){var s=In();return bm(s,yt.memoizedState,n)},useTransition:function(){var n=Bh(Pa)[0],s=In().memoizedState;return[n,s]},useMutableSource:ym,useSyncExternalStore:_m,useId:Vm,unstable_isNewReconciler:!1},nE={readContext:Tn,useCallback:Nm,useContext:Tn,useEffect:qh,useImperativeHandle:Pm,useInsertionEffect:Cm,useLayoutEffect:Rm,useMemo:Dm,useReducer:$h,useRef:Am,useState:function(){return $h(Pa)},useDebugValue:Hh,useDeferredValue:function(n){var s=In();return yt===null?s.memoizedState=n:bm(s,yt.memoizedState,n)},useTransition:function(){var n=$h(Pa)[0],s=In().memoizedState;return[n,s]},useMutableSource:ym,useSyncExternalStore:_m,useId:Vm,unstable_isNewReconciler:!1};function Un(n,s){if(n&&n.defaultProps){s=ee({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Wh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:ee({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var pu={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Gt(),d=ds(n),m=Pr(c,d);m.payload=s,a!=null&&(m.callback=a),s=ls(n,m,d),s!==null&&($n(s,n,d,c),ou(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Gt(),d=ds(n),m=Pr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=ls(n,m,d),s!==null&&($n(s,n,d,c),ou(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Gt(),c=ds(n),d=Pr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ls(n,d,c),s!==null&&($n(s,n,c,a),ou(s,n,c))}};function jm(n,s,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!ya(a,c)||!ya(d,m):!0}function Fm(n,s,a){var c=!1,d=is,m=s.contextType;return typeof m=="object"&&m!==null?m=Tn(m):(d=Xt(s)?Zs:Mt.current,c=s.contextTypes,m=(c=c!=null)?io(n,d):is),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),s}function Um(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&pu.enqueueReplaceState(s,s.state,null)}function Gh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},bh(n);var m=s.contextType;typeof m=="object"&&m!==null?d.context=Tn(m):(m=Xt(s)?Zs:Mt.current,d.context=io(n,m)),d.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Wh(n,s,m,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&pu.enqueueReplaceState(d,d.state,null),au(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function po(n,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:d,digest:null}}function Kh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Qh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var rE=typeof WeakMap=="function"?WeakMap:Map;function zm(n,s,a){a=Pr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Eu||(Eu=!0,cd=c),Qh(n,s)},a}function Bm(n,s,a){a=Pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Qh(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Qh(n,s),typeof c!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function $m(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new rE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=yE.bind(null,n,s,a),s.then(n,n))}function qm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Hm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Pr(-1,1),s.tag=2,ls(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var sE=we.ReactCurrentOwner,Jt=!1;function Wt(n,s,a,c){s.child=n===null?hm(s,null,a,c):uo(s,n.child,a,c)}function Wm(n,s,a,c,d){a=a.render;var m=s.ref;return ho(s,d),c=Uh(n,s,a,c,m,d),a=zh(),n!==null&&!Jt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Nr(n,s,d)):(Je&&a&&Ih(s),s.flags|=1,Wt(n,s,c,d),s.child)}function Gm(n,s,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!yd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Km(n,s,m,c,d)):(n=Cu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(v,c)&&n.ref===s.ref)return Nr(n,s,d)}return s.flags|=1,n=ps(m,c),n.ref=s.ref,n.return=s,s.child=n}function Km(n,s,a,c,d){if(n!==null){var m=n.memoizedProps;if(ya(m,c)&&n.ref===s.ref)if(Jt=!1,s.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jt=!0);else return s.lanes=n.lanes,Nr(n,s,d)}return Yh(n,s,a,c,d)}function Qm(n,s,a){var c=s.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(go,fn),fn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ge(go,fn),fn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ge(go,fn),fn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,Ge(go,fn),fn|=c;return Wt(n,s,d,a),s.child}function Ym(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Yh(n,s,a,c,d){var m=Xt(a)?Zs:Mt.current;return m=io(s,m),ho(s,d),a=Uh(n,s,a,c,m,d),c=zh(),n!==null&&!Jt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Nr(n,s,d)):(Je&&c&&Ih(s),s.flags|=1,Wt(n,s,a,d),s.child)}function Xm(n,s,a,c,d){if(Xt(a)){var m=!0;Jl(s)}else m=!1;if(ho(s,d),s.stateNode===null)gu(n,s),Fm(s,a,c),Gh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var k=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=Tn(z):(z=Xt(a)?Zs:Mt.current,z=io(s,z));var Y=a.getDerivedStateFromProps,X=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||k!==z)&&Um(s,v,c,z),as=!1;var Q=s.memoizedState;v.state=Q,au(s,c,v,d),k=s.memoizedState,S!==c||Q!==k||Yt.current||as?(typeof Y=="function"&&(Wh(s,a,Y,c),k=s.memoizedState),(S=as||jm(s,a,S,c,Q,k,z))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),v.props=c,v.state=k,v.context=z,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,fm(n,s),S=s.memoizedProps,z=s.type===s.elementType?S:Un(s.type,S),v.props=z,X=s.pendingProps,Q=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=Tn(k):(k=Xt(a)?Zs:Mt.current,k=io(s,k));var oe=a.getDerivedStateFromProps;(Y=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==X||Q!==k)&&Um(s,v,c,k),as=!1,Q=s.memoizedState,v.state=Q,au(s,c,v,d);var ue=s.memoizedState;S!==X||Q!==ue||Yt.current||as?(typeof oe=="function"&&(Wh(s,a,oe,c),ue=s.memoizedState),(z=as||jm(s,a,z,c,Q,ue,k)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=k,c=z):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),c=!1)}return Xh(n,s,a,c,m,d)}function Xh(n,s,a,c,d,m){Ym(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&nm(s,a,!1),Nr(n,s,m);c=s.stateNode,sE.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=uo(s,n.child,null,m),s.child=uo(s,null,S,m)):Wt(n,s,S,m),s.memoizedState=c.state,d&&nm(s,a,!0),s.child}function Jm(n){var s=n.stateNode;s.pendingContext?em(n,s.pendingContext,s.pendingContext!==s.context):s.context&&em(n,s.context,!1),Vh(n,s.containerInfo)}function Zm(n,s,a,c,d){return lo(),Ch(d),s.flags|=256,Wt(n,s,a,c),s.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function eg(n,s,a){var c=s.pendingProps,d=Ze.current,m=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(Ze,d&1),n===null)return xh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Ru(v,c,0,null),n=ui(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=Zh(a),s.memoizedState=Jh,n):ed(s,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return iE(n,s,v,c,S,d,a);if(m){m=c.fallback,v=s.mode,d=n.child,S=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=ps(d,k),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=ps(S,m):(m=ui(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=n.child.memoizedState,v=v===null?Zh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,s.memoizedState=Jh,c}return m=n.child,n=m.sibling,c=ps(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function ed(n,s){return s=Ru({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function mu(n,s,a,c){return c!==null&&Ch(c),uo(s,n.child,null,a),n=ed(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function iE(n,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=Kh(Error(t(422))),mu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=Ru({mode:"visible",children:c.children},d,0,null),m=ui(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&uo(s,n.child,null,v),s.child.memoizedState=Zh(v),s.memoizedState=Jh,m);if((s.mode&1)===0)return mu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=Kh(m,c,void 0),mu(n,s,v,c)}if(S=(v&n.childLanes)!==0,Jt||S){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,kr(n,d),$n(c,n,d,-1))}return gd(),c=Kh(Error(t(421))),mu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=_E.bind(null,n),d._reactRetry=s,null):(n=m.treeContext,dn=rs(d.nextSibling),hn=s,Je=!0,Fn=null,n!==null&&(wn[En++]=Cr,wn[En++]=Rr,wn[En++]=ei,Cr=n.id,Rr=n.overflow,ei=s),s=ed(s,c.children),s.flags|=4096,s)}function tg(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Nh(n.return,s,a)}function td(n,s,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function ng(n,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Wt(n,s,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tg(n,a,s);else if(n.tag===19)tg(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(Ze,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&lu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),td(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&lu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}td(s,!0,a,null,m);break;case"together":td(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function gu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Nr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),ii|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=ps(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=ps(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function oE(n,s,a){switch(s.tag){case 3:Jm(s),lo();break;case 5:gm(s);break;case 1:Xt(s.type)&&Jl(s);break;case 4:Vh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ge(su,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ge(Ze,Ze.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?eg(n,s,a):(Ge(Ze,Ze.current&1),n=Nr(n,s,a),n!==null?n.sibling:null);Ge(Ze,Ze.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return ng(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(Ze,Ze.current),c)break;return null;case 22:case 23:return s.lanes=0,Qm(n,s,a)}return Nr(n,s,a)}var rg,nd,sg,ig;rg=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},nd=function(){},sg=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,ri(nr.current);var m=null;switch(a){case"input":d=Ms(n,d),c=Ms(n,c),m=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),m=[];break;case"textarea":d=Wo(n,d),c=Wo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ql)}Jo(a,c);var v;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var S=d[z];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?m||(m=[]):(m=m||[]).push(z,null));for(z in c){var k=c[z];if(S=d?.[z],c.hasOwnProperty(z)&&k!==S&&(k!=null||S!=null))if(z==="style")if(S){for(v in S)!S.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&S[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,S=S?S.__html:void 0,k!=null&&S!==k&&(m=m||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&Qe("scroll",n),m||S===k||(m=[])):(m=m||[]).push(z,k))}a&&(m=m||[]).push("style",a);var z=m;(s.updateQueue=z)&&(s.flags|=4)}},ig=function(n,s,a,c){a!==c&&(s.flags|=4)};function Da(n,s){if(!Je)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function jt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function aE(n,s,a){var c=s.pendingProps;switch(Sh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(s),null;case 1:return Xt(s.type)&&Xl(),jt(s),null;case 3:return c=s.stateNode,fo(),Ye(Yt),Ye(Mt),Lh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(nu(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Fn!==null&&(fd(Fn),Fn=null))),nd(n,s),jt(s),null;case 5:Oh(s);var d=ri(Ca.current);if(a=s.type,n!==null&&s.stateNode!=null)sg(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return jt(s),null}if(n=ri(nr.current),nu(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[tr]=s,c[Ta]=m,n=(s.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<va.length;d++)Qe(va[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Ci(c,m),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Qe("invalid",c);break;case"textarea":ki(c,m),Qe("invalid",c)}Jo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&Kl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&Kl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":mr(c),wl(c,m,!0);break;case"textarea":mr(c),Go(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ql)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[tr]=s,n[Ta]=c,rg(n,s,!1,!1),s.stateNode=n;e:{switch(v=Zo(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<va.length;d++)Qe(va[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":Ci(n,c),d=Ms(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":ki(n,c),d=Wo(n,c),Qe("invalid",n);break;default:d=c}Jo(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var k=S[m];m==="style"?Yo(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ko(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Wr(n,k):typeof k=="number"&&Wr(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Qe("scroll",n):k!=null&&se(n,m,k,v))}switch(a){case"input":mr(n),wl(n,c,!1);break;case"textarea":mr(n),Go(n);break;case"option":c.value!=null&&n.setAttribute("value",""+je(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?yr(n,!!c.multiple,m,!1):c.defaultValue!=null&&yr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ql)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return jt(s),null;case 6:if(n&&s.stateNode!=null)ig(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ri(Ca.current),ri(nr.current),nu(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(m=c.nodeValue!==a)&&(n=hn,n!==null))switch(n.tag){case 3:Kl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Kl(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return jt(s),null;case 13:if(Ye(Ze),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&dn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)lm(),lo(),s.flags|=98560,m=!1;else if(m=nu(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[tr]=s}else lo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;jt(s),m=!1}else Fn!==null&&(fd(Fn),Fn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Ze.current&1)!==0?_t===0&&(_t=3):gd())),s.updateQueue!==null&&(s.flags|=4),jt(s),null);case 4:return fo(),nd(n,s),n===null&&wa(s.stateNode.containerInfo),jt(s),null;case 10:return Ph(s.type._context),jt(s),null;case 17:return Xt(s.type)&&Xl(),jt(s),null;case 19:if(Ye(Ze),m=s.memoizedState,m===null)return jt(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)Da(m,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=lu(n),v!==null){for(s.flags|=128,Da(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(Ze,Ze.current&1|2),s.child}n=n.sibling}m.tail!==null&&We()>yo&&(s.flags|=128,c=!0,Da(m,!1),s.lanes=4194304)}else{if(!c)if(n=lu(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Da(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Je)return jt(s),null}else 2*We()-m.renderingStartTime>yo&&a!==1073741824&&(s.flags|=128,c=!0,Da(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=We(),s.sibling=null,a=Ze.current,Ge(Ze,c?a&1|2:a&1),s):(jt(s),null);case 22:case 23:return md(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(fn&1073741824)!==0&&(jt(s),s.subtreeFlags&6&&(s.flags|=8192)):jt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function lE(n,s){switch(Sh(s),s.tag){case 1:return Xt(s.type)&&Xl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return fo(),Ye(Yt),Ye(Mt),Lh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Oh(s),null;case 13:if(Ye(Ze),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));lo()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ye(Ze),null;case 4:return fo(),null;case 10:return Ph(s.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var yu=!1,Ft=!1,uE=typeof WeakSet=="function"?WeakSet:Set,le=null;function mo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,s,c)}else a.current=null}function rd(n,s,a){try{a()}catch(c){nt(n,s,c)}}var og=!1;function cE(n,s){if(mh=es,n=jp(),ah(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,S=-1,k=-1,z=0,Y=0,X=n,Q=null;t:for(;;){for(var oe;X!==a||d!==0&&X.nodeType!==3||(S=v+d),X!==m||c!==0&&X.nodeType!==3||(k=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(oe=X.firstChild)!==null;)Q=X,X=oe;for(;;){if(X===n)break t;if(Q===a&&++z===d&&(S=v),Q===m&&++Y===c&&(k=v),(oe=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=oe}a=S===-1||k===-1?null:{start:S,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(gh={focusedElem:n,selectionRange:a},es=!1,le=s;le!==null;)if(s=le,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,le=n;else for(;le!==null;){s=le;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,ot=ue.memoizedState,L=s.stateNode,D=L.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Un(s.type,ce),ot);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){nt(s,s.return,J)}if(n=s.sibling,n!==null){n.return=s.return,le=n;break}le=s.return}return ue=og,og=!1,ue}function ba(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&rd(s,a,m)}d=d.next}while(d!==c)}}function _u(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function sd(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function ag(n){var s=n.alternate;s!==null&&(n.alternate=null,ag(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[tr],delete s[Ta],delete s[wh],delete s[Ww],delete s[Gw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lg(n){return n.tag===5||n.tag===3||n.tag===4}function ug(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function id(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Ql));else if(c!==4&&(n=n.child,n!==null))for(id(n,s,a),n=n.sibling;n!==null;)id(n,s,a),n=n.sibling}function od(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(od(n,s,a),n=n.sibling;n!==null;)od(n,s,a),n=n.sibling}var Pt=null,zn=!1;function us(n,s,a){for(a=a.child;a!==null;)cg(n,s,a),a=a.sibling}function cg(n,s,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Hs,a)}catch{}switch(a.tag){case 5:Ft||mo(a,s);case 6:var c=Pt,d=zn;Pt=null,us(n,s,a),Pt=c,zn=d,Pt!==null&&(zn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(zn?(n=Pt,a=a.stateNode,n.nodeType===8?vh(n.parentNode,a):n.nodeType===1&&vh(n,a),Mn(n)):vh(Pt,a.stateNode));break;case 4:c=Pt,d=zn,Pt=a.stateNode.containerInfo,zn=!0,us(n,s,a),Pt=c,zn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&rd(a,s,v),d=d.next}while(d!==c)}us(n,s,a);break;case 1:if(!Ft&&(mo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){nt(a,s,S)}us(n,s,a);break;case 21:us(n,s,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,us(n,s,a),Ft=c):us(n,s,a);break;default:us(n,s,a)}}function hg(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new uE),s.forEach(function(c){var d=vE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Bn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,zn=!1;break e;case 3:Pt=S.stateNode.containerInfo,zn=!0;break e;case 4:Pt=S.stateNode.containerInfo,zn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));cg(m,v,d),Pt=null,zn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(z){nt(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)dg(s,n),s=s.sibling}function dg(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bn(s,n),sr(n),c&4){try{ba(3,n,n.return),_u(3,n)}catch(ce){nt(n,n.return,ce)}try{ba(5,n,n.return)}catch(ce){nt(n,n.return,ce)}}break;case 1:Bn(s,n),sr(n),c&512&&a!==null&&mo(a,a.return);break;case 5:if(Bn(s,n),sr(n),c&512&&a!==null&&mo(a,a.return),n.flags&32){var d=n.stateNode;try{Wr(d,"")}catch(ce){nt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,S=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&qo(d,m),Zo(S,v);var z=Zo(S,m);for(v=0;v<k.length;v+=2){var Y=k[v],X=k[v+1];Y==="style"?Yo(d,X):Y==="dangerouslySetInnerHTML"?Ko(d,X):Y==="children"?Wr(d,X):se(d,Y,X,z)}switch(S){case"input":Ho(d,m);break;case"textarea":Pi(d,m);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var oe=m.value;oe!=null?yr(d,!!m.multiple,oe,!1):Q!==!!m.multiple&&(m.defaultValue!=null?yr(d,!!m.multiple,m.defaultValue,!0):yr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ta]=m}catch(ce){nt(n,n.return,ce)}}break;case 6:if(Bn(s,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ce){nt(n,n.return,ce)}}break;case 3:if(Bn(s,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Mn(s.containerInfo)}catch(ce){nt(n,n.return,ce)}break;case 4:Bn(s,n),sr(n);break;case 13:Bn(s,n),sr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(ud=We())),c&4&&hg(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(z=Ft)||Y,Bn(s,n),Ft=z):Bn(s,n),sr(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Y&&(n.mode&1)!==0)for(le=n,Y=n.child;Y!==null;){for(X=le=Y;le!==null;){switch(Q=le,oe=Q.child,Q.tag){case 0:case 11:case 14:case 15:ba(4,Q,Q.return);break;case 1:mo(Q,Q.return);var ue=Q.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){nt(c,a,ce)}}break;case 5:mo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){mg(X);continue}}oe!==null?(oe.return=Q,le=oe):mg(X)}Y=Y.sibling}e:for(Y=null,X=n;;){if(X.tag===5){if(Y===null){Y=X;try{d=X.stateNode,z?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=X.stateNode,k=X.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,S.style.display=Qo("display",v))}catch(ce){nt(n,n.return,ce)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=z?"":X.memoizedProps}catch(ce){nt(n,n.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Bn(s,n),sr(n),c&4&&hg(n);break;case 21:break;default:Bn(s,n),sr(n)}}function sr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(lg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Wr(d,""),c.flags&=-33);var m=ug(n);od(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=ug(n);id(n,S,v);break;default:throw Error(t(161))}}catch(k){nt(n,n.return,k)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function hE(n,s,a){le=n,fg(n)}function fg(n,s,a){for(var c=(n.mode&1)!==0;le!==null;){var d=le,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||yu;if(!v){var S=d.alternate,k=S!==null&&S.memoizedState!==null||Ft;S=yu;var z=Ft;if(yu=v,(Ft=k)&&!z)for(le=d;le!==null;)v=le,k=v.child,v.tag===22&&v.memoizedState!==null?gg(d):k!==null?(k.return=v,le=k):gg(d);for(;m!==null;)le=m,fg(m),m=m.sibling;le=d,yu=S,Ft=z}pg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,le=m):pg(n)}}function pg(n){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||_u(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Un(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&mm(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}mm(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var Y=z.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&Mn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&sd(s)}catch(Q){nt(s,s.return,Q)}}if(s===n){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function mg(n){for(;le!==null;){var s=le;if(s===n){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function gg(n){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{_u(4,s)}catch(k){nt(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(k){nt(s,d,k)}}var m=s.return;try{sd(s)}catch(k){nt(s,m,k)}break;case 5:var v=s.return;try{sd(s)}catch(k){nt(s,v,k)}}}catch(k){nt(s,s.return,k)}if(s===n){le=null;break}var S=s.sibling;if(S!==null){S.return=s.return,le=S;break}le=s.return}}var dE=Math.ceil,vu=we.ReactCurrentDispatcher,ad=we.ReactCurrentOwner,Sn=we.ReactCurrentBatchConfig,Oe=0,It=null,ut=null,Nt=0,fn=0,go=ss(0),_t=0,Va=null,ii=0,wu=0,ld=0,Oa=null,Zt=null,ud=0,yo=1/0,Dr=null,Eu=!1,cd=null,cs=null,Tu=!1,hs=null,Iu=0,Ma=0,hd=null,Su=-1,Au=0;function Gt(){return(Oe&6)!==0?We():Su!==-1?Su:Su=We()}function ds(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Nt!==0?Nt&-Nt:Qw.transition!==null?(Au===0&&(Au=Gs()),Au):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:ca(n.type)),n)}function $n(n,s,a,c){if(50<Ma)throw Ma=0,hd=null,Error(t(185));Yr(n,a,c),((Oe&2)===0||n!==It)&&(n===It&&((Oe&2)===0&&(wu|=a),_t===4&&fs(n,Nt)),en(n,c),a===1&&Oe===0&&(s.mode&1)===0&&(yo=We()+500,Zl&&os()))}function en(n,s){var a=n.callbackNode;wr(n,s);var c=Ws(n,n===It?Nt:0);if(c===0)a!==null&&ia(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&ia(a),s===1)n.tag===0?Kw(_g.bind(null,n)):rm(_g.bind(null,n)),qw(function(){(Oe&6)===0&&os()}),a=null;else{switch(Jr(c)){case 1:a=qs;break;case 4:a=Gr;break;case 16:a=yn;break;case 536870912:a=Al;break;default:a=yn}a=xg(a,yg.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function yg(n,s){if(Su=-1,Au=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(_o()&&n.callbackNode!==a)return null;var c=Ws(n,n===It?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=xu(n,c);else{s=c;var d=Oe;Oe|=2;var m=wg();(It!==n||Nt!==s)&&(Dr=null,yo=We()+500,ai(n,s));do try{mE();break}catch(S){vg(n,S)}while(!0);kh(),vu.current=m,Oe=d,ut!==null?s=0:(It=null,Nt=0,s=_t)}if(s!==0){if(s===2&&(d=ln(n),d!==0&&(c=d,s=dd(n,d))),s===1)throw a=Va,ai(n,0),fs(n,c),en(n,We()),a;if(s===6)fs(n,c);else{if(d=n.current.alternate,(c&30)===0&&!fE(d)&&(s=xu(n,c),s===2&&(m=ln(n),m!==0&&(c=m,s=dd(n,m))),s===1))throw a=Va,ai(n,0),fs(n,c),en(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:li(n,Zt,Dr);break;case 3:if(fs(n,c),(c&130023424)===c&&(s=ud+500-We(),10<s)){if(Ws(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Gt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=_h(li.bind(null,n,Zt,Dr),s);break}li(n,Zt,Dr);break;case 4:if(fs(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-qt(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*dE(c/1960))-c,10<c){n.timeoutHandle=_h(li.bind(null,n,Zt,Dr),c);break}li(n,Zt,Dr);break;case 5:li(n,Zt,Dr);break;default:throw Error(t(329))}}}return en(n,We()),n.callbackNode===a?yg.bind(null,n):null}function dd(n,s){var a=Oa;return n.current.memoizedState.isDehydrated&&(ai(n,s).flags|=256),n=xu(n,s),n!==2&&(s=Zt,Zt=a,s!==null&&fd(s)),n}function fd(n){Zt===null?Zt=n:Zt.push.apply(Zt,n)}function fE(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!jn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function fs(n,s){for(s&=~ld,s&=~wu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-qt(s),c=1<<a;n[a]=-1,s&=~c}}function _g(n){if((Oe&6)!==0)throw Error(t(327));_o();var s=Ws(n,0);if((s&1)===0)return en(n,We()),null;var a=xu(n,s);if(n.tag!==0&&a===2){var c=ln(n);c!==0&&(s=c,a=dd(n,c))}if(a===1)throw a=Va,ai(n,0),fs(n,s),en(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,li(n,Zt,Dr),en(n,We()),null}function pd(n,s){var a=Oe;Oe|=1;try{return n(s)}finally{Oe=a,Oe===0&&(yo=We()+500,Zl&&os())}}function oi(n){hs!==null&&hs.tag===0&&(Oe&6)===0&&_o();var s=Oe;Oe|=1;var a=Sn.transition,c=Ne;try{if(Sn.transition=null,Ne=1,n)return n()}finally{Ne=c,Sn.transition=a,Oe=s,(Oe&6)===0&&os()}}function md(){fn=go.current,Ye(go)}function ai(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,$w(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Sh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Xl();break;case 3:fo(),Ye(Yt),Ye(Mt),Lh();break;case 5:Oh(c);break;case 4:fo();break;case 13:Ye(Ze);break;case 19:Ye(Ze);break;case 10:Ph(c.type._context);break;case 22:case 23:md()}a=a.return}if(It=n,ut=n=ps(n.current,null),Nt=fn=s,_t=0,Va=null,ld=wu=ii=0,Zt=Oa=null,ni!==null){for(s=0;s<ni.length;s++)if(a=ni[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}ni=null}return n}function vg(n,s){do{var a=ut;try{if(kh(),uu.current=fu,cu){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}cu=!1}if(si=0,Tt=yt=et=null,Ra=!1,ka=0,ad.current=null,a===null||a.return===null){_t=1,Va=s,ut=null;break}e:{var m=n,v=a.return,S=a,k=s;if(s=Nt,S.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,Y=S,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var oe=qm(v);if(oe!==null){oe.flags&=-257,Hm(oe,v,S,m,s),oe.mode&1&&$m(m,z,s),s=oe,k=z;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if((s&1)===0){$m(m,z,s),gd();break e}k=Error(t(426))}}else if(Je&&S.mode&1){var ot=qm(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Hm(ot,v,S,m,s),Ch(po(k,S));break e}}m=k=po(k,S),_t!==4&&(_t=2),Oa===null?Oa=[m]:Oa.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var L=zm(m,k,s);pm(m,L);break e;case 1:S=k;var D=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(cs===null||!cs.has(U)))){m.flags|=65536,s&=-s,m.lanes|=s;var J=Bm(m,S,s);pm(m,J);break e}}m=m.return}while(m!==null)}Tg(a)}catch(he){s=he,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function wg(){var n=vu.current;return vu.current=fu,n===null?fu:n}function gd(){(_t===0||_t===3||_t===2)&&(_t=4),It===null||(ii&268435455)===0&&(wu&268435455)===0||fs(It,Nt)}function xu(n,s){var a=Oe;Oe|=2;var c=wg();(It!==n||Nt!==s)&&(Dr=null,ai(n,s));do try{pE();break}catch(d){vg(n,d)}while(!0);if(kh(),Oe=a,vu.current=c,ut!==null)throw Error(t(261));return It=null,Nt=0,_t}function pE(){for(;ut!==null;)Eg(ut)}function mE(){for(;ut!==null&&!Il();)Eg(ut)}function Eg(n){var s=Ag(n.alternate,n,fn);n.memoizedProps=n.pendingProps,s===null?Tg(n):ut=s,ad.current=null}function Tg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=aE(a,s,fn),a!==null){ut=a;return}}else{if(a=lE(a,s),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,ut=null;return}}if(s=s.sibling,s!==null){ut=s;return}ut=s=n}while(s!==null);_t===0&&(_t=5)}function li(n,s,a){var c=Ne,d=Sn.transition;try{Sn.transition=null,Ne=1,gE(n,s,a,c)}finally{Sn.transition=d,Ne=c}return null}function gE(n,s,a,c){do _o();while(hs!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if($e(n,m),n===It&&(ut=It=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Tu||(Tu=!0,xg(yn,function(){return _o(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Sn.transition,Sn.transition=null;var v=Ne;Ne=1;var S=Oe;Oe|=4,ad.current=null,cE(n,a),dg(a,n),Mw(gh),es=!!mh,gh=mh=null,n.current=a,hE(a),Zc(),Oe=S,Ne=v,Sn.transition=m}else n.current=a;if(Tu&&(Tu=!1,hs=n,Iu=d),m=n.pendingLanes,m===0&&(cs=null),xl(a.stateNode),en(n,We()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Eu)throw Eu=!1,n=cd,cd=null,n;return(Iu&1)!==0&&n.tag!==0&&_o(),m=n.pendingLanes,(m&1)!==0?n===hd?Ma++:(Ma=0,hd=n):Ma=0,os(),null}function _o(){if(hs!==null){var n=Jr(Iu),s=Sn.transition,a=Ne;try{if(Sn.transition=null,Ne=16>n?16:n,hs===null)var c=!1;else{if(n=hs,hs=null,Iu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,le=n.current;le!==null;){var m=le,v=m.child;if((le.flags&16)!==0){var S=m.deletions;if(S!==null){for(var k=0;k<S.length;k++){var z=S[k];for(le=z;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:ba(8,Y,m)}var X=Y.child;if(X!==null)X.return=Y,le=X;else for(;le!==null;){Y=le;var Q=Y.sibling,oe=Y.return;if(ag(Y),Y===z){le=null;break}if(Q!==null){Q.return=oe,le=Q;break}le=oe}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var ot=ce.sibling;ce.sibling=null,ce=ot}while(ce!==null)}}le=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,le=v;else e:for(;le!==null;){if(m=le,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ba(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,le=L;break e}le=m.return}}var D=n.current;for(le=D;le!==null;){v=le;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,le=U;else e:for(v=D;le!==null;){if(S=le,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:_u(9,S)}}catch(he){nt(S,S.return,he)}if(S===v){le=null;break e}var J=S.sibling;if(J!==null){J.return=S.return,le=J;break e}le=S.return}}if(Oe=d,os(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Hs,n)}catch{}c=!0}return c}finally{Ne=a,Sn.transition=s}}return!1}function Ig(n,s,a){s=po(a,s),s=zm(n,s,1),n=ls(n,s,1),s=Gt(),n!==null&&(Yr(n,1,s),en(n,s))}function nt(n,s,a){if(n.tag===3)Ig(n,n,a);else for(;s!==null;){if(s.tag===3){Ig(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(cs===null||!cs.has(c))){n=po(a,n),n=Bm(s,n,1),s=ls(s,n,1),n=Gt(),s!==null&&(Yr(s,1,n),en(s,n));break}}s=s.return}}function yE(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Gt(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Nt&a)===a&&(_t===4||_t===3&&(Nt&130023424)===Nt&&500>We()-ud?ai(n,0):ld|=a),en(n,s)}function Sg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Ui,Ui<<=1,(Ui&130023424)===0&&(Ui=4194304)));var a=Gt();n=kr(n,s),n!==null&&(Yr(n,s,a),en(n,a))}function _E(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Sg(n,a)}function vE(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Sg(n,a)}var Ag;Ag=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Yt.current)Jt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Jt=!1,oE(n,s,a);Jt=(n.flags&131072)!==0}else Jt=!1,Je&&(s.flags&1048576)!==0&&sm(s,tu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;gu(n,s),n=s.pendingProps;var d=io(s,Mt.current);ho(s,a),d=Uh(null,s,c,n,d,a);var m=zh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xt(c)?(m=!0,Jl(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,bh(s),d.updater=pu,s.stateNode=d,d._reactInternals=s,Gh(s,c,n,a),s=Xh(null,s,c,!0,m,a)):(s.tag=0,Je&&m&&Ih(s),Wt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(gu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=EE(c),n=Un(c,n),d){case 0:s=Yh(null,s,c,n,a);break e;case 1:s=Xm(null,s,c,n,a);break e;case 11:s=Wm(null,s,c,n,a);break e;case 14:s=Gm(null,s,c,Un(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),Yh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),Xm(n,s,c,d,a);case 3:e:{if(Jm(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,fm(n,s),au(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=po(Error(t(423)),s),s=Zm(n,s,c,a,d);break e}else if(c!==d){d=po(Error(t(424)),s),s=Zm(n,s,c,a,d);break e}else for(dn=rs(s.stateNode.containerInfo.firstChild),hn=s,Je=!0,Fn=null,a=hm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(lo(),c===d){s=Nr(n,s,a);break e}Wt(n,s,c,a)}s=s.child}return s;case 5:return gm(s),n===null&&xh(s),c=s.type,d=s.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,yh(c,d)?v=null:m!==null&&yh(c,m)&&(s.flags|=32),Ym(n,s),Wt(n,s,v,a),s.child;case 6:return n===null&&xh(s),null;case 13:return eg(n,s,a);case 4:return Vh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=uo(s,null,c,a):Wt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),Wm(n,s,c,d,a);case 7:return Wt(n,s,s.pendingProps,a),s.child;case 8:return Wt(n,s,s.pendingProps.children,a),s.child;case 12:return Wt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,Ge(su,c._currentValue),c._currentValue=v,m!==null)if(jn(m.value,v)){if(m.children===d.children&&!Yt.current){s=Nr(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var k=S.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=Pr(-1,a&-a),k.tag=2;var z=m.updateQueue;if(z!==null){z=z.shared;var Y=z.pending;Y===null?k.next=k:(k.next=Y.next,Y.next=k),z.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Nh(m.return,a,s),S.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Nh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Wt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,ho(s,a),d=Tn(d),c=c(d),s.flags|=1,Wt(n,s,c,a),s.child;case 14:return c=s.type,d=Un(c,s.pendingProps),d=Un(c.type,d),Gm(n,s,c,d,a);case 15:return Km(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),gu(n,s),s.tag=1,Xt(c)?(n=!0,Jl(s)):n=!1,ho(s,a),Fm(s,c,d),Gh(s,c,d,a),Xh(null,s,c,!0,n,a);case 19:return ng(n,s,a);case 22:return Qm(n,s,a)}throw Error(t(156,s.tag))};function xg(n,s){return ji(n,s)}function wE(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(n,s,a,c){return new wE(n,s,a,c)}function yd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function EE(n){if(typeof n=="function")return yd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===ft)return 14}return 2}function ps(n,s){var a=n.alternate;return a===null?(a=An(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Cu(n,s,a,c,d,m){var v=2;if(c=n,typeof n=="function")yd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return ui(a.children,d,m,s);case A:v=8,d|=8;break;case R:return n=An(12,a,s,d|2),n.elementType=R,n.lanes=m,n;case C:return n=An(13,a,s,d),n.elementType=C,n.lanes=m,n;case Fe:return n=An(19,a,s,d),n.elementType=Fe,n.lanes=m,n;case Ue:return Ru(a,d,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case b:v=9;break e;case O:v=11;break e;case ft:v=14;break e;case st:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=An(v,a,s,d),s.elementType=n,s.type=c,s.lanes=m,s}function ui(n,s,a,c){return n=An(7,n,c,s),n.lanes=a,n}function Ru(n,s,a,c){return n=An(22,n,c,s),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function _d(n,s,a){return n=An(6,n,null,s),n.lanes=a,n}function vd(n,s,a){return s=An(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function TE(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function wd(n,s,a,c,d,m,v,S,k){return n=new TE(n,s,a,S,k),s===1?(s=1,m===!0&&(s|=8)):s=0,m=An(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(m),n}function IE(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function Cg(n){if(!n)return is;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xt(a))return tm(n,a,s)}return s}function Rg(n,s,a,c,d,m,v,S,k){return n=wd(a,c,!0,n,d,m,v,S,k),n.context=Cg(null),a=n.current,c=Gt(),d=ds(a),m=Pr(c,d),m.callback=s??null,ls(a,m,d),n.current.lanes=d,Yr(n,d,c),en(n,c),n}function ku(n,s,a,c){var d=s.current,m=Gt(),v=ds(d);return a=Cg(a),s.context===null?s.context=a:s.pendingContext=a,s=Pr(m,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ls(d,s,v),n!==null&&($n(n,d,v,m),ou(n,d,v)),v}function Pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function Ed(n,s){kg(n,s),(n=n.alternate)&&kg(n,s)}function SE(){return null}var Pg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Td(n){this._internalRoot=n}Nu.prototype.render=Td.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));ku(n,s,null,null)},Nu.prototype.unmount=Td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;oi(function(){ku(null,n,null,null)}),s[Ar]=null}};function Nu(n){this._internalRoot=n}Nu.prototype.unstable_scheduleHydration=function(n){if(n){var s=Nl();n={blockedOn:null,target:n,priority:s};for(var a=0;a<Xn.length&&s!==0&&s<Xn[a].priority;a++);Xn.splice(a,0,n),a===0&&Vl(n)}};function Id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function AE(n,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var z=Pu(v);m.call(z)}}var v=Rg(s,c,n,0,null,!1,!1,"",Ng);return n._reactRootContainer=v,n[Ar]=v.current,wa(n.nodeType===8?n.parentNode:n),oi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var z=Pu(k);S.call(z)}}var k=wd(n,0,!1,null,null,!1,!1,"",Ng);return n._reactRootContainer=k,n[Ar]=k.current,wa(n.nodeType===8?n.parentNode:n),oi(function(){ku(s,k,a,c)}),k}function bu(n,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var S=d;d=function(){var k=Pu(v);S.call(k)}}ku(s,v,n,d)}else v=AE(a,s,n,d,c);return Pu(v)}kl=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Kr(s.pendingLanes);a!==0&&(Xr(s,a|1),en(s,We()),(Oe&6)===0&&(yo=We()+500,os()))}break;case 13:oi(function(){var c=kr(n,1);if(c!==null){var d=Gt();$n(c,n,1,d)}}),Ed(n,1)}},zi=function(n){if(n.tag===13){var s=kr(n,134217728);if(s!==null){var a=Gt();$n(s,n,134217728,a)}Ed(n,134217728)}},Pl=function(n){if(n.tag===13){var s=ds(n),a=kr(n,s);if(a!==null){var c=Gt();$n(a,n,s,c)}Ed(n,s)}},Nl=function(){return Ne},Dl=function(n,s){var a=Ne;try{return Ne=n,s()}finally{Ne=a}},Di=function(n,s,a){switch(s){case"input":if(Ho(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Yl(c);if(!d)throw Error(t(90));xi(c),Ho(c,d)}}}break;case"textarea":Pi(n,a);break;case"select":s=a.value,s!=null&&yr(n,!!a.multiple,s,!1)}},Us=pd,ta=oi;var xE={usingClientEntryPoint:!1,Events:[Ia,ro,Yl,Qn,ea,pd]},La={findFiberByHostInstance:Js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CE={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=sa(n),n===null?null:n.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||SE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Hs=Vu.inject(CE),an=Vu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE,tn.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(s))throw Error(t(200));return IE(n,s,null,a)},tn.createRoot=function(n,s){if(!Id(n))throw Error(t(299));var a=!1,c="",d=Pg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=wd(n,1,!1,null,null,a,!1,c,d),n[Ar]=s.current,wa(n.nodeType===8?n.parentNode:n),new Td(s)},tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=sa(s),n=n===null?null:n.stateNode,n},tn.flushSync=function(n){return oi(n)},tn.hydrate=function(n,s,a){if(!Du(s))throw Error(t(200));return bu(null,n,s,!0,a)},tn.hydrateRoot=function(n,s,a){if(!Id(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Pg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Rg(s,null,n,1,a??null,d,!1,m,v),n[Ar]=s.current,wa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Nu(s)},tn.render=function(n,s,a){if(!Du(s))throw Error(t(200));return bu(null,n,s,!1,a)},tn.unmountComponentAtNode=function(n){if(!Du(n))throw Error(t(40));return n._reactRootContainer?(oi(function(){bu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ar]=null})}),!0):!1},tn.unstable_batchedUpdates=pd,tn.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return bu(n,s,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var Fg;function ME(){if(Fg)return xd.exports;Fg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xd.exports=OE(),xd.exports}var Ug;function LE(){if(Ug)return Ou;Ug=1;var r=ME();return Ou.createRoot=r.createRoot,Ou.hydrateRoot=r.hydrateRoot,Ou}var jE=LE();/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var FE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ct=(r,e)=>{const t=ye.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:h,className:f="",children:g,..._},T)=>ye.createElement("svg",{ref:T,...FE,width:o,height:o,stroke:i,strokeWidth:h?Number(u)*24/Number(o):u,className:["lucide",`lucide-${UE(r)}`,f].join(" "),..._},[...e.map(([x,I])=>ye.createElement(x,I)),...Array.isArray(g)?g:[g]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=Ct("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=Ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=Ct("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Ct("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=Ct("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=Ct("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=Ct("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=Ct("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Ct("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Ct("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=Ct("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=Ct("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=Ct("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=Ct("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=Ct("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=Ct("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=Ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),br=[{id:"1",name:"Tiago Dutra",email:"tiago@dominus.com",avatar:"TD",color:"bg-blue-500"},{id:"2",name:"Otávio Laplechade",email:"otavio@dominus.com",avatar:"OL",color:"bg-purple-500"},{id:"3",name:"João Braziliano",email:"joao@dominus.com",avatar:"JB",color:"bg-green-500"}],QE=({onLogin:r})=>{const[e,t]=ye.useState(""),[i,o]=ye.useState(""),[u,h]=ye.useState(""),f=g=>{if(g.preventDefault(),!e){h("Selecione um usuário");return}const _=br.find(x=>x.id===e);if(!_){h("Usuário não encontrado");return}if(i!=={1:"tiago123",2:"otavio123",3:"joao123"}[e]){h("Senha incorreta");return}r(_)};return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:w.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl",children:[w.jsxs("div",{className:"text-center mb-8",children:[w.jsx("div",{className:"flex items-center justify-center mb-4",children:w.jsx("img",{src:"/AgendaDominus/DominusClear.png",alt:"Dominus Logo",className:"w-16 h-16"})}),w.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Dominus"}),w.jsx("p",{className:"text-purple-200",children:"Sistema de Agenda"})]}),w.jsxs("form",{onSubmit:f,className:"space-y-6",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-white mb-3",children:"Selecionar Usuário"}),w.jsx("div",{className:"space-y-2",children:br.map(g=>w.jsxs("label",{className:"flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors border border-white/10",children:[w.jsx("input",{type:"radio",name:"user",value:g.id,checked:e===g.id,onChange:_=>t(_.target.value),className:"sr-only"}),w.jsx("div",{className:`w-10 h-10 rounded-full ${g.color} flex items-center justify-center text-white font-bold mr-3`,children:g.avatar}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-medium",children:g.name}),w.jsx("p",{className:"text-purple-200 text-sm",children:g.email})]}),e===g.id&&w.jsx("div",{className:"ml-auto",children:w.jsx("div",{className:"w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center",children:w.jsx("div",{className:"w-2 h-2 bg-white rounded-full"})})})]},g.id))})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-white mb-2",children:"Senha"}),w.jsx("input",{type:"password",value:i,onChange:g=>o(g.target.value),className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Digite sua senha"})]}),u&&w.jsx("div",{className:"bg-red-500/20 border border-red-500/50 rounded-lg p-3",children:w.jsx("p",{className:"text-red-200 text-sm",children:u})}),w.jsxs("button",{type:"submit",className:"w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 flex items-center justify-center",children:[w.jsx($E,{className:"h-5 w-5 mr-2"}),"Entrar no Dominus"]})]})]})})},YE=({currentUser:r,selectedDate:e,onClose:t,onSave:i})=>{const[o,u]=ye.useState(""),[h,f]=ye.useState(""),[g,_]=ye.useState(e),[T,x]=ye.useState(""),[I,F]=ye.useState("meeting"),[$,q]=ye.useState("presencial"),[j,Z]=ye.useState(""),re=se=>{if(se.preventDefault(),!o.trim()||!T.trim())return;const we={title:o.trim(),description:h.trim(),date:g,time:T,userId:r.id,type:I,location:{type:$,value:j.trim()||($==="online"?"Online":"A definir")}};i(we)};return w.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:w.jsxs("div",{className:"bg-white rounded-xl w-full max-w-sm shadow-xl",children:[w.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-100",children:[w.jsx("h2",{className:"text-lg font-bold text-gray-900",children:"Novo Evento"}),w.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:w.jsx(Tf,{className:"h-5 w-5"})})]}),w.jsxs("form",{onSubmit:re,className:"p-4 space-y-4",children:[w.jsxs("div",{children:[w.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[w.jsx(C_,{className:"h-4 w-4 inline mr-1"}),"Título"]}),w.jsx("input",{type:"text",value:o,onChange:se=>u(se.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Digite o título do evento",required:!0})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Descrição"}),w.jsx("textarea",{value:h,onChange:se=>f(se.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none",rows:3,placeholder:"Descrição opcional do evento"})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[w.jsx(Ja,{className:"h-4 w-4 inline mr-1"}),"Data"]}),w.jsx("input",{type:"date",value:g,onChange:se=>_(se.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"})]}),w.jsxs("div",{children:[w.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[w.jsx(Ro,{className:"h-4 w-4 inline mr-1"}),"Horário"]}),w.jsx("input",{type:"time",value:T,onChange:se=>x(se.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:!0})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Local do Evento"}),w.jsxs("div",{className:"space-y-3",children:[w.jsxs("div",{className:"flex space-x-4",children:[w.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[w.jsx("input",{type:"radio",name:"locationType",value:"presencial",checked:$==="presencial",onChange:se=>q(se.target.value),className:"text-purple-600 focus:ring-purple-500"}),w.jsx("span",{className:"text-sm text-gray-700",children:"Presencial"})]}),w.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[w.jsx("input",{type:"radio",name:"locationType",value:"online",checked:$==="online",onChange:se=>q(se.target.value),className:"text-purple-600 focus:ring-purple-500"}),w.jsx("span",{className:"text-sm text-gray-700",children:"Online"})]})]}),w.jsx("input",{type:"text",value:j,onChange:se=>Z(se.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:$==="presencial"?"Digite o endereço do local":"Digite o link da reunião"})]})]}),w.jsxs("div",{children:[w.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[w.jsx(P_,{className:"h-4 w-4 inline mr-1"}),"Tipo de Evento"]}),w.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[w.jsx("button",{type:"button",onClick:()=>F("meeting"),className:`p-3 rounded-lg border-2 transition-all ${I==="meeting"?"border-blue-500 bg-blue-50 text-blue-700":"border-gray-200 text-gray-600 hover:border-blue-300"}`,children:w.jsx("div",{className:"text-center",children:w.jsx("div",{className:"font-medium text-sm",children:"Reunião"})})}),w.jsx("button",{type:"button",onClick:()=>F("task"),className:`p-3 rounded-lg border-2 transition-all ${I==="task"?"border-green-500 bg-green-50 text-green-700":"border-gray-200 text-gray-600 hover:border-green-300"}`,children:w.jsx("div",{className:"text-center",children:w.jsx("div",{className:"font-medium text-sm",children:"Tarefa"})})}),w.jsx("button",{type:"button",onClick:()=>F("reminder"),className:`p-3 rounded-lg border-2 transition-all ${I==="reminder"?"border-yellow-500 bg-yellow-50 text-yellow-700":"border-gray-200 text-gray-600 hover:border-yellow-300"}`,children:w.jsx("div",{className:"text-center",children:w.jsx("div",{className:"font-medium text-sm",children:"Lembrete"})})})]})]}),w.jsxs("div",{className:"flex space-x-3 pt-3",children:[w.jsx("button",{type:"button",onClick:t,className:"flex-1 px-3 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium",children:"Cancelar"}),w.jsx("button",{type:"submit",className:"flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium",children:"Salvar Evento"})]})]})]})})},XE=({event:r,currentUser:e,onClose:t,onDelete:i})=>{const[o,u]=ye.useState(!1),h=br.find(I=>I.id===r.userId),f=e.id===r.userId,g=()=>{i&&(i(r.id),t())},_=I=>new Date(I).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),T=I=>{switch(I){case"meeting":return"Reunião";case"task":return"Tarefa";case"reminder":return"Lembrete";default:return I}},x=I=>{switch(I){case"meeting":return"bg-blue-100 text-blue-800";case"task":return"bg-green-100 text-green-800";case"reminder":return"bg-yellow-100 text-yellow-800";default:return"bg-gray-100 text-gray-800"}};return w.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:w.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md shadow-2xl",children:[w.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-100",children:[w.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Detalhes do Evento"}),w.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:w.jsx(Tf,{className:"h-6 w-6"})})]}),w.jsxs("div",{className:"p-6 space-y-6",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[w.jsx(C_,{className:"h-5 w-5 text-purple-600"}),w.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:r.title})]}),w.jsxs("span",{className:`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${x(r.type)}`,children:[w.jsx(P_,{className:"h-3 w-3 mr-1"}),T(r.type)]})]}),r.description&&w.jsx("div",{children:w.jsx("p",{className:"text-gray-600",children:r.description})}),w.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx(Ja,{className:"h-5 w-5 text-purple-600"}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:"Data"}),w.jsx("p",{className:"text-gray-600 capitalize",children:_(r.date)})]})]}),w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx(Ro,{className:"h-5 w-5 text-purple-600"}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:"Horário"}),w.jsx("p",{className:"text-gray-600",children:r.time})]})]})]}),r.location&&w.jsxs("div",{className:"flex items-start space-x-3",children:[r.location.type==="presencial"?w.jsx(k_,{className:"h-5 w-5 text-purple-600 mt-0.5"}):w.jsx(R_,{className:"h-5 w-5 text-purple-600 mt-0.5"}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:r.location.type==="presencial"?"Local":"Link da Reunião"}),r.location.type==="online"?w.jsx("a",{href:r.location.value,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline break-all",children:r.location.value}):w.jsx("p",{className:"text-gray-600",children:r.location.value})]})]}),w.jsxs("div",{className:"flex items-center space-x-3 pt-4 border-t border-gray-100",children:[w.jsx(KE,{className:"h-5 w-5 text-purple-600"}),w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("div",{className:`w-8 h-8 rounded-full ${h?.color} flex items-center justify-center text-white font-bold text-sm`,children:h?.avatar}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:"Criado por"}),w.jsx("p",{className:"text-gray-600",children:h?.name})]})]})]}),o?w.jsxs("div",{className:"space-y-3",children:[w.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3",children:w.jsx("p",{className:"text-red-800 text-sm text-center",children:"Tem certeza que deseja excluir este evento?"})}),w.jsxs("div",{className:"flex space-x-3",children:[w.jsx("button",{onClick:()=>u(!1),className:"flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium",children:"Cancelar"}),w.jsx("button",{onClick:g,className:"flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium",children:"Excluir"})]})]}):w.jsxs("div",{className:"space-y-3",children:[f&&w.jsxs("button",{onClick:()=>u(!0),className:"w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center",children:[w.jsx(GE,{className:"h-4 w-4 mr-2"}),"Excluir Evento"]}),w.jsx("button",{onClick:t,className:"w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium",children:"Fechar"})]})]})]})})},JE=({programmer:r,session:e,onClose:t})=>{const i=g=>new Date(g).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),o=g=>{const _=new Date(g),x=new Date().getTime()-_.getTime(),I=Math.floor(x/(1e3*60*60)),F=Math.floor(x%(1e3*60*60)/(1e3*60)),$=Math.floor(x%(1e3*60)/1e3);return{hours:I,minutes:F,seconds:$}},[u,h]=nc.useState(new Date);nc.useEffect(()=>{const g=setInterval(()=>{h(new Date)},1e3);return()=>clearInterval(g)},[]);const f=o(e.startTime);return w.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:w.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md shadow-2xl",children:[w.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-100",children:[w.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Sessão de Desenvolvimento"}),w.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:w.jsx(Tf,{className:"h-6 w-6"})})]}),w.jsxs("div",{className:"p-6 space-y-6",children:[w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:`w-20 h-20 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`,children:r.avatar}),w.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:r.name}),w.jsxs("div",{className:"flex items-center justify-center space-x-2 text-green-600",children:[w.jsx(qd,{className:"h-5 w-5"}),w.jsx("span",{className:"font-medium",children:"Desenvolvendo"}),w.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"})]})]}),w.jsxs("div",{className:"bg-gray-50 rounded-xl p-4 space-y-4",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center space-x-2 text-gray-600",children:[w.jsx(Hd,{className:"h-4 w-4"}),w.jsx("span",{className:"font-medium",children:"Iniciado às"})]}),w.jsx("span",{className:"font-mono text-gray-900",children:i(e.startTime)})]}),w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center space-x-2 text-gray-600",children:[w.jsx(Ro,{className:"h-4 w-4"}),w.jsx("span",{className:"font-medium",children:"Duração"})]}),w.jsxs("span",{className:"font-mono text-gray-900 text-lg",children:[String(f.hours).padStart(2,"0"),":",String(f.minutes).padStart(2,"0"),":",String(f.seconds).padStart(2,"0")]})]}),w.jsx("div",{className:"border-t border-gray-200 pt-4",children:w.jsxs("div",{className:"text-center",children:[w.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Horário atual"}),w.jsx("p",{className:"font-mono text-xl text-gray-900",children:u.toLocaleTimeString("pt-BR")})]})})]}),w.jsx("div",{className:"text-center",children:w.jsxs("div",{className:"inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full",children:[w.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),w.jsx("span",{className:"text-sm font-medium",children:"Sessão ativa"})]})}),w.jsx("button",{onClick:t,className:"w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium",children:"Entendi"})]})]})})},ZE=({events:r,selectedDate:e,onDateSelect:t,onEventClick:i})=>{const[o,u]=nc.useState(new Date),[h,f]=nc.useState({}),g=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],_=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],T=j=>{const Z=j.getFullYear(),re=j.getMonth(),se=new Date(Z,re,1),Ie=new Date(Z,re+1,0).getDate(),xe=se.getDay(),N=[];for(let R=xe-1;R>=0;R--){const P=new Date(Z,re,-R);N.push({date:P,isCurrentMonth:!1,dateString:P.toISOString().split("T")[0]})}for(let R=1;R<=Ie;R++){const P=new Date(Z,re,R);N.push({date:P,isCurrentMonth:!0,dateString:P.toISOString().split("T")[0]})}const A=42-N.length;for(let R=1;R<=A;R++){const P=new Date(Z,re+1,R);N.push({date:P,isCurrentMonth:!1,dateString:P.toISOString().split("T")[0]})}return N},x=j=>{u(Z=>{const re=new Date(Z);return j==="prev"?re.setMonth(Z.getMonth()-1):re.setMonth(Z.getMonth()+1),re})},I=j=>r.filter(Z=>Z.date===j),F=T(o),$=new Date().toISOString().split("T")[0];return F.map(j=>j.dateString).every(j=>h[j]),w.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100",children:[w.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-100",children:[w.jsxs("div",{className:"flex items-center space-x-4",children:[w.jsx(Ja,{className:"h-6 w-6 text-purple-600"}),w.jsxs("h2",{className:"text-xl font-bold text-gray-900",children:[g[o.getMonth()]," ",o.getFullYear()]})]}),w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("button",{onClick:()=>x("prev"),className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:w.jsx(zE,{className:"h-5 w-5 text-gray-600"})}),w.jsx("button",{onClick:()=>{u(new Date),t(new Date().toISOString().split("T")[0])},className:"px-3 py-1 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors",children:"Hoje"}),w.jsx("button",{onClick:()=>x("next"),className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:w.jsx(BE,{className:"h-5 w-5 text-gray-600"})})]})]}),w.jsx("div",{className:"p-6 pb-0",children:w.jsx("div",{className:"grid grid-cols-7 gap-1 mb-4",children:_.map(j=>w.jsx("div",{className:"p-2 text-center text-sm font-medium text-gray-500",children:j},j))})}),w.jsx("div",{className:"p-6",children:w.jsx("div",{className:"grid grid-cols-7 gap-1",children:F.map((j,Z)=>{const re=I(j.dateString),se=j.dateString===e,we=j.dateString===$;return w.jsxs("div",{onClick:()=>t(j.dateString),className:`min-h-[120px] p-2 border border-gray-100 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${j.isCurrentMonth?"":"bg-gray-50 text-gray-400"} ${se?"ring-2 ring-purple-500 bg-purple-50":""} ${we?"bg-blue-50 border-blue-200":""}`,children:[w.jsx("div",{className:`text-sm font-medium mb-1 ${we?"text-blue-600":j.isCurrentMonth?"text-gray-900":"text-gray-400"}`,children:j.date.getDate()}),w.jsxs("div",{className:"space-y-1",children:[re.slice(0,3).map(Ie=>{const xe=br.find(N=>N.id===Ie.userId);return w.jsx("div",{onClick:N=>{N.stopPropagation(),i(Ie)},className:`text-xs p-2 rounded cursor-pointer hover:opacity-80 min-h-[60px] ${Ie.type==="meeting"?"bg-blue-100 text-blue-800":Ie.type==="task"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,title:`${Ie.title} - ${Ie.time}`,children:w.jsxs("div",{className:"flex flex-col gap-1 h-full",children:[w.jsxs("div",{className:"flex items-center space-x-1",children:[w.jsx("div",{className:`w-2 h-2 rounded-full ${xe?.color} flex-shrink-0`}),w.jsx("span",{className:"font-semibold text-xs leading-tight",children:Ie.title})]}),w.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-gray-600",children:[w.jsx(Ro,{className:"w-3 h-3"}),w.jsx("span",{children:Ie.time})]}),Ie.location?.type&&w.jsx("div",{className:"mt-1",children:w.jsx("span",{className:`px-1.5 py-0.5 rounded text-white text-[10px] font-medium ${Ie.location.type==="presencial"?"bg-purple-500":"bg-blue-500"}`,children:Ie.location.type==="presencial"?"Presencial":"Online"})})]})},Ie.id)}),re.length>3&&w.jsxs("div",{className:"text-xs text-gray-500 text-center",children:["+",re.length-3," mais"]})]})]},Z)})})})]})},eT=()=>{};var Bg={};/**
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
 */const N_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},tT=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[i++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},D_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,T=u>>2,x=(u&3)<<4|f>>4;let I=(f&15)<<2|_>>6,F=_&63;g||(F=64,h||(I=64)),i.push(t[T],t[x],t[I],t[F])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(N_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):tT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const x=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||f==null||_==null||x==null)throw new nT;const I=u<<2|f>>4;if(i.push(I),_!==64){const F=f<<4&240|_>>2;if(i.push(F),x!==64){const $=_<<6&192|x;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class nT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rT=function(r){const e=N_(r);return D_.encodeByteArray(e,!0)},rc=function(r){return rT(r).replace(/\./g,"")},b_=function(r){try{return D_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iT=()=>sT().__FIREBASE_DEFAULTS__,oT=()=>{if(typeof process>"u"||typeof Bg>"u")return;const r=Bg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},aT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&b_(r[1]);return e&&JSON.parse(e)},Sc=()=>{try{return eT()||iT()||oT()||aT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},V_=r=>Sc()?.emulatorHosts?.[r],lT=r=>{const e=V_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},O_=()=>Sc()?.config,M_=r=>Sc()?.[`_${r}`];/**
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
 */class uT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Mo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function L_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function cT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[rc(JSON.stringify(t)),rc(JSON.stringify(h)),""].join(".")}const Ha={};function hT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ha))Ha[e]?r.emulator.push(e):r.prod.push(e);return r}function dT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let $g=!1;function j_(r,e){if(typeof window>"u"||typeof document>"u"||!Mo(window.location.host)||Ha[r]===e||Ha[r]||$g)return;Ha[r]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",u=hT().prod.length>0;function h(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,F){I.setAttribute("width","24"),I.setAttribute("id",F),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function _(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{$g=!0,h()},I}function T(I,F){I.setAttribute("id",F),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function x(){const I=dT(i),F=t("text"),$=document.getElementById(F)||document.createElement("span"),q=t("learnmore"),j=document.getElementById(q)||document.createElement("a"),Z=t("preprendIcon"),re=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const se=I.element;f(se),T(j,q);const we=_();g(re,Z),se.append(re,$,j,we),document.body.appendChild(se)}u?($.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function pT(){const r=Sc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function gT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yT(){const r=$t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function _T(){return!pT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function U_(){try{return typeof indexedDB=="object"}catch{return!1}}function z_(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}function vT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const wT="FirebaseError";class Gn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=wT,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?ET(u,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Gn(o,f,i)}}function ET(r,e){return r.replace(TT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const TT=/\{\$([^}]+)}/g;function IT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function xs(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const u=r[o],h=e[o];if(qg(u)&&qg(h)){if(!xs(u,h))return!1}else if(u!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function qg(r){return r!==null&&typeof r=="object"}/**
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
 */function cl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ST(r,e){const t=new AT(r,e);return t.subscribe.bind(t)}class AT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");xT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=kd),o.error===void 0&&(o.error=kd),o.complete===void 0&&(o.complete=kd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function kd(){}/**
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
 */const CT=1e3,RT=2,kT=14400*1e3,PT=.5;function Hg(r,e=CT,t=RT){const i=e*Math.pow(t,r),o=Math.round(PT*i*(Math.random()-.5)*2);return Math.min(kT,i+o)}/**
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
 */function xt(r){return r&&r._delegate?r._delegate:r}class Hn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hi="[DEFAULT]";/**
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
 */class NT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new uT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bT(e))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});i.resolve(u)}catch{}}}}clearInstance(e=hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hi){return this.instances.has(e)}getOptions(e=hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[u,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&e(u,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:DT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hi){return this.component?this.component.multipleInstances?e:hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DT(r){return r===hi?void 0:r}function bT(r){return r.instantiationMode==="EAGER"}/**
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
 */class VT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new NT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Re||(Re={}));const OT={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},MT=Re.INFO,LT={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},jT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=LT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=MT,this._logHandler=jT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const FT=(r,e)=>e.some(t=>r instanceof t);let Wg,Gg;function UT(){return Wg||(Wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zT(){return Gg||(Gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B_=new WeakMap,Wd=new WeakMap,$_=new WeakMap,Pd=new WeakMap,If=new WeakMap;function BT(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(Ts(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&B_.set(t,r)}).catch(()=>{}),If.set(e,r),e}function $T(r){if(Wd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Wd.set(r,e)}let Gd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Wd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||$_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ts(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function qT(r){Gd=r(Gd)}function HT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Nd(this),e,...t);return $_.set(i,e.sort?e.sort():[e]),Ts(i)}:zT().includes(r)?function(...e){return r.apply(Nd(this),e),Ts(B_.get(this))}:function(...e){return Ts(r.apply(Nd(this),e))}}function WT(r){return typeof r=="function"?HT(r):(r instanceof IDBTransaction&&$T(r),FT(r,UT())?new Proxy(r,Gd):r)}function Ts(r){if(r instanceof IDBRequest)return BT(r);if(Pd.has(r))return Pd.get(r);const e=WT(r);return e!==r&&(Pd.set(r,e),If.set(e,r)),e}const Nd=r=>If.get(r);function q_(r,e,{blocked:t,upgrade:i,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),f=Ts(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ts(h.result),g.oldVersion,g.newVersion,Ts(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const GT=["get","getKey","getAll","getAllKeys","count"],KT=["put","add","delete","clear"],Dd=new Map;function Kg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=KT.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||GT.includes(t)))return;const u=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Dd.set(e,u),u}qT(r=>({...r,get:(e,t,i)=>Kg(e,t)||r.get(e,t,i),has:(e,t)=>!!Kg(e,t)||r.has(e,t)}));/**
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
 */class QT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(YT(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function YT(r){return r.getComponent()?.type==="VERSION"}const Kd="@firebase/app",Qg="0.14.1";/**
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
 */const Fr=new Ac("@firebase/app"),XT="@firebase/app-compat",JT="@firebase/analytics-compat",ZT="@firebase/analytics",eI="@firebase/app-check-compat",tI="@firebase/app-check",nI="@firebase/auth",rI="@firebase/auth-compat",sI="@firebase/database",iI="@firebase/data-connect",oI="@firebase/database-compat",aI="@firebase/functions",lI="@firebase/functions-compat",uI="@firebase/installations",cI="@firebase/installations-compat",hI="@firebase/messaging",dI="@firebase/messaging-compat",fI="@firebase/performance",pI="@firebase/performance-compat",mI="@firebase/remote-config",gI="@firebase/remote-config-compat",yI="@firebase/storage",_I="@firebase/storage-compat",vI="@firebase/firestore",wI="@firebase/ai",EI="@firebase/firestore-compat",TI="firebase",II="12.1.0";/**
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
 */const Qd="[DEFAULT]",SI={[Kd]:"fire-core",[XT]:"fire-core-compat",[ZT]:"fire-analytics",[JT]:"fire-analytics-compat",[tI]:"fire-app-check",[eI]:"fire-app-check-compat",[nI]:"fire-auth",[rI]:"fire-auth-compat",[sI]:"fire-rtdb",[iI]:"fire-data-connect",[oI]:"fire-rtdb-compat",[aI]:"fire-fn",[lI]:"fire-fn-compat",[uI]:"fire-iid",[cI]:"fire-iid-compat",[hI]:"fire-fcm",[dI]:"fire-fcm-compat",[fI]:"fire-perf",[pI]:"fire-perf-compat",[mI]:"fire-rc",[gI]:"fire-rc-compat",[yI]:"fire-gcs",[_I]:"fire-gcs-compat",[vI]:"fire-fst",[EI]:"fire-fst-compat",[wI]:"fire-vertex","fire-js":"fire-js",[TI]:"fire-js-all"};/**
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
 */const sc=new Map,AI=new Map,Yd=new Map;function Yg(r,e){try{r.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function fr(r){const e=r.name;if(Yd.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;Yd.set(e,r);for(const t of sc.values())Yg(t,r);for(const t of AI.values())Yg(t,r);return!0}function Ii(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function or(r){return r==null?!1:r.settings!==void 0}/**
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
 */const xI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Is=new Ti("app","Firebase",xI);/**
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
 */class CI{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
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
 */const Lo=II;function H_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Qd,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Is.create("bad-app-name",{appName:String(o)});if(t||(t=O_()),!t)throw Is.create("no-options");const u=sc.get(o);if(u){if(xs(t,u.options)&&xs(i,u.config))return u;throw Is.create("duplicate-app",{appName:o})}const h=new VT(o);for(const g of Yd.values())h.addComponent(g);const f=new CI(t,i,h);return sc.set(o,f),f}function Sf(r=Qd){const e=sc.get(r);if(!e&&r===Qd&&O_())return H_();if(!e)throw Is.create("no-app",{appName:r});return e}function Cn(r,e,t){let i=SI[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(h.join(" "));return}fr(new Hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const RI="firebase-heartbeat-database",kI=1,Za="firebase-heartbeat-store";let bd=null;function W_(){return bd||(bd=q_(RI,kI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Za)}catch(t){console.warn(t)}}}}).catch(r=>{throw Is.create("idb-open",{originalErrorMessage:r.message})})),bd}async function PI(r){try{const t=(await W_()).transaction(Za),i=await t.objectStore(Za).get(G_(r));return await t.done,i}catch(e){if(e instanceof Gn)Fr.warn(e.message);else{const t=Is.create("idb-get",{originalErrorMessage:e?.message});Fr.warn(t.message)}}}async function Xg(r,e){try{const i=(await W_()).transaction(Za,"readwrite");await i.objectStore(Za).put(e,G_(r)),await i.done}catch(t){if(t instanceof Gn)Fr.warn(t.message);else{const i=Is.create("idb-set",{originalErrorMessage:t?.message});Fr.warn(i.message)}}}function G_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const NI=1024,DI=30;class bI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new OI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>DI){const o=MI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Fr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jg(),{heartbeatsToSend:t,unsentEntries:i}=VI(this._heartbeatsCache.heartbeats),o=rc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Fr.warn(e),""}}}function Jg(){return new Date().toISOString().substring(0,10)}function VI(r,e=NI){const t=[];let i=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Zg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Zg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class OI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U_()?z_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await PI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zg(r){return rc(JSON.stringify({version:2,heartbeats:r})).length}function MI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function LI(r){fr(new Hn("platform-logger",e=>new QT(e),"PRIVATE")),fr(new Hn("heartbeat",e=>new bI(e),"PRIVATE")),Cn(Kd,Qg,r),Cn(Kd,Qg,"esm2020"),Cn("fire-js","")}LI("");var ey=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ss,K_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,A){function R(){}R.prototype=A.prototype,N.D=A.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(P,b,O){for(var C=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)C[Fe-2]=arguments[Fe];return A.prototype[b].apply(P,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,A,R){R||(R=0);var P=Array(16);if(typeof A=="string")for(var b=0;16>b;++b)P[b]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(b=0;16>b;++b)P[b]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=N.g[0],R=N.g[1],b=N.g[2];var O=N.g[3],C=A+(O^R&(b^O))+P[0]+3614090360&4294967295;A=R+(C<<7&4294967295|C>>>25),C=O+(b^A&(R^b))+P[1]+3905402710&4294967295,O=A+(C<<12&4294967295|C>>>20),C=b+(R^O&(A^R))+P[2]+606105819&4294967295,b=O+(C<<17&4294967295|C>>>15),C=R+(A^b&(O^A))+P[3]+3250441966&4294967295,R=b+(C<<22&4294967295|C>>>10),C=A+(O^R&(b^O))+P[4]+4118548399&4294967295,A=R+(C<<7&4294967295|C>>>25),C=O+(b^A&(R^b))+P[5]+1200080426&4294967295,O=A+(C<<12&4294967295|C>>>20),C=b+(R^O&(A^R))+P[6]+2821735955&4294967295,b=O+(C<<17&4294967295|C>>>15),C=R+(A^b&(O^A))+P[7]+4249261313&4294967295,R=b+(C<<22&4294967295|C>>>10),C=A+(O^R&(b^O))+P[8]+1770035416&4294967295,A=R+(C<<7&4294967295|C>>>25),C=O+(b^A&(R^b))+P[9]+2336552879&4294967295,O=A+(C<<12&4294967295|C>>>20),C=b+(R^O&(A^R))+P[10]+4294925233&4294967295,b=O+(C<<17&4294967295|C>>>15),C=R+(A^b&(O^A))+P[11]+2304563134&4294967295,R=b+(C<<22&4294967295|C>>>10),C=A+(O^R&(b^O))+P[12]+1804603682&4294967295,A=R+(C<<7&4294967295|C>>>25),C=O+(b^A&(R^b))+P[13]+4254626195&4294967295,O=A+(C<<12&4294967295|C>>>20),C=b+(R^O&(A^R))+P[14]+2792965006&4294967295,b=O+(C<<17&4294967295|C>>>15),C=R+(A^b&(O^A))+P[15]+1236535329&4294967295,R=b+(C<<22&4294967295|C>>>10),C=A+(b^O&(R^b))+P[1]+4129170786&4294967295,A=R+(C<<5&4294967295|C>>>27),C=O+(R^b&(A^R))+P[6]+3225465664&4294967295,O=A+(C<<9&4294967295|C>>>23),C=b+(A^R&(O^A))+P[11]+643717713&4294967295,b=O+(C<<14&4294967295|C>>>18),C=R+(O^A&(b^O))+P[0]+3921069994&4294967295,R=b+(C<<20&4294967295|C>>>12),C=A+(b^O&(R^b))+P[5]+3593408605&4294967295,A=R+(C<<5&4294967295|C>>>27),C=O+(R^b&(A^R))+P[10]+38016083&4294967295,O=A+(C<<9&4294967295|C>>>23),C=b+(A^R&(O^A))+P[15]+3634488961&4294967295,b=O+(C<<14&4294967295|C>>>18),C=R+(O^A&(b^O))+P[4]+3889429448&4294967295,R=b+(C<<20&4294967295|C>>>12),C=A+(b^O&(R^b))+P[9]+568446438&4294967295,A=R+(C<<5&4294967295|C>>>27),C=O+(R^b&(A^R))+P[14]+3275163606&4294967295,O=A+(C<<9&4294967295|C>>>23),C=b+(A^R&(O^A))+P[3]+4107603335&4294967295,b=O+(C<<14&4294967295|C>>>18),C=R+(O^A&(b^O))+P[8]+1163531501&4294967295,R=b+(C<<20&4294967295|C>>>12),C=A+(b^O&(R^b))+P[13]+2850285829&4294967295,A=R+(C<<5&4294967295|C>>>27),C=O+(R^b&(A^R))+P[2]+4243563512&4294967295,O=A+(C<<9&4294967295|C>>>23),C=b+(A^R&(O^A))+P[7]+1735328473&4294967295,b=O+(C<<14&4294967295|C>>>18),C=R+(O^A&(b^O))+P[12]+2368359562&4294967295,R=b+(C<<20&4294967295|C>>>12),C=A+(R^b^O)+P[5]+4294588738&4294967295,A=R+(C<<4&4294967295|C>>>28),C=O+(A^R^b)+P[8]+2272392833&4294967295,O=A+(C<<11&4294967295|C>>>21),C=b+(O^A^R)+P[11]+1839030562&4294967295,b=O+(C<<16&4294967295|C>>>16),C=R+(b^O^A)+P[14]+4259657740&4294967295,R=b+(C<<23&4294967295|C>>>9),C=A+(R^b^O)+P[1]+2763975236&4294967295,A=R+(C<<4&4294967295|C>>>28),C=O+(A^R^b)+P[4]+1272893353&4294967295,O=A+(C<<11&4294967295|C>>>21),C=b+(O^A^R)+P[7]+4139469664&4294967295,b=O+(C<<16&4294967295|C>>>16),C=R+(b^O^A)+P[10]+3200236656&4294967295,R=b+(C<<23&4294967295|C>>>9),C=A+(R^b^O)+P[13]+681279174&4294967295,A=R+(C<<4&4294967295|C>>>28),C=O+(A^R^b)+P[0]+3936430074&4294967295,O=A+(C<<11&4294967295|C>>>21),C=b+(O^A^R)+P[3]+3572445317&4294967295,b=O+(C<<16&4294967295|C>>>16),C=R+(b^O^A)+P[6]+76029189&4294967295,R=b+(C<<23&4294967295|C>>>9),C=A+(R^b^O)+P[9]+3654602809&4294967295,A=R+(C<<4&4294967295|C>>>28),C=O+(A^R^b)+P[12]+3873151461&4294967295,O=A+(C<<11&4294967295|C>>>21),C=b+(O^A^R)+P[15]+530742520&4294967295,b=O+(C<<16&4294967295|C>>>16),C=R+(b^O^A)+P[2]+3299628645&4294967295,R=b+(C<<23&4294967295|C>>>9),C=A+(b^(R|~O))+P[0]+4096336452&4294967295,A=R+(C<<6&4294967295|C>>>26),C=O+(R^(A|~b))+P[7]+1126891415&4294967295,O=A+(C<<10&4294967295|C>>>22),C=b+(A^(O|~R))+P[14]+2878612391&4294967295,b=O+(C<<15&4294967295|C>>>17),C=R+(O^(b|~A))+P[5]+4237533241&4294967295,R=b+(C<<21&4294967295|C>>>11),C=A+(b^(R|~O))+P[12]+1700485571&4294967295,A=R+(C<<6&4294967295|C>>>26),C=O+(R^(A|~b))+P[3]+2399980690&4294967295,O=A+(C<<10&4294967295|C>>>22),C=b+(A^(O|~R))+P[10]+4293915773&4294967295,b=O+(C<<15&4294967295|C>>>17),C=R+(O^(b|~A))+P[1]+2240044497&4294967295,R=b+(C<<21&4294967295|C>>>11),C=A+(b^(R|~O))+P[8]+1873313359&4294967295,A=R+(C<<6&4294967295|C>>>26),C=O+(R^(A|~b))+P[15]+4264355552&4294967295,O=A+(C<<10&4294967295|C>>>22),C=b+(A^(O|~R))+P[6]+2734768916&4294967295,b=O+(C<<15&4294967295|C>>>17),C=R+(O^(b|~A))+P[13]+1309151649&4294967295,R=b+(C<<21&4294967295|C>>>11),C=A+(b^(R|~O))+P[4]+4149444226&4294967295,A=R+(C<<6&4294967295|C>>>26),C=O+(R^(A|~b))+P[11]+3174756917&4294967295,O=A+(C<<10&4294967295|C>>>22),C=b+(A^(O|~R))+P[2]+718787259&4294967295,b=O+(C<<15&4294967295|C>>>17),C=R+(O^(b|~A))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+A&4294967295,N.g[1]=N.g[1]+(b+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+b&4294967295,N.g[3]=N.g[3]+O&4294967295}i.prototype.u=function(N,A){A===void 0&&(A=N.length);for(var R=A-this.blockSize,P=this.B,b=this.h,O=0;O<A;){if(b==0)for(;O<=R;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<A;)if(P[b++]=N.charCodeAt(O++),b==this.blockSize){o(this,P),b=0;break}}else for(;O<A;)if(P[b++]=N[O++],b==this.blockSize){o(this,P),b=0;break}}this.h=b,this.o+=A},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var A=1;A<N.length-8;++A)N[A]=0;var R=8*this.o;for(A=N.length-8;A<N.length;++A)N[A]=R&255,R/=256;for(this.u(N),N=Array(16),A=R=0;4>A;++A)for(var P=0;32>P;P+=8)N[R++]=this.g[A]>>>P&255;return N};function u(N,A){var R=f;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=A(N)}function h(N,A){this.h=A;for(var R=[],P=!0,b=N.length-1;0<=b;b--){var O=N[b]|0;P&&O==A||(R[b]=O,P=!1)}this.g=R}var f={};function g(N){return-128<=N&&128>N?u(N,function(A){return new h([A|0],0>A?-1:0)}):new h([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return x;if(0>N)return j(_(-N));for(var A=[],R=1,P=0;N>=R;P++)A[P]=N/R|0,R*=4294967296;return new h(A,0)}function T(N,A){if(N.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(N.charAt(0)=="-")return j(T(N.substring(1),A));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(A,8)),P=x,b=0;b<N.length;b+=8){var O=Math.min(8,N.length-b),C=parseInt(N.substring(b,b+O),A);8>O?(O=_(Math.pow(A,O)),P=P.j(O).add(_(C))):(P=P.j(R),P=P.add(_(C)))}return P}var x=g(0),I=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(q(this))return-j(this).m();for(var N=0,A=1,R=0;R<this.g.length;R++){var P=this.i(R);N+=(0<=P?P:4294967296+P)*A,A*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if($(this))return"0";if(q(this))return"-"+j(this).toString(N);for(var A=_(Math.pow(N,6)),R=this,P="";;){var b=we(R,A).g;R=Z(R,b.j(A));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=b,$(R))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function $(N){if(N.h!=0)return!1;for(var A=0;A<N.g.length;A++)if(N.g[A]!=0)return!1;return!0}function q(N){return N.h==-1}r.l=function(N){return N=Z(this,N),q(N)?-1:$(N)?0:1};function j(N){for(var A=N.g.length,R=[],P=0;P<A;P++)R[P]=~N.g[P];return new h(R,~N.h).add(I)}r.abs=function(){return q(this)?j(this):this},r.add=function(N){for(var A=Math.max(this.g.length,N.g.length),R=[],P=0,b=0;b<=A;b++){var O=P+(this.i(b)&65535)+(N.i(b)&65535),C=(O>>>16)+(this.i(b)>>>16)+(N.i(b)>>>16);P=C>>>16,O&=65535,C&=65535,R[b]=C<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function Z(N,A){return N.add(j(A))}r.j=function(N){if($(this)||$(N))return x;if(q(this))return q(N)?j(this).j(j(N)):j(j(this).j(N));if(q(N))return j(this.j(j(N)));if(0>this.l(F)&&0>N.l(F))return _(this.m()*N.m());for(var A=this.g.length+N.g.length,R=[],P=0;P<2*A;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var b=0;b<N.g.length;b++){var O=this.i(P)>>>16,C=this.i(P)&65535,Fe=N.i(b)>>>16,ft=N.i(b)&65535;R[2*P+2*b]+=C*ft,re(R,2*P+2*b),R[2*P+2*b+1]+=O*ft,re(R,2*P+2*b+1),R[2*P+2*b+1]+=C*Fe,re(R,2*P+2*b+1),R[2*P+2*b+2]+=O*Fe,re(R,2*P+2*b+2)}for(P=0;P<A;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=A;P<2*A;P++)R[P]=0;return new h(R,0)};function re(N,A){for(;(N[A]&65535)!=N[A];)N[A+1]+=N[A]>>>16,N[A]&=65535,A++}function se(N,A){this.g=N,this.h=A}function we(N,A){if($(A))throw Error("division by zero");if($(N))return new se(x,x);if(q(N))return A=we(j(N),A),new se(j(A.g),j(A.h));if(q(A))return A=we(N,j(A)),new se(j(A.g),A.h);if(30<N.g.length){if(q(N)||q(A))throw Error("slowDivide_ only works with positive integers.");for(var R=I,P=A;0>=P.l(N);)R=Ie(R),P=Ie(P);var b=xe(R,1),O=xe(P,1);for(P=xe(P,2),R=xe(R,2);!$(P);){var C=O.add(P);0>=C.l(N)&&(b=b.add(R),O=C),P=xe(P,1),R=xe(R,1)}return A=Z(N,b.j(A)),new se(b,A)}for(b=x;0<=N.l(A);){for(R=Math.max(1,Math.floor(N.m()/A.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=_(R),C=O.j(A);q(C)||0<C.l(N);)R-=P,O=_(R),C=O.j(A);$(O)&&(O=I),b=b.add(O),N=Z(N,C)}return new se(b,N)}r.A=function(N){return we(this,N).h},r.and=function(N){for(var A=Math.max(this.g.length,N.g.length),R=[],P=0;P<A;P++)R[P]=this.i(P)&N.i(P);return new h(R,this.h&N.h)},r.or=function(N){for(var A=Math.max(this.g.length,N.g.length),R=[],P=0;P<A;P++)R[P]=this.i(P)|N.i(P);return new h(R,this.h|N.h)},r.xor=function(N){for(var A=Math.max(this.g.length,N.g.length),R=[],P=0;P<A;P++)R[P]=this.i(P)^N.i(P);return new h(R,this.h^N.h)};function Ie(N){for(var A=N.g.length+1,R=[],P=0;P<A;P++)R[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(R,N.h)}function xe(N,A){var R=A>>5;A%=32;for(var P=N.g.length-R,b=[],O=0;O<P;O++)b[O]=0<A?N.i(O+R)>>>A|N.i(O+R+1)<<32-A:N.i(O+R);return new h(b,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,K_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=T,Ss=h}).apply(typeof ey<"u"?ey:typeof self<"u"?self:typeof window<"u"?window:{});var Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q_,za,Y_,Wu,Xd,X_,J_,Z_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,y){return l==Array.prototype||l==Object.prototype||(l[p]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mu=="object"&&Mu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(l,p){if(p)e:{var y=i;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}function u(l,p){l instanceof String&&(l+="");var y=0,E=!1,M={next:function(){if(!E&&y<l.length){var B=y++;return{value:p(B,l[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function _(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function T(l,p,y){return l.call.apply(l.bind,arguments)}function x(l,p,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),l.apply(p,M)}}return function(){return l.apply(p,arguments)}}function I(l,p,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:x,I.apply(null,arguments)}function F(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function $(l,p){function y(){}y.prototype=p.prototype,l.aa=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,M,B){for(var te=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)te[Be-2]=arguments[Be];return p.prototype[M].apply(E,te)}}function q(l){const p=l.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function j(l,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const M=l.length||0,B=E.length||0;l.length=M+B;for(let te=0;te<B;te++)l[M+te]=E[te]}else l.push(E)}}class Z{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function re(l){return/^[\s\xa0]*$/.test(l)}function se(){var l=f.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var Ie=se().indexOf("Gecko")!=-1&&!(se().toLowerCase().indexOf("webkit")!=-1&&se().indexOf("Edge")==-1)&&!(se().indexOf("Trident")!=-1||se().indexOf("MSIE")!=-1)&&se().indexOf("Edge")==-1;function xe(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function N(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function A(l){const p={};for(const y in l)p[y]=l[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let B=0;B<R.length;B++)y=R[B],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function b(l){var p=1;l=l.split(":");const y=[];for(;0<p&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function O(l){f.setTimeout(()=>{throw l},0)}function C(){var l=K;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class Fe{constructor(){this.h=this.g=null}add(p,y){const E=ft.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var ft=new Z(()=>new st,l=>l.reset());class st{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,ne=!1,K=new Fe,ee=()=>{const l=f.Promise.resolve(void 0);Ue=()=>{l.then(V)}};var V=()=>{for(var l;l=C();){try{l.h.call(l.g)}catch(y){O(y)}var p=ft;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}ne=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return l})();function Ae(l,p){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(Ie){e:{try{we(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:De[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ae.aa.h.call(this)}}$(Ae,de);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),je=0;function He(l,p,y,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++je,this.da=this.fa=!1}function wt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function mr(l){this.src=l,this.g={},this.h=0}mr.prototype.add=function(l,p,y,E,M){var B=l.toString();l=this.g[B],l||(l=this.g[B]=[],this.h++);var te=Hr(l,p,E,M);return-1<te?(p=l[te],y||(p.fa=!1)):(p=new He(p,this.src,B,!!E,M),p.fa=y,l.push(p)),p};function xi(l,p){var y=p.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,p,void 0),B;(B=0<=M)&&Array.prototype.splice.call(E,M,1),B&&(wt(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Hr(l,p,y,E){for(var M=0;M<l.length;++M){var B=l[M];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==E)return M}return-1}var Ms="closure_lm_"+(1e6*Math.random()|0),Ci={};function qo(l,p,y,E,M){if(Array.isArray(p)){for(var B=0;B<p.length;B++)qo(l,p[B],y,E,M);return null}return y=Go(y),l&&l[Le]?l.K(p,y,_(E)?!!E.capture:!1,M):Ho(l,p,y,!1,E,M)}function Ho(l,p,y,E,M,B){if(!p)throw Error("Invalid event type");var te=_(M)?!!M.capture:!!M,Be=ki(l);if(Be||(l[Ms]=Be=new mr(l)),y=Be.add(p,y,E,te,B),y.proxy)return y;if(E=wl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Se||(M=te),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(yr(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function wl(){function l(y){return p.call(l.src,l.listener,y)}const p=Wo;return l}function Ri(l,p,y,E,M){if(Array.isArray(p))for(var B=0;B<p.length;B++)Ri(l,p[B],y,E,M);else E=_(E)?!!E.capture:!!E,y=Go(y),l&&l[Le]?(l=l.i,p=String(p).toString(),p in l.g&&(B=l.g[p],y=Hr(B,y,E,M),-1<y&&(wt(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete l.g[p],l.h--)))):l&&(l=ki(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Hr(p,y,E,M)),(y=-1<l?p[l]:null)&&gr(y))}function gr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[Le])xi(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(yr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=ki(p))?(xi(y,l),y.h==0&&(y.src=null,p[Ms]=null)):wt(l)}}}function yr(l){return l in Ci?Ci[l]:Ci[l]="on"+l}function Wo(l,p){if(l.da)l=!0;else{p=new Ae(p,this);var y=l.listener,E=l.ha||l.src;l.fa&&gr(l),l=y.call(E,p)}return l}function ki(l){return l=l[Ms],l instanceof mr?l:null}var Pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Go(l){return typeof l=="function"?l:(l[Pi]||(l[Pi]=function(p){return l.handleEvent(p)}),l[Pi])}function pt(){W.call(this),this.i=new mr(this),this.M=this,this.F=null}$(pt,W),pt.prototype[Le]=!0,pt.prototype.removeEventListener=function(l,p,y,E){Ri(this,l,p,y,E)};function mt(l,p){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new de(p,l);else if(p instanceof de)p.target=p.target||l;else{var M=p;p=new de(E,l),P(p,M)}if(M=!0,y)for(var B=y.length-1;0<=B;B--){var te=p.g=y[B];M=_r(te,E,!0,p)&&M}if(te=p.g=l,M=_r(te,E,!0,p)&&M,M=_r(te,E,!1,p)&&M,y)for(B=0;B<y.length;B++)te=p.g=y[B],M=_r(te,E,!1,p)&&M}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var y=l.g[p],E=0;E<y.length;E++)wt(y[E]);delete l.g[p],l.h--}}this.F=null},pt.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},pt.prototype.L=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function _r(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,B=0;B<p.length;++B){var te=p[B];if(te&&!te.da&&te.capture==y){var Be=te.listener,gt=te.ha||te.src;te.fa&&xi(l.i,te),M=Be.call(gt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Ko(l,p,y){if(typeof l=="function")y&&(l=I(l,y));else if(l&&typeof l.handleEvent=="function")l=I(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(l,p||0)}function Wr(l){l.g=Ko(()=>{l.g=null,l.i&&(l.i=!1,Wr(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class Ls extends W{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Wr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(l){W.call(this),this.h=l,this.g={}}$(js,W);var Qo=[];function Yo(l){xe(l.g,function(p,y){this.g.hasOwnProperty(y)&&gr(p)},l),l.g={}}js.prototype.N=function(){js.aa.N.call(this),Yo(this)},js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xo=f.JSON.stringify,Jo=f.JSON.parse,Zo=class{stringify(l){return f.JSON.stringify(l,void 0)}parse(l){return f.JSON.parse(l,void 0)}};function Fs(){}Fs.prototype.h=null;function Ni(l){return l.h||(l.h=l.i())}function Di(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){de.call(this,"d")}$(Kn,de);function bi(){de.call(this,"c")}$(bi,de);var Qn={},ea=null;function Us(){return ea=ea||new pt}Qn.La="serverreachability";function ta(l){de.call(this,Qn.La,l)}$(ta,de);function vr(l){const p=Us();mt(p,new ta(p))}Qn.STAT_EVENT="statevent";function na(l,p){de.call(this,Qn.STAT_EVENT,l),this.stat=p}$(na,de);function it(l){const p=Us();mt(p,new na(p,l))}Qn.Ma="timingevent";function Vi(l,p){de.call(this,Qn.Ma,l),this.size=p}$(Vi,de);function kn(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){l()},p)}function zs(){this.g=!0}zs.prototype.xa=function(){this.g=!1};function Bs(l,p,y,E,M,B){l.info(function(){if(l.g)if(B)for(var te="",Be=B.split("&"),gt=0;gt<Be.length;gt++){var be=Be[gt].split("=");if(1<be.length){var Et=be[0];be=be[1];var lt=Et.split("_");te=2<=lt.length&&lt[1]=="type"?te+(Et+"="+be+"&"):te+(Et+"=redacted&")}}else te=null;else te=B;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+te})}function Oi(l,p,y,E,M,B,te){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+B+" "+te})}function Pn(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Jc(l,y)+(E?" "+E:"")})}function ra(l,p){l.info(function(){return"TIMEOUT: "+p})}zs.prototype.info=function(){};function Jc(l,p){if(!l.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var B=M[0];if(B!="noop"&&B!="stop"&&B!="close")for(var te=1;te<M.length;te++)M[te]=""}}}}return Xo(y)}catch{return p}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},El={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function $s(){}$($s,Fs),$s.prototype.g=function(){return new XMLHttpRequest},$s.prototype.i=function(){return{}},Nn=new $s;function Dn(l,p,y,E){this.j=l,this.i=p,this.l=y,this.R=E||1,this.U=new js(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tl}function Tl(){this.i=null,this.g="",this.h=!1}var sa={},Li={};function ji(l,p,y){l.L=1,l.v=Xr(ln(p)),l.m=y,l.P=!0,ia(l,null)}function ia(l,p){l.F=Date.now(),We(l),l.A=ln(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Zr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new Tl,l.g=Ul(l.j,y?p:null,!l.m),0<l.O&&(l.M=new Ls(I(l.Y,l,l.g),l.O)),p=l.U,y=l.g,E=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Qo[0]=M.toString()),M=Qo);for(var B=0;B<M.length;B++){var te=qo(y,M[B],E||p.handleEvent,!1,p.h||p);if(!te)break;p.g[te.key]=te}p=l.H?A(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),vr(),Bs(l.i,l.u,l.A,l.l,l.R,l.m)}Dn.prototype.ca=function(l){l=l.target;const p=this.M;p&&Qt(l)==3?p.j():this.Y(l)},Dn.prototype.Y=function(l){try{if(l==this.g)e:{const lt=Qt(this.g);var p=this.g.Ba();const vn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||lt!=4||p==7||(p==8||0>=vn?vr(3):vr(2)),qs(this);var y=this.g.Z();this.X=y;t:if(Il(this)){var E=ha(this.g);l="";var M=E.length,B=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),Gr(this);var te="";break t}this.h.i=new f.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,l+=this.h.i.decode(E[p],{stream:!(B&&p==M-1)});E.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,Oi(this.i,this.u,this.A,this.l,this.R,lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,gt=this.g;if((Be=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(Be)){var be=Be;break t}}be=null}if(y=be)Pn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,y);else{this.o=!1,this.s=3,it(12),yn(this),Gr(this);break e}}if(this.P){y=!0;let cn;for(;!this.J&&this.C<te.length;)if(cn=Zc(this,te),cn==Li){lt==4&&(this.s=4,it(14),y=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==sa){this.s=4,it(15),Pn(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else Pn(this.i,this.l,cn,null),oa(this,cn);if(Il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||te.length!=0||this.h.h||(this.s=1,it(16),y=!1),this.o=this.o&&y,!y)Pn(this.i,this.l,te,"[Invalid Chunked Response]"),yn(this),Gr(this);else if(0<te.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),fa(Et),Et.M=!0,it(11))}}else Pn(this.i,this.l,te,null),oa(this,te);lt==4&&yn(this),this.o&&!this.J&&(lt==4?Qi(this.j,this):(this.o=!1,We(this)))}else qi(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),yn(this),Gr(this)}}}catch{}finally{}};function Il(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Zc(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?Li:(y=Number(p.substring(y,E)),isNaN(y)?sa:(E+=1,E+y>p.length?Li:(p=p.slice(E,E+y),l.C=E+y,p)))}Dn.prototype.cancel=function(){this.J=!0,yn(this)};function We(l){l.S=Date.now()+l.I,Sl(l,l.I)}function Sl(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=kn(I(l.ba,l),p)}function qs(l){l.B&&(f.clearTimeout(l.B),l.B=null)}Dn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ra(this.i,this.A),this.L!=2&&(vr(),it(17)),yn(this),this.s=2,Gr(this)):Sl(this,this.S-l)};function Gr(l){l.j.G==0||l.J||Qi(l.j,l)}function yn(l){qs(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,Yo(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function oa(l,p){try{var y=l.j;if(y.G!=0&&(y.g==l||qt(y.h,l))){if(!l.K&&qt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ki(y),Ln(y);else break e;Gi(y),it(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=kn(I(y.Za,y),6e3));if(1>=xl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Sr(y,11)}else if((l.K||y.g==l)&&Ki(y),!re(p))for(M=y.Da.g.parse(p),p=0;p<M.length;p++){let be=M[p];if(y.T=be[0],be=be[1],y.G==2)if(be[0]=="c"){y.K=be[1],y.ia=be[2];const Et=be[3];Et!=null&&(y.la=Et,y.j.info("VER="+y.la));const lt=be[4];lt!=null&&(y.Aa=lt,y.j.info("SVER="+y.Aa));const vn=be[5];vn!=null&&typeof vn=="number"&&0<vn&&(E=1.5*vn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const cn=l.g;if(cn){const Xs=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xs){var B=E.h;B.g||Xs.indexOf("spdy")==-1&&Xs.indexOf("quic")==-1&&Xs.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(aa(B,B.h),B.h=null))}if(E.D){const Xi=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Xi&&(E.ya=Xi,$e(E.I,E.D,Xi))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var te=l;if(E.qa=Fl(E,E.J?E.ia:null,E.W),te.K){Cl(E.h,te);var Be=te,gt=E.L;gt&&(Be.I=gt),Be.B&&(qs(Be),We(Be)),E.g=te}else Ys(E);0<y.i.length&&Zn(y)}else be[0]!="stop"&&be[0]!="close"||Sr(y,7);else y.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Sr(y,7):kt(y):be[0]!="noop"&&y.l&&y.l.ta(be),y.v=0)}}vr(4)}catch{}}var Al=class{constructor(l,p){this.g=l,this.map=p}};function Hs(l){this.l=l||10,f.PerformanceNavigationTiming?(l=f.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function an(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function xl(l){return l.h?1:l.g?l.g.size:0}function qt(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function aa(l,p){l.g?l.g.add(p):l.h=p}function Cl(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Hs.prototype.cancel=function(){if(this.i=Rl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Rl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.D);return p}return q(l.i)}function Fi(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var p=[],y=l.length,E=0;E<y;E++)p.push(l[E]);return p}p=[],y=0;for(E in l)p[y++]=l[E];return p}function Ui(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var p=[];l=l.length;for(var y=0;y<l;y++)p.push(y);return p}p=[],y=0;for(const E in l)p[y++]=E;return p}}}function Kr(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var y=Ui(l),E=Fi(l),M=E.length,B=0;B<M;B++)p.call(void 0,E[B],y&&y[B],l)}var Ws=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eh(l,p){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),M=null;if(0<=E){var B=l[y].substring(0,E);M=l[y].substring(E+1)}else B=l[y];p(B,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function wr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof wr){this.h=l.h,Gs(this,l.j),this.o=l.o,this.g=l.g,Qr(this,l.s),this.l=l.l;var p=l.i,y=new Yn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Yr(this,y),this.m=l.m}else l&&(p=String(l).match(Ws))?(this.h=!1,Gs(this,p[1]||"",!0),this.o=Ne(p[2]||""),this.g=Ne(p[3]||"",!0),Qr(this,p[4]),this.l=Ne(p[5]||"",!0),Yr(this,p[6]||"",!0),this.m=Ne(p[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}wr.prototype.toString=function(){var l=[],p=this.j;p&&l.push(Jr(p,zi,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Jr(p,zi,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Jr(y,y.charAt(0)=="/"?Nl:Pl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Jr(y,la)),l.join("")};function ln(l){return new wr(l)}function Gs(l,p,y){l.j=y?Ne(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Qr(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function Yr(l,p,y){p instanceof Yn?(l.i=p,Xn(l.i,l.h)):(y||(p=Jr(p,Dl)),l.i=new Yn(p,l.h))}function $e(l,p,y){l.i.set(p,y)}function Xr(l){return $e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ne(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Jr(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,kl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function kl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var zi=/[#\/\?@]/g,Pl=/[#\?:]/g,Nl=/[#\?]/g,Dl=/[#\?@]/g,la=/#/g;function Yn(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Rt(l){l.g||(l.g=new Map,l.h=0,l.i&&eh(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Yn.prototype,r.add=function(l,p){Rt(this),this.i=null,l=_n(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function bn(l,p){Rt(l),p=_n(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Vn(l,p){return Rt(l),p=_n(l,p),l.g.has(p)}r.forEach=function(l,p){Rt(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(p,M,E,this)},this)},this)},r.na=function(){Rt(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const M=l[E];for(let B=0;B<M.length;B++)y.push(p[E])}return y},r.V=function(l){Rt(this);let p=[];if(typeof l=="string")Vn(this,l)&&(p=p.concat(this.g.get(_n(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)p=p.concat(l[y])}return p},r.set=function(l,p){return Rt(this),this.i=null,l=_n(this,l),Vn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Zr(l,p,y){bn(l,p),0<y.length&&(l.i=null,l.g.set(_n(l,p),q(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const B=encodeURIComponent(String(E)),te=this.V(E);for(E=0;E<te.length;E++){var M=B;te[E]!==""&&(M+="="+encodeURIComponent(String(te[E]))),l.push(M)}}return this.i=l.join("&")};function _n(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Xn(l,p){p&&!l.j&&(Rt(l),l.i=null,l.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(bn(this,E),Zr(this,M,y))},l)),l.j=p}function th(l,p){const y=new zs;if(f.Image){const E=new Image;E.onload=F(Kt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=F(Kt,y,"TestLoadImage: error",!1,p,E),E.onabort=F(Kt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=F(Kt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function bl(l,p){const y=new zs,E=new AbortController,M=setTimeout(()=>{E.abort(),Kt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(B=>{clearTimeout(M),B.ok?Kt(y,"TestPingServer: ok",!0,p):Kt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Kt(y,"TestPingServer: error",!1,p)})}function Kt(l,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function nh(){this.g=new Zo}function Vl(l,p,y){const E=y||"";try{Kr(l,function(M,B){let te=M;_(M)&&(te=Xo(M)),p.push(E+B+"="+encodeURIComponent(te))})}catch(M){throw p.push(E+"type="+encodeURIComponent("_badmap")),M}}function Er(l){this.l=l.Ub||null,this.j=l.eb||!1}$(Er,Fs),Er.prototype.g=function(){return new Ks(this.l,this.j)},Er.prototype.i=(function(l){return function(){return l}})({});function Ks(l,p){pt.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ks,pt),r=Ks.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,Mn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ol(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ol(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?On(this):Mn(this),this.readyState==3&&Ol(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,On(this))},r.Qa=function(l){this.g&&(this.response=l,On(this))},r.ga=function(){this.g&&On(this)};function On(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Mn(l)}r.setRequestHeader=function(l,p){this.u.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function Mn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Tr(l){let p="";return xe(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function es(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Tr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):$e(l,p,y))}function Xe(l){pt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Xe,pt);var rh=/^https?$/i,ua=["POST","PUT"];r=Xe.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?Ni(this.o):Ni(Nn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(B){Qs(this,B);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),M=f.FormData&&l instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ua,p,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,te]of y)this.g.setRequestHeader(B,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$i(this),this.u=!0,this.g.send(l),this.u=!1}catch(B){Qs(this,B)}};function Qs(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,Bi(l),un(l)}function Bi(l){l.A||(l.A=!0,mt(l,"complete"),mt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,mt(this,"complete"),mt(this,"abort"),un(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},r.bb=function(){ca(this)};function ca(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Qt(l)!=4||l.Z()!=2)){if(l.u&&Qt(l)==4)Ko(l.Ea,0,l);else if(mt(l,"readystatechange"),Qt(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=te===0){var M=String(l.D).match(Ws)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),E=!rh.test(M?M.toLowerCase():"")}y=E}if(y)mt(l,"complete"),mt(l,"success");else{l.m=6;try{var B=2<Qt(l)?l.g.statusText:""}catch{B=""}l.l=B+" ["+l.Z()+"]",Bi(l)}}finally{un(l)}}}}function un(l,p){if(l.g){$i(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||mt(l,"ready");try{y.onreadystatechange=E}catch{}}}function $i(l){l.I&&(f.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Qt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),Jo(p)}};function ha(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function qi(l){const p={};l=(l.g&&2<=Qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(re(l[E]))continue;var y=b(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[M]||[];p[M]=B,B.push(y)}N(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function da(l){this.Aa=0,this.i=[],this.j=new zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,l),this.cb=Jn("retryDelaySeedMs",1e4,l),this.Wa=Jn("forwardChannelMaxRetries",2,l),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Hs(l&&l.concurrentRequestLimit),this.Da=new nh,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=da.prototype,r.la=8,r.G=1,r.connect=function(l,p,y,E){it(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Fl(this,null,this.W),Zn(this)};function kt(l){if(Hi(l),l.G==3){var p=l.U++,y=ln(l.I);if($e(y,"SID",l.K),$e(y,"RID",p),$e(y,"TYPE","terminate"),Ir(l,y),p=new Dn(l,l.j,p),p.L=2,p.v=Xr(ln(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Ul(p.j,null),p.g.ea(p.v)),p.F=Date.now(),We(p)}jl(l)}function Ln(l){l.g&&(fa(l),l.g.cancel(),l.g=null)}function Hi(l){Ln(l),l.u&&(f.clearTimeout(l.u),l.u=null),Ki(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&f.clearTimeout(l.s),l.s=null)}function Zn(l){if(!an(l.h)&&!l.s){l.s=!0;var p=l.Ga;Ue||ee(),ne||(Ue(),ne=!0),K.add(p,l),l.B=0}}function sh(l,p){return xl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=kn(I(l.Ga,l,p),Ll(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Dn(this,this.j,l);let B=this.o;if(this.S&&(B?(B=A(B),P(B,this.S)):B=this.S),this.m!==null||this.O||(M.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ts(this,M,p),y=ln(this.I),$e(y,"RID",l),$e(y,"CVER",22),this.D&&$e(y,"X-HTTP-Session-Id",this.D),Ir(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(Tr(B)))+"&"+p:this.m&&es(y,this.m,B)),aa(this.h,M),this.Ua&&$e(y,"TYPE","init"),this.P?($e(y,"$req",p),$e(y,"SID","null"),M.T=!0,ji(M,y,null)):ji(M,y,p),this.G=2}}else this.G==3&&(l?Wi(this,l):this.i.length==0||an(this.h)||Wi(this))};function Wi(l,p){var y;p?y=p.l:y=l.U++;const E=ln(l.I);$e(E,"SID",l.K),$e(E,"RID",y),$e(E,"AID",l.T),Ir(l,E),l.m&&l.o&&es(E,l.m,l.o),y=new Dn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),p&&(l.i=p.D.concat(l.i)),p=ts(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),aa(l.h,y),ji(y,E,p)}function Ir(l,p){l.H&&xe(l.H,function(y,E){$e(p,E,y)}),l.l&&Kr({},function(y,E){$e(p,E,y)})}function ts(l,p,y){y=Math.min(l.i.length,y);var E=l.l?I(l.l.Na,l.l,l):null;e:{var M=l.i;let B=-1;for(;;){const te=["count="+y];B==-1?0<y?(B=M[0].g,te.push("ofs="+B)):B=0:te.push("ofs="+B);let Be=!0;for(let gt=0;gt<y;gt++){let be=M[gt].g;const Et=M[gt].map;if(be-=B,0>be)B=Math.max(0,M[gt].g-100),Be=!1;else try{Vl(Et,te,"req"+be+"_")}catch{E&&E(Et)}}if(Be){E=te.join("&");break e}}}return l=l.i.splice(0,y),p.D=l,E}function Ys(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;Ue||ee(),ne||(Ue(),ne=!0),K.add(p,l),l.v=0}}function Gi(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=kn(I(l.Fa,l),Ll(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,Ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=kn(I(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Ln(this),Ml(this))};function fa(l){l.A!=null&&(f.clearTimeout(l.A),l.A=null)}function Ml(l){l.g=new Dn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=ln(l.qa);$e(p,"RID","rpc"),$e(p,"SID",l.K),$e(p,"AID",l.T),$e(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&$e(p,"TO",l.ja),$e(p,"TYPE","xmlhttp"),Ir(l,p),l.m&&l.o&&es(p,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Xr(ln(p)),y.m=null,y.P=!0,ia(y,l)}r.Za=function(){this.C!=null&&(this.C=null,Ln(this),Gi(this),it(19))};function Ki(l){l.C!=null&&(f.clearTimeout(l.C),l.C=null)}function Qi(l,p){var y=null;if(l.g==p){Ki(l),fa(l),l.g=null;var E=2}else if(qt(l.h,p))y=p.D,Cl(l.h,p),E=1;else return;if(l.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var M=l.B;E=Us(),mt(E,new Vi(E,y)),Zn(l)}else Ys(l);else if(M=p.s,M==3||M==0&&0<p.X||!(E==1&&sh(l,p)||E==2&&Gi(l)))switch(y&&0<y.length&&(p=l.h,p.i=p.i.concat(y)),M){case 1:Sr(l,5);break;case 4:Sr(l,10);break;case 3:Sr(l,6);break;default:Sr(l,2)}}}function Ll(l,p){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*p}function Sr(l,p){if(l.j.info("Error code "+p),p==2){var y=I(l.fb,l),E=l.Xa;const M=!E;E=new wr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Gs(E,"https"),Xr(E),M?th(E.toString(),y):bl(E.toString(),y)}else it(2);l.G=0,l.l&&l.l.sa(p),jl(l),Hi(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function jl(l){if(l.G=0,l.ka=[],l.l){const p=Rl(l.h);(p.length!=0||l.i.length!=0)&&(j(l.ka,p),j(l.ka,l.i),l.h.i.length=0,q(l.i),l.i.length=0),l.l.ra()}}function Fl(l,p,y){var E=y instanceof wr?ln(y):new wr(y);if(E.g!="")p&&(E.g=p+"."+E.g),Qr(E,E.s);else{var M=f.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var B=new wr(null);E&&Gs(B,E),p&&(B.g=p),M&&Qr(B,M),y&&(B.l=y),E=B}return y=l.D,p=l.ya,y&&p&&$e(E,y,p),$e(E,"VER",l.la),Ir(l,E),E}function Ul(l,p,y){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new Xe(new Er({eb:y})):new Xe(l.pa),p.Ha(l.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}r=pa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Yi(){}Yi.prototype.g=function(l,p){return new Ht(l,p)};function Ht(l,p){pt.call(this),this.g=new da(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!re(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!re(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new er(this)}$(Ht,pt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){kt(this.g)},Ht.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Xo(l),l=y);p.i.push(new Al(p.Ya++,l)),p.G==3&&Zn(p)},Ht.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,Ht.aa.N.call(this)};function zl(l){Kn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}$(zl,Kn);function Bl(){bi.call(this),this.status=1}$(Bl,bi);function er(l){this.g=l}$(er,pa),er.prototype.ua=function(){mt(this.g,"a")},er.prototype.ta=function(l){mt(this.g,new zl(l))},er.prototype.sa=function(l){mt(this.g,new Bl)},er.prototype.ra=function(){mt(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Z_=function(){return new Yi},J_=function(){return Us()},X_=Qn,Xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,Wu=Mi,El.COMPLETE="complete",Y_=El,Di.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,za=Di,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,Q_=Xe}).apply(typeof Mu<"u"?Mu:typeof self<"u"?self:typeof window<"u"?window:{});const ty="@firebase/firestore",ny="4.9.0";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */let jo="12.0.0";/**
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
 */const yi=new Ac("@firebase/firestore");function vo(){return yi.logLevel}function ae(r,...e){if(yi.logLevel<=Re.DEBUG){const t=e.map(Af);yi.debug(`Firestore (${jo}): ${r}`,...t)}}function Ur(r,...e){if(yi.logLevel<=Re.ERROR){const t=e.map(Af);yi.error(`Firestore (${jo}): ${r}`,...t)}}function ko(r,...e){if(yi.logLevel<=Re.WARN){const t=e.map(Af);yi.warn(`Firestore (${jo}): ${r}`,...t)}}function Af(r){if(typeof r=="string")return r;try{/**
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
 */function ge(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,ev(r,i,t)}function ev(r,e,t){let i=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Ur(i),new Error(i)}function ze(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||ev(e,o,i)}function Te(r,e){return r}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class FI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class UI{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let u=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Mr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Mr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string",31837,{l:i}),new tv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class zI{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class BI{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new zI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ry{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $I{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,or(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const i=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>i(u)))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ry(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ry(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class xf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=qI(40);for(let u=0;u<o.length;++u)i.length<20&&o[u]<t&&(i+=e.charAt(o[u]%62))}return i}}function ke(r,e){return r<e?-1:r>e?1:0}function Jd(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),u=e.charAt(i);if(o!==u)return Vd(o)===Vd(u)?ke(o,u):Vd(o)?1:-1}return ke(r.length,e.length)}const HI=55296,WI=57343;function Vd(r){const e=r.charCodeAt(0);return e>=HI&&e<=WI}function Po(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const sy="__name__";class ir{constructor(e,t,i){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ge(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const u=ir.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return ke(e.length,t.length)}static compareSegments(e,t){const i=ir.isNumericId(e),o=ir.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):Jd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ss.fromString(e.substring(4,e.length-2))}}class Ke extends ir{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const GI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends ir{construct(e,t,i){return new bt(e,t,i)}static isValidIdentifier(e){return GI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sy}static keyField(){return new bt([sy])}static fromServerFormat(e){const t=[];let i="",o=0;const u=()=>{if(i.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(u(),o++)}if(u(),h)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
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
 */function nv(r,e,t){if(!t)throw new ie(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function KI(r,e,t,i){if(e===!0&&i===!0)throw new ie(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function iy(r){if(!fe.isDocumentKey(r))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function oy(r){if(fe.isDocumentKey(r))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function rv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function xc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ge(12329,{type:typeof r})}function sn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xc(r);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function dt(r,e){const t={typeString:r};return e&&(t.value=e),t}function hl(r,e){if(!rv(r))throw new ie(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,u="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${i}' field to equal '${u.value}'`;break}}if(t)throw new ie(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const ay=-62135596800,ly=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*ly);return new qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ay)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ly}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hl(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ay;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:dt("string",qe._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new qe(0,0))}static max(){return new Ee(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const el=-1;function QI(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new qe(t+1,0):new qe(t,i));return new Cs(o,fe.empty(),e)}function YI(r){return new Cs(r.readTime,r.key,el)}class Cs{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Cs(Ee.min(),fe.empty(),el)}static max(){return new Cs(Ee.max(),fe.empty(),el)}}function XI(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(r.documentKey,e.documentKey),t!==0?t:ke(r.largestBatchId,e.largestBatchId))}/**
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
 */const JI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Fo(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==JI)throw r;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(i,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,u=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++u,h&&u===o&&t()}),(g=>i(g)))})),h=!0,u===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,u)=>{i.push(t.call(this,o,u))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const u=e.length,h=new Array(u);let f=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((T=>{h[_]=T,++f,f===u&&i(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new G(((i,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):i()};u()}))}}function e1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Uo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Cc.ce=-1;/**
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
 */const Cf=-1;function Rc(r){return r==null}function ic(r){return r===0&&1/r==-1/0}function t1(r){return typeof r=="number"&&Number.isInteger(r)&&!ic(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const sv="";function n1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=uy(e)),e=r1(r.get(t),e);return uy(e)}function r1(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case sv:t+="";break;default:t+=u}}return t}function uy(r){return r+sv+""}/**
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
 */function cy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function bs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function iv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lu(this.root,e,this.comparator,!0)}}class Lu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?i(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,i,o,u){this.key=e,this.value=t,this.color=i??Dt.RED,this.left=o??Dt.EMPTY,this.right=u??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,u){return new Dt(e??this.key,t??this.value,i??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const u=i(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,i),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,i,o,u){return this}insert(e,t,i){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hy(this.data.getIterator())}getIteratorFrom(e){return new hy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=i.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class hy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new pn([])}unionWith(e){let t=new vt(bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class ov extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new ov("Invalid base64 string: "+u):u}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const s1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rs(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=s1.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ks(r){return typeof r=="string"?Ot.fromBase64String(r):Ot.fromUint8Array(r)}/**
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
 */const av="server_timestamp",lv="__type__",uv="__previous_value__",cv="__local_write_time__";function Rf(r){return(r?.mapValue?.fields||{})[lv]?.stringValue===av}function kc(r){const e=r.mapValue.fields[uv];return Rf(e)?kc(e):e}function tl(r){const e=Rs(r.mapValue.fields[cv].timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class i1{constructor(e,t,i,o,u,h,f,g,_,T){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=T}}const oc="(default)";class nl{constructor(e,t){this.projectId=e,this.database=t||oc}static empty(){return new nl("","")}get isDefaultDatabase(){return this.database===oc}isEqual(e){return e instanceof nl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hv="__type__",o1="__max__",ju={mapValue:{}},dv="__vector__",ac="value";function Ps(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Rf(r)?4:l1(r)?9007199254740991:a1(r)?10:11:ge(28295,{value:r})}function pr(r,e){if(r===e)return!0;const t=Ps(r);if(t!==Ps(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return tl(r).isEqual(tl(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Rs(o.timestampValue),f=Rs(u.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return ks(o.bytesValue).isEqual(ks(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return at(o.geoPointValue.latitude)===at(u.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return at(o.integerValue)===at(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=at(o.doubleValue),f=at(u.doubleValue);return h===f?ic(h)===ic(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Po(r.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},f=u.mapValue.fields||{};if(cy(h)!==cy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!pr(h[g],f[g])))return!1;return!0})(r,e);default:return ge(52216,{left:r})}}function rl(r,e){return(r.values||[]).find((t=>pr(t,e)))!==void 0}function No(r,e){if(r===e)return 0;const t=Ps(r),i=Ps(e);if(t!==i)return ke(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const f=at(u.integerValue||u.doubleValue),g=at(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return dy(r.timestampValue,e.timestampValue);case 4:return dy(tl(r),tl(e));case 5:return Jd(r.stringValue,e.stringValue);case 6:return(function(u,h){const f=ks(u),g=ks(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const f=u.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const T=ke(f[_],g[_]);if(T!==0)return T}return ke(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const f=ke(at(u.latitude),at(h.latitude));return f!==0?f:ke(at(u.longitude),at(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return fy(r.arrayValue,e.arrayValue);case 10:return(function(u,h){const f=u.fields||{},g=h.fields||{},_=f[ac]?.arrayValue,T=g[ac]?.arrayValue,x=ke(_?.values?.length||0,T?.values?.length||0);return x!==0?x:fy(_,T)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===ju.mapValue&&h===ju.mapValue)return 0;if(u===ju.mapValue)return 1;if(h===ju.mapValue)return-1;const f=u.fields||{},g=Object.keys(f),_=h.fields||{},T=Object.keys(_);g.sort(),T.sort();for(let x=0;x<g.length&&x<T.length;++x){const I=Jd(g[x],T[x]);if(I!==0)return I;const F=No(f[g[x]],_[T[x]]);if(F!==0)return F}return ke(g.length,T.length)})(r.mapValue,e.mapValue);default:throw ge(23264,{he:t})}}function dy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const t=Rs(r),i=Rs(e),o=ke(t.seconds,i.seconds);return o!==0?o:ke(t.nanos,i.nanos)}function fy(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const u=No(t[o],i[o]);if(u)return u}return ke(t.length,i.length)}function Do(r){return Zd(r)}function Zd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Rs(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ks(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return fe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const u of t.values||[])o?o=!1:i+=",",i+=Zd(u);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of i)u?u=!1:o+=",",o+=`${h}:${Zd(t.fields[h])}`;return o+"}"})(r.mapValue):ge(61005,{value:r})}function Gu(r){switch(Ps(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kc(r);return e?16+Gu(e):16;case 5:return 2*r.stringValue.length;case 6:return ks(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,u)=>o+Gu(u)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return bs(i.fields,((u,h)=>{o+=u.length+Gu(h)})),o})(r.mapValue);default:throw ge(13486,{value:r})}}function py(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ef(r){return!!r&&"integerValue"in r}function kf(r){return!!r&&"arrayValue"in r}function my(r){return!!r&&"nullValue"in r}function gy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ku(r){return!!r&&"mapValue"in r}function a1(r){return(r?.mapValue?.fields||{})[hv]?.stringValue===dv}function Wa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return bs(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Wa(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wa(r.arrayValue.values[t]);return e}return{...r}}function l1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===o1}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ku(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(t)}setAll(e){let t=bt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Wa(h):o.push(f.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,i,o)}delete(e){const t=this.field(e.popLast());Ku(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Ku(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){bs(t,((o,u)=>e[o]=u));for(const o of i)delete e[o]}clone(){return new rn(Wa(this.value))}}function fv(r){const e=[];return bs(r.fields,((t,i)=>{const o=new bt([t]);if(Ku(i)){const u=fv(i.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new pn(e)}/**
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
 */class Bt{constructor(e,t,i,o,u,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=u,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Ee.min(),Ee.min(),Ee.min(),rn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ee.min(),Ee.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ee.min(),Ee.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lc{constructor(e,t){this.position=e,this.inclusive=t}}function yy(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?i=fe.comparator(fe.fromName(h.referenceValue),t.key):i=No(h,t.data.field(u.field)),u.dir==="desc"&&(i*=-1),i!==0)break}return i}function _y(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!pr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class sl{constructor(e,t="asc"){this.field=e,this.dir=t}}function u1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class pv{}class ht extends pv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new h1(e,t,i):t==="array-contains"?new p1(e,i):t==="in"?new m1(e,i):t==="not-in"?new g1(e,i):t==="array-contains-any"?new y1(e,i):new ht(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new d1(e,i):new f1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(No(t,this.value)):t!==null&&Ps(this.value)===Ps(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends pv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Wn(e,t)}matches(e){return mv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function mv(r){return r.op==="and"}function gv(r){return c1(r)&&mv(r)}function c1(r){for(const e of r.filters)if(e instanceof Wn)return!1;return!0}function tf(r){if(r instanceof ht)return r.field.canonicalString()+r.op.toString()+Do(r.value);if(gv(r))return r.filters.map((e=>tf(e))).join(",");{const e=r.filters.map((t=>tf(t))).join(",");return`${r.op}(${e})`}}function yv(r,e){return r instanceof ht?(function(i,o){return o instanceof ht&&i.op===o.op&&i.field.isEqual(o.field)&&pr(i.value,o.value)})(r,e):r instanceof Wn?(function(i,o){return o instanceof Wn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((u,h,f)=>u&&yv(h,o.filters[f])),!0):!1})(r,e):void ge(19439)}function _v(r){return r instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`})(r):r instanceof Wn?(function(t){return t.op.toString()+" {"+t.getFilters().map(_v).join(" ,")+"}"})(r):"Filter"}class h1 extends ht{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class d1 extends ht{constructor(e,t){super(e,"in",t),this.keys=vv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class f1 extends ht{constructor(e,t){super(e,"not-in",t),this.keys=vv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vv(r,e){return(e.arrayValue?.values||[]).map((t=>fe.fromName(t.referenceValue)))}class p1 extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kf(t)&&rl(t.arrayValue,this.value)}}class m1 extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&rl(this.value.arrayValue,t)}}class g1 extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!rl(this.value.arrayValue,t)}}class y1 extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>rl(this.value.arrayValue,i)))}}/**
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
 */class _1{constructor(e,t=null,i=[],o=[],u=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=u,this.startAt=h,this.endAt=f,this.Te=null}}function vy(r,e=null,t=[],i=[],o=null,u=null,h=null){return new _1(r,e,t,i,o,u,h)}function Pf(r){const e=Te(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>tf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(u){return u.field.canonicalString()+u.dir})(i))).join(","),Rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Do(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Do(i))).join(",")),e.Te=t}return e.Te}function Nf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!u1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!yv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!_y(r.startAt,e.startAt)&&_y(r.endAt,e.endAt)}function nf(r){return fe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class zo{constructor(e,t=null,i=[],o=[],u=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=u,this.limitType=h,this.startAt=f,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function v1(r,e,t,i,o,u,h,f){return new zo(r,e,t,i,o,u,h,f)}function Pc(r){return new zo(r)}function wy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function wv(r){return r.collectionGroup!==null}function Ga(r){const e=Te(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(bt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new sl(u,i))})),t.has(bt.keyField().canonicalString())||e.Ie.push(new sl(bt.keyField(),i))}return e.Ie}function ar(r){const e=Te(r);return e.Ee||(e.Ee=w1(e,Ga(r))),e.Ee}function w1(r,e){if(r.limitType==="F")return vy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new sl(o.field,u)}));const t=r.endAt?new lc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new lc(r.startAt.position,r.startAt.inclusive):null;return vy(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function rf(r,e){const t=r.filters.concat([e]);return new zo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function sf(r,e,t){return new zo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Nc(r,e){return Nf(ar(r),ar(e))&&r.limitType===e.limitType}function Ev(r){return`${Pf(ar(r))}|lt:${r.limitType}`}function wo(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>_v(o))).join(", ")}]`),Rc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Do(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Do(o))).join(",")),`Target(${i})`})(ar(r))}; limitType=${r.limitType})`}function Dc(r,e){return e.isFoundDocument()&&(function(i,o){const u=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(u):fe.isDocumentKey(i.path)?i.path.isEqual(u):i.path.isImmediateParentOf(u)})(r,e)&&(function(i,o){for(const u of Ga(i))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const u of i.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const _=yy(h,f,g);return h.inclusive?_<=0:_<0})(i.startAt,Ga(i),o)||i.endAt&&!(function(h,f,g){const _=yy(h,f,g);return h.inclusive?_>=0:_>0})(i.endAt,Ga(i),o))})(r,e)}function E1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Tv(r){return(e,t)=>{let i=!1;for(const o of Ga(r)){const u=T1(o,e,t);if(u!==0)return u;i=i||o.field.isKeyField()}return 0}}function T1(r,e,t){const i=r.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,f){const g=h.data.field(u),_=f.data.field(u);return g!==null&&_!==null?No(g,_):ge(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return ge(19790,{direction:r.dir})}}/**
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
 */class Si{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,u]of i)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,((t,i)=>{for(const[o,u]of i)e(o,u)}))}isEmpty(){return iv(this.inner)}size(){return this.innerSize}}/**
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
 */const I1=new tt(fe.comparator);function zr(){return I1}const Iv=new tt(fe.comparator);function Ba(...r){let e=Iv;for(const t of r)e=e.insert(t.key,t);return e}function Sv(r){let e=Iv;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function di(){return Ka()}function Av(){return Ka()}function Ka(){return new Si((r=>r.toString()),((r,e)=>r.isEqual(e)))}const S1=new tt(fe.comparator),A1=new vt(fe.comparator);function Pe(...r){let e=A1;for(const t of r)e=e.add(t);return e}const x1=new vt(ke);function C1(){return x1}/**
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
 */function Df(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function xv(r){return{integerValue:""+r}}function R1(r,e){return t1(e)?xv(e):Df(r,e)}/**
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
 */class bc{constructor(){this._=void 0}}function k1(r,e,t){return r instanceof il?(function(o,u){const h={fields:{[lv]:{stringValue:av},[cv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Rf(u)&&(u=kc(u)),u&&(h.fields[uv]=u),{mapValue:h}})(t,e):r instanceof ol?Rv(r,e):r instanceof al?kv(r,e):(function(o,u){const h=Cv(o,u),f=Ey(h)+Ey(o.Ae);return ef(h)&&ef(o.Ae)?xv(f):Df(o.serializer,f)})(r,e)}function P1(r,e,t){return r instanceof ol?Rv(r,e):r instanceof al?kv(r,e):t}function Cv(r,e){return r instanceof uc?(function(i){return ef(i)||(function(u){return!!u&&"doubleValue"in u})(i)})(e)?e:{integerValue:0}:null}class il extends bc{}class ol extends bc{constructor(e){super(),this.elements=e}}function Rv(r,e){const t=Pv(e);for(const i of r.elements)t.some((o=>pr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class al extends bc{constructor(e){super(),this.elements=e}}function kv(r,e){let t=Pv(e);for(const i of r.elements)t=t.filter((o=>!pr(o,i)));return{arrayValue:{values:t}}}class uc extends bc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ey(r){return at(r.integerValue||r.doubleValue)}function Pv(r){return kf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class N1{constructor(e,t){this.field=e,this.transform=t}}function D1(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof ol&&o instanceof ol||i instanceof al&&o instanceof al?Po(i.elements,o.elements,pr):i instanceof uc&&o instanceof uc?pr(i.Ae,o.Ae):i instanceof il&&o instanceof il})(r.transform,e.transform)}class b1{constructor(e,t){this.version=e,this.transformResults=t}}class Rn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Vc{}function Nv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new bf(r.key,Rn.none()):new dl(r.key,r.data,Rn.none());{const t=r.data,i=rn.empty();let o=new vt(bt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?i.delete(u):i.set(u,h),o=o.add(u)}return new Vs(r.key,i,new pn(o.toArray()),Rn.none())}}function V1(r,e,t){r instanceof dl?(function(o,u,h){const f=o.value.clone(),g=Iy(o.fieldTransforms,u,h.transformResults);f.setAll(g),u.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Vs?(function(o,u,h){if(!Qu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const f=Iy(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Dv(o)),g.setAll(f),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Qa(r,e,t,i){return r instanceof dl?(function(u,h,f,g){if(!Qu(u.precondition,h))return f;const _=u.value.clone(),T=Sy(u.fieldTransforms,g,h);return _.setAll(T),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof Vs?(function(u,h,f,g){if(!Qu(u.precondition,h))return f;const _=Sy(u.fieldTransforms,g,h),T=h.data;return T.setAll(Dv(u)),T.setAll(_),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),f===null?null:f.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((x=>x.field)))})(r,e,t,i):(function(u,h,f){return Qu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function O1(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),u=Cv(i.transform,o||null);u!=null&&(t===null&&(t=rn.empty()),t.set(i.field,u))}return t||null}function Ty(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Po(i,o,((u,h)=>D1(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class dl extends Vc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Vs extends Vc{constructor(e,t,i,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Dv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function Iy(r,e,t){const i=new Map;ze(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,f=e.data.field(u.field);i.set(u.field,P1(h,f,t[o]))}return i}function Sy(r,e,t){const i=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);i.set(o.field,k1(u,h,e))}return i}class bf extends Vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M1 extends Vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class L1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&V1(u,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Qa(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Qa(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Av();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let f=this.applyToLocalView(h,u.mutatedFields);f=t.has(o.key)?null:f;const g=Nv(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,((t,i)=>Ty(t,i)))&&Po(this.baseMutations,e.baseMutations,((t,i)=>Ty(t,i)))}}class Vf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){ze(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return S1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,i[h].version);return new Vf(e,t,i,o)}}/**
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
 */class j1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class F1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,Ve;function U1(r){switch(r){case H.OK:return ge(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ge(15467,{code:r})}}function bv(r){if(r===void 0)return Ur("GRPC error has no .code"),H.UNKNOWN;switch(r){case ct.OK:return H.OK;case ct.CANCELLED:return H.CANCELLED;case ct.UNKNOWN:return H.UNKNOWN;case ct.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ct.INTERNAL:return H.INTERNAL;case ct.UNAVAILABLE:return H.UNAVAILABLE;case ct.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ct.NOT_FOUND:return H.NOT_FOUND;case ct.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ct.ABORTED:return H.ABORTED;case ct.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ct.DATA_LOSS:return H.DATA_LOSS;default:return ge(39323,{code:r})}}(Ve=ct||(ct={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function z1(){return new TextEncoder}/**
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
 */const B1=new Ss([4294967295,4294967295],0);function Ay(r){const e=z1().encode(r),t=new K_;return t.update(e),new Uint8Array(t.digest())}function xy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ss([t,i],0),new Ss([o,u],0)]}class Of{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new $a(`Invalid padding: ${t}`);if(i<0)throw new $a(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new $a(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new $a(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ss.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Ss.fromNumber(i)));return o.compare(B1)===1&&(o=new Ss([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ay(e),[i,o]=xy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(i,o,u);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Of(u,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=Ay(e),[i,o]=xy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(i,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class $a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Oc{constructor(e,t,i,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Oc(Ee.min(),o,new tt(ke),zr(),Pe())}}class fl{constructor(e,t,i,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new fl(i,t,Pe(),Pe(),Pe())}}/**
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
 */class Yu{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class Vv{constructor(e,t){this.targetId=e,this.Ce=t}}class Ov{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Cy{constructor(){this.ve=0,this.Fe=Ry(),this.Me=Ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),i=Pe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ge(38017,{changeType:u})}})),new fl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=Ry()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $1{constructor(e){this.Ge=e,this.ze=new Map,this.je=zr(),this.Je=Fu(),this.He=Fu(),this.Ye=new tt(ke)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(nf(u))if(i===0){const h=new fe(u.path);this.et(t,h,Bt.newNoDocument(h,Ee.min()))}else ze(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:u=0}=t;let h,f;try{h=ks(i).toUint8Array()}catch(g){if(g instanceof ov)return ko("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Of(h,o,u)}catch(g){return ko(g instanceof $a?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((u=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(f)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const f=this.ot(h);if(f){if(u.current&&nf(f.target)){const g=new fe(f.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Bt.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let i=Pe();this.He.forEach(((u,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new Oc(e,t,this.Ye,this.je,i);return this.je=zr(),this.Je=Fu(),this.He=Fu(),this.Ye=new tt(ke),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Cy,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(ke),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(ke),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Fu(){return new tt(fe.comparator)}function Ry(){return new tt(fe.comparator)}const q1={asc:"ASCENDING",desc:"DESCENDING"},H1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},W1={and:"AND",or:"OR"};class G1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function of(r,e){return r.useProto3Json||Rc(e)?e:{value:e}}function cc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function K1(r,e){return cc(r,e.toTimestamp())}function lr(r){return ze(!!r,49232),Ee.fromTimestamp((function(t){const i=Rs(t);return new qe(i.seconds,i.nanos)})(r))}function Mf(r,e){return af(r,e).canonicalString()}function af(r,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Lv(r){const e=Ke.fromString(r);return ze(Bv(e),10190,{key:e.toString()}),e}function lf(r,e){return Mf(r.databaseId,e.path)}function Od(r,e){const t=Lv(e);if(t.get(1)!==r.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new fe(Fv(t))}function jv(r,e){return Mf(r.databaseId,e)}function Q1(r){const e=Lv(r);return e.length===4?Ke.emptyPath():Fv(e)}function uf(r){return new Ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Fv(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ky(r,e,t){return{name:lf(r,e),fields:t.value.mapValue.fields}}function Y1(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ge(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,T){return _.useProto3Json?(ze(T===void 0||typeof T=="string",58123),Ot.fromBase64String(T||"")):(ze(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Ot.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const T=_.code===void 0?H.UNKNOWN:bv(_.code);return new ie(T,_.message||"")})(h);t=new Ov(i,o,u,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Od(r,i.document.name),u=lr(i.document.updateTime),h=i.document.createTime?lr(i.document.createTime):Ee.min(),f=new rn({mapValue:{fields:i.document.fields}}),g=Bt.newFoundDocument(o,u,h,f),_=i.targetIds||[],T=i.removedTargetIds||[];t=new Yu(_,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Od(r,i.document),u=i.readTime?lr(i.readTime):Ee.min(),h=Bt.newNoDocument(o,u),f=i.removedTargetIds||[];t=new Yu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Od(r,i.document),u=i.removedTargetIds||[];t=new Yu([],u,o,null)}else{if(!("filter"in e))return ge(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:u}=i,h=new F1(o,u),f=i.targetId;t=new Vv(f,h)}}return t}function X1(r,e){let t;if(e instanceof dl)t={update:ky(r,e.key,e.value)};else if(e instanceof bf)t={delete:lf(r,e.key)};else if(e instanceof Vs)t={update:ky(r,e.key,e.data),updateMask:oS(e.fieldMask)};else{if(!(e instanceof M1))return ge(16599,{Vt:e.type});t={verify:lf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(u,h){const f=h.transform;if(f instanceof il)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ol)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof al)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof uc)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw ge(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:K1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ge(27497)})(r,e.precondition)),t}function J1(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?lr(o.updateTime):lr(u);return h.isEqual(Ee.min())&&(h=lr(u)),new b1(h,o.transformResults||[])})(t,e)))):[]}function Z1(r,e){return{documents:[jv(r,e.path)]}}function eS(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=jv(r,o);const u=(function(_){if(_.length!==0)return zv(Wn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((T=>(function(I){return{field:Eo(I.field),direction:rS(I.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=of(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function tS(r){let e=Q1(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ze(i===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(x){const I=Uv(x);return I instanceof Wn&&gv(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(x){return x.map((I=>(function($){return new sl(To($.field),(function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(x){let I;return I=typeof x=="object"?x.value:x,Rc(I)?null:I})(t.limit));let g=null;t.startAt&&(g=(function(x){const I=!!x.before,F=x.values||[];return new lc(F,I)})(t.startAt));let _=null;return t.endAt&&(_=(function(x){const I=!x.before,F=x.values||[];return new lc(F,I)})(t.endAt)),v1(e,o,h,u,f,"F",g,_)}function nS(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Uv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=To(t.unaryFilter.field);return ht.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=To(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=To(t.unaryFilter.field);return ht.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=To(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ht.create(To(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Wn.create(t.compositeFilter.filters.map((i=>Uv(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(r):ge(30097,{filter:r})}function rS(r){return q1[r]}function sS(r){return H1[r]}function iS(r){return W1[r]}function Eo(r){return{fieldPath:r.canonicalString()}}function To(r){return bt.fromServerFormat(r.fieldPath)}function zv(r){return r instanceof ht?(function(t){if(t.op==="=="){if(gy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NAN"}};if(my(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NAN"}};if(my(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(t.field),op:sS(t.op),value:t.value}}})(r):r instanceof Wn?(function(t){const i=t.getFilters().map((o=>zv(o)));return i.length===1?i[0]:{compositeFilter:{op:iS(t.op),filters:i}}})(r):ge(54877,{filter:r})}function oS(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Bv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Es{constructor(e,t,i,o,u=Ee.min(),h=Ee.min(),f=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aS{constructor(e){this.yt=e}}function lS(r){const e=tS({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?sf(e,e.limit,"L"):e}/**
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
 */class uS{constructor(){this.Cn=new cS}addToCollectionParentIndex(e,t){return this.Cn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Cs.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Cs.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class cS{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(Ke.comparator),u=!o.has(i);return this.index[t]=o.add(i),u}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(Ke.comparator)).toArray()}}/**
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
 */const Py={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$v=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn($v,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
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
 */class bo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new bo(0)}static cr(){return new bo(-1)}}/**
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
 */const Ny="LruGarbageCollector",hS=1048576;function Dy([r,e],[t,i]){const o=ke(r,t);return o===0?ke(e,i):o}class dS{constructor(e){this.Ir=e,this.buffer=new vt(Dy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Dy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fS{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(Ny,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Uo(t)?ae(Ny,"Ignoring IndexedDB error during garbage collection: ",t):await Fo(t)}await this.Vr(3e5)}))}}class pS{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Cc.ce);const i=new dS(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Py)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Py):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,u,h,f,g,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,h=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(i=x,f=Date.now(),this.removeTargets(e,i,t)))).next((x=>(u=x,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((x=>(_=Date.now(),vo()<=Re.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${u} targets in `+(g-f)+`ms
	Removed ${x} documents in `+(_-g)+`ms
Total Duration: ${_-T}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:x}))))}}function mS(r,e){return new pS(r,e)}/**
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
 */class gS{constructor(){this.changes=new Si((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class _S{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Qa(i.mutation,o,pn.empty(),qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Pe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Pe()){const o=di();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((u=>{let h=Ba();return u.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=di();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Pe())))}populateOverlays(e,t,i){const o=[];return i.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let u=zr();const h=Ka(),f=(function(){return Ka()})();return t.forEach(((g,_)=>{const T=i.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof Vs)?u=u.insert(_.key,_):T!==void 0?(h.set(_.key,T.mutation.getFieldMask()),Qa(T.mutation,_,T.mutation.getFieldMask(),qe.now())):h.set(_.key,pn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,T)=>h.set(_,T))),t.forEach(((_,T)=>f.set(_,new yS(T,h.get(_)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=Ka();let o=new tt(((h,f)=>h-f)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let T=i.get(g)||pn.empty();T=f.applyToLocalView(_,T),i.set(g,T);const x=(o.get(f.batchId)||Pe()).add(g);o=o.insert(f.batchId,x)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,T=g.value,x=Av();T.forEach((I=>{if(!u.has(I)){const F=Nv(t.get(I),i.get(I));F!==null&&x.set(I,F),u=u.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,x))}return G.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-u.size):G.resolve(di());let f=el,g=u;return h.next((_=>G.forEach(_,((T,x)=>(f<x.largestBatchId&&(f=x.largestBatchId),u.get(T)?G.resolve():this.remoteDocumentCache.getEntry(e,T).next((I=>{g=g.insert(T,I)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Pe()))).next((T=>({batchId:f,changes:Sv(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=Ba();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const u=t.collectionGroup;let h=Ba();return this.indexManager.getCollectionParents(e,u).next((f=>G.forEach(f,(g=>{const _=(function(x,I){return new zo(I,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((T=>{T.forEach(((x,I)=>{h=h.insert(x,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,u,o)))).next((h=>{u.forEach(((g,_)=>{const T=_.getKey();h.get(T)===null&&(h=h.insert(T,Bt.newInvalidDocument(T)))}));let f=Ba();return h.forEach(((g,_)=>{const T=u.get(g);T!==void 0&&Qa(T.mutation,_,pn.empty(),qe.now()),Dc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
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
 */class vS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return G.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:lS(o.bundledQuery),readTime:lr(o.readTime)}})(t)),G.resolve()}}/**
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
 */class wS{constructor(){this.overlays=new tt(fe.comparator),this.qr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=di();return G.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&i.set(o,u)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,u)=>{this.St(e,t,u)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=di(),u=t.length+1,h=new fe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>i&&o.set(g.getKey(),g)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let u=new tt(((_,T)=>_-T));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let T=u.get(_.largestBatchId);T===null&&(T=di(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const f=di(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,T)=>f.set(_,T))),!(f.size()>=o)););return G.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new j1(t,i));let u=this.qr.get(t);u===void 0&&(u=Pe(),this.qr.set(t,u)),this.qr.set(t,u.add(i.key))}}/**
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
 */class ES{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class Lf{constructor(){this.Qr=new vt(At.$r),this.Ur=new vt(At.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new At(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new At(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new fe(new Ke([])),i=new At(t,e),o=new At(t,e+1),u=[];return this.Ur.forEachInRange([i,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new fe(new Ke([])),i=new At(t,e),o=new At(t,e+1);let u=Pe();return this.Ur.forEachInRange([i,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new At(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return fe.comparator(e.key,t.key)||ke(e.Yr,t.Yr)}static Kr(e,t){return ke(e.Yr,t.Yr)||fe.comparator(e.key,t.key)}}/**
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
 */class TS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(At.$r)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new L1(u,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Zr=this.Zr.add(new At(f.key,u)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),u=o<0?0:o;return G.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Cf:this.tr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([i,o],(h=>{const f=this.Xr(h.Yr);u.push(f)})),G.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(ke);return t.forEach((o=>{const u=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(f=>{i=i.add(f.Yr)}))})),G.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let u=i;fe.isDocumentKey(u)||(u=u.child(""));const h=new At(new fe(u),0);let f=new vt(ke);return this.Zr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Yr)),!0)}),h),G.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return G.forEach(t.mutations,(o=>{const u=new At(o.key,t.batchId);return i=i.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new At(t,0),o=this.Zr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class IS{constructor(e){this.ri=e,this.docs=(function(){return new tt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=zr();return t.forEach((o=>{const u=this.docs.get(o);i=i.insert(o,u?u.document.mutableCopy():Bt.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let u=zr();const h=t.path,f=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:T}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||XI(YI(T),i)<=0||(o.has(T.key)||Dc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return G.resolve(u)}getAllFromCollectionGroup(e,t,i,o){ge(9500)}ii(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new SS(this)}getSize(e){return G.resolve(this.size)}}class SS extends gS{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class AS{constructor(e){this.persistence=e,this.si=new Si((t=>Pf(t)),Nf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.oi=0,this._i=new Lf,this.targetCount=0,this.ai=bo.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),G.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new bo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Pr(t),G.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const u=[];return this.si.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),G.waitFor(u).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),G.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this._i.containsKey(t))}}/**
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
 */class qv{constructor(e,t){this.ui={},this.overlays={},this.ci=new Cc(0),this.li=!1,this.li=!0,this.hi=new ES,this.referenceDelegate=e(this),this.Pi=new AS(this),this.indexManager=new uS,this.remoteDocumentCache=(function(o){return new IS(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new aS(t),this.Ii=new vS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new TS(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new xS(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return G.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class xS extends ZI{constructor(e){super(),this.currentSequenceNumber=e}}class jf{constructor(e){this.persistence=e,this.Ri=new Lf,this.Vi=null}static mi(e){return new jf(e)}get fi(){if(this.Vi)return this.Vi;throw ge(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.fi,(i=>{const o=fe.fromPath(i);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return G.or([()=>G.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class hc{constructor(e,t){this.persistence=e,this.pi=new Si((i=>n1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=mS(this,t)}static mi(e,t){return new hc(e,t)}Ei(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return G.forEach(this.pi,((i,o)=>this.br(e,i,o).next((u=>u?G.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((f=>{f||(i++,u.removeEntry(h,Ee.min()))})))).next((()=>u.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gu(e.data.value)),t}br(e,t,i){return G.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ff{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:i=i.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ff(e,t.fromCache,i,o)}}/**
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
 */class CS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return _T()?8:e1($t())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,i).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new CS;return this.Ss(e,t,h).next((f=>{if(u.result=f,this.Vs)return this.bs(e,t,h,f.size)}))})).next((()=>u.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(vo()<=Re.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),G.resolve()):(vo()<=Re.DEBUG&&ae("QueryEngine","Query:",wo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(vo()<=Re.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):G.resolve())}ys(e,t){if(wy(t))return G.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=sf(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((u=>{const h=Pe(...u);return this.ps.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.Ds(t,f);return this.Cs(t,_,h,g.readTime)?this.ys(e,sf(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ws(e,t,i,o){return wy(t)||o.isEqual(Ee.min())?G.resolve(null):this.ps.getDocuments(e,i).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,i,o)?G.resolve(null):(vo()<=Re.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),wo(t)),this.vs(e,h,t,QI(o,el)).next((f=>f)))}))}Ds(e,t){let i=new vt(Tv(e));return t.forEach(((o,u)=>{Dc(e,u)&&(i=i.add(u))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,i){return vo()<=Re.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",wo(t)),this.ps.getDocumentsMatchingQuery(e,t,Cs.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const Uf="LocalStore",kS=3e8;class PS{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new tt(ke),this.xs=new Si((u=>Pf(u)),Nf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _S(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function NS(r,e,t,i){return new PS(r,e,t,i)}async function Hv(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((u=>{const h=[],f=[];let g=Pe();for(const _ of o){h.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}for(const _ of u){f.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function DS(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,T){const x=_.batch,I=x.keys();let F=G.resolve();return I.forEach(($=>{F=F.next((()=>T.getEntry(g,$))).next((q=>{const j=_.docVersions.get($);ze(j!==null,48541),q.version.compareTo(j)<0&&(x.applyToRemoteDocument(q,_),q.isValidDocument()&&(q.setReadTime(_.commitVersion),T.addEntry(q)))}))})),F.next((()=>f.mutationQueue.removeMutationBatch(g,x)))})(t,i,e,u).next((()=>u.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Pe();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Wv(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function bS(r,e){const t=Te(r),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const f=[];e.targetChanges.forEach(((T,x)=>{const I=o.get(x);if(!I)return;f.push(t.Pi.removeMatchingKeys(u,T.removedDocuments,x).next((()=>t.Pi.addMatchingKeys(u,T.addedDocuments,x))));let F=I.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(x)!==null?F=F.withResumeToken(Ot.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):T.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(T.resumeToken,i)),o=o.insert(x,F),(function(q,j,Z){return q.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=kS?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(I,F,T)&&f.push(t.Pi.updateTargetData(u,F))}));let g=zr(),_=Pe();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),f.push(VS(u,h,e.documentUpdates).next((T=>{g=T.ks,_=T.qs}))),!i.isEqual(Ee.min())){const T=t.Pi.getLastRemoteSnapshotVersion(u).next((x=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,i)));f.push(T)}return G.waitFor(f).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.Ms=o,u)))}function VS(r,e,t){let i=Pe(),o=Pe();return t.forEach((u=>i=i.add(u))),e.getEntries(r,i).next((u=>{let h=zr();return t.forEach(((f,g)=>{const _=u.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ae(Uf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function OS(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Cf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function MS(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((u=>u?(o=u,G.resolve(o)):t.Pi.allocateTargetId(i).next((h=>(o=new Es(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function cf(r,e,t){const i=Te(r),o=i.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",u,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Uo(h))throw h;ae(Uf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function by(r,e,t){const i=Te(r);let o=Ee.min(),u=Pe();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,T){const x=Te(g),I=x.xs.get(T);return I!==void 0?G.resolve(x.Ms.get(I)):x.Pi.getTargetData(_,T)})(i,h,ar(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{u=g}))})).next((()=>i.Fs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:Pe()))).next((f=>(LS(i,E1(e),f),{documents:f,Qs:u})))))}function LS(r,e,t){let i=r.Os.get(e)||Ee.min();t.forEach(((o,u)=>{u.readTime.compareTo(i)>0&&(i=u.readTime)})),r.Os.set(e,i)}class Vy{constructor(){this.activeTargetIds=C1()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jS{constructor(){this.Mo=new Vy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Vy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FS{Oo(e){}shutdown(){}}/**
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
 */const Oy="ConnectivityMonitor";class My{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(Oy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(Oy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Uu=null;function hf(){return Uu===null?Uu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Uu++,"0x"+Uu.toString(16)}/**
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
 */const Md="RestConnection",US={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===oc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,u){const h=hf(),f=this.zo(e,t.toUriEncodedString());ae(Md,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:_}=new URL(f),T=Mo(_);return this.Jo(e,f,g,i,T).then((x=>(ae(Md,`Received RPC '${e}' ${h}: `,x),x)),(x=>{throw ko(Md,`RPC '${e}' ${h} failed with error: `,x,"url: ",f,"request:",i),x}))}Ho(e,t,i,o,u,h){return this.Go(e,t,i,o,u)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),i&&i.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const i=US[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
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
 */class BS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ut="WebChannelConnection";class $S extends zS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,u){const h=hf();return new Promise(((f,g)=>{const _=new Q_;_.setWithCredentials(!0),_.listenOnce(Y_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Wu.NO_ERROR:const x=_.getResponseJson();ae(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(x)),f(x);break;case Wu.TIMEOUT:ae(Ut,`RPC '${e}' ${h} timed out`),g(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case Wu.HTTP_ERROR:const I=_.getStatus();if(ae(Ut,`RPC '${e}' ${h} failed with status:`,I,"response text:",_.getResponseText()),I>0){let F=_.getResponseJson();Array.isArray(F)&&(F=F[0]);const $=F?.error;if($&&$.status&&$.message){const q=(function(Z){const re=Z.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(re)>=0?re:H.UNKNOWN})($.status);g(new ie(q,$.message))}else g(new ie(H.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ie(H.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ae(Ut,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);ae(Ut,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",T,i,15)}))}T_(e,t,i){const o=hf(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Z_(),f=J_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const T=u.join("");ae(Ut,`Creating RPC '${e}' stream ${o}: ${T}`,g);const x=h.createWebChannel(T,g);this.I_(x);let I=!1,F=!1;const $=new BS({Yo:j=>{F?ae(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(I||(ae(Ut,`Opening RPC '${e}' stream ${o} transport.`),x.open(),I=!0),ae(Ut,`RPC '${e}' stream ${o} sending:`,j),x.send(j))},Zo:()=>x.close()}),q=(j,Z,re)=>{j.listen(Z,(se=>{try{re(se)}catch(we){setTimeout((()=>{throw we}),0)}}))};return q(x,za.EventType.OPEN,(()=>{F||(ae(Ut,`RPC '${e}' stream ${o} transport opened.`),$.o_())})),q(x,za.EventType.CLOSE,(()=>{F||(F=!0,ae(Ut,`RPC '${e}' stream ${o} transport closed`),$.a_(),this.E_(x))})),q(x,za.EventType.ERROR,(j=>{F||(F=!0,ko(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,j.name,"Message:",j.message),$.a_(new ie(H.UNAVAILABLE,"The operation could not be completed")))})),q(x,za.EventType.MESSAGE,(j=>{if(!F){const Z=j.data[0];ze(!!Z,16349);const re=Z,se=re?.error||re[0]?.error;if(se){ae(Ut,`RPC '${e}' stream ${o} received error:`,se);const we=se.status;let Ie=(function(A){const R=ct[A];if(R!==void 0)return bv(R)})(we),xe=se.message;Ie===void 0&&(Ie=H.INTERNAL,xe="Unknown error status: "+we+" with message "+se.message),F=!0,$.a_(new ie(Ie,xe)),x.close()}else ae(Ut,`RPC '${e}' stream ${o} received:`,Z),$.u_(Z)}})),q(f,X_.STAT_EVENT,(j=>{j.stat===Xd.PROXY?ae(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===Xd.NOPROXY&&ae(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Ld(){return typeof document<"u"?document:null}/**
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
 */function Mc(r){return new G1(r,!0)}/**
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
 */class Gv{constructor(e,t,i=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ly="PersistentStream";class Kv{constructor(e,t,i,o,u,h,f,g){this.Mi=e,this.S_=i,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ie(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(Ly,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ae(Ly,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qS extends Kv{constructor(e,t,i,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Y1(this.serializer,e),i=(function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?lr(h.readTime):Ee.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=uf(this.serializer),t.addTarget=(function(u,h){let f;const g=h.target;if(f=nf(g)?{documents:Z1(u,g)}:{query:eS(u,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Mv(u,h.resumeToken);const _=of(u,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=cc(u,h.snapshotVersion.toTimestamp());const _=of(u,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=nS(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=uf(this.serializer),t.removeTarget=e,this.q_(t)}}class HS extends Kv{constructor(e,t,i,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=J1(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=uf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>X1(this.serializer,i)))};this.q_(t)}}/**
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
 */class WS{}class GS extends WS{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,af(t,i),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(H.UNKNOWN,u.toString())}))}Ho(e,t,i,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Ho(e,af(t,i),o,h,f,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(H.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class KS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ur(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const _i="RemoteStore";class QS{constructor(e,t,i,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{i.enqueueAndForget((async()=>{Ai(this)&&(ae(_i,"Restarting streams for network reachability change."),await(async function(g){const _=Te(g);_.Ea.add(4),await pl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Lc(_)})(this))}))})),this.Ra=new KS(i,o)}}async function Lc(r){if(Ai(r))for(const e of r.da)await e(!0)}async function pl(r){for(const e of r.da)await e(!1)}function Qv(r,e){const t=Te(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),qf(t)?$f(t):Bo(t).O_()&&Bf(t,e))}function zf(r,e){const t=Te(r),i=Bo(t);t.Ia.delete(e),i.O_()&&Yv(t,e),t.Ia.size===0&&(i.O_()?i.L_():Ai(t)&&t.Ra.set("Unknown"))}function Bf(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bo(r).Y_(e)}function Yv(r,e){r.Va.Ue(e),Bo(r).Z_(e)}function $f(r){r.Va=new $1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Bo(r).start(),r.Ra.ua()}function qf(r){return Ai(r)&&!Bo(r).x_()&&r.Ia.size>0}function Ai(r){return Te(r).Ea.size===0}function Xv(r){r.Va=void 0}async function YS(r){r.Ra.set("Online")}async function XS(r){r.Ia.forEach(((e,t)=>{Bf(r,e)}))}async function JS(r,e){Xv(r),qf(r)?(r.Ra.ha(e),$f(r)):r.Ra.set("Unknown")}async function ZS(r,e,t){if(r.Ra.set("Online"),e instanceof Ov&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const f of u.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ia.delete(f),o.Va.removeTarget(f))})(r,e)}catch(i){ae(_i,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await dc(r,i)}else if(e instanceof Yu?r.Va.Ze(e):e instanceof Vv?r.Va.st(e):r.Va.tt(e),!t.isEqual(Ee.min()))try{const i=await Wv(r.localStore);t.compareTo(i)>=0&&await(function(u,h){const f=u.Va.Tt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ia.get(_);T&&u.Ia.set(_,T.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const T=u.Ia.get(g);if(!T)return;u.Ia.set(g,T.withResumeToken(Ot.EMPTY_BYTE_STRING,T.snapshotVersion)),Yv(u,g);const x=new Es(T.target,g,_,T.sequenceNumber);Bf(u,x)})),u.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){ae(_i,"Failed to raise snapshot:",i),await dc(r,i)}}async function dc(r,e,t){if(!Uo(e))throw e;r.Ea.add(1),await pl(r),r.Ra.set("Offline"),t||(t=()=>Wv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ae(_i,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Lc(r)}))}function Jv(r,e){return e().catch((t=>dc(r,t,e)))}async function jc(r){const e=Te(r),t=Ns(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Cf;for(;eA(e);)try{const o=await OS(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,tA(e,o)}catch(o){await dc(e,o)}Zv(e)&&e0(e)}function eA(r){return Ai(r)&&r.Ta.length<10}function tA(r,e){r.Ta.push(e);const t=Ns(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Zv(r){return Ai(r)&&!Ns(r).x_()&&r.Ta.length>0}function e0(r){Ns(r).start()}async function nA(r){Ns(r).ra()}async function rA(r){const e=Ns(r);for(const t of r.Ta)e.ea(t.mutations)}async function sA(r,e,t){const i=r.Ta.shift(),o=Vf.from(i,e,t);await Jv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await jc(r)}async function iA(r,e){e&&Ns(r).X_&&await(async function(i,o){if((function(h){return U1(h)&&h!==H.ABORTED})(o.code)){const u=i.Ta.shift();Ns(i).B_(),await Jv(i,(()=>i.remoteSyncer.rejectFailedWrite(u.batchId,o))),await jc(i)}})(r,e),Zv(r)&&e0(r)}async function jy(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),ae(_i,"RemoteStore received new credentials");const i=Ai(t);t.Ea.add(3),await pl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Lc(t)}async function oA(r,e){const t=Te(r);e?(t.Ea.delete(2),await Lc(t)):e||(t.Ea.add(2),await pl(t),t.Ra.set("Unknown"))}function Bo(r){return r.ma||(r.ma=(function(t,i,o){const u=Te(t);return u.sa(),new qS(i,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:YS.bind(null,r),t_:XS.bind(null,r),r_:JS.bind(null,r),H_:ZS.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),qf(r)?$f(r):r.Ra.set("Unknown")):(await r.ma.stop(),Xv(r))}))),r.ma}function Ns(r){return r.fa||(r.fa=(function(t,i,o){const u=Te(t);return u.sa(),new HS(i,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:nA.bind(null,r),r_:iA.bind(null,r),ta:rA.bind(null,r),na:sA.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await jc(r)):(await r.fa.stop(),r.Ta.length>0&&(ae(_i,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Hf{constructor(e,t,i,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=u,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,u){const h=Date.now()+i,f=new Hf(e,t,h,o,u);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wf(r,e){if(Ur("AsyncQueue",`${e}: ${r}`),Uo(r))return new ie(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class So{static emptySet(e){return new So(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=Ba(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof So)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=i.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new So;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Fy{constructor(){this.ga=new tt(fe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ge(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Vo{constructor(e,t,i,o,u,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,u){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Vo(e,t,So.emptySet(t),h,i,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class aA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class lA{constructor(){this.queries=Uy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Te(t),u=o.queries;o.queries=Uy(),u.forEach(((h,f)=>{for(const g of f.Sa)g.onError(i)}))})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function Uy(){return new Si((r=>Ev(r)),Nc)}async function Gf(r,e){const t=Te(r);let i=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(i=2):(u=new aA,i=e.Da()?0:1);try{switch(i){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Wf(h,`Initialization of query '${wo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Qf(t)}async function Kf(r,e){const t=Te(r),i=e.query;let o=3;const u=t.queries.get(i);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function uA(r,e){const t=Te(r);let i=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&Qf(t)}function cA(r,e,t){const i=Te(r),o=i.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);i.queries.delete(e)}function Qf(r){r.Ca.forEach((e=>{e.next()}))}var df,zy;(zy=df||(df={})).Ma="default",zy.Cache="cache";class Yf{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Vo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==df.Cache}}/**
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
 */class t0{constructor(e){this.key=e}}class n0{constructor(e){this.key=e}}class hA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=Tv(e),this.tu=new So(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new Fy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,x)=>{const I=o.get(T),F=Dc(this.query,x)?x:null,$=!!I&&this.mutatedKeys.has(I.key),q=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let j=!1;I&&F?I.data.isEqual(F.data)?$!==q&&(i.track({type:3,doc:F}),j=!0):this.su(I,F)||(i.track({type:2,doc:F}),j=!0,(g&&this.eu(F,g)>0||_&&this.eu(F,_)<0)&&(f=!0)):!I&&F?(i.track({type:0,doc:F}),j=!0):I&&!F&&(i.track({type:1,doc:I}),j=!0,(g||_)&&(f=!0)),j&&(F?(h=h.add(F),u=q?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),i.track({type:1,doc:T})}return{tu:h,iu:i,Cs:f,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((T,x)=>(function(F,$){const q=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Rt:j})}};return q(F)-q($)})(T.type,x.type)||this.eu(T.doc,x.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,_=g!==this.Za;return this.Za=g,h.length!==0||_?{snapshot:new Vo(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new n0(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new t0(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Xf="SyncEngine";class dA{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class fA{constructor(e){this.key=e,this.hu=!1}}class pA{constructor(e,t,i,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Si((f=>Ev(f)),Nc),this.Iu=new Map,this.Eu=new Set,this.du=new tt(fe.comparator),this.Au=new Map,this.Ru=new Lf,this.Vu={},this.mu=new Map,this.fu=bo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function mA(r,e,t=!0){const i=l0(r);let o;const u=i.Tu.get(e);return u?(i.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await r0(i,e,t,!0),o}async function gA(r,e){const t=l0(r);await r0(t,e,!0,!1)}async function r0(r,e,t,i){const o=await MS(r.localStore,ar(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let f;return i&&(f=await yA(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Qv(r.remoteStore,o),f}async function yA(r,e,t,i,o){r.pu=(x,I,F)=>(async function(q,j,Z,re){let se=j.view.ru(Z);se.Cs&&(se=await by(q.localStore,j.query,!1).then((({documents:N})=>j.view.ru(N,se))));const we=re&&re.targetChanges.get(j.targetId),Ie=re&&re.targetMismatches.get(j.targetId)!=null,xe=j.view.applyChanges(se,q.isPrimaryClient,we,Ie);return $y(q,j.targetId,xe.au),xe.snapshot})(r,x,I,F);const u=await by(r.localStore,e,!0),h=new hA(e,u.Qs),f=h.ru(u.documents),g=fl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);$y(r,t,_.au);const T=new dA(e,t,h);return r.Tu.set(e,T),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function _A(r,e,t){const i=Te(r),o=i.Tu.get(e),u=i.Iu.get(o.targetId);if(u.length>1)return i.Iu.set(o.targetId,u.filter((h=>!Nc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await cf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&zf(i.remoteStore,o.targetId),ff(i,o.targetId)})).catch(Fo)):(ff(i,o.targetId),await cf(i.localStore,o.targetId,!0))}async function vA(r,e){const t=Te(r),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),zf(t.remoteStore,i.targetId))}async function wA(r,e,t){const i=CA(r);try{const o=await(function(h,f){const g=Te(h),_=qe.now(),T=f.reduce(((F,$)=>F.add($.key)),Pe());let x,I;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let $=zr(),q=Pe();return g.Ns.getEntries(F,T).next((j=>{$=j,$.forEach(((Z,re)=>{re.isValidDocument()||(q=q.add(Z))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,$))).next((j=>{x=j;const Z=[];for(const re of f){const se=O1(re,x.get(re.key).overlayedDocument);se!=null&&Z.push(new Vs(re.key,se,fv(se.value.mapValue),Rn.exists(!0)))}return g.mutationQueue.addMutationBatch(F,_,Z,f)})).next((j=>{I=j;const Z=j.applyToLocalDocumentSet(x,q);return g.documentOverlayCache.saveOverlays(F,j.batchId,Z)}))})).then((()=>({batchId:I.batchId,changes:Sv(x)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Vu[h.currentUser.toKey()];_||(_=new tt(ke)),_=_.insert(f,g),h.Vu[h.currentUser.toKey()]=_})(i,o.batchId,t),await ml(i,o.changes),await jc(i.remoteStore)}catch(o){const u=Wf(o,"Failed to persist write");t.reject(u)}}async function s0(r,e){const t=Te(r);try{const i=await bS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await ml(t,i,e)}catch(i){await Fo(i)}}function By(r,e,t){const i=Te(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((u,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Te(h);g.onlineState=f;let _=!1;g.queries.forEach(((T,x)=>{for(const I of x.Sa)I.va(f)&&(_=!0)})),_&&Qf(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function EA(r,e,t){const i=Te(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),u=o&&o.key;if(u){let h=new tt(fe.comparator);h=h.insert(u,Bt.newNoDocument(u,Ee.min()));const f=Pe().add(u),g=new Oc(Ee.min(),new Map,new tt(ke),h,f);await s0(i,g),i.du=i.du.remove(u),i.Au.delete(e),Jf(i)}else await cf(i.localStore,e,!1).then((()=>ff(i,e,t))).catch(Fo)}async function TA(r,e){const t=Te(r),i=e.batch.batchId;try{const o=await DS(t.localStore,e);o0(t,i,null),i0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ml(t,o)}catch(o){await Fo(o)}}async function IA(r,e,t){const i=Te(r);try{const o=await(function(h,f){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return g.mutationQueue.lookupMutationBatch(_,f).next((x=>(ze(x!==null,37113),T=x.keys(),g.mutationQueue.removeMutationBatch(_,x)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,T,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>g.localDocuments.getDocuments(_,T)))}))})(i.localStore,e);o0(i,e,t),i0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ml(i,o)}catch(o){await Fo(o)}}function i0(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function o0(r,e,t){const i=Te(r);let o=i.Vu[i.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function ff(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||a0(r,i)}))}function a0(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(zf(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Jf(r))}function $y(r,e,t){for(const i of t)i instanceof t0?(r.Ru.addReference(i.key,e),SA(r,i)):i instanceof n0?(ae(Xf,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||a0(r,i.key)):ge(19791,{wu:i})}function SA(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(ae(Xf,"New document in limbo: "+t),r.Eu.add(i),Jf(r))}function Jf(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new fe(Ke.fromString(e)),i=r.fu.next();r.Au.set(i,new fA(t)),r.du=r.du.insert(t,i),Qv(r.remoteStore,new Es(ar(Pc(t.path)),i,"TargetPurposeLimboResolution",Cc.ce))}}async function ml(r,e,t){const i=Te(r),o=[],u=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{h.push(i.pu(g,e,t).then((_=>{if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:t?.targetChanges.get(g.targetId)?.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Ff.As(g.targetId,_);u.push(T)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,_){const T=Te(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>G.forEach(_,(I=>G.forEach(I.Es,(F=>T.persistence.referenceDelegate.addReference(x,I.targetId,F))).next((()=>G.forEach(I.ds,(F=>T.persistence.referenceDelegate.removeReference(x,I.targetId,F)))))))))}catch(x){if(!Uo(x))throw x;ae(Uf,"Failed to update sequence numbers: "+x)}for(const x of _){const I=x.targetId;if(!x.fromCache){const F=T.Ms.get(I),$=F.snapshotVersion,q=F.withLastLimboFreeSnapshotVersion($);T.Ms=T.Ms.insert(I,q)}}})(i.localStore,u))}async function AA(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){ae(Xf,"User change. New user:",e.toKey());const i=await Hv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((f=>{f.forEach((g=>{g.reject(new ie(H.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ml(t,i.Ls)}}function xA(r,e){const t=Te(r),i=t.Au.get(e);if(i&&i.hu)return Pe().add(i.key);{let o=Pe();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function l0(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=s0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EA.bind(null,e),e.Pu.H_=uA.bind(null,e.eventManager),e.Pu.yu=cA.bind(null,e.eventManager),e}function CA(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IA.bind(null,e),e}class fc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return NS(this.persistence,new RS,e.initialUser,this.serializer)}Cu(e){return new qv(jf.mi,this.serializer)}Du(e){return new jS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fc.provider={build:()=>new fc};class RA extends fc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof hc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new fS(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new qv((i=>hc.mi(i,t)),this.serializer)}}class pf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>By(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=AA.bind(null,this.syncEngine),await oA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new lA})()}createDatastore(e){const t=Mc(e.databaseInfo.databaseId),i=(function(u){return new $S(u)})(e.databaseInfo);return(function(u,h,f,g){return new GS(u,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,u,h,f){return new QS(i,o,u,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>By(this.syncEngine,t,0)),(function(){return My.v()?new My:new FS})())}createSyncEngine(e,t){return(function(o,u,h,f,g,_,T){const x=new pA(o,u,h,f,g,_);return T&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Te(t);ae(_i,"RemoteStore shutting down."),i.Ea.add(5),await pl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}pf.provider={build:()=>new pf};/**
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
 */class Zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ds="FirestoreClient";class kA{constructor(e,t,i,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=xf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(i,(async h=>{ae(Ds,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ae(Ds,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Wf(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function jd(r,e){r.asyncQueue.verifyOperationInProgress(),ae(Ds,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Hv(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function qy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await PA(r);ae(Ds,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>jy(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>jy(e.remoteStore,o))),r._onlineComponents=e}async function PA(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ae(Ds,"Using user provided OfflineComponentProvider");try{await jd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ko("Error using user provided cache. Falling back to memory cache: "+t),await jd(r,new fc)}}else ae(Ds,"Using default OfflineComponentProvider"),await jd(r,new RA(void 0));return r._offlineComponents}async function u0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ae(Ds,"Using user provided OnlineComponentProvider"),await qy(r,r._uninitializedComponentsProvider._online)):(ae(Ds,"Using default OnlineComponentProvider"),await qy(r,new pf))),r._onlineComponents}function NA(r){return u0(r).then((e=>e.syncEngine))}async function pc(r){const e=await u0(r),t=e.eventManager;return t.onListen=mA.bind(null,e.syncEngine),t.onUnlisten=_A.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vA.bind(null,e.syncEngine),t}function DA(r,e,t={}){const i=new Mr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,f,g,_){const T=new Zf({next:I=>{T.Nu(),h.enqueueAndForget((()=>Kf(u,x)));const F=I.docs.has(f);!F&&I.fromCache?_.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&I.fromCache&&g&&g.source==="server"?_.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(I)},error:I=>_.reject(I)}),x=new Yf(Pc(f.path),T,{includeMetadataChanges:!0,qa:!0});return Gf(u,x)})(await pc(r),r.asyncQueue,e,t,i))),i.promise}function bA(r,e,t={}){const i=new Mr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,f,g,_){const T=new Zf({next:I=>{T.Nu(),h.enqueueAndForget((()=>Kf(u,x))),I.fromCache&&g.source==="server"?_.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(I)},error:I=>_.reject(I)}),x=new Yf(f,T,{includeMetadataChanges:!0,qa:!0});return Gf(u,x)})(await pc(r),r.asyncQueue,e,t,i))),i.promise}/**
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
 */function c0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Hy=new Map;/**
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
 */const h0="firestore.googleapis.com",Wy=!0;class Gy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=h0,this.ssl=Wy}else this.host=e.host,this.ssl=e.ssl??Wy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$v;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hS)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c0(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new jI;switch(i.type){case"firstParty":return new BI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Hy.get(t);i&&(ae("ComponentProvider","Removing Datastore"),Hy.delete(t),i.terminate())})(this),Promise.resolve()}}function VA(r,e,t,i={}){r=sn(r,Fc);const o=Mo(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;o&&(L_(`https://${f}`),j_("Firestore",!0)),u.host!==h0&&u.host!==f&&ko("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:f,ssl:o,emulatorOptions:i};if(!xs(g,h)&&(r._setSettings(g),i.mockUserToken)){let _,T;if(typeof i.mockUserToken=="string")_=i.mockUserToken,T=zt.MOCK_USER;else{_=cT(i.mockUserToken,r._app?.options.projectId);const x=i.mockUserToken.sub||i.mockUserToken.user_id;if(!x)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new zt(x)}r._authCredentials=new FI(new tv(_,T))}}/**
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
 */class Os{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Os(this.firestore,e,this._query)}}class rt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new As(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(hl(t,rt._jsonSchema))return new rt(e,i||null,new fe(Ke.fromString(t.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:dt("string",rt._jsonSchemaVersion),referencePath:dt("string")};class As extends Os{constructor(e,t,i){super(e,t,Pc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new fe(e))}withConverter(e){return new As(this.firestore,e,this._path)}}function Lr(r,e,...t){if(r=xt(r),nv("collection","path",e),r instanceof Fc){const i=Ke.fromString(e,...t);return oy(i),new As(r,null,i)}{if(!(r instanceof rt||r instanceof As))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ke.fromString(e,...t));return oy(i),new As(r.firestore,null,i)}}function jr(r,e,...t){if(r=xt(r),arguments.length===1&&(e=xf.newId()),nv("doc","path",e),r instanceof Fc){const i=Ke.fromString(e,...t);return iy(i),new rt(r,null,new fe(i))}{if(!(r instanceof rt||r instanceof As))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ke.fromString(e,...t));return iy(i),new rt(r.firestore,r instanceof As?r.converter:null,new fe(i))}}/**
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
 */const Ky="AsyncQueue";class Qy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gv(this,"async_queue_retry"),this._c=()=>{const i=Ld();i&&ae(Ky,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Ld();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ld();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Mr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Uo(e))throw e;ae(Ky,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Ur("INTERNAL UNHANDLED ERROR: ",Yy(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Hf.createAndSchedule(this,e,t,i,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&ge(47125,{Pc:Yy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Yy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function Xy(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of i)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class Br extends Fc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Qy,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qy(e),this._firestoreClient=void 0,await e}}}function OA(r,e){const t=typeof r=="object"?r:Sf(),i=typeof r=="string"?r:oc,o=Ii(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const u=lT("firestore");u&&VA(o,...u)}return o}function Uc(r){if(r._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||MA(r),r._firestoreClient}function MA(r){const e=r._freezeSettings(),t=(function(o,u,h,f){return new i1(o,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,c0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new kA(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Ot.fromBase64String(e))}catch(t){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hl(e,xn._jsonSchema))return xn.fromBase64String(e.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:dt("string",xn._jsonSchemaVersion),bytes:dt("string")};/**
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
 */class zc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Bc{constructor(e){this._methodName=e}}/**
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
 */class ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ur._jsonSchemaVersion}}static fromJSON(e){if(hl(e,ur._jsonSchema))return new ur(e.latitude,e.longitude)}}ur._jsonSchemaVersion="firestore/geoPoint/1.0",ur._jsonSchema={type:dt("string",ur._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
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
 */class cr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let u=0;u<i.length;++u)if(i[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:cr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hl(e,cr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new cr(e.vectorValues);throw new ie(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cr._jsonSchemaVersion="firestore/vectorValue/1.0",cr._jsonSchema={type:dt("string",cr._jsonSchemaVersion),vectorValues:dt("object")};/**
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
 */const LA=/^__.*__$/;class jA{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Vs(e,this.data,this.fieldMask,t,this.fieldTransforms):new dl(e,this.data,t,this.fieldTransforms)}}class d0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Vs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function f0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ac:r})}}class ep{constructor(e,t,i,o,u,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ep({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return mc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(f0(this.Ac)&&LA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class FA{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Mc(e)}Cc(e,t,i,o=!1){return new ep({Ac:e,methodName:t,Dc:i,path:bt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $c(r){const e=r._freezeSettings(),t=Mc(r._databaseId);return new FA(r._databaseId,!!e.ignoreUndefinedProperties,t)}function p0(r,e,t,i,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);np("Data must be an object, but it was:",h,i);const f=m0(i,h);let g,_;if(u.merge)g=new pn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const x of u.mergeFields){const I=mf(e,x,t);if(!h.contains(I))throw new ie(H.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);y0(T,I)||T.push(I)}g=new pn(T),_=h.fieldTransforms.filter((x=>g.covers(x.field)))}else g=null,_=h.fieldTransforms;return new jA(new rn(f),g,_)}class qc extends Bc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qc}}class tp extends Bc{_toFieldTransform(e){return new N1(e.path,new il)}isEqual(e){return e instanceof tp}}function UA(r,e,t,i){const o=r.Cc(1,e,t);np("Data must be an object, but it was:",o,i);const u=[],h=rn.empty();bs(i,((g,_)=>{const T=rp(e,g,t);_=xt(_);const x=o.yc(T);if(_ instanceof qc)u.push(T);else{const I=gl(_,x);I!=null&&(u.push(T),h.set(T,I))}}));const f=new pn(u);return new d0(h,f,o.fieldTransforms)}function zA(r,e,t,i,o,u){const h=r.Cc(1,e,t),f=[mf(e,i,t)],g=[o];if(u.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<u.length;I+=2)f.push(mf(e,u[I])),g.push(u[I+1]);const _=[],T=rn.empty();for(let I=f.length-1;I>=0;--I)if(!y0(_,f[I])){const F=f[I];let $=g[I];$=xt($);const q=h.yc(F);if($ instanceof qc)_.push(F);else{const j=gl($,q);j!=null&&(_.push(F),T.set(F,j))}}const x=new pn(_);return new d0(T,x,h.fieldTransforms)}function BA(r,e,t,i=!1){return gl(t,r.Cc(i?4:3,e))}function gl(r,e){if(g0(r=xt(r)))return np("Unsupported field value:",e,r),m0(r,e);if(r instanceof Bc)return(function(i,o){if(!f0(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const u=i._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const u=[];let h=0;for(const f of i){let g=gl(f,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(i,o){if((i=xt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return R1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const u=qe.fromDate(i);return{timestampValue:cc(o.serializer,u)}}if(i instanceof qe){const u=new qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:cc(o.serializer,u)}}if(i instanceof ur)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof xn)return{bytesValue:Mv(o.serializer,i._byteString)};if(i instanceof rt){const u=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Mf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof cr)return(function(h,f){return{mapValue:{fields:{[hv]:{stringValue:dv},[ac]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.Sc("VectorValues must only contain numeric values.");return Df(f.serializer,_)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${xc(i)}`)})(r,e)}function m0(r,e){const t={};return iv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(r,((i,o)=>{const u=gl(o,e.mc(i));u!=null&&(t[i]=u)})),{mapValue:{fields:t}}}function g0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof qe||r instanceof ur||r instanceof xn||r instanceof rt||r instanceof Bc||r instanceof cr)}function np(r,e,t){if(!g0(t)||!rv(t)){const i=xc(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function mf(r,e,t){if((e=xt(e))instanceof zc)return e._internalPath;if(typeof e=="string")return rp(r,e);throw mc("Field path arguments must be of type string or ",r,!1,void 0,t)}const $A=new RegExp("[~\\*/\\[\\]]");function rp(r,e,t){if(e.search($A)>=0)throw mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new zc(...e.split("."))._internalPath}catch{throw mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function mc(r,e,t,i,o){const u=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ie(H.INVALID_ARGUMENT,f+r+g)}function y0(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class _0{constructor(e,t,i,o,u){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qA extends _0{data(){return super.data()}}function Hc(r,e){return typeof e=="string"?rp(r,e):e instanceof zc?e._internalPath:e._delegate._internalPath}/**
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
 */function v0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sp{}class w0 extends sp{}function gf(r,e,...t){let i=[];e instanceof sp&&i.push(e),i=i.concat(t),(function(u){const h=u.filter((g=>g instanceof ip)).length,f=u.filter((g=>g instanceof Wc)).length;if(h>1||h>0&&f>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class Wc extends w0{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Wc(e,t,i)}_apply(e){const t=this._parse(e);return E0(e._query,t),new Os(e.firestore,e.converter,rf(e._query,t))}_parse(e){const t=$c(e.firestore);return(function(u,h,f,g,_,T,x){let I;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){e_(x,T);const $=[];for(const q of x)$.push(Zy(g,u,q));I={arrayValue:{values:$}}}else I=Zy(g,u,x)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||e_(x,T),I=BA(f,h,x,T==="in"||T==="not-in");return ht.create(_,T,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function HA(r,e,t){const i=e,o=Hc("where",r);return Wc._create(o,i,t)}class ip extends sp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ip(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Wn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const f=u.getFlattenedFilters();for(const g of f)E0(h,g),h=rf(h,g)})(e._query,t),new Os(e.firestore,e.converter,rf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class op extends w0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new op(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sl(u,h)})(e._query,this._field,this._direction);return new Os(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new zo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Jy(r,e="asc"){const t=e,i=Hc("orderBy",r);return op._create(i,t)}function Zy(r,e,t){if(typeof(t=xt(t))=="string"){if(t==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wv(e)&&t.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!fe.isDocumentKey(i))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return py(r,new fe(i))}if(t instanceof rt)return py(r,t._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xc(t)}.`)}function e_(r,e){if(!Array.isArray(r)||r.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function E0(r,e){const t=(function(o,u){for(const h of o)for(const f of h.getFlattenedFilters())if(u.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class WA{convertValue(e,t="none"){switch(Ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ks(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return bs(e,((o,u)=>{i[o]=this.convertValue(u,t)})),i}convertVectorValue(e){const t=e.fields?.[ac].arrayValue?.values?.map((i=>at(i.doubleValue)));return new cr(t)}convertGeoPoint(e){return new ur(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=kc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(tl(e));default:return null}}convertTimestamp(e){const t=Rs(e);return new qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);ze(Bv(i),9688,{name:e});const o=new nl(i.get(1),i.get(3)),u=new fe(i.popFirst(5));return o.isEqual(t)||Ur(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function T0(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class qa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pi extends _0{constructor(e,t,i,o,u,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Hc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=pi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}pi._jsonSchemaVersion="firestore/documentSnapshot/1.0",pi._jsonSchema={type:dt("string",pi._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Xu extends pi{data(e={}){return super.data(e)}}class mi{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new qa(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Xu(this._firestore,this._userDataWriter,i.key,i,new qa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new Xu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>u||f.type!==3)).map((f=>{const g=new Xu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),T=h.indexOf(f.doc.key)),{type:GA(f.type),doc:g,oldIndex:_,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),i.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:r})}}/**
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
 */function KA(r){r=sn(r,rt);const e=sn(r.firestore,Br);return DA(Uc(e),r._key).then((t=>x0(e,r,t)))}mi._jsonSchemaVersion="firestore/querySnapshot/1.0",mi._jsonSchema={type:dt("string",mi._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class ap extends WA{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,t)}}function ll(r){r=sn(r,Os);const e=sn(r.firestore,Br),t=Uc(e),i=new ap(e);return v0(r._query),bA(t,r._query).then((o=>new mi(e,i,r,o)))}function lp(r,e,t){r=sn(r,rt);const i=sn(r.firestore,Br),o=T0(r.converter,e,t);return Gc(i,[p0($c(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Rn.none())])}function up(r,e,t,...i){r=sn(r,rt);const o=sn(r.firestore,Br),u=$c(o);let h;return h=typeof(e=xt(e))=="string"||e instanceof zc?zA(u,"updateDoc",r._key,e,t,i):UA(u,"updateDoc",r._key,e),Gc(o,[h.toMutation(r._key,Rn.exists(!0))])}function I0(r){return Gc(sn(r.firestore,Br),[new bf(r._key,Rn.none())])}function S0(r,e){const t=sn(r.firestore,Br),i=jr(r),o=T0(r.converter,e);return Gc(t,[p0($c(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,Rn.exists(!1))]).then((()=>i))}function A0(r,...e){r=xt(r);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Xy(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Xy(e[i])){const g=e[i];e[i]=g.next?.bind(g),e[i+1]=g.error?.bind(g),e[i+2]=g.complete?.bind(g)}let u,h,f;if(r instanceof rt)h=sn(r.firestore,Br),f=Pc(r._key.path),u={next:g=>{e[i]&&e[i](x0(h,r,g))},error:e[i+1],complete:e[i+2]};else{const g=sn(r,Os);h=sn(g.firestore,Br),f=g._query;const _=new ap(h);u={next:T=>{e[i]&&e[i](new mi(h,_,g,T))},error:e[i+1],complete:e[i+2]},v0(r._query)}return(function(_,T,x,I){const F=new Zf(I),$=new Yf(T,F,x);return _.asyncQueue.enqueueAndForget((async()=>Gf(await pc(_),$))),()=>{F.Nu(),_.asyncQueue.enqueueAndForget((async()=>Kf(await pc(_),$)))}})(Uc(h),f,o,u)}function Gc(r,e){return(function(i,o){const u=new Mr;return i.asyncQueue.enqueueAndForget((async()=>wA(await NA(i),o,u))),u.promise})(Uc(r),e)}function x0(r,e,t){const i=t.docs.get(e._key),o=new ap(r);return new pi(r,o,e._key,i,new qa(t.hasPendingWrites,t.fromCache),e.converter)}function zu(){return new tp("serverTimestamp")}(function(e,t=!0){(function(o){jo=o})(Lo),fr(new Hn("firestore",((i,{instanceIdentifier:o,options:u})=>{const h=i.getProvider("app").getImmediate(),f=new Br(new UI(i.getProvider("auth-internal")),new $I(h,i.getProvider("app-check-internal")),(function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nl(_.options.projectId,T)})(h,o),h);return u={useFetchStreams:t,...u},f._setSettings(u),f}),"PUBLIC").setMultipleInstances(!0)),Cn(ty,ny,e),Cn(ty,ny,"esm2020")})();var QA="firebase",YA="12.1.0";/**
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
 */Cn(QA,YA,"app");const C0="@firebase/installations",cp="0.6.19";/**
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
 */const R0=1e4,k0=`w:${cp}`,P0="FIS_v2",XA="https://firebaseinstallations.googleapis.com/v1",JA=3600*1e3,ZA="installations",ex="Installations";/**
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
 */const tx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vi=new Ti(ZA,ex,tx);function N0(r){return r instanceof Gn&&r.code.includes("request-failed")}/**
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
 */function D0({projectId:r}){return`${XA}/projects/${r}/installations`}function b0(r){return{token:r.token,requestStatus:2,expiresIn:rx(r.expiresIn),creationTime:Date.now()}}async function V0(r,e){const i=(await e.json()).error;return vi.create("request-failed",{requestName:r,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function O0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function nx(r,{refreshToken:e}){const t=O0(r);return t.append("Authorization",sx(e)),t}async function M0(r){const e=await r();return e.status>=500&&e.status<600?r():e}function rx(r){return Number(r.replace("s","000"))}function sx(r){return`${P0} ${r}`}/**
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
 */async function ix({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const i=D0(r),o=O0(r),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:P0,appId:r.appId,sdkVersion:k0},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await M0(()=>fetch(i,f));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:b0(_.authToken)}}else throw await V0("Create Installation",g)}/**
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
 */function L0(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function ox(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ax=/^[cdef][\w-]{21}$/,yf="";function lx(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=ux(r);return ax.test(t)?t:yf}catch{return yf}}function ux(r){return ox(r).substr(0,22)}/**
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
 */function Kc(r){return`${r.appName}!${r.appId}`}/**
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
 */const j0=new Map;function F0(r,e){const t=Kc(r);U0(t,e),cx(t,e)}function U0(r,e){const t=j0.get(r);if(t)for(const i of t)i(e)}function cx(r,e){const t=hx();t&&t.postMessage({key:r,fid:e}),dx()}let fi=null;function hx(){return!fi&&"BroadcastChannel"in self&&(fi=new BroadcastChannel("[Firebase] FID Change"),fi.onmessage=r=>{U0(r.data.key,r.data.fid)}),fi}function dx(){j0.size===0&&fi&&(fi.close(),fi=null)}/**
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
 */const fx="firebase-installations-database",px=1,wi="firebase-installations-store";let Fd=null;function hp(){return Fd||(Fd=q_(fx,px,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(wi)}}})),Fd}async function gc(r,e){const t=Kc(r),o=(await hp()).transaction(wi,"readwrite"),u=o.objectStore(wi),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&F0(r,e.fid),e}async function z0(r){const e=Kc(r),i=(await hp()).transaction(wi,"readwrite");await i.objectStore(wi).delete(e),await i.done}async function Qc(r,e){const t=Kc(r),o=(await hp()).transaction(wi,"readwrite"),u=o.objectStore(wi),h=await u.get(t),f=e(h);return f===void 0?await u.delete(t):await u.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&F0(r,f.fid),f}/**
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
 */async function dp(r){let e;const t=await Qc(r.appConfig,i=>{const o=mx(i),u=gx(r,o);return e=u.registrationPromise,u.installationEntry});return t.fid===yf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function mx(r){const e=r||{fid:lx(),registrationStatus:0};return B0(e)}function gx(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(vi.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=yx(r,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_x(r)}:{installationEntry:e}}async function yx(r,e){try{const t=await ix(r,e);return gc(r.appConfig,t)}catch(t){throw N0(t)&&t.customData.serverCode===409?await z0(r.appConfig):await gc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _x(r){let e=await t_(r.appConfig);for(;e.registrationStatus===1;)await L0(100),e=await t_(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await dp(r);return i||t}return e}function t_(r){return Qc(r,e=>{if(!e)throw vi.create("installation-not-found");return B0(e)})}function B0(r){return vx(r)?{fid:r.fid,registrationStatus:0}:r}function vx(r){return r.registrationStatus===1&&r.registrationTime+R0<Date.now()}/**
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
 */async function wx({appConfig:r,heartbeatServiceProvider:e},t){const i=Ex(r,t),o=nx(r,t),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:k0,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await M0(()=>fetch(i,f));if(g.ok){const _=await g.json();return b0(_)}else throw await V0("Generate Auth Token",g)}function Ex(r,{fid:e}){return`${D0(r)}/${e}/authTokens:generate`}/**
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
 */async function fp(r,e=!1){let t;const i=await Qc(r.appConfig,u=>{if(!$0(u))throw vi.create("not-registered");const h=u.authToken;if(!e&&Sx(h))return u;if(h.requestStatus===1)return t=Tx(r,e),u;{if(!navigator.onLine)throw vi.create("app-offline");const f=xx(u);return t=Ix(r,f),f}});return t?await t:i.authToken}async function Tx(r,e){let t=await n_(r.appConfig);for(;t.authToken.requestStatus===1;)await L0(100),t=await n_(r.appConfig);const i=t.authToken;return i.requestStatus===0?fp(r,e):i}function n_(r){return Qc(r,e=>{if(!$0(e))throw vi.create("not-registered");const t=e.authToken;return Cx(t)?{...e,authToken:{requestStatus:0}}:e})}async function Ix(r,e){try{const t=await wx(r,e),i={...e,authToken:t};return await gc(r.appConfig,i),t}catch(t){if(N0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await z0(r.appConfig);else{const i={...e,authToken:{requestStatus:0}};await gc(r.appConfig,i)}throw t}}function $0(r){return r!==void 0&&r.registrationStatus===2}function Sx(r){return r.requestStatus===2&&!Ax(r)}function Ax(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+JA}function xx(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function Cx(r){return r.requestStatus===1&&r.requestTime+R0<Date.now()}/**
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
 */async function Rx(r){const e=r,{installationEntry:t,registrationPromise:i}=await dp(e);return i?i.catch(console.error):fp(e).catch(console.error),t.fid}/**
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
 */async function kx(r,e=!1){const t=r;return await Px(t),(await fp(t,e)).token}async function Px(r){const{registrationPromise:e}=await dp(r);e&&await e}/**
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
 */function Nx(r){if(!r||!r.options)throw Ud("App Configuration");if(!r.name)throw Ud("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Ud(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Ud(r){return vi.create("missing-app-config-values",{valueName:r})}/**
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
 */const q0="installations",Dx="installations-internal",bx=r=>{const e=r.getProvider("app").getImmediate(),t=Nx(e),i=Ii(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Vx=r=>{const e=r.getProvider("app").getImmediate(),t=Ii(e,q0).getImmediate();return{getId:()=>Rx(t),getToken:o=>kx(t,o)}};function Ox(){fr(new Hn(q0,bx,"PUBLIC")),fr(new Hn(Dx,Vx,"PRIVATE"))}Ox();Cn(C0,cp);Cn(C0,cp,"esm2020");/**
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
 */const yc="analytics",Mx="firebase_id",Lx="origin",jx=60*1e3,Fx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pp="https://www.googletagmanager.com/gtag/js";/**
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
 */const on=new Ac("@firebase/analytics");/**
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
 */const Ux={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mn=new Ti("analytics","Analytics",Ux);/**
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
 */function zx(r){if(!r.startsWith(pp)){const e=mn.create("invalid-gtag-resource",{gtagURL:r});return on.warn(e.message),""}return r}function H0(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function Bx(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function $x(r,e){const t=Bx("firebase-js-sdk-policy",{createScriptURL:zx}),i=document.createElement("script"),o=`${pp}?l=${r}&id=${e}`;i.src=t?t?.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function qx(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Hx(r,e,t,i,o,u){const h=i[o];try{if(h)await e[h];else{const g=(await H0(t)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(f){on.error(f)}r("config",o,u)}async function Wx(r,e,t,i,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await H0(t);for(const g of h){const _=f.find(x=>x.measurementId===g),T=_&&e[_.appId];if(T)u.push(T);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",i,o||{})}catch(u){on.error(u)}}function Gx(r,e,t,i){async function o(u,...h){try{if(u==="event"){const[f,g]=h;await Wx(r,e,t,f,g)}else if(u==="config"){const[f,g]=h;await Hx(r,e,t,i,f,g)}else if(u==="consent"){const[f,g]=h;r("consent",f,g)}else if(u==="get"){const[f,g,_]=h;r("get",f,g,_)}else if(u==="set"){const[f]=h;r("set",f)}else r(u,...h)}catch(f){on.error(f)}}return o}function Kx(r,e,t,i,o){let u=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=Gx(u,r,e,t),{gtagCore:u,wrappedGtag:window[o]}}function Qx(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(pp)&&t.src.includes(r))return t;return null}/**
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
 */const Yx=30,Xx=1e3;class Jx{constructor(e={},t=Xx){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const W0=new Jx;function Zx(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function eC(r){const{appId:e,apiKey:t}=r,i={method:"GET",headers:Zx(t)},o=Fx.replace("{app-id}",e),u=await fetch(o,i);if(u.status!==200&&u.status!==304){let h="";try{const f=await u.json();f.error?.message&&(h=f.error.message)}catch{}throw mn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:h})}return u.json()}async function tC(r,e=W0,t){const{appId:i,apiKey:o,measurementId:u}=r.options;if(!i)throw mn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:i};throw mn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new sC;return setTimeout(async()=>{f.abort()},jx),G0({appId:i,apiKey:o,measurementId:u},h,f,e)}async function G0(r,{throttleEndTimeMillis:e,backoffCount:t},i,o=W0){const{appId:u,measurementId:h}=r;try{await nC(i,e)}catch(f){if(h)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:u,measurementId:h};throw f}try{const f=await eC(r);return o.deleteThrottleMetadata(u),f}catch(f){const g=f;if(!rC(g)){if(o.deleteThrottleMetadata(u),h)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:u,measurementId:h};throw f}const _=Number(g?.customData?.httpStatus)===503?Hg(t,o.intervalMillis,Yx):Hg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(u,T),on.debug(`Calling attemptFetch again in ${_} millis`),G0(r,T,i,o)}}function nC(r,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(u),i(mn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rC(r){if(!(r instanceof Gn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class sC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iC(r,e,t,i,o){if(o&&o.global){r("event",t,i);return}else{const u=await e,h={...i,send_to:u};r("event",t,h)}}/**
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
 */async function oC(){if(U_())try{await z_()}catch(r){return on.warn(mn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return on.warn(mn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function aC(r,e,t,i,o,u,h){const f=tC(r);f.then(I=>{t[I.measurementId]=I.appId,r.options.measurementId&&I.measurementId!==r.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>on.error(I)),e.push(f);const g=oC().then(I=>{if(I)return i.getId()}),[_,T]=await Promise.all([f,g]);Qx(u)||$x(u,_.measurementId),o("js",new Date);const x=h?.config??{};return x[Lx]="firebase",x.update=!0,T!=null&&(x[Mx]=T),o("config",_.measurementId,x),_.measurementId}/**
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
 */class lC{constructor(e){this.app=e}_delete(){return delete Ya[this.app.options.appId],Promise.resolve()}}let Ya={},r_=[];const s_={};let zd="dataLayer",uC="gtag",i_,K0,o_=!1;function cC(){const r=[];if(F_()&&r.push("This is a browser extension environment."),vT()||r.push("Cookies are not available."),r.length>0){const e=r.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=mn.create("invalid-analytics-context",{errorInfo:e});on.warn(t.message)}}function hC(r,e,t){cC();const i=r.options.appId;if(!i)throw mn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mn.create("no-api-key");if(Ya[i]!=null)throw mn.create("already-exists",{id:i});if(!o_){qx(zd);const{wrappedGtag:u,gtagCore:h}=Kx(Ya,r_,s_,zd,uC);K0=u,i_=h,o_=!0}return Ya[i]=aC(r,r_,s_,e,i_,zd,t),new lC(r)}function dC(r=Sf()){r=xt(r);const e=Ii(r,yc);return e.isInitialized()?e.getImmediate():fC(r)}function fC(r,e={}){const t=Ii(r,yc);if(t.isInitialized()){const o=t.getImmediate();if(xs(e,t.getOptions()))return o;throw mn.create("already-initialized")}return t.initialize({options:e})}function pC(r,e,t,i){r=xt(r),iC(K0,Ya[r.app.options.appId],e,t,i).catch(o=>on.error(o))}const a_="@firebase/analytics",l_="0.10.18";function mC(){fr(new Hn(yc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return hC(i,o,t)},"PUBLIC")),fr(new Hn("analytics-internal",r,"PRIVATE")),Cn(a_,l_),Cn(a_,l_,"esm2020");function r(e){try{const t=e.getProvider(yc).getImmediate();return{logEvent:(i,o,u)=>pC(t,i,o,u)}}catch(t){throw mn.create("interop-component-reg-failed",{reason:t})}}}mC();function Q0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gC=Q0,Y0=new Ti("auth","Firebase",Q0());/**
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
 */const _c=new Ac("@firebase/auth");function yC(r,...e){_c.logLevel<=Re.WARN&&_c.warn(`Auth (${Lo}): ${r}`,...e)}function Ju(r,...e){_c.logLevel<=Re.ERROR&&_c.error(`Auth (${Lo}): ${r}`,...e)}/**
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
 */function $r(r,...e){throw mp(r,...e)}function hr(r,...e){return mp(r,...e)}function X0(r,e,t){const i={...gC(),[e]:t};return new Ti("auth","Firebase",i).create(e,{appName:r.name})}function gi(r){return X0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mp(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return Y0.create(r,...e)}function ve(r,e,...t){if(!r)throw mp(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ju(e),new Error(e)}function qr(r,e){r||Vr(e)}/**
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
 */function _f(){return typeof self<"u"&&self.location?.href||""}function _C(){return u_()==="http:"||u_()==="https:"}function u_(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function vC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_C()||F_()||"connection"in navigator)?navigator.onLine:!0}function wC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class yl{constructor(e,t){this.shortDelay=e,this.longDelay=t,qr(t>e,"Short delay should be less than long delay!"),this.isMobile=fT()||gT()}get(){return vC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gp(r,e){qr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class J0{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],IC=new yl(3e4,6e4);function yp(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function $o(r,e,t,i,o={}){return Z0(r,o,async()=>{let u={},h={};i&&(e==="GET"?h=i:u={body:JSON.stringify(i)});const f=cl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return mT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Mo(r.emulatorConfig.host)&&(_.credentials="include"),J0.fetch()(await ew(r,r.config.apiHost,t,f),_)})}async function Z0(r,e,t){r._canInitEmulator=!1;const i={...EC,...e};try{const o=new AC(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Bu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const f=u.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Bu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Bu(r,"user-disabled",h);const T=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw X0(r,T,_);$r(r,T)}}catch(o){if(o instanceof Gn)throw o;$r(r,"network-request-failed",{message:String(o)})}}async function SC(r,e,t,i,o={}){const u=await $o(r,e,t,i,o);return"mfaPendingCredential"in u&&$r(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function ew(r,e,t,i){const o=`${e}${t}?${i}`,u=r,h=u.config.emulator?gp(r.config,o):`${r.config.apiScheme}://${o}`;return TC.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class AC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(hr(this.auth,"network-request-failed")),IC.get())})}}function Bu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=hr(r,e,i);return o.customData._tokenResponse=t,o}/**
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
 */async function xC(r,e){return $o(r,"POST","/v1/accounts:delete",e)}async function vc(r,e){return $o(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CC(r,e=!1){const t=xt(r),i=await t.getIdToken(e),o=_p(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:i,authTime:Xa(Bd(o.auth_time)),issuedAtTime:Xa(Bd(o.iat)),expirationTime:Xa(Bd(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Bd(r){return Number(r)*1e3}function _p(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const o=b_(t);return o?JSON.parse(o):(Ju("Failed to decode base64 JWT payload"),null)}catch(o){return Ju("Caught error parsing JWT payload as JSON",o?.toString()),null}}function c_(r){const e=_p(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ul(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gn&&RC(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function RC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class kC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xa(this.lastLoginAt),this.creationTime=Xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wc(r){const e=r.auth,t=await r.getIdToken(),i=await ul(r,vc(e,{idToken:t}));ve(i?.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?tw(o.providerUserInfo):[],h=NC(r.providerData,u),f=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!h?.length,_=f?g:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new vf(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,T)}async function PC(r){const e=xt(r);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NC(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function tw(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function DC(r,e){const t=await Z0(r,{},async()=>{const i=cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await ew(r,o,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&Mo(r.emulatorConfig.host)&&(g.credentials="include"),J0.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bC(r,e){return $o(r,"POST","/v2/accounts:revokeToken",yp(r,e))}/**
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
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):c_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=c_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:u}=await DC(e,t);this.updateTokensAndExpiration(i,o,Number(u))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:u}=t,h=new Ao;return i&&(ve(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function gs(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class qn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new kC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new vf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ul(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CC(this,e)}reload(){return PC(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(or(this.auth.app))return Promise.reject(gi(this.auth));const e=await this.getIdToken();return await ul(this,xC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:x,emailVerified:I,isAnonymous:F,providerData:$,stsTokenManager:q}=t;ve(x&&q,e,"internal-error");const j=Ao.fromJSON(this.name,q);ve(typeof x=="string",e,"internal-error"),gs(i,e.name),gs(o,e.name),ve(typeof I=="boolean",e,"internal-error"),ve(typeof F=="boolean",e,"internal-error"),gs(u,e.name),gs(h,e.name),gs(f,e.name),gs(g,e.name),gs(_,e.name),gs(T,e.name);const Z=new qn({uid:x,auth:e,email:o,emailVerified:I,displayName:i,isAnonymous:F,photoURL:h,phoneNumber:u,tenantId:f,stsTokenManager:j,createdAt:_,lastLoginAt:T});return $&&Array.isArray($)&&(Z.providerData=$.map(re=>({...re}))),g&&(Z._redirectEventId=g),Z}static async _fromIdTokenResponse(e,t,i=!1){const o=new Ao;o.updateFromServerResponse(t);const u=new qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await wc(u),u}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?tw(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,f=new Ao;f.updateFromIdToken(i);const g=new qn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new vf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,_),g}}/**
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
 */const h_=new Map;function Or(r){qr(r instanceof Function,"Expected a class definition");let e=h_.get(r);return e?(qr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,h_.set(r,e),e)}/**
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
 */class nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nw.type="NONE";const d_=nw;/**
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
 */function Zu(r,e,t){return`firebase:${r}:${e}:${t}`}class xo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:u}=this.auth;this.fullUserKey=Zu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Zu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await vc(this.auth,{idToken:e}).catch(()=>{});return t?qn._fromGetAccountInfoResponse(this.auth,t,e):null}return qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xo(Or(d_),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Or(d_);const h=Zu(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const T=await _._get(h);if(T){let x;if(typeof T=="string"){const I=await vc(e,{idToken:T}).catch(()=>{});if(!I)break;x=await qn._fromGetAccountInfoResponse(e,I,T)}else x=qn._fromJSON(e,T);_!==u&&(f=x),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new xo(u,e,i):(u=g[0],f&&await u._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new xo(u,e,i))}}/**
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
 */function f_(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ow(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lw(e))return"Blackberry";if(uw(e))return"Webos";if(sw(e))return"Safari";if((e.includes("chrome/")||iw(e))&&!e.includes("edge/"))return"Chrome";if(aw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function rw(r=$t()){return/firefox\//i.test(r)}function sw(r=$t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iw(r=$t()){return/crios\//i.test(r)}function ow(r=$t()){return/iemobile/i.test(r)}function aw(r=$t()){return/android/i.test(r)}function lw(r=$t()){return/blackberry/i.test(r)}function uw(r=$t()){return/webos/i.test(r)}function vp(r=$t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function VC(r=$t()){return vp(r)&&!!window.navigator?.standalone}function OC(){return yT()&&document.documentMode===10}function cw(r=$t()){return vp(r)||aw(r)||uw(r)||lw(r)||/windows phone/i.test(r)||ow(r)}/**
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
 */function hw(r,e=[]){let t;switch(r){case"Browser":t=f_($t());break;case"Worker":t=`${f_($t())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Lo}/${i}`}/**
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
 */class MC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=u=>new Promise((h,f)=>{try{const g=e(u);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function LC(r,e={}){return $o(r,"GET","/v2/passwordPolicy",yp(r,e))}/**
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
 */const jC=6;class FC{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class UC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new p_(this),this.idTokenSubscription=new p_(this),this.beforeStateQueue=new MC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vc(this,{idToken:e}),i=await qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(or(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=i?._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===h)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(u){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(or(this.app))return Promise.reject(gi(this));const t=e?xt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return or(this.app)?Promise.reject(gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return or(this.app)?Promise.reject(gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LC(this),t=new FC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await bC(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(or(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&yC(`Error while retrieving App Check token: ${e.error}`),e?.token}}function wp(r){return xt(r)}class p_{constructor(e){this.auth=e,this.observer=null,this.addObserver=ST(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ep={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zC(r){Ep=r}function BC(r){return Ep.loadJS(r)}function $C(){return Ep.gapiScript}function qC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function HC(r,e){const t=Ii(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(xs(u,e??{}))return o;$r(o,"already-initialized")}return t.initialize({options:e})}function WC(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Or);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function GC(r,e,t){const i=wp(r);ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,u=dw(e),{host:h,port:f}=KC(e),g=f===null?"":`:${f}`,_={url:`${u}//${h}${g}/`},T=Object.freeze({host:h,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ve(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ve(xs(_,i.config.emulator)&&xs(T,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=T,i.settings.appVerificationDisabledForTesting=!0,Mo(h)?(L_(`${u}//${h}${g}`),j_("Auth",!0)):QC()}function dw(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function KC(r){const e=dw(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const u=o[1];return{host:u,port:m_(i.substr(u.length+1))}}else{const[u,h]=i.split(":");return{host:u,port:m_(h)}}}function m_(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function QC(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class fw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}/**
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
 */async function Co(r,e){return SC(r,"POST","/v1/accounts:signInWithIdp",yp(r,e))}/**
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
 */const YC="http://localhost";class Ei extends fw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$r("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...u}=t;if(!i||!o)return null;const h=new Ei(i,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Co(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Co(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Co(e,t)}buildRequest(){const e={requestUri:YC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cl(t)}return e}}/**
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
 */class pw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _l extends pw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ys extends _l{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ys.credential(e.oauthAccessToken)}catch{return null}}}ys.FACEBOOK_SIGN_IN_METHOD="facebook.com";ys.PROVIDER_ID="facebook.com";/**
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
 */class _s extends _l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ei._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return _s.credential(t,i)}catch{return null}}}_s.GOOGLE_SIGN_IN_METHOD="google.com";_s.PROVIDER_ID="google.com";/**
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
 */class vs extends _l{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vs.credential(e.oauthAccessToken)}catch{return null}}}vs.GITHUB_SIGN_IN_METHOD="github.com";vs.PROVIDER_ID="github.com";/**
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
 */class ws extends _l{constructor(){super("twitter.com")}static credential(e,t){return Ei._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ws.credential(t,i)}catch{return null}}}ws.TWITTER_SIGN_IN_METHOD="twitter.com";ws.PROVIDER_ID="twitter.com";/**
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
 */class Oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const u=await qn._fromIdTokenResponse(e,i,o),h=g_(i);return new Oo({user:u,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=g_(i);return new Oo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function g_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ec extends Gn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Ec.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Ec(e,t,i,o)}}function mw(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(r,u,e,i):u})}async function XC(r,e,t=!1){const i=await ul(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Oo._forOperation(r,"link",i)}/**
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
 */async function JC(r,e,t=!1){const{auth:i}=r;if(or(i.app))return Promise.reject(gi(i));const o="reauthenticate";try{const u=await ul(r,mw(i,o,e,r),t);ve(u.idToken,i,"internal-error");const h=_p(u.idToken);ve(h,i,"internal-error");const{sub:f}=h;return ve(r.uid===f,i,"user-mismatch"),Oo._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&$r(i,"user-mismatch"),u}}/**
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
 */async function ZC(r,e,t=!1){if(or(r.app))return Promise.reject(gi(r));const i="signIn",o=await mw(r,i,e),u=await Oo._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(u.user),u}function eR(r,e,t,i){return xt(r).onIdTokenChanged(e,t,i)}function tR(r,e,t){return xt(r).beforeAuthStateChanged(e,t)}const Tc="__sak";/**
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
 */class gw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tc,"1"),this.storage.removeItem(Tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nR=1e3,rR=10;class yw extends gw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},u=this.storage.getItem(i);OC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,rR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},nR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yw.type="LOCAL";const sR=yw;/**
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
 */class _w extends gw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_w.type="SESSION";const vw=_w;/**
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
 */function iR(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Yc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,u)),g=await iR(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yc.receivers=[];/**
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
 */function Tp(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class oR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((f,g)=>{const _=Tp("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(x){const I=x;if(I.data.eventId===_)switch(I.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(I.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function dr(){return window}function aR(r){dr().location.href=r}/**
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
 */function ww(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function lR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uR(){return navigator?.serviceWorker?.controller||null}function cR(){return ww()?self:null}/**
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
 */const Ew="firebaseLocalStorageDb",hR=1,Ic="firebaseLocalStorage",Tw="fbase_key";class vl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xc(r,e){return r.transaction([Ic],e?"readwrite":"readonly").objectStore(Ic)}function dR(){const r=indexedDB.deleteDatabase(Ew);return new vl(r).toPromise()}function wf(){const r=indexedDB.open(Ew,hR);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Ic,{keyPath:Tw})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Ic)?e(i):(i.close(),await dR(),e(await wf()))})})}async function y_(r,e,t){const i=Xc(r,!0).put({[Tw]:e,value:t});return new vl(i).toPromise()}async function fR(r,e){const t=Xc(r,!1).get(e),i=await new vl(t).toPromise();return i===void 0?null:i.value}function __(r,e){const t=Xc(r,!0).delete(e);return new vl(t).toPromise()}const pR=800,mR=3;class Iw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>mR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ww()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(cR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await lR(),!this.activeServiceWorker)return;this.sender=new oR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wf();return await y_(e,Tc,"1"),await __(e,Tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>y_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>fR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>__(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Xc(o,!1).getAll();return new vl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iw.type="LOCAL";const gR=Iw;new yl(3e4,6e4);/**
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
 */function yR(r,e){return e?Or(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Ip extends fw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _R(r){return ZC(r.auth,new Ip(r),r.bypassAuthState)}function vR(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),JC(t,new Ip(r),r.bypassAuthState)}async function wR(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),XC(t,new Ip(r),r.bypassAuthState)}/**
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
 */class Sw{constructor(e,t,i,o,u=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:u,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _R;case"linkViaPopup":case"linkViaRedirect":return wR;case"reauthViaPopup":case"reauthViaRedirect":return vR;default:$r(this.auth,"internal-error")}}resolve(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ER=new yl(2e3,1e4);class Io extends Sw{constructor(e,t,i,o,u){super(e,t,o,u),this.provider=i,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){qr(this.filter.length===1,"Popup operations only handle one event");const e=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(hr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(hr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ER.get())};e()}}Io.currentPopupAction=null;/**
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
 */const TR="pendingRedirect",ec=new Map;class IR extends Sw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ec.get(this.auth._key());if(!e){try{const i=await SR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ec.set(this.auth._key(),e)}return this.bypassAuthState||ec.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SR(r,e){const t=CR(e),i=xR(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function AR(r,e){ec.set(r._key(),e)}function xR(r){return Or(r._redirectPersistence)}function CR(r){return Zu(TR,r.config.apiKey,r.name)}async function RR(r,e,t=!1){if(or(r.app))return Promise.reject(gi(r));const i=wp(r),o=yR(i,e),h=await new IR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const kR=600*1e3;class PR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Aw(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(hr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kR&&this.cachedEventUids.clear(),this.cachedEventUids.has(v_(e))}saveEventToCache(e){this.cachedEventUids.add(v_(e)),this.lastProcessedEventTime=Date.now()}}function v_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Aw({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function NR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Aw(r);default:return!1}}/**
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
 */async function DR(r,e={}){return $o(r,"GET","/v1/projects",e)}/**
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
 */const bR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VR=/^https?/;async function OR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await DR(r);for(const t of e)try{if(MR(t))return}catch{}$r(r,"unauthorized-domain")}function MR(r){const e=_f(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!VR.test(t))return!1;if(bR.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const LR=new yl(3e4,6e4);function w_(){const r=dr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function jR(r){return new Promise((e,t)=>{function i(){w_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{w_(),t(hr(r,"network-request-failed"))},timeout:LR.get()})}if(dr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(dr().gapi?.load)i();else{const o=qC("iframefcb");return dr()[o]=()=>{gapi.load?i():t(hr(r,"network-request-failed"))},BC(`${$C()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw tc=null,e})}let tc=null;function FR(r){return tc=tc||jR(r),tc}/**
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
 */const UR=new yl(5e3,15e3),zR="__/auth/iframe",BR="emulator/auth/iframe",$R={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HR(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?gp(e,BR):`https://${r.config.authDomain}/${zR}`,i={apiKey:e.apiKey,appName:r.name,v:Lo},o=qR.get(r.config.apiHost);o&&(i.eid=o);const u=r._getFrameworks();return u.length&&(i.fw=u.join(",")),`${t}?${cl(i).slice(1)}`}async function WR(r){const e=await FR(r),t=dr().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:HR(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$R,dontclear:!0},i=>new Promise(async(o,u)=>{await i.restyle({setHideOnLeave:!1});const h=hr(r,"network-request-failed"),f=dr().setTimeout(()=>{u(h)},UR.get());function g(){dr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const GR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KR=500,QR=600,YR="_blank",XR="http://localhost";class E_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JR(r,e,t,i=KR,o=QR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...GR,width:i.toString(),height:o.toString(),top:u,left:h},_=$t().toLowerCase();t&&(f=iw(_)?YR:t),rw(_)&&(e=e||XR,g.scrollbars="yes");const T=Object.entries(g).reduce((I,[F,$])=>`${I}${F}=${$},`,"");if(VC(_)&&f!=="_self")return ZR(e||"",f),new E_(null);const x=window.open(e||"",f,T);ve(x,r,"popup-blocked");try{x.focus()}catch{}return new E_(x)}function ZR(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const ek="__/auth/handler",tk="emulator/auth/handler",nk=encodeURIComponent("fac");async function T_(r,e,t,i,o,u){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Lo,eventId:o};if(e instanceof pw){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",IT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,x]of Object.entries({}))h[T]=x}if(e instanceof _l){const T=e.getScopes().filter(x=>x!=="");T.length>0&&(h.scopes=T.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const T of Object.keys(f))f[T]===void 0&&delete f[T];const g=await r._getAppCheckToken(),_=g?`#${nk}=${encodeURIComponent(g)}`:"";return`${rk(r)}?${cl(f).slice(1)}${_}`}function rk({config:r}){return r.emulator?gp(r,tk):`https://${r.authDomain}/${ek}`}/**
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
 */const $d="webStorageSupport";class sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vw,this._completeRedirectFn=RR,this._overrideRedirectResult=AR}async _openPopup(e,t,i,o){qr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await T_(e,t,i,_f(),o);return JR(e,u,Tp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const u=await T_(e,t,i,_f(),o);return aR(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(qr(u,"If manager is not set, promise should be"),u)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await WR(e),i=new PR(e);return t.register("authEvent",o=>(ve(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($d,{type:$d},o=>{const u=o?.[0]?.[$d];u!==void 0&&t(!!u),$r(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=OR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cw()||sw()||vp()}}const ik=sk;var I_="@firebase/auth",S_="1.11.0";/**
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
 */class ok{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ak(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lk(r){fr(new Hn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hw(r)},_=new UC(i,o,u,g);return WC(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),fr(new Hn("auth-internal",e=>{const t=wp(e.getProvider("auth").getImmediate());return(i=>new ok(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(I_,S_,ak(r)),Cn(I_,S_,"esm2020")}/**
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
 */const uk=300,ck=M_("authIdTokenMaxAge")||uk;let A_=null;const hk=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ck)return;const o=t?.token;A_!==o&&(A_=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function dk(r=Sf()){const e=Ii(r,"auth");if(e.isInitialized())return e.getImmediate();const t=HC(r,{popupRedirectResolver:ik,persistence:[gR,sR,vw]}),i=M_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(i,location.origin);if(location.origin===u.origin){const h=hk(u.toString());tR(t,h,()=>h(t.currentUser)),eR(t,f=>h(f))}}const o=V_("auth");return o&&GC(t,`http://${o}`),t}function fk(){return document.getElementsByTagName("head")?.[0]??document}zC({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const u=hr("internal-error");u.customData=o,t(u)},i.type="text/javascript",i.charset="UTF-8",fk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lk("Browser");const pk={apiKey:"AIzaSyAUpJ1n8uaUujJQiQg9VH0wRi5QcN3NDtE",authDomain:"agenda-8466d.firebaseapp.com",projectId:"agenda-8466d",storageBucket:"agenda-8466d.firebasestorage.app",messagingSenderId:"501812400667",appId:"1:501812400667:web:8e1d61ea6686ffe0195ebe",measurementId:"G-12X4KWCRYH"},Sp=H_(pk);dC(Sp);dk(Sp);const Vt=OA(Sp),Fa="events",x_="users",$u="programming_sessions",Ua="user_presence",qu={async getEvents(){try{const r=Lr(Vt,Fa);return(await ll(r)).docs.map(t=>({id:t.id,...t.data()}))}catch(r){return console.error("Erro ao buscar eventos:",r),[]}},async addEvent(r){try{const e=Lr(Vt,Fa);return(await S0(e,{...r,createdAt:qe.now()})).id}catch(e){throw console.error("Erro ao adicionar evento:",e),e}},async updateEvent(r,e){try{const t=jr(Vt,Fa,r);await up(t,{...e,updatedAt:qe.now()})}catch(t){throw console.error("Erro ao atualizar evento:",t),t}},async deleteEvent(r){try{const e=jr(Vt,Fa,r);await I0(e)}catch(e){throw console.error("Erro ao deletar evento:",e),e}},async getEventsByUser(r){try{const e=Lr(Vt,Fa),t=gf(e,HA("userId","==",r));return(await ll(t)).docs.map(o=>({id:o.id,...o.data()}))}catch(e){return console.error("Erro ao buscar eventos do usuário:",e),[]}}},Hu={async getSessions(){try{const r=Lr(Vt,$u),e=gf(r,Jy("startTime","desc"));return(await ll(e)).docs.map(i=>({id:i.id,...i.data()}))}catch(r){return console.error("Erro ao buscar sessões:",r),[]}},async startSession(r){try{const e=Lr(Vt,$u);return(await S0(e,{...r,startTime:new Date().toISOString(),isActive:!0})).id}catch(e){throw console.error("Erro ao iniciar sessão:",e),e}},async endSession(r){try{const e=jr(Vt,$u,r);await up(e,{endTime:new Date().toISOString(),isActive:!1})}catch(e){throw console.error("Erro ao finalizar sessão:",e),e}},subscribeToSessions(r){try{const e=Lr(Vt,$u),t=gf(e,Jy("startTime","desc"));return A0(t,o=>{const u=o.docs.map(h=>({id:h.id,...h.data()}));r(u)},o=>{console.error("Erro ao observar sessões:",o)})}catch(e){return console.error("Erro ao configurar observador de sessões:",e),()=>{}}}},mk={async getUsers(){try{const r=Lr(Vt,x_);return(await ll(r)).docs.map(t=>({id:t.id,...t.data()}))}catch(r){return console.error("Erro ao buscar usuários:",r),[]}},async syncUsers(r){try{for(const e of r){const t=jr(Vt,x_,e.id),i={...e};await lp(t,i,{merge:!0})}}catch(e){console.error("Erro ao sincronizar usuários:",e)}}},ci={async setUserOnline(r,e){try{const t=jr(Vt,Ua,r);await lp(t,{userId:r,isOnline:!0,lastSeen:zu(),sessionId:e,updatedAt:zu()})}catch(t){throw console.error("Erro ao marcar usuário como online:",t),t}},async setUserOffline(r){try{const e=jr(Vt,Ua,r);await up(e,{isOnline:!1,lastSeen:zu(),updatedAt:zu()})}catch(e){throw console.error("Erro ao marcar usuário como offline:",e),e}},subscribeToPresence(r){try{const e=Lr(Vt,Ua);return A0(e,i=>{const o=i.docs.map(u=>{const h=u.data();return{userId:h.userId,isOnline:h.isOnline,lastSeen:h.lastSeen?.toDate?.()?.toISOString()||new Date().toISOString(),sessionId:h.sessionId||""}}).filter(u=>u.userId!=="test-user");r(o)},i=>{console.error("Erro ao observar presença:",i)})}catch(e){return console.error("Erro ao configurar observador de presença:",e),()=>{}}},async getAllPresence(){try{const r=Lr(Vt,Ua);return(await ll(r)).docs.map(t=>{const i=t.data();return{userId:i.userId,isOnline:i.isOnline,lastSeen:i.lastSeen?.toDate?.()?.toISOString()||new Date().toISOString(),sessionId:i.sessionId||""}}).filter(t=>t.userId!=="test-user")}catch(r){return console.error("Erro ao buscar dados de presença:",r),[]}},async cleanupTestData(){try{const r=jr(Vt,Ua,"test-user");await I0(r)}catch{}}},Ap=()=>{const[r,e]=ye.useState([]),[t,i]=ye.useState(!0),[o,u]=ye.useState(null),h=ye.useRef(null),f=ye.useRef(g());function g(){return`session_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}ye.useEffect(()=>((()=>{try{i(!0),u(null),ci.cleanupTestData().catch(()=>{});const F=ci.subscribeToPresence($=>{e($),i(!1)});h.current=F,ci.getAllPresence().then($=>{e($),i(!1)}).catch($=>{console.error("Erro ao buscar dados iniciais de presença:",$),u("Erro ao carregar dados de presença"),i(!1)})}catch(F){console.error("Erro ao configurar listener de presença:",F),u("Erro ao configurar sistema de presença"),i(!1)}})(),()=>{h.current&&h.current()}),[]),ye.useEffect(()=>{const I=()=>{r.forEach(F=>{F.isOnline&&F.sessionId===f.current&&ci.setUserOffline(F.userId).catch(console.error)})};return window.addEventListener("beforeunload",I),()=>{window.removeEventListener("beforeunload",I)}},[r]);const _=ye.useCallback(async I=>{try{u(null),await ci.setUserOnline(I,f.current)}catch(F){throw console.error("Erro ao marcar usuário como online:",F),u("Erro ao marcar usuário como online"),F}},[]),T=ye.useCallback(async I=>{try{u(null),await ci.setUserOffline(I)}catch(F){throw console.error("Erro ao marcar usuário como offline:",F),u("Erro ao marcar usuário como offline"),F}},[]),x=ye.useCallback(I=>r.find($=>$.userId===I)?.isOnline||!1,[r]);return ye.useEffect(()=>{const I=setInterval(()=>{r.forEach(F=>{F.isOnline&&F.sessionId===f.current&&ci.setUserOnline(F.userId,f.current).catch(console.error)})},15e3);return()=>{clearInterval(I)}},[r]),{presenceData:r,setUserOnline:_,setUserOffline:T,isUserOnline:x,loading:t,error:o}},gk=({users:r,currentUserId:e})=>{const{presenceData:t,isUserOnline:i,loading:o}=Ap(),[u,h]=ye.useState(new Date);ye.useEffect(()=>{h(new Date)},[t]);const f=g=>{const _=t.find(q=>q.userId===g);if(!_||i(g))return"";const T=new Date(_.lastSeen),I=Math.floor((new Date().getTime()-T.getTime())/(1e3*60));if(I<1)return"Agora mesmo";if(I<60)return`${I}min atrás`;const F=Math.floor(I/60);return F<24?`${F}h atrás`:`${Math.floor(F/24)}d atrás`};return o?w.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100",children:[w.jsxs("h3",{className:"font-medium text-gray-900 mb-3 flex items-center text-sm",children:[w.jsx(zg,{className:"h-4 w-4 mr-2 text-purple-600"}),"Equipe"]}),w.jsx("div",{className:"space-y-2",children:w.jsx("div",{className:"animate-pulse",children:w.jsx("div",{className:"h-8 bg-gray-200 rounded"})})})]}):w.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100",children:[w.jsxs("h3",{className:"font-medium text-gray-900 mb-3 flex items-center text-sm",children:[w.jsx(zg,{className:"h-4 w-4 mr-2 text-purple-600"}),"Equipe"]}),w.jsx("div",{className:"space-y-2",children:r.map(g=>{const _=i(g.id),T=f(g.id),x=e===g.id;return w.jsxs("div",{className:"flex items-center space-x-2 p-1 rounded transition-colors",children:[w.jsxs("div",{className:`w-6 h-6 rounded-full ${g.color} flex items-center justify-center text-white font-bold text-xs relative`,children:[g.avatar,w.jsx("div",{className:`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${_?"bg-green-500":"bg-gray-300"} transition-colors duration-200`})]}),w.jsxs("div",{className:"flex-1",children:[w.jsxs("p",{className:"font-medium text-xs text-gray-900",children:[g.name,x&&w.jsx("span",{className:"text-purple-600 ml-1",children:"(Você)"})]}),w.jsx("p",{className:`text-xs transition-colors duration-200 ${_?"text-green-600":"text-gray-500"}`,children:_?"Online":`Offline${T?` • ${T}`:""}`})]})]},g.id)})}),w.jsx("div",{className:"mt-3 pt-2 border-t border-gray-100",children:w.jsxs("p",{className:"text-xs text-gray-500 text-center",children:[t.filter(g=>g.isOnline).length," de ",r.length," online"]})}),w.jsx("div",{className:"mt-2 flex items-center justify-center",children:w.jsxs("div",{className:"flex items-center space-x-1",children:[w.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"}),w.jsxs("span",{className:"text-xs text-gray-400",children:["Tempo real • ",u.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})]})]})})]})},yk=async()=>{try{console.log("🔥 Testando conexão com Firebase...");const r=jr(Vt,"test","connection");await lp(r,{message:"Teste de conexão",timestamp:new Date().toISOString()}),console.log("✅ Documento de teste criado com sucesso");const e=await KA(r);return e.exists()?console.log("✅ Documento de teste lido com sucesso:",e.data()):console.log("❌ Documento de teste não encontrado"),!0}catch(r){return console.error("❌ Erro na conexão com Firebase:",r),r.code==="permission-denied"?(console.error("🔒 Erro de permissão - verifique as regras do Firestore"),console.log(`
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
      `)):r.code==="failed-precondition"?console.error("🏗️ Firestore não está configurado - ative no console"):r.code==="unauthenticated"&&console.error("🔑 Problema de autenticação - verifique as credenciais"),!1}},_k=()=>{const[r,e]=ye.useState([]),[t,i]=ye.useState([]),[o,u]=ye.useState(!0),[h,f]=ye.useState(null),g=ye.useRef(null);ye.useEffect(()=>(_(),()=>{g.current&&g.current()}),[]);const _=async()=>{try{if(u(!0),console.log("🔄 Iniciando carregamento de dados..."),await yk()){console.log("🔥 Firebase conectado - sincronizando dados..."),await mk.syncUsers(br),console.log("👥 Usuários sincronizados");const[j,Z]=await Promise.all([qu.getEvents(),Hu.getSessions()]);console.log(`📅 ${j.length} eventos carregados`),console.log(`💻 ${Z.length} sessões carregadas`),e(j),i(Z),f(null);const re=Hu.subscribeToSessions(se=>{console.log("🔄 Sessões atualizadas em tempo real:",se.length),i(se)});g.current=re}else throw new Error("Falha na conexão com Firebase")}catch(q){console.error("❌ Erro ao carregar dados:",q),f(q.message||"Erro ao conectar com o servidor"),console.log("🔄 Carregando dados locais como fallback...");const j=JSON.parse(localStorage.getItem("dominus-events")||"[]"),Z=JSON.parse(localStorage.getItem("dominus-history")||"[]");e(j),i(Z)}finally{u(!1)}};return{events:r,sessions:t,loading:o,error:h,addEvent:async q=>{try{console.log("📝 Tentando adicionar evento:",q);const j=await qu.addEvent(q);console.log("✅ Evento adicionado com sucesso, ID:",j);const Z={...q,id:j};e(we=>{const Ie=[...we,Z];return console.log("📅 Total de eventos agora:",Ie.length),Ie});const se=[...r,Z];return localStorage.setItem("dominus-events",JSON.stringify(se)),console.log("💾 Backup local salvo"),j}catch(j){console.error("❌ Erro ao adicionar evento no Firebase:",j),j.code==="permission-denied"&&console.error("🔒 Erro de permissão - verifique as regras do Firestore"),console.log("🔄 Salvando localmente como fallback...");const Z={...q,id:Date.now().toString()};e(we=>[...we,Z]);const se=[...r,Z];return localStorage.setItem("dominus-events",JSON.stringify(se)),Z.id}},updateEvent:async(q,j)=>{try{await qu.updateEvent(q,j),e(re=>re.map(se=>se.id===q?{...se,...j}:se));const Z=r.map(re=>re.id===q?{...re,...j}:re);localStorage.setItem("dominus-events",JSON.stringify(Z))}catch(Z){throw console.error("Erro ao atualizar evento:",Z),Z}},deleteEvent:async q=>{try{await qu.deleteEvent(q),e(Z=>Z.filter(re=>re.id!==q));const j=r.filter(Z=>Z.id!==q);localStorage.setItem("dominus-events",JSON.stringify(j))}catch(j){throw console.error("Erro ao deletar evento:",j),j}},startProgrammingSession:async q=>{try{console.log("🚀 Iniciando sessão de programação para usuário:",q);const j={userId:q,startTime:new Date().toISOString(),isActive:!0},Z=await Hu.startSession(j);return console.log("✅ Sessão iniciada com sucesso, ID:",Z),{...j,id:Z}}catch(j){throw console.error("❌ Erro ao iniciar sessão no Firebase:",j),j.code==="permission-denied"&&console.error("🔒 Erro de permissão - verifique as regras do Firestore"),j}},endProgrammingSession:async q=>{try{console.log("⏹️ Finalizando sessão de programação:",q),await Hu.endSession(q),console.log("✅ Sessão finalizada com sucesso")}catch(j){throw console.error("❌ Erro ao finalizar sessão:",j),j}},refreshData:_}},vk=({currentUser:r,onLogout:e})=>{const[t,i]=ye.useState(!1),[o,u]=ye.useState(null),[h,f]=ye.useState(!1),[g,_]=ye.useState(null),[T,x]=ye.useState(new Date().toISOString().split("T")[0]),[I,F]=ye.useState("calendar"),{events:$,sessions:q,loading:j,error:Z,addEvent:re,deleteEvent:se,startProgrammingSession:we,endProgrammingSession:Ie}=_k(),{isUserOnline:xe}=Ap();ye.useEffect(()=>{const K=q.find(ee=>ee.isActive&&ee.userId===r.id);_(K||null)},[q,r.id]);const N=async K=>{try{await re(K),i(!1)}catch(ee){console.error("Erro ao adicionar evento:",ee)}},A=async K=>{try{await se(K),u(null)}catch(ee){console.error("Erro ao excluir evento:",ee)}},R=async()=>{try{const K=await we(r.id);_(K)}catch(K){console.error("Erro ao iniciar programação:",K)}},P=async()=>{try{g&&(await Ie(g.id),_(null))}catch(K){console.error("Erro ao parar programação:",K)}},b=K=>{u(K)},O=$.filter(K=>K.date===T),C=q.find(K=>K.isActive),Fe=C?br.find(K=>K.id===C.userId):null,ft=Fe?xe(Fe.id):!1;if(j)return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center",children:w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"}),w.jsx("p",{className:"text-gray-600",children:"Carregando dados..."})]})});if(Z)return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center",children:w.jsxs("div",{className:"text-center bg-white rounded-lg p-6 shadow-lg",children:[w.jsx("div",{className:"text-red-500 mb-4",children:"⚠️"}),w.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Erro de Conexão"}),w.jsx("p",{className:"text-gray-600 mb-4",children:Z}),w.jsx("p",{className:"text-sm text-gray-500",children:"Usando dados locais como backup"})]})});const st=K=>new Date(K).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),Ue=K=>new Date(K).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),ne=(K,ee)=>{const V=new Date(K),de=(ee?new Date(ee):new Date).getTime()-V.getTime(),Se=Math.floor(de/(1e3*60*60)),Ae=Math.floor(de%(1e3*60*60)/(1e3*60));return`${Se}h ${Ae}m`};return w.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",children:[w.jsx("header",{className:"bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4",children:w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx("div",{className:"flex items-center space-x-4",children:w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx(Ja,{className:"h-8 w-8 text-purple-600"}),w.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"Agenda Dominus"})]})}),w.jsxs("div",{className:"flex items-center space-x-4",children:[Fe&&ft&&w.jsxs("div",{className:"flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-2 rounded-full",children:[w.jsx(qd,{className:"h-4 w-4"}),w.jsxs("span",{className:"text-sm font-medium",children:[Fe.name," está programando"]}),w.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"})]}),w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx("div",{className:`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-bold`,children:r.avatar}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:r.name}),w.jsx("p",{className:"text-sm text-gray-500",children:r.email})]}),w.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-600 transition-colors",children:w.jsx(qE,{className:"h-5 w-5"})})]})]})]})}),w.jsxs("div",{className:"flex",children:[w.jsx("div",{className:"w-64 bg-white/50 backdrop-blur-lg border-r border-gray-200 min-h-screen p-4",children:w.jsxs("div",{className:"h-full flex flex-col space-y-4",children:[w.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100",children:[w.jsxs("h3",{className:"font-medium text-gray-900 mb-3 flex items-center text-sm",children:[w.jsx(qd,{className:"h-4 w-4 mr-2 text-purple-600"}),"Status de Desenvolvimento"]}),C&&C.userId===r.id?w.jsxs("div",{className:"space-y-2",children:[w.jsxs("div",{className:"flex items-center space-x-2 text-green-600",children:[w.jsx(Hd,{className:"h-3 w-3"}),w.jsx("span",{className:"font-medium text-sm",children:"Você está programando"})]}),w.jsxs("p",{className:"text-xs text-gray-600",children:["Iniciado às ",st(C.startTime)]}),w.jsxs("p",{className:"text-xs text-gray-600",children:["Duração: ",ne(C.startTime)]}),w.jsxs("button",{onClick:P,className:"w-full bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center text-sm",children:[w.jsx(WE,{className:"h-3 w-3 mr-2"}),"Parar Desenvolvimento"]})]}):Fe&&ft?w.jsxs("div",{className:"text-center text-gray-600",children:[w.jsxs("p",{className:"text-sm mb-2",children:[Fe.name," está programando"]}),w.jsxs("p",{className:"text-xs text-gray-500",children:["Iniciado às ",st(C.startTime)]}),w.jsxs("div",{className:"flex items-center justify-center space-x-1 mt-2",children:[w.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),w.jsx("span",{className:"text-xs text-green-600",children:"Online agora"})]}),w.jsx("button",{onClick:()=>f(!0),className:"mt-2 text-sm text-purple-600 hover:text-purple-800 transition-colors",children:"Ver detalhes"})]}):w.jsxs("button",{onClick:R,className:"w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-3 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center text-sm",children:[w.jsx(Hd,{className:"h-4 w-4 mr-2"}),"Iniciar Desenvolvimento"]})]}),w.jsx(gk,{users:br,currentUserId:r.id}),q.length>0&&w.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex-1 flex flex-col",children:[w.jsxs("h3",{className:"font-medium text-gray-900 mb-3 flex items-center text-sm",children:[w.jsx(Ro,{className:"h-4 w-4 mr-2 text-purple-600"}),"Histórico Recente"]}),w.jsx("div",{className:"space-y-2 flex-1 overflow-y-auto",children:q.slice(0,20).map(K=>{const ee=br.find(V=>V.id===K.userId);return w.jsxs("div",{className:"text-xs bg-gray-50 rounded-lg p-2",children:[w.jsx("p",{className:"font-medium text-gray-900",children:ee?.name}),w.jsxs("p",{className:"text-gray-600",children:[Ue(K.startTime)," - ",st(K.startTime)," às ",K.endTime?st(K.endTime):"Em andamento"]}),w.jsxs("p",{className:"text-gray-500",children:["Duração: ",ne(K.startTime,K.endTime)]})]},K.id)})})]})]})}),w.jsx("div",{className:"flex-1 p-4",children:w.jsxs("div",{className:"max-w-full",children:[w.jsxs("div",{className:"flex items-center justify-between mb-6",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:I==="calendar"?"Agenda Geral":"Agenda do Dia"}),w.jsx("p",{className:"text-gray-600",children:"Gerencie seus compromissos e tarefas"})]}),w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsxs("div",{className:"flex bg-gray-100 rounded-lg p-1",children:[w.jsx("button",{onClick:()=>F("calendar"),className:`px-3 py-1 rounded-md text-sm font-medium transition-colors ${I==="calendar"?"bg-white text-purple-600 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:"Mês"}),w.jsx("button",{onClick:()=>F("day"),className:`px-3 py-1 rounded-md text-sm font-medium transition-colors ${I==="day"?"bg-white text-purple-600 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:"Dia"})]}),w.jsxs("button",{onClick:()=>i(!0),className:"bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center",children:[w.jsx(HE,{className:"h-5 w-5 mr-2"}),"Novo Evento"]})]})]}),I==="calendar"?w.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-5 gap-4",children:[w.jsx("div",{className:"xl:col-span-4",children:w.jsx(ZE,{events:$,selectedDate:T,onDateSelect:x,onEventClick:b})}),w.jsxs("div",{className:"xl:col-span-1 space-y-3 hidden xl:block",children:[w.jsx("div",{className:"bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 text-white shadow-lg",children:w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"text-xs uppercase tracking-wide opacity-80 mb-2",children:"Oferta Especial"}),w.jsx("h3",{className:"text-base font-bold mb-2",children:"Dominus Pro"}),w.jsx("p",{className:"text-xs opacity-90 mb-3",children:"Desbloqueie recursos avançados de produtividade"}),w.jsxs("div",{className:"bg-white/20 rounded-lg p-2 mb-3",children:[w.jsx("div",{className:"text-xl font-bold",children:"50% OFF"}),w.jsx("div",{className:"text-xs opacity-80",children:"Por tempo limitado"})]}),w.jsx("button",{className:"w-full bg-white text-purple-600 font-semibold py-1.5 px-3 rounded-lg hover:bg-gray-100 transition-colors text-sm",children:"Assinar Agora"})]})}),w.jsx("div",{className:"bg-white rounded-xl p-4 border border-gray-200 shadow-sm",children:w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2",children:w.jsx("span",{className:"text-lg",children:"🧹"})}),w.jsx("h4",{className:"font-semibold text-gray-900 mb-1 text-sm",children:"iClean"}),w.jsx("p",{className:"text-xs text-gray-600 mb-3",children:"Conecte-se com faxineiras qualificadas ou encontre trabalho"}),w.jsx("button",{className:"text-blue-600 font-medium text-xs hover:text-blue-800 transition-colors",children:"Baixar App →"})]})}),w.jsxs("div",{className:"bg-gradient-to-r from-slate-700 to-gray-800 rounded-xl p-3 text-white text-center",children:[w.jsx("div",{className:"text-xs font-medium mb-1",children:"💫 Eternity"}),w.jsx("p",{className:"text-xs opacity-90",children:"IA que preserva memórias de seus entes queridos através de áudio, texto e fotos"})]})]})]}):w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6",children:w.jsx("input",{type:"date",value:T,onChange:K=>x(K.target.value),className:"bg-transparent border-none text-lg font-medium text-gray-900 focus:outline-none"})}),w.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100",children:w.jsxs("div",{className:"p-6",children:[w.jsxs("h3",{className:"font-semibold text-gray-900 mb-4",children:["Eventos para ",new Date(T).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})]}),O.length===0?w.jsxs("div",{className:"text-center py-12",children:[w.jsx(Ja,{className:"h-12 w-12 text-gray-300 mx-auto mb-4"}),w.jsx("p",{className:"text-gray-500 mb-2",children:"Nenhum evento para esta data"}),w.jsx("button",{onClick:()=>i(!0),className:"text-purple-600 hover:text-purple-800 transition-colors",children:"Adicionar um evento"})]}):w.jsx("div",{className:"space-y-3",children:O.map(K=>{const ee=br.find(V=>V.id===K.userId);return w.jsxs("div",{onClick:()=>b(K),className:"flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors",children:[w.jsx("div",{className:`w-10 h-10 rounded-full ${ee?.color} flex items-center justify-center text-white font-bold flex-shrink-0`,children:ee?.avatar}),w.jsxs("div",{className:"flex-1",children:[w.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[w.jsx("h4",{className:"font-medium text-gray-900",children:K.title}),w.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${K.type==="meeting"?"bg-blue-100 text-blue-800":K.type==="task"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:K.type==="meeting"?"Reunião":K.type==="task"?"Tarefa":"Lembrete"})]}),w.jsx("p",{className:"text-gray-600 mb-2",children:K.description}),w.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-500",children:[w.jsxs("div",{className:"flex items-center",children:[w.jsx(Ro,{className:"h-4 w-4 mr-1"}),K.time]}),K.location&&w.jsxs("div",{className:"flex items-center",children:[K.location.type==="presencial"?w.jsx(k_,{className:"h-4 w-4 mr-1"}):w.jsx(R_,{className:"h-4 w-4 mr-1"}),w.jsx("span",{className:"truncate max-w-32",children:K.location.value})]})]})]})]},K.id)})})]})})]})]})})]}),t&&w.jsx(YE,{currentUser:r,selectedDate:T,onClose:()=>i(!1),onSave:N}),o&&w.jsx(XE,{event:o,currentUser:r,onClose:()=>u(null),onDelete:A}),h&&Fe&&C&&w.jsx(JE,{programmer:Fe,session:C,onClose:()=>f(!1)})]})},wk=({currentUser:r,isLoggedIn:e})=>{const{setUserOnline:t,setUserOffline:i}=Ap(),o=ye.useRef(!1);ye.useEffect(()=>{r&&(e&&!o.current?t(r.id).then(()=>{o.current=!0}).catch(console.error):!e&&o.current&&i(r.id).then(()=>{o.current=!1}).catch(console.error))},[r,e,t,i]),ye.useEffect(()=>{if(!r||!e)return;const u=()=>{o.current&&i(r.id).catch(console.error)},h=()=>{};return window.addEventListener("beforeunload",u),document.addEventListener("visibilitychange",h),()=>{window.removeEventListener("beforeunload",u),document.removeEventListener("visibilitychange",h)}},[r,e,i]),ye.useEffect(()=>()=>{r&&o.current&&(i(r.id).catch(console.error),o.current=!1)},[r,i])};function Ek(){const[r,e]=ye.useState(null);wk({currentUser:r,isLoggedIn:!!r}),ye.useEffect(()=>{localStorage.removeItem("dominus-user"),e(null)},[]);const t=o=>{e(o),localStorage.setItem("dominus-user",JSON.stringify(o))},i=()=>{e(null),localStorage.removeItem("dominus-user")};return r?w.jsx(vk,{currentUser:r,onLogout:i}):w.jsx(QE,{onLogin:t})}jE.createRoot(document.getElementById("root")).render(w.jsx(ye.StrictMode,{children:w.jsx(Ek,{})}));
