import { Icon } from "@iconify/react";
import { memo, useState, useEffect, useMemo } from "react";

const TopBar_ = () => {
  const [now, setNow] = useState(() => new Date());

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
    <header className="flex items-center justify-between px-4 py-3.5 md:px-28 flex-wrap">
      <span className="flex items-center gap-1 text-[10px] font-medium text-foreground sm:text-xs md:text-base">
        Welcome, {greeting}
        <Icon icon="solar:sun-linear" className="h-4 w-4 sm:h-6 sm:w-6" />
      </span>
      <span className="flex items-center gap-1 text-[10px] font-medium text-foreground sm:text-xs md:text-base">
        <Icon icon={`tabler:clock-hour-${nowHour}`} width="24" height="24" />|{" "}
        {timeStr}
      </span>
      <span className="text-[10px] font-medium text-foreground sm:text-xs md:text-base">
        {dateStr}
      </span>
    </header>
  );
};

const TopBar = memo(TopBar_);
export default TopBar;
