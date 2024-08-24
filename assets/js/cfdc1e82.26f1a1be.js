"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[7262],{50728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(17624),r=n(4552);const i={sidebar_position:5},d="Methods of Terms",o={id:"onchain/Values/Methods of Terms",title:"Methods of Terms",description:"Like in the case of papp that is meant to work with a plu-ts function as the first argument, there are functions that are meant to work with specific types.",source:"@site/docs/onchain/Values/Methods of Terms.mdx",sourceDirName:"onchain/Values",slug:"/onchain/Values/Methods of Terms",permalink:"/onchain/Values/Methods of Terms",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/Values/Methods of Terms.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Generic Structs",permalink:"/onchain/Values/Structs/generic_structs"},next:{title:"Control Flow",permalink:"/category/control-flow"}},c={},l=[{value:"I see two properties that look similar, which one should I use?",id:"i-see-two-properties-that-look-similar-which-one-should-i-use",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"methods-of-terms",children:"Methods of Terms"}),"\n",(0,s.jsxs)(t.p,{children:["Like in the case of ",(0,s.jsx)(t.code,{children:"papp"})," that is meant to work with a ",(0,s.jsx)(t.code,{children:"plu-ts"})," function as the first argument, there are functions that are meant to work with specific types."]}),"\n",(0,s.jsx)(t.p,{children:"The functions can of course be used as normal but sometimes some arguments can be made implicit."}),"\n",(0,s.jsxs)(t.p,{children:["As an example, the built-in ",(0,s.jsx)(t.code,{children:"padd"})," is meant to work with integers, so it would be great if instead of writing:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"padd.$( int1 ).$( int2 )\n"})}),"\n",(0,s.jsx)(t.p,{children:"we could make the first argument implicit and just do:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"int1.add( int2 )\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Turns out ",(0,s.jsx)(t.code,{children:"plu-ts"})," implements some special terms that extend the normal ",(0,s.jsx)(t.code,{children:"Term"})," functionalities, adding some methods to them. For most of the types there is a special ",(0,s.jsx)(t.code,{children:"Term"})," type with extended functionalities:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"normal term"}),(0,s.jsx)(t.th,{children:"term with methods"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PUnit>"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PInt>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TermInt"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PBool>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TermBool"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PByteString>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TermBS"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PStr>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TermStr"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PData>"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PList<PElemsType>>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TermList<PElemsType>"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PPair<Fst,Snd>>"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PDelayed<PType>>"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PLam<In,Out>>"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PFn<Ins,Out>>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TermFn<Ins,Out>"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<Alias<PType>>"})}),(0,s.jsxs)(t.td,{children:["depends by ",(0,s.jsx)(t.code,{children:"PType"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Term<PStruct<StructDef>>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TermStruct<StructDef>"})})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:['We call these "',(0,s.jsx)(t.strong,{children:"utility terms"}),'" and are covered more in depth in the ',(0,s.jsx)(t.a,{href:"../../category/stdlib",children:"standard library section"}),"; but is good having in mind that these exists as they make our life much easier while writing a program."]}),"\n",(0,s.jsx)(t.h2,{id:"i-see-two-properties-that-look-similar-which-one-should-i-use",children:"I see two properties that look similar, which one should I use?"}),"\n",(0,s.jsxs)(t.p,{children:["Every ",(0,s.jsx)(t.em,{children:"utility term"}),' exposes two variants for each property it has; one is a plain function and the other (the one that ends with "...Term") that is the ',(0,s.jsx)(t.code,{children:"plu-ts"})," version of it."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's take a look at the ",(0,s.jsx)(t.code,{children:"TermInt"})," definition:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"type TermInt = Term<PInt> & {\n\n    readonly addTerm:       TermFn<[PInt], PInt>\n    readonly add:           ( other: Term<PInt> ) => TermInt\n\n    readonly subTerm:       TermFn<[PInt], PInt>\n    readonly sub:           ( other: Term<PInt> ) => TermInt\n\n    readonly multTerm:      TermFn<[PInt], PInt>\n    readonly mult:          ( other: Term<PInt> ) => TermInt\n\n    // \n    // ... lots of other methods\n    // \n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Generally speaking you want to use the ts function version for two reasons:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"is more readable"}),"\n",(0,s.jsx)(t.li,{children:"might produce slightly less code (hence is more efficient)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["However, the fact that is defined as a function makes it unable to be passed as argument to ",(0,s.jsx)(t.code,{children:"plu-ts"})," higher order functions (or a normal ts functions that expects ",(0,s.jsx)(t.code,{children:"Term<PLam>"})," as argument)."]}),"\n",(0,s.jsx)(t.p,{children:'In that case you want to use the "...Term" alternative which is optimized exactly for that.'})]})}function a(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>d});var s=n(11504);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);