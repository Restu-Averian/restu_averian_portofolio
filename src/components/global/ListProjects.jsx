import { memo } from "react";
import { useNavigate } from "react-router-dom";
import useBreakpoint from "../../hooks/useBreakpoint";
import { getRandNum } from "../../helpers";
import ListProjectsStyled from "../../styled/global/ListProjects.styled";
import Card from "./Card";

const ListProjects_ = ({ listData }) => {
  const navigate = useNavigate();

  const { xs } = useBreakpoint();

  const arrAtas = listData
    .map((_, idx) => idx + 1)
    ?.reduce((acc, curr) => {
      return [...acc, curr * 3 - 1];
    }, []);

  return (
    <ListProjectsStyled>
      {listData?.map((_, idx) => {
        return (
          <Card
            onClick={() => {
              navigate(`/project/${1}`);
            }}
            width={xs ? 140 : 360}
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
    </ListProjectsStyled>
  );
};

const ListProjects = memo(ListProjects_);
export default ListProjects;
