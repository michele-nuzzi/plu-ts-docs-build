"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[8532],{85992:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var d=s(17624),n=s(4552);const l={},c="Class: Address",i={id:"offchain/cardano-ledger-ts/classes/Address",title:"Address",description:"@harmoniclabs/cardano-ledger-ts \u2022 Readme \\| API",source:"@site/docs/offchain/cardano-ledger-ts/classes/Address.md",sourceDirName:"offchain/cardano-ledger-ts/classes",slug:"/offchain/cardano-ledger-ts/classes/Address",permalink:"/offchain/cardano-ledger-ts/classes/Address",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/offchain/cardano-ledger-ts/classes/Address.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/offchain/cardano-ledger-ts/Introduction"},next:{title:"AuxiliaryData",permalink:"/offchain/cardano-ledger-ts/classes/AuxiliaryData"}},t={},o=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new Address(network, paymentCreds, stakeCreds, type)",id:"new-addressnetwork-paymentcreds-stakecreds-type",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source",level:4},{value:"Properties",id:"properties",level:2},{value:"network",id:"network",level:3},{value:"Source",id:"source-1",level:4},{value:"paymentCreds",id:"paymentcreds",level:3},{value:"Source",id:"source-2",level:4},{value:"stakeCreds?",id:"stakecreds",level:3},{value:"Source",id:"source-3",level:4},{value:"type",id:"type",level:3},{value:"Source",id:"source-4",level:4},{value:"Accessors",id:"accessors",level:2},{value:"fake",id:"fake",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-5",level:4},{value:"Methods",id:"methods",level:2},{value:"clone()",id:"clone",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-6",level:4},{value:"toBuffer()",id:"tobuffer",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-7",level:4},{value:"toBytes()",id:"tobytes",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Source",id:"source-8",level:4},{value:"toCbor()",id:"tocbor",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Source",id:"source-9",level:4},{value:"toCborObj()",id:"tocborobj",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Source",id:"source-10",level:4},{value:"toData()",id:"todata",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Source",id:"source-11",level:4},{value:"toJson()",id:"tojson",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Source",id:"source-12",level:4},{value:"toString()",id:"tostring",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Source",id:"source-13",level:4},{value:"fromBuffer()",id:"frombuffer",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Source",id:"source-14",level:4},{value:"fromBytes()",id:"frombytes",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Source",id:"source-15",level:4},{value:"fromCbor()",id:"fromcbor",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Source",id:"source-16",level:4},{value:"fromCborObj()",id:"fromcborobj",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Source",id:"source-17",level:4},{value:"fromString()",id:"fromstring",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Source",id:"source-18",level:4},{value:"mainnet()",id:"mainnet",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Source",id:"source-19",level:4},{value:"testnet()",id:"testnet",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Source",id:"source-20",level:4}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"@harmoniclabs/cardano-ledger-ts"})," \u2022 ",(0,d.jsx)(r.a,{href:"../Introduction",children:"Readme"})," | ",(0,d.jsx)(r.a,{href:"../globals",children:"API"})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"../Introduction",children:"@harmoniclabs/cardano-ledger-ts"})," / Address"]}),"\n",(0,d.jsx)(r.h1,{id:"class-address",children:"Class: Address"}),"\n",(0,d.jsx)(r.p,{children:"shelley specification in cardano-ledger; page 113"}),"\n",(0,d.jsx)(r.h2,{id:"implements",children:"Implements"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"ToData"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"ToCbor"})}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,d.jsx)(r.h3,{id:"new-addressnetwork-paymentcreds-stakecreds-type",children:"new Address(network, paymentCreds, stakeCreds, type)"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"new Address"}),"(",(0,d.jsx)(r.code,{children:"network"}),", ",(0,d.jsx)(r.code,{children:"paymentCreds"}),", ",(0,d.jsx)(r.code,{children:"stakeCreds"}),"?, ",(0,d.jsx)(r.code,{children:"type"}),"?): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"network"}),": ",(0,d.jsx)(r.a,{href:"../type-aliases/NetworkT",children:(0,d.jsx)(r.code,{children:"NetworkT"})})]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"paymentCreds"}),": ",(0,d.jsx)(r.a,{href:"Credential",children:(0,d.jsx)(r.code,{children:"Credential"})}),"<",(0,d.jsx)(r.a,{href:"../enumerations/CredentialType",children:(0,d.jsx)(r.code,{children:"CredentialType"})}),">"]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"stakeCreds?"}),": ",(0,d.jsx)(r.a,{href:"StakeCredentials",children:(0,d.jsx)(r.code,{children:"StakeCredentials"})}),"<",(0,d.jsx)(r.a,{href:"../type-aliases/StakeCredentialsType",children:(0,d.jsx)(r.code,{children:"StakeCredentialsType"})}),">"]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"type?"}),": ",(0,d.jsx)(r.a,{href:"../type-aliases/AddressType",children:(0,d.jsx)(r.code,{children:"AddressType"})})]}),"\n",(0,d.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L74",children:"src/ledger/Address.ts:74"})}),"\n",(0,d.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(r.h3,{id:"network",children:"network"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"readonly"})})," ",(0,d.jsx)(r.strong,{children:"network"}),": ",(0,d.jsx)(r.a,{href:"../type-aliases/NetworkT",children:(0,d.jsx)(r.code,{children:"NetworkT"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"source-1",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L41",children:"src/ledger/Address.ts:41"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"paymentcreds",children:"paymentCreds"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"readonly"})})," ",(0,d.jsx)(r.strong,{children:"paymentCreds"}),": ",(0,d.jsx)(r.a,{href:"Credential",children:(0,d.jsx)(r.code,{children:"Credential"})}),"<",(0,d.jsx)(r.a,{href:"../enumerations/CredentialType",children:(0,d.jsx)(r.code,{children:"CredentialType"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"source-2",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L42",children:"src/ledger/Address.ts:42"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"stakecreds",children:"stakeCreds?"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"optional"})})," ",(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"readonly"})})," ",(0,d.jsx)(r.strong,{children:"stakeCreds"}),": ",(0,d.jsx)(r.a,{href:"StakeCredentials",children:(0,d.jsx)(r.code,{children:"StakeCredentials"})}),"<",(0,d.jsx)(r.a,{href:"../type-aliases/StakeCredentialsType",children:(0,d.jsx)(r.code,{children:"StakeCredentialsType"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"source-3",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L43",children:"src/ledger/Address.ts:43"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"type",children:"type"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"readonly"})})," ",(0,d.jsx)(r.strong,{children:"type"}),": ",(0,d.jsx)(r.a,{href:"../type-aliases/AddressType",children:(0,d.jsx)(r.code,{children:"AddressType"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"source-4",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L44",children:"src/ledger/Address.ts:44"})}),"\n",(0,d.jsx)(r.h2,{id:"accessors",children:"Accessors"}),"\n",(0,d.jsx)(r.h3,{id:"fake",children:"fake"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"get"})})," ",(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"static"})})," ",(0,d.jsx)(r.strong,{children:"fake"}),"(): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source-5",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L131",children:"src/ledger/Address.ts:131"})}),"\n",(0,d.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(r.h3,{id:"clone",children:"clone()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"clone"}),"(): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source-6",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L121",children:"src/ledger/Address.ts:121"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"tobuffer",children:"toBuffer()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"toBuffer"}),"(): ",(0,d.jsx)(r.code,{children:"Uint8Array"})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"Uint8Array"})}),"\n",(0,d.jsx)(r.h4,{id:"source-7",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L268",children:"src/ledger/Address.ts:268"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"tobytes",children:"toBytes()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"toBytes"}),"(): ",(0,d.jsx)(r.code,{children:"byte"}),"[]"]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"byte"}),"[]"]}),"\n",(0,d.jsx)(r.h4,{id:"source-8",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L152",children:"src/ledger/Address.ts:152"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"tocbor",children:"toCbor()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"toCbor"}),"(): ",(0,d.jsx)(r.code,{children:"CborString"})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"CborString"})}),"\n",(0,d.jsx)(r.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"ToCbor.toCbor"})}),"\n",(0,d.jsx)(r.h4,{id:"source-9",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L295",children:"src/ledger/Address.ts:295"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"tocborobj",children:"toCborObj()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"toCborObj"}),"(): ",(0,d.jsx)(r.code,{children:"CborObj"})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"CborObj"})}),"\n",(0,d.jsx)(r.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"ToCbor.toCborObj"})}),"\n",(0,d.jsx)(r.h4,{id:"source-10",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L282",children:"src/ledger/Address.ts:282"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"todata",children:"toData()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"toData"}),"(): ",(0,d.jsx)(r.code,{children:"Data"})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-7",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"Data"})}),"\n",(0,d.jsx)(r.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"ToData.toData"})}),"\n",(0,d.jsx)(r.h4,{id:"source-11",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L139",children:"src/ledger/Address.ts:139"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"tojson",children:"toJson()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"toJson"}),"(): ",(0,d.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-8",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"string"})}),"\n",(0,d.jsx)(r.h4,{id:"source-12",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L342",children:"src/ledger/Address.ts:342"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"tostring",children:"toString()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"toString"}),"(): ",(0,d.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-9",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"string"})}),"\n",(0,d.jsx)(r.h4,{id:"source-13",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L305",children:"src/ledger/Address.ts:305"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"frombuffer",children:"fromBuffer()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"static"})})," ",(0,d.jsx)(r.strong,{children:"fromBuffer"}),"(",(0,d.jsx)(r.code,{children:"buff"}),"): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"buff"}),": ",(0,d.jsx)(r.code,{children:"string"})," | ",(0,d.jsx)(r.code,{children:"Uint8Array"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-10",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source-14",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L273",children:"src/ledger/Address.ts:273"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"frombytes",children:"fromBytes()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"static"})})," ",(0,d.jsx)(r.strong,{children:"fromBytes"}),"(",(0,d.jsx)(r.code,{children:"bs"}),"): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"bs"}),": ",(0,d.jsx)(r.code,{children:"string"})," | ",(0,d.jsx)(r.code,{children:"Uint8Array"})," | ",(0,d.jsx)(r.code,{children:"byte"}),"[]"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-11",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source-15",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L191",children:"src/ledger/Address.ts:191"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"fromcbor",children:"fromCbor()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"static"})})," ",(0,d.jsx)(r.strong,{children:"fromCbor"}),"(",(0,d.jsx)(r.code,{children:"cbor"}),"): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"cbor"}),": ",(0,d.jsx)(r.code,{children:"CanBeCborString"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-12",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source-16",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L300",children:"src/ledger/Address.ts:300"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"fromcborobj",children:"fromCborObj()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"static"})})," ",(0,d.jsx)(r.strong,{children:"fromCborObj"}),"(",(0,d.jsx)(r.code,{children:"buff"}),"): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"buff"}),": ",(0,d.jsx)(r.code,{children:"CborObj"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-13",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source-17",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L287",children:"src/ledger/Address.ts:287"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"fromstring",children:"fromString()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"static"})})," ",(0,d.jsx)(r.strong,{children:"fromString"}),"(",(0,d.jsx)(r.code,{children:"addr"}),"): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"addr"}),": ",(0,d.jsx)(r.code,{children:"string"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-14",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source-18",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L313",children:"src/ledger/Address.ts:313"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"mainnet",children:"mainnet()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"static"})})," ",(0,d.jsx)(r.strong,{children:"mainnet"}),"(",(0,d.jsx)(r.code,{children:"paymentCreds"}),", ",(0,d.jsx)(r.code,{children:"stakeCreds"}),"?, ",(0,d.jsx)(r.code,{children:"type"}),"?): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"paymentCreds"}),": ",(0,d.jsx)(r.a,{href:"Credential",children:(0,d.jsx)(r.code,{children:"Credential"})}),"<",(0,d.jsx)(r.a,{href:"../enumerations/CredentialType",children:(0,d.jsx)(r.code,{children:"CredentialType"})}),">"]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"stakeCreds?"}),": ",(0,d.jsx)(r.a,{href:"StakeCredentials",children:(0,d.jsx)(r.code,{children:"StakeCredentials"})}),"<",(0,d.jsx)(r.a,{href:"../type-aliases/StakeCredentialsType",children:(0,d.jsx)(r.code,{children:"StakeCredentialsType"})}),">"]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"type?"}),": ",(0,d.jsx)(r.a,{href:"../type-aliases/AddressType",children:(0,d.jsx)(r.code,{children:"AddressType"})})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-15",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source-19",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L46",children:"src/ledger/Address.ts:46"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"testnet",children:"testnet()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.code,{children:"static"})})," ",(0,d.jsx)(r.strong,{children:"testnet"}),"(",(0,d.jsx)(r.code,{children:"paymentCreds"}),", ",(0,d.jsx)(r.code,{children:"stakeCreds"}),"?, ",(0,d.jsx)(r.code,{children:"type"}),"?): ",(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"paymentCreds"}),": ",(0,d.jsx)(r.a,{href:"Credential",children:(0,d.jsx)(r.code,{children:"Credential"})}),"<",(0,d.jsx)(r.a,{href:"../enumerations/CredentialType",children:(0,d.jsx)(r.code,{children:"CredentialType"})}),">"]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"stakeCreds?"}),": ",(0,d.jsx)(r.a,{href:"StakeCredentials",children:(0,d.jsx)(r.code,{children:"StakeCredentials"})}),"<",(0,d.jsx)(r.a,{href:"../type-aliases/StakeCredentialsType",children:(0,d.jsx)(r.code,{children:"StakeCredentialsType"})}),">"]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"type?"}),": ",(0,d.jsx)(r.a,{href:"../type-aliases/AddressType",children:(0,d.jsx)(r.code,{children:"AddressType"})})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-16",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"Address",children:(0,d.jsx)(r.code,{children:"Address"})})}),"\n",(0,d.jsx)(r.h4,{id:"source-20",children:"Source"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/d1659b0/src/ledger/Address.ts#L60",children:"src/ledger/Address.ts:60"})})]})}function a(e={}){const{wrapper:r}={...(0,n.M)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},4552:(e,r,s)=>{s.d(r,{I:()=>i,M:()=>c});var d=s(11504);const n={},l=d.createContext(n);function c(e){const r=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),d.createElement(l.Provider,{value:r},e.children)}}}]);