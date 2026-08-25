import { memo, useEffect, useMemo, useState } from "react";
import MobileDrawer from "./MobileDrawer";
import DesktopDialog from "./DesktopDialog";
import useIsMobile from "@/hooks/useIsMobile";
import { PROJECTS } from "@/constants";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";

const ProjectDetail_ = () => {
  const { showModalDetail, handleCloseModal, detailProjectRef } =
    useProjectsContext();
  const project = detailProjectRef?.current;

  const initialIndex = useMemo(() => {
    if (!project?.id) return 0;
    const found = PROJECTS.findIndex((item) => item.id === project.id);
    return found === -1 ? 0 : found;
  }, [project]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const isMobile = useIsMobile();

  const currentProject = useMemo(
    () => PROJECTS[currentIndex] || PROJECTS[0],
    [currentIndex],
  );

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const prevProject =
    PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

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
    if (showModalDetail === true) {
      setCurrentIndex(initialIndex);
    }
  }, [showModalDetail, initialIndex]);

  useEffect(() => {
    if (showModalDetail && currentProject?.id) {
      updateProjectUrlParam(currentProject.id);
    }
  }, [showModalDetail, currentProject]);

  if (isMobile) {
    return (
      <MobileDrawer
        open={showModalDetail}
        onClose={handleCloseModal}
        prevProject={prevProject}
        nextProject={nextProject}
        goPrev={goPrev}
        goNext={goNext}
        currentProject={currentProject}
        currentIndex={currentIndex}
      />
    );
  }

  return (
    <DesktopDialog
      open={showModalDetail}
      onClose={handleCloseModal}
      prevProject={prevProject}
      nextProject={nextProject}
      goPrev={goPrev}
      goNext={goNext}
      currentProject={currentProject}
    />
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
