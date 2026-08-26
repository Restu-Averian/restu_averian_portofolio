import { memo } from "react";
import ProjectCard from "./project-card";
import ProjectsTitle from "./ProjectsTitle";
import ProjectDetail from "./project-detail";
import ScrollAffordance from "@/components/ui/scroll-affordance";
import { MobileCarousel } from "@/components/ui/mobile-carousel/index";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";

const ProjectsContent_ = () => {
  const { orderedProjects, scrollRef } = useProjectsContext();

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-porto-border/80 bg-card/80 p-3.5 shadow-sm relative">
      <div className="mb-3 flex shrink-0 items-start gap-3">
        <ProjectsTitle />
      </div>

      <MobileCarousel
        viewportClassName="porto-scrollbar lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain lg:pr-1 lg:pb-1"
        trackClassName="max-lg:gap-3 lg:grid lg:gap-3"
        ref={scrollRef}
        showArrows
      >
        {orderedProjects.map((project, i) => (
          <ProjectCard
            key={project.id ?? i}
            project={project}
            className="max-lg:min-w-0 max-lg:shrink-0 max-lg:grow-0 max-lg:basis-[90%]"
          />
        ))}
      </MobileCarousel>

      <ScrollAffordance containerRef={scrollRef} />

      <ProjectDetail />
    </section>
  );
};

const ProjectsContent = memo(ProjectsContent_);
export default ProjectsContent;
