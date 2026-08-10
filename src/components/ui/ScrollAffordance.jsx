import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "./button";
import { useTranslation } from "@/i18n";

export default function ScrollAffordance({ containerRef }) {
  const { t } = useTranslation();
  const [canScroll, setCanScroll] = useState(false);

  const resizeObserverRef = useRef(null);
  const mutationObserverRef = useRef(null);

  const checkScroll = useCallback(() => {
    if (!containerRef?.current) return;
    const el = containerRef.current;
    const isScrollable = el.scrollHeight > el.clientHeight;
    const isAtBottom =
      Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 2;
    setCanScroll(isScrollable && !isAtBottom);
  }, [containerRef]);

  const handleScrollDown = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientHeight * 0.75;
      containerRef.current.scrollBy({ top: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver(checkScroll);
    }
    resizeObserverRef.current.observe(container);

    if (!mutationObserverRef.current) {
      mutationObserverRef.current = new MutationObserver(checkScroll);
    }
    mutationObserverRef.current.observe(container, {
      childList: true,
      subtree: true,
    });

    container.addEventListener("scroll", checkScroll, { passive: true });

    setTimeout(checkScroll, 100);

    return () => {
      container.removeEventListener("scroll", checkScroll);

      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      if (mutationObserverRef.current) {
        mutationObserverRef.current.disconnect();
      }
    };
  }, [containerRef, checkScroll]);

  if (!canScroll) return null;

  return (
    <div className="hidden lg:flex absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-card to-transparent items-end justify-center pb-2 pointer-events-none rounded-b-3xl z-50">
      <Button
        onClick={handleScrollDown}
        className="pointer-events-auto flex items-center gap-1 rounded-full bg-porto-btn/90 backdrop-blur px-5 py-1! text-[10px] font-bold text-porto-btn-text shadow-sm hover:bg-porto-btn transition-colors"
      >
        {t("ScrollMore", "More")} ↓
      </Button>
    </div>
  );
}
