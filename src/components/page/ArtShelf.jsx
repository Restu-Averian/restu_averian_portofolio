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

const splitProofPoint = (text) => {
  const [metric, ...rest] = text.split(" ");
  return { metric, label: rest.join(" ") };
};

const ProofPoint = ({ proofPoint, t }) => {
  const text = t(proofPoint.textKey, proofPoint.textDefaultText);
  const { metric, label } = splitProofPoint(text);

  return (
    <span
      className="rounded-lg border border-porto-border bg-porto-accent/45 px-2 py-1 text-right leading-none text-porto-btn"
      title={text}
    >
      <span className="block text-sm font-bold">{metric}</span>
      {label && (
        <span className="mt-0.5 block text-[9px] font-semibold leading-tight">
          {label}
        </span>
      )}
    </span>
  );
};

const TechnicalHighlightCard = ({ highlight, t }) => (
  <article className="rounded-xl border border-porto-border/80 bg-background/45 p-2.5 transition-colors hover:bg-background/70">
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-porto-accent/65 text-porto-btn">
        <Icon icon={highlight.icon} className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
          <h3 className="text-[13px] font-bold leading-tight text-foreground">
            {t(highlight.titleKey, highlight.titleDefaultText)}
          </h3>
          {!!highlight.proofPoints?.length && (
            <div className="flex shrink-0 flex-col items-end gap-1">
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
        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
          {t(highlight.descriptionKey, highlight.descriptionDefaultText)}
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {highlight.tags.map((tag) => (
            <span
              key={tag.labelKey}
              className="rounded-md bg-muted/70 px-2 py-0.5 text-[9px] font-medium text-muted-foreground"
            >
              {t(tag.labelKey, tag.labelDefaultText)}
            </span>
          ))}
        </div>
      </div>
    </div>
  </article>
);

const ArtShelf_ = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full rounded-3xl border border-porto-border/80 bg-card/80 p-3.5 shadow-sm">
      <div className="mb-3 flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-porto-btn text-porto-btn-text">
          <Icon icon="solar:code-square-linear" className="h-4 w-4" />
        </span>
        <div>
          <h2 className="text-lg font-bold leading-tight text-foreground">
            {t("TechnicalHighlights", "Technical Highlights")}
          </h2>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
            {t(
              "TechnicalHighlightsDescription",
              "Selected strengths demonstrated through production frontend work.",
            )}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
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
