/*! For license information please see 4f0f253c.0997fb4d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[682621],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,k=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},436412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(827378);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"plugin-jenkins-backend.jenkinsconfig",title:"JenkinsConfig",description:"API reference for JenkinsConfig"},c=void 0,l={unversionedId:"reference/plugin-jenkins-backend.jenkinsconfig",id:"reference/plugin-jenkins-backend.jenkinsconfig",title:"JenkinsConfig",description:"API reference for JenkinsConfig",source:"@site/../docs/reference/plugin-jenkins-backend.jenkinsconfig.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins-backend.jenkinsconfig",permalink:"/docs/reference/plugin-jenkins-backend.jenkinsconfig",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins-backend.jenkinsconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins-backend.jenkinsconfig",title:"JenkinsConfig",description:"API reference for JenkinsConfig"}},s={},u=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],p={toc:u};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-jenkins-backend"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-jenkins-backend"))," ",">"," ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsconfig"}),(0,r.kt)("inlineCode",{parentName:"a"},"JenkinsConfig"))),(0,r.kt)("p",null,"Holds multiple Jenkins configurations."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class JenkinsConfig \n")),(0,r.kt)("h2",a({},{id:"constructors"}),"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Constructor"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsconfig._constructor_"}),"(constructor)(instances)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Constructs a new instance of the ",(0,r.kt)("code",null,"JenkinsConfig")," class")))),(0,r.kt)("h2",a({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsconfig.instances"}),"instances")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"readonly")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig"}),"JenkinsInstanceConfig"),"[","]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",a({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsconfig.fromconfig"}),"fromConfig(config)")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"static")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Read all Jenkins instance configurations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsconfig.getinstanceconfig"}),"getInstanceConfig(jenkinsName)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Gets a Jenkins instance configuration by name, or the default one if no name is provided.")))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,c,l=a(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))n.call(i,u)&&(l[u]=i[u]);if(t){c=t(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(l[c[p]]=i[c[p]])}}return l}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var i=60109,c=60110,l=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||k}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||k}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var h=b.prototype=new y;h.constructor=b,r(h,m.prototype),h.isPureReactComponent=!0;var j={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+C(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),_(i,t,n,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=r+C(c=e[s],s);l+=_(c,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(c=e.next()).done;)l+=_(c=c.value,t,n,u=r+C(c,s++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function S(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function J(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);