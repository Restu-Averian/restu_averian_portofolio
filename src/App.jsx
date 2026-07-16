// src/App.jsx
import TopBar from "./components/page/TopBar";
import Profile from "./components/page/Profile";
import Projects from "./components/page/Projects";
import WorkExperience from "./components/page/work-experience";
import Footer from "./components/page/Footer";
import ArtShelf from "./components/page/ArtShelf";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <TopBar />

      <Profile />

      <main className="grow px-4 pb-5 md:px-10">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-4 py-4 lg:grid-cols-[0.9fr_1.35fr_1fr]">
          <div className="order-3 lg:order-1">
            <ArtShelf />
          </div>
          <div className="order-1 lg:order-2">
            <Projects />
          </div>
          <div className="order-2 lg:order-3">
            <WorkExperience />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
