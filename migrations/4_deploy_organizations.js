const Organizations = artifacts.require('./Organizations.sol');
const zcbc = require('zcom-blockchain-cp');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(Organizations).then(() => {
        return zcbc.saveContractToFile('Organization', Organizations.address, JSON.stringify(Organizations.abi));
    });
}