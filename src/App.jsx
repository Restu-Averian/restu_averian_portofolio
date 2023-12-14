import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Projects = lazy(() => import("./pages/Projects"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/certificates" Component={Certificates} />
        <Route path="/projects" Component={Projects} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Suspense>
  );
}

export default App;
