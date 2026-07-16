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
    period: "August 2022 – February 2023",
    isCurrent: false,
    shortSummaryKey: "InternSummary",
    shortSummaryDefaultText:
      "Frontend foundations, responsive implementation, and reusable component development.",
    overviewKey: "InternOverview",
    overviewDefaultText:
      "Contributed to production frontend development while learning the team’s engineering workflow, component patterns, and delivery process.",
    contributions: [
      {
        key: "InternContrib1",
        defaultText:
          "Implemented responsive user interfaces based on product requirements and existing design guidelines.",
      },
      {
        key: "InternContrib2",
        defaultText: "Developed and maintained reusable frontend components.",
      },
      {
        key: "InternContrib3",
        defaultText:
          "Resolved frontend bugs and improved visual and behavioral consistency.",
      },
      {
        key: "InternContrib4",
        defaultText:
          "Collaborated through Git-based workflows, code reviews, and team development processes.",
      },
    ],
    scope: [
      "Frontend Development",
      "Responsive UI",
      "Reusable Components",
      "Bug Fixing",
      "Team Collaboration",
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
    period: "February 2023 – Present",
    isCurrent: true,
    shortSummaryKey: "FrontendStaffSummary",
    shortSummaryDefaultText:
      "Reusable UI Systems, configurable forms, page-building interfaces, and frontend tooling.",
    overviewKey: "StaffOverview",
    overviewDefaultText:
      "Contributing to internal frontend platforms and reusable systems used across multiple development needs.",
    contributions: [
      {
        key: "StaffContrib1",
        defaultText:
          "Developed reusable frontend components that can be adopted across multiple internal projects and development flows.",
      },
      {
        key: "StaffContrib2",
        defaultText:
          "Delivered end-to-end frontend implementation for complex configurable form experiences.",
      },
      {
        key: "StaffContrib3",
        defaultText:
          "Built frontend functionality for configurable page-building interfaces.",
      },
      {
        key: "StaffContrib4",
        defaultText:
          "Implemented dynamic fields, validation behavior, conditional interface states, and reusable interaction patterns.",
      },
      {
        key: "StaffContrib5",
        defaultText:
          "Improved navigation usability through searchable menu experiences and persistent URL-based interface state.",
      },
      {
        key: "StaffContrib6",
        defaultText:
          "Improved component maintainability by refining component structure and frontend documentation.",
      },
      {
        key: "StaffContrib7",
        defaultText:
          "Supported frontend build improvements, including build-tool configuration and alignment with the Docker build workflow.",
      },
    ],
    scope: [
      "React",
      "Reusable UI Systems",
      "Complex Forms",
      "Page Builder Interfaces",
      "Frontend Architecture",
      "Component Documentation",
      "Build Tooling",
    ],
    confidentialityNoteKey: "ConfidentialityNote",
    confidentialityNoteDefaultText:
      "Specific product names, client information, screenshots, source code, business rules, and internal workflows are intentionally omitted due to confidentiality obligations.",
    logo: DataOnThumb,
  },
];
