import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getToken, getUser } from "../lib/tokenManagement";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const user = getUser();

  if (user?.role === "ADMIN" || "SUPER_ADMIN") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
