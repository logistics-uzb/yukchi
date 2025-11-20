import { LoginPage } from "@pages/login";
import { MainLayout } from "@shared/layouts";
import { ALL_ROUTES } from "@shared/model/consts";
import { createBrowserRouter } from "react-router";



const routes = ALL_ROUTES.map((route) => {
  return {
    path: route.path,
    element: route.element,
  };
});

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: routes,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
