"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[71416],{89844:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=t(17624),i=t(4552);const s={sidebar_position:18},r="PTxInInfo",c={id:"onchain/API/types/V2/Tx/PTxInInfo",title:"PTxInInfo",description:"The modifications in PTxInInfo from V1 version are highlighted.",source:"@site/docs/onchain/API/types/V2/Tx/PTxInInfo.mdx",sourceDirName:"onchain/API/types/V2/Tx",slug:"/onchain/API/types/V2/Tx/PTxInInfo",permalink:"/onchain/API/types/V2/Tx/PTxInInfo",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/API/types/V2/Tx/PTxInInfo.mdx",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"PTxId",permalink:"/onchain/API/types/V2/Tx/PTxId"},next:{title:"PTxOut",permalink:"/onchain/API/types/V2/Tx/PTxOut"}},d={},a=[{value:"<code>utxoRef</code>",id:"utxoref",level:2},{value:"<code>resolved</code>",id:"resolved",level:2}];function x(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"ptxininfo",children:(0,o.jsx)(e.code,{children:"PTxInInfo"})}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["The modifications in ",(0,o.jsx)(e.code,{children:"PTxInInfo"})," from V1 version are highlighted."]})}),"\n",(0,o.jsx)(e.p,{children:"Type that represents detailed information about a Cardano transaction input.\nEach input references a UTXO and includes the resolved details of that UTXO, essential in understanding the funds being spent in the transaction."}),"\n",(0,o.jsx)(e.p,{children:"Definition:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"export const PTxInInfo = pstruct({\n    PTxInInfo: {\n        // highlight-start\n        utxoRef: V1.PTxOutRef.type,\n        // highlight-end\n        resolved: PTxOut.type\n    }\n});\n"})}),"\n",(0,o.jsx)(e.h2,{id:"utxoref",children:(0,o.jsx)(e.code,{children:"utxoRef"})}),"\n",(0,o.jsxs)(e.p,{children:["type: ",(0,o.jsx)(e.a,{href:"../../V1/Tx/PTxOutRef",children:(0,o.jsx)(e.code,{children:"V1.PTxOutRef.type"})})]}),"\n",(0,o.jsx)(e.h2,{id:"resolved",children:(0,o.jsx)(e.code,{children:"resolved"})}),"\n",(0,o.jsxs)(e.p,{children:["type: ",(0,o.jsx)(e.a,{href:"./PTxOut",children:"'PTxOut.type'"})]})]})}function l(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(x,{...n})}):x(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>c,M:()=>r});var o=t(11504);const i={},s=o.createContext(i);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);