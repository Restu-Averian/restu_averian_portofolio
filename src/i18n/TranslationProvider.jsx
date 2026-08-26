import { createContext, useEffect, useState } from "react";
import { translate } from "./translate";

export const TranslationContext = createContext(undefined);

const LOCALE_STORAGE_KEY = "portfolio-locale";
const DOCUMENT_META = [
  ['meta[name="description"]', "DocumentDescription"],
  ['meta[property="og:title"]', "DocumentTitle"],
  ['meta[property="og:description"]', "DocumentOgDescription"],
];

function getInitialLocale() {
  if (typeof window === "undefined") return "en";

  try {
    const persisted = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (persisted === "id" || persisted === "en") {
      return persisted;
    }
  } catch {
    // Ignore localStorage errors (e.g., in privacy modes)
  }

  // Browser detection
  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language.startsWith("id") ? "id" : "en";
  }

  return "en";
}

export function TranslationProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale);

  useEffect(() => {
    // Update HTML lang attribute on change
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;

      document.title = translate(locale, "DocumentTitle");

      DOCUMENT_META.forEach(([selector, key]) => {
        const meta = document.querySelector(selector);
        if (meta) {
          meta.setAttribute("content", translate(locale, key));
        }
      });
    }

    // Persist to localStorage
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Ignore errors
    }
  }, [locale]);

  const setLocale = (newLocale) => {
    setLocaleState(newLocale);
  };

  const t = (key, defaultText, params) => {
    return translate(locale, key, defaultText, params);
  };

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}
