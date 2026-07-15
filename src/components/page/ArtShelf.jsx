import { Icon } from "@iconify/react";
import { memo } from "react";
import { useTranslation } from "@/i18n";

const TECHNICAL_HIGHLIGHTS = [
  {
    icon: "solar:widget-2-linear",
    titleKey: "TechnicalHighlightConfigurableTitle",
    titleDefaultText: "Configurable UI Systems",
    descriptionKey: "TechnicalHighlightConfigurableDescription",
    descriptionDefaultText:
      "Built configurable page-building and form interfaces with dynamic fields, validation, and reusable patterns.",
    proofPoints: [
      {
        textKey: "TechnicalHighlightConfigurableProofPoint",
        textDefaultText: "20+ field types",
      },
    ],
    tags: [
      {
        labelKey: "TechnicalHighlightTagReact",
        labelDefaultText: "React",
      },
      {
        labelKey: "TechnicalHighlightTagTypeScript",
        labelDefaultText: "TypeScript",
      },
      {
        labelKey: "TechnicalHighlightTagCraft",
        labelDefaultText: "Craft.js",
      },
    ],
  },
  {
    icon: "solar:bolt-linear",
    titleKey: "TechnicalHighlightPerformanceTitle",
    titleDefaultText: "Performance at Scale",
    descriptionKey: "TechnicalHighlightPerformanceDescription",
    descriptionDefaultText:
      "Optimized data-heavy interfaces while maintaining responsive interactions across large datasets.",
    proofPoints: [
      {
        textKey: "TechnicalHighlightPerformanceProofBundle",
        textDefaultText: "90% bundle reduction",
      },
      {
        textKey: "TechnicalHighlightPerformanceProofRecords",
        textDefaultText: "80K+ interactive records",
      },
    ],
    tags: [
      {
        labelKey: "TechnicalHighlightTagPerformance",
        labelDefaultText: "Performance",
      },
      {
        labelKey: "TechnicalHighlightTagMapSet",
        labelDefaultText: "Map & Set",
      },
    ],
  },
  {
    icon: "solar:pen-new-square-linear",
    titleKey: "TechnicalHighlightEditorTitle",
    titleDefaultText: "Editor & Developer Tooling",
    descriptionKey: "TechnicalHighlightEditorDescription",
    descriptionDefaultText:
      "Built rich-text and Markdown editor experiences with cursor preservation and native undo/redo.",
    tags: [
      {
        labelKey: "TechnicalHighlightTagTiptap",
        labelDefaultText: "Tiptap",
      },
      {
        labelKey: "TechnicalHighlightTagProseMirror",
        labelDefaultText: "ProseMirror",
      },
      {
        labelKey: "TechnicalHighlightTagMarkdown",
        labelDefaultText: "Markdown",
      },
    ],
  },
];

const TechnicalHighlightCard = ({ highlight, t }) => (
  <article className="flex h-full flex-col rounded-2xl border border-porto-border bg-card p-4 shadow-sm">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-porto-accent text-porto-btn">
        <Icon icon={highlight.icon} className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-bold leading-tight text-foreground">
          {t(highlight.titleKey, highlight.titleDefaultText)}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {t(highlight.descriptionKey, highlight.descriptionDefaultText)}
        </p>
      </div>
    </div>

    <div className="mt-auto pt-3">
      {highlight.proofPoints?.length > 0 && (
        <div
          className={
            highlight.proofPoints.length > 1 ? "grid grid-cols-2 gap-2" : "flex"
          }
        >
          {highlight.proofPoints.map((proofPoint) => (
            <p
              key={proofPoint.textKey}
              className="flex w-full items-center justify-center text-center rounded-xl border border-porto-border bg-porto-surface-elevated px-3 py-2 text-xs font-bold leading-tight text-porto-btn"
            >
              {t(proofPoint.textKey, proofPoint.textDefaultText)}
            </p>
          ))}
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-1.5">
        {highlight.tags.map((tag) => (
          <span
            key={tag.labelKey}
            className="rounded-md border border-porto-chip-border bg-porto-chip px-2 py-0.5 text-[10px] font-medium text-porto-chip-text"
          >
            {t(tag.labelKey, tag.labelDefaultText)}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const ArtShelf_ = () => {
  const { t } = useTranslation();

  return (
    <section className="rounded-3xl p-6 relative">
      <div className="flex flex-col items-start md:flex-row md:items-center gap-1 md:gap-3 mb-4">
        <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Icon
            icon="solar:stars-minimalistic-bold"
            className="text-porto-gold h-5 w-5"
          />
          {t("TechnicalHighlights", "Technical Highlights")}
        </h2>
        <span className="text-xs text-muted-foreground">
          {t(
            "TechnicalHighlightsDescription",
            "Selected strengths demonstrated through production frontend work.",
          )}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {TECHNICAL_HIGHLIGHTS.map((highlight) => (
          <TechnicalHighlightCard
            key={highlight.titleKey}
            highlight={highlight}
            t={t}
          />
        ))}
      </div>
    </section>
  );
};

const ArtShelf = memo(ArtShelf_);
export default ArtShelf;
