import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const LocalStorageRoute = () => {
  const state = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    let user = state.user;

    if (user.role == "local") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [state]);

  if (isAuthenticated === null) {
    return <></>;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/error404" />;
};
export default LocalStorageRoute;
