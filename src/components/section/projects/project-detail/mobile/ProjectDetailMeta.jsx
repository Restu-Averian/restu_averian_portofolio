import { CalendarDays, Layers } from "lucide-react";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";
import { useMemo } from "react";
import { getProjectMeta } from "@/constants/projects";

export const ProjectDetailMeta = () => {
  const { currentProject } = useProjectsContext();

  const projectMeta = useMemo(() => {
    return getProjectMeta(currentProject);
  }, [currentProject]);

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 pt-1">
      <div className="flex items-start gap-3 text-porto-text">
        <CalendarDays className="mt-0.5 h-5 w-5 text-porto-btn" />

        <div className="space-y-0.5 text-[14px]">
          <p>Launched</p>

          <p className="font-medium">{projectMeta.launched}</p>
        </div>
      </div>

      <div className="h-11 w-px bg-porto-border/70" />
      <div className="flex items-start gap-3 text-porto-text">
        <Layers className="mt-0.5 h-5 w-5 text-porto-btn" />

        <div className="space-y-0.5 text-[14px]">
          <p>Platform</p>

          <p className="font-medium">{projectMeta.platform}</p>
        </div>
      </div>
    </div>
  );
};
