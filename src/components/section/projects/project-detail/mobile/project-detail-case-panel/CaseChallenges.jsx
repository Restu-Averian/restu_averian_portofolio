import { useTranslation } from "@/i18n";

export const CaseChallenges = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  if (!caseStudy?.challenges?.length) return null;

  return (
    <div className="space-y-4">
      {caseStudy.challenges.map((item, index) => (
        <div key={item.challengeKey ?? index} className="space-y-1">
          <h4 className="font-semibold text-porto-text">
            Challenge {index + 1}
          </h4>
          <p>
            <span className="font-semibold text-porto-text">Challenge:</span>{" "}
            {t(item.challengeKey, item.defaultChallenge)}
          </p>
          <p>
            <span className="font-semibold text-porto-text">Solution:</span>{" "}
            {t(item.solutionKey, item.defaultSolution)}
          </p>
        </div>
      ))}
    </div>
  );
};
