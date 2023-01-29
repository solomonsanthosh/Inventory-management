import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
const ProtectedRoute = () => {
  const state = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    let token = state.token;
    if (token) {
      let tokenExpiration = jwtDecode(token).exp;
      let dateNow = new Date();

      if (tokenExpiration < dateNow.getTime() / 1000) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [state]);
  if (isAuthenticated === null) {
    return <></>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
