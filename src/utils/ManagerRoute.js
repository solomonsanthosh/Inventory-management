import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ManagerRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem("role");
    console.log(token);
    if (token == "admin") {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated === null) {
    return <></>;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ManagerRoute;
