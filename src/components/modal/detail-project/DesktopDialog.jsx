import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { memo } from "react";
import SideNavButton from "./SideNavButton";
import ThumbnailSection from "./ThumbnailSection";
import MobileSwitcher from "./MobileSwitcher";
import InfoSection from "./info-section";

const DesktopDialog_ = ({
  open,
  onClose,
  prevProject,
  nextProject,
  goPrev,
  goNext,
  currentProject,
}) => {
  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose?.()}>
      <DialogContent className="w-[95vw] sm:max-w-[90vw] xl:max-w-[1260px] border-none bg-porto-bg p-6 sm:p-10 shadow-2xl rounded-[32px] sm:rounded-[40px]">
        <DialogTitle className="sr-only">Detail Project</DialogTitle>

        <div className="relative mx-auto w-full">
          <SideNavButton
            direction="left"
            label={prevProject?.title || "Previous Project"}
            onClick={goPrev}
          />
          <SideNavButton
            direction="right"
            label={nextProject?.title || "Next Project"}
            onClick={goNext}
          />

          <div className="grid gap-8 xl:grid-cols-[0.95fr_1fr] xl:gap-12">
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
      </DialogContent>
    </Dialog>
  );
};

const DesktopDialog = memo(DesktopDialog_);
export default DesktopDialog;
