import { memo, useEffect, useMemo, useRef, useState } from "react";
import ModalDetailProject from "../modal/detail-project";
import { PROJECTS } from "@/constants";
import ProjectCard from "./projects/project-card";
import ProjectsTitle from "./projects/ProjectsTitle";

const FEATURED_PROJECT_TITLE = "Package Rich Texteditor";

const Projects_ = () => {
  const [showModalDetail, setShowModalDetail] = useState(false);
  const detailProjectRef = useRef({});

  const orderedProjects = useMemo(() => {
    return [...PROJECTS].sort((a, b) => {
      if (a.title === FEATURED_PROJECT_TITLE) return -1;
      if (b.title === FEATURED_PROJECT_TITLE) return 1;
      return 0;
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    if (p && p.startsWith("project-")) {
      const projectId = p.replace("project-", "");
      const foundProject = PROJECTS.find(
        (proj) => String(proj.id) === projectId,
      );
      if (foundProject) {
        detailProjectRef.current = foundProject;
        setShowModalDetail(true);
      }
    }
  }, []);

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-porto-border/80 bg-card/80 p-3.5 shadow-sm">
      <div className="mb-3 flex shrink-0 items-start gap-3">
        <ProjectsTitle />
      </div>

      <div className="porto-scrollbar grid gap-3 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain lg:pr-1 lg:pb-1">
        {orderedProjects.map((project, i) => (
          <ProjectCard
            key={project.id ?? i}
            {...project}
            featured={project.title === FEATURED_PROJECT_TITLE}
            onClick={() => {
              detailProjectRef.current = project;
              setShowModalDetail(true);
            }}
          />
        ))}
      </div>

      <ModalDetailProject
        open={showModalDetail}
        onClose={() => {
          setShowModalDetail(false);
          detailProjectRef.current = {};
          const newUrl = new URL(window.location);
          if (newUrl.searchParams.has("p")) {
            newUrl.searchParams.delete("p");
            window.history.replaceState(
              null,
              "",
              window.location.pathname + newUrl.search,
            );
          }
        }}
        project={detailProjectRef?.current}
      />
    </section>
  );
};

const Projects = memo(Projects_);
export default Projects;
