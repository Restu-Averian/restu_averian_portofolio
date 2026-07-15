import { memo, useState } from "react";
import { WORK_EXPERIENCES } from "@/data/workExperiences";
import { WorkExperienceCard } from "./WorkExperienceCard";
import { WorkExperienceDialog } from "./WorkExperienceDialog";
import { useTranslation } from "@/i18n";

const WorkExperience_ = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const { t } = useTranslation();

  const handleClose = (isOpen) => {
    if (!isOpen) {
      setSelectedExperience(null);
    }
  };

  return (
    <section className="rounded-3xl px-6 relative">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
          {t("WorkJourney", "Work Journey")}
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 pr-2 py-2">
        {/* Vertical Line - Dashed or Dotted per requirement */}
        <div className="absolute left-9.75 top-6 bottom-6 w-[2px] border-l-2 border-dashed border-porto-divider z-0"></div>

        {/* Start Badge */}
        <div className="relative z-10 flex items-center mb-6 -ml-4">
          <span className="bg-porto-btn text-porto-btn-text text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {t("WorkJourneyStart", "Start")}
          </span>
        </div>

        {/* Roles */}
        {WORK_EXPERIENCES.map((experience, index) => (
          <WorkExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
            onClick={() => setSelectedExperience(experience)}
          />
        ))}

        {/* Next Badge */}
        <div className="relative z-10 flex items-center -ml-4 mt-2">
          <span className="bg-porto-success text-porto-btn-text text-xs font-bold px-3 py-1 rounded-full shadow-sm">
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
