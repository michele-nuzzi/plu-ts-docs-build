"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[76],{94688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=n(17624),i=n(4552);const s={sidebar_position:8},c="TermStruct<StructDef>",o={id:"onchain/stdlib/TermStruct<StructDef>",title:"TermStruct<StructDef>",description:"TermStruct is an other type that is unnecessarely complicated.",source:"@site/docs/onchain/stdlib/TermStruct<StructDef>.mdx",sourceDirName:"onchain/stdlib",slug:"/onchain/stdlib/TermStruct<StructDef>",permalink:"/onchain/stdlib/TermStruct<StructDef>",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/stdlib/TermStruct<StructDef>.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"TermFn<PIns[],POut>",permalink:"/onchain/stdlib/TermFn<PIns,POut>"},next:{title:"API",permalink:"/category/api"}},d={},a=[{value:"<code>eq</code>",id:"eq",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"termstructstructdef",children:(0,r.jsx)(t.code,{children:"TermStruct<StructDef>"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TermStruct"})," is an other type that is unnecessarely complicated."]}),"\n",(0,r.jsx)(t.p,{children:"This time because it has to mess around with the struct definition;\nbut even so the type definition should not be that hard to understand if we know what is doing"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type StructInstance<SCtorDef extends StructCtorDef> = {\n    readonly [Field in keyof SCtorDef]: UtilityTermOf<ToPType<SCtorDef[Field]>>\n}\n\ntype TermStruct<SDef extends StructDefinition> = Term<PStruct<SDef>> & {\n    \n    readonly eqTerm: TermFn<[PStruct<SDef>], PBool>\n    readonly eq: ( other: Term<PStruct<SDef>> ) => TermBool\n\n} & \n    IsSingelKey<SDef> extends true ? StructInstance<SDef[keyof SCtorDef]> : {};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["even with these semplifications it might seem a bit complex but really all is telling us is that it adds the struct properties (trough ",(0,r.jsx)(t.code,{children:"Structinstance"}),")\n",(0,r.jsx)(t.em,{children:"only if"})," the struct can only have one single constructor; and adds nothing if it has more."]}),"\n",(0,r.jsxs)(t.p,{children:["Infact we already encountered ",(0,r.jsxs)(t.a,{href:"../Control%20Flow/pmatch",children:["this method while introducing ",(0,r.jsx)(t.code,{children:"pmatch"})]}),"; we just didn't know that it was an utility term."]}),"\n",(0,r.jsxs)(t.p,{children:["it then adds the ",(0,r.jsx)(t.code,{children:"eq"})," method regardles of the struct definition."]}),"\n",(0,r.jsx)(t.h2,{id:"eq",children:(0,r.jsx)(t.code,{children:"eq"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{children:(0,r.jsx)(t.code,{children:"eq"})}),(0,r.jsxs)(t.p,{children:["parameter: ",(0,r.jsx)(t.code,{children:"other"})," type: ",(0,r.jsx)(t.code,{children:"Term<PStruct<SDef>>"})]}),(0,r.jsxs)(t.p,{children:["returns: ",(0,r.jsx)(t.code,{children:"TermBool"})]}),(0,r.jsx)(t.p,{children:"equivalent expression:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"peqData.$( term as any ).$( other  as any )\n"})})]}),"\n",(0,r.jsx)(t.p,{children:"data equality"})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>c});var r=n(11504);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);