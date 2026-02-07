import { memo } from "react";
import { Icon } from "@iconify/react";
import Button from "../components/global/Button";
import { Flex } from "../components/global/Layout";
import fallbackProjectThumbnail from "../assets/fallback-project-thumbnail.webp";
import Icons from "../components/global/Icons";
import { useNavigate } from "react-router-dom";
import ProjectDetailStyled from "../styled/project-detail/ProjectDetail.styled";

const ProjectDetail_ = () => {
  const navigate = useNavigate();

  return (
    <ProjectDetailStyled>
      <Flex
        alignItems="center"
        gap={36}
        style={{
          marginBottom: 36,
        }}
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

        <Flex alignItems="center" gap={8}>
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
            <Icon icon="mdi:react" style={{ fontSize: "36px" }} />
            <span className="lbl-tech-stack">React</span>
          </li>

          <li className="tech-stack-item">
            <Icon
              icon="ant-design:ant-design-outlined"
              style={{ fontSize: "36px" }}
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
          type="secondary"
          containerAttrs={{
            className: "wrapper-btn-try-demo",
          }}
          style={{
            transform: "rotate(5deg)",
          }}
        >
          Try Demo
        </Button>
      </div>
    </ProjectDetailStyled>
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
