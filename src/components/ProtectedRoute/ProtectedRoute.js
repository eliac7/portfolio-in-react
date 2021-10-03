import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  return (
    <Route
      {...props}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
