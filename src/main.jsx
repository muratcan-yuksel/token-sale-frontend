import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { WagmiProvider } from "wagmi";
import { config } from "../config.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import "./style/index.css";
import Owner from "./routes/Owner.jsx";

const router = createBrowserRouter([
  {
    path: "/owner",
    element: <Owner />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RouterProvider router={router}>
          <div
            style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            <App />
          </div>
        </RouterProvider>
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
