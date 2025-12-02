import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@app/styles/globall.css";
import { RouterProvider } from "react-router";
import { router } from "@app/router/main-router";
import { Provider } from "react-redux";
import { store } from "@app/store";

import { App as AntApp } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AntApp>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AntApp>
  </StrictMode>
);
