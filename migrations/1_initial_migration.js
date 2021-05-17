const Migrations = artifacts.require("Migrations");
const SimpleWallet = artifacts.require("SimpleWallet");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SimpleWallet);
};
