// "use strict";
// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// var __generator = (this && this.__generator) || function (thisArg, body) {
//     var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
//     return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
//     function verb(n) { return function (v) { return step([n, v]); }; }
//     function step(op) {
//         if (f) throw new TypeError("Generator is already executing.");
//         while (_) try {
//             if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
//             if (y = 0, t) op = [op[0] & 2, t.value];
//             switch (op[0]) {
//                 case 0: case 1: t = op; break;
//                 case 4: _.label++; return { value: op[1], done: false };
//                 case 5: _.label++; y = op[1]; op = [0]; continue;
//                 case 7: op = _.ops.pop(); _.trys.pop(); continue;
//                 default:
//                     if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
//                     if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
//                     if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
//                     if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
//                     if (t[2]) _.ops.pop();
//                     _.trys.pop(); continue;
//             }
//             op = body.call(thisArg, _);
//         } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
//         if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
//     }
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// var hardhat_1 = require("hardhat");
// function main() {
//     return __awaiter(this, void 0, void 0, function () {
//         var currentTimestampInSeconds, ONE_YEAR_IN_SECS, unlockTime, lockedAmount, Lock, lock;
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0:
//                     currentTimestampInSeconds = Math.round(Date.now() / 1000);
//                     ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//                     unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
//                     lockedAmount = hardhat_1.ethers.utils.parseEther("0.00000001");
//                     return [4 /*yield*/, hardhat_1.ethers.getContractFactory("Lock")];
//                 case 1:
//                     Lock = _a.sent();
//                     return [4 /*yield*/, Lock.deploy(unlockTime, { value: lockedAmount })];
//                 case 2:
//                     lock = _a.sent();
//                     return [4 /*yield*/, lock.deployed()];
//                 case 3:
//                     _a.sent();
//                     console.log("Lock with 0.00000001 ETH and unlock timestamp ".concat(unlockTime, " deployed to ").concat(lock.address));
//                     // console.log(`Block explorer URL: https://l2scan.scroll.io/address/${lock.address}`); Uncomment here to use the pre-alpha
//                     console.log("Block explorer URL: https://blockscout.scroll.io/address/".concat(lock.address));
//                     return [2 /*return*/];
//             }
//         });
//     });
// }
// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch(function (error) {
//     console.error(error);
//     process.exitCode = 1;
// });







// const {ether} = require("hardhat");


// const main = async () => {
//     const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//     const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//     const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
  
//     const lockedAmount = ethers.utils.parseEther("0.00000001");
  
//     const Lock = await ethers.getContractFactory("Lock");
//     const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//     await lock(deployed);

//     console.log(`Lock with 0.00000001 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
//     // console.log(`Block explorer URL: https://l2scan.scroll.io/address/${lock.address}`); Uncomment here to use the pre-alpha
//     console.log(`Block explorer URL: https://blockscout.scroll.io/address/${lock.address}`);

// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);

// });



// /* eslint no-use-before-define: "warn" */
// const fs = require("fs");
// const chalk = require("chalk");
// const { config, ethers, tenderly, run } = require("hardhat");
// const { utils } = require("ethers");
// const R = require("ramda");

// /*

//  _______ _________ _______  _______
// (  ____ \\__   __/(  ___  )(  ____ )
// | (    \/   ) (   | (   ) || (    )|
// | (_____    | |   | |   | || (____)|
// (_____  )   | |   | |   | ||  _____)
//       ) |   | |   | |   | || (
// /\____) |   | |   | (___) || )
// \_______)   )_(   (_______)|/

// This deploy script is no longer in use, but is left for reference purposes!

// scaffold-eth now uses hardhat-deploy to manage deployments, see the /deploy folder
// And learn more here: https://www.npmjs.com/package/hardhat-deploy

// */

// const main = async () => {
//   console.log("\n\n 📡 Deploying...\n");

//   const yourContract = await deploy("YourContract"); // <-- add in constructor args like line 19 vvvv
//   // use for local token bridging
//   // const mockToken = await deploy("MockERC20") // <-- add in constructor args like line 19 vvvv

//   //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
//   //const secondContract = await deploy("SecondContract")

//   // const exampleToken = await deploy("ExampleToken")
//   // const examplePriceOracle = await deploy("ExamplePriceOracle")
//   // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])

//   /*
//   //If you want to send value to an address from the deployer
//   const deployerWallet = ethers.provider.getSigner()
//   await deployerWallet.sendTransaction({
//     to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
//     value: ethers.utils.parseEther("0.001")
//   })
//   */

//   /*
//   //If you want to send some ETH to a contract on deploy (make your constructor payable!)
//   const yourContract = await deploy("YourContract", [], {
//   value: ethers.utils.parseEther("0.05")
//   });
//   */

//   /*
//   //If you want to link a library into your contract:
//   // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
//   const yourContract = await deploy("YourContract", [], {}, {
//    LibraryName: **LibraryAddress**
//   });
//   */

//   //If you want to verify your contract on tenderly.co (see setup details in the scaffold-eth README!)
//   /*
//   await tenderlyVerify(
//     {contractName: "YourContract",
//      contractAddress: yourContract.address
//   })
//   */

//   console.log(
//     " 💾  Artifacts (address, abi, and args) saved to: ",
//     chalk.blue("packages/hardhat/artifacts/"),
//     "\n\n"
//   );
// };

// const deploy = async (
//   contractName,
//   _args = [],
//   overrides = {},
//   libraries = {}
// ) => {
//   console.log(` 🛰  Deploying: ${contractName}`);

//   const contractArgs = _args || [];
//   const contractArtifacts = await ethers.getContractFactory(contractName, {
//     libraries: libraries,
//   });
//   const deployed = await contractArtifacts.deploy(...contractArgs, overrides);
//   const encoded = abiEncodeArgs(deployed, contractArgs);
//   fs.writeFileSync(`artifacts/${contractName}.address`, deployed.address);

//   let extraGasInfo = "";
//   if (deployed && deployed.deployTransaction) {
//     const gasUsed = deployed.deployTransaction.gasLimit.mul(
//       deployed.deployTransaction.gasPrice
//     );
//     extraGasInfo = `${utils.formatEther(gasUsed)} ETH, tx hash ${
//       deployed.deployTransaction.hash
//     }`;
//   }

//   console.log(
//     " 📄",
//     chalk.cyan(contractName),
//     "deployed to:",
//     chalk.magenta(deployed.address)
//   );
//   console.log(" ⛽", chalk.grey(extraGasInfo));

//   await tenderly.persistArtifacts({
//     name: contractName,
//     address: deployed.address,
//   });

//   if (!encoded || encoded.length <= 2) return deployed;
//   fs.writeFileSync(`artifacts/${contractName}.args`, encoded.slice(2));

//   return deployed;
// };

// // ------ utils -------

// // abi encodes contract arguments
// // useful when you want to manually verify the contracts
// // for example, on Etherscan
// const abiEncodeArgs = (deployed, contractArgs) => {
//   // not writing abi encoded args if this does not pass
//   if (
//     !contractArgs ||
//     !deployed ||
//     !R.hasPath(["interface", "deploy"], deployed)
//   ) {
//     return "";
//   }
//   const encoded = utils.defaultAbiCoder.encode(
//     deployed.interface.deploy.inputs,
//     contractArgs
//   );
//   return encoded;
// };

// // checks if it is a Solidity file
// const isSolidity = (fileName) =>
//   fileName.indexOf(".sol") >= 0 &&
//   fileName.indexOf(".swp") < 0 &&
//   fileName.indexOf(".swap") < 0;

// const readArgsFile = (contractName) => {
//   let args = [];
//   try {
//     const argsFile = `./contracts/${contractName}.args`;
//     if (!fs.existsSync(argsFile)) return args;
//     args = JSON.parse(fs.readFileSync(argsFile));
//   } catch (e) {
//     console.log(e);
//   }
//   return args;
// };

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// // If you want to verify on https://tenderly.co/
// const tenderlyVerify = async ({ contractName, contractAddress }) => {
//   let tenderlyNetworks = [
//     "kovan",
//     "goerli",
//     "mainnet",
//     "rinkeby",
//     "ropsten",
//     "matic",
//     "mumbai",
//     "xDai",
//     "POA",
//   ];
//   let targetNetwork = process.env.HARDHAT_NETWORK || config.defaultNetwork;

//   if (tenderlyNetworks.includes(targetNetwork)) {
//     console.log(
//       chalk.blue(
//         ` 📁 Attempting tenderly verification of ${contractName} on ${targetNetwork}`
//       )
//     );

//     await tenderly.persistArtifacts({
//       name: contractName,
//       address: contractAddress,
//     });

//     let verification = await tenderly.verify({
//       name: contractName,
//       address: contractAddress,
//       network: targetNetwork,
//     });

//     return verification;
//   } else {
//     console.log(
//       chalk.grey(` 🧐 Contract verification not supported on ${targetNetwork}`)
//     );
//   }
// };

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
