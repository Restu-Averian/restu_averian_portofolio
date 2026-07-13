import { memo } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

/**
 * @param {{
 *   experience: import("@/data/workExperiences").WorkExperience,
 *   onClick: () => void,
 *   index: number
 * }} props
 */
const WorkExperienceCard_ = ({ experience, onClick, index }) => {
  const { t } = useTranslation();
  const borderColor = index === 0 ? "border-[#ffcd72]" : "border-[#ff8e8e]";

  return (
    <div className="relative z-10 flex items-start gap-4 mb-6 ml-[-5.5px]">
      <div
        className={`w-4 h-4 rounded-full bg-card border-[3px] mt-4 z-10 shrink-0 ${borderColor}`}
      ></div>
      <button
        type="button"
        onClick={onClick}
        aria-label={`View details for ${experience.roleDefaultText} at ${experience.company}`}
        className="flex-1 bg-card border border-porto-border rounded-xl p-3 flex flex-col sm:flex-row sm:items-center gap-3 shadow-sm text-left transition-all hover:border-porto-btn hover:shadow-md focus:outline-none focus:ring-2 focus:ring-porto-btn focus:border-transparent group cursor-pointer"
      >
        {experience.logo && (
          <div className="w-10 h-10 rounded-full border border-porto-border overflow-hidden shrink-0 flex items-center justify-center bg-popover p-1 group-hover:scale-105 transition-transform">
            <img
              src={experience.logo}
              alt={`${experience.company} Logo`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-bold text-foreground leading-tight group-hover:text-porto-btn transition-colors">
                {t(experience.roleKey, experience.roleDefaultText)}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                {experience.employmentTypeKey && `${t(experience.employmentTypeKey, experience.employmentTypeDefaultText)} • `}
                {experience.company}
              </p>
            </div>
            {experience.isCurrent && (
              <span className="bg-porto-btn/10 text-porto-btn text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                {t("CurrentRole", "Current")}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 mt-2 text-[11px] font-medium text-foreground bg-muted w-max px-2 py-1 rounded-md">
            <Icon icon="solar:calendar-linear" className="w-3 h-3" />
            {experience.period}
          </div>

          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
            {t(experience.shortSummaryKey, experience.shortSummaryDefaultText)}
          </p>
        </div>
      </button>
    </div>
  );
};

export const WorkExperienceCard = memo(WorkExperienceCard_);
