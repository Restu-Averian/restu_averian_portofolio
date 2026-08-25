import { Icon } from "@iconify/react";
import { memo, useState, useEffect, useMemo } from "react";
import { useIsDark, useTheme } from "@/hooks/useTheme";
import { useTranslation } from "@/i18n";
import SelectField from "@/components/ui/select/select-field";

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

  const handlePointerDownOutside = (e) => {
    const target = e.detail.originalEvent.target;
    const trigger =
      target instanceof Element
        ? target.closest("button[data-topbar-select]")
        : null;
    if (trigger) {
      setTimeout(() => setOpenSelect(trigger.dataset.topbarSelect), 0);
    }
  };

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
          onOpenChange={(open) => setOpenSelect(open ? "language" : null)}
          onValueChange={setLocale}
          onPointerDownOutside={handlePointerDownOutside}
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
            <div className="flex items-center gap-1.5">
              <span className="text-[12px]">{flag}</span>
              <span className="text-[10px] font-bold uppercase">{label}</span>
            </div>
          )}
        />

        <SelectField
          value={theme}
          open={openSelect === "theme"}
          onOpenChange={(open) => setOpenSelect(open ? "theme" : null)}
          onValueChange={setTheme}
          onPointerDownOutside={handlePointerDownOutside}
          triggerProps={{
            "data-topbar-select": "theme",
            "aria-label": `Theme: ${theme}. Activate to switch theme.`,
            title: `Theme: ${theme}. Click to switch.`,
          }}
          items={THEMES}
          renderItem={({ icon, labelKey, defaultLabel }) => (
            <div className="flex items-center gap-1.5">
              <Icon icon={icon} className="h-4 w-4" aria-hidden="true" />
              <span className="text-[10px] capitalize">
                {t(labelKey, defaultLabel)}
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
