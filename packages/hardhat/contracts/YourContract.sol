pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; 
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  event SetPurpose(address sender, uint purpose);

  unit public purpose = 100;
  address public owner = 0xFd9134718c82bB8AAC90698B04beB8aab05b1DA7;


  constructor() payable {
    // what should we do on deploy?
  }

  function setPurpose(uint memory newPurpose) public payable {
      purpose = newPurpose;
    //  console.log(msg.sender,"set purpose to",purpose);
      emit SetPurpose(msg.sender, purpose);
  }






  // function setHeartRate






  // function setValue(string memory newValue) public payable {
  //     value = newValue;
  //     console.log(msg.sender,"set heartrate value to",value);
  //     emit SetValue(msg.sender, value);
  // }

// contract YourContract{

  


  // function setValue(string memory newPurpose) public payable {
  //     purpose = newPurpose;
  //     console.log(msg.sender,"set purpose to",purpose);
  //     emit SetPurpose(msg.sender, purpose);
  // }



// function setMessage(){
//   ///  WHEN THE APPLE API READS HEART RATE OVER A CERTAIN AMOUNT THEN SEND A NOTIFICATION
//   ///
// }

// function setUserInfo(){

// //// patient information
// /// use zkScroll to verify/only send certain info
// }


// how do i set when to deploy a contract? i want the contract do be deployed
// and info sent BASED ON THE API INFORMATION







  // to support receiving ETH by default
  //receive() external payable {}
  //fallback() external payable {}
}