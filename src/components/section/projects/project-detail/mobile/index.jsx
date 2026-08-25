import { DrawerWrapper } from "@/components/ui/drawer/drawer-wrapper";
import { Home } from "lucide-react";
import { memo, useEffect, useMemo, useState } from "react";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";
import { CASE_TABS } from "@/constants/projects";
import { ProjectDetailImages } from "./ProjectDetailImages";
import { ProjectDetailTitle } from "./ProjectDetailTitle";
import { ProjectDetailMeta } from "./ProjectDetailMeta";
import { ProjectDetailTabs } from "./ProjectDetailTabs";
import { ProjectDetailCasePanel } from "./project-detail-case-panel";
import { ProjectDetailNavBtn } from "./ProjectDetailNavBtn";
import { ProjectDetailAction } from "./ProjectDetailAction";

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
    <DrawerWrapper
      open={open}
      onOpenChange={(val) => !val && onClose?.()}
      title={currentProject?.title || "Detail Project"}
    >
      <div className="flex-1 overflow-y-auto porto-scrollbar px-5 pt-8 pb-5">
        <div className="space-y-5">
          <ProjectDetailImages
            images={currentProject?.images}
            title={currentProject?.title}
          />

          <header className="space-y-4">
            <ProjectDetailTitle project={currentProject} />

            <ProjectDetailMeta />
          </header>

          <ProjectDetailTabs
            availableTabs={availableTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <section className="rounded-[1.25rem] border border-porto-border/75 bg-background/25 px-5 py-5">
            <div className="mb-4 flex items-center gap-3 text-porto-text">
              <ActiveIcon className="h-5.5 w-5.5 shrink-0" />

              <h3 className="text-[21px] font-semibold leading-none">
                {activeTabConfig?.label || "Overview"}
              </h3>
            </div>

            <div className="space-y-4 text-[15px] leading-relaxed text-porto-muted">
              <ProjectDetailCasePanel
                activeTab={activeTab}
                project={currentProject}
              />
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
        <ProjectDetailNavBtn
          goPrev={goPrev}
          goNext={goNext}
          prevProject={prevProject}
          nextProject={nextProject}
          currentIndex={currentIndex}
        />
        <ProjectDetailAction currentProject={currentProject} />
      </div>
    </DrawerWrapper>
  );
};

export const MobileDrawer = memo(MobileDrawer_);
export default MobileDrawer;
