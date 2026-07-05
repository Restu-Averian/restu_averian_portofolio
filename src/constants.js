import ResuAveTextEditor1 from "./assets/projects/texteditor/pic1.webp";
import ResuAveTextEditor2 from "./assets/projects/texteditor/pic2.webp";
import ResuAveTextEditor3 from "./assets/projects/texteditor/pic3.webp";
import NisoraThumb1 from "./assets/projects/nisora/pic1.webp";
import NisoraThumb2 from "./assets/projects/nisora/pic2.webp";
import NisoraThumb3 from "./assets/projects/nisora/pic3.webp";

export const THUMB =
  "https://i.pinimg.com/236x/f7/9e/52/f79e5203f41bdaaf1a5b4176f98a8736.jpg";

export const THUMB2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOc1D7KFRX9rRA9RMJzPZGs8sCcF-8Zw0k3w&s";

export const PROJECTS = [
  {
    id: 1,
    title: "Nisora",
    desc: "A clean and calming book tracker app for organizing reading progress, personal collections, and book notes.",
    descDetail:
      "Built a responsive book tracking web app with authentication, personal library management, reading status, and a clean interface designed to make tracking books feel simple and enjoyable.",
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
    descDetail:
      "Developed a reusable rich text editor package designed to be configurable, mobile-friendly, and easier to fit into different product requirements.",
    tags: [
      { icon: "mdi:react", label: "React" },
      { icon: "mdi:react", label: "Tiptap" },
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
