import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Projects = lazy(() => import("./pages/Projects"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Tes = lazy(() => import("./pages/Tes"));

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <Routes location={location}>
        <Route path="/" Component={Home} />
        <Route path="/certificates" Component={Certificates} />
        <Route path="/projects" Component={Projects} />
        <Route path="/tes" Component={Tes} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Suspense>
  );
}

export default App;
