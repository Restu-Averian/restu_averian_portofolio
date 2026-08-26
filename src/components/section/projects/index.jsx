import { memo } from "react";
import { ProjectsCtxProvider } from "@/context/ProjectsCtxProvider";
import ProjectsContent from "./ProjectsContent";

const Projects_ = () => {
  return (
    <ProjectsCtxProvider>
      <ProjectsContent />
    </ProjectsCtxProvider>
  );
};

const Projects = memo(Projects_);
export default Projects;
