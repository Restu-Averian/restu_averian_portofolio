import { forwardRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import TooltipBase from "@/components/ui/tooltip-base";

const SideNavButton = forwardRef(
  ({ direction = "left", label, onClick, className, ...props }, ref) => {
    const isLeft = direction === "left";

    return (
      <TooltipBase
        content={
          <span className="min-w-60 rounded-[20px] border border-porto-border bg-card px-6 py-4 text-center text-[18px] leading-[1.2] text-porto-text shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 ">
            <span className="inline-flex items-center gap-3">
              {isLeft && <ArrowLeft className="h-5 w-5 shrink-0" />}
              <span>
                {isLeft ? "Prev" : "Next"}: {label}
              </span>
              {isLeft === false && <ArrowRight className="h-5 w-5 shrink-0" />}
            </span>
          </span>
        }
      >
        <button
          ref={ref}
          type="button"
          onClick={onClick}
          className={cn(
            "absolute top-1/2 z-50 hidden -translate-y-1/2 xl:flex xl:flex-col xl:items-center xl:gap-5 focus:outline-none focus:ring-2 focus:ring-porto-focus cursor-pointer",
            isLeft
              ? "left-[max(-12rem,calc(1.5rem-(100vw-100%)/2))]"
              : "right-[max(-12rem,calc(1.5rem-(100vw-100%)/2))]",
            className,
          )}
          {...props}
        >
          <span className="flex h-27 w-27 items-center justify-center rounded-[18px] bg-porto-surface-elevated shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 hover:scale-[1.03] border-4 border-porto-border hover:border-porto-btn">
            <span
              className={cn(
                "h-0 w-0",
                isLeft
                  ? "border-y-22 border-y-transparent border-r-34 border-r-porto-btn"
                  : "border-y-22 border-y-transparent border-l-34 border-l-porto-btn",
              )}
            />
          </span>
        </button>
      </TooltipBase>
    );
  },
);

SideNavButton.displayName = "SideNavButton";

export default SideNavButton;
