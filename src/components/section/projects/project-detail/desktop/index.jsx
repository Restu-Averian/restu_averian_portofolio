import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs } from "@/components/ui/tabs";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";
import { CASE_TABS } from "@/constants/projects";

import { ProjectDetailHeader } from "./ProjectDetailHeader";
import { ProjectDetailImages } from "./ProjectDetailImages";
import { ProjectDetailTabs } from "./ProjectDetailTabs";
import { ProjectDetailCasePanel } from "./project-detail-case-panel";
import { ProjectDetailFooter } from "./ProjectDetailFooter";

const DesktopDialog_ = () => {
  const {
    showModalDetail: open,
    handleCloseModal: onClose,
    prevProject,
    nextProject,
    goPrev,
    goNext,
    currentProject,
  } = useProjectsContext();

  const contentRef = useRef(null);
  const caseStudy = currentProject?.caseStudy;

  const tabs = useMemo(
    () =>
      CASE_TABS.filter(({ value }) => {
        if (value === "tech") return currentProject?.tags?.length;
        if (value === "ownership") return caseStudy?.ownership;
        return caseStudy?.[value]?.length;
      }),
    [caseStudy, currentProject?.tags],
  );

  const defaultTab = tabs[0]?.value || "overview";
  const [activeSection, setActiveSection] = useState(defaultTab);

  const syncActiveSection = useCallback(() => {
    const container = contentRef.current;
    if (!container) return;

    const sections = [...container.querySelectorAll("[data-case-section]")];
    if (!sections.length) return;

    const atBottom =
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 2;

    const current = atBottom
      ? sections.at(-1)
      : sections.reduce((active, section) => {
          return section.offsetTop <= container.scrollTop + 24
            ? section
            : active;
        }, sections[0]);

    setActiveSection(current.dataset.caseSection.split("-")[0]);
  }, []);

  const scrollToSection = useCallback((value) => {
    const container = contentRef.current;
    const section = container?.querySelector(`[data-case-section="${value}"]`);

    if (!container || !section) return;

    setActiveSection(value);
    container.scrollTo({
      top: Math.max(section.offsetTop - 16, 0),
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    setActiveSection(defaultTab);
    contentRef.current?.scrollTo({ top: 0 });
  }, [defaultTab, currentProject?.id]);

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose?.()}>
      <DialogContent
        showCloseButton={false}
        className="hidden h-[92vh]! w-[96vw] max-w-[96vw]! grid-rows-[auto_minmax(0,1fr)_auto] gap-5 overflow-hidden! rounded-[1.9rem] border border-porto-border/80 bg-porto-bg/95 p-7 shadow-2xl xl:grid"
      >
        <ProjectDetailHeader onClose={onClose} />

        <Tabs
          key={currentProject?.id}
          value={activeSection}
          onValueChange={scrollToSection}
          orientation="vertical"
          className="grid min-h-0 grid-cols-[0.9fr_180px_1fr] gap-5"
        >
          <ProjectDetailImages
            images={currentProject?.images}
            title={currentProject?.title}
          />

          <ProjectDetailTabs tabs={tabs} scrollToSection={scrollToSection} />

          <div
            ref={contentRef}
            data-case-scroll
            onScroll={syncActiveSection}
            className="min-h-0 space-y-4 overflow-y-auto rounded-[1.45rem] border border-porto-border/70 bg-background/20 p-4 porto-scrollbar"
          >
            {tabs.map((tab) => (
              <ProjectDetailCasePanel
                key={tab.value}
                activeTab={tab.value}
                project={currentProject}
              />
            ))}
          </div>
        </Tabs>

        <ProjectDetailFooter
          goPrev={goPrev}
          goNext={goNext}
          prevProject={prevProject}
          nextProject={nextProject}
          currentProject={currentProject}
        />
      </DialogContent>
    </Dialog>
  );
};

const DesktopDialog = memo(DesktopDialog_);
export default DesktopDialog;
