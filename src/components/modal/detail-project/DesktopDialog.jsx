import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { memo } from "react";
import SideNavButton from "./SideNavButton";
import ThumbnailSection from "./ThumbnailSection";
import InfoSection from "./InfoSection";

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

          {/* <MobileSwitcher
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
          /> */}
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

const DesktopDialog = memo(DesktopDialog_);
export default DesktopDialog;
