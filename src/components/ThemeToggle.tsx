"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="icon-button"
      aria-label="Toggle dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="dark:hidden" size={17} aria-hidden="true" />
      <Moon className="hidden dark:block" size={17} aria-hidden="true" />
    </button>
  );
}
