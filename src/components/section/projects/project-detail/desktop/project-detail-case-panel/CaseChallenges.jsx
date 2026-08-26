import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { Wrench } from "lucide-react";
import { useTranslation } from "@/i18n";

export const CaseChallenges = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  if (!caseStudy?.challenges?.length) return null;

  return (
    <ProjectDetailCaseSection
      id="challenges"
      icon={Wrench}
      title={t("CaseChallenges", "Challenges")}
    >
      {caseStudy.challenges.map((item, index) => (
        <div key={item.challengeKey ?? index} className="space-y-2">
          <h4 className="font-semibold text-porto-text">
            {t("ChallengeNumber", "Challenge {{number}}", {
              number: index + 1,
            })}
          </h4>
          <p>
            <span className="font-semibold text-porto-text">
              {t("ChallengeLabel", "Challenge")}:
            </span>{" "}
            {t(item.challengeKey, item.defaultChallenge)}
          </p>
          <p>
            <span className="font-semibold text-porto-text">
              {t("SolutionLabel", "Solution")}:
            </span>{" "}
            {t(item.solutionKey, item.defaultSolution)}
          </p>
        </div>
      ))}
    </ProjectDetailCaseSection>
  );
};
