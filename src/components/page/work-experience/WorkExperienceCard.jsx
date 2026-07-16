import { memo } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

/**
 * @param {Object} props
 * @param {import("@/data/workExperiences").WorkExperience} props.experience
 * @param {() => void} props.onClick
 */
const WorkExperienceCard_ = ({ experience, onClick }) => {
  const { t } = useTranslation();
  const isCurrent = experience.isCurrent;

  return (
    <div className="relative z-10 mb-3 ml-[-5.5px] flex items-start gap-3 last:mb-2">
      <div
        className={`mt-4 h-4 w-4 shrink-0 rounded-full border-[3px] ${
          isCurrent
            ? "border-porto-btn bg-porto-btn"
            : "border-porto-border bg-card"
        }`}
      />
      <button
        type="button"
        onClick={onClick}
        aria-label={`View details for ${experience.roleDefaultText} at ${experience.company}`}
        className={`group flex-1 cursor-pointer rounded-2xl border p-2.5 text-left shadow-sm transition-all hover:border-porto-btn hover:shadow-md focus:outline-none focus:ring-2 focus:ring-porto-btn focus:border-transparent ${
          isCurrent
            ? "border-porto-btn/80 bg-background/70"
            : "border-porto-border/80 bg-background/45"
        }`}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          {experience.logo && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-porto-border bg-popover p-1 transition-transform group-hover:scale-105">
              <img
                src={experience.logo}
                alt={`${experience.company} Logo`}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p
                  className={`font-bold leading-tight text-foreground transition-colors group-hover:text-porto-btn ${
                    isCurrent ? "text-base" : "text-sm"
                  }`}
                >
                  {t(experience.roleKey, experience.roleDefaultText)}
                </p>
                <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                  {experience.employmentTypeKey &&
                    `${t(
                      experience.employmentTypeKey,
                      experience.employmentTypeDefaultText,
                    )} • `}
                  {experience.company}
                </p>
              </div>
              {isCurrent && (
                <span className="shrink-0 rounded-full bg-porto-btn/10 px-2 py-0.5 text-[10px] font-bold text-porto-btn">
                  {t("CurrentRole", "Current")}
                </span>
              )}
            </div>

            <div className="mt-2.5 flex w-max items-center gap-1.5 rounded-md bg-muted/80 px-2 py-1 text-[11px] font-medium text-foreground">
              <Icon icon="solar:calendar-linear" className="h-3 w-3" />
              {experience.period}
            </div>

            <p
              className={`mt-2 text-xs leading-relaxed text-muted-foreground ${
                isCurrent ? "" : "line-clamp-2"
              }`}
            >
              {t(
                experience.shortSummaryKey,
                experience.shortSummaryDefaultText,
              )}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export const WorkExperienceCard = memo(WorkExperienceCard_);
