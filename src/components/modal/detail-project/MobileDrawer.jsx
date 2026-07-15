import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { PROJECTS } from "@/constants";
import ThumbnailSection from "./ThumbnailSection";
import InfoSection from "./info-section";
import { memo } from "react";

const MobileDrawer_ = ({
  open,
  onClose,
  prevProject,
  nextProject,
  goPrev,
  goNext,
  currentProject,
  currentIndex,
}) => {
  return (
    <Drawer open={open} onOpenChange={(val) => !val && onClose?.()}>
      <DrawerContent
        className="
          max-h-[96dvh] rounded-t-[32px]
          border-none
          bg-porto-surface-elevated
          flex flex-col
          focus:outline-none
        "
      >
        <DrawerTitle className="sr-only">Detail Project</DrawerTitle>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-porto-border bg-transparent text-porto-text hover:border-porto-btn hover:bg-porto-accent/40 hover:text-porto-btn transition-all focus:outline-none focus:ring-2 focus:ring-porto-focus"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 pt-8 pb-4 space-y-6">
          <ThumbnailSection images={currentProject.images} />
          <InfoSection project={currentProject} />
        </div>

        {/* Bottom nav — Prev / Next */}
        <div
          className="
          shrink-0
          flex items-center justify-between
          px-5 py-4 pb-8
          bg-transparent
        "
        >
          <button
            onClick={goPrev}
            className="
              flex items-center gap-1.5
              rounded-full border-[1.5px] border-porto-text/20
              bg-transparent px-4 py-2
              text-sm font-medium text-porto-text
              hover:border-porto-btn hover:bg-porto-accent/40 hover:text-porto-btn
              focus:outline-none focus:ring-2 focus:ring-porto-focus
              transition-all active:scale-95
            "
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span className="max-w-[100px] truncate">{prevProject?.title}</span>
          </button>

          <span className="text-sm font-medium text-porto-text/70">
            {currentIndex + 1} / {PROJECTS.length}
          </span>

          <button
            onClick={goNext}
            className="
              flex items-center gap-1.5
              rounded-full border-[1.5px] border-porto-text/20
              bg-transparent px-4 py-2
              text-sm font-medium text-porto-text
              hover:border-porto-btn hover:bg-porto-accent/40 hover:text-porto-btn
              focus:outline-none focus:ring-2 focus:ring-porto-focus
              transition-all active:scale-95
            "
          >
            <span className="max-w-[100px] truncate">{nextProject?.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const MobileDrawer = memo(MobileDrawer_);
export default MobileDrawer;
