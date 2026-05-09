import ExperienceRoadmap from "@/assets/ExperienceRoadmap";
import { Icon } from "@iconify/react";
import { memo } from "react";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience_ = () => {
  return (
    <section className="px-16 hidden md:block">
      <h2 className="mb-24 flex items-center gap-2 text-2xl font-semibold text-foreground">
        <Icon icon="material-symbols:work-outline" width="36" height="36" />
        Work Experience
      </h2>

      <div className="relative w-max">
        <ExperienceRoadmap />

        <button
          type="button"
          className="
              flex items-center justify-center
              rounded-full
              bg-card
              text-foreground
              font-semibold
              text-2xl
              transition-all
              hover:scale-105
              active:scale-95
              absolute
              -bottom-8
              -left-5
              p-5
              cursor-pointer
            "
          style={{
            border: "3px solid var(--primary)",
          }}
        >
          Go
        </button>

        <WorkExperienceCard
          position={{
            yClass: "-top-16",
            xClass: "-left-24",
          }}
          scaleFont={3}
          scalePeriodText={2}
          imgSize={{
            widthClass: "w-14",
            heightClass: "h-14",
          }}
        />

        <WorkExperienceCard
          position={{
            yClass: "top-20",
            xClass: "left-36",
          }}
        />
      </div>
    </section>
  );
};

const WorkExperience = memo(WorkExperience_);
export default WorkExperience;
