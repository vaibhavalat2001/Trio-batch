import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import AuthProtected from "./protected/AuthProtected";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import MainProtected from "./protected/MainProtected";
import Home from "../features/Home/ui/page/Home";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <AuthProtected />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <MainProtected />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
