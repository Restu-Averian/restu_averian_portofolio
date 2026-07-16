import { useEffect, useMemo, useState } from "react";
import MobileDrawer from "./MobileDrawer";
import DesktopDialog from "./DesktopDialog";
import useIsMobile from "@/hooks/useIsMobile";
import { PROJECTS } from "@/constants";

const ModalDetailProject = ({ open, onClose, project }) => {
  const initialIndex = useMemo(() => {
    if (!project?.id) return 0;
    const found = PROJECTS.findIndex((item) => item.id === project.id);
    return found === -1 ? 0 : found;
  }, [project, open]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const isMobile = useIsMobile();

  const currentProject = useMemo(
    () => PROJECTS[currentIndex] || PROJECTS[0],
    [currentIndex, open],
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

  useEffect(() => {
    if (open === true) {
      setCurrentIndex(initialIndex);
    }
  }, [open, initialIndex]);

  useEffect(() => {
    if (open && currentProject?.id) {
      const newUrl = new URL(window.location);
      newUrl.searchParams.set("p", `project-${currentProject.id}`);
      window.history.replaceState(null, "", window.location.pathname + newUrl.search);
    }
  }, [open, currentProject]);

  if (isMobile) {
    return (
      <MobileDrawer
        open={open}
        onClose={onClose}
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
      open={open}
      onClose={onClose}
      prevProject={prevProject}
      nextProject={nextProject}
      goPrev={goPrev}
      goNext={goNext}
      currentProject={currentProject}
    />
  );
};

export default ModalDetailProject;
