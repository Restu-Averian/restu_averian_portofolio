import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/ErrorPage";
import ProjectDetail from "./pages/ProjectDetail";
import Layouts from "./pages/Layouts";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "project",
        children: [
          {
            index: true,
            element: <AllProjects />,
          },
          {
            path: ":id",
            element: <ProjectDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
