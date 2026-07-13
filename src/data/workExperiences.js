import DataOnThumb from "@/assets/work-experiences/image-removebg-preview.png";

/**
 * @typedef {Object} WorkExperience
 * @property {string} id
 * @property {string} role
 * @property {string} [employmentType]
 * @property {string} company
 * @property {string} period
 * @property {boolean} isCurrent
 * @property {string} shortSummary
 * @property {string} overview
 * @property {string[]} contributions
 * @property {string[]} scope
 * @property {string} [logo]
 * @property {string} [confidentialityNote]
 */

/** @type {WorkExperience[]} */
export const WORK_EXPERIENCES = [
  {
    id: "frontend-intern",
    role: "Frontend Engineer Intern",
    employmentType: "Internship",
    company: "PT. Indodev Niaga Internet",
    period: "2023–2024",
    isCurrent: false,
    shortSummary:
      "Frontend foundations, responsive implementation, and reusable component development.",
    overview:
      "Contributed to production frontend development while learning the team’s engineering workflow, component patterns, and delivery process.",
    contributions: [
      "Implemented responsive user interfaces based on product requirements and existing design guidelines.",
      "Developed and maintained reusable frontend components.",
      "Resolved frontend bugs and improved visual and behavioral consistency.",
      "Collaborated through Git-based workflows, code reviews, and team development processes.",
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
    role: "Frontend Engineer",
    employmentType: "Staff",
    company: "PT. Indodev Niaga Internet",
    period: "2024–Present",
    isCurrent: true,
    shortSummary:
      "Reusable UI Systems, configurable forms, page-building interfaces, and frontend tooling.",
    overview:
      "Contributing to internal frontend platforms and reusable systems used across multiple development needs.",
    contributions: [
      "Developed reusable frontend components that can be adopted across multiple internal projects and development flows.",
      "Delivered end-to-end frontend implementation for complex configurable form experiences.",
      "Built frontend functionality for configurable page-building interfaces.",
      "Implemented dynamic fields, validation behavior, conditional interface states, and reusable interaction patterns.",
      "Improved navigation usability through searchable menu experiences and persistent URL-based interface state.",
      "Improved component maintainability by refining component structure and frontend documentation.",
      "Supported frontend build improvements, including build-tool configuration and alignment with the Docker build workflow.",
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
    confidentialityNote:
      "Specific product names, client information, screenshots, source code, business rules, and internal workflows are intentionally omitted due to confidentiality obligations.",
    logo: DataOnThumb,
  },
];
