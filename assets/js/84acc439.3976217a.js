/*! For license information please see 84acc439.3976217a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[696641],{603905:(e,r,n)=>{n.d(r,{Zo:()=>f,kt:()=>m});var t=n(667294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},f=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||s[d]||a;return n?t.createElement(m,c(c({ref:r},f),{},{components:n})):t.createElement(m,c({ref:r},f))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62406:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>u,toc:()=>f});n(827378);var t=n(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"backend-common.dockercontainerrunner.runcontainer",title:"DockerContainerRunner.runContainer()",description:"API reference for DockerContainerRunner.runContainer()"},i=void 0,u={unversionedId:"reference/backend-common.dockercontainerrunner.runcontainer",id:"reference/backend-common.dockercontainerrunner.runcontainer",title:"DockerContainerRunner.runContainer()",description:"API reference for DockerContainerRunner.runContainer()",source:"@site/../docs/reference/backend-common.dockercontainerrunner.runcontainer.md",sourceDirName:"reference",slug:"/reference/backend-common.dockercontainerrunner.runcontainer",permalink:"/docs/reference/backend-common.dockercontainerrunner.runcontainer",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.dockercontainerrunner.runcontainer.md",tags:[],version:"current",frontMatter:{id:"backend-common.dockercontainerrunner.runcontainer",title:"DockerContainerRunner.runContainer()",description:"API reference for DockerContainerRunner.runContainer()"}},l={},f=[{value:"Parameters",id:"parameters",level:2}],p={toc:f};function s(e){var{components:r}=e,n=a(e,["components"]);return(0,t.kt)("wrapper",o({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-common"}),(0,t.kt)("inlineCode",{parentName:"a"},"@backstage/backend-common"))," ",">"," ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-common.dockercontainerrunner"}),(0,t.kt)("inlineCode",{parentName:"a"},"DockerContainerRunner"))," ",">"," ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-common.dockercontainerrunner.runcontainer"}),(0,t.kt)("inlineCode",{parentName:"a"},"runContainer"))),(0,t.kt)("b",null,"Signature:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"runContainer(options: RunContainerOptions): Promise<void>;\n")),(0,t.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"options"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("a",o({parentName:"td"},{href:"/docs/reference/backend-common.runcontaineroptions"}),"RunContainerOptions")),(0,t.kt)("td",o({parentName:"tr"},{align:null}))))),(0,t.kt)("b",null,"Returns:"),(0,t.kt)("p",null,"Promise","<","void",">"))}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,i,u=o(e),l=1;l<arguments.length;l++){for(var f in c=Object(arguments[l]))n.call(c,f)&&(u[f]=c[f]);if(r){i=r(c);for(var p=0;p<i.length;p++)t.call(c,i[p])&&(u[i[p]]=c[i[p]])}}return u}},541535:(e,r,n)=>{var t=n(862525),o=60103,a=60106;var c=60109,i=60110,u=60112;var l=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),c=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),f=p("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||m}function k(){}function h(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var v=h.prototype=new k;v.constructor=h,t(v,b.prototype),v.isPureReactComponent=!0;var g={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,n){var t,a={},c=null,i=null;if(null!=r)for(t in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)O.call(r,t)&&!j.hasOwnProperty(t)&&(a[t]=r[t]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];a.children=l}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===a[t]&&(a[t]=u[t]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:g.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function N(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function _(e,r,n,t,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return c=c(u=e),e=""===t?"."+N(u,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),_(c,r,n,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var f=t+N(i=e[l],l);u+=_(i,r,n,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),l=0;!(i=e.next()).done;)u+=_(i=i.value,r,n,f=t+N(i,l++),c);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function S(e,r,n){if(null==e)return e;var t=[],o=0;return _(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function D(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,n)=>{n(541535)}}]);