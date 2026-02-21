import { memo } from "react";
import { useNavigate } from "react-router-dom";
import ListProjectsStyled from "../../styled/global/ListProjects.styled";
import Card from "./card/Card";

const ListProjects_ = ({ listData }) => {
  const navigate = useNavigate();

  return (
    <ListProjectsStyled>
      {listData?.map((item, idx) => {
        return (
          <Card
            imgSrc={item?.img}
            onClick={() => {
              navigate(`/project/${item?.id}`);
            }}
            key={idx}
            title={item?.title}
            subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
      accusantium soluta adipisci tenetur. Repellendus tempore delectus eum
      consectetur laborum, ducimus aperiam quisquam animi modi exercitationem
      itaque velit deleniti numquam deserunt?"
            techStacks={item?.techStacks}
          />
        );
      })}
    </ListProjectsStyled>
  );
};

const ListProjects = memo(ListProjects_);
export default ListProjects;
