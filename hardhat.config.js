require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0", // ✅ This is within the range >=0.7.0 <0.9.0
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};