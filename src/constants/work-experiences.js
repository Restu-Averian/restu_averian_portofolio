import { tr } from "@/i18n";
import DataOnThumb from "@/assets/work-experiences/image-removebg-preview.png";

/**
 * @typedef {Object} LocalizedString
 * @property {boolean} __i18n
 * @property {string} key
 * @property {string} default
 */

/**
 * @typedef {Object} WorkExperience
 * @property {string} id
 * @property {LocalizedString|string} role
 * @property {LocalizedString|string} [employmentType]
 * @property {string} company
 * @property {LocalizedString|string} period
 * @property {boolean} isCurrent
 * @property {LocalizedString|string} shortSummary
 * @property {LocalizedString|string} overview
 * @property {(LocalizedString|string)[]} contributions
 * @property {(LocalizedString|string)[]} scope
 * @property {string} [logo]
 * @property {LocalizedString|string} [confidentialityNote]
 */

/** @type {WorkExperience[]} */
export const WORK_EXPERIENCES = [
  {
    id: "frontend-intern",
    role: tr("InternRole", "Frontend Engineer Intern"),
    employmentType: tr("InternEmploymentType", "Internship"),
    company: "PT. Indodev Niaga Internet",
    period: tr("InternPeriod", "August 2022 - February 2023"),
    isCurrent: false,
    shortSummary: tr(
      "InternSummary",
      "Frontend foundations, table usability improvements, legacy React refactoring, and reusable component development.",
    ),
    overview: tr(
      "InternOverview",
      "Contributed to frontend foundations through table usability improvements, legacy React refactoring, and reusable component development.",
    ),
    contributions: [
      tr(
        "InternContrib1",
        "Improved Ant Design table sorting to provide clearer and more consistent data presentation.",
      ),
      tr(
        "InternContrib2",
        "Refactored legacy React class components into functional components, improving page performance by approximately 10%.",
      ),
    ],
    scope: [
      tr("ScopeFrontendDevelopment", "Frontend Development"),
      tr("ScopeAntDesign", "Ant Design"),
      tr("ScopeLegacyReactRefactoring", "Legacy React Refactoring"),
      tr("ScopeReusableComponents", "Reusable Components"),
      tr("ScopePerformanceImprovement", "Performance Improvement"),
    ],
    logo: DataOnThumb,
  },
  {
    id: "frontend-staff",
    role: tr("FrontendEngineerRole", "Frontend Engineer"),
    employmentType: tr("StaffEmploymentType", "Staff"),
    company: "PT. Indodev Niaga Internet",
    period: tr("StaffPeriod", "February 2023 - Present"),
    isCurrent: true,
    shortSummary: tr(
      "FrontendStaffSummary",
      "Configurable internal tools, reusable UI systems, page-building interfaces, editor tooling, and frontend performance optimization.",
    ),
    overview: tr(
      "StaffOverview",
      "Building scalable React applications, configurable internal tools, reusable UI systems, and performance-critical frontend experiences.",
    ),
    contributions: [
      tr(
        "StaffContrib1",
        "Built a configurable Page Builder from scratch with React and Craft.js, supporting drag-and-drop composition, nested layouts, responsive settings, live preview, component configuration, undo/redo, and API-based save/load workflows.",
      ),
      tr(
        "StaffContrib2",
        "Integrated internal framework components and a broad set of Ant Design v4 components into the Page Builder, working with backend and design teams so implementation teams could configure client-facing pages without writing custom frontend code.",
      ),
      tr(
        "StaffContrib3",
        "Rebuilt an internal Chatbot Widget in React, reducing its bundle size by approximately 90%, from 2.5 MB to 244 KB, while adding offline handling and automatic reconnection.",
      ),
      tr(
        "StaffContrib4",
        "Extended Ant Design Transfer v4 using React and TypeScript with drag-select, shift-click, and double-click interactions. Optimized lookups with Map and Set to keep the interface responsive when handling more than 80,000 records.",
      ),
      tr(
        "StaffContrib5",
        "Built a GUI-based Form Customizer for more than 20 field types, reducing repetitive frontend changes and improving input responsiveness by replacing broad Form.useWatch subscriptions with localized React state.",
      ),
      tr(
        "StaffContrib6",
        "Migrated legacy Quill and SunEditor implementations to a custom Tiptap editor built on ProseMirror. Also developed a dependency-free Markdown Editor with stable JSX rendering, cursor preservation, and native undo/redo.",
      ),
      tr(
        "StaffContrib7",
        "Designed and delivered 6 practical JavaScript and React training sessions for groups of 3–7 new hires and interns across development and implementation teams, using live coding, exercises, and guided data-fetching projects.",
      ),
      tr(
        "StaffContrib8",
        "Used agentic AI throughout the development workflow to clarify requirements, explore technical approaches, speed up implementation, troubleshoot errors, review code changes, and improve documentation while retaining responsibility for technical decisions and production readiness.",
      ),
      tr(
        "StaffContrib9",
        "Used AI-assisted design exploration for smaller UI/UX requirements when a full design handoff was unnecessary, creating interface references and refining usability while keeping the result aligned with existing product requirements and design systems.",
      ),
    ],
    scope: [
      tr("ScopeReact", "React"),
      tr("ScopeTypeScript", "TypeScript"),
      tr("ScopeReusableUiSystems", "Reusable UI Systems"),
      tr("ScopeCraftJs", "Craft.js"),
      tr("ScopeAntDesign", "Ant Design"),
      tr("ScopeFormCustomizer", "Form Customizer"),
      tr("ScopePageBuilderInterfaces", "Page Builder Interfaces"),
      tr("ScopeTiptap", "Tiptap"),
      tr("ScopeProseMirror", "ProseMirror"),
      tr("ScopePerformanceOptimization", "Performance Optimization"),
      tr("ScopeRestApi", "REST API Integration"),
    ],
    confidentialityNote: tr(
      "ConfidentialityNote",
      "Specific product names, client information, screenshots, source code, business rules, and internal workflows are intentionally omitted due to confidentiality obligations.",
    ),
    logo: DataOnThumb,
  },
];
