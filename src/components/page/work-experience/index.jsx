import { memo, useState } from "react";
import { Icon } from "@iconify/react";
import { WORK_EXPERIENCES } from "@/constants";
import { WorkExperienceCard } from "./WorkExperienceCard";
import { WorkExperienceDialog } from "./WorkExperienceDialog";
import { useTranslation } from "@/i18n";

const WorkExperience_ = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const { t } = useTranslation();
  const orderedExperiences = [...WORK_EXPERIENCES].sort(
    (a, b) => Number(b.isCurrent) - Number(a.isCurrent),
  );

  const handleClose = (isOpen) => {
    if (!isOpen) {
      setSelectedExperience(null);
    }
  };

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-porto-border/80 bg-card/80 p-3.5 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex shrink-0 items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-porto-btn text-porto-btn-text">
          <Icon icon="solar:calendar-linear" className="h-4 w-4" />
        </span>
        <div>
          <h2 className="text-lg font-bold leading-tight text-foreground">
            {t("WorkJourney", "Work Journey")}
          </h2>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
            {t("WorkJourneyDescription", "My professional path and impact.")}
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="porto-scrollbar relative pl-7 pr-1 py-0.5 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain lg:pb-1">
        {/* Vertical Line - Dashed or Dotted per requirement */}
        <div className="absolute left-[1.95rem] top-5 bottom-5 w-px bg-porto-divider z-0"></div>

        {/* Roles */}
        {orderedExperiences.map((experience) => (
          <WorkExperienceCard
            key={experience.id}
            experience={experience}
            onClick={() => setSelectedExperience(experience)}
          />
        ))}
      </div>

      {/* Detail Dialog / Drawer */}
      <WorkExperienceDialog
        isOpen={!!selectedExperience}
        onClose={handleClose}
        experience={selectedExperience}
      />
    </section>
  );
};

const WorkExperience = memo(WorkExperience_);
export default WorkExperience;
