// src/App.jsx
import TopBar from "./components/page/TopBar";
import Profile from "./components/page/Profile";
import Projects from "./components/page/Projects";
import WorkExperience from "./components/page/work-experience";

const HERO_IMAGE =
  "https://awsimages.detik.net.id/community/media/visual/2020/09/20/jenis-jenis-kucing-peliharaan-12.jpeg?w=650";

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
