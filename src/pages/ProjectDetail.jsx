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
          src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200"
        />

        <ProjectDetailContent />

        <AllProjects title="More Projects" listData={listMoreProjects} />
      </section>
    </ProjectDetailStyled>
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
