import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@app/styles/globall.css";
import { RouterProvider } from "react-router";
import { router } from "@app/router/main-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
