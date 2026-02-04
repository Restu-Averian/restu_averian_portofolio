import { memo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/global/Button";
import { Flex, SBGContainer } from "../components/global/Layout";
import fallbackProjectThumbnail from "../assets/fallback-project-thumbnail.webp";
import Icons from "../components/global/Icons";

const ProjectDetail_ = () => {
  return (
    <SBGContainer>
      <Icons type="back-icon" />

      <img src={fallbackProjectThumbnail} width="100%" />

      <h1
        style={{
          fontFamily: "'Patrick Hand', sans-serif",
          fontSize: 63,
        }}
      >
        Project 1 - Destroyer of the World
      </h1>

      <ul>
        <li>React</li>
        <li>React</li>
        <li>React</li>
      </ul>

      <p
        style={{
          fontFamily: "'Patrick Hand', sans-serif",
          fontSize: 28,
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        consectetur architecto iste, labore quibusdam inventore doloribus quas!
        Quidem cum possimus ratione mollitia enim. Iusto fugit nemo saepe quae
        dignissimos? Cumque?
      </p>

      <Button rotate={0}>Try Demo</Button>
    </SBGContainer>
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
