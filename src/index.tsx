// react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// app
import App from "./app/App.tsx";
// providers
import { StoreProvider } from "./app/providers/StoreProvider/ui/StoreProvider.tsx";
// styles
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
