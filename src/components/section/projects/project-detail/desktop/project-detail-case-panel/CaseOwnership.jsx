import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { CaseOwnership as MobileCaseOwnership } from "../../mobile/project-detail-case-panel/CaseOwnership";
import { UserCheck } from "lucide-react";

export const CaseOwnership = ({ project }) => {
  const caseStudy = project?.caseStudy;
  if (!caseStudy?.ownership) return null;

  return (
    <ProjectDetailCaseSection id="ownership" icon={UserCheck} title="Ownership">
      <MobileCaseOwnership project={project} />
    </ProjectDetailCaseSection>
  );
};
