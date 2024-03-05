"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[2912],{65880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(17624),r=t(4552);const i={sidebar_position:6},o="PValue",l={id:"onchain/API/types/PValue",title:"PValue",description:"It represents a ledger Value.",source:"@site/docs/onchain/API/types/PValue.mdx",sourceDirName:"onchain/API/types",slug:"/onchain/API/types/PValue",permalink:"/onchain/API/types/PValue",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/API/types/PValue.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"PTxOutRef",permalink:"/onchain/API/types/PTxOutRef"},next:{title:"PDCert",permalink:"/onchain/API/types/PDCert"}},c={},a=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pvalue",children:(0,s.jsx)(n.code,{children:"PValue"})}),"\n",(0,s.jsx)(n.p,{children:"It represents a ledger Value."}),"\n",(0,s.jsx)(n.p,{children:"definition:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const PAssetsEntryT = pair(\n    PTokenName.type,\n    int\n);\n\nexport const PValueEntryT = pair(\n    PCurrencySymbol.type,\n    list( PAssetsEntryT )\n);\n\nexport const PValue = palias(\n    list( PValueEntryT )\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The value implements all the properties defined on the ",(0,s.jsx)(n.a,{href:"../../stdlib/TermList",children:(0,s.jsx)(n.code,{children:"TermList"})})," utility term."]}),"\n",(0,s.jsx)(n.p,{children:"se also:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./PCurrencySymbol",children:(0,s.jsx)(n.code,{children:"PCurrencySymbol"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./PTokenName",children:(0,s.jsx)(n.code,{children:"PTokenName"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../stdlib/TermInt",children:(0,s.jsx)(n.code,{children:"TermInt"})})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var s=t(11504);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);