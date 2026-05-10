import MascottTexteditor from "@/assets/icons/MascottTexteditor";
import useIsMobile from "@/hooks/useIsMobile";
import { Icon } from "@iconify/react";
import { ExternalLink, Home, PencilLine } from "lucide-react";
import { memo } from "react";

const chipIcon = {
  React: Home,
  Tiptap: PencilLine,
  "Shadcn-ui": PencilLine,
};

const TechChip = ({ label }) => {
  const Icon = chipIcon[label] || Home;

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-porto-accent/70 px-4 py-1.5 text-sm font-medium text-porto-text">
      <Icon className="h-4 w-4" />
      {label}
    </span>
  );
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

          <MascottTexteditor
            size={isMobile ? 100 : 88}
            className="mt-1  shrink-0 text-porto-text/80"
          />
        </div>

        <hr className="border-t-[5px] border-porto-divider" />

        <p className="max-w-145 text-[17px] leading-[1.45] text-porto-muted">
          {project?.desc}
        </p>

        <div className="space-y-4 pt-6">
          <div className="flex items-center gap-3 text-porto-text">
            <PencilLine className="h-7 w-7 text-porto-text/75" />
            <h3 className="text-[28px] font-semibold leading-none">
              Tech Stack
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {(project?.tags ?? []).map((item) => (
              <TechChip key={item} label={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5 pt-6">
        <a
          href={project?.demoUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className="flex py-3 w-full items-center justify-center gap-3 rounded-full border-[3px] border-porto-btn/70 bg-transparent text-[20px] font-semibold text-porto-btn transition-all duration-200 "
        >
          <ExternalLink className="h-5 w-5" />
          <span>Live Demo</span>
        </a>

        <a
          href={project?.githubUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className="flex py-3 w-full items-center justify-center gap-3 rounded-full bg-porto-btn text-[20px] font-semibold text-porto-btn-text transition-all duration-200 hover:bg-porto-btn-hover"
        >
          <Icon icon="mdi:github" width="24" height="24" />
          <span>View on Github</span>
        </a>
      </div>
    </div>
  );
};

const InfoSection = memo(InfoSection_);
export default InfoSection;
