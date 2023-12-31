import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRoute from "./Router/Route.jsx";
import AuthProvider from "./components/Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreatedRoute}> </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
