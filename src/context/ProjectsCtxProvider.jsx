import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PROJECTS } from "@/constants";

export const ProjectsContext = createContext(null);

export const FEATURED_PROJECT_TITLE = "Resaeni";

export function ProjectsCtxProvider({ children }) {
  const [showModalDetail, setShowModalDetail] = useState(false);

  const detailProjectRef = useRef({});
  const scrollRef = useRef(null);

  const orderedProjects = useMemo(() => {
    return [...PROJECTS].sort((a, b) => {
      if (a.title === FEATURED_PROJECT_TITLE) return -1;
      if (b.title === FEATURED_PROJECT_TITLE) return 1;
      return 0;
    });
  }, []);

  const handleCloseModal = () => {
    setShowModalDetail(false);
    detailProjectRef.current = {};

    const newUrl = new URL(window.location);
    if (newUrl.searchParams.has("p")) {
      newUrl.searchParams.delete("p");
      window.history.replaceState(
        null,
        "",
        window.location.pathname + newUrl.search,
      );
    }
  };

  const handleSelectProject = (project) => {
    detailProjectRef.current = project;
    setShowModalDetail(true);
  };

  const handleInitialUrlParam = () => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    if (p && p.startsWith("project-")) {
      const projectId = p.replace("project-", "");
      const foundProject = PROJECTS.find(
        (proj) => String(proj.id) === projectId,
      );
      if (foundProject) {
        detailProjectRef.current = foundProject;
        setShowModalDetail(true);
      }
    }
  };

  useEffect(() => {
    handleInitialUrlParam();
  }, []);

  const contextValue = {
    showModalDetail,
    setShowModalDetail,
    detailProjectRef,
    scrollRef,
    orderedProjects,
    handleCloseModal,
    handleSelectProject,
    handleInitialUrlParam,
  };

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjectsContext() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error(
      "useProjectsContext must be used within a ProjectsCtxProvider",
    );
  }
  return context;
}

export default ProjectsCtxProvider;
