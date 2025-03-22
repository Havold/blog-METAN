"use client";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggle: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={`theme ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
