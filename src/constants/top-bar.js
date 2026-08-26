import { tr } from "@/i18n";

export const LOCALES = [
  { value: "en", label: "EN", flag: "🇬🇧" },
  { value: "id", label: "ID", flag: "🇮🇩" },
];

export const THEMES = [
  {
    value: "light",
    icon: "solar:sun-linear",
    label: tr("ThemeLight", "Light"),
  },
  {
    value: "dark",
    icon: "solar:moon-linear",
    label: tr("ThemeDark", "Dark"),
  },
  {
    value: "system",
    icon: "solar:monitor-linear",
    label: tr("ThemeSystem", "System"),
  },
];
