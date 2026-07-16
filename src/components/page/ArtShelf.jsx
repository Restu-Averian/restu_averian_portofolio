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
        icon: LayoutGrid,
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
          ? "min-w-24 justify-center px-3 py-2 text-center"
          : "min-h-14 gap-2.5 px-3 py-2"
      }`}
      title={text}
    >
      {ProofIcon && !compact && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-porto-accent/75">
          <ProofIcon className="h-4 w-4" />
        </span>
      )}
      <span className={compact ? "block" : "block text-left"}>
        <span className="block text-base font-black leading-none">
          {metric}
        </span>
        {label && (
          <span className="mt-1 block text-[10px] font-bold leading-tight">
            {label}
          </span>
        )}
      </span>
    </span>
  );
};

const TechnicalHighlightCard = ({ highlight, t }) => {
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
        {!!highlight.proofPoints?.length && (
          <div className="grid gap-1.5">
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
        {highlight.tags.map((tag) => (
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

const ArtShelf_ = () => {
  const { t } = useTranslation();

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-porto-border/80 bg-card/80 p-3.5 shadow-sm">
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

      <div className="porto-scrollbar grid grid-cols-1 gap-2 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain lg:pr-1 lg:pb-1">
        {TECHNICAL_HIGHLIGHTS.map((highlight) => (
          <TechnicalHighlightCard
            key={highlight.titleKey}
            highlight={highlight}
            t={t}
          />
        ))}
        <div className="flex items-center gap-2 rounded-xl border border-porto-border/80 bg-background/35 px-3 py-2">
          <img
            src={MascottSticker}
            alt=""
            className="h-8 w-8 shrink-0 object-contain"
            aria-hidden="true"
          />
          <p className="flex-1 text-[11px] font-medium leading-snug text-foreground">
            {t(
              "ThanksForStoppingBy",
              "Thanks for stopping by! Let's build beautiful, cozy things together.",
            )}
          </p>
          <Sparkles className="h-4 w-4 shrink-0 text-porto-btn" />
        </div>
      </div>
    </section>
  );
};

const ArtShelf = memo(ArtShelf_);
export default ArtShelf;
