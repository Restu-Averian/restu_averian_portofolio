import { Globe2 } from "lucide-react";
import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";
import { cn } from "@/lib/utils";

const ProjectAction = ({ href, variant = "outline", children }) => {
  const disabled = !href;
  const className = cn(
    "flex h-13 min-w-0 flex-1 items-center justify-center gap-2 rounded-full border px-3 text-[14px] font-semibold transition active:scale-[0.99] [&>svg]:shrink-0",
    variant === "solid"
      ? "border-porto-btn bg-porto-btn text-porto-btn-text hover:bg-porto-btn-hover"
      : "border-porto-btn bg-transparent text-porto-btn hover:bg-porto-btn/10",
    disabled && "pointer-events-none opacity-45",
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

export const ProjectDetailAction = ({ currentProject }) => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-2.5">
      <ProjectAction href={currentProject?.demoUrl}>
        <Globe2 className="h-5 w-5" />
        <span className="truncate">{t("LiveDemo", "Live Demo")}</span>
      </ProjectAction>

      <ProjectAction href={currentProject?.githubUrl} variant="solid">
        <Icon icon="mdi:github" className="h-5 w-5" />
        <span className="truncate">{t("ViewOnGithub", "View on Github")}</span>
      </ProjectAction>
    </div>
  );
};
