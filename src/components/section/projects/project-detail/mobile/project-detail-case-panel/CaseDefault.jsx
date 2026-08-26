import { useTranslation } from "@/i18n";

export const CaseDefault = ({ project, activeTab }) => {
  const { t } = useTranslation();

  const items = project?.caseStudy?.[activeTab] ?? [];

  if (!items.length) {
    const descDetailText = project?.descDetail?.__i18n
      ? t(project.descDetail.key, project.descDetail.default)
      : (project?.descDetailKey
          ? t(project.descDetailKey, project.descDetail)
          : (project?.descDetail || (project?.desc?.__i18n ? t(project.desc.key, project.desc.default) : project?.desc) || ""));

    return <p>{descDetailText}</p>;
  }

  return items.map((item, index) => (
    <p key={item?.key || index}>
      {item?.__i18n
        ? t(item.key, item.default)
        : item}
    </p>
  ));
};
