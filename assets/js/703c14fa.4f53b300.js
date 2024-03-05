"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[7284],{10052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(17624),r=n(4552);const i={sidebar_position:1},c="Generic Structs",o={id:"onchain/Values/Structs/generic_structs",title:"Generic Structs",description:"Sometimes it might be necessary to define custom types that are able to work with any other type; often acting as containers.",source:"@site/docs/onchain/Values/Structs/generic_structs.mdx",sourceDirName:"onchain/Values/Structs",slug:"/onchain/Values/Structs/generic_structs",permalink:"/onchain/Values/Structs/generic_structs",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/Values/Structs/generic_structs.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Struct definition",permalink:"/onchain/Values/Structs/definition"},next:{title:"Methods of Terms",permalink:"/onchain/Values/Methods of Terms"}},a={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"generic-structs",children:"Generic Structs"}),"\n",(0,s.jsx)(t.p,{children:"Sometimes it might be necessary to define custom types that are able to work with any other type; often acting as containers."}),"\n",(0,s.jsxs)(t.p,{children:["A great example are lists; which can work with elements of any type; and for this reason we have ",(0,s.jsx)(t.code,{children:"list( int )"}),", ",(0,s.jsx)(t.code,{children:"list( bs )"}),", etc..."]}),"\n",(0,s.jsx)(t.p,{children:"But lists are built into the language; how do we define our own containers?"}),"\n",(0,s.jsxs)(t.p,{children:["In the same way we define ",(0,s.jsx)(t.a,{href:"../../Types#plu-ts-generics",children:"generic types"}),"!"]}),"\n",(0,s.jsxs)(t.p,{children:["As we know ",(0,s.jsx)(t.a,{href:"./definition",children:"structs can have multiple constructors"})," and the same is true for generic ones; so let's try to define a type that can hold either one or two instances of the same type:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const POneOrTwo = ( ty ) => pstruct({\n    One: { value: ty },\n    Two: { fst: ty, snd: ty }\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"pgenericStruct"})," returns a funciton (and not a class like ",(0,s.jsx)(t.code,{children:"pstruct"})," does) that takes as input as many ",(0,s.jsx)(t.code,{children:"TermType"}),"s as in the definition (the arguments of thefunction passed to `pgenericStruct')"]}),"\n",(0,s.jsx)(t.p,{children:"and only then returns a class; which represents the actual struct type."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const OneOrTwoInts = POneOrTwo( int ),\n\nconst OneOrTwoBS = POneOrTwo( bs );\n\nconst OneOrTwoOneOrTwoInts = POneOrTwo( POneOrTwo( int ).type );\n"})}),"\n",(0,s.jsxs)(t.admonition,{title:"make Typescript happy",type:"info",children:[(0,s.jsx)(t.p,{children:"each time we need to deal with something that is generic Typescript needs a little help understanding\nwhat is the type of the argument."}),(0,s.jsx)(t.p,{children:"We can make Typescript happy by making the funciton that returns a struct generic in typescript;"}),(0,s.jsx)(t.p,{children:"So the correct version of the snipped above would be:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const POneOrTwo = <TyArg extends TermType>( ty: TyArg ) => \n    pstruct({\n        One: { value: ty },\n        Two: { fst: ty, snd: ty }\n    });\n"})})]})]})}function l(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>c});var s=n(11504);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);