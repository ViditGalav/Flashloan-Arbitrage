require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {

    compilers: [
      { version: "0.5.5" },
      { version: "0.6.6" },
      { version: "0.8.8" },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://bscrpc.com	39518956",
        blockNumber: 39518956,
      },
    },
  },
};

