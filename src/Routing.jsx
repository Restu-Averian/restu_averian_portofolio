import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/ErrorPage";
import Layouts from "./pages/Layouts";
import { lazy, Suspense } from "react";
import SuspenseLoading from "./components/global/SuspenseLoading";

const Home = lazy(() => import("./pages/Home"));
const AllProjects = lazy(() => import("./pages/AllProjects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={<SuspenseLoading text="Warming up the homepage" />}
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "project",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SuspenseLoading text="Loading projects" />}>
                <AllProjects />
              </Suspense>
            ),
          },
          {
            path: ":id",
            element: (
              <Suspense
                fallback={<SuspenseLoading text="Opening project details" />}
              >
                <ProjectDetail />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
