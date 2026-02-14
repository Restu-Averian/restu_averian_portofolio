import { forwardRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import useBreakpoint from "../../../hooks/useBreakpoint";
import { getRandNum } from "../../../helpers";
import Footprint from "./Footprint";
import SelectedWorksStyled from "../../../styled/home/SelectedWorks.styled";
import Icons from "../../global/Icons";
import { Flex } from "../../global/Layout";
import Card from "../../global/Card";

const SelectedWorks_ = ({ techStackRef }, ref) => {
  const navigate = useNavigate();

  const { xs } = useBreakpoint();

  return (
    <SelectedWorksStyled ref={ref}>
      <div className="wrapper-title-section">
        <h2 className="title-section">Selected Project</h2>

        <Icons
          type="selected-projects-cat"
          style={{
            transform: "rotate(3deg)",
            color: "#FDF6E3",
            ...(xs && {
              width: 80,
              height: 78,
            }),
          }}
        />
      </div>

      <Flex
        gap={36}
        justifyContent="space-between"
        flexWrap={xs ? "wrap" : "no-wrap"}
      >
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
                ...(xs === false && {
                  translateY: translateData[idx + 1],
                }),
              }}
              onClick={() => {
                navigate(`/project/${idx + 1}`);
              }}
            />
          );
        })}
      </Flex>

      <Footprint />

      <p
        className="ask-txt-persuasive"
        onClick={() => {
          if (techStackRef?.current) {
            techStackRef?.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          }
        }}
      >
        Tech that i ever used?
      </p>

      <Flex
        alignItems="center"
        className="wrapper-explore-more"
        onClick={() => {
          navigate("/project");
        }}
      >
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
