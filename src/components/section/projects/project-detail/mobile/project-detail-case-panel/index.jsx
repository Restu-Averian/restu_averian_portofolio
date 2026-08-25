import { CaseTech } from "./CaseTech";
import { CaseOwnership } from "./CaseOwnership";
import { CaseContributions } from "./CaseContributions";
import { CaseDefault } from "./CaseDefault";
import { CaseDecisions } from "./CaseDecisions";
import { CaseChallenges } from "./CaseChallenges";

export const ProjectDetailCasePanel = ({ activeTab, project }) => {
  switch (activeTab) {
    case "tech":
      return <CaseTech project={project} />;
    case "ownership":
      return <CaseOwnership project={project} />;
    case "contributions":
      return <CaseContributions project={project} />;
    case "decisions":
      return <CaseDecisions project={project} />;
    case "challenges":
      return <CaseChallenges project={project} />;
    default:
      return <CaseDefault project={project} activeTab={activeTab} />;
  }
};
