const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("My Dapp", function () {
  let myContract;

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("YourContract", function () {
    it("Should deploy YourContract", async function () {
      const YourContract = await ethers.getContractFactory("YourContract");

      myContract = await YourContract.deploy();
    });

    describe("setPurpose()", function () {
      it("Should be able to set a new purpose", async function () {
        const newPurpose = "Test Purpose";
        const newRate = 100;
        await myContract.setPurpose(newPurpose);
        await myContract.setRate(newRate);
        expect(await myContract.purpose()).to.equal(newPurpose);
        expect(await myContract.rate()).to.equal(newRate);
      });

      it("Should emit a SetPurpose event ", async function () {
        const [owner] = await ethers.getSigners();

        const newPurpose = "Another Test Purpose";
        const newRate = "200"
        expect(await myContract.setPurpose(newPurpose))
        expect(await myContract.setRate(newRate))
          .to.emit(myContract, "SetPurpose")
          .withArgs(owner.address, newPurpose);
      });
    });
  });
});
