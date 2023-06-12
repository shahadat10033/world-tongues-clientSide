import React, { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { loader, user } = useContext(AuthContex);

  if (loader) {
    <div
      className="text-center fw-bold fs-1 my-5 pt-5"
      style={{ minHeight: "80vh" }}
    >
      Loading... Loading... Loading... Loading... Loading... Loading...
      Loading... Loading... Loading... Loading...
    </div>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
