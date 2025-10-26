import { network } from "hardhat";

const { ethers } = await network.connect();

async function main() {
  const TrustBallot = await ethers.getContractFactory("TrustBallot");
  const trustBallot = await TrustBallot.deploy();

  await trustBallot.waitForDeployment(); // ✅ Important for ethers v6

  console.log("TrustBallot deployed at:", await trustBallot.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});