"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[42968],{47536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var i=t(17624),a=t(4552);const o={sidebar_position:0},s="Term evaluation",l={id:"onchain/Evaluating and testing/evaluation",title:"Term evaluation",description:"plu-ts implements its own version of the CEK machine for the UPLC language. This allows any plu-ts term to be compiled to an UPLC Term and evaluated.",source:"@site/docs/onchain/Evaluating and testing/evaluation.mdx",sourceDirName:"onchain/Evaluating and testing",slug:"/onchain/Evaluating and testing/evaluation",permalink:"/onchain/Evaluating and testing/evaluation",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/Evaluating and testing/evaluation.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Evaluation and testing",permalink:"/category/evaluation-and-testing"},next:{title:"Optimizations",permalink:"/category/optimizations"}},c={},r=[{value:"<code>Machine.evalSimple</code>",id:"machineevalsimple",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"term-evaluation",children:[(0,i.jsx)(n.code,{children:"Term"})," evaluation"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"plu-ts"})," implements its own version of the ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/CEK_Machine",children:"CEK machine"})," for the UPLC language. This allows any ",(0,i.jsx)(n.code,{children:"plu-ts"})," term to be compiled to an UPLC Term and evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:["in order to evaluate a term we neet to import the CEK machine implemented in ",(0,i.jsx)(n.code,{children:"plu-ts"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Machine } from "@harmoniclbs/plu-ts"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Machine"})," is a class, because we can instantiate our own machines based on different protocol parameters."]}),"\n",(0,i.jsx)(n.p,{children:"however it also works as is using some default parameters."}),"\n",(0,i.jsx)(n.p,{children:"if all we need is just to evaluate a term, then that works just fine."}),"\n",(0,i.jsx)(n.h2,{id:"machineevalsimple",children:(0,i.jsx)(n.code,{children:"Machine.evalSimple"})}),"\n",(0,i.jsxs)(n.p,{children:["The function that evaluates ",(0,i.jsx)(n.code,{children:"Term"}),"s is ",(0,i.jsx)(n.code,{children:"Machine.evalSimple"}),", and that's literally all you need to evaluate a term."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Machine.evalSimple"})," will return an ",(0,i.jsx)(n.code,{children:"UPLCTerm"})," because ",(0,i.jsx)(n.code,{children:"UPLCTerm"}),"s is what the machine is working with."]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"UPLCTerm"})," can be a lot of things,\nbut if everything goes right and you expect a concrete value you'll only encounter ",(0,i.jsx)(n.code,{children:"UPLCConst"})," instances, or some ",(0,i.jsx)(n.code,{children:"Lambda"})," if you instead expect some functions."]}),"\n",(0,i.jsxs)(n.p,{children:["If instead the ",(0,i.jsx)(n.code,{children:"plu-ts"})," term you passed as argument fails the computation you will get back an instance of ",(0,i.jsx)(n.code,{children:"ErrorUPLC"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To test it we'll use the ",(0,i.jsx)(n.code,{children:"pfactorial"})," we defined while introducing ",(0,i.jsx)(n.a,{href:"../Control%20Flow/precursive",children:"recursion"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Machine } from "@harmoniclbs/plu-ts"\nimport { pfactorial } from "./pfactorial";\n\nconsole.log(\n    Machine.evalSimple(\n        pfactorial.$( 0 )\n    )\n); // UPLCConst { _type: [0], _value: 1n }\n\nconsole.log(\n    Machine.evalSimple(\n        pfactorial.$( 3 )\n    )\n); // UPLCConst { _type: [0], _value: 6n }\n\nconsole.log(\n    Machine.evalSimple(\n        pfactorial.$( 5 )\n    )\n); // UPLCConst { _type: [0], _value: 120n }\n\nconsole.log(\n    Machine.evalSimple(\n        pfactorial.$( 20 )\n    )\n); // UPLCConst { _type: [0], _value: 2432902008176640000nn }\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Machine.evalSimple"})," is especially useful if you need to test your ",(0,i.jsx)(n.code,{children:"plu-ts"})," code; regardless of the testing framework of your choice you will be always able to run ",(0,i.jsx)(n.code,{children:"Machine.evalSimple"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>s});var i=t(11504);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);