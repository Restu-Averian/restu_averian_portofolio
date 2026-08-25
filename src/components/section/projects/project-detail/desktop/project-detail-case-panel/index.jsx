import { CaseOverview } from "./CaseOverview";
import { CaseProblem } from "./CaseProblem";
import { CaseOwnership } from "./CaseOwnership";
import { CaseContributions } from "./CaseContributions";
import { CaseDecisions } from "./CaseDecisions";
import { CaseChallenges } from "./CaseChallenges";
import { CaseOutcome } from "./CaseOutcome";
import { CaseTech } from "./CaseTech";

export const ProjectDetailCasePanel = ({ activeTab, project }) => {
  switch (activeTab) {
    case "overview":
      return <CaseOverview project={project} />;
    case "problem":
      return <CaseProblem project={project} />;
    case "ownership":
      return <CaseOwnership project={project} />;
    case "contributions":
      return <CaseContributions project={project} />;
    case "decisions":
      return <CaseDecisions project={project} />;
    case "challenges":
      return <CaseChallenges project={project} />;
    case "outcome":
      return <CaseOutcome project={project} />;
    case "tech":
      return <CaseTech project={project} />;
    default:
      return null;
  }
};
