import { memo } from "react";
import { SBGContainer } from "../components/global/Layout";
import { getRandNum } from "../helpers";
import Card from "../components/global/Card";
import { useNavigate } from "react-router-dom";
import AllProjectsStyled from "../styled/all-projects/AllProjects.styled";
import Icons from "../components/global/Icons";
import useBreakpoint from "../hooks/useBreakpoint";

const AllProjects_ = () => {
  const navigate = useNavigate();

  const { xs } = useBreakpoint();

  const arrAtas = Array.from({ length: 6 })
    .map((_, idx) => idx + 1)
    ?.reduce((acc, curr) => {
      return [...acc, curr * 3 - 1];
    }, []);

  return (
    <AllProjectsStyled>
      <h2 className="title-section">
        All Projects
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

      <div className="wrapper-all-projects">
        {Array.from({ length: 6 })?.map((_, idx) => {
          return (
            <Card
              onClick={() => {
                navigate(`/project/${1}`);
              }}
              width={xs ? 150 : 360}
              key={idx}
              title={`Project ${arrAtas?.includes(idx + 1) ? "genap" : "1"} - Destroyer The World`}
              subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
      accusantium soluta adipisci tenetur. Repellendus tempore delectus eum
      consectetur laborum, ducimus aperiam quisquam animi modi exercitationem
      itaque velit deleniti numquam deserunt?"
              rotateBtn={xs ? 0 : getRandNum(-6, -3)}
              configCard={{
                rotate: xs ? getRandNum(2, -2) : getRandNum(6, -6),
                ...(xs
                  ? {
                      translateY: getRandNum(5, -5),
                    }
                  : {
                      translateY: arrAtas?.includes(idx + 1) ? -52 : 0,
                    }),
              }}
              className="project-item"
            />
          );
        })}
      </div>
    </AllProjectsStyled>
  );
};

const AllProjects = memo(AllProjects_);
export default AllProjects;
