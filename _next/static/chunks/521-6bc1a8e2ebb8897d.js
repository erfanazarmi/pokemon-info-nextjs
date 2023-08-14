(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4851:function(e,t,r){"use strict";r.d(t,{Pi:function(){return x}});var n,o=r(8949),i=r(7294);if(!i.useState)throw Error("mobx-react-lite requires React with Hooks support");if(!o.rC)throw Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var u=r(3935);function a(e){return(0,o.Gf)(e)}var c=function(){function e(e){var t=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(t.sweepTimeout),t.sweepTimeout=void 0;var r=Date.now();t.registrations.forEach(function(n,o){r-n.registeredAt>=e&&(t.finalize(n.value),t.registrations.delete(o))}),t.registrations.size>0&&t.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){t.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r){this.registrations.set(r,{value:t,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),l=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:c)(function(e){var t;null===(t=e.reaction)||void 0===t||t.dispose(),e.reaction=null}),f=r(1688),s=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u},p=function(){},d=(0,o.pu)(),h=void 0!==d.stateVersion;function b(e){e.reaction=new o.le("observer".concat(e.name),function(){var t;h||(e.stateVersion=Symbol()),null===(t=e.onStoreChange)||void 0===t||t.call(e)})}var y="function"==typeof Symbol&&Symbol.for,v=y?Symbol.for("react.forward_ref"):"function"==typeof i.forwardRef&&(0,i.forwardRef)(function(e){return null}).$$typeof,m=y?Symbol.for("react.memo"):"function"==typeof i.memo&&(0,i.memo)(function(e){return null}).$$typeof,g={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function O(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n=u.unstable_batchedUpdates)||(n=function(e){e()}),(0,o.jQ)({reactionScheduler:n}),l.finalizeAllImmediately;var j=Symbol("patchMixins"),w=Symbol("patchedDefinition");function E(e,t){for(var r,n=this,o=arguments.length,i=Array(o>2?o-2:0),u=2;u<o;u++)i[u-2]=arguments[u];t.locks++;try{return null!=e&&(r=e.apply(this,i)),r}finally{t.locks--,0===t.locks&&t.methods.forEach(function(e){e.apply(n,i)})}}function S(e,t){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];E.call.apply(E,[this,e,t].concat(n))}}var k=Symbol("ObserverAdministration"),P=Symbol("isMobXReactObserver");function C(e){var t;return null!=(t=e[k])?t:e[k]={reaction:null,mounted:!1,forceUpdate:null,name:R(e.constructor),state:void 0,props:void 0,context:void 0}}function R(e){return e.displayName||e.name||"<component>"}function _(e){var t=e.bind(this),r=C(this);return function(){r.reaction||(r.reaction=new o.le(r.name+".render()",function(){if(r.mounted)try{null==r.forceUpdate||r.forceUpdate()}catch(t){var e;null==(e=r.reaction)||e.dispose(),r.reaction=null}}),r.mounted||l.register(this,r,this));var e=void 0,n=void 0;if(r.reaction.track(function(){try{n=(0,o.$$)(!1,t)}catch(t){e=t}}),e)throw e;return n}}function A(e,t){return this.state!==t||!function(e,t){if(O(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.hasOwnProperty.call(t,r[o])||!O(e[r[o]],t[r[o]]))return!1;return!0}(this.props,e)}function x(e){return(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"),Object.prototype.isPrototypeOf.call(i.Component,e)||Object.prototype.isPrototypeOf.call(i.PureComponent,e))?function(e){var t=e.prototype;if(e[P])throw Error("The provided component class ("+R(e)+") has already been declared as an observer component.");if(e[P]=!0,t.componentWillReact)throw Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==i.PureComponent){if(t.shouldComponentUpdate){if(t.shouldComponentUpdate!==A)throw Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else t.shouldComponentUpdate=A}var r=t.render;if("function"!=typeof r)throw Error("[mobx-react] class component ("+R(e)+") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.");t.render=function(){return Object.defineProperty(this,"render",{configurable:!1,writable:!1,value:_.call(this,r)}),this.render()};var n=t.componentDidMount;return t.componentDidMount=function(){var e=this,t=C(this);return t.mounted=!0,l.unregister(t),t.forceUpdate=function(){return e.forceUpdate()},t.reaction||t.forceUpdate(),null==n?void 0:n.apply(this,arguments)},!function(e,t,r){var n,o,i=((o=(n=e[j]=e[j]||{})[t]=n[t]||{}).locks=o.locks||0,o.methods=o.methods||[],o);0>i.methods.indexOf(r)&&i.methods.push(r);var u=Object.getOwnPropertyDescriptor(e,t);if(!u||!u[w]){var a=e[t],c=function e(t,r,n,o,i){var u,a=S(i,o);return(u={})[w]=!0,u.get=function(){return a},u.set=function(i){if(this===t)a=S(i,o);else{var u=e(this,r,n,o,i);Object.defineProperty(this,r,u)}},u.configurable=!0,u.enumerable=n,u}(e,t,u?u.enumerable:void 0,i,a);Object.defineProperty(e,t,c)}}(t,"componentWillUnmount",function(){var e,t=C(this);null==(e=t.reaction)||e.dispose(),t.reaction=null,t.forceUpdate=null,t.mounted=!1}),e}(e):function(e,t){if(m&&e.$$typeof===m)throw Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r,n=null!==(r=null==t?void 0:t.forwardRef)&&void 0!==r&&r,o=e,u=e.displayName||e.name;if(v&&e.$$typeof===v&&(n=!0,"function"!=typeof(o=e.render)))throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var c=function(e,t){return function(e,t){void 0===t&&(t="observed");var r,n,o=i.useRef(null),u=s(i.useState(),2)[1];if(!o.current){var c={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(e){return l.unregister(c),c.onStoreChange=e,c.reaction||(b(c),u(Symbol())),function(){var e;c.onStoreChange=null,null===(e=c.reaction)||void 0===e||e.dispose(),c.reaction=null}},getSnapshot:function(){return h?d.stateVersion:c.stateVersion}};o.current=c}var y=o.current;if(y.reaction||(b(y),l.register(o,y,y)),i.useDebugValue(y.reaction,a),(0,f.useSyncExternalStore)(y.subscribe,y.getSnapshot,p),y.reaction.track(function(){try{r=e()}catch(e){n=e}}),n)throw n;return r}(function(){return o(e,t)},u)};return c.displayName=e.displayName,Object.defineProperty(c,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(c.contextTypes=e.contextTypes),n&&(c=(0,i.forwardRef)(c)),function(e,t){Object.keys(e).forEach(function(r){g[r]||Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}(e,c=(0,i.memo)(c)),c}(e)}if(i.version.split(".")[0],!i.Component)throw Error("mobx-react requires React to be available");if(!o.LO)throw Error("mobx-react requires mobx to be available")},3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return l},ACTION_SERVER_ACTION:function(){return f}});let o="refresh",i="navigate",u="restore",a="server-patch",c="prefetch",l="fast-refresh",f="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2387),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let n=r(8754),o=n._(r(7294)),i=r(4532),u=r(3353),a=r(1410),c=r(9064),l=r(370),f=r(9955),s=r(4224),p=r(508),d=r(1516),h=r(4266),b=r(3991),y=new Set;function v(e,t,r,n,o,i){if(!i&&!(0,u.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(y.has(i))return;y.add(i)}let a=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function m(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:y,children:g,prefetch:O=null,passHref:j,replace:w,shallow:E,scroll:S,locale:k,onClick:P,onMouseEnter:C,onTouchStart:R,legacyBehavior:_=!1,...A}=e;r=g,_&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let x=o.default.useContext(f.RouterContext),T=o.default.useContext(s.AppRouterContext),M=null!=x?x:T,N=!x,z=!1!==O,U=null===O?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:I,as:L}=o.default.useMemo(()=>{if(!x){let e=m(a);return{href:e,as:y?m(y):e}}let[e,t]=(0,i.resolveHref)(x,a,!0);return{href:e,as:y?(0,i.resolveHref)(x,y):t||e}},[x,a,y]),$=o.default.useRef(I),D=o.default.useRef(L);_&&(n=o.default.Children.only(r));let V=_?n&&"object"==typeof n&&n.ref:t,[J,q,H]=(0,p.useIntersection)({rootMargin:"200px"}),K=o.default.useCallback(e=>{(D.current!==L||$.current!==I)&&(H(),D.current=L,$.current=I),J(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[L,V,I,H,J]);o.default.useEffect(()=>{M&&q&&z&&v(M,I,L,{locale:k},{kind:U},N)},[L,I,q,k,z,null==x?void 0:x.locale,M,N,U]);let F={ref:K,onClick(e){_||"function"!=typeof P||P(e),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,r,n,i,a,c,l,f,s){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let h=()=>{let e=null==c||c;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:l,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};f?o.default.startTransition(h):h()}(e,M,I,L,w,E,S,k,N,z)},onMouseEnter(e){_||"function"!=typeof C||C(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&(z||!N)&&v(M,I,L,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:U},N)},onTouchStart(e){_||"function"!=typeof R||R(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&(z||!N)&&v(M,I,L,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:U},N)}};if((0,c.isAbsoluteUrl)(L))F.href=L;else if(!_||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==x?void 0:x.locale,t=(null==x?void 0:x.isLocaleDomain)&&(0,d.getDomainLocale)(L,e,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);F.href=t||(0,h.addBasePath)((0,l.addLocale)(L,e,null==x?void 0:x.defaultLocale))}return _?o.default.cloneElement(n,F):o.default.createElement("a",{...A,...F},r)}),O=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,u=new Map,a=[];function c(e){let{rootRef:t,rootMargin:r,disabled:c}=e,l=c||!i,[f,s]=(0,n.useState)(!1),p=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{p.current=e},[]);(0,n.useEffect)(()=>{if(i){if(l||f)return;let e=p.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},a.push(r),u.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,r,t,f,p.current]);let h=(0,n.useCallback)(()=>{s(!1)},[]);return[d,f,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(5569)},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,u=n.useEffect,a=n.useLayoutEffect,c=n.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,f=n[1];return a(function(){o.value=r,o.getSnapshot=t,l(o)&&f({inst:o})},[e,r,t]),u(function(){return l(o)&&f({inst:o}),e(function(){l(o)&&f({inst:o})})},[e]),c(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:f},1688:function(e,t,r){"use strict";e.exports=r(3250)},4764:function(e,t,r){"use strict";function n(e){return null===e?"null":e!==Object(e)?typeof e:({}).toString.call(e).slice(8,-1).toLowerCase()}function o(e){return"string"!==n(e)||!e.length}r.d(t,{E7:function(){return B}});let i={HEPBURN:"hepburn"},u={useObsoleteKana:!1,passRomaji:!1,upcaseKatakana:!1,IMEMode:!1,convertLongVowelMark:!0,romanization:i.HEPBURN};var a=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function c(e,t){if(e.length!==t.length)return!1;for(var r,n,o=0;o<e.length;o++)if(!((r=e[o])===(n=t[o])||a(r)&&a(n)))return!1;return!0}function l(e,t){void 0===t&&(t=c);var r=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(r&&r.lastThis===this&&t(n,r.lastArgs))return r.lastResult;var i=e.apply(this,n);return r={lastResult:i,lastArgs:n,lastThis:this},i}return n.clear=function(){r=null},n}var f=Object.prototype.hasOwnProperty;function s(e,t,r){for(r of e.keys())if(p(r,t))return r}function p(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&p(e[n],t[n]););return -1===n}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if((o=n)&&"object"==typeof o&&!(o=s(t,o))||!t.has(o))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if((o=n[0])&&"object"==typeof o&&!(o=s(t,o))||!p(n[1],t.get(o)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return -1===n}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return -1===n}if(!r||"object"==typeof e){for(r in n=0,e)if(f.call(e,r)&&++n&&!f.call(t,r)||!(r in t)||!p(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!=e&&t!=t}let d=(e={})=>Object.assign({},u,e);function h(e){return Object.entries(e).reduce((e,[t,r])=>{let o="string"===n(r);return e[t]=o?{"":r}:h(r),e},{})}function b(e,t){return t.split("").reduce((e,t)=>(void 0===e[t]&&(e[t]={}),e[t]),e)}function y(e={}){let t={};return"object"===n(e)&&Object.entries(e).forEach(([e,r])=>{let n=t;e.split("").forEach(e=>{void 0===n[e]&&(n[e]={}),n=n[e]}),n[""]=r}),function(e){let r=JSON.parse(JSON.stringify(e));return function e(t,r){return void 0===t||"string"===n(t)?r:Object.entries(r).reduce((r,[n,o])=>(r[n]=e(t[n],o),r),t)}(r,t)}}function v(e,t){return t?"function"===n(t)?t(e):y(t)(e):e}let m={a:"あ",i:"い",u:"う",e:"え",o:"お",k:{a:"か",i:"き",u:"く",e:"け",o:"こ"},s:{a:"さ",i:"し",u:"す",e:"せ",o:"そ"},t:{a:"た",i:"ち",u:"つ",e:"て",o:"と"},n:{a:"な",i:"に",u:"ぬ",e:"ね",o:"の"},h:{a:"は",i:"ひ",u:"ふ",e:"へ",o:"ほ"},m:{a:"ま",i:"み",u:"む",e:"め",o:"も"},y:{a:"や",u:"ゆ",o:"よ"},r:{a:"ら",i:"り",u:"る",e:"れ",o:"ろ"},w:{a:"わ",i:"ゐ",e:"ゑ",o:"を"},g:{a:"が",i:"ぎ",u:"ぐ",e:"げ",o:"ご"},z:{a:"ざ",i:"じ",u:"ず",e:"ぜ",o:"ぞ"},d:{a:"だ",i:"ぢ",u:"づ",e:"で",o:"ど"},b:{a:"ば",i:"び",u:"ぶ",e:"べ",o:"ぼ"},p:{a:"ぱ",i:"ぴ",u:"ぷ",e:"ぺ",o:"ぽ"},v:{a:"ゔぁ",i:"ゔぃ",u:"ゔ",e:"ゔぇ",o:"ゔぉ"}},g={".":"。",",":"、",":":"：","/":"・","!":"！","?":"？","~":"〜","-":"ー","‘":"「","’":"」","“":"『","”":"』","[":"［","]":"］","(":"（",")":"）","{":"｛","}":"｝"},O={k:"き",s:"し",t:"ち",n:"に",h:"ひ",m:"み",r:"り",g:"ぎ",z:"じ",d:"ぢ",b:"び",p:"ぴ",v:"ゔ",q:"く",f:"ふ"},j={ya:"ゃ",yi:"ぃ",yu:"ゅ",ye:"ぇ",yo:"ょ"},w={a:"ぁ",i:"ぃ",u:"ぅ",e:"ぇ",o:"ぉ"},E={sh:"sy",ch:"ty",cy:"ty",chy:"ty",shy:"sy",j:"zy",jy:"zy",shi:"si",chi:"ti",tsu:"tu",ji:"zi",fu:"hu"},S=Object.assign({tu:"っ",wa:"ゎ",ka:"ヵ",ke:"ヶ"},w,j),k={yi:"い",wu:"う",ye:"いぇ",wi:"うぃ",we:"うぇ",kwa:"くぁ",whu:"う",tha:"てゃ",thu:"てゅ",tho:"てょ",dha:"でゃ",dhu:"でゅ",dho:"でょ"},P={wh:"う",kw:"く",qw:"く",q:"く",gw:"ぐ",sw:"す",ts:"つ",th:"て",tw:"と",dh:"で",dw:"ど",fw:"ふ",f:"ふ"},C=null,R=y({wi:"ゐ",we:"ゑ"});function _(e=""){return!o(e)&&12540===e.charCodeAt(0)}function A(e=""){return function(e="",t,r){if(o(e))return!1;let n=e.charCodeAt(0);return 12449<=n&&n<=12540}(e,0,0)}l((e,t,r)=>{let n=(null==C&&(C=function(){let e=h(m),t=t=>b(e,t);return Object.entries(O).forEach(([e,r])=>{Object.entries(j).forEach(([n,o])=>{t(e+n)[""]=r+o})}),Object.entries(g).forEach(([e,r])=>{t(e)[""]=r}),Object.entries(P).forEach(([e,r])=>{Object.entries(w).forEach(([n,o])=>{let i=t(e+n);i[""]=r+o})}),["n","n'","xn"].forEach(e=>{t(e)[""]="ん"}),e.c=JSON.parse(JSON.stringify(e.k)),Object.entries(E).forEach(([e,r])=>{let n=e.slice(0,e.length-1),o=e.charAt(e.length-1),i=t(n);i[o]=JSON.parse(JSON.stringify(t(r)))}),Object.entries(S).forEach(([e,r])=>{let n=e=>e.charAt(e.length-1),o=e=>e.slice(0,e.length-1),i=`x${e}`,u=t(i);u[""]=r;let a=t(`l${o(e)}`);a[n(e)]=u,[...Object.entries(E),["c","k"]].reduce((t,[r,n])=>e.startsWith(n)?t.concat(e.replace(n,r)):t,[]).forEach(r=>{["l","x"].forEach(i=>{let u=t(i+o(r));u[n(r)]=t(i+e)})})}),Object.entries(k).forEach(([e,r])=>{t(e)[""]=r}),[...Object.keys(O),"c","y","w","j"].forEach(t=>{let r=e[t];r[t]=function e(t){return Object.entries(t).reduce((t,[r,n])=>(r?t[r]=e(n):t[r]=`っ${n}`,t),{})}(r)}),delete e.n.n,Object.freeze(JSON.parse(JSON.stringify(e)))}()),C);return n=e?function(e){let t=JSON.parse(JSON.stringify(e));return t.n.n={"":"ん"},t.n[" "]={"":"ん"},t}(n):n,n=t?R(n):n,r&&(n=v(n,r)),n},p);let x=(e,t)=>_(e)&&t<1,T=(e,t)=>_(e)&&t>0,M=e=>["ヶ","ヵ"].includes(e),N={a:"あ",i:"い",u:"う",e:"え",o:"う"},z=null,U={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",や:"ya",ゆ:"yu",よ:"yo",わ:"wa",ゐ:"wi",ゑ:"we",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ゔぁ:"va",ゔぃ:"vi",ゔ:"vu",ゔぇ:"ve",ゔぉ:"vo"},I={"。":".","、":",","：":":","・":"/","！":"!","？":"?","〜":"~",ー:"-","「":"‘","」":"’","『":"“","』":"”","［":"[","］":"]","（":"(","）":")","｛":"{","｝":"}","　":" "},L=["あ","い","う","え","お","や","ゆ","よ"],$={ゃ:"ya",ゅ:"yu",ょ:"yo"},D={ぃ:"yi",ぇ:"ye"},V={ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o"},J=["き","に","ひ","み","り","ぎ","び","ぴ","ゔ","く","ふ"],q={し:"sh",ち:"ch",じ:"j",ぢ:"j"},H={っ:"",ゃ:"ya",ゅ:"yu",ょ:"yo",ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o"},K={b:"b",c:"t",d:"d",f:"f",g:"g",h:"h",j:"j",k:"k",m:"m",p:"p",q:"q",r:"r",s:"s",t:"t",v:"v",w:"w",x:"x",z:"z"},F=l((e,t)=>{let r=e===i.HEPBURN?(null==z&&(z=function(){let e=h(U),t=t=>b(e,t),r=(e,r)=>{t(e)[""]=r};return Object.entries(I).forEach(([e,r])=>{t(e)[""]=r}),[...Object.entries($),...Object.entries(V)].forEach(([e,t])=>{r(e,t)}),J.forEach(e=>{let n=t(e)[""][0];Object.entries($).forEach(([t,o])=>{r(e+t,n+o)}),Object.entries(D).forEach(([t,o])=>{r(e+t,n+o)})}),Object.entries(q).forEach(([e,t])=>{Object.entries($).forEach(([n,o])=>{r(e+n,t+o[1])}),r(`${e}ぃ`,`${t}yi`),r(`${e}ぇ`,`${t}e`)}),e["っ"]=function e(t){return Object.entries(t).reduce((t,[r,n])=>{if(r)t[r]=e(n);else{let e=n.charAt(0);t[r]=Object.keys(K).includes(e)?K[e]+n:n}return t},{})}(e),Object.entries(H).forEach(([e,t])=>{r(e,t)}),L.forEach(e=>{r(`ん${e}`,`n'${t(e)[""]}`)}),Object.freeze(JSON.parse(JSON.stringify(e)))}()),z):{};return t&&(r=v(r,t)),r},p);function B(e="",t={},r){let n=d(t);return r||(r=F(n.romanization,n.customRomajiMapping)),(function(e,t,r){var n,i,u;r||(r=F(t.romanization,t.customRomajiMapping));let a=Object.assign({},{isDestinationRomaji:!0},t);return n=function(e="",t,{isDestinationRomaji:r,convertLongVowelMark:n}={}){let i="";return e.split("").reduce((u,a,c)=>{if(function(e=""){return!o(e)&&12539===e.charCodeAt(0)}(a)||x(a,c)||M(a))return u.concat(a);if(n&&i&&T(a,c)){let n=t(i).slice(-1);return A(e[c-1])&&"o"===n&&r?u.concat("お"):u.concat(N[n])}if(!_(a)&&A(a)){let e=a.charCodeAt(0)+-96,t=String.fromCharCode(e);return i=t,u.concat(t)}return i="",u.concat(a)},[]).join("")}(e,B,a),i=r,u=!t.IMEMode,function e(t,r){let n=t.charAt(0);return function t(r,n,o,i){if(!n)return u||1===Object.keys(r).length?r[""]?[[o,i,r[""]]]:[]:[[o,i,null]];if(1===Object.keys(r).length)return[[o,i,r[""]]].concat(e(n,i));let a=function(e,t){let r=e[t];if(void 0!==r)return Object.assign({"":e[""]+t},e[t])}(r,n.charAt(0));return void 0===a?[[o,i,r[""]]].concat(e(n,i)):t(a,n.slice(1),o,i+1)}(Object.assign({"":n},i[n]),t.slice(1),r,r+1)}(n,0)})(e,n,r).map(t=>{let[r,i,u]=t,a=n.upcaseKatakana&&function(e=""){return!o(e)&&[...e].every(A)}(e.slice(r,i));return a?u.toUpperCase():u}).join("")}}}]);