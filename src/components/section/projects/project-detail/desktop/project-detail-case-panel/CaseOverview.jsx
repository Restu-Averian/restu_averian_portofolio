import { useTranslation } from "@/i18n";
import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { CaseDefault } from "../../mobile/project-detail-case-panel/CaseDefault";
import { Home } from "lucide-react";

export const CaseOverview = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;
  if (!caseStudy?.overview?.length) return null;

  return (
    <ProjectDetailCaseSection
      id="overview"
      icon={Home}
      title={t("Overview", "Overview")}
    >
      <CaseDefault project={project} activeTab="overview" />
    </ProjectDetailCaseSection>
  );
};
