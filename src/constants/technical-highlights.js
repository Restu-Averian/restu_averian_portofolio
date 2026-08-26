import { tr } from "@/i18n";
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
    title: tr("TechnicalHighlightConfigurableTitle", "Configurable UI Systems"),
    description: tr(
      "TechnicalHighlightConfigurableDescription",
      "Built page-building and form-customizer systems with reusable architecture, dynamic fields, validation, and responsive configuration.",
    ),
    proofPoints: [
      {
        icon: LayoutGrid,
        text: tr("TechnicalHighlightConfigurableProofPoint", "20+ field types"),
      },
    ],
    tags: [
      {
        label: tr("TechnicalHighlightTagReact", "React"),
      },
      {
        label: tr("TechnicalHighlightTagTypeScript", "TypeScript"),
      },
      {
        label: tr("TechnicalHighlightTagCraft", "Craft.js"),
      },
      {
        label: tr("TechnicalHighlightTagAntDesign", "Ant Design"),
      },
    ],
  },
  {
    icon: Zap,
    title: tr("TechnicalHighlightPerformanceTitle", "Performance at Scale"),
    description: tr(
      "TechnicalHighlightPerformanceDescription",
      "Optimized the Chatbot Widget and Ant Design Transfer interactions for stable, responsive large-data workflows.",
    ),
    proofPoints: [
      {
        icon: TrendingUp,
        text: tr(
          "TechnicalHighlightPerformanceProofBundle",
          "90% bundle reduction",
        ),
      },
      {
        icon: FileText,
        text: tr(
          "TechnicalHighlightPerformanceProofBundleSize",
          "2.5 MB to 244 KB",
        ),
      },
      {
        icon: Database,
        text: tr("TechnicalHighlightPerformanceProofRecords", "80K+ records"),
      },
    ],
    tags: [
      {
        label: tr("TechnicalHighlightTagPerformance", "Performance"),
      },
      {
        label: tr("TechnicalHighlightTagMapSet", "Map & Set"),
      },
      {
        label: tr("TechnicalHighlightTagChromeDevTools", "Chrome DevTools"),
      },
    ],
  },
  {
    icon: PencilLine,
    title: tr("TechnicalHighlightEditorTitle", "Editor & Developer Tooling"),
    description: tr(
      "TechnicalHighlightEditorDescription",
      "Migrated rich-text editors to Tiptap and ProseMirror, then built Markdown tooling with JSX rendering, cursor preservation, and native undo/redo.",
    ),
    tags: [
      {
        label: tr("TechnicalHighlightTagTiptap", "Tiptap"),
      },
      {
        label: tr("TechnicalHighlightTagProseMirror", "ProseMirror"),
      },
      {
        label: tr("TechnicalHighlightTagMarkdown", "Markdown"),
      },
    ],
  },
  {
    icon: Server,
    title: tr("TechnicalHighlightFullStackTitle", "Full-Stack Development"),
    description: tr(
      "TechnicalHighlightFullStackDescription",
      "Expanding beyond frontend through hands-on development with Node.js, TypeScript, Express, PostgreSQL, and REST APIs.",
    ),
    proofPoints: [
      {
        icon: TrendingUp,
        text: tr("TechnicalHighlightFullStackStatus", "Currently expanding"),
      },
    ],
    tags: [
      {
        label: tr("TechnicalHighlightTagNodeJs", "Node.js"),
      },
      {
        label: tr("TechnicalHighlightTagTypeScript", "TypeScript"),
      },
      {
        label: tr("TechnicalHighlightTagExpress", "Express"),
      },
      {
        label: tr("TechnicalHighlightTagPostgreSQL", "PostgreSQL"),
      },
      {
        label: tr("TechnicalHighlightTagRESTAPI", "REST API"),
      },
    ],
  },
];
