import { ProofPoint } from "./ProofPoint";

export const TechnicalHighlightCard = ({ highlight, t }) => {
  const HighlightIcon = highlight.icon;

  return (
    <article className="rounded-xl border border-porto-border/80 bg-background/30 p-2.5">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-porto-accent/75 text-porto-btn">
          <HighlightIcon className="h-4 w-4" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-[13px] font-bold leading-tight text-foreground">
            {t(highlight.titleKey, highlight.titleDefaultText)}
          </h3>
        </div>
      </div>

      <div className="mt-2 grid gap-2">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          {t(highlight.descriptionKey, highlight.descriptionDefaultText)}
        </p>

        {highlight?.proofPoints?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {highlight.proofPoints.map((proofPoint) => (
              <ProofPoint
                key={proofPoint.textKey}
                proofPoint={proofPoint}
                t={t}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {highlight?.tags?.map((tag) => (
          <span
            key={tag.labelKey}
            className="rounded-md bg-muted/70 px-2 py-0.5 text-[9px] font-medium text-muted-foreground"
          >
            {t(tag.labelKey, tag.labelDefaultText)}
          </span>
        ))}
      </div>
    </article>
  );
};
