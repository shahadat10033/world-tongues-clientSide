import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Routes/Home";
import Root from "../Routes/Root";
import ErrPage from "../Routes/ErrPage";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import AuthProvider from "../Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

import Classes from "../Routes/Classes";
import Instructors from "../Routes/Instructors";
import Dashboard from "../Routes/Dashboard/Dashboard";
import ProtectedRoute from "../Routes/ProtectedRoute";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrPage></ErrPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard></Dashboard>
          </ProtectedRoute>
        ),
        // children: [
        //   {
        //     path: "/dashboard",
        //     element: <Instructors></Instructors>,
        //   },
        // ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
