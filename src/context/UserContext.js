import { createContext, useState } from "react";
const UserContext = createContext();

export function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        token,
        setToken,
        users,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
