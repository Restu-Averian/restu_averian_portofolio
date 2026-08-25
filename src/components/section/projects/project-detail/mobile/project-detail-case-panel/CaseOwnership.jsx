import { useTranslation } from "@/i18n";

export const CaseOwnership = ({ project }) => {
  const { t } = useTranslation();
  const ownership = project?.caseStudy?.ownership;

  if (!ownership) return null;

  return <p>{t(ownership.key, ownership.defaultText)}</p>;
};
