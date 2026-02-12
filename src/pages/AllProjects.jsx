import { memo } from "react";
import AllProjectsStyled from "../styled/all-projects/AllProjects.styled";
import Icons from "../components/global/Icons";
import ListProjects from "../components/global/ListProjects";
import useBreakpoint from "../hooks/useBreakpoint";

const AllProjects_ = () => {
  const listData = Array.from({ length: 6 });

  const { xs } = useBreakpoint();

  return (
    <AllProjectsStyled>
      <h2 className="title-section">
        All Projects
        <Icons
          type="cat-foot-print"
          style={{
            width: xs ? 32 : 48,
            height: 47,
            position: "absolute",
            ...(xs
              ? {
                  top: 12,
                  transform: "rotate(24deg)",
                }
              : {
                  bottom: 0,
                }),
          }}
        />
      </h2>

      <ListProjects listData={listData} />
    </AllProjectsStyled>
  );
};

const AllProjects = memo(AllProjects_);
export default AllProjects;
