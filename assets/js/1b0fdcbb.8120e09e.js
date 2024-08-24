"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[6152],{91688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(17624),o=n(4552);const r={sidebar_position:0},i="Struct definition",c={id:"onchain/Values/Structs/definition",title:"Struct definition",description:"When writing programs we often need to access data that is more articulate than simple integers or booleans.",source:"@site/docs/onchain/Values/Structs/definition.mdx",sourceDirName:"onchain/Values/Structs",slug:"/onchain/Values/Structs/definition",permalink:"/onchain/Values/Structs/definition",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/Values/Structs/definition.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Structs",permalink:"/category/structs"},next:{title:"Generic Structs",permalink:"/onchain/Values/Structs/generic_structs"}},a={},l=[{value:"<code>pstruct</code>",id:"pstruct",level:2},{value:"struct values",id:"struct-values",level:2},{value:"struct <code>plu-ts</code> type",id:"struct-plu-ts-type",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"struct-definition",children:"Struct definition"}),"\n",(0,s.jsxs)(t.p,{children:["When writing programs we often need to access data that is more articulate than simple integers or booleans.\nFor this reason ",(0,s.jsx)(t.code,{children:"plu-ts"})," allows you to define custom data-types."]}),"\n",(0,s.jsx)(t.h2,{id:"pstruct",children:(0,s.jsx)(t.code,{children:"pstruct"})}),"\n",(0,s.jsxs)(t.p,{children:["To define your own type all you need is the ",(0,s.jsx)(t.code,{children:"pstruct"})," typescript function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"pstruct"})," takes as an argument an object that describes the structure of the new data-type and returns a Typescript class that represents our new type.\nYou can also add custom methods to this structure, to make it more versatile."]}),"\n",(0,s.jsxs)(t.p,{children:["The type of a struct definition (which is the argument of ",(0,s.jsx)(t.code,{children:"pstruct"}),") is something like:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"type StructDefiniton = {\n    [constructor: string]: {\n        [field: string]: TermType\n    }\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["From this type we can already see that a struct can have ",(0,s.jsx)(t.em,{children:"multiple constructors"})," (at least one) and each constructor can have 0 or more named fields."]}),"\n",(0,s.jsxs)(t.p,{children:["This characteristic of having multiple constructors will allow for the creation of ",(0,s.jsx)(t.em,{children:"custom control flows"})," through the use of ",(0,s.jsxs)(t.a,{href:"../../Control%20Flow/pmatch",children:[(0,s.jsx)(t.code,{children:"pmatch"})," described in its own section"]}),"."]}),"\n",(0,s.jsx)(t.p,{children:"For now let's focus on defining some new structs and say we wanted to define a datatype that describes a Dog."}),"\n",(0,s.jsx)(t.p,{children:"We could do so by writing:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// structs with single constructors acts in a similar way of plain typescript object\nconst Dog = pstruct({\n    // single constructor\n    Dog: {\n        name: str,\n        age: Age.type\n    }\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"But our dog needs some toys to play with when we are out. So we define a structure that describes some toys:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const Toy = pstruct({\n    Stick: {},\n    Ball: {\n        size: int,\n        isSoft: bool\n    },\n    Mailman: {\n        name: str,\n        age: Age.type\n    }\n})\n"})}),"\n",(0,s.jsx)(t.p,{children:"So now we can add a new field to better describe our dog:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const Dog = pstruct({\n    Dog: {\n        name: str,\n        age: Age.type,\n        favouriteToy: Toy.type\n    }\n});\n"})}),"\n",(0,s.jsxs)(t.admonition,{title:"IMPORTANT",type:"caution",children:[(0,s.jsx)(t.p,{children:"When defining a struct the order of the constructors and the order of the fields matters."}),(0,s.jsx)(t.p,{children:"In fact at UPLC level there are no names."}),(0,s.jsx)(t.p,{children:"This does have two important implications:"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["structs with similar definition will be interchangeable; meaning that something like the snippet below can be used in place of a ",(0,s.jsx)(t.code,{children:"Dog"})," without anything breaking"]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const Kid = pstruct({\n    Kid: {\n        name: str,\n        age: Age.type,\n        toy: Toy.type\n    }\n});\n"})}),(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"changing the order"})," of constructors or fields ",(0,s.jsx)(t.strong,{children:"gives back a totally different struct"})]}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"struct-values",children:"struct values"}),"\n",(0,s.jsxs)(t.p,{children:["To build a ",(0,s.jsx)(t.code,{children:"plu-ts"})," value that represents a struct you just use one of the constructors you defined."]}),"\n",(0,s.jsxs)(t.p,{children:["So if you where to create an instance of a ",(0,s.jsx)(t.code,{children:"Dog"})," you'd just write:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'const myDog = Dog.Dog({\n\n    name: pStr("Pluto"),\n    age:  Age.from( pInt(3) ),\n\n    favouriteToy: Toy.Mailman({\n        name: pStr("Bob"),\n        age:  Age.from( pInt(42) )\n    })\n\n})\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"struct-plu-ts-type",children:["struct ",(0,s.jsx)(t.code,{children:"plu-ts"})," type"]}),"\n",(0,s.jsxs)(t.p,{children:["Like ",(0,s.jsx)(t.a,{href:"../aliases",children:"aliases"}),", structs also do have custom ",(0,s.jsx)(t.code,{children:"plu-ts"})," types; which can be accessed using the ",(0,s.jsx)(t.code,{children:"type"})," static property"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const typeOfToy = Toy.type;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>i});var s=n(11504);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);