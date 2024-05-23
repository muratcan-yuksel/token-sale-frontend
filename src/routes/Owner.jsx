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
    } catch (error) {
      console.log(error);
    }
  };
  const toggleSaleActive = async () => {
    try {
      writeContract({
        abi: tokensaleAbi,
        address: tokensaleAddress,
        functionName: "toggleSaleActive",
        // args: [parseUnits(LPTAmount, 18)],
      });
    } catch (error) {
      console.log(error);
    }
  };
  const togglePause = async () => {
    try {
      writeContract({
        abi: tokensaleAbi,
        address: tokensaleAddress,
        functionName: "togglePause",
        // args: [parseUnits(LPTAmount, 18)],
      });
    } catch (error) {
      console.log(error);
    }
  };
  const withdrawToken = async () => {
    try {
      writeContract({
        abi: tokensaleAbi,
        address: tokensaleAddress,
        functionName: "withdrawToken",
        // args: [parseUnits(LPTAmount, 18)],
      });
    } catch (error) {
      console.log(error);
    }
  };
  const withdrawEth = async () => {
    try {
      writeContract({
        abi: tokensaleAbi,
        address: tokensaleAddress,
        functionName: "withdrawEth",
        // args: [parseUnits(LPTAmount, 18)],
      });
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
          onClick={() => toggleWhitelistSaleActive()}
        >
          toggleWhitelistSaleActive
        </button>
        <button
          style={{
            minWidth: "200px",
            textAlign: "start",
            margin: "5px 5px",
          }}
          onClick={() => toggleSaleActive()}
        >
          toggleSaleActive
        </button>
        <button
          style={{
            minWidth: "200px",
            textAlign: "start",
            margin: "5px 5px",
          }}
          onClick={() => togglePause()}
        >
          togglePause
        </button>
        <button
          style={{
            minWidth: "200px",
            textAlign: "start",
            margin: "5px 5px",
          }}
          onClick={() => withdrawEth()}
        >
          withdrawEth
        </button>
        <button
          style={{
            minWidth: "200px",
            textAlign: "start",
            margin: "5px 5px",
          }}
          onClick={() => withdrawToken()}
        >
          withdrawToken
        </button>
      </div>
    </div>
  );
};

export default Owner;
