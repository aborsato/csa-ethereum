module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    aks: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "7777",
      from: "0x87be88523441dc306e9576e485658efc63e50823"
    },
    develop: {
      port: 8545
    }
  }
};
