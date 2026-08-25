import { useTranslation } from "@/i18n";

export const CaseDefault = ({ project, activeTab }) => {
  const { t } = useTranslation();

  const items = project?.caseStudy?.[activeTab] ?? [];

  if (!items.length) {
    return (
      <p>
        {project?.descDetailKey
          ? t(project.descDetailKey, project.descDetail)
          : project?.descDetail || project?.desc || ""}
      </p>
    );
  }

  return items.map((item, index) => (
    <p key={item.key ?? index}>{t(item.key, item.defaultText)}</p>
  ));
};
