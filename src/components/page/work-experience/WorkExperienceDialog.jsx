import { memo } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { WorkExperienceDetail } from "./WorkExperienceDetail";

/**
 * @param {{
 *   isOpen: boolean,
 *   onClose: (open: boolean) => void,
 *   experience: import("@/constants").WorkExperience | null
 * }} props
 */
const WorkExperienceDialog_ = ({ isOpen, onClose, experience }) => {
  const isMobile = useIsMobile();

  if (!experience) return null;

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="px-6 pb-8 pt-4 rounded-t-[32px]">
          <DrawerTitle className="sr-only" id="experience-detail-title">
            {experience.roleDefaultText} Detail
          </DrawerTitle>
          <div className="overflow-y-auto max-h-[80vh] pt-4 custom-scrollbar">
            <WorkExperienceDetail experience={experience} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl rounded-[32px] border border-porto-border bg-background p-6 sm:p-8 md:p-10 max-h-[85vh] overflow-y-auto custom-scrollbar shadow-xl"
        aria-labelledby="experience-detail-title"
      >
        <DialogTitle className="sr-only">
          {experience.roleDefaultText} Detail
        </DialogTitle>
        <DialogDescription className="sr-only">
          Work experience overview, scope, and key contributions.
        </DialogDescription>
        <WorkExperienceDetail experience={experience} />
      </DialogContent>
    </Dialog>
  );
};

export const WorkExperienceDialog = memo(WorkExperienceDialog_);
