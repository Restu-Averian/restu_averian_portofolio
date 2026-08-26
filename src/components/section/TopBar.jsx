import { Icon } from "@iconify/react";
import { memo, useState, useEffect, useMemo } from "react";
import { useIsDark, useTheme } from "@/hooks/useTheme";
import { useTranslation } from "@/i18n";
import SelectField from "@/components/ui/select/select-field";
import { LOCALES, THEMES } from "@/constants/top-bar";

const TopBar_ = () => {
  const [now, setNow] = useState(() => new Date());
  const [openSelect, setOpenSelect] = useState(null);
  const { theme, setTheme } = useTheme();
  const { t, locale, setLocale } = useTranslation();

  const isDark = useIsDark();

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

  const currentThemeLabel = useMemo(() => {
    const currentTheme = THEMES.find((item) => item.value === theme);
    return currentTheme?.label?.__i18n
      ? t(currentTheme.label.key, currentTheme.label.default)
      : (currentTheme?.label ?? theme);
  }, [t, theme]);

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
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-between px-4 py-3.5 md:px-10 flex-wrap gap-y-2">
      <span className="flex-1 flex items-center gap-2 md:gap-3 text-xs font-medium text-foreground md:text-base">
        <img
          src={isDark ? "/logo-dark.webp" : "/logo.webp"}
          alt="Logo"
          className="h-8 w-8 md:h-10 md:w-10 object-contain"
        />
        <span className="flex items-center gap-1.5">
          {greeting}
          <Icon icon="solar:sun-linear" className="h-4 w-4 md:h-5 md:w-5" />
        </span>
      </span>

      <span className="hidden md:flex flex-1 justify-center items-center gap-1.5 text-xs font-medium text-foreground md:text-base">
        <Icon
          icon={`tabler:clock-hour-${nowHour}`}
          className="h-4 w-4 md:h-5 md:w-5"
        />
        {timeStr}
      </span>
      <span className="flex flex-1 justify-end items-center gap-1.5 text-xs font-medium text-foreground md:text-base">
        <span className="hidden md:flex items-center gap-1.5">
          <Icon
            icon="solar:calendar-linear"
            className="h-4 w-4 md:h-5 md:w-5"
          />
          {dateStr}
        </span>

        <SelectField
          value={locale}
          open={openSelect === "language"}
          onOpenChange={(open) =>
            setOpenSelect((current) =>
              open ? "language" : current === "language" ? null : current,
            )
          }
          onValueChange={setLocale}
          triggerProps={{
            "data-topbar-select": "language",
            "aria-label":
              locale === "en"
                ? t("SwitchToIndonesian", "Switch language to Indonesian")
                : t("SwitchToEnglish", "Switch language to English"),
            title: t("LanguageSelector", "Language selector"),
          }}
          items={LOCALES}
          renderItem={({ label, flag }) => (
            <div className="flex items-center gap-1.5 md:gap-1.5">
              <span className="text-[14px] md:text-[12px]">{flag}</span>
              <span className="text-[11px] md:text-[10px] font-bold uppercase">
                {label}
              </span>
            </div>
          )}
        />

        <SelectField
          value={theme}
          open={openSelect === "theme"}
          onOpenChange={(open) =>
            setOpenSelect((current) =>
              open ? "theme" : current === "theme" ? null : current,
            )
          }
          onValueChange={setTheme}
          triggerProps={{
            "data-topbar-select": "theme",
            "aria-label": t(
              "ThemeAriaLabel",
              "Theme: {{theme}}. Activate to switch theme.",
              { theme: currentThemeLabel },
            ),
            title: t("ThemeTitle", "Theme: {{theme}}. Click to switch.", {
              theme: currentThemeLabel,
            }),
          }}
          items={THEMES}
          renderItem={({ icon, label }) => (
            <div className="flex items-center gap-1.5 md:gap-1.5">
              <Icon
                icon={icon}
                className="h-4.5 w-4.5 md:h-4 md:w-4"
                aria-hidden="true"
              />
              <span className="text-[11px] md:text-[10px] capitalize">
                {label?.__i18n ? t(label.key, label.default) : label}
              </span>
            </div>
          )}
        />
      </span>
    </header>
  );
};

const TopBar = memo(TopBar_);
export default TopBar;
