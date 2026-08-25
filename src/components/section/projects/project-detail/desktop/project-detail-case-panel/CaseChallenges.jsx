import { ProjectDetailCaseSection } from "../ProjectDetailCaseSection";
import { Wrench } from "lucide-react";
import { useTranslation } from "@/i18n";

export const CaseChallenges = ({ project }) => {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  if (!caseStudy?.challenges?.length) return null;

  return caseStudy.challenges.map((item, index) => (
    <ProjectDetailCaseSection
      key={item.challengeKey ?? index}
      id={index === 0 ? "challenges" : `challenges-${index}`}
      icon={Wrench}
      title={`Challenge ${index + 1}`}
    >
      <p>
        <span className="font-semibold text-porto-text">Challenge:</span>{" "}
        {t(item.challengeKey, item.defaultChallenge)}
      </p>
      <p>
        <span className="font-semibold text-porto-text">Solution:</span>{" "}
        {t(item.solutionKey, item.defaultSolution)}
      </p>
    </ProjectDetailCaseSection>
  ));
};
