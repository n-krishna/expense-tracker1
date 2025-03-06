// context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <AppContext.Provider value={{ isAuthenticated, login, logout, transactions, addTransaction }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
