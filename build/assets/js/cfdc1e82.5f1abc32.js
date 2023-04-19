"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[6987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},o="Methods of Terms",l={unversionedId:"onchain/Values/Methods of Terms",id:"onchain/Values/Methods of Terms",title:"Methods of Terms",description:"Like in the case of papp that is meant to work with a plu-ts function as the first argument, there are functions that are meant to work with specific types.",source:"@site/docs/onchain/Values/Methods of Terms.mdx",sourceDirName:"onchain/Values",slug:"/onchain/Values/Methods of Terms",permalink:"/docs/onchain/Values/Methods of Terms",draft:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts/tree/main/packages/create-docusaurus/templates/shared/docs/onchain/Values/Methods of Terms.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Generic Structs",permalink:"/docs/onchain/Values/Structs/generic_structs"},next:{title:"Control Flow",permalink:"/docs/category/control-flow"}},s={},m=[{value:"I see two properties that look similar, which one should I use?",id:"i-see-two-properties-that-look-similar-which-one-should-i-use",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"methods-of-terms"},"Methods of Terms"),(0,a.kt)("p",null,"Like in the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"papp")," that is meant to work with a ",(0,a.kt)("inlineCode",{parentName:"p"},"plu-ts")," function as the first argument, there are functions that are meant to work with specific types."),(0,a.kt)("p",null,"The functions can of course be used as normal but sometimes some arguments can be made implicit."),(0,a.kt)("p",null,"As an example, the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"padd")," is meant to work with integers, so it would be great if instead of writing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"padd.$( int1 ).$( int2 )\n")),(0,a.kt)("p",null,"we could make the first argument implicit and just do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"int1.add( int2 )\n")),(0,a.kt)("p",null,"Turns out ",(0,a.kt)("inlineCode",{parentName:"p"},"plu-ts")," implements some special terms that extend the normal ",(0,a.kt)("inlineCode",{parentName:"p"},"Term")," functionalities, adding some methods to them. For most of the types there is a special ",(0,a.kt)("inlineCode",{parentName:"p"},"Term")," type with extended functionalities:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"normal term"),(0,a.kt)("th",{parentName:"tr",align:null},"term with methods"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PUnit>")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PInt>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TermInt"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PBool>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TermBool"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PByteString>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TermBS"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PStr>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TermStr"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PData>")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PList<PElemsType>>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TermList<PElemsType>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PPair<Fst,Snd>>")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PDelayed<PType>>")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PLam<In,Out>>")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PFn<Ins,Out>>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TermFn<Ins,Out>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<Alias<PType>>")),(0,a.kt)("td",{parentName:"tr",align:null},"depends by ",(0,a.kt)("inlineCode",{parentName:"td"},"PType"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Term<PStruct<StructDef>>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TermStruct<StructDef>"))))),(0,a.kt)("p",null,'We call these "',(0,a.kt)("strong",{parentName:"p"},"utility terms"),'" and are covered more in depth in the ',(0,a.kt)("a",{parentName:"p",href:"../../category/stdlib"},"standard library section"),"; but is good having in mind that these exsists as they makes our life much easier while writing a program."),(0,a.kt)("h2",{id:"i-see-two-properties-that-look-similar-which-one-should-i-use"},"I see two properties that look similar, which one should I use?"),(0,a.kt)("p",null,"Every ",(0,a.kt)("em",{parentName:"p"},"utility term"),' exposes two variants for each property it has; one is a plain function and the other (the one that ends with "...Term") that is the ',(0,a.kt)("inlineCode",{parentName:"p"},"plu-ts")," version of it."),(0,a.kt)("p",null,"Let's take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"TermInt")," definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type TermInt = Term<PInt> & {\n\n    readonly addTerm:       TermFn<[PInt], PInt>\n    readonly add:           ( other: Term<PInt> ) => TermInt\n\n    readonly subTerm:       TermFn<[PInt], PInt>\n    readonly sub:           ( other: Term<PInt> ) => TermInt\n\n    readonly multTerm:      TermFn<[PInt], PInt>\n    readonly mult:          ( other: Term<PInt> ) => TermInt\n\n    // \n    // ... lots of other methods\n    // \n}\n")),(0,a.kt)("p",null,"Generally speaking you want to use the ts function version for two reasons:\n1) is more readable\n2) might produce slightly less code (hence is more efficient)"),(0,a.kt)("p",null,"However, the fact that is defined as a function makes it unable to be passed as argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"plu-ts")," higher oreder functions (or a normal ts functions that expects ",(0,a.kt)("inlineCode",{parentName:"p"},"Term<PLam>")," as argument)."),(0,a.kt)("p",null,'In that case you want to use the "...Term" alternative which is optimized exactly for that.'))}u.isMDXComponent=!0}}]);