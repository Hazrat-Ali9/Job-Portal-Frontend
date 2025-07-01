import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import RegisterForm from "../Form/RegisterForm";
import LoginForm from "../Form/LoginForm";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <h3>route not found</h3>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/register", element: <RegisterForm></RegisterForm> },
      { path: "/login", element: <LoginForm></LoginForm> },
    ],
  },
]);

export default Router;
