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
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef(null);

  const orderedProjects = useMemo(() => {
    return [...PROJECTS].sort((a, b) => {
      if (a.title === FEATURED_PROJECT_TITLE) return -1;
      if (b.title === FEATURED_PROJECT_TITLE) return 1;
      return 0;
    });
  }, []);

  const currentProject = useMemo(
    () => PROJECTS[currentIndex] || PROJECTS[0],
    [currentIndex],
  );

  const prevProject =
    PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const updateProjectUrlParam = (projectId) => {
    const newUrl = new URL(window.location);
    newUrl.searchParams.set("p", `project-${projectId}`);
    window.history.replaceState(
      null,
      "",
      window.location.pathname + newUrl.search,
    );
  };

  useEffect(() => {
    if (showModalDetail && currentProject?.id) {
      updateProjectUrlParam(currentProject.id);
    }
  }, [showModalDetail, currentProject]);

  const handleCloseModal = () => {
    setShowModalDetail(false);

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
    const idx = PROJECTS.findIndex((p) => p.id === project.id);
    setCurrentIndex(idx === -1 ? 0 : idx);
    setShowModalDetail(true);
  };

  const handleInitialUrlParam = () => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    if (p && p.startsWith("project-")) {
      const projectId = p.replace("project-", "");
      const foundIdx = PROJECTS.findIndex(
        (proj) => String(proj.id) === projectId,
      );
      if (foundIdx !== -1) {
        setCurrentIndex(foundIdx);
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
    scrollRef,
    orderedProjects,
    handleCloseModal,
    handleSelectProject,
    handleInitialUrlParam,
    currentIndex,
    currentProject,
    prevProject,
    nextProject,
    goPrev,
    goNext,
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
