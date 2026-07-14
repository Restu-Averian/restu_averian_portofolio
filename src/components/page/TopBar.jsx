import { Icon } from "@iconify/react";
import { memo, useState, useEffect, useMemo } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "@/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LOCALES = [
  { value: "en", label: "EN", flag: "🇬🇧" },
  { value: "id", label: "ID", flag: "🇮🇩" },
];

const THEMES = [
  {
    value: "light",
    icon: "solar:sun-linear",
    labelKey: "ThemeLight",
    defaultLabel: "Light",
  },
  {
    value: "dark",
    icon: "solar:moon-linear",
    labelKey: "ThemeDark",
    defaultLabel: "Dark",
  },
  {
    value: "system",
    icon: "solar:monitor-linear",
    labelKey: "ThemeSystem",
    defaultLabel: "System",
  },
];

const TopBar_ = () => {
  const [now, setNow] = useState(() => new Date());
  const { theme, setTheme } = useTheme();
  const { t, locale, setLocale } = useTranslation();

  const greeting = (() => {
    const hour = now.getHours();
    if (hour < 12) return t("WelcomeGoodMorning", "Welcome, Good morning!");
    if (hour < 17) return t("WelcomeGoodAfternoon", "Welcome, Good afternoon!");
    return t("WelcomeGoodEvening", "Welcome, Good evening!");
  })();

  const dateLocale = locale === "id" ? "id-ID" : "en-US";

  const timeStr = now.toLocaleTimeString(dateLocale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const dateStr = now.toLocaleDateString(dateLocale, {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const nowHour = useMemo(() => {
    const hour24 = now?.getHours();
    return hour24 % 12 || 12;
  }, [now]);

  useEffect(() => {
    const msUntilNextMinute = () => {
      const n = new Date();
      return (60 - n.getSeconds()) * 1000 - n.getMilliseconds();
    };

    const timeout = setTimeout(() => {
      setNow(new Date());

      const interval = setInterval(() => setNow(new Date()), 60_000);

      return () => clearInterval(interval);
    }, msUntilNextMinute());

    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-between px-4 py-3.5 md:px-10 flex-wrap">
      <span className="flex-1 flex items-center gap-1.5 text-xs font-medium text-foreground md:text-base">
        {greeting}
        <Icon icon="solar:sun-linear" className="h-4 w-4 md:h-5 md:w-5" />
      </span>
      <span className="flex-1 flex justify-center items-center gap-1.5 text-xs font-medium text-foreground md:text-base">
        <Icon
          icon={`tabler:clock-hour-${nowHour}`}
          className="h-4 w-4 md:h-5 md:w-5"
        />
        {timeStr}
      </span>
      <span className="flex flex-1 justify-end items-center gap-1.5 text-xs font-medium text-foreground md:text-base">
        <Icon icon="solar:calendar-linear" className="h-4 w-4 md:h-5 md:w-5" />
        {dateStr}
        <Select value={locale} onValueChange={setLocale}>
          <SelectTrigger
            aria-label={
              locale === "en"
                ? t("SwitchToIndonesian", "Switch language to Indonesian")
                : t("SwitchToEnglish", "Switch language to English")
            }
            title={t("LanguageSelector", "Language selector")}
            className="ml-1 h-[26px] rounded-full border border-porto-border bg-card px-2 py-1 text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn focus:ring-0 focus-visible:ring-0 focus:outline-none"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper" align="end">
            {LOCALES.map(({ value, label, flag }) => (
              <SelectItem key={value} value={value}>
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px]">{flag}</span>
                  <span className="text-[10px] font-bold uppercase">
                    {label}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger
            aria-label={`Theme: ${theme}. Activate to switch theme.`}
            title={`Theme: ${theme}. Click to switch.`}
            className="ml-1 h-[26px] rounded-full border border-porto-border bg-card px-2 py-1 text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn focus:ring-0 focus-visible:ring-0 focus:outline-none"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper" align="end">
            {THEMES.map(({ value, icon, labelKey, defaultLabel }) => (
              <SelectItem key={value} value={value}>
                <div className="flex items-center gap-1.5">
                  <Icon icon={icon} className="h-4 w-4" aria-hidden="true" />
                  <span className="text-[10px] capitalize">
                    {t(labelKey, defaultLabel)}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </span>
    </header>
  );
};

const TopBar = memo(TopBar_);
export default TopBar;
