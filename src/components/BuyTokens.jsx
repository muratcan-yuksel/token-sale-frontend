import { useState } from "react";
import { useWriteContract, useDisconnect, useReadContract } from "wagmi";
import { parseEther, parseUnits } from "viem";
import { awtokenAbi, awtokenAddress } from "../ABI/awtokenAbi.js";
import { tokensaleAddress, tokensaleAbi } from "../ABI/tokensaleAbi.js";
const BuyTokens = () => {
  const [amount, setAmount] = useState(0);
  const { writeContract, failureReason } = useWriteContract();
  const { disconnect } = useDisconnect();
  console.log(amount);

  const tokensSold = useReadContract({
    abi: tokensaleAbi,
    address: tokensaleAddress,
    functionName: "getTokenSold",
  });

  async function calculateTokensLeft() {
    try {
      return 100 - tokensSold?.data;
    } catch (error) {
      console.log(error);
    }
  }

  const whitesaleStatus = useReadContract({
    abi: tokensaleAbi,
    address: tokensaleAddress,
    functionName: "isWhitelistSaleActive",
  });
  console.log(whitesaleStatus.data);

  const saleStatus = useReadContract({
    abi: tokensaleAbi,
    address: tokensaleAddress,
    functionName: "isSaleActive",
  });

  const tokenPrice = useReadContract({
    abi: tokensaleAbi,
    address: tokensaleAddress,
    functionName: "getTokenPrice",
  });
  // console.log((tokenPrice?.data).toString());

  const pauseStatus = useReadContract({
    abi: tokensaleAbi,
    address: tokensaleAddress,
    functionName: "getPaused",
  });

  const callBuyWhitesaleTokens = async () => {
    try {
      writeContract({
        abi: tokensaleAbi,
        address: tokensaleAddress,
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
        abi: tokensaleAbi,
        address: tokensaleAddress,
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
      {tokenPrice?.data !== undefined && (
        <h2>Buy Tokens for {(tokenPrice?.data).toString()} ETH</h2>
      )}
      {tokensSold?.data !== undefined && (
        <h3>Tokens Sold: {(tokensSold?.data).toString()} / 100 </h3>
      )}
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
        {whitesaleStatus?.data ? (
          <h2>Whitesale is active</h2>
        ) : (
          <h2>Whitesale is inactive</h2>
        )}
      </div>
    </div>
  );
};

export default BuyTokens;
