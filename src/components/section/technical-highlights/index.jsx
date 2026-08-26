import { CodeXml } from "lucide-react";
import { memo, useRef } from "react";
import { useTranslation } from "@/i18n";
import ScrollAffordance from "@/components/ui/scroll-affordance";
import { TECHNICAL_HIGHLIGHTS } from "@/constants/technical-highlights";
import { TechnicalHighlightCard } from "./TechnicalHighlightCard";

const TechnicalHighlights_ = () => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-porto-border/80 bg-card/80 p-3.5 shadow-sm relative">
      <div className="mb-3 flex shrink-0 items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-porto-btn text-porto-btn-text">
          <CodeXml className="h-4 w-4" />
        </span>

        <div>
          <h2 className="text-lg font-bold leading-tight text-foreground">
            {t("TechnicalHighlights", "Technical Highlights")}
          </h2>

          <p className="mt-0.5 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            {t(
              "TechnicalHighlightsDescription",
              "Selected strengths demonstrated through production frontend work.",
            )}
          </p>
        </div>
      </div>

      <div
        className="porto-scrollbar grid grid-cols-1 gap-2 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain lg:pr-1 lg:pb-1"
        ref={scrollRef}
      >
        {TECHNICAL_HIGHLIGHTS.map((highlight) => (
          <TechnicalHighlightCard
            key={highlight.titleKey}
            highlight={highlight}
            t={t}
          />
        ))}
      </div>

      <ScrollAffordance containerRef={scrollRef} />
    </section>
  );
};

const TechnicalHighlights = memo(TechnicalHighlights_);
export default TechnicalHighlights;
