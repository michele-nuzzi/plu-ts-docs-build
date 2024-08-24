"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[4944],{37556:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=n(17624),i=n(4552);const t={title:"deregisterStake",sidebar_position:16},d="deregisterStake",c={id:"offchain/TxBuilderRunner API/deregisterStake",title:"deregisterStake",description:"- delegator: CanBeStakeCreds",source:"@site/docs/offchain/TxBuilderRunner API/deregisterStake.mdx",sourceDirName:"offchain/TxBuilderRunner API",slug:"/offchain/TxBuilderRunner API/deregisterStake",permalink:"/offchain/TxBuilderRunner API/deregisterStake",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/offchain/TxBuilderRunner API/deregisterStake.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"deregisterStake",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"delegateTo",permalink:"/offchain/TxBuilderRunner API/delegateTo"},next:{title:"mintAsstes",permalink:"/offchain/TxBuilderRunner API/mintAssets"}},a={},o=[];function l(e){const r={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"deregisterstake",children:(0,s.jsx)(r.code,{children:"deregisterStake"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"readonly deregisterStake!:(\n    delegator: CanBeStakeCreds,\n    redeemer?: CanBeData,\n    script_or_ref?: Script<PlutusScriptType> | CanResolveToUTxO\n) => TxBuilderRunner\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"delegator"}),": ",(0,s.jsx)(r.a,{href:"../miscellaneous/CanBeStakeCreds",children:(0,s.jsx)(r.code,{children:"CanBeStakeCreds"})})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"redeemer"}),": ",(0,s.jsx)(r.a,{href:"../miscellaneous/CanBeData",children:(0,s.jsx)(r.code,{children:"CanBeData"})})," | ",(0,s.jsx)(r.code,{children:"undefined"}),","]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"script_or_ref"}),": ",(0,s.jsx)(r.a,{href:"../cardano-ledger-ts/classes/Script",children:(0,s.jsx)(r.code,{children:"Script"})})," | ",(0,s.jsx)(r.a,{href:"../miscellaneous/CanResolveToUTxO",children:(0,s.jsx)(r.code,{children:"CanResolveToUTxO"})})," | ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"adds a de-registration certificate,"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"redeemer"})," and ",(0,s.jsx)(r.code,{children:"script_or_ref"})," must be specified together;\nthey are required if ",(0,s.jsx)(r.code,{children:"delegator"})," is a script."]}),"\n",(0,s.jsxs)(r.p,{children:["if ",(0,s.jsx)(r.code,{children:"script_or_ref"})," is ",(0,s.jsx)(r.a,{href:"../miscellaneous/CanResolveToUTxO",children:(0,s.jsx)(r.code,{children:"CanResolveToUTxO"})})," it will be used as reference script;"]}),"\n",(0,s.jsxs)(r.p,{children:["if ",(0,s.jsx)(r.code,{children:"script_or_ref"})," is ",(0,s.jsx)(r.a,{href:"../cardano-ledger-ts/classes/Script",children:(0,s.jsx)(r.code,{children:"Script"})})," it will be used as script witness;"]}),"\n",(0,s.jsxs)(r.p,{children:["returns a reference to the same ",(0,s.jsx)(r.a,{href:"./TxBuilderRunner",children:(0,s.jsx)(r.code,{children:"TxBuilderRunner"})}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,i.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4552:(e,r,n)=>{n.d(r,{I:()=>c,M:()=>d});var s=n(11504);const i={},t=s.createContext(i);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);