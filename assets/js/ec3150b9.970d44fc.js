/*! For license information please see ec3150b9.970d44fc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[510861],{771032:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=t(824246),o=t(511151);const l={id:"plugin-apollo-explorer",title:"@backstage/plugin-apollo-explorer",description:"API Reference for @backstage/plugin-apollo-explorer"},a=void 0,i={unversionedId:"reference/plugin-apollo-explorer",id:"reference/plugin-apollo-explorer",title:"@backstage/plugin-apollo-explorer",description:"API Reference for @backstage/plugin-apollo-explorer",source:"@site/../docs/reference/plugin-apollo-explorer.md",sourceDirName:"reference",slug:"/reference/plugin-apollo-explorer",permalink:"/docs/reference/plugin-apollo-explorer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-apollo-explorer.md",tags:[],version:"current",frontMatter:{id:"plugin-apollo-explorer",title:"@backstage/plugin-apollo-explorer",description:"API Reference for @backstage/plugin-apollo-explorer"}},c={},u=[{value:"Variables",id:"variables",level:2}];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-apollo-explorer",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-apollo-explorer"})})]}),"\n",(0,n.jsx)(r.p,{children:"Integrates Apollo Explorer graphs as a tool to browse GraphQL API endpoints inside Backstage."}),"\n",(0,n.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Variable"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-apollo-explorer.apolloexplorerpage",children:"ApolloExplorerPage"})}),(0,n.jsx)(r.td,{children:"Main component that wraps the embedded graph(s)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-apollo-explorer.apolloexplorerplugin",children:"apolloExplorerPlugin"})}),(0,n.jsx)(r.td,{children:"Plugin that allows Apollo Explorer instances to be directly embedded into Backstage"})]})]})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var l,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in l=Object(arguments[c]))t.call(l,u)&&(i[u]=l[u]);if(r){a=r(l);for(var s=0;s<a.length;s++)n.call(l,a[s])&&(i[a[s]]=l[a[s]])}}return i}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),r.Fragment=l("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,l={},u=null,s=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(s=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===l[n]&&(l[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:s,props:l,_owner:a.current}}r.jsx=u,r.jsxs=u},541535:(e,r,t)=>{var n=t(862525),o=60103,l=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,i=60110,c=60112;r.Suspense=60113;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),l=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),a=f("react.provider"),i=f("react.context"),c=f("react.forward_ref"),r.Suspense=f("react.suspense"),u=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var m=v.prototype=new b;m.constructor=v,n(m,g.prototype),m.isPureReactComponent=!0;var x={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,l={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)_.call(r,n)&&!j.hasOwnProperty(n)&&(l[n]=r[n]);var c=arguments.length-2;if(1===c)l.children=t;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];l.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===l[n]&&(l[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:i,props:l,_owner:x.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case l:c=!0}}if(c)return a=a(c=e),e=""===n?"."+E(c,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),S(a,r,t,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),r.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+E(i=e[u],u);c+=S(i,r,t,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(i=e.next()).done;)c+=S(i=i.value,r,t,s=n+E(i,u++),a);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function P(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var l=n({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,c=x.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in r)_.call(r,s)&&!j.hasOwnProperty(s)&&(l[s]=void 0===r[s]&&void 0!==u?u[s]:r[s])}var s=arguments.length-2;if(1===s)l.children=t;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];l.children=u}return{$$typeof:o,type:e.type,key:a,ref:i,props:l,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>l});var n=t(667294);const o=n.createContext({});function l(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:l(e),n.createElement(o.Provider,{value:i},r)}}}]);