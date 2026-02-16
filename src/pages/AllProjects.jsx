import { memo, useMemo } from "react";
import AllProjectsStyled from "../styled/all-projects/AllProjects.styled";
import Icons from "../components/global/Icons";
import ListProjects from "../components/global/ListProjects";

const AllProjects_ = ({ title, listData, styleContainer, extraContent }) => {
  const datas = useMemo(() => {
    if (typeof listData !== "undefined") {
      return listData;
    }

    return Array.from({ length: 6 });
  }, [listData]);

  return (
    <AllProjectsStyled $style={styleContainer}>
      <section className="ap">
        <h2 className="ap__title-section">
          {title || "All Projects"}
          <Icons type="cat-foot-print" className="ap__title-section-icon" />
        </h2>

        <ListProjects listData={datas} />

        {extraContent && extraContent}
      </section>
    </AllProjectsStyled>
  );
};

const AllProjects = memo(AllProjects_);
export default AllProjects;
