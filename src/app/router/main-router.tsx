import { LoadPost } from "@pages/load-post";
import { LoginPage } from "@pages/login";
import { MainLayout } from "@shared/layouts";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/load-post",
        element: <LoadPost />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
