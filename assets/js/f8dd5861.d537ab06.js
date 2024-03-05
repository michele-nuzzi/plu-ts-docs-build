"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[6472],{16384:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var d=n(17624),s=n(4552);const i={title:"addRequiredSigner",sidebar_position:4},t="addRequiredSigner",a={id:"offchain/TxBuilderRunner API/addRequiredSigner",title:"addRequiredSigner",description:"- signer: Address |",source:"@site/docs/offchain/TxBuilderRunner API/addRequiredSigner.mdx",sourceDirName:"offchain/TxBuilderRunner API",slug:"/offchain/TxBuilderRunner API/addRequiredSigner",permalink:"/offchain/TxBuilderRunner API/addRequiredSigner",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/offchain/TxBuilderRunner API/addRequiredSigner.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"addRequiredSigner",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"reset",permalink:"/offchain/TxBuilderRunner API/reset"},next:{title:"addRequiredSignerKey",permalink:"/offchain/TxBuilderRunner API/addRequiredSignerKey"}},c={},o=[];function l(e){const r={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"addrequiredsigner",children:(0,d.jsx)(r.code,{children:"addRequiredSigner"})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:"readonly addRequiredSigner!: (\n    signer: Address | StakeAddress | AddressStr | StakeAddressBech32\n) => TxBuilderRunner\n"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"signer"}),": ",(0,d.jsx)(r.a,{href:"../cardano-ledger-ts/classes/Address",children:(0,d.jsx)(r.code,{children:"Address"})})," |\n",(0,d.jsx)(r.a,{href:"../cardano-ledger-ts/classes/StakeAddress",children:(0,d.jsx)(r.code,{children:"StakeAddress"})})," |\n",(0,d.jsx)(r.a,{href:"../cardano-ledger-ts/type-aliases/AddressStr",children:(0,d.jsx)(r.code,{children:"AddressStr"})})," |\n",(0,d.jsx)(r.a,{href:"../cardano-ledger-ts/type-aliases/StakeAddressBech32",children:(0,d.jsx)(r.code,{children:"StakeAddressBech32"})})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["adds the ",(0,d.jsx)(r.strong,{children:"all"})," credentials of the address to the ",(0,d.jsx)(r.code,{children:"requiredSigners"})," field of a ",(0,d.jsx)(r.a,{href:"../cardano-ledger-ts/classes/Tx",children:(0,d.jsx)(r.code,{children:"Tx"})})," instance."]}),"\n",(0,d.jsxs)(r.p,{children:["only the signers included in that field are passed to a contract's ",(0,d.jsx)(r.code,{children:"ScriptContext"}),"."]}),"\n",(0,d.jsx)(r.p,{children:"that includes payment credentials and, if present, stake credentials."}),"\n",(0,d.jsxs)(r.p,{children:["if you have an address with both payment and stake credentials,\nbut wish only to include one of them, consider using  the ",(0,d.jsx)(r.a,{href:"./addRequiredSignerHey",children:(0,d.jsx)(r.code,{children:"addRequiredSignerKey"})})," method."]}),"\n",(0,d.jsxs)(r.p,{children:["returns a reference to the same ",(0,d.jsx)(r.a,{href:"./TxBuilderRunner",children:(0,d.jsx)(r.code,{children:"TxBuilderRunner"})}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},4552:(e,r,n)=>{n.d(r,{I:()=>a,M:()=>t});var d=n(11504);const s={},i=d.createContext(s);function t(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);