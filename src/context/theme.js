import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export const STORAGE_KEY = "theme"; // "light" | "dark"

export function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable (private mode etc.)
  }
  return null;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
