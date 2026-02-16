import { memo } from "react";
import ProjectDetailStyled from "../styled/project-detail/ProjectDetail.styled";
import Image from "../components/global/image";
import ProjectDetailBreadcrumb from "../components/project-detail/ProjectDetailBreadcrumb";
import ProjectDetailContent from "../components/project-detail/ProjectDetailContent";
import AllProjects from "./AllProjects";

const ProjectDetail_ = () => {
  const listMoreProjects = Array?.from({ length: 3 });

  return (
    <ProjectDetailStyled>
      <section className="pd">
        <ProjectDetailBreadcrumb />

        <Image
          figureAttrs={{
            className: "pd__thumbnail",
          }}
          src="https://sawit.jpg"
        />

        <ProjectDetailContent />

        <AllProjects
          title="More Projects"
          listData={listMoreProjects}
          styleContainer={{
            marginTop: 80,
          }}
        />
      </section>
    </ProjectDetailStyled>
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
