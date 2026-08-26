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

  const launched = projectMeta?.launched?.__i18n
    ? t(projectMeta.launched.key, projectMeta.launched.default)
    : (projectMeta?.launched ?? "");

  const platform = projectMeta?.platform?.__i18n
    ? t(projectMeta.platform.key, projectMeta.platform.default)
    : (projectMeta?.platform ?? "");

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 pt-1">
      <div className="flex items-center justify-center gap-3 text-porto-text">
        <CalendarDays className="mt-0.5 h-5 w-5 text-porto-btn" />

        <div className="space-y-0.5 text-[14px]">
          <p>{t("ProjectLaunched", "Launched")}</p>

          <p className="font-medium">{launched}</p>
        </div>
      </div>

      <div className="h-11 w-px bg-porto-border/70" />

      <div className="flex items-center justify-center gap-3 text-porto-text">
        <Layers className="mt-0.5 h-5 w-5 text-porto-btn" />

        <div className="space-y-0.5 text-[14px]">
          <p>{t("ProjectPlatform", "Platform")}</p>

          <p className="font-medium">{platform}</p>
        </div>
      </div>
    </div>
  );
};
