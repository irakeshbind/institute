import React, { Component } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const myRouter = createBrowserRouter([
    { path: "login", Component: Login },
    {path:"signup",Component:Signup},
    {path:"dashboard",Component:Dashboard},
  ]);
  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  );
};

export default App;
