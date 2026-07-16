import ResuAveTextEditor1 from "./assets/projects/texteditor/pic1.webp";
import ResuAveTextEditor2 from "./assets/projects/texteditor/pic2.webp";
import ResuAveTextEditor3 from "./assets/projects/texteditor/pic3.webp";
import NisoraThumb1 from "./assets/projects/nisora/pic1.webp";
import NisoraThumb2 from "./assets/projects/nisora/pic2.webp";
import NisoraThumb3 from "./assets/projects/nisora/pic3.webp";
import DataOnThumb from "./assets/work-experiences/image-removebg-preview.png";

export const THUMB =
  "https://i.pinimg.com/236x/f7/9e/52/f79e5203f41bdaaf1a5b4176f98a8736.jpg";

export const THUMB2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOc1D7KFRX9rRA9RMJzPZGs8sCcF-8Zw0k3w&s";

export const PROJECTS = [
  {
    id: 1,
    title: "Nisora",
    desc: "A clean and calming book tracker app for organizing reading progress, personal collections, and book notes.",
    descKey: "NisoraDesc",
    descDetail:
      "Built a responsive book tracking web app with authentication, personal library management, reading status, and a clean interface designed to make tracking books feel simple and enjoyable.",
    descDetailKey: "NisoraDescDetail",
    tags: [
      { icon: "mdi:react", label: "React" },
      { icon: "simple-icons:supabase", label: "Supabase" },
      { icon: "bxl:tailwind-css", label: "Tailwind CSS" },
      { icon: "bxl:shadcn-ui", label: "Shadcn/ui" },
    ],
    demoUrl: "https://nisora.pages.dev",
    githubUrl: "https://github.com/Restu-Averian/nisora",
    thumb: NisoraThumb1,
    images: [NisoraThumb1, NisoraThumb2, NisoraThumb3],
    isFinished: true,
  },
  {
    id: 2,
    title: "Package Rich Texteditor",
    desc: "A minimalist rich text editor combining Tiptap's flexibility with clean, accessible UI.",
    descKey: "TextEditorDesc",
    descDetail:
      "Developed a reusable rich text editor package designed to be configurable, mobile-friendly, and easier to fit into different product requirements.",
    descDetailKey: "TextEditorDescDetail",
    tags: [
      { icon: "mdi:react", label: "React" },
      { icon: "simple-icons:tiptap", label: "Tiptap" },
      { icon: "simple-icons:prosemirror", label: "ProseMirror" },
      { icon: "bxl:shadcn-ui", label: "Shadcn-ui" },
    ],
    demoUrl: "https://resuave-texteditor.pages.dev/",
    githubUrl: "https://github.com/Restu-Averian/-resuave-texteditor",
    thumb: ResuAveTextEditor1,
    images: [ResuAveTextEditor1, ResuAveTextEditor2, ResuAveTextEditor3],
    isFinished: true,
  },
  //   {
  //     id: 3,
  //     title: "Daily Planner",
  //     desc: "A highly interactive daily planner designed for optimal task organization,",
  //     descDetail:
  //       "Built a personal daily planner that combines journaling, task management, and money tracking in one cozy and easy-to-use experience. Focused on keeping the workflow simple and personal through custom task status, drag-and-drop planning, and monthly recap features.",
  //     tags: [
  //       { icon: "mdi:react", label: "React" },
  //       { icon: "mdi:react", label: "Tiptap" },
  //       { icon: "bxl:shadcn-ui", label: "Shadcn-ui" },
  //     ],
  //     thumb: DailyPlannerThumb,
  //     images: [DailyPlannerThumb, THUMB, THUMB],
  //     demoUrl: "",
  //     githubUrl: "",
  //     isFinished: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Optimized Transfer ANTD",
  //     desc: "Built a custom Transfer component for 80k+ items with shift-click, drag-select, and double-click for fast, desktop-like list selection",
  //     descDetail: `Built a custom Transfer package designed to make large-list selection feel faster and more practical through desktop-like interactions such as shift-click, drag-select, and double-click.
  // The component was focused on improving control and efficiency for data-heavy workflows, rather than relying on the more limited default Transfer behavior.
  // It was also optimized to handle very large datasets, including lists with more than 80k items, while keeping the experience stable and responsive.`,
  //     tags: [
  //       { icon: "mdi:react", label: "React" },
  //       { icon: "simple-icons:antdesign", label: "Ant Design" },
  //       { icon: "bxl:shadcn-ui", label: "Shadcn-ui" },
  //     ],
  //     thumb: THUMB,
  //     images: [THUMB, THUMB, THUMB],
  //     demoUrl: "",
  //     githubUrl: "https://github.com/Restu-Averian/optimized-transfer-antd",
  //     isFinished: true,
  //   },
];

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
          "Improved Ant Design table sorting for clearer and more consistent data presentation.",
      },
      {
        key: "InternContrib2",
        defaultText:
          "Refactored legacy React class components into functional components.",
      },
      {
        key: "InternContrib3",
        defaultText: "Improved page performance by approximately 10%.",
      },
    ],
    scope: [
      { key: "ScopeFrontendDevelopment", defaultText: "Frontend Development" },
      { key: "ScopeAntDesign", defaultText: "Ant Design" },
      { key: "ScopeLegacyReactRefactoring", defaultText: "Legacy React Refactoring" },
      { key: "ScopeReusableComponents", defaultText: "Reusable Components" },
      { key: "ScopePerformanceImprovement", defaultText: "Performance Improvement" },
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
      { key: "ScopeReact", defaultText: "React" },
      { key: "ScopeTypeScript", defaultText: "TypeScript" },
      { key: "ScopeReusableUiSystems", defaultText: "Reusable UI Systems" },
      { key: "ScopeCraftJs", defaultText: "Craft.js" },
      { key: "ScopeAntDesign", defaultText: "Ant Design" },
      { key: "ScopeFormCustomizer", defaultText: "Form Customizer" },
      { key: "ScopePageBuilderInterfaces", defaultText: "Page Builder Interfaces" },
      { key: "ScopeTiptap", defaultText: "Tiptap" },
      { key: "ScopeProseMirror", defaultText: "ProseMirror" },
      { key: "ScopePerformanceOptimization", defaultText: "Performance Optimization" },
    ],
    confidentialityNoteKey: "ConfidentialityNote",
    confidentialityNoteDefaultText:
      "Specific product names, client information, screenshots, source code, business rules, and internal workflows are intentionally omitted due to confidentiality obligations.",
    logo: DataOnThumb,
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: "mdi:instagram",
    href: "https://www.instagram.com/restu.averian.putra/",
  },
  {
    label: "LinkedIn",
    icon: "line-md:linkedin",
    href: "https://www.linkedin.com/in/restu-averian-putra/",
  },
  {
    label: "GitHub",
    icon: "mdi:github",
    href: "https://github.com/Restu-Averian/",
  },
  {
    label: "npm",
    icon: "mdi:npm",
    href: "https://www.npmjs.com/~restu_averian_putra",
  },
  {
    label: "WhatsApp",
    icon: "mdi:whatsapp",
    href: "https://api.whatsapp.com/send?phone=6282391365098&text=Hi!%F0%9F%91%8B%20Aku%20lihat%20portofolio%20kamu%20dan%20tertarik%20ngobrol%20soal%20project%20frontend%20web.%20Kalau%20kamu%20oke%2C%20kita%20bisa%20call%20bentar%20(%C2%B115%E2%80%9320%20menit)%20minggu%20ini.%20Biar%20aku%20bisa%20siapin%20gambaran%20solusi%20%26%20estimasi%2C%20boleh%20isi%20singkat%3A%201)%20Tujuan%20project%202)%20Fitur%20utama%203)%20Deadline%2Ftarget%20rilis",
  },
];
