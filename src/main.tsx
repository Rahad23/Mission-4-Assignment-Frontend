import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import PageRefreshWarning from "./PageRefreshWorning/PageRefreshWarning.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <Provider store={store}>
      <PageRefreshWarning />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
