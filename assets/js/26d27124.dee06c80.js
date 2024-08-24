"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[1884],{69952:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(17624),a=t(4552);const i={sidebar_position:2},o="Function application",r={id:"onchain/Values/Functions/Function_application",title:"Function application",description:"Lambdas and functions in general in plu-ts are often just constants seen from the typescript world, however we usually know that what we have is more than just a constant and that it can take arguments.",source:"@site/docs/onchain/Values/Functions/Function_application.mdx",sourceDirName:"onchain/Values/Functions",slug:"/onchain/Values/Functions/Function_application",permalink:"/onchain/Values/Functions/Function_application",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/Values/Functions/Function_application.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"plam and pfn",permalink:"/onchain/Values/Functions/plam_and_pfn"},next:{title:"Partial function application",permalink:"/onchain/Values/Functions/partial_function_app"}},c={},l=[{value:"The &quot;<code>$</code>&quot; method",id:"the--method",level:2}];function p(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"function-application",children:"Function application"}),"\n",(0,s.jsxs)(e.p,{children:["Lambdas and functions in general in ",(0,s.jsx)(e.code,{children:"plu-ts"})," are often just constants seen from the typescript world, however we usually know that what we have is more than just a constant and that it can take arguments."]}),"\n",(0,s.jsxs)(e.p,{children:["For this particular reason we have the ",(0,s.jsx)(e.code,{children:"papp"}),' function (which stands  for  "',(0,s.jsxs)(e.em,{children:[(0,s.jsx)(e.code,{children:"plu-ts"})," application"]}),'")and all it does is tell Typescript that we want to ',(0,s.jsx)(e.em,{children:"apply"})," one term to another, or in other words pass an argument to a function."]}),"\n",(0,s.jsx)(e.p,{children:"The type signature of papp is something like:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"function papp<Input extends PType, Output extends PType>(\n    funcTerm: Term<PLam<Input,Output>>,\n    argTerm : Term<Input> \n) : Term<Output>\n"})}),"\n",(0,s.jsxs)(e.p,{children:["As we'll see in the ",(0,s.jsx)(e.a,{href:"./partial_function_app",children:"next section"}),", functions can be ",(0,s.jsx)(e.em,{children:"partially applied"})," so, to preserve this behavior, papp only takes two arguments:"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"the function we want to pass the argument to"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"the argument"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Then it checks the types are matching, ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.em,{children:"evaluates the argument and applies the result of the evaluation"})})," and finally returns the result."]}),"\n",(0,s.jsxs)(e.h2,{id:"the--method",children:['The "',(0,s.jsx)(e.code,{children:"$"}),'" method']}),"\n",(0,s.jsx)(e.p,{children:"However, having to use an external function in order to pass arguments tends to make the code hard to read."}),"\n",(0,s.jsxs)(e.p,{children:["Here is an example of code if all we had was ",(0,s.jsx)(e.code,{children:"papp"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"papp(\n    papp(\n        pTwoIntegersList,\n        42\n    ),\n    69\n);\n"})}),"\n",(0,s.jsx)(e.p,{children:"For this reason, often you'll encounter Terms that have a type that looks like this:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"type LambdaWithApply =\n    Term<PLam<SomeInput, SomeOutput>> // this is our usual type\n    & { // extended with some functionalities\n        $: ( input: Term<SomeInput> ) => Term<SomeOutput>\n    }\n"})}),"\n",(0,s.jsxs)(e.p,{children:["where the ",(0,s.jsx)(e.code,{children:"$"})," method definition is often nothing more than:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'myTerm["$"] = ( someInput: Term<SomeInput> ) => papp( myTerm, someInput );\n'})}),"\n",(0,s.jsx)(e.p,{children:"At first glance, this seems like it does nothing fancy, but it allows us to transform the previous code in something more readable like:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"pTwoIntegersList.$( 42 ).$( 69 )\n"})})]})}function u(n={}){const{wrapper:e}={...(0,a.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>r,M:()=>o});var s=t(11504);const a={},i=s.createContext(a);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);