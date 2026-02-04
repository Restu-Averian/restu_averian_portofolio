import { forwardRef, memo } from "react";
import { useNavigate } from "react-router-dom";
// import SelectedWorksStyled from "../../styled/home/SelectedWorks.styled";
// import ListProjects from "../../components/home/selected-works/ListProjects";
// import Button from "../../components/global/Button";
// import TitleSection from "../../components/global/TitleSection";
import bgSelectedProjects from "../../assets/home/bg-selected-projects.webp";
import SelectedProjectsCatIcon from "../../assets/home/SelectedProjectsCatIcon";
import FallbackProjectThumbnail from "../../assets/fallback-project-thumbnail.webp";
import Button from "../global/Button";
import Card from "../global/Card";
import { getRandNum } from "../../helpers";

const SelectedWorks_ = (_, ref) => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        backgroundImage: `url("${bgSelectedProjects}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: 256,
        backgroundSize: "100% 100%",
        minHeight: 400,
        padding: "160px 112px 192px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 48,
          alignItems: "center",
          marginBottom: 160,
        }}
      >
        <h2
          style={{
            fontFamily: "'Caveat', cursive",
            color: "rgba(253, 246, 227)",
            fontSize: 96,
            fontWeight: "normal",
          }}
        >
          Selected Project
        </h2>

        <SelectedProjectsCatIcon
          style={{
            transform: "rotate(3deg)",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "space-between",
        }}
      >
        {Array.from({ length: 3 })?.map((_, idx) => {
          return (
            <Card
              key={idx}
              title="Project 1 - Destroyer The World"
              subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
      accusantium soluta adipisci tenetur. Repellendus tempore delectus eum
      consectetur laborum, ducimus aperiam quisquam animi modi exercitationem
      itaque velit deleniti numquam deserunt?"
              rotateBtn={getRandNum(3, -6)}
              configCard={{
                rotate: getRandNum(6, -6),
                translateY: (idx + 1) % 2 === 0 ? -52 : 0,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

const SelectedWorks = memo(forwardRef(SelectedWorks_));
export default SelectedWorks;
