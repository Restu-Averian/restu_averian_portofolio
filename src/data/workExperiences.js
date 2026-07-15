import DataOnThumb from "@/assets/work-experiences/image-removebg-preview.png";

/**
 * @typedef {Object} WorkExperience
 * @property {string} id
 * @property {string} roleKey
 * @property {string} roleDefaultText
 * @property {string} [employmentTypeKey]
 * @property {string} [employmentTypeDefaultText]
 * @property {string} company
 * @property {string} location
 * @property {string} periodKey
 * @property {string} periodDefaultText
 * @property {boolean} isCurrent
 * @property {string} shortSummaryKey
 * @property {string} shortSummaryDefaultText
 * @property {string} overviewKey
 * @property {string} overviewDefaultText
 * @property {{key: string, defaultText: string, items?: {key: string, defaultText: string}[]}[]} contributions
 * @property {{value: string, labelKey: string, labelDefaultText: string}[]} [impact]
 * @property {string[]} scope
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
    company: "PT Indodev Niaga Internet",
    location: "South Tangerang, Indonesia",
    periodKey: "InternPeriod",
    periodDefaultText: "August 2022 - February 2023",
    isCurrent: false,
    shortSummaryKey: "InternSummary",
    shortSummaryDefaultText:
      "Frontend foundations, responsive implementation, legacy component modernization, and reusable component development.",
    overviewKey: "InternOverview",
    overviewDefaultText:
      "Built frontend foundations through responsive implementation, legacy component modernization, and reusable component development.",
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
    impact: [
      {
        value: "10%",
        labelKey: "MetricInternPerformance",
        labelDefaultText: "Approximate page-performance improvement",
      },
    ],
    scope: [
      "React",
      "Ant Design",
      "Responsive Web Design",
      "Reusable Components",
      "Legacy Modernization",
    ],
    confidentialityNoteKey: "ConfidentialityNote",
    confidentialityNoteDefaultText:
      "Specific product names, client information, screenshots, source code, and internal business workflows are omitted due to confidentiality obligations.",
    logo: DataOnThumb,
  },
  {
    id: "frontend-staff",
    roleKey: "FrontendEngineerRole",
    roleDefaultText: "Frontend Engineer",
    employmentTypeKey: "StaffEmploymentType",
    employmentTypeDefaultText: "Staff",
    company: "PT Indodev Niaga Internet",
    location: "South Tangerang, Indonesia",
    periodKey: "StaffPeriod",
    periodDefaultText: "February 2023 - Present",
    isCurrent: true,
    shortSummaryKey: "FrontendStaffSummary",
    shortSummaryDefaultText:
      "Configurable internal tools, reusable UI systems, editor tooling, and frontend performance optimization.",
    overviewKey: "StaffOverview",
    overviewDefaultText:
      "Builds scalable React applications, configurable internal tools, reusable UI systems, editor tooling, and performance-critical frontend experiences.",
    contributions: [
      {
        key: "StaffContrib1",
        defaultText:
          "Built a configurable Page Builder from scratch with React and Craft.js.",
        items: [
          {
            key: "StaffContrib1Item1",
            defaultText: "Supported drag-and-drop composition and nested layouts.",
          },
          {
            key: "StaffContrib1Item2",
            defaultText:
              "Added responsive settings, live preview, component configuration, undo and redo, and API-based save/load workflows.",
          },
        ],
      },
      {
        key: "StaffContrib2",
        defaultText:
          "Integrated internal framework components and a broad set of Ant Design v4 components into the Page Builder.",
      },
      {
        key: "StaffContrib3",
        defaultText:
          "Rebuilt an internal Chatbot Widget in React, reducing bundle size by approximately 90% from 2.5 MB to 244 KB while adding offline handling and automatic reconnection.",
      },
      {
        key: "StaffContrib4",
        defaultText:
          "Extended Ant Design Transfer v4 using React and TypeScript with drag-select, shift-click, and double-click actions.",
        items: [
          {
            key: "StaffContrib4Item1",
            defaultText:
              "Optimized lookups with Map and Set and maintained responsive interactions across more than 80,000 records.",
          },
        ],
      },
      {
        key: "StaffContrib5",
        defaultText:
          "Built a GUI-based Form Customizer for more than 20 field types, reducing repetitive frontend changes.",
        items: [
          {
            key: "StaffContrib5Item1",
            defaultText:
              "Improved responsiveness by replacing broad Form.useWatch subscriptions with localized React state.",
          },
        ],
      },
      {
        key: "StaffContrib6",
        defaultText:
          "Migrated legacy Quill and SunEditor implementations to a custom Tiptap editor built on ProseMirror.",
      },
      {
        key: "StaffContrib7",
        defaultText:
          "Developed a dependency-free Markdown Editor with consistent JSX rendering, cursor preservation, and native undo/redo.",
      },
      {
        key: "StaffContrib8",
        defaultText:
          "Designed and delivered six hands-on JavaScript and React training sessions for groups of 3-7 participants, including new hires, developers, implementation team members, and interns.",
      },
      {
        key: "StaffContrib9",
        defaultText:
          "Adopted agentic AI workflows for requirements analysis, solution planning, frontend implementation, debugging, code review, and documentation while retaining ownership of technical decisions and production readiness.",
      },
    ],
    impact: [
      {
        value: "90%",
        labelKey: "MetricBundleReduction",
        labelDefaultText: "Approximate bundle-size reduction",
      },
      {
        value: "2.5 MB -> 244 KB",
        labelKey: "MetricBundleSize",
        labelDefaultText: "Chatbot Widget bundle size",
      },
      {
        value: "80K+",
        labelKey: "MetricRecords",
        labelDefaultText: "Responsive interactive records",
      },
      {
        value: "20+",
        labelKey: "MetricFieldTypes",
        labelDefaultText: "Configurable form field types",
      },
      {
        value: "6",
        labelKey: "MetricTraining",
        labelDefaultText: "Technical training sessions",
      },
    ],
    scope: [
      "React",
      "TypeScript",
      "Craft.js",
      "Tiptap",
      "ProseMirror",
      "Ant Design",
      "Zustand",
      "REST API Integration",
      "Frontend Performance Optimization",
      "Reusable Component Architecture",
      "AI-Assisted Engineering",
    ],
    confidentialityNoteKey: "ConfidentialityNote",
    confidentialityNoteDefaultText:
      "Specific product names, client information, screenshots, source code, and internal business workflows are omitted due to confidentiality obligations.",
    logo: DataOnThumb,
  },
];
