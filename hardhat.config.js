require("dotenv").config();
const { utils } = require("ethers");



require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-toolbox");
require("hardhat/config")



module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
  scrollTestnet:{
    url: process.env.SCROLL_TESTNET_URL || "",
    accounts: 
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
  },
  polygon_mumbai: {
    url: "https://rpc-mumbai.maticvigil.com",
    accounts: [process.env.PRIVATE_KEY]
  },
}
};



// networks: {
//   localhost: {
//     url: "http://127.0.0.1:8545/",
//     /*
//       notice no mnemonic here? it will just use account 0 of the hardhat node to deploy
//       (you can put in a mnemonic here to set the deployer locally)

//     */
//   },
//   scrollTestnet:{
//     url: process.env.SCROLL_TESTNET_URL || "",
//     accounts: 
//       process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
//   },




// export default config;