import { Home } from "lucide-react";
import { memo } from "react";

const TopBar_ = () => {
  return (
    <header className="border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs md:text-sm">
        <span className="font-medium tracking-wide">
          Welcome, Good afternoon!
        </span>

        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>11:00</span>
          </span>
        </div>

        <span className="tracking-wide">Sunday, 19 Apr 2026</span>
      </div>
    </header>
  );
};

const TopBar = memo(TopBar_);
export default TopBar;
