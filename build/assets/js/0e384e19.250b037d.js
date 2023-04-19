"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[9671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return a?i.createElement(k,l(l({ref:t},c),{},{components:a})):i.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:1},l="plu-ts",s={unversionedId:"intro",id:"intro",title:"plu-ts",description:"Built with \u2764\ufe0f by Harmonic Laboratories",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/Getting Started"}},o={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Design principles",id:"design-principles",level:2},{value:"Roadmap",id:"roadmap",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"plu-ts"},"plu-ts"),(0,n.kt)("p",null,"Built with \u2764\ufe0f by ",(0,n.kt)("a",{parentName:"p",href:"https://www.harmoniclabs.tech/"},"Harmonic Laboratories")),(0,n.kt)("p",null,"This documentation is for ",(0,n.kt)("inlineCode",{parentName:"p"},"plu-ts")," v0.2.0^, if you are using a previous version check for changes in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/HarmonicLabs/plu-ts/blob/main/CHANGELOG.md"},"changelog"),"."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"plu-ts")," is a library designed for building Cardano dApps in an efficient and developer friendly way."),(0,n.kt)("p",null,"It is composed of two main parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"plu-ts/onchain"),": an ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Domain-specific_language#External_and_Embedded_Domain_Specific_Languages"},"eDSL")," (embedded Doamin Specific Language) that leverages Typescript as the host language; designed to generate efficient Smart Contracts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"plu-ts/offchain"),": a set of classes and functions that allow reuse of onchain types.")),(0,n.kt)("h1",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"see ",(0,n.kt)("a",{parentName:"p",href:"./Getting%20Started"},"Getting Started")," to begin your jurney in plu-ts"),(0,n.kt)("h2",{id:"design-principles"},"Design principles"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"plu-ts")," was designed with the following goals in mind, in order of importance:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Smart Contract efficiency"),(0,n.kt)("li",{parentName:"ul"},"reduced script size"),(0,n.kt)("li",{parentName:"ul"},"developer experience"),(0,n.kt)("li",{parentName:"ul"},"readability")),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"v0.1.* :",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","key syntax to build ",(0,n.kt)("inlineCode",{parentName:"li"},"plu-ts")," expressions"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","compilation of smart contracts to valid UPLC"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","standard API data structures (",(0,n.kt)("inlineCode",{parentName:"li"},"PScriptContext"),", etc... ) for PlutusV1 and PlutusV2 contracts"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","standard library"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Terms with utility methods to simplify the developer experience ( ",(0,n.kt)("inlineCode",{parentName:"li"},"TermInt"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"TermBool"),", etc... )"))),(0,n.kt)("li",{parentName:"ul"},"v0.2.* :",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"plu-ts/offchain"),(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","ledger types implementaiton"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"TxBuilder")," API"))))),(0,n.kt)("li",{parentName:"ul"},"v0.3.* :",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","onchain optimizations",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","introduction of an IR"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","static AST analysis"))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","improved developer experience",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","deprecate ",(0,n.kt)("inlineCode",{parentName:"li"},"extract")," in favor of plain dot notaion"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," deprecate ",(0,n.kt)("inlineCode",{parentName:"li"},"plet( value ).in( myVar => {...} )"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"in favor of ",(0,n.kt)("inlineCode",{parentName:"li"},"const myVar = plet( value )"))))))))))}d.isMDXComponent=!0}}]);