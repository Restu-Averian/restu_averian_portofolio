import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { GitBranch } from "lucide-react";
import { useTranslation } from "@/i18n";

export const CaseDecisions = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  if (!caseStudy?.decisions?.length) return null;

  return (
    <ProjectDetailCaseSection
      id="decisions"
      icon={GitBranch}
      title={t("EngineeringDecisions", "Decisions")}
    >
      {caseStudy.decisions.map((item, index) => (
        <div key={item.descKey ?? index} className="space-y-2">
          <h4 className="font-semibold text-porto-text">
            {item.titleKey ? t(item.titleKey, item.title) : item.title}
          </h4>
          <p>{t(item.descKey, item.defaultDesc)}</p>
        </div>
      ))}
    </ProjectDetailCaseSection>
  );
};
