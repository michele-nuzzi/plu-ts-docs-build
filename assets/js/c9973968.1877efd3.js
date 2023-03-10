"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[8210],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:0},o="Term evaluation",l={unversionedId:"onchain/Evaluating and testing/evaluation",id:"onchain/Evaluating and testing/evaluation",title:"Term evaluation",description:"plu-ts implements its own version of the CEK machine for the UPLC language. This allows any plu-ts term to be compiled to an UPLC Term and evaluated.",source:"@site/docs/onchain/Evaluating and testing/evaluation.mdx",sourceDirName:"onchain/Evaluating and testing",slug:"/onchain/Evaluating and testing/evaluation",permalink:"/docs/onchain/Evaluating and testing/evaluation",draft:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts/tree/main/packages/create-docusaurus/templates/shared/docs/onchain/Evaluating and testing/evaluation.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Evaluation and testing",permalink:"/docs/category/evaluation-and-testing"},next:{title:"Optimizations",permalink:"/docs/category/optimizations"}},p={},s=[{value:"<code>Machine.evalSimple</code>",id:"machineevalsimple",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"term-evaluation"},(0,i.kt)("inlineCode",{parentName:"h1"},"Term")," evaluation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")," implements its own version of the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CEK_Machine"},"CEK machine")," for the UPLC language. This allows any ",(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")," term to be compiled to an UPLC Term and evaluated."),(0,i.kt)("p",null,"in order to evaluate a term we neet to import the CEK machine implemented in ",(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Machine } from "@harmoniclbs/plu-ts"\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Machine")," is a class, because we can instantiate our own machines based on different protocol parameters."),(0,i.kt)("p",null,"however it also works as is using some default parameters."),(0,i.kt)("p",null,"if all we need is just to evaluate a term, then that works just fine."),(0,i.kt)("h2",{id:"machineevalsimple"},(0,i.kt)("inlineCode",{parentName:"h2"},"Machine.evalSimple")),(0,i.kt)("p",null,"The function that evaluates ",(0,i.kt)("inlineCode",{parentName:"p"},"Term"),"s is ",(0,i.kt)("inlineCode",{parentName:"p"},"Machine.evalSimple"),", and that's literally all you need to evaluate a term."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Machine.evalSimple")," will return an ",(0,i.kt)("inlineCode",{parentName:"p"},"UPLCTerm")," because ",(0,i.kt)("inlineCode",{parentName:"p"},"UPLCTerm"),"s is what the machine is working with."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"UPLCTerm")," can be a lot of things,\nbut if everything goes right and you expect a concrete value you'll only encounter ",(0,i.kt)("inlineCode",{parentName:"p"},"UPLCConst")," instances, or some ",(0,i.kt)("inlineCode",{parentName:"p"},"Lambda")," if you instead expect some functions. "),(0,i.kt)("p",null,"If instead the ",(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")," term you passed as argument fails the computation you will get back an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorUPLC"),"."),(0,i.kt)("p",null,"To test it we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pfactorial")," we defined while introducing ",(0,i.kt)("a",{parentName:"p",href:"../Control%20Flow/precursive"},"recursion")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Machine } from "@harmoniclbs/plu-ts"\nimport { pfactorial } from "./pfactorial";\n\nconsole.log(\n    Machine.evalSimple(\n        pfactorial.$( 0 )\n    )\n); // UPLCConst { _type: [0], _value: 1n }\n\nconsole.log(\n    Machine.evalSimple(\n        pfactorial.$( 3 )\n    )\n); // UPLCConst { _type: [0], _value: 6n }\n\nconsole.log(\n    Machine.evalSimple(\n        pfactorial.$( 5 )\n    )\n); // UPLCConst { _type: [0], _value: 120n }\n\nconsole.log(\n    Machine.evalSimple(\n        pfactorial.$( 20 )\n    )\n); // UPLCConst { _type: [0], _value: 2432902008176640000nn }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Machine.evalSimple")," is especially useful if you need to test your ",(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")," code; regardless of the testing framework of your choice you will be always able to run ",(0,i.kt)("inlineCode",{parentName:"p"},"Machine.evalSimple"),"."))}m.isMDXComponent=!0}}]);