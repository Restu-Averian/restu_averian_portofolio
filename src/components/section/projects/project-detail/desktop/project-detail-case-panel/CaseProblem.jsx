import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { CaseDefault } from "../../mobile/project-detail-case-panel/CaseDefault";
import { CircleAlert } from "lucide-react";

export const CaseProblem = ({ project }) => {
  const caseStudy = project?.caseStudy;
  if (!caseStudy?.problem?.length) return null;

  return (
    <ProjectDetailCaseSection id="problem" icon={CircleAlert} title="Problem">
      <CaseDefault project={project} activeTab="problem" />
    </ProjectDetailCaseSection>
  );
};
