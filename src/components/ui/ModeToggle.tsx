import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [theme, setThemeState] = useState<"light" | "dark" | "system">("system");
  useEffect(() => {
    // Inicializa el tema desde localStorage o preferencia del sistema
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeState(storedTheme);
      document.documentElement.classList[storedTheme === "dark" ? "add" : "remove"]("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeState(prefersDark ? "dark" : "light");
      document.documentElement.classList[prefersDark ? "add" : "remove"]("dark");
    }
  }, []);

  useEffect(() => {
  const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);
  document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    if (theme !== "system") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <Button onClick={() => setThemeState(theme === "dark" ? "light" : "dark")} variant="ghost" size="icon" className="border-none rounded-full size-12">
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
