import { memo } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { DrawerWrapper } from "@/components/ui/drawer/drawer-wrapper";
import { WorkExperienceDetail } from "./WorkExperienceDetail";
import { useTranslation } from "@/i18n";

/**
 * @param {{
 *   isOpen: boolean,
 *   onClose: (open: boolean) => void,
 *   experience: import("@/constants/work-experiences").WorkExperience | null
 * }} props
 */
const WorkExperienceDialog_ = ({ isOpen, onClose, experience }) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  if (!experience) return null;

  const role = experience.role?.__i18n
    ? t(experience.role.key, experience.role.default)
    : (experience.role ?? "");

  const title = t("WorkExperienceDetailTitle", "{{role}} Detail", { role });

  if (isMobile) {
    return (
      <DrawerWrapper open={isOpen} onOpenChange={onClose} title={title}>
        <div className="flex-1 overflow-y-auto porto-scrollbar px-5 pt-8 pb-5">
          <WorkExperienceDetail experience={experience} />
        </div>
      </DrawerWrapper>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl rounded-[32px] border border-porto-border bg-background p-6 sm:p-8 md:p-10 shadow-xl flex flex-col max-h-[85vh] overflow-hidden"
        aria-labelledby="experience-detail-title"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">
          {t(
            "WorkExperienceSrDescription",
            "Work experience overview, scope, and key contributions.",
          )}
        </DialogDescription>
        <div className="flex flex-col flex-1 min-h-0">
          <WorkExperienceDetail experience={experience} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const WorkExperienceDialog = memo(WorkExperienceDialog_);
