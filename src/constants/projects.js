import { tr } from "@/i18n";
import ResuAveTextEditor1 from "@/assets/projects/texteditor/pic1.webp";
import ResuAveTextEditor2 from "@/assets/projects/texteditor/pic2.webp";
import ResuAveTextEditor3 from "@/assets/projects/texteditor/pic3.webp";
import NisoraThumb1 from "@/assets/projects/nisora/pic1.webp";
import NisoraThumb2 from "@/assets/projects/nisora/pic2.webp";
import NisoraThumb3 from "@/assets/projects/nisora/pic3.webp";
import ResaeniThumb1 from "@/assets/projects/resaeni/pic1.webp";
import ResaeniThumb2 from "@/assets/projects/resaeni/pic2.webp";
import ResaeniThumb3 from "@/assets/projects/resaeni/pic3.webp";
import NisoraLogo from "@/assets/projects/nisora/logo.webp";
import ResaeniLogo from "@/assets/projects/resaeni/logo.webp";
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

/**
 * @typedef {Object} LocalizedString
 * @property {boolean} __i18n
 * @property {string} key
 * @property {string} default
 */

/**
 * @typedef {Object} CaseTab
 * @property {string} value
 * @property {LocalizedString|string} label
 * @property {import("lucide-react").LucideIcon} icon
 */

/** @type {CaseTab[]} */
export const CASE_TABS = [
  { value: "overview", label: tr("Overview", "Overview"), icon: Home },
  {
    value: "problem",
    label: tr("CaseProblem", "Problem"),
    icon: CircleAlert,
  },
  {
    value: "ownership",
    label: tr("CaseOwnership", "Ownership"),
    icon: UserCheck,
  },
  {
    value: "contributions",
    label: tr("CaseContributions", "Contributions"),
    icon: ListChecks,
  },
  {
    value: "decisions",
    label: tr("EngineeringDecisions", "Engineering Decisions"),
    icon: GitBranch,
  },
  {
    value: "challenges",
    label: tr("ChallengesSolutions", "Challenges & Solutions"),
    icon: Wrench,
  },
  { value: "outcome", label: tr("CaseOutcome", "Outcome"), icon: Target },
  { value: "tech", label: tr("TechStack", "Tech Stack"), icon: Route },
];

export const PROJECTS = [
  {
    id: 3,
    title: "Resaeni",
    desc: tr(
      "ResaeniDesc",
      "A free, ad-free platform for discovering, streaming, and downloading Korean animation (Aeni), built around a curated catalogue.",
    ),
    descDetail: tr(
      "ResaeniDescDetail",
      "Free to watch. No ads. Just Aeni. A focused streaming and download platform for Korean animation with a curated catalogue maintained end-to-end.",
    ),
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
    logo: ResaeniLogo,
    thumb: ResaeniThumb1,
    images: [ResaeniThumb1, ResaeniThumb2, ResaeniThumb3],
    meta: {
      launched: tr("ResaeniLaunched", "19 Aug 2026"),
      platform: tr("ProjectMetaWeb", "Web"),
    },
    caseStudy: {
      overview: [
        tr(
          "ResaeniOverview1",
          "Resaeni is a free, ad-free platform for discovering, streaming, and downloading Korean animation (Aeni), built around a focused and curated catalogue.",
        ),
        tr(
          "ResaeniOverview2",
          "It went live in production on 19 August 2026 and currently serves 7 curated Aeni titles with roughly 60 watchable episodes.",
        ),
      ],
      problem: [
        tr(
          "ResaeniProblem1",
          "General anime platforms chase catalogue size, but a solo-maintained product cannot curate, verify, and maintain a massive Japanese or Chinese catalogue end-to-end at a consistent quality level.",
        ),
        tr(
          "ResaeniProblem2",
          "Korean animation offered a deliberately narrower scope: a focused niche, enough English-subtitled material, and a small enough catalogue to keep metadata, assets, media, and user experience consistent under near-solo ownership.",
        ),
      ],
      ownership: tr(
        "ResaeniOwnership",
        "End-to-end ownership across product direction, frontend, backend, content operations, infrastructure, deployment, and ongoing maintenance.",
      ),
      contributions: [
        tr(
          "ResaeniContrib1",
          "Built the discovery, catalogue, title-detail, streaming, and download experience.",
        ),
        tr(
          "ResaeniContrib2",
          "Built and iterated admin tooling for content operations, including assisted metadata population that keeps scraped values editable before saving.",
        ),
        tr(
          "ResaeniContrib3",
          "Developed the Hono backend on Cloudflare Workers with Turso (libSQL) as the data layer.",
        ),
        tr(
          "ResaeniContrib4",
          "Consolidated media and artwork delivery into the Cloudflare ecosystem, replacing fragmented third-party hosting.",
        ),
        tr(
          "ResaeniContrib5",
          "Implemented a responsive, mobile-focused UI with loading states, image placeholders, and fallback behavior.",
        ),
        tr(
          "ResaeniContrib6",
          "Added a simple Report an Issue flow so users can report problems directly from the app.",
        ),
      ],
      decisions: [
        {
          title: "React",
          desc: tr(
            "ResaeniDecisionReactDesc",
            "A pragmatic choice based on existing proficiency; it keeps maintenance faster and safer for a solo-owned product.",
          ),
        },
        {
          title: tr(
            "CaseDecisionCloudflareTitle",
            "Cloudflare-oriented infrastructure",
          ),
          desc: tr(
            "ResaeniDecisionCloudflareDesc",
            "Workers, Hono, and R2 keep deployment, API, and media delivery under one ecosystem with cohesive domain management and cost-conscious operation.",
          ),
        },
        {
          title: "Turso / libSQL",
          desc: tr(
            "ResaeniDecisionTursoDesc",
            "Its serverless model and free tier matched this project's data volume, deployment style, and cost constraints better than the alternatives evaluated at the time.",
          ),
        },
        {
          title: tr("CaseDecisionDownloadsTitle", "Worker-proxied downloads"),
          desc: tr(
            "ResaeniDecisionDownloadsDesc",
            "Downloads are served through a Worker endpoint applying Content-Disposition headers, keeping control of how files reach users without separate storage infrastructure.",
          ),
        },
      ],
      challenges: [
        {
          challenge: tr(
            "ResaeniChallenge1C",
            "Entering catalogue metadata manually was repetitive and time-expensive.",
          ),
          solution: tr(
            "ResaeniChallenge1S",
            "Built an admin tool with an assisted initialization flow: enter an identifier, fetch metadata, auto-populate editable fields, then correct inaccurate scraped values before saving. Episode data entry is partially automated the same way.",
          ),
        },
        {
          challenge: tr(
            "ResaeniChallenge2C",
            "Artwork lived on Cloudinary while the rest of the stack converged on Cloudflare, splitting media operations across providers.",
          ),
          solution: tr(
            "ResaeniChallenge2S",
            "Consolidated media into R2 within the Cloudflare ecosystem to reduce fragmentation, simplify domain management, and lower operating cost — a fit-for-constraints decision, not a judgment on Cloudinary itself.",
          ),
        },
        {
          challenge: tr(
            "ResaeniChallenge3C",
            "An experimental Anime Finder (trace.moe) was explored as a differentiator, but matching proved unreliable for Korean animation.",
          ),
          solution: tr(
            "ResaeniChallenge3S",
            "Deprioritized the feature after testing instead of shipping an inconsistent experience, returning focus to discovery, library, title information, streaming, and support.",
          ),
        },
      ],
      outcome: [
        tr(
          "ResaeniOutcome1",
          "Shipped to production on 19 August 2026 with 7 curated Aeni titles and roughly 60 watchable episodes.",
        ),
        tr(
          "ResaeniOutcome2",
          "Operational end-to-end content workflow supported by admin tooling that reduces repetitive metadata entry.",
        ),
        tr(
          "ResaeniOutcome3",
          "Infrastructure consolidated for lower operational complexity, maintained as an evolving production project with regular checks and a monthly dependency-review cycle.",
        ),
      ],
    },
  },
  {
    id: 1,
    title: "Nisora",
    desc: tr(
      "NisoraDesc",
      "An authenticated personal reading library for tracking books across devices, with cloud persistence and OpenLibrary-assisted metadata.",
    ),
    descDetail: tr(
      "NisoraDescDetail",
      "Built a responsive book tracking web app with authentication, personal library management, reading status, and a clean interface designed to make tracking books feel simple and enjoyable.",
    ),
    tags: [
      { icon: "mdi:react", label: "React" },
      { icon: "simple-icons:supabase", label: "Supabase" },
      { icon: "bxl:tailwind-css", label: "Tailwind CSS" },
      { icon: "bxl:shadcn-ui", label: "Shadcn/ui" },
    ],
    demoUrl: "https://nisora.pages.dev",
    githubUrl: "https://github.com/Restu-Averian/nisora",
    logo: NisoraLogo,
    thumb: NisoraThumb1,
    images: [NisoraThumb1, NisoraThumb2, NisoraThumb3],
    meta: {
      launched: tr("NisoraLaunched", "1 Jul 2026"),
      platform: tr("ProjectMetaWeb", "Web"),
    },
    caseStudy: {
      overview: [
        tr(
          "NisoraOverview1",
          "Nisora is an authenticated personal reading library for organizing books that are currently being read or have already been completed, with persistent data that is no longer tied to a single browser.",
        ),
        tr(
          "NisoraOverview2",
          "It is a major evolution of my earlier My Pustaka project, replacing localStorage-only persistence with Supabase-backed authentication, database storage, book-cover storage, and OpenLibrary-assisted metadata. Nisora went live on 1 July 2026.",
        ),
      ],
      problem: [
        tr(
          "NisoraProblem1",
          "The earlier My Pustaka project stored its entire library in localStorage. The core CRUD experience worked, but every collection remained tied to one browser and there was no authenticated ownership of the data.",
        ),
        tr(
          "NisoraProblem2",
          "I wanted the concept to grow into a personal library that could persist beyond one device, give each user their own collection, and support richer book data without introducing unnecessary infrastructure or hosting cost.",
        ),
      ],
      ownership: tr(
        "NisoraOwnership",
        "Solo ownership across product direction, UI implementation, frontend architecture, authentication flows, Supabase integration, external book-data integration, deployment, and ongoing iteration.",
      ),
      contributions: [
        tr(
          "NisoraContrib1",
          "Rebuilt an earlier localStorage-based book tracker into an authenticated cloud-backed personal library.",
        ),
        tr(
          "NisoraContrib2",
          "Implemented passwordless email authentication with Supabase Auth, including customized authentication email templates.",
        ),
        tr(
          "NisoraContrib3",
          "Integrated Supabase-backed persistence so book collections are associated with authenticated users rather than a single browser.",
        ),
        tr(
          "NisoraContrib4",
          "Integrated OpenLibrary search to prefill available book metadata including title, author, publication year, cover, and descriptive information.",
        ),
        tr(
          "NisoraContrib5",
          "Preserved manual and editable book entry so incomplete or unavailable external metadata does not prevent users from maintaining their library.",
        ),
        tr(
          "NisoraContrib6",
          "Built responsive book-management flows with schema-based form validation and deployed the production frontend through Cloudflare Pages.",
        ),
      ],
      decisions: [
        {
          title: tr(
            "NisoraDecisionSupabaseTitle",
            "Supabase as backend services",
          ),
          desc: tr(
            "NisoraDecisionSupabaseDesc",
            "Supabase provided authentication, relational persistence, and file storage in one service with a practical free tier, allowing Nisora to move beyond browser-only data without introducing a separately operated backend.",
          ),
        },
        {
          title: tr(
            "NisoraDecisionAuthTitle",
            "Passwordless email authentication",
          ),
          desc: tr(
            "NisoraDecisionAuthDesc",
            "Google authentication was explored first, but passwordless email produced a practical flow for the product's needs. Supabase magic links removed password management while customizable email templates kept the authentication experience aligned with the product.",
          ),
        },
        {
          title: tr(
            "NisoraDecisionOpenLibraryTitle",
            "OpenLibrary as an assistive source",
          ),
          desc: tr(
            "NisoraDecisionOpenLibraryDesc",
            "External metadata accelerates book entry but is not reliable enough to become the only source of truth. OpenLibrary can prefill available information while every value remains editable and manual entry stays available.",
          ),
        },
        {
          title: tr(
            "NisoraDecisionArchitectureTitle",
            "Direct client-to-Supabase architecture",
          ),
          desc: tr(
            "NisoraDecisionArchitectureDesc",
            "The current version intentionally avoids a custom API layer because Supabase already covers the project's authentication, persistence, and storage needs. This kept the architecture small and cost-conscious while leaving room for a dedicated API if future business logic requires one.",
          ),
        },
      ],
      challenges: [
        {
          challenge: tr(
            "NisoraChallenge1C",
            "The original My Pustaka implementation stored collections only in localStorage, making the data dependent on one browser and preventing authenticated personal libraries.",
          ),
          solution: tr(
            "NisoraChallenge1S",
            "Reworked persistence around Supabase and authenticated user identity so book data can belong to individual accounts instead of a single browser session or device.",
          ),
        },
        {
          challenge: tr(
            "NisoraChallenge2C",
            "Authentication became more practical than simply sending a sign-in link: the initial Google-auth approach introduced unnecessary friction, while email magic links also required expired-link and redirect behavior to be handled correctly.",
          ),
          solution: tr(
            "NisoraChallenge2S",
            "Simplified authentication to passwordless email and aligned Supabase redirect/base URL configuration with frontend handling for invalid or expired authentication links.",
          ),
        },
        {
          challenge: tr(
            "NisoraChallenge3C",
            "OpenLibrary does not provide complete metadata for every book, so making external search mandatory would prevent some titles from being added correctly.",
          ),
          solution: tr(
            "NisoraChallenge3S",
            "Treated OpenLibrary as an optional accelerator: available metadata prefills the form, missing values can remain empty, and users can freely edit or manually enter book information.",
          ),
        },
      ],
      outcome: [
        tr(
          "NisoraOutcome1",
          "Evolved a browser-only CRUD prototype into an authenticated cloud-backed personal library that can persist independently of a single device.",
        ),
        tr(
          "NisoraOutcome2",
          "Combined passwordless authentication, persistent book data, cover storage, and external metadata assistance in a deployed production application.",
        ),
        tr(
          "NisoraOutcome3",
          "Expanded the project from frontend-only state management into practical experience with authentication, persistence, storage, third-party services, and broader application architecture.",
        ),
      ],
    },
  },
  {
    id: 2,
    title: "ResuAve TextEditor",
    desc: tr(
      "TextEditorDesc",
      "A reusable React rich-text editor package that provides Tiptap with ready-to-use formatting controls, responsive editing, HTML source mode, and configurable toolbar visibility.",
    ),
    descDetail: tr(
      "TextEditorDescDetail",
      "Developed a reusable npm package that reduces repeated Tiptap setup by providing formatting controls, responsive mobile editing, HTML source mode, localization, styling hooks, and a straightforward application API.",
    ),
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
    meta: {
      launched: tr("TextEditorLaunched", "Jul 2026"),
      platform: tr("ProjectMetaNpmPackage", "npm Package"),
    },
    caseStudy: {
      overview: [
        tr(
          "TextEditorOverview1",
          "ResuAve TextEditor is a reusable npm package for React that provides an opinionated layer on top of Tiptap, combining common rich-text formatting, responsive editing, HTML source mode, localization, and application-facing event handling in one ready-to-use component.",
        ),
        tr(
          "TextEditorOverview2",
          "The idea grew from rich-text editing problems I encountered in professional work, but the public package was independently reimplemented from scratch without reusing proprietary source code, internal assets, business logic, or confidential implementation details. The package was publicly released in July 2026.",
        ),
      ],
      problem: [
        tr(
          "TextEditorProblem1",
          "Tiptap provides significant flexibility, but adopting it for common product requirements can still mean repeatedly assembling extensions, toolbar controls, editor events, styling, responsive behavior, and supporting features before the editor is ready to use.",
        ),
        tr(
          "TextEditorProblem2",
          "I wanted a faster starting point for React projects: install a package, connect the editor to application state, and get a practical desktop and mobile editing experience without rebuilding the same foundation every time.",
        ),
      ],
      ownership: tr(
        "TextEditorOwnership",
        "Solo ownership across the independent public reimplementation, component and API design, toolbar behavior, responsive editing experience, HTML source-mode integration, localization, package build and distribution, demo documentation, deployment, and ongoing iteration.",
      ),
      contributions: [
        tr(
          "TextEditorContrib1",
          "Built a reusable React rich-text editor package on top of Tiptap with common formatting, structured content controls, links, history actions, and HTML-based application output.",
        ),
        tr(
          "TextEditorContrib2",
          "Designed a simple application-facing API with value and editor-event callbacks, read-only behavior, localization, translation overrides, and styling hooks.",
        ),
        tr(
          "TextEditorContrib3",
          "Added group- and item-level toolbar visibility configuration so applications can hide controls they do not need without rebuilding the toolbar.",
        ),
        tr(
          "TextEditorContrib4",
          "Built a dedicated fullscreen mobile editing experience instead of shrinking the desktop toolbar into a constrained phone layout.",
        ),
        tr(
          "TextEditorContrib5",
          "Integrated CodeMirror as an HTML source editor and synchronized content when moving between WYSIWYG and source-editing modes.",
        ),
        tr(
          "TextEditorContrib6",
          "Packaged the editor for public npm distribution with ESM and CommonJS entry points, exported CSS, React peer dependencies, and a separate live demo/documentation site.",
        ),
      ],
      decisions: [
        {
          title: tr(
            "TextEditorDecisionTiptapTitle",
            "Tiptap as the editing foundation",
          ),
          desc: tr(
            "TextEditorDecisionTiptapDesc",
            "Tiptap offered more control over formatting behavior, extensions, toolbar implementation, and editor UI than more opinionated ready-made editors, making it a better foundation for a reusable component that is intended to evolve over time.",
          ),
        },
        {
          title: tr(
            "TextEditorDecisionSetupTitle",
            "Opinionated setup over repeated initialization",
          ),
          desc: tr(
            "TextEditorDecisionSetupDesc",
            "The package deliberately bundles common editor setup and UX decisions so applications can start from a usable baseline instead of rebuilding extensions, toolbar behavior, responsive handling, source mode, and styling for every implementation.",
          ),
        },
        {
          title: tr(
            "TextEditorDecisionMobileTitle",
            "Dedicated mobile editing experience",
          ),
          desc: tr(
            "TextEditorDecisionMobileDesc",
            "Rather than compressing the desktop toolbar into a phone-sized viewport, small screens use a fullscreen editing flow inspired by mobile note-taking and document applications, giving the editor more room alongside the on-screen keyboard.",
          ),
        },
        {
          title: tr(
            "TextEditorDecisionSourceTitle",
            "CodeMirror for HTML source editing",
          ),
          desc: tr(
            "TextEditorDecisionSourceDesc",
            "WYSIWYG and raw HTML editing have different interaction needs, so CodeMirror is used as a dedicated source editor while Tiptap remains responsible for visual editing. Content is synchronized when switching between the two modes.",
          ),
        },
      ],
      challenges: [
        {
          challenge: tr(
            "TextEditorChallenge1C",
            "A rich toolbar that works comfortably on desktop becomes cramped on a phone, while the software keyboard further reduces the usable editing viewport.",
          ),
          solution: tr(
            "TextEditorChallenge1S",
            "Created a separate fullscreen mobile editing flow with a compact entry/preview state, allowing the editor and toolbar to use the available screen more effectively instead of forcing the desktop layout onto mobile.",
          ),
        },
        {
          challenge: tr(
            "TextEditorChallenge2C",
            "Tiptap and CodeMirror represent two different editing interfaces for the same HTML content, so switching modes without losing or using stale content requires an explicit synchronization boundary.",
          ),
          solution: tr(
            "TextEditorChallenge2S",
            "Transfer the current Tiptap HTML into the source editor when entering source mode and apply the edited HTML back into Tiptap when returning to WYSIWYG mode.",
          ),
        },
        {
          challenge: tr(
            "TextEditorChallenge3C",
            "A component that works inside one application is not automatically suitable for reuse: package consumers also need predictable exports, styles, dependency boundaries, and a build that works across React applications.",
          ),
          solution: tr(
            "TextEditorChallenge3S",
            "Added a dedicated library build with ESM and CommonJS exports, a separately exported stylesheet, React peer dependencies, public npm packaging, and pre-publish build/package validation.",
          ),
        },
      ],
      outcome: [
        tr(
          "TextEditorOutcome1",
          "Published `@resuave/texteditor` as an installable npm package with a public demo and documentation site.",
        ),
        tr(
          "TextEditorOutcome2",
          "Turned repeated rich-text editor setup into a reusable component that already includes responsive desktop/mobile behavior, configurable toolbar visibility, and HTML source editing.",
        ),
        tr(
          "TextEditorOutcome3",
          "Expanded the project beyond application UI work into public library API design, package distribution, dependency boundaries, and reusable developer tooling.",
        ),
      ],
    },
  },
];

export const getProjectMeta = (project) => ({
  launched: project?.meta?.launched ?? tr("ProjectMetaCompleted", "Completed"),
  platform:
    project?.meta?.platform ??
    (project?.demoUrl
      ? tr("ProjectMetaWeb", "Web")
      : tr("ProjectMetaPackage", "Package")),
});
