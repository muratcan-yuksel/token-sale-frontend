import { useState } from "react";
import { useWriteContract, useDisconnect } from "wagmi";
import { awtokenAbi, awtokenAddress } from "../ABI/awtokenAbi.js";
import { tokensaleAddress, tokensaleAbi } from "../ABI/tokensaleAbi.js";
const BuyTokens = () => {
  const [amount, setAmount] = useState(0);
  const { writeContract, failureReason } = useWriteContract();
  const { disconnect } = useDisconnect();
  console.log(amount);

  const callBuyWhitesaleTokens = async () => {
    try {
      writeContract({
        abi: "abi",
        address: "tokensale address",
        functionName: "buyWhitesaleTokens",
        // args: [parseUnits(LPTAmount, 18)],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const callBuyTokens = async () => {
    try {
      writeContract({
        abi: "abi",
        address: "tokensale address",
        functionName: "buyTokens",
        // args: [parseUnits(LPTAmount, 18)],
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          type="number"
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
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            backgroundColor: "#d62f2f",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
          }}
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default BuyTokens;
