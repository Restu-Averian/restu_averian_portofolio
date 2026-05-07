// src/components/page/WorkExperienceCard.jsx

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const THUMB =
  "https://i.pinimg.com/236x/f7/9e/52/f79e5203f41bdaaf1a5b4176f98a8736.jpg";

const titleScale = cva("font-semibold leading-snug text-foreground", {
  variants: {
    scaleFont: {
      1: "text-xs",
      2: "text-sm",
      3: "text-base",
      4: "text-lg",
      5: "text-xl",
    },
  },
  defaultVariants: {
    scaleFont: 2,
  },
});

const periodTextScale = cva("mt-1 text-muted-foreground", {
  variants: {
    scaleFont: {
      1: "text-xs",
      2: "text-sm",
      3: "text-base",
      4: "text-lg",
      5: "text-xl",
    },
  },
  defaultVariants: {
    scaleFont: 1,
  },
});

export default function WorkExperienceCard({
  logo = THUMB,
  title = "Intern as Frontend Engineer at PT. Indodev Niaga Internet",
  period = "(2023 - 2024)",
  showTopConnector = true,
  position = {
    xClass: "",
    yClass: "",
  },
  imgSize = {
    widthClass: "w-12",
    heightClass: "h-12",
  },
  scaleFont = 2,
  scalePeriodText = 1,
}) {
  return (
    <div className={cn("absolute", position?.xClass, position?.yClass)}>
      <div className="relative flex-1 px-3 py-2">
        {showTopConnector && (
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 z-10 h-8 w-8 rounded-full bg-primary" />
        )}

        <div
          className="flex items-center gap-4 rounded-md bg-card px-4 py-4 w-72"
          style={{ border: "5px solid var(--primary)" }}
        >
          <div
            className={cn(
              "shrink-0 overflow-hidden rounded-full",
              imgSize?.widthClass,
              imgSize?.heightClass,
            )}
            style={{
              border: "4px solid var(--primary)",
            }}
          >
            <img
              src={logo}
              alt="Company logo"
              loading="lazy"
              className="h-full w-full object-cover "
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center">
            <p className={cn(titleScale({ scaleFont }))}>{title}</p>
            <p className={cn(periodTextScale({ scaleFont: scalePeriodText }))}>
              {period}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
