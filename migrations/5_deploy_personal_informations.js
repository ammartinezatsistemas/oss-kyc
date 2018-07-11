const PersonalInformations = artifacts.require('./PersonalInformations.sol'),
    Organizations = artifacts.require('./Organizations.sol');
const zcbc = require('zcom-blockchain-cp');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(PersonalInformations, Organizations.address).then(() => {
        return zcbc.saveContractToFile('PersonalInformation', PersonalInformations.address, JSON.stringify(PersonalInformations.abi));
    });
}