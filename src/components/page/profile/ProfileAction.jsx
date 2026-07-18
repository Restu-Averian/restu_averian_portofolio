import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";
import { getSocialLinks } from "@/constants";

export const ProfileAction = () => {
  const { t, locale } = useTranslation();

  const socialLinks = useMemo(() => getSocialLinks(locale), [locale]);

  return (
    <div className="shrink-0 flex w-full flex-col items-center gap-3 md:w-64 md:items-stretch">
      <a
        href="/resume/Restu-Averian-Putra-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(
          "OpenResumeInNewTab",
          "Open Restu Averian Putra's resume in a new tab",
        )}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-porto-btn text-porto-btn-text px-6 py-2.5 text-sm font-bold shadow-sm transition-colors hover:bg-porto-btn-hover"
      >
        <Icon icon="solar:export-linear" className="h-5 w-5" />
        {t("ViewResume", "View Resume")}
      </a>

      {/* Horizontal Divider */}
      <div className="w-full border-t-2 border-dashed border-porto-border my-2 md:hidden" />

      <div className="flex flex-col items-center gap-2 w-full md:items-start">
        <span className="text-xs font-medium text-foreground">
          {t("FindMeOn", "Find me on:")}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
          {socialLinks?.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-porto-border bg-transparent text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn"
            >
              <Icon icon={icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
