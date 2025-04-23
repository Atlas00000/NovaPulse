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
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};
