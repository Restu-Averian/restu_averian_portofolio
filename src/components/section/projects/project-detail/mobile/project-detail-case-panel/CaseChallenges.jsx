import { useTranslation } from "@/i18n";

export const CaseChallenges = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  if (!caseStudy?.challenges?.length) return null;

  return (
    <div className="space-y-4">
      {caseStudy.challenges.map((item, index) => {
        const challengeText = item.challenge?.__i18n
          ? t(item.challenge.key, item.challenge.default)
          : (item.challenge ?? "");

        const solutionText = item.solution?.__i18n
          ? t(item.solution.key, item.solution.default)
          : (item.solution ?? "");

        return (
          <div
            key={item.challenge?.key || item.challengeKey || index}
            className="space-y-1"
          >
            <h4 className="font-semibold text-porto-text">
              {t("ChallengeNumber", "Challenge {{number}}", {
                number: index + 1,
              })}
            </h4>

            <p>
              <span className="font-semibold text-porto-text">
                {t("ChallengeLabel", "Challenge")}:
              </span>{" "}
              {challengeText}
            </p>
            <p>
              <span className="font-semibold text-porto-text">
                {t("SolutionLabel", "Solution")}:
              </span>{" "}
              {solutionText}
            </p>
          </div>
        );
      })}
    </div>
  );
};
