"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[8744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},i="pmatch",l={unversionedId:"onchain/Control Flow/pmatch",id:"onchain/Control Flow/pmatch",title:"pmatch",description:"When we had our first look at the structs, we hinted at the possibility of custom control flows.",source:"@site/docs/onchain/Control Flow/pmatch.mdx",sourceDirName:"onchain/Control Flow",slug:"/onchain/Control Flow/pmatch",permalink:"/docs/onchain/Control Flow/pmatch",draft:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts/tree/main/packages/create-docusaurus/templates/shared/docs/onchain/Control Flow/pmatch.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"if then else",permalink:"/docs/onchain/Control Flow/pif"},next:{title:"precursive",permalink:"/docs/onchain/Control Flow/precursive"}},s={},c=[{value:"the underscore (<code>_</code>) wildcard",id:"the-underscore-_-wildcard",level:2},{value:"inline extracts",id:"inline-extracts",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pmatch"},(0,o.kt)("inlineCode",{parentName:"h1"},"pmatch")),(0,o.kt)("p",null,"When we had our first look at the ",(0,o.kt)("a",{parentName:"p",href:"../Values/Structs/definition"},"structs"),", we hinted at the possibility of ",(0,o.kt)("em",{parentName:"p"},"custom control flows"),"."),(0,o.kt)("p",null,"These are possible thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pmatch")," construct."),(0,o.kt)("p",null,"To understand why this is extremely useful, let's take our ",(0,o.kt)("inlineCode",{parentName:"p"},"Toy")," struct we defined looking at ",(0,o.kt)("inlineCode",{parentName:"p"},"pstruct"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const Toy = pstruct({\n    Stick: {},\n    Ball: {\n        size: int,\n        isSoft: bool\n    },\n    Mailman: {\n        name: str,\n        age: Age.type\n    }\n})\n")),(0,o.kt)("p",null,"And let's say we want to have a function that extracts the name of the mailman our dog plays with when we're out. It would look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const getMailmanName = plam( Toy.type, str )\n( toy =>\n    pmatch( toy )\n    .onMailman( rawFields =>\n        rawFields.extract("name").in( mailman =>\n            mailman.name\n    ))\n    .onStick( _ => pStr("") )\n    .onBall(  _ => pStr("") )\n)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pmatch")," is takeing a struct ",(0,o.kt)("inlineCode",{parentName:"p"},"Term")," and returnring a Typescript object with all the names of possible constructors that struct has, based on its definition. "),(0,o.kt)("p",null,"It then executes the branch based on the constructor used to get the struct instance."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"pmatch")," branch gets as input the raw fields of the constructor, under the form of a Term of type ",(0,o.kt)("inlineCode",{parentName:"p"},"list( data )"),"."),(0,o.kt)("p",null,"Since extracting the fields might turn out to be an expensive operation to do, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rawFields")," object provides a utility function called ",(0,o.kt)("inlineCode",{parentName:"p"},"extract")," which takes the names of the fields you ",(0,o.kt)("em",{parentName:"p"},"actually need")," and ignores the rest, finally making the extracted fields available in an object passed to the final function."),(0,o.kt)("p",null,"This way the defined function returns the name of the mailman if the Toy was actually constructed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mailman")," constructor; otherwise it returns an empty string."),(0,o.kt)("h2",{id:"the-underscore-_-wildcard"},"the underscore (",(0,o.kt)("inlineCode",{parentName:"h2"},"_"),") wildcard"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pmatch")," will force you to cover the cases for all constructors; but many times we only want to do something if the struct was built using one specific constructor without regard for any other constructors."),(0,o.kt)("p",null,"In fact we found ourselves in a very similar case in the example above: we want to do something only in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mailman")," case but not in the others."),(0,o.kt)("p",null,"For situations like these there is the underscore (",(0,o.kt)("inlineCode",{parentName:"p"},"_"),") wildcard, that allows us to rewrite our function as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const getMailmanName = plam( Toy.type, str )\n( toy =>\n    pmatch( toy )\n    .onMailman( rawFields =>\n        rawFields.extract("name").in( mailman =>\n            mailman.name\n    ))\n    ._( _ => pStr("") )\n)\n')),(0,o.kt)("p",null,"This not only makes the code more readable but in the vast majority of the cases it also makes it more efficient!"),(0,o.kt)("h2",{id:"inline-extracts"},"inline extracts"),(0,o.kt)("p",null,"Now that we have a way to extract the name of the mailman from a Toy, we need to pass the actual toy to the fuction we just defined."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pmatch")," function, our code would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// remember the definition of `Dog`\nconst Dog = pstruct({\n    Dog: {\n        name: str,\n        age: Age.type,\n        favouriteToy: Toy.type\n    }\n});\n\nconst getMailmanNameFromDog = plam( Dog.type, str )\n( dog =>\n    pmatch( dog )\n    .onDog( rawFields =>\n        rawFields.extract("favouriteToy").in( fields =>\n            getMailmanName.$( fields.favouriteToy )\n    ))\n)\n')),(0,o.kt)("p",null,"This works just fine but is a lot of code just to get a field of a constructor we know is unique..."),(0,o.kt)("p",null,"Fortunately for us, if the struct definition has only one possible constructor, this struct term directly exposes the ",(0,o.kt)("inlineCode",{parentName:"p"},"extract")," method "),(0,o.kt)("p",null,"This allows us to rewrite the function as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const getMailmanNameFromDog = plam( Dog.type, str )\n( dog =>\n    // highlight-next-line\n    dog.extract("favouriteToy").in( fields =>\n        getMailmanName.$( fields.favouriteToy )\n    )\n)\n')),(0,o.kt)("p",null,"which is a lot cleaner!"))}m.isMDXComponent=!0}}]);