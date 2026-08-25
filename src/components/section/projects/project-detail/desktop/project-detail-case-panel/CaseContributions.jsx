import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { CaseContributions as MobileCaseContributions } from "../../mobile/project-detail-case-panel/CaseContributions";
import { ListChecks } from "lucide-react";

export const CaseContributions = ({ project }) => {
  const caseStudy = project?.caseStudy;
  if (!caseStudy?.contributions?.length) return null;

  return (
    <ProjectDetailCaseSection
      id="contributions"
      icon={ListChecks}
      title="Contributions"
    >
      <MobileCaseContributions project={project} />
    </ProjectDetailCaseSection>
  );
};
