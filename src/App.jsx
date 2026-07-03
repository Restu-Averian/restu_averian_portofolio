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

      <main className="px-4 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 my-6">
            <Projects />
          </div>
          <div className="lg:col-span-1 my-6">
            <WorkExperience />
          </div>
        </div>
      </main>
    </div>
  );
}
