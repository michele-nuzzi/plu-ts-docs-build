"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[5639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Simple values",p={unversionedId:"onchain/Values/Simple Values",id:"onchain/Values/Simple Values",title:"Simple values",description:"For most of the types described there is a function to transform the Typescript version to the plu-ts equivalent.",source:"@site/docs/onchain/Values/Simple Values.mdx",sourceDirName:"onchain/Values",slug:"/onchain/Values/Simple Values",permalink:"/docs/onchain/Values/Simple Values",draft:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts/tree/main/packages/create-docusaurus/templates/shared/docs/onchain/Values/Simple Values.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Values",permalink:"/docs/category/values"},next:{title:"Functions",permalink:"/docs/category/functions"}},o={},s=[{value:"values constructors",id:"values-constructors",level:2},{value:"* <code>pList</code>",id:"-plist",level:2},{value:"** <code>pPair</code>",id:"-ppair",level:2},{value:"*** <code>delayed</code>",id:"-delayed",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"simple-values"},"Simple values"),(0,r.kt)("p",null,"For most of the ",(0,r.kt)("a",{parentName:"p",href:"../Types"},"types")," described there is a function to transform the Typescript version to the ",(0,r.kt)("inlineCode",{parentName:"p"},"plu-ts")," equivalent."),(0,r.kt)("p",null,"Here we cover the simple ones, leaving ",(0,r.kt)("a",{parentName:"p",href:"./Functions/plam_and_pfn"},"functions")," and ",(0,r.kt)("a",{parentName:"p",href:"./Structs/definition"},"structs")," to be covered later."),(0,r.kt)("h2",{id:"values-constructors"},"values constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"plu-ts")," type"),(0,r.kt)("th",{parentName:"tr",align:null},"function name"),(0,r.kt)("th",{parentName:"tr",align:null},"ts to ",(0,r.kt)("inlineCode",{parentName:"th"},"plu-ts")," function signature"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pmakeUnit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pmakeUnit(): Term<PUnit>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pInt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pInt(x: number \\ bigint): Term<PInt>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pBool")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pBool(x: boolean): Term<PBool>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pByteString")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pByteString(x: string \\ ByteString \\ Buffer): Term<PByteString>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pStr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pStr(x: string): Term<PStr>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pData")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pData(x: Data): Term<PData>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#-plist"},(0,r.kt)("inlineCode",{parentName:"a"},"pList"),"*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pList<T extends TermType>( t: T )( x: Term<ToPType<T>>[] )"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pair")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#-ppair"},(0,r.kt)("inlineCode",{parentName:"a"},"pPair"),"**")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pPair<A extends TermType, B extends TermType>( fstT: A, sndT: B )( fst: Term<ToPType<A>>, snd: Term<ToPType<B>> )"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"delayed")),(0,r.kt)("td",{parentName:"tr",align:null},"*** not supported at ts level"),(0,r.kt)("td",{parentName:"tr",align:null},"*** explained below")))),(0,r.kt)("h2",{id:"-plist"},"* ",(0,r.kt)("inlineCode",{parentName:"h2"},"pList")),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"PList")," is a generic type the ",(0,r.kt)("inlineCode",{parentName:"p"},"pList")," function has a slightly more complex function signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function pList<ElemsT extends TermType, PElemsT extends ToPType<ElemsT = ToPType<ElemsT>>>\n    ( elemsT: ElemsT )\n    : ( elems: Term<PElemsT>[] ) => Term<PList<PElemsT>>\n")),(0,r.kt)("p",null,"In the signature above, ",(0,r.kt)("inlineCode",{parentName:"p"},"TermType")," is the Typescript types of ",(0,r.kt)("inlineCode",{parentName:"p"},"plu-ts")," types (which are typescript values after all) and ",(0,r.kt)("inlineCode",{parentName:"p"},"ToPType")," is a utility type used internally and you should not worry about it."),(0,r.kt)("p",null,"From the signature we can already understand that given a ",(0,r.kt)("inlineCode",{parentName:"p"},"plu-ts")," type, ",(0,r.kt)("inlineCode",{parentName:"p"},"pList")," returns a function ad-hoc for terms of that type; so if we want a function to get list of integers we just do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pListInt: ( elems: Term<PInt>[] ) => Term<PList<PInt>> = \n    pList( int );\n")),(0,r.kt)("p",null,"And with that we now have a function that transforms an array of terms into a list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const intList = pListInt( [1,2,3,4].map( pInt ) );\n")),(0,r.kt)("p",null,"You might notice that in contrast to the other functions introduced, ",(0,r.kt)("inlineCode",{parentName:"p"},"pListInt")," that we created works with terms instead of vanilla ts values; this is because ",(0,r.kt)("inlineCode",{parentName:"p"},"pListInt")," acts as a macro as seen by ",(0,r.kt)("inlineCode",{parentName:"p"},"plu-ts"),"."),(0,r.kt)("h2",{id:"-ppair"},"** ",(0,r.kt)("inlineCode",{parentName:"h2"},"pPair")),(0,r.kt)("p",null,"Just like ",(0,r.kt)("inlineCode",{parentName:"p"},"PList"),", also ",(0,r.kt)("inlineCode",{parentName:"p"},"PPair")," is a generic type, which causes ",(0,r.kt)("inlineCode",{parentName:"p"},"pPair")," to have more complex function signature too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function pPair<\n    A extends TermType, \n    B extends TermType, \n    PA extends ToPType<A> = ToPType<A>,\n    PA extends ToPType<B> = ToPType<B>,\n>\n    ( fstT: A, sndT: B )\n    : ( fst: PappArg<PA>, snd: PappArg<PB> ) => Term<PPair<PA,PB>>\n")),(0,r.kt)("p",null,"and you would use it in a very similar way of ",(0,r.kt)("inlineCode",{parentName:"p"},"pList"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const myPair = pPair( bs, int )( "caffee", 2 )\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"note how we are passing typescript value without transforming them to ",(0,r.kt)("inlineCode",{parentName:"p"},"plu-ts")," ones;"),(0,r.kt)("p",{parentName:"admonition"},"this is some magic done by 'plu-ts' so that if the type is known we dont have to explicitly construct it."),(0,r.kt)("p",{parentName:"admonition"},"We'll see that this turns really useful while writing a smart contract")),(0,r.kt)("h2",{id:"-delayed"},"*** ",(0,r.kt)("inlineCode",{parentName:"h2"},"delayed")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"delayed")," doesn't really have a Typescript value, so it only makes sense in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plu-ts")," world."),(0,r.kt)("p",null,"you can only obtain a delayed value from an exsisting one using ",(0,r.kt)("inlineCode",{parentName:"p"},"pdelay")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function pdelay<PT extends PType>( someTerm: Term<PT> ): Term<PDelayed<PT>>\n")))}u.isMDXComponent=!0}}]);