"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[6296],{17080:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var d=r(17624),s=r(4552);const i={},l=void 0,c={id:"offchain/cardano-ledger-ts/classes/Credential",title:"Credential",description:"@harmoniclabs/cardano-ledger-ts \u2022 Docs",source:"@site/docs/offchain/cardano-ledger-ts/classes/Credential.md",sourceDirName:"offchain/cardano-ledger-ts/classes",slug:"/offchain/cardano-ledger-ts/classes/Credential",permalink:"/offchain/cardano-ledger-ts/classes/Credential",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/offchain/cardano-ledger-ts/classes/Credential.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Constitution",permalink:"/offchain/cardano-ledger-ts/classes/Constitution"},next:{title:"DRepAlwaysAbstain",permalink:"/offchain/cardano-ledger-ts/classes/DRepAlwaysAbstain"}},a={},t=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new Credential()",id:"new-credential",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"hash",id:"hash",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Accessors",id:"accessors",level:2},{value:"fake",id:"fake",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"clone()",id:"clone",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"toCbor()",id:"tocbor",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"toCborObj()",id:"tocborobj",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"toData()",id:"todata",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"toJson()",id:"tojson",level:3},{value:"Returns",id:"returns-6",level:4},{value:"credentialType",id:"credentialtype",level:5},{value:"hash",id:"hash-1",level:5},{value:"Defined in",id:"defined-in-8",level:4},{value:"fromCbor()",id:"fromcbor",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"fromCborObj()",id:"fromcborobj",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"keyHash()",id:"keyhash",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"<del>pubKey()</del>",id:"pubkey",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Deprecated",id:"deprecated",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"script()",id:"script",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-13",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/",children:(0,d.jsx)(n.strong,{children:"@harmoniclabs/cardano-ledger-ts"})})," \u2022 ",(0,d.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/globals",children:"@harmoniclabs/cardano-ledger-ts"})," / Credential"]}),"\n",(0,d.jsx)(n.h1,{id:"class-credentialt",children:"Class: Credential<T>"}),"\n",(0,d.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"T"})," ",(0,d.jsx)(n.em,{children:"extends"})," ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,d.jsx)(n.code,{children:"CredentialType"})})," = ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,d.jsx)(n.code,{children:"CredentialType"})})]}),"\n",(0,d.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"ToCbor"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"ToData"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Cloneable"}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.code,{children:"T"}),">>"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,d.jsx)(n.h3,{id:"new-credential",children:"new Credential()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"new Credential"}),"<",(0,d.jsx)(n.code,{children:"T"}),">(",(0,d.jsx)(n.code,{children:"type"}),", ",(0,d.jsx)(n.code,{children:"hash"}),"): ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"type"}),": ",(0,d.jsx)(n.code,{children:"T"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"hash"}),": ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Hash28",children:(0,d.jsx)(n.code,{children:"Hash28"})})]}),"\n",(0,d.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L24",children:"src/credentials/Credential.ts:24"})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"hash",children:"hash"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"hash"}),": ",(0,d.jsx)(n.code,{children:"T"})," ",(0,d.jsx)(n.em,{children:"extends"})," ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType#keyhash",children:(0,d.jsx)(n.code,{children:"KeyHash"})})," ? ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/PubKeyHash",children:(0,d.jsx)(n.code,{children:"PubKeyHash"})})," : ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/ValidatorHash",children:(0,d.jsx)(n.code,{children:"ValidatorHash"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L22",children:"src/credentials/Credential.ts:22"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"type"}),": ",(0,d.jsx)(n.code,{children:"T"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L21",children:"src/credentials/Credential.ts:21"})}),"\n",(0,d.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,d.jsx)(n.h3,{id:"fake",children:"fake"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"get"})," ",(0,d.jsx)(n.code,{children:"static"})," ",(0,d.jsx)(n.strong,{children:"fake"}),"(): ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType#keyhash",children:(0,d.jsx)(n.code,{children:"KeyHash"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType#keyhash",children:(0,d.jsx)(n.code,{children:"KeyHash"})}),">"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L58",children:"src/credentials/Credential.ts:58"})}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h3,{id:"clone",children:"clone()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"clone"}),"(): ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,d.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Cloneable.clone"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L50",children:"src/credentials/Credential.ts:50"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"tocbor",children:"toCbor()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"toCbor"}),"(): ",(0,d.jsx)(n.code,{children:"CborString"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"CborString"})}),"\n",(0,d.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ToCbor.toCbor"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L100",children:"src/credentials/Credential.ts:100"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"tocborobj",children:"toCborObj()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"toCborObj"}),"(): ",(0,d.jsx)(n.code,{children:"CborObj"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"CborObj"})}),"\n",(0,d.jsx)(n.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ToCbor.toCborObj"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L104",children:"src/credentials/Credential.ts:104"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"todata",children:"toData()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"toData"}),"(",(0,d.jsx)(n.code,{children:"_v"}),"?): ",(0,d.jsx)(n.code,{children:"DataConstr"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"_v?"}),": ",(0,d.jsx)(n.code,{children:"any"})]}),"\n",(0,d.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"DataConstr"})}),"\n",(0,d.jsx)(n.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ToData.toData"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L66",children:"src/credentials/Credential.ts:66"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"tojson",children:"toJson()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"toJson"}),"(): ",(0,d.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"object"})}),"\n",(0,d.jsx)(n.h5,{id:"credentialtype",children:"credentialType"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"credentialType"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.h5,{id:"hash-1",children:"hash"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"hash"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L131",children:"src/credentials/Credential.ts:131"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"fromcbor",children:"fromCbor()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"static"})," ",(0,d.jsx)(n.strong,{children:"fromCbor"}),"(",(0,d.jsx)(n.code,{children:"cStr"}),"): ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,d.jsx)(n.code,{children:"CredentialType"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"cStr"}),": ",(0,d.jsx)(n.code,{children:"CanBeCborString"})]}),"\n",(0,d.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,d.jsx)(n.code,{children:"CredentialType"})}),">"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L112",children:"src/credentials/Credential.ts:112"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"fromcborobj",children:"fromCborObj()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"static"})," ",(0,d.jsx)(n.strong,{children:"fromCborObj"}),"(",(0,d.jsx)(n.code,{children:"cObj"}),"): ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,d.jsx)(n.code,{children:"CredentialType"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"cObj"}),": ",(0,d.jsx)(n.code,{children:"CborObj"})]}),"\n",(0,d.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType",children:(0,d.jsx)(n.code,{children:"CredentialType"})}),">"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L116",children:"src/credentials/Credential.ts:116"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"keyhash",children:"keyHash()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"static"})," ",(0,d.jsx)(n.strong,{children:"keyHash"}),"(",(0,d.jsx)(n.code,{children:"hash"}),"): ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType#keyhash",children:(0,d.jsx)(n.code,{children:"KeyHash"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"hash"}),": ",(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"Uint8Array"})," | ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Hash28",children:(0,d.jsx)(n.code,{children:"Hash28"})})]}),"\n",(0,d.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType#keyhash",children:(0,d.jsx)(n.code,{children:"KeyHash"})}),">"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L80",children:"src/credentials/Credential.ts:80"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"pubkey",children:(0,d.jsx)(n.del,{children:"pubKey()"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"static"})," ",(0,d.jsx)(n.strong,{children:"pubKey"}),"(",(0,d.jsx)(n.code,{children:"hash"}),"): ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType#keyhash",children:(0,d.jsx)(n.code,{children:"KeyHash"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"hash"}),": ",(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"Uint8Array"})," | ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Hash28",children:(0,d.jsx)(n.code,{children:"Hash28"})})]}),"\n",(0,d.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType#keyhash",children:(0,d.jsx)(n.code,{children:"KeyHash"})}),">"]}),"\n",(0,d.jsx)(n.h4,{id:"deprecated",children:"Deprecated"}),"\n",(0,d.jsxs)(n.p,{children:["use ",(0,d.jsx)(n.code,{children:"keyHash"})," instead"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L75",children:"src/credentials/Credential.ts:75"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"script",children:"script()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"static"})," ",(0,d.jsx)(n.strong,{children:"script"}),"(",(0,d.jsx)(n.code,{children:"hash"}),"): ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType#script",children:(0,d.jsx)(n.code,{children:"Script"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"hash"}),": ",(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"Uint8Array"})," | ",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Hash28",children:(0,d.jsx)(n.code,{children:"Hash28"})})]}),"\n",(0,d.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/classes/Credential",children:(0,d.jsx)(n.code,{children:"Credential"})}),"<",(0,d.jsx)(n.a,{href:"/offchain/cardano-ledger-ts/enumerations/CredentialType#script",children:(0,d.jsx)(n.code,{children:"Script"})}),">"]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/HarmonicLabs/cardano-ledger-ts/blob/94dd590ffe94133126b0d8d49920fc7b002e1975/src/credentials/Credential.ts#L90",children:"src/credentials/Credential.ts:90"})})]})}function o(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>c,M:()=>l});var d=r(11504);const s={},i=d.createContext(s);function l(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);