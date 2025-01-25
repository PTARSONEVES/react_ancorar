import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function useAuth() {
  const user = { loggedIn: false };
  return user && user.loggedIn;
}
export default function MyRoute({ children }) {
  const isAuthenticated = useAuth();
  console.log(isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/login" />;
}
MyRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}
