import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/ErrorPage";
import ProjectDetail from "./pages/ProjectDetail";
import AllProjects from "./pages/AllProjects";
import Layouts from "./pages/Layouts";

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
