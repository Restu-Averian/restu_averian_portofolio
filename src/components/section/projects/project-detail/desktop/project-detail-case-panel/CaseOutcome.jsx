import { useTranslation } from "@/i18n";
import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { CaseDefault } from "../../mobile/project-detail-case-panel/CaseDefault";
import { Target } from "lucide-react";

export const CaseOutcome = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;
  if (!caseStudy?.outcome?.length) return null;

  return (
    <ProjectDetailCaseSection
      id="outcome"
      icon={Target}
      title={t("CaseOutcome", "Outcome")}
    >
      <CaseDefault project={project} activeTab="outcome" />
    </ProjectDetailCaseSection>
  );
};
