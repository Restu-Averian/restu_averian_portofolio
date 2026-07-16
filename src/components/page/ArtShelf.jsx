import {
  CodeXml,
  Database,
  FileText,
  LayoutGrid,
  PencilLine,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { memo } from "react";
import MascottSticker from "@/assets/work-experiences/mascott-sticker.webp";
import { useTranslation } from "@/i18n";

const TECHNICAL_HIGHLIGHTS = [
  {
    icon: LayoutGrid,
    titleKey: "TechnicalHighlightConfigurableTitle",
    titleDefaultText: "Configurable UI Systems",
    descriptionKey: "TechnicalHighlightConfigurableDescription",
    descriptionDefaultText:
      "Built page-building and form-customizer systems with reusable architecture, dynamic fields, validation, and responsive configuration.",
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
      {
        labelKey: "TechnicalHighlightTagAntDesign",
        labelDefaultText: "Ant Design",
      },
    ],
  },
  {
    icon: Zap,
    titleKey: "TechnicalHighlightPerformanceTitle",
    titleDefaultText: "Performance at Scale",
    descriptionKey: "TechnicalHighlightPerformanceDescription",
    descriptionDefaultText:
      "Optimized the Chatbot Widget and Ant Design Transfer interactions for stable, responsive large-data workflows.",
    proofPoints: [
      {
        icon: TrendingUp,
        textKey: "TechnicalHighlightPerformanceProofBundle",
        textDefaultText: "90% bundle reduction",
      },
      {
        icon: FileText,
        textKey: "TechnicalHighlightPerformanceProofBundleSize",
        textDefaultText: "2.5 MB to 244 KB",
      },
      {
        icon: Database,
        textKey: "TechnicalHighlightPerformanceProofRecords",
        textDefaultText: "80K+ records",
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
      {
        labelKey: "TechnicalHighlightTagChromeDevTools",
        labelDefaultText: "Chrome DevTools",
      },
    ],
  },
  {
    icon: PencilLine,
    titleKey: "TechnicalHighlightEditorTitle",
    titleDefaultText: "Editor & Developer Tooling",
    descriptionKey: "TechnicalHighlightEditorDescription",
    descriptionDefaultText:
      "Migrated rich-text editors to Tiptap and ProseMirror, then built Markdown tooling with JSX rendering, cursor preservation, and native undo/redo.",
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
  const match = text.match(/^(\S+(?:\s(?:MB|KB|GB))?)(?:\s+(.+))?$/);
  return { metric: match?.[1] ?? text, label: match?.[2] ?? "" };
};

const ProofPoint = ({ proofPoint, t, compact = false }) => {
  const text = t(proofPoint.textKey, proofPoint.textDefaultText);
  const { metric, label } = splitProofPoint(text);
  const ProofIcon = proofPoint.icon;

  return (
    <span
      className={`flex items-center rounded-[1.35rem] border border-porto-border/80 bg-background/35 text-porto-btn ${
        compact
          ? "min-w-28 justify-center px-3 py-2.5 text-center sm:min-w-34 lg:min-w-24 lg:px-3 lg:py-2.5 xl:min-w-28"
          : "min-h-16 gap-3 px-3 py-2.5 sm:min-h-18 sm:px-4 lg:min-h-17 lg:px-3 lg:py-2 xl:min-h-20 xl:px-4"
      }`}
      title={text}
    >
      {ProofIcon && !compact && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-porto-accent/75 sm:h-11 sm:w-11 lg:h-10 lg:w-10 xl:h-12 xl:w-12">
          <ProofIcon className="h-5 w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
        </span>
      )}
      <span className={compact ? "block" : "block text-left"}>
        <span className="block text-lg font-black leading-none sm:text-xl lg:text-xl xl:text-2xl">
          {metric}
        </span>
        {label && (
          <span className="mt-1 block text-[11px] font-bold leading-tight sm:text-xs lg:text-xs xl:text-sm">
            {label}
          </span>
        )}
      </span>
    </span>
  );
};

const TechnicalHighlightCard = ({ highlight, t, featured = false }) => {
  const HighlightIcon = highlight.icon;

  return (
    <article className="rounded-2xl border border-porto-border/80 bg-background/30 p-4 sm:p-5 lg:p-4 xl:p-5">
      <div className="flex items-start gap-3 sm:gap-4 lg:gap-3 xl:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-porto-accent/75 text-porto-btn sm:h-12 sm:w-12 lg:h-11 lg:w-11 xl:h-13 xl:w-13">
          <HighlightIcon className="h-6 w-6 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto]">
            <h3 className="text-lg font-black leading-tight text-foreground sm:text-xl lg:text-xl xl:text-2xl">
              {t(highlight.titleKey, highlight.titleDefaultText)}
            </h3>
            {!!highlight.proofPoints?.length && featured && (
              <div className="flex shrink-0 justify-start sm:justify-end">
                <ProofPoint
                  proofPoint={highlight.proofPoints[0]}
                  t={t}
                  compact
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          featured
            ? "mt-4"
            : "mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(13rem,0.78fr)] sm:items-start lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(12rem,0.82fr)]"
        }
      >
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-base xl:text-lg">
          {t(highlight.descriptionKey, highlight.descriptionDefaultText)}
        </p>
        {!!highlight.proofPoints?.length && !featured && (
          <div className="grid gap-3 lg:gap-3 xl:gap-4">
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

      <div className="mt-4 flex flex-wrap gap-2 xl:gap-3">
        {highlight.tags.map((tag) => (
          <span
            key={tag.labelKey}
            className="rounded-full bg-muted/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground xl:px-4 xl:text-sm"
          >
            {t(tag.labelKey, tag.labelDefaultText)}
          </span>
        ))}
      </div>
    </article>
  );
};

const ArtShelf_ = () => {
  const { t } = useTranslation();

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-porto-border/80 bg-card/85 p-4 sm:p-5 lg:p-4 xl:p-5">
      <div className="mb-5 flex shrink-0 items-start gap-4 lg:mb-4 lg:gap-3 xl:gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-porto-btn text-porto-btn-text lg:h-11 lg:w-11 xl:h-13 xl:w-13">
          <CodeXml className="h-6 w-6 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
        </span>
        <div>
          <h2 className="text-2xl font-black leading-tight text-foreground lg:text-2xl xl:text-3xl">
            {t("TechnicalHighlights", "Technical Highlights")}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground xl:text-base">
            {t(
              "TechnicalHighlightsDescription",
              "Selected strengths demonstrated through production frontend work.",
            )}
          </p>
        </div>
      </div>

      <div className="porto-scrollbar grid grid-cols-1 gap-4 lg:min-h-0 lg:flex-1 lg:gap-3 lg:overflow-y-auto lg:overscroll-contain lg:pr-1 lg:pb-1 xl:gap-4">
        {TECHNICAL_HIGHLIGHTS.map((highlight, index) => (
          <TechnicalHighlightCard
            key={highlight.titleKey}
            highlight={highlight}
            t={t}
            featured={index === 0}
          />
        ))}
        <div className="flex items-center gap-3 rounded-2xl border border-porto-border/80 bg-background/35 px-4 py-3 xl:px-5">
          <img
            src={MascottSticker}
            alt=""
            className="h-10 w-10 shrink-0 object-contain xl:h-12 xl:w-12"
            aria-hidden="true"
          />
          <p className="flex-1 text-sm font-medium leading-snug text-foreground xl:text-base">
            {t(
              "ThanksForStoppingBy",
              "Thanks for stopping by! Let's build beautiful, cozy things together.",
            )}
          </p>
          <Sparkles className="h-5 w-5 shrink-0 text-porto-btn xl:h-6 xl:w-6" />
        </div>
      </div>
    </section>
  );
};

const ArtShelf = memo(ArtShelf_);
export default ArtShelf;
