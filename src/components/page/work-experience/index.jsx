import { memo, useState } from "react";
import { Icon } from "@iconify/react";
import { WORK_EXPERIENCES } from "@/data/workExperiences";
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
    <section className="h-full rounded-3xl border border-porto-border/80 bg-card/80 p-3.5 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-porto-btn text-porto-btn-text">
          <Icon icon="solar:calendar-linear" className="h-4 w-4" />
        </span>
        <div>
          <h2 className="text-lg font-bold leading-tight text-foreground">
            {t("WorkJourney", "Work Journey")}
          </h2>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
            {t(
              "WorkJourneyDescription",
              "My professional path and impact.",
            )}
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-7 pr-1 py-0.5">
        {/* Vertical Line - Dashed or Dotted per requirement */}
        <div className="absolute left-[1.95rem] top-5 bottom-5 w-px bg-porto-divider z-0"></div>

        {/* Start Badge */}
        <div className="relative z-10 flex items-center mb-4 -ml-3">
          <span className="bg-porto-btn text-porto-btn-text text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            {t("WorkJourneyStart", "Start")}
          </span>
        </div>

        {/* Roles */}
        {orderedExperiences.map((experience) => (
          <WorkExperienceCard
            key={experience.id}
            experience={experience}
            onClick={() => setSelectedExperience(experience)}
          />
        ))}

        {/* Next Badge */}
        <div className="relative z-10 flex items-center -ml-3 mt-1">
          <span className="bg-emerald-200 text-foreground text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm dark:bg-emerald-700/70 dark:text-foreground">
            {t("WorkJourneyNext", "Next")}
          </span>
        </div>
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
