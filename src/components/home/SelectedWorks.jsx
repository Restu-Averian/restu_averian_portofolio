import { forwardRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../global/Card";
import { getRandNum } from "../../helpers";
import Icons from "../global/Icons";
import { Flex } from "../global/Layout";
import SelectedWorksStyled from "../../styled/home/SelectedWorks.styled";

const SelectedWorks_ = (_, ref) => {
  const navigate = useNavigate();

  return (
    <SelectedWorksStyled>
      <div className="wrapper-title-section">
        <h2 className="title-section">Selected Project</h2>

        <Icons
          type="selected-projects-cat"
          style={{
            transform: "rotate(3deg)",
            color: "#FDF6E3",
          }}
        />
      </div>

      <Flex gap={36} justifyContent="space-between">
        {Array.from({ length: 3 })?.map((_, idx) => {
          const translateData = {
            1: 63,
            2: -52,
            3: 0,
          };
          return (
            <Card
              width={480}
              key={idx}
              title="Project 1 - Destroyer The World"
              subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
      accusantium soluta adipisci tenetur. Repellendus tempore delectus eum
      consectetur laborum, ducimus aperiam quisquam animi modi exercitationem
      itaque velit deleniti numquam deserunt?"
              rotateBtn={getRandNum(-6, -3)}
              configCard={{
                rotate: getRandNum(6, -6),
                translateY: translateData[idx + 1],
              }}
              onClick={() => {
                navigate(`/project/${idx + 1}`);
              }}
            />
          );
        })}
      </Flex>

      <Flex
        style={{
          position: "absolute",
          top: 210,
          left: 48,
        }}
      >
        <Icons
          type="cat-foot-print-v2"
          style={{
            transform: "rotate(90deg)",
            color: "#E8DCC4",
          }}
        />
        <Icons
          type="cat-foot-print-v2"
          style={{
            transform: "rotate(-12deg)",
            marginTop: 36,
            color: "#E8DCC4",
          }}
        />
      </Flex>

      <Flex
        style={{
          position: "absolute",
          top: 82,
          right: 120,
        }}
        gap={24}
      >
        <Icons
          type="cat-foot-print-v2"
          style={{
            transform: "rotate(10deg)",
            marginTop: 24,
            color: "#E8DCC4",
          }}
        />
        <Icons
          type="cat-foot-print-v2"
          style={{
            transform: "rotate(-90deg)",
            color: "#E8DCC4",
          }}
        />
      </Flex>

      <p className="ask-txt-persuasive">Tech that i ever used?</p>

      <Flex alignItems="center" className="wrapper-explore-more">
        <button className="btn-explore-more">Explore More</button>

        <Icons
          type="back-icon-cat"
          style={{
            transform: "scale(-1,1)",
            color: "#FDF6E3",
          }}
        />
      </Flex>
    </SelectedWorksStyled>
  );
};

const SelectedWorks = memo(forwardRef(SelectedWorks_));
export default SelectedWorks;
