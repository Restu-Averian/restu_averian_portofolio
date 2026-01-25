import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/ErrorPage";
import AllProjects from "./pages/all-projects";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-projects",
        element: <AllProjects />,
      },
    ],
  },
]);

export default router;
