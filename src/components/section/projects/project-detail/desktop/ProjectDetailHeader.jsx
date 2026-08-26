import { CalendarDays, Layers, X } from "lucide-react";
import { useTranslation } from "@/i18n";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useMemo } from "react";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";
import { getProjectMeta } from "@/constants/projects";

export const ProjectDetailHeader = ({ onClose }) => {
  const { t } = useTranslation();
  const { currentProject } = useProjectsContext();

  const projectMeta = useMemo(
    () => getProjectMeta(currentProject),
    [currentProject],
  );

  const desc = currentProject?.desc?.__i18n
    ? t(currentProject.desc.key, currentProject.desc.default)
    : (currentProject?.desc ?? "");

  const launched = projectMeta?.launched?.__i18n
    ? t(projectMeta.launched.key, projectMeta.launched.default)
    : (projectMeta?.launched ?? "");

  const platform = projectMeta?.platform?.__i18n
    ? t(projectMeta.platform.key, projectMeta.platform.default)
    : (projectMeta?.platform ?? "");

  return (
    <>
      <DialogTitle className="sr-only">
        {currentProject?.title ||
          t("ProjectDetailFallbackTitle", "Project Detail")}
      </DialogTitle>

      <DialogDescription className="sr-only">
        {t(
          "ProjectDetailSrDescription",
          "Project screenshots, description, technologies, and links.",
        )}
      </DialogDescription>

      <header className="grid grid-cols-[1fr_auto] gap-8">
        <div className="flex min-w-0 items-start gap-7">
          <div className="flex h-17 w-17 shrink-0 overflow-hidden items-center justify-center rounded-2xl border border-[#46382d] bg-[#241c18] text-[42px] font-bold leading-none text-[#f5dec2] shadow-[0_14px_34px_rgba(0,0,0,0.2)]">
            {currentProject?.logo ? (
              <img
                src={currentProject.logo}
                alt={`${currentProject.title} logo`}
                className="h-full w-full object-cover"
              />
            ) : (
              currentProject?.title?.[0] || "P"
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-7">
              <h2 className="truncate text-[52px] font-bold leading-[0.95] text-porto-text">
                {currentProject?.title}
              </h2>
            </div>

            <p className="mt-4 max-w-220 text-[15px] leading-relaxed text-porto-text">
              {desc}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-8 pr-16">
          <div className="flex items-start gap-4">
            <CalendarDays className="mt-1 h-5 w-5 text-porto-btn" />

            <div className="space-y-1 text-[15px] text-porto-text">
              <p>{t("ProjectLaunched", "Launched")}</p>
              <p className="font-medium">{launched}</p>
            </div>
          </div>
          <div className="h-16 w-px bg-porto-border/60" />
          <div className="flex items-start gap-4">
            <Layers className="mt-1 h-5 w-5 text-porto-btn" />
            <div className="space-y-1 text-[15px] text-porto-text">
              <p>{t("ProjectPlatform", "Platform")}</p>
              <p className="font-medium">{platform}</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-7 right-7 flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl border border-porto-border/80 text-porto-text transition hover:bg-porto-surface"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">{t("Close", "Close")}</span>
        </button>
      </header>
    </>
  );
};
