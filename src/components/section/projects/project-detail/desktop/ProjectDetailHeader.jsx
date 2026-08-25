import { CalendarDays, Layers, X } from "lucide-react";
import { useTranslation } from "@/i18n";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useMemo } from "react";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";

export const ProjectDetailHeader = ({ onClose }) => {
  const { t } = useTranslation();
  const { currentProject } = useProjectsContext();

  const projectMeta = useMemo(
    () => ({
      launched:
        currentProject?.title === "Resaeni" ? "19 Aug 2026" : "Completed",
      platform: currentProject?.demoUrl ? "Web" : "Package",
    }),
    [currentProject],
  );

  return (
    <>
      <DialogTitle className="sr-only">
        {currentProject?.title || "Detail Project"}
      </DialogTitle>
      <DialogDescription className="sr-only">
        Project screenshots, description, technologies, and links.
      </DialogDescription>

      <header className="grid grid-cols-[1fr_auto] gap-8">
        <div className="flex min-w-0 items-start gap-7">
          <div className="flex h-17 w-17 shrink-0 items-center justify-center rounded-[1rem] border border-porto-btn/50 bg-porto-btn text-[42px] font-bold leading-none text-porto-btn-text shadow-[0_14px_34px_rgba(0,0,0,0.2)]">
            {currentProject?.title?.[0] || "P"}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-7">
              <h2 className="truncate text-[52px] font-bold leading-[0.95] text-porto-text">
                {currentProject?.title}
              </h2>
              <span className="rounded-full border border-porto-border/60 bg-porto-surface px-5 py-2 text-[15px] font-medium text-porto-text">
                Case Study
              </span>
            </div>
            <p className="mt-4 max-w-220 text-[15px] leading-relaxed text-porto-text">
              {currentProject?.descKey
                ? t(currentProject.descKey, currentProject.desc)
                : currentProject?.desc}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-8 pr-16">
          <div className="flex items-start gap-4">
            <CalendarDays className="mt-1 h-5 w-5 text-porto-btn" />
            <div className="space-y-1 text-[15px] text-porto-text">
              <p>Launched</p>
              <p className="font-medium">{projectMeta.launched}</p>
            </div>
          </div>
          <div className="h-16 w-px bg-porto-border/60" />
          <div className="flex items-start gap-4">
            <Layers className="mt-1 h-5 w-5 text-porto-btn" />
            <div className="space-y-1 text-[15px] text-porto-text">
              <p>Platform</p>
              <p className="font-medium">{projectMeta.platform}</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-7 right-7 flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl border border-porto-border/80 text-porto-text transition hover:bg-porto-surface"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </button>
      </header>
    </>
  );
};
