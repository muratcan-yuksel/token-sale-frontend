import { useState } from "react";
import { useWriteContract } from "wagmi";
const BuyTokens = () => {
  const [amount, setAmount] = useState(0);
  const { writeContract, failureReason } = useWriteContract();
  console.log(amount);

  const callDepositLPT = async () => {
    try {
      writeContract({
        abi: "abi",
        address: "tokensale address",
        functionName: "buyWhitesaleTokens",
        args: [parseUnits(LPTAmount, 18)],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: "300px" }}>
      <h2>Buy Tokens</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button>Buy</button>
      </div>
    </div>
  );
};

export default BuyTokens;
