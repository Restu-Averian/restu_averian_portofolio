import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Icon } from "@iconify/react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CircleAlert,
  Globe2,
  Home,
  Layers,
  ListChecks,
  Route,
  UserCheck,
  X,
} from "lucide-react";
import { PROJECTS } from "@/constants";
import { useTranslation } from "@/i18n";
import { cn } from "@/lib/utils";
import { memo, useEffect, useMemo, useState } from "react";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";

const CASE_TABS = [
  { value: "overview", label: "Overview", icon: Home },
  { value: "problem", label: "Problem", icon: CircleAlert },
  { value: "ownership", label: "Ownership", icon: UserCheck },
  { value: "contributions", label: "Contributions", icon: ListChecks },
  { value: "tech", label: "Tech Stack", icon: Route },
];

const getProjectMeta = (project) => ({
  launched: project?.title === "Resaeni" ? "19 Aug 2026" : "Completed",
  platform: project?.demoUrl ? "Web" : "Package",
});

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

const PreviewStrip = ({ images = [], title }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <section className="rounded-[1.45rem] border border-porto-border/80 bg-porto-surface/45 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="overflow-hidden rounded-[1.25rem] bg-background/70 p-1.5">
        <img
          src={activeImage}
          alt={`${title || "Project"} preview`}
          className="aspect-[1.35/0.86] w-full rounded-[1rem] object-cover object-center"
        />
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2.5">
        {images.slice(0, 3).map((image, index) => {
          const active = activeImage === image;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(image)}
              className={cn(
                "overflow-hidden rounded-xl border bg-background/50 p-1 transition",
                active
                  ? "border-porto-btn shadow-[0_0_0_1px_rgba(210,166,108,0.35)]"
                  : "border-porto-border/60 opacity-65",
              )}
            >
              <img
                src={image}
                alt={`${title || "Project"} preview ${index + 1}`}
                className="aspect-[1.25/0.82] w-full rounded-lg object-cover"
              />
            </button>
          );
        })}

        <div className="flex aspect-[1.25/0.82] items-center justify-center rounded-xl border border-dashed border-porto-btn/45 bg-background/30 text-center text-[13px] font-medium text-porto-text">
          <span>
            +<br />
            More
          </span>
        </div>
      </div>
    </section>
  );
};

const CasePanel = ({ activeTab, project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  if (activeTab === "tech") {
    return (
      <div className="flex flex-wrap gap-2">
        {(project?.tags ?? []).map((tag, index) => (
          <span
            key={`${tag?.label}-${index}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-porto-border/70 bg-background/45 px-3 py-1.5 text-[13px] font-medium text-porto-text"
          >
            <Icon icon={tag?.icon} className="h-3.5 w-3.5" />
            {tag?.label}
          </span>
        ))}
      </div>
    );
  }

  if (activeTab === "ownership" && caseStudy?.ownership) {
    return <p>{t(caseStudy.ownership.key, caseStudy.ownership.defaultText)}</p>;
  }

  const items = caseStudy?.[activeTab] ?? [];

  if (!items.length) {
    return (
      <p>
        {project?.descDetailKey
          ? t(project.descDetailKey, project.descDetail)
          : project?.descDetail || project?.desc || ""}
      </p>
    );
  }

  if (activeTab === "contributions") {
    return (
      <ul className="space-y-2.5">
        {items.map((item, index) => (
          <li key={item.key ?? index} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-porto-btn" />
            <span>{t(item.key, item.defaultText)}</span>
          </li>
        ))}
      </ul>
    );
  }

  return items.map((item, index) => (
    <p key={item.key ?? index}>{t(item.key, item.defaultText)}</p>
  ));
};

const MobileDrawer_ = () => {
  const {
    showModalDetail: open,
    handleCloseModal: onClose,
    prevProject,
    nextProject,
    goPrev,
    goNext,
    currentProject,
    currentIndex,
  } = useProjectsContext();
  const { t } = useTranslation();
  const projectMeta = getProjectMeta(currentProject);
  const availableTabs = useMemo(
    () =>
      CASE_TABS.filter(({ value }) => {
        if (value === "tech") return currentProject?.tags?.length;
        if (value === "ownership") return currentProject?.caseStudy?.ownership;
        return currentProject?.caseStudy?.[value]?.length;
      }),
    [currentProject],
  );
  const [activeTab, setActiveTab] = useState(
    availableTabs[0]?.value || "overview",
  );
  const activeTabConfig =
    availableTabs.find((tab) => tab.value === activeTab) || availableTabs[0];
  const ActiveIcon = activeTabConfig?.icon || Home;

  useEffect(() => {
    setActiveTab(availableTabs[0]?.value || "overview");
  }, [availableTabs, currentProject?.id]);

  return (
    <Drawer open={open} onOpenChange={(val) => !val && onClose?.()}>
      <DrawerContent
        className="
          max-h-[96dvh] rounded-t-[32px]
          border-none
          bg-porto-bg
          flex flex-col
          focus:outline-none
        "
      >
        <DrawerTitle className="sr-only">
          {currentProject?.title || "Detail Project"}
        </DrawerTitle>

        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-porto-border bg-transparent text-porto-text hover:bg-black/5 hover:text-porto-btn transition-all"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex-1 overflow-y-auto porto-scrollbar px-5 pt-8 pb-5">
          <div className="space-y-5">
            <PreviewStrip
              images={currentProject?.images}
              title={currentProject?.title}
            />

            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-[40px] font-bold leading-none text-porto-text">
                  {currentProject?.title}
                </h2>
                <span className="rounded-full border border-porto-btn/60 bg-porto-btn/10 px-4 py-2 text-[15px] font-medium text-porto-text">
                  Case Study
                </span>
              </div>

              <p className="text-[16px] leading-snug text-porto-text">
                {currentProject?.descKey
                  ? t(currentProject.descKey, currentProject.desc)
                  : currentProject?.desc}
              </p>

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
            </header>

            <div className="grid grid-cols-5 overflow-hidden rounded-[1.25rem] border border-porto-border/75 bg-porto-surface/40">
              {availableTabs.map(({ value, label, icon: IconCmp }) => {
                const active = activeTab === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setActiveTab(value)}
                    className={cn(
                      "flex min-h-19 flex-col items-center justify-center gap-1.5 px-1 py-2 text-[11px] font-medium leading-tight text-porto-text/80 transition",
                      active &&
                        "bg-porto-btn/18 text-porto-btn shadow-[inset_0_0_0_1px_rgba(210,166,108,0.28)]",
                    )}
                  >
                    <IconCmp className="h-5 w-5" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            <section className="rounded-[1.25rem] border border-porto-border/75 bg-background/25 px-5 py-5">
              <div className="mb-4 flex items-center gap-3 text-porto-text">
                <ActiveIcon className="h-5.5 w-5.5 shrink-0" />
                <h3 className="text-[21px] font-semibold leading-none">
                  {activeTabConfig?.label || "Overview"}
                </h3>
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-porto-muted">
                <CasePanel activeTab={activeTab} project={currentProject} />
              </div>
            </section>
          </div>
        </div>

        <div
          className="
          shrink-0
          space-y-4
          border-t border-porto-border/55
          bg-porto-bg/95
          px-5 pt-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]
        "
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="flex min-w-0 items-center justify-center gap-2 rounded-full border border-porto-border/80 px-4 py-2.5 text-sm font-medium text-porto-text transition hover:border-porto-btn hover:text-porto-btn active:scale-95"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" />
              <span className="truncate">{prevProject?.title}</span>
            </button>

            <span className="text-sm font-medium text-porto-text">
              {currentIndex + 1} / {PROJECTS.length}
            </span>

            <button
              type="button"
              onClick={goNext}
              className="flex min-w-0 items-center justify-center gap-2 rounded-full border border-porto-border/80 px-4 py-2.5 text-sm font-medium text-porto-text transition hover:border-porto-btn hover:text-porto-btn active:scale-95"
            >
              <span className="truncate">{nextProject?.title}</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </button>
          </div>

          <div className="flex gap-2.5">
            <ProjectAction href={currentProject?.demoUrl}>
              <Globe2 className="h-5 w-5" />
              <span className="truncate">{t("LiveDemo", "Live Demo")}</span>
            </ProjectAction>

            <ProjectAction href={currentProject?.githubUrl} variant="solid">
              <Icon icon="mdi:github" className="h-5 w-5" />
              <span className="truncate">
                {t("ViewOnGithub", "View on Github")}
              </span>
            </ProjectAction>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const MobileDrawer = memo(MobileDrawer_);
export default MobileDrawer;
