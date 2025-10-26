import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TrustBallotModule = buildModule("TrustBallotModule", (m) => {
  const trustBallot = m.contract("TrustBallot");

  return { trustBallallot: trustBallot };
});

export default TrustBallotModule;
