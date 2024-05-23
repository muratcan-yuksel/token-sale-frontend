import { useState } from "react";
import { useWriteContract, useDisconnect, useReadContract } from "wagmi";
import { parseEther, parseUnits } from "viem";
import { awtokenAbi, awtokenAddress } from "../ABI/awtokenAbi.js";
import { tokensaleAddress, tokensaleAbi } from "../ABI/tokensaleAbi.js";

const Owner = () => {
  const { writeContract, status } = useWriteContract();

  const toggleWhitelistSaleActive = async () => {
    try {
      writeContract({
        abi: tokensaleAbi,
        address: tokensaleAddress,
        functionName: "toggleWhitelistSaleActive",
        // args: [parseUnits(LPTAmount, 18)],
      });
      if (status === "success") {
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const pauseStatus = useReadContract({
  //   abi: tokensaleAbi,
  //   address: tokensaleAddress,
  //   functionName: "getPaused",
  // });

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            minWidth: "200px",
            textAlign: "start",
            margin: "5px 5px",
          }}
        >
          toggleWhitelistSaleActive
        </button>
        <button
          style={{
            minWidth: "200px",
            textAlign: "start",
            margin: "5px 5px",
          }}
        >
          toggleSaleActive
        </button>
        <button
          style={{
            minWidth: "200px",
            textAlign: "start",
            margin: "5px 5px",
          }}
        >
          togglePause
        </button>
        <button
          style={{
            minWidth: "200px",
            textAlign: "start",
            margin: "5px 5px",
          }}
        >
          withdrawEth
        </button>
        <button
          style={{
            minWidth: "200px",
            textAlign: "start",
            margin: "5px 5px",
          }}
        >
          withdrawToken
        </button>
      </div>
    </div>
  );
};

export default Owner;
