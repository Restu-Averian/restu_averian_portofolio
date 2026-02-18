import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailStyled from "../styled/project-detail/ProjectDetail.styled";
import Image from "../components/global/image";
import ProjectDetailBreadcrumb from "../components/project-detail/ProjectDetailBreadcrumb";
import ProjectDetailContent from "../components/project-detail/ProjectDetailContent";
import AllProjects from "./AllProjects";
import { LIST_PROJECTS } from "../constants";

const ProjectDetail_ = () => {
  const listMoreProjects = LIST_PROJECTS?.filter((_, idx) => idx <= 2);
  const { id } = useParams();

  const detailProject = useMemo(
    () => LIST_PROJECTS?.find((item) => String(item?.id) === String(id)),
    [id],
  );

  return (
    <ProjectDetailStyled>
      <section className="pd">
        <ProjectDetailBreadcrumb />

        <Image
          figureAttrs={{
            className: "pd__thumbnail",
          }}
          src={detailProject?.img}
        />

        <ProjectDetailContent detailProject={detailProject} />

        <AllProjects
          title="More Projects"
          listData={listMoreProjects}
          styleContainer={{
            margin: "80px 0px",
          }}
        />
      </section>
    </ProjectDetailStyled>
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
