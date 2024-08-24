"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[6140],{44160:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=e(17624),r=e(4552);const a={},o=void 0,i={id:"offchain/plutus-data/functions/constrNumberToCborTag",title:"constrNumberToCborTag",description:"@harmoniclabs/plutus-data \u2022 Readme \\| API",source:"@site/docs/offchain/plutus-data/functions/constrNumberToCborTag.md",sourceDirName:"offchain/plutus-data/functions",slug:"/offchain/plutus-data/functions/constrNumberToCborTag",permalink:"/offchain/plutus-data/functions/constrNumberToCborTag",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/offchain/plutus-data/functions/constrNumberToCborTag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cloneData",permalink:"/offchain/plutus-data/functions/cloneData"},next:{title:"dataFromCbor",permalink:"/offchain/plutus-data/functions/dataFromCbor"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}];function u(t){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"@harmoniclabs/plutus-data"})," \u2022 ",(0,s.jsx)(n.a,{href:"/offchain/plutus-data/",children:"Readme"})," | ",(0,s.jsx)(n.a,{href:"../globals",children:"API"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/offchain/plutus-data/",children:"@harmoniclabs/plutus-data"})," / constrNumberToCborTag"]}),"\n",(0,s.jsx)(n.h1,{id:"function-constrnumbertocbortag",children:"Function: constrNumberToCborTag()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"constrNumberToCborTag"}),"(",(0,s.jsx)(n.code,{children:"uint"}),"): ",(0,s.jsx)(n.code,{children:"bigint"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note [CBOR alternative tags]"}),"\n",(0,s.jsxs)(n.p,{children:["We've proposed to add additional tags to the CBOR standard to cover (essentially) sum types.\nThis is exactly what we need to encode the 'Constr' constructor of 'Data' in an unambiguous way.\nThe tags aren't ",(0,s.jsx)(n.em,{children:"quite"})," accepted yet, but they're clearly going to accept so we might as well\nstart using them.\nThe scheme is:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Alternatives 0-6 -> tags 121-127, followed by the arguments in a list"}),"\n",(0,s.jsx)(n.li,{children:"Alternatives 7-127 -> tags 1280-1400, followed by the arguments in a list"}),"\n",(0,s.jsx)(n.li,{children:"Any alternatives, including those that don't fit in the above -> tag 102 followed by a list containing\nan unsigned integer for the actual alternative, and then the arguments in a (nested!) list."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"uint"}),": ",(0,s.jsx)(n.code,{children:"bigint"})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"bigint"})}),"\n",(0,s.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/HarmonicLabs/plutus-data/blob/911664c/src/DataConstr.ts#L61",children:"DataConstr.ts:61"})})]})}function d(t={}){const{wrapper:n}={...(0,r.M)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},4552:(t,n,e)=>{e.d(n,{I:()=>i,M:()=>o});var s=e(11504);const r={},a=s.createContext(r);function o(t){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function i(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),s.createElement(a.Provider,{value:n},t.children)}}}]);