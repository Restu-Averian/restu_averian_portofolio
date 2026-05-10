import DailyPlannerThumb from "./assets/projects/daily-planner.png";

export const THUMB =
  "https://i.pinimg.com/236x/f7/9e/52/f79e5203f41bdaaf1a5b4176f98a8736.jpg";

export const THUMB2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOc1D7KFRX9rRA9RMJzPZGs8sCcF-8Zw0k3w&s";

export const PROJECTS = [
  {
    id: 1,
    title: "Package Rich Texteditor",
    desc: "A minimalist rich text editor combining Tiptap's flexibility with clean, accessible UI.",
    descDetail:
      "Developed a reusable rich text editor package designed to be configurable, mobile-friendly, and easier to fit into different product requirements.",
    tags: [
      { icon: "mdi:react", label: "React" },
      { icon: "mdi:react", label: "Tiptap" },
      { icon: "bxl:shadcn-ui", label: "Shadcn-ui" },
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Restu-Averian/-resuave-texteditor",
    thumb: THUMB,
    images: [THUMB2, THUMB, THUMB],
    isFinished: true,
  },
  {
    id: 2,
    title: "Daily Planner",
    desc: "A highly interactive daily planner designed for optimal task organization,",
    descDetail:
      "Built a personal daily planner that combines journaling, task management, and money tracking in one cozy and easy-to-use experience. Focused on keeping the workflow simple and personal through custom task status, drag-and-drop planning, and monthly recap features.",
    tags: [
      { icon: "mdi:react", label: "React" },
      { icon: "mdi:react", label: "Tiptap" },
      { icon: "bxl:shadcn-ui", label: "Shadcn-ui" },
    ],
    thumb: DailyPlannerThumb,
    images: [DailyPlannerThumb, THUMB, THUMB],
    demoUrl: "",
    githubUrl: "",
    isFinished: false,
  },
  {
    id: 3,
    title: "Optimized Transfer ANTD",
    desc: "A minimalist rich text editor combining Tiptap's flexibility with clean, accessible UI.",
    descDetail: `Built a custom Transfer package designed to make large-list selection feel faster and more practical through desktop-like interactions such as shift-click, drag-select, and double-click.
The component was focused on improving control and efficiency for data-heavy workflows, rather than relying on the more limited default Transfer behavior.
It was also optimized to handle very large datasets, including lists with more than 80k items, while keeping the experience stable and responsive.`,
    tags: [
      { icon: "mdi:react", label: "React" },
      { icon: "simple-icons:antdesign", label: "Ant Design" },
      { icon: "bxl:shadcn-ui", label: "Shadcn-ui" },
    ],
    thumb: THUMB,
    images: [THUMB, THUMB, THUMB],
    demoUrl: "",
    githubUrl: "https://github.com/Restu-Averian/optimized-transfer-antd",
    isFinished: true,
  },
];
