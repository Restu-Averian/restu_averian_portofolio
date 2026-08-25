import { memo } from "react";
import ProjectCard from "./project-card";
import ProjectsTitle from "./ProjectsTitle";
import ProjectsModalDetail from "./ProjectsModalDetail";
import ScrollAffordance from "@/components/ui/scroll-affordance";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";

const ProjectsContent_ = () => {
  const { orderedProjects, scrollRef } = useProjectsContext();

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-porto-border/80 bg-card/80 p-3.5 shadow-sm relative">
      <div className="mb-3 flex shrink-0 items-start gap-3">
        <ProjectsTitle />
      </div>

      <div
        className="porto-scrollbar grid gap-3 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain lg:pr-1 lg:pb-1"
        ref={scrollRef}
      >
        {orderedProjects.map((project, i) => (
          <ProjectCard key={project.id ?? i} project={project} />
        ))}
      </div>

      <ScrollAffordance containerRef={scrollRef} />

      <ProjectsModalDetail />
    </section>
  );
};

const ProjectsContent = memo(ProjectsContent_);
export default ProjectsContent;
