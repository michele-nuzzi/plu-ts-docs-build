"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[4844],{66636:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var t=n(17624),a=n(4552);const i={sidebar_position:3},o="Aliases",l={id:"onchain/Values/aliases",title:"Aliases",description:"In some cases it might be useful to define aliases for already existing types.",source:"@site/docs/onchain/Values/aliases.mdx",sourceDirName:"onchain/Values",slug:"/onchain/Values/aliases",permalink:"/onchain/Values/aliases",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/Values/aliases.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"builtins",permalink:"/onchain/Values/Functions/builtins"},next:{title:"Structs",permalink:"/category/structs"}},c={},r=[{value:"What&#39;s the <code>plu-ts</code> type of my alias?",id:"whats-the-plu-ts-type-of-my-alias",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"aliases",children:"Aliases"}),"\n",(0,t.jsx)(s.p,{children:"In some cases it might be useful to define aliases for already existing types."}),"\n",(0,t.jsx)(s.p,{children:"In the current implementation, aliases do not really have any specific advantage other than making your code more expressive. Currently, aliases can be used everywhere the aliased type is accepted and vice-versa."}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsxs)(s.p,{children:["generally speaking you may want to use aliases to define a ",(0,t.jsx)(s.em,{children:"subset"})," of values that are meant to have a specific meaning"]}),(0,t.jsx)(s.p,{children:"example: you might need a type that describes the name of a person; every name is a string; but not every string is a name;"}),(0,t.jsxs)(s.p,{children:["to make clear the distinction you define an alias of the ",(0,t.jsx)(s.code,{children:"string"})," type to be the ",(0,t.jsx)(s.code,{children:"Name"})," type"]})]}),"\n",(0,t.jsxs)(s.p,{children:["We define new aliases using the ",(0,t.jsx)(s.code,{children:"palias"})," ts function:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"const Age = palias( int );\n"})}),"\n",(0,t.jsx)(s.p,{children:"Now we have a new type to specfically represent ages."}),"\n",(0,t.jsxs)(s.p,{children:["To get a term of the aliased type you can use the ",(0,t.jsx)(s.code,{children:"from"})," static method of the class you got from calling ",(0,t.jsx)(s.code,{children:"palias"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"const someAge: Term<typeof Age> = Age.from( pInt(18) ); \n"})}),"\n",(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsxs)(s.p,{children:["in a future version aliases will be able to add constraints over the type the are alias of\nas an example whe might want to force every ",(0,t.jsx)(s.code,{children:"Age"})," to be non-negative; since a negative age doesn't really make sense"]}),(0,t.jsxs)(s.p,{children:["when an alias will be constrained ",(0,t.jsx)(s.code,{children:"plu-ts"})," will check for the constraints to be met each time a term with an alias is constructed\n",(0,t.jsx)(s.strong,{children:"and will fail the computation if the constraints are not met"})]})]}),"\n",(0,t.jsxs)(s.h2,{id:"whats-the-plu-ts-type-of-my-alias",children:["What's the ",(0,t.jsx)(s.code,{children:"plu-ts"})," type of my alias?"]}),"\n",(0,t.jsxs)(s.p,{children:["As explained in the ",(0,t.jsx)(s.a,{href:"../Types",children:"types"})," section, aliases and structs have different ",(0,t.jsx)(s.code,{children:"plu-ts"})," level types. To access them we need to use the ",(0,t.jsx)(s.code,{children:"type"})," static method defined in the Alias class:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"const agePlutsType = Age.type;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["So if we want to define a function that accepts an ",(0,t.jsx)(s.code,{children:"Age"})," as input we would write:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"const pisAdult = plam( Age.type, bool )\n( age => age.gtEq( 18 ) );\n"})}),"\n",(0,t.jsxs)(s.admonition,{title:"remeber partial function application",type:"tip",children:[(0,t.jsxs)(s.p,{children:["or the slightly more efficient version, based on ",(0,t.jsx)(s.a,{href:"./Functions/partial_function_app",children:"partial function application"}),":"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"const pisAdult = plessThanEqual.$( 18 )\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,a.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>l,M:()=>o});var t=n(11504);const a={},i=t.createContext(a);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);