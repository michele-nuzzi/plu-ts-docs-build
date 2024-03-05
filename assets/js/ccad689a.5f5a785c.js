"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[4940],{99384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(17624),o=n(4552);const s={sidebar_position:0},r="compile",c={id:"onchain/API/utilities/compile",title:"compile",description:"Once we have our contract we need to transform it in something that the cardano node understands.",source:"@site/docs/onchain/API/utilities/compile.mdx",sourceDirName:"onchain/API/utilities",slug:"/onchain/API/utilities/compile",permalink:"/onchain/API/utilities/compile",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/API/utilities/compile.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"utilities",permalink:"/category/utilities"},next:{title:"makeValidator",permalink:"/onchain/API/utilities/makeValidator"}},a={},d=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"compile",children:(0,i.jsx)(t.code,{children:"compile"})}),"\n",(0,i.jsx)(t.p,{children:"Once we have our contract we need to transform it in something that the cardano node understands."}),"\n",(0,i.jsxs)(t.p,{children:["For that we have the ",(0,i.jsx)(t.code,{children:"compile"})," function."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"function compile(\n    term: Term<PType>, \n    version?: [number, number, number]\n): Uint8Array;\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"compile"})," takes ",(0,i.jsx)(t.strong,{children:"any"})," Term as input and returns an ",(0,i.jsx)(t.code,{children:"Uint8Array"})," that are the ",(0,i.jsx)(t.code,{children:"flat"})," srialization of the Term."]}),"\n",(0,i.jsxs)(t.p,{children:["It optionally takes a touple of 3 ",(0,i.jsx)(t.code,{children:"number"}),"s (expected to be all positive integer) representing the contract version."]}),"\n",(0,i.jsxs)(t.p,{children:["The version defaults to ",(0,i.jsx)(t.code,{children:"[ 1, 0, 0 ]"})," and is unlikely you will ever need to specify it."]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.mdxAdmonitionTitle,{children:[(0,i.jsx)(t.code,{children:"flat"})," format"]}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"flat"})," format is how the contract is stored on chain."]}),(0,i.jsxs)(t.p,{children:["However is not the format ",(0,i.jsx)(t.strong,{children:"is not"})," how it is include in a transaction (nor how it is used by ",(0,i.jsx)(t.code,{children:"cardano-cli"}),")"]}),(0,i.jsxs)(t.p,{children:["top use the result of ",(0,i.jsx)(t.code,{children:"compile"})," you should pass it to a ",(0,i.jsx)(t.code,{children:"Script"})," constructor so that it can handle the format for you."]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>r});var i=n(11504);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);