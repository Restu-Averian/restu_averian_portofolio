import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailStyled from "../styled/project-detail/ProjectDetail.styled";
import Image from "../components/global/image";
import ProjectDetailBreadcrumb from "../components/project-detail/ProjectDetailBreadcrumb";
import ProjectDetailContent from "../components/project-detail/ProjectDetailContent";
import { LIST_PROJECTS } from "../constants";
import { Flex } from "../components/global/Layout";
import useBreakpoint from "../hooks/useBreakpoint";
import ProjectDetailMoreProjects from "../components/project-detail/ProjectDetailMoreProjects";

const ProjectDetail_ = () => {
  const { id } = useParams();

  const { xs } = useBreakpoint();

  const detailProject = useMemo(
    () => LIST_PROJECTS?.find((item) => String(item?.id) === String(id)),
    [id],
  );

  return (
    <ProjectDetailStyled>
      <section className="pd">
        <ProjectDetailBreadcrumb />

        <Flex flexDirection={xs ? "column" : "row"}>
          <div
            {...(!xs && {
              style: {
                flex: "0 0 50%",
                maxWidth: "50%",
              },
            })}
          >
            <Image
              figureAttrs={{
                className: "pd__thumbnail",
              }}
              src={detailProject?.img}
            />

            <ProjectDetailContent detailProject={detailProject} />
          </div>

          <ProjectDetailMoreProjects />
        </Flex>
      </section>
    </ProjectDetailStyled>
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
