"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[48532],{72280:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=s(17624),n=s(4552);const i={},l=void 0,c={id:"offchain/cardano-ledger-ts/classes/Address",title:"Address",description:"@harmoniclabs/cardano-ledger-ts \u2022 Docs",source:"@site/docs/offchain/cardano-ledger-ts/classes/Address.md",sourceDirName:"offchain/cardano-ledger-ts/classes",slug:"/offchain/cardano-ledger-ts/classes/Address",permalink:"/offchain/cardano-ledger-ts/classes/Address",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/offchain/cardano-ledger-ts/classes/Address.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/offchain/cardano-ledger-ts/"},next:{title:"Anchor",permalink:"/offchain/cardano-ledger-ts/classes/Anchor"}},t={},a=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new Address()",id:"new-address",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"network",id:"network",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"paymentCreds",id:"paymentcreds",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"stakeCreds?",id:"stakecreds",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Accessors",id:"accessors",level:2},{value:"fake",id:"fake",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods",level:2},{value:"clone()",id:"clone",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"toBuffer()",id:"tobuffer",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"toBytes()",id:"tobytes",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"toCbor()",id:"tocbor",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"toCborObj()",id:"tocborobj",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"toData()",id:"todata",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"toJson()",id:"tojson",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"toString()",id:"tostring",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"fromBuffer()",id:"frombuffer",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"fromBytes()",id:"frombytes",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"fromCbor()",id:"fromcbor",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"fromCborObj()",id:"fromcborobj",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"fromEntropy()",id:"fromentropy",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"fromString()",id:"fromstring",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"fromXPrv()",id:"fromxprv",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"mainnet()",id:"mainnet",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-17",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"testnet()",id:"testnet",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-18",level:4},{value:"Defined in",id:"defined-in-22",level:4}];function h(e){const d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/",children:(0,r.jsx)(d.strong,{children:"@harmoniclabs/cardano-ledger-ts"})})," \u2022 ",(0,r.jsx)(d.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/globals",children:"@harmoniclabs/cardano-ledger-ts"})," / Address"]}),"\n",(0,r.jsx)(d.h1,{id:"class-address",children:"Class: Address"}),"\n",(0,r.jsx)(d.p,{children:"shelley specification in cardano-ledger; page 113"}),"\n",(0,r.jsx)(d.h2,{id:"implements",children:"Implements"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.code,{children:"ToData"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.code,{children:"ToCbor"})}),"\n"]}),"\n",(0,r.jsx)(d.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(d.h3,{id:"new-address",children:"new Address()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"new Address"}),"(",(0,r.jsx)(d.code,{children:"network"}),", ",(0,r.jsx)(d.code,{children:"paymentCreds"}),", ",(0,r.jsx)(d.code,{children:"stakeCreds"}),"?, ",(0,r.jsx)(d.code,{children:"type"}),"?): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"network"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/NetworkT",children:(0,r.jsx)(d.code,{children:"NetworkT"})})]}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"paymentCreds"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,r.jsx)(d.code,{children:"Credential"})}),"<",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,r.jsx)(d.code,{children:"CredentialType"})}),">"]}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"stakeCreds?"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/StakeCredentials",children:(0,r.jsx)(d.code,{children:"StakeCredentials"})}),"<",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/StakeCredentialsType",children:(0,r.jsx)(d.code,{children:"StakeCredentialsType"})}),">"]}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"type?"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/AddressType",children:(0,r.jsx)(d.code,{children:"AddressType"})})]}),"\n",(0,r.jsx)(d.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L75",children:"src/ledger/Address.ts:75"})}),"\n",(0,r.jsx)(d.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(d.h3,{id:"network",children:"network"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"readonly"})," ",(0,r.jsx)(d.strong,{children:"network"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/NetworkT",children:(0,r.jsx)(d.code,{children:"NetworkT"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L42",children:"src/ledger/Address.ts:42"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"paymentcreds",children:"paymentCreds"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"readonly"})," ",(0,r.jsx)(d.strong,{children:"paymentCreds"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,r.jsx)(d.code,{children:"Credential"})}),"<",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,r.jsx)(d.code,{children:"CredentialType"})}),">"]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L43",children:"src/ledger/Address.ts:43"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"stakecreds",children:"stakeCreds?"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"readonly"})," ",(0,r.jsx)(d.code,{children:"optional"})," ",(0,r.jsx)(d.strong,{children:"stakeCreds"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/StakeCredentials",children:(0,r.jsx)(d.code,{children:"StakeCredentials"})}),"<",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/StakeCredentialsType",children:(0,r.jsx)(d.code,{children:"StakeCredentialsType"})}),">"]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L44",children:"src/ledger/Address.ts:44"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"type",children:"type"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"readonly"})," ",(0,r.jsx)(d.strong,{children:"type"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/AddressType",children:(0,r.jsx)(d.code,{children:"AddressType"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L45",children:"src/ledger/Address.ts:45"})}),"\n",(0,r.jsx)(d.h2,{id:"accessors",children:"Accessors"}),"\n",(0,r.jsx)(d.h3,{id:"fake",children:"fake"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"get"})," ",(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"fake"}),"(): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L132",children:"src/ledger/Address.ts:132"})}),"\n",(0,r.jsx)(d.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(d.h3,{id:"clone",children:"clone()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"clone"}),"(): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L122",children:"src/ledger/Address.ts:122"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"tobuffer",children:"toBuffer()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"toBuffer"}),"(): ",(0,r.jsx)(d.code,{children:"Uint8Array"})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.code,{children:"Uint8Array"})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L269",children:"src/ledger/Address.ts:269"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"tobytes",children:"toBytes()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"toBytes"}),"(): ",(0,r.jsx)(d.code,{children:"byte"}),"[]"]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"byte"}),"[]"]}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L153",children:"src/ledger/Address.ts:153"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"tocbor",children:"toCbor()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"toCbor"}),"(): ",(0,r.jsx)(d.code,{children:"CborString"})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.code,{children:"CborString"})}),"\n",(0,r.jsx)(d.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.code,{children:"ToCbor.toCbor"})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L337",children:"src/ledger/Address.ts:337"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"tocborobj",children:"toCborObj()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"toCborObj"}),"(): ",(0,r.jsx)(d.code,{children:"CborObj"})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.code,{children:"CborObj"})}),"\n",(0,r.jsx)(d.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.code,{children:"ToCbor.toCborObj"})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L324",children:"src/ledger/Address.ts:324"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"todata",children:"toData()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"toData"}),"(): ",(0,r.jsx)(d.code,{children:"Data"})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.code,{children:"Data"})}),"\n",(0,r.jsx)(d.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.code,{children:"ToData.toData"})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L140",children:"src/ledger/Address.ts:140"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"tojson",children:"toJson()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"toJson"}),"(): `addr1${string}` | `addr_test1${string}`"]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"returns-8",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:"`addr1${string}` | `addr_test1${string}`"}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L384",children:"src/ledger/Address.ts:384"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"tostring",children:"toString()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"toString"}),"(): `addr1${string}` | `addr_test1${string}`"]}),"\n"]}),"\n",(0,r.jsx)(d.p,{children:"Returns a string representation of an object."}),"\n",(0,r.jsx)(d.h4,{id:"returns-9",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:"`addr1${string}` | `addr_test1${string}`"}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L347",children:"src/ledger/Address.ts:347"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"frombuffer",children:"fromBuffer()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"fromBuffer"}),"(",(0,r.jsx)(d.code,{children:"buff"}),"): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"buff"}),": ",(0,r.jsx)(d.code,{children:"string"})," | ",(0,r.jsx)(d.code,{children:"Uint8Array"})]}),"\n",(0,r.jsx)(d.h4,{id:"returns-10",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L274",children:"src/ledger/Address.ts:274"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"frombytes",children:"fromBytes()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"fromBytes"}),"(",(0,r.jsx)(d.code,{children:"bs"}),"): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"bs"}),": ",(0,r.jsx)(d.code,{children:"string"})," | ",(0,r.jsx)(d.code,{children:"Uint8Array"})," | ",(0,r.jsx)(d.code,{children:"byte"}),"[]"]}),"\n",(0,r.jsx)(d.h4,{id:"returns-11",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-15",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L192",children:"src/ledger/Address.ts:192"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"fromcbor",children:"fromCbor()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"fromCbor"}),"(",(0,r.jsx)(d.code,{children:"cbor"}),"): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"cbor"}),": ",(0,r.jsx)(d.code,{children:"CanBeCborString"})]}),"\n",(0,r.jsx)(d.h4,{id:"returns-12",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-16",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L342",children:"src/ledger/Address.ts:342"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"fromcborobj",children:"fromCborObj()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"fromCborObj"}),"(",(0,r.jsx)(d.code,{children:"buff"}),"): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"buff"}),": ",(0,r.jsx)(d.code,{children:"CborObj"})]}),"\n",(0,r.jsx)(d.h4,{id:"returns-13",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-17",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L329",children:"src/ledger/Address.ts:329"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"fromentropy",children:"fromEntropy()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"fromEntropy"}),"(",(0,r.jsx)(d.code,{children:"entropy"}),", ",(0,r.jsx)(d.code,{children:"network"}),"): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["generates an ",(0,r.jsx)(d.code,{children:"XPrv"})," from entropy and calls ",(0,r.jsx)(d.code,{children:"Addres.fromXPrv"})]}),"\n",(0,r.jsx)(d.p,{children:"gets the standard address for single address wallets"}),"\n",(0,r.jsx)(d.p,{children:"payment key at path \"m/1852'/1815'/0'/0/0\"\nstake key at path   \"m/1852'/1815'/0'/2/0\""}),"\n",(0,r.jsx)(d.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"entropy"}),": ",(0,r.jsx)(d.code,{children:"string"})," | ",(0,r.jsx)(d.code,{children:"Uint8Array"})]}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"network"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/NetworkT",children:(0,r.jsx)(d.code,{children:"NetworkT"})})," = ",(0,r.jsx)(d.code,{children:'"mainnet"'})]}),"\n",(0,r.jsx)(d.h4,{id:"returns-14",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-18",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L319",children:"src/ledger/Address.ts:319"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"fromstring",children:"fromString()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"fromString"}),"(",(0,r.jsx)(d.code,{children:"addr"}),"): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"addr"}),": ",(0,r.jsx)(d.code,{children:"string"})]}),"\n",(0,r.jsx)(d.h4,{id:"returns-15",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-19",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L355",children:"src/ledger/Address.ts:355"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"fromxprv",children:"fromXPrv()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"fromXPrv"}),"(",(0,r.jsx)(d.code,{children:"xprv"}),", ",(0,r.jsx)(d.code,{children:"network"}),"): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.p,{children:"gets the standard address for single address wallets"}),"\n",(0,r.jsx)(d.p,{children:"payment key at path \"m/1852'/1815'/0'/0/0\"\nstake key at path   \"m/1852'/1815'/0'/2/0\""}),"\n",(0,r.jsx)(d.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"xprv"}),": ",(0,r.jsx)(d.code,{children:"XPrv"})]}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"network"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/NetworkT",children:(0,r.jsx)(d.code,{children:"NetworkT"})})," = ",(0,r.jsx)(d.code,{children:'"mainnet"'})]}),"\n",(0,r.jsx)(d.h4,{id:"returns-16",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-20",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L289",children:"src/ledger/Address.ts:289"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"mainnet",children:"mainnet()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"mainnet"}),"(",(0,r.jsx)(d.code,{children:"paymentCreds"}),", ",(0,r.jsx)(d.code,{children:"stakeCreds"}),"?, ",(0,r.jsx)(d.code,{children:"type"}),"?): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"paymentCreds"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,r.jsx)(d.code,{children:"Credential"})}),"<",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,r.jsx)(d.code,{children:"CredentialType"})}),">"]}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"stakeCreds?"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/StakeCredentials",children:(0,r.jsx)(d.code,{children:"StakeCredentials"})}),"<",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/StakeCredentialsType",children:(0,r.jsx)(d.code,{children:"StakeCredentialsType"})}),">"]}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"type?"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/AddressType",children:(0,r.jsx)(d.code,{children:"AddressType"})})]}),"\n",(0,r.jsx)(d.h4,{id:"returns-17",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-21",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L47",children:"src/ledger/Address.ts:47"})}),"\n",(0,r.jsx)(d.hr,{}),"\n",(0,r.jsx)(d.h3,{id:"testnet",children:"testnet()"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"static"})," ",(0,r.jsx)(d.strong,{children:"testnet"}),"(",(0,r.jsx)(d.code,{children:"paymentCreds"}),", ",(0,r.jsx)(d.code,{children:"stakeCreds"}),"?, ",(0,r.jsx)(d.code,{children:"type"}),"?): ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})]}),"\n"]}),"\n",(0,r.jsx)(d.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"paymentCreds"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,r.jsx)(d.code,{children:"Credential"})}),"<",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,r.jsx)(d.code,{children:"CredentialType"})}),">"]}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"stakeCreds?"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/StakeCredentials",children:(0,r.jsx)(d.code,{children:"StakeCredentials"})}),"<",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/StakeCredentialsType",children:(0,r.jsx)(d.code,{children:"StakeCredentialsType"})}),">"]}),"\n",(0,r.jsxs)(d.p,{children:["\u2022 ",(0,r.jsx)(d.strong,{children:"type?"}),": ",(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/type-aliases/AddressType",children:(0,r.jsx)(d.code,{children:"AddressType"})})]}),"\n",(0,r.jsx)(d.h4,{id:"returns-18",children:"Returns"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/offchain/cardano-ledger-ts/classes/Address",children:(0,r.jsx)(d.code,{children:"Address"})})}),"\n",(0,r.jsx)(d.h4,{id:"defined-in-22",children:"Defined in"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/ledger/Address.ts#L61",children:"src/ledger/Address.ts:61"})})]})}function o(e={}){const{wrapper:d}={...(0,n.M)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4552:(e,d,s)=>{s.d(d,{I:()=>c,M:()=>l});var r=s(11504);const n={},i=r.createContext(n);function l(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);