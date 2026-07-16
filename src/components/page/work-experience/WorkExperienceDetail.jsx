import { memo } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

/**
 * @param {{ experience: import("@/constants").WorkExperience }} props
 */
const WorkExperienceDetail_ = ({ experience }) => {
  const { t } = useTranslation();
  if (!experience) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex gap-4 items-start">
        {experience.logo && (
          <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border-2 border-porto-border overflow-hidden bg-popover p-1.5 flex items-center justify-center">
            <img
              src={experience.logo}
              alt={`${experience.company} Logo`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        )}
        <div>
          <h2
            id="experience-detail-title"
            className="text-lg md:text-xl font-bold text-foreground leading-tight"
          >
            {t(experience.roleKey, experience.roleDefaultText)}
            {experience.employmentTypeKey && (
              <span className="ml-2 text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full align-middle whitespace-nowrap">
                {t(experience.employmentTypeKey, experience.employmentTypeDefaultText)}
              </span>
            )}
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-1.5 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {experience.company}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Icon icon="solar:calendar-linear" className="w-4 h-4" />
              {t(experience.periodKey, experience.periodDefaultText)}
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="text-sm leading-relaxed text-foreground bg-card border border-border p-3 rounded-xl shadow-sm">
        {t(experience.overviewKey, experience.overviewDefaultText)}
      </div>

      {/* Scope */}
      {experience.scope && experience.scope.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {experience.scope.map((tag) => (
            <span
              key={tag.key}
              className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md"
            >
              {t(tag.key, tag.defaultText)}
            </span>
          ))}
        </div>
      )}

      {/* Contributions */}
      {experience.contributions && experience.contributions.length > 0 && (
        <div className="mt-2">
          <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <Icon
              icon="solar:star-fall-bold"
              className="text-porto-btn w-4 h-4"
            />
            {t("KeyContributions", "Key Contributions")}
          </h3>
          <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            {experience.contributions.map((contribution, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Icon
                  icon="solar:check-circle-bold"
                  className="w-4 h-4 text-green-500/80 shrink-0 mt-0.5"
                />
                <span className="flex-1">{t(contribution.key, contribution.defaultText)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Confidentiality Note */}
      {experience.confidentialityNoteKey && (
        <div className="mt-4 text-xs leading-relaxed text-muted-foreground/80 flex items-start gap-2 bg-muted/50 p-3 rounded-lg border border-border/50">
          <Icon
            icon="solar:shield-warning-linear"
            className="w-4 h-4 shrink-0 mt-0.5"
          />
          <p>{t(experience.confidentialityNoteKey, experience.confidentialityNoteDefaultText)}</p>
        </div>
      )}
    </div>
  );
};

export const WorkExperienceDetail = memo(WorkExperienceDetail_);
