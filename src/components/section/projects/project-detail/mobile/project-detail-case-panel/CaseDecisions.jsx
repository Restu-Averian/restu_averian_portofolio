import { useTranslation } from "@/i18n";

export const CaseDecisions = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  if (!caseStudy?.decisions?.length) return null;

  return (
    <div className="space-y-4">
      {caseStudy.decisions.map((item, index) => (
        <div key={item.descKey ?? index} className="space-y-1">
          <h4 className="font-semibold text-porto-text">
            {item.titleKey ? t(item.titleKey, item.title) : item.title}
          </h4>
          <p>{t(item.descKey, item.defaultDesc)}</p>
        </div>
      ))}
    </div>
  );
};
