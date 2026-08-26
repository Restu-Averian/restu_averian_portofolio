import { useTranslation } from "@/i18n";
import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { CaseTech as MobileCaseTech } from "../../mobile/project-detail-case-panel/CaseTech";
import { Route } from "lucide-react";

export const CaseTech = ({ project }) => {
  const { t } = useTranslation();
  if (!project?.tags?.length) return null;

  return (
    <ProjectDetailCaseSection
      id="tech"
      icon={Route}
      title={t("TechStack", "Tech Stack")}
    >
      <MobileCaseTech project={project} />
    </ProjectDetailCaseSection>
  );
};
