pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; 
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  event SetPurpose(address sender, string purpose);

  string public purpose = "Information Type";
  address public patient = 0xFd9134718c82bB8AAC90698B04beB8aab05b1DA7;
  uint public rate = 100;


  constructor() payable {
    // what should we do on deploy?
  }


  function setPurpose(string memory newPurpose, uint newRate) public payable {
      purpose = newPurpose;
      rate = newRate;
      console.log(msg.sender,"set purpose to",purpose,rate);
      emit SetPurpose(msg.sender, purpose);
  }




  // to support receiving ETH by default
  //receive() external payable {}
  //fallback() external payable {}
}
