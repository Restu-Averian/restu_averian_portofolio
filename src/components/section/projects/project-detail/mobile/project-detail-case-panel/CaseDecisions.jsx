import { useTranslation } from "@/i18n";

export const CaseDecisions = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  if (!caseStudy?.decisions?.length) return null;

  return (
    <div className="space-y-4">
      {caseStudy.decisions.map((item, index) => {
        const titleText = item.title?.__i18n
          ? t(item.title.key, item.title.default)
          : item.title;

        const descText = item.desc?.__i18n
          ? t(item.desc.key, item.desc.default)
          : (item.desc ?? "");

        return (
          <div
            key={item.desc?.key || item.descKey || index}
            className="space-y-1"
          >
            <h4 className="font-semibold text-porto-text">{titleText}</h4>

            <p>{descText}</p>
          </div>
        );
      })}
    </div>
  );
};
