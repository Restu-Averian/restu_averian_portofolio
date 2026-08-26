import { memo } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

/**
 * @param {{ experience: import("@/constants/work-experiences").WorkExperience }} props
 */
const WorkExperienceDetail_ = ({ experience }) => {
  const { t } = useTranslation();
  if (!experience) return null;

  const role = experience.role?.__i18n
    ? t(experience.role.key, experience.role.default)
    : (experience.role ?? "");

  const employmentType = experience.employmentType?.__i18n
    ? t(experience.employmentType.key, experience.employmentType.default)
    : experience.employmentType;

  const period = experience.period?.__i18n
    ? t(experience.period.key, experience.period.default)
    : (experience.period ?? "");

  const overview = experience.overview?.__i18n
    ? t(experience.overview.key, experience.overview.default)
    : (experience.overview ?? "");

  const confidentialityNote = experience.confidentialityNote?.__i18n
    ? t(
        experience.confidentialityNote.key,
        experience.confidentialityNote.default,
      )
    : experience.confidentialityNote;

  return (
    <div className="flex flex-col h-full flex-1 min-h-0">
      <div className="flex flex-col gap-4 shrink-0">
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
              {role}
              {employmentType && (
                <span className="ml-2 text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full align-middle whitespace-nowrap">
                  {employmentType}
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
                {period}
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="text-sm leading-relaxed text-foreground bg-card border border-border p-3 rounded-xl shadow-sm">
          {overview}
        </div>

        {/* Scope */}
        {experience.scope && experience.scope.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {experience.scope.map((tag, idx) => (
              <span
                key={tag?.key || tag || idx}
                className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md"
              >
                {tag?.__i18n ? t(tag.key, tag.default) : tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Contributions */}
      {experience.contributions && experience.contributions.length > 0 && (
        <div className="flex-1 min-h-0 overflow-y-auto porto-scrollbar pr-3 mt-4">
          <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <Icon
              icon="solar:star-fall-bold"
              className="text-porto-btn w-4 h-4"
            />
            {t("KeyContributions", "Key Contributions")}
          </h3>
          <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            {experience.contributions.map((contribution, idx) => (
              <li
                key={contribution?.key || idx}
                className="flex items-start gap-2.5"
              >
                <Icon
                  icon="solar:check-circle-bold"
                  className="w-4 h-4 text-green-500/80 shrink-0 mt-0.5"
                />
                <span className="flex-1">
                  {contribution?.__i18n
                    ? t(contribution.key, contribution.default)
                    : (contribution ?? "")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Confidentiality Note */}
      {confidentialityNote && (
        <div className="shrink-0 mt-4 text-xs leading-relaxed text-muted-foreground/80 flex items-start gap-2 bg-muted/50 p-3 rounded-lg border border-border/50">
          <Icon
            icon="solar:shield-warning-linear"
            className="w-4 h-4 shrink-0 mt-0.5"
          />
          <p>{confidentialityNote}</p>
        </div>
      )}
    </div>
  );
};

export const WorkExperienceDetail = memo(WorkExperienceDetail_);
