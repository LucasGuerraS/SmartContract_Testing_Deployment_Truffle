const Spacebear = artifacts.require("SpaceBear");
const truffleAssertions = require("truffle-assertions");

contract("SpaceBear", (accounts) => {
  it("Should credit a NFT to a specific account", async () => {
    const spaceBear = await Spacebear.deployed();
    let txResult = await spaceBear.safeMint(accounts[1], "spacebear_1.json");
    truffleAssertions.eventEmitted(txResult, "Transfer", {
      from: "0x0000000000000000000000000000000000000000",
      to: accounts[1],
      tokenId: web3.utils.toBN("0"),
    });
    assert.equal(
      await spaceBear.ownerOf(0),
      accounts[1],
      "Owner of token 1 is not euqal to account 2"
    );
  });
});
