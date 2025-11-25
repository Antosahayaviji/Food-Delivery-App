import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [brightness, setBrightness] = useState(100); // percent

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        notificationsEnabled,
        setNotificationsEnabled,
        brightness,
        setBrightness,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
