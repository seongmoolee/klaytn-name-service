const Caver = require("caver-js");

const JSON_RPC_PROVIDER = "https://klaytn04.fandom.finance" // JSON-RPC provider url
const REVERSE_RECORDS_ADDRESS = "0x87f4483E4157a6592dd1d1546f145B5EE22c790a";
const REVERSE_RECORDS_ABI = [
  {
    type: "function",
    name: "getName",
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
  },
];

async function domainOrAddressCaver(address) {
  const caver = new Caver(JSON_RPC_PROVIDER);
  const reverseRecords = new caver.klay.Contract(REVERSE_RECORDS_ABI, REVERSE_RECORDS_ADDRESS);
  const domain = await reverseRecords.methods.getName(address).call();
  if (domain === "") {
    return address;
  } else {
    console.log(domain);
    return domain;
  }
}
domainOrAddressCaver("0x0000ac03932ff48ee30209774e3f10fb0ac522e9");