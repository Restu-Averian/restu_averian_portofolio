import { Icon } from "@iconify/react";
import { memo } from "react";
import { useTranslation } from "@/i18n";
import ProjectActionButton from "./ProjectActionButton";

const TechChip = ({ tag }) => {
  return (
    <span className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-porto-accent/70 px-3 py-1 md:px-4 md:py-1.5 text-[12px] md:text-sm font-medium text-porto-text">
      <Icon icon={tag?.icon} className="h-3.5 w-3.5 md:h-4 md:w-4" />
      {tag?.label}
    </span>
  );
};

const InfoSection_ = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-between gap-6 py-3">
      <div className="space-y-6">
        <div className="flex items-center md:items-start justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-[52px] font-semibold leading-[0.95] text-porto-text">
            {project?.title}
          </h2>
        </div>

        <hr className="border-t-[3px] md:border-t-[5px] border-porto-divider" />

        <p className="max-w-145 text-[15px] md:text-[17px] leading-normal md:leading-[1.45] text-porto-muted">
          {project?.descDetailKey
            ? t(project.descDetailKey, project.descDetail)
            : project?.descDetail || ""}
        </p>

        <div className="space-y-4 pt-6">
          <div className="flex items-center gap-2 md:gap-3 text-porto-text">
            <Icon
              icon="grommet-icons:technology"
              className="h-5 w-5 md:h-6 md:w-6"
            />
            <h3 className="text-[20px] md:text-[24px] font-semibold leading-none">
              {t("TechStack", "Tech Stack")}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {(project?.tags ?? []).map((tag, idx) => (
              <TechChip key={`${tag?.title}-${idx}`} tag={tag} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 md:space-y-5 pt-6">
        <ProjectActionButton
          href={project?.demoUrl}
          icon={
            project?.demoUrl ? (
              <Icon icon="lucide:globe" className="h-5 w-5 md:h-6 md:w-6" />
            ) : (
              <Icon icon="lucide:hammer" className="h-5 w-5 md:h-6 md:w-6" />
            )
          }
          label={
            project?.demoUrl
              ? t("LiveDemo", "Live Demo")
              : t("InProgress", "In Progress")
          }
          disabled={!project?.demoUrl}
          variant="outline"
        />

        <ProjectActionButton
          href={project?.githubUrl}
          icon={
            project?.githubUrl ? (
              <Icon icon="mdi:github" className="h-5 w-5 md:h-6 md:w-6" />
            ) : (
              <Icon icon="lucide:hammer" className="h-5 w-5 md:h-6 md:w-6" />
            )
          }
          label={
            project?.githubUrl
              ? t("ViewOnGithub", "View on Github")
              : t("LiveDemo", "Live Demo")
          }
          disabled={!project?.githubUrl}
          variant="solid"
        />
      </div>
    </div>
  );
};

const InfoSection = memo(InfoSection_);
export default InfoSection;
