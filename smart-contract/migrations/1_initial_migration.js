const Web3 = require('web3');
const TruffleConfig = require('../truffle-config');
var Migrations = artifacts.require("Migrations");

module.exports = function (deployer, network, addresses) {
  const config = TruffleConfig.networks[network];

  if (process.env.ACCOUNT_PASSWORD) {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://' + config.host + ':' + config.port));

    console.log('>> Unlocking account ' + config.from);
    web3.eth.personal.unlockAccount(config.from, process.env.ACCOUNT_PASSWORD, 0);
  }

  console.log('>> Deploying migration');
  deployer.deploy(Migrations);
};
