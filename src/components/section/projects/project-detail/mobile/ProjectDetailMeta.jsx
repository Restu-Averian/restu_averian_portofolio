import { CalendarDays, Layers } from "lucide-react";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";
import { useMemo } from "react";
import { getProjectMeta } from "@/constants/projects";
import { useTranslation } from "@/i18n";

export const ProjectDetailMeta = () => {
  const { currentProject } = useProjectsContext();
  const { t } = useTranslation();

  const projectMeta = useMemo(() => {
    return getProjectMeta(currentProject);
  }, [currentProject]);

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 pt-1">
      <div className="flex items-center justify-center gap-3 text-porto-text">
        <CalendarDays className="mt-0.5 h-5 w-5 text-porto-btn" />

        <div className="space-y-0.5 text-[14px]">
          <p>{t("ProjectLaunched", "Launched")}</p>

          <p className="font-medium">
            {t(projectMeta.launchedKey, projectMeta.launched)}
          </p>
        </div>
      </div>

      <div className="h-11 w-px bg-porto-border/70" />

      <div className="flex items-center justify-center gap-3 text-porto-text">
        <Layers className="mt-0.5 h-5 w-5 text-porto-btn" />

        <div className="space-y-0.5 text-[14px]">
          <p>{t("ProjectPlatform", "Platform")}</p>

          <p className="font-medium">
            {t(projectMeta.platformKey, projectMeta.platform)}
          </p>
        </div>
      </div>
    </div>
  );
};
