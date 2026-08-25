import { memo } from "react";
import ModalDetailProject from "@/components/modal/detail-project";
import { useProjectsContext } from "@/context/ProjectsCtxProvider";

const ProjectsModalDetail_ = () => {
  const { showModalDetail, handleCloseModal, detailProjectRef } =
    useProjectsContext();

  return (
    <ModalDetailProject
      open={showModalDetail}
      onClose={handleCloseModal}
      project={detailProjectRef?.current}
    />
  );
};

const ProjectsModalDetail = memo(ProjectsModalDetail_);
export default ProjectsModalDetail;
