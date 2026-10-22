import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme";

export default function ThemeToggle({ overDark = false }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // overDark: rendered on top of the always-dark hero canvas (unscrolled navbar)
  const colors = overDark
    ? "text-zinc-300 hover:text-white hover:bg-white/10"
    : "text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`p-2 rounded-full transition-colors cursor-pointer ${colors}`}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
