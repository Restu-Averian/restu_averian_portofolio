import { useEffect, useState } from "react";

const THEME_KEY = "theme";
const themes = ["system", "light", "dark"];

function applyTheme(theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.dataset.theme = theme;
  root.style.colorScheme = dark ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "system",
  );

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);

    if (theme !== "system") return undefined;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  return {
    theme,
    nextTheme: () =>
      setTheme(
        (current) => themes[(themes.indexOf(current) + 1) % themes.length],
      ),
  };
}
