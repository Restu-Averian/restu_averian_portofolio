import DataOnThumb from "@/assets/work-experiences/image-removebg-preview.png";

/**
 * @typedef {Object} Contribution
 * @property {string} key
 * @property {string} defaultText
 */

/**
 * @typedef {Object} TranslatableLabel
 * @property {string} key
 * @property {string} defaultText
 */

/**
 * @typedef {Object} WorkExperience
 * @property {string} id
 * @property {string} roleKey
 * @property {string} roleDefaultText
 * @property {string} [employmentTypeKey]
 * @property {string} [employmentTypeDefaultText]
 * @property {string} company
 * @property {string} [location]
 * @property {string} periodKey
 * @property {string} periodDefaultText
 * @property {boolean} isCurrent
 * @property {string} shortSummaryKey
 * @property {string} shortSummaryDefaultText
 * @property {string} overviewKey
 * @property {string} overviewDefaultText
 * @property {Contribution[]} contributions
 * @property {TranslatableLabel[]} scope
 * @property {string} [logo]
 * @property {string} [confidentialityNoteKey]
 * @property {string} [confidentialityNoteDefaultText]
 */

/** @type {WorkExperience[]} */
export const WORK_EXPERIENCES = [
  {
    id: "frontend-intern",
    roleKey: "InternRole",
    roleDefaultText: "Frontend Engineer Intern",
    employmentTypeKey: "InternEmploymentType",
    employmentTypeDefaultText: "Internship",
    company: "PT. Indodev Niaga Internet",
    location: "South Tangerang, Indonesia",
    periodKey: "InternPeriod",
    periodDefaultText: "August 2022 - February 2023",
    isCurrent: false,
    shortSummaryKey: "InternSummary",
    shortSummaryDefaultText:
      "Frontend foundations, table usability improvements, legacy React refactoring, and reusable component development.",
    overviewKey: "InternOverview",
    overviewDefaultText:
      "Contributed to frontend foundations through table usability improvements, legacy React refactoring, and reusable component development.",
    contributions: [
      {
        key: "InternContrib1",
        defaultText:
          "Improved Ant Design table sorting to provide clearer and more consistent data presentation.",
      },
      {
        key: "InternContrib2",
        defaultText:
          "Refactored legacy React class components into functional components, improving page performance by approximately 10%.",
      },
    ],
    scope: [
      { key: "ScopeFrontendDevelopment", defaultText: "Frontend Development" },
      { key: "ScopeAntDesign", defaultText: "Ant Design" },
      {
        key: "ScopeLegacyReactRefactoring",
        defaultText: "Legacy React Refactoring",
      },
      { key: "ScopeReusableComponents", defaultText: "Reusable Components" },
      {
        key: "ScopePerformanceImprovement",
        defaultText: "Performance Improvement",
      },
    ],
    logo: DataOnThumb,
  },
  {
    id: "frontend-staff",
    roleKey: "FrontendEngineerRole",
    roleDefaultText: "Frontend Engineer",
    employmentTypeKey: "StaffEmploymentType",
    employmentTypeDefaultText: "Staff",
    company: "PT. Indodev Niaga Internet",
    location: "South Tangerang, Indonesia",
    periodKey: "StaffPeriod",
    periodDefaultText: "February 2023 - Present",
    isCurrent: true,
    shortSummaryKey: "FrontendStaffSummary",
    shortSummaryDefaultText:
      "Configurable internal tools, reusable UI systems, page-building interfaces, editor tooling, and frontend performance optimization.",
    overviewKey: "StaffOverview",
    overviewDefaultText:
      "Building scalable React applications, configurable internal tools, reusable UI systems, and performance-critical frontend experiences.",
    contributions: [
      {
        key: "StaffContrib1",
        defaultText:
          "Built a configurable Page Builder from scratch with React and Craft.js, supporting drag-and-drop composition, nested layouts, responsive settings, live preview, component configuration, undo/redo, and API-based save/load workflows.",
      },
      {
        key: "StaffContrib2",
        defaultText:
          "Integrated internal framework components and a broad set of Ant Design v4 components into the Page Builder, working with backend and design teams so implementation teams could configure client-facing pages without writing custom frontend code.",
      },
      {
        key: "StaffContrib3",
        defaultText:
          "Rebuilt an internal Chatbot Widget in React, reducing its bundle size by approximately 90%, from 2.5 MB to 244 KB, while adding offline handling and automatic reconnection.",
      },
      {
        key: "StaffContrib4",
        defaultText:
          "Extended Ant Design Transfer v4 using React and TypeScript with drag-select, shift-click, and double-click interactions. Optimized lookups with Map and Set to keep the interface responsive when handling more than 80,000 records.",
      },
      {
        key: "StaffContrib5",
        defaultText:
          "Built a GUI-based Form Customizer for more than 20 field types, reducing repetitive frontend changes and improving input responsiveness by replacing broad Form.useWatch subscriptions with localized React state.",
      },
      {
        key: "StaffContrib6",
        defaultText:
          "Migrated legacy Quill and SunEditor implementations to a custom Tiptap editor built on ProseMirror. Also developed a dependency-free Markdown Editor with stable JSX rendering, cursor preservation, and native undo/redo.",
      },
      {
        key: "StaffContrib7",
        defaultText:
          "Designed and delivered 6 practical JavaScript and React training sessions for groups of 3–7 new hires and interns across development and implementation teams, using live coding, exercises, and guided data-fetching projects.",
      },
      {
        key: "StaffContrib8",
        defaultText:
          "Used agentic AI throughout the development workflow to clarify requirements, explore technical approaches, speed up implementation, troubleshoot errors, review code changes, and improve documentation while retaining responsibility for technical decisions and production readiness.",
      },
      {
        key: "StaffContrib9",
        defaultText:
          "Used AI-assisted design exploration for smaller UI/UX requirements when a full design handoff was unnecessary, creating interface references and refining usability while keeping the result aligned with existing product requirements and design systems.",
      },
    ],
    scope: [
      { key: "ScopeReact", defaultText: "React" },
      { key: "ScopeTypeScript", defaultText: "TypeScript" },
      { key: "ScopeReusableUiSystems", defaultText: "Reusable UI Systems" },
      { key: "ScopeCraftJs", defaultText: "Craft.js" },
      { key: "ScopeAntDesign", defaultText: "Ant Design" },
      { key: "ScopeFormCustomizer", defaultText: "Form Customizer" },
      {
        key: "ScopePageBuilderInterfaces",
        defaultText: "Page Builder Interfaces",
      },
      { key: "ScopeTiptap", defaultText: "Tiptap" },
      { key: "ScopeProseMirror", defaultText: "ProseMirror" },
      {
        key: "ScopePerformanceOptimization",
        defaultText: "Performance Optimization",
      },
      { key: "ScopeRestApi", defaultText: "REST API Integration" },
    ],
    confidentialityNoteKey: "ConfidentialityNote",
    confidentialityNoteDefaultText:
      "Specific product names, client information, screenshots, source code, business rules, and internal workflows are intentionally omitted due to confidentiality obligations.",
    logo: DataOnThumb,
  },
];
