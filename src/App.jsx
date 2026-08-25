import TopBar from "./components/section/TopBar";
import Profile from "./components/section/Profile";
import WorkExperience from "./components/section/work-experience";
import Footer from "./components/section/Footer";
import TechnicalHighlights from "./components/section/TechnicalHighlights";
import Projects from "./components/section/projects";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground lg:h-screen lg:overflow-hidden">
      <TopBar />

      <Profile />

      <main className="min-h-0 grow px-4 pb-5 md:px-10 lg:pb-3">
        <div className="mx-auto grid w-full max-w-375 grid-cols-1 gap-4 py-4 lg:h-full lg:min-h-0 lg:grid-cols-[0.9fr_1.35fr_1fr] lg:py-3">
          <div className="order-3 lg:order-1 lg:min-h-0">
            <TechnicalHighlights />
          </div>
          <div className="order-1 lg:order-2 lg:min-h-0">
            <Projects />
          </div>
          <div className="order-2 lg:order-3 lg:min-h-0">
            <WorkExperience />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
