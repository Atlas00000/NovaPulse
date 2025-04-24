// apps/client/components/DarkModeSwitch.tsx

"use client";

import React from "react";
import { useTheme } from "./theme/ThemeProvider";

export const DarkModeSwitch = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-2 rounded focus:outline-none focus:ring"
    >
      {/* Show sun in dark mode, moon in light mode */}
      {theme === "dark" ? (
        <span className="text-xl">☀️</span>
      ) : (
        <span className="text-xl">🌙</span>
      )}
    </button>
  );
};
