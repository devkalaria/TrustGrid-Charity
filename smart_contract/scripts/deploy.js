const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Network:", hre.network.name);
  console.log("Transactions address:", transactionsContract.address);

  // If we're on a local development network, we'll run the script that deploys mocks
  if (hre.network.name === "hardhat") {
    console.log("\nDeploying to local network...");
    console.log("\nYou can now interact with the contract using the following account:");
    const [deployer] = await hre.ethers.getSigners();
    console.log("Account address:", deployer.address);
    console.log("Account balance:", hre.ethers.utils.formatEther(await deployer.getBalance()));
  }
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();