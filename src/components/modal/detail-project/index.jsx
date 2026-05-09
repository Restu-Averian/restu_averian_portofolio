import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "@/components/page/Projects";
import MobileDrawer from "./MobileDrawer";
import DesktopDialog from "./DesktopDialog";

const ModalDetailProject = ({ open, onClose, project }) => {
  const initialIndex = useMemo(() => {
    if (!project?.id) return 0;
    const found = PROJECTS.findIndex((item) => item.id === project.id);
    return found === -1 ? 0 : found;
  }, [project]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMobile, setIsMobile] = useState(false);

  const currentProject = PROJECTS[currentIndex] || PROJECTS[0];

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
    const mq = window.matchMedia("(max-width: 767px)");

    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e?.matches);

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
