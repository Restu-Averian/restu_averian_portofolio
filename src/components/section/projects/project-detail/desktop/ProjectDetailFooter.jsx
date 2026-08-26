import { ArrowLeft, ArrowRight, ExternalLink, Globe2 } from "lucide-react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n";

const ProjectLink = ({ href, children, variant = "outline" }) => {
  const disabled = !href;
  const className = cn(
    "inline-flex h-13 min-w-64 items-center justify-center gap-3 rounded-full border text-[17px] font-semibold transition",
    variant === "solid"
      ? "border-porto-btn bg-porto-btn text-porto-btn-text hover:bg-porto-btn-hover"
      : "border-porto-btn bg-transparent text-porto-btn hover:bg-porto-btn/10",
    disabled && "pointer-events-none opacity-50",
  );

  if (disabled) {
    return (
      <button type="button" disabled className={className}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
};

export const ProjectDetailFooter = ({
  goPrev,
  goNext,
  prevProject,
  nextProject,
  currentProject,
}) => {
  const { t } = useTranslation();

  return (
    <footer className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 rounded-[1.35rem] border-t border-porto-border/50 bg-porto-surface/35 px-7 py-3">
      <button
        type="button"
        onClick={goPrev}
        className="flex min-w-0 cursor-pointer items-center gap-4 text-left text-porto-text"
      >
        <ArrowLeft className="h-6 w-6 shrink-0" />
        <span className="min-w-0">
          <span className="block text-sm text-porto-btn">
            {t("PreviousProject", "Previous Project")}
          </span>
          <span className="block truncate text-[15px]">
            {prevProject?.title || t("PreviousProject", "Previous Project")}
          </span>
        </span>
      </button>

      <div className="flex items-center gap-6">
        <ProjectLink href={currentProject?.demoUrl}>
          <Globe2 className="h-5 w-5" />
          {t("LiveDemo", "Live Demo")}
          <ExternalLink className="h-4 w-4" />
        </ProjectLink>
        <ProjectLink href={currentProject?.githubUrl} variant="solid">
          <Icon icon="mdi:github" className="h-5 w-5" />
          {t("ViewOnGithub", "View on Github")}
        </ProjectLink>
        {currentProject?.packageUrl ? (
          <ProjectLink href={currentProject.packageUrl}>
            <Icon icon="simple-icons:npm" className="h-5 w-5" />
            {t("NpmPackage", "npm Package")}
            <ExternalLink className="h-4 w-4" />
          </ProjectLink>
        ) : null}
      </div>

      <button
        type="button"
        onClick={goNext}
        className="flex min-w-0 cursor-pointer items-center justify-end gap-4 text-right text-porto-text"
      >
        <span className="min-w-0">
          <span className="block text-sm text-porto-btn">
            {t("NextProject", "Next Project")}
          </span>
          <span className="block truncate text-[15px]">
            {nextProject?.title || t("NextProject", "Next Project")}
          </span>
        </span>
        <ArrowRight className="h-6 w-6 shrink-0" />
      </button>
    </footer>
  );
};
