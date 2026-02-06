import { memo } from "react";
import Button from "../components/global/Button";
import { Flex, SBGContainer } from "../components/global/Layout";
import fallbackProjectThumbnail from "../assets/fallback-project-thumbnail.webp";
import Icons from "../components/global/Icons";
import { Icon } from "@iconify/react";

const ProjectDetail_ = () => {
  return (
    <SBGContainer>
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <Icons type="back-icon" />
        <p>Home</p>
        <p>Projects</p>
        <p>Detail Projects</p>
      </div>

      <img src={fallbackProjectThumbnail} width="100%" />

      <div
        style={{
          marginTop: 32,
        }}
      >
        <h1
          style={{
            fontFamily: "'Patrick Hand', sans-serif",
            fontSize: 63,
          }}
        >
          Project 1 - Destroyer of the World
        </h1>

        <ul
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            margin: "24px 0px",
          }}
        >
          <li
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon="mdi:react" style={{ fontSize: "36px" }} />
            <span
              style={{
                fontSize: 32,
                fontFamily: "'Caveat', cursive",
              }}
            >
              React
            </span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon
              icon="ant-design:ant-design-outlined"
              style={{ fontSize: "36px" }}
            />

            <span
              style={{
                fontSize: 32,
                fontFamily: "'Caveat', cursive",
              }}
            >
              Ant Design
            </span>
          </li>
        </ul>

        <p
          style={{
            fontFamily: "'Patrick Hand', sans-serif",
            fontSize: 22,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur architecto iste, labore quibusdam inventore doloribus
          quas! Quidem cum possimus ratione mollitia enim. Iusto fugit nemo
          saepe quae dignissimos? Cumque?
        </p>

        <Button
          styleContainer={{
            width: "max-content",
            textAlign: "right",
            marginTop: 48,
            marginLeft: "auto",
            marginRight: 160,
            transform: "rotate(5deg)",
          }}
        >
          Try Demo
        </Button>
      </div>
    </SBGContainer>
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
