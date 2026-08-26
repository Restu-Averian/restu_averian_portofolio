import { ProofPoint } from "./ProofPoint";
import { useTranslation } from "@/i18n";

export const TechnicalHighlightCard = ({ highlight, className = "" }) => {
  const { t } = useTranslation();
  const HighlightIcon = highlight.icon;
  const description = highlight.description ?? highlight.desc;

  return (
    <article
      className={`${className} rounded-xl border border-porto-border/80 bg-background/30 p-2.5`}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-porto-accent/75 text-porto-btn">
          <HighlightIcon className="h-4 w-4" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-[13px] font-bold leading-tight text-foreground">
            {highlight.title?.__i18n
              ? t(highlight.title.key, highlight.title.default)
              : (highlight.title ?? "")}
          </h3>
        </div>
      </div>

      <div className="mt-2 grid gap-2">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          {description?.__i18n
            ? t(description.key, description.default)
            : (description ?? "")}
        </p>

        {highlight?.proofPoints?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {highlight.proofPoints.map((proofPoint, index) => (
              <ProofPoint
                key={proofPoint.text?.key || proofPoint.text || index}
                proofPoint={proofPoint}
                t={t}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {highlight?.tags?.map((tag, index) => (
          <span
            key={tag.label?.key || tag.label || index}
            className="rounded-md bg-muted/70 px-2 py-0.5 text-[9px] font-medium text-muted-foreground"
          >
            {tag.label?.__i18n
              ? t(tag.label.key, tag.label.default)
              : (tag.label ?? tag)}
          </span>
        ))}
      </div>
    </article>
  );
};
