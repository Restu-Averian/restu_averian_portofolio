import { memo } from "react";
import { Icon } from "@iconify/react";
import Button from "../components/global/Button";
import { Flex } from "../components/global/Layout";
import fallbackProjectThumbnail from "../assets/fallback-project-thumbnail.webp";
import Icons from "../components/global/Icons";
import { useNavigate } from "react-router-dom";
import ProjectDetailStyled from "../styled/project-detail/ProjectDetail.styled";
import useBreakpoint from "../hooks/useBreakpoint";
import ListProjects from "../components/global/ListProjects";
import AllProjectsStyled from "../styled/all-projects/AllProjects.styled";

const ProjectDetail_ = () => {
  const navigate = useNavigate();

  const { xs } = useBreakpoint();

  const listMoreProjects = Array?.from({ length: 3 });

  return (
    <ProjectDetailStyled>
      <Flex
        alignItems="center"
        gap={xs ? 18 : 36}
        style={{
          marginBottom: 36,
        }}
        flexWrap="nowrap"
      >
        <Icons
          type="back-icon-cat"
          style={{
            color: "#8D6E63",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/project");
          }}
        />

        <Flex alignItems="center" gap={8} flexWrap={xs ? "nowrap" : "wrap"}>
          <p>Home</p>
          <Icons type="cat-double-foot-print" />
          <p>Projects</p>
          <Icons type="cat-double-foot-print" />
          <p>Detail Projects</p>
        </Flex>
      </Flex>

      <figure className="fgr-thumbnail">
        <img src={fallbackProjectThumbnail} />
      </figure>

      <div
        style={{
          marginTop: 32,
        }}
      >
        <h1 className="title-project">Project 1 - Destroyer of the World</h1>

        <ul className="wrapper-list-tech-stack">
          <li className="tech-stack-item">
            <Icon icon="mdi:react" style={{ fontSize: xs ? 24 : 36 }} />
            <span className="lbl-tech-stack">React</span>
          </li>

          <li className="tech-stack-item">
            <Icon
              icon="ant-design:ant-design-outlined"
              style={{ fontSize: xs ? 24 : 36 }}
            />
            <span className="lbl-tech-stack">Ant Design</span>
          </li>
        </ul>

        <p className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur architecto iste, labore quibusdam inventore doloribus
          quas! Quidem cum possimus ratione mollitia enim. Iusto fugit nemo
          saepe quae dignissimos? Cumque?
        </p>

        <Button
          type="primary"
          containerAttrs={{
            className: "wrapper-btn-try-demo",
          }}
          style={{
            transform: "rotate(5deg)",
            fontSize: xs ? 28 : 36,
          }}
        >
          Try Demo
        </Button>
      </div>

      <AllProjectsStyled
        $style={{
          marginTop: 80,
        }}
      >
        <h2 className="title-section">
          More Projects
          <Icons
            type="cat-foot-print"
            style={{
              width: 48,
              height: 47,
              position: "absolute",
              bottom: 0,
            }}
          />
        </h2>
        <ListProjects listData={listMoreProjects} />
      </AllProjectsStyled>
    </ProjectDetailStyled>
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
