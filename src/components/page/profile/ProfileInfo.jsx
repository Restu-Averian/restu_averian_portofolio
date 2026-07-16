import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

export const ProfileInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
      <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] lg:leading-tight font-bold text-foreground">
        Restu Averian Putra
      </h1>
      <p className="mt-1 flex items-center gap-1.5 text-base lg:text-lg font-semibold text-porto-btn">
        {t("ProfileRole", "Frontend Engineer")}
        <Icon
          icon="solar:stars-minimalistic-bold"
          className="text-porto-accent h-4 w-4"
        />
      </p>

      <p className="mt-2 text-sm text-muted-foreground max-w-md w-full wrap-break-word leading-relaxed text-center md:text-left">
        {t(
          "PortfolioTagline",
          "Frontend Engineer building scalable React applications, configurable internal tools, and performance-critical UI systems.",
        )}
      </p>

      <div className="mt-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-4xl border border-porto-border bg-transparent px-3 py-1.5 text-xs font-medium text-foreground md:justify-start">
        <span className="inline-flex min-w-0 items-center gap-1.5 whitespace-nowrap">
          <Icon icon="solar:map-point-linear" className="h-4 w-4 shrink-0" />
          <span className="truncate">
            {t("Location", "South Tangerang, Indonesia")}
          </span>
        </span>
        <span className="h-4 w-px shrink-0 bg-porto-divider" />
        <span className="inline-flex min-w-0 items-center gap-1.5 whitespace-nowrap">
          <Icon icon="solar:case-round-linear" className="h-4 w-4 shrink-0" />
          <span className="truncate">
            {t("ExperienceLabel", "3+ Years of Experience")}
          </span>
        </span>
      </div>
    </div>
  );
};
