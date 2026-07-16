import { en } from "./locales/en";
import { id } from "./locales/id";

const dictionaries = {
  en,
  id,
};

export function translate(locale, key, defaultText, params) {
  // Fallback order:
  // 1. Translation from the currently selected locale
  // 2. English locale translation when available
  // 3. defaultText passed to t()
  // 4. Empty string

  let translatedText;

  const localeDict = dictionaries[locale];
  if (localeDict && typeof localeDict[key] === "string") {
    translatedText = localeDict[key];
  } else if (typeof dictionaries.en[key] === "string") {
    translatedText = dictionaries.en[key];
  }

  // Use defaultText if no translation is found
  if (
    translatedText === undefined ||
    translatedText === null ||
    translatedText === ""
  ) {
    translatedText = defaultText;
  }

  if (translatedText === undefined || translatedText === null) {
    return "";
  }

  // Handle interpolation
  if (params) {
    return translatedText.replace(/\{\{(.+?)\}\}/g, (match, p1) => {
      const paramValue = params[p1.trim()];
      if (paramValue === null || paramValue === undefined) {
        return "";
      }
      return String(paramValue);
    });
  }

  return translatedText;
}
