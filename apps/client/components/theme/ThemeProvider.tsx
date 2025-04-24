// apps/client/components/theme/ThemeProvider.tsx
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";
interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Use null initial state to prevent hydration mismatch
  const [theme, setTheme] = useState<Theme | null>(null);
  
  // Initialize theme from localStorage on component mount
  useEffect(() => {
    // Check localStorage and system preference
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  // Apply theme changes to document and localStorage
  useEffect(() => {
    if (!theme) return; // Skip if theme is not yet initialized
    
    const root = document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prevTheme) => {
      if (!prevTheme) return "light";
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  // Provide a default theme until the real one is loaded
  const contextValue = {
    theme: theme || "light",
    toggle,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
