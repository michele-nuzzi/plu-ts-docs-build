"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[92860],{35980:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=s(17624),i=s(4552);const c={sidebar_position:2},r="Types",l={id:"onchain/Types",title:"Types",description:"As we saw in Concepts plu-ts is an eDSL embedded in Typescript, as such we have two type systems; the Typescript one and the plu-ts one",source:"@site/docs/onchain/Types.mdx",sourceDirName:"onchain",slug:"/onchain/Types",permalink:"/onchain/Types",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/Types.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/onchain/Concepts"},next:{title:"Values",permalink:"/category/values"}},o={},d=[{value:"Typescript Types",id:"typescript-types",level:2},{value:"<code>plu-ts</code> Types",id:"plu-ts-types",level:2},{value:"<code>plu-ts</code> generics",id:"plu-ts-generics",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"types",children:"Types"}),"\n",(0,t.jsxs)(n.p,{children:["As we saw in ",(0,t.jsx)(n.a,{href:"./Concepts",children:"Concepts"})," ",(0,t.jsx)(n.code,{children:"plu-ts"})," is an eDSL embedded in Typescript, as such we have two type systems; the Typescript one and the ",(0,t.jsx)(n.code,{children:"plu-ts"})," one"]}),"\n",(0,t.jsx)(n.h2,{id:"typescript-types",children:"Typescript Types"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Term"})," is a Typescript type defined in ",(0,t.jsx)(n.code,{children:"plu-ts"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Every value in ",(0,t.jsx)(n.code,{children:"plu-ts"})," is a ",(0,t.jsx)(n.code,{children:"Term"}),". In Typescript, we say each value ",(0,t.jsx)(n.em,{children:"extends"}),' Term (in the same way that "Dog" extends "Mammal").']}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.code,{children:"Term"})," also keeps track of the type of the value it holds."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The possible types a ",(0,t.jsx)(n.code,{children:"Term"})," can keep track of are defined in ",(0,t.jsx)(n.a,{href:"https://github.com/HarmonicLabs/plu-ts/tree/main/src/onchain/pluts/PTypes",children:"PTypes"}),", and listed here:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PUnit"})," a unique value that has no real meaning; you can see it as ",(0,t.jsx)(n.code,{children:"plu-ts"})," version of ",(0,t.jsx)(n.code,{children:"undefined"})," or ",(0,t.jsx)(n.code,{children:"null"})," in Typescript"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PInt"})," a signed integer that can be as big as you want"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PBool"})," a boolean value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PByteString"})," equivalent of a ",(0,t.jsx)(n.code,{children:"Buffer"})," or a ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array",children:(0,t.jsx)(n.code,{children:"Uint8Array"})})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PString"})," equivalent of the Typescript ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PData"})," equivalent of the ",(0,t.jsx)(n.code,{children:"object"})," type in Typescript (it is the low level representation of ",(0,t.jsx)(n.code,{children:"PStruct"}),"s that we'll cover in a moment, so you usually won't use ",(0,t.jsx)(n.code,{children:"PData"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PList<PType>"})," equivalent of an Array in Typescript; note that all the elements in the list must be of the same ",(0,t.jsx)(n.code,{children:"PType"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PPair<PType1, PType2>"})," equivalent of a Typescript tuple (",(0,t.jsx)(n.code,{children:"[ type1 , type2 ]"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PDelayed<PType>"})," a delayed computation that returns a value of type ",(0,t.jsx)(n.code,{children:"PType"}),"; the computation can be run by passing the delayed value to the ",(0,t.jsx)(n.code,{children:"pforce"})," function"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PLam<PInput, POutput>"})," a function that takes one single argument of type ",(0,t.jsx)(n.code,{children:"PInput"})," and returns something of type ",(0,t.jsx)(n.code,{children:"POutput"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PFn<[ PInput_0 , ...PType[] ],POutput>"})," a function that takes multiple arguments (at least one) and returns something of type ",(0,t.jsx)(n.code,{children:"POutput"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PAlias<PType>"})," just an alias of the provided type; it behaves exactly like the Types of its argument, so ",(0,t.jsx)(n.code,{children:"PAlias<PInt>"})," is equivalent to a ",(0,t.jsx)(n.code,{children:"PInt"}),". This is useful for keeping track of a different meaning the type might have."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PStruct<{...}>"})," an abstraction over ",(0,t.jsx)(n.code,{children:"PData"}),", useful to construct more complex data structures."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PSop<{...}>"})," essentially similar to ",(0,t.jsx)(n.code,{children:"PStruct"}),"; works in Plutus V3 as constructor is introduced."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"plu-ts-types",children:[(0,t.jsx)(n.code,{children:"plu-ts"})," Types"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"plu-ts"})," would not be a strongly typed language if limited to Typescript types, because the types of Typescript are only useful during compilation to javascript; and then everything is untyped!"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Typescript can be compiled to Javascript. When this happens, the resulting Javascript is untyped!"}),(0,t.jsxs)(n.p,{children:["For this reason ",(0,t.jsx)(n.code,{children:"plu-ts"})," implements its own type through some constants and functions that can be imported."]})]}),"\n",(0,t.jsxs)(n.p,{children:["In the same order of above, the ",(0,t.jsx)(n.code,{children:"plu-ts"})," equivalents are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PUnit"})," -> ",(0,t.jsx)(n.code,{children:"unit"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PInt"})," -> ",(0,t.jsx)(n.code,{children:"int"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PBool"})," -> ",(0,t.jsx)(n.code,{children:"bool"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PByteString"})," -> ",(0,t.jsx)(n.code,{children:"bs"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PString"})," -> ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PData"})," -> ",(0,t.jsx)(n.code,{children:"data"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PList"})," -> ",(0,t.jsx)(n.code,{children:"list( type )"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PPair"})," -> ",(0,t.jsx)(n.code,{children:"pair( type1, type2 )"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PDelayed"})," -> ",(0,t.jsx)(n.code,{children:"delayed( type )"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PLam"})," -> ",(0,t.jsx)(n.code,{children:"lam( from, to )"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PFn"})," -> ",(0,t.jsx)(n.code,{children:"fn([ ...inputs ], output )"})]}),"\n",(0,t.jsxs)(n.li,{children:["aliases types and structs types will be retrieved by the ",(0,t.jsx)(n.code,{children:"type"})," static property of the classes (explained in the dedicated section for ",(0,t.jsx)(n.a,{href:"./Values/aliases",children:"aliases"})," and ",(0,t.jsx)(n.a,{href:"./Values/Structs/definition",children:"structs"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"plu-ts-generics",children:[(0,t.jsx)(n.code,{children:"plu-ts"})," generics"]}),"\n",(0,t.jsx)(n.p,{children:"As we know, Typescript gives us the possibility to define polymorphic types trough generics."}),"\n",(0,t.jsxs)(n.p,{children:["In a way you could see generics as ",(0,t.jsx)(n.em,{children:"functions"})," that take a type as input and returns another type."]}),"\n",(0,t.jsxs)(n.p,{children:["Fortunately for us, ",(0,t.jsx)(n.code,{children:"plu-ts"})," types are just values when seen from the Typescript world, so we can have some sort of generic in ",(0,t.jsx)(n.code,{children:"plu-ts"})," too!"]}),"\n",(0,t.jsx)(n.p,{children:"To see how, let's try to define the previous polymorphic types using the generic method:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const anyPlutsFunction = ( a: TermType, b: TermType ) => lam( a, b );\n\nconst identityFunctionType = ( a: TermType ) => lam( a, a );\n\nconst mkPairType = ( a: TermType, b: TermType ) => fn([ a, b ], pair( a, b ) )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Polymorphic types defined as functions also have the advantage of being fully defined once the type arguments are passed."}),"\n",(0,t.jsx)(n.p,{children:"This works great, but there's still a problem though... Typescript isn't able to infer these types!"}),"\n",(0,t.jsxs)(n.p,{children:["This is because ",(0,t.jsx)(n.code,{children:"TermType"})," is the generic type for all ",(0,t.jsx)(n.code,{children:"plu-ts"})," types, so when Typescript tries to infer the type of the term, it sees the most generic type of all, and once again thinks we want to use the anonymous ",(0,t.jsx)(n.code,{children:"PType"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To finally solve this problem we need to make the functions generic too:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function anyFunction<A extends TermType, B extends TermType>( a: A, b: B )\n{ \n    return lam( a, b ) \n};\n\nfunction identityFunctionType<A extends TermType>( a: A )\n{ \n    return lam( a, a ) \n};\n\nfunction mkPairType<A extends TermType, B extends TermType>( a: A, b: B )\n{ \n    return fn([ a, b ], pair( a, b ) ) \n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This way Typescript first infers the specific ",(0,t.jsx)(n.code,{children:"TermType"})," we are passing, and with that is able to determine the exact type of the Term."]}),"\n",(0,t.jsxs)(n.p,{children:["Generics will turn useful especially in the case where the type requires a type variable as return type, a notable example is ",(0,t.jsx)(n.code,{children:"pif"})," which is of type ",(0,t.jsx)(n.code,{children:"bool -> a -> a -> a"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>r});var t=s(11504);const i={},c=t.createContext(i);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);