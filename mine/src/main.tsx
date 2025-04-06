import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";
import ErrorBoundary from "./ErrorBoundary";
import App from "./App";
import "./index.css";




createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
      
              <App />


      </BrowserRouter>

    </ErrorBoundary>
  </StrictMode>
);
