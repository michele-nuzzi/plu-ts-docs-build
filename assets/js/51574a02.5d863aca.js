"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[7224],{4116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(17624),s=t(4552);const r={sidebar_position:6},d="TermPair<PFstT,PSndT>",o={id:"onchain/stdlib/TermPair",title:"TermPair<PFstT,PSndT>",description:"type definition:",source:"@site/docs/onchain/stdlib/TermPair.mdx",sourceDirName:"onchain/stdlib",slug:"/onchain/stdlib/TermPair",permalink:"/onchain/stdlib/TermPair",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/stdlib/TermPair.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"TermList<PElemsType>",permalink:"/onchain/stdlib/TermList"},next:{title:"TermFn<PIns[],POut>",permalink:"/onchain/stdlib/TermFn<PIns,POut>"}},c={},l=[{value:"<code>fst</code>",id:"fst",level:2},{value:"<code>snd</code>",id:"snd",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"termpairpfsttpsndt",children:(0,i.jsx)(n.code,{children:"TermPair<PFstT,PSndT>"})}),"\n",(0,i.jsx)(n.p,{children:"type definition:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type TermPair<PFst extends PType, PSnd extends PType> = Term<PPair<PFst,PSnd>> & {\n\n    readonly fst: UtilityTermOf<PFst>\n\n    readonly snd: UtilityTermOf<PSnd>\n    \n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"fst",children:(0,i.jsx)(n.code,{children:"fst"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"head"})}),(0,i.jsxs)(n.p,{children:["returns: ",(0,i.jsx)(n.code,{children:"UtilityTermOf<PFstT>"})]}),(0,i.jsx)(n.p,{children:"equivalent expression:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"pfstPair( fstT, sndT ).$( term )\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"returns the first element of the pair"}),"\n",(0,i.jsx)(n.h2,{id:"snd",children:(0,i.jsx)(n.code,{children:"snd"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"snd"})}),(0,i.jsxs)(n.p,{children:["returns: ",(0,i.jsx)(n.code,{children:"UtilityTermOf<PSndT>"})]}),(0,i.jsx)(n.p,{children:"equivalent expression:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"psndPair( fstT, sndT ).$( term )\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"returns the second element of the pair"})]})}function m(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>d});var i=t(11504);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);