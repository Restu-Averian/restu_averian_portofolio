import { memo } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { WorkExperienceDetail } from "./WorkExperienceDetail";
import { useTranslation } from "@/i18n";

/**
 * @param {{
 *   isOpen: boolean,
 *   onClose: (open: boolean) => void,
 *   experience: import("@/data/workExperiences").WorkExperience | null
 * }} props
 */
const WorkExperienceDialog_ = ({ isOpen, onClose, experience }) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  if (!experience) return null;
  const title = t("ExperienceDetailTitle", "{{role}} Detail", {
    role: t(experience.roleKey, experience.roleDefaultText),
  });

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="max-h-[90dvh] px-6 pb-8 pt-4 rounded-t-[32px]">
          <DrawerTitle className="sr-only" id="experience-detail-title">
            {title}
          </DrawerTitle>
          <div className="min-h-0 overflow-y-auto pt-4 custom-scrollbar">
            <WorkExperienceDetail experience={experience} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-h-[85dvh] max-w-2xl overflow-x-hidden overflow-y-auto! overscroll-contain rounded-4xl border border-porto-border bg-background p-6 shadow-xl custom-scrollbar sm:p-8 md:p-10 xl:overflow-y-auto!"
        aria-labelledby="experience-detail-title"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <WorkExperienceDetail experience={experience} />
      </DialogContent>
    </Dialog>
  );
};

export const WorkExperienceDialog = memo(WorkExperienceDialog_);
