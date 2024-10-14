"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[86850],{11920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=t(17624),s=t(4552);const r={sidebar_position:20},c="PTxInfo",d={id:"onchain/API/types/V3/ScriptContext/PTxInfo",title:"PTxInfo",description:"The modifications in PTxInfo from V2 version are highlighted.",source:"@site/docs/onchain/API/types/V3/ScriptContext/PTxInfo.mdx",sourceDirName:"onchain/API/types/V3/ScriptContext",slug:"/onchain/API/types/V3/ScriptContext/PTxInfo",permalink:"/onchain/API/types/V3/ScriptContext/PTxInfo",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/API/types/V3/ScriptContext/PTxInfo.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"PScriptInfo",permalink:"/onchain/API/types/V3/ScriptContext/PScriptInfo"},next:{title:"Tx",permalink:"/category/tx-2"}},l={},o=[{value:"<code>inputs</code>",id:"inputs",level:2},{value:"<code>refInputs</code>",id:"refinputs",level:2},{value:"<code>outputs</code>",id:"outputs",level:2},{value:"<code>fee</code>",id:"fee",level:2},{value:"<code>mint</code>",id:"mint",level:2},{value:"<code>certificates</code>",id:"certificates",level:3},{value:"<code>withdrawals</code>",id:"withdrawals",level:3},{value:"<code>interval</code>",id:"interval",level:3},{value:"<code>signatories</code>",id:"signatories",level:3},{value:"<code>redeemers</code>",id:"redeemers",level:2},{value:"<code>datums</code>",id:"datums",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>votes</code>",id:"votes",level:3},{value:"<code>proposalProcedures</code>",id:"proposalprocedures",level:3},{value:"<code>currentTreasury</code>",id:"currenttreasury",level:3},{value:"<code>treasuryDonation</code>",id:"treasurydonation",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ptxinfo",children:(0,i.jsx)(n.code,{children:"PTxInfo"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The modifications in ",(0,i.jsx)(n.code,{children:"PTxInfo"})," from V2 version are highlighted."]})}),"\n",(0,i.jsx)(n.p,{children:"It includes all the information (details about inputs, outputs, fees, minting, certificates, and various associated data) about a transaction in which the script is included."}),"\n",(0,i.jsx)(n.p,{children:"Definition:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export const PTxInfo = pstruct({\n    PTxInfo: {\n        inputs: list( PTxInInfo.type ),\n        refInputs: list( PTxInInfo.type ),\n        outputs: list( PTxOut.type ),\n        // highlight-start\n        fee:  int, // lovelaces\n        // highlight-end\n        /** mint has no lovelaces entry */\n        mint: PValue.type,\n        // highlight-start\n        certificates: list( PCertificate.type ),\n        withdrawals: map( PCredential.type, int ),\n        // highlight-end\n        interval: PPOSIXTimeRange.type,\n        signatories: list( PPubKeyHash.type ),\n        // highlight-start\n        redeemers: map( PScriptPurpose.type, data ),\n        datums: map( PDatumHash.type, data ),\n        // highlight-end\n        id: PTxId.type,\n        // highlight-start\n        votes: map( PVoter.type, map( PTxOutRef.type, PVote.type ) ),\n        proposalProcedures: list( PProposalProcedure.type ),\n        currentTreasury: PMaybe( int ).type,\n        treasuryDonation: PMaybe( int ).type,\n        // highlight-end\n    }\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Values implements all the properties defined on the ",(0,i.jsx)(n.a,{href:"../../../../stdlib/TermList",children:(0,i.jsx)(n.code,{children:"TermList"})})," utility term."]}),"\n",(0,i.jsx)(n.h2,{id:"inputs",children:(0,i.jsx)(n.code,{children:"inputs"})}),"\n",(0,i.jsx)(n.p,{children:"List of transaction inputs. Each input representing an unspent transaction output (UTXO) consumed by the current transaction."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"list( PTxInInfo.type )"})]}),"\n",(0,i.jsx)(n.p,{children:"elements's type:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../Tx/PTxInInfo",children:(0,i.jsx)(n.code,{children:"PTxInInfo"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"refinputs",children:(0,i.jsx)(n.code,{children:"refInputs"})}),"\n",(0,i.jsx)(n.p,{children:"Reference inputs of the transaction. These UTXOs are referenced but not consumed by the transaction.\nThis additional context/information maybe necessary for the contract logic but do not directly affect the transaction's output."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"list( PTxInInfo.type )"})]}),"\n",(0,i.jsx)(n.p,{children:"elements's type:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../Tx/PTxInInfo",children:(0,i.jsx)(n.code,{children:"PTxInInfo"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"outputs",children:(0,i.jsx)(n.code,{children:"outputs"})}),"\n",(0,i.jsx)(n.p,{children:"List of transaction outputs. Each output represents a new UTXO created by the transaction."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"list( PTxOut.type )"})]}),"\n",(0,i.jsxs)(n.p,{children:["elements's type: ",(0,i.jsx)(n.a,{href:"../../V2/Tx/PTxOut",children:(0,i.jsx)(n.code,{children:"PTxOut"})})]}),"\n",(0,i.jsx)(n.h2,{id:"fee",children:(0,i.jsx)(n.code,{children:"fee"})}),"\n",(0,i.jsx)(n.p,{children:"Transaction fee specified in lovelaces"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../../../stdlib/TermInt",children:(0,i.jsx)(n.code,{children:"TermInt"})})]}),"\n",(0,i.jsx)(n.h2,{id:"mint",children:(0,i.jsx)(n.code,{children:"mint"})}),"\n",(0,i.jsx)(n.p,{children:"Includes all tokens minted/burned in the transaction."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/Value/PValue",children:(0,i.jsx)(n.code,{children:"PValue.type"})})]}),"\n",(0,i.jsxs)(n.admonition,{title:"ADA entry",type:"info",children:[(0,i.jsxs)(n.p,{children:["Being a value directly constructed by the node it always includes an entry for ",(0,i.jsx)(n.code,{children:"lovelaces"})]}),(0,i.jsx)(n.p,{children:"Since lovelaces can't be minted/burned the quantity will always be 0"})]}),"\n",(0,i.jsx)(n.h3,{id:"certificates",children:(0,i.jsx)(n.code,{children:"certificates"})}),"\n",(0,i.jsx)(n.p,{children:"List of certificates associated with the transaction."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"list( PCertificate.type )"})]}),"\n",(0,i.jsxs)(n.p,{children:["elements's type: ",(0,i.jsx)(n.a,{href:"./PCertificate",children:(0,i.jsx)(n.code,{children:"PCertificate"})})]}),"\n",(0,i.jsx)(n.h3,{id:"withdrawals",children:(0,i.jsx)(n.code,{children:"withdrawals"})}),"\n",(0,i.jsx)(n.p,{children:"Map of withdrawals made during the transaction"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"map( PCredential.type, int )"})]}),"\n",(0,i.jsx)(n.p,{children:"elements's types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../V1/Address/PCredential",children:(0,i.jsx)(n.code,{children:"PCredential"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../../../stdlib/TermInt",children:(0,i.jsx)(n.code,{children:"TermInt"})})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"interval",children:(0,i.jsx)(n.code,{children:"interval"})}),"\n",(0,i.jsx)(n.p,{children:"Time interval during which the transaction is valid."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/Time/PPOSIXTimeRange",children:(0,i.jsx)(n.code,{children:"PPOSIXTimeRange.type"})})]}),"\n",(0,i.jsx)(n.h3,{id:"signatories",children:(0,i.jsx)(n.code,{children:"signatories"})}),"\n",(0,i.jsx)(n.p,{children:"A list of public key hashes of the parties that have signed the transaction to validate it."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"list( PPubKeyHash.type )"})]}),"\n",(0,i.jsxs)(n.p,{children:["elements's type: ",(0,i.jsx)(n.a,{href:"../../V1/PubKey/PPubKeyHash",children:(0,i.jsx)(n.code,{children:"PPubKeyHash"})})]}),"\n",(0,i.jsx)(n.h2,{id:"redeemers",children:(0,i.jsx)(n.code,{children:"redeemers"})}),"\n",(0,i.jsx)(n.p,{children:"Map of redeemers associated with specific script purposes"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"map( PScriptPurpose.type, data )"})]}),"\n",(0,i.jsx)(n.p,{children:"elements's types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../ScriptContext/PScriptPurpose",children:(0,i.jsx)(n.code,{children:"PScriptPurpose"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"data"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"datums",children:(0,i.jsx)(n.code,{children:"datums"})}),"\n",(0,i.jsx)(n.p,{children:"Map of datums identified by their hashes"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"map( PDatumHash.type, data )"})]}),"\n",(0,i.jsx)(n.p,{children:"elements's types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../V1/ScriptsHashes/PDatumHash",children:(0,i.jsx)(n.code,{children:"PDatumHash"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"data"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"id",children:(0,i.jsx)(n.code,{children:"id"})}),"\n",(0,i.jsx)(n.p,{children:"The unique identifier of the transaction, used to reference and track the specific transaction on the blockchain."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/Tx/PTxId",children:(0,i.jsx)(n.code,{children:"PTxId.type"})})]}),"\n",(0,i.jsx)(n.h3,{id:"votes",children:(0,i.jsx)(n.code,{children:"votes"})}),"\n",(0,i.jsx)(n.p,{children:"Map of votes cast in the transaction"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"map( PVoter.type, map( PTxOutRef.type, PVote.type ) )"})]}),"\n",(0,i.jsx)(n.p,{children:"elements's types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../Governance/PVoter",children:(0,i.jsx)(n.code,{children:"PVoter.type"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../V1/Tx/PTxOutRef",children:(0,i.jsx)(n.code,{children:"PTxOutRef.type"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../Governance/PVote",children:(0,i.jsx)(n.code,{children:"PVote.type"})})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"proposalprocedures",children:(0,i.jsx)(n.code,{children:"proposalProcedures"})}),"\n",(0,i.jsx)(n.p,{children:"List of proposal procedures included in the transaction"}),"\n",(0,i.jsx)(n.p,{children:"type: list( PProposalProcedure.type )"}),"\n",(0,i.jsx)(n.p,{children:"elements's types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../Governance/PProposalProcedure",children:(0,i.jsx)(n.code,{children:"PProposalProcedure"})})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"currenttreasury",children:(0,i.jsx)(n.code,{children:"currentTreasury"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Current treasury amount"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PMaybe( int ).type"})]}),"\n",(0,i.jsx)(n.h3,{id:"treasurydonation",children:(0,i.jsx)(n.code,{children:"treasuryDonation"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Treasury donation amount"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PMaybe( int ).type"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>c});var i=t(11504);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);