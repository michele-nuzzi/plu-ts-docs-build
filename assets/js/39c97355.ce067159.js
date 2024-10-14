"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[32864],{49432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(17624),o=t(4552);const r={sidebar_position:20},c="PGovernanceAction",d={id:"onchain/API/types/V3/Governance/PGovernanceAction",title:"PGovernanceAction",description:"Introduced in V3 version",source:"@site/docs/onchain/API/types/V3/Governance/PGovernanceAction.mdx",sourceDirName:"onchain/API/types/V3/Governance",slug:"/onchain/API/types/V3/Governance/PGovernanceAction",permalink:"/onchain/API/types/V3/Governance/PGovernanceAction",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/onchain/API/types/V3/Governance/PGovernanceAction.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"PDrep",permalink:"/onchain/API/types/V3/Governance/PDrep"},next:{title:"PProposalProcedure",permalink:"/onchain/API/types/V3/Governance/PProposalProcedure"}},s={},a=[{value:"<code>PRational</code>",id:"prational",level:2},{value:"<code>numerator</code>",id:"numerator",level:3},{value:"deno`minator",id:"denominator",level:3},{value:"<code>PConstitution</code>",id:"pconstitution",level:2},{value:"<code>constitutionScriptHash</code>",id:"constitutionscripthash",level:3},{value:"<code>PGovernanceAction</code>",id:"pgovernanceaction-1",level:2},{value:"<code>ParameterChange</code>",id:"parameterchange",level:3},{value:"<code>govActionId</code>",id:"govactionid",level:4},{value:"<code>changedParameters</code>",id:"changedparameters",level:4},{value:"<code>constitutionScriptHash</code>",id:"constitutionscripthash-1",level:4},{value:"<code>HardForkInitiation</code>",id:"hardforkinitiation",level:3},{value:"<code>govActionId</code>",id:"govactionid-1",level:4},{value:"<code>nextProtocolVersion</code>",id:"nextprotocolversion",level:4},{value:"<code>TreasuryWithdrawals</code>",id:"treasurywithdrawals",level:3},{value:"<code>withdrawals</code>",id:"withdrawals",level:4},{value:"<code>constitutionScriptHash</code>",id:"constitutionscripthash-2",level:4},{value:"<code>NoConfidence</code>",id:"noconfidence",level:3},{value:"<code>govActionId</code>",id:"govactionid-2",level:4},{value:"<code>UpdateCommittee</code>",id:"updatecommittee",level:3},{value:"<code>govActionId</code>",id:"govactionid-3",level:4},{value:"<code>removedMembers</code>",id:"removedmembers",level:4},{value:"<code>newMembers</code>",id:"newmembers",level:4},{value:"<code>newQuorum</code>",id:"newquorum",level:4},{value:"<code>NewConstitution</code>",id:"newconstitution",level:3},{value:"<code>govActionId</code>",id:"govactionid-4",level:4},{value:"<code>consitution</code>",id:"consitution",level:4},{value:"<code>cold</code>",id:"cold",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pgovernanceaction",children:(0,i.jsx)(n.code,{children:"PGovernanceAction"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Introduced in V3 version"})}),"\n",(0,i.jsx)(n.p,{children:"Definition:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export const PRational = pstruct({\n    PRational: {\n        numerator: int,\n        denominator: int\n    }\n});\n\nexport const PConstitution = pstruct({\n    PConstitution: {\n        constitutionScriptHash: PMaybe( PValidatorHash.type ).type\n    }\n});\n\nexport const PGovernanceAction = pstruct({\n    ParameterChange: {\n        govActionId: PMaybe( PTxOutRef.type ).type,\n        changedParameters: PChangedParams.type,\n        constitutionScriptHash: PMaybe( PValidatorHash.type ).type\n    },\n    HardForkInitiation: {\n        govActionId: PMaybe( PTxOutRef.type ).type,\n        nextProtocolVersion: PProtocolVersion.type\n    },\n    TreasuryWithdrawals: {\n        withdrawals: map( PCredential.type, int ),\n        constitutionScriptHash: PMaybe( PValidatorHash.type ).type\n    },\n    NoConfidence: {\n        govActionId: PMaybe( PTxOutRef.type ).type\n    },\n    UpdateCommittee: {\n        govActionId: PMaybe( PTxOutRef.type ).type,\n        removedMembers: list( PCredential.type ),\n        newMembers: map( PCredential.type, int ),\n        newQuorum: PRational.type\n    },\n    NewConstitution: {\n        govActionId: PMaybe( PTxOutRef.type ).type,\n        consitution: PConstitution.type\n    },\n    InfoAction: {}\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"prational",children:(0,i.jsx)(n.code,{children:"PRational"})}),"\n",(0,i.jsx)(n.p,{children:"This type represents a rational number in the governance system, composed of a numerator and a denominator."}),"\n",(0,i.jsx)(n.h3,{id:"numerator",children:(0,i.jsx)(n.code,{children:"numerator"})}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../../../stdlib/TermInt",children:(0,i.jsx)(n.code,{children:"TermInt"})})]}),"\n",(0,i.jsx)(n.h3,{id:"denominator",children:"deno`minator"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../../../stdlib/TermInt",children:(0,i.jsx)(n.code,{children:"TermInt"})})]}),"\n",(0,i.jsx)(n.h2,{id:"pconstitution",children:(0,i.jsx)(n.code,{children:"PConstitution"})}),"\n",(0,i.jsx)(n.p,{children:"This type represents the script hash of a constitution used in the governance system."}),"\n",(0,i.jsx)(n.h3,{id:"constitutionscripthash",children:(0,i.jsx)(n.code,{children:"constitutionScriptHash"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) A validator hash representing the constitution"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/ScriptsHashes/PValidatorHash",children:(0,i.jsx)(n.code,{children:"PMaybe( PValidatorHash.type ).type"})})]}),"\n",(0,i.jsx)(n.h2,{id:"pgovernanceaction-1",children:(0,i.jsx)(n.code,{children:"PGovernanceAction"})}),"\n",(0,i.jsx)(n.p,{children:"This structure represents various types of governance actions that can occur in Cardano."}),"\n",(0,i.jsx)(n.h3,{id:"parameterchange",children:(0,i.jsx)(n.code,{children:"ParameterChange"})}),"\n",(0,i.jsx)(n.p,{children:"Proposes changes to protocol parameters"}),"\n",(0,i.jsx)(n.h4,{id:"govactionid",children:(0,i.jsx)(n.code,{children:"govActionId"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Transaction output reference for the action"}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/Tx/PTxOutRef",children:(0,i.jsx)(n.code,{children:"PMaybe( PTxOutRef.type ).type"})})]}),"\n",(0,i.jsx)(n.h4,{id:"changedparameters",children:(0,i.jsx)(n.code,{children:"changedParameters"})}),"\n",(0,i.jsx)(n.p,{children:"A map of parameters that are being changed."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"./PChangedParams",children:(0,i.jsx)(n.code,{children:"PChangedParams.type"})})]}),"\n",(0,i.jsx)(n.h4,{id:"constitutionscripthash-1",children:(0,i.jsx)(n.code,{children:"constitutionScriptHash"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Validator hash of the constitution."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/ScriptsHashes/PValidatorHash",children:(0,i.jsx)(n.code,{children:"PMaybe( PValidatorHash.type ).type"})})]}),"\n",(0,i.jsx)(n.h3,{id:"hardforkinitiation",children:(0,i.jsx)(n.code,{children:"HardForkInitiation"})}),"\n",(0,i.jsx)(n.p,{children:"Initiates a hard fork with a new protocol version."}),"\n",(0,i.jsx)(n.h4,{id:"govactionid-1",children:(0,i.jsx)(n.code,{children:"govActionId"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Transaction output reference."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/Tx/PTxOutRef",children:(0,i.jsx)(n.code,{children:"PMaybe( PTxOutRef.type ).type"})})]}),"\n",(0,i.jsx)(n.h4,{id:"nextprotocolversion",children:(0,i.jsx)(n.code,{children:"nextProtocolVersion"})}),"\n",(0,i.jsx)(n.p,{children:"The protocol version to be implemented after the hard fork."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"./PProtocolVersion",children:(0,i.jsx)(n.code,{children:"PProtocolVersion.type"})})]}),"\n",(0,i.jsx)(n.h3,{id:"treasurywithdrawals",children:(0,i.jsx)(n.code,{children:"TreasuryWithdrawals"})}),"\n",(0,i.jsx)(n.p,{children:"Withdraws funds from the treasury."}),"\n",(0,i.jsx)(n.h4,{id:"withdrawals",children:(0,i.jsx)(n.code,{children:"withdrawals"})}),"\n",(0,i.jsx)(n.p,{children:"A map of staking credentials to withdrawal amounts."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"map( PCredential.type, int )"})]}),"\n",(0,i.jsx)(n.p,{children:"elements's types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../V1/Address/PCredential",children:(0,i.jsx)(n.code,{children:"PCredential"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../../../stdlib/TermInt",children:(0,i.jsx)(n.code,{children:"TermInt"})})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"constitutionscripthash-2",children:(0,i.jsx)(n.code,{children:"constitutionScriptHash"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Validator hash of the constitution."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/ScriptsHashes/PValidatorHash",children:(0,i.jsx)(n.code,{children:"PMaybe( PValidatorHash.type ).type"})})]}),"\n",(0,i.jsx)(n.h3,{id:"noconfidence",children:(0,i.jsx)(n.code,{children:"NoConfidence"})}),"\n",(0,i.jsx)(n.p,{children:"A vote of no confidence."}),"\n",(0,i.jsx)(n.h4,{id:"govactionid-2",children:(0,i.jsx)(n.code,{children:"govActionId"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Transaction output reference."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/Tx/PTxOutRef",children:(0,i.jsx)(n.code,{children:"PMaybe( PTxOutRef.type ).type"})})]}),"\n",(0,i.jsx)(n.h3,{id:"updatecommittee",children:(0,i.jsx)(n.code,{children:"UpdateCommittee"})}),"\n",(0,i.jsx)(n.p,{children:"Updates the governance committee."}),"\n",(0,i.jsx)(n.h4,{id:"govactionid-3",children:(0,i.jsx)(n.code,{children:"govActionId"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Transaction output reference."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/Tx/PTxOutRef",children:(0,i.jsx)(n.code,{children:"PMaybe( PTxOutRef.type ).type"})})]}),"\n",(0,i.jsx)(n.h4,{id:"removedmembers",children:(0,i.jsx)(n.code,{children:"removedMembers"})}),"\n",(0,i.jsx)(n.p,{children:"A list of committee members being removed."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"list( PCredential.type )"})]}),"\n",(0,i.jsx)(n.p,{children:"elements's types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../V1/Address/PCredential",children:(0,i.jsx)(n.code,{children:"PCredential"})})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"newmembers",children:(0,i.jsx)(n.code,{children:"newMembers"})}),"\n",(0,i.jsx)(n.p,{children:"A map of new members with their credentials."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"map( PCredential.type, int )"})]}),"\n",(0,i.jsx)(n.p,{children:"elements's types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../V1/Address/PCredential",children:(0,i.jsx)(n.code,{children:"PCredential"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../../../stdlib/TermInt",children:(0,i.jsx)(n.code,{children:"TermInt"})})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"newquorum",children:(0,i.jsx)(n.code,{children:"newQuorum"})}),"\n",(0,i.jsx)(n.p,{children:"A rational number representing the new quorum."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PRational.type"})]}),"\n",(0,i.jsx)(n.h3,{id:"newconstitution",children:(0,i.jsx)(n.code,{children:"NewConstitution"})}),"\n",(0,i.jsx)(n.p,{children:"Proposes a new constitution."}),"\n",(0,i.jsx)(n.h4,{id:"govactionid-4",children:(0,i.jsx)(n.code,{children:"govActionId"})}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Transaction output reference."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.a,{href:"../../V1/Tx/PTxOutRef",children:(0,i.jsx)(n.code,{children:"PMaybe( PTxOutRef.type ).type"})})]}),"\n",(0,i.jsx)(n.h4,{id:"consitution",children:(0,i.jsx)(n.code,{children:"consitution"})}),"\n",(0,i.jsx)(n.p,{children:"The proposed new constitution."}),"\n",(0,i.jsxs)(n.p,{children:["type: ",(0,i.jsx)(n.code,{children:"PConstitution.type"})]}),"\n",(0,i.jsx)(n.h3,{id:"cold",children:(0,i.jsx)(n.code,{children:"cold"})}),"\n",(0,i.jsx)(n.p,{children:"Represents a governance action with no significant data (used for informational purposes)."})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>c});var i=t(11504);const o={},r=i.createContext(o);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);