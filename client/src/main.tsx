import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";


import ErrorBoundary from "./ErrorBoundary.tsx";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, WagmiProvider, createConfig } from "wagmi";
import { linea, lineaSepolia } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

const config = createConfig({
  ssr: true, // Make sure to enable this for server-side rendering (SSR) applications.
  chains: [linea, lineaSepolia],
  connectors: [metaMask()],
  transports: {
    [linea.id]: http(),
    [lineaSepolia.id]: http(),
  },
});

const client = new QueryClient();


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AptosWalletAdapterProvider>
          <WagmiProvider config={config}>
            <QueryClientProvider client={client}>
              <App />
            </QueryClientProvider>

          </WagmiProvider>

        </AptosWalletAdapterProvider>

      </BrowserRouter>

      <Toaster />
    </ErrorBoundary>
  </StrictMode>
);
