require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// change these for different networks
const polygonMumbai_URL = `https://polygon-mumbai.g.alchemy.com/v2/${POLYGONSCAN_API_KEY}`;
// const POLYGON_URL = `https://polygon-mainnet.g.alchemy.com/v2/${POLYGONSCAN_API_KEY}`;
// const SEPOLIA_URL = `https://eth-sepolia.g.alchemy.com/v2/${ETHERSCAN_API_KEY}`;
// const MAINNET_URL = `https://eth-mainnet.g.alchemy.com/v2/${ETHERSCAN_API_KEY}`;

// const polygonMumbai_URL = `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
// const polygon_URL = `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
// const sepolia_URL = `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
// const mainnet_URL = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

const STUNT_WALLET_PRIVATE_KEY = process.env.STUNT_WALLET_PRIVATE_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      sepolia: ETHERSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY,
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
    outputFile: "gas-report.txt",
    noColors: true,
  },
  defaultNetwork: "polygonMumbai", // hardhat for testing, change this for different networks
  networks: {
    hardhat: {
      chainId: 31337,
    },
    polygonMumbai: {
      url: polygonMumbai_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      gasPrice: 35000000000,
      chainId: 80001,
    },
    polygon: {
      url: POLYGON_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      gasPrice: 35000000000,
      chainId: 137,
    },
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      gasPrice: 35000000000,
      chainId: 11155111,
    },
    ethereum: {
      url: MAINNET_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      gasPrice: 35000000000,
      chainId: 1,
    },
  },
  solidity: {
    version: "0.8.20", // use an exact version here and in contract to avoid verification problems
    settings: {
      optimizer: {
        enabled: false, // may cause verification problems if true
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};