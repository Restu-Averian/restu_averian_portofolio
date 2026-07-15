import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { translate } from "./translate";

export const TranslationContext = createContext(undefined);

const LOCALE_STORAGE_KEY = "portfolio-locale";

function getInitialLocale() {
  if (typeof window === "undefined") return "en";
  
  try {
    const persisted = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (persisted === "id" || persisted === "en") {
      return persisted;
    }
  } catch (e) {
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
    }
    
    // Persist to localStorage
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch (e) {
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
