/*! For license information please see mm-ai-chat-widget.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MMAIChatWidget=t():e.MMAIChatWidget=t()}(self,(()=>(()=>{"use strict";var e={327:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,".input-container {\n    width: 100%; \n    position: relative;\n}\n\n.input-field {\n    width: 100%; \n    padding: 10px;\n    box-sizing: border-box; \n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n.input-field:focus {\n    border: none; \n    box-shadow: none;\n    outline: 1px solid #ccc; \n}\n\n.submit-button {\n    position: absolute; \n    right: 10px; \n    top: 50%; \n    transform: translateY(-50%); \n    transition: opacity 0.3s ease, visibility 0.3s ease; \n    opacity: 0; \n    visibility: hidden; \n    border: none;\n    background-color: #28a745;\n    color: #fff;\n    padding: 10px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.submit-button.visible {\n    opacity: 1;\n    visibility: visible; \n}",""]);const c=i},910:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,".chat-container {\n    position: fixed;\n    right: 0;\n    width: 40%;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n    z-index: 999;\n    overflow: auto;\n    bottom: 3%;\n    animation: open .5s ease;\n    height: 95%;\n}\n\n.close-window {\n    position: fixed;\n    right: 0;\n    width: 40%;\n    border: 1px solid #ccc;\n    background-color: white;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n    z-index: 999;\n    overflow: auto;\n    bottom: 3%;\n    animation: close .5s ease;\n    height: 0;\n}\n\n@keyframes open {\n    0% {\n        height: 0;\n        opacity: 0;\n    }\n\n    100% {\n        height: 95%;\n        opacity: 1;\n    }\n}\n\n@keyframes close {\n    0% {\n        height: 95%;\n        opacity: 1;\n    }\n\n    100% {\n        height: 0;\n        opacity: 0;\n    }\n}\n\n\n.chat-header {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    background-color: #125317;\n    border-bottom: 1px solid #ccc;\n}\n\n.chat-avatar {\n    border-radius: 50%;\n    margin-right: 10px;\n}\n\n.chat-title {\n    flex: 1;\n}\n\n.chat-close-button,\n.chat-minimize-button {\n    margin-left: 10px;\n    cursor: pointer;\n}\n\n.chat-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 75px);\n}\n\n.message-list {\n    list-style-type: none;\n    padding: 10px;\n    margin: 0;\n}\n\n.message-input-form {\n    display: flex;\n    padding: 10px;\n}\n\n.message-input {\n    flex: 1;\n    padding: 10px;\n}\n\n.send-button {\n    padding: 10px;\n}\n\n.chat-toggle-button {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 1000;\n    padding: 10px 20px;\n}\n\n.btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 32px;\n    width: 32px;\n    margin-left: 8px;\n    border-radius: 6px;\n    background: none;\n    transition: background-color 150ms;\n    border: 0;\n    padding: 0;\n}\n\n.btn:hover {\n    background-color: rgba(255, 255, 255, 0.16);\n}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},287:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var x=g.prototype=new v;x.constructor=g,y(x,b.prototype),x.isPureReactComponent=!0;var S=Array.isArray,E=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,a={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:n,type:e,key:i,ref:c,props:a,_owner:w.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return i=i(u=e),e=""===a?"."+A(u,0):a,S(i)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),R(i,t,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(u=0,a=""===a?".":a+":",S(e))for(var s=0;s<e.length;s++){var l=a+A(c=e[s],s);u+=R(c,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)u+=R(c=c.value,t,o,l=a+A(c,s++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},M={transition:null},N={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:M,ReactCurrentOwner:w};function P(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=P,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)E.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){u=Array(s);for(var l=0;l<s;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=P,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},540:(e,t,n)=>{e.exports=n(287)},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var p=n(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var m=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var u=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},159:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};n.r(r),n.d(r,{ChatButton:()=>C});var o=n(540),a=n(72),i=n.n(a),c=n(825),u=n.n(c),s=n(659),l=n.n(s),f=n(56),p=n.n(f),d=n(159),m=n.n(d),y=n(113),h=n.n(y),b=n(910),v={};v.styleTagTransform=h(),v.setAttributes=p(),v.insert=l().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=m(),i()(b.A,v),b.A&&b.A.locals&&b.A.locals;const g=e=>{let{messages:t}=e;return o.createElement("ul",{className:"message-list"},t.map(((e,t)=>o.createElement("li",{key:t},e))))};var x=n(327),S={};S.styleTagTransform=h(),S.setAttributes=p(),S.insert=l().bind(null,"head"),S.domAPI=u(),S.insertStyleElement=m(),i()(x.A,S),x.A&&x.A.locals&&x.A.locals;const E=()=>{const[e,t]=(0,o.useState)(""),n=async()=>{if(e.trim())try{await(async e=>new Promise((t=>{setTimeout((()=>{t(`Сообщение "${e}" успешно отправлено!`)}),1e3)})))(e),console.log("Submitted:",e),t("")}catch(e){console.error("Ошибка при отправке сообщения:",e)}};return o.createElement("div",{className:"input-container"},o.createElement("input",{type:"text",value:e,onChange:e=>{t(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&n()},placeholder:"Введите сообщение",className:"input-field"}),o.createElement("button",{className:"submit-button "+(e.length>0?"visible":""),onClick:n},"Send"))},w=e=>{let{messages:t,onSend:n,onClose:r}=e;const[a,i]=(0,o.useState)(!1),c=()=>{i(!0),setTimeout((()=>{r()}),500)};return o.createElement("div",{className:a?"close-window":"chat-container"},o.createElement("div",{className:"chat-header"},o.createElement("img",{className:"chat-avatar",src:"https://cm4-production-assets.s3.amazonaws.com/1713053696833-1chill.png",alt:"Avatar",width:40,height:40}),o.createElement("span",{className:"chat-title"},"M&M AI"),o.createElement("button",{className:"btn chat-minimize-button",onClick:c},o.createElement("img",{src:"minus",alt:"-"})),o.createElement("button",{className:"btn chat-close-button",onClick:c},o.createElement("img",{src:"x",alt:"x"}))),o.createElement("div",{className:"chat-content"},o.createElement(g,{messages:t}),o.createElement(E,{onSend:n})))},_=e=>{let{close:t}=e;const[n,r]=(0,o.useState)([]),[a,i]=(0,o.useState)(null);return(0,o.useEffect)((()=>{}),[]),o.createElement(w,{messages:n,onSend:e=>{a&&e&&a.send(e)},onClose:t})},C=()=>{const[e,t]=(0,o.useState)(!1);return o.createElement(o.Fragment,null,e?o.createElement(_,{close:()=>t(!1)}):o.createElement("div",{className:"chat",onClick:()=>{console.log("showChat-----"),t(!0)}},o.createElement("button",null,o.createElement("img",{src:"chat",alt:"chat",width:30,height:30}))))};return r})()));