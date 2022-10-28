const Spacebear = artifacts.require("SpaceBear")

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Spacebear)
}