import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import SideNavButton from "./SideNavButton";
import MobileSwitcher from "./MobileSwitcher";
import InfoSection from "./InfoSection";
import ThumbnailSection from "./ThumbnailSection";
import { PROJECTS } from "@/components/page/Projects";

const ModalDetailProject = ({ open, onClose, project }) => {
  const initialIndex = useMemo(() => {
    if (!project?.id) return 0;
    const found = PROJECTS.findIndex((item) => item.id === project.id);
    return found === -1 ? 0 : found;
  }, [project]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

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

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose?.()}>
      <DialogContent>
        <DialogTitle className="sr-only">Detail Project</DialogTitle>

        <div className="relative mx-auto w-full max-w-315">
          <SideNavButton
            direction="left"
            label={prevProject?.title || "Previous Project"}
            onClick={goPrev}
          />

          <div className="grid gap-8 xl:grid-cols-[0.95fr_1fr] xl:gap-10">
            <ThumbnailSection images={currentProject?.images} />
            <InfoSection project={currentProject} />
          </div>

          <MobileSwitcher
            next={{
              onClick() {
                goNext();
              },
              label: nextProject?.title,
            }}
            prev={{
              onClick() {
                goPrev();
              },
              label: prevProject?.title,
            }}
          />
        </div>

        <SideNavButton
          direction="right"
          label={nextProject?.title || "Next Project"}
          onClick={goNext}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalDetailProject;
