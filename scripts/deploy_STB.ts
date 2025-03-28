import { ethers } from "hardhat";

async function main() {
  // Retrieve the first signer, typically the default account in Hardhat, to use as the deployer.
  const [deployer] = await ethers.getSigners();
  const instanceStable = await ethers.deployContract("STB");
  await instanceStable.waitForDeployment();
  const ECT_Address = await instanceStable.getAddress();
  console.log(`ECT is deployed. ${ECT_Address}`);
}

// This pattern allows the use of async/await throughout and ensures that errors are caught and handled properly.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
