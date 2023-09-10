import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "../../context/UserContext";

function ProtectedRoute({ component: Component, ...props }) {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <Route
      {...props}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
