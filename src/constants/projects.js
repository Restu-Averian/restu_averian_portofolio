import ResuAveTextEditor1 from "@/assets/projects/texteditor/pic1.webp";
import ResuAveTextEditor2 from "@/assets/projects/texteditor/pic2.webp";
import ResuAveTextEditor3 from "@/assets/projects/texteditor/pic3.webp";
import NisoraThumb1 from "@/assets/projects/nisora/pic1.webp";
import NisoraThumb2 from "@/assets/projects/nisora/pic2.webp";
import NisoraThumb3 from "@/assets/projects/nisora/pic3.webp";
import ResaeniThumb1 from "@/assets/projects/resaeni/pic1.webp";
import ResaeniThumb2 from "@/assets/projects/resaeni/pic2.webp";
import ResaeniThumb3 from "@/assets/projects/resaeni/pic3.webp";
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
  { value: "overview", label: "Overview", labelKey: "Overview", icon: Home },
  {
    value: "problem",
    label: "Problem",
    labelKey: "CaseProblem",
    icon: CircleAlert,
  },
  {
    value: "ownership",
    label: "Ownership",
    labelKey: "CaseOwnership",
    icon: UserCheck,
  },
  {
    value: "contributions",
    label: "Contributions",
    labelKey: "CaseContributions",
    icon: ListChecks,
  },
  {
    value: "decisions",
    label: "Engineering Decisions",
    labelKey: "EngineeringDecisions",
    icon: GitBranch,
  },
  {
    value: "challenges",
    label: "Challenges & Solutions",
    labelKey: "ChallengesSolutions",
    icon: Wrench,
  },
  { value: "outcome", label: "Outcome", labelKey: "CaseOutcome", icon: Target },
  { value: "tech", label: "Tech Stack", labelKey: "TechStack", icon: Route },
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
    thumb: ResaeniThumb1,
    images: [ResaeniThumb1, ResaeniThumb2, ResaeniThumb3],
    isFinished: true,
    meta: {
      launched: "19 Aug 2026",
      launchedKey: "ResaeniLaunched",
      platform: "Web",
      platformKey: "ProjectMetaWeb",
    },
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
    desc: "An authenticated personal reading library for tracking books across devices, with cloud persistence and OpenLibrary-assisted metadata.",
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
    meta: {
      launched: "1 Jul 2026",
      launchedKey: "NisoraLaunched",
      platform: "Web",
      platformKey: "ProjectMetaWeb",
    },
    caseStudy: {
      overview: [{ key: "NisoraOverview1" }, { key: "NisoraOverview2" }],
      problem: [{ key: "NisoraProblem1" }, { key: "NisoraProblem2" }],
      ownership: { key: "NisoraOwnership" },
      contributions: [
        { key: "NisoraContrib1" },
        { key: "NisoraContrib2" },
        { key: "NisoraContrib3" },
        { key: "NisoraContrib4" },
        { key: "NisoraContrib5" },
        { key: "NisoraContrib6" },
      ],
      decisions: [
        {
          titleKey: "NisoraDecisionSupabaseTitle",
          descKey: "NisoraDecisionSupabaseDesc",
        },
        {
          titleKey: "NisoraDecisionAuthTitle",
          descKey: "NisoraDecisionAuthDesc",
        },
        {
          titleKey: "NisoraDecisionOpenLibraryTitle",
          descKey: "NisoraDecisionOpenLibraryDesc",
        },
        {
          titleKey: "NisoraDecisionArchitectureTitle",
          descKey: "NisoraDecisionArchitectureDesc",
        },
      ],
      challenges: [
        {
          challengeKey: "NisoraChallenge1C",
          solutionKey: "NisoraChallenge1S",
        },
        {
          challengeKey: "NisoraChallenge2C",
          solutionKey: "NisoraChallenge2S",
        },
        {
          challengeKey: "NisoraChallenge3C",
          solutionKey: "NisoraChallenge3S",
        },
      ],
      outcome: [
        { key: "NisoraOutcome1" },
        { key: "NisoraOutcome2" },
        { key: "NisoraOutcome3" },
      ],
    },
  },
  {
    id: 2,
    title: "ResuAve TextEditor",
    desc: "A reusable React rich-text editor package that provides Tiptap with ready-to-use formatting controls, responsive editing, HTML source mode, and configurable toolbar visibility.",
    descKey: "TextEditorDesc",
    descDetail:
      "Developed a reusable npm package that reduces repeated Tiptap setup by providing formatting controls, responsive mobile editing, HTML source mode, localization, styling hooks, and a straightforward application API.",
    descDetailKey: "TextEditorDescDetail",
    tags: [
      { icon: "mdi:react", label: "React" },
      { icon: "simple-icons:tiptap", label: "Tiptap" },
      { icon: "simple-icons:codemirror", label: "CodeMirror" },
      { icon: "bxl:shadcn-ui", label: "Shadcn/ui" },
    ],
    demoUrl: "https://resuave-texteditor.pages.dev/",
    githubUrl: "https://github.com/Restu-Averian/-resuave-texteditor",
    packageUrl: "https://www.npmjs.com/package/@resuave/texteditor",
    thumb: ResuAveTextEditor1,
    images: [ResuAveTextEditor1, ResuAveTextEditor2, ResuAveTextEditor3],
    isFinished: true,
    meta: {
      launched: "Jul 2026",
      launchedKey: "TextEditorLaunched",
      platform: "npm Package",
      platformKey: "ProjectMetaNpmPackage",
    },
    caseStudy: {
      overview: [
        { key: "TextEditorOverview1" },
        { key: "TextEditorOverview2" },
      ],
      problem: [{ key: "TextEditorProblem1" }, { key: "TextEditorProblem2" }],
      ownership: { key: "TextEditorOwnership" },
      contributions: [
        { key: "TextEditorContrib1" },
        { key: "TextEditorContrib2" },
        { key: "TextEditorContrib3" },
        { key: "TextEditorContrib4" },
        { key: "TextEditorContrib5" },
        { key: "TextEditorContrib6" },
      ],
      decisions: [
        {
          titleKey: "TextEditorDecisionTiptapTitle",
          descKey: "TextEditorDecisionTiptapDesc",
        },
        {
          titleKey: "TextEditorDecisionSetupTitle",
          descKey: "TextEditorDecisionSetupDesc",
        },
        {
          titleKey: "TextEditorDecisionMobileTitle",
          descKey: "TextEditorDecisionMobileDesc",
        },
        {
          titleKey: "TextEditorDecisionSourceTitle",
          descKey: "TextEditorDecisionSourceDesc",
        },
      ],
      challenges: [
        {
          challengeKey: "TextEditorChallenge1C",
          solutionKey: "TextEditorChallenge1S",
        },
        {
          challengeKey: "TextEditorChallenge2C",
          solutionKey: "TextEditorChallenge2S",
        },
        {
          challengeKey: "TextEditorChallenge3C",
          solutionKey: "TextEditorChallenge3S",
        },
      ],
      outcome: [
        { key: "TextEditorOutcome1" },
        { key: "TextEditorOutcome2" },
        { key: "TextEditorOutcome3" },
      ],
    },
  },
];

export const getProjectMeta = (project) => ({
  launched: project?.meta?.launched ?? "Completed",
  launchedKey: project?.meta?.launchedKey ?? "ProjectMetaCompleted",
  platform: project?.meta?.platform ?? (project?.demoUrl ? "Web" : "Package"),
  platformKey:
    project?.meta?.platformKey ??
    (project?.demoUrl ? "ProjectMetaWeb" : "ProjectMetaPackage"),
});
