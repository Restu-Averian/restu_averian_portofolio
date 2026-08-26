import {
  Database,
  FileText,
  LayoutGrid,
  PencilLine,
  Server,
  TrendingUp,
  Zap,
} from "lucide-react";

export const TECHNICAL_HIGHLIGHTS = [
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
  {
    icon: Server,
    titleKey: "TechnicalHighlightFullStackTitle",
    titleDefaultText: "Full-Stack Development",
    descriptionKey: "TechnicalHighlightFullStackDescription",
    descriptionDefaultText:
      "Expanding beyond frontend through hands-on development with Node.js, TypeScript, Express, PostgreSQL, and REST APIs.",
    proofPoints: [
      {
        icon: TrendingUp,
        textKey: "TechnicalHighlightFullStackStatus",
        textDefaultText: "Currently expanding",
      },
    ],
    tags: [
      {
        labelKey: "TechnicalHighlightTagNodeJs",
        labelDefaultText: "Node.js",
      },
      {
        labelKey: "TechnicalHighlightTagTypeScript",
        labelDefaultText: "TypeScript",
      },
      {
        labelKey: "TechnicalHighlightTagExpress",
        labelDefaultText: "Express",
      },
      {
        labelKey: "TechnicalHighlightTagPostgreSQL",
        labelDefaultText: "PostgreSQL",
      },
      {
        labelKey: "TechnicalHighlightTagRESTAPI",
        labelDefaultText: "REST API",
      },
    ],
  },
];
