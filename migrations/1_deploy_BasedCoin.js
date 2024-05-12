const BasedCoin = artifacts.require("BasedCoin");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(BasedCoin);
};
