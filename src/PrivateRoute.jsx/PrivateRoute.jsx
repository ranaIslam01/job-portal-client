import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>; 
  }

  if (!user) {
    return <Navigate to="/signIn" state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;