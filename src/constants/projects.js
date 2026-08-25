import ResuAveTextEditor1 from "@/assets/projects/texteditor/pic1.webp";
import ResuAveTextEditor2 from "@/assets/projects/texteditor/pic2.webp";
import ResuAveTextEditor3 from "@/assets/projects/texteditor/pic3.webp";
import NisoraThumb1 from "@/assets/projects/nisora/pic1.webp";
import NisoraThumb2 from "@/assets/projects/nisora/pic2.webp";
import NisoraThumb3 from "@/assets/projects/nisora/pic3.webp";
// TODO: Replace temporary image with Resaeni portfolio screenshots.
import ResaeniPlaceholderThumb from "@/assets/projects/nisora/pic4.webp";
import {
  CircleAlert,
  GitBranch,
  Home,
  ListChecks,
  Route,
  Target,
  UserCheck,
  Wrench,
} from "lucide-react";

export const CASE_TABS = [
  { value: "overview", label: "Overview", icon: Home },
  { value: "problem", label: "Problem", icon: CircleAlert },
  { value: "ownership", label: "Ownership", icon: UserCheck },
  { value: "contributions", label: "Contributions", icon: ListChecks },
  { value: "decisions", label: "Engineering Decisions", icon: GitBranch },
  { value: "challenges", label: "Challenges & Solutions", icon: Wrench },
  { value: "outcome", label: "Outcome", icon: Target },
  { value: "tech", label: "Tech Stack", icon: Route },
];

export const PROJECTS = [
  {
    id: 3,
    title: "Resaeni",
    desc: "A free, ad-free platform for discovering, streaming, and downloading Korean animation (Aeni), built around a curated catalogue.",
    descKey: "ResaeniDesc",
    descDetail: "",
    descDetailKey: "",
    tags: [
      { icon: "mdi:react", label: "React" },
      { icon: "simple-icons:vite", label: "Vite" },
      { icon: "simple-icons:hono", label: "Hono" },
      { icon: "simple-icons:cloudflare", label: "Cloudflare Workers" },
      { icon: "lucide:database", label: "Cloudflare R2" },
      { icon: "simple-icons:turso", label: "Turso" },
    ],
    demoUrl: "https://resaeni.cc",
    githubUrl: "https://github.com/Restu-Averian/resaeni",
    thumb: ResaeniPlaceholderThumb,
    images: [ResaeniPlaceholderThumb],
    isFinished: true,
    caseStudy: {
      overview: [{ key: "ResaeniOverview1" }, { key: "ResaeniOverview2" }],
      problem: [{ key: "ResaeniProblem1" }, { key: "ResaeniProblem2" }],
      ownership: { key: "ResaeniOwnership" },
      contributions: [
        { key: "ResaeniContrib1" },
        { key: "ResaeniContrib2" },
        { key: "ResaeniContrib3" },
        { key: "ResaeniContrib4" },
        { key: "ResaeniContrib5" },
        { key: "ResaeniContrib6" },
      ],
      decisions: [
        {
          title: "React",
          descKey: "ResaeniDecisionReactDesc",
        },
        {
          title: "Cloudflare-oriented infrastructure",
          titleKey: "CaseDecisionCloudflareTitle",
          descKey: "ResaeniDecisionCloudflareDesc",
        },
        {
          title: "Turso / libSQL",
          descKey: "ResaeniDecisionTursoDesc",
        },
        {
          title: "Worker-proxied downloads",
          titleKey: "CaseDecisionDownloadsTitle",
          descKey: "ResaeniDecisionDownloadsDesc",
        },
      ],
      challenges: [
        {
          challengeKey: "ResaeniChallenge1C",
          solutionKey: "ResaeniChallenge1S",
        },
        {
          challengeKey: "ResaeniChallenge2C",
          solutionKey: "ResaeniChallenge2S",
        },
        {
          challengeKey: "ResaeniChallenge3C",
          solutionKey: "ResaeniChallenge3S",
        },
      ],
      outcome: [
        { key: "ResaeniOutcome1" },
        { key: "ResaeniOutcome2" },
        { key: "ResaeniOutcome3" },
      ],
    },
  },
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
];
