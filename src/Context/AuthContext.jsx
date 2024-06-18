import React, { createContext, useState } from "react";

export const userCrediantial = createContext();

createContext;
const AuthContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [token, setToken] = useState(null);

  const login = (token) => {
    setIsLoggedIn(true);
    setToken(token);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
  };

  return <userCrediantial.Provider value={{isLoggedIn, login, logout, token}}>{children}
  </userCrediantial.Provider>;
};

export default AuthContext;
