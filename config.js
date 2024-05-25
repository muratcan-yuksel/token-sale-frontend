import { http, createConfig, createConnector, createStorage } from "wagmi";
import { mainnet, sepolia, localhost, hardhat } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";
export const config = createConfig({
  chains: [mainnet, sepolia, localhost, hardhat],
  storage: createStorage({ storage: window.localStorage }),
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [hardhat.id]: http(),
    [localhost.id]: http(),
  },
});
