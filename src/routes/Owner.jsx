import { useState } from "react";
import {
  useWriteContract,
  useDisconnect,
  useReadContract,
  useAccount,
} from "wagmi";
import { parseEther, parseUnits } from "viem";
import { awtokenAbi, awtokenAddress } from "../ABI/awtokenAbi.js";
import { tokensaleAddress, tokensaleAbi } from "../ABI/tokensaleAbi.js";
import { Navigate } from "react-router-dom";

const Owner = () => {
  const { writeContract, status } = useWriteContract();
  const { address, isConnected } = useAccount();
  const [whitelistAddress, setWhitelistAddress] = useState("");
  const [tokenState, setTokenState] = useState(5);
  console.log(address);
  // if (address !== "0x1AF34385343fdf673aedB90A26ee64Bb01e1667D") {
  //   return <Navigate to="/" replace />;
  // }

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
  const addToWhitelist = async () => {
    try {
      writeContract({
        abi: tokensaleAbi,
        address: tokensaleAddress,
        functionName: "addToWhitelist",
        args: [whitelistAddress],
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromWhitelist = async () => {
    try {
      writeContract({
        abi: tokensaleAbi,
        address: tokensaleAddress,
        functionName: "removeFromWhitelist",
        args: [whitelistAddress],
      });
    } catch (error) {
      console.log(error);
    }
  };
  const setTokenPrice = async () => {
    try {
      writeContract({
        abi: tokensaleAbi,
        address: tokensaleAddress,
        functionName: "setTokenPrice",
        args: [tokenState],
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
    <div
      style={{
        margin: "15px",
      }}
    >
      {address === "0x1AF34385343fdf673aedB90A26ee64Bb01e1667D" ? (
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
              maxWidth: "200px",
              textAlign: "start",
              margin: "5px 5px",
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
            onClick={() => toggleWhitelistSaleActive()}
          >
            toggleWhitelistSaleActive
          </button>
          <button
            style={{
              minWidth: "200px",
              maxWidth: "200px",
              textAlign: "start",
              margin: "5px 5px",
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
            onClick={() => toggleSaleActive()}
          >
            toggleSaleActive
          </button>
          <button
            style={{
              minWidth: "200px",
              maxWidth: "200px",
              textAlign: "start",
              margin: "5px 5px",
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
            onClick={() => togglePause()}
          >
            togglePause
          </button>
          <button
            style={{
              minWidth: "200px",
              maxWidth: "200px",
              textAlign: "start",
              margin: "5px 5px",
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
            onClick={() => withdrawEth()}
          >
            withdrawEth
          </button>
          <button
            style={{
              minWidth: "200px",
              maxWidth: "200px",
              textAlign: "start",
              margin: "5px 5px",
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
            onClick={() => withdrawToken()}
          >
            withdrawToken
          </button>
          <div
            style={{
              display: "flex",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <input
              style={{
                minWidth: "200px",
                maxWidth: "200px",
                textAlign: "start",
                margin: "5px 5px",
                boxSizing: "border-box",
              }}
              type="text"
              placeholder="address"
              onChange={(e) => setWhitelistAddress(e.target.value)}
            />
            <button
              style={{
                minWidth: "200px",
                maxWidth: "200px",
                textAlign: "start",
                margin: "5px 5px",
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
              onClick={() => addToWhitelist()}
            >
              addToWhitelist
            </button>
          </div>
          <div
            style={{
              display: "flex",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <input
              style={{
                minWidth: "200px",
                maxWidth: "200px",
                textAlign: "start",
                margin: "5px 5px",
                boxSizing: "border-box",
              }}
              type="text"
              placeholder="address"
              onChange={(e) => setWhitelistAddress(e.target.value)}
            />
            <button
              style={{
                minWidth: "200px",
                maxWidth: "200px",
                textAlign: "start",
                margin: "5px 5px",
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
              onClick={() => removeFromWhitelist()}
            >
              removeFromWhitelist
            </button>
          </div>{" "}
          <div
            style={{
              display: "flex",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <input
              style={{
                minWidth: "200px",
                maxWidth: "200px",
                textAlign: "start",
                margin: "5px 5px",
                boxSizing: "border-box",
              }}
              type="number"
              placeholder="tokenPrice"
              onChange={(e) => setTokenPrice(e.target.value)}
            />
            <button
              style={{
                minWidth: "200px",
                maxWidth: "200px",
                textAlign: "start",
                margin: "5px 5px",
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
              onClick={() => setTokenPrice()}
            >
              setTokenPrice
            </button>
          </div>
        </div>
      ) : (
        <div>Only owner can see the terminal</div>
      )}
    </div>
  );
};

export default Owner;
