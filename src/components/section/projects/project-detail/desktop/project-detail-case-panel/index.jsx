import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { CaseTech } from "../../mobile/project-detail-case-panel/CaseTech";
import { CaseOwnership } from "../../mobile/project-detail-case-panel/CaseOwnership";
import { CaseContributions } from "../../mobile/project-detail-case-panel/CaseContributions";
import { CaseDefault } from "../../mobile/project-detail-case-panel/CaseDefault";
import { CircleAlert, GitBranch, Home, ListChecks, Route, Target, UserCheck, Wrench } from "lucide-react";
import { useTranslation } from "@/i18n";

export const ProjectDetailCasePanel = ({ activeTab, project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  switch (activeTab) {
    case "overview":
      if (!caseStudy?.overview?.length) return null;
      return (
        <ProjectDetailCaseSection id="overview" icon={Home} title="Overview">
          <CaseDefault project={project} activeTab="overview" />
        </ProjectDetailCaseSection>
      );

    case "problem":
      if (!caseStudy?.problem?.length) return null;
      return (
        <ProjectDetailCaseSection id="problem" icon={CircleAlert} title="Problem">
          <CaseDefault project={project} activeTab="problem" />
        </ProjectDetailCaseSection>
      );

    case "ownership":
      if (!caseStudy?.ownership) return null;
      return (
        <ProjectDetailCaseSection id="ownership" icon={UserCheck} title="Ownership">
          <CaseOwnership project={project} />
        </ProjectDetailCaseSection>
      );

    case "contributions":
      if (!caseStudy?.contributions?.length) return null;
      return (
        <ProjectDetailCaseSection id="contributions" icon={ListChecks} title="Contributions">
          <CaseContributions project={project} />
        </ProjectDetailCaseSection>
      );

    case "decisions":
      if (!caseStudy?.decisions?.length) return null;
      return caseStudy.decisions.map((item, index) => (
        <ProjectDetailCaseSection
          key={item.descKey ?? index}
          id={index === 0 ? "decisions" : `decisions-${index}`}
          icon={GitBranch}
          title={item.titleKey ? t(item.titleKey, item.title) : item.title}
        >
          <p>{t(item.descKey, item.defaultDesc)}</p>
        </ProjectDetailCaseSection>
      ));

    case "challenges":
      if (!caseStudy?.challenges?.length) return null;
      return caseStudy.challenges.map((item, index) => (
        <ProjectDetailCaseSection
          key={item.challengeKey ?? index}
          id={index === 0 ? "challenges" : `challenges-${index}`}
          icon={Wrench}
          title={`Challenge ${index + 1}`}
        >
          <p>
            <span className="font-semibold text-porto-text">Challenge:</span>{" "}
            {t(item.challengeKey, item.defaultChallenge)}
          </p>
          <p>
            <span className="font-semibold text-porto-text">Solution:</span>{" "}
            {t(item.solutionKey, item.defaultSolution)}
          </p>
        </ProjectDetailCaseSection>
      ));

    case "outcome":
      if (!caseStudy?.outcome?.length) return null;
      return (
        <ProjectDetailCaseSection id="outcome" icon={Target} title="Outcome">
          <CaseDefault project={project} activeTab="outcome" />
        </ProjectDetailCaseSection>
      );

    case "tech":
      if (!project?.tags?.length) return null;
      return (
        <ProjectDetailCaseSection id="tech" icon={Route} title="Tech Stack">
          <CaseTech project={project} />
        </ProjectDetailCaseSection>
      );

    default:
      return null;
  }
};
