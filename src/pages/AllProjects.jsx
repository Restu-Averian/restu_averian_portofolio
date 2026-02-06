import { memo } from "react";
import { SBGContainer } from "../components/global/Layout";
import { getRandNum } from "../helpers";
import Card from "../components/global/Card";
import { useNavigate } from "react-router-dom";

const AllProjects_ = () => {
  const navigate = useNavigate();

  const arrAtas = Array.from({ length: 6 })
    .map((_, idx) => idx + 1)
    ?.reduce((acc, curr) => {
      return [...acc, curr * 3 - 1];
    }, []);

  return (
    <SBGContainer>
      <h2>All Projects</h2>

      <div
        style={{
          display: "flex",
          gap: 128,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "5em",
        }}
      >
        {Array.from({ length: 6 })?.map((_, idx) => {
          return (
            <Card
              onClick={() => {
                navigate(`/project/${1}`);
              }}
              width={360}
              key={idx}
              title={`Project ${arrAtas?.includes(idx + 1) ? "genap" : "1"} - Destroyer The World`}
              subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
      accusantium soluta adipisci tenetur. Repellendus tempore delectus eum
      consectetur laborum, ducimus aperiam quisquam animi modi exercitationem
      itaque velit deleniti numquam deserunt?"
              rotateBtn={getRandNum(3, -6)}
              configCard={{
                rotate: getRandNum(6, -6),
                translateY: arrAtas?.includes(idx + 1) ? -52 : 0,
              }}
            />
          );
        })}
      </div>
    </SBGContainer>
  );
};

const AllProjects = memo(AllProjects_);
export default AllProjects;
