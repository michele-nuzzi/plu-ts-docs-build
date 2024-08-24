"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[5380],{59596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var i=t(17624),r=t(4552);const c={sidebar_position:1},o="PScriptPurpose",d={id:"onchain/API/types/PScriptPurpose",title:"PScriptPurpose",description:"It is the second field of the PScriptContext structure.",source:"@site/docs/onchain/API/types/PScriptPurpose.mdx",sourceDirName:"onchain/API/types",slug:"/onchain/API/types/PScriptPurpose",permalink:"/onchain/API/types/PScriptPurpose",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/API/types/PScriptPurpose.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"PScriptContext",permalink:"/onchain/API/types/PScriptContext"},next:{title:"PTxInfo",permalink:"/onchain/API/types/PTxInfo"}},s={},l=[{value:"<code>Minting</code>",id:"minting",level:2},{value:"<code>currencySym</code>",id:"currencysym",level:3},{value:"<code>Spending</code>",id:"spending",level:2},{value:"<code>utxoRef</code>",id:"utxoref",level:3},{value:"<code>Rewarding</code>",id:"rewarding",level:2},{value:"<code>stakeCredential</code>",id:"stakecredential",level:3},{value:"<code>Certifying</code>",id:"certifying",level:2},{value:"<code>cert</code>",id:"cert",level:3},{value:"<code>Voting</code>",id:"voting",level:2},{value:"<code>voter</code>",id:"voter",level:3},{value:"<code>Proposing</code>",id:"proposing",level:2},{value:"<code>proposal</code>",id:"proposal",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pscriptpurpose",children:(0,i.jsx)(n.code,{children:"PScriptPurpose"})}),"\n",(0,i.jsxs)(n.p,{children:["It is the second field of the ",(0,i.jsx)(n.a,{href:"./PScriptContext",children:(0,i.jsx)(n.code,{children:"PScriptContext"})})," structure."]}),"\n",(0,i.jsx)(n.p,{children:"It tells us what the script is used for based on the constructor and it passes some useful information that would be hard to access otherwise."}),"\n",(0,i.jsx)(n.p,{children:"definition:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export const PScriptPurpose = pstruct({\n    Minting: { currencySym: PCurrencySymbol.type },\n    Spending: { utxoRef: PTxOutRef.type },\n    Rewarding: { stakeCredential: PCredential.type },\n    Certifying: {\n        index: int,\n        cert: PCertificate.type\n    },\n    Voting: {\n        voter: PVoter.type\n    },\n    Proposing: {\n        index: int,\n        proposal: PProposalProcedure.type\n    }\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"minting",children:(0,i.jsx)(n.code,{children:"Minting"})}),"\n",(0,i.jsx)(n.h3,{id:"currencysym",children:(0,i.jsx)(n.code,{children:"currencySym"})}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PCurrencySymbol.type"})]}),"\n",(0,i.jsx)(n.h2,{id:"spending",children:(0,i.jsx)(n.code,{children:"Spending"})}),"\n",(0,i.jsx)(n.h3,{id:"utxoref",children:(0,i.jsx)(n.code,{children:"utxoRef"})}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PTxOutRef.type"})]}),"\n",(0,i.jsx)(n.h2,{id:"rewarding",children:(0,i.jsx)(n.code,{children:"Rewarding"})}),"\n",(0,i.jsx)(n.h3,{id:"stakecredential",children:(0,i.jsx)(n.code,{children:"stakeCredential"})}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PCredential.type"})]}),"\n",(0,i.jsx)(n.h2,{id:"certifying",children:(0,i.jsx)(n.code,{children:"Certifying"})}),"\n",(0,i.jsx)(n.h3,{id:"cert",children:(0,i.jsx)(n.code,{children:"cert"})}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PCertificate.type"})]}),"\n",(0,i.jsx)(n.h2,{id:"voting",children:(0,i.jsx)(n.code,{children:"Voting"})}),"\n",(0,i.jsx)(n.h3,{id:"voter",children:(0,i.jsx)(n.code,{children:"voter"})}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PVoter.type"})]}),"\n",(0,i.jsx)(n.h2,{id:"proposing",children:(0,i.jsx)(n.code,{children:"Proposing"})}),"\n",(0,i.jsx)(n.h3,{id:"proposal",children:(0,i.jsx)(n.code,{children:"proposal"})}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PProposalProcedure.type"})]})]})}function a(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>o});var i=t(11504);const r={},c=i.createContext(r);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);