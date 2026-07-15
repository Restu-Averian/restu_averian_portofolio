import { Icon } from "@iconify/react";
import { memo, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "@/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
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
  const [openSelect, setOpenSelect] = useState(null);
  const { theme, setTheme } = useTheme();
  const { t, locale, setLocale } = useTranslation();

  const activeTheme =
    THEMES.find((item) => item.value === theme) ?? THEMES[0];
  const activeLocale =
    LOCALES.find((item) => item.value === locale) ?? LOCALES[0];

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
    <header className="sticky top-3 z-50 px-4 md:px-10">
      <div className="mx-auto flex max-w-[calc(100vw-2rem)] items-center justify-between gap-3 rounded-[1.75rem] border border-porto-border/80 bg-background/90 px-5 py-4 text-foreground shadow-[0_16px_40px_rgba(42,35,33,0.18)] backdrop-blur-md dark:bg-background/85 md:max-w-none md:px-7 lg:px-9">
        <span className="flex min-w-0 items-center gap-3 text-sm font-medium md:text-base lg:text-lg">
          <Icon
            icon="solar:star-bold"
            className="h-5 w-5 shrink-0 text-porto-gold md:h-6 md:w-6"
          />
          <span className="truncate">
            {t("ProfileGreeting", "Hello, I'm Restu ✨")}
          </span>
        </span>
        <span className="flex shrink-0 items-center justify-end gap-2 md:gap-3">
          <Select
            value={locale}
            open={openSelect === "language"}
            onOpenChange={(open) => setOpenSelect(open ? "language" : null)}
            onValueChange={setLocale}
          >
            <SelectTrigger
              data-topbar-select="language"
              aria-label={
                locale === "en"
                  ? t("SwitchToIndonesian", "Switch language to Indonesian")
                  : t("SwitchToEnglish", "Switch language to English")
              }
              title={t("LanguageSelector", "Language selector")}
              className="h-10 min-w-20 cursor-pointer rounded-full border border-porto-border bg-card/80 px-3 py-2 text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-porto-focus md:min-w-24"
            >
              <span className="flex items-center gap-2">
                <Icon icon="solar:global-linear" className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase">
                  {activeLocale.label}
                </span>
              </span>
            </SelectTrigger>
            <SelectContent
              position="popper"
              align="end"
              onPointerDownOutside={handlePointerDownOutside}
            >
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

          <Select
            value={theme}
            open={openSelect === "theme"}
            onOpenChange={(open) => setOpenSelect(open ? "theme" : null)}
            onValueChange={setTheme}
          >
            <SelectTrigger
              data-topbar-select="theme"
              aria-label={`Theme: ${theme}. Activate to switch theme.`}
              title={`Theme: ${theme}. Click to switch.`}
              className="h-10 min-w-20 cursor-pointer rounded-full border border-porto-border bg-card/80 px-3 py-2 text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-porto-focus md:min-w-28"
            >
              <span className="flex items-center gap-2">
                <Icon icon={activeTheme.icon} className="h-5 w-5" />
                <span className="hidden text-sm font-semibold capitalize sm:inline">
                  {t(activeTheme.labelKey, activeTheme.defaultLabel)}
                </span>
              </span>
            </SelectTrigger>
            <SelectContent
              position="popper"
              align="end"
              onPointerDownOutside={handlePointerDownOutside}
            >
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
      </div>
    </header>
  );
};

const TopBar = memo(TopBar_);
export default TopBar;
