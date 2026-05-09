import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { PROJECTS } from "@/components/page/Projects";
import ThumbnailSection from "./ThumbnailSection";
import InfoSection from "./InfoSection";

const MobileDrawer = ({
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
          max-h-[92dvh] rounded-t-3xl
          border-t-4 border-porto-btn/40
          bg-porto-bg
          flex flex-col
          focus:outline-none
        "
      >
        {/* Drag handle — otomatis dari shadcn Drawer */}

        {/* Header */}
        <DrawerHeader className="flex items-center justify-between px-5 pt-3 pb-2">
          <DrawerTitle className="text-base font-semibold text-foreground truncate max-w-[70%]">
            {currentProject.title}
          </DrawerTitle>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-porto-border text-muted-foreground hover:text-foreground transition-all"
          >
            <X className="h-4 w-4" />
          </button>
        </DrawerHeader>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 pb-4 space-y-4">
          <ThumbnailSection images={currentProject.images} />
          <InfoSection project={currentProject} />
        </div>

        {/* Bottom nav — Prev / Next */}
        <div
          className="
          shrink-0
          flex items-center justify-between
          px-5 py-3
          border-t border-porto-border
          bg-porto-bg
        "
        >
          <button
            onClick={goPrev}
            className="
              flex items-center gap-2
              rounded-full border border-porto-border
              bg-background px-4 py-2
              text-sm font-medium text-foreground
              hover:border-porto-btn hover:text-porto-btn
              transition-all active:scale-95
            "
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="max-w-25 truncate">{prevProject?.title}</span>
          </button>

          <span className="text-xs text-muted-foreground">
            {currentIndex + 1} / {PROJECTS.length}
          </span>

          <button
            onClick={goNext}
            className="
              flex items-center gap-2
              rounded-full border border-porto-border
              bg-background px-4 py-2
              text-sm font-medium text-foreground
              hover:border-porto-btn hover:text-porto-btn
              transition-all active:scale-95
            "
          >
            <span className="max-w-25 truncate">{nextProject?.title}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
