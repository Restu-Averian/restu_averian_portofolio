import { Icon } from "@iconify/react";
import { memo } from "react";
import { useTranslation } from "@/i18n";

const TECHNICAL_HIGHLIGHTS = [
  {
    icon: "solar:widget-2-linear",
    titleKey: "HighlightConfigurableTitle",
    titleDefaultText: "Configurable UI Systems",
    descriptionKey: "HighlightConfigurableDesc",
    descriptionDefaultText:
      "Built page-building and form-customization interfaces with configurable components, dynamic fields, validation behavior, responsive settings, preview workflows, and reusable interaction patterns.",
    tags: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "Craft.js" },
      { labelKey: "TagDynamicForms", labelDefaultText: "Dynamic Forms" },
      {
        labelKey: "TagComponentArchitecture",
        labelDefaultText: "Component Architecture",
      },
    ],
  },
  {
    icon: "solar:bolt-linear",
    titleKey: "HighlightPerformanceTitle",
    titleDefaultText: "Performance at Scale",
    descriptionKey: "HighlightPerformanceDesc",
    descriptionDefaultText:
      "Optimized legacy and data-heavy interfaces, including a 90% bundle-size reduction and responsive interactions across more than 80,000 records.",
    tags: [
      {
        labelKey: "TagPerformanceOptimization",
        labelDefaultText: "Performance Optimization",
      },
      { label: "Map and Set" },
      {
        labelKey: "TagRenderingStability",
        labelDefaultText: "Rendering Stability",
      },
      { label: "Chrome DevTools" },
    ],
    metrics: [
      {
        value: "90%",
        labelKey: "MetricBundleReductionShort",
        labelDefaultText: "Bundle reduction",
      },
      {
        value: "80K+",
        labelKey: "MetricInteractiveRecords",
        labelDefaultText: "Interactive records",
      },
    ],
  },
  {
    icon: "solar:pen-new-square-linear",
    titleKey: "HighlightEditorTitle",
    titleDefaultText: "Editor and Developer Tooling",
    descriptionKey: "HighlightEditorDesc",
    descriptionDefaultText:
      "Developed and migrated rich-text and Markdown editing experiences using Tiptap, ProseMirror, reusable JSX rendering, cursor preservation, and native undo/redo.",
    tags: [
      { label: "Tiptap" },
      { label: "ProseMirror" },
      { label: "Markdown" },
      {
        labelKey: "TagEditorArchitecture",
        labelDefaultText: "Editor Architecture",
      },
      {
        labelKey: "TagDeveloperTooling",
        labelDefaultText: "Developer Tooling",
      },
    ],
  },
];

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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        {TECHNICAL_HIGHLIGHTS.map((highlight) => (
          <article
            key={highlight.titleKey}
            className="rounded-2xl border border-porto-border bg-card p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-porto-accent text-porto-btn">
                <Icon icon={highlight.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-tight text-foreground">
                  {t(highlight.titleKey, highlight.titleDefaultText)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {t(
                    highlight.descriptionKey,
                    highlight.descriptionDefaultText,
                  )}
                </p>
              </div>
            </div>

            {highlight.metrics && (
              <div className="mt-3 grid grid-cols-2 gap-2">
                {highlight.metrics.map((metric) => (
                  <div
                    key={metric.labelKey}
                    className="rounded-xl border border-porto-border bg-porto-surface-elevated px-3 py-2"
                  >
                    <p className="text-base font-bold text-porto-btn">
                      {metric.value}
                    </p>
                    <p className="text-[11px] leading-tight text-muted-foreground">
                      {t(metric.labelKey, metric.labelDefaultText)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {highlight.tags.map((tag) => (
                <span
                  key={tag.labelKey ?? tag.label}
                  className="rounded-md border border-porto-chip-border bg-porto-chip px-2 py-0.5 text-[10px] font-medium text-porto-chip-text"
                >
                  {tag.labelKey
                    ? t(tag.labelKey, tag.labelDefaultText)
                    : tag.label}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const ArtShelf = memo(ArtShelf_);
export default ArtShelf;
