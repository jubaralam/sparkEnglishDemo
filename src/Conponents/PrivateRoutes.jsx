import React, { useContext, useEffect } from "react";
import { userCrediantial } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { isLoggedIn } = useContext(userCrediantial);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoutes;
