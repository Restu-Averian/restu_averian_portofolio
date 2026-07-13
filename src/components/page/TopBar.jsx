import { Icon } from "@iconify/react";
import { memo, useState, useEffect, useMemo } from "react";
import { useTheme } from "@/hooks/useTheme";

const TopBar_ = () => {
  const [now, setNow] = useState(() => new Date());
  const { theme, nextTheme } = useTheme();

  const greeting = (() => {
    const hour = now.getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 17) return "Good afternoon!";
    return "Good evening!";
  })();

  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const dateStr = now.toLocaleDateString("en-US", {
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
        Welcome, {greeting}
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
        <button
          type="button"
          onClick={nextTheme}
          aria-label={`Theme: ${theme}. Activate to switch theme.`}
          title={`Theme: ${theme}. Click to switch.`}
          className="ml-1 inline-flex items-center gap-1 rounded-full border border-porto-border bg-card px-2 py-1 text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn"
        >
          <Icon
            icon={
              theme === "dark"
                ? "solar:moon-linear"
                : theme === "light"
                  ? "solar:sun-linear"
                  : "solar:monitor-linear"
            }
            className="h-4 w-4"
            aria-hidden="true"
          />
          <span className="hidden sm:inline text-[10px] capitalize">
            {theme}
          </span>
        </button>
      </span>
    </header>
  );
};

const TopBar = memo(TopBar_);
export default TopBar;
