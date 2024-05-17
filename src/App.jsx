import BuyTokens from "./components/BuyTokens.jsx";
import ConnectWallet from "./components/ConnectWallet.jsx";

import { useReadContract, useAccount, useBalance } from "wagmi";
const App = () => {
  const { address, status, isConnected } = useAccount();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {" "}
      <h1>Awesome Token Sale</h1>
      {status === "connected" && <BuyTokens />}
      {status !== "connected" && <ConnectWallet />}{" "}
    </div>
  );
};

export default App;
