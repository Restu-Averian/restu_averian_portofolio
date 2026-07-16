import DataOnThumb from "@/assets/work-experiences/image-removebg-preview.png";

/**
 * @typedef {Object} Contribution
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
 * @property {string} period
 * @property {boolean} isCurrent
 * @property {string} shortSummaryKey
 * @property {string} shortSummaryDefaultText
 * @property {string} overviewKey
 * @property {string} overviewDefaultText
 * @property {Contribution[]} contributions
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
    company: "PT. Indodev Niaga Internet",
    location: "South Tangerang, Indonesia",
    period: "August 2022 – February 2023",
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
          "Improved Ant Design table sorting for clearer and more consistent data presentation.",
      },
      {
        key: "InternContrib2",
        defaultText: "Refactored legacy React class components into functional components.",
      },
      {
        key: "InternContrib3",
        defaultText: "Improved page performance by approximately 10%.",
      },
    ],
    scope: [
      "Frontend Development",
      "Ant Design",
      "Legacy React Refactoring",
      "Reusable Components",
      "Performance Improvement",
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
    period: "February 2023 – Present",
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
          "Built a configurable Page Builder from scratch using React and Craft.js.",
      },
      {
        key: "StaffContrib2",
        defaultText:
          "Supported drag-and-drop composition, nested layouts, responsive settings, live preview, component configuration, undo/redo, and API-based save/load.",
      },
      {
        key: "StaffContrib3",
        defaultText:
          "Integrated internal framework components and Ant Design v4 components.",
      },
      {
        key: "StaffContrib4",
        defaultText:
          "Rebuilt an internal React Chatbot Widget and reduced its bundle size by approximately 90%, from 2.5 MB to 244 KB.",
      },
      {
        key: "StaffContrib5",
        defaultText:
          "Added offline handling and automatic reconnection to the Chatbot Widget.",
      },
      {
        key: "StaffContrib6",
        defaultText:
          "Extended Ant Design Transfer v4 with drag-select, shift-click, and double-click actions, using Map and Set to keep interactions responsive across more than 80,000 records.",
      },
      {
        key: "StaffContrib7",
        defaultText:
          "Built a GUI-based Form Customizer supporting more than 20 field types and improved input responsiveness by replacing broad Form.useWatch subscriptions with localized React state.",
      },
      {
        key: "StaffContrib8",
        defaultText:
          "Migrated Quill and SunEditor implementations to Tiptap and ProseMirror.",
      },
      {
        key: "StaffContrib9",
        defaultText:
          "Developed a dependency-free Markdown Editor with consistent JSX rendering, cursor preservation, and native undo/redo.",
      },
      {
        key: "StaffContrib10",
        defaultText:
          "Delivered 6 JavaScript and React training sessions for groups of 3-7 participants.",
      },
      {
        key: "StaffContrib11",
        defaultText:
          "Used agentic AI workflows for requirements analysis, planning, implementation, debugging, review, and documentation while retaining ownership of technical decisions.",
      },
    ],
    scope: [
      "React",
      "TypeScript",
      "Reusable UI Systems",
      "Craft.js",
      "Ant Design",
      "Form Customizer",
      "Page Builder Interfaces",
      "Tiptap",
      "ProseMirror",
      "Performance Optimization",
    ],
    confidentialityNoteKey: "ConfidentialityNote",
    confidentialityNoteDefaultText:
      "Specific product names, client information, screenshots, source code, business rules, and internal workflows are intentionally omitted due to confidentiality obligations.",
    logo: DataOnThumb,
  },
];
