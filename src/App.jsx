import BuyTokens from "./components/BuyTokens.jsx";
import ConnectWallet from "./components/ConnectWallet.jsx";
import { useReadContract, useAccount, useBalance } from "wagmi";
const App = () => {
  const { address, status, isConnected } = useAccount();
  console.log(status);

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
      {isConnected && <BuyTokens />}
      {isConnected == false && <ConnectWallet />}{" "}
    </div>
  );
};

export default App;
