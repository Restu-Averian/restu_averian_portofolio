import { useTranslation } from "@/i18n";

export const CaseContributions = ({ project }) => {
  const { t } = useTranslation();

  const items = project?.caseStudy?.contributions ?? [];

  if (!items.length) return null;

  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => (
        <li key={item.key ?? index} className="flex gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-porto-btn" />

          <span>{t(item.key, item.defaultText)}</span>
        </li>
      ))}
    </ul>
  );
};
