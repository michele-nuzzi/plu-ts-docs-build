"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[8452],{59556:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=e(17624),i=e(4552);const o={sidebar_position:0},r="cardanocli-pluts",l={id:"tools/cardanocli-pluts",title:"cardanocli-pluts",description:"cardanocli-pluts",source:"@site/docs/tools/cardanocli-pluts.md",sourceDirName:"tools",slug:"/tools/cardanocli-pluts",permalink:"/tools/cardanocli-pluts",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/tools/cardanocli-pluts.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/category/tools"},next:{title:"koios-pluts",permalink:"/tools/koios-pluts"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2}];function d(n){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"cardanocli-pluts",children:"cardanocli-pluts"}),"\n",(0,s.jsx)(t.admonition,{title:"GitHub",type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/HarmonicLabs/cardanocli-pluts",children:"cardanocli-pluts"})})}),"\n",(0,s.jsxs)("p",{align:"center",children:[(0,s.jsx)("h1",{align:"center",children:"cardanocli-pluts"}),(0,s.jsxs)("p",{align:"center",children:[(0,s.jsx)("a",{href:"https://twitter.com/hlabs_tech",children:(0,s.jsx)("img",{src:"https://img.shields.io/twitter/follow/hlabs_tech?style=for-the-badge&logo=twitter"})}),(0,s.jsx)("a",{href:"https://twitter.com/MicheleHarmonic",children:(0,s.jsx)("img",{src:"https://img.shields.io/twitter/follow/MicheleHarmonic?style=for-the-badge&logo=twitter"})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"cardanocli-pluts"})," is a library that wraps cardano-cli using Typescript allowing you to interact with the cli using the Types exposed by ",(0,s.jsx)(t.a,{href:"https://github.com/HarmonicLabs/plu-ts",children:(0,s.jsx)(t.code,{children:"plu-ts"})})]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"cardano-node >= 1.29.0"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"node.js >= 12.19.0"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"plu-ts >= 0.2.0"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'import { CardanoCliPluts } from "@harmoniclabs/cardanocli-pluts"\nimport { Value } from "@harmoniclabs/plu-ts"\n\nconst cli = new CardanoCliPluts({\n    network: "testnet 42"\n});\n\nasync function main(){\n\n    // read a saved address from file\n    const bobAddr = await cli.utils.readAddress( "./addresses/bob.addr" );\n\n    // or make a new addres using the cli\n    const { privateKey, publicKey } = await cli.address.keyGen();\n\n    const myAddr = await cli.address.build({\n        payment: { publicKey }\n    });\n\n    // query the UTxOs at myAddr\n    const myUtxos = await cli.query.utxo({\n        address: myAddr\n    });\n\n    // send some ada to bob\n    const tx = await cli.transaction.build({\n        inputs: [{ utxo: myUtxos[0] }],\n        outpus: [\n            {\n                address: bobAddr,\n                value: Value.lovelaces(2_000_000)\n            }\n        ],\n        changeAddress: myAddr\n    });\n\n    const txSigned = await cli.transaction.sign({\n        tx,\n        privateKey\n    });\n\n    // let\'s check everything is ok before submission\n    console.log(\n        JSON.stringify(\n            txSigned.toJson(),\n            undefined,\n            2\n        )\n    );\n\n    // send the transaction\n    cli.transaction.submit({ tx: txSigned })\n\n}\n\nmain()\n'})})]})}function u(n={}){const{wrapper:t}={...(0,i.M)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},4552:(n,t,e)=>{e.d(t,{I:()=>l,M:()=>r});var s=e(11504);const i={},o=s.createContext(i);function r(n){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(o.Provider,{value:t},n.children)}}}]);