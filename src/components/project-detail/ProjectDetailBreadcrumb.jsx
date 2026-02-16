import { memo } from "react";
import { Flex } from "../global/Layout";
import Icons from "../global/Icons";
import { useNavigate } from "react-router-dom";

const ProjectDetailBreadcrumb_ = () => {
  const navigate = useNavigate();

  return (
    <Flex className="pd__breadcrumb">
      <Icons
        className="pd__breadcrumb-iconback"
        type="back-icon-cat"
        onClick={() => {
          navigate("/project");
        }}
      />

      <Flex className="pd__breadcrumb-list">
        <p
          className="pd__breadcrumb-list-item"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>

        <Icons
          type="cat-double-foot-print"
          className="pd__breadcrumb-list-item-separator"
        />

        <p
          className="pd__breadcrumb-list-item"
          onClick={() => {
            navigate("/project");
          }}
        >
          Projects
        </p>

        <Icons
          type="cat-double-foot-print"
          className="pd__breadcrumb-list-item-separator"
        />

        <p className="pd__breadcrumb-list-item">Detail Projects</p>
      </Flex>
    </Flex>
  );
};

const ProjectDetailBreadcrumb = memo(ProjectDetailBreadcrumb_);
export default ProjectDetailBreadcrumb;
