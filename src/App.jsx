import BuyTokens from "./components/BuyTokens.jsx";
import ConnectWallet from "./components/ConnectWallet.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        {" "}
        <h1>Awesome Token Sale</h1>
        {status === "connected" && <BuyTokens />}
        {status !== "connected" && <ConnectWallet />}{" "}
      </QueryClientProvider>
    </div>
  );
};

export default App;
