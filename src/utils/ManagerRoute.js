import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const ManagerRoute = () => {
  const state = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    let user = state.user;

    if (user.role == "admin") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [state]);

  if (isAuthenticated === null) {
    return <></>;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ManagerRoute;
