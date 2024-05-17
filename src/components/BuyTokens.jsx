import { useState } from "react";
import { useWriteContract } from "wagmi";
const BuyTokens = () => {
  const [amount, setAmount] = useState(0);
  const { writeContract, failureReason } = useWriteContract();
  console.log(amount);

  // const callDepositLPT = async () => {
  //   try {
  //     writeContract({
  //       abi: "abi",
  //       address: "tokensale address",
  //       functionName: "buyWhitesaleTokens",
  //       args: [parseUnits(LPTAmount, 18)],
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div
      style={{
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            backgroundColor: "#90caf9",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyTokens;
