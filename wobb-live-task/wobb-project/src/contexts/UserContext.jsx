"use client";

import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load username from localStorage on initial render
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
    localStorage.setItem("username", name);
  };

  const logout = () => {
    setUsername("");
    setIsLoggedIn(false);
    localStorage.removeItem("username");
  };

  return (
    <UserContext.Provider value={{ username, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
