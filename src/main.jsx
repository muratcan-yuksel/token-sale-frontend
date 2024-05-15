import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../config.js";

import "./style/index.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div
          style={{
            height: "100vh",
            width: "100vw",
          }}
        >
          <App />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
