// import { useState } from "react";
import { useConnect, useDisconnect, useAccount } from "wagmi";
import { getChainId } from "@wagmi/core";
import { injected } from "wagmi/connectors";
//root config.js for chains
import { config } from "../../config.js";
const WalletComponent = () => {
  //hooks
  const { connect, status } = useConnect();
  console.log(status);
  const { disconnect } = useDisconnect();
  const account = useAccount();
  console.log(account.isConnected);
  const chainId = getChainId(config);
  console.log(chainId);

  const connectWallet = () => {
    connect({ connector: injected() });
  };

  //logic for address abbreviation

  //   const isSmallScreen = useMediaQuery("(max-width:600px)");

  // State to track whether the full address is being displayed
  // const [showFullAddress, setShowFullAddress] = useState(false);

  // Function to toggle the display of the full address on hover
  // const toggleAddressDisplay = () => {
  //   setShowFullAddress(!showFullAddress);
  // };

  // Abbreviate the address to display
  const abbreviatedAddress = `${account?.address?.substring(
    0,
    6
  )}...${account?.address?.substring(account?.address?.length - 4)}`;

  return (
    <div>
      {status === "success" || account.isConnected ? (
        <div>
          <div
            style={{
              margin: "10px",
              fontSize: "15px",
            }}
          >
            Connected to {account?.address}
          </div>
          <button
            style={{
              marginBottom: "10px",
              backgroundColor: "rgba(104, 110, 255, 1)", // Match background gradient's first color
              color: "white", // White text color for contrast
              fontWeight: "bold", // Bold text for emphasis
              padding: "10px 20px", // Adjust padding for desired button size
              borderRadius: 5, // Add some rounded corners
              border: "none", // Remove default border
              cursor: "pointer", // Set cursor to pointer on hover
              "&:hover": {
                // Style on hover for visual feedback
                backgroundColor: "rgba(141, 198, 255, 1)", // Match background gradient's second color for a subtle shift
              },
            }}
            onClick={() => disconnect()}
          >
            Disconnect
          </button>{" "}
        </div>
      ) : (
        <button
          style={{
            backgroundColor: "rgba(104, 110, 255, 1)", // Match background gradient's first color
            color: "white", // White text color for contrast
            fontWeight: "bold", // Bold text for emphasis
            padding: "10px 20px", // Adjust padding for desired button size
            borderRadius: 5, // Add some rounded corners
            border: "none", // Remove default border
            cursor: "pointer", // Set cursor to pointer on hover
            "&:hover": {
              // Style on hover for visual feedback
              backgroundColor: "rgba(141, 198, 255, 1)", // Match background gradient's second color for a subtle shift
            },
          }}
          onClick={connectWallet}
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default WalletComponent;
