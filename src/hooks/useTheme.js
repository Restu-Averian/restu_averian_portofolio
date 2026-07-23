import { useEffect, useState } from "react";

const THEME_KEY = "theme";
const themes = ["system", "light", "dark"];

function applyTheme(theme) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.dataset.theme = theme;
  root.style.colorScheme = dark ? "dark" : "light";

  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.type = "image/webp";
    favicon.href = dark ? "/logo-web-dark.webp" : "/logo-web.webp";
  }
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
    setTheme,
    nextTheme: () =>
      setTheme(
        (current) => themes[(themes.indexOf(current) + 1) % themes.length],
      ),
  };
}

export function useIsDark() {
  const [isDark, setIsDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
}
