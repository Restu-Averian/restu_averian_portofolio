import { memo } from "react";
import MobileDrawer from "./mobile";
import DesktopDialog from "./desktop";
import useIsMobile from "@/hooks/useIsMobile";

const ProjectDetail_ = () => {
  const isMobile = useIsMobile(1279);

  if (isMobile) {
    return <MobileDrawer />;
  }

  return <DesktopDialog />;
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
