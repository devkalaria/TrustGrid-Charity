import abi from "./Transactions.json";

export const donationAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Use MetaMask's provider directly
export const ethereumNetworkConfig = {
  networkName: "MetaMask Network",
  chainId: 1, // This will be overridden by MetaMask
  currencySymbol: "ETH"
};
export const contractABI = abi.abi;
