import MascottTexteditor from "@/assets/icons/MascottTexteditor";
import useIsMobile from "@/hooks/useIsMobile";
import { Icon } from "@iconify/react";
import { ExternalLink, Home, PencilLine } from "lucide-react";
import { memo } from "react";
import ProjectActionButton from "./ProjectActionButton";
import MascottDailyPlanner from "@/assets/icons/MascottDailyPlanner";

const TechChip = ({ tag }) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-porto-accent/70 px-4 py-1.5 text-sm font-medium text-porto-text">
      <Icon icon={tag?.icon} className="h-4 w-4" />
      {tag?.label}
    </span>
  );
};

const Mascott = ({ stickerType, ...props }) => {
  switch (stickerType) {
    case "mascott-texteditor":
      return <MascottTexteditor {...props} />;
    case "mascott-daily-planner":
      return <MascottDailyPlanner {...props} />;
    default:
      return null;
  }
};

const InfoSection_ = ({ project }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex h-full flex-col justify-between gap-6 py-3">
      <div className="space-y-6">
        <div className="flex  items-center md:items-start justify-between gap-4">
          <h2 className="text-4xl font-semibold leading-[0.95] text-porto-text sm:text-[52px]">
            {project?.title}
          </h2>

          <Mascott
            stickerType={project?.stickerType}
            size={isMobile ? 100 : 88}
            className="mt-1  shrink-0 text-porto-text/80"
          />
        </div>

        <hr className="border-t-[5px] border-porto-divider" />

        <p className="max-w-145 text-[17px] leading-[1.45] text-porto-muted">
          {project?.descDetail || ""}
        </p>

        <div className="space-y-4 pt-6">
          <div className="flex items-center gap-3 text-porto-text">
            <Icon icon="grommet-icons:technology" width="24" height="24" />
            <h3 className="text-[24px] font-semibold leading-none">
              Tech Stack
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {(project?.tags ?? []).map((tag, idx) => (
              <TechChip key={`${tag?.title}-${idx}`} tag={tag} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5 pt-6">
        <ProjectActionButton
          href={project?.demoUrl}
          icon={
            project?.demoUrl ? (
              <ExternalLink className="h-6 w-6" />
            ) : (
              <Icon icon="lucide:hammer" className="h-6 w-6" />
            )
          }
          label={project?.demoUrl ? "Live Demo" : "In Progress"}
          disabled={!project?.demoUrl}
          variant="outline"
        />

        <ProjectActionButton
          href={project?.githubUrl}
          icon={
            project?.githubUrl ? (
              <Icon icon="mdi:github" className="h-6 w-6" />
            ) : (
              <Icon icon="lucide:hammer" className="h-6 w-6" />
            )
          }
          label={project?.githubUrl ? "Live Demo" : "View on Github"}
          disabled={!project?.githubUrl}
          variant="solid"
        />
      </div>
    </div>
  );
};

const InfoSection = memo(InfoSection_);
export default InfoSection;
