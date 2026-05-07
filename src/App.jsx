// src/App.jsx
import { Home } from "lucide-react";
import TopBar from "./components/page/TopBar";
import FotoSampul from "./assets/foto-sampul-2.png";
import FotoProfile from "./assets/foto-profile.jpg";
import Profile from "./components/page/Profile";
import Projects from "./components/page/Projects";
import WorkExperience from "./components/page/work-experience";

const HERO_IMAGE =
  "https://awsimages.detik.net.id/community/media/visual/2020/09/20/jenis-jenis-kucing-peliharaan-12.jpeg?w=650";

const PROJECTS = [
  {
    title: "Package Rich Texteditor",
    desc: "A minimalist rich text editor combining Tiptap's flexibility with clean, accessible UI.",
    tags: ["React", "Tiptap", "Shadcn-ui"],
    thumb: HERO_IMAGE,
  },
  {
    title: "Daily Planner",
    desc: "A highly interactive daily planner designed for optimal task organization.",
    tags: ["React", "Shadcn-ui"],
    thumb: HERO_IMAGE,
  },
  {
    title: "Package Rich Texteditor",
    desc: "A minimalist rich text editor combining Tiptap's flexibility with clean, accessible UI.",
    tags: ["React", "Tiptap", "Shadcn-ui"],
    thumb: HERO_IMAGE,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />

      <Profile />

      <main className="px-4 md:px-10">
        <div className="flex justify-between gap-20">
          <WorkExperience />

          <Projects />
        </div>
      </main>
    </div>
  );
}
