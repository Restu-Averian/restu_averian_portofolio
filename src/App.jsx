// src/App.jsx
import TopBar from "./components/page/TopBar";
import Profile from "./components/page/Profile";
import Projects from "./components/page/Projects";
import WorkExperience from "./components/page/work-experience";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />

      <Profile />

      <main className="px-4 md:px-10">
        <div className="flex justify-between gap-20 flex-col lg:flex-row">
          <WorkExperience />

          <Projects />
        </div>
      </main>
    </div>
  );
}
