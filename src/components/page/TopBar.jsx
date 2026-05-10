import { Home } from "lucide-react";
import { memo, useState, useEffect } from "react";

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
    <header className="flex items-center justify-between px-4 py-2 md:px-28 flex-wrap">
      <span className="flex items-center gap-1 text-[10px] font-medium text-foreground sm:text-xs md:text-sm">
        Welcome, {greeting}
        <Home className="h-3 w-3 sm:h-4 sm:w-4" />
      </span>
      <span className="flex items-center gap-1 text-[10px] font-medium text-foreground sm:text-xs md:text-sm">
        <Home className="h-3 w-3 sm:h-4 sm:w-4" />| {timeStr}
      </span>
      <span className="text-[10px] font-medium text-foreground sm:text-xs md:text-sm">
        {dateStr}
      </span>
    </header>
  );
};

const TopBar = memo(TopBar_);
export default TopBar;
