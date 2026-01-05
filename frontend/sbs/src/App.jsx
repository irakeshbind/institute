import React, { Component } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 import { ToastContainer } from 'react-toastify';
import "./components/style.css";
const App = () => {
  const myRouter = createBrowserRouter([
    { path: "/", Component: Login },
    { path: "login", Component: Login },
    { path: "signup", Component: Signup },
    { path: "dashboard", Component: Dashboard },
  ]);
  return (
    <div>
      <RouterProvider router={myRouter} />
       <ToastContainer />
    </div>
  );
};

export default App;
