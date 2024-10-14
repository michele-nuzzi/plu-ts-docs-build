"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[80392],{23868:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var d=i(17624),t=i(4552);const r={title:"buildSync",sidebar_position:1},s=void 0,a={id:"offchain/TxBuilder API/buildSync",title:"buildSync",description:"ITxBuildArgs",source:"@site/docs/offchain/TxBuilder API/buildSync.mdx",sourceDirName:"offchain/TxBuilder API",slug:"/offchain/TxBuilder API/buildSync",permalink:"/offchain/TxBuilder API/buildSync",draft:!1,unlisted:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts-docs/docs/offchain/TxBuilder API/buildSync.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"buildSync",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TxBuilder",permalink:"/offchain/TxBuilder API/TxBuilder"},next:{title:"runWithProvider",permalink:"/offchain/TxBuilder API/runWithProvider"}},c={},l=[{value:"<code>ITxBuildArgs</code>",id:"itxbuildargs",level:2},{value:"<code>inputs</code>",id:"inputs",level:3},{value:"<code>utxo</code>",id:"utxo",level:4},{value:"<code>changeAddress</code>",id:"changeaddress",level:3},{value:"<code>change</code>",id:"change",level:3},{value:"<code>outputs</code>",id:"outputs",level:3},{value:"<code>readonlyRefInputs</code>",id:"readonlyrefinputs",level:3},{value:"<code>requiredSigners</code>",id:"requiredsigners",level:3},{value:"<code>collaterals</code>",id:"collaterals",level:3},{value:"<code>collateralReturn</code>",id:"collateralreturn",level:3},{value:"<code>mints</code>",id:"mints",level:3},{value:"<code>invalidBefore</code>",id:"invalidbefore",level:3},{value:"<code>invalidAfter</code>",id:"invalidafter",level:3},{value:"<code>certificates</code>",id:"certificates",level:3},{value:"<code>certificates</code>",id:"certificates-1",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>protocolUpdateProposal</code>",id:"protocolupdateproposal",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"itxbuildargs",children:(0,d.jsx)(n.code,{children:"ITxBuildArgs"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ITxBuildArgs {\n    inputs: [ ITxBuildInput, ...ITxBuildInput[] ], // TxBuildInput[] with length >= 1\n    changeAddress?: Address | AddressStr,\n    change?: ChangeInfos;\n    outputs?: ITxBuildOutput[],\n    readonlyRefInputs?: UTxO[],\n    requiredSigners?: PubKeyHash[],\n    collaterals?: UTxO[],\n    collateralReturn?: ITxBuildOutput,\n    mints?: ITxBuildMint[],\n    invalidBefore?: CanBeUInteger,\n    invalidAfter?: CanBeUInteger,\n    certificates?: ITxBuildCert[],\n    withdrawals?: ITxBuildWithdrawal[],\n    metadata?: TxMetadata,\n    protocolUpdateProposal?: ProtocolUpdateProposal\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ITxBuildArgs"})," is the interface that is used by ",(0,d.jsx)(n.code,{children:"txBuilder.buildSync"})," to understand how to build a ",(0,d.jsx)(n.code,{children:"Tx"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The reuired arguments are ",(0,d.jsx)(n.a,{href:"#inputs",children:(0,d.jsx)(n.code,{children:"inputs"})}),"\nand either a ",(0,d.jsx)(n.a,{href:"#change",children:(0,d.jsx)(n.code,{children:"change"})})," output\nor only a ",(0,d.jsx)(n.a,{href:"#changeaddress",children:(0,d.jsx)(n.code,{children:"changeAddress"})}),"\nneeded for automatic fee calculation."]}),"\n",(0,d.jsx)(n.p,{children:"all the remaining fields are optional."}),"\n",(0,d.jsxs)(n.admonition,{type:"info",children:[(0,d.jsxs)(n.mdxAdmonitionTitle,{children:["optional ",(0,d.jsx)(n.code,{children:"outputs"})]}),(0,d.jsxs)(n.p,{children:["the ",(0,d.jsx)(n.code,{children:"outputs"})," is optional too"]}),(0,d.jsxs)(n.p,{children:["if no ",(0,d.jsx)(n.code,{children:"outputs"})," are specified all the input value is sent back to ",(0,d.jsx)(n.code,{children:"change.address"}),"\n(or ",(0,d.jsx)(n.code,{children:"changeAddress"})," if no ",(0,d.jsx)(n.code,{children:"change"})," is specified);"]})]}),"\n",(0,d.jsx)(n.h3,{id:"inputs",children:(0,d.jsx)(n.code,{children:"inputs"})}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"ITxBuildInput[]"})]}),"\n",(0,d.jsxs)(n.p,{children:["a single input is described using ",(0,d.jsx)(n.code,{children:"ITxBuildInput"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:'interface ITxBuildInput {\n    utxo: UTxO,\n    referenceScriptV2?: {\n        refUtxo: UTxO,\n        datum: CanBeData | "inline",\n        redeemer: CanBeData,\n    }\n    inputScript?: {\n        script: Script,\n        datum: CanBeData | "inline",\n        redeemer: CanBeData\n    }\n}\n'})}),"\n",(0,d.jsx)(n.h4,{id:"utxo",children:(0,d.jsx)(n.code,{children:"utxo"})}),"\n",(0,d.jsxs)(n.p,{children:["required field, expects an instance of ",(0,d.jsx)(n.a,{href:"../cardano-ledger-ts/classes/UTxO",children:(0,d.jsx)(n.code,{children:"UTxO"})})]}),"\n",(0,d.jsx)(n.h3,{id:"changeaddress",children:(0,d.jsx)(n.code,{children:"changeAddress"})}),"\n",(0,d.jsxs)(n.p,{children:["an instance of ",(0,d.jsx)(n.code,{children:"Address"})," or a bech32 encoded address (starting with ",(0,d.jsx)(n.code,{children:'"addr1"'})," or ",(0,d.jsx)(n.code,{children:'"addr_test1"'})," if in testnet);"]}),"\n",(0,d.jsxs)(n.p,{children:["will add an output to the specified address (in the ",(0,d.jsx)(n.strong,{children:"last"})," position in tx outputs ordering)."]}),"\n",(0,d.jsx)(n.h3,{id:"change",children:(0,d.jsx)(n.code,{children:"change"})}),"\n",(0,d.jsxs)(n.p,{children:["like ",(0,d.jsx)(n.code,{children:"changeAddress"})," but with more control over the output"]}),"\n",(0,d.jsxs)(n.p,{children:["it also allows to set a ",(0,d.jsx)(n.code,{children:"datum"})," and a ",(0,d.jsx)(n.code,{children:"refScript"})," for the output"]}),"\n",(0,d.jsxs)(n.p,{children:["of course no value can be specified as it is calculated by the ",(0,d.jsx)(n.code,{children:"TxBuilder"})]}),"\n",(0,d.jsx)(n.h3,{id:"outputs",children:(0,d.jsx)(n.code,{children:"outputs"})}),"\n",(0,d.jsxs)(n.p,{children:["an output is described using ",(0,d.jsx)(n.code,{children:"ITxBuildOutput"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ITxBuildOutput {\n    address: Address,\n    value: Value,\n    datum?: Hash32 | CanBeData\n    refScript?: Script\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["it requires an ",(0,d.jsx)(n.code,{children:"Address"})," and a ",(0,d.jsx)(n.code,{children:"Value"}),";"]}),"\n",(0,d.jsxs)(n.p,{children:["optionally a ",(0,d.jsx)(n.code,{children:"datum"})," which can be either an ",(0,d.jsx)(n.code,{children:"Hash32"}),", anything ",(0,d.jsx)(n.code,{children:"Data"}),"-like. or ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n",(0,d.jsxs)(n.p,{children:["if ",(0,d.jsx)(n.code,{children:"undefined"})," no datum is attached.\nif instance of ",(0,d.jsx)(n.code,{children:"Hash32"})," the hash is attached in Plutus V1 style\nif anything ",(0,d.jsx)(n.code,{children:"Data"}),"-like an ",(0,d.jsx)(n.strong,{children:"inline"})," datum is attached (",(0,d.jsx)(n.a,{href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0032",children:"CIP-0032"}),")"]}),"\n",(0,d.jsxs)(n.p,{children:["and the optional ",(0,d.jsx)(n.code,{children:"refScript"})]}),"\n",(0,d.jsxs)(n.p,{children:["if ",(0,d.jsx)(n.code,{children:"undefined"})," no script is attached.\nif instance of ",(0,d.jsx)(n.code,{children:"Script"}),", the script is attached to the resulting ",(0,d.jsx)(n.code,{children:"UTxO"})," (",(0,d.jsx)(n.a,{href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0033",children:"CIP-0033"}),")"]}),"\n",(0,d.jsx)(n.h3,{id:"readonlyrefinputs",children:(0,d.jsx)(n.code,{children:"readonlyRefInputs"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"UTxO[]\n"})}),"\n",(0,d.jsxs)(n.p,{children:["any addtional reference inputs ",(0,d.jsx)(n.a,{href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0031",children:"CIP-0031"})]}),"\n",(0,d.jsx)(n.h3,{id:"requiredsigners",children:(0,d.jsx)(n.code,{children:"requiredSigners"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"PubKeyHash[]\n"})}),"\n",(0,d.jsx)(n.p,{children:"set of signers required by the transaction."}),"\n",(0,d.jsxs)(n.p,{children:["this field is the one esposed in the ",(0,d.jsx)(n.code,{children:"ScriptContext"})," of a smart contract"]}),"\n",(0,d.jsx)(n.h3,{id:"collaterals",children:(0,d.jsx)(n.code,{children:"collaterals"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"UTxO[]\n"})}),"\n",(0,d.jsx)(n.p,{children:"collateral inputs needed for smart contract validation."}),"\n",(0,d.jsx)(n.h3,{id:"collateralreturn",children:(0,d.jsx)(n.code,{children:"collateralReturn"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"ITxBuildOutput[]\n"})}),"\n",(0,d.jsxs)(n.p,{children:["outputs specifying the return value from ",(0,d.jsx)(n.code,{children:"collaterals"})]}),"\n",(0,d.jsx)(n.h3,{id:"mints",children:(0,d.jsx)(n.code,{children:"mints"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ITxBuildMint {\n    value: Value\n    script: {\n        inline: Script\n        policyId: Hash32\n        redeemer: CanBeData\n    } | {\n        ref: UTxO\n        policyId: Hash32\n        redeemer: CanBeData\n    }\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"array of tokens to be minted or burned and respective minting policies."}),"\n",(0,d.jsx)(n.admonition,{type:"caution",children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"value"})," MUST have a single entry"]})}),"\n",(0,d.jsx)(n.h3,{id:"invalidbefore",children:(0,d.jsx)(n.code,{children:"invalidBefore"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type CanBeUInteger = number | bigint\n"})}),"\n",(0,d.jsx)(n.p,{children:"the slot number after wich the transaction can be submited."}),"\n",(0,d.jsx)(n.h3,{id:"invalidafter",children:(0,d.jsx)(n.code,{children:"invalidAfter"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type CanBeUInteger = number | bigint\n"})}),"\n",(0,d.jsx)(n.p,{children:"the slot number after wich the transaction can is rejected."}),"\n",(0,d.jsx)(n.h3,{id:"certificates",children:(0,d.jsx)(n.code,{children:"certificates"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ITxBuildCert {\n    cert: AnyCertificate\n    script?: {\n        inline: Script\n        redeemer: CanBeData\n    } | {\n        ref: UTxO\n        redeemer: CanBeData\n    }\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"array of certificates to include in the transaction and respective (optional) stake validator scripts"}),"\n",(0,d.jsx)(n.h3,{id:"certificates-1",children:(0,d.jsx)(n.code,{children:"certificates"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface interface ITxBuildWithdrawal {\n    withdrawal: {\n        rewardAccount: Hash28 | StakeAddress,\n        amount: Coin\n    },\n    script?: {\n        inline: Script\n        redeemer: CanBeData\n    } | {\n        ref: UTxO\n        redeemer: CanBeData\n    }\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"array of withdrawals to include in the transaction and respective (optional) stake validator scripts"}),"\n",(0,d.jsx)(n.h3,{id:"metadata",children:(0,d.jsx)(n.code,{children:"metadata"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type ITxMetadata = {\n    [metadatum_label: number | string]: TxMetadatum \n}\n\nclass TxMetadata\n{\n    constructor(metadata: ITxMetadata)\n    {\n        // ...\n    }\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"any metadata to  include in the transaction"}),"\n",(0,d.jsx)(n.h3,{id:"protocolupdateproposal",children:(0,d.jsx)(n.code,{children:"protocolUpdateProposal"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type ProtocolParametersUpdateMap = {\n    genesisHash: GenesisHash\n    changes: Partial<ProtocolParamters>\n}[]\n\ntype ProtocolUpdateProposal = [ ProtocolParametersUpdateMap, Epoch ];\n"})}),"\n",(0,d.jsx)(n.p,{children:"protocol update proposal to include in the transaciton."})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>s});var d=i(11504);const t={},r=d.createContext(t);function s(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);