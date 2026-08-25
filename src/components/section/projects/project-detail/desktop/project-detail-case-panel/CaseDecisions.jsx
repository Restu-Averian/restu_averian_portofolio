import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { GitBranch } from "lucide-react";
import { useTranslation } from "@/i18n";

export const CaseDecisions = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

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
};
