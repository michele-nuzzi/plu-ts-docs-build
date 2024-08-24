"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[3162],{82324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=t(17624),r=t(4552);const a={sidebar_position:9},s="PCredential",c={id:"onchain/API/types/PCredential",title:"PCredential",description:"Credentials (payment or staking); either a public key hash (in the case of a user) or a validator hash (for on-chain scripts)",source:"@site/docs/onchain/API/types/PCredential.mdx",sourceDirName:"onchain/API/types",slug:"/onchain/API/types/PCredential",permalink:"/onchain/API/types/PCredential",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/API/types/PCredential.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"PStakingCredentials",permalink:"/onchain/API/types/PStakingCredentials"},next:{title:"PPubKeyHash",permalink:"/onchain/API/types/PPubKeyHash"}},d={},o=[{value:"<code>PPubKeyCredential</code>",id:"ppubkeycredential",level:2},{value:"<code>pkh</code>",id:"pkh",level:3},{value:"<code>PScriptCredential</code>",id:"pscriptcredential",level:2},{value:"<code>valHash</code>",id:"valhash",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pcredential",children:(0,i.jsx)(n.code,{children:"PCredential"})}),"\n",(0,i.jsx)(n.p,{children:"Credentials (payment or staking); either a public key hash (in the case of a user) or a validator hash (for on-chain scripts)"}),"\n",(0,i.jsx)(n.p,{children:"definition:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export const PCredential = pstruct({\n    PPubKeyCredential: { pkh: PPubKeyHash.type },\n    PScriptCredential: { valHash: PValidatorHash.type },\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ppubkeycredential",children:(0,i.jsx)(n.code,{children:"PPubKeyCredential"})}),"\n",(0,i.jsx)(n.p,{children:"user governed credentials"}),"\n",(0,i.jsx)(n.h3,{id:"pkh",children:(0,i.jsx)(n.code,{children:"pkh"})}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"./PPubKeyHash",children:(0,i.jsx)(n.code,{children:"PPubKeyHash"})})]}),"\n",(0,i.jsx)(n.h2,{id:"pscriptcredential",children:(0,i.jsx)(n.code,{children:"PScriptCredential"})}),"\n",(0,i.jsx)(n.p,{children:"on-chain script governed credentials"}),"\n",(0,i.jsx)(n.h3,{id:"valhash",children:(0,i.jsx)(n.code,{children:"valHash"})}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"./PValidatorHash",children:(0,i.jsx)(n.code,{children:"PValidatorHash"})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>s});var i=t(11504);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);