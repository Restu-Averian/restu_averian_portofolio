import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n";

/**
 *
 * @param {object} props
 * @param {"left" | "right"} props.direction
 * @param {import("react").MouseEventHandler<HTMLButtonElement>} props.onClick
 * @returns
 */
export const MobileCarouselArrow = ({ direction, onClick }) => {
  const { t } = useTranslation();

  const isLeft = direction === "left";
  const Icon = isLeft ? ChevronLeft : ChevronRight;
  const label = isLeft ? t("Previous", "Previous") : t("Next", "Next");
  const positionClass = isLeft ? "absolute -left-2.5" : "absolute -right-2.5";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      id="x"
      className={`cursor-pointer ${positionClass} top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-porto-border bg-porto-btn text-porto-btn-text shadow-md transition-all hover:scale-105 active:scale-95 lg:hidden`}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
};
